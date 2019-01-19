var over = new TimelineLite({ paused: true }),
  out = new TimelineLite({ paused: true });

TweenLite.set(".main-subtitle", { yPercent: 100 });

over
  .to($(".main-title"), 0.3, { yPercent: -100 }, 0)
  .fromTo(".main-subtitle", 0.3, { immediateRender: false, yPercent: 100 }, { yPercent: 0 }, 0);

out
  .to($(".main-subtitle"), 0.3, { yPercent: -100 }, 0)
  .fromTo($(".main-title"), 0.3, { immediateRender: false, yPercent: 100 }, { yPercent: 0 }, 0);

$(".next-project-title").hover(mouseOver, mouseOut);

function mouseOver() {
  if (out.isActive()) {
    out.timeScale(3);
    over.delay(0.1);
  } else {
    over.delay(0).timeScale(1);
  }
  over.play(0);
}

function mouseOut() {
  if (over.isActive()) {
    over.timeScale(3);
    out.delay(0.1);
  } else {
    out.delay(0).timeScale(1);
  }
  out.play(0);
}