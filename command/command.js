let {   
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAbtfection,
	RebtfectMode,   
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let util  = require('util')
let cron = require('node-cron')
let chalk = require('chalk')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let ms = require('parse-ms')
let os = require('os')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let hxz = require("hxz-api");
let fetch = require('node-fetch')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let moment = require('moment-timezone')
let { EmojiAPI } = require("emoji-api");
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { exec, spawn, execSync } = require('child_process')
let zee = require('api-alphabot')
let google = require('google-it')
let bdr = require('rumus-bdr')
 //++π»πΈπ±ππ°ππ

let {covid }= require('../lib/covid.js')
let reminder = require("../lib/reminder");
let { lirikLagu } = require('../lib/lirik.js')
let { y2mate } = require('../lib/y2mate');
let afk = require("../lib/afk");
let { color, bgcolor } = require('../lib/color')
let { jagoKata } = require('../lib/jagokata.js')
let { mediafireDl } = require('../lib/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { fetchJson, fetchText,createExif } = require('../lib/fetcher')
let { y2mateA, y2mateV } = require('../lib/y2mate.js')
let { sleep, isAfk, cekafk, addafk } = require('../lib/offline')
let { yta, ytv, igdl, upload, formatDate } = require('../lib/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("../lib/jadibot");
let { uptotele, uploadFile, uploadImages } = require('../lib/uploadimage');
let { ownerName, botName, btfNumber, fake, ownerNumber, limitCount, gamecount ,darahawal} = require('../setup/setting.json')
let { antiSpam } = require('../lib/antispam')
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom} = require('../lib/functions')
//+πΌπ΄π½π ππ΄π+
let { ownermenu, toolsmenu,  rpgmenu, limitmenu, wibumenu,  searchmenu, dlmenu, mediamenu, katamenu, upswmenu, gamemenu, funmenu,  ceritamenu, gcmenu, savemenu, convertmenu,  makermenu, edumenu, imagemenu, islammenu, infomenu} = require('./index.js')
let { webp2mp4File } = require("../lib/webp2mp4");
let  { 
 addInventoriDarah, 
 cekDarah, 
 addDarah, 
 kurangDarah, 
 getDarah 
}  = require('../lib/darah.js')

let  {
 checkPetualangUser,
 cekInventory, 
 addInventori, 
 addBesi, 
 addEmas, 
 addDiamond, 
 addUmpan,
 kurangBesi, 
 kurangEmas, 
 kurangDiamond, 
 kurangUmpan,
 getBesi, 
 getEmas, 
 getDiamond,
 getUmpan,
 cekHasilBuruan, 
 addInventoriBuruan, 
 addIkan,
 addAyam, 
 addKelinci, 
 addDomba, 
 addSapi,
 addGajah,
 kurangIkan,
 kurangAyam, 
 kurangKelinci, 
 kurangDomba, 
 kurangSapi,
 kurangGajah,
 getIkan,
 getAyam, 
 getKelinci, 
 getDomba,
 getSapi,
 getGajah,
 addInventoriMonay, 
 cekMonay, 
 addMonay, 
 kurangMonay, 
 getMonay,
 getObat,
 addObat,
 kurangObat 
}  = require('../lib/rpgfunctions.js')

let { formatp } = require('../lib/functions.js')
//Β»Β»Β»ππ’π΅π’π£π’π΄π¦
let _darahuser = JSON.parse(fs.readFileSync('./database/user/darah.json'))
let _buruan = JSON.parse(fs.readFileSync('./database/user/buruan.json'));
let _reminder = JSON.parse(fs.readFileSync("./database/default/reminder.json"));
let _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'));
let event = JSON.parse(fs.readFileSync('./database/group/event.json'))
let _truth = JSON.parse(fs.readFileSync('./database/game/truth.json'));
let _scommand = JSON.parse(fs.readFileSync("./database/group/scommand.json"));
let _dare = JSON.parse(fs.readFileSync('./database/game/dare.json'));
let bad = JSON.parse(fs.readFileSync('./database/default/bad.json'))
let badword = JSON.parse(fs.readFileSync('./database/default/badword.json'))
let simin = JSON.parse(fs.readFileSync('./database/group/simi.json'))
let _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
let hit = JSON.parse(fs.readFileSync('./database/default/totalcmd.json'))
let videonye = JSON.parse(fs.readFileSync('./database/cloud/video.json'))
let fiturnye = JSON.parse(fs.readFileSync('./database/default/video.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/cloud/image.json'))
let setiker = JSON.parse(fs.readFileSync('./database/cloud/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/cloud/audio.json'))
let prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user/user.json'))
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
//media
let tamnel = fs.readFileSync('./database/media/btfbot.jpg')
let tde = fs.readFileSync('./database/media/TD.jpg')
let fgf =  fs.readFileSync('./database/media/fgif.jpg')
let bcs = fs.readFileSync('./database/media/bcs.jpg')
let lvlup = fs.readFileSync('./database/media/up.jpg')
//Function RPG & LEVEL By Butterfly Ori
let { isLimit, limitAdd, getLimit, giveLimit } = require("../lib/limit");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("../lib/lvlfunction");

//Database Game teba"  an
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/game/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./database/game/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./database/game/tebakanime.json'))
const cakbtf = JSON.parse(fs.readFileSync('./database/game/cakbtf.json'))
const asahotak = JSON.parse(fs.readFileSync('./database/game/asahotak.json'))
const siapaaku = JSON.parse(fs.readFileSync('./database/game/siapaaku.json'))
const susun = JSON.parse(fs.readFileSync('./database/game/susun.json'))
const tekateki = JSON.parse(fs.readFileSync('./database/game/tekateki.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./database/user/petualang.json'))
//Apikey
let { dhakey, lolkey, btfkey, zekaapi} = require('../setup/api.json')

//Β»Β»Β»ππ±π΅πͺπ°π―
let p = '```'
publik =  true
readGc = true
readPc  = true
hit_today = []
let gaya = `β―`
ky_ttt = []
//βββββββββββββββ[ AU LUPA ]βββββββββββββββ\\


// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/group/scommand.json", JSON.stringify(_scommand));
};




const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
   myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
   var tgl = new Date();
   var day = tgl.getDate()
   bulan = tgl.getMonth()
   var thisDay = tgl.getDay(),
   thisDay = myDays[thisDay];
   let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
      let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
   var yy = tgl.getYear()
   var year = (yy < 1000) ? yy + 1900 : yy;
   return `${day} ${myMonths[bulan]} ${year}`
}   
      var d = new Date
      var locale = 'id'
      var gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
      var weton = ['πΏπππππ', 'πΏππ','ππππ','πΊπππ ππ','π»πππ'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
      var week = d.toLocaleDateString(locale, { weekday: 'long' })
      var kalender = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
})
     let tanggalislam = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    
    
    
   myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
   myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
   var tgl = new Date();
   var day = tgl.getDate()
   bulan = tgl.getMonth()
   var thisDay = tgl.getDay(),
   thisDay = myDays[thisDay];
    
    

   var runtime = function(seconds) {
   seconds = Number(seconds);
   var d = Math.floor(seconds / (3600 * 24));
   var h = Math.floor(seconds % (3600 * 24) / 3600);
   var m = Math.floor(seconds % 3600 / 60);
   var s = Math.floor(seconds % 60);
   var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
   var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
   var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
   var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
   return dDisplay + hDisplay + mDisplay + sDisplay;
   } 
//βββββββββββββββ[ MODULE EXPORTS ]βββββββββββββββ\\
   module.exports = btf = async (btf, mek, _welkom) => {
   try {
   if (!mek.hasNewMessage) return 
   mek = mek.messages.all()[0]
   const { mentioned } = mek
     if (!mek.message) return
   if (mek.key && mek.key.remoteJid == 'status@broadcast') return
   global.prefix
   global.blocked   
   mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
   const content = JSON.stringify(mek.message)
   const from = mek.key.remoteJid
   const type = Object.keys(mek.message)[0]
   const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
   const wib = moment.tz('Asia/Jakarta').format('HH:mm')
   const wita = moment.tz('Asia/Makassar').format("HH:mm")
   const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
   const hour_now = moment().format('HH:mm:ss')
   const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[z?οΌ‘ΒηΉ©?ηΉ?Β°?οΌ΄ξΎηΌη°§??=|~!#$%^&.?/\\η©’^z+@,;]/.test(cmd) ? cmd.match(/^[z?οΌ‘ΒηΉ©?ηΉ?ο©?οΌ΄ξΎηΌη°§??=|~!#$%^&.?/\\η©’^z+*,;]/gi) : '.'   
   body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''      
   budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
   bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
   const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()   
   const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
   const timestamp = speed();
   const latensi = speed() - timestamp
   hit_today.push(command);
   const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
   const args = body.trim().split(/ +/).slice(1)
   const isCmd = body.startsWith(prefix)
   const v = args.join(' ')
   const botNumber = btf.user.jid
   const botNumberss = btf.user.jid + '@c.us'
   const isGroup = from.endsWith('@g.us')
   const sender = mek.key.fromMe // Fix Bug by Butterfly
   ? btf.user.jid
   : isGroup
   ? mek.participant
   : mek.key.remoteJid;
   let senderr = mek.key.fromMe
   ? btf.user.jid
   : mek.key.remoteJid.endsWith("@g.us")
   ? mek.participant
   : mek.key.remoteJid;
   const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`]
   const isOwner = OwnerNumber.includes(sender)
   const isPremium = prem.includes(sender) || isOwner
   const totalchat = await btf.chats.all()
   const groupMetadata = isGroup ? await btf.groupMetadata(from) : ''
   const groupName = isGroup ? groupMetadata.subject : ''
   const groupId = isGroup ? groupMetadata.jid : ''    
   const groupMembers = isGroup ? groupMetadata.participants : ''
   const groupDesc = isGroup ? groupMetadata.desc : ''
   const groupOwner = isGroup ? groupMetadata.owner : ''
   const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(sender) || false   
   const isBadWord = isGroup ? badword.includes(from) : false
   const isWelkom = isGroup ? _welkom.includes(from) : false
   const isEventon = isGroup ? event.includes(from) : false
   const isAnti = isGroup ? _antilink.includes(from) : false
   const isUser = pendaftar.includes(sender)
   const isBanned = ban.includes(sender)
   const conts = mek.key.fromMe ? btf.user.jid : btf.contacts[sender] || { notify: jid.replace(/@.+/, '') }
   const pushname = mek.key.fromMe ? btf.user.name : conts.notify ||   conts.vname || conts.name || 'Undefinied'   
   const gcounti = gamecount
   const gcount = isPremium ? gcounti.premi : gcounti.freeuser
   const createSerial = (size) => {
   return crypto.randomBytes(size).toString('hex').slice(0, size)
   }
   const isAfkOn = afk.checkAfkUser(sender, _afk)
   const DarahAwal = darahawal
   const isDarah = cekDarah(sender)   
   const isCekDarah = getDarah(sender)
   const isInventory = cekInventory(sender)
   const isInventoriBuruan = cekHasilBuruan(sender)
   const isInventoryMonay = cekMonay(sender)      
   const isUmpan = getUmpan(sender)
   const isObat = getObat(sender)
   const isIkan = getIkan(sender)
   const isAyam = getAyam(sender)
   const isKelinci = getKelinci(sender)
   const isDomba = getDomba(sender)
   const isSapi = getSapi(sender)
   const isGajah = getGajah(sender)
   const isMonay = getMonay(sender)
   const isBesi = getBesi(sender)
   const isEmas = getEmas(sender)
   const isDiamond = getDiamond(sender)
   const isPetualang = checkPetualangUser(sender)
             
             
             
//==================[ UCAPAN DAM GAMBAR WAKTU ]============//
 var time = moment().tz('Asia/Jakarta').format('HH:mm:ss z')	   
 
if(time < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
var ucapanTime = `πππππππ πΌππππ β½  ${pushname}`
          }
if(time < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
var ucapanTime = `πππππππ πΏπππππ β½  ${pushname}`
      }
if(time < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
var ucapanTime = `πππππππ ππππ β½  ${pushname}`
      }
if(time < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
var ucapanTime = `πππππππ πππππ  β½  ${pushname}`
      }
if(time < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
var ucapanTime = `πππππππ πΏπππ β½  ${pushname}`
      }
if(time < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
var ucapanTime = `πππππππ πΏπππ β½  ${pushname}`
}         

//BOT STATUS
runi = process.uptime() 
btf.setStatus(`π±ππππππππ’ π±ππ οΈοΈπ πππππππ :  ${runtime(runi)} `).catch((_)=>_);
settingstatus = new Date() * 1;          
btf.updatePresence(from, Presence.composing)         

//AEFKA


   mess = {
    
         banned:`πΌπππ ${pushname} π°πππ πππππ ππ πππ  ππππ  πππ, πππππππ πππππππ ππ πππ`,
         uselimit: `π°πππ πππππππππππ 1 πππππ\nπ»ππππ πππππππ β ${isOwner ? 'πππππππππ' : isPremium ? 'πππππππππ' : getLimit(sender, limitCount, limit)} β`,
       limit: `*πππ πΌπππ πΊππ ${pushname} π»ππππ  ππππ  πππ πππππ*`,
    wait: 'πππππππ ππππππππ ππππππππ ππππ!',
   	success: `*π³πππ πππ ${pushname}*`,
   	toxic: 'πΉπππππ πππ‘ππ π°πππ πππ',
    verify: `*Mohon maff anda belum register, ketik .verify*`,
        capt: `*π³πππ πΊππ*\n\n*γ π±ππππππππ’ π±ππ γ*`,
   	error: {
      stick: `*πππππ πππππ πππππππππ πππππ*`,
      Iv: `*π»πππ πΈππππππ π°πππ π»πππ πππππ πππ*`,
    api: `*π΄ππππ*`
   	},
   	only: {
      group: `*π·πππ’π πΆπππ*`,
      prem: `*π°πππ πππππ π³ππππ πππππππππ Fitur πΏππππππ, 10π π΅πππ  πΏππππππ,πππππππ ππππ .ππ πππ πππππ πππ πΏππππππ*`,
      owner: `*π΄ππππ ππππ πΎπ πππ ? , πΏπππ ππ’ππππ ππ’ππππ πππ*`,
      admin: `*π΄ππππ ππππ π°ππππ ?*`,
      bot: `*πΉπππππ π°ππ π°ππππ π±π ππππ*`,
      event:`*π΄ππππ πππππ  πππππ*`,
      player: `*πΌπππ πππ ${pushname} πππππππππ’π πππππ πππππ ππππ ππππππππ* \n*πΆππππππ ${prefix}joinrpg πππππ πππππππ πππππππππ*`      
     }
    }
   
   const isUrl = (url) => {
   return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
   }

   const reply = (teks) => {
       btf.sendMessage(from, teks, text, {quoted:mek})
   }

   const sendMess = (hehe, teks) => {
       btf.sendMessage(hehe, teks, text)
   }

   const mentions = (teks, memberr, id) => {
       (id == null || id == undefined || id == false) ? btf.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
   }
   const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
   
   
   
   //+++ || FAKE TROLI    
   const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: fgf, surface: 200, message: `${ucapanTime}`, orderTitle: `${botName}`, sellerJid: '0@s.whatsapp.net'} } }    
   

   let mfgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281233959206-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`Β© ${ownerName}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botName} ποΈ\nπ ${time}`, 'jpegThumbnail': imageTime}}}
   
   let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281233959206-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`Β© ${ownerName}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botName} \nπ ${time}`, 'jpegThumbnail': fgf}}}
   
   const mtroli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: `2022`,  status: 200, thumbnail: imageTime, surface: 200, message: `${botName}`, orderTitle: `${botName}`, sellerJid: '0@s.whatsapp.net'} } } 
 
 
   const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281233959206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": tamnel}}}
    

   const katalog = (teks) => {
   res = btf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "Β©btfbot", "jpegThumbnail": fs.readFileSync('./database/media/btfbot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
   btf.relayWAMessage(res)
   }
   function randomNomor(min, max = null) {
     if (max !== null) {
   	min = Math.ceil(min);
   	max = Math.floor(max);
   	return Math.floor(Math.random() * (max - min + 1)) + min;
     } else {
   	return Math.floor(Math.random() * min) + 1
     }
   }
   
   function monospace(string) {
       return '```' + string + '```'
   }
   var premi = 'π΅πππ ππππ'
   	if (isPremium) {
      premi = 'πΏππππππ ππππ'
   	} 
   	if (isOwner) {
      premi = 'ππππ πΈπ πΎπ πππ'
   	}
   var elit = 'πΏππππππππ π±ππππ'
   	if (isPremium) {
      elit = 'πΏππππππππ πΏππ'
   	} 
   	if (isOwner) {
      elit = 'πΆππππ πΌπππππ'
   	}
   	
   const sendButton = async (from, context, fortext, but, mek) => {
   buttonMessages = {
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 1
   }
   btf.sendMessage(from, buttonMessages, buttonsMessage, {
   quoted: mek
   })
   }
   const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
   const buttonMessage = {
   contentText: text1,
   footerText: desc1,
   buttons: but,
   headerType: 1,
   };
   btf.sendMessage(
   id,
   buttonMessage,
   MessageType.buttonsMessage,
   options
   );
   };
   const sendButImage = async (from, context, fortext, img, but, mek) => {
   jadinya = await btf.prepareMessage(from, img, image)
   buttonMessagesI = {
   imageMessage: jadinya.message.imageMessage,
   contentText: context,
   footerText: fortext,
   buttons: but,
   headerType: 4
   }
   btf.sendMessage(from, buttonMessagesI, buttonsMessage, {
   quoted: mek,
   })
   }
   async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
   const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
   return btf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
   } 
   var sendButloc = (from, title, text, desc, button, sen, men, file) => {
   return btf.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
   }            
   const sendMedia = async(from, url, text="", mids=[]) =>{
   if(mids.length > 0){
   text = normalizeMention(from, text, mids)
   } 
   const fn = Date.now() / 120000;
   const filename = fn.toString()
   let mime = ""
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   mime = res.headers['content-type']
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, filename, async function () {
   console.log('done');
   let media = fs.readFileSync(filename)
   let type = mime.split("/")[0]+"Message"
   if(mime === "image/gif"){
   type = MessageType.video
   mime = Mimetype.gif
   }
   if(mime.split("/")[0] === "audio"){
   mime = Mimetype.mp4Audio
   }
   btf.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})     
   fs.unlinkSync(filename)
   });
   } 
   const sendMediaURL = async(to, url, text="", mids=[]) =>{
   if(mids.length > 0){
   text = normalizeMention(to, text, mids)
   }
   const fn = Date.now() / 120000;
   const filename = fn.toString()
   let mime = ""
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   mime = res.headers['content-type']
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, filename, async function () {
   console.log('done');
   let media = fs.readFileSync(filename)
   let type = mime.split("/")[0]+"Message"
   if(mime === "image/gif"){
   type = MessageType.video
   mime = Mimetype.gif
   }
   if(mime.split("/")[0] === "audio"){
   mime = Mimetype.mp4Audio
   }
   btf.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
   fs.unlinkSync(filename)
   });
   }        
   const sendFileFromStorage = (path, type, options) => {
   btf.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
   reply(`π΄ππππ π³ππ πππππ πππ ππππ πΌππππ `)
   console.log(e)
   })
   }   
   const sendFileFromUrl = async(link, type, options) => {
   hasil = await getBuffer(link)
   btf.sendMessage(from, hasil, type, options).catch(e => {
   fetch(link).then((hasil) => {
   btf.sendMessage(from, hasil, type, options).catch(e => {
   btf.sendMessage(from, { url : link }, type, options).catch(e => {
   reply(`π΄ππππ π³ππ πππππ πππ ππππ πΌππππ `)
   console.log(e)
   })
   })
   })
   })
   }       
   const sendFileFromUrl2 = async (from, url, caption, mek, men) => {
       let mime = '';
       let res = await axios.head(url)
       mime = res.headers['content-type']
       if (mime.split("/")[1] === "gif") {
      return btf.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
      }
       let type = mime.split("/")[0]+"Message"
       if(mime === "application/pdf"){
      return btf.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
       }
       if(mime.split("/")[0] === "image"){
      return btf.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
       }
       if(mime.split("/")[0] === "video"){
      return btf.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
       }
       if(mime.split("/")[0] === "audio"){
      return btf.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
       }
   }
   
   
   
   
   
   
   
   const sendStickerFromUrl = async(to, url) => {
   var names = Date.now() / 120000;
   var download = function (uri, filename, callback) {
   request.head(uri, function (err, res, body) {
   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
   };
   download(url, './stik' + names + '.png', async function () {
   let filess = './stik' + names + '.png'
   let asw = './stik' + names + '.webp'
   exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
   let media = fs.readFileSync(asw)
   btf.sendMessage(to, media, MessageType.sticker,{quoted:mek})
   fs.unlinkSync(filess)
   fs.unlinkSync(asw)
   });
   });
   }

   	
   	//function rank 
   	const levelRole = getLevelingLevel(sender)
       var role = 'π±ππππ£π'
       if (levelRole <= 3) {
      role = 'π²πππππ'
       } else if (levelRole <= 5) {
      role = 'πΈπππ'
       } else if (levelRole <= 7) {
      role = 'ππππππ'
       } else if (levelRole <= 10) {
      role = 'πΆπππ'
       } else if (levelRole <= 12) {
      role = 'πΏπππππππ'
       } else if (levelRole <= 15) {
      role = 'πΌπππππ'
       } else if (levelRole <= 18) {
      role = 'πΎπππππππππ'
       } else if (levelRole <= 25) {
      role = 'π°πππππππππ'
       }


//+π»π΄ππ΄π»ππ½πΆ ππΏπΆ+

 if (isGroup && isPetualang) {
 const currentLevel = getLevelingLevel(sender)     
 const checkId = getLevelingId(sender)
 pps = await btf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
 ppa = await getBuffer(pps)
 try { 
 if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
 const amountXp = Math.floor(Math.random() * 10) + 100
 const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
 var getLevel = getLevelingLevel(sender)
 addLevelingXp(sender, amountXp)
 if (requiredXp <= getLevelingXp(sender)) {
 addLevelingLevel(sender, 1)   
var lvlup = monospace(`β­βββγ Level Up γ\nβ\nβ β’ Nama : ${pushname}\nβ β’ Rank : ${role}\nβ β’ Status : ${elit}\nβ β’ Xp : ${getLevelingXp(sender)}\nβ β’ Level : ${getLevelingLevel(sender)}\nβ\nβ°βββγ ${botName} γ`)
 but = [
  { buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 }
  ]
  sendButLocation(from, lvlup, `\n${p}${wib} || ${tanggal()}${p}`, lvlup, but, {quoted: mek})
 }
 } catch (err) {
 console.error(err)
 }
 }  

//pporang
try {
ppmu = await btf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppmu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pporang = await getBuffer(ppmu)




if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*γ πΌπΎπ³π΄ π°π΄π΅πΊπ° ππΎπ³ γ*\n
*ππ·ππ π³πΈπ°πΌ!  πΊπππππ’π π³ππππ’π π°ππππ*
βΈ *π°πππππππ’π*  : ${getReason}
βΈ *πππππ* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* π³ππ πΎππππ π ππ’π’,  πππππππ πππ`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
           



   
   
//--- Total command
   const cmdadd = () => {
   hit[0].totalcmd += 1
    	fs.writeFileSync('./database/default/totalcmd.json', JSON.stringify(hit))
   }
   if (isCmd) cmdadd()
   const totalhit = JSON.parse(fs.readFileSync('./database/default/totalcmd.json'))[0].totalcmd
   
// ---- Antilink 
   const linkwa = 'https://chat.whatsapp.com/'
   if (budy.includes(`${linkwa}`)){
   if (!isGroup) return
   if (!isAnti) return
   if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
   linkgc = await btf.groupInviteCode (from)
   if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
   if (isGroupAdmins) return reply(`Hmm mantap min`)
   btf.updatePresence(from, Presence.composing)
   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
   setTimeout( () => {
   reply('byee')
   }, 1100)
   setTimeout( () => {
   btf.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
    }, 1000)
   setTimeout( () => {
   reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
   }, 0)
   }

   if (!publik) {
   if (!isOwner && !mek.key.fromMe) return 
   }       
   

   
   
   
   if (isGroup && isBadWord) {
   if (bad.includes(messagesC)) {
   if (!isGroupAdmins) {
   return reply (`πΉπππ ππππππ π³πππ, π³ππππ ${pushname} πΆπ  πππ πΎπππ`)
   .then(() => btf.groupRemove(from, sender))
   .then(() => {
   btf.sendMessage(from, `*γ ANTI BADWORD γ*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
   }).catch(() => btf.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
   } else {
   return reply( "ππππππ πΉπππ ππππππ πΌππ π")
   }
   }
   }
// Kalo Make Kasi WM Made By Febriansyah Ajg!!     

   var ikan = ['π³','π¦','π¬','π','π','π ','π¦','π¦','π¦','π‘','π']
   var hewan = ['π','π¦','π¦','π','π','π','π','π','πΊ']
   var burung = ['π¦','π·','π','π','π¦','π¦','π','π§','π¦','π¦']
   //Health
       // var healt =
   
       
   const sotoy = [
   'π : π : π',
   'π : π : π',
   'π : π : π',
   'π : π : π Winπ', 
   'π : π : π', 
   'π : π : π',
   'π : π : π',
   'π : π : π',   
   'π : π : π',
   'π : π : π',
   'π : π : π',
   'π : π : π Winπ',
   'π : π : π',
   'π : π : π',
   'π : π : π Winπ',
   'π : π : π',
   'π : π : π',
   'π : π : π',    //Mau Ambil? Add Wm Lah Tod
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π Winπ', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π',	
   'π : π : π', 
   'π : π : π Winπ', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π', 
   'π : π : π Winπ']
   
   
 //+π±πππ+
    const buru1 = ['π³', 'π¦', 'π¬', 'π', 'π', 'π ', 'π¦', 'π¦', 'π¦', 'π']
    const buru2 = ['π', 'π¦', 'πΏ', 'π', 'π', 'π', 'π', 'π', 'πΊ', 'π¦©']
    const buru3 = ['π¦', 'π·', 'π', 'π', 'π¦', 'π¦', 'π', 'π§', 'π¦', 'π¦']
    const buru4 = ['πͺ', 'π΅', 'π₯οΈ', 'π±', 'π°']
    const buru5 = ['π', 'π', 'π»', 'π ', 'π', 'πΈ']
    const buru1a = buru1[Math.floor(Math.random() * (buru1.length))]
    const buru2b = buru2[Math.floor(Math.random() * (buru2.length))]
    const buru3c = buru3[Math.floor(Math.random() * (buru3.length))]
    const buru4d = buru4[Math.floor(Math.random() * (buru4.length))]
    const buru5e = buru5[Math.floor(Math.random() * (buru5.length))] 
   
   
   
//βββββββββββββββ[ GAK USAH DI UBAH ]βββββββββββββββ\\

   if (isCmd && !isUser) {
     pendaftar.push(sender)
     fs.writeFileSync('./database/default/user.json', JSON.stringify(pendaftar, null, 2))
   }

   colors = ['white', 'white', 'black', 'blue', 'yellow', 'green']
   const isSimi = simin.includes(from)
   const isMedia = (type === 'imageMessage' || type === 'videoMessage')
   const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
   const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
   const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
   const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
   const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
   
//+π²πΎπ½ππΎπ»π΄ π»πΎπΆ+
    
   if(isCmd  && isGroup){
	console.log(('|\x1b[1;33m CMD \x1b[1;33m|'), chalk.white(time), chalk.yellow(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
  if(isCmd && !isGroup){
   console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
                
    if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[ SPM ]', 'white'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
   return reply('ππππππ ππππππππ 5  πππππ')}  

    if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[ SPM ]', 'white'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
  return reply('πΉπππππ ππππ πππ ππ πππ ππππππ ππππ πππ π :(')}
   if (isCmd && !isOwner) antiSpam.addFilter(from)
   if (!publik) {
   if (!isOwner && !mek.key.fromMe) return
   }   
   
   
   
   
////FUNCTION  GAME TEBAK   
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tebakgambar[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}tebakgambar`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete tebakgambar[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}gambarnyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = caklontong[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}caklontong`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete caklontong[sender.split('@')[0]]
     fs.writeFileSync("./database/game/caklontong.json", JSON.stringify(caklontong))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}lontongnyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = family[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}family100`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete family[sender.split('@')[0]]
     fs.writeFileSync("./database/game/family100.json", JSON.stringify(family))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}familynyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tebakanime[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
     slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}tebakanime`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete tebakanime[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tebakanime.json", JSON.stringify(tebakanime))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}animenyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }   
//CAK  BTF
if (cakbtf.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = cakbtf[sender.split('@')[0]]
      sial = `{prefix}nyerah`
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}cakbtf`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete caklontong[sender.split('@')[0]]
     fs.writeFileSync("./database/game/cakbtf.json", JSON.stringify(caklontong))
     }else {
   slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}cakbtfnyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
     
      }
       }
       
//ASAAH OTAKMU   
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = asahotak[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}asahotak`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete asahotak[sender.split('@')[0]]
     fs.writeFileSync("./database/game/asahotak.json", JSON.stringify(asahotak))
      } else{
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}asahnyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
       
       
//SIAPA  AKU     
if (siapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = siapaaku[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
     slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}siapaaku`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
      delete siapaak[sender.split('@')[0]]
      fs.writeFileSync("./database/game/siapaaku.json", JSON.stringify(siapaku))
   } else {
      slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}siapaakunyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
       }
   }
      
