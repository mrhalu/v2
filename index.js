require('./command/command.js')
let {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
let fs = require('fs')
let fetch = require('node-fetch')
let chalk = require('chalk')
let quotes = fs.readFileSync('./lib/quotes.js')
jsonData = JSON.parse(quotes);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  hasilquotes = (randKey.qts)  
  
  
let { color } = require('./lib/color')
let { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
let moment = require("moment-timezone")
let time = moment().tz('Asia/Jakarta').format('HH:mm:ss z')	
let {_wait, getBuffer, h2k, generateMessageID, banner, getGroupAdmins, getRandom, start, success, author, close } = require('./lib/functions');
let { ownerName, botName,SesionName, ownerNumber} = require('./setup/setting.json')
nocache('./command/command.js', module =>  console.log(('|\x1b[1;32m UPDοΈ \x1b[1;37m|'), time, chalk.red(`Update Module`), chalk.green(module)))
nocache('./command/index.js', module =>  console.log(('|\x1b[1;32m UPDοΈ \x1b[1;37m|'), time, chalk.red(`Update Module`), chalk.green(module)))
nocache('./index.js', module =>  console.log(('|\x1b[1;32m UPDοΈ \x1b[1;37m|'), time, chalk.red(`Update Module`), chalk.green(module)))
let _welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

let ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "6281233959206-1604595598@g.us" }, "message": { orderMessage: { itemCount: 500, status: 200, thumbnail: fs.readFileSync(`./database/media/btfbot.jpg`), surface: 200, message: `γ π±ππππ΄ππ΅π»π  π±πΎπ γ`, orderTitle: 'πππ£ ππππππ', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }  



let starts = async (btf = new WAConnection()) => {
    btf.logger.level = 'warn'
    btf.version = [2,2147,16]
    btf.browserDescription = ['MazTamvan','Safari', '3.0']
    console.log(banner)
    console.log(chalk.yellow(`ε½‘ Selamat Datang ${ownerName}`),chalk.yellow(`\nε½‘ Saat ini pukul ${time}`), chalk.green(`\n${hasilquotes}`),chalk.white(`\nβββββββββββββββββββββββββββββββββββ`))
    btf.on('qr', () => {
        console.log(color('[SCAN ME]','red'), color('Silakan Scan  QR  Kode Sekarang π'))
    })
    btf.on('credentials-updated', () => {
		fs.writeFileSync('./setup/session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'π»ππππ πΈπππ ππππππ')
	})
      let sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await btf.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    btf.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./setup/session.json') && btf.loadAuthInfo('./setup/session.json')
    btf.on('connecting', () => {
        start('2', 'π²πππππππππ ππ ππ-πππ')
    })
    btf.on('open', () => {
        success('2', 'ππππππ π²ππππππ')
        start('π¬')
    })
    btf.on('reconnecting', () => {
        start('2', 'ππ-π²πππππππππ ππ ππ-πππ')
    })
    await btf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./setup/session.json', JSON.stringify(btf.base64EncodedAuthInfo(), null, '\t'))

buttonss = [
        { buttonId: `.menu`, buttonText: { displayText: 'πΎπΊ' }, type: 1 },
    ]

    buttonMessagee = {
        contentText: `π±ππ πππ ππππ π°ππππππππ`,
        footerText: `Β©πππ£ππππππ2022`,
        buttons: buttonss,
        headerType: 1
    }
     console.log(('|\x1b[1;32m DEVοΈ \x1b[1;37m|'), time, chalk.red(`SEND RESPON TO DEV  BOT`))

     console.log(('|\x1b[1;32m DEVοΈ \x1b[1;37m|'), time, chalk.green(`SUCCES REPORT`))
   
    btf.sendMessage(`6281233959206@s.whatsapp.net`, buttonMessagee, MessageType.buttonsMessage, {
        caption: 'βπ±ππππππππ’ π±ππ',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,

        },
        quoted: ftroli, sendEphemeral: true
    })    
    
    
    
    btf.on('chat-update', async (message) => {
    require('./command/command.js')(btf, message, _welkom)
    })
    
	btf.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			let mdata = await btf.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await btf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://api-btfzex.herokuapp.com/api/canvas/welcome2?username=${pushname}&groupname=${mdata.subject}&membercount=-&profile=${ppimg}&background=${ppimg}&apikey=kfL8EfHc'
			
		
			}
			let buff = await getBuffer(ppimg)
			masuk =`*π·ππππ @${num.split('@')[0]}*\n*πππππππ π³πππππ  π³π ${mdata.subject}*\n\nπππππππ πππππ .ππππ πππππ πππππππ πππ`
			gbutsan = [{buttonId:'.hallo',buttonText:{displayText:'πππ΄π»π»π²πΎπΌπ΄ π±π΄π±π°π½'},type:1}]
			mhan = await btf.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: ppimg})
let buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `${botName}οΈ`, 
buttons: gbutsan,
headerType: 4 }
			btf.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./database/media/btfbot.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await btf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://api-btfzex.herokuapp.com/api/canvas/welcome2?username=${pushname}&groupname=${mdata.subject}&membercount=-&profile=${ppimg}&background=${ppimg}&apikey=kfL8EfHc'
			}
			let buff = await getBuffer(ppimg)
			keluar =`πππππππ πππππππ @${num.split('@')[0]}\nπ³ππππ πππππ ππππ πππ\nπ±ππ  πΌππππππ π³ππ ππ ππππππ`
			gbutsan = [{buttonId:'.dadah',buttonText:{displayText:'ππ³π°π³π°π·'},type:1}]
			mhan = await btf.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: ppimg})
let buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `${botName}οΈ`,
buttons: gbutsan,
headerType: 4 }
			btf.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./database/media/btfbot.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = 'β¦β'
let thu = await btf.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*πΏ π πΎ πΌ πΎ π π΄ - π³ π΄ π π΄ π² π π΄ π³*\n\n${shp} ππππππππ: @${num.split('@')[0]}\n\n${shp} π±ππ : ${thu.status}\n\n${shp} ππππ : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} πΆππππ: ${mdata.subject}\n\nπΏπππππ πππππ`
btf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|RCV|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = 'β¦β'
thu = await btf.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*π³ π΄ πΌ πΎ π π΄ - π³ π΄ π π΄ π² π π΄ π³*\n\n${shp} ππππππππ: @${num.split('@')[0]}\n\n${shp} π±ππ : ${thu.status}\n\n${shp} ππππ : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} πΆππππ: ${mdata.subject}\n\nπΌπππππ ππ ππ  ππππππ`
btf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|RCV|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	btf.on('group-update', async (anu) => {
		let metdata = await btf.groupMetadata(anu.jid)
    	let fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6281233959206-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;btf;;;\nFN:btf\nitem1.TEL;waid=6281233959206:6281233959206\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|RCV|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|RCV|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nβ’ Deskripsi Baru : ${anu.desc}`
    btf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|RCV|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|RCV|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    btf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|RCV|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

btf.on('CB:action,,call', async json => {
        let callerId = json[2][0][1].from;
        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${ownerName}` + '\n' + `ORG:Developer ${botName}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${ownerNumber}` + ':+' + `${ownerNumber}` + '\n' + 'END:VCARD'
        btf.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        btf.sendMessage(callerId, `${botName}`, { displayname: `${ownerName}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${botName}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/media/btfbot.jpg'),sourceUrl:`https://wa.me/6281233959206?text=Assalamualaikum`}}})
        await sleep(5000)
        await btf.blockUser(callerId, "add")
        })
        
	btf.on('message-delete', async (m) => {
if (!m.key.fromMe && !antidelete) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = btf.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = btf.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
btf.copyNForward(m.key.remoteJid, m.message)
btf.sendMessage(m.key.remoteJid, `β·\`\`\`Anti Delete\`\`\`

β’ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
β’ \`\`\`Tipe : ${c3type}\`\`\`
β’ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}


function nocache(module, cb = () => { }) {
    console.log(('|\x1b[1;32m SETοΈ \x1b[1;37m|'), time, chalk.red(`Setup Module`), chalk.green(module))
    
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}


starts()
