import { defineStore } from "pinia";
import  Leftnav  from "~/components/Leftnav.vue"
import  Blognav  from "~/components/Block.vue"

export const useGlobalState = defineStore("globalState", {
  state: () => ({
    themeProperties: {
        linesTop: 3,
        linesBottom: 3,
        delay: 80
    },
    navSelector: 'Leftnav'
  }),
  getters: {
    nav: (state) => { 
      switch(state.navSelector){
        case "Leftnav":
          return Leftnav
        case "Blognav":
          return Blognav
      }
     }
  },
  actions: {
    setLines(quantity: number ){
        this.themeProperties.linesTop = quantity;
        this.themeProperties.linesBottom = quantity;
    },
    setNav(nav: string){
      if(this.navSelector != nav){
        this.navSelector = nav;
      }
    }
  }
}) //TODO: finish refactoring for setNav globalstate action