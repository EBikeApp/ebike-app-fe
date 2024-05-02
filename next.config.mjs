/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: ["react-hooks"],
  reactStrictMode: false,
  rules: {
    // img 
    "img-alt-attributes": false,
    // allow using img instead of using Image of next/image
    "@next/next/no-img-element": "off",
    "@next/next/google-font-display": "off",
  },
};


export default nextConfig;
