<template>
<!-- drawer component -->
<div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-label">
   <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>Items in cart {{ cart.length }}</h5>
   <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">These are all the items in your cart, checkout when you are ready.</p>
   <!--display items in the cart-->
   <div class="grid grid-cols-2 md:grid-cols-1">
        <div v-for="item in cart" :key="item.id">
            <img class=" object-cover h-1/2 w-full rounded-lg p-2" :src="require(`../../images/${item.src}`)"
                :alt="item.alt">
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ item.price }}</span>
                </div>
        </div>
    </div>
    <!---->
   <div class="flex items-center justify-center gap-4 fixed bottom-1 w-60">
    <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Checkout</span>
<span class="relative invisible">Checkout</span>
</a>
   </div>
</div>
    <div class="flex items-center justify-center py-4 md:py-8 flex-wrap bg-orange-300">
        <button @click="showAllImages"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span
                class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md bg-opacity-0">
                All treats
            </span>
        </button>
        <button @click="showCookiesImages"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:from-red-200">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                Cookies
            </span>
        </button>
        <button @click="showCroissantsImages"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                Croissants
            </span>
        </button>
        <button @click="showMuffinImages"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                Cupcakes
            </span>
        </button>
        <button @click="showMacaroonsImages"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
                Macaroons
            </span>
        </button>
        <!-- drawer init and toggle -->
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-20 p-10 bg-orange-300">
        <div class="rounded-lg ring-4 outline-none ring-red-100 dark:ring-red-400" v-for="image in filteredImages" :key="image.id">
            <img class=" object-cover h-96 w-full rounded-lg p-2" :src="require(`../../images/${image.src}`)"
                :alt="image.alt">
                <div class="flex items-center justify-between p-2">
                    <span class="text-3xl font-bold text-gray-500 dark:text-white">${{ image.price }}</span>
                    <button @click="addItemToCart(image)"
                        class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">Add
                        to cart</button>
                </div>
        </div>
    </div>
    <!--button for the cart-->
    <div class="text-center fixed bottom-1 w-full">
   <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">View Cart</button>
</div>
</template>

<script>

export default {
    data() {
        return {
            cart: [],
            images: [
                { id: 1, src: "m_cookie01.jpg", alt: '', price: '5.00', pastry: 'cookies' },
                { id: 2, src: 'm_cookie02.jpg', alt: '', price: '3.00', pastry: 'cookies' },
                { id: 3, src: 'm_cookie03.jpg', alt: '', price: '2.00', pastry: 'cookies' },
                { id: 4, src: 'm_cookie04.jpg', alt: '', price: '5.25', pastry: 'cookies' },
                { id: 5, src: "m_croissants01.jpg", alt: '', price: '3.25', pastry: 'croissants' },
                { id: 6, src: 'm_croissants02.jpg', alt: '', price: '4.00', pastry: 'croissants' },
                { id: 7, src: 'm_croissants03.jpg', alt: '', price: '5.25', pastry: 'croissants' },
                { id: 8, src: 'm_croissants04.jpg', alt: '', price: '6.00', pastry: 'croissants' },
                { id: 9, src: "m_cupcake01.jpg", alt: '', price: '2.25', pastry: 'muffins' },
                { id: 10, src: 'm_cupcake02.jpg', alt: '', price: '5.00', pastry: 'muffins' },
                { id: 11, src: 'm_cupcake03.jpg', alt: '', price: '5.00', pastry: 'muffins' },
                { id: 12, src: 'm_cupcake04.jpg', alt: '', price: '4.25', pastry: 'muffins' },
                { id: 13, src: "m_macaroon01.jpg", alt: '', price: '3.00', pastry: 'macaroons' },
                { id: 14, src: 'm_macaroon02.jpg', alt: '', price: '4.00', pastry: 'macaroons' },
                { id: 15, src: 'm_macaroon03.jpg', alt: '', price: '4.50', pastry: 'macaroons' },
                { id: 16, src: 'm_macaroon04.jpg', alt: '', price: '3.50', pastry: 'macaroons' },
            ],
            filter: 'All',
        };
    },
    computed: {
        filteredImages() {
            if (this.filter === 'All') {
                return this.images;
            } else {
                return this.images.filter(image => image.pastry === this.filter);
            }
        },
    },
    methods: {
        addItemToCart(product){
            console.log(product);
            this.cart.push(product);
        },
        showAllImages() {
            this.filter = 'All';
        },
        showCookiesImages() {
            this.filter = 'cookies';
        },
        showCroissantsImages() {
            this.filter = 'croissants';
        },
        showMuffinImages(){
            this.filter = 'muffins';
        },
        showMacaroonsImages(){
            this.filter = 'macaroons';
        },
    },
};
</script>