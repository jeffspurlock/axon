<script setup lang="ts">

const blogs = await queryContent('services').find()
console.log(blogs)
</script>

<template>
    <div class="blog-wrapper">
        <h1>List of Blog Posts</h1>
        <ul>
            <li v-for="blog in blogs"><NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink></li>
        </ul>
    </div>
</template>

<style scoped>
</style>