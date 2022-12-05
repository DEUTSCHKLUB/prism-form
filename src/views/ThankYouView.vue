<template>
  <div class="thank-you w-full h-screen min-h-850 flex flex-col items-center justify-center relative">
    <div id="top-block" class="square w-full max-w-280 h-auto">
      <div class="square-content flex justify-end items-end">
        <h1 class="text-6xl text-white mb-2">Thank You</h1>
      </div>
    </div>
    <div id="bottom-block" class="square w-full max-w-280 h-auto">
      <div class="square-content pt-4">
        <h1 class="text-3xl text-blue">For Your Submission</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">  
  export default {
  };
</script>

<style scoped>
.square {
  @apply relative overflow-hidden origin-center;
}
.square:before {
  content:'';
  @apply pt-full w-full block;
}
.square-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @apply px-2;
  overflow: hidden;
}
@keyframes fadeupinitial{
  to{
    margin-top:0%;
  }
}
  #top-block{
    margin-top:100%;
    animation: fadeupinitial 0.8s cubic-bezier(.17,.67,.05,.99) 0s 1 forwards;
    transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(-113px) translateY(120px) scale(.8);
    mask-image: linear-gradient(to top, transparent, #000 15%, #000 95%, transparent 100%);
    @screen sm{
      transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(-140px) translateY(70px) scale(1);
    }
  }
  #bottom-block{
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(.8);
    mask-image: linear-gradient(to top, #000, #000 85%, transparent 100%);
    border-radius: .75rem;
    /* background-image: linear-gradient(to bottom, theme('colors.blue.light'), #000 30%); */
    @screen sm{
      transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(1);
    }
  }
</style>