const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const PortfolioDataSchema = new Schema({
  projectTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageFront: {
    type: String,
    required: true
  },
  imageBack: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: false
  },
  githubLink: {
    type: String,
    required: false
  },
  liveSite: {
    type: String,
    required: false
  },
  demoLink: {
    type: String,
    required: false
  },
  bitBucketLink: {
    type: String,
    required: false
  },
  technology: {
    type: [String],
    required: true
  }
});

const PortfolioData = model("portfolioData", PortfolioDataSchema);

module.exports = PortfolioData;
