<script setup lang="ts">
const links: Array<Object> = [
  {
    label: "Who We Are",
    link: "/about/",
    setSelected: false
  },
  {
    label: "What We Do",
    link: "/services/development/",
    setSelected: true
  },
  {
    label: "Blog",
    link: "/blog/",
    setSelected: false
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy/",
    setSelected: false
  },
  {
    label: "Contact",
    link: "/contact/",
    setSelected: false
  }
]


</script>

<template>
  <div class="footer-nav">
    <footerMenuItem v-for="menuItem in links" :item="menuItem" />
  </div>
</template>

<style scoped>
.footer-nav {
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 25px auto;
  justify-content: center;
}
</style>
