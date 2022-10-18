const qrku = "https://telegra.ph/file/56d505a55fd99aba64f76.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Telkomsel [082142108243]
│ • Dana  [082142108243]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281320170984
│ _Hasil donasi akan digunakan buat sewa_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
