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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94751607078";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_01_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdEUTRNci9IKzY1OHZvOXVmaEtwb0dhVHZJN01TMm53Z0dCeVMrNzlPQUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNrY3hrY2wtUmhhZmlMNTI3a3kwLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDY2MDZiOTItNGU5MC00YjI5LTgwNTQtOTAzMGZlYTk0ZWNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU5LFxuICAgICAgMTA2LFxuICAgICAgMTI4LFxuICAgICAgMTkwLFxuICAgICAgNzUsXG4gICAgICA5MixcbiAgICAgIDIxNixcbiAgICAgIDU4LFxuICAgICAgNDksXG4gICAgICA4NCxcbiAgICAgIDEzMyxcbiAgICAgIDM5LFxuICAgICAgMTYxLFxuICAgICAgMTk0LFxuICAgICAgNDksXG4gICAgICAxMTcsXG4gICAgICAxNzUsXG4gICAgICAxODAsXG4gICAgICAyMjgsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMzUsXG4gICAgICAxNDUsXG4gICAgICA5NixcbiAgICAgIDE4MCxcbiAgICAgIDc4LFxuICAgICAgMTcsXG4gICAgICAxNCxcbiAgICAgIDgsXG4gICAgICAxNDUsXG4gICAgICAyMTQsXG4gICAgICAxMDgsXG4gICAgICAzMSxcbiAgICAgIDIyNSxcbiAgICAgIDEzMCxcbiAgICAgIDE4MCxcbiAgICAgIDEzOCxcbiAgICAgIDIzNSxcbiAgICAgIDgyLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdXN1lRQkVLNlMxTE1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3bWdOSlEvSDVmV0FnUFNRWE1HbEx5RHQ1ZFdHdmNwVks0bTNrbmZaWVd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh2cHpGYytwSUVTYndzTmM0TEl3bmYyR2IzenZ6bjZ4SWYrcDBsUjd5T0NTQlJhNk5ZRWMzQmdQNkpSQUV4M3cwYS9VbWZGZDE0ME1hWnJsUjYwSEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImMyNzc3TDA3RzA3UnA0ajdWQmcxNE9GVlgrZmFvWmNHdERXMzgrOHBta0s4NjRSbWlicnpxd3ZxS0UySWl0cmRsVDFETUVKc0I1TWczZ2JnNndZSmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTE2MDcwNzg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIo4oCiyoDhtIDKnOG0nMqfKirqnLHhtIDqnLHhtIDJtOG0i+G0gOKAoilcIixcbiAgICBcImxpZFwiOiBcIjk5NjM5MzY1Nzc1NTY2OjE2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTE2MDcwNzg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5NDYwOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFSnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVKcS5qc29uIjogIntcImtleURhdGFcIjpcImFCam00aGNPYWZ4RklIekNVUmVTb3Aycllwd2lwdERXUWJtOFpiRmlDcDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4NjEyODAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY4MDUwNjYwNzVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSnIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuN2czMjY4em5EdkdqSThaY2IwTWxuWHc5VVU5ZytGeU5qcjJkcURueUM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODYxMjgwMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzM5NDU5NDY3NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVKcy5qc29uIjogIntcImtleURhdGFcIjpcIldxdWhjU0YzdFB6WHF4Rkc5VFlzenFIMmdIYUlZeHluQnlaUnp5dWFTdG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4NjEyODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTczOTQ3OTQyMDlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4L0RGUHduY2J2azNQQlN3T2pRK1FJakVJNVZITFpzcU1IVlVjM0RHNGxNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODYxMjgwMSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFSnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5bEVpb2taR3VrSG5SM0ttNHdQbEpkZ0o3VVlLZTRncm51ZjJMTmxJaXRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3ODYxMjgwMSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUp2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnFPOUVCak0va3VMWUVxNlNIT2hVbUI2dnFBYzRITmRIUnZEV0x6Qk9pVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzg2MTI4MDEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5NDU5NTQ4MThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
