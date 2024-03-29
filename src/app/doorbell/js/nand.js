console.log("nand")
console.log("123123")
class TelegramBot2Setup {
    constructor(token) {
      this.token = token;
      this.requestUrl = 'https://api.telegram.org/bot';
    }
  
    api(type, method, body) {
      return new Promise((resolve, reject) => {
        fetch(this.requestUrl + this.token + type, {
          method: method,
          body: body
        }).then(res => {
          resolve(res.json())
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
  
  class Bot extends TelegramBot2Setup {
    constructor(botToken, defaultChatID) {
      super(botToken);
      this.dcid = defaultChatID;
    }
  
    static start() {
      console.log("Send telegram message with JS\nDeveloper: https://manuchehr.me\nDocs: https://github.com/manuchekhr32/send-telegram-message-with-js");
    }
  
    async getUpdates() {
      try {
        const result = await this.api('/getUpdates', 'GET')
        return await result
      } catch(e) {
        return await e
      }
    }
  
    async getMe() {
      try {
        const result = await this.api('/getMe', 'GET')
        return await result
      } catch(e) {
        return await e
      }
    }
  
    async sendMessage(text, chatID, parseMode, disableNotification) {
      try {
        const result = await this.api(`/sendMessage?text=${text}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
        return await result
      } catch(e) {
        return await e
      }
    }
  
    async sendPhoto(img, caption, chatID, parseMode, disableNotification) {
      try {
        if (img.startsWith('#')) {
          const file = document.getElementById(img.replace('#', ''));
          const formData = new FormData();
          formData.append("photo", file.files[0])
          const result = await this.api(`/sendPhoto?caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 
            'POST', formData)
          return await result
        }
        else if (typeof img === 'string') {
          const result = await this.api(`/sendPhoto?photo=${img}&caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
          return await result
        }
      } catch(e) {
        return await e
      }
    }
  
    async sendAudio(audio, caption, chatID, parseMode, disableNotification) {
      try {
        if (audio.startsWith('#')) {
          const file = document.getElementById(audio.replace('#', ''));
          const formData = new FormData();
          formData.append("audio", file.files[0])
          const result = await this.api(`/sendAudio?caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 
            'POST', formData)
          return await result
        }
        else if (typeof audio === 'string') {
          const result = await this.api(`/sendAudio?audio=${audio}&caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
          return await result
        }
      } catch(e) {
        return await e
      }
    }
  
    async sendVoice(voice, caption, chatID, parseMode, disableNotification) {
      try {
        if (voice.startsWith('#')) {
          const file = document.getElementById(voice.replace('#', ''));
          const formData = new FormData();
          formData.append("voice", file.files[0])
          const result = await this.api(`/sendVoice?caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 
            'POST', formData)
          return await result
        }
        else if (typeof voice === 'string') {
          const result = await this.api(`/sendVoice?voice=${voice}&caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
          return await result
        }
      } catch(e) {
        return await e
      }
    }
  
    async sendVideo(video, caption, chatID, parseMode, disableNotification) {
      try {
        if (video.startsWith('#')) {
          const file = document.getElementById(video.replace('#', ''));
          const formData = new FormData();
          formData.append("video", file.files[0])
          const result = await this.api(`/sendVideo?caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 
            'POST', formData)
          return await result
        }
        else if (typeof video === 'string') {
          const result = await this.api(`/sendVideo?video=${video}&caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
          return await result
        }
      } catch(e) {
        return await e
      }
    }
  
    async sendFile(doc, caption, chatID, parseMode, disableNotification) {
      try {
        if (doc.startsWith('#')) {
          const file = document.getElementById(doc.replace('#', ''));
          const formData = new FormData();
          formData.append("document", file.files[0])
          const result = await this.api(`/sendDocument?caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 
            'POST', formData)
          return await result
        }
        else if (typeof doc === 'string') {
          const result = await this.api(`/sendDocument?document=${doc}&caption=${caption ? caption : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
          return await result
        }
      } catch(e) {
        return await e
      }
    }
  
    async sendContact(phoneNumber, firstName, lastName, chatID, parseMode, disableNotification) {
      try {
        const result = await this.api(`/sendContact?phone_number=${phoneNumber}&first_name=${firstName}&last_name=${lastName ? lastName : ''}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
        return await result
      } catch(e) {
        return await e
      }
    }
  
    async sendLocation(latitude, longitude, chatID, parseMode, disableNotification) {
      try {
        const result = await this.api(`/sendLocation?latitude=${latitude}&longitude=${longitude}&chat_id=${chatID ? chatID : this.dcid}&parse_mode=${parseMode ? parseMode : 'html'}&disable_notification=${disableNotification ? disableNotification : false}`, 'GET')
        return await result
      } catch(e) {
        return await e
      }
    }
  
    async sendPoll(question, options, config, chatID, disableNotification) {
      try {
        let url = `/sendPoll?question=${question}&options=${JSON.stringify(options)}&chat_id=${chatID ? chatID : this.dcid}&disable_notification=${disableNotification ? disableNotification : false}`
        for (let i in config) {
          url += `&${i}=${config[i]}`
        }
        const result = await this.api(url, "GET")
        return await result
      } catch(e) {
        return await e
      }
    }
  
  }
  Bot.start()

// --------------------------------------------  From : https://ip9uk39kv26rml8wjjruzg.on.drv.tw/jsbot.js -------------------------------------------- //


const bot = new Bot("5892239073:AAGZlwoEAT6ReD4JDLlMSsJTSo-zLMa-Yvc", "204907740")

// --------------------------------------------  Bot setup -------------------------------------------- //

function ringcheck() {
  let y = document.getElementById["ringbell"];
  console.log("y");
  bot.sendMessage("y");
  // bot.sendFile("asd")
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }
}

// function ringcheck() {
//   let y = document.getElementById["ringbell"];
//   console.log("y");
//   bot.sendMessage("y");
//   if (y == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

console.log("testing");

function validateForm() {
  // let x = document.forms["myForm"]["fname"].value;
  // let y = document.getElementById("fileInput").value;
  
  const text = document.getElementById("textInput").value;
  bot.sendFile("#fileInput", text)
  .then(res => {
    console.log(res);
  })
}
bot.sendFile("BQACAgUAAxkDAAPYY47sRnexhSwjuuynKekSSW1QdP0AApEHAAL4EXhUcwdVaZIkPKMrBA");

// --------------------------------------------  Voice Record -------------------------------------------- //


// --------------------------------------------------------------------------------------------------------------------------- //


