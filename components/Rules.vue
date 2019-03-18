
<template>
  <div class=$style.rules>
    Rules
    <span v-for="rule in rules">
      <h2>{{ rule.title }}</h2>
      <p>{{ rule.desc }}</p>
    </span>
    <input placeholder="What needs to be done?" @keyup.enter="addTodo">
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';

export default {
  computed : {
    rules() {
      return this.$store.state.rules;
    }
  },

  methods : {
    addTodo(e) {
      this.$store.commit('add');
    }
  }
}
</script>

<style module>
.rules {

}
</style>
