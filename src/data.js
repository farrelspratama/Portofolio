// Semua konten portofolio ada di sini. Edit file ini untuk mengubah isi website.

export const profile = {
  name: "Farrel Setia Pratama",
  roles: ["Data Analyst", "Machine Learning Enthusiast", "Web Developer"],
  lead:
    "Mahasiswa Pendidikan Ilmu Komputer yang mengubah data menjadi solusi yang akurat dan berdampak.",
  about:
    "Saya adalah mahasiswa aktif pada Jurusan Pendidikan Ilmu Komputer dengan minat yang kuat di bidang data analisis dan machine learning. Saya belajar teknologi Python dan menggunakan library seperti Pandas, NumPy, Matplotlib, dan Seaborn untuk pengolahan data, visualisasi, dan membangun model prediktif. Selain kemampuan teknis, saya juga memiliki keterampilan komunikasi, kerja sama tim, serta pemecahan masalah yang baik. Saya memiliki semangat belajar yang tinggi dan berkomitmen untuk terus berkembang di bidang teknologi guna menjadi seorang data analyst yang mampu memberikan solusi berbasis data secara akurat dan berdampak.",
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
  "Mobile Developer",
  "Cyber Security",
  "Web Developer",
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
      "Life-Trans: Nikmatnya Kehidupan Bertransportasi, Demi Mengurangi Kemacetan adalah sistem informasi berbasis web yang bertujuan untuk membantu masyarakat dalam merencanakan dan melakukan perjalanan dengan lebih efisien dan efektif, sehingga dapat membantu mengurangi kemacetan. Selain itu, aplikasi ini dapat membantu pengguna dalam menentukan rute terbaik, memperkirakan waktu perjalanan, dan mengetahui jadwal transportasi publik. Dibuat menggunakan PHP sebagai bahasa pemrograman backend untuk mengelola data dan logika sistem, serta JavaScript untuk mengintegrasikan API peta yang menampilkan peta interaktif, rute perjalanan, dan informasi transportasi publik secara real-time.",
    stack: ["PHP", "JavaScript", "Maps API", "MySQL"],
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
      "Drag’nLearn adalah aplikasi edukatif interaktif yang dirancang untuk membantu siswa mengembangkan keterampilan literasi digital melalui permainan pengelompokan. Dalam aplikasi ini, pengguna akan mengelompokkan kata dan kalimat ke dalam kategori seperti hoax, opini, dan fakta, serta menilai kekuatan kata sandi dan membedakan informasi pribadi dan publik. Aplikasi ini dikembangkan menggunakan React Native, sehingga dapat berjalan lintas platform dengan tampilan modern dan responsif. Dengan pendekatan ini, Drag’nLearn berusaha meningkatkan pemahaman siswa terhadap informasi di dunia maya sambil memberikan pengalaman belajar yang menyenangkan dan menantang.",
    stack: ["React Native", "JavaScript", "Literasi Digital"],
    images: [
      { src: "dragnlearn-1", label: "Sign in", alt: "Layar awal aplikasi Drag’n Learn", bg: "#ffffff" },
      { src: "dragnlearn-2", label: "Course", alt: "Halaman course aplikasi Drag’n Learn", bg: "#ffffff" },
    ],
    links: [],
  },
];

export const experience = {
  title: "Program Penguatan Profesional Kependidikan (P3K)",
  place: "SMK Negeri 2 Bandung",
  description:
    "Dalam program Penguatan Pengalaman Profesional Kependidikan (P3K) yang saya ikuti di SMK Negeri 2 Bandung, saya melaksanakan berbagai kegiatan inti. Saya juga menghadapi dan mengatasi tantangan dalam pelaksanaan tugas harian dan teknis pembelajaran melalui evaluasi dan perbaikan berkelanjutan. Program ini memperkuat kompetensi saya sebagai calon pendidik dan memberikan pengalaman nyata dalam mengelola pembelajaran dan dinamika lingkungan sekolah.",
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
};

// Kredensial EmailJS (kunci publik, memang dipakai di sisi browser). Bisa ditimpa lewat file .env.
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dsa66gp",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_m1ao0ln",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6b80Xs6hhT_0vp9ls",
};
