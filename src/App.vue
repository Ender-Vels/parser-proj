<template>
  <div id="app">
    <Login v-if="!isAuthenticated" @login="handleLogin"/>
    <div class="container" v-else>
    <router-link class=" text-decoration-none   setting " to="/">Trade History</router-link>

    <router-link class=" text-decoration-none   setting " to="/settings">Setting</router-link>
    </div>

  </div>
  <RouterView/>
</template>

<script>
import Login from './components/Login.vue'
export default {
  data() {
    return {
      isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
    }
  },
  methods: {
    handleLogin(isAuthenticated) {
      this.isAuthenticated = isAuthenticated
    }
  },
  components: {
    Login,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.setting{

  font-size: 20px;
  color:black;
  border:2px solid black;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  width: 200px;
  margin: 10px;
}
.setting:hover{
  border:none;
  background-color: #89c4da;
  color:white;
}

</style>