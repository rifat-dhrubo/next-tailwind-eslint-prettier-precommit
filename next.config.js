/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withSvgr], nextConfig);
