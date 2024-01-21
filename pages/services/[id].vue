<script setup>
const props = defineProps(['content'])
const route = useRoute()
const key = ref(route.params.id)
</script>
<template>
    <div class="services-wrapper">
        <LeftNav :content="content"/>
        <ContentDoc :key="key" tag="body"/>
    </div>
</template>
<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
<style>


.body { 
    width: 80%;
    position: relative;
    right: 3vw; 
}
.services-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 650px;
}

.body{ 
    h1 {
        color: var(--goldenrod);
    }
    p, li {
        font-family: 'Gotham';
        font-weight: normal;
        font-size: 1.3em;
        margin: 16px 0;
    }
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
            margin: 0 20px;
        }
    }
    
}
</style>