import favoriteStore from "../../stores/favoriteStore";
import { observer } from "mobx-react";
import Item from "./Item";
import { ScrollView } from "native-base";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const FavoriteList = () => {
  const favoritesList = favoriteStore.favorites.map((fav, index) => (
    <Item key={index} fav={fav} />
  ));

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://www.razoyo.com/img/home/Purple-Blob-1@3x.png",
      }}
    >
      <ScrollView style={styles.container}>{favoritesList}</ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
});
export default observer(FavoriteList);