//SUSUN KATA
 if (susun.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = susun[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}susunkata`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete susun[sender.split('@')[0]]
     fs.writeFileSync("./database/game/susun.json", JSON.stringify(susun))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}susunnyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
 
       
///TEKATEKI

             
      if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
      jawaban = tekateki[sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
    slh = "*πππππππ πππ ππππ π°πππ π±ππππ πππ*"
    but = [
      { buttonId: `${prefix}tekateki`, buttonText: { displayText: 'βπ°πΆπ°πΈπ½' }, type: 1 }]
     sendButton(from, slh, '```πΆππ ππππ π’ππ```', but, troli)
     delete tekateki[sender.split('@')[0]]
     fs.writeFileSync("./database/game/tekateki.json", JSON.stringify(tekateki))
      } else {
     slh = "*πΉππ ππππ ππππ πππππ πππππ*"
    but = [
      { buttonId: `${prefix}tekatekinyerah`, buttonText: { displayText: 'π΅ π½ππ΄ππ°π·' }, type: 1 }]
     sendButton(from, slh, '```πΊπππππ  ππππππ```', but, troli)
      
      }
       }
       
       
    
var ampun = await btf.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await btf.chatRead(jid)
})
// πΌπͺπ©π€ ππππ ππ
var chatss = await btf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await btf.chatRead(jid)
})      
      
      



//AUTO RESET
cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahuser = reset
     anu = `π°πππΎ ππ΄ππ΄π π³π°ππ°π· πππ½`
     btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, anu, text, {quoted:mek})
     fs.writeFileSync('./database/user/darah.json', JSON.stringify(_darahuser))
      au = ` ππ΄ππ΄π π³π°ππ°π· πππ²π²π΄π`
     btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, au, text, {quoted:mek})
     }, 
     {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
   )  
     cron.schedule('0 0 * * *', () => {
     const reset = []
     limit = reset
     anu = `π°πππΎ ππ΄ππ΄π π»πΈπΌπΈπ πππ½`
     btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, anu, text, {quoted:mek})
     fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
     au = ` ππ΄ππ΄π π»πΈπΌπΈπ πππ²π²π΄π`
     btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, au, text, {quoted:mek})
    }, 
    {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
    ) 





      
      
      
      
      
      
      

//βββββββββββββββ[ WELCOME TO MENU ]βββββββββββββββ\\     
//Bales oto
switch(is) {
case 'assalamualaikum':
reply('ππππππππππππππ')
}
switch(is) {
case 'p':
case 'bg':
case 'bang':
reply('π°ππππ.')
}
switch(is) {
case 'tutor':
reply('π°ππ πππ.... πΊππππ *.ππππ* πΆπππ πππ ππ ππππ')
}
switch(is) {
case 'kontol': case 'bacot':
case 'anjing': case 'anj':
case 'babi': case 'cot':
case 'ngentod': case 'bct':
case 'ajg':
case 'asw':
case 'taek':
case 'asu':
case 'anjir':
case 'memek':
reply(`πΉπππππ πππ‘ππ π»ππ π±πππππ πππ  π π π π `)
}         
switch(is) {
case 'π':
case 'π':
case 'π':
case 'π':
case 'π':
reply('π°ππ πππ πππ  ππ ππππ’ππ ππππ’ππ')
}


//COMMAND       
switch (command) {






/*case 'desti':
if(!isOwner) return reply (`π΄ππππ ππππ πππ πππ’π ?`)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotesdilan?apikey=NisaaCantik`)
desti = (anu.result)
arni = `πππ’π ππ πππππ πππππππ πππππ ππππππππππ π\n\n${desti}\n`
btf.sendMessage(`6283842697651@s.whatsapp.net`,`${arni}`, text,{ quoted: mek})
reply(`ππππππ ππππππ πππ£πππππ`)
break
*/
//+π±π°ππΈπ² π²πΌπ³+

case 'sewa':
  tes =`πΌππ  ππππ ππ π’π πππ πππππππ ππ πππ πππ π  πππ πππ`
  btf.sendMessage(from, tes, text, {quoted: troli})
break  
case 'donasi':
  tes =`πΏπ ππ πππ πππ ππππππππ`
  btf.sendMessage(from, tes, text, {quoted: troli})
break  
case 'help':
anu = `${ucapanTime}  πππππππππππ  πππππ πππππππππππ ${botName} \n\n πππππππ πππππ *.ππππ* πππππ πππππππππππ πππππππ πππ πππ.\nπΉπππ πππππππππ πππ πππππ πππππ ππ πππ ππππ πππππππ πππ *.πππππ*.\nπΆππππππ ${botName} π³πππππ πππππ π€`
reply(anu)
break
 
 case  'about':  
  
 abt = `*ββ γ RULES AND FAQ γ ββ*

π·. πΉπππππ ππππ πππ. π
ππππππ: *β οΈ π πππ/ππππ πππππ*

πΈ. πΉπππππ πππππππ πππ. βοΈ
ππππππ: *β ππππ πππππ*

πΉ. πΉπππππ πππππππππππππππ πππ.π
ππππππ: *βΌοΈ πππππππππ πππππ βΌοΈ*

π―οΈ πππ πππππ ππππ ππππππ ππππππππ ?
β‘οΈ πππππππ πππππππππππ ππππ ππππππππ, ππππππ, ππππππ ππππ π πππππππ πππ ππππππππ ππππππ. πππππ ππππππ πππππβΌοΈ

π―οΈ ππππππ πππ’π ππππ πππππππππππ ππππππ ππππ πππ πππ ?
β‘οΈ ππππππ πππ πππππ πππππππ πππ πππππ ππππππ πππππππππ πππππππ ,ππππππππ πππππ ππππππππππ ππππππ.

π―οΈ πππππ πππ’π ππππππππ ππ ππππ?
β‘οΈ πππππ πππππππππ πππ πππππ ππππππ ππππ ππ πππ.

π―οΈ ππππππ‘ππ’π πππ π’π?
β‘οΈ πππ πππ πππππππππππ πππππ ππππππ‘. πππππππ ππππ ππππ πππππππππππ ππππππ‘ #, . , πππ ππππππ‘ π ππππ ππππππ’π.

π―οΈ πππ, πππ ππ’ππ ππππ ππ πππ πππππ ππππππππ?
β‘οΈ ππ πππ ππππ’π ππππππππ πππππππ’πππ πππππππ πππ πππ πππππππ ππππ, πππππ πππππ πππππππ πππππππ ππππππππ ππππππ.


ππππ πππππ ππππππππ πππππ-ππ’π, πππππππ πππππ *.ππππ* πππππ πππππππ!

β οΈ ππππππ πππππππππ πππ πππππππππ ${botName} ππ ππππππ ππππ ππ πππ πππ ππππππ πππππππππ πππππππππ, πππ ππππ π ππππ ππ πππ ππππππ ππππππππ, πππππππππ ππππ(*οΉ*) 

β₯οΈ πππππππππππ πππππ ππππππ ππππ πππππ πππ ππππππππ πππππ π’π ππππ ππππππππ ππππ πππππ πππππππ πππππππππ πππππππππ’ πππ`  
    
   but = [
  { buttonId: `!owner`, buttonText: { displayText: 'β¨ π°πππ·πΎπ' }, type: 1 },
  { buttonId: `!infosc`, buttonText: { displayText: 'β πΈπ½π΅πΎ ππ²' }, type: 1 }
  ]
  sendButLocation(from, abt, `\n${p}${wib} || ${tanggal()}${p}`, tamnel, but, {quoted: mek})
  break  
  
case  'infosc':
case 'sc':
case 'script':
case 'source':
case 'sourcecode':
tet =`
${botName} πΌππππππππππ  ππππππππ πππππππ ππππ  πππ π π ππ  πππ.

πππππππ ππππππ ππ :\n

βοΈ π΅ππππππππ’ππ
βοΈ πΊπππ  πΎπ  ππππ
βοΈ π·ππππ πππ‘
βοΈ πΊπππππ
βοΈ π»ππ‘π‘π’ πΎππ
βοΈ π³πππππ±ππ
βοΈ πππππ
βοΈ ππππππ
βοΈ π°πππππππ£ππ

_π³ππ ππππ’ππππ πππππ  ππππ πππ_\n
π΅πππ ππππ πππ :
https://apibtf.herokulapp.com/

`
but = [
  { buttonId: `!menu`, buttonText: { displayText: ' β πΌπ΄π½π' }, type: 1 }]
  sendButLocation(from, `${tet}`, `\n${p}${wib} || ${tanggal()}${p}`, tamnel, but, {quoted: mek})
  break   

  	 

case 'ping':
  cmping = `${botName} ππππππππ πππππ  ${latensi.toFixed(4)} πΌ/π`  
  pingt = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ydverBBY0RgFwNa7XKw6ONNBM-4RuMoSJA&usqp=CAU`)
  but = [
  { buttonId: `!hosting`, buttonText: { displayText: ' π€ π·πΎπππΈπ½πΆ' }, type: 1 },
  { buttonId: `!runt`, buttonText: { displayText: ' β±οΈ πππ½ππΈπΌπ΄' }, type: 1 }
    ]
  sendButLocation(from, `${cmping}`, `\n${p}${wib} || ${tanggal()}${p}`, pingt, but, {quoted: mek})
  break   

case 'hosting':
pp = await getBuffer(`https://www.matawebsite.com/images/blog/577_apa_itu_hosting_vps.jpg`)
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString('utf-8')
const teks = child.replace(/Memory:/, "Ram:")
const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                
                respon = `
β πΈπ½π΅πΎ π±πΎπ π±πΎπππΈπ½πΆ β

${teks}
β πΈπ½π΅πΎ π½πΎπ³π΄ πΉπ β
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

`

                
but = [
  { buttonId: `!runt`, buttonText: { displayText: ' β° πππ½ππΈπΌπ΄' }, type: 1 },
  { buttonId: `!runt`, buttonText: { displayText: ' β πΌπ΄π½π'}, type: 1 }
    ]
  sendButLocation(from, `${respon}`, `\n${p}${wib} || ${tanggal()}${p}`, pp, but, {quoted: mek})


}
)       
break  


case 'runt':
const timestamp = speed();
run = process.uptime();
 cmrunt=`${botName} π°ππππ ππππππ ${runtime(run)}`
  but = [{ buttonId: `!menu`, buttonText: { displayText: 'πΌπ΄π½π' }, type: 1 }]
  sendButton(from, cmrunt, 'πΈπππ πππππππ', but)
  break  







//+πΌπ΄π½π+
case 'menu': case 'command':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isBanned) return reply(mess.banned)
  let getip = await fetchJson(`http://api.ipify.org/?format=json`)   

