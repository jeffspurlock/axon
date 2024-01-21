<script setup lang="ts">
const globalState = useGlobalState()
const copywrite: string = "© 2024 Axon Development Studios. All Rights Reserved."
</script>

<template>
  <div class="footer">
    <lines :count="globalState.themeProperties.linesBottom" />
    <FooterMenu/>
    <div id="copywrite">{{ copywrite }}</div>
  </div>
</template>

<style scoped>
.footer {
    width: 100%;
}
.footer .copywrite {
  color: white;
  font-size: 1em;
  font-weight: bold;
}
</style>
