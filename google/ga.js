(function (global) {
    var EncodeUri = function (a) {
        this.uri = a || []
    };
    EncodeUri.prototype.set = function (a) {
        this.uri[a] = true
    };
    //@TODO
    EncodeUri.prototype.encode = function () {
        for (var a = [], b = 0; b < this.uri.length; b++) {
            this.uri[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
        }
        for (b = 0; b < a.length; b++) {
            a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
        }
        return a.join("") + "~"
    };

    var encodeUri = new EncodeUri;

    function setAlphaBet(a) {
        encodeUri.set(a)
    }

    var Nd = function (a, b) {
            var c = new EncodeUri(Dd(a));
            c.set(b);
            a.set(_umSymbol, c.uri)
        },
        Td = function (a) {
            a = Dd(a);
            a = new EncodeUri(a);
            for (var b = encodeUri.uri.slice(), c = 0; c < a.uri.length; c++)b[c] = b[c] || a.uri[c];
            return (new EncodeUri(b)).encode()
        },
        Dd = function (a) {
            a = a.get(_umSymbol);
            isArray(a) || (a = []);
            return a
        };

    //@TODO
    var isFunction = function (a) {
            return "function" == typeof a
        },
        isArray = function (a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
    //@TODO 奇怪的实现
        isString = function (a) {
            return undefined != a && -1 < (a.constructor + "").indexOf("String")
        },
        isStartWith = function (str, start) {
            return 0 == str.indexOf(start)
        },
    //@TODO trim
        trim = function (a) {
            return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        },
        create1pxImg = function (src) {
            var img = document.createElement("img");
            img.width = 1;
            img.height = 1;
            img.src = src;
            return img
        },
        emptyFunction = function () {
        },
        uriComponentEncode = function (a) {
            if (encodeURIComponent instanceof Function)return encodeURIComponent(a);
            setAlphaBet(28);
            return a
        },
        addEve = function (ele, event, callback, cancelBubble) {
            try {
                ele.addEventListener ? ele.addEventListener(event, callback, !!cancelBubble) : ele.attachEvent && ele.attachEvent("on" + event, callback)
            } catch (e) {
                setAlphaBet(27)
            }
        },
        loadScriptAsync = function (src, id) {
            if (src) {
                var c = document.createElement("script");
                c.type = "text/javascript";
                c.async = true;
                c.src = src;
                id && (c.id = id);
                var d = document.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(c, d)
            }
        },
        isHttps = function () {
            return "https:" == document.location.protocol
        },
        domainName = function () {
            var a = "" + document.location.hostname;
            return 0 == a.indexOf("www.") ? a.substring(4) : a
        },
        referrer = function (samePageCounted) {
            var refer = document.referrer;
            if (/^https?:\/\//i.test(refer)) {
                if (samePageCounted)return refer;
                samePageCounted = "//" + document.location.hostname;
                var c = refer.indexOf(samePageCounted);
                //同页面则是刷新~也就是没有refer
                if (5 == c || 6 == c) {
                    if (samePageCounted = refer.charAt(c + samePageCounted.length), "/" == samePageCounted || "?" == samePageCounted || "" == samePageCounted || ":" == samePageCounted) {
                        return;
                    }
                }
                return refer;
            }
        },
    //将数组转换成obj，如果valueArr中的值是obj则简单合并，否则取keyArr对应的值
        arr2Obj = function (keyArr, valueArr) {
            if (1 == valueArr.length && null != valueArr[0] && "object" === typeof valueArr[0]) {
                return valueArr[0];
            }
            for (var result = {}, minLen = Math.min(keyArr.length + 1, valueArr.length), index = 0; index < minLen; index++) {
                if ("object" === typeof valueArr[index]) {
                    for (var key in valueArr[index]) {
                        valueArr[index].hasOwnProperty(key) && (result[key] = valueArr[index][key]);
                    }
                    break
                }
                else {
                    index < keyArr.length && (result[keyArr[index]] = valueArr[index]);
                }
            }
            return result
        };
    //为什么要实现这个东西呢？私有性？！
    var Dictionary = function () {
        this.keys = [];
        this.values = {};
        this.m = {}
    };
    Dictionary.prototype.set = function (key, value, c) {
        this.keys.push(key);
        c ? this.m[":" + key] = value : this.values[":" + key] = value
    };
    Dictionary.prototype.get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
    };
    Dictionary.prototype.map = function (callback) {
        for (var i = 0; i < this.keys.length; i++) {
            var key = this.keys[i], value = this.get(key);
            value && callback(key, value)
        }
    };
    var globalObject = global.window, document = global.document;
    //@TODO 参数啥意思
    var shouldIgnore = function (a) {
        var __gaPrefer = globalObject._gaUserPrefs;
        if (__gaPrefer && __gaPrefer.ioo && __gaPrefer.ioo() || a && true === globalObject["ga-disable-" + a])return true;
        try {
            var ext = globalObject.external;
            if (ext && ext._gaUserPrefs && "oo" == ext._gaUserPrefs)return true
        } catch (d) {
        }
        return false
    };
    //cookie函数
    var getCookieValue = function (key) {
            var cookieValue = [], cookieList = document.cookie.split(";");
            key = new RegExp("^\\s*" + key + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < cookieList.length; d++) {
                var isThatKey = cookieList[d].match(key);
                isThatKey && cookieValue.push(isThatKey[1])
            }
            return cookieValue
        },
        setCookie = function (cookieKey, cookieValue, cookiePath, cookieDomain, what, cookieLifeTime) {
            var cookieStr,
                shouldNotIgnore,
                documentCookie,
                cookieVal,
                i;
            //@TODO doubleClick和google'/'域的cookie不予受理
            shouldNotIgnore = shouldIgnore(what) ? false : doubleCickReg.test(document.location.hostname) || "/" == cookiePath && googleDomainREg.test(cookieDomain) ? false : true;
            if (!shouldNotIgnore)return false;
            cookieValue && 1200 < cookieValue.length && (cookieValue = cookieValue.substring(0, 1200), setAlphaBet(24));
            cookieStr = cookieKey + "=" + cookieValue + "; path=" + cookiePath + "; ";
            cookieLifeTime && (cookieStr += "expires=" + (new Date((new Date).getTime() + cookieLifeTime)).toGMTString() + "; ");
            cookieDomain && "none" != cookieDomain && (cookieStr += "domain=" + cookieDomain + ";");
            documentCookie = document.cookie;
            document.cookie = cookieStr;
            //是否设置cookie成功
            if (!(documentCookie != document.cookie))
                a:{
                    cookieVal = getCookieValue(cookieKey);
                    for (i = 0; i < cookieVal.length; i++) {
                        if (cookieValue == cookieKey[i]) {
                            cookieDomain = true;
                            break a
                        }
                    }

                    cookieDomain = false;
                }
            return cookieDomain
        },
        escapeParentheses = function (str) {
            return uriComponentEncode(str).replace(/\(/g, "%28").replace(/\)/g, "%29")
        },
        googleDomainREg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        doubleCickReg = /(^|\.)doubleclick\.net$/i;
    var gaHost = function () {
            return (forceHttps || isHttps() ? "https:" : "http:") + "//www.google-analytics.com"
        },
        Da = function (a) {
            this.name = "len";
            this.message = a + "-8192"
        },
        sendBack = function (backPath, queryStr, callback) {
            callback = callback || emptyFunction;
            if (2036 >= queryStr.length) {
                sendBackByImg(backPath, queryStr, callback);
            }
            else if (8192 >= queryStr.length) {
                sendByBeacon(backPath, queryStr, callback) || sendByCORSAjax(backPath, queryStr, callback) || sendBackByImg(backPath, queryStr, callback);
            } else {
                throw errorSendBack("len", queryStr.length), new Da(queryStr.length);
            }
        },
        sendBackByImg = function (backPath, queryStr, callback) {
            var img = create1pxImg(backPath + "?" + queryStr);
            img.onload = img.onerror = function () {
                img.onload = null;
                img.onerror = null;
                callback()
            }
        },
        sendByCORSAjax = function (backPath, queryStr, callback) {
            var xhr = globalObject.XMLHttpRequest;
            if (!xhr)return false;
            var e = new xhr;
            if (!("withCredentials" in e))return false;
            e.open("POST", backPath, true);
            e.withCredentials = true;
            e.setRequestHeader("Content-Type", "text/plain");
            e.onreadystatechange = function () {
                4 == e.readyState && (callback(), e = null)
            };
            e.send(queryStr);
            return true
        },
        sendByBeacon = function (path, arg, callbak) {
            return globalObject.navigator.sendBeacon ? globalObject.navigator.sendBeacon(path, arg) ? (callbak(), true) : false : false
        },
    //1%概率上报
        errorSendBack = function (errorType, errorFunc, message) {
            var querystrArr;
            if (100 * Math.random() <= 1) {
                if (!shouldIgnore("?")) {
                    querystrArr = ["t=error", "_e=" + errorType, "_v=j40", "sr=1"];
                    errorFunc && querystrArr.push("_f=" + errorFunc);
                    message && querystrArr.push("_m=" + uriComponentEncode(message.substring(0, 100)));
                    querystrArr.push("aip=1");
                    querystrArr.push("z=" + randomSalt());
                    sendBackByImg(gaHost() + "/collect", querystrArr.join("&"), emptyFunction)
                }
            }
        };
    var Ha = function () {
        this.M = []
    };
    Ha.prototype.add = function (a) {
        this.M.push(a)
    };
    Ha.prototype.D = function (a) {
        try {
            for (var b = 0; b < this.M.length; b++) {
                var c = a.get(this.M[b]);
                c && isFunction(c) && c.call(globalObject, a)
            }
        } catch (d) {
        }
        b = a.get(Ia);
        b != emptyFunction && isFunction(b) && (a.set(Ia, emptyFunction, true), setTimeout(b, 10))
    };
    function Ja(a) {
        if (100 != a.get(Ka) && likeAHashFunction(getStringValueOfKeyIn(a, Q)) % 1E4 >= 100 * getNumberValueOfKeyInDic(a, Ka))throw"abort";
    }

    function Ma(a) {
        if (shouldIgnore(getStringValueOfKeyIn(a, Na)))throw"abort";
    }

    function checkProtocol() {
        var a = document.location.protocol;
        if ("http:" != a && "https:" != a)throw"abort";
    }

    function Pa(a) {
        try {
            globalObject.navigator.sendBeacon ? setAlphaBet(42) : globalObject.XMLHttpRequest && "withCredentials" in new globalObject.XMLHttpRequest && setAlphaBet(40)
        } catch (c) {
        }
        a.set(usageSymbol, Td(a), true);
        a.set(Ac, getNumberValueOfKeyInDic(a, Ac) + 1);
        var b = [];
        sharedDictionary.map(function (c, d) {
            if (d.F) {
                var e = a.get(c);
                undefined != e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), b.push(d.F + "=" + uriComponentEncode("" + e)))
            }
        });
        b.push("z=" + Bd());
        a.set(Ra, b.join("&"), true)
    }

    function Sa(a) {
        var b = getStringValueOfKeyIn(a, gd) || gaHost() + "/collect", c = getStringValueOfKeyIn(a, fa);
        !c && a.get(Vd) && (c = "beacon");
        if (c) {
            var d = getStringValueOfKeyIn(a, Ra), e = a.get(Ia), e = e || emptyFunction;
            "image" == c ? sendBackByImg(b, d, e) : "xhr" == c && sendByCORSAjax(b, d, e) || "beacon" == c && x(b, d, e) || sendBack(b, d, e)
        } else sendBack(b, getStringValueOfKeyIn(a, Ra), a.get(Ia));
        a.set(Ia, emptyFunction, true)
    }

    function Hc(a) {
        var b = globalObject.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
    }

    //当是请求缩略图时禁止使用ga，不应计入
    function testIsPreview() {
        if (globalObject.navigator && "preview" == globalObject.navigator.loadPurpose)throw"abort";
    }

    function yd(a) {
        var b = globalObject.gaDevIds;
        isArray(b) && 0 != b.length && a.set("&did", b.join(","), true)
    }

    function vb(a) {
        if (!a.get(Na))throw"abort";
    };
    var randomSalt = function () {
        return Math.round(2147483647 * Math.random())
    }, Bd = function () {
        try {
            var a = new Uint32Array(1);
            globalObject.crypto.getRandomValues(a);
            return a[0] & 2147483647
        } catch (b) {
            return randomSalt()
        }
    };

    function Ta(a) {
        var b = getNumberValueOfKeyInDic(a, Ua);
        500 <= b && setAlphaBet(15);
        var c = getStringValueOfKeyIn(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = getNumberValueOfKeyInDic(a, Wa), d = (new Date).getTime(), e = getNumberValueOfKeyInDic(a, Xa);
            0 == e && a.set(Xa, d);
            e = Math.round(2 * (d - e) / 1E3);
            0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
            if (0 >= c)throw"abort";
            a.set(Wa, --c)
        }
        a.set(Ua, ++b)
    };
    var Ya = function () {
            this.data = new Dictionary
        },
        sharedDictionary = new Dictionary,
        sharedRegKeyDictionary = [];
    Ya.prototype.get = function (key) {
        var b = getValueFrromSharedDic(key),
            value = this.data.get(key);
        b && undefined == value && (value = isFunction(b.defaultValue) ? b.defaultValue() : b.defaultValue);
        return b && b.Z ? b.Z(this, key, value) : value
    };
    Ya.prototype.set = function (a, b, c) {
        if (a)if ("object" == typeof a)for (var d in a)a.hasOwnProperty(d) && ab(this, d, a[d], c); else ab(this, a, b, c)
    };
    var getStringValueOfKeyIn = function (dic, key) {
            var val = dic.get(key);
            return undefined == val ? "" : "" + val
        },
        getNumberValueOfKeyInDic = function (dic, key) {
            var value = dic.get(key);
            //将字符串转换为数字
            return undefined == value || "" === value ? 0 : 1 * value;
        };
    var ab = function (a, b, c, d) {
            if (undefined != c)switch (b) {
                case Na:
                    wb.test(c)
            }
            var e = getValueFrromSharedDic(b);
            e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
        },
        bb = function (name, shortName, defaultVal, d, e) {
            this.name = name;
            this.F = shortName;
            this.Z = d;
            this.o = e;
            this.defaultValue = defaultVal;
        },
        getValueFrromSharedDic = function (key) {
            var sharedValue = sharedDictionary.get(key);
            if (!sharedValue) {
                for (var i = 0; i < sharedRegKeyDictionary.length; i++) {
                    var d = sharedRegKeyDictionary[i],
                        isMatched = d[0].exec(key);
                    if (isMatched) {
                        sharedValue = d[1](isMatched);
                        sharedDictionary.set(sharedValue.name, sharedValue);
                        break
                    }
                }
            }
            return sharedValue
        },
        yc = function (a) {
            var b;
            sharedDictionary.map(function (key, value) {
                value.F == a && (b = value)
            });
            return b && b.name
        },
        S = function (name, shortName, defaultVal, d, e) {
            var aObj;
            aObj = new bb(name, shortName, defaultVal, d, e);
            sharedDictionary.set(name, aObj);
            return name;
        },
        cb = function (a, b) {
            sharedRegKeyDictionary.push([new RegExp("^" + a + "$"), b])
        },
        T = function (name, shortName, defaultVal) {
            return S(name, shortName, defaultVal, undefined, emptyFunction)
        };
        //,
        //emptyFunction = function () {
        //};
        //多次声明空函数
    var GA_GLOBAL_NAME = isString(globalObject.GoogleAnalyticsObject) && trim(globalObject.GoogleAnalyticsObject) || "ga",
        forceHttps = false,
        he = S("_br"),
        hb = T("apiVersion", "v"),
        ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"),
        Va = S("hitType", "t"),
        Ia = S("hitCallback"),
        Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    S("dataSource", "ds");
    var Vd = S("useBeacon", undefined, false),
        fa = S("transport");
    S("sessionControl", "sc", "");
    S("sessionGroup", "sg");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("screenName", "cd");
    var kb = S("location", "dl", ""),
        lb = S("referrer", "dr"),
        mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"), ob = S("encoding", "de");
    S("title", "dt", function () {
        return document.title || undefined
    });
    cb("contentGroup([0-9]+)", function (a) {
        return new bb(a[0], "cg" + a[1])
    });
    var pb = S("screenColors", "sd"),
        qb = S("screenResolution", "sr"),
        rb = S("viewportSize", "vp"),
        sb = S("javaEnabled", "je"),
        tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"),
        xb = S("eventAction", "ea"),
        yb = S("eventLabel", "el"),
        zb = S("eventValue", "ev"),
        Bb = S("socialNetwork", "sn"),
        Cb = S("socialAction", "sa"),
        Db = S("socialTarget", "st"),


    //page load time
        Eb = S("l1", "plt"),
    //
        Fb = S("l2", "pdt"),
    //dns time
        Gb = S("l3", "dns"),
    //navigation start to fetch start
        Hb = S("l4", "rrt"),
    //send request time
        Ib = S("l5", "srt"),
    //tcp conn time
        Jb = S("l6", "tcp"),
    //dom interactive time
        Kb = S("l7", "dit"),
    //dom Content Load time
        Lb = S("l8", "clt"),
        Mb = S("timingCategory", "utc"),
        Nb = S("timingVar", "utv"),
        Ob = S("timingLabel", "utl"),
        Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"),
        Oc = S("expVar", "xvar"),
        Rc = S("_utma", "_utma"),
        Sc = S("_utmz", "_utmz"),
        Tc = S("_utmht", "_utmht"),
        Ua = S("_hc", undefined, 0),
        Xa = S("_ti", undefined, 0),
        Wa = S("_to", undefined, 20);
    cb("dimension([0-9]+)", function (a) {
        return new bb(a[0], "cd" + a[1])
    });
    cb("metric([0-9]+)", function (a) {
        return new bb(a[0], "cm" + a[1])
    });
    S("linkerParam", undefined, undefined, Bc, emptyFunction);
    var usageSymbol = S("usage", "_u"), _umSymbol = S("_um");
    S("forceSSL", undefined, undefined, function () {
        return forceHttps
    }, function (a, b, c) {
        setAlphaBet(34);
        forceHttps = !!c
    });
    var ed = S("_j1", "jid");
    cb("\\&(.*)", function (a) {
        var b = new bb(a[0], a[1]), c = yc(a[0].substring(1));
        if(c){
            b.Z = function (a) {
                return a.get(c)
            };
            b.o = function (a, b, g, ca) {
                a.set(c, g, ca)
            };
            b.F = undefined;
        }
        return b;
    });
    var _ootSymbol = T("_oot"),
        dd = S("previewTask"),
        Rb = S("checkProtocolTask"),
        md = S("validationTask"),
        Sb = S("checkStorageTask"),
        Uc = S("historyImportTask"),
        Tb = S("samplerTask"),
        Vb = S("_rlt"),
        Wb = S("buildHitTask"),
        Xb = S("sendHitTask"),
        Vc = S("ceTask"),
        zd = S("devIdTask"),
        Cd = S("timingTask"),
        Ld = S("displayFeaturesTask"),
        V = T("name"),
        Q = T("clientId", "cid"),
        Ad = S("userId", "uid"),
        Na = T("trackingId", "tid"),
        U = T("cookieName", undefined, "_ga"),
        W = T("cookieDomain"),
        Yb = T("cookiePath", undefined, "/"),
        Zb = T("cookieExpires", undefined, 63072E3),
        $b = T("legacyCookieDomain"),
        Wc = T("legacyHistoryImport", undefined, true),
        ac = T("storage", undefined, "cookie"),
        bc = T("allowLinker", undefined, false),
        cc = T("allowAnchor", undefined, true),
        Ka = T("sampleRate", "sf", 100),
        dc = T("siteSpeedSampleRate", undefined, 1),
        ec = T("alwaysSendReferrer", undefined, false),
        gd = S("transportUrl"),
        Md = S("_r", "_r");

    function X(a, b, c, d) {
        b[a] = function () {
            try {
                return d && setAlphaBet(d), c.apply(this, arguments)
            } catch (b) {
                throw errorSendBack("exc", a, b && b.name), b;
            }
        }
    };
    var Od = function (a, b, c) {
        this.V = 1E4;
        this.fa = a;
        this.$ = false;
        this.B = b;
        this.ea = c || 1
    }, Ed = function (a, b) {
        var c;
        if (a.fa && a.$)return 0;
        a.$ = true;
        if (b) {
            if (a.B && getNumberValueOfKeyInDic(b, a.B))return getNumberValueOfKeyInDic(b, a.B);
            if (0 == b.get(dc))return 0
        }
        if (0 == a.V)return 0;
        undefined === c && (c = Bd());
        return 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0;
    };
    var ie = new Od(true, he, 7),
        je = function (a) {
            if (!isHttps() && !forceHttps) {
                var b = Ed(ie, a);
                if (b && !(!globalObject.navigator.sendBeacon && 4 <= b && 6 >= b)) {
                    var c = (new Date).getHours(), d = [Bd(), Bd(), Bd()].join(".");
                    a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br.";
                    a += [b, "A", c, d].join(".");
                    var e = 1 != b % 3 ? "https:" : "http:", e = e + "//www.google-analytics.com/collect?z=br.", e = e + [b, "B", c, d].join(".");
                    7 == b && (e = e.replace("//www.", "//ssl."));
                    c = function () {
                        4 <= b && 6 >= b ? globalObject.navigator.sendBeacon(e, "") : create1pxImg(e)
                    };
                    Bd() % 2 ? (create1pxImg(a), c()) : (c(), create1pxImg(a))
                }
            }
        };

    function getShockwaveFlashVersion() {
        var axObj,
            shockWaveVersion,
            c = globalObject.navigator,
            plugins;
        if ((plugins = c ? c.plugins : null) && plugins.length) {
            //获取Shockwave Flash
            for (var i = 0; i < plugins.length && !shockWaveVersion; i++) {
                var plugin = plugins[i];
                -1 < plugin.name.indexOf("Shockwave Flash") && (shockWaveVersion = plugin.description)
            }
        }
        if (!shockWaveVersion)try {
            axObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            shockWaveVersion = axObj.GetVariable("$version")
        } catch (g) {
        }
        if (!shockWaveVersion)try {
            axObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            shockWaveVersion = "WIN 6,0,21,0", axObj.AllowScriptAccess = "always", shockWaveVersion = axObj.GetVariable("$version")
        } catch (g) {
        }
        if (!shockWaveVersion)try {
            axObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            shockWaveVersion = axObj.GetVariable("$version")
        } catch (g) {
        }
        shockWaveVersion &&
        (axObj = shockWaveVersion.match(/[\d]+/g)) && 3 <= axObj.length && (shockWaveVersion = axObj[0] + "." + axObj[1] + " r" + axObj[2]);
        return shockWaveVersion || undefined;
    };
    var gc = function (a, b) {
            var c = Math.min(getNumberValueOfKeyInDic(a, "siteSpeedSampleRate"), 100),
                timingObj = {};
            if (!(likeAHashFunction(getStringValueOfKeyIn(a, "clientId")) % 100 >= c) && (setTimingInObj(timingObj) || setTimingInObjByExternal(timingObj))) {
                var d = timingObj[Eb];
                undefined == d || Infinity == d || isNaN(d) ||
                (0 < d ? (Y(timingObj, Gb), Y(timingObj, Jb), Y(timingObj, Ib), Y(timingObj, Fb), Y(timingObj, Hb), Y(timingObj, Kb), Y(timingObj, Lb), b(timingObj))
                    : addEve(globalObject, "load", function () {
                    gc(a, b)
                }, false))
            }
        },
        setTimingInObj = function (obj) {
            var __performace = globalObject.performance || globalObject.webkitPerformance,
                timingApi = __performace && __performace.timing;
            if (!timingApi)return false;
            var navigationStart = timingApi.navigationStart;
            if (0 == navigationStart)return false;
            obj[Eb] = timingApi.loadEventStart - navigationStart;
            obj[Gb] = timingApi.domainLookupEnd - timingApi.domainLookupStart;
            obj[Jb] = timingApi.connectEnd - timingApi.connectStart;
            obj[Ib] = timingApi.responseStart - timingApi.requestStart;
            obj[Fb] = timingApi.responseEnd - timingApi.responseStart;
            obj[Hb] = timingApi.fetchStart - navigationStart;
            obj[Kb] = timingApi.domInteractive - navigationStart;
            obj[Lb] = timingApi.domContentLoadedEventStart - navigationStart;
            return true
        },
        setTimingInObjByExternal = function (obj) {
            if (globalObject.top != globalObject)return false;
            //window.external是浏览器可以调用的cpp扩展
            var b = globalObject.external,
            //@TODO etPageReadyTime是谁家野鸡函数
                c = b && b.onloadT;
            b && !b.isValidLoadTime && (c = undefined);
            //0x80000000
            2147483648 < c && (c = undefined);
            0 < c && b.setPageReadyTime();
            if (undefined == c)return false;
            obj[Eb] = c;
            return true
        }, Y = function (a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c)a[b] = undefined
        }, Fd = function (a) {
            return function (b) {
                "pageview" != b.get(Va) || a.I || (a.I = true, gc(b, function (b) {
                    a.send("timing", b)
                }))
            }
        };
    var hc = false, mc = function (a) {
            if ("cookie" == getStringValueOfKeyIn(a, ac)) {
                var b = getStringValueOfKeyIn(a, U), c = nd(a), d = kc(getStringValueOfKeyIn(a, Yb)), e = lc(getStringValueOfKeyIn(a, W)), g = 1E3 * getNumberValueOfKeyInDic(a, Zb), ca = getStringValueOfKeyIn(a, Na);
                if ("auto" != e)setCookie(b, c, d, e, ca, g) && (hc = true); else {
                    setAlphaBet(32);
                    var l;
                    a:{
                        c = [];
                        e = domainName().split(".");
                        if (4 == e.length && (l = e[e.length - 1], parseInt(l, 10) == l)) {
                            l = ["none"];
                            break a
                        }
                        for (l = e.length - 2; 0 <= l; l--)c.push(e.slice(l).join("."));
                        c.push("none");
                        l = c
                    }
                    for (var k = 0; k < l.length; k++)if (e = l[k], a.data.set(W, e), c = nd(a), setCookie(b, c, d, e, ca, g)) {
                        hc = true;
                        return
                    }
                    a.data.set(W, "auto")
                }
            }
        }, nc = function (a) {
            if ("cookie" == getStringValueOfKeyIn(a, ac) && !hc && (mc(a), !hc))throw"abort";
        }, Yc = function (a) {
            if (a.get(Wc)) {
                var b = getStringValueOfKeyIn(a, W), c = getStringValueOfKeyIn(a, $b) || domainName(), d = Xc("__utma", c, b);
                d && (setAlphaBet(19), a.set(Tc, (new Date).getTime(), true), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R))
            }
        }, nd = function (a) {
            var b = escapeParentheses(getStringValueOfKeyIn(a, Q)), c = ic(getStringValueOfKeyIn(a, W));
            a = jc(getStringValueOfKeyIn(a, Yb));
            1 < a && (c += "-" + a);
            return ["GA1", c, b].join(".")
        }, Gc = function (a, b, c) {
            for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
                var l = a[ca];
                l.H[c] == b ? d.push(l) : undefined == g || l.H[c] < g ? (e = [l], g = l.H[c]) : l.H[c] == g && e.push(l)
            }
            return 0 < d.length ? d : e
        },
        lc = function (a) {
            return 0 == a.indexOf(".") ? a.substr(1) : a
        }, ic = function (a) {
            return lc(a).split(".").length
        }, kc = function (a) {
            if (!a)return "/";
            1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1));
            0 != a.indexOf("/") && (a = "/" + a);
            return a
        }, jc = function (a) {
            a = kc(a);
            return "/" == a ? 1 : a.split("/").length
        };

    function Xc(a, b, c) {
        "none" == b && (b = "");
        var d = [], e = getCookieValue(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e.length; g++) {
            var ca = ("" + e[g]).split(".");
            ca.length >= a && d.push({hash: ca[0], R: e[g], O: ca})
        }
        return 0 == d.length ? undefined : 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }

    function Zc(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = likeAHashFunction(a), d = likeAHashFunction(isStartWith(a, ".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++)if (b[e].hash == c || b[e].hash == d)return b[e]
    };
    var od = new RegExp(/^https?:\/\/([^\/:]+)/), pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + uriComponentEncode(b + "." + a)
    }

    function Ic(a, b) {
        for (var c = new Date, d = globalObject.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d)c.push(e[d].description);
        return likeAHashFunction(c.join("."))
    }

    var Dc = function (a) {
        setAlphaBet(48);
        this.target = a;
        this.T = false
    };
    Dc.prototype.ca = function (a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) {
                a.href && (a.href = qd(this, a.href, b));
                return
            }
            if ("form" == a.tagName.toLowerCase())return rd(this, a)
        }
        if ("string" == typeof a)return qd(this, a, b)
    };
    var qd = function (a, b, c) {
        var d = pd.exec(b);
        d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
        a = a.target.get("linkerParam");
        var e = b.indexOf("?"), d = b.indexOf("#");
        c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d));
        return b = b.replace(/&+_ga=/, "&_ga=")
    }, rd = function (a, b) {
        if (b && b.action) {
            var c = a.target.get("linkerParam").split("=")[1];
            if ("get" == b.method.toLowerCase()) {
                for (var d = b.childNodes || [], e = 0; e < d.length; e++)if ("_ga" == d[e].name) {
                    d[e].setAttribute("value", c);
                    return
                }
                d =
                    document.createElement("input");
                d.setAttribute("type", "hidden");
                d.setAttribute("name", "_ga");
                d.setAttribute("value", c);
                b.appendChild(d)
            } else"post" == b.method.toLowerCase() && (b.action = qd(a, b.action))
        }
    };
    Dc.prototype.S = function (a, b, c) {
        function d(c) {
            try {
                c = c || globalObject.event;
                var d;
                a:{
                    var g = c.target || c.srcElement;
                    for (c = 100; g && 0 < c;) {
                        if (g.href && g.nodeName.match(/^a(?:rea)?$/i)) {
                            d = g;
                            break a
                        }
                        g = g.parentNode;
                        c--
                    }
                    d = {}
                }
                ("http:" == d.protocol || "https:" == d.protocol) && sd(a, d.hostname || "") && d.href && (d.href = qd(e, d.href, b))
            } catch (w) {
                setAlphaBet(26)
            }
        }

        var e = this;
        this.T || (this.T = true, addEve(document, "mousedown", d, false), addEve(document, "keyup", d, false));
        if (c) {
            c = function (b) {
                b = b || globalObject.event;
                if ((b = b.target || b.srcElement) && b.action) {
                    var c = b.action.match(od);
                    c && sd(a, c[1]) && rd(e,
                        b)
                }
            };
            for (var g = 0; g < document.forms.length; g++)addEve(document.forms[g], "submit", c)
        }
    };
    function sd(a, b) {
        if (b == document.location.hostname)return false;
        for (var c = 0; c < a.length; c++)if (a[c] instanceof RegExp) {
            if (a[c].test(b))return true
        } else if (0 <= b.indexOf(a[c]))return true;
        return false
    }
    var Jd = function (a, b, c) {
        this.U = ed;
        this.aa = b;
        (b = c) || (b = (b = getStringValueOfKeyIn(a, V)) && "t0" != b ? Wd.test(b) ? "_gat_" + escapeParentheses(getStringValueOfKeyIn(a, Na)) : "_gat_" + escapeParentheses(b) : "_gat");
        this.Y = b
    }, Rd = function (a, b) {
        var c = b.get(Wb);
        b.set(Wb, function (b) {
            Pd(a, b);
            var d = c(b);
            Qd(a, b);
            return d
        });
        var d = b.get(Xb);
        b.set(Xb, function (b) {
            var c = d(b);
            Id(a, b);
            return c
        })
    }, Pd = function (a, b) {
        b.get(a.U) || ("1" == getCookieValue(a.Y)[0] ? b.set(a.U, "", true) : b.set(a.U, "" + randomSalt(), true))
    }, Qd = function (a, b) {
        b.get(a.U) && setCookie(a.Y, "1", b.get(Yb), b.get(W), b.get(Na), 6E5)
    }, Id = function (a, b) {
        if (b.get(a.U)) {
            var c = new Dictionary,
                d = function (a) {
                    getValueFrromSharedDic(a).F && c.set(getValueFrromSharedDic(a).F, b.get(a))
                };
            d(hb);
            d(ib);
            d(Na);
            d(Q);
            d(a.U);
            c.set(getValueFrromSharedDic(usageSymbol).F, Td(b));
            var e = a.aa;
            c.map(function (a, b) {
                e += uriComponentEncode(a) + "=";
                e += uriComponentEncode("" + b) + "&"        
            });
            e += "z=" + randomSalt();
            create1pxImg(e);
            b.set(a.U, "", true)
        }
    }, Wd = /^gtm\d+$/;
    var fd = function (a, b) {
        var c = a.b;
        if (!c.get("dcLoaded")) {
            Nd(c, 29);
            b = b || {};
            var d;
            b[U] && (d = escapeParentheses(b[U]));
            d = new Jd(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d);
            Rd(d, c);
            c.set("dcLoaded", true)
        }
    };
    var Sd = function (a) {
        if (!a.get("dcLoaded") && "cookie" == a.get(ac)) {
            Nd(a, 51);
            var b = new Jd(a);
            Pd(b, a);
            Qd(b, a);
            a.get(b.U) && (a.set(Md, 1, true), a.set(gd, gaHost() + "/r/collect", true))
        }
    };
    var Lc = function () {
        var a = globalObject.gaGlobal = globalObject.gaGlobal || {};
        return a.hid = a.hid || randomSalt()
    };
    var ad, bd = function (a, b, c) {
        if (!ad) {
            var d;
            d = document.location.hash;
            var e = globalObject.name, g = /^#?gaso=([^&]*)/;
            if (e = (d = (d = d && d.match(g) || e && e.match(g)) ? d[1] : getCookieValue("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))setCookie("GASO", "" + d, c, b, a, 0), globalObject._udo || (globalObject._udo = b), globalObject._utcp || (globalObject._utcp = c), a = e[1], loadScriptAsync("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + randomSalt(), "_gasojs");
            ad = true
        }
    };
    var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
        pc = function (a) {
            function b(a, b) {
                ctx.b.data.set(a, b)
            }

            function c(a, c) {
                b(a, c);
                ctx.filters.add(a)
            }

            var ctx = this;
            this.b = new Ya;
            this.filters = new Ha;
            b(V, a[V]);
            b(Na, trim(a[Na]));
            b(U, a[U]);
            b(W, a[W] || domainName());
            b(Yb, a[Yb]);
            b(Zb, a[Zb]);
            b($b, a[$b]);
            b(Wc, a[Wc]);
            b(bc, a[bc]);
            b(cc, a[cc]);
            b(Ka, a[Ka]);
            b(dc, a[dc]);
            b(ec, a[ec]);
            b(ac, a[ac]);
            b(Ad, a[Ad]);
            b(hb, 1);
            b(ib, "j40");
            c(_ootSymbol, Ma);
            c(dd, testIsPreview);
            c(Rb, checkProtocol);
            c(md, vb);
            c(Sb, nc);
            c(Uc, Yc);
            c(Tb, Ja);
            c(Vb, Ta);
            c(Vc, Hc);
            c(zd, yd);
            c(Ld, Sd);
            c(Wb, Pa);
            c(Xb, Sa);
            c(Cd, Fd(this));
            Jc(this.b, a[Q]);
            Kc(this.b);
            this.b.set(jb, Lc());
            bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
        },
        Jc = function (a, b) {
            if ("cookie" == getStringValueOfKeyIn(a, ac)) {
                hc = false;
                var c;
                b:{
                    var d = getCookieValue(getStringValueOfKeyIn(a, U));
                    if (d && !(1 > d.length)) {
                        c = [];
                        for (var e = 0; e < d.length; e++) {
                            var g;
                            g = d[e].split(".");
                            var ca = g.shift();
                            ("GA1" == ca || "1" == ca) && 1 < g.length ? (ca = g.shift().split("-"), 1 == ca.length && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                                H: ca,
                                s: g.join(".")
                            }) : g = undefined;
                            g && c.push(g)
                        }
                        if (1 == c.length) {
                            setAlphaBet(13);
                            c = c[0].s;
                            break b
                        }
                        if (0 == c.length)setAlphaBet(12); else {
                            setAlphaBet(14);
                            d = ic(getStringValueOfKeyIn(a, W));
                            c = Gc(c,
                                d, 0);
                            if (1 == c.length) {
                                c = c[0].s;
                                break b
                            }
                            d = jc(getStringValueOfKeyIn(a, Yb));
                            c = Gc(c, d, 1);
                            c = c[0] && c[0].s;
                            break b
                        }
                    }
                    c = undefined
                }
                c || (c = getStringValueOfKeyIn(a, W), d = getStringValueOfKeyIn(a, $b) || domainName(), c = Xc("__utma", d, c), undefined != c ? (setAlphaBet(10), c = c.O[1] + "." + c.O[2]) : c = undefined);
                c && (a.data.set(Q, c), hc = true)
            }
            c = a.get(cc);
            if (e = (c = document.location[c ? "href" : "search"].match("(?:&|#|\\?)" + uriComponentEncode("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "")a.get(bc) ? (c = e.indexOf("."), -1 == c ? setAlphaBet(22) : (d = e.substring(c + 1), "1" != e.substring(0, c) ? setAlphaBet(22) : (c = d.indexOf("."), -1 == c ? setAlphaBet(22) : (e =
                d.substring(0, c), c = d.substring(c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? setAlphaBet(23) : (setAlphaBet(11), a.data.set(Q, c)))))) : setAlphaBet(21);
            b && (setAlphaBet(9), a.data.set(Q, uriComponentEncode(b)));
            if (!a.get(Q))if (c = (c = globalObject.gaGlobal && globalObject.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ? c : undefined)setAlphaBet(17), a.data.set(Q, c); else {
                setAlphaBet(8);
                c = globalObject.navigator.userAgent + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : "");
                d = c.length;
                for (e = globalObject.history.length; 0 < e;)c += e-- ^ d++;
                a.data.set(Q, [randomSalt() ^ likeAHashFunction(c) & 2147483647, Math.round((new Date).getTime() / 1E3)].join("."))
            }
            mc(a)
        },
        Kc = function (a) {
            var navigator = globalObject.navigator,
                screen = globalObject.screen,
                location = document.location;
            a.set(lb, referrer(a.get(ec)));
            //原来压缩过的代码，如果没有作用域提升，会有全局变量
            if (location) {
                var pathname = location.pathname || "";
                "/" != pathname.charAt(0) && (setAlphaBet(31), pathname = "/" + pathname);
                a.set(kb, location.protocol + "//" + location.hostname + pathname + location.search)
            }
            screen && a.set(qb, screen.width + "x" + screen.height);
            screen && a.set(pb, screen.colorDepth + "-bit");
            var c = document.documentElement, g = (pathname = document.body) && pathname.clientWidth && pathname.clientHeight, ca = [];
            c && c.clientWidth && c.clientHeight && ("CSS1Compat" === document.compatMode || !g) ? ca = [c.clientWidth, c.clientHeight] : g && (ca = [pathname.clientWidth, pathname.clientHeight]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
            a.set(rb, c);
            a.set(tb,
                getShockwaveFlashVersion());
            a.set(ob, document.characterSet || document.charset);
            a.set(sb, navigator && "function" === typeof navigator.javaEnabled && navigator.javaEnabled() || false);
            a.set(nb, (navigator && (navigator.language || navigator.browserLanguage) || "").toLowerCase());
            if (location && a.get(cc) && (navigator = document.location.hash)) {
                navigator = navigator.split(/[?&#]+/);
                location = [];
                for (c = 0; c < navigator.length; ++c)(isStartWith(navigator[c], "utm_id") || isStartWith(navigator[c], "utm_campaign") || isStartWith(navigator[c], "utm_source") || isStartWith(navigator[c], "utm_medium") || isStartWith(navigator[c], "utm_term") || isStartWith(navigator[c], "utm_content") || isStartWith(navigator[c], "gclid") || isStartWith(navigator[c], "dclid") || isStartWith(navigator[c], "gclsrc")) && location.push(navigator[c]);
                0 < location.length && (navigator = "#" + location.join("&"), a.set(kb, a.get(kb) +
                    navigator))
            }
        };
    pc.prototype.get = function (a) {
        return this.b.get(a)
    };
    pc.prototype.set = function (a, b) {
        this.b.set(a, b)
    };
    var qc = {pageview: [mb], event: [ub, xb, yb, zb], social: [Bb, Cb, Db], timing: [Mb, Nb, Pb, Ob]};
    pc.prototype.send = function (a) {
        if (!(1 > arguments.length)) {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
            b && (c = arr2Obj(qc[b] || [], c), c[Va] = b, this.b.set(c, undefined, true), this.filters.D(this.b), this.b.data.m = {}, je(this.b))
        }
    };
    var excuteWhenNotPrerender = function (callback) {
        //document.hidden
        //如果该页面处于用户不可见的状态,返回true,否则返回false.
        //
        //    document.visibilityState
        //返回一个字符串,表明该页面的可见状态.可能的值有:
        //
        //visible : 页面内容至少部分可见.意味着该页面是一个非最小化窗口的前台标签页.
        //    hidden : 页面内容用户不可见.意味着当前浏览器窗口处于最小化模式,或者该页面是一个后台标签页.
        //    prerender : 页面内容正在被预渲染,用户不可见(这种情况下document.hidden会返回true). 一个页面只有在初始化时可能为这个值, 一旦变为其他两种值,不可能再变回来.
        //    unloaded : 当前文档已经被卸载,用户不可见(这种情况下document.hidden会返回true).
        if ("prerender" == document.visibilityState) {
            return false;
        }
        callback();
        return true
    };
    //模式 a.b:c
    var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
        sc = function (a) {
            if (isFunction(a[0])) {
                this.u = a[0];
            }
            else {
                var b = td.exec(a[0]);
                null != b && 4 == b.length &&
                (this.c = b[1] || "t0", this.K = b[2]
                    || "", this.C = b[3], this.a = [].slice.call(a, 1), this.K
                || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C)
                    , this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1]
                && (isString(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1])));
                b = a[1];
                a = a[2];
                if (!this.C)throw"abort";
                if (this.i && (!isString(b) || "" == b))throw"abort";
                if (this.g && (!isString(b) || "" == b || !isFunction(a)))throw"abort";
                if (ud(this.c) || ud(this.K))throw"abort";
                if (this.g && "t0" != this.c)throw"abort";
            }
        };

    function ud(a) {
        return 0 <= a.indexOf(".") || 0 <= a.indexOf(":")
    };
    var Yd, Zd, loadedScriptCache;
    Yd = new Dictionary;
    loadedScriptCache = new Dictionary;
    Zd = {ec: 45, ecommerce: 46, linkid: 47};
    var ae = function (a) {
        function b(a) {
            var b = (a.hostname || "").split(":")[0].toLowerCase(), c = (a.protocol || "").toLowerCase(), c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            a = a.pathname || "";
            isStartWith(a, "/") || (a = "/" + a);
            return [b, "" + c, a]
        }

        var c = document.createElement("a");
        c.href = document.location.href;
        var d = (c.protocol || "").toLowerCase(), e = b(c), g = c.search || "", ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        isStartWith(a, "//") ? a = d + a : isStartWith(a, "/") ? a = ca + a : !a || isStartWith(a, "?") ? a = ca + e[2] + (a || g) : 0 > a.split("/")[0].indexOf(":") && (a = ca + e[2].substring(0, e[2].lastIndexOf("/")) +
            "/" + a);
        c.href = a;
        d = b(c);
        return {
            protocol: (c.protocol || "").toLowerCase(),
            host: d[0],
            port: d[1],
            path: d[2],
            G: c.search || "",
            url: a || ""
        }
    };
    var Z = {
        init: function () {
            Z.f = []
        }
    };
    Z.init();
    //有个无用的参数a
    Z.D = function (a) {
        var c = Z.J.apply(Z, arguments),
            b = Z.f.concat(c);
        for (Z.f = []; 0 < b.length && !Z.v(b[0]) && !(b.shift(), 0 < Z.f.length););

        Z.f = Z.f.concat(b)
    };
    //a是个数组
    Z.J = function (a) {
        for (var result = [], index = 0; index < arguments.length; index++) {
            try {
                var d = new sc(arguments[index]);
                if (d.g)Yd.set(d.a[0], d.a[1]); else {
                    if (d.i) {
                        var e = d, g = e.a[0];
                        if (!isFunction(Yd.get(g)) && !loadedScriptCache.get(g)) {
                            Zd.hasOwnProperty(g) && setAlphaBet(Zd[g]);
                            var ca = e.X;
                            !ca && Zd.hasOwnProperty(g) ? (setAlphaBet(39), ca = g + ".js") : setAlphaBet(43);
                            if (ca) {
                                ca && 0 <= ca.indexOf("/") || (ca = (forceHttps || isHttps() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ca);
                                var l = ae(ca), e = undefined;
                                var k = l.protocol, w = document.location.protocol, e = "https:" == k || k == w ? true : "http:" != k ? false : "http:" == w;
                                var Xd;
                                if (Xd = e) {
                                    var e =
                                        l, be = ae(document.location.href);
                                    if (e.G || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://"))Xd = false; else if (e.host == be.host && e.port == be.port)Xd = true; else {
                                        var ce = "http:" == e.protocol ? 80 : 443;
                                        Xd = "www.google-analytics.com" == e.host && (e.port || ce) == ce && isStartWith(e.path, "/plugins/") ? true : false
                                    }
                                }
                                Xd && (loadScriptAsync(l.url), loadedScriptCache.set(g, true))
                            }
                        }
                    }
                    result.push(d)
                }
            } catch (e) {
            }
        }
        return result
    };
    Z.v = function (gaArg) {
        try {
            if (gaArg.u) {
                gaArg.u.call(globalObject, GAObject.j("t0"));
            }
            else {
                var b = gaArg.c == GA_GLOBAL_NAME ? GAObject : GAObject.j(gaArg.c);
                if (gaArg.A) {
                    "t0" == gaArg.c && GAObject.create.apply(GAObject, gaArg.a);
                }
                else if (gaArg.ba) {
                    GAObject.remove(gaArg.c);
                }
                else if (b) {
                    if (gaArg.i) {
                        var c;
                        var d = gaArg.a[0],
                            e = gaArg.W;
                        b == GAObject || b.get(V);
                        var g = Yd.get(d);
                        isFunction(g) ? (b.plugins_ = b.plugins_ || new Dictionary, b.plugins_.get(d) || b.plugins_.set(d, new g(b, e || {})), c = true) : c = false;
                        if (!c)return true
                    }
                    else if (gaArg.K) {
                        var ca = gaArg.C, l = gaArg.a, k = b.plugins_.get(gaArg.K);
                        k[ca].apply(k, l)
                    }
                    else {
                        b[gaArg.C].apply(b, gaArg.a)
                    }
                }
            }
        } catch (w) {
        }
    };
    var GAObject = function (a) {
        setAlphaBet(1);
        Z.D.apply(Z, [arguments])
    };
    GAObject.dictionary = {};
    //数组中的元素可以描述自身的name...
    GAObject.arr = [];
    GAObject.L = 0;
    //@TODO answer = 42 ……
    GAObject.answer = 42;
    var uc = ["trackingId", "cookieDomain", "name"];
    //原函数有个无用的参数a
    //这货会有副作用，会存到
    GAObject.create = function () {
        //返回一个最多三个key的对象
        var obj = arr2Obj(uc, [].slice.call(arguments));
        obj["name"] = obj["name"] || "t0";
        var key = "" + obj["name"];
        if (GAObject.dictionary[key])return GAObject.dictionary[key];
        obj = new pc(obj);
        GAObject.dictionary[key] = obj;
        GAObject.arr.push(obj);
        return obj
    };
    //从dic和arr中移除
    GAObject.remove = function (key) {
        for (var index = 0; index < GAObject.arr.length; index++) {
            if (GAObject.arr[index].get("name") == key) {
                GAObject.arr.splice(index, 1);
                GAObject.dictionary[key] = null;
                break
            }
        }
    }

    GAObject.j = function (a) {
        return GAObject.dictionary[a]
    };
    //返回数组浅复制
    GAObject.getAll = function () {
        return GAObject.arr.slice(0)
    };
    GAObject.N = function () {
        "ga" != GA_GLOBAL_NAME && setAlphaBet(49);
        var a = globalObject[GA_GLOBAL_NAME];
        if (!a || 42 != a.answer) {
            GAObject.L = a && a.l;
            GAObject.loaded = true;
            var tmp = globalObject[GA_GLOBAL_NAME] = GAObject;
            X("create", tmp, tmp.create);
            X("remove", tmp, tmp.remove);
            X("getByName", tmp, tmp.j, 5);
            X("getAll", tmp, tmp.getAll, 6);
            tmp = pc.prototype;
            X("get", tmp, tmp.get, 7);
            X("set", tmp, tmp.set, 4);
            X("send", tmp, tmp.send);
            tmp = Ya.prototype;
            X("get", tmp, tmp.get);
            X("set", tmp, tmp.set);
            if (!isHttps() && !forceHttps) {
                a:{
                    for (var b = document.getElementsByTagName("script"), c = 0; c < b.length && 100 > c; c++) {
                        var d = b[c].src;
                        if (d && 0 == d.indexOf("https://www.google-analytics.com/analytics")) {
                            setAlphaBet(33);
                            b = true;
                            break a
                        }
                    }
                    tmp = false
                }
                tmp && (forceHttps = true)
            }
            if(!isHttps() && !forceHttps && Ed(new Od)){
                setAlphaBet(36);
                forceHttps = true;
            }
            (globalObject.gaplugins = globalObject.gaplugins || {}).Linker = Dc;
            tmp = Dc.prototype;
            Yd.set("linker", Dc);
            X("decorate", tmp, tmp.ca, 20);
            X("autoLink", tmp, tmp.S, 25);
            Yd.set("displayfeatures", fd);
            Yd.set("adfeatures", fd);
            a = a && a.q;
            isArray(a) ? Z.D.apply(GAObject, a) : setAlphaBet(50)
        }
    };
    GAObject.da = function () {
        for (var a = GAObject.getAll(), b = 0; b < a.length; b++) {
            a[b].get(V)
        }
    };
    //对标签页切换监听
    !function () {
        var callback = GAObject.N;
        if (!excuteWhenNotPrerender(callback)) {
            setAlphaBet(16);
            //解除监听失败或者在同一个事件队列里中触发两次visibilitychange时防止重复执行cb
            var shouldExe = false, cb = function () {
                if (!shouldExe && excuteWhenNotPrerender(callback)) {
                    shouldExe = true;
                    document.removeEventListener ? document.removeEventListener("visibilitychange", cb, false) : document.detachEvent && document.detachEvent("onvisibilitychange", cb)
                }
            };
            addEve(document, "visibilitychange", cb)
        }
    }();
    function likeAHashFunction(str) {
        var b = 1,
            c = 0,
            index;
        if (str) {
            for (b = 0, index = str.length - 1; 0 <= index; index--) {
                c = str.charCodeAt(index);
                b = (b << 6 & 0xfffffff) + c + (c << 14);
                c = b & 0xfe00000;
                b = 0 != c ? b ^ c >> 21 : b;
            }
        }
        return b
    }
})(window);
