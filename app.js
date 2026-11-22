// ==================== 1. PROGRES TAHAPAN SESI 2 ====================
let completedStages = JSON.parse(localStorage.getItem('malut_ai_stages') || '[]');

function renderStages() {
  const container = document.getElementById('stage-tracker');
  container.innerHTML = stages.map((st, idx) => {
    const done = completedStages.includes(idx);
    return `
      <button onclick="toggleStage(${idx})" class="text-left p-2.5 rounded-lg border transition ${
        done
          ? 'bg-emerald-600/20 border-emerald-400 text-white'
          : 'bg-navy-800/70 border-navy-600 text-navy-100 hover:border-gold-400'
      }">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold">${st.title}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded ${done ? 'bg-emerald-500 text-white' : 'bg-navy-700 text-gold-400'}">${done ? '✓' : st.time}</span>
        </div>
      </button>
    `;
  }).join('');

  const pct = Math.round((completedStages.length / stages.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-percent').textContent = pct + '%';
  document.getElementById('progress-label').textContent = `${completedStages.length} dari ${stages.length} tahapan selesai`;
}

function toggleStage(idx) {
  completedStages = completedStages.includes(idx)
    ? completedStages.filter(i => i !== idx)
    : [...completedStages, idx];
  localStorage.setItem('malut_ai_stages', JSON.stringify(completedStages));
  renderStages();
}

function resetProgress() {
  completedStages = [];
  localStorage.removeItem('malut_ai_stages');
  renderStages();
}

// ==================== 2. NAVIGASI TAB ====================
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.add('text-slate-700');
  });
  const activeBtn = document.getElementById('btn-' + tabId);
  activeBtn.classList.add('active');
  activeBtn.classList.remove('text-slate-700');
}

