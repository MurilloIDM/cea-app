import { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


import styles from "./styles";


const Media = ({ data }) => {


  const [slideActive, setSlideActive] = useState(0);

  const getActiveSlide = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== slideActive) setSlideActive(slide);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={getActiveSlide}
      >
        {data && data.map((media) => (
          <Image
            key={media.id}
            source={{ uri: media.url }}
            style={styles.img}
          />
        ))
        }
      </ScrollView>
      {data.length > 1 && <View style={styles.pagination}>
        {data.map((media, i) => (
          <FontAwesome
            key={media.id}
            name="circle"
            size={8}
            color={i === slideActive ? "#0B0B0B" : "lightgray"}
            style={styles.paginationText}
          />
        ))}

      </View>}
    </View>
  );
}

export default Media;
