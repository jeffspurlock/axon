<script setup lang="ts">
const props = defineProps(["content"]);
const emit = defineEmits(["closePopover"]);
const icon = await import(
  `../homepage/svg/${props.content.img.toString() + "-gr"}.svg`
);
</script>
<template>
  <div class="pop-over">
    <btn class="close" @click="$emit('closePopover')">X</btn>
    <div class="svg-container">
      <icon />
    </div>
    <h2>{{ content.title }}</h2>
    <p>{{ content.body }}</p>
  </div>
</template>
<style scoped>
.pop-over {
  position: fixed;
  width: calc(100% - 2em);
  height: calc(100% - 2em);
  margin: 1em 1em;
  background-color: var(--med-grey);
  z-index: 10;
  top: 0;
  left: 0;
}

.svg-container {
  width: 10vw;
  margin: 50px auto;
}
h2 {
  font-size: 3em;
}

.close {
  font-size: 2vw;
  color: var(--off-white);
  font-weight: bold;
  position: absolute;
  left: 25px;
  top: 10px;
  cursor: pointer;
}
</style>
