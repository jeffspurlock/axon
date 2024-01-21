<script setup lang="ts">
import logo from "./svg/axon.svg";
</script>
<template>
  <section>
    <div class="logo">
      <NuxtLink to="/">
        <logo />
      </NuxtLink>
    </div>
  </section>
</template>
<style scoped>
.logo {
  height: 6vw;
  position: relative;
  right: 2.5vw;
  width: 100%;
  text-align: right;
  padding: 1vw;
}
.logo svg {
  height: 100%;
  width: auto;
  fill: var(--goldenrod) !important;
  g {
    fill: var(--goldenrod) !important;
  }
}

.nuxt-icon--fill, .nuxt-icon--fill * {
    fill: var(--goldenrod) !important;
}

</style>
