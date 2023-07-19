<script setup>
import { onMounted } from 'vue'
import { initCarousels } from 'flowbite'

onMounted(() => {
    initCarousels();
})
</script>

<template>
  <div id="default-carousel" class="relative z-0 w-full mt-0" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../../images/c_cookies.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../../images/c_croissants.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../../images/c_cupcakes.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="...">
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../../images/c_macaroons.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="../../images/c_treats.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
        data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
        data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
        data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
        data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
        data-carousel-slide-to="4"></button>
    </div>
  </div>
  <!--This is for the flavor of the day-->
  <div class=" p-5 flex flex-col items-center bg-orange-300 md:flex-row">
    <div class="flex flex-col justify-between p-4 ml-14 mr-14 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bakery special of the day!</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is our baked good for the day! Limited time offer!</p>
    </div>
    <img class="object-cover w-full h-96 md:h-96 md:w-screen rounded-lg ring-4 outline-none ring-orange-500 dark:ring-red-400"
      src="../../images/S_cupcake.jpg" alt="">
  </div>
  <!--this is for the company pictures-->
  <div class=" bg-orange-300 grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/cake.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_cookies.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_croissants.jpg"
          alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_donuts.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_muffins.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/cupcake.jpg"
          alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_macaroons.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_croissants02.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_croissants_03.jpg"
          alt="">
      </div>
    </div>
    <div class="grid gap-4">
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200" src="../../images/r_muffins02.jpg"
          alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200"
          src="../../images/r_macaroons02.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg ring-4 outline-none ring-orange-200"
          src="../../images/r_cookies02.jpg" alt="">
      </div>
    </div>
  </div>
  <!--for the about the company-->
  <a href="#" class=" p-5 flex flex-col items-center bg-orange-300 md:flex-col">
    <div class="flex flex-col justify-between p-4 ml-14 mr-14 leading-normal">
      <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">About our bakery</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We are a bakery commited to baking stuff and all that good baked goods of course.</p>
    </div>
    <img class="object-cover w-full rounded-t-lg h-96 md:h-96 md:w-screen md:rounded-none md:rounded-l-lg"
      src="../../images/cake.jpg" alt="">
  </a>
  <!--footer for company website-->
  <footer class=" bg-orange-300 shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/#" class="flex items-center">
          <img src="../../images/cakeLogo.png" class="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl font-semibold font-fasthand whitespace-nowrap dark:text-white">Abby's
            Bakery</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/#"
          class="hover:underline">Abby's bakery</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>