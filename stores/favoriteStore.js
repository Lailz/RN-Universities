import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class FavoriteStore {
  favorites = [];
  constructor() {
    makeAutoObservable(this);
  }
  addFavorite = async (university) => {
    try {
      const foundUni = this.favorites.find(
        (fav) => fav.university.name === university.name
      );
      if (foundUni) {
        foundUni.likes = foundUni.likes + 1;
      } else {
        const uni = { university, likes: 1 };
        this.favorites.push(uni);
      }
      await AsyncStorage.setItem("favorites", JSON.stringify(this.favorites));
    } catch (e) {
      console.log(e);
    }
  };
  fetchFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) this.favorites = JSON.parse(favorites);
      else {
        this.favorites = [];
      }
    } catch (e) {
      // error reading value
    }
  };
}

const favoriteStore = new FavoriteStore();
favoriteStore.fetchFavorites();
export default favoriteStore;
