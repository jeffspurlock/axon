<script setup lang="ts">
let overflow: Ref<boolean> = ref(true)
</script>


<template>
    <HeaderComponent />
    <div class="layout-wrapper">
        <div class="container-lhn">
            <BlogNav />
        </div>
        <div id="content-container" :class="overflow ? 'overflow' : ''"  >
            <NuxtPage 
            class="body" 
            :class="overflow ? 'overflow' : ''"
            :overflow="overflow"
            />
        </div>

    </div>
    <FooterComponent />
</template>
<style scoped>
.layout-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 650px;
}
.container-lhn{
    width:20vw;
}
#content-container{
    width: 85vw;
    height: 67vh;
}
</style>
<style>
.body{ 
    position: relative;
    --mask: linear-gradient(to bottom, 
      rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 80%, 
      rgba(0,0,0, 0) 95%, rgba(0,0,0, 0) 0
  ) 100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask); 
  mask: var(--mask);
    
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
.body.overflow {
    margin-bottom: 100px
}
</style>