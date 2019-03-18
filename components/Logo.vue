
<template>
  <div :class="$style.logo">
    <span v-for="char in monogram" :key="char">
      {{ char }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monogram : 'SR'
    }
  }
}
</script>

<style module>
.logo {
  composes: fontHeader from global;

  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;

  color: red;
  font-size: 20vw;

  span {
    animation: slide 1s forwards;

    &:first-child {
      transform: translateX(-50vw);
    }
    &:last-child {
      transform: translateX(50vw);
    }
  }
}

@keyframes slide {
  100% {
    transform: translateX(0);
  }
}
</style>