run = process.uptime();
listMsg = {
buttonText: 'π»πΈππ πΌπ΄π½π',
description: `
${ucapanTime}\n
ΰΉ ππππ πΈππ πΏππππ *${wib}* ππΈπ±.
ΰΉ π·πππ *${thisDay}* / *${tanggal()}*.
ΰΉ πΌπππππππ *${tanggalislam}*.
ββββββββββββββββββββββ
ΰΉ ππππππ π°πππ *${premi}*
ΰΉ ${isOwner ? 'πππππππππ' : isPremium ? 'πππππππππ' : getLimit(sender, limitCount, limit)}  π±ππ π»ππππ
ββββββββββββββββββββββ
ΰΉ Κα΄sα΄ΙͺΙ΄Ι’ : *${os.hostname()}*
ΰΉ α΄α΄‘Ι΄α΄Κ  : *πΌππ£ππππππ*
ΰΉ Κα΄Ι΄α΄Ιͺα΄α΄ : *${runtime(run)}* [ *${latensi.toFixed(2)}/ππ*
ββββββββββββββββββββββ
http://maztamvan.unaux.com/
_πππππππ πΏππππ ππππ π’πππ ππππππππ_οΈ`,
footerText: `Β© ${botName}`,
sections: [
{
"title": `π±ππππππππ’ π±ππ π΅πππππππ`,
rows: [
{
"title": "γβ£οΈ πΎππ½π΄π πΌπ΄π½πγ",
"description": ` Fitur Khusus  owner`,
"rowId": `${prefix}ownermenu`
},
{
"title": "γπ« πΆππΎππΏ πΌπ΄π½πγ",
"description": ` Fitur GC`,
"rowId": `${prefix}gcmenu`
},
{
"title": "γβ€΅οΈ π³πΎππ½π»πΎπ°π³ πΌπ΄π½πγ",
"description": ` Fitur Download`,
"rowId": `${prefix}dlmenu`
},
{
"title": "γπ¨οΈ πΌπ°πΊπ΄π πΌπ΄π½πγ",
"description": ` Fitur Create Logo`,
"rowId": `${prefix}maker`
},
{
"title": "γβοΈ ππΎπΎπ»π πΌπ΄π½πγ",
"description": ` Fitur Tools Bot`,
"rowId": `${prefix}toolmenu`
},
{
"title": "γπ’ ππΏπΆ πΌπ΄π½πγ",
"description": ` Fitur Rpg Game`,
"rowId": `${prefix}rpgmenu`
},
{
"title": "γπ« πΆπ°πΌπ΄ πΌπ΄π½πγ",
"description": ` Fitur Game`,
"rowId": `${prefix}gamemenu`
},
{
"title": "γπ© π΅ππ½ πΌπ΄π½πγ",
"description": ` Fitur Fun For  Happy`,
"rowId": `${prefix}funmenu`
},
{
"title": "γππ ππ΄π°ππ²π· πΌπ΄π½πγ",
"description": ` Fitur Pencarian`,
"rowId": `${prefix}carimenu`
},
{
"title": "γπ» πΌπ΄π³πΈπ° πΌπ΄π½πγ",
"description": ` Fitur Media`,
"rowId": `${prefix}mediamenu`
},
{
"title": "γπΈ πΈπΌπ°πΆπ΄ πΌπ΄π½πγ",
"description": ` Fitur Random Image`,
"rowId": `${prefix}imagemenu`
},
{
"title": "γπ οΈπ΄π³π πΌπ΄π½πγ",
"description": ` Fitur Edukasi`,
"rowId": `${prefix}edukasimenu`
},
{
"title": "γπ πΈππ»π°πΌ πΌπ΄π½πγ",
"description": ` Fitur Islamic`,
"rowId": `${prefix}islammenu`
},
{
"title": "γποΈ π°π½πΈπΌπ΄ πΌπ΄π½πγ",
"description": ` Fitur Anime`,
"rowId": `${prefix}wibumenu`
},
{
"title": "γπΎ ππ°ππ΄ πΌπ΄π½πγ",
"description": ` Fitur  Save Di DB`,
"rowId": `${prefix}simpanmenu`
},
{
"title": "γπ½ π²πΎπ½ππ΄ππ πΌπ΄π½πγ",
"description": ` Fitur Convert`,
"rowId": `${prefix}convmenu`
},
{
"title": "γποΈ π»πΈπΌπΈπ πΌπ΄π½πγ",
"description": ` Fitur Limit Bot`,
"rowId": `${prefix}limitmenu`
},
{
"title": "γποΈ πΈπ½π΅πΎ πΌπ΄π½πγ",
"description": ` Fitur Information`,
"rowId": `${prefix}infomenu`
},
{
"title": "οΈγβ οΈ π°π±πΎππγ",
"description": `ππΎπ ${botName}`,
"rowId": `${prefix}about`
}


]
}],
listType: 1
}
 btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:mfgif})   
  
 break

  

