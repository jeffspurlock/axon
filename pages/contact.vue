<script setup lang="ts">
import type { ModelRef } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useFetch } from '@vueuse/core'

//TODO: Contact page; model binding figured out, now build your form. Don't be lazy; learn ADA compliance around forms and focus
const date = defineModel()
class FormData {
    fName: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }
    lName: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }
    email: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }
    phoneNumber: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }
    preferredCallBack: {
        data: Ref<any | undefined>,
        label: string,
        id: string
    }
    currentWebsiteUrl: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }
    anythingElse: {
        data: ModelRef<string | undefined>,
        label: string,
        id: string
    }

    constructor() {
        this.fName = {
            data: defineModel(),
            label: "First Name",
            id: "fname"
        }
        this.lName = {
            data: defineModel(),
            label: "Last Name",
            id: "lname"
        }
        this.email = {
            data: defineModel(),
            label: "Email Address",
            id: "email"
        }
        this.phoneNumber = {
            data: defineModel(),
            label: "Phone Number",
            id: "phnum"
        }
        this.preferredCallBack = {
            data: ref(date),
            label: "Call Back Date and Time",
            id: "callback"
        }
        this.currentWebsiteUrl = {
            data: defineModel(),
            label: "Website URL",
            id: "url"
        }
        this.anythingElse = {
            data: defineModel(),
            label: "Anything else we should know?",
            id: "else"
        }
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
    <FormRoot @submission="updateList">
        <FormText :formElement="formData.fName" v-model="formData.fName.data" />
        <FormText :formElement="formData.lName" v-model="formData.lName.data" />
        <FormText :formElement="formData.email" v-model="formData.email.data" />
        <FormText :formElement="formData.phoneNumber" v-model="formData.phoneNumber.data" />
        <FormText :formElement="formData.currentWebsiteUrl" v-model="formData.currentWebsiteUrl.data" />
        <Datepicker v-model="date" />
    </FormRoot>
</template>