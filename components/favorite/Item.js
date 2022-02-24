import { Text, Alert, Button, Linking, StyleSheet } from "react-native";

import { HStack, VStack, Avatar } from "native-base";
import { useCallback } from "react";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default function ProductItem({ fav }) {
  const { university } = fav;
  const domains = university.domains.map((domain, index) => (
    <OpenURLButton key={index} url={`https://${domain}`} style={styles.url}>
      {domain}
    </OpenURLButton>
  ));
  return (
    <HStack style={styles.container} space="3">
      <Avatar
        source={{
          uri: "https://media.istockphoto.com/vectors/education-book-logo-vector-design-vector-id1221128440?k=20&m=1221128440&s=612x612&w=0&h=Fuv907LF6eO9AGc7gRgg2a0MljpzYFoUsazjstEAOWg=",
        }}
      />

      <VStack>
        <Text style={styles.name}>{university.name}</Text>
        <HStack>{domains}</HStack>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#ddff",
    borderBottomWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    width: 250,
    left: 10,
    fontSize: 16,
  },
  url: {
    width: 250,
    left: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
