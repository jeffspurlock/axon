<script setup>
import HeaderComponent from '~/components/headerComponent.vue';

</script>

<template>
    <HeaderComponent />
    <div class="layout-wrapper">
        <LeftNav />
        <ContentDoc class="body"/>
    </div>
    <FooterComponent />
</template>
<style scoped>
.body { 
    width: 80%;
    position: relative;
    right: 3vw; 
}
.layout-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 650px;
}
</style>
<style>
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