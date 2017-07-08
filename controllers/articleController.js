const Article = require('../models/article')

//display list of all articles
exports.ArticleList = (req, res) => {

  Article.find({}, (err, articles) => {
    if (err) {
      return done(err)
    } else {
      res.render('index.ejs', { articles: articles })
    }
  })
}

exports.GetArticle = (req, res) => {
  // to do
}
