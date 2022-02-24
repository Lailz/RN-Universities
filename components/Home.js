import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { VStack } from "native-base";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://assets.website-files.com/5d4d6eb7574a78717cd85ee7/602f150904194561a3600353_purple-blob.png",
      }}
      style={styles.container}
    >
      <VStack style={styles.cover}>
        <Text style={styles.title}>Uni Finder</Text>
        <Text
          style={styles.subTitle}
          onPress={() => navigation.navigate("List")}
        >
          Press here to continue
        </Text>
      </VStack>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
  },
  title: {
    flex: 4,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 40,
    color: "purple",
  },
  subTitle: {
    flex: 2,
    marginTop: 10,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontSize: 20,
    color: "black",
  },
});
