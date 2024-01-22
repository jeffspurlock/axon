<script setup lang="ts">
const leftNav = resolveComponent('leftNav')
const nav = ref(leftNav)
const pagesWithOverflow = ['/about']
const route = useRoute()
let overflow: Ref<boolean> = ref(false)
function setOverflow() {
    if (pagesWithOverflow.includes(route.fullPath)) {
        overflow.value = true
    } else {
        overflow.value = false
    }
}
</script>

<template>
    <div class="layout-wrapper">
        <div class="container-lhn">
            <Transition name="nav" mode="out-in">
                <Suspense>
                    <component :is="nav"></component>
                </Suspense>
            </Transition>
        </div>
        <div id="content-container" :class="overflow ? 'overflow' : ''">
            <NuxtPage class="body" :class="overflow ? 'overflow' : ''" @mounted="setOverflow"
                @navSelector="(newNav) => { nav = newNav }" :overflow="overflow" />
        </div>
    </div>
</template>
<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 73vh
}

.container-lhn {
    width: 20vw;
}

#content-container {
    width: 79vw;
    height: 67vh;
    padding: 0 3vw;
}
</style>