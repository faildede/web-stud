<template>
  <div class="text-white head footer">
    <header class="container rounded-l-md mx-auto my-auto bg-blur-2xl pb-4">
      <!--HEADER-->
      <HeadGlob />
      <FirstBlock />
    </header>
   

  </div>

  <div class="container mx-auto font-bold text-3xl mt-[181px]">
    <AccordionComp />
  </div>
  <PricingComp />

  <InputComp />

  <div class="">
    <div class="mt-96 pt-10">
      <FootComp />
    </div>
  </div>
</template>



<script>
import InputComp from "./landmain/InputComp.vue";
import HeadGlob from "./landmain/HeadGlob.vue";
import PricingComp from "./landmain/PricingComp.vue";
import AccordionComp from "./landmain/AccordionComp.vue";
import FootComp from "./landmain/FootComp.vue";
import FirstBlock from "./landmain/FirstBlock.vue";
export default {
  components: {
    InputComp,
    HeadGlob,
    PricingComp,
    AccordionComp,
    FootComp,
    FirstBlock,
  },
};
</script>
