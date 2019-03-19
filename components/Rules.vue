
<template>
  <div :class="$style.rules">
    Rules
    {{ rules }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rules : []
    };
  },

  async asyncData (context) {
    let { data } = await axios.get(`https://api.github.com/repos/kevinkace/skateparkrules/issues`);

    return { rules : data }
  }
}
</script>

<style module>
.rules {
  color: orange;
}
</style>
