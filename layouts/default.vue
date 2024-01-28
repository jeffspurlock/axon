<script setup lang="ts">
import eftnav from "~/components/leftnav.vue"
import blognav from "~/components/Blognav.vue"

const globalState = useGlobalState()
const { navSelector } = storeToRefs(globalState)
const contentId = ref()
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
function setDocId(docId: string) {
    console.log("docId in set function = " + docId)
    contentId.value = docId
}
const navComponent = ref()
function setNavComponent() {
    if (navSelector.value == 'leftnav') {
        navComponent.value = leftnav
    }
    else if (navSelector.value == 'blognav') {
        navComponent.value = blognav
    }

}
onMounted(() => setNavComponent())
onUpdated(() => setNavComponent())


</script>

<template>
    <div class="layout-wrapper">
        <div class="container-lhn">
            <Transition name="nav" mode="out-in">
                <Suspense>
                    <component :is="navComponent"></component>
                </Suspense>
            </Transition>
        </div>
        <div id="content-container" :class="overflow ? 'overflow' : ''">
            <NuxtPage class="body" :class="overflow ? 'overflow' : ''" @mounted="setOverflow" @docId="setDocId"
                :overflow="overflow" :id="contentId" />
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