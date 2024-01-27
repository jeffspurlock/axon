export const useHomepageStore = defineStore("data", {
  state: () => ({
    blocks: [
      {
        id: "development",
        title: "Web Development",
        img: "code",
        alt: "Image of characters: </>",
        link: "/services/development",
        selected: false
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        img: "design",
        alt: "Line drawing of a browser window and page layout",
        link: "/services/design",
        selected: false
      },
      {
        id: "microservices",
        title: "Microservices",
        img: "lambda",
        alt: "AWS Lambda Logo",
        link: "/services/microservices",
        selected: false
      },
      {
        id: "shopify",
        title: "Shopify",
        img: "shopify",
        alt: "Shopify Logo",
        link: "/services/shopify",
        selected: false
      },
      {
        id: "node",
        title: "Node.js",
        img: "node",
        alt: "Node.js logo",
        link: "/services/node",
        selected: false
      },
      {
        id: "vue",
        title: "Vue.js",
        img: "vue",
        alt: "Vue.js logo",
        link: "/services/vue",
        selected: false
      },
      {
        id: "nuxt",
        title: "Nuxt.js",
        img: "nuxt",
        alt: "Nuxt.js logo",
        link: "/services/nuxt",
        selected: false
      },
      {
        id: "marketing",
        title: "Digital Marketing",
        img: "marketing",
        alt: "Logos for Facebook, Google Ads, and Bing Ads",
        link: "/services/marketing",
        selected: false
      }
    ]
  }),
  actions: {
    setSelected(activeRoute: string){
      console.log(activeRoute)
      this.blocks.forEach((block) => {
        if(block.link == activeRoute){
          console.log("Success: " + block.link)
          block.selected = true
        } else {
          block.selected = false
        }
      })
    }
  }
})