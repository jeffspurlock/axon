<script setup lang="ts">
const data = useHomepageStore()
const props = defineProps(['item'])
function setSelectedItem() {
  console.log(props.item.setSelected)
  console.log(props.item.link)
  data.blocks.forEach((block) => {
    console.log(block.link)
  })
  if (props.item.setSelected) {
    data.blocks.forEach((block) => {
      if (block.link == props.item.link) {
        block.selected = true
      } else {
        block.selected = false
      }
    })
  }
}
</script>

<template>
  <NuxtLink class="footer-menu-link" :href="item.link" @click.stop="setSelectedItem">
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

.footer-menu-link:hover {
  color: var(--goldenrod);
  transform: scale(1.2);
  transition: all .3s ease-in-out;
}
</style>
