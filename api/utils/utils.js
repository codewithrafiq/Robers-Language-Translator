const https = require('https');
const axios = require('axios').default;


class Utils {
    text_to_Rövar_språk = (s) => {
        let f_s = ""
        for (let i = 0; i < s.length; i++) {

            if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U") {
                f_s += s[i]
            }
            else if (s[i] != " " && (this.isAlpha(s[i]))) {
                f_s += s[i] + "o" + s[i]
            }
            else if (s[i] == " ") {
                f_s += " "
            }
            else{
                f_s += s[i]
            }
        }
        return f_s
    }

    isAlpha = (ch) => {
        return /^[A-Z]$/i.test(ch);
    }

    rövar_språk_to_text = (word) => {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let original_word = ""
        let i = 0
        while (i < (word.length)) {
            let character = word[i]
            original_word += character
            if (this.isAlpha(character) && (!(vowels.includes(character)))) {
                i += 3
            }
            else {
                i += 1
            }
        }
        return original_word
    }
    // get_joke_of_the_day() {
    //     return new Promise((resolve, reject) => {
    //         https.get('https://v2.jokeapi.dev/joke/Any', (res) => {

    //             let data = '';
    //             res.on('data', (chunk) => {
    //                 data += chunk;
    //             });
    //             res.on('end', () => {
    //                 console.log("data------>", data);
    //                 return resolve(JSON.parse(data).setup + JSON.parse(data).delivery);
    //             });
    //         }).on("error", (err) => {
    //             reject(err.message);
    //         });
    //     })
    // }
    get_joke_of_the_day = async () => {
        let response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        console.log(response.data);
        if (response.data.joke) {
            return `${response.data.joke}`
        }
        else {
            return `${response.data.setup}  ${response.data.delivery}`;
        }
    }
}


module.exports = Utils