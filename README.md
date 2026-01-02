# 📚 REST API Manajemen Buku

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

> API RESTful yang modular dan tangguh dibangun dengan Node.js dan Express untuk sistem manajemen inventaris buku secara efisien.

---

## 🚀 Ringkasan

Proyek ini adalah aplikasi backend yang dirancang untuk mendemonstrasikan arsitektur yang bersih dan terukur (MVC) untuk membangun REST API. Aplikasi ini menyediakan endpoint lengkap untuk mengelola data buku, termasuk menambah, memperbarui, menghapus, dan mengambil data buku.

Proyek ini cocok sebagai starter kit atau referensi untuk:

- Belajar **Node.js** & **Express**
- Memahami **Arsitektur MVC** dalam pengembangan backend
- Mengimplementasikan interaksi **MySQL**
- Menyusun API siap produksi

## ✨ Fitur Utama

- **Operasi CRUD**: Kemampuan Create, Read, Update, Delete lengkap untuk data buku.
- **Arsitektur Modular**: Kode dipisahkan menjadi Routes, Controller, Config, dan Utils untuk pemeliharaan yang lebih baik.
- **Konfigurasi Lingkungan**: Pengelolaan kredensial yang aman menggunakan `.env`.
- **Respons Terstandarisasi**: Struktur respons JSON yang konsisten di seluruh endpoint.
- **Koleksi Postman**: Dokumentasi API siap pakai untuk pengujian.

## 🛠️ Teknologi yang Digunakan

- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/)
- **Dependencies**: `body-parser`, `dotenv`, `mysql`

## 📂 Struktur Proyek

```text
restapi-book/
├── docs/               # Aset dokumentasi
│   └── postman_collection.json
├── src/
│   ├── config/         # Konfigurasi koneksi database
│   ├── controllers/    # Logika bisnis & penanganan request
│   ├── routes/         # Definisi endpoint API
│   ├── utils/          # Fungsi pembantu (format respons)
│   └── app.js          # Titik masuk aplikasi
├── .env                # Variabel lingkungan
└── package.json
```

## 🏁 Mulai

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal.

### Prasyarat

- Node.js (v14 atau lebih tinggi)
- Server MySQL terinstal dan berjalan

### Instalasi

1.  **Clone repositori**

    ```bash
    git clone https://github.com/hndko/restapi-book.git
    cd restapi-book
    ```

2.  **Instal dependensi**

    ```bash
    npm install
    ```

3.  **Konfigurasi Lingkungan**

    - Salin file contoh lingkungan:
      ```bash
      cp .env.example .env
      ```
    - Buka `.env` dan isi kredensial MySQL Anda:
      ```env
      PORT=9000
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=root
      DB_NAME=db_restapi
      ```

4.  **Setup Database**

    - Buat database bernama `db_restapi`.
    - Buat tabel `tb_buku` dengan kolom: `id`, `judul`, `pengarang`, `penerbit`, `tahun_terbit`.

5.  **Jalankan Server**
    ```bash
    npm start
    ```
    Server akan berjalan di `http://localhost:9000`.

## 📖 Dokumentasi API

Dokumentasi API lengkap tersedia melalui Koleksi Postman.

1.  **Buka Postman**.
2.  **Impor** file yang terletak di `docs/postman_collection.json`.
3.  Anda akan melihat semua endpoint siap untuk diuji:
    - `GET /` - Cek Status API
    - `GET /show-book` - Ambil semua buku
    - `GET /show-book/:id` - Ambil buku spesifik
    - `POST /create-book` - Tambah buku baru
    - `PUT /edit-book` - Perbarui buku
    - `DELETE /delete-book` - Hapus buku

## 👨‍💻 Pembuat

**Handoko**

- GitHub: [@hndko](https://github.com/hndko)

---

_Dibuat dengan ❤️ menggunakan Node.js_
