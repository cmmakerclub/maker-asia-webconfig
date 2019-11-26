<template>
    <div id="app">
        <div class="container max-w-4xl mx-auto shadow">
            <Navbar/>
            <div class="border border-gray-300 pt-12 pb-12 pl-8 pr-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './components/Navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  }
</script>

<style>

</style>
