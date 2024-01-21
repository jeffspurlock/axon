<script setup lang="ts">
const props = defineProps(["fileName", "active", "id", "selected", "size"]);
const svgWh = await import(`./svg/${props.fileName.toString() + "-wh"}.svg`);
const svgGr = await import(`./svg/${props.fileName.toString() + "-gr"}.svg`);
const svgClass = "icon svg-" + props.id
</script>
<template>
  <div class="svg-wrapper" :id="('container-' + id)">
    <svgWh  :class="[svgClass, size]" v-if="!active && !selected" />
    <svgGr  :class="[svgClass, size]" v-if="active || selected" />
  </div>
</template>
<style scoped>
.svg-wrapper {
  width: 40%;
  margin: auto;
  max-height: 30%;
}
.icon.lg {
  stroke-width: 1;
}
.icon.sm {
  stroke-width: 3;
}
</style>
<style>

#container-webdevelopment {
  svg {
  }
}

#container-uiux {
  svg {
  }
}

#container-microservices {
  bottom: 3vw;
  svg {
    transform: scale(0.6);
  }
}

#container-shopify {
  bottom: 3vw;
  svg {
    transform: scale(0.6);
  }
}

#container-node {
  bottom: 2.5vw;
  svg {
    transform: scale(0.6);
  }
}

#container-vue {
  bottom: 1.5vw;
  svg {
    transform: scale(0.6);
  }
}

#container-nuxt svg {
  transform: scale(0.8);
}

#container-marketing {
  bottom: 0vw;
  svg {
    transform: scale(1.3);
  }
}
</style>
