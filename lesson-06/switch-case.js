// Câu lệnh điều kiện Switch : thực hiện một trong nhiều khối mã dựa trên giá trị của một biến biểu thức bạn đầu.

let day = new Date().getDay()
//[0, 1, 2, 3, 4, 5, 6]
//0 - Sunday
//1 - Monday
//2 - Tuesday
//3 - Wednesday
//4 - Thursday
//5 - Friday
//6 - Saturday
switch (day) {
  case 0:
    console.log('Sunday')
    break
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  case 4:
    console.log('Thursday')
    break
  case 5:
    console.log('Friday')
    break
  case 6:
    console.log('Saturday')
    break
  default:
    console.log('Invalid Day')
    break
}
console.log(day)