function goToTab(tabId) {
  switchTab(tabId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== 3. CHECKLIST KEAMANAN DATA ====================
function updateSecurityStatus() {
  const allChecked = Array.from(document.querySelectorAll('.sec-check')).every(c => c.checked);
  const badge = document.getElementById('security-badge');
  badge.textContent = allChecked ? "Siap Praktik ✓" : "Wajib Dicentang";
  badge.className = allChecked
    ? "px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800"
    : "px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800";
}

// ==================== 4. MODUL 6 BIDANG ====================
let activeBidangKey = bidangData[0].key;

function renderBidangTabs() {
  document.getElementById('bidang-tabs').innerHTML = bidangData.map(b => `
    <button onclick="selectBidang('${b.key}')" class="bidang-btn px-3.5 py-2 rounded-lg text-xs font-semibold border transition ${
      b.key === activeBidangKey ? 'active' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
    }">${b.nama}</button>
  `).join('');
  renderBidangContent();
}

function selectBidang(key) {
  activeBidangKey = key;
  renderBidangTabs();
}

function renderBidangContent() {
  const b = bidangData.find(item => item.key === activeBidangKey);
  document.getElementById('bidang-content').innerHTML = `
    <div class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-navy-50 border border-navy-100 rounded-xl p-4">
          <p class="text-[11px] font-bold uppercase tracking-wide text-navy-700 mb-1">Fokus Pemanfaatan AI</p>
          <p class="text-xs sm:text-sm text-slate-700">${b.fokus}</p>
        </div>
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p class="text-[11px] font-bold uppercase tracking-wide text-emerald-800 mb-1">Studi Kasus Maluku Utara</p>
          <p class="text-xs sm:text-sm text-slate-700">${b.kasus}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        ${b.prompts.map((p, idx) => {
          const isDemo = p.mode.includes('Demo');
          const badgeClass = isDemo
            ? 'bg-amber-100 text-amber-900 border-amber-300'
            : 'bg-emerald-100 text-emerald-900 border-emerald-300';
          return `
            <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-between gap-3">
              <div>
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${badgeClass}">
                    ${p.mode} • ${p.durasi}
                  </span>
                  <button onclick="copyRawText(\`${p.isi.replace(/`/g, '\\`')}\`, this)" class="shrink-0 px-2.5 py-1 rounded-md bg-navy-700 hover:bg-navy-800 text-white text-[11px] font-semibold transition">
                    Salin Prompt
                  </button>
                </div>
                <h4 class="text-sm font-bold text-navy-800 mb-2">${idx + 1}. ${p.judul}</h4>
                <pre class="text-xs bg-slate-50 p-3 rounded-lg border border-slate-200 whitespace-pre-wrap font-mono text-slate-700 leading-relaxed max-h-64 overflow-y-auto">${p.isi}</pre>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ==================== 5. LAB ANALISIS DATA ====================
function renderDataset() {
  const key = document.getElementById('dataset-selector').value;
  const ds = datasets[key];
  document.getElementById('dataset-table').innerHTML = `
    <thead class="bg-navy-800 text-white">
      <tr>${ds.headers.map(h => `<th class="px-3 py-2.5 font-semibold">${h}</th>`).join('')}</tr>
    </thead>
    <tbody class="divide-y divide-slate-200 bg-white">
      ${ds.rows.map(r => `<tr class="hover:bg-slate-50">${r.map(c => `<td class="px-3 py-2 font-mono text-slate-700">${c}</td>`).join('')}</tr>`).join('')}
    </tbody>
  `;
}

function copyCurrentDataset(btn) {
  const ds = datasets[document.getElementById('dataset-selector').value];
  const tsv = [ds.headers.join('\t'), ...ds.rows.map(r => r.join('\t'))].join('\n');
  copyRawText(tsv, btn, "Tabel Tersalin! ✓");
}

// ==================== 6. STUDIO LKJIP & SAKIP ====================
function buildLkjipPrompt() {
  const jenis = document.getElementById('lkjip-jenis').value;
  const bidang = document.getElementById('lkjip-bidang').value;
  const iku = document.getElementById('lkjip-iku').value;
  const target = document.getElementById('lkjip-target').value;
  const realisasi = document.getElementById('lkjip-realisasi').value;
  const kendala = document.getElementById('lkjip-kendala').value;

  document.getElementById('lkjip-output').textContent = `Bertindaklah sebagai Perencana Ahli di Dinas Tenaga Kerja dan Transmigrasi Provinsi Maluku Utara.

Konteks:
- Jenis Dokumen: ${jenis}
- Unit Kerja: ${bidang}
- Indikator Kinerja: ${iku}
- Target: ${target} | Realisasi: ${realisasi}
- Kendala Lapangan: ${kendala}

Tugas Anda:
1. Susun kerangka dan narasi formal akuntabilitas kinerja yang objektif.
2. Jelaskan analisis capaian (target vs realisasi) tanpa mengarang angka baru.
3. Uraikan akar permasalahan secara sistematis.
4. Rumuskan 3 rekomendasi rencana tindak lanjut dalam tabel (No, Rekomendasi, Penanggung Jawab, Target Waktu).`;
}

// ==================== 7. PUSTAKA PROMPT & EKSPOR TXT ====================
let pustaka = JSON.parse(localStorage.getItem('malut_ai_pustaka') || 'null') || defaultPustaka;

function renderPustaka() {
  const filter = document.getElementById('filter-pustaka').value;
  const list = document.getElementById('pustaka-list');
  const filtered = filter === 'Semua' ? pustaka : pustaka.filter(p => p.bidang === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<p class="text-xs text-slate-500 col-span-2 text-center py-6">Belum ada prompt tersimpan untuk bidang ini.</p>`;
    return;
  }

  list.innerHTML = filtered.map(p => `
    <div class="border border-slate-200 rounded-xl p-4 bg-slate-50/70 flex flex-col justify-between gap-3">
      <div>
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <span class="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-navy-100 text-navy-800 mb-1">${p.bidang}</span>
            <h4 class="text-sm font-bold text-navy-900">${p.judul}</h4>
          </div>
          <button onclick="deletePrompt(${p.id})" class="text-[11px] text-red-600 hover:underline">Hapus</button>
        </div>
        <p class="text-xs font-mono text-slate-700 whitespace-pre-wrap bg-white p-2.5 rounded-lg border border-slate-200">${p.isi}</p>
      </div>
      <div class="flex justify-end">
        <button onclick="copyRawText(\`${p.isi.replace(/`/g, '\\`')}\`, this)" class="px-3 py-1 rounded-md bg-navy-700 hover:bg-navy-800 text-white text-xs font-semibold">Salin Prompt</button>
      </div>
    </div>
  `).join('');
}

function addPromptToLibrary(e) {
  e.preventDefault();
  const judul = document.getElementById('lib-judul').value.trim();
  const bidang = document.getElementById('lib-bidang').value;
  const isi = document.getElementById('lib-isi').value.trim();
  if (!judul || !isi) return;

  pustaka.unshift({ id: Date.now(), judul, bidang, isi });
  localStorage.setItem('malut_ai_pustaka', JSON.stringify(pustaka));
  document.getElementById('lib-judul').value = '';
  document.getElementById('lib-isi').value = '';
  renderPustaka();
}

function deletePrompt(id) {
  pustaka = pustaka.filter(p => p.id !== id);
  localStorage.setItem('malut_ai_pustaka', JSON.stringify(pustaka));
  renderPustaka();
}

function exportPustakaTxt() {
  const text = pustaka.map((p, i) =>
    `[${i + 1}] ${p.judul} (${p.bidang})\n${p.isi}\n----------------------------------------`
  ).join('\n\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Pustaka_Prompt_Disnakertrans_Malut_2026.txt';
  link.click();
}

// ==================== 8. RENCANA AKSI & CETAK PDF ====================
function loadActionPlan() {
  const saved = JSON.parse(localStorage.getItem('malut_ai_aksi') || '{}');
  ['bidang', 'nama', 'masalah', 'target', 'pic', 'anggota'].forEach(f => {
    if (saved[f]) document.getElementById('aksi-' + f).value = saved[f];
  });
}

function saveActionPlan() {
  const data = {};
  ['bidang', 'nama', 'masalah', 'target', 'pic', 'anggota'].forEach(f => {
    data[f] = document.getElementById('aksi-' + f).value;
  });
  localStorage.setItem('malut_ai_aksi', JSON.stringify(data));
}

function previewAndPrint() {
  saveActionPlan();
  document.getElementById('p-bidang').textContent = document.getElementById('aksi-bidang').value || '-';
  document.getElementById('p-nama').textContent = document.getElementById('aksi-nama').value || '(Belum diisi)';
  document.getElementById('p-masalah').textContent = document.getElementById('aksi-masalah').value || '-';
  document.getElementById('p-target').textContent = document.getElementById('aksi-target').value || '-';
  const pic = document.getElementById('aksi-pic').value || 'Champion AI Bidang';
  document.getElementById('p-pic').textContent = pic;
  document.getElementById('p-ttd').textContent = pic;
  document.getElementById('p-anggota').textContent = document.getElementById('aksi-anggota').value || '-';

  const printArea = document.getElementById('print-area');
  printArea.classList.remove('hidden');
  printArea.scrollIntoView({ behavior: 'smooth' });
}

function closePrintPreview() {
  document.getElementById('print-area').classList.add('hidden');
}

// ==================== 9. TES AWAL (PRE-TEST) & TES AKHIR (POST-TEST) ====================
function renderPreTest() {
  const container = document.getElementById('pretest-container');
  if (!container) return;
  container.innerHTML = quizQuestions.map((item, idx) => `
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <p class="font-semibold text-navy-900 mb-2">${item.q}</p>
      <div class="space-y-1.5">
        ${item.options.map((opt, oIdx) => `
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="pre-q-${idx}" value="${oIdx}" class="accent-navy-700" />
            <span class="text-slate-700">${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  const savedPre = localStorage.getItem('malut_ai_pretest');
  if (savedPre !== null) {
    const badge = document.getElementById('pretest-score');
    badge.classList.remove('hidden');
    badge.textContent = `Skor Tes Awal: ${savedPre}%`;
  }
}

function evaluatePreTest() {
  let score = 0;
  quizQuestions.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="pre-q-${idx}"]:checked`);
    if (selected && Number(selected.value) === item.ans) score++;
  });
  const pct = Math.round((score / quizQuestions.length) * 100);
  localStorage.setItem('malut_ai_pretest', pct);
  const badge = document.getElementById('pretest-score');
  badge.classList.remove('hidden');
  badge.textContent = `Skor Tes Awal: ${score} / ${quizQuestions.length} (${pct}%)`;
}

function renderQuiz() {
  document.getElementById('quiz-container').innerHTML = quizQuestions.map((item, idx) => `
    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
      <p class="font-semibold text-navy-900 mb-2">${item.q}</p>
      <div class="space-y-1.5">
        ${item.options.map((opt, oIdx) => `
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="q-${idx}" value="${oIdx}" class="accent-navy-700" />
            <span class="text-slate-700">${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function evaluateQuiz() {
  let score = 0;
  quizQuestions.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
    if (selected && Number(selected.value) === item.ans) score++;
  });
  const postPct = Math.round((score / quizQuestions.length) * 100);
  const badge = document.getElementById('quiz-score');
  badge.classList.remove('hidden');
  badge.textContent = `Skor Tes Akhir: ${score} / ${quizQuestions.length} (${postPct}%)`;

  const prePct = localStorage.getItem('malut_ai_pretest');
  const compBox = document.getElementById('score-comparison');
  if (prePct !== null && compBox) {
    const diff = postPct - Number(prePct);
    const status = diff > 0 ? `Meningkat +${diff}%` : (diff === 0 ? "Stabil" : `Selisih ${diff}%`);
    compBox.classList.remove('hidden');
    compBox.innerHTML = `Perbandingan Pemahaman: Tes Awal <strong>${prePct}%</strong> → Tes Akhir <strong>${postPct}%</strong> (${status})`;
  }
}

// ==================== 10. UTILITAS SALIN ====================
function copyPromptById(elementId, btn) {
  copyRawText(document.getElementById(elementId).textContent, btn);
}

function copyRawText(text, btn, successLabel = "Tersalin! ✓") {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = successLabel;
    btn.classList.add('bg-emerald-600', 'text-white');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('bg-emerald-600');
    }, 1500);
  });
}

