<template>
  <div class="hello">
    <section>
      <div class="img-wrap">
        <img src="static/img/icon.jpg" alt="">
      </div>
      <p>{{msg}}</p>
    </section>
    <section>
      <p>这是一个列表</p>
      <ul>
        <li v-for="item of newList" :key="item.id">
          {{item.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { getList } from '../api';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Donut!',
      newList: [],
    };
  },
  methods: {
    getNewList() {
      getList().then((res) => {
        const { data } = res;
        this.newList = data;
      });
    },
  },
  mounted() {
    this.getNewList();
  },
};
</script>

<style lang="stylus" scoped>
  section
    margin-bottom 50px
  p
    margin 10px
  li
    margin-bottom 10px
  .img-wrap
    img
      width 500px
</style>
