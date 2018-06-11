<template>
  <li id="new" v-on:click="clicknew()">
    <div>
      <div >{{ title }}</div>
      <div >{{ tag }}</div>
    </div>
    <img v-bind:src="image" v-bind:alt="title">
  </li>
</template>
<script>
export default {
  props: ['image', 'title', 'tag', 'class', 'time']
}
</script>
