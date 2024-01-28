<script setup lang="ts">
const route = useRoute()
const data = useHomepageStore()
useGlobalState().setNav('leftNav')
data.blocks.forEach((block) => {
    block.selected = false
})
const docId = ref()
const contentDoc = await queryContent('/').where({ _path: route.fullPath }).find()
const emit = defineEmits(['mounted', "docId"])
if (contentDoc[0].docId != undefined) {
    docId.value = contentDoc[0].docId
}
onMounted(() => {
    emit('mounted')
})
</script>

<template>
    <main>
        <Transition>
            <Suspense>
                <div class="overflow">
                    <ContentDoc :id="contentDoc[0].docId" class="content-doc" />
                    <div class="bumper"></div>
                </div>
            </Suspense>
        </Transition>
    </main>
</template>