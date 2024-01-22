<script setup>
const blogNav = resolveComponent('blogNav')
const emit = defineEmits(['navSelector'])
onMounted(() => {
    emit('navSelector', blogNav)
})

//TODO: Fix the dynamic component linking in layouts.default.vue
</script>
<template>
    <Suspense>
        <div class="body overflow">
            <ContentDoc />
            <div class="bumper"></div>
        </div>
    </Suspense>
</template>
<style scoped>
.body:deep(h3){
    font-size:1.5em;
}
.body:deep(h6) {
    margin: 0;
    font-size: 1em;
}
</style>