// contoh multi thread
console.log("First");
setTimeout(() => {
  console.log("sudah masuk memory proses tapi dijalankan 3 detik kedepan");
}, 3000);
console.log("Second");

// callback hell
setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "green";
    setTimeout(() => {
      document.body.style.backgroundColor = "blue";
    }, 1000);
  }, 1000);
}, 1000);

// callback hell🙅 promise👌
