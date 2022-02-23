import favoriteStore from "../stores/favoriteStore";
import { observer } from "mobx-react";
import Item from "./Item";
import { ScrollView } from "native-base";
import { StyleSheet, ImageBackground } from "react-native";

const FavoriteList = () => {
  const favoriteList = favoriteStore.favorites.map((favorite, index) => (
    <Item key={index} favorite={favorite} />
  ));

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          "https://assets.website-files.com/5f9985d8119581bfd1d4a6e7/5f9985d81195817b2bd4a754_blob-hero.png",
      }}
    >
      <ScrollView style={styles.container}>{favoriteList}</ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
});
export default observer(FavoriteList);
