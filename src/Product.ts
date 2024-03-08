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
            {
                id: "13",
                parentCategory: "1",
                title: "Women's  Formal",
                description: 'Elegant and fashionable women\'s dress',
                price: 30,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SQyH8b9NA-wl6ZDjyT_AYx5uQ1BBKNY52A&usqp=CAU",
            }
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
            {
                id: "23",
                parentCategory: "2",
                title: "Samsung S24",
                description: 'Powerful and portable laptop for work and entertainment',
                price: 600,
                imageUrl: "data:image/jpeg;base64,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",
            },
        ],
    },
    // Add extra categories or products here
    {
        id: "3",
        title: "Accessories",
        description: 'Accessories category',
        imageUrl: 'https://freerangestock.com/sample/128542/fashion-accessories-store.jpg',
        category: "Apparel",
        subCategory: [
            {
                id: "31",
                parentCategory: "3",
                title: "Sunglasses",
                description: 'Stylish sunglasses for men and women',
                price: 30,
                imageUrl: "https://media.istockphoto.com/id/638922412/photo/elegant-sunglasses-in-a-fashion-store-showcase.jpg?s=612x612&w=0&k=20&c=2-nuJP5Cf2CAT4KgKS0RJnGxUOVUGxnKViEBHbaufJg=",
            },
            {
                id: "32",
                parentCategory: "3",
                title: "Watches",
                description: 'Elegant watches for men and women',
                price: 100,
                imageUrl: "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2glMjBzaG9wfGVufDB8fDB8fHww",
            },
        ],
    },
]);
