import { ref } from 'vue'
import { products, type SubCategory } from '../Product'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default function useCart() {
    const router = useRouter()
    const categoryId = ref(router.currentRoute.value.params.id)
    const itemsInCart = ref<SubCategory[]>(JSON.parse(localStorage.getItem('cartItems') || '[]'))
    const storedDateString = localStorage.getItem('selectedDate')
    const storedDate = ref<string>(storedDateString && storedDateString !== 'undefined' ? JSON.parse(storedDateString) : '')

    //add items to the cart
    const handleCartProduct = (cartProduct: SubCategory) => {
        const existingItem = itemsInCart.value.find(
            (item) => item.id === cartProduct.id 
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
    
    const validateDate = () => {
        const currentDate = JSON.parse(localStorage.getItem('selectedDate') || '');
        if (currentDate !== storedDate.value) {
            localStorage.setItem('cartItems', '[]');
        }
    }
    
    //filter removed items
    const handleRemovedItems = (id: string) => {
        itemsInCart.value = itemsInCart.value.filter((item) => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(itemsInCart.value))
    }

    const filteredProducts = ref(products.value.filter((product) => product.id === categoryId.value))

    return {
        handleCartProduct,
        handleRemovedItems,
        filteredProducts,
        validateDate,
        itemsInCart,
        storedDate,
        categoryId
    }
}