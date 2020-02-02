<template>
  <div class="canvas-wrapper">
    <div v-show="false">
      vue-patterns-ts
      <WindowSize @resize="resize" />
      <MousePositionAtPage @mousemove="mousemove" />
    </div>
  </div>
</template>

<script>
import { WindowSize, MousePositionAtPage } from 'vue-patterns-ts';

export default {
  data() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },
  layout: 'empty',
  components: {
    WindowSize,
    MousePositionAtPage
  },
  methods: {
    resize({ width, height }) {
      this.width = width;
      this.height = height;
    },
    mousemove({ x, y }) {
      this.x = x;
      this.y = y;
    },
    updateBlotter() {
      const centerPoint = {
        x: this.width / 2,
        y: this.height / 2
      };
      const p1 = centerPoint;
      const p2 = { x: this.x, y: this.y };

      // angle in degrees
      const angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

      const dist = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
      );

      this.blotterMaterial.uniforms.uOffset.value = dist / 5000;
      this.blotterMaterial.uniforms.uRotation.value = angleDeg;
    }
  },
  watch: {
    $data: {
      handler() {
        this.updateBlotter();
      },
      deep: true
    }
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    var text = new window.Blotter.Text('vue-patterns-ts', {
      family: 'serif',
      size: 120,
      fill: '#171717'
    });

    this.blotterMaterial = new window.Blotter.ChannelSplitMaterial();

    var blotter = new window.Blotter(this.blotterMaterial, { texts: text });

    var scope = blotter.forText(text);

    scope.appendTo(document.querySelector('.canvas-wrapper'));
  },
  beforeDestroy() {
    this.blotterMaterial = null;
  }
};
</script>

<style>
.canvas-wrapper {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
