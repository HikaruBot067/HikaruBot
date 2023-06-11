let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *TAGALL* ⋘
\n *${text ? text : 'By MarsBotz'}*\n\n`
		      	for (let mem of participants) {
		            teks += `│◦❒ @${mem.id.split('@')[0]}\n`
				}
                teks += `
TagAll Members By wa.me/60199714550`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
