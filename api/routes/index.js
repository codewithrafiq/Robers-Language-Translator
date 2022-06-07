var express = require('express');
var router = express.Router();
let Utils = require('../utils/utils')

let utils = new Utils()


router.get('/', (req, res) => {
  res.json({
    "message": "Welcome to the API.Run Frontend for testing APIs."
  })
})

router.post("/translate/normal", (req, res) => {
  // Should return the translated text in Rövar språk.
  try {
    let text = req.body.text
    let rovar_sprak_text = utils.text_to_Rövar_språk(text)

    res.status(200)
    res.json({
      "text": text,
      "translate": rovar_sprak_text
    })

  } catch (error) {
    res.status(400)
    res.json({
      error: String(error.message)
    })
  }
})


router.post("/translate/rovarsprak", (req, res) => {
  // Should return the translation back from Rövarspråk.
  try {
    let text = req.body.text
    let rövar_språk_to_text = utils.rövar_språk_to_text(text)
    res.status(200)
    res.json({
      "text": text,
      "translate": rövar_språk_to_text
    })
  } catch (error) {
    res.status(400)
    res.json({
      error: String(error.message)
    })
  }
})

router.get("/translate/joke-of-the-day/normal", async (req, res) => {
  // translate a “joke of the day” 
  // try {
  //   let joke_of_the_day = await utils.get_joke_of_the_day()
  //   let rovar_sprak_text = utils.text_to_Rövar_språk(joke_of_the_day)
  //   res.status(200)
  //   res.json({
  //     joke_of_the_day: joke_of_the_day,
  //     rovar_sprak_text: rovar_sprak_text
  //   })
  // } catch (error) {
  //   res.status(400)
  //   res.json({
  //     error: String(error.message)
  //   })
  // }

  try {
    let get_joke_of_the_day = await utils.get_joke_of_the_day()
    console.log("get_joke_of_the_day------>", get_joke_of_the_day);
    let rovar_sprak_text = utils.text_to_Rövar_språk(get_joke_of_the_day)
    res.status(200)
    res.json({
      joke_of_the_day: get_joke_of_the_day,
      rovar_sprak_text: rovar_sprak_text
    })
  } catch (error) {
    res.status(400)
    res.json({
      error: String(error.message)
    })
  }

})



module.exports = router;
