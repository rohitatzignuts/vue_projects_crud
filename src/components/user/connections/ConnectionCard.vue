<template>
<VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
    <VCardItem>
        <VIcon>mdi-dots-vertical</VIcon>
        <div class="d-flex flex-column align-center">
            <VAvatar size="x-large" class="my-2" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-5-d340221a.png" />
            <VCardText class="text-h6 ">Eugenia Parsons</VCardText>
            <VCardSubtitle>Developer</VCardSubtitle>
            <div class="my-2">
                <div class="demo-space-x">
                    <VChip label color="primary">
                        React
                    </VChip>
                    <VChip label color="secondary" class="ms-2">
                        VueJS
                    </VChip>
                </div>
            </div>
        </div>
    </VCardItem>
    <VCardItem>
        <VRow class="text-center">
            <VCol>
                <h2>112</h2>
                <strong>Projects</strong>
            </VCol>
            <VCol>
                <h2>2.37</h2>
                <strong>Tasks</strong>
            </VCol>
            <VCol>
                <h2>890</h2>
                <strong>Connections</strong>
            </VCol>
        </VRow>
    </VCardItem>
    <VCardItem class="text-center">
        <VCardText>
            <VBtn variant="tonal" prepend-icon="mdi-account-check-outline">Connect</VBtn>
            <VBtn variant="tonal" class="ms-2"><VIcon>mdi-email-outline</VIcon></VBtn>
        </VCardText>
    </VCardItem>
</VCard>
</template>
