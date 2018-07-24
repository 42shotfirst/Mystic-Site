<template>
  <div class="main">
    <div class="nav">
      <div class="logo"></div>
      <button v-on:click="$router.push('/')">Home</button>
      <button v-on:click="$router.push('/features')">Features</button>
    </div>
    <h3>What if you could put all your tedious tasks on autopilot?</h3>
    <p>We get it. You want to spend your time on the parts of your business that you love.</p>
    <p>You need software thats comprehensive, organized and above all easy to use!</p>
    <div class="screen"></div>
    <h2>Imagine if you could half the time spent on busywork AND increase your companies productivity,<br/> with only a few clicks.</h2>
    <h3>No, it's not magic...</h3>
    <h3>It's Mystic.</h3>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped lang="less">
@blue: #008be8;
@darkBlue: #00578A;
@lightBlue: #78CDFF;
@grey: #323d38;
@font: 'Cabin', sans-serif;
.nav {
    width: 100%;
    height: 80px;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(4, 1fr) 5%;
    background-color: transparent;
}
.logo {
    grid-column-start: 1;
    grid-column-end: 3;
    background-image: url('../assets/mystic.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
button {
  color: white;
  background: transparent;
  border: none;
  font-size: 1.3em;
  font-family: @font;
}
.main {
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  position: fixed;
  background: linear-gradient(77deg, #00273e, #1e9df2, #4c84a9);
background-size: 600% 600%;

-webkit-animation: AnimationName 15s ease infinite;
-moz-animation: AnimationName 15s ease infinite;
animation: AnimationName 15s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:79% 0%}
    50%{background-position:22% 100%}
    100%{background-position:79% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:79% 0%}
    50%{background-position:22% 100%}
    100%{background-position:79% 0%}
}
@keyframes AnimationName {
    0%{background-position:79% 0%}
    50%{background-position:22% 100%}
    100%{background-position:79% 0%}
}
}
.screen {
  width: auto;
  height: 600px;
  background-image: url('../assets/login.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
h3 {
  color: white;
  font-family: @font;
  margin-left: 3%;
  font-size: 2.3em;
}
h2 {
  font-size: 1em;
  color: white;
  text-align: center;
}
 p {
   margin-left: 5%;
   color: white;
   margin-right: 5%;
   text-align: center;
 }
 @media (min-width: 1000px) {
   .nav {
     height: 150px;
     grid-template-columns: repeat(3, 1fr) 40%;
   }
   .logo {
     grid-column: 1;
   }
   button {
     font-size: 2.5em;
   }
   h3 {
     margin-left: 0;
     font-size: 4em;
     text-align: center;
   }
   h2 {
     font-size: 2em;
   }
   p {
     font-size: 2em;
   }
   .screen {
     height:700px;
   }
 }
</style>
