<script setup lang="ts">
const props = defineProps(['count'])
</script>

<template>
  <div class="lines">
    <hr v-for="index in count"/>
  </div>
</template>
