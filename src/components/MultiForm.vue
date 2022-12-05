<template>
    <div id="form-block" class="res-square w-full max-w-280 h-auto">
        <div class="res-square-content">
            <form id="multiForm" :style="`transform:translate(0,${(state.currStep * (100/6))* -1}%)`">
                    <template v-for="(field, index) in formSteps" :key="'field'+index">
                        <div class="form-step w-full h-auto block">
                            <div class="form-step-content gap-2">
                                <label class="text-sm text-white text-left">{{ field.label }}</label>
                                <input v-on:keydown.enter.prevent='submit' tabindex="-1" :placeholder="field.label" class="w-full h-auto p-6 text-xl text-gray-600 bg-transparent border-blue-light border-2 focus:ring-0 focus:outline-white" :type="field.type" :class="{'wrong-input': !field.valid}" v-model="responses[`${field.name}`]" />
                                <span class="text-xs text-red" v-show="!field.valid">{{ field.warn }}</span>
                            </div>
                        </div>
                    </template>
                    <div class="form-step w-full h-auto block">
                        <div class="form-step-content">
                            <select tabindex="-1" class="w-full h-auto p-4 text-xl text-gray-600 bg-transparent border-blue-light border-2 focus:ring-0 focus:outline-white" name="usState" id="usState" value="responses['usState']" v-model="responses['usState']">
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-step w-full h-auto block">
                        <div class="form-step-content gap-2">
                            <p class="text-sm text-white text-left">Sign Up Now!</p>
                            <button tabindex="-1" id="formSubmit" @click.prevent="submit" class="text-3xl p-2 rounded-lg w-full bg-blue-dark text-white">Submit</button>
                        </div>
                    </div>
            </form>
    </div>
   </div>
   <div id="actions" class="flex flex-row items-center justify-evenly absolute z-50 w-full max-w-280 h-auto">
        <button tabindex="-1" class="mt-8" ref="prevButton" @click="minusStep" :disabled="(state.currStep <= 0)">
            <i class="text-4xl bi bi-caret-down-fill"></i>
        </button>
        <button tabindex="-1" ref="nextButton" @click="checkFields" :disabled="(state.currStep == 5)">
            <i class="text-4xl bi bi-caret-up-fill"></i>
        </button>
    </div>
</template>
  
<script lang="ts">  
  import {contactStore} from "../store/contactStore";
  import {onBeforeMount, defineComponent} from 'vue'

  export default defineComponent({
    data(){
        return {
            responses:{
                firstName: contactStore.getState().firstName,
                lastName: contactStore.getState().lastName,
                email: contactStore.getState().email,
                zipcode: contactStore.getState().zipcode,
                usState: contactStore.getState().usState
            },
            formSteps: [
                {
                    name:"firstName", label: "First Name", type: "string", warn: "Only type letters", value: "", valid: true, pattern: /^[A-Za-z/s]+$/
                },
                {
                    name:"lastName", label: "Last Name", type: "string", warn: "Only type letters, hyphens, & apostrophes", value: "", valid: true, pattern: /^[A-Za-z/s\-']+$/
                },
                {
                    name:"email", label: "Email", type: "email", warn: "Enter a valid email address", value: "", valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
                },
                {
                    name:"zipcode", label: "Zipcode", type: "string",  warn: "Is that a US zipcode?", value: "", valid: true, pattern: /^[0-9]{5}$/
                }
            ],
        }
    },
    methods: {
      minusStep(){
        if(contactStore.getState().currStep > 0){
            contactStore.minusStep();
        }
      },
      nextStep(){
        if(contactStore.getState().currStep <= 5){
            contactStore.plusStep();
        }
      },
      checkFields(){
        let valid = true;
        let step = contactStore.getState().currStep;
        let field = this.formSteps[step];
        console.log(contactStore.getState());
        if(step < 4){
          if(!field.pattern.test(this.responses[field.name])) {
            valid = false;
            this.formSteps[step].valid = false;
          }
          else {
            this.formSteps[step].valid = true;
          }
        }
        if(step >= 4){
            contactStore.setComplete(true);
        }
        if(valid) {
          this.nextStep();
        }
      },
      submit(){
        if(contactStore.getState().isComplete){
            this.$router.push('/thank-you');
        }
      }
    },
    watch:{
        responses: {
            handler: function (newVal, oldVal) {
                contactStore.setFirstName(newVal['firstName']);
                contactStore.setLastName(newVal['lastName']);
                contactStore.setEmail(newVal['email']);
                contactStore.setZipcode(newVal['zipcode']);
                contactStore.setUsState(newVal['usState']);
            },
            deep: true
        }
    },
    setup() {
        return {
            state: contactStore.getState(),
        }
    }
  });
</script>

<style scoped>
@keyframes fadeupinitial{
    to{
        margin-top: 0;
    }
}
form#multiForm{
    transition: transform .8s cubic-bezier(.17,.67,.05,.99);
    margin-top:100%;
    animation: fadeupinitial 0.8s cubic-bezier(.17,.67,.05,.99) 0s 1 forwards;
}
.form-step {
  @apply relative overflow-hidden origin-center p-4 mb-4;
}
.form-step:before {
  content:'';
  @apply pt-full w-full block;
}
@keyframes popinbutton{
    to{
        transform: scale(1);
    }
}
#actions{
  transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(113px) translateY(180px) scale(.8);
  @apply px-4;
  @screen sm{
    transform: rotateX(30deg) rotateY(-45deg) rotateZ(0deg) translateX(161px) translateY(180px) scale(1);
  }
}
#actions button{
    transition: transform .8s cubic-bezier(.17,.67,.05,.99);
    transform: scale(0);
    animation: popinbutton .8s cubic-bezier(.17,.67,.05,.99) 0s 1 forwards;
    @apply bg-gradient-to-b from-blue-dark to-black p-4;
    &[disabled]{
        @apply opacity-40;
    }
}
.res-square {
  @apply relative overflow-hidden origin-center;
}
.res-square:before {
  content:'';
  @apply pt-full max-h-280 w-full block;
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
.res-square-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @apply px-2;
  overflow: hidden;
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
.form-step-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @apply px-2 pb-2 flex flex-col items-end justify-end border-2 rounded-lg border-blue-light;
  overflow: hidden;
}
input:placeholder{
    @apply text-gray-800;
}
</style>