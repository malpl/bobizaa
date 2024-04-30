let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامــر*'
            },
            body: {
              text: '🧛 افتح القائمة بواسطة الزر\n🦹 𝑴𝑨𝑳𝑰𝑲🍷🇰🇼 رقم المطور♡01030825867 '
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الفوتوشوب',
                            title: '.فوتوشوب',
                            
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.اوامر',
                            
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['مهام']

export default handler
