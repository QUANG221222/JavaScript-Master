// Anonymous Function (hàm ẩn danh): hàm không có tên. Thường được sử dụng làm đối số cho các hàm khác, ví dụ như trong các hàm sử xử lý sự kiện hoặc các hàm gọi lại (callback).

setTimeout(function () {
  console.log('Sau 1 giây thì hiện dòng message này')
}, 5000)
setTimeout(() => {
  console.log('Sau 1 giây thì hiện dòng message này')
}, 5000)
