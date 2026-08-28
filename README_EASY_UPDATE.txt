DANIEL SIMBOLON — EASY UPDATE PORTFOLIO
==============================================

Tujuan:
Portfolio ini sudah dibuat supaya penambahan project tidak mengharuskan kamu mengubah HTML.

CARA MENAMBAHKAN PROJECT
------------------------
1. Buka folder:
   Daniel_Portfolio_Web/assets/

2. Masukkan foto project baru ke folder assets.
   Contoh:
   assets/wwtp-panel-01.jpg
   assets/wwtp-panel-02.jpg

3. Buka file:
   projects.js

4. Copy satu blok project yang sudah ada.

5. Ganti:
   - id
   - title
   - category
   - role
   - description
   - summary
   - tags
   - image
   - gallery

6. Pastikan nama file foto sama persis dengan nama di folder assets.

7. Save projects.js.

8. Double-click:
   index.html

Portfolio akan menampilkan project baru secara otomatis.

CONTOH PROJECT BARU
-------------------
{
  "id": "07",
  "title": "Wastewater Treatment Plant Control Panel",
  "category": "PLC / Automation",
  "role": "Electrical Panel Builder & Wiring",
  "description": "Perakitan dan wiring panel kontrol untuk sistem wastewater treatment plant...",
  "summary": "PLC panel assembly, I/O wiring and motor control integration.",
  "tags": ["PLC", "HMI", "I/O", "MCC", "Motor Control"],
  "image": "assets/wwtp-panel-01.jpg",
  "gallery": [
    "assets/wwtp-panel-01.jpg",
    "assets/wwtp-panel-02.jpg"
  ]
}

CATATAN
-------
- Jangan menghapus tanda koma atau kurung jika belum familiar dengan JavaScript.
- Jangan mengubah index.html untuk menambah project.
- Semua data project berada di projects.js.
- Foto berada di assets/.
- Kamu bisa membuka index.html langsung di Chrome/Edge; tidak perlu hosting.
- Untuk upload ke hosting, upload seluruh folder Daniel_Portfolio_Web.

STRUKTUR
--------
Daniel_Portfolio_Web/
├── index.html
├── projects.js          <-- EDIT FILE INI UNTUK PROJECT BARU
├── README_EASY_UPDATE.txt
├── PROJECT_TEMPLATE.txt
├── assets/              <-- MASUKKAN FOTO DI SINI
└── projects/

Jika kamu punya project baru, cukup siapkan:
Nama project + role + pekerjaan yang dilakukan + komponen/sistem + foto.
