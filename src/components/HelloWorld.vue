<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="wind-text" @click="fastspeed">
      <div :class="isFast ? 'fast' : 'slow'">{{text}}</div>
      <div>{{text.slice(0,16)}}</div>
      <div>{{text.slice(0,10)}}</div>
    </div>
  </div>
</template>

<script>
import http from '../common/http'
import api from '../common/api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to template',
      text: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
      isFast: false
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fastspeed () {
      this.isFast = !this.isFast
    },
    fetchData: async function () {
      let params = {
        id: 123,
        name: 'yuan'
      }
      await http.get(api.right, params).then(res => {
        console.log(111)
//        console.log(res)
      }, res => {
        console.log(222)
//        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
      a {
        color: #42b983;
      }
    }
  }
  .wind-text {
    div {
      &:nth-child(2) {
        transform: rotate(90deg) scale(1.5, 0.5);
        margin-top: 22%;
      }
      &:last-child {
        transform: translateY(80px);
      }
    }
    .fast {
      animation: move 0.1s infinite;
    }
    .slow {
      animation: move 0.3s infinite;
    }
    @keyframes move {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

</style>
