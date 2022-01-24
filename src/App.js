import React, { useEffect, useState } from "react";

import * as Font from "expo-font";
import { registerRootComponent } from "expo";
import { StyleSheet, ScrollView } from "react-native";

import Card from './components/Card';

const datas = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    text: `Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Aeliquam erat volutpat. Aeliquam erat volutpat.`,
    date: "21/01/2022",
    urlImage: "https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    text: `Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Aeliquam erat volutpat. Aeliquam erat volutpat.`,
    date: "21/01/2022",
    urlImage: "https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    text: `Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Aeliquam erat volutpat. Aeliquam erat volutpat.`,
    date: "21/01/2022",
    urlImage: "https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    text: `Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Aeliquam erat volutpat. Aeliquam erat volutpat.`,
    date: "21/01/2022",
    urlImage: "https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    text: `Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Quisque finibus libero et commodo gravida. Sed vel mauris non leo faucsibus consterequat id et turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl ex, finibus sit amet tristique non, porta non nibh. Aeliquam erat volutpat. Aeliquam erat volutpat. Aeliquam erat volutpat.`,
    date: "21/01/2022",
    urlImage: "https://www.senff.com.br/app/uploads/2018/05/paisagem-maravilhosa-wallpaper.jpg",
  }
]

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    });

    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded && (
    <ScrollView contentContainerStyle={{ alignItems: "center" }} style={styles.container}>
      {/* Teste seu componente aqui: */}
      {datas && datas.map((data) => {
        return (
          <Card
            key={data.id}
            data={data}
          />
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: "#BFB372"
  }
});

export default registerRootComponent(App);
