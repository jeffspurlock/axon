<script setup lang="ts">
const blogs = await queryContent('blogs').find()
blogs.forEach((blogPost) => {
  console.log(blogPost)
})
</script>

<template>
  <div class="blogNav">
    <h3>Recent Posts</h3>
    <ul class="recent">
      <li class="li-blog" v-for="blogPost in blogs"><NuxtLink :to="blogPost._path">{{blogPost.title}}</NuxtLink></li>
    </ul>
  </div>
</template>

<style scoped>
.blogNav{
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100%;
  justify-content: flex-start;
  border-right: 1px solid var(--off-white);
}
.blogNav h3{
  font-size: 1.5em;
  color: var(--goldenrod);
  margin-block-start: 2.3em;
}
.blogNav ul {
  margin-block-start: 0;
}

.li-blog {
  font-weight: bold;
  font-family: 'Gotham';
}
</style>
