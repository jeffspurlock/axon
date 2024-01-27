<script setup>
const props = defineProps(['formElement'])
const model = defineModel()
const emit = defineEmits('update:model')
</script>

<template>
    <input ref="input" @input="$emit('update:model')" :id="formElement.id" type="text"
        :placeholder="formElement.placeholder" v-model="model" />
</template>
<style scoped>
input {
    font-size: 1.2em;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(187, 187, 187, 0.01) 66%, rgba(100, 100, 100, 0.01) 100%);
    border: none;
    padding: 13px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, .3) 4px 3px 5px inset, rgba(0, 0, 0, .3) -1px -1px 0px inset, rgba(80, 80, 80, .06) -15px -15px 15px
}
</style>