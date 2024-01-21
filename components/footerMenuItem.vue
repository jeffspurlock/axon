<script setup lang="ts">
const props = defineProps(['item'])
</script>

<template>
    <NuxtLink class="footer-menu-link" :to="'/'+item.link">
      {{ item.label }}
    </NuxtLink>
</template>

<style scoped>
.footer-menu-link {
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: bold;
  font-size: 1em;
  color: var(--off-white);
  text-align: center;
  
}

.footer-menu-link:hover{
  color: var(--goldenrod);
  transform: scale(1.2);
  transition: all .3s ease-in-out;
}

</style>
