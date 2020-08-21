<template>
  <div>
      <all-menu></all-menu>
      <home></home>
  </div>
</template>

<script type="text/ecmascript-6">
import Home from './components/Home'
import AllMenu from './components/AllMenu'
export default {
    name:'Internal',
    components:{
        AllMenu,
        Home
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>

</style>