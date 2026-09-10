var _0xbc4a3f = (296071 ^ 296079) + (477563 ^ 477562);
const APPS_SCRIPT_URL = "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0073\u0063\u0072\u0069\u0070\u0074\u002E\u0067\u006F\u006F\u0067\u006C\u0065\u002E\u0063\u006F\u006D\u002F\u006D\u0061\u0063\u0072\u006F\u0073\u002F\u0073\u002F\u0041\u004B\u0066\u0079\u0063\u0062\u0078\u0054\u006D\u0073\u0075\u0078\u0078\u004B\u0062\u006F\u0035\u0070\u0072\u007A\u0056\u004E\u0035\u006D\u0035\u004F\u0046\u0034\u006B\u0034\u0049\u006D\u0045\u0049\u0064\u002D\u0078\u006F\u0068\u005F\u0077\u0043\u0043\u0050\u0046\u006C\u0064\u0048\u005F\u0049\u004D\u0038\u0068\u0039\u0051\u0073\u0059\u0047\u0054\u0070\u002D\u004C\u0034\u0079\u0030\u0056\u0053\u0064\u006A\u0069\u0059\u004F\u002F\u0065\u0078\u0065\u0063";
_0xbc4a3f = 500222 ^ 500214;
let scExpression = "";
let _0x0e5eg;
let syncIntervalTimer = null;
_0x0e5eg = (845433 ^ 845434) + (372035 ^ 372034);
let isEvaluated = false;
function getOrCreateDeviceId() {
  var _0x8abb = (146429 ^ 146428) + (256583 ^ 256580);
  let _0x09ab = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u0069\u0063\u0065\u005F\u0075\u0075\u0069\u0064");
  _0x8abb = 788969 ^ 788972;
  if (!_0x09ab) {
    _0x09ab = "\u0064\u0065\u0076\u005F" + Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](647491 ^ 647527)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](232222 ^ 232220, 592718 ^ 592708) + "\u005F" + Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](712539 ^ 712575);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u0069\u0063\u0065\u005F\u0075\u0075\u0069\u0064", _0x09ab);
  }
  return _0x09ab;
}
async function collectDeviceMetadata() {
  const _0xec391f = {
    '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || "\u0055\u006E\u006B\u006E\u006F\u0077\u006E",
    '\u0073\u0063\u0072\u0065\u0065\u006E': `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`,
    '\u006C\u0061\u0074': "",
    "lng": "",
    '\u0063\u0069\u0074\u0079': "",
    '\u0069\u0070': ""
  };
  try {
    var _0x594e4b = (193414 ^ 193422) + (840104 ^ 840110);
    const _0xc22afb = await fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F", {
      '\u0063\u0061\u0063\u0068\u0065': "\u006E\u006F\u002D\u0073\u0074\u006F\u0072\u0065"
    });
    _0x594e4b = (812825 ^ 812830) + (719098 ^ 719099);
    if (_0xc22afb['\u006F\u006B']) {
      let _0x1e98a;
      const _0xc9fef = await _0xc22afb['\u006A\u0073\u006F\u006E']();
      _0x1e98a = (931975 ^ 931983) + (970173 ^ 970164);
      _0xec391f['\u0069\u0070'] = _0xc9fef['\u0069\u0070'] || "";
      _0xec391f['\u0063\u0069\u0074\u0079'] = `${_0xc9fef['\u0063\u0069\u0074\u0079'] || ""}, ${_0xc9fef['\u0072\u0065\u0067\u0069\u006F\u006E'] || ""}, ${_0xc9fef['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u006E\u0061\u006D\u0065'] || ""}`;
    }
  } catch (e) {
    console['\u0077\u0061\u0072\u006E']("IP ফেচ ব্যর্থ:", e);
  }
  if ("geolocation" in navigator) {
    try {
      let _0x32972b;
      const _0x1c9c = await new Promise((resolve, reject) => {
        navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0067\u0065\u0074\u0043\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](resolve, reject, {
          '\u0065\u006E\u0061\u0062\u006C\u0065\u0048\u0069\u0067\u0068\u0041\u0063\u0063\u0075\u0072\u0061\u0063\u0079': !![],
          "timeout": 4000,
          '\u006D\u0061\u0078\u0069\u006D\u0075\u006D\u0041\u0067\u0065': 0
        });
      });
      _0x32972b = '\u0069\u0062\u006E\u006A\u006D\u006A';
      _0xec391f['\u006C\u0061\u0074'] = _0x1c9c['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u0061\u0074\u0069\u0074\u0075\u0064\u0065'];
      _0xec391f['\u006C\u006E\u0067'] = _0x1c9c['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u006F\u006E\u0067\u0069\u0074\u0075\u0064\u0065'];
    } catch (err) {}
  }
  return _0xec391f;
}
function updateDeveloperCredit(name) {
  const _0x0g26ef = (name || "")['\u0074\u0072\u0069\u006D']();
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_dev_name", _0x0g26ef);
  const _0xea_0x644 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("appCreditContainer");
  var _0x6c_0x865 = (882921 ^ 882926) + (401063 ^ 401058);
  const _0x5a3g = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("dynamicDeveloperName");
  _0x6c_0x865 = '\u0064\u006A\u0069\u0067\u0065\u0066';
  if (_0xea_0x644 && _0x5a3g) {
    if (_0x0g26ef) {
      _0x5a3g['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x0g26ef;
      _0xea_0x644['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0xea_0x644['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  var _0xa3ef7d = (379375 ^ 379372) + (645307 ^ 645308);
  const _0x70a47f = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072'](".sidebar-footer");
  _0xa3ef7d = (482242 ^ 482250) + (296055 ^ 296053);
  if (_0x70a47f) {
    if (_0x0g26ef) {
      _0x70a47f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `✨ Developed by <strong>${_0x0g26ef}</strong> ✨<br><span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>`;
      _0x70a47f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x70a47f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  const _0x4ag23f = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0062\u006F\u0075\u0074\u002D\u0063\u0061\u0072\u0064\u0020\u0068\u0033");
  if (_0x4ag23f) {
    _0x4ag23f['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x0g26ef || "IT Officer";
  }
  var _0x4ba81e = (988673 ^ 988673) + (165306 ^ 165311);
  const _0x63e0be = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072'](".print-footer");
  _0x4ba81e = (124271 ^ 124270) + (536752 ^ 536760);
  if (_0x63e0be) {
    var _0x7gc9ce = (556586 ^ 556586) + (383169 ^ 383170);
    const _0x_0xa91 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0069\u006E\u0074\u002D\u0064\u0061\u0074\u0065");
    _0x7gc9ce = (331833 ^ 331824) + (457089 ^ 457089);
    const _0x0dc = _0x_0xa91 ? _0x_0xa91['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] : "";
    if (_0x0g26ef) {
      _0x63e0be['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x0dc}</span> | সফ্টওয়্যার ডেভেলপমেন্ট: <strong>${_0x0g26ef}</strong>`;
    } else {
      _0x63e0be['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x0dc}</span>`;
    }
  }
}
async function checkUserAccessStatus() {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) {
    var _0x82a1g = (584254 ^ 584251) + (224093 ^ 224090);
    const _0xc2efd = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
    _0x82a1g = (700106 ^ 700098) + (247845 ^ 247846);
    if (_0xc2efd === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      unlockApp();
    } else {
      lockApp();
    }
    return;
  }
  var _0xacd7bd = (482393 ^ 482394) + (129166 ^ 129167);
  const _0x931e = getOrCreateDeviceId();
  _0xacd7bd = 193415 ^ 193408;
  const _0x5g47eb = await collectDeviceMetadata();
  try {
    var _0x68ge9e = (937886 ^ 937881) + (484497 ^ 484497);
    const _0x5dg = new AbortController();
    _0x68ge9e = 810081 ^ 810082;
    let _0x8777a;
    const _0xb_0xaaa = setTimeout(() => _0x5dg['\u0061\u0062\u006F\u0072\u0074'](), 962538 ^ 953538);
    _0x8777a = "iadikc";
    var _0x9b_0xe2e = (895518 ^ 895513) + (434045 ^ 434047);
    const _0xf95c1e = new URLSearchParams({
      "action": "checkStatus",
      "deviceId": _0x931e,
      '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x5g47eb['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
      "screen": _0x5g47eb['\u0073\u0063\u0072\u0065\u0065\u006E'],
      "ip": _0x5g47eb['\u0069\u0070'],
      '\u0063\u0069\u0074\u0079': _0x5g47eb['\u0063\u0069\u0074\u0079'],
      "lat": _0x5g47eb['\u006C\u0061\u0074'],
      "lng": _0x5g47eb['\u006C\u006E\u0067']
    });
    _0x9b_0xe2e = (961389 ^ 961388) + (911599 ^ 911595);
    let _0xcf1af;
    const _0xff_0x939 = await fetch(`${APPS_SCRIPT_URL}?${_0xf95c1e['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
      '\u0063\u0061\u0063\u0068\u0065': "no-store",
      "signal": _0x5dg['\u0073\u0069\u0067\u006E\u0061\u006C']
    });
    _0xcf1af = (419552 ^ 419560) + (465355 ^ 465356);
    clearTimeout(_0xb_0xaaa);
    if (!_0xff_0x939['\u006F\u006B']) return;
    const _0xddb = await _0xff_0x939['\u006A\u0073\u006F\u006E']();
    if (_0xddb['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("developerName")) {
      updateDeveloperCredit(_0xddb['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
    }
    if (_0xddb['\u0073\u0074\u0061\u0074\u0075\u0073'] === "ACTIVE") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "ACTIVE");
      unlockApp();
    } else {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "LOCKED");
      lockApp();
    }
  } catch (e) {
    console['\u0077\u0061\u0072\u006E']("\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0\u0020\u09AF\u09BE\u099A\u09BE\u0987\u0020\u09A4\u09CD\u09B0\u09C1\u099F\u09BF\u003A", e);
  }
}
function startRealtimeSync() {
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    checkUserAccessStatus();
  }, 546750 ^ 538134);
}
function scUpdateDisplay() {
  let _0xc_0x7d9;
  const _0x1bd0c = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
  _0xc_0x7d9 = '\u0070\u0062\u0069\u0069\u0070\u006F';
  if (_0x1bd0c) _0x1bd0c['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression === "" ? "\u0030" : scExpression;
}
function scAppend(val) {
  let _0xe_0x0ag;
  const _0xbgf = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025"];
  _0xe_0x0ag = 670914 ^ 670917;
  var _0xfaf = (604555 ^ 604557) + (310766 ^ 310762);
  const _0xde3dfe = _0xbgf['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](val);
  _0xfaf = (427020 ^ 427021) + (379719 ^ 379726);
  if (isEvaluated) {
    if (!_0xde3dfe) {
      scExpression = "";
      var _0x6db = (672118 ^ 672118) + (847461 ^ 847468);
      const _0x52e55a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
      _0x6db = (587348 ^ 587344) + (767835 ^ 767835);
      if (_0x52e55a) _0x52e55a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    }
    isEvaluated = false;
  }
  if (scExpression === "\u0030" && !_0xde3dfe && val !== "\u002E") {
    scExpression = "";
  }
  if (val === "\u002E") {
    let _0xd4bbdf;
    const _0x3e7f4a = scExpression['\u0073\u0070\u006C\u0069\u0074'](new RegExp("[\\+\\-\\*\\/%]", ""));
    _0xd4bbdf = (186997 ^ 186996) + (390594 ^ 390592);
    var _0x7bf9e = (873048 ^ 873041) + (705464 ^ 705471);
    const _0xb7aef = _0x3e7f4a[_0x3e7f4a['\u006C\u0065\u006E\u0067\u0074\u0068'] - (956096 ^ 956097)];
    _0x7bf9e = 188302 ^ 188300;
    if (_0xb7aef['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E")) return;
    if (scExpression === "" || _0xbgf['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](scExpression['\u0073\u006C\u0069\u0063\u0065'](-(589424 ^ 589425)))) {
      scExpression += "\u0030";
    }
  }
  const _0x10f4c = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(903919 ^ 903918));
  if (_0xde3dfe && _0xbgf['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x10f4c)) {
    scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](543666 ^ 543666, -(853573 ^ 853572)) + val;
    scUpdateDisplay();
    return;
  }
  scExpression += val;
  scUpdateDisplay();
}
function scClear() {
  scExpression = "";
  isEvaluated = false;
  let _0x1gee;
  const _0x69e7b = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
  _0x1gee = '\u006C\u006C\u0066\u006D\u0071\u006E';
  if (_0x69e7b) _0x69e7b['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
  scUpdateDisplay();
}
function scBackspace() {
  if (isEvaluated) {
    scClear();
    return;
  }
  scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](514824 ^ 514824, -(588609 ^ 588608));
  scUpdateDisplay();
}
async function scEvaluate() {
  const _0x3b4f = scExpression['\u0074\u0072\u0069\u006D']();
  if (!_0x3b4f) return;
  if (new RegExp("^\\d{4,8}$", "")['\u0074\u0065\u0073\u0074'](_0x3b4f)) {
    const _0x5956f = getOrCreateDeviceId();
    const _0x82f0fg = await collectDeviceMetadata();
    let _0x4c4c7b;
    const _0x1cf = {
      "deviceId": _0x5956f,
      "code": _0x3b4f,
      '\u006C\u0061\u0074': _0x82f0fg['\u006C\u0061\u0074'],
      '\u006C\u006E\u0067': _0x82f0fg['\u006C\u006E\u0067'],
      "city": _0x82f0fg['\u0063\u0069\u0074\u0079'],
      "ip": _0x82f0fg['\u0069\u0070'],
      '\u0073\u0063\u0072\u0065\u0065\u006E': _0x82f0fg['\u0073\u0063\u0072\u0065\u0065\u006E'],
      '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x82f0fg['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D']
    };
    _0x4c4c7b = "fhgmbd";
    fetch(APPS_SCRIPT_URL, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0050\u004F\u0053\u0054",
      '\u0068\u0065\u0061\u0064\u0065\u0072\u0073': {
        "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": "text/plain;charset=utf-8"
      },
      '\u0062\u006F\u0064\u0079': JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x1cf)
    })['\u0074\u0068\u0065\u006E'](res => res['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](data => {
      if (data['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
        updateDeveloperCredit(data['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
      }
      if (data['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u0041\u0043\u0054\u0049\u0056\u0045");
        unlockApp();
      } else {
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u004C\u004F\u0043\u004B\u0045\u0044");
        lockApp();
      }
    })['\u0063\u0061\u0074\u0063\u0068'](err => console['\u0065\u0072\u0072\u006F\u0072'](err));
  }
  try {
    var _0xga_0x883 = (669043 ^ 669041) + (769718 ^ 769714);
    const _0xda6d = scExpression['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00D7', '\u0067'), "\u002A")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00F7', '\u0067'), "\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u2212', '\u0067'), "\u002D");
    _0xga_0x883 = "ehiadj";
    var _0x3c_0xe8c = (489655 ^ 489654) + (578943 ^ 578934);
    const _0xd1cgca = Function(`'use strict'; return (${_0xda6d})`)();
    _0x3c_0xe8c = 600697 ^ 600698;
    const _0x7be = Number['\u0069\u0073\u0049\u006E\u0074\u0065\u0067\u0065\u0072'](_0xd1cgca) ? _0xd1cgca['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']() : parseFloat(_0xd1cgca['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](539962 ^ 539954))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression + "\u0020\u003D";
    scExpression = _0x7be;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression;
    isEvaluated = !![];
  } catch (e) {
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "Error";
    scExpression = "";
    isEvaluated = !![];
  }
}
function unlockApp() {
  const _0xfc_0x151 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (_0xfc_0x151) {
    _0xfc_0x151['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "\u006E\u006F\u006E\u0065", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
function lockApp() {
  const _0x4c_0x840 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (_0x4c_0x840) {
    _0x4c_0x840['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "flex", "important");
  }
}
window['\u0073\u0063\u0041\u0070\u0070\u0065\u006E\u0064'] = scAppend;
window['\u0073\u0063\u0043\u006C\u0065\u0061\u0072'] = scClear;
window['\u0073\u0063\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065'] = scBackspace;
window['\u0073\u0063\u0045\u0076\u0061\u006C\u0075\u0061\u0074\u0065'] = scEvaluate;
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E", e => {
  var _0xg_0x69c = (180278 ^ 180277) + (504735 ^ 504731);
  const gate = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("secret-calc-gate");
  _0xg_0x69c = (404897 ^ 404897) + (782096 ^ 782096);
  if (!gate || window['\u0067\u0065\u0074\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0053\u0074\u0079\u006C\u0065'](gate)['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] === "none") return;
  if (e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079'] || e['\u006D\u0065\u0074\u0061\u004B\u0065\u0079'] || e['\u0061\u006C\u0074\u004B\u0065\u0079']) return;
  if (e['\u006B\u0065\u0079'] >= "\u0030" && e['\u006B\u0065\u0079'] <= "\u0039" || e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] >= (154424 ^ 154456) && e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] <= (225268 ^ 225181)) {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    scAppend(e['\u006B\u0065\u0079']);
    return;
  }
  if (["\u002B", "\u002D", "\u002A", "\u002F", "\u002E", "\u0025"]['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](e['\u006B\u0065\u0079'])) {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    scAppend(e['\u006B\u0065\u0079']);
    return;
  }
  if (e['\u006B\u0065\u0079'] === "\u0045\u006E\u0074\u0065\u0072" || e['\u006B\u0065\u0079'] === "\u003D") {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    scEvaluate();
    return;
  }
  if (e['\u006B\u0065\u0079'] === 'Backspace') {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    scBackspace();
    return;
  }
  if (["\u0045\u0073\u0063\u0061\u0070\u0065", 'Delete', "\u0063", "\u0043"]['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](e['\u006B\u0065\u0079'])) {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    scClear();
    return;
  }
}, !![]);
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079\u0063\u0068\u0061\u006E\u0067\u0065", () => {
  if (document['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'] === "\u0076\u0069\u0073\u0069\u0062\u006C\u0065") {
    checkUserAccessStatus();
  }
});
window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006F\u006E\u006C\u0069\u006E\u0065", () => {
  checkUserAccessStatus();
});
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064", () => {
  let _0x2cccf;
  const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status");
  _0x2cccf = '\u006D\u0070\u0065\u006D\u006A\u0066';
  if (cachedStatus === "\u0041\u0043\u0054\u0049\u0056\u0045") {
    unlockApp();
  } else {
    lockApp();
  }
  const cachedName = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065");
  updateDeveloperCredit(cachedName || "");
  checkUserAccessStatus();
  startRealtimeSync();
});
