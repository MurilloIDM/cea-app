import { useState } from "react";
import { View, Text, Pressable } from "react-native";


import styles from "./styles";

const DATAMOCK = [
  {
    id: 1,
    description: "Opção A",
    votes: 10,
    percentageVotes: 10,
    hasVote: false
  },
  {
    id: 2,
    description: "Opção B",
    votes: 30,
    percentageVotes: 30,
    hasVote: false
  },
  {
    id: 3,
    description: "Opção C",
    votes: 40,
    percentageVotes: 40,
    hasVote: false
  },
  {
    id: 4,
    description: "Opção D",
    votes: 20,
    percentageVotes: 20,
    hasVote: false
  },

]


const Survey = (data) => {

  data = DATAMOCK;


  return (
    <View style={styles.container}>
      {data && data.map((pollTopic) => (
        <View style={styles.topicContainer}>
          <Pressable style={styles.topic}>
            <Text style={styles.topicText}>
              {pollTopic.description}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

export default Survey;
