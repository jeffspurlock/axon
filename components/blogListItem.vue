<script setup lang="ts">
const props = defineProps(['blogPost'])
</script>

<template>
  <div class="blog-list-item">
    <h6>{{ blogPost.title }}</h6>
  </div>
</template>

<style scoped></style>
