<script lang="ts" setup>
import type { SubCategory } from '@/Product'
import { computed, ref } from 'vue'
import CartAddress from './CartAddress.vue'
import { useRouter } from 'vue-router'

const isorderConfirmed = ref<boolean>(false)
const router = useRouter()
const tab = ref<any>(null)

const props = defineProps<{
  cartItems: Array<SubCategory>
}>()

const emits = defineEmits<{
  (event: 'handleCloseDialog', payload: boolean): void
  (event: 'handleRemovedItems', payload: string): void
}>()

const removeItem = (id: string) => {
  emits('handleRemovedItems', id)
}

const prevRoute = () => {
  router.go(-1)
}

const decressQuantity = (id: string) => {
  if (Array.isArray(props.cartItems)) {
    const item = props.cartItems.find((item) => item.id === id)
    if (item && item.quantity > 1) {
      item.quantity--
      localStorage.setItem('cartItems', JSON.stringify(props.cartItems))
    }
  }
}

const increseQuantity = (id: string) => {
  if (Array.isArray(props.cartItems)) {
    const item = props.cartItems.find((item) => item.id === id)
    if (item) {
      item.quantity++
      localStorage.setItem('cartItems', JSON.stringify(props.cartItems))
    }
  }
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
  <VContainer class="bg-surface-variant mt-14">
    <div class="mb-3">
      <VBtn variant="outlined" color="#fff" @click="prevRoute">
        <VIcon>mdi-arrow-left-thin</VIcon> Back
      </VBtn>
    </div>
    <VCard>
      <VTabs v-model="tab" align-tabs="center" color="info" bg-color="#FFFFFF00" stacked>
        <VTab value="cart">
          <VIcon class="my-2">mdi-cart</VIcon>
          Cart
        </VTab>

        <VTab value="address" v-if="props.cartItems.length">
          <VIcon class="my-2">mdi-office-building-marker</VIcon>
          Address
        </VTab>
      </VTabs>

      <v-window v-model="tab">
        <v-window-item value="cart">
          <VRow>
            <!-- cart  -->
            <VCol md="7" sm="12" lg="7" xs="12">
              <VCard class="ma-2">
                <VList>
                  <v-list-subheader class="mb-4">
                    My Shopping Bag ({{ props.cartItems ? props.cartItems.length : 0 }} Items)
                  </v-list-subheader>
                  <v-list-item v-for="(item, i) in props.cartItems" :key="i" :value="item" color="primary"
                    rounded="shaped">
                    <VRow class="mt-2">
                      <VCol lg="3" xs="6" md="3" sm="3">
                        <v-img :src="item.imageUrl" cover min-height="100%" />
                      </VCol>
                      <VCol lg="9" xs="6" md="9" sm="9">
                        <div class="d-flex justify-space-between">
                          <strong>{{ item.title }}</strong>
                          <VBtn variant="text" class="rounded-pill" @click="removeItem(item.id)">
                            <VIcon icon="mdi-close" />
                          </VBtn>
                        </div>
                        <div class="d-flex flex-column align-start">
                          <h4 class="my-2">$ {{ item.price }}</h4>
                          <div class="d-flex align-center">
                            <VBtn icon="mdi-minus" size="x-small" variant="text" @click="decressQuantity(item.id)" />
                            <input type="number" min="1" value="1" class="border rounded-lg pa-1"
                              v-model="item.quantity" disabled />
                            <VBtn icon="mdi-plus" size="x-small" variant="text" @click="increseQuantity(item.id)" />
                          </div>
                        </div>
                      </VCol>
                    </VRow>
                  </v-list-item>
                </VList>
              </VCard>
            </VCol>
            <!-- place order  -->
            <VCol md="5" sm="12" lg="5" xs="12">
              <VCard class="ma-2" outlined>
                <VCardText>
                  <h3 class="text-base font-weight-medium mb-3 ms-2">Offer</h3>
                  <div class="d-flex align-center justify-space-between">
                    <input type="text" placeholder="Enter Promo Code" class="pa-2" width="100%" />
                    <VBtn color="info" variant="outlined" size="small">Apply</VBtn>
                  </div>
                  <VDivider class="my-4"></VDivider>
                </VCardText>
                <VDivider></VDivider>
                <VCardText>
                  <h3 class="text-base font-weight-medium mb-3">Price Details</h3>
                  <div class="text-high-emphasis" v-if="props.cartItems && props.cartItems.length">
                    <div class="d-flex justify-space-between mb-2">
                      <span>Bag Total</span>
                      <span>{{ cartTotal }}</span>
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
                  <VBtn v-if="props.cartItems.length" class="text-none mb-4" color="success" size="x-large"
                    variant="outlined" block @click="orderConfirmed">Confirm Order</VBtn>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </v-window-item>
        <v-window-item value="address">
          <VCard v-if="isorderConfirmed">
            <VCardText>
              <CartAddress />
            </VCardText>
          </VCard>
          <VCard v-else>
            <VCardText> Confirm Order To procede </VCardText>
          </VCard>
        </v-window-item>
      </v-window>
    </VCard>
  </VContainer>
</template>
