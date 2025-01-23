//Arrow Function (hàm mũi tên): là 1 sự thay thế với cú pháp đơn giản hơn so với hàm biểu thức. Xuất hiện từ ES6.
//Sẽ có những sự khác nhau nhất định giữa hàm biểu thức và hàm mũi tên.
//Arrow function không dùng được `this` khi hàm phương thức với đối tượng

//Khởi tạo hàm mũi tên
const sayHello = (someone) => {
  console.log(`Hello ${someone}! I'm an arrow function.`)
}

//Chạy function
sayHello('Nhat Quang')
