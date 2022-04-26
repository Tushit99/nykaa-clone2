const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://module4:module4@newcluster.b6qmu.mongodb.net/test");
};