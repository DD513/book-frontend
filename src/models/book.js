import { GET_AllBook, GetThisBook, PostCreateBook, PutBook, DleeteBook, GetAssignBook } from '../services/book';


export default {
  namespace: 'books',

  state: {},

  effects: {
    *GET_AllBook({ loading }, { call, put }) {
      try {
        if (loading) loading(true);
        const response = yield call(GET_AllBook);
        yield put({ type: 'SAVE_books', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

    *GetThisBook({ payload, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const [response] = yield call(GetThisBook, payload);
        console.log('123', response);
        yield put({ type: 'saveThisBook', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

    *PostCreateBook({ payload, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const [response] = yield call(PostCreateBook, payload);
        console.log('456', response);
        yield put({ type: 'saveCreateBook', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

    *PutBook({ id, payload, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const [response] = yield call(PutBook, id, payload);
        console.log('put', response);
        yield put({ type: 'savePutBook', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

    *DleeteBook({ id, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        // void
        yield call(DleeteBook, id);
        const response = yield call(GET_AllBook);
        yield put({ type: 'SAVE_books', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

    *GetAssignBook({ id, loading, callback }, { put, call }) {
      try {
        if (loading) loading(true);
        const response = yield call(GetAssignBook, id);
        console.log('xxx',response);
        yield put({ type: 'saveAssignBook', payload: response });
        if (loading) loading(false);
      } catch (err) {
        console.log(err);
      }
    },

  },
  reducers: {
    SAVE_books(state, { payload }) {
      return {
        ...state,
        books: payload,
      };
    },
    saveThisBook(state, { payload }) {
      return {
        ...state,
        thisbook: payload,
      }
    },
    saveAssignBook(state, { payload }) {
      return {
        ...state,
        book: payload,
      }
    },
  },
};
