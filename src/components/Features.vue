<template>
  <div class="text-white head footer">
    
    <header class="container  rounded-l-md  mx-auto my-auto bg-blur-2xl pb-4"> <!--HEADER-->
      <div class="flex justify-center  mb-6  ">
       <div class="header-tt w-[900px] p-6 flex justify-between md:p-4">
         <img class=" ml-4 sm:flex visible " src="../assets/UpSells.png" alt="">
      <div class="flex justify-between">
         <div class="hidden sm:flex pl-4  my-auto justify-between space-x-14">
              <a  href="#">Features</a> 
              <a  href="#">Documentation</a>
              <a  href="#"> Support</a>
            </div> 
          </div>
          <img @click="menuOpen =! menuOpen"  class="visible sm:invisible"  type="button"  src="../assets/Group 19.png" >
        </div>
        <div class="text-right text-white absolute hidden " :class="{ 'dropdown-after' : menuOpen }" type="menu">
               <ul class="text-right">
                 <li><a  href="#">Features</a></li>
                 <li><a  href="#">Documentation</a></li>
                 <li><a  href="#"> Support</a></li>
             </ul>
        </div>
      </div>
     </header>

     

    <div class=" flex line justify-center  mx-auto px-12 w-[106px] mb-20  sm:container pb-16">  <!--2 блок с input и img-->
      <div class=" w-[740px] flex px-12 justify-center  sm:  form-cs ">
        <div class="w-[528px] px-12 justify-center  sm:w-[740px]  form-cs "><!--блок с input-->
          <p class="font-bold  text-4xl p-14 w-[400px] sm:w-[820px]">All The Features You Need</p>
          <p class=" font-normal text-base  sm: w-[510px] px-14 ">The plugin has the widest customization of loyalty, marketing and e-commerce features designed to meet all your needs</p>
          <div class="flex sm:w-full p-14">
            <input class=" bg-[#0E2E29]  p-7 sm:flex w-[660px] rounded-l-md" type="text" name="" placeholder="Find the right plugin" id="">
            <button class="bg-[#1EEBCD] w-2/3 p-7 sm: rounded-r-md search">Search</button>
          </div>
       </div>
      </div>
          <div class="invisible sm:visible " >
            <img class="" src="../assets/Group.png" alt="">
           </div>
    </div>
    </div>

    <div class="container mx-auto font-bold text-3xl mt-[181px] "><!--Accordion-->

          <div class="accordion w-full" id="accordionExample">
          
          <div class="accordion-item bg-black  ">
          <h2 class="accordion-header mb-0 bg-black flex text-white" id="headingOne">
          <button class="relative flex items-center w-full py-4 px-5  text-3xl text-left bg-black text-white border-0  transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            Accordion Item #1   
          </button> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>

          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5 text-white  bg-black">
            <p>Control where exactly to show the widget with balance information to your customers</p>
          </div>
          </div>
          </div>

          <div class="accordion-item ">
              <h2 class="accordion-header mb-0 flex" id="headingTwo">
                <button class="relative flex items-center w-full py-4 px-5 text-base  text-left bg-black text-white border-0  transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                  our default variables. It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item  ">
              <h2 class="accordion-header mb-0 flex " id="headingThree">
                <button class="relative flex items-center w-full py-4 px-5 text-base  text-left bg-black text-white border-0  transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  Accordion Item #3
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5 text-white">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default,
                  until the collapse plugin adds the appropriate classes that we use to style each
                  element. These classes control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                  our default variables. It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          
          </div>

          </div>

        <div class="mt-32 container mx-auto text-white "> <!--Pricing-->
          <p class="font-bold text-6xl leading-10">Pricing</p>
              <div class="text-center sm:flex mt-11">
                  <div class="py-16 px-8 mx-16 text-gray-300 border-2 border-[#1EEBCD] rounded-lg mt-6 hover:cursor-pointer">
                    <p class="font-bold text-3xl text-center">Unlimited</p>
                    <p class="font-bold text-6xl pt-8 text-center text-[#1EEBCD]  ">$599</p>
                    <p class="pt-8 font-normal text-base text-center leading-9 border-b-2 border-[#0E2E29]">Five site</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Updates</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Support</p>
                    <button class="mt-8  font-bold text-center text-xs text-black leading-6 px-16 py-6 rounded-lg bg-[#1EEBCD] ">Buy now</button>
                  </div>
                   <div class="py-16 px-8 mt-6 mx-16 text-center text-gray-300 border-2 border-[#1EEBCD] sm:ml-8 rounded-lg ">
                    <p class="font-bold text-3xl text-center">Unlimited</p>
                    <p class="font-bold text-6xl pt-8 text-center text-[#1EEBCD] ">$599</p>
                    <p class="pt-8 font-normal text-base text-center leading-9 border-b-2 border-[#0E2E29]">Five site</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Updates</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Support</p>
                    <button class="mt-8  font-bold text-center text-xs text-black leading-6 px-16 py-6 rounded-lg bg-[#1EEBCD]">Buy now</button>
                  </div>
                   <div class="py-16 px-8 ml-8 mx-16 text-gray-300 border-2 border-[#1EEBCD] rounded-lg mt-6">
                    <p class="font-bold text-3xl text-center">Unlimited</p>
                    <p class="font-bold text-6xl pt-8 text-center text-[#1EEBCD] ">$599</p>
                    <p class="pt-8 font-normal text-base text-center leading-9 border-b-2 border-[#0E2E29]">Five site</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Updates</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Support</p>
                    <button class="mt-8  font-bold text-center text-xs text-black leading-6 px-16 py-6 rounded-lg bg-[#1EEBCD]">Buy now</button>
                  </div>
                   <div class="py-16 px-8 ml-8 mx-16 text-gray-300 border-2 border-[#1EEBCD] rounded-lg mt-6">
                    <p class="font-bold text-3xl text-center">Unlimited</p>
                    <p class="font-bold text-6xl pt-8 text-center text-[#1EEBCD] ">$599</p>
                    <p class="pt-8 font-normal text-base text-center leading-9 border-b-2 border-[#0E2E29]">Five site</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Updates</p>
                    <p class=" font-normal text-base text-center leading-9  border-b-2 border-[#0E2E29]">Lifetime Support</p>
                    <button class="mt-8  font-bold text-center text-xs text-black leading-6 px-16 py-6 rounded-lg bg-[#1EEBCD]">Buy now</button>
                  </div>
              </div>
        </div>

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

  <div class=" ">
    <div class=" mt-96  pt-10 "><!--Footer-->
        <div class="main-head back-photo flex justify-center mb-6  ">
       <div class="header-tt flex p-4">
         <img class="" src="../assets/UpSells.png" alt="">
      <div class="flex pl-4  my-auto justify-between text-white space-x-5">
        <a  href="#">Features</a> 
        <a  href="#">Documentation</a>
        <a  href="#"> Support</a>
       </div>
       </div>
      </div>
  </div>
  </div>

</template>
<script>
  import { ref } from '@vue/reactivity'
export default {
setup(){
  const menuOpen = ref(false);
  function tog() {
    if(menuOpen === true) {
     console.log("Нажата");
    }
    return 
  };
  return{
    menuOpen, 
    tog
  }
  
} 
}
</script>
