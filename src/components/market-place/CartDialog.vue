<script lang="ts" setup>
import type { SubCategory } from '@/Product'
import { computed, ref } from 'vue'
import CartAddress from './CartAddress.vue'
import { useRouter } from 'vue-router'

const isorderConfirmed = ref<boolean>(false)
const router = useRouter()
const orderDate = ref(JSON.parse(localStorage.getItem('selectedDate') || ''))
const tab = ref<any>(null)

const props = defineProps<{
  cartItems: Array<SubCategory>
}>()

const emits = defineEmits<{
  (event: 'handleCloseDialog', payload: Boolean): void
  (event: 'handleRemovedItems', payload: string): void
}>()

const removeItem = (id: string) => {
  emits('handleRemovedItems', id)
}

const prevRoute = () => {
  router.go(-1)
}

const cartTotal = computed(() => {
  if (props.cartItems && props.cartItems.length) {
    return props.cartItems.reduce((total, item) => {
      if (item.quantity && item.price) {
        return total + item.quantity * item.price
      }
      return total
    }, 0)
  }
  return 0
})

const orderConfirmed = () => {
  isorderConfirmed.value = true
  tab.value = 'address'
}
</script>

<template>
  <VLayout class="text-center my-4">
    <v-app-bar>
      <div class="d-flex justify-space-start ga-3 align-center px-9">
        <VBtn variant="outlined" class="me-3" color="info" @click="prevRoute">
          <VIcon>mdi-arrow-left-thin</VIcon> Back
        </VBtn>
        <h2>Cart</h2>
      </div>
    </v-app-bar>
    <VMain class="pa-8 mt-10">
      <VCard>
        <VTabs v-model="tab" align-tabs="center" color="info" bg-color="#FFFFFF00" stacked>
          <VTab value="cart">
            <VIcon class="my-2">mdi-cart</VIcon>
            Cart
          </VTab>

          <VTab value="address">
            <VIcon class="my-2">mdi-office-building-marker</VIcon>
            Address
          </VTab>
        </VTabs>

        <v-window v-model="tab">
          <v-window-item value="cart">
            <VRow>
              <!-- cart  -->
              <VCol md="8" sm="12" lg="7" xs="12">
                <VCard class="ma-2">
                  <VList>
                    <v-list-subheader class="mb-4">
                      My Shopping Bag ({{ props.cartItems ? props.cartItems.length : 0 }} Items)
                    </v-list-subheader>
                    <v-list-item
                      v-for="(item, i) in props.cartItems"
                      :key="i"
                      :value="item"
                      color="primary"
                      rounded="shaped"
                    >
                      <VRow>
                        <VCol lg="2" md="4" sm="6">
                          <v-img :src="item.imageUrl" cover min-height="100%" />
                        </VCol>
                        <VCol lg="10" md="8" sm="6">
                          <div class="d-flex justify-space-between">
                            <strong>{{ item.title }}</strong>
                            <VBtn variant="text" class="rounded-pill" @click="removeItem(item.id)">
                              <VIcon icon="mdi-close" />
                            </VBtn>
                          </div>
                          <div class="d-flex flex-column align-start">
                            <h4 class="my-2">$ {{ item.price }}</h4>
                            <input
                              type="number"
                              min="1"
                              value="1"
                              class="border rounded-lg pa-1"
                              v-model="item.quantity"
                            />
                          </div>
                        </VCol>
                      </VRow>
                    </v-list-item>
                  </VList>
                </VCard>
              </VCol>
              <!-- place order  -->
              <VCol md="4" sm="12" lg="5" xs="12">
                <VCard class="ma-2" outlined>
                  <VCardText>
                    <h3 class="text-base font-weight-medium mb-3 ms-2">Offer</h3>
                    <div class="d-flex align-center justify-space-between">
                      <input type="text" placeholder="Enter Promo Code" class="pa-2" width="100%" />
                      <VBtn color="info" variant="outlined">Apply</VBtn>
                    </div>
                    <VDivider class="my-4"></VDivider>
                  </VCardText>
                  <VDivider></VDivider>
                  <VCardText>
                    <h3 class="text-base font-weight-medium mb-3">Price Details</h3>
                    <div
                      class="text-high-emphasis"
                      v-if="props.cartItems && props.cartItems.length"
                    >
                      <div class="d-flex justify-space-between mb-2">
                        <span>Bag Total</span>
                        <span>{{ cartTotal }}</span>
                      </div>
                      <div class="d-flex justify-space-between mb-2">
                        <span>Order Date</span>
                        <span>{{ orderDate }}</span>
                      </div>
                      <div class="d-flex justify-space-between">
                        <span>Delivery Charges</span>
                        <div>
                          <span class="text-decoration-line-through text-disabled me-2">$5.00</span>
                          <VChip class="text-success" small>Free</VChip>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-center my-6">
                      <strong>Your Cart Is Empty !!</strong>
                    </div>
                  </VCardText>
                  <VDivider></VDivider>
                  <VCardText>
                    <div class="d-flex justify-space-between py-4">
                      <h3 class="text-base font-weight-medium">Total</h3>
                      <h3 class="text-base font-weight-medium">$ {{ cartTotal }}</h3>
                    </div>
                    <VBtn
                      class="text-none mb-4"
                      color="success"
                      size="x-large"
                      variant="outlined"
                      block
                      @click="orderConfirmed"
                      >Confirm Order</VBtn
                    >
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </v-window-item>
          <v-window-item value="address">
            <VCard v-if="isorderConfirmed && props.cartItems.length">
              <VCardText>
                <CartAddress />
              </VCardText>
            </VCard>
            <VCard v-else>
              <VCardText> Your Cart is either empty or You havent confirmed your Order </VCardText>
            </VCard>
          </v-window-item>
        </v-window>
      </VCard>
    </VMain>
  </VLayout>
</template>
