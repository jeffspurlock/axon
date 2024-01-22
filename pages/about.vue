<script setup lang="ts">
const leftNav = resolveComponent('leftNav')
const data = useHomepageStore()
data.blocks.forEach((block) => {
    block.selected = false
})
const emit = defineEmits(['mounted', 'navSelector'])
onMounted(() => {
    emit('mounted')
    emit('navSelector', leftNav)
})
</script>

<template>
    <main>
        <Transition>
            <Suspense>
                <div class="overflow">
                    <ContentDoc class="content-doc" />
                    <div class="bumper"></div>
                </div>
            </Suspense>
        </Transition>
    </main>
</template>