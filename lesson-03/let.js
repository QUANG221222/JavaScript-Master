/** -------------LET-------------- */
//Hoisting: Biến khái báo bằng let cũng được hoisted (di chuyển lến đầu phạm vi khối (scope) của nó) nhưng lại không được khởi tạo giá trị mặc định ban đầu nào cả. Nên không sử dụng được biến trước khi khai báo
// console.log('nameLet: ', nameLet)
//Khai báo biến
let nameLet = 'Nhat Quang'
console.log('nameLet: ', nameLet)

//Tái khái báo: không thể tái khai báo cùng một biến nhiều lần với let
// let nameLet = 'Nhat Quang - Sinh Vien IT'
// console.log('nameLet: ', nameLet)

//Gán lại: có thể gán lại giá trị của biết let
nameLet = 'Nhat Quang - Sinh Vien IT - Web Developer'
console.log('nameLet: ', nameLet)
