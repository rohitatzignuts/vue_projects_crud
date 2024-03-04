<template>
<VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
    <v-card-items>
        <div class="d-flex align-center justify-space-between pa-4">
            <div class="d-flex">
                <VAvatar size="large" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA+VBMVEX/7uz/cmKiWf/yTh4Kz4MavP75fmP97uzCi/hd2qY5w/xYyvpxr8Lsc2Wk2vP/nJDB4PHy7O3/6uf/4+D/1dAR0Ib/eWmh2vP27ej+0cid4cJ23bIs05Ii0o32dlLzUyWnYP6mXv6Smfq7gPqok/nOoPbUqPXrzfDe5+7d5+723u7T6dn/3tjE59Jk2qpM159B15v6rZn/k4b/c2P0ZDr0Wy+zdPuzc/vZsfPYsPPp6+Ln6+GVw8ub18T/ycN8vML8x7ncs7e/qrT/u7O+pa//tKv/raPcoaH/ppz1ppoX0YnxjYj4lnv/iHvugnb/fm/3iGr3hGP0YTfsgWsHAAABW0lEQVRYw+3U526DMBDA8UuA0pCWkgQIIQS6m7TZo3vvvd7/YUpEoVgt/nC4Eor8f4CfbJ19wOPxeLwZqDxwJ0LQXC7IfLmtoL3aOMBCMDSvsJ4nkGDUDe6+YyEJHOkYcCCQYLwhBnQp4AgzmAkFzNUQoEcDTxHgJw3ETOWdApplBHhOAe8B00ci+Ib7fRU3ATR17G549v4Ch21A1354XQx6Wpp2d315oQO+rbV82DyAXFUkP0WVsd6mD/2ApaL0XbGE8w7ycVD2vUhEnXF7hQCrUiwVA27kCVCJgwoG3CXAdYmohQCXCXCVBLUsgHu0KzezMBTmzwb2KQ87G1/v13JQo+WA7ujkbCHoGKa1NK0J+Ky6IYYVIH1WXxSZggWRLdgRGYNd1mCDNWj87wnr6cEeAdrpQTvuGYfpQdmh3BjVzmPk9WVgIjrhiC1gk2z3GobT7QCPx+PxZrEvM4ogL9NmJ9MAAAAASUVORK5CYII=" />

                <v-card-title>
                    Figma Dashboard
                </v-card-title>
            </div>
            <v-card-subtitle class="pa-0">
                <VIcon>mdi-star-outline</VIcon>
                <VIcon>mdi-dots-vertical</VIcon>
            </v-card-subtitle>
        </div>
    </v-card-items>
    <div>

        <v-card-text>
            <VRow>
                <VCol cols="12" md="6" lg="4">
                    <v-card class="pa-2 rounded">
                        <h3 class="text-base">$980 <span class="text-body-1">/ $420</span></h3>
                        <span>Total Budget</span>
                    </v-card>
                </VCol>
                <VCol cols="12" md="6" lg="8">
                    <div>
                        <h6 class="text-base font-weight-medium">Start Date: <span class="text-body-1">24/7/21</span></h6>
                        <h6 class="text-base font-weight-medium mb-1">Deadline: <span class="text-body-1">8/10/21</span></h6>
                    </div>
                </VCol>
            </VRow>
            <p class="mt-4 mb-0 clamp-text">App design combines the user interface (UI) and user experience (UX).</p>
        </v-card-text>
    </div>
    <v-card-text>
        We don't make assumptions about the rest of your technology stack, so you can develop new features in React.
    </v-card-text>

    <VCard>
        <v-card-text>
            <div class="d-flex align-center justify-space-between flex-wrap gap-2">
                <h4 class="text-base font-weight-medium">All Hours: <span class="text-body-1">880/421</span></h4>
                <v-chip class="text-error" dense>45 Days left</v-chip>
            </div>
            <div class="d-flex align-center justify-space-between flex-wrap text-sm mt-4 mb-2">
                <span>Task: 22/140</span>
                <span>68% Completed</span>
            </div>
            <v-progress-linear height="8" color="primary" value="68.0"></v-progress-linear>
            <div class="d-flex align-center justify-space-between flex-wrap gap-2 mt-3">
                <div class="d-flex align-center">
                    <v-avatar-group>
                        <VAvatar :size="35" color="primary">
                            <VTooltip activator="parent" location="top">
                                John Doe
                            </VTooltip>
                        </VAvatar>
                        <VAvatar :size="35" color="primary">
                            <VTooltip activator="parent" location="top">
                                John Doe
                            </VTooltip>
                        </VAvatar>
                        <VAvatar :size="35" color="primary">
                            <VTooltip activator="parent" location="top">
                                John Doe
                            </VTooltip>
                        </VAvatar>
                    </v-avatar-group>
                    <span class="text-xs ms-2">458 members</span>
                </div>
                <span>
                    <VIcon class="me-1">mdi-message-processing-outline</VIcon>98
                </span>
            </div>
        </v-card-text>
    </VCard>
</VCard>
</template>
