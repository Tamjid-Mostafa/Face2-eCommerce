/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     // hostname: 'i.ibb.co',
    //     port: '',
    //   },
    //   {
    //     protocol: 'https',
    //     // hostname: 'res.cloudinary.com',
    //     hostname: 'i.ibb.co',
    //     port: '',
    //   },
    // ],
    domains: ['res.cloudinary.com', 'i.ibb.co'],
  },
}

module.exports = nextConfig
