<script setup>
const props = defineProps(['formElement'])
const model = defineModel()
const emit = defineEmits('update:model')

</script>

<template>
    <div class="input-group">
        <label :for="formElement.id">{{ formElement.label }}</label>
        <input :id="formElement.id" type="text" :placeholder="formElement.label" v-model="model" />
    </div>
</template>
<style scoped></style>