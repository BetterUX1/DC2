const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Proxy routes
// app.use(
// 	'/auth',
// 	createProxyMiddleware({
// 		target: 'http://backend-auth:4000',
// 		changeOrigin: true,
// 	})
// );

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
