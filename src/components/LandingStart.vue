<template>
  <div class="bg-black py-20 relative z-30">
    <div class="container mx-auto text-white">
      <!-- Первый блок -->
      <FirstBlock />
      <!-- Второй блок с if -->
      <SecondBlock />

      <!-- Третий блок -->
      <ThirdBlock />

      <!-- Четвертый блок -->
      <FourthBlock />

      <!-- Пятый блок -->
      <FifthBlock />

      <!-- Шестой блок -->
      <SixthBlock />

      <!-- Седьмой блок - Footer -->
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import FirstBlock from "./start/FirstBlock.vue";
import SecondBlock from "./start/SecondBlock.vue";
import ThirdBlock from "./start/ThirdBlock.vue";
import FourthBlock from "./start/FourthBlock.vue";
import FifthBlock from "./start/FifthBlock.vue";
import SixthBlock from "./start/SixthBlock.vue";
export default {
  components: {
    FirstBlock,
    SecondBlock,
    ThirdBlock,
    FourthBlock,
    FifthBlock,
    SixthBlock,
  },
  setup() {
    const window1000ref = ref(false);
    name: "MainPage";
    return {
      window1000ref,
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.window1000ref = window.innerWidth <= 1024;
    },
  },
};

// export default {
//     setup() {
//         const window1000ref = ref(false)
//         name: "MainPage"
//        return{
//          window1000ref
//        }
//     },
//     created() {
//     window.addEventListener('resize', this.onResize);
//     this.onResize();
//   },
//   destroyed() {
//     window.removeEventListener('resize', this.onResize)
//   },
//   methods: {
//     onResize() {
//         this.window1000ref = window.innerWidth <= 1024;
//     }
//   }
// }
</script>

<style scoped>
.choose_p {
  box-shadow: 0px 4px 67px rgba(30, 235, 205, 0.6);
  border-radius: 10px;
  color: #020e0c;
}
.border-gradient {
  padding: 4rem;
  border: 3px solid;
  border-image-source: linear-gradient(128.11deg, #befff6 0%, #020e0c 44.44%);
  border-image-slice: 1 0 0 1;
}
</style>
