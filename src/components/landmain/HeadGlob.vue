<template>
    <div>
        <div class="flex justify-center  mb-6  ">
       <div class="header-tt w-[900px] p-6 flex justify-between md:p-4">
         <img class=" ml-4 sm:flex visible " src="../../assets/UpSells.png" alt="">
      <div class="flex justify-between">
         <div class="hidden sm:flex pl-4  my-auto justify-between space-x-14">
              <a  href="#">Features</a> 
              <a  href="#">Documentation</a>
              <a  href="#"> Support</a>
            </div> 
          </div>
          <img @click="menuOpen =! menuOpen"  class="visible sm:invisible"  type="button"  src="../../assets/Group 19.png" >
        </div>
        <div class="text-right text-white absolute hidden text-2xl " :class="{ 'dropdown-after' : menuOpen }" type="menu">
               <ul class="text-right">
                 <li><a  href="#">Features</a></li>
                 <li><a  href="#">Documentation</a></li>
                 <li><a  href="#"> Support</a></li>
             </ul>
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