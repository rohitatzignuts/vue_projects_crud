import { ref } from "vue";

export interface SubCategory {
    id: string;
    parentCategory: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity?: number; 
    date? : string;
}

export interface MainCategory {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    subCategory?: SubCategory[];
}

export const products = ref<MainCategory[]>([
    {
        id: "1",
        title: "Clothing",
        description: 'Clothing category',
        imageUrl: 'https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg',
        category: "Apparel",
        subCategory: [
            {
                id: "11",
                parentCategory: "1",
                title: "Men's T-shirt",
                description: 'Comfortable and stylish men\'s t-shirt',
                price: 20,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SQyH8b9NA-wl6ZDjyT_AYx5uQ1BBKNY52A&usqp=CAU",
            },
            {
                id: "12",
                parentCategory: "1",
                title: "Women's Dress",
                description: 'Elegant and fashionable women\'s dress',
                price: 50,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SQyH8b9NA-wl6ZDjyT_AYx5uQ1BBKNY52A&usqp=CAU",
            },
        ],
    },
    {
        id: "2",
        title: "Electronics",
        description: 'Electronics category',
        category: "Electronics",
        imageUrl: 'https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/ElectronicsAppliancesHero11392x464.jpg?h=464&iar=0&w=1392&rev=d9da0ba1972843e393f6311c3ec0a2a9&hash=0A086D5D898C660785806EEF11B68FBE',
        subCategory: [
            {
                id: "21",
                parentCategory: "2",
                title: "Iphone 8",
                description: 'High-performance smartphone with advanced features',
                price: 700,
                imageUrl: "https://images.macrumors.com/t/1UMFGIID_f7iTTnlxMhDxS6UxYE=/800x0/smart/article-new/2017/09/iphone_8_roundup_header.jpg?lossy",
            },
            {
                id: "22",
                parentCategory: "2",
                title: "OnePlusNord 5G",
                description: 'Powerful and portable laptop for work and entertainment',
                price: 500,
                imageUrl: "https://image01-in.oneplus.net/ebp/202306/25/1-m00-51-88-cpgm7wsykruahbobaardu7ablie779.png",
            },
        ],
    },
]);
