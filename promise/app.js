// 2 function yg melakukan request

// callback func version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection timeout");
    } else {
      success(`Success request data from ${url} (${delay}ms) `);
    }
  }, delay);
};

//run the function
// requestCallback(
//   "movies.com",
//   function (response) {
//     console.log("Success", response);
//     //masalah yang terjadi (callback hell)👎
//     requestCallback(
//       "movies.com",
//       function (response) {
//         console.log("Success", response);
//         requestCallback(
//           "movies.com",
//           function (response) {
//             console.log("Success", response);
//             requestCallback(
//               "movies.com",
//               function (response) {
//                 console.log("Success", response);
//               },
//               function (error) {
//                 console.log("failure", error);
//               }
//             );
//           },
//           function (error) {
//             console.log("failure", error);
//           }
//         );
//       },
//       function (error) {
//         console.log("failure", error);
//       }
//     );
//   },
//   function (error) {
//     console.log("failure", error);
//   }
// );

// promise func verison
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection timeout / lambat cok");
      } else {
        resolve(`Success request data from ${url} (${delay}ms) `);
      }
    }, delay);
  });
};

//run the function
// requestPromise("movies.com")
//   .then((response) => {
//     console.log("Success", response);
//     //promise juga bisa terjadi (callback hell)👎😅
//     requestPromise("movies.com")
//       .then((response) => {
//         console.log("Success", response);
//         requestPromise("movies.com")
//           .then((response) => {
//             console.log("Success", response);
//             requestPromise("movies.com")
//               .then((response) => {
//                 console.log("Success", response);
//                 requestPromise("movies.com")
//                   .then((response) => {
//                     console.log("Success", response);
//                   })
//                   .catch((error) => {
//                     console.log("failure", error);
//                   });
//               })
//               .catch((error) => {
//                 console.log("failure", error);
//               });
//           })
//           .catch((error) => {
//             console.log("failure", error);
//           });
//       })
//       .catch((error) => {
//         console.log("failure", error);
//       });
//   })
//   .catch((error) => {
//     console.log("failure", error);
//   });

//penggunaan promise yang benar
requestPromise("movies.com")
  .then((result) => {
    console.log(result);
    console.log("page 1");
    return requestPromise("movies.com");
  })
  .then(() => {
    console.log("page 2");
    return requestPromise("movies.com");
  })
  .then(() => {
    console.log("page 3");
    return requestPromise("movies.com");
  })
  .catch((error) => {
    console.log(error);
  });

//penggunaan error handler di async await
async function tesHandler() {
  //menggunakan try & catch
  try {
    const result = await requestPromise("movies.com");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
