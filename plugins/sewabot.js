let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6281384200380@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• 𝗦𝗲𝘄𝗮 𝗕𝗼𝘁 + 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 + 𝗨𝗻𝗱𝗮𝗻𝗴 𝗚𝗿𝘂𝗯 🥳👋 •*

𝙺𝚊𝚝𝚊𝚕𝚊𝚘𝚐 𝙱𝚞𝚜𝚜𝚒𝚗𝚎𝚜 *『 https://wa.me/p/5308254422597227/62813842003802 』*

𝙵𝚘𝚛 𝙹𝚊𝚐𝚊 𝙶𝚛𝚞𝚋 🐣🍃
❍ 𝙿𝚎𝚛𝚑𝚊𝚛𝚒 : ⒊𝙺
❍ 𝙿𝚎𝚛𝚖𝚒𝚗𝚐𝚐𝚞 : ⒏𝙺
❍ 𝙿𝚎𝚛𝚋𝚞𝚕𝚊𝚗 : ⒈⒊𝙺
❍ 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 : ⒈⒏𝙺
❍ 𝙿𝚛𝚎𝚖 + 𝙾𝚠𝚗𝚎𝚛 : ⒏𝙺
❍ 𝚂𝙲 𝙿𝚛𝚎𝚖 : ⒊⒊𝙺

𝙵𝚘𝚛 𝙲𝚘𝚖𝚞𝚗𝚒𝚝𝚝𝚢 𝙶𝚛𝚞𝚋 🥤🍃
❍ 𝙿𝚎𝚛𝚑𝚊𝚛𝚒 : ⒏𝙺
❍ 𝙿𝚎𝚖𝚒𝚗𝚐𝚐𝚞 : ⒈⒊𝙺
❍ 𝙿𝚎𝚛𝚋𝚞𝚕𝚊𝚗 : ⒉⒉𝙺
❍ 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 : ⒉⒏𝙺
❍ 𝙿𝚛𝚎𝚖 + 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : ⒈⒊𝙺

𝙽𝚘𝚝𝚎 : 𝚅𝚒𝚊 𝙳𝚊𝚗𝚊 / 𝙶𝚘𝚙𝚊𝚢 / 𝙾𝚟𝚘. 𝙿𝚞𝚕𝚜𝚊 𝚠𝚊𝚓𝚒𝚋 𝚌𝚊𝚜𝚑 & 𝚐𝚎𝚗𝚊𝚙 𝚍𝚒𝚗𝚊𝚒𝚔𝚊𝚗 ⒉𝙺 𝚂𝚎𝚖𝚞𝚊 / 𝚂𝚎𝚜𝚞𝚊 𝙷𝚊𝚛𝚐𝚊 𝙳𝚒𝚊𝚝𝚊𝚜𝚗𝚢𝚊


𝗦𝗲𝗿𝘁𝗮𝗸𝗮𝗻 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝗼𝘁𝗮𝗻 & 𝗞𝗶𝗿𝗶𝗺 𝗸𝗲 𝗢𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 !

𝗡𝗼𝘁𝗲 : 𝗢𝘄𝗻𝗲𝗿 = 𝗬𝗮𝗻𝗴 𝗕𝘂𝗮𝘁 𝗕𝗼𝘁
𝗖𝗿𝗲𝗮𝘁𝗼𝗿 = 𝗢𝗿𝗮𝗻𝗴 𝗣𝗶𝗹𝗶𝗵𝗮𝗻 𝗢𝘄𝗻𝗲𝗿

𝐎𝐰𝐧𝐞𝐫 : 『 wa.me/${owner[0]} 』🍳🍃

*𝖯𝖾𝗆𝖻𝗎𝖺𝗍 & 𝖯𝖾𝗆𝖺𝗄𝖺𝗂 𝖡𝗈𝗍 ✐${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6281384200380@s.whatsapp.net`
  },
  footerText: 'https://saweria.co/HyDyka',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
