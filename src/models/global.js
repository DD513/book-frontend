import router from 'umi/router';

export default {
  namespace: 'global',

  state: { },

  effects: {
    *goToRoute({ path, callback, loading }, { put }) {
      try {
        if (loading) loading(true);

        yield router.push(path);

        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        console.log(error);
      }
    },
    *goBack({ callback, loading }, { put }) {
      try {
        if (loading) loading(true);

        yield router.goBack();

        if (loading) loading(false);
        if (callback) callback();
      } catch (error) {
        console.log(error);
      }
    },
  },

  reducers: { },
};
