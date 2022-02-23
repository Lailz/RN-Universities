import { makeAutoObservable } from "mobx";
import axios from "axios";

class UniversityStore {
  uni = [];
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  fetchUniversities = async (country) => {
    try {
      //inject country into the url
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=Kuwait"
      );
      this.uni = response.data;
    } catch (error) {
      console.log("UniversityStore -> fetchUniversities -> error", error);
    }
  };
}

const universityStore = new UniversityStore();
universityStore.fetchUniversities();

export default universityStore;
