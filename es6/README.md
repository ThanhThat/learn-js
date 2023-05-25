# ES6

## 1. ES6 là gì?

#### ES6 (ECMAScript 2015) là phiên bản tiêu chuẩn thứ sáu của ECMAScript, một ngôn ngữ kịch bản được sử dụng phổ biến trong việc lập trình web. ES6 được công bố vào năm 2015 và đã mang đến nhiều cải tiến quan trọng cho ngôn ngữ JavaScript.

Một số tính năng quan trọng của ES6 bao gồm:

- Khai báo biến với let và const: ES6 giới thiệu hai từ khóa mới để khai báo biến, let và const, để thay thế cho var. let được sử dụng để khai báo biến có phạm vi chỉ trong khối lệnh, trong khi const được sử dụng để khai báo một hằng số không thể thay đổi giá trị sau khi gán.

- Arrow functions (Hàm mũi tên): Arrow functions cung cấp một cú pháp ngắn gọn để định nghĩa hàm trong JavaScript. Chúng giúp rút ngắn cú pháp và tự ràng buộc ngữ cảnh `this` trong hàm.

- Template literals: Template literals cho phép nhúng biểu thức và chuỗi vào một chuỗi nhiều dòng bằng cách sử dụng cú pháp backtick ( ) thay vì dấu nháy đơn hoặc nháy kép. Điều này giúp viết mã HTML hoặc chuỗi dễ dàng hơn.

- Default parameters (Tham số mặc định): ES6 cho phép định nghĩa giá trị mặc định cho các tham số trong khai báo hàm. Khi gọi hàm, nếu tham số không được truyền vào hoặc được truyền giá trị undefined, giá trị mặc định sẽ được sử dụng.

- Destructuring assignment (Gán giá trị đa biến): Destructuring assignment cho phép trích xuất giá trị từ một mảng hoặc một đối tượng và gán chúng vào các biến riêng lẻ. Điều này giúp rút ngắn cú pháp và truy cập các phần tử trong mảng hoặc thuộc tính trong đối tượng dễ dàng hơn.

Đây chỉ là một số ví dụ về những cải tiến trong ES6. Phiên bản ES6 đã đánh dấu một bước phát triển quan trọng cho JavaScript và đã trở thành một tiêu chuẩn rất được ưa chuộng trong cộng đồng lập trình

> ECMAScript là một tiêu chuẩn được định nghĩa bởi Hiệp hội Chuẩn hóa ECMA (ECMA International) để mô tả ngôn ngữ kịch bản (scripting language) thông qua việc đặc tả các quy tắc và quy ước về cú pháp, cấu trúc và sematics của ngôn ngữ.

## let

- `let` được sử dụng để khai báo một biến có phạm vi (scope) chỉ trong khối mã (block scope) mà nó được khai báo.
- Biến được khai báo bằng `let` có thể được gán lại giá trị mới.
- Ví dụ:

```js
let x = 5;
x = 10;
console.log(x); // output 10
```

## const

- `const` được sử dụng để khai báo hằng số (constant).
- Không thể thay đổi giá trị sau khi được gán.
- Biến được khai báo bằng `const` phải được gán giá trị trong lúc khai báo.
- `const` có phạm vi chỉ trong khối mã (block scope) => nơi nó được khai báo.
- Ví dụ:

```js
const PI = 3.14159;
console.log(PI); // Output: 3.14159

PI = 3.14; // Lỗi! không thể gán giá trị lại cho hằng số.
```

> Nếu không cần gán lại giá trị cho biến thì hãy sử dụng `const`. Ngược lại thì dùng `let`.

### Lợi ích khi sử dụng `let` và `const`

1. Giới hạn phạm vi (scope) của biến. Điều này giúp tránh xung đột tên biến và lối ghi đè (hoisting) của biến trong JS.
2. `const` giúp bảo toàn giá trị của biến.
3. Cải thiện hiệu suất và tốc độ thực thi mã: Bằng cách cung cấp thông tin về phạm vi và tính chất không thay đổi của biến.
4. Giúp mã của bạn tuân thủ tiêu chuẩn mới nhất và tương thích với các trình biên dịch và môi trường JS hiện đại.

### scope

> Là phạm vi tồn tại của một biến. Biến được khai báo bên trong một block code chỉ có thể sử dụng bên trong block đó. Tuy nhiên đối với trường hợp biến được khai báo với từ khóa `var` thì có thể sử dụng global. Lưu ý: biến khai báo bên trong `function` bằng từ khóa `var` thì chỉ sử sử dụng được trong `function`.

### Hoisting

> Hoisting là hành động mặc định của JS, nó sẽ chuyển phần khai báo lên top của phạm vi mà nó được khai báo.

- Ví dụ:

```js
console.log(a); // Output: Undefined
var a = 10;
```

> > Trong ví dụ trên phần khai báo `var a` sẽ được chuyển lên top trước khi mã được thực thi. Nó sẽ tương đương với đoạn code dưới đây:

```js
var a;
console.log(a);
a = 10;
```

- Tương tự với `function`:

```js
showHello();

function showHello() {
  console.log("Hello World!");
}
```

=> Đoạn code trên sẽ được chuyển thành:

```js
function showHello() {
  console.log("Hello World!");
}

showHello();
```

- Lưu ý:
  > Hoisting đối với biến trong function: khai báo biến được đưa lên đầu scope function.
  > Đối với block scope khác (if esle, {}, ...) thì biên khai báo bên trong với từ khóa var sẽ được hoisting ra ngoài scope block.

## Template Literals

