import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';


import styles from "./styles";

const Survey = ({
  exclusivePostId,
  studentId,
  topics }) => {

  const [pollTopics, setPollTopics] = useState([]);
  const [voted, setVoted] = useState(false);
  const [topicVoted, setTopicVoted] = useState({})
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    setPollTopics(topics);
    setVoted(topics.some((topic) => topic.hasVote === true));
    setTopicVoted(topics.find((topic) => topic.hasVote));
    setTotalVotes(topics.reduce((total, current) => total += current.votes, 0));
  }, [])

  const vote = (topicVoted) => {
    const newPollTopics = pollTopics.map((pollTopic) => {
      if (pollTopic.id === topicVoted.id) {
        pollTopic.votes++;
        pollTopic.hasVote = true;
      }
      return pollTopic;
    })
    setTopicVoted(topicVoted);
    setPollTopics(newPollTopics);
    setTotalVotes(totalVotes + 1);
    setVoted(true)

    /*TODO
      Chamar POST do voto. BackEnd aguarda por:
      - studentId: chega via props;
      - pollTopicsId: no state 'topicVoted'
      - exclusivePostId : chega via props;
    */
  }

  const getPercentage = (votes) => ((votes / totalVotes) * 100).toFixed(2);

  return (
    <View style={styles.container}>
      {pollTopics && pollTopics.map((pollTopic) => (
        <View
          key={pollTopic.id}
          style={[
            styles.topicContainer,
            { backgroundColor: topicVoted && topicVoted.id === pollTopic.id ? '#BFB372' : '#EEE' }
          ]}
        >
          {voted && <View style={[
            styles.percentBar,
            { width: `${getPercentage(pollTopic.votes)}%` }
          ]}>
          </View>}
          <Pressable
            onPress={() => vote(pollTopic)}
            disabled={voted ? true : false}
          >
            <View style={styles.boxText}>
              <Text
                numberOfLines={1}
                style={[
                  styles.topicText,
                  { opacity: topicVoted && topicVoted.id !== pollTopic.id ? 0.3 : 1 }
                ]}>
                {pollTopic.description}
              </Text>
              <View style={styles.percentBox}>
                {topicVoted && topicVoted.id === pollTopic.id && <AntDesign
                  name="checkcircle"
                  size={16}
                  color="#0b0b0b"
                />}
                <Text style={styles.percentText}>
                  {voted && (getPercentage(pollTopic.votes) + '%')}
                </Text>
              </View>
            </View>
          </Pressable>

        </View>
      ))
      }
    </View >
  );
}

export default Survey;
