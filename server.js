const express = require('express');

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log('Server started on port: ', PORT);
});
