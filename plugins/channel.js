let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🧛💜*
*تابعني هناك♥*`)
}
handler.help = ['رومي']
handler.tags = ['infobot']
handler.command = /^(رومي)$/i

export default handler;
