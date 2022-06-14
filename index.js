// const toBase64 = file => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = error => reject(error);
//     });

// }

// var file = document.querySelector('#file > input[type="file"]').file[1];
// getBase64(file).then(
//     data => document.write("result")
// );