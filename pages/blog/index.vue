<script setup lang="ts">
const blogNav = resolveComponent('blogNav')
const emit = defineEmits(['navSelector'])
onMounted(() => {
    emit('navSelector', blogNav)
})

const blogs = await queryContent('blogs').find()

//TODO: create the blogCard component
//TODO: Why are some ContentDoc calls not loading? check to make sure all contentdoc components are wrapped in Suspense
</script>

<template>
    <div class="blog-wrapper">
        <h1>Ramblings</h1>
        <p>Occasionally I get the urge to write something. Might be tech related, might not. Hell, maybe I'l publish a short story. Probably not.</p>
        <p>But if you're at all interested in getting to know me and my views on various topics; here's a good place to start.</p>
        <div class="card-container">
            <blogCard />
        </div>
    </div>
</template>