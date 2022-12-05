<template>
    <div class="flex flex-row items-center justify-around">
        <button class="mt-8" ref="prevButton" @click="minusStep" :disabled="(state.currStep <= 0)">
            <i class="text-4xl bi bi-caret-down-fill"></i>
        </button>

        <button ref="nextButton" @click="plusStep" :disabled="(state.currStep == 5)">
            <i class="text-4xl bi bi-caret-up-fill"></i>
        </button>
    </div>
</template>

<script lang="ts">  
  import {contactStore} from "../store/contactStore";
  export default {
    setup() {
        const plusStep = () => {
            if(contactStore.getState().currStep <= 5){
                contactStore.plusStep();
            }
        };
        const minusStep = () => {
            if(contactStore.getState().currStep > 0){
                contactStore.minusStep();
            }
        };
        return {
            state: contactStore.getState(),
            plusStep,
            minusStep
        }
    }
  };
</script>

<style scoped>
    @keyframes popinbutton{
        to{
            transform: scale(1);
        }
    }
    button{
        transition: transform .8s cubic-bezier(.17,.67,.05,.99);
        transform: scale(0);
        animation: popinbutton .8s cubic-bezier(.17,.67,.05,.99) 0s 1 forwards;
        @apply bg-gradient-to-b from-blue-dark to-black p-4;
        &[disabled]{
            @apply opacity-40;
        }
    }
</style>