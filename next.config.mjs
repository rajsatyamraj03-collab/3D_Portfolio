/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com', 'github.com'],
  },
};

export default nextConfig;
