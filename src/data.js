// Semua konten portofolio ada di sini. Edit file ini untuk mengubah isi website.

export const profile = {
  name: "Farrel Setia Pratama",
  roles: ["Data Analyst", "Machine Learning Enthusiast", "Web Developer"],
  lead:
    "Lulusan Pendidikan Ilmu Komputer yang mengubah data menjadi solusi yang akurat dan berdampak.",
  about:
    "Saya adalah lulusan Pendidikan Ilmu Komputer dengan minat yang kuat di bidang data analisis dan machine learning. Saya belajar teknologi Python dan menggunakan library seperti Pandas, NumPy, Matplotlib, dan Seaborn untuk pengolahan data, visualisasi, dan membangun model prediktif. Selain kemampuan teknis, saya juga memiliki keterampilan komunikasi, kerja sama tim, serta pemecahan masalah yang baik. Saya memiliki semangat belajar yang tinggi dan berkomitmen untuk terus berkembang di bidang teknologi guna menjadi seorang data analyst yang mampu memberikan solusi berbasis data secara akurat dan berdampak.",
  education: "Pendidikan Ilmu Komputer · Universitas Pendidikan Indonesia",
  location: "Bandung, Jawa Barat, Indonesia",
  email: "farrelsetiapratama43@gmail.com",
  phone: "+62 8956-3198-9655",
  phoneHref: "tel:+6289563198965",
  github: { label: "github.com/farrelspratama", href: "https://github.com/farrelspratama" },
  linkedin: { label: "linkedin.com/in/farrelspratama", href: "https://www.linkedin.com/in/farrelspratama/" },
  instagram: { label: "@farrelspratama", href: "https://www.instagram.com/farrelspratama/" },
};

export const technology = [
  { name: "Python", logo: "python" },
  { name: "Jupyter", logo: "jupyter" },
  { name: "JavaScript", logo: "javascript" },
  { name: "React", logo: "react" },
  { name: "HTML5", logo: "html" },
  { name: "CSS3", logo: "css" },
  { name: "PHP", logo: "php" },
  { name: "MySQL", logo: "mysql" },
  { name: "GitHub", logo: "github" },
  { name: "VS Code", logo: "vscode" },
  { name: "XAMPP", logo: "xampp" },
  { name: "Microsoft Office", logo: "office" },
];

export const hardSkills = [
  "Microsoft Office",
  "Google Workspace",
  "Web Programming",
  "Mobile Programming",
  "Database",
  "Data Analysis",
];

export const softSkills = [
  "Critical Thinking",
  "Problem Solving",
  "Communication",
  "Adaptability",
  "Willingness to Learn",
  "Active Listening",
];

export const interests = [
  "Machine Learning",
  "Data Analyst",
  "Web Developer",
  "Mobile Developer",
];

