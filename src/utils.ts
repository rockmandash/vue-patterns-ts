const isClient = typeof window === 'object';

// Vue prop boolean type is false if not explicity specify.
const optionalBooleanType = {
  type: Boolean,
  required: false,
  default: undefined
};

export { isClient, optionalBooleanType };
