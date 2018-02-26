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
          <div class="column is-two-quarter">
            <code> is-one-quarter </code>
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            <code> is-one-quarter </code>
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            <code> is-one-quarter </code>
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            <code> is-one-quarter </code>
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            <code> is-one-quarter </code>
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
          </div>
                    <div class="column is-two-quarter">
            11:00 - 11.15
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
  methods: {
    ModalClose: function () {
      this.$emit('Modal')
    }
  }
}
</script>

<style scoped>

.content{
  overflow: auto;
}

</style>
