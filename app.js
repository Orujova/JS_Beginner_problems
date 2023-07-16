// ------------------------İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
// let data = prompt("include name");
// console.log(data.length);

// --------------İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
// console.log(data.includes(data.charAt(1)));

//-------------- İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
// console.log(data.startsWith(data.charAt(1)));

// --------------İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
// console.log(data.endsWith(data.charAt(1)));

// ---------------İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
// console.log(data.indexOf(data.charAt(1)));

// -------------İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
// HELLO -> true
// HELLo -> false
// hello -> false
// heLLo -> false

// if (data.charat(toUpperCase() === data) {
//   console.log("TRUE");
// } else {
//   console.log("FALSE");
// }

// or
// console.log(data.includes(data.toUpperCase()));

// --------------------daxil edilen soz kicik herflerle daxil edilir, sozun ilk herfini boyuk edin
// let data = prompt("include name");

// let data1 = data.charAt(0).toUpperCase() + data.slice(1);
// console.log(data1);

// -------------------- ə herflerinin hamsinin evezine e yazsin
// data = data.replaceAll("ə", "e");

// ---------------- daxil edilen ededi yuvarlaqlasdirin
// console.log(Math.round(data));

// ------------------- Daxil olunan ədədin mükəmməl olub olmadığını tapın. ----------------

// let num = +prompt("ededleri daxil et");
// var sum = 0;
// for (var i = 1; i <= num / 2; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// if (sum === num ) {
//   console.log("It is a mukemmel number.");
// } else {
//   console.log("It is not a mukemmel number.");
// }

// ----------------- Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.--------------

// let startingValue = +prompt("Enter starting value: ");
// let endingValue = +prompt("Enter ending value: ");

// console.log(`mukemmel Numbers from ${startingValue} to ${endingValue} are:`);
// for (var i = startingValue; i <= endingValue; i++) {
//   var sum = 0;
//   for (var j = 1; j <= i / 2; j++) {
//     if (i % j === 0) {
//       sum += j;
//     }
//   }

//   if (sum === i) {
//     console.log(sum);
//   }
// }

// --------------------- .Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin. -----------------

// let startingValue = +prompt("Enter starting value: ");
// let endingValue = +prompt("Enter ending value: ");

// console.log(`sade Numbers from ${startingValue} to ${endingValue} are:`);
// for (let i = startingValue; i <= endingValue; i++) {
//   var sade = true;
//   for (var j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       sade = false;
//       break;
//     }
//   }
//   if (sade) {
//     console.log(i);
//   }
// }

// -------------------.Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.-----------------

// let startingValue = +prompt("Enter starting value: ");
// let endingValue = +prompt("Enter ending value: ");

// console.log(` Numbers from ${startingValue} to ${endingValue} are:`);

// for (var i = startingValue; i <= endingValue; i++) {
//   if (i % 10 == 7) {
//     console.log(i);
//   }
// }

// ---------------------6 rəqəmli ən kiçik və ən böyük sadə ədədi tapın.-------------------

// let max = 100000;
// let min = 999999;
// for (let i = 100000; i <= 999999; i++) {
//   let sade = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       sade = false;
//       break;
//     }
//   }
//   if (sade) {
//     if (i > max) {
//       max = i;
//     }
//   }
//   if (sade) {
//     if (i < min) {
//       min = i;
//     }
//   }
// }
// console.log(max);
// console.log(min);

// ----------------------------Daxil olunan ədədin tərsinin bölənlərini göstərin.--------------------------

// var num = +prompt("ededleri daxil et");
// var ters = 0;

// while (num > 0) {
//   ters = ters * 10;
//   ters = ters + (num % 10);
//   num = Math.floor(num / 10);
// }

// for (let bolen = 1; bolen <= ters; bolen++) {
//   if (ters % bolen == 0) {
//     console.log(bolen);
//   }
// }

// ------------------------
// * * * * *
// * * * * *
// * * * * *
// * * * * * ------------------

// let rows = +prompt();
// let cols = +prompt();

// let results = "";

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     results += " * ";
//   }
//   results += "\n";
// }
// console.log(results);

