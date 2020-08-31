<template>
  <div class="tagcontent">
    <transition name="HISshow">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>