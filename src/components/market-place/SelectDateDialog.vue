<script lang="ts" setup>
import useCart from '@/composables/useCart'
import { ref } from 'vue'

const isDialogVisible = ref<boolean>(true)
const selectedDate = ref<Date | null>(null)
const today = new Date()
const day = String(today.getDate()).padStart(2, '0')
const month = String(today.getMonth() + 1).padStart(2, '0')
const year = today.getFullYear()
const minDate = `${year}-${month}-${day}`
const { validateDate } = useCart()

const handleSelectedDate = () => {
    if (selectedDate.value) {
        isDialogVisible.value = false
        localStorage.setItem(
            'selectedDate',
            JSON.stringify(selectedDate.value.toISOString().split('T')[0])
        )
    } else {
        alert('Select a date to Continue...!')
    }
    validateDate()
}

</script>

<template>
    <VDialog v-model="isDialogVisible" max-width="600" persistent>
        <!-- Dialog Content -->
        <VCard>
            <VCardText>
                <div>
                    <VDatePicker v-model="selectedDate" :min="minDate" outlined required fluid></VDatePicker>
                </div>
            </VCardText>
            <VCardText class="d-flex justify-end flex-wrap ga-3">
                <VRow>
                    <VCol>
                        <RouterLink to="/">
                            <VBtn color="info" size="large" variant="outlined" block> Go Back </VBtn>
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
a {
    text-decoration: none;
}
</style>
