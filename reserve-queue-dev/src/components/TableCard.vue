<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128 is-16by9">
          <img v-bind:src='ImagePath' alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong class="TableName">{{TableName}}</strong>
            <br>
            <span class="tag" v-bind:class="[Available ? 'is-success' : 'is-danger']">Available</span>
            <br>
            <small>{{Description}}</small>
            <br>
          </p>
        </div>
        <div class="checkbox">
          <button class="button is-primary is-small" v-on:click="ModalOpen">Reserve</button>
        </div>
      </div>
    </article>
    <div class="modal" v-bind:class="{'is-active': ModalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <SlotCard></SlotCard>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
    </div>
  </div>
</template>

<script>

import SlotCard from './SlotCard.vue'

export default {
  name: 'TableCard',
  props: ['TableName', 'Description', 'Available', 'ImagePath'],
  data () {
    return {
      ModalActive: false
    }
  },
  methods: {
    ModalOpen: function () {
      this.ModalActive = true
    },
    ModalClose: function () {
      this.ModalActive = false
    }
  },
  components: {SlotCard}

}
</script>

<style scoped>

.TableName {
  font-size: 24px;
}

.tag {
  margin-bottom: 4px;
}

.ReserveText{
  margin-left: 8px;
  font-size: 12px;
}

.checkbox {
  display: flex ;
  flex-direction: row-reverse ;
  align-content: center;
}

.button{
  display: flex ;
  flex-direction: row-reverse ;
}

</style>
