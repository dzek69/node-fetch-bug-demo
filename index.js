const express = require('express');
const fetch = require('node-fetch').default;

const app = express();
app.get("*", (req, res) => {
    console.log("server", req.url, req.url.includes("?") ? "this is OK" : "INCORRECT URL");
    res.send("this is the result");
    server.close();
});
const server = app.listen(5001);

(async () => {
    const res = await fetch("http://127.0.0.1:5001/api/getStuff?a=tra").then(r => r.text());
    console.log("client", res);
})().catch(e => {
    console.error(e);
});
