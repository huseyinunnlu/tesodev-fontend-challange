import { defineStore } from "pinia";
import { data, news } from "@/core/mocks/index";
export const useDataStore = defineStore("dataStore", {
  state: () => {
    return {
      data: [],
      pagination: [],
    };
  },
  actions: {
    filter(keyword) {
      const jsonData = data.data;
      if (keyword.length > 2) {
        this.autocompleteData = jsonData
          .filter((item) => {
            const nameSurname = item.nameSurname.toLowerCase();
            const searchString = keyword.toLowerCase();
            return nameSurname.indexOf(searchString) > -1;
          })
          .slice(0, 4);
      } else {
        this.autocompleteData = [];
      }
    },
  },
});
