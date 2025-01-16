/** 3 cách khai báo biến trong JS var - let - const */

/** -------------VAR-------------- */
//Hoisting: Biến khai báo bằng var sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó) và đồng thời biến đó được khởi tạo giá trị mặc định ban đầu là undefined. Cho nên chúng ta có thể sử dụng biến trước khi khai báo mà nó không gặp lỗi
console.log('nameVar: ', nameVar)
//Khai báo biến
var nameVar = 'Nhat Quang'
console.log('nameVar: ', nameVar)

//Tái khái bao: có thể tái khai báo cùng một biến var nhiều lần trong cùng một phạm vi mà ko gặp lỗi
var nameVar = 'Nhat Quang - Sinh Vien IT'
console.log('nameVar: ', nameVar)

//Gán lại: có thể gán lại giá trị của biến var
nameVar = 'Nhat Quang - Sinh Vien IT - Web Developer'
console.log('nameVar: ', nameVar)
