/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites(){
    return[
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
}

module.exports = nextConfig
