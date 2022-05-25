// import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

import styles from "./styles";


const Comments = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={32} color="#0b0b0b" />
        <Text style={styles.headerTitle}>
          Comentários
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Comments;