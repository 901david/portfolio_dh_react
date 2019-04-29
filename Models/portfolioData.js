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
  image: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
    required: false
  },
  liveSite: {
    type: String,
    required: false
  },
  technology: {
    type: String,
    required: true
  }
});

const PortfolioData = model("portfolioData", PortfolioDataSchema);

module.exports = PortfolioData;
