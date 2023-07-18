<template>
    <div class="container mx-auto mt-10 mb-52">
        <div class="shadow-md my-10">
            <div class="bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl">0 Items</h2>
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                </div>
                <a href="#" class="flex font-semibold text-red-500 text-sm mt-10">

                    <svg class="fill-current mr-2 text-red-500 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </a>
            </div>

            <div id="summary" class="px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Items 0</span>
                    <span class="font-semibold text-sm">$0</span>
                </div>
                <form class="flex flex-wrap gap-3 w-full p-5">
                    <label class="relative w-full flex flex-col">
                        <span class="font-bold mb-3">Card number</span>
                        <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                            type="text" name="card_number" placeholder="0000 0000 0000" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </label>

                    <label class="relative flex-1 flex flex-col">
                        <span class="font-bold mb-3">Expire date</span>
                        <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                            type="text" name="expire_date" placeholder="MM/YY" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </label>

                    <label class="relative flex-1 flex flex-col">
                        <span class="font-bold flex items-center gap-3 mb-3">
                            CVC/CVV
                            <span class="relative group">
                                <span
                                    class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                                    Security Number</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                        </span>
                        <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                            type="text" name="card_cvc" placeholder="&bull;&bull;&bull;" />
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </label>
                </form>
                <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" class=" rounded-md border-2 border-gray-200 placeholder-gray-300 p-2 text-sm w-full">
            </div>
            <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$0</span>
                </div>
                <button
                    class="bg-red-500 hover:bg-red-600 font-semibold py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
        </div>

    </div>
</div></template>