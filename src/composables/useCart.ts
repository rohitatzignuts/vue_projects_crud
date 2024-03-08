import { computed, ref, watchEffect } from 'vue'
import { products, type SubCategory } from '../Product'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default function useCart() {
    const showCartDialog = ref<boolean>(false)
    const router = useRouter()
    const categoryId = ref(router.currentRoute.value.params.id)
    const itemsInCart = ref<SubCategory[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'))
    const storedDate = ref<string>(JSON.parse(localStorage.getItem('selectedDate') || ''))

    const handleCart = () => {
        showCartDialog.value = true
    }

    //add items to the cart
    const handleCartProduct = (cartProduct: SubCategory) => {
        const existingItem = itemsInCart.value.find(
            (item) => item.id === cartProduct.id && item.date === storedDate.value
        ) 
        if (existingItem) {
            existingItem.quantity++
        } else {
            itemsInCart.value.push({ ...cartProduct, quantity: 1, date: storedDate.value })
            Swal.fire({
                icon: 'success',
                title: 'Item Added to the Cart!',
                showConfirmButton: false,
                timer: 500
            })
        }
        localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value))
    }

    const filteredItemsInCart = computed(() => {
        return itemsInCart.value.filter((item) => {
            return item.date == storedDate.value
        })
    })

    watchEffect(() => {
        storedDate.value
    })

    //filter removed items
    const handleRemovedItems = (id: string) => {
        itemsInCart.value = itemsInCart.value.filter((item) => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value))
    }

    const filteredProducts = ref(products.value.filter((product) => product.id === categoryId.value))

    return {
        handleCart,
        handleCartProduct,
        filteredItemsInCart,
        handleRemovedItems,
        filteredProducts,
        showCartDialog,
        itemsInCart,
        storedDate,
        categoryId
    }
}
