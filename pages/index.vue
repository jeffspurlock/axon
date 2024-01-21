<script setup lang="ts">
definePageMeta({
  layout: 'homepage'
})
const router = useRouter()
import { useHomepageStore } from '#imports';
const content = useHomepageStore()
function routeToChild(path){
  router.push("/services"+path)
}
</script>
<template>
  <section class="home-navigation">
    <Suspense>
      <block
        v-for="(block, index) in content.blocks"
        :block="block"
        :index="index"
        @clicked="routeToChild"
      />
    </Suspense>
  </section>
</template>

<style scoped>
.home-navigation {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
</style>
