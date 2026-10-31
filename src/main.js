import "./style.css";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#beranda" aria-label="Kembali ke beranda">
      <span class="brand-mark">RC</span>
      <span>Riksan Cahyowadi<span class="brand-dot">.</span></span>
    </a>
    <nav class="nav-links" aria-label="Navigasi utama">
      <a href="#tentang">Tentang</a>
      <a href="#projek">Projek</a>
      <a href="#keahlian">Keahlian</a>
      <a href="#kontak">Kontak</a>
    </nav>
    <button class="theme-toggle" type="button" aria-label="Aktifkan mode gelap" title="Ganti tema">
      <span class="theme-icon" aria-hidden="true">☼</span>
    </button>
  </header>

  <main>
    <section class="hero section-shell" id="beranda">
      <div class="hero-copy reveal">
        <p class="eyebrow">Teknik Informatika · ITERA</p>
        <h1>Mengubah ide menjadi <em>pengalaman digital.</em></h1>
        <p class="hero-intro">Saya merancang dan membangun website yang terasa sederhana, cepat, dan relevan untuk orang-orang yang menggunakannya.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projek">Lihat projek <span>↗</span></a>
          <a class="text-link contact-link" href="#kontak">Mari Mengobrol <span>→</span></a>
          <a class="text-link cv-link" href="https://drive.google.com/file/d/14LGRo3dmWvLWqnbyrtVEdv1CJD4-NAmB/view?usp=drive_link" target="_blank" rel="noreferrer">Unduh CV <span>↓</span></a>
        </div>
        <div class="hero-meta">
          <span><i class="status-dot"></i> Tersedia untuk tawaran</span>
        </div>
      </div>
      <div class="hero-visual reveal reveal-delay">
        <div class="tech-wall" aria-label="Kumpulan logo teknologi">
          <div class="logo-tile logo-js"><strong>JS</strong><span>JavaScript</span></div>
          <div class="logo-tile logo-code"><strong>&lt;/&gt;</strong><span>Web</span></div>
          <div class="logo-tile logo-php"><strong>PHP</strong><span>Backend</span></div>
          <div class="logo-tile logo-css"><strong>CSS</strong><span>Style</span></div>
          <div class="logo-tile logo-git"><strong>git</strong><span>Versioning</span></div>
          <div class="logo-tile logo-api"><strong>{ }</strong><span>API</span></div>
        </div>
      </div>
    </section>

    <section class="content-section section-shell" id="tentang">
      <div class="section-heading"><p class="section-number">01 / Tentang saya</p></div>
      <div class="about-grid">
        <div class="about-lead"><span class="about-stamp">ITERA / Informatika</span><p class="large-copy">Sebagai lulusan Informatika dari Institut Teknologi Sumatera (ITERA), saya memiliki spesialisasi dalam mentransformasi proses kerja administratif yang manual dan kompleks menjadi sistem digital yang terstruktur, otomatis, serta efisien.</p></div>
        <div class="body-copy">
          <p>Berorientasi pada hasil dan ketahanan sistem, saya berfokus menciptakan solusi teknologi yang tidak hanya menyelesaikan masalah saat ini, tetapi juga siap tumbuh seiring perkembangan organisasi.</p>
          <p>Pengalaman saya mencakup pengembangan sistem informasi berbasis web serta otomasi alur kerja (<em>workflow automation</em>). Dalam setiap proyek, saya berkomitmen untuk menerapkan arsitektur yang andal (<em>reliable</em>) dan dokumentasi yang rapi.</p>
          <p>Bagi saya, pengembangan perangkat lunak bukan sekadar menulis kode, melainkan memahami kebutuhan bisnis untuk mengotomatisasi tugas repetitif, meminimalkan human error, dan membiarkan tim berfokus pada keputusan strategis.</p>
        </div>
      </div>
    </section>

    <section class="content-section projects-section section-shell" id="projek">
      <div class="section-heading heading-row"><div><p class="section-number">02 / Projek terpilih</p><h2>Solusi digital untuk proses kerja yang lebih sederhana.</h2></div><span class="heading-aside">01 — 03</span></div>
      <div class="project-cases">
        <article class="project-case">
          <div class="project-case-heading"><div><p class="project-label">01 / Web application</p><h3>Penilaian Psikologi Online — PPSDM ITERA</h3><p class="project-summary">Platform digital dengan alur informasi yang ringkas dan mudah dijelajahi.</p></div><span class="project-index">01</span></div>
          <div class="project-gallery"><figure><img src="/foto-proyek/analogy-1.png" alt="Tampilan pertama proyek Analogy" /></figure><figure><img src="/foto-proyek/analogy-2.png" alt="Tampilan kedua proyek Analogy" /></figure><figure><img src="/foto-proyek/analogy-3.png" alt="Tampilan ketiga proyek Analogy" /></figure></div>
          <div class="project-details"><div><h4>Masalah &amp; Solusi</h4><p>Penilaian sebelumnya dilakukan melalui Google Forms dengan pemrosesan data manual — memakan waktu lama dan sulit dijaga konsistensinya seiring bertambahnya jumlah peserta. Sebagai solusi, saya mengembangkan sistem berbasis Laravel yang mengelola peserta, penilaian, laporan, dan statistik dalam satu wadah, menggantikan proses manual dari awal hingga akhir.</p></div><div><h4>Tech Stack</h4><div class="project-stack"><span>Laravel</span><span>PHP</span><span>MySQL</span><span>JavaScript</span><span>Bootstrap</span></div></div><div><h4>Pencapaian</h4><ul><li>Proses penilaian terpusat</li><li>Pelaporan lebih cepat</li><li>Manajemen data yang lebih baik</li></ul></div></div>
        </article>
        <article class="project-case">
          <div class="project-case-heading"><div><p class="project-label">02 / Information system</p><h3>Sistem Manajemen Surat Disposisi</h3><p class="project-summary">Sistem informasi untuk membantu proses administrasi menjadi lebih terstruktur.</p></div><span class="project-index">02</span></div>
          <div class="project-gallery"><figure><img src="/foto-proyek/Siadi-1.png" alt="Tampilan pertama proyek SIADI" /></figure><figure><img src="/foto-proyek/Siadi-2.png" alt="Tampilan kedua proyek SIADI" /></figure><figure><img src="/foto-proyek/Siadi-3.png" alt="Tampilan ketiga proyek SIADI" /></figure></div>
          <div class="project-details"><div><h4>Masalah &amp; Solusi</h4><p>Manajemen surat dan pelacakan disposisi masih dilakukan secara manual, membuat status dan riwayat sulit dilacak seiring surat-surat meningkat. Sebagai solusi, saya mengembangkan sistem manajemen berbasis web yang mencakup surat masuk, alur kerja disposisi, pencarian surat, dan pemantauan status dalam satu antarmuka</p></div><div><h4>Tech Stack</h4><div class="project-stack"><span>Laravel</span><span>PHP</span><span>MySQL</span><span>PHP</span></div></div><div><h4>Pencapaian</h4><ul><li>Efisiensi administrasi meningkat</li><li>Administrasi lebih mudah dipantau</li><li>Manajemen dokumen yang lebih jelas</li></ul></div></div>
        </article>
        <article class="project-case">
          <div class="project-case-heading"><div><p class="project-label">03 / Frontend</p><h3>Platform Komunitas Thrivian — Frontend</h3><p class="project-summary">Pengalaman digital yang fokus pada tampilan modern, jelas, dan berorientasi pada pengguna.</p></div><span class="project-index">03</span></div>
          <div class="project-gallery"><figure><img src="/foto-proyek/thrivian-1.png" alt="Tampilan pertama proyek Thrivian" /></figure><figure><img src="/foto-proyek/thrivian-2.png" alt="Tampilan kedua proyek Thrivian" /></figure><figure><img src="/foto-proyek/thrivian-3.png" alt="Tampilan ketiga proyek Thrivian" /></figure></div>
          <div class="project-details"><div><h4>Masalah &amp; Solusi</h4><p>Produk membutuhkan identitas visual yang kuat tanpa mengorbankan kejelasan informasi. Saya menerjemahkan kebutuhan tersebut ke dalam interface yang bersih, responsif, dan mudah digunakan.</p></div><div><h4>Tech Stack</h4><div class="project-stack"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Tailwind</span></div></div><div><h4>Pencapaian</h4><ul><li>Identitas visual lebih kuat</li><li>Pengalaman konsisten di mobile dan desktop</li><li>Hierarki konten lebih mudah dipahami</li></ul></div></div>
        </article>
      </div>
    </section>

    <section class="skills-section" id="keahlian">
      <div class="section-shell skills-grid">
        <div class="skills-intro"><p class="section-number">03 / Keahlian</p><h2>Teknologi yang saya gunakan untuk mewujudkan ide.</h2></div>
        <div class="skills-list">
          <div class="skill-category"><h3>Backend</h3><div class="skill-items"><span>Laravel</span><span>PHP</span></div></div>
          <div class="skill-category"><h3>Frontend</h3><div class="skill-items"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span><span>Tailwind</span></div></div>
          <div class="skill-category"><h3>Database</h3><div class="skill-items"><span>MySQL</span><span>MariaDB</span></div></div>
          <div class="skill-category"><h3>Tools</h3><div class="skill-items"><span>Git</span><span>GitHub</span><span>Laragon</span><span>XAMPP</span><span>phpMyAdmin</span></div></div>
        </div>
      </div>
    </section>

    <section class="why-section section-shell" id="mengapa">
      <div class="why-grid">
        <div class="why-intro"><p class="section-number">04 / Mengapa bekerja bersama saya</p><h2>Teknologi yang punya alasan untuk ada.</h2><p>Saya tidak hanya membangun fitur, tetapi memahami konteks di baliknya agar solusi yang dibuat benar-benar membantu pekerjaan sehari-hari.</p></div>
        <div class="why-list">
          <div class="why-item"><span class="why-number">01</span><div><h3>Memahami kebutuhan operasional</h3><p>Setiap solusi dimulai dari memahami masalah, alur kerja, dan tujuan yang ingin dicapai.</p></div></div>
          <div class="why-item"><span class="why-number">02</span><div><h3>Sistem yang mudah dirawat</h3><p>Kode, struktur, dan dokumentasi disiapkan agar sistem tetap siap dikembangkan.</p></div></div>
          <div class="why-item"><span class="why-number">03</span><div><h3>Komunikasi yang jelas</h3><p>Proses kerja transparan dengan penjelasan yang mudah dipahami di setiap tahap.</p></div></div>
          <div class="why-item"><span class="why-number">04</span><div><h3>Fokus pada hasil nyata</h3><p>Ukuran keberhasilan bukan hanya fitur selesai, tetapi dampak yang diberikan kepada tim dan organisasi.</p></div></div>
        </div>
      </div>
    </section>

    <section class="contact-section section-shell" id="kontak">
      <p class="section-number">05 / Kontak</p>
      <div class="contact-content">
        <div class="contact-intro"><h2>Mari buat sesuatu yang <em>berarti.</em></h2><p>Saya terbuka untuk berdiskusi tentang proyek, kolaborasi, maupun ide baru yang dapat memberi dampak nyata.</p></div>
        <div class="contact-list">
          <a class="contact-item" href="mailto:riksancahyowadi@gmail.com"><span class="contact-label">Email</span><strong>riksancahyowadi@gmail.com</strong><span class="contact-arrow">↗</span></a>
          <a class="contact-item" href="tel:+6285788706696"><span class="contact-label">Telepon</span><strong>+62 857-8870-6696</strong><span class="contact-arrow">↗</span></a>
          <a class="contact-item" href="https://github.com/riksan-cahyowadi" target="_blank" rel="noreferrer"><span class="contact-label">GitHub</span><strong>github.com/riksan-cahyowadi</strong><span class="contact-arrow">↗</span></a>
          <a class="contact-item" href="https://www.linkedin.com/in/riksan-cahyowadi" target="_blank" rel="noreferrer"><span class="contact-label">LinkedIn</span><strong>linkedin.com/in/riksan-cahyowadi</strong><span class="contact-arrow">↗</span></a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer section-shell"><span>© 2026 Riksan Cahyowadi</span></footer>
  <button class="back-to-top" type="button" aria-label="Kembali ke atas">↑</button>
`;

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const backToTop = document.querySelector(".back-to-top");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );
  localStorage.setItem("portfolio-theme", theme);
};

setTheme(localStorage.getItem("portfolio-theme") || "light");
themeToggle.addEventListener("click", () =>
  setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
);

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 520);
});
backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
