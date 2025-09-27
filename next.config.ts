import type { NextConfig } from "next";

import { resolve } from 'path';

const nextConfig: NextConfig = {
reactStrictMode: true,
experimental: {
appDir: true
},
images: {
// Add any external hosts you plan to use for images
remotePatterns: [
{ protocol: 'https', hostname: '**.unsplash.com' },
{ protocol: 'https', hostname: '**.images.unsplash.com' }
]
}
};


export default nextConfig;