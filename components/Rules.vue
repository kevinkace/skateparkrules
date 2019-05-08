
<template>
  <div :class="$style.rules">
    Rules:
    {{ rules }}
  </div>
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
  color: orange;
}
</style>
