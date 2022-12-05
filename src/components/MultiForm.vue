<template>
   <form id="multiForm" :style="`transform:translate(0,${(state.currStep * (100/5))*-1})`">
        <template v-for="(field, index) in formSteps" :key="'field'+index">
            <div class="form-step w-full h-auto block">
                <div class="form-step-content gap-2">
                    <label class="text-sm text-white text-left">{{ field.label }}</label>
                    <input class="w-full h-auto p-2 text-4xl text-gray-600 bg-transparent border-blue-light border-2 focus:ring-0 focus:outline-white" :type="field.type" :class="{'wrong-input': !field.valid}" v-model="field.value" required />
                    <span class="text-xs text-red" v-show="!field.valid">{{ field.warn }}</span>
                </div>
            </div>
        </template>
        <div class="form-step w-full h-auto block">
            <div class="form-step-content">
                <select name="usState" id="usState" v-model="state.usState">
                    <option value="">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>
        </div>
        <div class="actions">
          <button v-if="state.currStep +1 < formSteps.length +2" @click="checkFields">next</button>
          <button v-if="(state.currStep +1 === formSteps.length +2)" @click="checkFields">done</button>
        </div>
   </form>
</template>
  
<script lang="ts">  
  import {contactStore} from "../store/contactStore";
  export default {
    data(){
        return {
            formSteps: [
                {
                    label: "Enter First Name", type: "string", warn: "Only type letters", value: contactStore.getState().firstName, valid: true, pattern: /^[A-Za-z/s]+$/
                },
                {
                    label: "Last Name", type: "string", warn: "Only type letters, hyphens, & apostrophes", value: contactStore.getState().lastName, valid: true, pattern: /^[A-Za-z/s\-']+$/
                },
                {
                    label: "Email", type: "email", warn: "Enter a valid email address", value: contactStore.getState().email, valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
                },
                {
                    label: "Zipcode", type: "number",  warn: "Is that a US zipcode?", value: contactStore.getState().zipcode, valid: true, pattern: /^\d{5}$/
                }
            ],
        }
    },
    methods: {
      nextStep() {
        // this.plusStep();
      },
      checkFields() {
        // let valid = true;
        //   if(this.formSteps[contactStore.getState().currStep].pattern.test(this.formSteps[contactStore.getState().currStep].value)) {
        //     valid = false;
        //     field.valid = false;
        //   }
        //   else {
        //     field.valid = true;
        //   }
        // if(valid) {
        //   this.nextStep();
        // }
      }
    },
    setup() {
        const setFirstName = (value: string) =>{
            contactStore.setFirstName(value);
        }
        const setLastName = (value: string) =>{
            contactStore.setLastName(value);
        }
        const setEmail = (value: string) =>{
            contactStore.setEmail(value);
        }
        const setZipcode = (value: number) =>{
            contactStore.setZipcode(value);
        }
        const setUsState = (value: string) =>{
            contactStore.setUsState(value);
        }
        const plusStep = () =>{
            contactStore.plusStep();
        }
        return {
            state: contactStore.getState(),
            setFirstName,
            setLastName,
            setEmail,
            setZipcode,
            setUsState,
            plusStep
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