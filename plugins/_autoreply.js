let fs = require('fs')
let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('sw cok')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]
    let setting = db.data.settings[this.user.jid]
    let user = global.db.data.users[m.sender]
    
    // salam
    let reg = /(hel?o|hi|hey)/i
    let isHello = reg.exec(m.text)
    if (isHello && !m.fromMe) {
        m.reply("Hi, how're you doing?");
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
//     if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Go to this link')) && !m.isBaileys && !m.isGroup) {
//         this.sendButton(m.chat, `┌「 *Undang Bot ke Grup* 」
// ├ 7 Hari / Rp 5,000
// ├ 30 Hari / Rp 15,000
// └────
// `.trim(), wm, 'Pemilik Bot', '.owner', m)
//     }

//     if (m.isGroup) {
//     if (m.fromMe) return
//     if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
//     	await this.send2Button(m.chat, m.msg.contextInfo.expiration == 604800 ? '\n\type *.ephe* to turn off the message temporarily, so that the button can be used' : 'uhm.. yes what\'s up?', wm, `${isBanned ? 'UNBAN' : 'MENU'}`, `${isBanned ? '.unban' : '.?'}`, `${!m.isGroup ? 'DONATION' : isBanned ? 'UNBAN' : 'BAN'}`, `${!m.isGroup ? '.donasi' : isBanned ? '.unban' : '.ban'}`, m)
//     }
// }
    
//     if (/^bot$/i.test(m.text)) {
//         await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'aktif', wm, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
//     }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Africa/Lagos').format('HH')
    res = "Good morning"
    if (time >= 0) {
        res = "Good morning"
    }
    if (time >= 12) {
        res = "Good afternoon"
    }
    if (time >= 15) {
        res = "Good afternoon"
    }
    if (time >= 18) {
        res = "Good evening"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
