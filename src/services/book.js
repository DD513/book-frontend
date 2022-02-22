import request from '../utils/request';


//取得所有書籍
export function GET_AllBook() {
  return request.get('/book');
}

// 取得單一書籍
export function GetThisBook(name) {
  return request.post('/thisbook', { name });
}

// 新增書籍資訊
export function PostCreateBook(payload) {
  return request.post('/book', payload);
}

// 修改書籍資訊
export function PutBook(id, payload) {
  return request.patch(`/book/${id}`, payload);
}

// 刪除書籍資訊
export function DleeteBook(id) {
  return request.delete(`/book/${id}`);
}

//取得單一書籍 id
export function GetAssignBook(id) {
  return request.get(`/book/${id}`);
}
