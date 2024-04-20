//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^احا$/i.test(m.text)) { 
     responses = [ 
 '*افتحها*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^خطر|مالك$/i.test(m.text)) { 
     responses = [ 
'*مرحبا اكتب نقطه اوامر لعرض اوامري*'
       
       


     ]; 
 }else if (/^بوت|البوت$/i.test(m.text)) { 
     responses = [ 
'*☣️اسمي خطر*',
'*<https://wa.me/+201030825867> مطوري*',
     ]; 
   }else if (/^بوتي$/i.test(m.text)) { 
     responses = [ 
'*بابا مالك🏌🏻‍♂💔*'
   ]; 
   }else if (/^قلبي|بعشقك|روحي|يروحي$/i.test(m.text)) { 
     responses = [ 
'*اموت انا 🥺*',
'*اكرهك💔*',
'*احبك نص حب 💔*',
]; 
   }else if (/^خول$/i.test(m.text)) { 
     responses = [ 
'* كسمك اتحول 🙁*',
'*زبي في بوقق اتحشر 🫥*',
'*كسمك 🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هاي*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*مـي تو 🥺*',
      '*اموت انا 💀*',
      '*متيجي*',
     ]; 
    
   }else if (/^😂$/i.test(m.text)) { 
     responses = [ 
'*شخس ما تفاعل بي😂*'
     ]; 
   } else if (/^حبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 😆*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'احسن منك',  

     ];
     }else if (/^بتحبني$/i.test(m.text)) { 
     responses = [ 
       'لا طبعن بحب بابا مالك😆',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*شخص ما تفاعل بي ♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا〽️*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'الخير〽️',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*الخير〽️*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^اي$/i.test(m.text)) { 
     responses = [ 
       '*💀ختك عليه*',  
     ];
            }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
       '*الله يسمحك انا محترم*',  
      '*فرقعت بزاز امك〽️*',
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
