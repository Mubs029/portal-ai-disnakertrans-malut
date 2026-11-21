// 1. TAHAPAN ALUR BELAJAR SESI 2 (180 MENIT)
const stages = [
  { title: "1. Ulasan Sesi 1", time: "10 mnt" },
  { title: "2. AI per Bidang", time: "35 mnt" },
  { title: "3. Analisis Data", time: "40 mnt" },
  { title: "4. Laporan Kinerja", time: "20 mnt" },
  { title: "5. Pustaka Prompt", time: "45 mnt" },
  { title: "6. Rencana Aksi", time: "30 mnt" }
];

// 2. DATA 6 BIDANG DISNAKERTRANS MALUKU UTARA (DIPERKAYA & BERBASIS ALOKASI WAKTU)
const bidangData = [
  {
    key: "pengawasan",
    nama: "Pengawasan Ketenagakerjaan & K3",
    fokus: "Daftar periksa pemeriksaan, ringkasan temuan, draf nota pemeriksaan, analisis pola kecelakaan kerja, dan materi sosialisasi K3.",
    kasus: "Tim Pengawas melakukan pemeriksaan norma kerja dan K3 pada perusahaan subkontraktor kawasan industri pengolahan mineral di Halmahera Tengah/Selatan. Ditemukan ketidaksesuaian penggunaan APD, pencatatan jam lembur, serta 12 laporan insiden kerja ringan-sedang dalam 6 bulan terakhir.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Checklist Pemeriksaan Lapangan & Draf Nota Pemeriksaan Pertama",
        isi: `Bertindaklah sebagai Pengawas Ketenagakerjaan Ahli di Disnakertrans Provinsi Maluku Utara.
Konteks: Akan dilakukan pemeriksaan norma kerja dan K3 pada perusahaan subkontraktor kawasan industri (nama disamarkan: Perusahaan X, jumlah pekerja ±250 orang).
Tugas:
1. Susun daftar periksa (checklist) pemeriksaan lapangan dalam format tabel (Aspek Norma Kerja/K3, Indikator Kepatuhan, Dokumen Bukti, Status).
2. Buat kerangka draf Nota Pemeriksaan Pertama yang formal, objektif, dan mencantumkan kolom batas waktu perbaikan (maks. 30 hari).
Catatan: Beri tanda [VERIFIKASI PASAL] pada setiap rujukan regulasi agar saya cek ulang terhadap peraturan terbaru.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Ringkasan Temuan Inspeksi & Analisis Pola Kecelakaan Kerja",
        isi: `Bertindaklah sebagai Spesialis K3 Pemerintah Daerah. Berikut catatan mentah temuan lapangan dan rekap anonim 12 kejadian kecelakaan kerja selama 6 bulan terakhir: [TEMPEL DATA ANONIM].
Tugas:
1. Ringkas temuan menjadi kategori: Temuan Mayor (wajib segera diperbaiki) dan Temuan Minor.
2. Kelompokkan pola penyebab kecelakaan kerja (faktor manusia, alat/mesin, atau lingkungan kerja).
3. Susun 3 rekomendasi teknis pencegahan kecelakaan kerja yang realistis untuk manajemen Perusahaan X.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Materi Sosialisasi K3 (Safety Briefing) Ramah Pekerja",
        isi: `Bertindaklah sebagai Penyuluh K3 Disnakertrans Maluku Utara.
Konteks: Berdasarkan temuan rendahnya kepatuhan helm proyek, sepatu safety, dan prosedur kerja di ketinggian pada pekerja subkontraktor.
Tugas: Susun 1 lembar naskah materi sosialisasi K3 (safety briefing 10 menit) dengan bahasa lugas, persuasif, dan mudah dipahami pekerja lapangan, lengkap dengan 5 poin pengingat utama yang bisa dicetak sebagai poster/infografis.`
      }
    ]
  },
  {
    key: "hi",
    nama: "Hubungan Industrial",
    fokus: "Ringkasan kronologi perselisihan, telaah draf PP/PKB terhadap regulasi, serta bahan dan anjuran mediasi.",
    kasus: "Mediator Hubungan Industrial menangani perselisihan PHK antara pekerja (Pekerja A) dan perusahaan jasa konstruksi (Perusahaan Y), sekaligus menerima pengajuan pengesahan draf Peraturan Perusahaan (PP) baru.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Ringkasan Kronologi Perselisihan & Daftar Pertanyaan Mediasi",
        isi: `Bertindaklah sebagai Mediator Hubungan Industrial yang netral di Disnakertrans Provinsi Maluku Utara.
Konteks: Berikut catatan kronologi perselisihan PHK antara Pekerja A dan Perusahaan Y (seluruh identitas asli disamarkan): [TEMPEL KRONOLOGI].
Tugas:
1. Susun ringkasan kronologi secara runtut dalam tabel (Tanggal, Peristiwa, Posisi Pekerja, Posisi Pengusaha).
2. Identifikasi titik sengketa utama dan buat 5 pertanyaan klarifikasi netral untuk menggali fakta pada sidang mediasi.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "20 Menit",
        judul: "Telaah Awal Draf Peraturan Perusahaan (PP) / PKB",
        isi: `Bertindaklah sebagai Analis Hubungan Industrial. Saya melampirkan kutipan pasal draf Peraturan Perusahaan (anonim) terkait waktu kerja, lembur, cuti, dan sanksi disiplin: [TEMPEL KUTIPAN PASAL].
Tugas: Lakukan telaah awal terhadap kesesuaiannya dengan prinsip umum regulasi ketenagakerjaan Indonesia. Sajikan dalam tabel: Pasal Draf, Potensi Ketidaksesuaian/Risiko, dan Saran Perbaikan Redaksi. Tandai [CEK PASAL] untuk verifikasi manual.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Penyusunan Kerangka Draf Anjuran Mediasi",
        isi: `Bertindaklah sebagai Mediator Hubungan Industrial. Berdasarkan ringkasan hasil sidang mediasi I dan II (tidak tercapai kesepakatan) berikut: [TEMPEL RINGKASAN SIDANG ANONIM].
Tugas: Susun kerangka draf Anjuran Mediasi yang formal dan seimbang, mencakup: Duduk Perkara, Pendapat Pekerja, Pendapat Pengusaha, Pertimbangan Mediator, dan Butir Anjuran. Jangan mengarang nomor undang-undang/pasal tanpa tanda [VERIFIKASI].`
      }
    ]
  },
  {
    key: "pelatihan",
    nama: "Pelatihan & Produktivitas (UPTD/BLK)",
    fokus: "Kurikulum dan modul pelatihan sesuai kebutuhan industri, soal uji kompetensi, dan materi promosi pelatihan.",
    kasus: "UPTD BLK Provinsi Maluku Utara menyiapkan program Pelatihan Berbasis Kompetensi (PBK) kejuruan Pengelasan (Welding SMAW 3G) dan Instalasi Listrik Industri agar lulusan lokal terserap di kawasan industri.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Kerangka Kurikulum Pelatihan Berbasis Kompetensi (PBK)",
        isi: `Bertindaklah sebagai Instruktur Senior UPTD BLK Provinsi Maluku Utara.
Konteks: Merancang pelatihan 20 hari (160 JP) kejuruan [SEBUTKAN KEJURUAN, mis. Pengelasan SMAW 3G / Operator Alat Berat] agar lulusan siap kerja di industri Maluku Utara.
Tugas: Susun struktur kurikulum dalam tabel (Unit Kompetensi, Materi Pokok, Jam Teori, Jam Praktik, Indikator Kelulusan) serta kerangka ringkas modul pertemuan pertama.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "20 Menit",
        judul: "Penyusunan Bank Soal Uji Kompetensi & Rubrik Praktik",
        isi: `Bertindaklah sebagai Asesor dan Penyusun Materi Uji Kompetensi UPTD BLK.
Tugas:
1. Buat 10 soal pilihan ganda berbasis studi kasus lapangan untuk kejuruan [NAMA KEJURUAN] (mencakup K3 bengkel dan teknis dasar) lengkap dengan kunci jawaban.
2. Buat rubrik penilaian uji praktik dalam bentuk tabel (Aspek Penilaian, Bobot %, Kriteria Kompeten, Kriteria Belum Kompeten).`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Materi Promosi Pelatihan Vokasi untuk Media Sosial & Pengumuman",
        isi: `Bertindaklah sebagai Humas UPTD BLK Disnakertrans Maluku Utara.
Konteks: Pembukaan pendaftaran pelatihan gratis bersertifikat BNSP untuk pemuda lokal Maluku Utara (kuota 32 orang, pendaftaran tanggal [TANGGAL]).
Tugas: Buat 2 versi naskah promosi: (1) Caption informatif dan menarik untuk Instagram/Facebook resmi dinas, dan (2) Pesan broadcast singkat untuk grup WhatsApp kelurahan/desa.`
      }
    ]
  },
  {
    key: "penempatan",
    nama: "Penempatan & Perluasan Kesempatan Kerja",
    fokus: "Analisis data lowongan dan pencari kerja, pencocokan keterampilan, konten informasi pasar kerja, serta dukungan analisis penggunaan TKA.",
    kasus: "Pengantar Kerja mengevaluasi tingginya angka pencari kerja lulusan SMA/SMK lokal di Ternate, Tidore, dan Halmahera yang belum terserap di lowongan teknis industri, sekaligus menelaah laporan rasio TKA dan TKI pendamping.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Analisis Kesenjangan Keterampilan (Skill Mismatch) & Pencocokan",
        isi: `Bertindaklah sebagai Pengantar Kerja Ahli di Disnakertrans Provinsi Maluku Utara.
Konteks: Berikut rekap anonim data pencari kerja (pendidikan & keahlian) dibandingkan dengan rekap lowongan perusahaan semester ini: [TEMPEL DATA ANONIM].
Tugas:
1. Identifikasi 3 kesenjangan keterampilan (skill mismatch) terbesar.
2. Buat matriks pencocokan (matching) antara profil pencari kerja yang ada dengan jenis pelatihan singkat yang direkomendasikan agar siap ditempatkan.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "20 Menit",
        judul: "Dukungan Analisis Laporan Penggunaan TKA & Alih Teknologi",
        isi: `Bertindaklah sebagai Analis Kebijakan Penempatan Tenaga Kerja. Berikut tabel anonim jumlah TKA berdasarkan jabatan, sektor, dan jumlah Tenaga Kerja Pendamping (TKI) di Maluku Utara: [TEMPEL DATA ANONIM].
Tugas:
1. Analisis rasio TKA terhadap TKI pendamping per sektor dan tandai perusahaan dengan rasio pendampingan rendah.
2. Susun 4 poin bahan evaluasi untuk rapat koordinasi pengawasan alih teknologi dan alih keahlian.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Konten Buletin Informasi Pasar Kerja (IPK) Bulanan",
        isi: `Bertindaklah sebagai Pengelola Informasi Pasar Kerja (IPK) Disnakertrans Maluku Utara.
Konteks: Rekap bulan ini mencatat 450 pencari kerja terdaftar, 280 lowongan aktif (dominan sektor konstruksi, mekanik, dan administrasi), dan 195 penempatan.
Tugas: Susun naskah ringkas Buletin IPK (maks. 300 kata) yang komunikatif untuk pencari kerja dan pemangku kepentingan, dilengkapi tips persiapan melamar kerja.`
      }
    ]
  },
  {
    key: "transmigrasi",
    nama: "Transmigrasi",
    fokus: "Ringkasan kajian kawasan, profil potensi kawasan transmigrasi, serta bahan perencanaan dan koordinasi lintas OPD.",
    kasus: "Bidang Transmigrasi menyiapkan profil potensi ekonomi (pala, kelapa, hortikultura, perikanan) dan peta kebutuhan infrastruktur dasar kawasan transmigrasi di Pulau Halmahera untuk rapat koordinasi pembangunan kawasan.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Ringkasan Kajian & Profil Potensi Kawasan Transmigrasi",
        isi: `Bertindaklah sebagai Perencana Pembangunan Kawasan Transmigrasi di Disnakertrans Provinsi Maluku Utara.
Konteks: Berikut catatan hasil survei lapangan kawasan transmigrasi [NAMA KAWASAN / KABUPATEN]: [TEMPEL CATATAN SURVEI].
Tugas: Susun Profil Potensi Kawasan secara ringkas dengan struktur: (1) Gambaran Umum, (2) Potensi Komoditas Unggulan, (3) Kondisi Infrastruktur Dasar, (4) Peluang Kemitraan Usaha, dan (5) Kebutuhan Intervensi.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "20 Menit",
        judul: "Bahan Rapat Koordinasi Lintas OPD & Matriks Pembagian Peran",
        isi: `Bertindaklah sebagai Koordinator Perencanaan Transmigrasi. Dari ringkasan kendala akses jalan tani, ketersediaan air bersih, dan pemasaran hasil panen warga transmigran berikut: [TEMPEL RINGKASAN].
Tugas:
1. Susun kerangka paparan pimpinan (maks. 6 slide, masing-masing 3–4 poin kunci).
2. Buat matriks pembagian peran koordinasi antar-OPD (PUPR, Pertanian, Perdagangan, Disnakertrans) dalam format tabel.`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Ringkasan Eksekutif Laporan Progres Pembangunan Kawasan",
        isi: `Bertindaklah sebagai Penyusun Laporan Teknis Transmigrasi. Berikut data progres fisik dan penyerapan anggaran pembangunan sarana prasarana kawasan transmigrasi triwulan berjalan: [TEMPEL DATA ANONIM].
Tugas: Susun Ringkasan Eksekutif 1 halaman untuk Kepala Dinas yang menyoroti capaian utama, hambatan cuaca/logistik kepulauan, dan langkah percepatan triwulan berikutnya.`
      }
    ]
  },
  {
    key: "sekretariat",
    nama: "Sekretariat",
    fokus: "Bahan perencanaan, administrasi kepegawaian, pelaporan keuangan, dan dukungan tata naskah dinas.",
    kasus: "Tim Sekretariat menyusun bahan perencanaan program lintas bidang, evaluasi serapan anggaran triwulanan, serta administrasi pengembangan kompetensi dan kepegawaian ASN.",
    prompts: [
      {
        mode: "Demo Fasilitator",
        durasi: "5 Menit",
        judul: "Draf Telaahan Staf & Nota Dinas Perencanaan Kegiatan",
        isi: `Bertindaklah sebagai Kasubbag Umum dan Kepegawaian di Sekretariat Disnakertrans Provinsi Maluku Utara.
Konteks: Akan diusulkan kegiatan [NAMA KEGIATAN] dengan latar belakang [JELASKAN SINGKAT] dan pagu indikatif [NOMINAL].
Tugas: Susun draf Telaahan Staf sesuai tata naskah dinas pemerintahan (Persoalan, Praanggapan, Fakta yang Mempengaruhi, Analisis, Kesimpulan, dan Saran Tindak Lanjut).`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "20 Menit",
        judul: "Ringkasan Evaluasi Serapan Keuangan & Rencana Tindak Lanjut",
        isi: `Bertindaklah sebagai Analis Keuangan dan Perencanaan OPD. Berikut catatan rapat evaluasi realisasi anggaran per bidang triwulan berjalan (tanpa nomor rekening/identitas pribadi): [TEMPEL CATATAN].
Tugas:
1. Susun Notulen Rapat yang terstruktur (Agenda, Capaian Serapan, Kendala Administrasi/Teknis, Keputusan).
2. Buat tabel Rencana Tindak Lanjut (Kegiatan, Bidang Penanggung Jawab, Target Waktu, Indikator Penyelesaian).`
      },
      {
        mode: "Praktik Kelompok",
        durasi: "15 Menit",
        judul: "Kerangka Matriks Kebutuhan Pengembangan Kompetensi ASN",
        isi: `Bertindaklah sebagai Analis SDM Aparatur di Sekretariat Disnakertrans Maluku Utara.
Konteks: Rekap anonim komposisi jabatan fungsional (Pengawas, Mediator, Instruktur, Pengantar Kerja) dan pelaksana yang membutuhkan peningkatan kompetensi digital/AI.
Tugas: Susun matriks usulan program pengembangan kompetensi (Jabatan, Kesenjangan Kompetensi, Bentuk Pelatihan, Estimasi Waktu, Output yang Diharapkan) untuk bahan perencanaan tahun berikutnya.`
      }
    ]
  }
];

