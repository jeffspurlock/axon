<script setup lang="ts">
const arrowDown = await import(`./svg/arrowDown.svg`);
const arrowUp = await import(`./svg/arrowUp.svg`);
const emit = defineEmits(['scrollClicked'])

function scrollUp(){
  emit('scrollClicked', "up")
}
function scrollDown(){
  emit('scrollClicked', "down")
}

//TODO: Style the buttons with hover actions, and fix the scroll function
</script>

<template>
  <div class="scroll">
    <div @click.stop="scrollUp" class="arrow">
      <arrowDown />
    </div>
    <div @click.stop="scrollDown" class="arrow">
      <arrowUp  />
    </div>
  </div>
</template>

<style scoped>
.scroll{
  display: flex;
  width: 300px;
  margin: auto;
}

.arrow {
  margin: 0 20px ;
  width: 150px;
  border: 1px solid var(--off-white);
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transform: scale(.75);
    stroke-width: 1.8;
    margin: 10px 22px;
  }
}
</style>
