
<template>
  <div class="logo">
    <!-- {{.map(char => <span>things</span>)}} -->
    <span v-for="char in monogram">
      {{ char }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monogram : "SR"
    }
  }
}
</script>

<style>
.logo {

}
</style>
