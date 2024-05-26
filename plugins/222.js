import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
  
*─[𝑩𝑶𝑻⃟☣️𝑴𝑨𝑳𝑰𝑲🍷🇰🇼]*💜✨
`.trim()
  m.reply(caption)
 
}
      
handler.help = ['2كراش']
handler.tags = ['infobot']
handler.command = /^(كراش2)$/i


export default handler
  
