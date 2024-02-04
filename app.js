// contoh multi thread
console.log("First");
setTimeout(() => {
  console.log("sudah masuk memory proses tapi dijalankan 3 detik kedepan");
}, 3000);
console.log("Second");

// callback hell
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "green";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//     }, 1000);
//   }, 1000);
// }, 1000);

// callback hell🙅 promise👌✅✅✅
const changeBackground = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// 1️⃣
// changeBackground("red", 1000).then(() => {
//   changeBackground("green", 1000).then(() => {
//     changeBackground("blue", 1000);
//   });
// });

// 2️⃣
changeBackground("red", 1000)
  .then(() => changeBackground("green", 1000))
  .then(() => changeBackground("blue", 1000));
