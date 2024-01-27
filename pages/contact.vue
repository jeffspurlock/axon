<script setup lang="ts">
import type { ModelRef } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useFetch } from '@vueuse/core'
useGlobalState().setNav('leftnav')

//TODO: figure out how to send email
const tomorrow = new Date(Date.now() + 86400000)
const date = defineModel()
class TextField {
    data: ModelRef<string | undefined>
    label: string
    id: string
    placeholder: string

    constructor(label: string, id: string, placeholder: string) {
        this.data = defineModel()
        this.label = label
        this.id = id
        this.placeholder = placeholder
    }
}
class DateField {
    data: ModelRef<Date | undefined>
    label: string
    id: string

    constructor(label: string, id: string) {
        this.data = defineModel()
        this.label = label
        this.id = id
    }

}

class FormData {
    fName: TextField
    lName: TextField
    email: TextField
    phoneNumber: TextField
    preferredCallBack: DateField
    currentWebsiteUrl: TextField
    anythingElse: TextField

    constructor() {
        this.fName = new TextField(
            "First Name",
            "fname",
            "Jane"
        )
        this.lName = new TextField(
            "Last Name",
            "lname",
            "Doe"
        )
        this.email = new TextField(
            "Email Address",
            "email",
            "janethefemaledeer@gmail.com"
        )

        this.phoneNumber = new TextField(
            "Phone Number",
            "phnum",
            "1-555-867-5309"
        )
        this.preferredCallBack = new DateField(
            "Call Back Date and Time",
            "callback"
        ),
            this.currentWebsiteUrl = new TextField(
                "Website URL",
                "url",
                "antlers.com"
            )
        this.anythingElse = new TextField(
            "Anything else we should know?",
            "else",
            "..."
        )
    }
}
const formData: FormData = new FormData()
async function updateList() {
    //console.log(formData)
    const { data } = await useFetch('/api/send-email').post({ formData })
    console.log(data)
}

</script>

<template>
    <Transition>
        <div class="contact-page">
            <h1>Contact Us</h1>
            <h6>Please complete this form and someone will reachout to you within 24-48 hours</h6>
            <FormRoot @submission="updateList">
                <FormInputWrapper :id="formData.fName.id" :label="formData.fName.label">
                    <FormText :formElement="formData.fName" v-model="formData.fName.data" />
                </FormInputWrapper>
                <FormInputWrapper :id="formData.lName.id" :label="formData.lName.label">
                    <FormText :formElement="formData.lName" v-model="formData.lName.data" />
                </FormInputWrapper>
                <FormInputWrapper :id="formData.email.id" :label="formData.email.label">
                    <FormText :formElement="formData.email" v-model="formData.email.data" />
                </FormInputWrapper>
                <FormInputWrapper :id="formData.phoneNumber.id" :label="formData.phoneNumber.label">
                    <FormText :formElement="formData.phoneNumber" v-model="formData.phoneNumber.data" />
                </FormInputWrapper>
                <FormInputWrapper :id="formData.currentWebsiteUrl.id" :label="formData.currentWebsiteUrl.label">
                    <FormText :formElement="formData.currentWebsiteUrl" v-model="formData.currentWebsiteUrl.data" />
                </FormInputWrapper>
                <FormInputWrapper :id="formData.preferredCallBack.id" :label="formData.preferredCallBack.label">
                    <Datepicker v-model="date" id="datepicker" :placeholder="tomorrow.toDateString()" dark />
                </FormInputWrapper>
            </FormRoot>
        </div>
    </Transition>
</template>

<style scoped>
.contact-page {
    margin-right: 10vw;
}

#datepicker {
    margin: -12px 0 10px;
}

#datepicker+div {
    margin: auto;
}



#datepicker:deep(input) {
    width: 100%;
    font-size: 1.2em;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(187, 187, 187, 0.01) 66%, rgba(100, 100, 100, 0.01) 100%);
    border: none;
    margin: 12px 0;
    padding: 13px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, .3) 4px 3px 5px inset, rgba(0, 0, 0, .3) -1px -1px 0px inset, rgba(80, 80, 80, .06) -15px -15px 15px
}

#datepicker:deep(.dp__input_icon) {
    right: 0;
    inset-inline-start: inherit;
}

#datepicker:deep(.dp__outer_menu_wrap) {
    z-index: 100;
}

h6 {
    font-family: 'Gotham';
    font-size: 1em;
    margin: 0 0 16px;
}

form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>