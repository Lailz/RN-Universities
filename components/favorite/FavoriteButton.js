import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FavoriteButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="heart"
      size={26}
      color="purple"
      onPress={() => navigation.navigate("Favorites")}
    />
  );
};

export default FavoriteButton;
