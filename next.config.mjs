/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/**',
            },
        ]
    },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.COUDINARY_API_NAME,
    }
};

export default nextConfig;
