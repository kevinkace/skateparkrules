<template>
  <section class="container">
    <div>
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
import Rules from '~/components/Rules.vue';
import axios from 'axios';

const yamlRegex  = /^---\r\n(.*)\r\n---\r\n(.*)/;
const orderRegex = /.*order: (\d*).*/;

export default {
  components : {
    Rules
  },

  async asyncData (context) {
    const { data } = await axios.get(`https://api.github.com/repos/kevinkace/skateparkrules/issues`);
    const rules    = data
      .filter(rule => rule.labels.some(label => label.name === "rule"))
      .map((rule => {
        const parsed = rule.body.match(yamlRegex);

        if (parsed && parsed[1] && parsed[2]) {
          rule.header = parsed[1];
          rule.body   = parsed[2];
        }

        if (rule.header) {
          const order = rule.header.match(orderRegex);

          if (order) {
            rule.order = order[1];
          }
        }

        return rule;
      }))
      .sort((ruleA, ruleB) => {
        if (!ruleA.order || !ruleB.order || ruleA.order < ruleB.order) {
          return 1;
        }

        return -1;
      });

    return { rules };
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  margin-bottom: 0;
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
