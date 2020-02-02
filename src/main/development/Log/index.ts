import Vue from 'vue';
import { renderNothing } from '../../../baseRender';

const LogOptions = {
  props: {
    // We don't care what type this prop is, since
    // all we're doing is logging it out.
    value: {},

    // Pass in a function to format your log message
    format: {
      type: Function
    }
  }
} as const;

const Log = Vue.extend({
  props: LogOptions.props,
  watch: {
    value() {
      this.log();
      // Whenever `value` changes, we'll log it
    }
  },
  methods: {
    log() {
      const toLog = this.format ? this.format(this.value) : this.value;
      console.log(toLog);
    }
  },
  mounted() {
    this.log();
  },
  render: renderNothing
});

export { Log, LogOptions };
