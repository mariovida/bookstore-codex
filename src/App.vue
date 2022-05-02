<template>
  <nav>
    <img src="@/assets/logo_v1.svg" />
    <router-link to="/">Novosti</router-link>
    <router-link to="/about">O nama</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  width: 100vw;
  height: 75px;
  /*background-color: #E6E6E6;*/
}
nav img {
  height: 75px;
  float: left;
  margin-left: 5%;
}
nav a {
  display: inline-block;
  font-size: 19px;
  font-weight: bold;
  color: #2c3e50;
  padding: 8px 10px;
  margin: 0 10px;
  margin-top: 18px;
  text-decoration: none;
  text-transform: uppercase;
}
nav a:hover {
  background-color: cyan;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
