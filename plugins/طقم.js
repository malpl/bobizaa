import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_أرسلها لصديقتك♂️_ \nولا تنسى متابعتي هنا \nhttps://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_ارسلها لصديقك♀️_\n ولا تنسى متابعتي هنا \nhttps://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC', m)
}
handler.help = ['طقم','tofanime']
handler.tags = ['anime']
handler.command = ['زوجين','tofanime','طقم'] 


export default handler
