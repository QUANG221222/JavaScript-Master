/** -------------CONST-------------- */
//Hoisting: Biến khái báo bằng const cũng được hoisted (di chuyển lến đầu phạm vi khối (scope) của nó) nhưng lại không được khởi tạo giá trị mặc định ban đầu nào cả. Nên không sử dụng được biến trước khi khai báo
// console.log('nameConst: ', nameConst)

//Khai báo biến
const nameConst = 'Nhat Quang'
console.log('nameConst: ', nameConst)

//Tái khái báo: không thể tái khai báo cùng một biến nhiều lần với const
// const nameConst = 'Nhat Quang - Sinh Vien IT'
// console.log('nameConst: ', nameConst)

//Gán lại: không thể gán lại giá trị của biết const
// nameConst = 'Nhat Quang - Sinh Vien IT - Web Developer'
// console.log('nameConst: ', nameConst)
