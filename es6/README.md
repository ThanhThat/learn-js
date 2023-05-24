# ES6

## ES6 là gì?

#### ES6 (ECMAScript 2015) là phiên bản tiêu chuẩn thứ sáu của ECMAScript, một ngôn ngữ kịch bản được sử dụng phổ biến trong việc lập trình web. ES6 được công bố vào năm 2015 và đã mang đến nhiều cải tiến quan trọng cho ngôn ngữ JavaScript.

Một số tính năng quan trọng của ES6 bao gồm:

. Khai báo biến với let và const: ES6 giới thiệu hai từ khóa mới để khai báo biến, let và const, để thay thế cho var. let được sử dụng để khai báo biến có phạm vi chỉ trong khối lệnh, trong khi const được sử dụng để khai báo một hằng số không thể thay đổi giá trị sau khi gán.

. Arrow functions (Hàm mũi tên): Arrow functions cung cấp một cú pháp ngắn gọn để định nghĩa hàm trong JavaScript. Chúng giúp rút ngắn cú pháp và tự ràng buộc ngữ cảnh this trong hàm.

. Template literals: Template literals cho phép nhúng biểu thức và chuỗi vào một chuỗi nhiều dòng bằng cách sử dụng cú pháp backtick ( ) thay vì dấu nháy đơn hoặc nháy kép. Điều này giúp viết mã HTML hoặc chuỗi dễ dàng hơn.

. Default parameters (Tham số mặc định): ES6 cho phép định nghĩa giá trị mặc định cho các tham số trong khai báo hàm. Khi gọi hàm, nếu tham số không được truyền vào hoặc được truyền giá trị undefined, giá trị mặc định sẽ được sử dụng.

. Destructuring assignment (Gán giá trị đa biến): Destructuring assignment cho phép trích xuất giá trị từ một mảng hoặc một đối tượng và gán chúng vào các biến riêng lẻ. Điều này giúp rút ngắn cú pháp và truy cập các phần tử trong mảng hoặc thuộc tính trong đối tượng dễ dàng hơn.

Đây chỉ là một số ví dụ về những cải tiến trong ES6. Phiên bản ES6 đã đánh dấu một bước phát triển quan trọng cho JavaScript và đã trở thành một tiêu chuẩn rất được ưa chuộng trong cộng đồng lập trình

#### ECMAScript là một tiêu chuẩn được định nghĩa bởi Hiệp hội Chuẩn hóa ECMA (ECMA International) để mô tả ngôn ngữ kịch bản (scripting language) thông qua việc đặc tả các quy tắc và quy ước về cú pháp, cấu trúc và sematics của ngôn ngữ.

## let

. `let` được sử dụng để khai báo một biến có phạm vi (scope) chỉ trong khối mã (block scope) mà nó được khai báo.
. Biến được khai báo bằng `let` có thể được gán lại giá trị mới.
. Ví dụ:
`  let x = 5;
  x = 10;
  console.log(x); // output 10`
