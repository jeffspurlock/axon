<script setup lang="ts">
useGlobalState().setNav('leftNav')
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