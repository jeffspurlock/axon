<script setup lang="ts">
import { useHomepageStore } from '#imports';
const data = useHomepageStore()
const props = ref(data)
</script>

<template>
    <v-app>
      <div class="page-body">
        <HeaderComponent />
          <NuxtPage class="page-content" :content="props"/>
        <FooterComponent />
      </div>
    </v-app>
</template>
<style>
.page-body{
    margin-top:0;
}

</style>