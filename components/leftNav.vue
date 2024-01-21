<script setup lang="ts">
const content = useHomepageStore()
const route = useRoute()
const router = useRouter()
const selected = ref(route.params.id)
function routeToChild(destination: string){
  router.push("/services"+destination)
}
</script>

<template>
  <div class="left-hand-nav">
    <listMenuItem
      v-for="item in content.blocks"
      class="icon"
      :item="item"
      :selected="selected"
      @item-clicked="routeToChild"
    />
  </div>
</template>
<style scoped>
.left-hand-nav {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto 0;
}
</style>
