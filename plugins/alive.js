import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│✅ أتمنى أنك بخير ✔️ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
 <https://wa.me/+201030825867>
╰────────────────────
*─[𝑩𝑶𝑻⃟☣️𝑴𝑨𝑳𝑰𝑲🍷🇰🇼]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(بوت)$/i


export default handler
