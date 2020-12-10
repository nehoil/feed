<template>
  <div id="app">
    <div class="nav">
    <div class="logo"><h2>Feed</h2></div>
    <div class="main-menu">

     <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Comments</el-menu-item>
    </el-menu>
    </div>
    </div>
    
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  created() {
    this.$store.dispatch({
      type: "loadComments",
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath[0] === "1") {
        this.$router.push("/");
      }
      if (keyPath[0] === "2") {
        this.$router.push("/dashboard");
      }
      if (keyPath[0] === "3") {
        this.$router.push("/user");
      }
      if (keyPath[0] === "4") {
        this.$store.dispatch('logout')
        this.$router.push("/");
      }
    },
  },
};
</script>
