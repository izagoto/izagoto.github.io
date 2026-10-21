# Portfolio 3D

Portofolio satu halaman: latar 3D (Three.js), antarmuka HUD, dan konsol perintah teks. Berisi profil, pengalaman kerja, dan keahlian.

## Isi situs

| Modul | Isi |
| --- | --- |
| Profil | About, stack teknis, tautan sosial |
| Pengalaman | Riwayat kerja |
| Keahlian | Stack dan bidang keahlian |

Menu proyek dan kontak sementara tidak dipakai. Tautan sosial ada di modul **Profil**; perintah `linkedin` / `github` di konsol membuka tab eksternal.

## Fitur

- Animasi reaktor holografik (Three.js)
- Layar boot + tombol **MASUK**
- Navigasi sidebar dan perintah di konsol bawah
- Ganti tema warna: biru (default), merah, emas
- Jam & tanggal, responsif mobile
- Tanpa suara / mikrofon

## Menjalankan lokal

Tidak ada `npm install`. Cukup buka file atau pakai server statis:

```bash
cd portofolio-3D
python3 -m http.server 8080
```

Buka [http://localhost:8080](http://localhost:8080).

## Perintah konsol

Ketik lalu Enter, atau klik chip di bawah input:

| Perintah | Fungsi |
| --- | --- |
| `tentang` | Buka profil |
| `pengalaman` | Buka pengalaman kerja |
| `keahlian` | Buka keahlian |
| `linkedin` | Buka tautan LinkedIn (dari config) |
| `github` | Buka tautan GitHub (dari config) |
| `bantuan` | Daftar perintah |
| `mode biru` / `mode merah` / `mode emas` | Ganti warna tema |
| `status sistem`, `cepat`, `pelan` | Efek UI / animasi 3D |
| `home` / `beranda` | Tutup panel |

## Teknologi

- HTML, CSS, JavaScript (vanilla)
- [Three.js r128](https://threejs.org/) via CDN
- Font: Orbitron, Rajdhani (Google Fonts)

## Struktur repo

```
portofolio-3D/
├── index.html   # UI, scene 3D, konten, perintah
└── README.md
```

## Mengubah konten

Semua teks modul ada di objek `MOD` di `index.html`. Constant di bagian atas script (`OWNER`, `TAG`, URL sosial, dll.).

Setelah edit, refresh browser. Untuk deploy, unggah `index.html` ke hosting statis (GitHub Pages, Netlify, dll.).
