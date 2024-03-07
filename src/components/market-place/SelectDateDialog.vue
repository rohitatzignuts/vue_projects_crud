<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref(true)
const selectedDate = ref('')
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const year = today.getFullYear();
const minDate = `${year}-${month}-${day}`; 

const handleSelectedDate = () => {
    if(selectedDate.value){
        isDialogVisible.value = false
        localStorage.setItem('selectedDate',JSON.stringify(selectedDate.value))
        // console.log(currentDate.value);
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
            <VRow>
                <VCol>
                    <RouterLink to="/">
                        <VBtn color="info" size="large" variant="outlined" block>
                            Go Back
                        </VBtn>
                    </RouterLink>
                </VCol>
                <VCol>
                    <VBtn @click="handleSelectedDate" color="info" size="large" variant="flat" block>
                        Save
                    </VBtn>
                </VCol>
            </VRow>

        </VCardText>
    </VCard>
</VDialog>
</template>

<style scoped>
a{
    text-decoration: none;
}
</style>
