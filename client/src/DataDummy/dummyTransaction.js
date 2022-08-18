import Product1 from "../assets/Rectangle 1.png"
import Product3 from "../assets/Rectangle 2.png"
import Product4 from "../assets/Rectangle 3.png"
import Product5 from "../assets/Rectangle 4 .png"

const dummyTransaction = [
    {
        id: 1,
        name: "Nezu",
        address: "Planet Keju",
        postCode: 9999,
        income: 20000,
        status: "Waiting Approve",
        dateNow: "August 05, 2022",
        product: [
        {
            id: 1,
            productImg: "https://assets.klikindomaret.com/products/20079739/20079739_1.jpg",
            productName: "Ice Coffee Palm Sugar1",
            toping: ["Boba Mango","Green Coconut","Mango"],
            price: 25000
        },
        {
            id: 2,
            productImg: "https://img.okezone.com/content/2021/01/24/301/2349844/unik-beraroma-pandan-kopi-klepon-khas-sidoarjo-ini-jadi-incaran-JDckP69spK.JPG",
            productName: "Clepon Coffee",
            toping: ["Bubble Tea Gelatin","Kiwi Popping Pearl"],
            price: 23900
        }
        ]
    },
    {
        id: 2,
        name: "John",
        address: "Jakarta",
        postCode: 19873,
        income: 200000,
        status: "Cancel",
        product: [
            {
                id: 1,
                productImg: Product1,
                productName: "Ice Coffee Palm Sugar2",
                toping: ["Boba Mango","Green Coconut"],
                price: 25000
            },
            ]
    },
    {
        id: 3,
        name: "Adrian",
        address: "Tanggrang",
        postCode: 11846,
        income: 70000,
        status: "Success",
        product: [
            {
                id: 1,
                productImg: "https://assets.klikindomaret.com/products/20079739/20079739_1.jpg",
                productName: "Ice Coffee Palm Sugar3",
                toping: ["Boba Mango","Green Coconut","Cookies"],
                price: 25000
            },
            {
                id: 2,
                productImg: "https://img.okezone.com/content/2021/01/24/301/2349844/unik-beraroma-pandan-kopi-klepon-khas-sidoarjo-ini-jadi-incaran-JDckP69spK.JPG",
                productName: "Clepon Coffee",
                toping: ["Bubble Tea Gelatin","Kiwi Popping Pearl"],
                price: 23900
            }
            ]
    },
    {
        id: 4,
        name: "Fahmi",
        address: "Bandung",
        postCode: 16952,
        income: 100000,
        status: "On The Way",
        product: [
            {
                id: 1,
                productImg: "https://assets.klikindomaret.com/products/20079739/20079739_1.jpg",
                productName: "Ice Coffee Palm Sugar4",
                toping: ["Boba Mango","Green Coconut","Mango"],
                price: 25000
            },
            {
                id: 2,
                productImg: "https://img.okezone.com/content/2021/01/24/301/2349844/unik-beraroma-pandan-kopi-klepon-khas-sidoarjo-ini-jadi-incaran-JDckP69spK.JPG",
                productName: "Clepon Coffee",
                toping: ["Bubble Tea Gelatin","Kiwi Popping Pearl"],
                price: 23900
            },
            {
                id: 3,
                productImg: Product4,
                productName: "Red Coffee",
                toping: ["Bubble Tea Gelatin","Kiwi Popping Pearl"],
                price: 23900
            }
            ]
    }
]

export default dummyTransaction