<script setup lang="ts">
const data = useHomepageStore()
const props = defineProps(["item", "index"]);
const router = useRouter()
const active: Ref<boolean> = ref(false);
function routeToChild(){
  data.setSelected(props.item.link)
  router.push(props.item.link)
}
</script>


<template>
  <div 
    class="menu-item"
    :class="item.selected ? 'selected': ''"
    @mouseover="active = true"
    @mouseleave="active = false"
    @click.stop="routeToChild"
    >
    <Suspense>
      <icon 
        :fileName="item.img"
        :active="active"
        :selected="item.selected"
        :id="item.id"
        :size="'sm'"
      />
    </Suspense>
    <span :class="active || item.selected ? 'hover' : ''" class="item-label">{{ item.title }}</span>
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
  display: inline-table;
}

span.hover {
  color: var(--goldenrod)
}

</style>


