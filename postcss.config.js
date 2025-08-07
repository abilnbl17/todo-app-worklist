// // postcss.config.js (BARU / Tailwind CSS v4)
// import tailwindcss from "@tailwindcss/postcss"; // <--- Impor yang benar
// import autoprefixer from "autoprefixer"; // Pastikan autoprefixer juga diimpor

// export default {
//   plugins: [
//     tailwindcss, // <--- Gunakan tailwindcss langsung (fungsi)
//     autoprefixer,
//   ],
// };

// postcss.config.js
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwindcss, autoprefixer],
};
