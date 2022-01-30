module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'TestSecret1234TestSecret1234TestSecret1234TestSecret1234'
},
publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:45001' // development api
        : 'http://localhost:45001' // production api
}
}
