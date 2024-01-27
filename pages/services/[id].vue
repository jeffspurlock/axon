<script setup lang="ts">
useGlobalState().setNav('leftnav')
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