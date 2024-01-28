<script setup>
useGlobalState().setNav('blogNav')
</script>
<template>
    <div class="body overflow">
        <ContentDoc />
        <div class="bumper"></div>
    </div>
</template>
<style scoped>
.body:deep(h3) {
    font-size: 1.5em;
}

.body:deep(h6) {
    margin: 0;
    font-size: 1em;
}
</style>