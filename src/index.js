import app from './app';
import mongoose from 'mongoose';
import config from './config';



mongoose.connect(config.mongo,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('Database conected'))
    .catch(() => console.log("Error connecting to database"));

app.listen(config.port, error => {
    if (error) return console.log(error);
    console.log(`Server is listening on port ${config.port}`);
});