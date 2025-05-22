// Hero Section
const animationDuration = 2;
export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcons = [
  {
    id: 1, // GitHub
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.11.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.304 3.495.997.108-.775.417-1.304.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.237-3.221-.124-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.525 11.525 0 013.003-.403c1.02.006 2.047.137 3.003.403 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.771.839 1.236 1.911 1.236 3.221 0 4.61-2.807 5.626-5.478 5.922.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.192.694.799.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z",
    viewBox: "0 0 24 24",
  },
  {
    id: 2, // YouTube
    path: "M23.499 6.203a2.956 2.956 0 00-2.08-2.09C19.137 3.5 12 3.5 12 3.5s-7.137 0-9.419.613a2.956 2.956 0 00-2.08 2.09C0 8.44 0 12 0 12s0 3.56.501 5.797a2.956 2.956 0 002.08 2.09C4.863 20.5 12 20.5 12 20.5s7.137 0 9.419-.613a2.956 2.956 0 002.08-2.09C24 15.56 24 12 24 12s0-3.56-.501-5.797zM9.75 15.5v-7l6.5 3.5-6.5 3.5z",
    viewBox: "0 0 24 24",
  },
  {
    id: 3, // TikTok
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    viewBox: "0 0 24 24",
  },
  {
    id: 4, // Instagram
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    viewBox: "0 0 24 24",
  },
  {
    id: 5, // Saweria (ikon donasi generik)
    path: "M13.363 3.663H9.961v6.865c-.41.196-.857.368-1.341.511a7.94 7.94 0 0 1-.776.182V3.968s.06-1.041-.519-1.393v-.13h5.434c.244.297.463.697.604 1.218zm.958 9.391c2.465-1.182 3.652-3.262 3.674-5.646.015-1.622-.557-2.618-1.197-3.148a1.883 1.883 0 0 0-.117-.089 6.454 6.454 0 0 0-.612-1.618c.118.017.227.036.324.057 1.788.38 3.225 1.436 3.905 3.474.554 1.662.285 3.724-.904 5.377-.281.391-1.03 1.226-1.89 1.842-.156.112-.25.174-.414.277 1.077 1.726 1.608 2.717 2.295 4.6.6 1.644 1.055 3.83 1.117 4.344.15 1.223.515 1.32.599 1.345V24h-4.295v-.13c.132-.07 1.293-.546 1.299-2.367.006-1.337-.32-2.808-.914-4.46a22.925 22.925 0 0 0-1.277-2.829l-.014-.021a8.355 8.355 0 0 1-.872.321c-.223-.516-.45-.983-.707-1.459zm-4.36-.144v1.116c.325-.014 1.34-.096 2.254-.274.207.468.387.912.511 1.257l.017.048a26.3 26.3 0 0 1-1.23.166 33.2 33.2 0 0 1-1.552.131v7.21c0 .159.037 1.008.59 1.306V24H7.254v-.13c.538-.283.59-1.147.59-1.305v-9.27a18.96 18.96 0 0 0 2.118-.385zm.457-11.66l-.462-.007H5.662v10.575c.426-.019 2.013-.152 3.052-.46 3.465-1.025 5.12-3.447 5.146-6.293.015-1.655-.568-2.672-1.222-3.212-.407-.337-.946-.496-1.338-.554-.22-.044-.71-.05-.882-.05zM3.502 20.557V1.554S3.564.492 2.972.133V0h7.346c.613.001 1.415.063 1.907.17 1.824.387 3.291 1.464 3.985 3.544.565 1.696.291 3.8-.922 5.487-.287.4-1.05 1.25-1.93 1.88a6.998 6.998 0 0 1-.422.281c1.1 1.762 1.641 2.773 2.343 4.695.612 1.677 1.076 3.909 1.14 4.432.151 1.248.525 1.374.61 1.4v.132h-4.382l-.001-.133c.136-.072 1.32-.583 1.326-2.442.007-1.363-.326-2.865-.932-4.55a23.36 23.36 0 0 0-1.305-2.887l-.014-.022c-.582.265-1.812.624-2.61.775-.571.108-1.15.197-1.865.277-.623.07-1.227.111-1.584.134v7.384c0 .161.038 1.028.603 1.332v.132H2.9v-.132c.549-.29.603-1.17.603-1.332Z",
    viewBox: "0 0 24 24",
  },
];

