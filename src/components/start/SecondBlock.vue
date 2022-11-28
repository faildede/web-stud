<template>
  <div v-if="window1000ref" class="flex items-start gap-x-16  mt-7 w-full h-full ">
                <div class="items-center">
                    <p class="text-[#1EEBCD] font-bold text-4xl mb-2">90%+</p>
                    <p class="text-2xl mb-4">Websites increased sales</p>
                    <p class="text-[#1EEBCD] font-bold text-4xl mb-2">100+</p>
                    <p class="text-2xl">Support and blog articles</p>
                </div>
                <div class="">
                    <p class="text-[#1EEBCD] font-bold text-4xl mb-2">150+</p>
                    <p class="text-2xl mb-4">Five stars review</p>
                    <p class="text-[#1EEBCD] font-bold text-4xl mb-2">240%+</p>
                    <p class="text-2xl w-full">Increase in repeat customers</p>
                </div>
            </div>
            <div v-if="window1000ref" class="w-full h-full flex gap-x-5">
                <div class="flex flex-col w-full">
                    <div class="">
                    <p class="text-[#1EEBCD] font-bold text-4xl ">90%+</p>
                    <p class="text-2xl ">Websites increased sales</p>
                    </div>
                    <div class="">
                    <p class="text-[#1EEBCD] font-bold text-4xl">100+</p>
                    <p class="text-2xl">Support and blog articles</p>
                    </div>
                </div>
                <div class="flex flex-col w-full">
                    <div>
                    <p class="text-[#1EEBCD] font-bold text-4xl">150+</p>
                    <p class="text-2xl">Five stars review</p></div>
                    <div>
                    <p class="text-[#1EEBCD] font-bold text-4xl">240%+</p>
                    <p class="text-2xl w-full">Increase in repeat customers</p>
                    </div>
                </div>
            </div>
            <!-- Второй блок -->
            <div v-else class="flex items-start justify-between  mt-24 w-full h-full ">
                <div class="">
                    <p class="text-[#1EEBCD] font-bold text-6xl">90%+</p>
                    <p class="text-2xl">Websites increased sales</p>
                </div>
                <div class="">
                    <p class="text-[#1EEBCD] font-bold text-6xl">100+</p>
                    <p class="text-2xl">Support and blog articles</p>
                </div>
                <div class="">
                    <p class="text-[#1EEBCD] font-bold text-6xl">150+</p>
                    <p class="text-2xl">Five stars review</p>
                </div>
                <div class="">
                    <p class="text-[#1EEBCD] font-bold text-6xl">240%+</p>
                    <p class="text-2xl w-2/3">Increase in repeat customers</p>
                </div>
            </div>
</template>

<script>
import { ref } from "@vue/reactivity"; 

export default {
 
  setup() {
        const window1000ref = ref(false)
        name: "MainPage"
       return{
         window1000ref
       }
    },
    created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
        this.window1000ref = window.innerWidth <= 1024;
    }
  }

};
</script>