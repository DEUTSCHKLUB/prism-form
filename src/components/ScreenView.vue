<template>
    <div id="screens" :style="`transform:translate(0,${(state.currStep * (100/6))* -1}%)`">
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <h2 class="text-4xl">Welcome! <span class="text-blue">What's your name?</span></h2>
            </div>
        </div>
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <div class="screen-step-content">
                    <h2 class="text-3xl">Hey! {{ state.firstName }}. <span class="text-blue">Last Name?</span></h2>
                </div>
            </div>
        </div>
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <div class="screen-step-content">
                    <h2 class="text-3xl">{{ state.firstName }} {{ state.lastName }}, <span class="text-blue">Got an email?</span></h2>
                </div>
            </div>
        </div>
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <div class="screen-step-content">
                    <h2 class="text-3xl">Ok {{ state.firstName }}, <span class="text-blue">What's your zipcode?</span></h2>
                </div>
            </div>
        </div>
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <div class="screen-step-content">
                    <h2 class="text-3xl">Huh {{ state.zipcode }}... <span class="text-blue">Where's that again?</span></h2>
                </div>
            </div>
        </div>
        <div class="screen-step w-full h-auto block">
            <div class="screen-step-content">
                <div class="screen-step-content">
                    <h2 class="text-3xl">Ah of course! {{ state.zipcode }} in beautiful {{ state.usState }}</h2>
                </div>
            </div>
        </div>
    </div>
 </template>

<script lang="ts">  
import {contactStore} from "../store/contactStore";
export default {
  setup() {
      return {
          state: contactStore.getState()
      }
  }
};
</script>

<style scoped>
@keyframes fadeupinitial{
    to{
        margin-top: 0;
    }
}
#screens{
  transition: transform .8s cubic-bezier(.17,.67,.05,.99);
  margin-top:100%;
  animation: fadeupinitial 0.8s cubic-bezier(.17,.67,.05,.99) 0s 1 forwards;
}
.screen-step {
@apply relative overflow-hidden origin-center;
}
.screen-step:before {
content:'';
@apply pt-full w-full block;
}
.screen-step-content {
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
@apply px-2 flex items-end justify-end;
overflow: hidden;
}
</style>