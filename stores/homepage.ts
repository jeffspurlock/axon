import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomepageStore = defineStore("data", {
  state: () => ({
    blocks: [
      {
        id: "development",
        title: "Web Development",
        img: "code",
        alt: "Image of characters: </>",
        link: "/development",
        body: "webdevelopment",
        selected: false
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        img: "design",
        alt: "Line drawing of a browser window and page layout",
        link: "/design",
        body: "",
        selected: false
      },
      {
        id: "microservices",
        title: "Microservices",
        img: "lambda",
        alt: "AWS Lambda Logo",
        link: "/microservices",
        body: "",
        selected: false
      },
      {
        id: "shopify",
        title: "Shopify",
        img: "shopify",
        alt: "Shopify Logo",
        link: "/shopify",
        body: "",
        selected: false
      },
      {
        id: "node",
        title: "Node.js",
        img: "node",
        alt: "Node.js logo",
        link: "/node",
        body: "",
        selected: false
      },
      {
        id: "vue",
        title: "Vue.js",
        img: "vue",
        alt: "Vue.js logo",
        link: "/vue",
        body: "",
        selected: false
      },
      {
        id: "nuxt",
        title: "Nuxt.js",
        img: "nuxt",
        alt: "Nuxt.js logo",
        link: "/nuxt",
        body: "",
        selected: false
      },
      {
        id: "marketing",
        title: "Digital Marketing",
        img: "marketing",
        alt: "Logos for Facebook, Google Ads, and Bing Ads",
        link: "/marketing",
        body: "",
        selected: false
      }
    ]
  }),
  actions: {
    getServiceContent( service: String){
      var activeService = () => {
        this.blocks.forEach((block) => {
          if(block.id == service){
            return block
          } 
        }
        )
      }
      return activeService
    }
  }
})