// `links`: isi dengan { label, href } bila sudah punya URL repo / demo, contoh:
// links: [{ label: "Lihat Dashboard", href: "https://..." }, { label: "Source Code", href: "https://github.com/..." }]
export const projects = [
  {
    id: "bike-analysis",
    category: "Data Analysis",
    title: "Bike Sharing Analysis",
    kind: "browser",
    description:
      "Analisis ini bertujuan untuk memahami pola perilaku penyewaan sepeda berdasarkan waktu, musim, dan kondisi cuaca selama tahun 2011 dan 2012. Data dianalisis untuk mengidentifikasi tren penggunaan sepeda pada hari kerja, akhir pekan, dan hari libur, serta pengaruh faktor eksternal seperti musim dan cuaca terhadap jumlah penyewa. Proses analisis dilakukan dengan memanfaatkan Pandas untuk pengolahan data, NumPy untuk perhitungan numerik, serta Matplotlib dan Seaborn untuk visualisasi, sehingga hasilnya memberikan gambaran menyeluruh mengenai waktu puncak penyewaan dan perbedaan preferensi pengguna berdasarkan kategori dan kondisi lingkungan.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    images: [
      { src: "bike-analysis-2", label: "EDA", alt: "Notebook Exploratory Data Analysis pada data penyewaan sepeda", bg: "#0e1116" },
      { src: "bike-analysis-1", label: "Cleaning", alt: "Notebook pembersihan data penyewaan sepeda", bg: "#0e1116" },
    ],
    links: [],
  },
  {
    id: "bike-viz",
    category: "Dashboard",
    title: "Bike Sharing Visualization",
    kind: "browser",
    description:
      "Proyek ini merupakan dashboard interaktif berbasis Streamlit yang menyajikan analisis data penyewaan sepeda dari tahun 2011–2012. Dengan memanfaatkan data per jam dan harian, dashboard ini mengeksplorasi pola penggunaan sepeda berdasarkan waktu, musim, dan kondisi cuaca. Fitur interaktif seperti pemilihan tahun, musim, dan cuaca ditambahkan agar pengguna dapat menggali insight yang relevan secara fleksibel. Proyek ini bertujuan membantu memahami tren penyewaan sepeda untuk mendukung pengambilan keputusan yang lebih tepat.",
    stack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    images: [
      { src: "bike-viz-1", label: "Pola per jam", alt: "Dashboard Streamlit: pola penggunaan sepeda per jam", bg: "#0e1117" },
      { src: "bike-viz-2", label: "Cuaca & pengguna", alt: "Dashboard Streamlit: pengaruh cuaca dan perbandingan pengguna", bg: "#0e1117" },
    ],
    links: [],
  },
  {
    id: "life-trans",
    category: "Web App",
    title: "Life Trans",
    kind: "browser",
    description:
      "Sistem informasi berbasis web yang dirancang untuk membantu masyarakat merencanakan perjalanan secara efisien melalui integrasi peta interaktif (HERE Maps API) dan backend PHP. Siklus pengembangannya dilengkapi dengan penyusunan dokumentasi teknis komprehensif, meliputi perancangan alur sistem dan basis data (ERD), dokumen spesifikasi kebutuhan perangkat lunak (SRS), panduan integrasi API peta, serta penyusunan petunjuk penggunaan (User Manual) terstruktur guna memastikan keberlanjutan dan kemudahan pemeliharaan sistem.",
    stack: ["PHP", "JavaScript", "HERE Maps API", "MySQL"],
    images: [
      { src: "lifetrans-2", label: "Landing", alt: "Halaman awal Life Trans", bg: "#00b4d8" },
      { src: "lifetrans-1", label: "Rute", alt: "Perencana rute Life Trans dengan peta interaktif", bg: "#ffffff" },
    ],
    links: [],
  },
  {
    id: "dragnlearn",
    category: "Mobile App",
    title: "Drag’n Learn",
    kind: "phone",
    description:
      "Aplikasi mobile edukatif berbasis React Native yang melatih keterampilan literasi digital siswa melalui modul interaktif drag & drop. Pengembangannya didukung oleh penyusunan dokumen teknis yang terstruktur, mencakup pemetaan alur pengguna (User Flow), pemodelan Use Case & Skenario multi-aktor (Guru/Admin dan Siswa), perancangan basis data relasional (manajemen akun, kelas, dan materi game).",
    stack: ["React Native", "JavaScript", "Literasi Digital"],
    images: [
      { src: "dragnlearn-1", label: "Sign in", alt: "Layar awal aplikasi Drag’n Learn", bg: "#ffffff" },
      { src: "dragnlearn-2", label: "Course", alt: "Halaman course aplikasi Drag’n Learn", bg: "#ffffff" },
    ],
    links: [],
  },
];

export const experience = [
  {
    title: "Program Penguatan Profesional Kependidikan (P3K)",
    place: "SMK Negeri 2 Bandung",
    description: "Dalam program Penguatan Pengalaman Profesional Kependidikan (P3K) di SMK Negeri 2 Bandung, saya melaksanakan berbagai kegiatan inti. Saya juga menghadapi dan mengatasi tantangan dalam pelaksanaan tugas harian dan teknis pembelajaran melalui evaluasi dan perbaikan berkelanjutan. Program ini memperkuat kompetensi saya sebagai calon pendidik dan memberikan pengalaman nyata dalam mengelola pembelajaran dan dinamika lingkungan sekolah.",
    activities: [
      "Praktik mengajar",
      "Pengembangan media dan bahan ajar",
      "Penilaian hasil belajar",
      "Praktik manajemen sekolah",
    ],
    photos: [
      { src: "p3k-2", alt: "Farrel mengajar di laboratorium komputer SMK Negeri 2 Bandung" },
      { src: "p3k-1", alt: "Foto bersama siswa SMK Negeri 2 Bandung" },
    ],
  },
  
  {
    title: "Penelitian Tugas Akhir",
    place: "SMK Negeri 13 Bandung",
    description: "Merancang, mengembangkan, dan menguji aplikasi game adventure 2D berbasis Problem-based Learning (PBL) untuk pembelajaran materi Struktur Data Stack. Saya menerapkan metode R&amp;D berbasis kerangka kerja ADDIE serta melakukan evaluasi terstruktur melalui pengujian kebergunaan sistem (SUS) dan analisis data hasil belajar siswa secara terukur. Pengalaman riset ini memperkuat kompetensi saya dalam rekayasa perangkat lunak edukatif dan pengolahan data analitis.",
    activities: [
      "Pengumpulan data",
      "Implementasi pembelajaran di kelas",
      "Analisis hasil penelitian",
    ],
    photos: [
      { src: "penelitian-1", alt: "Farrel mengajar di laboratorium komputer SMK Negeri 13 Bandung" },
      { src: "penelitian-2", alt: "Kegiatan diskusi siswa SMK Negeri 13 Bandung" },
      { src: "penelitian-3", alt: "Foto bersama siswa SMK Negeri 13 Bandung"}
    ],
  },
];

// Kredensial EmailJS (kunci publik, memang dipakai di sisi browser). Bisa ditimpa lewat file .env.
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dsa66gp",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_m1ao0ln",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6b80Xs6hhT_0vp9ls",
};
