import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import isNumber from 'lodash/isNumber';
import { updateFunctionName } from './constant';

const debounceAndThrottleProps = {
  // debounce
  debounceWait: {
    type: Number,
    required: false,
    default: undefined
  },
  debounceLeading: {
    type: Boolean,
    required: false,
    default: false
  },
  debounceMaxWait: {
    type: Number,
    required: false,
    default: undefined
  },
  debounceTrailing: {
    type: Boolean,
    required: false,
    default: true
  },
  // throttle
  throttleWait: {
    type: Number,
    required: false,
    default: undefined
  },
  throttleLeading: {
    type: Boolean,
    required: false,
    default: true
  },
  throttleTrailing: {
    type: Boolean,
    required: false,
    default: true
  }
};

function mapDebounceAndThrottleProps(this: any) {
  return {
    // debounce
    debounceWait: this.$props.debounceWait,
    debounceLeading: this.$props.debounceLeading,
    debounceMaxWait: this.$props.debounceMaxWait,
    debounceTrailing: this.$props.debounceTrailing,
    // throttle
    throttleWait: this.$props.throttleWait,
    throttleLeading: this.$props.throttleLeading,
    throttleTrailing: this.$props.throttleTrailing
  };
}

function attatchDebounceAndThrottle(this: any) {
  if (isNumber(this.debounceWait)) {
    this[updateFunctionName] = debounce(
      this[updateFunctionName],
      this.debounceWait,
      {
        leading: this.debounceLeading,
        trailing: this.debounceTrailing,
        ...(isNumber(this.debounceMaxWait) && {
          maxWait: this.debounceMaxWait
        })
      }
    );
  }
  if (isNumber(this.throttleWait)) {
    this[updateFunctionName] = throttle(
      this[updateFunctionName],
      this.throttleWait,
      {
        leading: this.throttleLeading,
        trailing: this.throttleTrailing
      }
    );
  }
}

export {
  debounceAndThrottleProps,
  attatchDebounceAndThrottle,
  mapDebounceAndThrottleProps
};
