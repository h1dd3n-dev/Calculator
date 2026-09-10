let _0x73fab;
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKmhTDDHqUDLBMsM_M5Sjz-Sp2HhAQbLA0CBMnkwopO1ppDvGUSZIR-GQuihpCzbqy/exec";
_0x73fab = (203522 ^ 203523) + (313575 ^ 313575);
let consecutiveCount = 496758 ^ 496758;
let lastInputCode = "";
let scExpression = "";
let _0x66beb;
let syncIntervalTimer = null;
_0x66beb = 662071 ^ 662067;
let _0xa34g2d;
let isEvaluated = false;
_0xa34g2d = 182793 ^ 182798;
function getOrCreateDeviceId() {
  let _0xd53bg = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid");
  if (!_0xd53bg) {
    _0xd53bg = "\u0064\u0065\u0076\u005F" + Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](511717 ^ 511681)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](670853 ^ 670855, 938470 ^ 938476) + "\u005F" + Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](784601 ^ 784637);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u0069\u0063\u0065\u005F\u0075\u0075\u0069\u0064", _0xd53bg);
  }
  return _0xd53bg;
}
async function collectDeviceMetadata() {
  const _0x224d = {
    '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || "\u0055\u006E\u006B\u006E\u006F\u0077\u006E",
    "screen": `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`,
    '\u006C\u0061\u0074': "",
    '\u006C\u006E\u0067': "",
    '\u0063\u0069\u0074\u0079': "",
    '\u0069\u0070': ""
  };
  try {
    const _0x4dea = await fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F", {
      '\u0063\u0061\u0063\u0068\u0065': "no-store"
    });
    if (_0x4dea['\u006F\u006B']) {
      let _0x7e853f;
      const _0x2e9c = await _0x4dea['\u006A\u0073\u006F\u006E']();
      _0x7e853f = (770890 ^ 770891) + (701502 ^ 701502);
      _0x224d['\u0069\u0070'] = _0x2e9c['\u0069\u0070'] || "";
      _0x224d['\u0063\u0069\u0074\u0079'] = `${_0x2e9c['\u0063\u0069\u0074\u0079'] || ""}, ${_0x2e9c['\u0072\u0065\u0067\u0069\u006F\u006E'] || ""}, ${_0x2e9c['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u006E\u0061\u006D\u0065'] || ""}`;
    }
  } catch (e) {
    console['\u0077\u0061\u0072\u006E']("\u0049\u0050\u0020\u09AB\u09C7\u099A\u0020\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u003A", e);
  }
  if ("geolocation" in navigator) {
    try {
      let _0x23dfeb;
      const _0x19967e = await new Promise((resolve, reject) => {
        navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0067\u0065\u0074\u0043\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](resolve, reject, {
          '\u0065\u006E\u0061\u0062\u006C\u0065\u0048\u0069\u0067\u0068\u0041\u0063\u0063\u0075\u0072\u0061\u0063\u0079': !![],
          "timeout": 4000,
          '\u006D\u0061\u0078\u0069\u006D\u0075\u006D\u0041\u0067\u0065': 0
        });
      });
      _0x23dfeb = (340849 ^ 340851) + (914678 ^ 914672);
      _0x224d['\u006C\u0061\u0074'] = _0x19967e['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u0061\u0074\u0069\u0074\u0075\u0064\u0065'];
      _0x224d['\u006C\u006E\u0067'] = _0x19967e['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u006F\u006E\u0067\u0069\u0074\u0075\u0064\u0065'];
    } catch (err) {}
  }
  return _0x224d;
}
function updateDeveloperCredit(name) {
  const _0xbdc94f = (name || "")['\u0074\u0072\u0069\u006D']();
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_dev_name", _0xbdc94f);
  const _0x756c0d = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("appCreditContainer");
  var _0x745ged = (118758 ^ 118767) + (576356 ^ 576358);
  const _0x7b589f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("dynamicDeveloperName");
  _0x745ged = 220905 ^ 220905;
  if (_0x756c0d && _0x7b589f) {
    if (_0xbdc94f) {
      _0x7b589f['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xbdc94f;
      _0x756c0d['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x756c0d['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
  }
  var _0x8c_0x8ec = (905927 ^ 905935) + (131105 ^ 131108);
  const _0x6b78a = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  _0x8c_0x8ec = (622314 ^ 622312) + (141974 ^ 141970);
  if (_0x6b78a) {
    if (_0xbdc94f) {
      _0x6b78a['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `✨ Developed by <strong>${_0xbdc94f}</strong> ✨<br><span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>`;
      _0x6b78a['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x6b78a['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  const _0x2effa = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0062\u006F\u0075\u0074\u002D\u0063\u0061\u0072\u0064\u0020\u0068\u0033");
  if (_0x2effa) {
    _0x2effa['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xbdc94f || "\u0049\u0054\u0020\u004F\u0066\u0066\u0069\u0063\u0065\u0072";
  }
  const _0xe01d = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0070\u0072\u0069\u006E\u0074\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  if (_0xe01d) {
    const _0xb4feaa = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("print-date");
    const _0x46745d = _0xb4feaa ? _0xb4feaa['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] : "";
    if (_0xbdc94f) {
      _0xe01d['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x46745d}</span> | সফ্টওয়্যার ডেভেলপমেন্ট: <strong>${_0xbdc94f}</strong>`;
    } else {
      _0xe01d['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x46745d}</span>`;
    }
  }
}
async function checkUserAccessStatus() {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) {
    var _0xbbd3c = (151067 ^ 151070) + (303370 ^ 303370);
    const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
    _0xbbd3c = (649003 ^ 649001) + (532999 ^ 533007);
    if (cachedStatus === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      unlockApp();
    } else {
      lockApp();
    }
    return;
  }
  const _0xg219e = getOrCreateDeviceId();
  try {
    const _0xdbc7b = new AbortController();
    const _0x5feg0a = setTimeout(() => _0xdbc7b['\u0061\u0062\u006F\u0072\u0074'](), 728600 ^ 721240);
    var _0xb_0x265 = (145635 ^ 145634) + (609674 ^ 609677);
    const _0xac4c3c = await fetch(`${APPS_SCRIPT_URL}?action=checkStatus&deviceId=${encodeURIComponent(_0xg219e)}`, {
      '\u0063\u0061\u0063\u0068\u0065': "\u006E\u006F\u002D\u0073\u0074\u006F\u0072\u0065",
      "signal": _0xdbc7b['\u0073\u0069\u0067\u006E\u0061\u006C']
    });
    _0xb_0x265 = (645697 ^ 645698) + (584596 ^ 584605);
    clearTimeout(_0x5feg0a);
    if (!_0xac4c3c['\u006F\u006B']) return;
    const _0x30a = await _0xac4c3c['\u006A\u0073\u006F\u006E']();
    if (_0x30a['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
      updateDeveloperCredit(_0x30a['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
    }
    if (_0x30a['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u0041\u0043\u0054\u0049\u0056\u0045");
      unlockApp();
    } else if (_0x30a['\u0073\u0074\u0061\u0074\u0075\u0073'] === "LOCKED" || _0x30a['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0042\u004C\u004F\u0043\u004B\u0045\u0044" || _0x30a['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0050\u0045\u004E\u0044\u0049\u004E\u0047") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u004C\u004F\u0043\u004B\u0045\u0044");
      lockApp();
    }
  } catch (e) {
    console['\u0077\u0061\u0072\u006E']("সার্ভার চেক টাইমআউট/ব্যর্থ। পূর্বের ক্যাশ অনুযায়ী কার্যকর থাকছে।", e);
    let _0x3gfb3f;
    const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status");
    _0x3gfb3f = 576829 ^ 576826;
    if (cachedStatus === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      unlockApp();
    }
  }
}
function startRealtimeSync() {
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    checkUserAccessStatus();
  }, 626993 ^ 648193);
}
function scUpdateDisplay() {
  const _0xcdab = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079");
  if (_0xcdab) _0xcdab['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression === "" ? "\u0030" : scExpression;
}
function scAppend(val) {
  var _0xc580b = (809231 ^ 809230) + (606108 ^ 606108);
  const _0x74a88a = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025"];
  _0xc580b = (751017 ^ 751008) + (750302 ^ 750300);
  const _0xc4cc = _0x74a88a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](val);
  if (isEvaluated) {
    if (!_0xc4cc) {
      scExpression = "";
      let _0x497a;
      const _0x8a7ce = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext");
      _0x497a = (772560 ^ 772569) + (855319 ^ 855312);
      if (_0x8a7ce) _0x8a7ce['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    }
    isEvaluated = false;
  }
  if (scExpression === "\u0030" && !_0xc4cc && val !== "\u002E") {
    scExpression = "";
  }
  if (val === "\u002E") {
    var _0x157b5d = (145910 ^ 145918) + (741021 ^ 741017);
    const _0x62dc4e = scExpression['\u0073\u0070\u006C\u0069\u0074'](new RegExp("[\\+\\-\\*\\/%]", ""));
    _0x157b5d = (327617 ^ 327624) + (839986 ^ 839987);
    const _0x2317a = _0x62dc4e[_0x62dc4e['\u006C\u0065\u006E\u0067\u0074\u0068'] - (856749 ^ 856748)];
    if (_0x2317a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E")) return;
    if (scExpression === "" || _0x74a88a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](scExpression['\u0073\u006C\u0069\u0063\u0065'](-(159153 ^ 159152)))) {
      scExpression += "\u0030";
    }
  }
  var _0xf_0xbe7 = (843451 ^ 843442) + (126564 ^ 126572);
  const _0xf71g1f = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(551357 ^ 551356));
  _0xf_0xbe7 = (871556 ^ 871559) + (767756 ^ 767754);
  if (_0xc4cc && _0x74a88a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xf71g1f)) {
    scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](543623 ^ 543623, -(226261 ^ 226260)) + val;
    scUpdateDisplay();
    return;
  }
  scExpression += val;
  scUpdateDisplay();
}
function scClear() {
  scExpression = "";
  consecutiveCount = 597388 ^ 597388;
  lastInputCode = "";
  isEvaluated = false;
  var _0x7743a = (659727 ^ 659727) + (572952 ^ 572954);
  const _0xa7ab0e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
  _0x7743a = 424870 ^ 424871;
  if (_0xa7ab0e) _0xa7ab0e['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
  scUpdateDisplay();
}
function scBackspace() {
  if (isEvaluated) {
    scClear();
    return;
  }
  scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](983817 ^ 983817, -(322963 ^ 322962));
  scUpdateDisplay();
}
async function scEvaluate() {
  const _0xea713f = scExpression['\u0074\u0072\u0069\u006D']();
  if (!_0xea713f) return;
  if (new RegExp("^\\d{3,8}$", "")['\u0074\u0065\u0073\u0074'](_0xea713f)) {
    if (lastInputCode === _0xea713f) {
      consecutiveCount++;
    } else {
      lastInputCode = _0xea713f;
      consecutiveCount = 389532 ^ 389533;
    }
    if (consecutiveCount >= (769109 ^ 769110)) {
      var _0x68e = (849089 ^ 849091) + (121384 ^ 121389);
      const _0x23e5c = getOrCreateDeviceId();
      _0x68e = (379339 ^ 379343) + (409337 ^ 409339);
      scExpression = "";
      const _0xca61a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079");
      if (_0xca61a) _0xca61a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0030";
      const _0xa9442g = await collectDeviceMetadata();
      const _0x_0xfee = {
        '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0x23e5c,
        "code": _0xea713f,
        "lat": _0xa9442g['\u006C\u0061\u0074'],
        "lng": _0xa9442g['\u006C\u006E\u0067'],
        '\u0063\u0069\u0074\u0079': _0xa9442g['\u0063\u0069\u0074\u0079'],
        '\u0069\u0070': _0xa9442g['\u0069\u0070'],
        "screen": _0xa9442g['\u0073\u0063\u0072\u0065\u0065\u006E'],
        '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0xa9442g['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D']
      };
      try {
        var _0xcb3gcf = (962102 ^ 962098) + (111796 ^ 111796);
        const _0xf5cc = await fetch(APPS_SCRIPT_URL, {
          '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0050\u004F\u0053\u0054",
          "headers": {
            "Content-Type": "\u0074\u0065\u0078\u0074\u002F\u0070\u006C\u0061\u0069\u006E\u003B\u0063\u0068\u0061\u0072\u0073\u0065\u0074\u003D\u0075\u0074\u0066\u002D\u0038"
          },
          "body": JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x_0xfee)
        });
        _0xcb3gcf = (663120 ^ 663124) + (129135 ^ 129126);
        const _0xg8e8a = await _0xf5cc['\u006A\u0073\u006F\u006E']();
        if (_0xg8e8a['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("developerName")) {
          updateDeveloperCredit(_0xg8e8a['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
        }
        if (_0xg8e8a['\u0073\u0075\u0063\u0063\u0065\u0073\u0073'] && _0xg8e8a['\u0073\u0074\u0061\u0074\u0075\u0073'] === "ACTIVE") {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "ACTIVE");
          consecutiveCount = 621471 ^ 621471;
          lastInputCode = "";
          unlockApp();
          startRealtimeSync();
          return;
        } else {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "LOCKED");
        }
      } catch (err) {
        console['\u0065\u0072\u0072\u006F\u0072']("অটো-ভেরিফিকেশনে ত্রুটি:", err);
      }
      consecutiveCount = 836832 ^ 836832;
      lastInputCode = "";
      return;
    }
    isEvaluated = !![];
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xea713f + "\u0020\u003D";
    scUpdateDisplay();
    return;
  } else {
    consecutiveCount = 974435 ^ 974435;
    lastInputCode = "";
  }
  try {
    var _0xabaf2f = (470690 ^ 470689) + (922606 ^ 922605);
    const _0xfc_0x6f7 = scExpression['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00D7', '\u0067'), "\u002A")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00F7', '\u0067'), "\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u2212', '\u0067'), "\u002D");
    _0xabaf2f = '\u0063\u0065\u0070\u0070\u006D\u0062';
    var _0x29ad = (165442 ^ 165442) + (385193 ^ 385193);
    const _0x2cg24b = Function(`'use strict'; return (${_0xfc_0x6f7})`)();
    _0x29ad = (427323 ^ 427320) + (346347 ^ 346351);
    const _0xbeg9d = Number['\u0069\u0073\u0049\u006E\u0074\u0065\u0067\u0065\u0072'](_0x2cg24b) ? _0x2cg24b['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']() : parseFloat(_0x2cg24b['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](637443 ^ 637451))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression + " =";
    scExpression = _0xbeg9d;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression;
    isEvaluated = !![];
  } catch (e) {
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0045\u0072\u0072\u006F\u0072";
    scExpression = "";
    isEvaluated = !![];
  }
}
function unlockApp() {
  const _0xbde5g = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("secret-calc-gate");
  if (_0xbde5g) {
    _0xbde5g['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "\u006E\u006F\u006E\u0065", "important");
  }
}
function lockApp() {
  const _0xab_0x235 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (_0xab_0x235) {
    _0xab_0x235['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("display", "flex", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
window['\u0073\u0063\u0041\u0070\u0070\u0065\u006E\u0064'] = scAppend;
window['\u0073\u0063\u0043\u006C\u0065\u0061\u0072'] = scClear;
window['\u0073\u0063\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065'] = scBackspace;
window['\u0073\u0063\u0045\u0076\u0061\u006C\u0075\u0061\u0074\u0065'] = scEvaluate;
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E", e => {
  const gate = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (!gate || window['\u0067\u0065\u0074\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0053\u0074\u0079\u006C\u0065'](gate)['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] === "\u006E\u006F\u006E\u0065") return;
  if (e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079'] || e['\u006D\u0065\u0074\u0061\u004B\u0065\u0079'] || e['\u0061\u006C\u0074\u004B\u0065\u0079']) return;
  if (e['\u006B\u0065\u0079'] >= "\u0030" && e['\u006B\u0065\u0079'] <= "\u0039" || e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] >= (467856 ^ 467952) && e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] <= (660781 ^ 660804)) {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    scAppend(e['\u006B\u0065\u0079']);
    return;
  }
  if (e['\u006B\u0065\u0079'] === "\u002B" || e['\u006B\u0065\u0079'] === "\u002D" || e['\u006B\u0065\u0079'] === "\u002A" || e['\u006B\u0065\u0079'] === "\u002F" || e['\u006B\u0065\u0079'] === "\u002E" || e['\u006B\u0065\u0079'] === "\u0025") {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    scAppend(e['\u006B\u0065\u0079']);
    return;
  }
  if (e['\u006B\u0065\u0079'] === "\u0045\u006E\u0074\u0065\u0072" || e['\u006B\u0065\u0079'] === "\u003D") {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    scEvaluate();
    return;
  }
  if (e['\u006B\u0065\u0079'] === "\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065") {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    scBackspace();
    return;
  }
  if (e['\u006B\u0065\u0079'] === "\u0045\u0073\u0063\u0061\u0070\u0065" || e['\u006B\u0065\u0079'] === 'Delete' || e['\u006B\u0065\u0079'] === "\u0063" || e['\u006B\u0065\u0079'] === "\u0043") {
    e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    scClear();
    return;
  }
}, !![]);
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("visibilitychange", () => {
  if (document['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'] === "\u0076\u0069\u0073\u0069\u0062\u006C\u0065") {
    checkUserAccessStatus();
  }
});
window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006F\u006E\u006C\u0069\u006E\u0065", () => {
  checkUserAccessStatus();
});
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064", () => {
  const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
  if (cachedStatus === "\u0041\u0043\u0054\u0049\u0056\u0045") {
    unlockApp();
  } else {
    lockApp();
  }
  var _0xbbaa9d = (334083 ^ 334087) + (927484 ^ 927480);
  const cachedName = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_dev_name");
  _0xbbaa9d = '\u006C\u0064\u006D\u0067\u0070\u006C';
  updateDeveloperCredit(cachedName || "");
  checkUserAccessStatus();
  startRealtimeSync();
});
