import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalState = defineStore("globalState", {
  state: () => ({
    themeProperties: {
        linesTop: 3,
        linesBottom: 3,
        delay: 80
    }
  }),
  actions: {
    setLines(quantity: number ){
        this.themeProperties.linesTop = quantity;
        this.themeProperties.linesBottom = quantity;
    },
    setLinesWithDelay(quantity: number, delay: number | null = this.themeProperties.delay){
        setTimeout(()=>{
            this.setLines(quantity)
        }, delay)
    }
  }
})