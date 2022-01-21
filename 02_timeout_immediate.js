setTimeout(function() {
  console.log('setTimeout')
}, 0);

setImmediate(function() {
  console.log('setImmediate')
});

// setTimeout not always first (the 0 is actually 1)
// https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#93
