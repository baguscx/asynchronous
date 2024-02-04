//object promise func
const contohPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(() => {
      console.log("Success", response);
    });
    reject(() => {
      console.log("failure", error);
    });
  });
};
