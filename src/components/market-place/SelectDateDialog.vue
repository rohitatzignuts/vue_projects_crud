<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)
const selectedDate = ref('')
const currentDate = ref('')
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const year = today.getFullYear();
const minDate = `${year}-${month}-${day}`; 

const handleSelectedDate = () => {
    if(selectedDate.value){
        isDialogVisible.value = false
        currentDate.value = selectedDate.value
        console.log(currentDate.value);
    } else {
        alert('Select a DATE to Continue...!')
    }
}
</script>

<template>
<VDialog v-model="isDialogVisible" max-width="600" persistent>
    <!-- Dialog Content -->
    <VCard>
        <VCardText>
            <div class="d-flex align-center justify-space-between">
                    <label for="select date">Select Date</label>
                    <VBtn class="my-4" variant="tonal">
                        <input type="date" :min="minDate" label="Select Date" name="select date" v-model="selectedDate" required/>
                    </VBtn>
            </div>
        </VCardText>
        <VCardText class="d-flex justify-end flex-wrap ga-3">
            <VBtn @click="handleSelectedDate" 
                    color="info" size="large"
                    variant="flat"
                    block>
                Save
            </VBtn>
        </VCardText>
    </VCard>
</VDialog>
</template>
