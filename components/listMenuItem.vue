<script setup lang="ts">
const route = useRoute()

const props = defineProps(["item", "index"]);
const emit = defineEmits(["item-clicked"]);
const selected = (function(){
  if(props.item.id === route.params.id){
    return true
  } else {
    return false
  }
})()
const active: Ref<boolean> = ref(selected);
function emitRouteToChild() {
  let destination = props.item.link
  emit("item-clicked", destination);
}
</script>

<template>
  <div 
    class="menu-item"
    :class="selected ? 'selected': ''"
    @mouseover="active = true"
    @mouseleave="active = false"
    @click="emitRouteToChild"
    >
    <Suspense>
      <icon 
        :fileName="item.img"
        :active="active"
        :selected="selected"
        :id="item.id"
        :size="'sm'"
      />
    </Suspense>
    <span :class="active || selected ? 'hover' : ''" class="item-label">{{ item.title }}</span>
  </div>
</template>

<style scoped>
.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
}
.menu-item .item-label {
  font-size: 1em;
  font-weight: bold;
}
.menu-item >>> .svg-wrapper{
  width: 35px;
  margin: 0 20px 0 3vw;
}

span.hover {
  color: var(--goldenrod)
}

</style>


