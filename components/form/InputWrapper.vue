<script setup>
const props = defineProps(['id', 'label'])
</script>

<template>
    <div class="input-group">
        <label :for="id">{{ label }}</label>
        <slot></slot>
    </div>
</template>

<style scoped>
.input-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 45%;


    label {
        font-size: 1em;
        font-family: 'Gotham';
    }
}
</style>