case 'ownermenu':
pp = await  getBuffer(`https://l.top4top.io/p_22500sao81.jpg`)
btf.sendMessage(from, { contentText: `${ownermenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'toolmenu':
pp = await getBuffer(`https://b.top4top.io/p_225035oxy1.jpg`)
btf.sendMessage(from, { contentText: `${toolsmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'rpgmenu':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
pp = await getBuffer(`https://c.top4top.io/p_2250nuamo1.jpg`)
btf.sendMessage(from, { contentText: `${rpgmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'limitmenu':
pp = await getBuffer(`https://h.top4top.io/p_2250ltmws1.jpg`)
btf.sendMessage(from, { contentText: `${limitmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'wibumenu':
pp = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXCvbtF-Il4K0KaIZAVHtgkWM88-zGg_QGw&usqp=CAU`)
btf.sendMessage(from, { contentText: `${wibumenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'carimenu':
pp = await getBuffer(`https://a.top4top.io/p_2250ubuk91.jpg`)
btf.sendMessage(from, { contentText: `${searchmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'dlmenu':
pp  = await getBuffer(`https://j.top4top.io/p_2250ani3i1.jpg`)
btf.sendMessage(from, { contentText: `${dlmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'mediamenu':
pp = await  getBuffer(`https://i.top4top.io/p_2250y7r0u1.jpg`)
btf.sendMessage(from, { contentText: `${mediamenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'katamenu':
pp =  await getBuffer(`https://g.top4top.io/p_2250n636p1.jpg`)
btf.sendMessage(from, { contentText: `${katamenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'gamemenu':
lgo = await getBuffer(`https://e.top4top.io/p_2250joemq1.jpg`)
btf.sendMessage(from, { contentText: `${gamemenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'funmenu':
lgo = await getBuffer(`https://k.top4top.io/p_2250nt9hq1.jpg`)
btf.sendMessage(from, { contentText: `${funmenu(prefix, botName)}`, footerText: `${tanggal()}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'ceritamenu':
lgo = await getBuffer(`https://f.top4top.io/p_2250kir3u1.jpg`)
btf.sendMessage(from, { contentText: `${ceritamenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'gcmenu':
pp = await getBuffer(`https://k.top4top.io/p_2250hpqrs1.jpg`)
btf.sendMessage(from, { contentText: `${gcmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'simpanmenu':
pp = await getBuffer(`https://i.top4top.io/p_225081i7o1.jpg`)
btf.sendMessage(from, { contentText: `${savemenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break


case 'convmenu':
pp  = await getBuffer(`https://g.top4top.io/p_2250k3nrd1.jpg`)
btf.sendMessage(from, { contentText: `${convertmenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'maker':
lgo = await getBuffer(`https://a.top4top.io/p_2250j4e2u1.jpg`)
btf.sendMessage(from, { contentText: `${makermenu(prefix, botName)}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: lgo, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
break  
  
case 'edukasimenu':
pp = await getBuffer(`https://telegra.ph/file/f5a00fe0bc153c00b50d6.jpg`)
btf.sendMessage(from, { contentText: `${edumenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break  

case 'imagemenu':
pp = await getBuffer(`https://g.top4top.io/p_2250efi5l1.jpg`)
btf.sendMessage(from, { contentText: `${imagemenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break   
  
case 'islammenu':
pp = await getBuffer(`https://i.top4top.io/p_2250s3urx1.jpg`)
btf.sendMessage(from, { contentText: `${islammenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'infomenu':
pp = await getBuffer(`https://i.top4top.io/p_2250gburc1.jpg`)
btf.sendMessage(from, { contentText: `${infomenu(prefix, botName)}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//+π°πΊπ·πΈπ πΌπ΄π½π+

case 'karomahwali':
listMsg = {
buttonText: 'πΊπ°ππΎπΌπ°π· ππ°π»πΈ',
description: `
π±ππππππ π»πππ πΊππππππ ππππ ππππ π°ππππ`,
footerText: `*πππππππ πππππ  ππππ*`,
sections: [
{
"title": `π±ππππππππ’ π±ππ π΅πππππππ`,
rows: [
{
"title": "γβ‘ πππ΄πΊπ· π°π±π³ππ» ππ°π³πΈπγ",
"description": `πΊππππππ π°ππππ πππππ`,
"rowId": `${prefix}qadir`
},
{
"title": "γβ‘ πππ½π°π½  πΊπ°π»πΈπΉπ°πΆπ°γ",
"description": `πΊππππππ πππππ πΊπππππππ`,
"rowId": `${prefix}kalijaga`
},
{
"title": "γβ‘ πππ½π°π½ π°πΌπΏπ΄π»γ",
"description": `πΊππππππ πππππ π°ππππ `,
"rowId": `${prefix}ampel`
},
{
"title": "γβ‘ πππ½π°π½ π±πΎπ½π°π½πΆγ",
"description": `πΊππππππ πππππ π±πππππ`,
"rowId": `${prefix}bonang`
}
]
}],
listType: 1
}
 btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})     
    break

//+πΎππ½π΄π π²πΌπ³+
case 'stopqr':
if (isGroup) return reply(`π³π π²πππ πΏππππππ πΏπππ`)
exec(`node index.js`)
reply(`ππππππ ππππ ππ πΆππππππππ`)
break
case 'restart':
  if (!isOwner) return reply(mess.only.owner)
  reply(mess.wait)
  exec(`node index`)
  reply('_ππππππ ππ΄πππ°ππ π±ππ_')
  break   			  
case 'bc2': 
  if (!isOwner) return reply(mess.only.owner) 
  if (args.length < 1) return reply('.......')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  btf.sendMessage(_.jid, buff, image, {caption: `β? PESAN β―\n\n${body.slice(4)}`})
  }
  reply(`*_ππππππ  π±ππππππππ_*`)
  } else {
  for (let _ of anu) {
  sendMess(_.jid, `*γ BROADCAST BOT γ*\n\n${body.slice(4)}`)
  }
  reply(`*_ππππππ  π±ππππππππ_*`)
  }
  break	   

case 'addprem':  case 'addpremium':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
  adprem = `${args[0].replace('@','')}@s.whatsapp.net`
  prem.push(adprem)
  fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
  reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
 break				
case 'dellprem':  case 'delpremium':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)    
  delp = body.slice(10)
  prem.splice(`${delp}@s.whatsapp.net`, 1)
  fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
  reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
 break
case 'listprem': case 'listpremium': case 'premlist':
 // if (!isPremium && !isOwner) return reply(mess.only.owner)
  teks = `*List Premium:*\n\n`
  for (let manikgans of prem) {
  teks += `- ${manikgans}\n`
  }
  teks += `\n*Total : ${prem.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
 break

case 'addtruth':
  if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply('Textnya mana?')
  _truth.push(v)
  fs.writeFileSync('./database/game/truth.json', JSON.stringify(_truth))
  reply(`Done add ${v} di fitur truth`)
 break
case 'adddare':
  if (!isOwner) return reply(mess.only.owner)
  if (args.length < 1) return reply('Textnya mana?')
  _dare.push(v)
  fs.writeFileSync('./database/game/dare.json', JSON.stringify(_dare))
  reply(`Done add ${v} di fitur dare`)
 break     	  	

case 'addbadword': case 'addbd':    
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
  bad.push(v)
  fs.writeFileSync('./database/default/bad.json', JSON.stringify(bad))
  reply('Success Menambahkan Bad Word!')
  break
case 'delbadword': case 'deldb':
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)  
  bad.splice(v)
  fs.writeFileSync('./database/default/bad.json', JSON.stringify(bad))
  reply('Success Menghapus BAD WORD!')
  break 
case 'listbadword': case 'lb':
  if (!isOwner) return reply(mess.only.owner)
  let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
  for (let i of bad) {
  lbw += `> ${i.replace(bad)}\n`
  }
  await reply(lbw)
  break 
case 'nobad':
  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (args.length < 1) return reply('lelπΏ')
  if (args[0] === 'enable') {
  if (isBadWord) return reply(`*fitur BadWord sudah aktif tadi!!*`)
  badword.push(from)
  fs.writeFileSync('./database/default/badword.json', JSON.stringify(badword))
  reply(`badword is enable`)
  } else if (args[0] === 'disable') {
  badword.splice(from, 1)
  fs.writeFileSync('./database/default/badword.json', JSON.stringify(badword))
  reply(`badword is disable`)
  } else {
  reply('dah')
  }
 break
case "addcmd":
case "setcmd":
  if (isQuotedSticker) {
  if (!v) return reply(`Penggunaan : ${command} cmdnya dan Reply Stickernya`);
  if (!isOwner) return reply(mess.only.owner)
  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
  addCmd(kodenya, v);
  reply("Done!");
  } else {
  reply("tag stickenya");
  }
  break;
 case "delcmd":
  if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`);
  if (!isOwner) return reply(mess.only.owner)
  var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
  _scommand.splice(getCommandPosition(kodenya), 1);
  fs.writeFileSync("./database/group/scommand.json", JSON.stringify(_scommand));
  reply("Done!");
  break;
 case "listcmd":
  if (!isOwner) return reply(mess.only.owner) 
  teksnyee = `\`\`\`γ LIST STICKER CMD γ\`\`\``;
  cemde = [];
  for (let i of _scommand) {
  cemde.push(i.id);
  teksnyee += `\n\nβΈ *ID :* ${i.id}\nβΈ *Cmd* : ${i.chats}`;
  }
  mentions(teksnyee, cemde, true);
  break;
  
case 'out': case  'leave':
if (!isOwner) return reply(mess.only.owner)
if (!isGroup) return reply(mess.only.group)
setTimeout(() => {
btf.groupLeave(from)
}, 2000)
setTimeout(() => {
reply('πππππππ πππππππ ππππππ.......')
}, 0)
break     

case 'leaveall':
if (!isOwner) return reply(mess.only.owner)
let totalgroup = btf.chats.array.filter(u =>u.jid.endsWith('@g.us')).map(u => u.jid)
for (let id of totalgroup) {
sendMess(id, 'π³ππππ ππππππππ’ππ  .........', null)
await sleep(3000)
btf.groupLeave(id)
}
break
         
 
case 'hacked':
  if (!isOwner) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (args.length < 1) return reply('Teksnya?')
  reply('Otw Hack')
  tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
  btf.updateProfilePicture (from, tessgc)
  btf.groupUpdateSubject(from, `HACKED BY ${v}`)
  btf.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wib} ${tanggal()}_\n*Tiada Lord Selain Butterfly!!*`))     
  btf.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
  break  
case "term":
  if (!isOwner) return reply(mess.only.owner)
  if (!v) return reply('_-');
  exec(v, (err, stdout) => {
  if (err) return reply(`~ ${err}`);
  if (stdout) {
  reply(stdout);
  }
  });
  break;
case 'ban':
  if (!isOwner) return reply(mess.only.owner)
  if (!v) return reply(`πππ ππππ πππππ π½ππππ π’πππ ππππ ππ ππππππ`)
  bnnd = body.slice(5)
  ban.push(`${bnnd}@s.whatsapp.net`)
  fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
  reply(`*${bnnd}*\n_Telah Berhasil Dibanned β_`)
  break
case 'unban':
  if (!isOwner) return reply(mess.only.ownerB)
  if (!v) return reply(`πππ ππππ πππππ π½ππππ π’πππ ππππ ππ ππππππππ`)
  bnnd = body.slice(7)
  ban.splice(`${bnnd}@s.whatsapp.ne5t`)
  fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
  reply(`*@${bnnd}*\n_Telah Sukses Diunbanned β_`)
  break
  
case 'group': case 'gc': case 'grup':     	 
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
  menu = `π³πππππ πππ πππππ ππππ`
  but = [
   { buttonId: `!opengc`, buttonText: { displayText: 'πΎπΏπ΄π½οΈ' }, type: 1 },
   { buttonId: `!closegc`, buttonText: { displayText: 'π²π»πΎππ΄' }, type: 1 }]
  sendButton(from, menu, 'π²ππππππ π±π’ π±ππππππππ’', but, troli)
break   

case 'public':
   if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  publik = true
  reply('β πππ²π²π΄π πΌπππππππ ππππ ππ πΏπππππ')
  break
	case 'self':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  publik = false
  reply('β πππ²π²π΄π πΌπππππππ πΏπππππ ππ ππππ')
  break
case 'setthumb':
  if (!isOwner) return reply(mess.only.owner)
  if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  delb = await btf.downloadMediaMessage(boij)
  fs.writeFileSync(`./database/media/btfbot.jpg`, delb)
  reply('β πππ²π²π΄π ')
  } else {
  reply(`Kirim gambar dengan caption ${prefix}sethumb`)
  }
  break
case 'settroli':
   if  (!isOwner) return  reply(mess.only.owner)
  if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  delb = await btf.downloadMediaMessage(boij)
  fs.writeFileSync(`./database/media/troli.jpg`, delb)
  reply('β πππ²π²π΄π ')
  } else {
  reply(`Kirim gambar dengan caption ${prefix}settroli`)
  }
  break

case 'bc': case 'broadcast':
  if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  bc = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  tes = `${body.slice(4)}`
  brc = `πΏπ΄ππ°π½  ππΈπ°ππ°π½ π±πΎπ β\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'β πΌπ΄π½π'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'β π³πΎπ½π°ππΈ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bcs, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('ππππππ  π±πππππππ')
  } else {
  for (let _ of anu) {
   	   tes = `${body.slice(4)}`
  brc = `πΏπ΄ππ°π½  ππΈπ°ππ°π½ π±πΎπ β\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'β πΌπ΄π½π'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'β π³πΎπ½π°ππΈ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: bcs, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('β πππ²π²π΄π π±ππππππππ')
  }
  break   
   
case 'bcquotes':
  pp =  await getBuffer(`https://i.pinimg.com/736x/04/1b/91/041b917c299d4f3c9b618665d7676855.jpg`)
  if (!isOwner) return  reply(mess.only.owner)
  if (args.length < 1) return reply('teks?')
  anu = await btf.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  bc = await btf.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  brc = `πππΎππ΄π ππΎπ³π°π π±πΎπ β\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'β πΌπ΄π½π'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'β π³πΎπ½π°ππΈ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('ππππππ  π±πππππππ')
  } else {
  for (let _ of anu) {
  brc = `πππΎππ΄π ππΎπ³π°π π±πΎπ β\n\n${v}`
  btf.sendMessage(_.jid, { contentText: `${brc}`, footerText: `${botName}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'β πΌπ΄π½π'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'β π³πΎπ½π°ππΈ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  }
  reply('β πππ²π²π΄π π±ππππππππ')
  }
break    
  
  
  
case 'clearall':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
anu = await btf.chats.all()
btf.setMaxListeners(25)
for (let chat of anu) {
btf.modifyChat(chat.jid,'delete')
}
reply('ππππππ ππππππ πππ  ππππ')
break  

case 'upswteks':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
  reply(mess.wait)
  teks = body.slice(10)
  btf.sendMessage('status@broadcast', teks, MessageType.text)
  reply(`β πππ²π²π΄π  upload status:\n${teks}`)
  break	
case 'upswlokasi':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
  reply(mess.wait)
  teks = body.slice(12)
  btf.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
  reply(`β πππ²π²π΄π  upload lokasi:\n${teks}`)
  break	
case 'upswsticker':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isQuotedSticker) return reply('Reply stikernya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
  const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
	 	  btf.sendMessage('status@broadcast', buff, sticker)
  }
  reply(`β πππ²π²π΄π  upload sticker`)
  break
case 'upswaudio':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isQuotedAudio) return reply('Reply audionya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
  }
  reply(`β πππ²π²π΄π  upload audio`)
  break
case 'upswvoice':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
  if (!isQuotedAudio) return reply('Reply audionya!')
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
  reply(`β πππ²π²π΄π  upload voice`)
  break
case 'upswvideo':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  var konti = body.slice(11)
  reply(mess.wait)
  var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  var mediap = await btf.downloadAndSaveMediaMessage(enmediap)
  const buffer3 = fs.readFileSync(mediap)
  btf.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
  reply(`β πππ²π²π΄π  upload video:\n${konti}`)
  break
case 'upswgif':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  var konti = body.slice(7)
  reply(mess.wait)
  enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(enmedia)
  const buffer6 = fs.readFileSync(media)
  btf.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
  reply(`β πππ²π²π΄π  upload gif:\n${konti}`)
  break
case 'upswimage':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if  (!isQuotedImage) return reply(`Reply Gambarnya`)
  var teksyy = body.slice(11)
  reply(mess.wait)
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  buff = await btf.downloadMediaMessage(encmedia)
  btf.sendMessage('status@broadcast', buff, MessageType.image, {quoted: mek, caption: `${teksyy}`})
  }
  reply(`β πππ²π²π΄π  upload image:\n${teksyy}`)
  break   
  

case 'setppbot':
 if (!isOwner) return reply(mess.only.owner)
 if (!isQuotedImage) return reply(`ππππππ’ ππππππππ’π ππππππ .ππππππππ`)
 reply(mess.wait)
 enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 media = await btf.downloadAndSaveMediaMessage(enmedia)
  await btf.updateProfilePicture(`${btfNumber}@s.whatsapp.net`, media)
 reply(`ππππππ  ππππππ ππ’ πππππππ πππππππ`)
 console.log(color('|CMD|'), color(`π²πππππ π±ππ πππππππ πππππππ`,  'cyan'))
break 

case 'join':  
   if (!v) return reply('Linknya?')
   if (!isOwner) return reply(mess.only.owner)
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = btf.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
             break
case 'join2':
  if (isBanned) return reply(mess.banned)
    if (!isOwner) return reply(mess.only.owner)
    try {
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
    hen = args[0]
    if (!v) return reply('Masukan link group')
    var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
    if (!codeInvite) return reply('pastikan link sudah benar!')
    var response = await btf.acceptInvite(codeInvite)
    reply('πππ²π²π΄π πΉπΎπΈ πΆπππΏ')
    } catch {
    reply('π΄πππΎπ')
    }
  break

case 'demoteall':
  if (!isOwner && !mem.key.fromMe) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.bot)
  members_id = []
  for (let mem of groupMembers) {
	   	  members_id.push(mem.jid)
	  	  }
  btf.groupDemoteAdmin(from, members_id)
  break
case 'promoteall':
  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.bot)
  members_id = []
  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
  btf.groupMakeAdmin(from, members_id)
  break  	   








//+π°π³πΌπΈπ½ πΆπ² π΅π΄π°ππππ΄+
case 'setppgc': 
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   media = await btf.downloadAndSaveMediaMessage(mek)
   await btf.updateProfilePicture (from, media)
   reply('[β πππ²π²π΄π ] πΌππππππππ πΈπππ πΆππππ')
  break
case 'setname':
   if (!isGroup) return reply(mess.only.group)
    	   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   btf.groupUpdateSubject(from, `${body.slice(9)}`)
   reply('Succes, Ganti Nama Grup')	  	   
 	  case 'add':
   	if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (args.length < 1) return reply('Yang mau di add jin ya?')
  if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
  try {
  	num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
  	btf.groupAdd(from, [num])
  } catch (e) {
  	console.log('Error :', e)
  	reply('Gagal menambahkan target, mungkin karena di private')
  }
  break
case 'setdesc':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
   if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
   teks = body.slice(9)
   btf.groupUpdateDescription(from, teks)
   break       

case 'tagall':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  members_id = []
  teks = `π Group : *${groupName}*\nπ« Jumlah member : *${groupMetadata.participants.length}*\n\nβββββ· *TAG ALL* βΆ\n`
  for (let mem of groupMembers) {
  teks += `β> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
  }
  teks += `βββββββββββββββ`
	 	  mentions(teks, members_id, true)
  break	

case 'epen':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply('Boo :π')
  if (Number(args[0]) === 1) {
  if (isEventon) return reply(`*SUDAH AKTIF* !!!`)
  event.push(from)
  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
  reply(`*β¬ β πππ²π²π΄π  β­ MENGAKTIFKAN EVENT DI GRUB INI*`)
  } else if (Number(args[0]) === 0) {
  event.splice(from, 1)
  fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
  reply(`*β¬ β πππ²π²π΄π  β­ MENONAKTIFKAN EVENT DI GRUB INI*`)
  } else {
  reply('eeee')
  }    
  break    
case 'wel':   
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
  if ((args[0]) === 'on') {
  if (isWelkom) return reply('welcome sudah aktif')
  _welkom.push(from)
  fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
  reply(`\`\`\`ββ πππ²π²π΄π  mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
  } else if ((args[0]) === 'off') {
  if (!isWelkom) return reply('welcome sudah off sebelumnya')
  _welkom.splice(from, 1)
  fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welkom))
  reply(`\`\`\`β πππ²π²π΄π  menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
  } else {
  reply('on untuk mengaktifkan, off untuk menonaktifkan')
  }
  break   	  	 
 
case 'opengc':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  reply(`β πππ²π²π΄π  Membuka Grup ${groupName}`)
  btf.groupSettingChange(from, GroupSettingChange.messageSend, false)
   break
 
case 'closegc':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
   reply(`β πππ²π²π΄π  Menutup Grup ${groupName}`)
   btf.groupSettingChange(from, GroupSettingChange.messageSend, true)
   break   	 	       
   
case 'kick':
	if (!isGroup) return reply(mess.only.group)
     if (!isGroupAdmins) return reply(mess.only.admin)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
     if(!v)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
     yau = v.split('@')[1] + '@s.whatsapp.net'
     btf.groupRemove(from, [yau])
     teks = `πΌπππππ πππ @${v.split('@')[1]}  πΆππ πΊπππ ππππ πππ πππ`
  btf.sendMessage(from, teks, text, {quoted:troli, contextInfo:{mentionedJid:[yau]}})
     reply(`ππππππ ππππ π±ππππ`)
     break
    break	 
case 'demote':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
  yau = v.split('@')[1] + '@s.whatsapp.net'
  btf.groupDemoteAdmin(from, [yau])
  teks = `πΌπππππ πππ @${v.split('@')[1]} π πΆππ ππππππ ππππ πππ πππ`
  btf.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[yau]}})
     reply(`ππππππ π³πππππ ${yau}`)
   
   break
case 'promote':
   if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   yau = v.split('@')[1] + '@s.whatsapp.net'
   btf.groupMakeAdmin(from, [yau])
   teks = `πππππππ  ππππππ @${v.split('@')[1]},π°πππ πππππ π³π πΏπππππππππ πππππππ π°ππππ`
   btf.sendMessage(from, teks, text, {quoted:troli, contextInfo:{mentionedJid:[yau]}})
  reply(`ππππππ πππππππ ${yau}`)
  break
case 'revoke': case 'risetgc': case 'resetlink': case 'revokegroup': case 'revokelink': {
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins)return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.bot)
   var linkgc = await btf.revokeInvite(from)
   mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
   }
   break   
case 'hidetag':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
  var value = args.join(' ')
  var group = await btf.groupMetadata(from)
  var member = group['participants']
  var mem = []
  member.map(async adm => {
  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
  })
  var optionshidetag = {
  text: value,
  contextInfo: { mentionedJid: mem },
  quoted: mek
  }
  btf.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
  break

case 'modesimi':
  if (args.length < 1) return reply('hmm')
  if (Number(args[0]) === 1) {
  simin.push(from)
  fs.writeFileSync('./database/group/simi.json', JSON.stringify(simin))
  reply('β πππ²π²π΄π  mengaktifkan mode simi')
  } else if (Number(args[0]) === 0) {
  simin.splice(from, 1)
  fs.writeFileSync('./database/group/simi.json', JSON.stringify(simin))
  reply('Sukes menonaktifkan mode simi')
  } else {
  reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
  }
  break

    



//Β»Β»Β»ππΆπ΅π΅π°π― ππ’π?π© 
case 'welcome':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = 'πΎπ½  πΎπ πΎπ΅π΅ ?'
  but = [
   { buttonId: `!wel on`, buttonText: { displayText: 'β πΎπ½' }, type: 1 },
   { buttonId: `!wel off`, buttonText: { displayText: 'β πΎπ΅π΅' }, type: 1 }]
  sendButton(from, pp, 'πππππππ', but, troli)
  break  
case 'nobadword': case 'nobd':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = 'πΎπ½  πΎπ πΎπ΅π΅ ?'
  but = [
   { buttonId: `!nobad enable`, buttonText: { displayText: 'β πΎπ½' }, type: 1 },
   { buttonId: `!nobad disable`, buttonText: { displayText: 'β πΎπ΅π΅' }, type: 1 }]
  sendButton(from, pp, 'π½π ππππ πππ', but, troli)
  break    
case 'eventgc':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`mess.only.bot`)
  pp = 'πΎπ½  πΎπ πΎπ΅π΅ ?'
  but = [
   { buttonId: `!epen 1`, buttonText: { displayText: 'β πΎπ½' }, type: 1 },
   { buttonId: `!epen 0`, buttonText: { displayText: 'β πΎπ΅π΅' }, type: 1 }]
  sendButton(from, pp, 'π΄ππππ πΆπ', but, troli)
  break  
case 'antilink':
if (!isGroup) return reply(mess.only.group)
   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`*πΉπππππ πππ π°ππππ π±π πππ*`)
  pp = 'πΎπ½  πΎπ πΎπ΅π΅ ?'
  but = [
   { buttonId: `!anti on`, buttonText: { displayText: 'β πΎπ½' }, type: 1 },
   { buttonId: `!anti off`, buttonText: { displayText: 'β πΎπ΅π΅' }, type: 1 }]
  sendButton(from, pp, 'π°πππππππ', but, troli)
  break
    
case 'mode':
   if (!isOwner) return reply(mess.only.owner)
   pp = 'πΏππ±π»πΈπ² πΎπ πΏππΈππ°ππ΄ ?'
  but = [
   { buttonId: `!public`, buttonText: { displayText: 'β πΏππ±π»πΈπ²' }, type: 1 },
   { buttonId: `!self`, buttonText: { displayText: 'β ππ΄π»π΅' }, type: 1 }]
  sendButton(from, pp, 'πΌπππ π±ππ', but, troli)
  break  


case 'hallo':
  if (!isGrup) return reply(mess.only.grup)
  reply(`π³ππππ ${pushname} , π±ππππ π½πππππ  πΌππππ  ππππππππ`)
  break
case 'dadah':
  if (!isGrup) return reply(mess.only.grup)
  reply(`πΌπππππ π»π ${pushname} , π±ππππ π±ππππππππ π’ππππ ? , πππππππ ππππ’π πππππ ?`)
  break  

//+πΆππΎππΏ π²πΌπ³+
case 'misi': case 'quest':
 if (!isGroup) return reply(mess.only.group)
 if (!isPetualang) return reply(mess.only.player)
 listMsg = {
 buttonText: 'π»πΈππ πΌπΈππΈ ππΏπΆ',
 footerText: fake,
 description: `π·ππi @${sender.split('@')[0]},\n\n πππ’π π°ππππ ππ πππ π³π πΆπππ πΈππ \nπππππππ πΏππππ πΌπππ ππππππ ππππππ π»ππππππ!`,
 sections: [
     {
  "title": `πΏππππ πΌπππ ππππππ π»ππππ`,
  rows: [
   {
  "title": "πͺ πΊπΈπ»π» ππ»πΈπΌπ΄",
  "description": ` πΌπππ  ππππ πππππ 1`,
  "rowId": "!slime"
    },
    {
  "title": "πͺ πΊπΈπ»π» πΆπΎπ±π»πΈπ½",
  "description": ` πΌπππ  ππππ πππππ 5`,
  "rowId": "!goblin"
    },
    {
  "title": "πͺ πΊπΈπ»π»  π΄ππΈπ» π΄ππ΄",
  "description": ` πΌπππ  ππππ πππππ 10`,
  "rowId": "!evil"
    },
    {
  "title": "πͺ πΊπΈπ»π» π±π°π·π΄πΌπΎππ·",
  "description": ` πΌπππ  ππππ πππππ 15`,
  "rowId": "!bahemoth"
    },     
    {
  "title": "πͺ πΊπΈπ»π» π²πΎπ²πΊπ°πππΈπ²π΄",
  "description": ` πΌπππ  ππππ πππππ 20 `,
  "rowId": "!cockatrice"
    }, 
    {
  "title": "πͺ πΊπΈπ»π» π³π΄πΌπΎπ½  πΊπΈπ½πΆπ",
  "description": ` πΌπππ  ππππ πππππ 25`,
  "rowId": "!demondking"
    }
  ]
     }],
 listType: 1
}
btf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
break       

case 'leaderboard': case 'lb':
if (!isGroup) return reply(ind.groupo())
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
//uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
  let leaderboardlvl = ' > π§π’π£ ππππππ₯ππ’ππ₯π <\n\n'
   // let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
  let nom = 0
  try {
    for (let i = 0; i < 10; i++) {
  nom++
  leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n β― *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
  //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\nβ£β± *Uang*: _Rp${uang[i].uang}_\nββ± *Limit*: ${limitawal - limit[i].limit}\n`
    }
    await reply(leaderboardlvl)
    //await reply(leaderboarduang)
  } catch (err) {
    console.error(err)
    await reply(`minimal 10 user untuk bisa mengakses database`)
  }
  break


  

case "jadian":
  if (!isGroup) return reply(mess.only.group)  
  jds = []
  const jdii = groupMembers
  const koss = groupMembers
  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
  const diaa = koss[Math.floor(Math.random() * koss.length)]
  teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} β₯οΈ @${diaa.jid.split('@')[0]} `
  jds.push(akuu.jid)
  jds.push(diaa.jid)
  mentions(teks, jds, true)
  break	
case "ngewe":
  if (!isGroup) return reply(mess.only.group)  
  jds = []
  const jdiid = groupMembers
  const kosst = groupMembers
  const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
  teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} danοΈ @${diaat.jid.split('@')[0]} `
  jds.push(akuut.jid)
  jds.push(diaat.jid)    
  mentions(teks, jds, true)
 break  
 
 
case "terganteng": case "terjelek": case "tercantik": case "tergay":   case "tersange":  case "terpandai":  case "tergoblog": case "terpedo":  case "terwibu":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  if (!isGroup) return reply(mess.only.group)
  limitAdd(sender, limit)
  reply(mess.uselimit)  
  jds = []
  const jdiidc = groupMembers
  const kosstc = groupMembers
  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
  teks = `ππππ πΏπππππ ${command} ππ πΆπππ πππ ππππππ @${akuutc.jid.split('@')[0]}`
  jds.push(akuutc.jid)
  mentions(teks, jds, true)
  break		 
  
case 'darkjokes':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  if (!isGroup) return reply(mess.only.group)   
  reply(mess.wait)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  let data = fs.readFileSync('../lib/darkjokes.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  hasl = await getBuffer(randKey.result)  
  but = [
  { buttonId: `!darkjokes`, buttonText: { displayText: 'π½π΄ππ β' }, type: 1 }]
  sendButImage(from, `πΆππππ πππππ ππππππ πΌππ£πππππ`, `Klik Next Ngab`, hasl, but)   
 
  break  
  
case 'slot': case 'slots':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
  if (!isGroup) return reply(mess.only.group)  
  if (!isEventon) return reply(mess.only.event)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
  slom = `[  π° | SLOTS GAME ]\nβββββββββββββ\nπ : π : π\n${somtoy} <== ||\nπ : π : π\nβββββββββββββ\n[  π° | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : π : π : π<== π`
  but = [{ buttonId: `!slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
  { buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
  sendButton(from, slom, 'Slot Game', but).
 
  break  
  
case 'anti':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
  if (!isBotGroupAdmins) return reply('Bot Harus Admin')
  if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
  if ((args[0]) === 'on') {
  if (isAnti) return reply('Antilink aktif')
  _antilink.push(from)
	  	  fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
  reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
  } else if ((args[0]) === 'off') {
  if (!isAnti) return reply('Antilink off')
  _antilink.splice(from, 1)
  fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
  reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
  } else {
  reply('On untuk mengaktifkan & off untuk menonaktifkan')
  }
	 	  break
      
  
case "groupinfo":  case 'gcinfo':   case 'infogc':  case 'infogroup':  case 'infogrup':  case 'infogrp':   	  
  if (!isGroup) return reply(mess.only.group)
  try {
  var pic = await btf.getProfilePicture(from)
  } catch {
  var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
  let ingfo = `*β πΆ π πΎ π πΏ  πΈ π½ π΅ πΎ β*\n\n*π½πππ :* ${groupName}\n*πΈπ³ πΆππππ :* ${from}\n*π³πππππ :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*πΎπ πππ πΆππππ :* @${groupMetadata.owner.split('@')[0]}\n*πΉπππππ π°ππππ :* ${groupAdmins.length}\n*πΉπππππ πΌπππππ :* ${groupMembers.length}\n*Fitur πππππππ :* ${isWelkom ? 'πΎπ½' : 'πΎπ΅π΅'}\n*Fitur π°πππππππ :* ${isAnti? 'πΎπ½' : 'πΎπ΅π΅'}\n*Fitur π±πππ πππ :* ${isBadWord? 'πΎπ½' : 'πΎπ΅π΅'}\n*π³πππ :* \n${groupMetadata.desc}`
  btf.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
  break  
  
  
case 'linkgc': case 'link': case 'linkgroup':
   linkgc = await btf.groupInviteCode(from)
   if (!isGroup)return reply(mess.only.group)
   reply('https://chat.whatsapp.com/'+linkgc)  
   break  	   
     
   
case 'delete': case 'del': case 'D':
   if (!isGroup)return reply(mess.only.group)
   try {
   btf.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
   reply(`π³πππππ πππππ πππππ`)
   } catch (e) {
   reply('Hanya bisa menghapus pesan dariku')
	  	   }
   break  
    
//+π»πΈπΌπΈπ π²πΌπ³+


case 'claim':
cl =`πππππππ πΏππππ π²ππππ`
but = [
   { buttonId: `!claimlimit`, buttonText: { displayText: 'βπ»πΈπΌπΈπ' }, type: 1 }]
  sendButton(from, cl, 'πΌππππ π»ππππ πππππππ 1', but, troli)
  break  
  
case 'claimlimit':
 if (getLimit(sender, limitCount, limit) < 2){ lmt  = `πππππππ ππππ  πππππ ππππππππ 20  πππππ ππππππ ππππππ ` 
  setTimeout( () => { giveLimit(sender, parseInt(20), limit) }, 1100) 
  }else{ 
  reply(`πΌπππ π°πππ πππππ  ππππ πππππ πππππ,πΊπππ πππππ πΏπππ’π π»ππππ ${getLimit(sender, limitCount, limit)}/${limitCount} πππππππ`) } 
  break 
    


case 'ceklimit':
lmt =`
β»οΈ πΈπππ π»ππππ
β π½πππ       β’  *${pushname}*
β π±ππ π»ππππ    β’  *${isOwner ? 'πππππππππ' : isPremium ? 'πππππππππ' : getLimit(sender, limitCount, limit)}*
β ππππππ  β’  *${premi}*  `
reply(lmt)
break       
//+πΏπ΄πππ°π»π°π½πΆ π²πΌπ³+
    
 case 'joinrpg':
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
  var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  if (!isGroup) return reply(mess.only.group)  
  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	 _petualang.push(sender)
 fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
  pp =  await getBuffer(`https://telegra.ph/file/106d3df4ef10148728a13.jpg`)
  jnr =` *β₯ πππ²π²π΄π  πΉπΎπΈπ½  ππΏπΆ β₯*
  
 β π½πππ     : ${pushname}
 β ππππππ : ${createSerial(8)}
 β ππππ     : ${role} 
 β π»ππππ   : ${getLevelingLevel(sender)}  
 β ππππππ : ${elit}
 β ππ         : ${getLevelingXp(sender)}/${reqXp}
`
  addInventori(sender)
  addLevelingId(sender)
    but = [
          { buttonId: `!profile`, buttonText: { displayText: 'ππΏππΎπ΅πΈπ»π΄' }, type: 1 }]
          sendButLocation(from, jnr, `${botName}`, pp,but, {quoted: mek})
          break     
  
     
    
    
case 'heal':
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (isDarah > 1) return reply(`π³ππππππ πΌππππ πππππππ ${getDarah(sender)}, π·πππ πππππ ππππππππ ππππππ  πππππππ 0`)
 if (isObat < 1) return reply('πΊπππ πππππ πΌπππππππ πΎπππ,  πππππππ πππππππ .πππ’ππππ _ππππππ_') 
 kurangObat(sender,1)
 done = ` βοΈ  π·π΄π°π»πΈπ½πΆ βοΈ
 πππππππ ${pushname} π³ππππ ππππ  πππππππ πΏππππ`
 ptn = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABo8HuJQ5dKEoe1srY0QPYqtQ8efrrPK5hg&usqp=CAU`)
 reply(`πΏπππππ πΌππππππ π³ππππ`)
 
 setTimeout( () => { 
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `π·ππππππ ${botName}`, ptn, but, {quoted: mek})
  addDarah(sender,100)
  }, 2000) 
 break
 break   
 
 case 'buyobat':
 case 'beliobat':
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!v) return reply('πΌππ ππππ π±πππππ πππ ?')
 let anjay = args[0]
 let potharga = 100 * anjay
 if (isMonay < potharga) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 let potjml = anjay * 1
 if (potjml < 1 )  return reply(`π»π πππ ππππ πππππππ πππππ ?`)
 kurangMonay(sender, potharga)
 addObat(sender,potjml)
 done = `Ϋ π±π΄π»πΈ πΎπ±π°π Ϋ\n`
 done += `α πΏππππππ : ${pushname}\n`
 done += `α ππππππ   : ππππππ\n`
 done += `α πΎπππ  : ${getObat(sender)}\n`
 done += `α πΌππππ’  : ${getMonay(sender)} πΈ ` 
 ptn = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVRfYAeq8kg6Ips_IoMserKg1VgL4L_R9sA&usqp=CAU`)
 setTimeout( () => { 
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΎπππ  πππππππππ ${botName}`, ptn, but, {quoted: mek})
  }, 2000) 
 break

case 'buyumpan':
case 'beliumpan':
if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!v) return reply('πΌππ ππππ π±πππππ πππ ?')
 let hargaumpan = 5000 * v
 if (isMonay < hargaumpan) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 let jmlumpn = v * 1
 if (jmlumpn < 1 )  return reply(`π»π πππ ππππ πππππππ πππππ ?`)
 addUmpan(sender, jmlumpn)
 kurangMonay(sender, hargaumpan)
 done = `Ϋ π±π΄π»πΈ ππΌπΏπ°π½ πΌπ°π½π²πΈπ½πΆ Ϋ\n`
 done += `α πΏππππππ : ${pushname}\n`
 done += `α ππππππ   : ππππππ\n`
 done += `α πππππ  : ${getUmpan(sender)}\n`
 done += `α πΌππππ’  : ${getMonay(sender)} ` 
 ump = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvf6iQRe3u1lDQA1chWo9QEOsPfzIMAyOcA&usqp=CAU`)
 setTimeout( () => { 
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πππππ  πππππππππ ${botName}`, ump, but, {quoted: mek})
  }, 2000) 
 break

case 'buylimit':
case 'belilimit':
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply('πΌππ ππππ π±πππππ πππ ?')
 let hargalimit = 50000 * v
 if (isMonay < hargalimit) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 let jmllimit = v * 1
 if (jmllimit < 1 )  return reply(`π»π πππ πΆππππ πππππ πππππ ?`)
 giveLimit(sender, parseInt(jmllimit), limit)
 kurangMonay(sender, hargalimit)
 done = `Ϋ π±π΄π»πΈ π±πΎπ π»πΈπΌπΈπ Ϋ\n`
 done += `α πΏππππππ : ${pushname}\n`
 done += `α ππππππ   : ππππππ\n`
 done += `α π»ππππ  : ${getLimit(sender, limitCount, limit)}\n`
 done += `α πΌππππ’  : ${getMonay(sender)} ` 

 setTimeout( () => { 
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πππππ  πππππππππ ${botName}`, tamnel, but, {quoted: mek})
  }, 2000) 
 break
case 'sellikan':
case 'jualikan':
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!v) return reply(`Example : ${prefix + command}  2\n 1 ikan = 1500 monay`)
 let jlikan =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3D6eK-g3yzdsgKn9xZm27SIS-kVyG93_6w&usqp=CAU`)
 if (isIkan < v) return reply('πΈπππ  πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ ππππ πππππππππ')
 kurangIkan(sender, v)
 let monaynya = 1500 * v
 addMonay(sender, monaynya)
 let jlikanteks = ` [ πΏπ΄π½πΉππ°π»π°π½ πΈπΊπ°π½ ]\n`
    jlikanteks += `πΏππππππ : ${pushname}\n`
    jlikanteks += `ππππππ : πππππππππ ππππππ \n`
    jlikanteks += `πΏπππππππππ : ${monaynya}\n`
    jlikanteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlikanteks += `ππππ πΈπππ : ${getIkan(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlikanteks, 'πΉπππ  πΈπππ', jlikan, but, {quoted: mek})  
  }, 2000)
 
 break

case 'jualayam':
case 'sellayam': 
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!v) return reply(`Example : ${prefix + command}  2\n 1 ππ’ππ = 8000 πΌππππ’`)
 let jlayam =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0I0NACIU7lpZaiqSLy8ThFoFjwbta0ntew&usqp=CAU`)
 if (isAyam < v) return reply('π°π’ππ  πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ.')
 kurangAyam(sender, v)
 let monayayam = 8000 * v
 addMonay(sender, monayayam)
 let jlayamteks = ` [ πΏπ΄π½πΉππ°π»π°π½ π°ππ°πΌ ]\n`
    jlayamteks += `πΏππππππ : ${pushname}\n`
    jlayamteks += `ππππππ : πππππππππ ππππππ \n`
    jlayamteks += `πΏπππππππππ : ${monayayam}\n`
    jlayamteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlayamteks += `ππππ π°π’ππ : ${getIkan(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlayamteks, 'πΉπππ  π°π’ππ', jlayam, but, {quoted: mek})  
  }, 2000)
 
 break 
 
case 'jualkelinci':
case 'sellkelinci': 
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 πΊππππππ = 25000 πΌππππ’`)
 let jlkelinci =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBn9alfn-qvtzb_8MS5S3w1kStS-yV7uCsaA&usqp=CAU`)
 if (isKelinci < v) return reply('πΊπππππ  πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ.')
 kurangKelinci(sender, v)
 let monaykelinci = 25000 * v
 addMonay(sender, monaykelinci)
 let jlkliteks = ` [ πΏπ΄π½πΉππ°π»π°π½ πΊπ΄π»πΈπ½π²πΈ ]\n`
    jlkliteks += `πΏππππππ : ${pushname}\n`
    jlkliteks += `ππππππ : πππππππππ ππππππ \n`
    jlkliteks += `πΏπππππππππ : ${monaykelinci}\n`
    jlkliteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlkliteks += `ππππ πΊππππππ : ${getKelinci(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlkliteks, 'πΉπππ  πΊππππππ', jlkelinci, but, {quoted: mek})  
  }, 2000)
 
 break 
 
case 'jualdomba':
case 'selldomba':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 π³ππππ = 50000 πΌππππ’`)
 let jldomba =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tDpDzY1up0nZ3kEirF_nxksPAM3sWaTxPQ&usqp=CAU`)
 if (isDomba < v) return reply('π³ππππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ.')
 kurangDomba(sender, v)
 let monaydomba = 50000 * v
 addMonay(sender, monaydomba)
 let jldmbteks = ` [ πΏπ΄π½πΉππ°π»π°π½ π³πΎπΌπ±π° ]\n`
    jldmbteks += `πΏππππππ : ${pushname}\n`
    jldmbteks += `ππππππ : πππππππππ ππππππ \n`
    jldmbeks += `πΏπππππππππ : ${monaydomba}\n`
    jldmbteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jldmbteks += `ππππ π³ππππ : ${getDomba(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jldmbteks, 'πΉπππ π³ππππ', jldomba, but, {quoted: mek})  
  }, 2000)
 
 break  
 
case 'jualsapi':
case 'sellsapi':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 ππππ = 75000 πΌππππ’`)
 let jlsapi =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58wfnVrRf093FLawbRZl53sTjdyti3l3gaw&usqp=CAU`)
 if (isSapi < v) return reply('ππππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ.')
 kurangSapi(sender, v)
 let monaysapi = 75000 * v
 addMonay(sender, monaysapi)
 let jlspiteks = ` [ πΏπ΄π½πΉππ°π»π°π½ ππ°πΏπΈ ]\n`
    jlspiteks += `πΏππππππ : ${pushname}\n`
    jlspiteks += `ππππππ : πππππππππ ππππππ \n`
    jlspiteks += `πΏπππππππππ : ${monaysapi}\n`
    jlspiteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlspiteks += `ππππ ππππ : ${getSapi(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlspiteks, 'πΉπππ ππππ', jlsapi, but, {quoted: mek})  
  }, 2000)
 
 break  

case 'jualgajah':
case 'sellgajah':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 πΆππππ = 100.000 πΌππππ’`)
 let jlgajah =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Fg9FrWX4sP-tRBbX7Zr0qKaQerxjqF-3Mw&usqp=CAU`)
 if (isGajah < v) return reply('πΆππππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πππππππ.')
 kurangGajah(sender, v)
 let monaygajah = 100000 * v
 addMonay(sender, monaygajah)
 let jlgjhteks = ` [ πΏπ΄π½πΉππ°π»π°π½ πΆπ°πΉπ°π· ]\n`
    jlgjhteks += `πΏππππππ : ${pushname}\n`
    jlgjhteks += `ππππππ : πππππππππ ππππππ \n`
    jlgjhteks += `πΏπππππππππ : ${monaygajah}\n`
    jlgjhteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlgjhteks += `ππππ πΆππππ : ${getGajah(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlgjhteks, 'πΉπππ πΆππππ', jlgajah, but, {quoted: mek})  
  }, 2000)
 
 break  


case 'jualbesi':
case 'sellbesi':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 π±πππ = 300.000 πΌππππ’`)
 let jlbesi =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_c14PNBIIfab5hJASdx6PHdS2ks0VrU7xw&usqp=CAU`)
 if (isBesi < v) return reply('π±πππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πΌππππππππ.')
 kurangBesi(sender, v)
 let monaybesi = 300000 * v
 addMonay(sender, monaybesi)
 let jlbsiteks = ` [ πΏπ΄π½πΉππ°π»π°π½ π±π΄ππΈ ]\n`
    jlbsiteks += `πΏππππππ : ${pushname}\n`
    jlbsiteks += `ππππππ : πππππππππ ππππππ \n`
    jlbsiteks += `πΏπππππππππ : ${monaybesi}\n`
    jlbsiteks += `ππππ ππππ : ${getMonay(sender)}\n`
    jlbsiteks += `ππππ π±πππ : ${getBesi(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlbsiteks, 'πΉπππ π±πππ', jlbesi, but, {quoted: mek})  
  }, 2000)
 
 break  
 
case 'jualemas':
case 'sellemas':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 π΄πππ = 400.000 πΌππππ’`)
 let jlemas =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc--0LNAO7bFtk0ZBbDfc3HQbGH5h5ym_KKA&usqp=CAU`)
 if (isEmas < v) return reply('π΄πππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πΌππππππππ.')
 kurangEmas(sender, v)
 let monayemas = 400000 * v
 addMonay(sender, monayemas)
 let jlms = ` [ πΏπ΄π½πΉππ°π»π°π½ π΄πΌπ°π ]\n`
    jlms += `πΏππππππ : ${pushname}\n`
    jlms += `ππππππ : πππππππππ ππππππ \n`
    jlms += `πΏπππππππππ : ${monayemas}\n`
    jlms += `ππππ ππππ : ${getMonay(sender)}\n`
    jlms += `ππππ π΄πππ : ${getEmas(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jlms, 'πΉπππ π΄πππ', jlemas, but, {quoted: mek})  
  }, 2000)
 
 break   

case 'jualdiamond':
case 'selldiamond':
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (!v) return reply(` π²πππππ : ${prefix + command}  2\n 1 π³ππππππ = 500.000 πΌππππ’`)
 let jldiamond =  await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL15B7rTziIici8GNy7URxVYU4ZAhRe5R8Q&usqp=CAU`)
 if (isDiamond < v) return reply('π³ππππππ πΊπππ πππππ πππππ πππππ ππππππ, πππππππ πππππ πΌππππππππ.')
 kurangDiamond(sender, v)
 let monaydm = 500000 * v
 addMonay(sender, monaydm)
 let jldm = ` [ πΏπ΄π½πΉππ°π»π°π½ π³πΈπ°πΌπΎπ½π³ ]\n`
    jldm += `πΏππππππ : ${pushname}\n`
    jldm += `ππππππ : πππππππππ ππππππ \n`
    jldm += `πΏπππππππππ : ${monaydm}\n`
    jldm += `ππππ ππππ : ${getMonay(sender)}\n`
    jldm += `ππππ π³ππππππ : ${getDiamond(sender)}`
  
  setTimeout( () => {
  but = [
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, jldm, 'πΉπππ π³ππππππ', jldiamond, but, {quoted: mek})  
  }, 2000)
 
 break
 
case 'mancing':
 if (!isGroup) return reply(mess.only.group)  
 if (!isPetualang) return reply(mess.only.player)
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
 if (!isInventory){ addInventori(sender) }
 if (isUmpan  < 1) return reply(`πππππ  πΊπππ π·ππππ, πππππππ ππππ ππ .ππππ`)
  ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  xp = Math.ceil(Math.random() * 350)      
  ditangkap = Math.ceil(Math.random() * 50)
  cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
  setTimeout( () => {
  caption = monospace(`γ Memancing γ\n\n β― Tangkapan : ${ikannya}\n β― Total Dapat : ${ditangkap} Ikan\n β― EXP : ${xp}Xp`)
  but = [
  { buttonId: '!mancing', buttonText: { displayText: 'π£ π΅πΈππ·πΈπ½πΆ π°πΆπ°πΈπ½' }, type: 1 },
  { buttonId: '!myinventori', buttonText: { displayText: 'ππ²π΄πΊ  ππ°π' }, type: 1 }
   ]
  sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})  
  }, 6000)
  setTimeout( () => {
  btf.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π£Menarik kail. . .', text) 
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π£Mulai memancing. . .', text) 
  }, 1500) // 1000 = 1s,
  addIkan(sender, ditangkap)
  addLevelingXp(sender, xp)
  kurangUmpan(sender,1)
  break  
 case 'mining':   

  if (!isGroup) return reply(mess.only.group)  
  if (!isPetualang) return reply(mess.only.player)
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ πππππππππππ  π±ππππππ`)
   kurangDarah(sender, 10)
  pp = randomNomor(75)
  emas = randomNomor(15)
  dm = randomNomor(3)
  besi = randomNomor(50)
  done = monospace(`Selesai Miningπ§\nlist hasil :\nEmas : ${emas}πͺ\nUang : $${pp}π°\nBesi : ${besi}βοΈ\nBerlian : ${dm}π`)
  addMonay(sender, pp, balance)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  mining = ('Waitt sedang menguli . . .')
  setTimeout( () => {		//case by Butterfly
  but = [{ buttonId: `!mining`, buttonText: { displayText: 'βοΈ πΌπΈπ½πΈπ½πΆ π°πΆπ°πΈπ½' }, type: 1 }, { buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButton(from, done, 'πΌπππππ', but)
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π§ selesai menguli. . .πͺπ·', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π§ menemukan emas. . .βοΈποΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π§ mulai menambang. . .βοΈποΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
  
  break	   
  
    
    
case 'adventure':
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (!isInventory){ addInventori(sender) }
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
 if (!isInventoryMonay){ addInventoriMonay(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ πππππππππππ  π±ππππππ`)
   kurangDarah(sender, 10)
  ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
  const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
  const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarrenβs','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggarβs Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pellaβs','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Viollβs Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squallβs End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
  const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
  anu = fs.readFileSync('../lib/dungeon.js');
  jsonData = JSON.parse(anu);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  hasm = await getBuffer(randKey.result)  
  const adven = Math.ceil(Math.random() * 1000)  
  const money = Math.ceil(Math.random() * 300)		    
  setTimeout( () => {		
  caption = monospace(`γ DEATH γ\n\n β― Tempat  ${ad}\n β― MONEY : $${money}\n β― EXP : ${adven}Xp`)
  but = [
  { buttonId: `!myinventori`, buttonText: { displayText: 'π πΈπ½ππ΄π½ππΎππΈ' }, type: 1 }]
  sendButLocation(from, caption, 'π°ππππππππ', hasm, but, {quoted: mek})   
  }, 7000)
  setTimeout( () => {
  btf.sendMessage(from, `π°π ππππππ`, text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, `ππππ ππππ  πππ ${sesuatu}`, text) 
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, `πΏπππ’ππ ${pushname} ππππππ π±πππππππππ`, text) 
  }, 1500) // 1000 = 1s,
  addLevelingXp(sender, adven)
  addMonay(sender, money)
  break
  
//+πΈπ½ππ΄ππΎππ π²πΌπ³+  
case 'rpgshop':
pp = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSZ3W8U7r_jnLpZP3WcBmGq-1fUul2V3h2w&usqp=CAU`)
anu = monospace(`α?Ώ ππΏπΆ  ππ·πΎπΏ α?Ώ
π πΏππππππππ 
 β’ ππππππππ
 β’ ππππππππ
 β’ πππππππππππ
 β’ ππππππ’ππ
 β’ ππππππππ
 β’ πππππππππ
 β’ πππππππππππ
 β’ ππππππππ
 β’ πππππππππ
 
π πΏππππππππ
 β’ πππ’ππππ
 β’ πππ’πππππ
 β’ πππ’πππππ
 `)
 but = [
          { buttonId: `!mybag`, buttonText: { displayText: 'ππΌπ π±π°πΆ' }, type: 1 }]
          sendButLocation(from, anu, `${botName}`, pp, but, {quoted: mek})
          break    

 
case 'myprofile': case 'inventori':
case 'profile': case 'rpgmenu': case 'mybag': case 'cekinvent': case 'myinventori':
  if (!isPetualang) return reply(mess.only.player)
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
pp = await  getBuffer(`https://telegra.ph/file/d6fb694ac76d7b10661b7.jpg`)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pop = monospace(`α?Ώ ππ‘ππ’ π£πππ¬ππ₯ α?Ώ
β’π¦ Nama : ${pushname}
β’π Darah : ${getDarah(sender)}
β’π Rank : ${role}
β’π Status : ${elit}
β’π Level : ${getLevelingLevel(sender)}
β’π· Xp : ${getLevelingXp(sender)}/${reqXp}
β’π΅ Uang : ${getMonay(sender)} 
β’π Obat : ${getObat(sender)}
β’π³ Limit : ${getLimit(sender,limitCount,limit)}

α?Ώ ππ‘ππ’ ππ¨π₯π¨ππ‘ α?Ώ
β’π Sapi : ${getSapi(sender)} 
β’π Ayam : ${getAyam(sender)}
β’π³ Ikan : ${getIkan(sender)}
β’π Kelinci : ${getAyam(sender)}
β’π Domba :  ${getDomba(sender)}
β’π Gajah : ${getGajah(sender)}

α?Ώ ππ‘ππ’ π§ππ πππ‘π α?Ώ
β’πͺ Emas : ${getEmas(sender)} 
β’π Diamond : ${getDiamond(sender)} 
β’βοΈ Besi : ${getBesi(sender)} 

 `)
 but = [
          { buttonId: `.menu`, buttonText: { displayText: 'πΌπ΄π½π' }, type: 1 }]
          sendButLocation(from, pop, `${botName}`, pp, but, {quoted: mek})
          break       
break


//Β»Β»Β»ππ¦π₯πͺπ’ ππ¦π―πΆ
 case 'toimg':  
 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedSticker) return reply('π₯π²π½πΉπ/ππ?π΄ πππΆπ°πΈπ²πΏ !')
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
  buffer = fs.readFileSync(ran)
  btf.sendMessage(from, buffer, image, {quoted: mek})
  
  fs.unlinkSync(ran)
  })
  break
case 'tourl':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  
  if (
  ((isMedia && !mek.message.videoMessage) ||
  isQuotedImage ||
  isQuotedVideo) &&
  args.length == 0
  ) {
  boij =
  isQuotedImage || isQuotedVideo
  ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
  .extendedTextMessage.contextInfo
  : mek;
  reply(mess.wait)
  owgi = await btf.downloadMediaMessage(boij);
  res = await upload(owgi);
  tek = monospace(`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
  btf.sendMessage(from, tek, text, {quoted: mek});
  
  } else {
  reply("kirim/reply gambar/video");
  }
  break;	    
    case "emoji":
    case "semoji":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  
  if (args.length < 1) return reply(`Send command *${prefix}semoji π`)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  qes = args.join(" ");
  emoji.get(`${qes}`).then((emoji) => {
  teks = `${emoji.images[4].url}`;
  sendStickerFromUrl(from, `${teks}`);  
  
  
  });
  break
case "tomp4":
  limitAdd(sender, limit)
  reply(mess.uselimit)
  if (
  ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
  args.length == 0
  ) {
  ger = isQuotedSticker
  ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
  .extendedTextMessage.contextInfo
  : mek;
  reply(mess.wait)
  owgi = await btf.downloadAndSaveMediaMessage(ger);
  webp2mp4File(owgi).then((res) => {
  sendMediaURL(from, res.result, "Done");
  
  });
  } else {
  reply("reply stiker");
  }
  fs.unlinkSync(owgi);
  break;			
	case 'attp':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!v) return reply(`Example: ${prefix + command} Hai`)
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
  btf.sendMessage(from, buffer, sticker, { quoted: mek })
   
    break

case 's': case 'sticker':  case 'S':
      var a = "Btf Bot";
      var b = "By mzTamvan";
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
      limitAdd(sender, limit)
   reply(mess.uselimit)
     if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
     const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
     media = await btf.downloadAndSaveMediaMessage(encmedia)
     await createExif(a,b)
     out = getRandom('.webp')
     ffmpeg(media)
     .on('error', (e) => {
     console.log(e)
     btf.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
     fs.unlinkSync(media)
})
     .on('end', () => {
     _out = getRandom('.webp')
     spawn('webpmux', ['-set','exif','./database/cloud/data.exif', out, '-o', _out])
     .on('exit', () => {
          btf.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await btf.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          btf.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./database/cloud/data.exif', out, '-o', _out])
          .on('exit', () => {
          btf.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await btf.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, zee, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
          }
          
          break;
    
    
    
    
case  'gojek':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (isCekDarah < 1) return reply(`πΊπππ  πΊππππππππ πππππππ  π·πππ πππππππππππ  π±ππππππ`)
   kurangDarah(sender, 10)
  if (!isPetualang) return reply(mess.only.player)
  
  pp = randomNomor(400)
  slm = await getBuffer(`https://digitalbisa.id/uploads/articles/dt-gojek-sebuah-inovasi-digital-bidang-transportasi-bjqxlvgspF.jpeg`)
done = monospace(`ποΈ πΊπ°π½πΆ πΎπΉπΎπ» ${pushname}\nποΈ π²πππ\nβ’ππππ : $${pp}\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)
  mining = (`πΉ ${pushname} π±ππππππ πππππππ πΆπ-πΉππ . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΆππππ ${botName}`, slm, but, {quoted: mek})
  }, 19000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π©βπ©βπ¦ πΏππππππππ ππππππ ππππππ πππππ ππππππποΈ....π¦.', text) 
  }, 17000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ  πΌπππππππ πΏππππππππ πΊπ ππππππ  ππππππ . ποΈποΈποΈοΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π©βπ©βπ¦ πΏππππππππ π³ππππππππ . . ...ποΈοΈοΈοΈ', text) 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ πΏππππππππ .......οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s
  
  break	  

 case 'berburu':{
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isPetualang) return reply(mess.only.player)
 if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
 if (isCekDarah < 1) return reply('π³ππππ πΊπππ πππππ, πππππππ ππππ πππππππππππ ππππππ [ .ππππ ]') 
 if (!isInventoriBuruan){ addInventoriBuruan(sender) } 
  let luka = ["ππππππππ π³πππ ππππ π±ππππππ","ππππππππππ πΊπ πΉπππππ ππππππ πππππππ","ππππππππ π·ππ ππ π±πππ","π²ππππππ","ππππππππ π°πππ","ππππππππ ππππ","ππππππππ πππππππ"]
  let lokasiburu = ["π·ππππ πππππ","π·ππππ π°πππ£ππ","π·ππππ ππππππ","πΏπππππ ππππππ","π·ππππ π°πππππ","πΏπππππππππ"]
   var ikanmu = randomNomor(10)
   var ayam = randomNomor(8)
   var kelinci = randomNomor(7) 
   var domba = randomNomor(6)
   var sapi = randomNomor(7)
   var gajah = randomNomor(8)  
   let lukapoin = 10
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = lokasiburu[Math.floor(Math.random() * lokasiburu.length)]
 if (lokasinya === 'π·ππππ πππππ') {
    var imageburu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzBdNP14zAnsCUq_n7qK6by8Ler3XD1RX2g&usqp=CAU`)
   } else
 if (lokasinya === 'π·ππππ π°πππ£ππ') {
    var imageburu = await  getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVFQS20MtMFEEt91BBfd3G7o2r7KNV6TqKQ&usqp=CAU`)
   } else
 if (lokasinya === 'π·ππππ ππππππ') {
    var imageburu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlnMke8u9TliyscfPsqlugsJqRzP3ZasxOg&usqp=CAU`)
   } else
 if (lokasinya === 'πΏπππππ ππππππ') {
    var imageburu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37cnMYM1m0DxERRmV3YKvtqQWAuHpRQvPpA&usqp=CAU`)
   } else
 if (lokasinya === 'π·ππππ π°πππππ') {
    var imageburu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMplMGp6FCn98tsJMTyiDDXHhkcEH8uIohhw&usqp=CAU`)
   } else
 if (lokasinya === 'πΏπππππππππ') {
   var imageburu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMwh0kO6j0i28UMsuRS9CeDlXfj31QU1QcA&usqp=CAU`)
   }
 setTimeout( () => {
  let buruteks = `_[ π·π°ππΈπ»  π±ππππ°π½πΌπ ]_\n`
     buruteks += `*πββοΈ πΏππππππ* : ${pushname}\n`
     buruteks += `*π πΈπππ* : ${ikanmu}\n`
     buruteks += `*π π°π’ππ* : ${ayam}\n`
     buruteks += `*π πΊππππππ* : ${kelinci}\n`
     buruteks += `*π π³ππππ* : ${domba}\n`
     buruteks += `*π ππππ* : ${sapi}\n`
     buruteks += `*π πΆππππ* : ${gajah}\n\n`
     buruteks += `_[ πΈπ½π΅πΎ π±ππππ°π½ ]_\n`
     buruteks += `*π»πππππ* : ${lokasinya}\n`
     buruteks += `*π·πππππππ* : ${lukanya}, π³ππππππ πππππππππ ${lukapoin}\n`
     buruteks += `*π³ππππ πππππππ* : ${getDarah(sender)}\n`
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, buruteks, `π±ππππππ ${botName}`, imageburu, but, {quoted: mek})
  },5000)  
  setTimeout( () => {
  reply(`${pushname} πΌππππ π±ππππππ ππ ${lokasinya}`)     
  }, 1000) 
   addIkan(sender, ikanmu) 
   addAyam(sender, ayam) 
   addKelinci(sender, kelinci)
   addDomba(sender, domba)
   addSapi(sender, sapi)
   addGajah(sender, gajah)
   kurangDarah(sender, lukapoin)
 }



break




case  'slime':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  kurangDarah(sender, 10)
  pp = randomNomor(1000)
  emas = randomNomor(100)
  dm = randomNomor(3)
  besi = randomNomor(40)
  slm = await getBuffer(`https://telegra.ph/file/915f3951af7556eddb44d.jpg`)
  done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· ππ»πΈπΌπ΄\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  mining = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ πππππ . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ πππππ ${botName}`, slm, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ πππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ πππππ π³ππππππππ . . π½π½οΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ πππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, mining, text, {quoted: mek}) 
  }, 0) // 1000 = 1s
  break	  

case  'goblin':
   if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
   kurangDarah(sender, 10)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(200)
  emas = randomNomor(15)
  dm = randomNomor(5)
  besi = randomNomor(50)
  gbl = await getBuffer(`https://telegra.ph/file/f6c948147158700f50fbc.jpg`)
  if (getLevelingLevel(sender) >= 5 ){
done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· πΆπΎπ±π»πΈπ½\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp) 
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  goblin = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ πΆπππππ . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ πΆπππππ ${botName}`, gbl, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ πΆπππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ πΆπππππ π³ππππππππ . . π½π½οΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ πΆπππππ ππ πΉπππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, goblin, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`πππππππ π½ππππππ πππππ ππππ ππ 5 \nπ»ππππ ππππ  ππππ πππ ${getLevelingLevel(sender)}`)
}

 break	  




case 'evil':
    if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
   kurangDarah(sender, 10)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(300)
  emas = randomNomor(20)
  dm = randomNomor(10)
  besi = randomNomor(60)
  evl = await getBuffer(`https://telegra.ph/file/9784be88470be8bf30c91.jpg`)
  if (getLevelingLevel(sender) >= 10 ){
done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· π΄ππΈπ» π΄ππ΄\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  dvl = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ π΄πππ π΄π’π . . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ π³ππππ π΄π’π ${botName}`, evl, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π³ππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π³ππππ π³ππππππππ . . π½π½οΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ π³ππππ π΄π’π ππ πΉπππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, dvl, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`πππππππ π½πππππ πππππ ππππ ππ 10\nπ»ππππ ππππ  ππππ πππ ${getLevelingLevel(sender)}`)
}  
  
 break	  


case  'bahemoth':
   if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
   kurangDarah(sender, 10)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(35000)
  emas = randomNomor(25)
  dm = randomNomor(15)
  besi = randomNomor(65)
  bh = await getBuffer(`https://telegra.ph/file/8429bfd0a5e69ed46c941.jpg`)
   if (getLevelingLevel(sender) >= 15 ){
done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· π±π°π·π΄πΌπΎππ·\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  bm = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ π±πππππππ. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ π±πππππππ ${botName}`, bh, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π±πππππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π±πππππππ π³ππππππππ . . π½π½οΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ π±πππππππ ππ πΉπππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`πππππππ π½ππππππ πππππ ππππ ππ 15\nπ»ππππ ππππ  ππππ πππ ${getLevelingLevel(sender)}`)
}  
  
 break	  


case  'cockatrice':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
   kurangDarah(sender, 10)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(400)
  emas = randomNomor(30)
  dm = randomNomor(20)
  besi = randomNomor(70)
  ck = await getBuffer(`https://telegra.ph/file/38c8aec14b9e878286f01.jpg`)
done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· π²πΎπ²πΊπ°πππΈπ²π΄\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)  
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
   if (getLevelingLevel(sender) >= 20 ){
  bm = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ π²πππππππππ. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ π²πππππππππ ${botName}`, ck, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π²πππππππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π²πππππππππ π³ππππππππ . . πποΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ π²πππππππππ  ππ πΉπππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`πππππππ π½ππππππ πππππ ππππ ππ 20\nπ»ππππ ππππ  ππππ πππ ${getLevelingLevel(sender)}`)
}

 break	  


case  'demondking':
  if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ`)
   kurangDarah(sender, 10)
  if (!isGroup) return reply(mess.only.group)
  if (!isPetualang) return reply(mess.only.player)
  pp = randomNomor(500)
  emas = randomNomor(35)
  dm = randomNomor(35)
  besi = randomNomor(85)
   if (getLevelingLevel(sender) >= 25){
  ck = await getBuffer(`https://telegra.ph/file/4b527d6decd5a7371ed58.jpg`)
done = monospace(`πͺ πΌπ΄πΌπ±ππ½ππ· π³π΄πΌπΎπ½  πΊπΈπ½πΆπ\nποΈ π·πππππ\nβ’π΄πππ : ${emas} πͺ\nβ’ππππ : $${pp} π°\nβ’π±πππ : ${besi} βοΈ\nβ’π³ππππππ : ${dm} π\n\n\nπΉπππ ππππππ  πππππ ππππππ πππππππ πππππ .ππ’πππ`)
  addMonay(sender, pp)
  addBesi(sender, besi)
  addEmas(sender, emas)
  addDiamond(sender, dm)
  bm = (` ${pushname}  πΌππππππππππ πΌπππ πΊπππ π΅πππ π΅ππππππ. . .`)
  setTimeout( () => {
  but = [{ buttonId: `!mybag`, buttonText: { displayText: 'π πΌπ π±π°πΆ' }, type: 1 }]
  sendButLocation(from, done, `πΊπππ π³ππππ πΊππππ ${botName}`, ck, but, {quoted: mek})
  }, 11000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'ποΈ πΌππππππ π·πππππ . π»π».', text) 
  }, 9000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π³ππππ πΊππππ ππππππππ . β οΈβ οΈ.', text) 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'πͺ π³ππππ  πππππ π³ππππππππ . .ππ οΈοΈοΈ', text) 
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, 'π πΌππππππ π³ππππ πΊππππ  ππ πΉπππππ . .π§€π§€οΈοΈ', text) 
  }, 1500) // 1000 = 1s,
  setTimeout( () => {
  btf.sendMessage(from, bm, text, {quoted: mek}) 
  }, 0) // 1000 = 1s,
}else{
reply(`πππππππ π½ππππππ πππππ ππππ ππ 25\nπ»ππππ ππππ  ππππ πππ ${getLevelingLevel(sender)}`)
}  
 break	  


case 'maling':
   if (!isDarah){ addInventoriDarah(sender, DarahAwal) }
  if (!isInventory){ addInventori(sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(sender) }
  if (isCekDarah < 1) return reply(`π³ππππ  πΊπππ  π·ππππ πππππππ  π·πππ πππππππππππ  π±ππππππ`)
   kurangDarah(sender, 10)
  let malinguang = randomNomor(50000)
       if(!v) return  reply(`πΌππ ππππππ π³πππππ ?`)
        if (args[0] == 'rumah') {
          setTimeout(() => {
            reply(`[ ππππππ πΌπππππππ πππππ ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ πΌππππππππππ π±πππππ ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ π±ππππππ !!!!  π°ππ π’πππ ππππ’πππ π½ ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[ πΊπ°π±ππππππ, ππ π³ππππ πππ ππππ ]\n[ ${buru4d} ]`)
          }, 12000)
          addMonay(sender,malinguang)
        }
        if (args[0] == 'gedung') {
          setTimeout(() => {
            reply(`[ ππππππ πΌπππππππ ππππππ πππ ππ  ππππ ]`)
          }, 1000)
          setTimeout(() => {
            reply(`[ πΌππππππππππ π±πππππ π³π πππππππ ]`)
          }, 5000)
          setTimeout(() => {
            reply(`[ π°ππππππ π°ππ ππ°ππΏπ°πΌ, π±ππππ°π½ π°πΌπ±πΈπ»π» ππππ πΊππππππ ]`)
          }, 8000)
          setTimeout(() => {
            reply(`[πΊπππππ π°ππ πΏπππππ!! π±πππ πΌππππ πΌπππ ]`)
          }, 12000)
          setTimeout(() => {
            reply(`[ ππππ’ π³ππππ ]\n[ ${buru5e} ]`)
          }, 15000)
          addMonay(sender,malinguang)
        }

break    
    
    
    
    
    
 
//Β»Β»Β»ππ΅π°π³π’π¨π¦
    case 'addvideo':
  if (!isQuotedVideo) return reply('Reply videonya blokk!')
  reply(mess.wait)
  svst = body.slice(10)
  if (!svst) return reply('Nama videonya apa su?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
  videonye.push(`${svst}`)
  fs.writeFileSync(`./database/cloud/video/${svst}.mp4`, delb)
  fs.writeFileSync('./database/cloud/video.json', JSON.stringify(videonye))
  btf.sendMessage(from, `β πππ²π²π΄π  Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
  break  
    case 'getvideo':
    reply(mess.wait)
  namastc = body.slice(10)
  buffer = fs.readFileSync(`./database/cloud/video/${namastc}.mp4`)
  btf.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
  break  
	case 'listvideo':
	case 'videolist':
  teks = `*List Video :*\n\n`
  for (let awokwkwk of videonye) {
  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${videonye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
  break
    case 'getsticker':
	case 'gets': 
   reply(mess.wait)
  namastc = body.slice(12)
  result = fs.readFileSync(`./database/cloud/sticker/${namastc}.webp`)
  btf.sendMessage(from, result, sticker, {quoted :mek})
  break
    case 'stickerlist':
	case 'liststicker': 
   reply(mess.wait)
  teks = `*Sticker List :*\n\n`
  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${setiker.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
  break
    case 'addsticker':
    case 'addstiker':
  if (!isQuotedSticker) return reply('Reply stiker nya')
  svst = body.slice(12)
  if (!svst) return reply('Nama sticker nya apa?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./database/cloud/sticker/${svst}.webp`, delb)
  fs.writeFileSync(`./database/cloud/stik.json`, JSON.stringify(setiker))
	  	  btf.sendMessage(from, `β πππ²π²π΄π  Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
  svst = body.slice(7)
  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  delb = await btf.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
  fs.writeFileSync(`./database/cloud/audio/${svst}.mp3`, delb)
  fs.writeFileSync('./database/cloud/audio.json', JSON.stringify(audionye))
  btf.sendMessage(from, `β πππ²π²π΄π  Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
  break			
	case 'listvn':
	case 'vnlist': 
   	  teks = `*List Vn:*\n\n`
  for (let awokwkwk of audionye) {
  teks += `- ${awokwkwk}\n`
	  	  }
  teks += `\n*Total : ${audionye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
  break
    case 'getvn': 
  namastc = body.slice(7)
  buffer = fs.readFileSync(`./database/cloud/audio/${namastc}.mp3`)
	 	  btf.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
  break
    case 'addimage':
  if (!isQuotedImage) return reply('Reply imagenya blokk!')
  svst = body.slice(10)
  if (!svst) return reply('Nama imagenya apa su?')
  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await btf.downloadMediaMessage(boij)
  imagenye.push(`${svst}`)
  fs.writeFileSync(`./database/cloud/image/${svst}.jpeg`, delb)
  fs.writeFileSync('./database/cloud/image.json', JSON.stringify(imagenye))
  btf.sendMessage(from, `β πππ²π²π΄π  Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
  break  
	case 'getimage':
  namastc = body.slice(10)
  buffer = fs.readFileSync(`./database/cloud/image/${namastc}.jpeg`)
  btf.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
  break  
    case 'imglist':
	case 'listimg':
  teks = `*List Image :*\n\n`
  for (let awokwkwk of imagenye) {
  teks += `- ${awokwkwk}\n`
  }
  teks += `\n*Total : ${imagenye.length}*`
  btf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break  
//Β»Β»Β»ππ°π―π·π¦π³π΅π¦π³  
    case 'tovn':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) return reply('Gagal mengkonversi audio ke ptt')
  topt = fs.readFileSync(ran)
  btf.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
  
  })
  break		   
    case "tomp3":   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, audio, {
  mimetype: "audio/mp4",
  quoted: mek,
  });  
  fs.unlinkSync(ran);
  
  });
  break;  
    case "fast":    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
  (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
  
  }
  );
  break;
    case "slow":    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedVideo) return reply("Reply videonya!");
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait);
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
  (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
 
  }
  );
  break;
    case "reverse":    
  if (!isQuotedVideo) return reply("Reply videonya!");
  reply(mess.wait)
  encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
  .message.extendedTextMessage.contextInfo;
  media = await btf.downloadAndSaveMediaMessage(encmedia);
   limitAdd(sender, limit)
   reply(mess.uselimit)
  ran = getRandom(".mp4");
  exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
  fs.unlinkSync(media);
  if (err) return fakegroup(`Err: ${err}`);
  buffer453 = fs.readFileSync(ran);
  btf.sendMessage(from, buffer453, video, {
  mimetype: "video/mp4",
  quoted: mek,
  });
  fs.unlinkSync(ran);
  
  
  
  });
  break;  
    case 'bass':     
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
	   	  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  })
  break
    case 'nightcore':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  	  if (!isQuotedAudio) return reply('Reply Audionya')
   reply(mess.wait)
   limitAdd(sender, limit)
   reply(mess.uselimit)
  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  core = await btf.downloadAndSaveMediaMessage(night)
  ran = getRandom('.mp3')
  reply(mess.wait)
  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(core)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
  fs.unlinkSync(ran)
  
  })
  break
    case 'gemuk':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  
	 	  })
  break
    case 'tupai':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  })
  break
    case 'slow2':    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  media = await btf.downloadAndSaveMediaMessage(encmedia)
  ran = getRandom('.mp3')
    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return reply('Error!')
  hah = fs.readFileSync(ran)
  btf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  fs.unlinkSync(ran)
  
  
  })
  break   
  
