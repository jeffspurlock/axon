---
title: 'About this website'
description: 'The days of MERN and LAMP are behind us. Read to learn more about the tech stack powering the Axon Development Studios website'
date: 2024-01-20
---

# {% $frontmatter.title %} 

### Host
Arguably one of the mosmt important pieces in a websites network design. Our website is hosted on Vercel, a continuous deployment solution for Node.js applications. Using a continuous deployment solution makes updating and publishing content a breeze, with all of the version control features Git has to offer. This site is published from a public repository (I want you to be able to look at my code if you so choose,) but this works from any remote repository, public or private, in GitHub, GitLabs, BitBucket, or a privately hosted remote. 

### Backend
This site runs on Nitro, the Nuxt server engine. Our backend APIs and Middleware are all create and handled in Nuxt. This gives the ability to use powerful Nuxt plugins, like NuxtContent - the plugin that generated the API that fetched this content you're reading at this very moment and injected it into the Vue UI. Nuxt also allows for multi-page support, so this Vue UI you're seeing here for blog pages is a completely different SPA from the the Home Page and the Services pages. 

The dynamic page routing, with custom layouts and page templates, provides the flexibility of a site deployed with server side rendering mixed with the performant UI benefits of a client side routed reactive interface. For example; When you click through the various services in the '/services/' path, that is a reactive front end that dynamically inserts rendered markdown content into a component slot. Routing to a new path, lets say, from '/services/development' to '/services/uiux' doesn't reload the page, instead it makes an asynchronous api call to the '/api/_content' and injects the resulting Markdown file as html into the component slot.

This site is also using the plugin nuxt-svgo to load SVG files as components, making the use of vector graphics and icons as simple as putting `import icon from './svg/iconName.svg'` and then putting `<icon />` in your `<template>` element.

### Frontend
###### Vite.js
If you're using Nuxt as your backend, the main reason is likely because you want to use Vue on the frontend. In instances where middleware APIs and server side rendering aren't required, I don't typicall run Vue directly, but instead will run it through Vite. Nuxt uses Vite by default as well. Vite is analgous to WebPack, and handles tasks, TypeScript compilation, and Hot Module Replacement. 

###### Vue.js
The core of this sites tech stack is Vue. The majority of what I've written to make this site have been Vue components; everything else here serves as supplementary tools to properly serve and hydrate vue components and pages. Aside from the vue component syntax with Single File Components (SFCs), props, emitters, attribute binding, and template logic, Vue also ships with some excellent features around state management (Pinia,) reactive references to input elements to update local variables or application state (v-model,)