> Template Literals trong js (còn được gọi là template strings) là một tính năng cho phép nhúng `biểu thức` và `chuỗi` vào trong một chuỗi văn bản đơn giản. Điều này giúp tạo ra các chuỗi phức tạp một cách dễ đọc và dễ hiểu hơn.

> Biểu diễn bằng cặp dấu backtick (``).

> Có thể sử dụng biểu thức JS và nhúng giá trị của biến vào bằng cách sử dụng `${expression}`.

- Ví dụ:

```js
const name = "John";
const age = 30;

// Sử dụng template literals để tạo chuỗi
const message = `Xin chào, tôi là ${name} và tôi ${age} tuổi.`;

console.log(message);
// Kết quả: "Xin chào, tôi là John và tôi 30 tuổi."
```

- Ví dụ chèn biểu thức vào chuỗi:

```js
const a = 5;
const b = 10;

// Sử dụng template literals để tính tổng và hiển thị kết quả
const result = `Tổng của ${a} và ${b} là ${a + b}`;

console.log(result);
// Kết quả: "Tổng của 5 và 10 là 15"
```

## Strict mode (Chế độ nghiêm ngặt)

- Khái niệm: chế độ làm việc khắc khe hơn với việc kiểm soát và giới hạn một số tính năng ngôn ngữ Javascript để tránh những lỗi phổ biến và các hành vi không mong muốn.

* Đê bật `strict mode`, bạn có thể đặt `"use strict";`, ở đầu một file js hoặc ở đầu một hàm riêng lẻ. Ví dụ:

```js
// Bật strict mode cho toàn bộ file js
"use strict";

// Hoặc bật stict mode cho một hàm riêng lẻ.
function myFunction() {
  "use trict";
  // Nội dung của hàm ...
}
```

- **Các tính năng được áp dụng khi bật `strict mode` bao gồm:**

1. Khai báo biến bắt buộc: bạn phải sử dụng từ khóa `var`, `let` hoặc `const` để khai báo biến trước khi sử dụng nó. Nếu không, sẽ xảy ra lỗi.

2. Cấm khai báo biến toàn cục ngầm định: biến không được khai báo bằng từ khóa `var`, `let` hoặc `const` trong một hàm sẽ bị coi là biến toàn cục, và điều này bị cấm trong `strict mode`

3. Cấm gán giá trị cho biến không khai báo.

4. Cấm ghi đè lên các từ khóa `eval`, `arguments`, và `implements` và sử dụng như tên biến.

5. Cấm xóa biến, hàm hoặc hàm xây dựng. Sử dụng `delete` để xóa sẽ gây ra lỗi.

6. Cấm tham chiếu đến `this` không xác định: nếu `this` không được xác định trong phạm vi, nó sẽ có giá trị `undefined`

7. Cấm tham số trùng lặp: không được đặt các tham số với tên trùng lặp trong một hàm.

- Ví dụ non-strict-mode:

```js
function myFunction(a, b, a) {
  console.log(a, b);
}
myFunction(1, 2, 3); //Output: 3, 2
```

- Ví dụ `use strict`:

```js
function myFunction(a, b, a) {
  console.log(a, b);
} // Output: Erro
myFunction(1, 2, 3);
```

8. Cấm gán giá trị cho hằng số (constants).

9. Biến không được ghi đè toàn cục: Không được ghi đè lên các biến toàn cục bằng cách khai báo biến với tên trùng lặp.

10. Nạp chồng toán tử giới hạn: Một số toán tử như delete, void, và eval không thể được nạp chồng hoặc sử dụng theo cách khác nhau.

11. Dùng this trong hàm: Khi sử dụng this trong một hàm, this không được ràng buộc tới đối tượng toàn cục (window trong trình duyệt).

12. Chế độ nghiêm ngặt với eval(): Trong strict mode, mã được đánh giá thông qua hàm eval() sẽ chạy trong một phạm vi cục bộ, không ảnh hưởng đến phạm vi xung quanh.

13. Các chế độ kiểm tra cảnh báo: Các cảnh báo không được thông báo trong strict mode, mà thay vào đó sẽ gây ra các ngoại lệ (TypeError, ReferenceError) trong trường hợp những hành vi không hợp lệ.

14. Các giá trị NaN, Infinity và undefined không thể gán lại: Trong strict mode, không thể gán lại giá trị cho các hằng số toàn cục như NaN, Infinity và undefined.

15. Các lỗi cú pháp nghiêm ngặt hơn: Strict mode yêu cầu cú pháp của JavaScript phải chính xác hơn. Ví dụ, việc sử dụng một từ khóa bị cấm như let làm tên biến sẽ gây ra một lỗi cú pháp trong strict mode, trong khi nó chỉ là một cảnh báo trong chế độ thông thường.

16. arguments bị hạn chế: Trong strict mode, arguments chỉ trỏ đến các đối số thực sự được truyền vào hàm và không cho phép ghi đè lên các đối số.

17. with bị cấm: Sử dụng từ khóa with là không được phép trong strict mode. Việc sử dụng with có thể gây ra các lỗi và làm cho mã khó hiểu và khó bảo trì.

18. Các phép gán bị hạn chế: Trong strict mode, các phép gán không hợp lệ như gán giá trị cho chỉ mục của một chuỗi được coi là lỗi cú pháp.

19. Hàm eval bị hạn chế: Sử dụng hàm eval để chuyển đổi một chuỗi thành mã JavaScript được giới hạn hơn trong strict mode. Mã trong eval không được có tác động đến phạm vi xung quanh hoặc tạo ra các biến toàn cục.
