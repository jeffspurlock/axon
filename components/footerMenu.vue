<script setup lang="ts">
const links: Array<Object> = [
  {
    label: "Who We Are",
    link: "about"
  },
  {
    label: "What We Do",
    link: "services/development"
  },
  {
    label: "Blog",
    link: "blog"
  },
  {
    label: "Privacy Policy",
    link: "privacy-policy"
  },
  {
    label: "Contact",
    link: "contact"
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
  width: 30%;
  margin: 25px auto;
  justify-content: center;
}
</style>
