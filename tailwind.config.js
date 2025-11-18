/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#231714",       // marrón/chocolate muy oscuro
        "brand-beige": "#F5EEE6",      // beige / madera clara
        "brand-light": "#FBF7F2",
        "brand-accent": "#8B1E3F",     // rojo vino / burdeos
        "brand-gold": "#C29B72",       // dorado suave para detalles
        "brand-soft": "#E3D3C4"
      },
      boxShadow: {
        "soft-lg": "0 18px 45px rgba(0, 0, 0, 0.12)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};
