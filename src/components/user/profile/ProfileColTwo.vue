<template>
<!-- Timeline  -->
<VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
    <div class="my-4">
        <h3>
            <VIcon class="me-4">mdi-chart-timeline-variant</VIcon>Activity Timeline
        </h3>
    </div>
    <div style="margin-left: -20px;">
        <!-- Add margin-left to move the timeline to the left -->
        <VTimeline align="start" side="end">
            <v-timeline-item dot-color="pink" size="small">
                <strong>Client Meeting</strong>
                <div class="text-caption">Project meeting with john @10:15am</div>
            </v-timeline-item>

            <v-timeline-item dot-color="teal-lighten-3" size="small">
                <strong>Create a new project for client 😎</strong>
                <div class="text-caption mb-2">Add files to new design folder</div>
            </v-timeline-item>

            <v-timeline-item dot-color="pink" size="small">
                <strong>Shared 2 New Project Files</strong>
                <div class="text-caption mb-2">Sent by Mollie Dixon</div>
            </v-timeline-item>

            <v-timeline-item dot-color="teal-lighten-3" size="small">
                <strong>Project status updated</strong>
                <div class="text-caption">WooCommerce iOS App Completed</div>
            </v-timeline-item>
        </VTimeline>
    </div>
</VCard>

<VRow class="my-2">
    <!-- Connections -->
    <VCol cols="12" md="12" sm="12" lg="6" xs="12">
        <VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
            <div class="d-flex justify-space-between align-center my-3">
                <h3>Connection</h3>
                <VBtn variant="plain" class="pa-0 ma-0" icon>
                    <VIcon>
                        mdi-dots-vertical
                    </VIcon>
                </VBtn>
            </div>
            <div>
                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-e4ad8d8c.png" alt="Avatar" />

                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">Cecilia Payne</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">45 Connections</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <v-btn variant="outlined" class="text-primary">
                                <v-icon>mdi-account-check</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-e4ad8d8c.png" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">Cecilia Payne</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">45 Connections</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <v-btn variant="outlined" class="text-primary">
                                <v-icon>mdi-account-check</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-e4ad8d8c.png" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">Cecilia Payne</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">45 Connections</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <v-btn variant="outlined" class="text-primary">
                                <v-icon>mdi-account-check</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-e4ad8d8c.png" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">Cecilia Payne</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">45 Connections</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <v-btn variant="outlined" class="text-primary">
                                <v-icon>mdi-account-check</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-list-item class="px-0 py-2">
                    <v-list-item-content>
                        <v-btn block class="my-3" variant="text">
                            <span class="text-subtitle-2">View All Connections</span>
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>

            </div>
        </VCard>
    </VCol>

    <!-- Teams -->
    <VCol cols="12" md="12" sm="12" lg="6" xs="12">
        <VCard class="v-theme--dark v-card--density-default v-card--variant-elevated pa-4">
            <div class="d-flex justify-space-between align-center my-3">
                <h3>Teams</h3>
                <VBtn variant="plain" class="pa-0 ma-0" icon>
                    <VIcon>
                        mdi-dots-vertical
                    </VIcon>
                </VBtn>
            </div>
            <div>
                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAwFBMVEXq+v/o+v9h2vtl4v9i3P1j3v9m5f9n3Pxk4P/k+f/P9P+W6P7d9/9y3vzg+P/D8f514P3m+f/i+P/M8/+O5f3I8v5u3fxq3fzY9v9p3/6A4f257/627v6b6P6f6P1n5/+87/6y7f6S5/2J5P1t3/174PzT9P6i6v554f3a9v9o4v+v7P7F8v++8P595v525f5v4v5n3v6p6/2D4/1+4/6H4/3V9f+M6v+H6f9s5P9r4f9q5/+m6v5y5P7R9P/A8P7oQCwMAAAEN0lEQVRYw+2X15aiQBCGgY5kVDKSk4KO2VmdsO//Vtsm5uyVI3O1e/y9oAH9uqq6uqrlnnrqqaee+g/EjzK1rCWe+9Lgc12q5mzQizcICsBETP2GHIzkJWAy0mEf+6QClFFYruKVvD8/mdZL3EzkyG9e5vzjQDHEpcIueo7wJGETWDva+IHGcZJJQuVxoFK+tRdysMDOepgYQF2fOXy7fB318NjxrOuwMunKLxp/dn33++Vl/jhwJtj7240WrahndrfWr8X4caCO1GkXz8CjXijebkevvYCwAw70JbDJ8p3/EdAS1OqW4AbeSBH9SK/vZr8WwePAT4dYl5G7AaXLuTKa6N2i/O6RNsZbcOZNZerVM11vDbq57MPxx6/R48Bh/hZVybtZqgKEAqUIsqs9yaNkFHmy+7jLromIg+OYInZVVdWwbUdAFMeAEJgxUx+SqMsqhJAYu8ympeUqiqYpriWjIjcNcjI1m2sP1JnEhzG1SbNWxGC1TL52z/YgD7R14TlN3Gxm4jd5VY5iYiZV/hbye/Ug819xHXuL8bAmmZWYBT7K1bccnxcxkSVmZ0rVaQ2MPRtKkRn+Zga5MtjNXou1yImjsAFb/RtGJit8yTe+sr1QPayZYe0RAOCxmjWwjI98cclCMTXARL9bvF0b75SrgxmF0GcUnSBBEOCy5jmlhoJwSxprg/O7XmfAULotDOExZbUmA8JJ0N+zbTihanozS5+Q9N5iE1B3Y82nJfu+sqUX4EJnNzXKR106mKuJfgdogOwrt1VoVIyxuQJfLBaSjG47hrZbZdIdYEpXyW3+FqEm4rnh+8XlFQuumDiI1MPrjOuP4m5LFXfYGd88BjZUJY7fbwFbCmSwmfZmY6+upUF7X6Lofrea+hjK1bkiEhJs3jKelTKTILKZM2PHZLFmDYA/bZv8iLLvFAlNhtiJJE6sgS8GsJifc3ImaSeIf5BdmYSaKEUGPtbK9wpNsgUx2bXl25rTzMb/+pVS063Et8U2zAsMdvq3DxBa6gsxhtAMRnP7EHXxnS+XURWYDgL46LfDh+qXFaoQ4ViwCXTCdhwEwbiNJkiwHYyRoMq69vhRBJSm4SAMEKWYiQ0QxZRM8hLK0x5nmw0LoVjpaWQzSMk+DjxmqS6JXLvs01Om6mF+7fKOV58CaBzkS9iSPl2P/7TJ1YzhO/LagTVpcvcnfdkS7KrLTFDUG+BL3cnhI+0DVN3beGpCiLaz2zuJAfk+wH1XpiwHFRH3M+CIOFIH3yKI1Fb80XFuahzmt163xEZr0uOt9Cd9DpycmMfy2V3JRNgfcdPQw+V4eF5171V6HDgYIyfQlJlcxKtweuKkBm426ed0/OK99/lfoeSxoNowbvyEv6YmgwNie/TcVXpEMfMAcnbjzppTdzcI9bITrxdSktcu//cjTZpVQ+6pp5566ql/X38AmYlpr95+tigAAAAASUVORK5CYII=" alt="Avatar" />

                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">React Developers</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">24 Members</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <VChip label color="primary">
                                Primary
                            </VChip>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA+VBMVEX/7uz/cmKiWf/yTh4Kz4MavP75fmP97uzCi/hd2qY5w/xYyvpxr8Lsc2Wk2vP/nJDB4PHy7O3/6uf/4+D/1dAR0Ib/eWmh2vP27ej+0cid4cJ23bIs05Ii0o32dlLzUyWnYP6mXv6Smfq7gPqok/nOoPbUqPXrzfDe5+7d5+723u7T6dn/3tjE59Jk2qpM159B15v6rZn/k4b/c2P0ZDr0Wy+zdPuzc/vZsfPYsPPp6+Ln6+GVw8ub18T/ycN8vML8x7ncs7e/qrT/u7O+pa//tKv/raPcoaH/ppz1ppoX0YnxjYj4lnv/iHvugnb/fm/3iGr3hGP0YTfsgWsHAAABW0lEQVRYw+3U526DMBDA8UuA0pCWkgQIIQS6m7TZo3vvvd7/YUpEoVgt/nC4Eor8f4CfbJ19wOPxeLwZqDxwJ0LQXC7IfLmtoL3aOMBCMDSvsJ4nkGDUDe6+YyEJHOkYcCCQYLwhBnQp4AgzmAkFzNUQoEcDTxHgJw3ETOWdApplBHhOAe8B00ci+Ib7fRU3ATR17G549v4Ch21A1354XQx6Wpp2d315oQO+rbV82DyAXFUkP0WVsd6mD/2ApaL0XbGE8w7ycVD2vUhEnXF7hQCrUiwVA27kCVCJgwoG3CXAdYmohQCXCXCVBLUsgHu0KzezMBTmzwb2KQ87G1/v13JQo+WA7ujkbCHoGKa1NK0J+Ky6IYYVIH1WXxSZggWRLdgRGYNd1mCDNWj87wnr6cEeAdrpQTvuGYfpQdmh3BjVzmPk9WVgIjrhiC1gk2z3GobT7QCPx+PxZrEvM4ogL9NmJ9MAAAAASUVORK5CYII=" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">React Developers</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">24 Members</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <VChip label color="primary">
                                Primary
                                </VChip>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA+VBMVEX/7uz/cmKiWf/yTh4Kz4MavP75fmP97uzCi/hd2qY5w/xYyvpxr8Lsc2Wk2vP/nJDB4PHy7O3/6uf/4+D/1dAR0Ib/eWmh2vP27ej+0cid4cJ23bIs05Ii0o32dlLzUyWnYP6mXv6Smfq7gPqok/nOoPbUqPXrzfDe5+7d5+723u7T6dn/3tjE59Jk2qpM159B15v6rZn/k4b/c2P0ZDr0Wy+zdPuzc/vZsfPYsPPp6+Ln6+GVw8ub18T/ycN8vML8x7ncs7e/qrT/u7O+pa//tKv/raPcoaH/ppz1ppoX0YnxjYj4lnv/iHvugnb/fm/3iGr3hGP0YTfsgWsHAAABW0lEQVRYw+3U526DMBDA8UuA0pCWkgQIIQS6m7TZo3vvvd7/YUpEoVgt/nC4Eor8f4CfbJ19wOPxeLwZqDxwJ0LQXC7IfLmtoL3aOMBCMDSvsJ4nkGDUDe6+YyEJHOkYcCCQYLwhBnQp4AgzmAkFzNUQoEcDTxHgJw3ETOWdApplBHhOAe8B00ci+Ib7fRU3ATR17G549v4Ch21A1354XQx6Wpp2d315oQO+rbV82DyAXFUkP0WVsd6mD/2ApaL0XbGE8w7ycVD2vUhEnXF7hQCrUiwVA27kCVCJgwoG3CXAdYmohQCXCXCVBLUsgHu0KzezMBTmzwb2KQ87G1/v13JQo+WA7ujkbCHoGKa1NK0J+Ky6IYYVIH1WXxSZggWRLdgRGYNd1mCDNWj87wnr6cEeAdrpQTvuGYfpQdmh3BjVzmPk9WVgIjrhiC1gk2z3GobT7QCPx+PxZrEvM4ogL9NmJ9MAAAAASUVORK5CYII=" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">React Developers</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">24 Members</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <VChip label color="primary">
                                Primary
                            </VChip>
                        </v-list-item-action>
                    </div>
                </v-list-item>

                <v-list-item class="px-0 py-2">
                    <div class="d-flex justify-space-between align-center">
                        <div class="d-flex">
                            <v-avatar class="me-2" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAwFBMVEXq+v/o+v9h2vtl4v9i3P1j3v9m5f9n3Pxk4P/k+f/P9P+W6P7d9/9y3vzg+P/D8f514P3m+f/i+P/M8/+O5f3I8v5u3fxq3fzY9v9p3/6A4f257/627v6b6P6f6P1n5/+87/6y7f6S5/2J5P1t3/174PzT9P6i6v554f3a9v9o4v+v7P7F8v++8P595v525f5v4v5n3v6p6/2D4/1+4/6H4/3V9f+M6v+H6f9s5P9r4f9q5/+m6v5y5P7R9P/A8P7oQCwMAAAEN0lEQVRYw+2X15aiQBCGgY5kVDKSk4KO2VmdsO//Vtsm5uyVI3O1e/y9oAH9uqq6uqrlnnrqqaee+g/EjzK1rCWe+9Lgc12q5mzQizcICsBETP2GHIzkJWAy0mEf+6QClFFYruKVvD8/mdZL3EzkyG9e5vzjQDHEpcIueo7wJGETWDva+IHGcZJJQuVxoFK+tRdysMDOepgYQF2fOXy7fB318NjxrOuwMunKLxp/dn33++Vl/jhwJtj7240WrahndrfWr8X4caCO1GkXz8CjXijebkevvYCwAw70JbDJ8p3/EdAS1OqW4AbeSBH9SK/vZr8WwePAT4dYl5G7AaXLuTKa6N2i/O6RNsZbcOZNZerVM11vDbq57MPxx6/R48Bh/hZVybtZqgKEAqUIsqs9yaNkFHmy+7jLromIg+OYInZVVdWwbUdAFMeAEJgxUx+SqMsqhJAYu8ympeUqiqYpriWjIjcNcjI1m2sP1JnEhzG1SbNWxGC1TL52z/YgD7R14TlN3Gxm4jd5VY5iYiZV/hbye/Ug819xHXuL8bAmmZWYBT7K1bccnxcxkSVmZ0rVaQ2MPRtKkRn+Zga5MtjNXou1yImjsAFb/RtGJit8yTe+sr1QPayZYe0RAOCxmjWwjI98cclCMTXARL9bvF0b75SrgxmF0GcUnSBBEOCy5jmlhoJwSxprg/O7XmfAULotDOExZbUmA8JJ0N+zbTihanozS5+Q9N5iE1B3Y82nJfu+sqUX4EJnNzXKR106mKuJfgdogOwrt1VoVIyxuQJfLBaSjG47hrZbZdIdYEpXyW3+FqEm4rnh+8XlFQuumDiI1MPrjOuP4m5LFXfYGd88BjZUJY7fbwFbCmSwmfZmY6+upUF7X6Lofrea+hjK1bkiEhJs3jKelTKTILKZM2PHZLFmDYA/bZv8iLLvFAlNhtiJJE6sgS8GsJifc3ImaSeIf5BdmYSaKEUGPtbK9wpNsgUx2bXl25rTzMb/+pVS063Et8U2zAsMdvq3DxBa6gsxhtAMRnP7EHXxnS+XURWYDgL46LfDh+qXFaoQ4ViwCXTCdhwEwbiNJkiwHYyRoMq69vhRBJSm4SAMEKWYiQ0QxZRM8hLK0x5nmw0LoVjpaWQzSMk+DjxmqS6JXLvs01Om6mF+7fKOV58CaBzkS9iSPl2P/7TJ1YzhO/LagTVpcvcnfdkS7KrLTFDUG+BL3cnhI+0DVN3beGpCiLaz2zuJAfk+wH1XpiwHFRH3M+CIOFIH3yKI1Fb80XFuahzmt163xEZr0uOt9Cd9DpycmMfy2V3JRNgfcdPQw+V4eF5171V6HDgYIyfQlJlcxKtweuKkBm426ed0/OK99/lfoeSxoNowbvyEv6YmgwNie/TcVXpEMfMAcnbjzppTdzcI9bITrxdSktcu//cjTZpVQ+6pp5566ql/X38AmYlpr95+tigAAAAASUVORK5CYII=" alt="Avatar" />
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-medium">React Developers</v-list-item-title>
                                <v-list-item-subtitle class="font-weight-light text-caption">24 Members</v-list-item-subtitle>
                            </v-list-item-content>
                        </div>
                        <v-list-item-action>
                            <VChip label color="primary">
                                Primary
                            </VChip>
                        </v-list-item-action>
                    </div>
                </v-list-item>
                <v-list-item class="px-0 py-2">
                    <v-list-item-content>
                        <v-btn block class="my-3" variant="text">
                            <span class="text-subtitle-2">View All Teams</span>
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>

            </div>
        </VCard>
    </VCol>
</VRow>
</template>

<style scoped>
h3 {
    color: #d0d4f1ad;
    font-weight: 600;
}

ul,
li {
    list-style-type: none;
}
</style>
