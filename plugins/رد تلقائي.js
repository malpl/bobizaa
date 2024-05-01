//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^لينك|الينك$/i.test(m.text)) { 
     responses = [ 
 '*https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC*',
     ]; 
   }else if (/^خطر|مالك$/i.test(m.text)) { 
     responses = [ 
'*هاي اكتب نقطه اوامر لعرض اوامري*',
'*𝑴𝑨𝑳𝑰𝑲🍷🇰🇼<✳️ولايات الخطر المتحده*',
'*🧛*',
'*🦹*',
      
     ]; 
       }else if (/^مطور|المطور|مالك$/i.test(m.text)) { 
     responses = [
      '*https://wa.me/+201030825867*',
      '*﴾https://wa.me/+201030825867﴿<𝑴𝑨𝑳𝑰𝑲🍷🇰🇼>*',
     ]; 
 }else if (/^بوت|البوت$/i.test(m.text)) { 
     responses = [ 
'*☣️اسمي خطر*',
'*<https://wa.me/+201030825867> مطوري*',
      '*☣️*',
      '*🧛*',
     ]; 
   }else if (/^ابني$/i.test(m.text)) { 
     responses = [ 
'*بابا مالك😔*'
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
      '*اكتب .اوامر*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
           
