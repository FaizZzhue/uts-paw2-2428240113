const mongoose = require('mongoose');

// const alamatSchema = new mongoose.Schema({
//   jalan: String,
//   kota: String,
// }, { _id: false });

const mahasiswaSchema = new mongoose.Schema({
  kodeEbook: { type: String, required: [true, 'kode ebook wajib diisi'], unique: true, trim: true},
  judul: { type: String, required: [true, 'judul wajib diisi'], trim: true },
  ukuranMb: { type: String, trim: true },
  format: { type: Date },
  penulis: { type: String, trim: true },
  koleksiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);