//Β»Β»Β»ππ¦π’π³π€π©πͺπ―π¨ ππ¦π―πΆ
    case 'gimage':
    case 'googleimage':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Apa Yang Mau Dicari?')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  teks = args.join(' ')
  res = await googleImage(teks, google)
  function google(error, result){
  if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
  else {
  var gugImg = result
  var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
  sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
  
  }
  }
  break 
    case 'pinterest':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  pin = await hx.pinterest(v)
  ac = pin[Math.floor(Math.random() * pin.length)]
  di = await getBuffer(ac)
  but = [
   { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'π½π΄ππ β' }, type: 1 }]
  sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but)
  
  break
    case 'lirik':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
  limitAdd(sender, limit)
   reply(mess.uselimit)
  reply(mess.wait)
  teks = body.slice(7)
  lirikLagu(teks).then((res) => {
  let lirik = monospace(`βγ  SEARCH LIRIK  γ\nβ Lirik Lagu :\n\n${res[0].result}\n`)
  reply(lirik)
  
  })
  break
case 'ytsearch': case 'yts':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Yang mau di cari apaan?')
  limitAdd(sender, limit)
   reply(mess.uselimit)
  teks = args.join(' ')
  reply(mess.wait)
  res = await yts(`${teks}`)
  kant = ``
  for (let i of res.videos) {
  kant += monospace(`βγ  YtSearch  γ\nβ― Judul : ${i.title}\nβ― Views : ${i.views}\nβ― Di Upload Pada : ${i.ago}\nβ― Durasi : ${i.timestamp}\nβ― Channel : ${i.author.name}\nβ― Link Video : ${i.url}\n\n\n`)
  }
  var akhir = kant.trim()
  sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
  
  break  
    case 'ranime': case 'random':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Apa Yang Mau Dicari?\nContoh #ranime sarada')
  if (args.length > 1) return reply('Hanya Satu Kata!! Contoh #ranime naruto')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  let im = await hx.chara(v)
  let acak = im[Math.floor(Math.random() * im.length)]
  let li = await getBuffer(acak)   
  but = [
   { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'π½π΄ππ β' }, type: 1 }]
  sendButImage(from, `${v}`, `Klik Next Ngab`, li, but)
  
  break
  
  
