<template>
  <div class="row input-wrapper">
    <h2>Room</h2>
    <input v-model="roomId" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    roomId: String,
  },
};
</script>

<style scoped lang="scss">
.input-wrapper {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
