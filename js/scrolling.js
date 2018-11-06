var maxScroll = 0;
var currScroll = 0;
var startScroll = 0;

jQuery(document).ready(function() {
  maxScroll = document.body.scrollHeight - window.innerHeight;
  startScroll = $(document).scrollTop();
  currScroll = startScroll;
  updatePB();
  updateTOC();
});

$(window).scroll(function() {
  currScroll = $(document).scrollTop();
  updatePB();
  updateTOC();
});