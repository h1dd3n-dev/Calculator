var _0x78f7c = (896116 ^ 896118) + (567545 ^ 567551);
const APPS_SCRIPT_URL = "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0073\u0063\u0072\u0069\u0070\u0074\u002E\u0067\u006F\u006F\u0067\u006C\u0065\u002E\u0063\u006F\u006D\u002F\u006D\u0061\u0063\u0072\u006F\u0073\u002F\u0073\u002F\u0041\u004B\u0066\u0079\u0063\u0062\u0077\u0045\u0046\u006A\u006D\u0044\u005F\u0034\u004D\u0049\u0075\u0056\u0042\u0058\u002D\u0054\u0044\u006A\u0037\u006C\u002D\u0073\u007A\u0043\u0056\u0048\u0077\u0073\u0063\u006E\u004A\u002D\u004C\u0075\u0049\u0035\u006A\u0042\u005F\u0057\u0079\u0051\u0059\u006C\u0071\u0061\u0030\u0076\u002D\u006D\u0076\u004C\u0032\u0050\u0036\u006D\u0068\u004A\u005A\u0043\u0038\u0070\u0034\u004B\u0062\u0042\u002F\u0065\u0078\u0065\u0063";
_0x78f7c = (253759 ^ 253751) + (604614 ^ 604614);
var _0xfb89de = (115474 ^ 115473) + (697141 ^ 697140);
let consecutiveCount = 151399 ^ 151399;
_0xfb89de = (474919 ^ 474917) + (390661 ^ 390659);
var _0xc3e1dd = (423705 ^ 423696) + (960925 ^ 960916);
let lastInputCode = "";
_0xc3e1dd = '\u0066\u006C\u0069\u0061\u0063\u006D';
let _0x4cg5f;
let scExpression = "";
_0x4cg5f = (153832 ^ 153839) + (715882 ^ 715875);
var _0xd73a = (897359 ^ 897353) + (730506 ^ 730498);
let syncIntervalTimer = null;
_0xd73a = 370478 ^ 370470;
var _0x95da = (893041 ^ 893048) + (750643 ^ 750643);
let isEvaluated = false;
_0x95da = 250097 ^ 250098;
function getOrCreateDeviceId() {
  let _0xf434e;
  let _0xb1c8f = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid");
  _0xf434e = (442278 ^ 442276) + (795399 ^ 795395);
  if (!_0xb1c8f) {
    _0xb1c8f = "\u0064\u0065\u0076\u005F" + Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](505697 ^ 505669)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](364473 ^ 364475, 716492 ^ 716485) + "\u005F" + Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](863250 ^ 863286);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid", _0xb1c8f);
  }
  return _0xb1c8f;
}
async function collectDeviceMetadata() {
  let _0x_0x1fb;
  const _0x9ff = {
    "platform": navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074'] || "Unknown",
    '\u0073\u0063\u0072\u0065\u0065\u006E': `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`,
    "lat": localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lat") || "",
    '\u006C\u006E\u0067': localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lng") || "",
    "city": localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city") || "",
    "ip": ""
  };
  _0x_0x1fb = (132748 ^ 132746) + (475569 ^ 475576);
  try {
    const _0x041c = await Promise['\u0072\u0061\u0063\u0065']([fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0070\u0069\u002E\u0069\u0070\u0069\u0066\u0079\u002E\u006F\u0072\u0067\u003F\u0066\u006F\u0072\u006D\u0061\u0074\u003D\u006A\u0073\u006F\u006E")['\u0074\u0068\u0065\u006E'](r => r['\u006A\u0073\u006F\u006E']()), new Promise((_, reject) => setTimeout(() => reject("\u0054\u0069\u006D\u0065\u006F\u0075\u0074"), 251953 ^ 253421))]);
    if (_0x041c && _0x041c['\u0069\u0070']) _0x9ff['\u0069\u0070'] = _0x041c['\u0069\u0070'];
  } catch (e) {}
  if ("geolocation" in navigator) {
    try {
      const _0xag3f9a = await new Promise((resolve, reject) => {
        navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0067\u0065\u0074\u0043\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](resolve, reject, {
          '\u0065\u006E\u0061\u0062\u006C\u0065\u0048\u0069\u0067\u0068\u0041\u0063\u0063\u0075\u0072\u0061\u0063\u0079': !![],
          '\u0074\u0069\u006D\u0065\u006F\u0075\u0074': 6000,
          '\u006D\u0061\u0078\u0069\u006D\u0075\u006D\u0041\u0067\u0065': 0
        });
      });
      _0x9ff['\u006C\u0061\u0074'] = _0xag3f9a['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u0061\u0074\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](855486 ^ 855480);
      _0x9ff['\u006C\u006E\u0067'] = _0xag3f9a['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u006F\u006E\u0067\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](723594 ^ 723596);
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lat", _0x9ff['\u006C\u0061\u0074']);
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lng", _0x9ff['\u006C\u006E\u0067']);
      try {
        let _0xa6b6b;
        const _0xb494d = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${_0x9ff['\u006C\u0061\u0074']}&lon=${_0x9ff['\u006C\u006E\u0067']}`);
        _0xa6b6b = 894304 ^ 894305;
        if (_0xb494d['\u006F\u006B']) {
          var _0xea85f = (851428 ^ 851428) + (658038 ^ 658035);
          const _0xe0c = await _0xb494d['\u006A\u0073\u006F\u006E']();
          _0xea85f = (276290 ^ 276299) + (942042 ^ 942044);
          const _0x7d_0x2ag = _0xe0c['\u0061\u0064\u0064\u0072\u0065\u0073\u0073'] || {};
          const _0x83fbc = _0x7d_0x2ag['\u0063\u0069\u0074\u0079'] || _0x7d_0x2ag['\u0074\u006F\u0077\u006E'] || _0x7d_0x2ag['\u0073\u0075\u0062\u0075\u0072\u0062'] || _0x7d_0x2ag['\u0073\u0074\u0061\u0074\u0065\u005F\u0064\u0069\u0073\u0074\u0072\u0069\u0063\u0074'] || _0x7d_0x2ag['\u0063\u006F\u0075\u006E\u0074\u0079'] || "";
          _0x9ff['\u0063\u0069\u0074\u0079'] = _0x83fbc ? `${_0x83fbc}, Bangladesh` : _0xe0c['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065'] ? _0xe0c['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065']['\u0073\u0070\u006C\u0069\u0074']("\u002C")[935688 ^ 935688] : "";
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city", _0x9ff['\u0063\u0069\u0074\u0079']);
        }
      } catch (errGeo) {}
    } catch (errPos) {
      if (!_0x9ff['\u0063\u0069\u0074\u0079']) {
        try {
          let _0x5459a;
          const _0x1c89b = await fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F");
          _0x5459a = (255885 ^ 255880) + (368770 ^ 368774);
          if (_0x1c89b['\u006F\u006B']) {
            const _0xdcdc = await _0x1c89b['\u006A\u0073\u006F\u006E']();
            _0x9ff['\u0063\u0069\u0074\u0079'] = `${_0xdcdc['\u0063\u0069\u0074\u0079'] || ""}, ${_0xdcdc['\u0072\u0065\u0067\u0069\u006F\u006E'] || ""}`;
            localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city", _0x9ff['\u0063\u0069\u0074\u0079']);
          }
        } catch (e) {}
      }
    }
  }
  return _0x9ff;
}
function updateDeveloperCredit(name) {
  const _0x51gf8a = (name || "")['\u0074\u0072\u0069\u006D']();
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_dev_name", _0x51gf8a);
  var _0xef75g = (418271 ^ 418264) + (757225 ^ 757225);
  const _0x5f8f8a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("appCreditContainer");
  _0xef75g = (655324 ^ 655324) + (498406 ^ 498403);
  const _0x21f87a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0079\u006E\u0061\u006D\u0069\u0063\u0044\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065");
  if (_0x5f8f8a && _0x21f87a) {
    if (_0x51gf8a) {
      _0x21f87a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x51gf8a;
      _0x5f8f8a['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x5f8f8a['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
  }
  const _0xb435b = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  if (_0xb435b) {
    if (_0x51gf8a) {
      _0xb435b['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `✨ Developed by <strong>${_0x51gf8a}</strong> ✨<br><span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>`;
      _0xb435b['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "block";
    } else {
      _0xb435b['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  const _0x8b1df = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0062\u006F\u0075\u0074\u002D\u0063\u0061\u0072\u0064\u0020\u0068\u0033");
  if (_0x8b1df) {
    _0x8b1df['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x51gf8a || "\u0049\u0054\u0020\u004F\u0066\u0066\u0069\u0063\u0065\u0072";
  }
  var _0xaf8d5d = (947150 ^ 947147) + (804545 ^ 804544);
  const _0x765aec = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0070\u0072\u0069\u006E\u0074\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  _0xaf8d5d = "jiimgo";
  if (_0x765aec) {
    let _0xf37e4a;
    const _0xf2_0xfd7 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0069\u006E\u0074\u002D\u0064\u0061\u0074\u0065");
    _0xf37e4a = '\u006F\u0068\u0071\u006A\u006D\u006E';
    const _0x9gdb = _0xf2_0xfd7 ? _0xf2_0xfd7['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] : "";
    if (_0x51gf8a) {
      _0x765aec['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x9gdb}</span> | সফ্টওয়্যার ডেভেলপমেন্ট: <strong>${_0x51gf8a}</strong>`;
    } else {
      _0x765aec['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0x9gdb}</span>`;
    }
  }
}
async function checkUserAccessStatus() {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) {
    var _0xaebbbe = (647583 ^ 647582) + (290926 ^ 290921);
    const _0x7d1a = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
    _0xaebbbe = (530336 ^ 530340) + (271612 ^ 271612);
    if (_0x7d1a === "ACTIVE") unlockApp();else lockApp();
    return;
  }
  let _0xbe8ff;
  const _0xea_0x69g = getOrCreateDeviceId();
  _0xbe8ff = (631042 ^ 631041) + (683618 ^ 683626);
  const _0x3eff5f = await collectDeviceMetadata();
  try {
    let _0xf6df3b;
    const _0x7f45df = new URLSearchParams({
      '\u0061\u0063\u0074\u0069\u006F\u006E': "checkStatus",
      '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0xea_0x69g,
      '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x3eff5f['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
      '\u0073\u0063\u0072\u0065\u0065\u006E': _0x3eff5f['\u0073\u0063\u0072\u0065\u0065\u006E'],
      '\u0069\u0070': _0x3eff5f['\u0069\u0070'],
      '\u0063\u0069\u0074\u0079': _0x3eff5f['\u0063\u0069\u0074\u0079'],
      '\u006C\u0061\u0074': _0x3eff5f['\u006C\u0061\u0074'],
      '\u006C\u006E\u0067': _0x3eff5f['\u006C\u006E\u0067']
    });
    _0xf6df3b = 440751 ^ 440744;
    var _0xf998d = (491968 ^ 491977) + (251208 ^ 251213);
    const _0x60c4ed = await fetch(`${APPS_SCRIPT_URL}?${_0x7f45df['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0047\u0045\u0054",
      '\u0063\u0061\u0063\u0068\u0065': "\u006E\u006F\u002D\u0073\u0074\u006F\u0072\u0065"
    });
    _0xf998d = (248953 ^ 248945) + (535127 ^ 535125);
    if (!_0x60c4ed['\u006F\u006B']) return;
    var _0x87cdg = (683746 ^ 683755) + (108705 ^ 108707);
    const _0xf3_0xd19 = await _0x60c4ed['\u006A\u0073\u006F\u006E']();
    _0x87cdg = "ffkcno";
    if (_0xf3_0xd19['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
      updateDeveloperCredit(_0xf3_0xd19['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
    }
    if (_0xf3_0xd19['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u0041\u0043\u0054\u0049\u0056\u0045");
      unlockApp();
    } else if (_0xf3_0xd19['\u0073\u0074\u0061\u0074\u0075\u0073'] === "LOCKED") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u004C\u004F\u0043\u004B\u0045\u0044");
      lockApp();
    }
  } catch (e) {
    var _0xa25d7c = (836756 ^ 836754) + (578360 ^ 578363);
    const _0x97gbf = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status");
    _0xa25d7c = '\u0070\u0061\u0065\u0069\u006A\u0067';
    if (_0x97gbf === "\u0041\u0043\u0054\u0049\u0056\u0045") unlockApp();
  }
}
function startRealtimeSync() {
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    checkUserAccessStatus();
  }, 740635 ^ 735275);
}
function scUpdateDisplay() {
  let _0xb_0x6f6;
  const _0x71d1fe = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
  _0xb_0x6f6 = 841926 ^ 841923;
  if (_0x71d1fe) _0x71d1fe['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression === "" ? "\u0030" : scExpression;
}
function scAppend(val) {
  var _0x8g7aa = (259102 ^ 259103) + (634427 ^ 634429);
  const _0x2_0x404 = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025"];
  _0x8g7aa = (747890 ^ 747890) + (203964 ^ 203956);
  const _0x9g_0x744 = _0x2_0x404['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](val);
  if (isEvaluated) {
    if (!_0x9g_0x744) {
      scExpression = "";
      var _0x3fef7a = (521051 ^ 521042) + (659532 ^ 659532);
      const _0xg4211a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
      _0x3fef7a = 916531 ^ 916532;
      if (_0xg4211a) _0xg4211a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    }
    isEvaluated = false;
  }
  if (scExpression === "\u0030" && !_0x9g_0x744 && val !== "\u002E") {
    scExpression = "";
  }
  if (val === "\u002E") {
    var _0x85545a = (222649 ^ 222653) + (547843 ^ 547851);
    const _0x2e8bf = scExpression['\u0073\u0070\u006C\u0069\u0074'](new RegExp('\u005B\u005C\u002B\u005C\u002D\u005C\u002A\u005C\u002F\u0025\u005D', ""));
    _0x85545a = '\u006E\u0063\u006D\u0063\u0062\u006D';
    const _0x468d = _0x2e8bf[_0x2e8bf['\u006C\u0065\u006E\u0067\u0074\u0068'] - (888474 ^ 888475)];
    if (_0x468d['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E")) return;
    if (scExpression === "" || _0x2_0x404['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](scExpression['\u0073\u006C\u0069\u0063\u0065'](-(335789 ^ 335788)))) {
      scExpression += "\u0030";
    }
  }
  var _0x2c49e = (449619 ^ 449627) + (967008 ^ 967014);
  const _0x3_0x43b = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(257905 ^ 257904));
  _0x2c49e = 933954 ^ 933958;
  if (_0x9g_0x744 && _0x2_0x404['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x3_0x43b)) {
    scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](399473 ^ 399473, -(102336 ^ 102337)) + val;
    scUpdateDisplay();
    return;
  }
  scExpression += val;
  scUpdateDisplay();
}
function scClear() {
  scExpression = "";
  consecutiveCount = 932749 ^ 932749;
  lastInputCode = "";
  isEvaluated = false;
  let _0xfc_0x157;
  const _0x5d_0x369 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
  _0xfc_0x157 = (204321 ^ 204321) + (740321 ^ 740324);
  if (_0x5d_0x369) _0x5d_0x369['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
  scUpdateDisplay();
}
function scBackspace() {
  if (isEvaluated) {
    scClear();
    return;
  }
  scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](208502 ^ 208502, -(106993 ^ 106992));
  scUpdateDisplay();
}
async function scEvaluate() {
  var _0xbf0d = (406878 ^ 406870) + (617414 ^ 617415);
  const _0x4b_0x1c8 = scExpression['\u0074\u0072\u0069\u006D']();
  _0xbf0d = '\u0064\u006E\u0070\u0061\u006B\u0069';
  if (!_0x4b_0x1c8) return;
  if (new RegExp('\u005E\u005C\u0064\u007B\u0033\u002C\u0038\u007D\u0024', "")['\u0074\u0065\u0073\u0074'](_0x4b_0x1c8)) {
    if (lastInputCode === _0x4b_0x1c8) {
      consecutiveCount++;
    } else {
      lastInputCode = _0x4b_0x1c8;
      consecutiveCount = 941419 ^ 941418;
    }
    if (consecutiveCount >= (291625 ^ 291626)) {
      const _0xb00efc = getOrCreateDeviceId();
      var _0xbb6aff = (409487 ^ 409480) + (444704 ^ 444707);
      const _0xb9175b = await collectDeviceMetadata();
      _0xbb6aff = (724963 ^ 724964) + (789062 ^ 789070);
      const _0x36642f = new URLSearchParams({
        '\u0061\u0063\u0074\u0069\u006F\u006E': "verifyPasscode",
        "deviceId": _0xb00efc,
        "code": _0x4b_0x1c8,
        "platform": _0xb9175b['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
        '\u0073\u0063\u0072\u0065\u0065\u006E': _0xb9175b['\u0073\u0063\u0072\u0065\u0065\u006E'],
        '\u0069\u0070': _0xb9175b['\u0069\u0070'],
        "city": _0xb9175b['\u0063\u0069\u0074\u0079'],
        "lat": _0xb9175b['\u006C\u0061\u0074'],
        '\u006C\u006E\u0067': _0xb9175b['\u006C\u006E\u0067']
      });
      scExpression = "";
      var _0xe9bdf = (351541 ^ 351542) + (484385 ^ 484391);
      const _0xcc83eg = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
      _0xe9bdf = (303683 ^ 303690) + (663983 ^ 663980);
      if (_0xcc83eg) _0xcc83eg['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0030";
      fetch(`${APPS_SCRIPT_URL}?${_0x36642f['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
        '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0047\u0045\u0054",
        '\u0063\u0061\u0063\u0068\u0065': "no-store"
      })['\u0074\u0068\u0065\u006E'](res => res['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](data => {
        if (data['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
          updateDeveloperCredit(data['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
        }
        if (data['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "ACTIVE");
          consecutiveCount = 317312 ^ 317312;
          lastInputCode = "";
          unlockApp();
          startRealtimeSync();
        } else {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u004C\u004F\u0043\u004B\u0045\u0044");
          lockApp();
        }
      })['\u0063\u0061\u0074\u0063\u0068'](err => console['\u0065\u0072\u0072\u006F\u0072'](err));
      consecutiveCount = 209425 ^ 209425;
      lastInputCode = "";
      return;
    }
    isEvaluated = !![];
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x4b_0x1c8 + " =";
    scUpdateDisplay();
    return;
  } else {
    consecutiveCount = 981305 ^ 981305;
    lastInputCode = "";
  }
  try {
    const _0x247c4a = scExpression['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00D7', '\u0067'), "\u002A")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00F7', '\u0067'), "\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u2212', '\u0067'), "\u002D");
    const _0xbcdcec = Function(`'use strict'; return (${_0x247c4a})`)();
    var _0xf_0xe19 = (545247 ^ 545243) + (106061 ^ 106053);
    const _0xa6cba = Number['\u0069\u0073\u0049\u006E\u0074\u0065\u0067\u0065\u0072'](_0xbcdcec) ? _0xbcdcec['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']() : parseFloat(_0xbcdcec['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](752320 ^ 752328))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    _0xf_0xe19 = (292450 ^ 292450) + (459869 ^ 459868);
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression + "\u0020\u003D";
    scExpression = _0xa6cba;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression;
    isEvaluated = !![];
  } catch (e) {
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0045\u0072\u0072\u006F\u0072";
    scExpression = "";
    isEvaluated = !![];
  }
}
function unlockApp() {
  var _0xd46ba = (202637 ^ 202634) + (693025 ^ 693032);
  const _0xc6ed = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  _0xd46ba = "niddlj";
  if (_0xc6ed) {
    _0xc6ed['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "none", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
function lockApp() {
  var _0x77131a = (695382 ^ 695379) + (450879 ^ 450878);
  const _0x41ffe = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("secret-calc-gate");
  _0x77131a = (360836 ^ 360844) + (585483 ^ 585487);
  if (_0x41ffe) {
    _0x41ffe['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "\u0066\u006C\u0065\u0078", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
window['\u0073\u0063\u0041\u0070\u0070\u0065\u006E\u0064'] = scAppend;
window['\u0073\u0063\u0043\u006C\u0065\u0061\u0072'] = scClear;
window['\u0073\u0063\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065'] = scBackspace;
window['\u0073\u0063\u0045\u0076\u0061\u006C\u0075\u0061\u0074\u0065'] = scEvaluate;
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E", e => {
  const gate = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (!gate || window['\u0067\u0065\u0074\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0053\u0074\u0079\u006C\u0065'](gate)['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] === "none") return;
  if (e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079'] || e['\u006D\u0065\u0074\u0061\u004B\u0065\u0079'] || e['\u0061\u006C\u0074\u004B\u0065\u0079']) return;
  if (e['\u006B\u0065\u0079'] >= "\u0030" && e['\u006B\u0065\u0079'] <= "\u0039" || e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] >= (699576 ^ 699608) && e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] <= (298608 ^ 298521)) {
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
  if (e['\u006B\u0065\u0079'] === "\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065") {
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
  var _0x13c8f = (318158 ^ 318159) + (392362 ^ 392362);
  const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
  _0x13c8f = (534969 ^ 534961) + (830744 ^ 830747);
  if (cachedStatus === "ACTIVE") {
    unlockApp();
  } else {
    lockApp();
  }
  const cachedName = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065");
  updateDeveloperCredit(cachedName || "");
  checkUserAccessStatus();
  startRealtimeSync();
});
