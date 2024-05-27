let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*مالك بيحبك🦹💜*'
            },
            body: {
              text: '😎 افتح القائمة بواسطة الزر\n🧛 𝑴𝑨𝑳𝑰𝑲🍷🇰🇼 \n   https://wa.me/+201030825867 '
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا صديقي 🧛',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'فوتوشوب',
                            title: '.الفوتوشوب',
                            description: '',
                            id: '.الفوتوشوب'
                          },
                          {
                            header: 'قسم الاستيكرات',
                            title: '.استيكرات',
                            description: '',
                            id: '.استيكرات'
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

handler.help = ['مميزات']
handler.tags = ['main']
handler.command = ['مميزات']

export default handler
