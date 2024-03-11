import { ref, watchEffect, watch } from 'vue'
import { products, type SubCategory } from '../Product'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default function useCart() {
    const router = useRouter()
    const categoryId = ref(router.currentRoute.value.params.id)
    const itemsInCart = ref<SubCategory[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'))
    const storedDate = ref<string>(JSON.parse(localStorage.getItem('selectedDate') || ''))

    const handleCartProduct = (cartProduct: SubCategory) => {
        const existingItem = itemsInCart.value.find(item => item.id === cartProduct.id)
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

    watchEffect(() => {
        storedDate.value
    })
    
    watch(storedDate, (newDate, oldDate) => {
        itemsInCart.value = [] 
        localStorage.setItem('cartItems', '[]')
    })

    const handleRemovedItems = (id: string) => {
        itemsInCart.value = itemsInCart.value.filter(item => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value))
    }

    const filteredProducts = ref(itemsInCart.value.filter(product => product.id === categoryId.value))

    return {
        handleCartProduct,
        handleRemovedItems,
        filteredProducts,
        itemsInCart,
        storedDate,
        categoryId
    }
}