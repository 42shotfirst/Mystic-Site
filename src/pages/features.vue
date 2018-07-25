<template>
  <div class="main">
    <div class="nav">
      <div class="logo"></div>
      <button v-on:click="$router.push('/')">Home</button>
      <button v-on:click="$router.push('/features')">Features</button>
      <button v-on:click="$router.push('/FAQ')">FAQ</button>
    </div>
    <div class="feats">
      <h2>Imagine if you could HALF the time spent on busywork <br/>AND<br/> increase your companies productivity,<br/> with only a few clicks.</h2>
    <h4>Say Goodbye to Administration Costs.</h4>
    <p>Many business management tools take your money, send you on your own and advise you to hire your own administrator (for an additional cost!) as well as sifting through their documentation in order to figure out how to just get started using the platform.<br/>With Mystic CRM, We provide administration services from setup to continuous support, from occasional to frequent changes, depending on your level of need.</p>
    <div class="d"/>
    <h4>Automate Anything.</h4>
    <p>Have an action you know you’ll need to do multiple times? Automate it.<br/> Whether it’s a communication email, billing reminder, newsletter, update, or just a periodic check in, you can now easily create shortcuts that turn lengthy, repetitive tasks into custom automated tasks that are as easy as a few clicks.</p>
    <h4>Marketing Made Easy.</h4>
    <p>Keep track of all of your communications, in one place. Need to know the last time a customer or a prospect was contacted? Instantly track your email open rates, surveys, contact logs, customer retention and much more.</p>
    <div class="c"/>
    <h4>Stay In Contact.</h4>
    <p>All your customers, all of your leads, in one spot. Keep data on all of your Contacts status, budget, timeline, needs, questions, birthdays, or even their kid’s favorite ice cream.</p>
    <div class="a"/>
    <h4>Never Miss a Date.</h4>
    <p>Scheduling, sharing calendar events, and keeping your week organized is one of the biggest issues most companies struggle with. Mystics Calendar is set up to streamline all sharing issues, keep you connected to all of your tasks, and keep your team on a common schedule.</p>
    <h4>Your Personal Crystal Ball.</h4>
    <p>Peer into our "Crystal" File Viewer to see Photos, graphics, documents, PDFs, even the future! (Not really.) But so many companies have need for a centralized way to store all of their business documents. Instead of being forced to signup for a secondary service and all that entails; Mystic provides a simple, intuitive interface, ensuring that you only have one place to visit and navigate for all of your storage needs.</p>
    <h4>Privacy</h4>
    <p>
      Above all else, we respect your data privacy. Some companies try to spell out extensive limitations on what you can or can’t do with your information, or even try to put clauses in about reselling or restricting your data. We don’t believe in any of those notions. We champion the “Your Data, Your Rules” school of thought. We will never try to restrict your usage, and if you ever decide to leave our platform, we provide easy access to your data to allow you to transfer as painlessly as possible.
    </p>
  </div>
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
    grid-template-columns: repeat(5, 1fr);
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
.a {
  height: 600px;
  background-image: url('../assets/cal.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.b {
  height:600px;
  background-image: url('../assets/day.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.c {
  height:600px;
  background-image: url('../assets/cont.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.d {
  height:600px;
  background-image: url('../assets/tools.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
p, h4, h2 {
  color: white;
  font-family: @font;
  margin-left: 5%;
  margin-right: 5%;
  letter-spacing: 1px;
}
h2 {
  text-align: center;
}

@media (min-width: 1000px) {
  .nav {
    height: 150px;
    grid-template-columns: repeat(4, 1fr) 40%;
  }
  .logo {
    grid-column: 1;
  }
  button {
    font-size: 2.5em;
  }
  h4 {
    margin-left: 5%;
    font-size: 3em;
    text-align: left;
    grid-column: 1;
  }
  h2 {
    font-size: 2em;
  }
  p {
    grid-column: 1;
    font-size: 2em;
  }
  .feats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, 250px);
  }
  .a, .b, .c, .d {
    height: 900px;
    grid-column: 2;
  }
  .a {
    grid-row: 10;
  }
}
</style>
