<template>
  <section class="inputForm">
    <input class="input is-primary" type="text" placeholder="Table Name" v-model="TableName">
    <input class="input is-primary" type="text" placeholder="Table Seat Number" v-model="TableSeatNumber">
    <input class="input is-primary" type="text" placeholder="Table Description" v-model="TableDescription">
    <input class="input is-primary" type="text" placeholder="Image Link" v-model="ImageLink">
    <button class="button is-primary" type="primary" size="large" v-on:click="CreateTable">Create</button>
  </section>
</template>

<script>
export default {
  name: 'EditTable',
  data () {
    return {
      TableName: '',
      TableSeatNumber: '',
      TableDescription: '',
      ImageLink: ''
    }
  },
  methods: {
    CreateTable: function () {
      console.log(this.TableName)
      console.log(this.TableSeatNumber)
      console.log(this.TableDescription)
      console.log(this.ImageLink)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inputForm {
  width: 85%;
  text-align: center;
  align-self: center;
  margin-bottom: 1.5em;
}

.input{
  width: 100% ;
  margin: 8px 0 8px 0;
}

</style>
