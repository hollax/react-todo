
const PORT = process.env.PORT || 4000;

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express()

const BUILD_PATH = path.resolve('../frontend/build');

//serve static files from front end build folder
app.use(express.static(BUILD_PATH));

app.get('/', (req, res) => {

    filePath = BUILD_PATH + '/index.html'

    if (fs.existsSync(filePath))
    {
        res.sendFile(filePath);
    }
    else
    {
       res.statusCode = 404;
       res.write('404 sorry not found');
       res.end();
    }
  
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})