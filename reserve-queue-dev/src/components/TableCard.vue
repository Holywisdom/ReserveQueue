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
        <label class="checkbox">
          <span class=ReserveText> Reserve </span>
          <input type="checkbox" class="InputCheckbox">
        </label>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'TableCard',
  props: ['TableName', 'Description', 'Available', 'ImagePath']
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
</style>
