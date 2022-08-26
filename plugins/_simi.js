let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api-sv2.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "en", cf: false }, ''))
        if (!res.ok) throw 'Sorry, I\'m currently busy.'
        let json = await res.json()
        if (json.success == 'What the heck are you talking about?') await m.reply("What the heck are you talking about?")
        await m.reply(`${json.success.replace("simisimi", "Princess").replace("Jang-a-Lang, Jang-a-Lang", "Princess").replace("simi", "Princess")}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
