
<template>
  <div class="logo">
    <span v-for="char in monogram" :key="char">
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
