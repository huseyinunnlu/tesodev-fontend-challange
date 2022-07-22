import { defineStore } from "pinia";
import { data } from "@/core/mocks/index";
export const useResultStore = defineStore("resultStore", {
  state: () => {
    return {
      data: data.data,
      pagination: false,
    };
  },
  actions: {
    filter(query) {
      const jsonData = this.data;
      if (query?.keyword) {
        const data = jsonData.filter((item) => {
          const nameSurname = item.nameSurname.toLowerCase();
          const searchString = query?.keyword?.toLowerCase();
          return nameSurname.indexOf(searchString) > -1;
        });

        this.setPagination(data, query?.page || 1);

        data.sort((a, b) => {
          return this.sortData(a, b, query?.sort);
        });

        this.data = this.getPage(data, query?.page);
      } else {
        this.pagination = false;
        this.data = [];
      }
    },

    sortData(a, b, parameter = "") {
      let [column, order] = parameter.split("-") ?? null;

      if (!column || !order || !a[column] || !b[column]) {
        return;
      }

      let first = a[column].toString();
      let next = b[column].toString();

      if (order === "desc") {
        return first.localeCompare(next) || null;
      }

      if (order === "asc") {
        return next.localeCompare(first) || null;
      }
    },

    setPagination(data, currentPage = 1) {
      const pageItems = 4;
      const lenght = data.length;
      let page = parseInt(currentPage) || 1;
      const pageCount =
        Math.round(lenght / pageItems) == 0
          ? 1
          : Math.round(lenght / pageItems);
      const nextPage = page < pageCount ? page + 1 : page;

      this.pagination = {
        prev: page > 2 ? page - 1 : 1,
        next: nextPage,
        data: pageCount,
      };
    },

    getPage(data, page = 1) {
      const lastIndex = parseInt(page) * 4 || 1;
      const firstIndex = lastIndex - 4;
      return data.slice(firstIndex, lastIndex);
    },

    addItem(form) {
      this.data.unshift({
        nameSurname: form.nameSurname,
        email: form.email,
        country: form.country,
        city: form.city,
        company: null,
        date: null,
      });
    },
  },
});
