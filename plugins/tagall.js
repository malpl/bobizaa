let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
m.reply(`*الموضوع:*\n${text ? `${text}\n` : ''}\n*<𝑴𝑨𝑳𝑰𝑲🍷🇰🇼><ولايات الخطر المتحده>*\n\+201030825867` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *تمت الإشارة للكل* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['owner']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
