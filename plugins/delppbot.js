let handler = async (m, { conn }) => {
  await conn.removeProfilePicture(conn.user.jid)
  m.reply('تم بنجاح حذف صورة البروفايل الخاص بالبوت.')
}

handler.menuowner = ['حذف-بروفيل-البوت']
handler.tagsowner = ['owner']
handler.command = /^(حذف-بروفيل-البوت)$/i

handler.rowner = true

export default handler
