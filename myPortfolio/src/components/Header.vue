<template>
  <header>
    <nav>
      <div class="tab"><router-link to="/">TOP</router-link></div>
      <div class="tab"><router-link to="/about">ABOUT</router-link></div>
      <div class="tab"><router-link to="/skills">SKILLS</router-link></div>
      <div class="tab"><router-link to="/works">WORKS</router-link></div>
      <div class="tab"><router-link to="/social">SOCIAL</router-link></div>
    </nav>
  </header>
</template>

<style>
nav {
  background-color: #7df5bf;
}

nav a.router-link {
  font-weight: bold;
  color: #2c3e50;
}
.tab {
  width: 15%;
  display: inline-block;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  border-left: solid 1px rgba(0, 0, 0, 0.3);
  border-right: solid 1px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
}
a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>