// 3. SIMULASI DATASET ANONIM
const datasets = {
  pencaker: {
    headers: ["Kode_Wilayah", "Kabupaten_Kota", "Pendidikan_Dominan", "Pencaker_Terdaftar", "Ditempatkan", "Keterangan_Kotor"],
    rows: [
      ["MU-01", "Kota Ternate", "S1/Diploma", "420", "295", "  data lengkap "],
      ["MU-02", "kota tidore kepulauan", "SMA/SMK", "210", "130", "belum verifikasi"],
      ["MU-03", "Halmahera Tengah", "SMK Teknik", "580", "490", "serapan industri nikel"],
      ["MU-04", "Halmahera Selatan", "SMA/SMK", "340", "245", "serapan industri"],
      ["MU-05", "Halmahera Utara", "SMA/SMK", "275", "160", "perlu pelatihan las"]
    ]
  },
  tka: {
    headers: ["Kode_Perusahaan", "Sektor", "Lokasi", "Jumlah_TKA", "TKI_Pendamping", "Status_Laporan"],
    rows: [
      ["PT-A (Anonim)", "Pengolahan Mineral", "Halmahera Tengah", "145", "290", "Lengkap"],
      ["PT-B (Anonim)", "Konstruksi Industri", "Halmahera Selatan", "68", "110", "Perlu Evaluasi"],
      ["PT-C (Anonim)", "Pertambangan", "Halmahera Timur", "92", "184", "Lengkap"],
      ["PT-D (Anonim)", "Energi/PLTU", "Halmahera Tengah", "34", "40", "Rasio Rendah"]
    ]
  },
  phk: {
    headers: ["No_Kasus", "Sektor_Usaha", "Jumlah_Pekerja_Anonim", "Penyebab_Utama", "Status_Mediasi"],
    rows: [
      ["HI-2026-01", "Subkontraktor Tambang", "12", "Efisiensi Kontrak", "Sepakat (PB)"],
      ["HI-2026-02", "Perdagangan/Ritel", "4", "Pelanggaran Disiplin", "Anjuran"],
      ["HI-2026-03", "Jasa Konstruksi", "18", "Proyek Selesai", "Dalam Proses"],
      ["HI-2026-04", "Perhotelan", "6", "Penurunan Omzet", "Sepakat (PB)"]
    ]
  },
  blk: {
    headers: ["Angkatan", "Kejuruan_BLK", "Peserta_Lulus", "Tersertifikasi_BNSP", "Terserap_Kerja_3Bln"],
    rows: [
      ["Batch 1", "Pengelasan SMAW 3G", "32", "30", "26"],
      ["Batch 1", "Instalasi Listrik Industri", "24", "22", "19"],
      ["Batch 2", "Administrasi Perkantoran", "30", "28", "17"],
      ["Batch 2", "Teknisi AC & Pendingin", "20", "18", "15"]
    ]
  }
};

