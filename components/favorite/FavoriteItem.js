import { StyleSheet, Text, Image } from "react-native";

import { HStack, VStack, Avatar } from "native-base";

export default function ProductItem({ favorite }) {
  return (
    <HStack style={styles.container} space="3">
      <Avatar
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCzen2e0Vb8Mp8LbGBjbde2XHfDBl6P-PVA3bxQ225HJBmbSIRSD9FgG5j6zL_PTHhaA&usqp=CAU",
        }}
      />
      <VStack>
        <Text style={styles.name}>{favorite.name}</Text>
        <Text style={styles.name}>{favorite.country}</Text>
      </VStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
    borderBottomColor: "#ddff",
    borderBottomWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    width: 300,
    left: 10,
  },
});
