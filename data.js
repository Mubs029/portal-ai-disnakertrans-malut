// 1. TAHAPAN ALUR BELAJAR SESI 2 (180 MENIT)
const stages = [
  { title: "1. Ulasan Sesi 1", time: "10 mnt" },
  { title: "2. AI per Bidang", time: "35 mnt" },
  { title: "3. Analisis Data", time: "40 mnt" },
  { title: "4. Laporan Kinerja", time: "20 mnt" },
  { title: "5. Pustaka Prompt", time: "45 mnt" },
  { title: "6. Rencana Aksi", time: "30 mnt" }
];

// 2. DATA 6 BIDANG & SEKSI DISNAKERTRANS MALUKU UTARA (OPSI A: SUB-TAB SEKSI)
const bidangData = [
  {
    key: "pengawasan",
    nama: "Pengawasan Ketenagakerjaan & K3",
    seksi: [
      {
        key: "norma-kerja",
        nama: "Seksi Norma Kerja",
        fokus: "Daftar periksa pemeriksaan norma kerja (PKWT, jam kerja, lembur, upah) dan draf nota pemeriksaan.",
        kasus: "Tim Pengawas memeriksa norma kerja pada perusahaan subkontraktor kawasan industri di Halmahera Tengah/Selatan terkait pencatatan jam lembur dan status PKWT.",
        prompts: [
          {
            mode: "Demo Fasilitator",
            durasi: "5 Menit",
            judul: "Checklist Pemeriksaan Norma Kerja & Draf Nota Pemeriksaan I",
            isi: `Bertindaklah sebagai Pengawas Ketenagakerjaan Ahli di Disnakertrans Provinsi Maluku Utara.
Konteks: Akan dilakukan pemeriksaan norma kerja pada perusahaan subkontraktor kawasan industri (Perusahaan X, ±250 pekerja).
Tugas:
1. Susun daftar periksa (checklist) norma kerja dalam format tabel (Aspek Norma Kerja, Indikator Kepatuhan, Dokumen Bukti, Status).
2. Buat kerangka draf Nota Pemeriksaan Pertama yang formal, objektif, dan mencantumkan batas waktu perbaikan (maks. 30 hari).
Catatan: Beri tanda [VERIFIKASI PASAL] pada setiap rujukan regulasi.`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Analisis Kepatuhan Jam Lembur & Status Kontrak",
            isi: `Bertindaklah sebagai Pengawas Norma Kerja. Berikut rekap anonim catatan jam kerja dan lembur 20 pekerja shift di Perusahaan X: [TEMPEL DATA ANONIM].
Tugas:
1. Identifikasi indikasi pelanggaran batas waktu lembur atau hak istirahat mingguan.
2. Susun 3 poin rekomendasi perbaikan administrasi kepegawaian untuk perusahaan.`
          }
        ]
      },
      {
        key: "norma-k3",
        nama: "Seksi Norma K3",
        fokus: "Analisis pola kecelakaan kerja, temuan inspeksi K3 lapangan, dan materi sosialisasi (safety briefing).",
        kasus: "Ditemukan ketidaksesuaian penggunaan APD serta 12 laporan insiden kerja ringan-sedang dalam 6 bulan terakhir di area proyek.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Ringkasan Temuan Inspeksi & Analisis Pola Kecelakaan Kerja",
            isi: `Bertindaklah sebagai Spesialis K3 Pemerintah Daerah. Berikut catatan mentah temuan lapangan dan rekap anonim 12 kejadian kecelakaan kerja selama 6 bulan terakhir: [TEMPEL DATA ANONIM].
Tugas:
1. Ringkas temuan menjadi kategori: Temuan Mayor (wajib segera diperbaiki) dan Temuan Minor.
2. Kelompokkan pola penyebab kecelakaan kerja (faktor manusia, alat/mesin, atau lingkungan kerja).
3. Susun 3 rekomendasi teknis pencegahan kecelakaan kerja yang realistis.`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Materi Sosialisasi K3 (Safety Briefing) Ramah Pekerja",
            isi: `Bertindaklah sebagai Penyuluh K3 Disnakertrans Maluku Utara.
Konteks: Rendahnya kepatuhan helm proyek, sepatu safety, dan prosedur kerja di ketinggian pada pekerja subkontraktor.
Tugas: Susun 1 lembar naskah materi sosialisasi K3 (safety briefing 10 menit) dengan bahasa lugas dan persuasif, lengkap dengan 5 poin pengingat untuk poster.`
          }
        ]
      }
    ]
  },
  {
    key: "hi",
    nama: "Hubungan Industrial",
    seksi: [
      {
        key: "persyaratan-pengupahan",
        nama: "Seksi Persyaratan Kerja & Pengupahan",
        fokus: "Telaah awal draf Peraturan Perusahaan (PP) / PKB dan bahan rapat Dewan Pengupahan.",
        kasus: "Menerima pengajuan pengesahan draf Peraturan Perusahaan (PP) baru dari perusahaan jasa konstruksi di Maluku Utara.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "20 Menit",
            judul: "Telaah Awal Draf Peraturan Perusahaan (PP) / PKB",
            isi: `Bertindaklah sebagai Analis Hubungan Industrial. Saya melampirkan kutipan pasal draf Peraturan Perusahaan (anonim) terkait waktu kerja, lembur, cuti, dan sanksi disiplin: [TEMPEL KUTIPAN PASAL].
Tugas: Lakukan telaah awal terhadap kesesuaiannya dengan prinsip umum regulasi ketenagakerjaan Indonesia. Sajikan dalam tabel: Pasal Draf, Potensi Risiko, dan Saran Perbaikan Redaksi. Tandai [CEK PASAL] untuk verifikasi manual.`
          }
        ]
      },
      {
        key: "perselisihan-hi",
        nama: "Seksi Penyelesaian Perselisihan HI & Jamsostek",
        fokus: "Ringkasan kronologi perselisihan, daftar pertanyaan mediasi, dan kerangka draf Anjuran Mediasi.",
        kasus: "Mediator menangani perselisihan PHK antara Pekerja A dan Perusahaan Y yang belum mencapai kesepakatan pada bipartit.",
        prompts: [
          {
            mode: "Demo Fasilitator",
            durasi: "5 Menit",
            judul: "Ringkasan Kronologi Perselisihan & Pertanyaan Mediasi",
            isi: `Bertindaklah sebagai Mediator Hubungan Industrial yang netral di Disnakertrans Provinsi Maluku Utara.
Konteks: Berikut catatan kronologi perselisihan PHK antara Pekerja A dan Perusahaan Y (identitas disamarkan): [TEMPEL KRONOLOGI].
Tugas:
1. Susun ringkasan kronologi dalam tabel (Tanggal, Peristiwa, Posisi Pekerja, Posisi Pengusaha).
2. Identifikasi titik sengketa utama dan buat 5 pertanyaan klarifikasi netral untuk sidang mediasi.`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Penyusunan Kerangka Draf Anjuran Mediasi",
            isi: `Bertindaklah sebagai Mediator Hubungan Industrial. Berdasarkan ringkasan hasil sidang mediasi I dan II (tidak tercapai kesepakatan) berikut: [TEMPEL RINGKASAN SIDANG ANONIM].
Tugas: Susun kerangka draf Anjuran Mediasi yang formal dan seimbang: Duduk Perkara, Pendapat Pekerja, Pendapat Pengusaha, Pertimbangan Mediator, dan Butir Anjuran. Jangan mengarang nomor pasal tanpa tanda [VERIFIKASI].`
          }
        ]
      }
    ]
  },
  {
    key: "pelatihan",
    nama: "Pelatihan & Produktivitas (UPTD/BLK)",
    seksi: [
      {
        key: "kelembagaan-kurikulum",
        nama: "Seksi Pelatihan & Kelembagaan (PBK)",
        fokus: "Penyusunan kerangka kurikulum PBK sesuai kebutuhan industri dan materi promosi pelatihan vokasi.",
        kasus: "UPTD BLK Provinsi Maluku Utara menyiapkan program PBK kejuruan Pengelasan (Welding SMAW 3G) dan Instalasi Listrik Industri.",
        prompts: [
          {
            mode: "Demo Fasilitator",
            durasi: "5 Menit",
            judul: "Kerangka Kurikulum Pelatihan Berbasis Kompetensi (PBK)",
            isi: `Bertindaklah sebagai Instruktur Senior UPTD BLK Provinsi Maluku Utara.
Konteks: Merancang pelatihan 20 hari (160 JP) kejuruan [SEBUTKAN KEJURUAN, mis. Pengelasan SMAW 3G] agar lulusan siap kerja di industri Maluku Utara.
Tugas: Susun struktur kurikulum dalam tabel (Unit Kompetensi, Materi Pokok, Jam Teori, Jam Praktik, Indikator Kelulusan) serta kerangka modul pertemuan pertama.`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Materi Promosi Pelatihan Vokasi (Medsos & WA)",
            isi: `Bertindaklah sebagai Humas UPTD BLK Disnakertrans Maluku Utara.
Konteks: Pembukaan pendaftaran pelatihan gratis bersertifikat BNSP untuk pemuda lokal (kuota 32 orang, pendaftaran tanggal [TANGGAL]).
Tugas: Buat 2 versi naskah promosi: (1) Caption Instagram/Facebook resmi dinas, dan (2) Pesan broadcast singkat grup WhatsApp kelurahan/desa.`
          }
        ]
      },
      {
        key: "sertifikasi-produktivitas",
        nama: "Seksi Sertifikasi & Produktivitas",
        fokus: "Bank soal uji kompetensi, rubrik praktik bengkel, dan evaluasi penyerapan alumni pelatihan.",
        kasus: "Asesor menyusun perangkat uji kompetensi dan rubrik penilaian praktik untuk kelulusan peserta batch terbaru.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "20 Menit",
            judul: "Penyusunan Bank Soal Uji Kompetensi & Rubrik Praktik",
            isi: `Bertindaklah sebagai Asesor dan Penyusun Materi Uji Kompetensi UPTD BLK.
Tugas:
1. Buat 10 soal pilihan ganda berbasis studi kasus lapangan untuk kejuruan [NAMA KEJURUAN] (mencakup K3 bengkel dan teknis dasar) lengkap dengan kunci jawaban.
2. Buat rubrik penilaian uji praktik dalam tabel (Aspek Penilaian, Bobot %, Kriteria Kompeten, Belum Kompeten).`
          }
        ]
      }
    ]
  },
  {
    key: "penempatan",
    nama: "Penempatan & Perluasan Kesempatan Kerja",
    seksi: [
      {
        key: "ipk-penempatan",
        nama: "Seksi Informasi Pasar Kerja & Penempatan",
        fokus: "Analisis skill mismatch pencari kerja vs lowongan serta produksi buletin IPK bulanan.",
        kasus: "Pengantar Kerja mengevaluasi lulusan SMA/SMK lokal di Ternate, Tidore, dan Halmahera yang belum terserap di lowongan teknis industri.",
        prompts: [
          {
            mode: "Demo Fasilitator",
            durasi: "5 Menit",
            judul: "Analisis Kesenjangan Keterampilan (Skill Mismatch)",
            isi: `Bertindaklah sebagai Pengantar Kerja Ahli di Disnakertrans Provinsi Maluku Utara.
Konteks: Berikut rekap anonim data pencari kerja dibandingkan lowongan perusahaan semester ini: [TEMPEL DATA ANONIM].
Tugas:
1. Identifikasi 3 kesenjangan keterampilan terbesar.
2. Buat matriks pencocokan (matching) antara profil pencari kerja dengan jenis pelatihan singkat yang direkomendasikan.`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Konten Buletin Informasi Pasar Kerja (IPK) Bulanan",
            isi: `Bertindaklah sebagai Pengelola IPK Disnakertrans Maluku Utara.
Konteks: Rekap bulan ini mencatat 450 pencari kerja terdaftar, 280 lowongan aktif (konstruksi, mekanik, administrasi), dan 195 penempatan.
Tugas: Susun naskah ringkas Buletin IPK (maks. 300 kata) yang komunikatif dilengkapi tips persiapan melamar kerja.`
          }
        ]
      },
      {
        key: "perluasan-tka",
        nama: "Seksi Perluasan Kesempatan Kerja & TKA",
        fokus: "Analisis rasio TKA dan TKI pendamping (alih teknologi) serta evaluasi program Tenaga Kerja Mandiri (TKM).",
        kasus: "Menelaah laporan rasio TKA terhadap TKI pendamping pada perusahaan pengolahan mineral dan konstruksi di Halmahera.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "20 Menit",
            judul: "Analisis Laporan Penggunaan TKA & Alih Teknologi",
            isi: `Bertindaklah sebagai Analis Kebijakan Penempatan Tenaga Kerja. Berikut tabel anonim jumlah TKA berdasarkan jabatan, sektor, dan jumlah TKI Pendamping di Maluku Utara: [TEMPEL DATA ANONIM].
Tugas:
1. Analisis rasio TKA terhadap TKI pendamping per sektor dan tandai perusahaan dengan rasio rendah.
2. Susun 4 poin bahan evaluasi untuk rapat koordinasi pengawasan alih teknologi.`
          }
        ]
      }
    ]
  },
  {
    key: "transmigrasi",
    nama: "Transmigrasi",
    seksi: [
      {
        key: "perencanaan-kawasan",
        nama: "Seksi Perencanaan & Pembangunan Kawasan",
        fokus: "Ringkasan kajian kelayakan lahan, profil potensi kawasan transmigrasi, dan matriks koordinasi infrastruktur lintas OPD.",
        kasus: "Menyiapkan profil potensi ekonomi (pala, kelapa, hortikultura, perikanan) dan peta kebutuhan infrastruktur dasar Satuan Permukiman (SP) di Pulau Halmahera.",
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
            judul: "Bahan Rapat Koordinasi Lintas OPD & Pembagian Peran",
            isi: `Bertindaklah sebagai Koordinator Perencanaan Transmigrasi. Dari ringkasan kendala akses jalan tani, air bersih, dan pemasaran hasil panen warga berikut: [TEMPEL RINGKASAN].
Tugas:
1. Susun kerangka paparan pimpinan (maks. 6 slide, 3–4 poin kunci per slide).
2. Buat matriks pembagian peran koordinasi antar-OPD (PUPR, Pertanian, Perdagangan, Disnakertrans) dalam format tabel.`
          }
        ]
      },
      {
        key: "penempatan-transmigran",
        nama: "Seksi Penyiapan & Penempatan Transmigran",
        fokus: "Pencocokan profil keahlian calon transmigran (TPA/TPS) dengan komoditas wilayah tujuan dan draf administrasi penempatan.",
        kasus: "Menyeleksi dan memetakan calon transmigran agar keahlian bertani/melaut sesuai dengan karakteristik lahan di lokasi SP tujuan.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Pencocokan Profil Keahlian Calon Transmigran (Anonim)",
            isi: `Bertindaklah sebagai Analis Penempatan Transmigran Disnakertrans Maluku Utara.
Konteks: Berikut data agregat anonim calon transmigran (usia, keahlian utama, pengalaman bertani/nelayan, tanpa NIK): [TEMPEL DATA ANONIM].
Tugas: Rekomendasikan pembagian penempatan ke SP berbasis pertanian pangan vs perkebunan/perikanan dalam bentuk tabel, serta usulkan 3 topik pelatihan pra-penempatan.`
          }
        ]
      },
      {
        key: "ekonomi-pertanahan",
        nama: "Seksi Pengembangan Ekonomi, Pertanahan & Sosbud",
        fokus: "Klasifikasi aduan pertanahan (HPL/SHM), evaluasi kemandirian SP, dan ringkasan eksekutif progres pembangunan kawasan.",
        kasus: "Mengkompilasi laporan progres fisik, status sertifikasi lahan, dan rekap aduan warga kawasan transmigrasi untuk laporan triwulanan Kepala Dinas.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Ringkasan Eksekutif Progres Kawasan & Klasifikasi Aduan",
            isi: `Bertindaklah sebagai Penyusun Laporan Teknis Transmigrasi. Berikut data progres fisik, status lahan, dan rekap aduan warga kawasan transmigrasi triwulan berjalan: [TEMPEL DATA ANONIM].
Tugas:
1. Klasifikasikan aduan warga (Pertanahan/SHM, Infrastruktur, Ekonomi, Sosial) beserta tingkat urgensinya.
2. Susun Ringkasan Eksekutif 1 halaman untuk Kepala Dinas menyoroti capaian, hambatan logistik kepulauan, dan langkah percepatan.`
          }
        ]
      }
    ]
  },
  {
    key: "sekretariat",
    nama: "Sekretariat",
    seksi: [
      {
        key: "perencanaan-keuangan",
        nama: "Subbagian Perencanaan & Keuangan",
        fokus: "Evaluasi serapan anggaran triwulanan, notulensi rapat evaluasi, dan rencana tindak lanjut lintas bidang.",
        kasus: "Menyusun bahan evaluasi serapan anggaran triwulanan dan tindak lanjut percepatan realisasi kegiatan.",
        prompts: [
          {
            mode: "Praktik Kelompok",
            durasi: "20 Menit",
            judul: "Ringkasan Evaluasi Serapan Keuangan & Rencana Tindak Lanjut",
            isi: `Bertindaklah sebagai Analis Keuangan dan Perencanaan OPD. Berikut catatan rapat evaluasi realisasi anggaran per bidang triwulan berjalan (tanpa nomor rekening/identitas pribadi): [TEMPEL CATATAN].
Tugas:
1. Susun Notulen Rapat terstruktur (Agenda, Capaian Serapan, Kendala, Keputusan).
2. Buat tabel Rencana Tindak Lanjut (Kegiatan, Bidang Penanggung Jawab, Target Waktu, Indikator).`
          }
        ]
      },
      {
        key: "umum-kepegawaian",
        nama: "Subbagian Umum & Kepegawaian",
        fokus: "Tata naskah dinas (telaahan staf/nota dinas) dan matriks kebutuhan pengembangan kompetensi ASN.",
        kasus: "Menyusun draf telaahan staf usulan kegiatan serta pemetaan kebutuhan pelatihan digital/AI bagi jabatan fungsional.",
        prompts: [
          {
            mode: "Demo Fasilitator",
            durasi: "5 Menit",
            judul: "Draf Telaahan Staf & Nota Dinas Perencanaan Kegiatan",
            isi: `Bertindaklah sebagai Kasubbag Umum dan Kepegawaian di Sekretariat Disnakertrans Provinsi Maluku Utara.
Konteks: Akan diusulkan kegiatan [NAMA KEGIATAN] dengan latar belakang [JELASKAN SINGKAT] dan pagu indikatif [NOMINAL].
Tugas: Susun draf Telaahan Staf sesuai tata naskah dinas pemerintahan (Persoalan, Praanggapan, Fakta yang Mempengaruhi, Analisis, Kesimpulan, dan Saran).`
          },
          {
            mode: "Praktik Kelompok",
            durasi: "15 Menit",
            judul: "Matriks Kebutuhan Pengembangan Kompetensi ASN",
            isi: `Bertindaklah sebagai Analis SDM Aparatur di Sekretariat Disnakertrans Maluku Utara.
Konteks: Rekap anonim komposisi jabatan fungsional (Pengawas, Mediator, Instruktur, Pengantar Kerja) yang membutuhkan peningkatan kompetensi AI.
Tugas: Susun matriks usulan program pengembangan kompetensi (Jabatan, Kesenjangan Kompetensi, Bentuk Pelatihan, Estimasi Waktu, Output).`
          }
        ]
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
  },
  transmigrasi: {
    headers: ["Kode_SP", "Kabupaten", "Jumlah_KK", "Komoditas_Unggulan", "Status_Lahan_SHM", "Kendala_Utama"],
    rows: [
      ["SP-01 (Anonim)", "Halmahera Timur", "150", "Padi & Hortikultura", "85% Terbit", "Akses jalan tani rusak"],
      ["SP-02 (Anonim)", "Halmahera Selatan", "120", "Pala & Kelapa", "60% Terbit", "Tumpang tindih batas lahan"],
      ["SP-03 (Anonim)", "Halmahera Utara", "95", "Perikanan & Jagung", "92% Terbit", "Pemasaran hasil panen"],
      ["SP-04 (Anonim)", "Pulau Morotai", "80", "Kelapa & Perikanan", "70% Terbit", "Ketersediaan air bersih"]
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