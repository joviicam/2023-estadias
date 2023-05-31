<template>
  <div>
    <h1>{{valueX}}</h1>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";

export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
            valueX:'Este valor esta aquí' as string
        }
    }
})
</script>

<style>

</style>