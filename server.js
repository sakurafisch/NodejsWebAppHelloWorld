const port = process.env.port || 1337;
var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => console.log('Example app listening on ' + port));
//# sourceMappingURL=server.js.map