// ==================== INISIALISASI ====================
renderStages();
renderBidangTabs();
renderDataset();
buildLkjipPrompt();
renderPustaka();
loadActionPlan();
renderQuiz();

// ==================== 11. MODAL PANDUAN PESERTA ====================
function openGuideModal() {
  document.getElementById('guide-modal').classList.remove('hidden');
}

function closeGuideModal() {
  document.getElementById('guide-modal').classList.add('hidden');
  localStorage.setItem('malut_ai_guide_seen', 'true');
}

// Tutup modal saat menekan tombol ESC atau klik area gelap di luar kotak
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeGuideModal();
});

document.getElementById('guide-modal').addEventListener('click', (e) => {
  if (e.target.id === 'guide-modal') closeGuideModal();
});

// Tampilkan panduan otomatis saat peserta pertama kali membuka portal
if (!localStorage.getItem('malut_ai_guide_seen')) {
  openGuideModal();
}

// ==================== 12. PROMPT BUILDER 5 UNSUR ====================
function buildCustomPrompt() {
  const peran = document.getElementById('pb-peran')?.value.trim() || '[PERAN AI]';
  const konteks = document.getElementById('pb-konteks')?.value.trim() || '[KONTEKS PEKERJAAN ANONIM]';
  const tugas = document.getElementById('pb-tugas')?.value.trim() || '[TUGAS SPESIFIK]';
  const format = document.getElementById('pb-format')?.value.trim() || '[FORMAT KELUARAN]';
  const contoh = document.getElementById('pb-contoh')?.value.trim();

  let hasil = `Bertindaklah sebagai ${peran}.\n\nKonteks:\n${konteks}\n\nTugas Anda:\n${tugas}\n\nFormat Keluaran:\n${format}`;
  if (contoh) hasil += `\n\nGaya Bahasa / Contoh Acuan:\n${contoh}`;
  hasil += `\n\nCatatan: Jangan mengarang angka atau pasal regulasi; beri tanda [VERIFIKASI] jika perlu pengecekan manual.`;

  const out = document.getElementById('pb-output');
  if (out) out.textContent = hasil;
}

