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
    id: 1,
    path: "M10 9h2V6c0-1.1.9-2 2-2h2V0h-2C9.79 0 8 1.79 8 4v5H6v3h2v11h3V12h3l1-3h-4V9z",
    viewBox: "0 0 24 24",
  },
  {
    id: 2,
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.54-.17.54-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.32.66.07-.52.28-.86.5-1.06-1.77-.2-3.64-.89-3.64-3.94 0-.87.31-1.58.82-2.14-.08-.2-.36-1.03.08-2.13 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.05-1.87 3.73-3.65 3.94.29.25.54.72.54 1.46 0 1.06-.01 1.91-.01 2.18 0 .21.14.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z",
    viewBox: "0 0 16 16",
  },
  {
    id: 3,
    path: "M23.95 4.57c-.89.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.72-.95.56-2.01.97-3.12 1.19-.9-.96-2.17-1.55-3.59-1.55-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.12 1.12-4.1-.2-7.74-2.17-10.17-5.14-.43.73-.67 1.58-.67 2.48 0 1.71.87 3.21 2.19 4.09-.8-.03-1.55-.25-2.21-.62v.06c0 2.38 1.7 4.37 3.95 4.83-.41.11-.85.17-1.29.17-.32 0-.62-.03-.93-.09.63 1.96 2.44 3.39 4.61 3.43-1.68 1.32-3.81 2.11-6.1 2.11-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.58 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.7 1.8-1.57 2.46-2.56z",
    viewBox: "0 0 24 24",
  },
  {
    id: 4,
    path: "M4.98 3.5C4.98 2.12 6.1 1 7.5 1s2.5 1.12 2.5 2.5S8.9 6 7.5 6 4.98 4.88 4.98 3.5zM2 9h5v12H2V9zm7.5 0H14v1.75h.06c.58-1.1 2-2.25 4.19-2.25 3.55 0 5.75 1.75 5.75 5.44V21h-5V14.5c0-1.53-.3-2.72-1.85-2.72-1.82 0-2.6 1.3-2.6 2.72V21h-4.1V9z",
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
    number: 200,
    title: "Projects",
  },
  {
    id: 3,
    number: 120,
    title: "Happy Clients",
  },
  {
    id: 4,
    number: 5,
    title: "Years",
  },
];

// Services Section
export const services = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    title: "MOBILE DEVELOPMENT",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "WEB DESIGN",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
];

// Experience and Education Section
export const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: " Tech Solution Inc.",
    year: "2022 - Present",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: "https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: " Startup",
    year: "2022 - Present",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: "https://img.icons8.com/ios-filled/64/ffffff/briefcase-settings.png",
  },
];
export const education = [
  {
    id: 1,
    degree: "Frontend Developer",
    institution: " Tech Solution Inc.",
    year: "2022 - Present",
    details: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: "https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png",
  },
  {
    id: 2,
    degree: "Frontend Developer",
    institution: " Tech Solution Inc.",
    year: "2022 - Present",
    details: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon: "https://img.icons8.com/pastel-glyph/64/ffffff/graduation-cap--v2.png",
  },
];

// Projects Section
export const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project3.png",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project3.png",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project3.png",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project3.png",
  },
  {
    id: 1,
    title: "Project 1",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project1.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    imageUrl: "/project2.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
