<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Skatepark Rules
      </h1>
      <h2 class="subtitle">
        How to be cool and have a good time.
      </h2>
      <rules :rules="rules"/>

      <div class="links">
        <a
          href="https://github.com/kevinkace/skateparkrules/blob/master/README.md"
          target="_blank"
          class="button--green"
        >Info</a>
        <a
          href="https://github.com/kevinkace/skateparkrules/issues/new"
          target="_blank"
          class="button--grey"
        >Submit a rule</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Rules from '~/components/Rules.vue';
import axios from 'axios';

export default {
  components : {
    Logo,
    Rules
  },

  async asyncData (context) {
    let { data } = await axios.get(`https://api.github.com/repos/kevinkace/skateparkrules/issues`);

    return { rules : data }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
