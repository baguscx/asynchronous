//function yg ada async otomatis jadi promise
//promise maka bisa di panggil dengan then

const hello = async () => {
  throw "errorssss"; //masuk ke catch
  //   return "Hellow world";
};

hello()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
