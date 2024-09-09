const express = require('express');
const app = express();
const port = 3000;


//GET /message endpoint
app.get('/message', (req, res) => { res.json({message:'"Hello, World!"'});});

//Start server
app.listen(port, () => {console.log('Server: http://localhost:${port}');});