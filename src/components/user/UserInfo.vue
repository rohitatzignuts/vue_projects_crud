<template>
<v-sheet class="w-100 rounded">
    <v-card color="#2F3349">
        <v-img class="align-end text-white " height="200" src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/user-profile-header-bg-ff6c2352.png" cover>
        </v-img>
        <v-row no-gutters>
            <v-col cols="1" class="">
                <div>
                    <v-img src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-1-129659bb.png" cover max-width="110px" absolute></v-img>
                </div>
            </v-col>
            <v-col class="my-0">
                <v-sheet class="d-flex flex-column justify-between pa-6" color="#424242">
                    <h5 class="text-h5 text-center text-sm-start font-weight-medium mb-3">John Doe</h5>
                    <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4">
                        <div class="d-flex flex-wrap justify-center justify-sm-start flex-grow-1 ">
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
                        <v-btn color="primary" prepend-icon="mdi-check">Connected</v-btn>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-card>
</v-sheet>
</template>
