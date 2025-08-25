//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpUQ1dRa2RhQ1FobDdLZFZ2Um1tZ3o5TjgzRSsyc1VOZitYYms4MWdFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVpydFVmaGV4cUVDNU0wcDhYemNuVnhsTmtySTU4VkIrVVgwbzhmc0FRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHhweVFqL2tBS3dBKytaQ0pEWUJjQ3Nsb0NEdXB0RGRCUkhhbEpaL1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3YXE5bFJ6N2RBZWllenNYM04wWFFNbndNdndzVDhOdHhoZ1BRakc0c2lzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HSjNqU3VFVW83dnVsWWFpSGprQmViaVhFZzdHSUF2WXR4U1I5aS9iM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im51UjVQQkZ4L1pRSlV0NFNhcWYwNEtjZ0RsNlBCNmQwQ3Z4YS9SQzNNams9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURkS0ZPZjYzSCtkVGNIMUVOSFBUaGhMRFUycnlZSHJRSDJOTFpYWWpXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3R1OWRvK25pQlZMbDFaUWtVWkt0SlVRQ0ZYTUd2Y2UrTEcvQTlmUWlERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlArZm1iVzhwUnJMa0E3TS9yYXVieG1YUFczcTA5TDFjdW9CdkZ0THREelFqbGtwa2xMYzUyRFhiaXZrVGtpaUFNOWswMEJPa0x1ckQ3VHdkTHBqemdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6ImxoaS9FdjU5cTA4dWFCc1RCdzY0aE5NQTlTUXBORnEyM0ZBMGMxOGQ0aDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlpCNU45MVZEIiwibWUiOnsiaWQiOiI5NDc3NjQ0OTA2Mjo0OEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI4MTE5MTk3ODY4ODU5OTo0OEBsaWQiLCJuYW1lIjoi5Yeg5Y2C44Sl5LmH5LmH5LiC5Y2E5Y2CIOGXquS5h+WHoOOEqeWxseWNguWHoCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDdjaE5NREVKZVlzY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVVIZThDZ3lqY0xoRkRVWUk1dUhSSno4OGpvOG92bzZJQ3hKN3lwN3YyVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ3hjS0xxNHdWVFRabTJiNDd5WlQxc2hyZFBLNldOTzV0NmJVN1JKeVVzZVBDQ2lYUjBoY3RsZGxkL0hrU1pha3U4TW1hZ0xiUGVlVm9GYU0wVzRaQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9tRlAzcDN0NE1LRm1oa1EzQUFkMFJUMkl3NEwrWWRadnR1a0o2c3lMWXNxL1N1Tmxjd1laUExoSXB4K053WTg1bmpWQlltekhyUU9lREFWcVZiK2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY0NDkwNjI6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWxCM3ZBb01vM0M0UlExR0NPYmgwU2MvUEk2UEtMNk9pQXNTZThxZTc5bCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MTIyMTQ4LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSG50In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
