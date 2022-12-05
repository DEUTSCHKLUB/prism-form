<template>
    <footer id="footer" class="w-full h-auto px-4 py-3 bg-blue text-white text-xs">
        <div class="container flex flex-col lg:flex-row items-center justify-between gap-4">
            <p class="w-full lg:w-auto pb-2 border-b-2 border-white lg:p-0 lg:border-b-0">Copyright Company 2022. All Rights Reserved.</p>
            <nav class="w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center justify-start">
                <router-link to="/">Home</router-link>
            </nav>
        </div>
    </footer>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: 'GlobalFooter'
  });
</script>

<style scoped>
    a{
        @apply inline-flex;
        &:hover{
            @apply underline;
        }
    }
</style>