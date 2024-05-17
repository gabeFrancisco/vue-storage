import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      username: "",
    },
    isLogged: true,
  }),
  actions: {
    signin(username, password) {
      const user = {
        id: 773,
        username: username,
        email: "brielsfrancisco@gmail.com",
        token: "as234#sdf34$fsdjgja1088412",
      };
      localStorage.setItem("user", JSON.stringify(user));

      this.user = user;
      this.isLogged = true;
    },
    signout() {
      localStorage.removeItem("user");
      (this.isLogged = false), (this.user = null);
    },
    loadUser() {
      const user = localStorage.getItem("user");
      if (user) {
        console.log(JSON.parse(user));
        // this.user.username = user.username;
        // this.isLogged = true;
      }
    },
  },
});
