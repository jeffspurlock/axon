<script setup lang="ts">
const content = useHomepageStore()
</script>

<template>
  <div class="left-hand-nav">
    <listMenuItem
      v-for="item in content.blocks"
      class="icon"
      :item="item"
    />
  </div>
</template>
<style scoped>
.left-hand-nav {
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100%;
  justify-content: center;
}
</style>
