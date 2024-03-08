<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
    name: string;
    phone: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    useDefaultAddress: boolean;
}

const formData = ref<FormData>({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    useDefaultAddress: false,
});

const submitForm = () => {
    formData.value = {
        name: "",
        phone: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        useDefaultAddress: false,
    }
    console.log("Form Data:", formData.value);
};

const clearForm = () => {
    for (let key in formData.value) {
        formData.value[key] = "";
    }
};
</script>

<template>
<form @submit.prevent="submitForm">
    <VTextField v-model="formData.name" label="Name"></VTextField>

    <VTextField v-model="formData.phone" label="Phone Number"></VTextField>

    <VTextField v-model="formData.email" label="E-mail"></VTextField>

    <VTextField v-model="formData.address1" label="Address Line 1"></VTextField>

    <VTextField v-model="formData.address2" label="Address Line 2"></VTextField>

    <VTextField v-model="formData.city" label="City"></VTextField>

    <VTextField v-model="formData.state" label="State"></VTextField>

    <VTextField v-model="formData.postalCode" label="Postal Code"></VTextField>

    <VSelect v-model="formData.country" label="Country"></VSelect>

    <VCheckbox v-model="formData.useDefaultAddress" label="Use as default address"></VCheckbox>

    <VBtn class="me-4" type="submit">
        Submit
    </VBtn>

    <VBtn @click="clearForm">
        Clear
    </VBtn>
</form>
</template>
