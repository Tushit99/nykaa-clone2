const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: String, required: true },
    price: { type: Number, required: true },
    bestseller: { type: String, required: true },
    numberOfRatings: { type: Number, required: true },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Perfume = new mongoose.model('perfume', perfumeSchema);

module.exports = Perfume;