let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
// mongoose.connect('mongodb://admin:123456a@ds113454.mlab.com:13454/todoapp',{ useNewUrlParser: true });

//mongodb://<dbuser>:<dbpassword>@ds113454.mlab.com:13454/todoapp
module.exports = {
    mongoose
};
