const mongoose = require('mongoose');

const faceSchema = new mongoose.Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: String, required: true },
    price: { type: Number, required: true },
    bestseller: { type: String, required: true },
    numberOfRatings: { type: Number, required: true },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Face = new mongoose.model('face', faceSchema);

module.exports = Face;