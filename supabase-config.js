// Konfigurasi Koneksi Supabase (Dipakai bersama oleh index.html & admin.html)
const SUPABASE_URL = 'https://nyuqmwwsednjzmofzdhs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_aD2rhGGiKnPkExLWV2QEkg_UUoxZrtF';

// PIN untuk membuka halaman admin.html (silakan ubah sebelum push ke GitHub)
const ADMIN_PIN = '2026';

// Inisialisasi klien Supabase (aman jika CDN gagal dimuat)
let sbClient = null;
if (window.supabase && SUPABASE_URL.startsWith('https://') && !SUPABASE_URL.includes('TEMPEL_')) {
  sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}