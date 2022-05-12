
const botURL = "http://t.me/DrVolondBot"
const token = "1903723885:AAGevI5SiMF1gac1xNN6Yeh48lBggWabIEc";
const adminbot = 192818801
//const DOC = SpreadsheetApp.openById("1MFl0flVhLXBrCbf7md8bP2Ttj6jummNo0MPE4FCT0dY");//Ваш ИД
//const TDSheet = DOC.getSheetByName("TDSheet");
//const Test = DOC.getSheetByName("Лісництво");
const startA1Not = "A7"
const adminbots = [-1001556676604, -1001696468576, 141431117, 192818801]
const DELIM = '❕'
const BOX = '✅'
const BOXS = ['➖', '✅']
const timeZone = "GMT+3";
const LABEL = 'Ділянка'//'Ділянка, Площа'
//var { data } = DATA

const button = lumpia.button
const Markup = lumpia.markup
const Extra = lumpia.extra

const Keyboard = Builder.keyboard
const Key = Builder.key
const helper = lumpia.helper;
lumpia.DEBUG = false
lumpia.verbose = false;
//https://github.com/telegrambotindonesia/keyboard-builder
//https://github.com/RealPeha/telegram-keyboard/blob/master/examples/telegraf/advanced.js


//End DB Section
// Log Section

const monthFormat_ru = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
const monthStandalone_ru = 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
const monthShortFormat_ru = 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_')
const monthShortStandalone_ru = 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
const weekDayNames_ru=["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
const weekDayNames_en="mondays_tuesdays_wednesdays_thursdays_fridays_saturdays_sundays".split('_')
//const Calendar = require('../');
var dayjs=DAYJS.dayjs()
var locale=dayjs.locale()
var monthNames=dayjs.monthShortStandalone_ru
//const Telegraf = require('telegraf');
// create the bot
//const bot = new Telegraf(process.env.CALENDAR_BOT_TOKEN);
const bot = new lumpia.init(token);
bot.options.log_id = '192818801'
// instantiate the calendar
const calendar = new Calendar(bot, {
    startWeekDay: 1,
    weekDayNames: weekDayNames_ru,
    monthNames: monthShortStandalone_ru
});
var test=()=>{
  console.log(monthNames)
const today = new Date();
    const minDate = new Date();
    minDate.setMonth(today.getMonth() - 2);
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 2);
    maxDate.setDate(today.getDate());
bot.tg.sendMessage(adminbot, "Here you are",calendar.setMinDate(minDate).setMaxDate(maxDate).getCalendar())


}
// listen for the selected date event
calendar.setDateListener((context, date) => context.reply(date));

// retreive the calendar HTML
bot.command("calendar", context => {

    const today = new Date();
    const minDate = new Date();
    minDate.setMonth(today.getMonth() - 2);
    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 2);
    maxDate.setDate(today.getDate());

    context.reply("Here you are", calendar.setMinDate(minDate).setMaxDate(maxDate).getCalendar())
});

function setWebHook() {
  let url = 'https://script.google.com/macros/s/AKfycbwtoPi023eK72b3qahToV0hNfqUfCGM8_rLufFETSrWpDGyu83dlJ666MIcLrsOlxRWuw/exec';
  let result = bot.telegram.setWebhook(url);
   Logger.log(result);
}

bot.start((ctx) => {
   let msg=`Ваш ID: <b>${ctx.chat.id}</b>`
  // filterUser(ctx)
  var kb=Keyboard.make(["a","b"]).inline()
   return ctx.reply("Hi",kb)
})
/*
bot.on('callback_query', ctx => {
  ctx.answerCallbackQuery("test",false)
})
*/
 function getMe(){
console.log(bot.telegram.getMe())
}

