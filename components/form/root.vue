<script setup>
</script>
<template>
    <form aria-label="Submit contact information">
        <slot></slot>
        <div class="submit-wrapper" @click.stop="$emit('submission')">
            <btn type="submit" @click.stop="$emit('submission')">Submit</btn>
        </div>
    </form>
</template>
<style scoped>
.submit-wrapper {
    margin: 19px 0px;
    padding: 10px;
    background-color: var(--goldenrod);
    border-radius: 10px;
    text-align: center;
    width: 200px;
    color: var(--dark-grey);
    font-weight: bold;
    font-size: x-large;
    cursor: pointer;
}
</style>