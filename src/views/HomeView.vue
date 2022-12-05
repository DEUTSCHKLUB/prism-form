<template>
  <div class="home w-full h-screen min-h-850 flex flex-col items-center justify-center relative">
    <div id="screen-block" class="res-square w-full max-w-280 h-auto">
      <div class="res-square-content">
        <ScreenView></ScreenView>
      </div>
    </div>
    <div id="form-block" class="res-square w-full max-w-280 h-auto">
      <div class="res-square-content">
        <MultiForm></MultiForm>
      </div>
    </div>
    <div id="nav-block" class="res-square w-full max-w-280 h-auto bg-blue-dark"><div class="res-square-content">nav</div></div>
    <!--<div id="form-title" class="res-square w-full max-w-280 h-auto">
      <div class="res-square-content p-4 flex items-end justify-end text-left">
        <h1 class="text-6xl">Sign Up Form</h1>
      </div>
    </div>-->
    <div id="step-count">
      <h4 class="text-white">
        <span class="text-blue block">Step {{state.currStep + 1}}</span>
        of 5
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import MultiForm from '@/components/MultiForm.vue';
import ScreenView from '@/components/ScreenView.vue';
import {contactStore} from "../store/contactStore";

export default {
  components:{
    MultiForm,
    ScreenView
  },
  setup() {
      return {
        state: contactStore.getState()
      }
    }    
};
</script>

<style scoped>
.home{
  /* perspective:600px; */
}
.res-square {
  @apply relative overflow-hidden origin-center;
}
.res-square:before {
  content:'';
  @apply pt-full w-full block;
}
.res-square-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @apply px-2;
  overflow: hidden;
}

#screen-block{
  transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(-113px) translateY(120px) scale(.8);
  mask-image: linear-gradient(to top, transparent, #000 25%, #000 85%, transparent 100%);
  @screen sm{
    transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(-140px) translateY(70px) scale(1);
  }
}
#form-block{
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(.8);
  mask-image: linear-gradient(to top, #000, #000 85%, transparent 100%);
  border-radius: .75rem;
  /* background-image: linear-gradient(to bottom, theme('colors.blue.light'), #000 30%); */
  @screen sm{
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(1);
  }
}
#nav-block{
  transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(113px) translateY(-120px) scale(.8);
  @screen sm{
    transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(141px) translateY(-69px) scale(1);
  }
}
#form-title{
  position:absolute !important;
  transform: rotateX(30deg) rotateY(46deg) rotateZ(0deg) translateX(36px) translateY(-142px) translateZ(75px) scale(.8);
  @screen sm{
    transform: rotateX(30deg) rotateY(46deg) rotateZ(0deg) translateX(-139px) translateY(254px) scale(1);
  }
}
#step-count{
  position:absolute !important;
  transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(25px) translateY(174px) translateZ(75px) scale(.8);
  @screen sm{
    transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(325px) translateY(64px) translateZ(75px) scale(1);
  }
}
</style>
