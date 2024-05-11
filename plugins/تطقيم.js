import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/Afghhjjkoo/malik-BOT/main/lib/%D8%B7%D9%82%D9%85%20%D8%AD%D8%A8.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*بنت*👧', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*ولد*🧑', m)
}
handler.help = ['طقم']
handler.tags = ['طقم']
handler.command = /^طقم|تطقيم$/i
handler.limit = true

export default handler
