<!-- 1. JavaScript là gì? -->

_JavaScript_ : là 1 ngôn ngữ lập trình, có cú pháp tương tự C, nhưng nó gần với self hơn Java
_Brendan Eich tại hãng truyền thông Netscape(computer service Mỹ)_: là người sáng lập, ban đầu là _Mocha_, sau đó là _LiveScript_, và cuối cùng thành _Javascript_
_Java với JS nó liên quan gì đến nay không?_: Không!!! Vì Cùng thời điểm _Netscape_ bắt đầu sử dụng _Java_ trên trình duyệt Netscape, _LiveScript_ đã được đổi tên thành _JavaScript_ _để được chú ý_ hơn bởi ngôn ngữ lập trình _Java lúc đó đang được coi là một hiện tượng_

<!-- 3. Hoisting, Block Scope và Khai báo biến: Var, Let, Const trong JavaScript -->

_Var, let, const_: đều có cơ chế hoisting (di chuyển lến đầu phạm vi khối (scope) của nó) nhưng với _var_ thì được khởi tạo giá trị mặc định là _undifined_ còn _let, const_ thì không khởi tạo giá trị nào cả

_Block Scope_: _Xem chi tiết tại file \_lesson-03/block-scope.js_

_Note:_: Let và const xuất hiện từ khi Phiên bản ổn định ES6 (_ECMAScript 6_) vào tháng 6 năm 2015, còn Var thì có từ khi JS ra đời (tháng 5 năm 1995)

<!-- 4. Những kiểu dữ liệu cốt lõi quan trọng: Primitive (nguyên thủy) & Reference (tham chiếu) -->

_Trong js có mấy kiểu dữ liệu? chia thành bao nhiêu nhóm?_: trong js có _8 kiểu dữ liệu_:
string,
number,
bigint (_một kiểu dữ liệu mới ( ES2020 ) có thể được sử dụng để lưu trữ các giá trị số nguyên quá lớn để có thể biểu diễn bằng một số JavaScript thông thường._),
boolean,
undifined,
symbol **(một kiểu dữ liệu mới trong ES6): Symbol mỗi lần được tạo ra sẽ nhận được giá trị là duy nhất và khác nhau.**,
null,
object.

**Được chia thành 2 loại chính đó là primitive (nguyên thủy) và reference (tham chiếu):**

_Primitive (nguyên thủy)_: number, string, boolean, null, undefined, symbol, bigint. Có kích thước cố định trong bộ nhớ

_Reference (tham chiếu)_: Object, Array, Functions. không có kích thước cố định. Phải sử dụng toán từ **new** để tạo ra một đối tượng mới

_Kiểu dữ liệu Primitive và Reference là gì?_:
_Primitive_ là kiểu mà khi gán giá trị cho 1 biến thì sẽ _không thể thay đổi_ , khi _thay đổi giá trị_ cho biến thì _1 bản sao độc lập_ của giá trị đó sẽ được tạo ra. Các giá trị nguyên thủy được lưu trữ trực tiếp trong _ngăn xếp (Stack)_.
_Reference_ là kiểu mà các giá trị tham chiếu _có thể được thay đổi_ sau khi chúng được tạo ra. Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (Stack) mà sẽ tham chiếu đến địa chỉ của đối tượng trong _Heap Memory_. Khi gán 1 đối tượng A cho B, thì cả A và B sẽ tham chiếu đến cùng một đối tượng, chứ không tạo ra bản sao độc lập riêng biệt.

<!-- 5. Toán tử -->

_Có 8 toán tử phổ biến:_: số học (_arithmetic_), logic (_logical_), so sánh (_comparison_), gán (_assignment_), toán tử chuỗi (_string_), (_Conditional (Ternary) Operators_): Toán tử 3 ngôi, toán tử kiểu dữ liệu (_type_), toán tử dùng để thực hiện các phép toán bit trong hệ nhịn phân (_bitwise_)

<!-- 6. if, else, switch / case-->

`Xem chi tiết tại lesson-06`

<!-- 7. Các loại vòng lặp: For, While, Do-While, For In, For-Of  -->

`Xem chi tiết tại lesson-07`
_`for of` khác gì `for in`?_: _`for of`_ thường được sử dụng Dùng để lập qua các giá trị của 1 iterable object (những đối tượng có thể lặp), phổ biến như Array, String,... _`for in`_ lặp qua các thuộc tính của môt đối tượng.
_`for of`_ chỉ lặp qua **`iterable object(những đối tượng có thể lặp)` còn không lặp qua được **`json object`\_\_
_Khi nào dùng for khi nào dùng while?_: dùng for cho những bài toán đơn giản biết trước số lần lặp, dùng while cho những bài toán phức tạp liên quan đến mảng như _check điều kiện dừng nếu người dùng nhập vào 1 ký tự nào đó_ không biết trước số lần lặp, mà vòng lặp _for_ không thể làm được vì nó bắt buộc phải có 3 tham số truyền vào.

<!-- 8. Functions - Mọi thứ về Hàm trong JavaScript  -->

_Có 6 loại hàm:_ hàm khởi tạo (_function declaration_), hàm biểu thức (_function expression_), hàm mũi tên (_arrow function_), hàm phương thức (_method function_), hàm ẩn danh (_anonymous function_), hàm tạo (_constructor function_)
**XEM CHI TIẾT TẠI lesson-08**

<!-- lesson 9 - Object -->

_Trong JS, đối tượng (object)_ là một cấu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các dữ liệu phức tạp. Đối tượng bao gồm các cặp key-value (khóa và giá trị). `Mỗi khóa là một chuỗi (String) và giá trị có thể là bất kỳ loại dữ liệu nào, bao gồm các đối tượng khác (nested object)`.

`2 Cách tạo Object với cú pháp object literal và từ khóa new object`

<!-- 10. Thao tác với Array - Mảng trong JavaScript  -->

_Trong JavaScript, 'mảng' (array)_ là một kiểu dữ liệu dùng để lưu trữ danh sách các giá trị.
\_Các giá trị trong mảng có thể là bất kỳ dữ liệu nào, `number, string, object, thậm chí là mảng khác.`
\_Mảng trong JS có các chỉ số - Index bắt đầu từ 0, nghĩa là phần tử đầu tiên của mảng có index là 0, phần tử thứ hai có index là 1, phần tử thứ ba có index là 2 v.v.

<!-- 11 - 12. Array: 17 phương thức bạn cần phải biết khi đi làm (p1 - p2) | JavaScript Master A-Z -->

\_Các phương thức dùng phổ biến đối với xử lý mảng: `push(), pop(), shift(), unshift(), map(), filter(), find(), reduce(), some(), concat(), slice(), splice(), every(), findIndex(), toString(), join()` \***\*Xem chi tiết tại 2 folder lesson 11, 12\*\***

`Sự khác nhau giữa join() và toString() ?`: cả hai đều nối mảng thành _chuỗi String_. Tuy nhiên khác với _toString()_, _join()_ có thể chỉ định dấu phân cách của mảng.

<!-- 13 - 14. String: 15 phương thức bạn cần phải biết khi đi làm (p1 - p2) | JavaScript Master A-Z -->

\-Các phương thức dùng phổ biến đối với xử lý chuỗi: `charAt(), concat(), includes(), indexOf(), slice(), split(), substring(), toLowerCase(), toUpperCase(), trim(), replace(), match(regex), search(regex), startWith(), endWith()` \***\*Xem chi tiết tại 2 folder lesson 13, 14\*\***
_regex expression_ là biểu thức chính quy (regex) được sử dụng để xử lý chuỗi.
