<template>
     <div class=" container mt-32 mx-auto inn w-full text-white footer md: w-[1290px] px-16 py-24"><!--Input window-->
          <div class="container  mx-auto pb-24">
            <div class=" mx-auto md:flex justify-between rounded-md ">
              <p class="font-black text-3xl md: text-6xl  "><span class="text-[#1EEBCD] p-4">More features <br/> with</span> Upsells</p>
              <p class="font-normal text-base leading-9 p-6 md:w-72">Have an idea for a cool feature? Tell us about it, and maybe we will implement it for you</p>
            </div>
            <div class=" md:flex ">
              <div class="container   flex flex-col justify-center md:mx-14"><!--Input with checkbox-->
                <input class="px-7 py-5 bg-[#175752] rounded-md  text-white  outline-none focus:border-[#1EEBCD] border-2 w-[520px]" type="text" placeholder="Name">
                <input class="mt-4 px-7 py-5 bg-[#175752] rounded-md w-[520px] text-white outline-none focus:border-[#1EEBCD] border-2" type="text" placeholder="Company">
              
              <label cs for="cat-coding" class="mt-7 outline-none" ><!--2 checkbox-->
                <input type="checkbox" id="cat-coding" class=" rounded-sm bg-[#1EEBCD] focus:bg-[#1EEBCD] outline-none">
                <span class="font-normal text-lg py-4 " id="cat-coding" > I just want to offer an idea for consideration, for possible future updates.</span>
                </label>
                <label for="car-cod" class="mt-2">
                  <input type="checkbox" id="car-cod" class="rounded-sm bg-[#1EEBCD] focus:bg-[#1EEBCD] outline-hidden font-normal text-lg">
                  I want to order an individual paid development for myself.
                </label>
              </div>

              <div class="container mx-auto md:mr-16"><!--textarea with button-->
                <textarea name="" class="flex resize-none flex-row px-7 py-5 gap-2.5 outline-none rounded-lg  bg-[#175752] focus:border-[#1EEBCD] border-2 w-[520px] h-[185px]" id="message" cols="25"
                  rows="4" placeholder="Describe your idea" required ></textarea>
                  <button class="bg-[#1EEBCD] w-[520px] px-11 py-6 gap-2.5 knopp mt-7 font-bold text-lg leading-7 text-black">Сheck all features</button>
              </div>
            </div>
          </div>
      </div>
</template>