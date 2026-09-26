const { MongoClient } = require('mongodb');
require('dotenv').config();

const getProfessional = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const doc = await client
      .db('lesson2')
      .collection('professional')
      .findOne();
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  } finally {
    await client.close();
  }
};

module.exports = { getProfessional };