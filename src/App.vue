<template>
  <GlobalHeader></GlobalHeader>
  <router-view/>
  <GlobalFooter></GlobalFooter>
</template>

<style>

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeader from '@/components/GlobalHeader.vue'; // @ is an alias to /src
import GlobalFooter from '@/components/GlobalFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
},
});
</script>
