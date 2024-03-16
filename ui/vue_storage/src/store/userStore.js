import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: 733,
      username: "brielFrancisco",
      email: "brielsfrancisco@gmail.com"
    },
    isLogged: true
  }),
  actions: {
    signout(){
      this.isLogged = false,
      this.user = null
    }
  }
})