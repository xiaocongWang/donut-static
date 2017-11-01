<template>
  <div class="hello">
    <section>
      <div class="img-wrap">
        <img src="static/img/icon.jpg" alt="">
      </div>
      <p>{{msg}}</p>      
    </section>
  </div>
</template>

<script>
import { getList } from '../api';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Donut!',
    };
  },
  methods: {
    getList() {
      getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="stylus" scoped>
  .img-wrap
    img
      width 500px
</style>
