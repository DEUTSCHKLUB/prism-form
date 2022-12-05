<template>
  <div class="w-full h-auto py-3 fixed top-0 z-50 bg-black text-white">
    <div class="container flex items-center justify-between">
      <div class="text-3xl">
        <span class="block"><i class="bi bi-caret-up text-blue-dark"></i><i class="bi bi-caret-up-fill text-blue-dark"></i><i class="bi bi-caret-up-fill text-blue"></i></span>
      </div>
      <nav class="flex flex-row items-center justify-around gap-4 text-sm">
          <router-link to="/">Home</router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GlobalHeader'
});
</script>

<style scoped>
    a{
        @apply py-1 px-3 inline-flex;
        &.router-link-active, &:hover{
            @apply text-blue;
        }
    }
</style>