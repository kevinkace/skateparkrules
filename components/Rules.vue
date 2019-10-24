
<template>
  <ol :class="$style.rules">
    <li v-for="rule in rules" v-bind:key="rule.id">
      <h2>{{ rule.title }}</h2>
      <p>{{ rule.body }}</p>
    </li>
  </ol>
</template>

<script>
export default {
  props : [
    "rules"
  ]
}
</script>

<style module>
.rules {
  text-align: left;
}
</style>
