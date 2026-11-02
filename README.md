## Menjalankan
```bash
bun install
bun run dev
```

## Pertanyaan Pemahaman

1. State Management & Lifecycle: Bagaimana cara Anda melakukan fetching data di React? Jika Anda menggunakan useEffect, jelaskan bagaimana cara Anda mencegah terjadinya memory leak atau pemanggilan API berulang (infinite loop).
   Jawab : Saya melakukan pemisahan logic, request saya ditaruh pada services/getUser.js karena bertujuan untuk mengisolasi mengisolasi komponen UI dari detail teknis pengambilan data. Lalu di komponen, saya memakai useEffect dengan dependency array kosong untuk memanggil service tersebut sekali saat komponen mount. Untuk mencegah pemanggilan API berulang (infinite loop),dicegah melalui dependency array kosong di useEffect

2. Struktur Folder: Mengapa Anda menstrukturisasi folder/file seperti yang ada di project Anda saat ini? Jelaskan alasannya.
    Jawab : Karena project ini menggunakan React Vite, saya membuat folder components/ untuk menyimpan komponen UI yang fokus pada tampilan dan dapat digunakan ulang, lalu menggabungkannya di App.jsx. App.jsx berperan sebagai parent, di sana data dipanggil sekali lewat useEffect, kemudian dioper ke child component melalui props, sehingga tidak ada request berulang di tiap child. Request API dipisah ke folder services/ agar child component tidak bergantung pada detail teknis pengambilan data seperti endpoint dan format response. Jika endpoint berubah, cukup mengubah satu file.

3. Optimasi Kinerja (Performance): Anggaplah API tiba-tiba mengembalikan 10.000 data user sekaligus dan membuat aplikasi lag saat diketik di kolom pencarian. Pendekatan apa (fitur React apa) yang akan Anda gunakan untuk mengatasi lag tersebut?
    Jawab : Di project saya, pencarian memakai debounce 300ms. State search diupdate tiap ketikan supaya input tetap terasa langsung, tapi nilai yang dipakai buat memfilter (debouncedSearch) baru diupdate setelah user berhenti mengetik 300ms, dengan setTimeout dan cleanup clearTimeout di useEffect.


