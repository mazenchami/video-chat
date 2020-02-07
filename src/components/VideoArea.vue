<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <vue-webrtc
            ref="webrtc"
            width="100%"
            :roomId="roomId"
            v-on:joined-room="logEvent"
            v-on:left-room="logEvent"
            v-on:open-room="logEvent"
            v-on:share-started="logEvent"
            v-on:share-stopped="logEvent"
            @error="onError"
          />
        </div>
        <div class="row">
          <div class="col-md-12 my-3 btn-wrapper">
            <md-button class="md-raised md-primary" @click="onJoin">Join</md-button>
            <md-button
              type="button"
              class="md-raised md-primary"
              v-if="isVideoPlaying"
              @click="onLeave"
            >Leave</md-button>
            <md-button
              type="button"
              class="md-raised md-primary"
              v-if="isVideoPlaying"
              @click="onCapture"
            >Capture Photo</md-button>
            <md-button
              type="button"
              class="md-raised md-primary"
              v-if="isVideoPlaying"
              @click="onShareScreen"
            >Share Screen</md-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="img">
      <div class="col-md-12">
        <h2>Captured Image</h2>
        <figure class="figure">
          <img :src="img" class="img-responsive" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoArea',
  props: {
    roomId: String,
  },
  data() {
    return {
      img: null,
      isVideoPlaying: false,
    };
  },
  computed: {
    webRTCRef() {
      return this.$refs.webrtc;
    },
  },
  methods: {
    onCapture() {
      this.img = this.webRTCRef.capture();
    },
    onJoin() {
      this.isVideoPlaying = true;
      this.webRTCRef.join();
    },
    onLeave() {
      this.isVideoPlaying = false;
      this.webRTCRef.leave();
    },
    onShareScreen() {
      this.img = this.webRTCRef.shareScreen();
    },
    onError(error, stream) {
      console.log('On Error Event', error, stream);
    },
    logEvent(event) {
      console.log('Event : ', event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-wrapper {
  padding-top: 10px;
}
// .video-list {}
// .video-item {}
</style>
