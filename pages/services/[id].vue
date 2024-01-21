<script setup>
const route = useRoute()
const key = ref(route.params.id)
</script>

<template>
    <ContentDoc :key="key" tag="body"/>
</template>

<style scoped>
/* .v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
} */
</style>

