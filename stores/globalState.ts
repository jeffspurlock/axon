import { defineStore } from "pinia";
export const useGlobalState = defineStore("globalState", {
  state: () => ({
    themeProperties: {
        linesTop: 3,
        linesBottom: 3,
        delay: 80
    },
    navSelector: 'Leftnav'
  }),
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
})