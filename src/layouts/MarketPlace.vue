<script setup lang="ts">
import { useLogin } from '@/composables/useLogin';
const {handleLogout} = useLogin()
</script>

<template>
<VLayout class="rounded rounded-md my-10">
    <v-app-bar title="Market Place" class="px-11">
        <RouterLink to="/">
            <VBtn variant="outlined" class="me-3" color="info">Home</VBtn>
        </RouterLink>
        <RouterLink to="/market-place/cart">
            <VBtn variant="outlined" class="me-3" color="info">Cart
                <VIcon class="ms-2">mdi-cart</VIcon>
            </VBtn>
        </RouterLink>
        <!-- logout button  -->
        <VTooltip location="bottom">
            <template v-slot:activator="{ props }">
                <VBtn variant="outlined" @click="handleLogout" color="info" icon="mdi-logout" size="small" v-bind="props"/>
            </template>
            <span>Logout</span>
        </VTooltip>
    </v-app-bar>
    <VMain class="py-0 mt-4">
        <slot name="content" />
    </VMain>
</VLayout>
</template>
