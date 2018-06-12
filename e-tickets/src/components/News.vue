<template>
  <li id="new" v-on:click="clicknew()">
    <div class="text">
      <div class="title">{{ title }}</div>
      <div class="tags">
        <span class="tag"> {{ tag }} </span>
        <span> {{ category }} </span>
        <span> {{ time }} </span>
      </div>
    </div>
    <img v-bind:src="image">
  </li>
</template>
<script>
export default {
  props: ['image', 'title', 'tag', 'category', 'time']
}
</script>
<style>
#new {
  width:100%;
  display: flex;
  flex-direction: row;
  border-top:0.2rem solid gray;
}
*.text {
  width:53%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
