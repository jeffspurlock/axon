<script setup lang="ts">
const globalState = useGlobalState()
</script>

<template>
  <top />
  <lines :count="globalState.themeProperties.linesTop"  />
</template>

<style scoped></style>
