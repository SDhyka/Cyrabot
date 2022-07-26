let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`𝖣𝗈𝗆𝗉𝖾𝗍 𝖬𝗎 𝖡𝖾𝗋𝗂𝗌𝗂 💶
𝖱𝖯 :「${global.db.data.users[who].money}」 `)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(dompet)$/i
module.exports = handler