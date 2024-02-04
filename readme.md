```bash

Promise => object dari hasil suatu function yang memiliki kondisi berhasil/error

Asynchronous Function memiliki 2 bagian :
-async
    * async function akan otomatis menjadi promise
    * kalo asyncfunc punya data, maka resolvenya akan mengirimkan data juga yang bisa diolah
    * kalo asyncfunc punya object throw error, maka akan menjalankan reject

-await
    * hanya bisa dijalankan di asyncfunc
    * memproritaskan proses / menunggu proses await untuk menjalankan proses selanjutnya
```
