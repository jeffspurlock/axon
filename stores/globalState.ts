import { defineStore } from "pinia";
import { ref } from "vue";
import { Leftnav, Blognav } from "#build/components";

export const useGlobalState = defineStore("globalState", {
  state: () => ({
    themeProperties: {
        linesTop: 3,
        linesBottom: 3,
        delay: 80
    },
    navSelector: 'leftNav'
  }),
  getters: {
    nav: (state) => { return resolveComponent(state.navSelector) }
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