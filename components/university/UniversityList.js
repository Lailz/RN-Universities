import universityStore from "../../stores/universityStore";
import { observer } from "mobx-react";
import Item from "./Item";
import { ScrollView } from "native-base";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const UniversityList = () => {
  const universitiesList = universityStore.uni.map((uni, index) => (
    <Item key={index} uni={uni} />
  ));

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://www.razoyo.com/img/home/Purple-Blob-1@3x.png",
      }}
    >
      <ScrollView style={styles.container}>{universitiesList}</ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
});
export default observer(UniversityList);