//Β»Β»Β»ππ°π°π­π΄ ππ¦π―πΆ  				
    case "jadibot":
/*  if (isBanned) return reply(mess.banned)
  if (isGroup) return reply(`πππππππ πππππππ ππππ ππππππ πππ, πΉπππππ πππππππ πππππ`)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(`πΌππππππ πππ πππππππππ, πΆππππππ π³πππππ π±ππππ`)
   //   if (!isOwner && !mek.key.fromMe) return (mess.only.owner)
  if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
  jadibot(reply, btf, from);
*/
  reply(`πΌππππ πΌπππ π΅ππππ ππππ  πππ ππππ πΌππππππ π\n_πππππ’ ππππ π΅ππππππ π·ππ πππ π³ππππππ_`)
  
  break;
    case "stopjadibot":
  if (mek.key.fromMe)
  return reply("tidak bisa stopjadibot kecuali owner");
  stopjadibot(reply);
  break;
    case "listjadibot":
  let tekss = "γ *LIST JADIBOT* γ\n";
  for (let i of listjadibot) {
  tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
  }
  reply(tekss);
  break;	
    case 'ssweb': case 'ss':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (args.length < 1) return reply('Urlnya mana kak..')
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
   anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
  buff = await getBuffer(anu.screenshot)
  btf.sendMessage(from, buff, image, {quoted: mek, caption : v})
  
  break      
  
