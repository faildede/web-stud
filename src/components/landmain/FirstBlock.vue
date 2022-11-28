<template>
   <div
      class="
        flex
        line
        justify-center
        mx-auto
        px-12
        w-[106px]
        mb-20
        sm:container
        pb-16
        gradi
      "
      
    >
      <!--2 блок с input и img-->
      <div class="w-[740px] flex px-12 justify-center sm: form-cs">
        <div class="w-[528px] px-12 justify-center sm:w-[740px] form-cs">
          <!--блок с input-->
          <p class="font-bold text-4xl p-14 w-[400px] sm:w-[820px]">
            All The Features You Need
          </p>
          <p class="font-normal text-base sm: w-[510px] px-14">
            The plugin has the widest customization of loyalty, marketing and
            e-commerce features designed to meet all your needs
          </p>
          <div class="flex sm:w-full p-14">
            <input
              class="bg-[#0E2E29] p-7 sm:flex w-[660px] rounded-l-md"
              type="text"
              name=""
              placeholder="Find the right plugin"
              id=""
            />
            <button class="bg-[#1EEBCD] w-2/3 p-7 sm: rounded-r-md search">
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="invisible sm:visible">
        <img class="" src="../assets/Group.png" alt="" />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.gradi {
    padding: 4rem;
 border: 3px solid ;
border-image-source: linear-gradient(128.11deg, #BEFFF6 0%, #020E0C 44.44%);
border-image-slice:1  0 0 1;
}

</style>
