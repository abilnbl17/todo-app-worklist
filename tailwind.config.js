// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Pastikan export default
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Jika Anda masih menggunakan @heroui/listbox atau semacamnya,
    // pastikan path ke node_modules-nya disertakan jika mereka
    // menghasilkan kelas Tailwind yang perlu di-scan.
    // Contoh (jika @heroui/listbox juga menggunakan Tailwind di baliknya):
    // "./node_modules/@heroui/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [], // V4 cenderung lebih minimal di sini, plugin tambahan diinstal terpisah
};
