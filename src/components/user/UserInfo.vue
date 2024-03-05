<template>
<v-card class="mx-auto" w100>
    <v-img height="200px" src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/user-profile-header-bg-ff6c2352.png" cover></v-img>

    <VRow>
        <VCol cols="1" class="ma-4" sm="0" md="2" lg="1">
            <img class="profile-image" src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1-129659bb.png"  width="100%" />
        </VCol>
        <VCol cols="12" md="">
            <div class="d-flex flex-column justify-between pa-6" color="#424242">
                <h5 class="text-h5 text-center text-sm-start font-weight-medium mb-3">John Doe</h5>
                <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4">
                    <div class="d-flex flex-wrap justify-center justify-sm-start flex-grow-1 flex-wrap">
                        <span class="d-flex align-center pe-3">
                            <v-icon class="me-1" style="font-size: 20px;">mdi-account-circle</v-icon>
                            <span class="text-body-1">UX Designer</span>
                        </span>
                        <span class="d-flex align-center px-3">
                            <v-icon class="me-1" style="font-size: 20px;">mdi-map-marker</v-icon>
                            <span class="text-body-1">Vatican City</span>
                        </span>
                        <span class="d-flex align-center px-3">
                            <v-icon class="me-1" style="font-size: 20px;">mdi-calendar</v-icon>
                            <span class="text-body-1">April 2021</span>
                        </span>
                    </div>
                    <v-btn color="primary" class="my-4" prepend-icon="mdi-check">Connected</v-btn>
                </div>
            </div>
        </VCol>
    </VRow>
</v-card>
</template>
<style scoped>
.profile-image {
    max-width: 100%;
    height: auto;
}
@media screen and ( max-width : 768px) {
    .profile-image {
        display: none;
}
}
</style>