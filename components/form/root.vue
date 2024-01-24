<script setup>
</script>
<template>
    <form aria-label="Submit contact information">
        <slot></slot>
        <btn type="submit" @click.stop="$emit('submission')">Submit</btn>
    </form>
</template>
<style scoped></style>