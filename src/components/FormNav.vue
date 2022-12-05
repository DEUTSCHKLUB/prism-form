<template>
    <div class="flex flex-row items-center justify-around gap-2">
        <button ref="prevButton" @click="minusStep" :disabled="(state.currStep <= 0)">
            Prev
        </button>

        <button ref="nextButton" @click="plusStep" :disabled="(state.currStep == 5)">
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script lang="ts">  
  import {contactStore} from "../store/contactStore";
  export default {
    methods: {
        nextButtonText(){
            if(contactStore.getState().currStep >= 5){
                return 'Send';
            }
            return 'Next'
        }
    },
    setup() {
            const plusStep = () => {
                if(contactStore.getState().isComplete && contactStore.getState().currStep >= 5){
                    contactStore.plusStep()
                }
            };
            const minusStep = () => {
                if(contactStore.getState().currStep != 0){
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
</style>