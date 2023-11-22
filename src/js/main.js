const x = $(window).height();
console.log(x);
$(document).scroll(function () {
  var top = $(this).scrollTop();
  const y = top / x;
  if (y <= 0.2) $("#slide-1").fadeIn();
  else $("#slide-1").fadeOut();

  if (y <= 0.4 && y >= 0.2) $("#slide-2").fadeIn();
  else $("#slide-2").fadeOut();

  if (y <= 0.6 && y >= 0.4) $("#slide-3").fadeIn();
  else $("#slide-3").fadeOut();

  if (y <= 0.8 && y >= 0.6) $("#slide-4").fadeIn();
  else $("#slide-4").fadeOut();

  if (y <= 1 && y >= 0.8) $("#slide-5").fadeIn();
  else $("#slide-5").fadeOut();
});