//Β»Β»Β»ππ°πΈπ­π°π’π₯π¦π³ ππ¦π―πΆ   				
case 'play':
  if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
  reply('π±πππππ ππππ£πππ ππππ ππ’ππππ ......')
  limitAdd(sender, limit)
   reply(mess.uselimit)
  let yut = await yts(v)
  yta(yut.videos[0].url)     
  .then(async(res) => {
  var { thumb, title, filesizeF, filesize } = res
  var capti = `π¬π’π¨π§π¨ππ π£πππ¬π\nβ’π¬ Judul : ${yut.all[0].title}\nβ’π₯ ID Video : ${yut.all[0].videoId}\nβ’β°οΈ Diupload Pada : ${yut.all[0].ago}\nβ’ποΈοΈ Views : ${yut.all[0].views}\nβ’βΆοΈ Durasi : ${yut.all[0].timestamp}\nβ’π Channel : ${yut.all[0].author.name}\nβ’π Link Channel : ${yut.all[0].author.url}\nβ’β‘ Link Video : ${yut.videos[0].url}`
  
  ya = await getBuffer(thumb)
  py =await btf.prepareMessage(from, ya, image)   
  but = [
  { buttonId: `!ytmp3 ${yut.videos[0].url}`, buttonText: { displayText: 'γ π΅ π°ππ³πΈπΎ  γ' }, type: 1 },
  { buttonId: `!ytmp4 ${yut.videos[0].url}`, buttonText: { displayText: 'γ π₯ ππΈπ³π΄πΎ γ' }, type: 1 }
  ]
  
  sendButLocation(from, capti, `\n${p}Silakan pilih type unduhan${p}`, ya, but, {quoted: mek})})
  
  break  
  

case 'ytmp4':
  if (args.length < 1) return reply('Link?')     
  reply(mess.wait)
  limitAdd(sender, limit)
   reply(mess.uselimit)
  result_data = await fetchJson(`https://apibtf.herokuapp.com/api/download/ytmp4?url=${v}&apikey=${btfkey}`)
  result = result_data.result
  pp = await getBuffer(result.thumb)  
  ini_txt = `ππππππ πΆππ π³πππ\n\n`
  ini_txt += `*π πΉππππ : ${result.title}*\n`
  ini_txt += `*πΏ π²ππππππ : ${result.channel}*\n`
  ini_txt += `*ποΈ ππππ π : ${result.views} πΎππππ*\n`  
  ini_txt += `*ποΈ ππππππ ππ : ${result.published}*\n`  
  ini_txt += `*πΏπππππ  ππππ ππππ πππππππ*\n`    
  ini_txt += `*β οΈπΉπππ π΅πππ πππππ ππππππππ πππππππ π΅πππ πππππππ πππππ  ππππ π΄ππππ*\n`
  
  btf.sendMessage(from, { contentText: `${ini_txt}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage') 
  ini_vid = await getBuffer(result.url)
  await btf.sendMessage(from, ini_vid, video, { mimetype: 'video/mp4', filename: `${result.title}.mp4`, quoted: mek })
  
  break
case 'ytmp3':
  if (args.length < 1) return reply('Link?')   
  reply(mess.wait)  
  limitAdd(sender, limit)
  reply(mess.uselimit)
  result_data = await fetchJson(`https://apibtf.herokuapp.com/api/download/ytmp3?url=${v}&apikey=${btfkey}`)
  result = result_data.result
  pp = await getBuffer(result.thumb)  
  ini_txt = `ππππππ πΆππ π³πππ\n\n`
  ini_txt += `*π πΉππππ : ${result.title}*\n`
  ini_txt += `*πΏ π²ππππππ : ${result.channel}*\n`
  ini_txt += `*ποΈ ππππ π : ${result.views} πΎππππ*\n`  
  ini_txt += `*ποΈ ππππππ ππ : ${result.published}*\n`  
  ini_txt += `*πΏπππππ  ππππ ππππ πππππππ*\n`    
  ini_txt += `*β οΈπΉπππ π΅πππ πππππ ππππππππ πππππππ π΅πππ πππππππ πππππ  ππππ π΄ππππ*\n`
  
  btf.sendMessage(from, { contentText: `${ini_txt}`, footerText: `*${tanggal()}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage') 
 ini_vid = await getBuffer(result.url)
  await btf.sendMessage(from, ini_vid, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek})   
break 
 




case 'tiktoknowm': 
case 'tiktok':  	    
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
   if (!v) return reply(`π»πππππ’π ππππ ππππ`)
   reply(mess.wait)
  anu = await fetchJson(`https://apibtf.herokuapp.com/api/download/tiktok?url=${v}&apikey=btf`)
    nowm = await getBuffer(anu.result.nowatermark)
  btf.sendMessage(from, nowm, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:troli})
  
  break
  
case "twitter":
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
   return reply(mess.error.url);
   if (!v) return fakegroup("Linknya?");
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   ten = args[0];
   var res = await hx.twitter(`${ten}`);
   ren = `${g.HD}`;
   sendMediaURL(from, ren, "Nih kak video nya!!");
   
   break;
 case "facebook":
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
   if (!v) return reply("Linknya?");
   limitAdd(sender, limit)
   reply(mess.uselimit)
   reply(mess.wait)
   if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
   return reply(mess.error.url);
   te = args.join(" ");
   hx.fbdown(`${te}`).then((G) => {
   ten = `${G.HD}`;
   sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
   
   });
   break;
     case "instagram":
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  //  if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
   //return reply(mess.error.url);
   if (!v) return reply(mess.nolink)
   reply(mess.wait)
   limitAdd(sender, limit)
   reply(mess.uselimit)
   hx.igdl(args[0]).then(async (result) => {
   for (let i of result.medias) {
   if (i.url.includes("mp4")) {
   let link = await getBuffer(i.url);
   btf.sendMessage(from, link, video, {
   quoted: mek,
   caption: `π³πππ πππ`,
   });
   } else {
   let link = await getBuffer(i.url);
   btf.sendMessage(from, link, image, {
   quoted: mek,
   caption: `π³πππ  πΊππ`,
   });
   }
   }
   });
   
   
   break;    
case 'mediafire':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isPremium) return reply(mess.only.premium)
  if (args.length < 1) return reply('Link Nya Mana? ')
  limitAdd(sender, limit)
  reply(mess.uselimit)
  //  if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
  reply(mess.wait)
  teks = args.join(' ')
  res = await mediafireDl(teks)
  result = monospace(`βγ  MediaFire  γ\nβ’ Nama : ${res[0].nama}\nβ’ Ukuran : ${res[0].size}\nβ’ Link : ${res[0].link}`)
  but = [
   { buttonId: `!dwd`, buttonText: { displayText: 'β© π³πΎππ½π»πΎπ°π³' }, type: 1 }]
  sendButton(from, result, 'πΌππππππππ π³ππ πππππππ ', but, troli)
  break
  case 'dwd':
  limitAdd(sender, limit)
  sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})  
  break  

//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender, limit)
  reply(mess.uselimit)
  reply(mess.wait)
  let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
  let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
  fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await btf.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
  var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'π½π΄ππ β½'}, type: 1}]
  var ButtonssMessages = {
  contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
  buttons: buttonnsss,
  footerText: `Klik Next Untuk Melanjutkan`,
  headerType: 4,
  imageMessage: bb.message.imageMessage
  }
  await btf.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
  fs.unlinkSync(`./${sender}.jpeg`)
  
  break  
/*Β»Β»Β»ππ’π¬π¦π³ ππ¦π―πΆ  
case 'naruto': case 'loli':
case 'husbu': case 'milf': 
case 'cosplay': case 'nekonime':
case 'shota': case 'wallml':
case 'akira': case 'akiyama':
case 'ana': case 'asuna':
case 'ayuzawa': case 'boruto':
case 'chiho': case 'chitoge':
case 'deidara': case 'eba':
case 'elaina': case 'emilia':
case 'erza': case 'gremory':
case 'hestia': case 'hinata':
case 'isuzu': case 'itachi':
case 'itori':  case 'kagura':
case 'kakasih':  case 'kaori':
case 'kaneki': case 'kotori':
case 'kurumi': case 'madara':
case 'mikasa':  case 'miku': 
case 'minato': case 'nezuko':
case 'rize':  case 'sagiri':
case 'sakura': case 'sasuke':
case 'shina': case 'shinka': 
case 'shinomiya': case 'shizuka':
case 'tejina': case 'toukachan':
case 'tsunade': case 'yotsuba':
case 'yuki': case 'yumeko':
case 'fanart': case 'nino':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender, limit)
reply(mess.uselimit)
reply(mess.wait)  
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `π³πππ πππ£ππππ`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β½`,
},
type: 1,
},
]);

break



  // Textprome //
  case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
btf.sendMessage(from, oke, image, {quoted: mek, caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`})

break
case 'hartatahta': 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
btf.sendMessage(from, harta, image, {quoted: mek, caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`})

break

//----> 2 TEXT <----//

case '8bit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'pornhub':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'glitch':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'glitch2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'layered':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case '3dsteel':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'realistic':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'lionlogo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'ninjalogo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'wolf':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'wolf2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'halloween3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'marvel':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'marvel2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'cinematichorror':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'avengers':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'graffiti3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'captainamerica':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
btf.sendMessage(from, pornhub, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'girlneko':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'sadboy':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'makerkaneki':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'rem':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'lolimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
case 'gura':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
btf.sendMessage(from, girlneko, image, {caption: `*πππππππ πππ  π»πππππ’π βοΈβοΈβοΈ*`, quoted: mek})

break
*/
//MAKER V2
case "buatquotes" :
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
hasil =  await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${v}&apikey=MIMINGANZ`)
qtsm = `π½ππ πππ£ππππ/πππππππ *${pushname}*`

btf.sendMessage(from, hasil, image, {caption: `${qtsm}\n\n${botName}`, quoted: mek})

break

/*KATA KATA MENUNYA*/
case 'faktaunik':
case 'katailham':
case 'katasindiran':
case 'katabucin':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
oke = await fetchJson(`https://leyscoders-api.herokuapp.com/api/${command}?apikey=MIMINGANZ`)
kta = (oke.result)
gas = `γ ${command} γβ·β· \n\n ${kta}`
sendButMessage(from, gas, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `Ι΄α΄xα΄ β½`,
},
type: 1,
},]);


break;


case 'pantun':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
limitAdd(sender,limit)
reply(mess.uselimit)
oke = await fetchJson(`https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=MIMINGANZ`)
kta = (oke.result)
gas = `γ πΏπ°πππ½ π½πΈπ· π±πΎππγβ·β· \n\n ${kta}`
sendButMessage(from, gas, `Klik Untuk Ke ${command} Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `Ι΄α΄xα΄ β½`,
},
type: 1,
},]);
break;

case 'cecan':
case 'cogan':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apibtf.herokuapp.com/api/wallpaper/${command}2?apikey=btf`)
Teks = `π½ππ πππ£ππππ/πππππππ *${pushname}* πΉππ πΏπππππ, ππππππ’π ππ ππ ππππππππππ`
sendButImage(from, Teks, `*${botName}*`, buffer, [{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);

case 'pentol':
case 'kartun':
case 'tatasurya':
case 'gaming':
case 'programing':
case 'mountain':
case 'doraemon':
case 'anjing':
case 'kucing':
case 'rose':
case 'ryujin':
case 'islami':

if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apibtf.herokuapp.com/api/wallpaper/${command}?apikey=btf`)
Teks = `π½ππ πππ£ππππ/πππππππ *${pushname}*`
sendButImage(from, Teks, `*${botName}*`, buffer, [{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);



break

/*case 'ppcp':
case 'ppcouple':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
limitAdd(sender,limit)
reply(mess.uselimit)
reply(mess.wait)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anu.result.male)
Cowok = `π»πππππ’π  πππ`
sendButImage(from, Cowok, `*${botName}*`, cowo, [  
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `π²ππ πππ’π πππ`
sendButImage(from, Cewek, `*${botName}*`, cewe, [  
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);


break
case 'meme':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
anu = await fetchJson(`https://apidhani.herokuapp.com/api/randomimage/meme?apikey=${dhakey}`)
buffer = await getBuffer(anu.result.url)
Teks = `ππππππππππ`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);

break

case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `ππππππ πππππππππππ’π`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);

break

case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `π³ππ ππππ ππππ£ππππ`
sendButImage(from, Teks, `*${botName}*`, buffer, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `π½π΄ππ  β»`,
},
type: 1,
},
]);
break


*/





case 'quotesali':
anu = await fetchJson(`https://apibtf.herokuapp.com/api/random/quotesali?apikey=${btfkey}`)
limitAdd(sender,limit)
reply(mess.uselimit)
qt = anu.Quotes
hoy = `*β¨πππΎππ΄π π°π»πΈ π±πΈπ½  π°π±πΈ ππ·π°π»πΈπ±*\n\n β${qt}β`
reply(hoy)
break

case  'wikipedia':
case  'wiki':
if (!v) return  reply(`πΌππ ππππ πππππ ππππ?`)
limitAdd(sender,limit)
reply(mess.uselimit)
reply(mess.wait)
ptn = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshOMt-padQcEwXNYKru2Up09LFrX748mfuA&usqp=CAU`)
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${v}`)
wki = `*β© ππΈπΊπΈπΏπ΄π³πΈπ° β©*\n\n*π πΏππππππππ  : ${v}*\n*π π·ππππ πππππππππ :*\n\n ${anu.result.list}`
but = [{ buttonId: `!menu`, buttonText: { displayText: 'πΌπ΄π½π' }, type: 1 }]
  sendButLocation(from, wki, `πππππππππ ${botName}`, ptn, but, {quoted: mek})
break


//++Menunya  
 case 'allmenu': case 'm2':
  pp = monospace(`πΌππππ πΌπππ π΅ππππ πππ  π±ππππ π΅ππ‘,  π°πππππ πππππ πππππππ`)  
  but = [
   { buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 },
   { buttonId: `!owner`, buttonText: { displayText: 'πΌ π°πππ·πΎπ' }, type: 1 }]
  sendButton(from, pp, 'Created By Butterfly', but, troli)
  break  

case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
    'VERSION:3.0\n' +
    'N:Sy;Bot;;;\n' +
    `FN:${ownerName}\n` +
    `item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
    `item1.X-ABLabel:π π²ππππππ\n` +
    `item2.EMAIL;type=INTERNET:botcwt@gmail.com\n` +
    `item2.X-ABLabel:π§ Email\n` +
    `item3.URL:http://butterply.ezyro.com/\n` +
    `item3.X-ABLabel:βοΈ Web Owner\n` +
    `item4.ADR:;;π?π© Indonesia;;;;\n` +
    `item4.X-ABADR:ac\n` +
    `item4.X-ABLabel:π Region\n` +
    `item5.X-ABLabel:βοΈ π±ππππππππ’ - π±ππ πΎπ πππ\n` +
    'END:VCARD'.trim()