// -------------------- ulduzun ici bos cercevesi -------------------------

// let rows = +prompt();
// let cols = +prompt();

// let results = "";

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     if (i === 0 || i === rows - 1) {
//       results += " * ";
//     } else {
//       if (j === 0 || j === cols - 1) {
//         results += " * ";
//       } else {
//         results += " ".repeat(3);
//       }
//     }
//   }

//   results += "\n";
// }
// console.log(results);

//other

// let row = +prompt("");
// let col = +prompt("");
// let result = "";
// for (let i = 0; i < col; i++) {
//   for (let j = 0; j < row; j++) {
//     if (i === 0 || i === col - 1 || j === 0 || j === row - 1) {
//       result += "* ";
//     } else {
//       result += "  ";
//     }
//   }

//   result += "\n";
// }
// console.log(result);

// -------------- duzbucaqli ucbucaq -----------------

// let num = +prompt("eded daxil et");

// let result = "";
// for (let i = 0; i <= num; i++) {
//   for (let j = 0; j < i; j++) {
//     result += " * ";
//   }
//   result += "\n";
// }
// console.log(result);

// -------------------- duzbucaqli ucbucaq reqemli--------------------------------

// let num = +prompt("eded daxil et");

// let result = "";
// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j < i; j++) {
//     result += j;
//   }
//   result += "\n";
// }
// console.log(result);

// --------------------- pramida --------------------

// let num = +prompt("eded daxil et");
// let result = "";
// for (let i = 0; i <= num; i++) {
//   for (let j = 0; j <= num - i; j++) {
//     result += " ";
//   }

//   for (let n = 0; n < 2 * i - 1; n++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

// ---------- 01 li kvadrat --------------

// let rows = +prompt();
// let cols = +prompt();

// let results = "";

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     results += "0 1 ";
//   }
//   results += "\n";
// }
// console.log(results);

// ------------------------------- //hello world ->Hello World
//hello WORLD ->Hello World--------------------

// let text = "hello WORLD";
// let newText = text.charAt(0).toUpperCase();
// for (let i = 1; i < text.length; i++) {
//   if (text.charAt(i - 1) === " ") {
//     newText += text.charAt(i).toUpperCase();
//   } else {
//     newText += text.charAt(i).toLowerCase();
//   }
// }
// console.log(newText);

// --------------------------//input:  8
// ----------------------------//output: A b C d E f G h

// let num = +prompt("");
// let a = " ";
// for (let i = 0; i < num; i++) {
//   let s = String.fromCharCode(65 + i);
//   if ((65 + i) % 2 === 0) {
//     s = s.toLowerCase();
//   }
//   a += s + " ";
// }
// console.log(a);

// other

// let count = 90;
// let n = 65;
// let result = "";
// for (let i = 0; i < count; i++) {
//   let s = String.fromCharCode(n);
//   if (n % 2 === 0) {
//     s = s.toLowerCase();
//   }
//   result += `${s} `;
//   n++;
//   n = n <= 90 ? n : 65;
// }

// ----------------------//input:  4
// ----------------------//output: A A A A
// ----------------------//        B B B B
// ----------------------//        C C C C
//  ----------------------//       D D D D

// let n = 5;
// let result = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     result += String.fromCharCode(65 + i) + " ";
//   }
//   result += "\n";
// }
// console.log(result);

// -----------------------input
//abc
//bcd
//SOLUTIONS

// let text = "abc";
// let result = "";
// for (let i = 0; i < text.length; i++) {
//   result += String.fromCharCode(text.charCodeAt(i) + 1);
// }

// * * * * * *
// * *     * *
// *   * *   *
// *   * *   *
// * *     * *
// * * * * * *

// let n = 8;
// let result = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (
//       i === j ||
//       i === 0 ||
//       j === 0 ||
//       j === n - 1 ||
//       i === n - 1 ||
//       j === n - 1 - i
//     ) {
//       result += "* ";
//     } else {
//       result += "  ";
//     }
//   }
//   result += "\n";
// }
// console.log(result);
