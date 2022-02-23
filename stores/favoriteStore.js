import { makeAutoObservable } from "mobx";

class FavoriteStore {
  favorites = [
    {
      web_pages: ["http://www.kuniv.edu.kw/"],
      country: "Kuwait",
      "state-province": null,
      name: "Kuwait University",
      domains: ["kuniv.edu.kw"],
      alpha_two_code: "KW",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
}

const favoriteStore = new FavoriteStore();
export default favoriteStore;
