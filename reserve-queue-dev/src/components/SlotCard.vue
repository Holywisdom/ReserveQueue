<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{TableName}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
          <div class="column is-one-quarter">
            <a class="button is-light">04:00 - 04:15</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Done</a>
      <a href="#" class="card-footer-item" v-on:click="ModalClose">Cancel</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotCard',
  props: ['TableName'],
  data () {
    return {
    }
  },
  methods: {
    ModalClose: function () {
      this.$emit('Modal')
    }
  }
}
</script>

<style scoped>

.content{
  overflow-x: hidden;
}

</style>