function sendBuilderToLibrary() {
  const isi = document.getElementById('pb-output').textContent.trim();
  const tugas = document.getElementById('pb-tugas').value.trim() || 'Perintah AI Kustom Bidang';
  document.getElementById('lib-judul').value = tugas;
  document.getElementById('lib-isi').value = isi;
  document.getElementById('lib-judul').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Jalankan inisialisasi fitur tambahan
renderPreTest();
buildCustomPrompt();

// ==================== 13. HIBRIDA: SUPABASE REAL-TIME + KUNCI PRASYARAT OTOMATIS ====================
const LOCKED_TABS = ['tab-2', 'tab-3', 'tab-4', 'tab-5'];
let adminModulesMap = { 'tab-1': true, 'tab-2': true, 'tab-3': true, 'tab-4': true, 'tab-5': true };

function isPrasyaratTerpenuhi() {
  // Bypass khusus fasilitator di proyektor (klik Logo Maluku Utara 3x)
  if (localStorage.getItem('malut_ai_fasilitator_unlock') === 'true') return true;

  // 1. Cek apakah Pre-Test sudah dikerjakan
  const preTestDone = localStorage.getItem('malut_ai_pretest') !== null;

  // 2. Cek apakah semua Checklist Keamanan Data (UU PDP) di Tab 1 sudah dicentang
  const checks = document.querySelectorAll('#tab-1 input[type="checkbox"]');
  const allChecked = checks.length > 0 && Array.from(checks).every(cb => cb.checked);

  return preTestDone && allChecked;
}

function renderAllLocks() {
  const prasyaratOk = isPrasyaratTerpenuhi();
  const notice = document.getElementById('lock-notice');

  LOCKED_TABS.forEach(tabId => {
    const btn = document.getElementById('btn-' + tabId);
    if (!btn) return;

    // Modul terbuka HANYA JIKA dibuka oleh Admin Supabase DAN Prasyarat Tab 1 terpenuhi
    const isAdminOpen = adminModulesMap[tabId] !== false;
    const isUnlocked = isAdminOpen && prasyaratOk;

    if (isUnlocked) {
      btn.disabled = false;
      btn.classList.remove('opacity-40', 'cursor-not-allowed');
      btn.textContent = btn.textContent.replace('🔒 ', '');
    } else {
      btn.disabled = true;
      btn.classList.add('opacity-40', 'cursor-not-allowed');
      if (!btn.textContent.startsWith('🔒 ')) {
        btn.textContent = '🔒 ' + btn.textContent;
      }
    }
  });

  if (notice) {
    notice.classList.toggle('hidden', prasyaratOk);
  }

  // Jika peserta sedang berada di tab yang dikunci, kembalikan ke Tab 1
  const currentActive = document.querySelector('.tab-content:not(.hidden)');
  if (currentActive && LOCKED_TABS.includes(currentActive.id)) {
    const stillOpen = (adminModulesMap[currentActive.id] !== false) && prasyaratOk;
    if (!stillOpen) switchTab('tab-1');
  }
}

function applySupabaseRows(rows) {
  rows.forEach(row => {
    if (row.id === 'banner') {
      const bannerEl = document.getElementById('live-banner');
      const textEl = document.getElementById('live-banner-text');
      if (bannerEl && textEl) {
        if (row.is_active && row.pesan) {
          textEl.textContent = row.pesan;
          bannerEl.classList.remove('hidden');
        } else {
          bannerEl.classList.add('hidden');
        }
      }
      return;
    }
    adminModulesMap[row.id] = row.is_active;
  });
  renderAllLocks();
}

// Lindungi tombol "Lanjut" agar tidak bisa melompat ke tab yang terkunci
const _origGoToTab = goToTab;
goToTab = function(tabId) {
  if (LOCKED_TABS.includes(tabId)) {
    if (adminModulesMap[tabId] === false) {
      alert('Modul ini belum dibuka oleh Fasilitator.');
      return;
    }
    if (!isPrasyaratTerpenuhi()) {
      alert('Silakan selesaikan Pre-Test dan centang seluruh Checklist Keamanan Data (UU PDP) di Tab 1 terlebih dahulu.');
      return;
    }
  }
  _origGoToTab(tabId);
};

// Pantau perubahan checklist keamanan data di Tab 1
document.querySelectorAll('#tab-1 input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', renderAllLocks);
});

