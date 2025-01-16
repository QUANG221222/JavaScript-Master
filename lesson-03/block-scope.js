/** -------------BLOCK SCOPE-------------- */
//Sự khác nhau về scope - phạm vi giữa let, const và var
// Scope được xác định bởi cặp dấu {}

const testScope = () => {
  {
    var scopeVar = 'NhatQuangDev - Var'
    let scopeLet = 'NhatQuangDev - Let'
    const scopeConst = 'NhatQuangDev - Const'
    console.log('scopeVar: ', scopeVar)
    console.log('scopeLet: ', scopeLet)
    console.log('scopeConst: ', scopeConst)
  }
  //   console.log('scopeVar: ', scopeVar)
  //   console.log('scopeLet: ', scopeLet)
  //   console.log('scopeConst: ', scopeConst)
}
testScope()

//Kết luận về Scope - phạm vi một khối (block scope)
//Biến được khai báo bằng let và const có phạm vi trong 1 khối (block scope), nghĩa là nó chỉ tồn tại trong khối mã mà nó được khai báo.
//Biến khai báo bằng var có 2 trường hợp:
//*Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kỳ hàm nào (ngoài cùng của file)
//*Phạm vi cụ thể trong một hàm nếu nó được khai báo bên trong một hàm. Điều này khiến cho var có scope lỏng lẻo. Vậy nên thực tế hiện tại chủ yếu chúng ta sử dụng const và let để khai báo biến, tránh vấn đề liên quan đến scope của var