// 4. DEFAULT PUSTAKA PROMPT
const defaultPustaka = [
  {
    id: 1,
    judul: "Ringkasan Temuan Pengawasan K3 Lapangan",
    bidang: "Pengawasan & K3",
    isi: "Bertindaklah sebagai Pengawas Ketenagakerjaan. Rangkum catatan hasil inspeksi K3 anonim berikut menjadi tabel temuan mayor, minor, dan rekomendasi batas waktu perbaikan."
  },
  {
    id: 2,
    judul: "Draf Materi Promosi Pelatihan Vokasi BLK",
    bidang: "Pelatihan & BLK",
    isi: "Bertindaklah sebagai Humas UPTD BLK Maluku Utara. Buat naskah pengumuman pendaftaran pelatihan pengelasan gratis yang singkat, jelas, dan memuat syarat pendaftaran."
  }
];

// 5. SOAL EVALUASI SINGKAT
const quizQuestions = [
  {
    q: "1. Manakah data berikut yang DILARANG dimasukkan ke layanan AI publik sesuai UU PDP?",
    options: [
      "Data rekapitulasi jumlah pencari kerja per kabupaten tanpa nama",
      "NIK, nama lengkap pekerja, dan dokumen rahasia perusahaan",
      "Kerangka umum struktur LKJIP instansi"
    ],
    ans: 1
  },
  {
    q: "2. Apa risiko utama saat meminta AI mengutip pasal peraturan atau menghitung tabel kompleks?",
    options: [
      "Halusinasi (AI menghasilkan angka/pasal keliru) sehingga wajib diverifikasi ulang ASN",
      "AI otomatis memperbarui regulasi daerah tanpa perlu dicek",
      "File Excel akan terhapus secara permanen"
    ],
    ans: 0
  },
  {
    q: "3. Manakah 5 unsur struktur prompt efektif untuk pekerjaan ASN?",
    options: [
      "Judul, Tanggal, Tanda Tangan, Lampiran, Tembusan",
      "Peran, Konteks, Tugas, Format Keluaran, dan Contoh",
      "Nama File, Ukuran Font, Warna, Margin, Spasi"
    ],
    ans: 1
  }
];