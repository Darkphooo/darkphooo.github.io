;(window.dayNightImage = function(){
    var src
    var time = new Date()
    var hour = time.getHours()
    // set src to image url according to hour
	if ( 7<=hour && hour<=15) src='/img/banner_Day.jpg'
    if (16<=hour && hour<=19) src='/img/banner_Sunset.jpg'
    if (hour>=20 || hour<=6 ) src='/img/banner_Night.jpg'
    document.write('<img src="'+src+'" alt="'+src+'" />')
})