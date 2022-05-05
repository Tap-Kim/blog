module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, // triggers 308
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com','localhost'],
    formats: ["image/webp"]
  }
}