<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <CustomInput :roomId="roomId" />
      <VideoArea :roomId="roomId" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomInput from '@/components/custom/CustomInput.vue';
import VideoArea from '@/components/VideoArea.vue';

export default {
  name: 'Home',
  components: {
    CustomInput,
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
