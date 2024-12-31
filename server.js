const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/saveData', (req, res) => {
    const userData = req.body;


    fs.writeFile('userData.json', JSON.stringify(userData, null, 2), (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Failed to save data');
        } else {
            console.log('Data saved successfully:', userData);
            res.status(200).send('Data saved successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
