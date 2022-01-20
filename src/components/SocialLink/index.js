import { Image, Linking, Pressable } from "react-native";

const SocialLink = ({ pathImage, stylesImage, url }) => {
  const toOpen = () => Linking.openURL(url);

  return (
    <Pressable onPress={toOpen}>
      <Image
        source={pathImage}
        style={stylesImage}
      />
    </Pressable>
  );
}

export default SocialLink;