// Perbarui gembok otomatis setelah peserta klik "Simpan Skor Tes Awal"
const _origEvaluatePreTest = evaluatePreTest;
evaluatePreTest = function() {
  _origEvaluatePreTest();
  renderAllLocks();
};

// Jalan pintas Fasilitator: Klik Logo Maluku Utara 3x untuk buka semua tab di proyektor
let logoClickCount = 0;
const headerLogo = document.querySelector('header img');
if (headerLogo) {
  headerLogo.style.cursor = 'pointer';
  headerLogo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickCount === 3) {
      localStorage.setItem('malut_ai_fasilitator_unlock', 'true');
      renderAllLocks();
      alert('Mode Fasilitator Aktif: Prasyarat dilewati, seluruh modul yang aktif di admin kini terbuka.');
      logoClickCount = 0;
    }
  });
}

// Inisialisasi Supabase Real-Time + Kunci Prasyarat
async function initHybridControl() {
  renderAllLocks();
  if (typeof sbClient === 'undefined' || !sbClient) return;

  const { data, error } = await sbClient.from('modul_config').select('*');
  if (!error && data) applySupabaseRows(data);

  sbClient
    .channel('modul-config-hybrid')
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'modul_config' }, (payload) => {
      applySupabaseRows([payload.new]);
    })
    .subscribe();
}

initHybridControl();