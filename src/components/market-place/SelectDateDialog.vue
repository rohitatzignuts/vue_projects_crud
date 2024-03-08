<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref<boolean>(false)
const selectedDate = ref<string>('')
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const minDate = `${year}-${month}-${day}`;

const handleSelectedDate = () => {
    if (selectedDate.value) {
        isDialogVisible.value = false
        localStorage.setItem('selectedDate', JSON.stringify(selectedDate.value))
    } else {
        alert('Select a date to Continue...!')
    }
}
</script>

<template>
<VDialog v-model="isDialogVisible" max-width="600" persistent>
    <!-- Dialog Content -->
    <VCard>
        <VCardText>
            <v-row>
                <v-col cols="12">
                <v-text-field
                    v-model="selectedDate"
                    label="Select Date"
                    name="select-date"
                    type="date"
                    :min="minDate"
                    outlined
                    required
                ></v-text-field>
                </v-col>
            </v-row>
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
