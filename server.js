const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 10000;

app.use('/', createProxyMiddleware({
    target: 'https://mc-master.onrender.com', // Buraya bağlanmak istediğin asıl Minecraft sunucusunun adresini yazabilirsin
    changeOrigin: true,
    ws: true
}));

app.listen(PORT, () => {
    console.log(`Worker servisi ${PORT} portunda aktif.`);
});
