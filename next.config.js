/** @type {import('next').NextConfig} */
const config = require('./config')
const nextConfig = {
    env: {
        DB_URL: config.MONGO_URL,
        API: config.API,
        NEXT_AUTH_SECRET: config.NEXT_AUTH_SECRET
    }
}

module.exports = nextConfig
