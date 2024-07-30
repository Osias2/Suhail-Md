const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263786619852";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_53_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxUXIzejJVYitqTmJ4UFlrQlZyS0lybC9NbWU3c2tweThwVE9PeGRkQ29rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NjYxOTg1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUVCMzI2RkQ3M0VFQTcxNzE0N0U5RDUxRjYxNzgwNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzYyMDEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFwM2xTWnBuU2hLVDhldnFjYmYtVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjY0OWQyN2EtOWJlMS00ZDQzLTg0YTUtN2M0OWJlMDZjYjhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE1OSxcbiAgICAgIDM1LFxuICAgICAgMTc1LFxuICAgICAgMjEwLFxuICAgICAgMjksXG4gICAgICA4MSxcbiAgICAgIDIwLFxuICAgICAgMTgzLFxuICAgICAgMjQxLFxuICAgICAgNTEsXG4gICAgICAxMyxcbiAgICAgIDYsXG4gICAgICA2LFxuICAgICAgOTQsXG4gICAgICAzNixcbiAgICAgIDE0NSxcbiAgICAgIDQ3LFxuICAgICAgOTEsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDkzLFxuICAgICAgNTgsXG4gICAgICA0OSxcbiAgICAgIDI5LFxuICAgICAgNyxcbiAgICAgIDE4MyxcbiAgICAgIDkyLFxuICAgICAgMTM4LFxuICAgICAgMTkyLFxuICAgICAgNzgsXG4gICAgICAxMDEsXG4gICAgICA0MCxcbiAgICAgIDExOCxcbiAgICAgIDEzMCxcbiAgICAgIDE4NCxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgMTgxLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRN0pFTjVHSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg2NjE5ODUyOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjM1ODcxMzM4MjUwMzk6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT1NJQVNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM2Q1N3dDRUpiUnBMVUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlc4VW5GUEQ2dGZ1dExtMjErMmtaeHpvM1gzTFZaSFBNS29tQXZDM1hyQWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmtwanRPY3lhWDN4MmFuVkpPRXByQllnYzVxemhRdWpqWGhuWFB0UEczN0Y4U2lLbGFOeUpuQ1dVeDU0bEZRTjU0YzVucFBkaGZaUlE3RHMvVHJIRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMzRrRTFoaWt6YXp6TytTYmczWmpiYmxZVlRLWldGRWUvMGNIUk01WjNIVy8vL1lYWHNrMGJpMzNzV2xST3NYWGpmWllyczI5WUh5UnVjVkdUSkFEQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg2NjE5ODUyOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzYyMDEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1lrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtM3VjU2N2S2FNSUtCWVpEMS90RGFTWjZjMXRqNnlnSFNwcFdNWWNiQ2lJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NDM5OTUxNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OSIAS-TECH",
  ownername:process.env.OWNER_NAME|| "OSIAS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
