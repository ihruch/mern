const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
app.use(express.json({extended: true}));

app.use('/api/auth', require('./routes/auth.routes'));
<<<<<<< HEAD
=======
app.use('/link', require('./routes/link.routes'))
>>>>>>> add router link back

const PORT = config.get('port') || 5000;

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true
        });

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}. Pid: ${process.pid}`)
        })
    }catch(error) {
        console.error(`Server error ${error.message}`);
        process.exit(1);
    }
};

start();
