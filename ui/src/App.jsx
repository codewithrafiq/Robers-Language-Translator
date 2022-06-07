import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [textToRov, setTextToRov] = useState('')
  const [textToRovResult, setTextToRovResult] = useState()
  let textToRovFunction = () => {
    if (textToRov.length < 2) {
      alert('Please enter at least 2 characters')
    } else {
      console.log(textToRov);
      axios({
        method: 'post',
        url: 'http://0.0.0.0:3030/translate/normal',
        data: {
          "text": textToRov
        }
      }).then(res => {
        if (res.status === 200) {
          console.log("res---->", res?.data?.translate);
          setTextToRovResult(res?.data?.translate)
        }
        else {
          alert("Error in translation")
        }
      }).catch(error => {
        alert("Error in translation")
      })
    }
  }


  const [rovToText, setRovToText] = useState('')
  const [rovToTextResult, setRovToTextResult] = useState()
  let rovToTextFunction = () => {
    if (rovToText.length < 2) {
      alert('Please enter at least 2 characters')
    } else {
      console.log(rovToText);
      axios({
        method: 'post',
        url: 'http://0.0.0.0:3030/translate/rovarsprak',
        data: {
          "text": rovToText
        }
      }).then(res => {
        if (res.status === 200) {
          console.log("res---->", res?.data?.translate);
          setRovToTextResult(res?.data?.translate)
        }
        else {
          alert("Error in translation")
        }
      }).catch(error => {
        alert("Error in translation")
      })
    }
  }


  const [jokeOfTheDayData, setJokeOfTheDayData] = useState('')
  let jokeOfTheDayFunction = () => {
    axios({
      method: 'get',
      url: 'http://0.0.0.0:3030/translate/joke-of-the-day/normal'
    }).then(res => {
      if (res.status === 200) {
        console.log("res---->", res?.data);
        setJokeOfTheDayData(res?.data)
      }
      else {
        alert("Error in translation")
      }
    }
    ).catch(error => {
      alert("Error in translation")
    }
    )
  }

  return (
    <div className='container'>
      <div className="row justify-content-center mt-2" style={{ textAlign: 'center' }}>
        <h1>Rövarspråket translator</h1>

        <div className="col-md-8 m-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Text to Rövarspråket</h5>
              <p className="card-text">
                <div className="form-group">
                  <textarea onChange={e => setTextToRov(e.target.value)} className="form-control" id="inputText" rows="2"></textarea>
                  <button onClick={e => textToRovFunction()} type="button" className="btn btn-primary m-2">Translate</button>
                </div>
                <div>
                  <h5 className="card-title">Translated text</h5>
                  <p>
                    {
                      textToRovResult ?? textToRovResult
                    }
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>


        <div className="col-md-8 m-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Rövarspråket to Text</h5>
              <p className="card-text">
                <div className="form-group">
                  <textarea onChange={e => setRovToText(e.target.value)} className="form-control" id="inputText" rows="2"></textarea>
                  <button onClick={e => rovToTextFunction()} type="button" className="btn btn-primary m-2">Translate</button>
                </div>
                <div>
                  <h5 className="card-title">Translated text</h5>
                  <p>
                    {
                      rovToTextResult ?? rovToTextResult
                    }
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>


        <div className="col-md-8 m-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Translate joke of the day</h5>
              <p className="card-text">
                <div className="form-group">
                  <button onClick={(e)=>jokeOfTheDayFunction()} type="button" className="btn btn-primary m-2">Translate</button>
                </div>
                <div>
                  {/* <h5 className="card-title">Translated</h5> */}
                    {jokeOfTheDayData ? <>
                      <p><b>Joke of the day : </b>{jokeOfTheDayData?.joke_of_the_day}</p>
                      <p><b>Translate : </b>{jokeOfTheDayData?.rovar_sprak_text}</p>
                    </> : ''}
                </div>
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App