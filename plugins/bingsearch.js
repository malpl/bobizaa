let handler = async (m, { conn, command, usedPrefix, args, text}) => {
let input = `معك محرك البحث BING ابحث عن اي شيء مثال:\n
${usedPrefix + command} FACEBOOK`
	if (!text) return m.reply(input) axios.get('https://www.bing.com/search?q=' + text)
  .then(response => {
    const $ = cheerio.load(response.data);
    const searchResults = [];
    $('.b_algo').each((index, element) => {
      const title = $(element).find('h2').text();
      const url = $(element).find('a').attr('href');
      const description = $(element).find('.b_caption p').text();
      searchResults.push({ title, url, description });
    });
            let bing = `Bing Search From : ${text}\n\n`;
            for (let g of searchResults) { 
              bing += ` *العنوان* : ${g.title}\n`;
              bing += ` *الوصف* : ${g.description}\n`;
              bing += ` *الرابط* : ${g.url}\n\n`;
            }
  conn.sendMessage(m.chat, {text: bing, contextInfo:
					{
	"externalAdReply": {
							"title": 'malik BING SEARCHING',
							"body": '',
							"showAdAttribution": true,
							"mediaType": 1,
							"sourceUrl": '',
							"thumbnailUrl": 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
							"renderLargerThumbnail": true

						}
					}}, {quoted: m})
					}).catch(err => {
					m.reply('حذث خطأ حاول لاحقا او راسل\https://wa.me/+201030825867')
					})
}
handler.help = ['بحث']
handler.tags = ['search']
handler.command = /^بحث$/i
handler.limit = false
export default handler
