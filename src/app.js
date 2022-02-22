export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
  // plugins: [require('dva-logger')()],
};
