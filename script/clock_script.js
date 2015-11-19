function analogClock(){
}
analogClock.prototype.run = function() {
    var date = new Date();
    var second = date.getSeconds()* 6;
    var minute = date.getMinutes()* 6 + second / 60;
    var hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;
    jQuery('#hour').css("transform", "rotate(" + hour + "deg)");
    jQuery('#minute').css("transform", "rotate(" + minute + "deg)");
    jQuery('#second').css("transform", "rotate(" + second + "deg)");
	var time = document.getElementById("digital_time");
	var new_hour = date.getHours()%12;
	var ap = "AM";
	if (date.getHours()>12)
		ap = "PM";
	time.innerHTML=""+new_hour+":"+ date.getMinutes()+":"+ date.getSeconds()+" "+ap;
};


jQuery(document).ready(function(){

var analogclock = new analogClock();

window.setInterval(function(){ 

analogclock.run(); 

}, 1000);

});