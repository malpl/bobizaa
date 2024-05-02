let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('تم')
} else throw `ادخل رسالة الي تبغى تحطها

}
handler.help = ['لوداع<text>']
handler.tags = ['group']
handler.command = ['لوداع'] 
handler.admin = true
export default handler
