<template>
  <nav class="flex items-center justify-between flex-wrap p-6" style="background-color: white">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <!-- <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>-->
      <img src="../assets/MakerAsia.png" alt="Maker Asia" style="height: 24px" />
      <!-- <span class="font-semibold text-xl tracking-tight">
        Maker
        <span style="color: #D33836">Asia</span>
      </span>-->
    </div>
    <div class="block lg:hidden">
      <!-- <button
        class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-red-300 hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>-->
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <!-- <router-link
          class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
          to="/wifi"
          exact-active-class="text-red-300"
        >
          <i class="fas fa-wifi"></i>
          WiFi Config
        </router-link>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {},
  watch: {
    $route(to, from) {
      // console.log(to)
      // if (to.path === '/wifi/sta') {
      //   this.isTabToggle = false
      // } else {
      //   this.isTabToggle = true
      // }
    }
  }
};
</script>
