let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]
    if (m.chat.endsWith('status@broadcast')) {
        console.log('Status Wa!')
    }
    if (user.premiumTime != 0 && user.premium) {
        if (new Date() * 1 >= user.premiumTime) {
            await this.sendButton(m.chat, `hey @${m.sender.split`@`[0]}\your premium time is up!`, wm, 'Bot Owner', '.owner', m)
            user.premiumTime = 0
            user.premium = false
        }
    }
}

module.exports = handler
