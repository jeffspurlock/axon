<script setup lang="ts">
const leftNav = resolveComponent('leftNav')
const props = defineProps(['overflow'])
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
                <ContentDoc class="content-doc" :class="overflow ? 'overflow' : ''"/>
            </Suspense>
        </Transition>
    </main>
</template>