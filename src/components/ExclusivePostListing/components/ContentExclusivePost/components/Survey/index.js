import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const Survey = ({ exclusivePostId, topics, handleVote }) => {
  const [voted, setVoted] = useState(false);
  const [topicVoted, setTopicVoted] = useState({})
  const [totalVotes, setTotalVotes] = useState(0);


  useEffect(() => {
    setVoted(topics.some((topic) => topic.hasVote === true));
    setTopicVoted(topics.find((topic) => topic.hasVote));
    setTotalVotes(topics.reduce((total, current) => total += current.votes, 0));
  }, [topics]);

  const vote = async (topicVoted) => {
    await handleVote(exclusivePostId, topicVoted?.id);
  }

  const getPercentage = (votes) => ((votes / totalVotes) * 100).toFixed(2);

  return (
    <View style={styles.container}>
      {topics && topics.map((pollTopic) => (
        <View
          key={pollTopic.id}
          style={[
            styles.topicContainer,
            { backgroundColor: topicVoted && topicVoted.id === pollTopic.id ? '#BFB372' : '#EEE' }
          ]}
        >
          {voted && <View style={[
            styles.percentBar,
            { width: `${pollTopic?.percentageVotes}%` }
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
                  {voted && (pollTopic?.percentageVotes + '%')}
                </Text>
              </View>
            </View>
          </Pressable>

        </View>
      ))}
    </View >
  );
}

export default Survey;
