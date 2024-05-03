//
 // 
let handler = async (m, { conn, text }) => {
  let tagme = `https://wa.me/+${m.sender.replace(`+`)}/?text=`
  let mylink = [m.sender]
  conn.reply(m.chat, tagme, m, { contextInfo: { mylink }})
}
handler.help = ['يرسل رابطك']
handler.tags = ['group']
handler.command = /^رابطي|ربطي|رقمي$/i

handler.group = false

export default handler
