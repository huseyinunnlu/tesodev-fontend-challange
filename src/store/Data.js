import { defineStore } from "pinia";
import { data, news } from "@/core/mocks/index";
export const useDataStore = defineStore("dataStore", {
  state: () => {
    return {
      autocompleteData: [],
      news: news.news,
      mapSettings: {
        apiKey: "890d2640-d256-4ce3-9044-4418bcc5f80e",
        lang: "tr_TR",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
        coords: [54.82896654088406, 39.831893822753904],
      },
    };
  },
  actions: {
    filterAutocomplete(keyword) {
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
