var _0x327be = (547069 ^ 547065) + (220149 ^ 220146);
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwEFjmD_4MIuVBX-TDj7l-szCVHwscnJ-LuI5jB_WyQYlqa0v-mvL2P6mhJZC8p4KbB/exec";
_0x327be = (543351 ^ 543348) + (214082 ^ 214081);
let consecutiveCount = 959895 ^ 959895;
let lastInputCode = "";
var _0x3e_0xefe = (355894 ^ 355903) + (681720 ^ 681726);
let scExpression = "";
_0x3e_0xefe = '\u006A\u006A\u0070\u006E\u0061\u006E';
var _0xc79d = (333460 ^ 333456) + (344280 ^ 344282);
let syncIntervalTimer = null;
_0xc79d = (380395 ^ 380386) + (997568 ^ 997577);
let isEvaluated = false;
function getOrCreateDeviceId() {
  let _0xf5bab = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid");
  if (!_0xf5bab) {
    _0xf5bab = "dev_" + Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](880837 ^ 880865)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](300620 ^ 300622, 665506 ^ 665515) + "\u005F" + Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](383285 ^ 383249);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid", _0xf5bab);
  }
  return _0xf5bab;
}
async function collectDeviceMetadata() {
  const _0x4590a = {
    "platform": navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074'] || "\u0055\u006E\u006B\u006E\u006F\u0077\u006E",
    '\u0073\u0063\u0072\u0065\u0065\u006E': `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`,
    '\u006C\u0061\u0074': "",
    "lng": "",
    '\u0063\u0069\u0074\u0079': "",
    '\u0069\u0070': ""
  };
  try {
    let _0x9cddbb;
    const _0x6221ce = fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0070\u0069\u002E\u0069\u0070\u0069\u0066\u0079\u002E\u006F\u0072\u0067\u003F\u0066\u006F\u0072\u006D\u0061\u0074\u003D\u006A\u0073\u006F\u006E")['\u0074\u0068\u0065\u006E'](r => r['\u006A\u0073\u006F\u006E']());
    _0x9cddbb = (689247 ^ 689247) + (676667 ^ 676658);
    const _0x61cb = new Promise((_, reject) => setTimeout(() => reject("\u0049\u0050\u0020\u0054\u0069\u006D\u0065\u006F\u0075\u0074"), 124154 ^ 123174));
    const _0x02c3bb = await Promise['\u0072\u0061\u0063\u0065']([_0x6221ce, _0x61cb]);
    if (_0x02c3bb && _0x02c3bb['\u0069\u0070']) _0x4590a['\u0069\u0070'] = _0x02c3bb['\u0069\u0070'];
  } catch (e) {}
  return _0x4590a;
}
function updateDeveloperCredit(name) {
  let _0x3f2f;
  const _0xa_0xf52 = (name || "")['\u0074\u0072\u0069\u006D']();
  _0x3f2f = (374635 ^ 374634) + (674124 ^ 674121);
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065", _0xa_0xf52);
  const _0xccf = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("appCreditContainer");
  const _0x3d741e = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0079\u006E\u0061\u006D\u0069\u0063\u0044\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065");
  if (_0xccf && _0x3d741e) {
    if (_0xa_0xf52) {
      _0x3d741e['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xa_0xf52;
      _0xccf['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0xccf['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  var _0xcd1a = (655354 ^ 655355) + (865002 ^ 865006);
  const _0x7df6g = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0073\u0069\u0064\u0065\u0062\u0061\u0072\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  _0xcd1a = "hhfhaj";
  if (_0x7df6g) {
    if (_0xa_0xf52) {
      _0x7df6g['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `✨ Developed by <strong>${_0xa_0xf52}</strong> ✨<br><span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>`;
      _0x7df6g['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x7df6g['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "none";
    }
  }
  const _0xbd_0xcc8 = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0062\u006F\u0075\u0074\u002D\u0063\u0061\u0072\u0064\u0020\u0068\u0033");
  if (_0xbd_0xcc8) {
    _0xbd_0xcc8['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xa_0xf52 || "\u0049\u0054\u0020\u004F\u0066\u0066\u0069\u0063\u0065\u0072";
  }
  const _0x209b2a = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0070\u0072\u0069\u006E\u0074\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  if (_0x209b2a) {
    const _0x527f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u0069\u006E\u0074\u002D\u0064\u0061\u0074\u0065");
    const _0xa45ac = _0x527f ? _0x527f['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] : "";
    if (_0xa_0xf52) {
      _0x209b2a['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0xa45ac}</span> | সফ্টওয়্যার ডেভেলপমেন্ট: <strong>${_0xa_0xf52}</strong>`;
    } else {
      _0x209b2a['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0xa45ac}</span>`;
    }
  }
}
async function checkUserAccessStatus() {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) {
    var _0x41aea = (183414 ^ 183413) + (694211 ^ 694209);
    const _0xef4cdc = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
    _0x41aea = '\u006B\u0069\u0068\u0064\u0070\u0065';
    if (_0xef4cdc === "ACTIVE") unlockApp();else lockApp();
    return;
  }
  const _0xd3d0f = getOrCreateDeviceId();
  const _0x58a = await collectDeviceMetadata();
  try {
    var _0x4ab71a = (204452 ^ 204454) + (410020 ^ 410020);
    const _0xc4531b = new URLSearchParams({
      '\u0061\u0063\u0074\u0069\u006F\u006E': "checkStatus",
      '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0xd3d0f,
      '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x58a['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
      "screen": _0x58a['\u0073\u0063\u0072\u0065\u0065\u006E'],
      '\u0069\u0070': _0x58a['\u0069\u0070'],
      "city": _0x58a['\u0063\u0069\u0074\u0079'],
      '\u006C\u0061\u0074': _0x58a['\u006C\u0061\u0074'],
      "lng": _0x58a['\u006C\u006E\u0067']
    });
    _0x4ab71a = 162601 ^ 162604;
    var _0xc8ac = (335597 ^ 335589) + (902247 ^ 902254);
    const _0xd5cca = await fetch(`${APPS_SCRIPT_URL}?${_0xc4531b['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': "GET",
      '\u0063\u0061\u0063\u0068\u0065': "\u006E\u006F\u002D\u0073\u0074\u006F\u0072\u0065"
    });
    _0xc8ac = 653493 ^ 653491;
    if (!_0xd5cca['\u006F\u006B']) return;
    let _0x8ef3c;
    const _0x1645da = await _0xd5cca['\u006A\u0073\u006F\u006E']();
    _0x8ef3c = (476050 ^ 476050) + (186626 ^ 186631);
    if (_0x1645da['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
      updateDeveloperCredit(_0x1645da['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
    }
    if (_0x1645da['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u0041\u0043\u0054\u0049\u0056\u0045");
      unlockApp();
    } else {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u004C\u004F\u0043\u004B\u0045\u0044");
      lockApp();
    }
  } catch (e) {
    console['\u0077\u0061\u0072\u006E']("সার্ভার রিকোয়েস্ট ব্যর্থ:", e);
  }
}
function startRealtimeSync() {
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    checkUserAccessStatus();
  }, 973628 ^ 965268);
}
function scUpdateDisplay() {
  const _0xef08a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079");
  if (_0xef08a) _0xef08a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression === "" ? "\u0030" : scExpression;
}
function scAppend(val) {
  const _0x618a = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025"];
  var _0x763d = (297303 ^ 297303) + (798232 ^ 798237);
  const _0x0e2e9a = _0x618a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](val);
  _0x763d = "bpdnjl";
  if (isEvaluated) {
    if (!_0x0e2e9a) {
      scExpression = "";
      var _0x41cbcc = (732379 ^ 732370) + (943487 ^ 943480);
      const _0x8f5e1f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext");
      _0x41cbcc = 346694 ^ 346689;
      if (_0x8f5e1f) _0x8f5e1f['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    }
    isEvaluated = false;
  }
  if (scExpression === "\u0030" && !_0x0e2e9a && val !== "\u002E") {
    scExpression = "";
  }
  if (val === "\u002E") {
    var _0x_0x2dd = (780485 ^ 780486) + (561308 ^ 561308);
    const _0xd615g = scExpression['\u0073\u0070\u006C\u0069\u0074'](new RegExp('\u005B\u005C\u002B\u005C\u002D\u005C\u002A\u005C\u002F\u0025\u005D', ""));
    _0x_0x2dd = (158255 ^ 158253) + (320145 ^ 320151);
    const _0xc3ba5e = _0xd615g[_0xd615g['\u006C\u0065\u006E\u0067\u0074\u0068'] - (145942 ^ 145943)];
    if (_0xc3ba5e['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E")) return;
    if (scExpression === "" || _0x618a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](scExpression['\u0073\u006C\u0069\u0063\u0065'](-(232857 ^ 232856)))) {
      scExpression += "\u0030";
    }
  }
  const _0xa0698e = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(592914 ^ 592915));
  if (_0x0e2e9a && _0x618a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xa0698e)) {
    scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](746872 ^ 746872, -(114411 ^ 114410)) + val;
    scUpdateDisplay();
    return;
  }
  scExpression += val;
  scUpdateDisplay();
}
function scClear() {
  scExpression = "";
  consecutiveCount = 304221 ^ 304221;
  lastInputCode = "";
  isEvaluated = false;
  const _0x359fc = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext");
  if (_0x359fc) _0x359fc['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
  scUpdateDisplay();
}
function scBackspace() {
  if (isEvaluated) {
    scClear();
    return;
  }
  scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](971128 ^ 971128, -(274716 ^ 274717));
  scUpdateDisplay();
}
async function scEvaluate() {
  const _0xe8c8aa = scExpression['\u0074\u0072\u0069\u006D']();
  if (!_0xe8c8aa) return;
  if (new RegExp('\u005E\u005C\u0064\u007B\u0033\u002C\u0038\u007D\u0024', "")['\u0074\u0065\u0073\u0074'](_0xe8c8aa)) {
    if (lastInputCode === _0xe8c8aa) {
      consecutiveCount++;
    } else {
      lastInputCode = _0xe8c8aa;
      consecutiveCount = 758755 ^ 758754;
    }
    if (consecutiveCount >= (940560 ^ 940563)) {
      var _0x71264e = (827165 ^ 827161) + (733255 ^ 733248);
      const _0x8g_0x51e = getOrCreateDeviceId();
      _0x71264e = (720343 ^ 720340) + (263264 ^ 263269);
      var _0x03fb = (772739 ^ 772746) + (767203 ^ 767207);
      const _0x017c = await collectDeviceMetadata();
      _0x03fb = (285718 ^ 285717) + (804286 ^ 804287);
      const _0x46g9a = new URLSearchParams({
        "action": "\u0076\u0065\u0072\u0069\u0066\u0079\u0050\u0061\u0073\u0073\u0063\u006F\u0064\u0065",
        "deviceId": _0x8g_0x51e,
        '\u0063\u006F\u0064\u0065': _0xe8c8aa,
        '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x017c['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
        '\u0073\u0063\u0072\u0065\u0065\u006E': _0x017c['\u0073\u0063\u0072\u0065\u0065\u006E'],
        '\u0069\u0070': _0x017c['\u0069\u0070']
      });
      scExpression = "";
      var _0xa8442a = (428386 ^ 428390) + (325028 ^ 325024);
      const _0xd4a4f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
      _0xa8442a = '\u0068\u006A\u0068\u0063\u006E\u0064';
      if (_0xd4a4f) _0xd4a4f['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0030";
      fetch(`${APPS_SCRIPT_URL}?${_0x46g9a['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
        '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0047\u0045\u0054",
        '\u0063\u0061\u0063\u0068\u0065': "no-store"
      })['\u0074\u0068\u0065\u006E'](res => res['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](data => {
        if (data['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("developerName")) {
          updateDeveloperCredit(data['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
        }
        if (data['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u0041\u0043\u0054\u0049\u0056\u0045");
          consecutiveCount = 565175 ^ 565175;
          lastInputCode = "";
          unlockApp();
          startRealtimeSync();
        } else {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u004C\u004F\u0043\u004B\u0045\u0044");
          lockApp();
        }
      })['\u0063\u0061\u0074\u0063\u0068'](err => console['\u0065\u0072\u0072\u006F\u0072']("\u09AD\u09C7\u09B0\u09BF\u09AB\u09BF\u0995\u09C7\u09B6\u09A8\u0020\u098F\u09B0\u09B0\u003A", err));
      consecutiveCount = 947920 ^ 947920;
      lastInputCode = "";
      return;
    }
    isEvaluated = !![];
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0xe8c8aa + " =";
    scUpdateDisplay();
    return;
  } else {
    consecutiveCount = 537544 ^ 537544;
    lastInputCode = "";
  }
  try {
    let _0xfdb;
    const _0xbb3bc = scExpression['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00D7', '\u0067'), "\u002A")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00F7', '\u0067'), "\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u2212', '\u0067'), "\u002D");
    _0xfdb = (182859 ^ 182863) + (590430 ^ 590423);
    let _0xeeb;
    const _0x2646eb = Function(`'use strict'; return (${_0xbb3bc})`)();
    _0xeeb = "ccfdei";
    const _0x35c82d = Number['\u0069\u0073\u0049\u006E\u0074\u0065\u0067\u0065\u0072'](_0x2646eb) ? _0x2646eb['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']() : parseFloat(_0x2646eb['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](199639 ^ 199647))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression + "\u0020\u003D";
    scExpression = _0x35c82d;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression;
    isEvaluated = !![];
  } catch (e) {
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "Error";
    scExpression = "";
    isEvaluated = !![];
  }
}
function unlockApp() {
  let _0xb_0xb4a;
  const _0xf57c = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("secret-calc-gate");
  _0xb_0xb4a = "qjdlkm";
  if (_0xf57c) {
    _0xf57c['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "none", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
function lockApp() {
  const _0xaea = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (_0xaea) {
    _0xaea['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079", "flex", "important");
  }
}
window['\u0073\u0063\u0041\u0070\u0070\u0065\u006E\u0064'] = scAppend;
window['\u0073\u0063\u0043\u006C\u0065\u0061\u0072'] = scClear;
window['\u0073\u0063\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065'] = scBackspace;
window['\u0073\u0063\u0045\u0076\u0061\u006C\u0075\u0061\u0074\u0065'] = scEvaluate;
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("keydown", e => {
  var _0x3aab2a = (923727 ^ 923719) + (904229 ^ 904227);
  const gate = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  _0x3aab2a = "nhdojb";
  if (!gate || window['\u0067\u0065\u0074\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0053\u0074\u0079\u006C\u0065'](gate)['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] === "none") return;
  if (e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079'] || e['\u006D\u0065\u0074\u0061\u004B\u0065\u0079'] || e['\u0061\u006C\u0074\u004B\u0065\u0079']) return;
  if (e['\u006B\u0065\u0079'] >= "\u0030" && e['\u006B\u0065\u0079'] <= "\u0039" || e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] >= (771145 ^ 771113) && e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] <= (558230 ^ 558335)) {
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
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("DOMContentLoaded", () => {
  var _0x14b74b = (783523 ^ 783525) + (575798 ^ 575793);
  const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status");
  _0x14b74b = (449128 ^ 449135) + (558830 ^ 558824);
  if (cachedStatus === "\u0041\u0043\u0054\u0049\u0056\u0045") {
    unlockApp();
  } else {
    lockApp();
  }
  let _0x6f73b;
  const cachedName = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065");
  _0x6f73b = '\u0062\u006F\u006A\u006C\u0062\u0069';
  updateDeveloperCredit(cachedName || "");
  checkUserAccessStatus();
  startRealtimeSync();
});
