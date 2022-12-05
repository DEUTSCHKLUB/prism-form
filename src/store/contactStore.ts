import {PersistentStore} from "./main";
import {CONTACT_STORE_NAME} from "./store-names";

interface Contact extends Object {
    currStep: number,
    firstName: string,
    lastName: string,
    email: string,
    zipcode: number,
    usState: string,
    isComplete: boolean
}

class ContactStore extends PersistentStore<Contact> {
    protected data(): Contact {
        return {
            currStep: 0,
            firstName: "",
            lastName: "",
            email: "",
            zipcode: 0,
            usState: "",
            isComplete: false
        };
    }

    setFirstName(value: string){
        this.state.firstName = value;
    }

    setLastName(value: string){
        this.state.lastName = value;
    }

    setEmail(value: string){
        this.state.email = value;
    }

    setZipcode(value: number){
        this.state.zipcode = value;
    }

    setUsState(value: string){
        this.state.usState = value;
    }

    setComplete(value: boolean){
        this.state.isComplete = value;
    }

    plusStep() {
        this.state.currStep++;
    }

    minusStep() {
        this.state.currStep--;
    }

}

export const contactStore: ContactStore = new ContactStore(CONTACT_STORE_NAME)