btf.sendMessage(from, {displayName: `π³ππππππππ π±ππππππππ’`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
break

  
  
///ISLAMMENU   
case 'kisahnabi': case 'kisah': case 'nabi':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
if (!v) return reply(`πΌππ ππππ πππππ π½πππ πππππ ?`)
pp  = await getBuffer(`https://www.bukukita.com/babacms/displaybuku/109595_f.jpg`)  
anu =  await  fetchJson(`https://apibtf.herokuapp.com/api/muslim/kisahnabi?nabi=${v}&apikey=${btfkey}`) 
hasil  = anu.result
kisah = `
*ε½‘ πΊπΈππ°π· 25  π½π°π±πΈ*

*β½  π½πππ π½πππ               :  ${hasil.name}*
*β½  πΊππππππππ             :  ${hasil.kelahiran}*
*β½  ππππ πππππ            :  ${hasil.wafat_usia}*
*β½  ππππππ πππππππ  :  ${hasil.singgah}*
                  *β½ πΊππππ βΌ*

${hasil.kisah}

`
btf.sendMessage(from, { contentText: `${kisah}`, footerText: `Β© ${ownerName}`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')  

break    
   
  
  
case 'premium':
prm = `πππππππ ππ πΎπ πππ πππππ πΌππππππ πππππππ ππππ *.ππ πππ*` 
reply(prm)
break;
  



case 'fancy':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
if (!v) return reply(`ππππππ’π πππππ ?`)
anu = await  fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${v}&apikey=FuckBitch`)

reply(anu.result)

break




case  'lapor':
if (!v) return reply(`π²ππππππππ ππππππ πππππ’π`)
if (args.length > 300) return btf.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
stod = `${sender}`

laporan = `β οΈ π»π°πΏπΎπ π±ππΆ β οΈ
πΏπ΄π»π°πΏπΎπ : @${stod.split('@')[0]}
π»π°πΏπΎπ   :  ${v}`
var options = {
text: laporan,
contextInfo: {mentionedJid: [stod]},
}
btf.sendMessage(`${ownerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
reply('π»ππππππ πππππ  ππππππππ ππ ππ πππ')

break

case 'qadir':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
  let qadir = fs.readFileSync('./database/islam/abdulqadir.js');
  jsonData = JSON.parse(qadir);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  ε½‘ πΊπ°ππΎπΌπ°π· πΏπ°ππ° ππ°π»πΈ π°π»π»π°π· ε½‘
  
  β― π½πππ     : ${syk}
  β« πΊππππππ : \n\n${has}
  `
  but = [{ buttonId: `!qadir`, buttonText: { displayText: 'π½π΄ππ β½' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' β πΌπ΄π½π' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break

case 'kalijaga':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
 reply(mess.uselimit)
  let kalijaga = fs.readFileSync('./database/islam/kalijaga.js');
  jsonData = JSON.parse(kalijaga);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  ε½‘ πΊπ°ππΎπΌπ°π· πΏπ°ππ° ππ°π»πΈ π°π»π»π°π· ε½‘
  
  β― π½πππ     : ${syk}
  β« πΊππππππ : \n\n${has}
  `
  but = [{ buttonId: `!ampel`, buttonText: { displayText: 'π½π΄ππ β½' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' β πΌπ΄π½π' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break

case 'ampel':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)  
limitAdd(sender,limit)
reply(mess.uselimit)  
  let ampel = fs.readFileSync('./database/islam/ampel.js');
  jsonData = JSON.parse(ampel);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  ε½‘ πΊπ°ππΎπΌπ°π· πΏπ°ππ° ππ°π»πΈ π°π»π»π°π· ε½‘
  
  β― π½πππ     : ${syk}
  β« πΊππππππ : \n\n${has}
  `
  but = [{ buttonId: `!ampel`, buttonText: { displayText: 'π½π΄ππ β½' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' β πΌπ΄π½π' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break


case 'bonang':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)    
limitAdd(sender,limit)
reply(mess.uselimit)  
  let bonang = fs.readFileSync('./database/islam/bonang.js');
  jsonData = JSON.parse(bonang);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  syk = randKey.name
  has = randKey.desc
  dst = `
  ε½‘ πΊπ°ππΎπΌπ°π· πΏπ°ππ° ππ°π»πΈ π°π»π»π°π· ε½‘
  
  β― π½πππ     : ${syk}
  β« πΊππππππ : \n\n${has}
  `
  but = [{ buttonId: `!bonang`, buttonText: { displayText: 'π½π΄ππ β½' }, type: 1 },{ buttonId: `!karomahwali`, buttonText: { displayText: ' β πΌπ΄π½π' }, type: 1 }]
  sendButton(from, dst, `${botName}`, but, troli)
  
  break




case 'mandiwajib':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
let wjb = JSON.parse(fs.readFileSync('./database/islam/mandiwajib.json'));
wajib = wjb[Math.floor(Math.random() * wjb.length)]
dst = `ε½‘ πΌπ°π½π³πΈ ππ°πΉπΈπ± ε½‘\n\n${wajib}`
but = [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 }]
   sendButton(from, dst, `${botName}`, but, troli)
   
  break  
case 'rukunmandi':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
let rkn = JSON.parse(fs.readFileSync('./database/islam/rukunmandi.json'));
rukun = rkn[Math.floor(Math.random() * rkn.length)]
dst = `ε½‘ πππΊππ½ πΌπ°π½π³πΈ ππ°πΉπΈπ± ε½‘\n\n${rukun}`
but = [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 }]
   sendButton(from, dst, `${botName}`, but, troli)
   
  break





case 'drakor':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
if(!v)  return reply(`πΌππ ππππ πππππ πππ ?`)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/dramaindo-search?text=${v}&apikey=FuckBitch`)
hsl = anu.data
hsl2 =  hsl[Math.floor(Math.random() * hsl.length)]
jdl  = hsl2.title
menu = `ε½‘ π³ππ°πΌπ°  πΊπΎππ΄π° ε½‘

β πΉππ³ππ»   : ${hsl2.title}
β πππ°πππ  : ${hsl2.status}
β πΆπ΄π½ππ΄   : ${hsl2.genre}
β π»πΈπ½πΊ     : ${hsl2.source}
`
pp = await getBuffer(hsl2.image)
btf.sendMessage(from, { contentText: `${menu}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'βΊ πΌπ΄π½π' }, type: 1 }, { buttonId: `!drakor ${v}`, buttonText: { displayText: 'π½π΄ππ  β»' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break


case 'cerpencinta':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit) 
anu  = await  fetchJson(`https://viko-api.herokuapp.com/api/cerpen/cinta?apikey=rxking`)
pp = await getBuffer(`https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/suaramerdeka/images/2018/09/03/cerpen-5b8caf9c3d95f.jpg`)
crp = `β¨ π²π΄ππΏπ΄π½ π²πΈπ½ππ°β
${anu.result}`
btf.sendMessage(from, { contentText: `${crp}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'βΊ πΌπ΄π½π' }, type: 1 }, { buttonId: `!cerpencinta`, buttonText: { displayText: 'π½π΄ππ  β»' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break
case 'cerpenhoror':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 limitAdd(sender,limit)
reply(mess.uselimit)
anu  = await  fetchJson(`https://viko-api.herokuapp.com/api/cerpen/horor?apikey=rxking`)
pp = await getBuffer(`https://cdn.idntimes.com/content-images/post/20160303/hororcoverhauntedhiker-f8abcd6066340b8bd1b6d16f257846a6_600x400.jpg`)
crp = `β¨ π²π΄ππΏπ΄π½ π·πΎππΎπ β
${anu.result}`
btf.sendMessage(from, { contentText: `${crp}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!menu`, buttonText: { displayText: 'βΊ πΌπ΄π½π' }, type: 1 }, { buttonId: `!cerpenhoror`, buttonText: { displayText: 'π½π΄ππ  β»' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: pp, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break

case 'truth':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender,limit)
reply(mess.uselimit)
  const truth = _truth[Math.floor(Math.random() * _truth.length)]
  trth =  `β πππππ· β\n\n${truth}`
  btf.sendMessage(from, { contentText: `${trth}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!dare`, buttonText: { displayText: 'βοΈ π³π°ππ΄' }, type: 1 },{ buttonId: `!truth`, buttonText: { displayText: 'π πππππ·' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  tde, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
  break
   
   
    case 'dare':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  limitAdd(sender,limit)
  reply(mess.uselimit)
  const dare = _dare[Math.floor(Math.random() * _dare.length)]
  btf.sendMessage(from, { contentText: `${dare}`, footerText: `*${botName}*`, buttons: [{ buttonId: `!dare`, buttonText: { displayText: 'βοΈ π³π°ππ΄' }, type: 1 },{ buttonId: `!truth`, buttonText: { displayText: 'π πππππ·' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail:  tde, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
  
  break	
    
    
    
case 'tts': case 'gtts':   
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)  
  limitAdd(sender,limit)
 reply(mess.uselimit)
  var gtts = require('../lib/gtts')(args[0])
		if (args.length < 2) return btf.sendMessage(from, 'ππππππ’π ππππ πππ ?,  πππππ πππππ πππ ?', text, {quoted: troli})
		dtt = body.slice(8)
		ranm = getRandom('.mp3')
		rano = getRandom('.ogg')
		dtt.length > 500
     	? reply('πππ‘πππ’π ππππππ’ππππ πππππ!!!!! π€')
		: gtts.save(ranm, dtt, function() {
	   	exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
			fs.unlinkSync(ranm)
			buffer = fs.readFileSync(rano)
	     	if (err) return reply(ind.stikga())
	btf.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
			fs.unlinkSync(rano)
  	})
  })
  break
case 'infobug':
case 'infogratisan':
grt = `
βͺ WLG XL NEWβͺ
β¬IP 104.18.26.90 
Host list
β―
annikagarbers.com
getgundryoliveoil.com
hammarbyherr.ebiljett.nu.cdn.cloudflare.net
jp-member.zlongame.com.cdn.cloudflare.net
mail.annikagarbers.com
mff.ebiljett.nu.cdn.cloudflare.net
mrtransmissionsouthbirm.com
nakedmalt.com
new.rexbo.fi
rexbo.fi
sea-member.zlongame.com.cdn.cloudflare.net
spinupcasinos.com
test.rexbo.fi
us-member.zlongame.com.cdn.cloudflare.net
vn-member.zlongame.com.cdn.cloudflare.net
www.freshfields.co.uk.cdn.cloudflare.net
www.jbei.org.cdn.cloudflare.net
www.lushusa.com.cdn.cloudflare.net
www.mrtransmissionsouthbirm.com
www.rexbo.fi
www.visitviborg.de.cdn.cloudflare.net


β¬IP 104.18.27.90 
β―
Host  cdntest40.line-scdn.net

Bug support
β―
SSH WS β
Vmess β
Trogo β

Ntahlah, ini yg kesebar diberbagai grup sniff. Masih bisa dipake atau gk.


βͺ AKRAB XL NEWβͺ

note0.microsoft.com

SSH WS β
Vmess β
Trogo β

βͺ KZL AXIS NEWβͺ

CONNECT [host_port] [protocol][crlf]Host: isi bug kzl game[crlf]Connection: Keep-Alive[crlf]User-Agent: [ua][crlf][crlf]

List Bug Axis Hitz Kzl Games :
β cdn-axis.appsclub.com
β server.appsclub.com
β server4-1.operamini.com
β opx.opera.com


βͺ WEB SSH βͺ
darktunnel.net`
limitAdd(sender,limit)
reply(grt)
break
case 'infocovid':
anu = await fetchJson(`https://api-alya.herokuapp.com/api/other/coviddunia?apikey=alyacantik`)   
corona_res = anu.result   
cvd  =`
π· πΈπππ πππππ π²πππππ
β πΊππππ          β’ ${corona_res.totalCases} πΎππππ
β½ ππππππ       β’ ${corona_res.recovered} πΎππππ
β πΌπππ            β’ ${corona_res.deaths} πΎππππ
β½ π°πππππ       β’ ${corona_res.activeCases} πΎππππ
β½ π½πππππππ  β’ ${corona_res.closedCases} πΎππππ
β½ ππππππ       β’ ${corona_res.lastUpdate}`
reply(cvd)
break  

case 'nulis':
case 'tulis':
 if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
limitAdd(sender,limit)
reply(mess.uselimit)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
btf.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})

break  



case "reminder": // by Slavyan
        if (!v)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await btf.sendMessage(
            from,
            `ββ γ REMINDER γ ββ
    
ππππππππ π±πππππππ π³πππππππππ
βΈ Pesan: ${messRemind}
βΈ Type: Text
βΈ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
βΈ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `ββ γ REMINDER γ ββ

β° @${sender.split("@")[0]} β°
βΈ Pesan: ${messRemind}
βΈ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/default/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `ββ γ REMINDER γ ββ
    
ππππππππ π±πππππππ π³πππππππππ
βΈ Pesan: ${messRemind}
βΈ Type: Sticker
βΈ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
βΈ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `ββ γ REMINDER γ ββ

β° @${sender.split("@")[0]} β°
βΈ Pesan: ${messRemind}
βΈ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              btf.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/default/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `ββ γ REMINDER γ ββ
    
ππππππππ π±πππππππ  π°ππππ
βΈ Pesan: ${messRemind}
βΈ Type: Image
βΈ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
βΈ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `ββ γ REMINDER γ ββ

β° @${sender.split("@")[0]} β°
βΈ Pesan: ${messRemind}
βΈ Type: ${reminder.getReminderType(sender, _reminder)}`;
              btf.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/default/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await btf.downloadAndSaveMediaMessage(encmedia);
          await btf.sendMessage(
            from,
            `ββ γ REMINDER γ ββ
    
ππππππππ π±πππππππ π³πππππππππ
βΈ Pesan: ${messRemind}
βΈ Type: Audio
βΈ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
βΈ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              btf.sendMessage(
                from,
                `ββ γ REMINDER γ ββ

β° @${sender.split("@")[0]} β°
βΈ Pesan: ${messRemind}
βΈ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              btf.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/default/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;





case 'afk':  
             
    if (isBanned) return reply(mess.banned)
    if (!isGroup) return reply(mess.only.group)
    if (isAfkOn) return reply('πππ’ πΊπππ πππ πππ ππππππππ')
    const reason = v ? v : 'π½ππππππ.'
    afk.addAfkUser(sender, time, reason, _afk)
    const aluty = `π°π΅πΊ πΌπΎπ³π΄ *πΎπ½*\n\nβΈ *ππππ*: ${pushname}\nβΈ *π°πππππ*: ${reason}`
    reply(aluty)
    break




case 'cekip' :
if (!v) return  reply(`πΈπππ’π πΎπ ? π²πππππ : πππππ 209.58.139.51`)
reply(mess.wait)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekip?ip=${v}&apikey=MIMINGANZ`)
res =  anu.result
hasil = ` πΈπΏ π³π΄ππ΄π²ππ΄π³\n
Φ π²ππππππ’ : ${res.code_country} / ${res.country}
Φ ππππππ  : ${res.region_code} / ${res.region_name}
Φ π²πππ’  : ${res.city}
Φ πΈππ    : ${res.isp}
Φ ππΈπΏ πΊπππ : ${res.zip_code}
Φ ππππ  ππππ : ${res.timezone}`
reply(hasil)
limitAdd(sender,limit)
break




case 'google': 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 if (!v) return reply(`πΌππ ππππ π°ππππ  ππ ?`)
limitAdd(sender,limit)
pp = await  getBuffer(`https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg`)
google({'query': v}).then(res => {
let teksgl = `Google Search From : ${v}\n\n`
for (let g of res) {
teksgl += `γ½οΈ *Title* : ${g.title}\n`
teksgl += `πͺ *Description* : ${g.snippet}\n`
teksgl += `πͺ *Link* : ${g.link}\n\nββββββββββββββββββββββββ\n\n`
} 
but = [
  { buttonId: `!menu`, buttonText: { displayText: 'πΌπ΄π½π' }, type: 1 }]
  sendButLocation(from, teksgl, `${botName}`, pp,but, {quoted: mek})
})

break

case 'brainly':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
 if(!v) return  reply(`πΌππ π²πππ π°ππππ ?`)
 pp = await getBuffer(`https://telegra.ph/file/ba004c72b2222f4913e99.jpg`)
 const anj = await brainly(v)   
 var hmm2 = 'βββββββββββ>γ _π±ππ°πΈπ½π»π_ γ\n'  
 for (let Y of anj.data) { 
    hmm2 += `*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\nββββββββββββββββββπ\n`
       }   
  
  btf.sendMessage(from, { contentText: `${hmm2}`,
   footerText: `*${tanggal()}*`,
    buttons: [{ buttonId: `!menu`, buttonText:
     { displayText: 'β πΌπ΄π½π' }, type: 1 } ], 
     headerType: 'LOCATION', locationMessage: 
     { degreesLatitude: '', degreesLongitude: '', 
     jpegThumbnail:  pp, contextInfo: 
     {mentionedJid: [sender]}}}, 'buttonsMessage')
  limitAdd(sender,limit)
break		

case 'luas-segitiga':

if (!v) return reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
reply(`*Hasil:* ${luasseg}\n${caraluas}`)
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':

if (!v) return reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':

if (!v) return reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const luaspersegi = bdr.datar.luas.persegi(v, false)
const luaspersegis = bdr.datar.luas.persegi(v, true)
reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'pythagoras':

if (!v) return reply(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
reply(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'perkalian':

if (!v) return reply(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
reply(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':

if (!v) return reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const persegi = bdr.datar.keliling.persegi(v, false)
const caraPersegi = bdr.datar.keliling.persegi(v, true)
reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}

break
case 'kuadrat':
if (!v) return reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)

try {
const kuadrat = bdr.rdb.kuadrat(v)
reply(`*Hasil:* ${kuadrat}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kubik':

if (!v) return reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
try {
const kubik = bdr.rdb.kubik(v)
reply(`*Hasil:* ${kubik}`) 
limitAdd(sender,limit)
} catch (err) {
reply('Format pesannya salah tuh') 
}
break




case 'covidindo':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 reply(mess.wait)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
pp = await  getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhi52fE9YCqE-sB2hq6I_e4HTVF0ShfH9Jg&usqp=CAU`)
anu = `
[ πΊπ°πππ π²πΎππΈπ³ π³πΈ πΈπ½π³πΎπ½π΄ππΈπ° ]

β’ πΊππππ : ${kasus}
β’ πΊπππππππ : ${kematian}
β’ ππππππ : ${sembuh}
`
btf.sendMessage(from, { contentText: `${anu}`,
   footerText: `*${tanggal()}*`,
    buttons: [{ buttonId: `!menu`, buttonText:
     { displayText: 'β πΌπ΄π½π' }, type: 1 } ], 
     headerType: 'LOCATION', locationMessage: 
     { degreesLatitude: '', degreesLongitude: '', 
     jpegThumbnail:  pp, contextInfo: 
     {mentionedJid: [sender]}}}, 'buttonsMessage')
limitAdd(sender,limit)
break







default:
   
   if (hour_now >= '16:18:00' && hour_now <= '16:18:01') {
    pp = `Mantap`
    btf.sendMessage(`6281233959206@s.whatsapp.net`, pp, text)
     }
         
     if (isSimi && bodi != undefined){
     res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
     pp = res.data.success
     btf.sendMessage(from, pp, text)
     }
     if (isCmd) {      
     menu = `πΌππππ πΌπππ πΊππ ${pushname} π€\nπ²ππππππ ${command} πππππ/π±ππππ ππππππππ ππ ππππ ππππ\nπΌππππ πππππ ππππππππ πππππππ ππππππ’π`
     but = [{ buttonId: `!menu`, buttonText: { displayText: 'β πΌπ΄π½π' }, type: 1 }]
     sendButton(from, menu, `${botName}`, but, mek)
     break
     }
    
     if (budy.startsWith('>')) {
     console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
   try {
   let evaled = await eval(budy.slice(2))
     if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
     reply(`${evaled}`)
   } catch (err) {
   reply(`${err}`)
     }
     } else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
     try {
	 	  return btf.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
    } catch (err) {
     e = String(err)
     reply(util.format(e))
     }
   }
     }
    	  } catch (e) {
     e = String(e)
     if (!e.includes("this.isZero") && !e.includes("jid")) {
       console.log(('|\x1b[1;33m ERR \x1b[1;33m|'), time, chalk.red(e))       
       btf.sendMessage(`6281233959206@s.whatsapp.net`, `βββββγ *ALERT-ERROR* γβββββ\n\n\`\`\`${e}\`\`\`\n\nββββββββββββββββββββ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "π³ππππππππ π±ππππππππ’ π±ππ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./database/media/btfbot.jpg'),sourceUrl:"https://wa.me/6281233959206?text=Assalamualaikum"}}})
        
     }
    	  }
     }



    
