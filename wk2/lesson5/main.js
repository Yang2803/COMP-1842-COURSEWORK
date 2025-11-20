//task
const app = Vue.createApp({
    data (){
        return {
            product: 'sock',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyeste'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'}
            ],

            //======CHALLENGE========
            sizes: ['S', 'M', 'L', 'XL']

            
        }
    }
})
