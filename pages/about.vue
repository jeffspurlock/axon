<script setup lang="ts">
const props = defineProps(['content'])
</script>

<template>
    <div class="services-wrapper">
        <LeftNav :content="content"/>
        <ContentDoc class="body" />
    </div>
</template>

<style>
.body { 
    width: 80%;
    position: relative;
    right: 3vw; 
    max-height: 55vh;
    overflow-y: scroll;
    margin: 60px 0;
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

    h3 {
        color: var(--med-grey);
    }
    

    h1, h3 {
        
        margin: 0;
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