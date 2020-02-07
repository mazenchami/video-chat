<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12 my-3">
          <h2>Room</h2>
          <input v-model="roomId" />
        </div>
      </div>
      <VideoArea roomId="roomId" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoArea from '@/components/VideoArea.vue';

export default {
  name: 'Home',
  components: {
    VideoArea,
  },
  data() {
    return {
      img: null,
      roomId: 'video-chat',
    };
  },
};
</script>
