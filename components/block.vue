<script setup lang="ts">
import { ref } from "vue";
import icon from "./icon.vue";
const props = defineProps(["block"]);
const emit = defineEmits(["clicked"]);
const active: Ref<boolean> = ref(false);
function emitRouteToParent() {
  emit("clicked", props.block.link);
}
</script>

<template>
  <div
    class="block"
    :id="'block-' + block.id"
    :class="active ? 'active' : 'inactive'"
    @mouseover="active = true"
    @mouseleave="active = false"
    @click.stop="emitRouteToParent"
  >
    <Suspense>
      <icon :fileName="block.img" :active="active" :id="block.id" :size="'lg'" />
      <template #fallback>
        <p>...loading</p>
      </template>
    </Suspense>
    <h2 :class="active ? 'active' : 'inactive'">{{ block.title }}</h2>
  </div>
</template>
<style scoped>
.block {
  flex-grow: 1;
  width: 21vw;
  min-width: 160px;
  height: 19vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  border-top: solid 1px var(--off-white);
  border-left: solid 0.5px var(--off-white);
  border-right: solid 0.5px var(--off-white);
  border-bottom: solid 0.5px var(--off-white);
}

.block:deep(.svg-wrapper){
  position: relative;
  bottom: 1vw;
}

#block-development {
  border-left: none;
}

#block-microservices {
  svg {

  }
}

#block-node {
  border-left: none;
  border-bottom: solid 1px var(--off-white);
}

#block-shopify {
  border-right: none;
}

#block-marketing {
  border-right: none;
  border-bottom: solid 1px var(--off-white);
}

#block-vue {
  border-bottom: solid 1px var(--off-white);
}

#block-nuxt {
  border-bottom: solid 1px var(--off-white);
}

.block h2 {
  text-align: center;
  position: relative;
  bottom: 20px;
  font-size: 1.7vw;
}

h2.active {
  color: var(--goldenrod);
}

div.active {
  background-color: var(--med-grey);
}
</style>