// Number Section
export const Numbers = [
  {
    id: 1,
    number: 12,
    title: "Created Projects",
  },
  {
    id: 2,
    number: 20,
    title: "Projects",
  },
  {
    id: 3,
    number: 200,
    title: "Happy Clients",
  },
  {
    id: 4,
    number: 3,
    title: "Years",
  },
];

// Services Section
export const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description: `"I am here as a fullstack developer for a website, whether it's the full user side or the full admin side."`,
  },
  {
    id: 2,
    title: "MOBILE DEVELOPMENT",
    description: `"I am here as a fullstack mobile developer who directly interacts with users to prioritize user satisfaction."`,
  },
  {
    id: 3,
    title: "QA & PENTESTER",
    description: `"I’m someone who’s not an expert or a cyber specialist, but I prioritize quality in a product for users in the future. I have some expertise in penetration testing."`,
  },
];

// Skills Section
export const skills = [
  {
    skill: "React",
    percentage: 90,
    icon: "https://img.icons8.com/office/40/react.png",
  },
  {
    skill: "Node.js",
    percentage: 80,
    icon: "https://img.icons8.com/fluency/40/node-js.png",
  },
  {
    skill: "Tailwindcss",
    percentage: 95,
    icon: "https://img.icons8.com/color/40/tailwindcss.png",
  },
  {
    skill: "Next JS",
    percentage: 90,
    icon: "https://img.icons8.com/color/40/nextjs.png",
  },
  {
    skill: "Firebase",
    percentage: 85,
    icon: "https://img.icons8.com/color/40/firebase.png",
  },
  {
    skill: "Python",
    percentage: 80,
    icon: "https://img.icons8.com/color/40/python.png",
  },
];

// Experience Section
export const experience = [
  {
    id: 1,
    degree: "Full-Stack Web Developer",
    institution: "PTSP - BMKG",
    year: "2023 - Present",
    details:
      "Mengembangkan Website PTSP (Pelayanan Terpadu Satu Pintu) dengan antarmuka responsif dan backend yang efisien. Berkolaborasi dengan tim untuk memastikan kinerja dan stabilitas aplikasi, serta melakukan peralihan dari PHP ke Next.js.",
    icon: "/FullStack.png",
    link: "https://ptsp-six.vercel.app/Beranda", // Contoh link (ubah jika perlu)
  },
  {
    id: 2,
    degree: "Full-Stack Mobile Developer",
    institution: "PTSP - BMKG",
    year: "2022 - Present",
    details: "Mengembangkan aplikasi mobile yang bertujuan untuk mempermudah pengguna user di berbagai device. Menggunakan React Native Expo & Firebase",
    icon: "/MobileApp.png",
    link: "https://github.com/AdrianAlfauzan/PTSP-MOBILE", // Contoh link (ubah jika perlu)
  },
  {
    id: 3,
    degree: "Back - End Developer",
    institution: "BASARNAS - SIMORE",
    year: "Mei 2023 - September 2023",
    details: "Project pembuatan website Simore (Sistem Monitoring Rescue) menggunakan PHP Native dan Tailwindcss.",
    icon: "/BackEnd.png",
    link: "https://github.com/AdrianAlfauzan/BASARNAS", // Contoh link (ubah jika perlu)
  },
  {
    id: 4,
    degree: "Cybersecurity & Pentesting",
    institution: "PTSP, SIMORE",
    year: "2024 - Present",
    details: "Pelatihan dalam pengujian keamanan web, menggunakan teknik seperti XSS Injection dan Cross-Site Tracing (XST).",
    icon: "/CyberSecurity.png",
    link: "https://cybersecurity-training.example.com", // Contoh link pelatihan
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Membuat portofolio dengan Bootstrap hasil berlajar di Youtube.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Membuat Web TUGAS BESAR di semester 4 menggunakan Typescript dikala mahasiswa lain menggunakan PHP.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Membuat Web TUGAS BESAR di semester 3 menggunakan PHP.",
    imageUrl: "/project3.png",
  },
];

// Contact Section
export const contact = [
  {
    id: 1,
    title: "Address",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/map-marker.png",
  },
  {
    id: 2,
    title: "Phone Number",
    description: "+6281222518720",
    icon: "https://img.icons8.com/ios-filled/50/ffffff/phone.png",
  },
  {
    id: 3,
    title: "Email",
    description: "adrianmusaalfauzan@gmail.com",
    icon: "https://img.icons8.com/pastel-glyph/64/ffffff/new-post--v1.png",
  },
];
