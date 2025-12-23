/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@gravity-ui/uikit',
    '@gravity-ui/page-constructor',
    '@gravity-ui/icons',
  ],
}

module.exports = nextConfig
