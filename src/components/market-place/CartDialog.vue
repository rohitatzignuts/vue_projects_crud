<script lang="ts" setup>
const emits = defineEmits(['handleCloseDialog'])
defineProps<{
    isVisible : boolean
}>()

</script>

<template>
<div class="text-center pa-4">
    <v-dialog :model-value="isVisible" transition="dialog-bottom-transition" fullscreen>
        <v-card>
            <v-toolbar>
                <v-btn icon="mdi-close" @click="emits('handleCloseDialog',false)"></v-btn>

                <v-toolbar-title>Cart</v-toolbar-title>

                <v-spacer></v-spacer>

            </v-toolbar>

            CART
        </v-card>
    </v-dialog>
</div>
</template>
