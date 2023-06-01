<template>
  <div>
    <b-row>
      <b-col cols="4" md="4">Seccion 1</b-col>
      <b-col cols="4" md="4" class="shadow p-3 mb-5 bg-white rounded mt-5">
        <h1 class="text-bold">Registro</h1>
        <b-form>
          <b-form-group
          class="md-2"
            label="Nombre"
            label-for="inputName"
          >
          <br>
            <b-form-input
            class="md-2"
              id="inputName" 
              v-model="person.name"
              placeholder="¿Cómo te llamas?"
              >
            </b-form-input>
          </b-form-group>
          <br>
        </b-form>

        <b-form>
          <b-form-group
            id="inputs-group-1"
            label="Ocupación"
            label-for="inputJob"
        >
            <b-form-input
              id="inputJob" 
              placeholder="¿En qué trabajas?"
              v-model="person.job"
            >    
            </b-form-input>
          </b-form-group>
          <br>
          <b-button id="submitButton" type="submit" variant="primary">Guardar trabajador</b-button>
        </b-form>
      </b-col>
      <b-col cols="4" md="4">Seccion 3</b-col>
    </b-row>
    <h1>{{valueX}}</h1> 
    <code>{{person}}</code> <!-- code es para mostrar el objeto en formato json --> 
     </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { Person } from "../../entities/Person";

export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
            valueX:'Este valor esta aquí' as string,
            person:{
              name:'',
              job:''
            } as Person
        }
    }
})
</script>

<style>

</style>