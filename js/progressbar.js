var maxScroll = 0;
var currScroll = 0;

jQuery(document).ready(function() {
  maxScroll = document.body.scrollHeight - window.innerHeight;
});

$(window).scroll(function() {
  currScroll = $(document).scrollTop();
  updatePB();
});

function updatePB() {
  if (currScroll && maxScroll) {
    $('#pb').attr('value', (currScroll / maxScroll) * 100);
  }
}