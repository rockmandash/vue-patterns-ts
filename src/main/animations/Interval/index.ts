import Vue from 'vue';
import { renderScopedSlotsOrRenderlessWithThisData } from '../../../baseRender';
import { emitThisData } from '../../../snippets';

const IntervalOptions = {
  listenerName: 'tick',
  props: {
    // Specify how long the interval is
    delay: {
      type: Number,
      required: true
    },
    pause: {
      type: Boolean,
      required: false
    }
  }
} as const;

function createInitialData() {
  // Keep track of ticks
  return { ticks: 0 };
}

function start(this: any) {
  this.timerId = window.setInterval(() => {
    this.ticks += 1;
    emitThisData.call(this, IntervalOptions.listenerName);
  }, this.delay);
}

function stop(this: any) {
  window.clearInterval(this.timerId);
}

const Interval = Vue.extend({
  props: IntervalOptions.props,
  data: createInitialData,
  mounted() {
    if (!this.pause) {
      this.start();
    }
  },
  beforeDestroy() {
    if (!this.pause) {
      this.stop();
    }
  },
  methods: {
    start,
    stop
  },
  watch: {
    pause(newValue) {
      if (newValue) {
        this.stop();
      } else {
        this.start();
      }
    }
  },
  render: renderScopedSlotsOrRenderlessWithThisData
});

type IntervalEmittedDataType = ReturnType<typeof createInitialData>;

export { Interval, IntervalOptions, IntervalEmittedDataType };
