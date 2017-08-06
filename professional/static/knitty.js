

var festival_date = new Date("October 19, 2017");
var festival_time = festival_date.getTime();
var today = new Date();
var today_time = today.getTime();
var time_left = festival_time - today_time;
var days_left = Math.ceil( time_left / (1000*60*60*24));

var adMsg = "Get ready! The Rhinebeck Sheep & wool festival is Oct 19th thru the 22nd. There are " + days_left + " days until the festival.";
var beginPos = 0;

function scroll_announce() {
    msgForm.scrollingMsg.value = adMsg.substring(beginPos, adMsg.length)+adMsg.substring(0, beginPos);
    beginPos += 1;

    if (beginPos > adMsg.length) {
        beginPos = 0
    }
    
    window.setTimeout("scroll_announce()", 200)

}
