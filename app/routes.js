var articleController = require('../controllers/articleController')

module.exports = (app) => {
  app.get('/', articleController.ArticleList)
  app.get('/:id', articleController.GetArticle)
  app.get('/about', (req, res) => {
    res.render('about.ejs')
  })
}
