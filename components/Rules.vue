
<template>
  <div :class="$style.rules">
    Rules
    {{ rules }}
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
  // computed : {
  //   rules() {
  //     return this.$store.state.rules;
  //   }
  // },

  data() {
    return {
      rules : []
    };
  },

  async asyncData (context) {
    let { data } = await axios.get(`https://api.github.com/repos/kevinkace/skateparkrules/issues`);

    return { rules : data }
  }

  // methods : {
  //   addTodo(e) {
  //     this.$store.commit('add');
  //   }
  // }
}
</script>

<style module>
.rules {
  color: orange;
}
</style>
