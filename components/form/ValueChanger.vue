<script setup lang="ts">
</script>
<template>
    <btn @click.stop="$emit('increase')" class="upArrow">
        UP
    </btn>
    <slot></slot>
    <btn @click.stop="$emit('decrease')" class="downArrow">
    </btn>
</template>
<style></style>