//task
const app = Vue.createApp({
    data (){
        return {
            cart: 0,
            product: 'sock',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyeste'],
            variants: [
                {id: 2234, color: 'green',  image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg'}
            ],

            
        }
    },
    methods: {
        addToCart(){
            this.cart +=1
        },

        updateImage(variantImage){
            this.image = variantImage
        },

        //======CHALLENGE========
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            }
        },
        
    }
})
