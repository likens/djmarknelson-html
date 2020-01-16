$(document).ready(function () {
	var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
	if (isTouch === true) {
		$('html').addClass('touch');
	}
	$('#djmnAudio').jPlayer({
		swfPath: "http://jplayer.org/latest/js",
		supplied: "mp3",
		cssSelectorAncestor: '.mix',
		volume: '.5',
		cssSelector: {
			play: '#mixPlay',
			pause: '#mixPause',
			seekBar: '.seek-bar',
			playBar: '.play-bar',
			mute: '#mixMute',
			volumeBar: '.volume-bar',
			volumeBarValue: '.volume-bar-value',
			volumeMax: '#mixMax',
			currentTime: '.current'
		},
	});
	$('#mixPlay').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('played')) {
			var mp3Link = $(this).attr('data-src');
			$('#djmnAudio').jPlayer("setMedia", {
				mp3: mp3Link
			}).jPlayer('play');
			$(this).addClass('played');
		} else {
			$('#djmnAudio').jPlayer('play');
		}
		$('body').addClass('playing');
	});
});

