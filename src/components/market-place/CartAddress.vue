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

const clearForm = () => {
    formData.value = {}
};
const submitForm = () => {
    console.log("Form Data:", formData.value);
    clearForm()
};

</script>

<template>
<form @submit.prevent="submitForm">
    <VTextField v-model="formData.name" label="Name" required></VTextField>

    <VTextField v-model="formData.phone" label="Phone Number" required></VTextField>

    <VTextField v-model="formData.email" label="E-mail" required></VTextField>

    <VTextField v-model="formData.address1" label="Address Line 1" required></VTextField>

    <VTextField v-model="formData.address2" label="Address Line 2" required></VTextField>

    <VTextField v-model="formData.city" label="City" required></VTextField>

    <VTextField v-model="formData.state" label="State" required></VTextField>

    <VTextField v-model="formData.postalCode" label="Postal Code" required></VTextField>

    <VSelect v-model="formData.country" label="Country"></VSelect>

    <VCheckbox v-model="formData.useDefaultAddress" label="Use as default address"></VCheckbox>

    <div class="d-flex justify-space-start align-center">
        <VBtn class="me-4" type="submit" color="success" variant="outlined">
            Submit
        </VBtn>
    
        <VBtn @click="clearForm" variant="outlined"> 
            Clear
        </VBtn>
    </div>
</form>
</template>
