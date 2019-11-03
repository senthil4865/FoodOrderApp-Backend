const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('Z3K6U861KB', '349e080a81bde42366a69c04186754aa');
const index = client.initIndex('amazonwebapp');

//access key - AKIAQ3RVX6373C56S35S
//secret access key -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

router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});


module.exports = router;

