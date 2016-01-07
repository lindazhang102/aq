// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 93
(function (window, gteSymbol) {
    window[gteSymbol] = window[gteSymbol] || {};
})(window, 'google_tag_manager');

(function () {
    var window = this,
    //@TODO 疑似没用的函数
        xa = function () {
            var a = YT.Player,
                b = typeof a;
            if ("object" == b)if (a) {
                if (a instanceof Array)return "array";
                if (a instanceof Object)return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
            } else return "null";
            else if ("function" == b && "undefined" == typeof a.call)return "object";
            return b
        },
        partialFunction = function (func) {
            var argsLeft = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = argsLeft.slice();
                b.push.apply(b, arguments);
                return func.apply(this, b)
            }
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var objTypeRegex = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        typeOfA = function (obj) {
            if (null == obj)return String(obj);
            var result = objTypeRegex.exec(Object.prototype.toString.call(Object(obj)));
            return result ? result[1].toLowerCase() : "object"
        },
        hasProp = function (ctx, key) {
            return Object.prototype.hasOwnProperty.call(Object(ctx), key)
        },
        isCommonObj = function (obj) {
            if (!obj || "object" != typeOfA(obj) || obj.nodeType || obj == obj.window)return false;
            try {
                if (obj.constructor && !hasProp(obj, "constructor") && !hasProp(obj.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (e) {
                return false
            }
            for (var key in obj);
            return undefined === key || hasProp(obj, key)
        },
        cloneObj = function (source, out) {
            var result = out || ("array" == typeOfA(source) ? [] : {}),
                key;
            for (key in source) {
                if (hasProp(source, key)) {
                    var value = source[key];
                    "array" == typeOfA(value) ?
                        ("array" != typeOfA(result[key]) && (result[key] = []), result[key] = cloneObj(value, result[key])) :
                        (isCommonObj(value) ?
                            (isCommonObj(result[key]) || (result[key] = {}), result[key] = cloneObj(value, result[key])) :
                            result[key] = value);
                }
            }
            return result
        };
    var ja = null,
        randomSalt = Math.random(),
        Ga = null,
        Ha = null,
        Ia = {};

    //一堆不知所云的变量
    var Ja, Ka, La, Ma, Oa, Pa, Qa, Ra, Sa, Ta, O, P, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, R, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Yc, Zc, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd,
        Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le;
    (function () {
        var stringValueEqualObj = function (str) {
            return {
                toString: function () {
                    return str;
                }
            }
        };
        Ja = stringValueEqualObj("");
        Ka = stringValueEqualObj("0");
        La = stringValueEqualObj("");
        Ma = stringValueEqualObj("");
        Oa = stringValueEqualObj("");
        Pa = stringValueEqualObj("");
        Qa = stringValueEqualObj("");
        Ra = stringValueEqualObj("");
        Sa = stringValueEqualObj("");
        Ta = stringValueEqualObj("");
        O = stringValueEqualObj("3");
        P = stringValueEqualObj("4");
        Ua = stringValueEqualObj("");
        Va = stringValueEqualObj("");
        Wa = stringValueEqualObj("");
        Xa = stringValueEqualObj("");
        Ya = stringValueEqualObj("");
        Za = stringValueEqualObj("");
        $a = stringValueEqualObj("");
        ab = stringValueEqualObj("");
        bb = stringValueEqualObj("");
        cb = stringValueEqualObj("");
        db = stringValueEqualObj("");
        eb = stringValueEqualObj("");
        fb = stringValueEqualObj("");
        gb = stringValueEqualObj("");
        hb = stringValueEqualObj("");
        ib = stringValueEqualObj("");
        jb = stringValueEqualObj("");
        kb = stringValueEqualObj("");
        lb = stringValueEqualObj("");
        mb = stringValueEqualObj("");
        nb = stringValueEqualObj("");
        ob = stringValueEqualObj("");
        pb = stringValueEqualObj("");
        qb = stringValueEqualObj("5");
        rb = stringValueEqualObj("");
        sb = stringValueEqualObj("");
        vb = stringValueEqualObj("");
        wb = stringValueEqualObj("");
        xb = stringValueEqualObj("");
        yb = stringValueEqualObj("");
        zb = stringValueEqualObj("");
        Ab = stringValueEqualObj("");
        Bb = stringValueEqualObj("");
        Cb = stringValueEqualObj("");
        Db = stringValueEqualObj("");
        Eb = stringValueEqualObj("");
        Fb = stringValueEqualObj("");
        Gb = stringValueEqualObj("");
        Hb = stringValueEqualObj("6");
        Ib = stringValueEqualObj("");
        Jb = stringValueEqualObj("7");
        Kb = stringValueEqualObj("");
        Lb = stringValueEqualObj("8");
        Mb = stringValueEqualObj("");
        Nb = stringValueEqualObj("");
        Ob = stringValueEqualObj("9");
        Pb = stringValueEqualObj("");
        Qb = stringValueEqualObj("");
        Rb = stringValueEqualObj("");
        Sb = stringValueEqualObj("");
        Tb = stringValueEqualObj("");
        Ub = stringValueEqualObj("");
        Vb = stringValueEqualObj("");
        Wb = stringValueEqualObj("");
        Xb = stringValueEqualObj("10");
        Yb = stringValueEqualObj("");
        Zb = stringValueEqualObj("11");
        $b = stringValueEqualObj("");
        ac = stringValueEqualObj("");
        bc = stringValueEqualObj("");
        dc = stringValueEqualObj("");
        ec = stringValueEqualObj("");
        fc = stringValueEqualObj("");
        gc = stringValueEqualObj("12");
        hc = stringValueEqualObj("");
        ic = stringValueEqualObj("");
        jc = stringValueEqualObj("13");
        kc = stringValueEqualObj("14");
        lc = stringValueEqualObj("15");
        mc = stringValueEqualObj("");
        nc = stringValueEqualObj("");
        oc = stringValueEqualObj("");
        pc = stringValueEqualObj("");
        qc = stringValueEqualObj("");
        rc = stringValueEqualObj("");
        sc = stringValueEqualObj("");
        tc = stringValueEqualObj("");
        uc = stringValueEqualObj("16");
        vc = stringValueEqualObj("");
        wc = stringValueEqualObj("30");
        xc = stringValueEqualObj("31");
        yc = stringValueEqualObj("");
        zc = stringValueEqualObj("17");
        R = stringValueEqualObj("18");
        Ac = stringValueEqualObj("");
        Bc = stringValueEqualObj("");
        Cc = stringValueEqualObj("");
        Dc = stringValueEqualObj("");
        Ec = stringValueEqualObj("19");
        Fc = stringValueEqualObj("");
        Gc = stringValueEqualObj("");
        Hc = stringValueEqualObj("");
        Ic = stringValueEqualObj("");
        Jc = stringValueEqualObj("20");
        Kc = stringValueEqualObj("");
        Lc = stringValueEqualObj("");
        Mc = stringValueEqualObj("");
        Nc = stringValueEqualObj("");
        Oc = stringValueEqualObj("21");
        Pc = stringValueEqualObj("");
        Qc = stringValueEqualObj("");
        Rc = stringValueEqualObj("");
        Sc = stringValueEqualObj("");
        Tc = stringValueEqualObj("");
        Uc = stringValueEqualObj("");
        Vc = stringValueEqualObj("");
        Yc = stringValueEqualObj("");
        Zc = stringValueEqualObj("");
        dd = stringValueEqualObj("");
        ed = stringValueEqualObj("22");
        fd = stringValueEqualObj("");
        gd = stringValueEqualObj("");
        hd = stringValueEqualObj("");
        id = stringValueEqualObj("");
        jd = stringValueEqualObj("23");
        kd = stringValueEqualObj("");
        ld = stringValueEqualObj("");
        md = stringValueEqualObj("");
        nd = stringValueEqualObj("");
        od = stringValueEqualObj("");
        pd = stringValueEqualObj("");
        qd = stringValueEqualObj("");
        rd = stringValueEqualObj("");
        sd = stringValueEqualObj("");
        td = stringValueEqualObj("");
        ud = stringValueEqualObj("");
        vd = stringValueEqualObj("");
        wd = stringValueEqualObj("");
        xd = stringValueEqualObj("");
        yd = stringValueEqualObj("");
        zd = stringValueEqualObj("");
        Ad = stringValueEqualObj("");
        Bd = stringValueEqualObj("");
        Cd = stringValueEqualObj("");
        Dd = stringValueEqualObj("");
        Ed = stringValueEqualObj("");
        Fd = stringValueEqualObj("");
        Gd = stringValueEqualObj("");
        Hd = stringValueEqualObj("");
        Id = stringValueEqualObj("");
        Jd = stringValueEqualObj("");
        Kd = stringValueEqualObj("");
        Ld = stringValueEqualObj("");
        Md = stringValueEqualObj("");
        Nd = stringValueEqualObj("");
        Od = stringValueEqualObj("");
        Pd = stringValueEqualObj("");
        Qd = stringValueEqualObj("");
        Rd = stringValueEqualObj("");
        Sd = stringValueEqualObj("");
        Td = stringValueEqualObj("");
        Ud = stringValueEqualObj("");
        Vd = stringValueEqualObj("");
        Wd = stringValueEqualObj("");
        Xd = stringValueEqualObj("");
        Yd = stringValueEqualObj("25");
        Zd = stringValueEqualObj("");
        $d = stringValueEqualObj("");
        ae = stringValueEqualObj("");
        be =
            stringValueEqualObj("");
        ce = stringValueEqualObj("");
        de = stringValueEqualObj("");
        ee = stringValueEqualObj("");
        fe = stringValueEqualObj("");
        ge = stringValueEqualObj("");
        he = stringValueEqualObj("");
        ie = stringValueEqualObj("");
        je = stringValueEqualObj("");
        ke = stringValueEqualObj("");
        le = stringValueEqualObj("");
        me = stringValueEqualObj("");
        ne = stringValueEqualObj("");
        oe = stringValueEqualObj("26");
        pe = stringValueEqualObj("");
        qe = stringValueEqualObj("");
        re = stringValueEqualObj("");
        se = stringValueEqualObj("");
        te = stringValueEqualObj("");
        ue = stringValueEqualObj("");
        ve = stringValueEqualObj("");
        we = stringValueEqualObj("");
        xe = stringValueEqualObj("27");
        ye = stringValueEqualObj("");
        ze = stringValueEqualObj("");
        Ae = stringValueEqualObj("28");
        Be = stringValueEqualObj("");
        Ce = stringValueEqualObj("");
        De = stringValueEqualObj("");
        Ee = stringValueEqualObj("");
        Fe = stringValueEqualObj("");
        Ge = stringValueEqualObj("29");
        He = stringValueEqualObj("");
        Ie = stringValueEqualObj("");
        Je = stringValueEqualObj("");
        Ke = stringValueEqualObj("");
        Le = stringValueEqualObj("")
    })();

    //好像冗余了
    var emptyFunction = function () {
        },
        isFunction = function (a) {
            return "function" == typeof a
        },
        isArray = function (a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        isRealNumber = function (a) {
            return "number" == typeOfA(a) && !isNaN(a)
        },
        isUnsignedInteger = function (a) {
            return /^[0-9]+$/.test(a)
        },
        indexOf = function (array, item) {
            if (Array.prototype.indexOf) {
                var index = array.indexOf(item);
                return "number" == typeof index ? index : -1
            }
            for (var i = 0; i < array.length; i++)if (array[i] === item)return i;
            return -1
        },
        trim = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        round2Int = function (num) {
            return Math.round(Number(num)) || 0
        },
        isTrue = function (bool) {
            return "false" ==
            String(bool).toLowerCase() ? false : !!bool
        },
        arr2String = function (arr) {
            var res = [];
            if (isArray(arr)) {
                for (var c = 0; c < arr.length; c++) {
                    res.push(String(arr[c]));
                }
            }
            return res
        },
        DateFactory = function () {
            return new Date
        },
        randomWithSeed = function (from, to) {
            if (!isRealNumber(from) || !isRealNumber(to) || from > to) {
                from = 0,
                    to = 0x7fffffff;
            }
            return Math.round(Math.random() * (to - from) + from)
        };

    function ActionList() {
        this.prefix = "gtm.";
        this.values = {}
    }

    ActionList.prototype.set = function (actionName, value) {
        this.values[this.prefix + actionName] = value;
    };
    ActionList.prototype.get = function (actionName) {
        return this.values[this.prefix + actionName]
    };
    ActionList.prototype.contains = function (a) {
        return undefined !== this.get(a)
    };
    //@TODO
    var $e = function (a, b, c) {
            try {
                return a[uc](a, b || emptyFunction, c || emptyFunction)
            } catch (d) {
            }
            return false
        },
        urlIntoActionList = function (actionList, url) {
            function save(key, value) {
                actionList.contains(key) || actionList.set(key, []);
                actionList.get(key).push(value)
            }

            for (var arr = trim(url).split("&"), i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    var euqalIndex = arr[i].indexOf("=");
                    0 > euqalIndex ? save(arr[i], "1") : save(arr[i].substring(0, euqalIndex), arr[i].substring(euqalIndex + 1))
                }
            }
        },
        lastElement = function (arr) {
            var length = arr ? arr.length : 0;
            return 0 < length ? arr[length - 1] : ""
        },
        functionArrExec = function (functionArray) {
            for (var i = 0; i < functionArray.length; i++) {
                functionArray[i]()
            }
        },
    //@TODO attention!
        currentTime = DateFactory().getTime(),
        getValueForKeyWithDefault = function (ctx, key, defalut) {
            return ctx && ctx.hasOwnProperty(key) ? ctx[key] : defalut
        },
        changeAPrototype = function (constructor, proto, newProtoValue) {
            constructor.prototype["gtm_proxy_" + proto] = constructor.prototype[proto];
            constructor.prototype[proto] = newProtoValue;
        },
        isArrayLike = function (likeArr) {
            return null !== likeArr && undefined !== likeArr && undefined !== likeArr.length;
        },
        /**
         * 可以用来还原被替换的原型们
         * @param source
         * @param oldKey
         * @param oldValue
         * @returns {*}
         */
        changeObjectsKeyPointInArray = function (source, oldKey, oldValue) {
            if (!(oldKey && oldValue && isArrayLike(source) && isArray(source) && 0 != source.length)) {
                return null;
            }
            var result = {};
            for (var i = 0; i < source.length; i++) {
                source[i] && source[i].hasOwnProperty(oldKey) && source[i].hasOwnProperty(oldValue) && (result[source[i][oldKey]] = source[i][oldValue]);
            }
            return result
        },
    //@TODO
        jf = function (a, b) {
            0 == b ? a.Ma = true : a.complete = true;
            var c = a.g;
            a.i && (a.i.ka[c] = b);
            Ia[c] && (Ia[c].state = b)
        },
        reverseSort = function (arr, compare) {
            arr.sort(function (first, second) {
                return compare(first, second) ? -1 : compare(second, first) ? 1 : 0
            })
        };
    var window = window,
        document = window.document,
        navigator = window.navigator,
        getThenChangeAGlobalProperty = function (property, newProp, replaced) {
            var prop = window[property];
            window[property] = undefined === prop || replaced ? newProp : prop;
            return window[property]
        },
        getBasePath = function (httpsHost, httpHost, path, forceHeader) {
            return (forceHeader || "http:" != window.location.protocol ? httpsHost : httpHost) + path;
        },
        loadEle = function (ele) {
            var scriptInsertPoint = document.getElementsByTagName("script")[0] || document.body || document.head;
            scriptInsertPoint.parentNode.insertBefore(ele, scriptInsertPoint)
        },
        addOnloadCallback = function (script, callback) {
            if (callback) {
                script.addEventListener ?
                    script.onload = callback
                    : script.onreadystatechange = function () {
                    script.readyState in {loaded: 1, complete: 1} && (script.onreadystatechange = null, callback())
                }
            }
        },
        loadScriptWithCallback = function (src, onload, onerror) {
            var ele = document.createElement("script");
            ele.type = "text/javascript";
            ele.async = true;
            ele.src = src;
            addOnloadCallback(ele, onload);
            onerror && (ele.onerror = onerror);
            loadEle(ele)
        },
        loadIframeWithCallback = function (src, onload) {
            var iframeEle = document.createElement("iframe");
            iframeEle.height = "0";
            iframeEle.width = "0";
            iframeEle.style.display = "none";
            iframeEle.style.visibility = "hidden";
            loadEle(iframeEle);
            addOnloadCallback(iframeEle, onload);
            undefined !== src && (iframeEle.src = src);
            return iframeEle
        },
        loadImageWithCallback = function (src, onload, onerror) {
            //这货必须要持有引用，防止垃圾回收
            var img = new Image(1, 1);
            img.onload = function () {
                img.onload = null;
                onload && onload()
            };
            img.onerror = function () {
                img.onerror = null;
                onerror && onerror()
            };
            img.src = src
        },
        addEve = function (ele, eventName, callback, bubble) {
            ele.addEventListener ? ele.addEventListener(eventName, callback, !!bubble) : ele.attachEvent && ele.attachEvent("on" + eventName, callback)
        },
        delayExecute = function (func) {
            window.setTimeout(func, 0)
        },
        domLoaded = false,
        domloadedListensers = [],
    //@TODO
        callbackDomloaded = function (e) {
            if (!domLoaded) {
                var createEve = document.createEventObject,
                    isComplete = "complete" == document.readyState,
                    isInteractive = "interactive" == document.readyState;
                if (!e || "readystatechange" != e.type || isComplete || !createEve && isInteractive) {
                    domLoaded = true;
                    for (var i = 0; i < domloadedListensers.length; i++) {
                        domloadedListensers[i]()
                    }
                }
            }
        },
        trySImulateDomLoaedTimes = 0,
    //@TODO ie 模拟addDOMLoadEvent
    // IE 我们如何模拟 addDOMLoadEvent 事件呢
    //就是用这货
        simulateDomLoaded = function () {
            if (!domLoaded && 140 > trySImulateDomLoaedTimes) {
                trySImulateDomLoaedTimes++;
                try {
                    document.documentElement.doScroll("left");
                    callbackDomloaded();
                } catch (a) {
                    window.setTimeout(simulateDomLoaded, 50)
                }
            }
        },
        /**
         * 由于name和id造成的bug
         * @param id
         * @returns {*}
         */
        getElementByIdFixedNameBug = function (id) {
            var ele = document.getElementById(id);
            if (ele && getAttributeByName(ele, "id") != id) {
                for (var index = 1; index < document.all[id].length; index++) {
                    if (getAttributeByName(document.all[id][index], "id") == id) {
                        return document.all[id][index];
                    }
                }
            }
            return ele
        },
        getAttributeByName = function (element, attributeName) {
            return element && attributeName && element.attributes && (
                    element.attributes[attributeName] ?
                        element.attributes[attributeName].value :
                        null);
        },
        eventTarget = function (e) {
            return e.target || e.srcElement || {}
        },
        /**
         * 获取到字符串中最外层的节点，可能是文字节点，也可能是嵌套节点
         * @param htmlStr
         * @returns {Array}
         */
        getElesOfHtmlString = function (htmlStr) {
            var divWrapper = document.createElement("div");
            divWrapper.innerHTML = "A<div>" + htmlStr + "</div>";
            var result = [];
            for (var lastChil = divWrapper.lastChild; lastChil.firstChild;) {
                result.push(lastChil.removeChild(lastChil.firstChild));
            }
            return result
        },
        findClosestParentWithTheTag = function (fromEle, targetTagList) {
            var tagSet = {};
            for (var i = 0; i < targetTagList.length; i++) {
                tagSet[targetTagList[i]] = true;
            }
            for (var closestEle = fromEle, i = 0; closestEle && !tagSet[String(closestEle.tagName).toLowerCase()] && i < 100; i++) {
                closestEle = closestEle.parentElement;
            }
            closestEle && !tagSet[String(closestEle.tagName).toLowerCase()] && (closestEle = null);
            return closestEle;
        },
        anUnknownCallbackTriggered = false,
        anUnkownCallbackList = [],
        triggerUnknowEvent = function () {
            if (!anUnknownCallbackTriggered) {
                anUnknownCallbackTriggered = true;
                for (var i = 0; i < anUnkownCallbackList.length; i++) {
                    anUnkownCallbackList[i]();
                }
            }
        },
        getHash = function (win) {
            win = win || window;
            var link = win.location.href,
                hashTagIndex = link.indexOf("#");
            return 0 > hashTagIndex ? "" : link.substring(hashTagIndex + 1)
        },
        consoleLog = function (a) {
            window.console && window.console.log && window.console.log(a)
        };

    var getValueInLocation = function (anchor, key, no3w, leftIfLastPathEqual, theKeyOfQuery) {
            var valueWanted,
                protocol = (anchor.protocol.replace(":", "") || window.location.protocol.replace(":", "")).toLowerCase();
            switch (key) {
                case "protocol":
                    valueWanted = protocol;
                    break;
                case "host":
                    valueWanted = (anchor.hostname || window.location.hostname).split(":")[0].toLowerCase();
                    if (no3w) {
                        var k = /^www\d*\./.exec(valueWanted);
                        k && k[0] && (valueWanted = valueWanted.substr(k[0].length))
                    }
                    break;
                case "port":
                    valueWanted = String(1 * (anchor.hostname ? anchor.port : window.location.port) || ("http" == protocol ? 80 : "https" == protocol ? 443 : ""));
                    break;
                case "path":
                    valueWanted = "/" == anchor.pathname.substr(0, 1) ? anchor.pathname : "/" + anchor.pathname;
                    var pathItems = valueWanted.split("/");
                    indexOf(leftIfLastPathEqual || [], pathItems[pathItems.length - 1]) >= 0 && (pathItems[pathItems.length - 1] = "");
                    valueWanted = pathItems.join("/");
                    break;
                case "query":
                    valueWanted = anchor.search.replace("?", "");
                    if (theKeyOfQuery)a:{
                        for (var componentArr = valueWanted.split("&"), i = 0; i < componentArr.length; i++) {
                            var p = componentArr[i].split("=");
                            if (decodeURIComponent(p[0]).replace("+", " ") == theKeyOfQuery) {
                                var result = p.slice(1).join("=");
                                valueWanted = decodeURIComponent(result).replace("+", " ");
                                break a
                            }
                        }
                        valueWanted = undefined
                    }
                    break;
                case "fragment":
                    valueWanted = anchor.hash.replace("#", "");
                    break;
                default:
                    valueWanted = anchor && anchor.href
            }
            return valueWanted
        },
        getServerGotUrl = function (location) {
            var serverGotUrl = "";
            location && location.href && (serverGotUrl = location.hash ? location.href.replace(location.hash, "") : location.href);
            return serverGotUrl;
        },
        anchorFactory = function (link) {
            var anchor = document.createElement("a");
            link && (anchor.href = link);
            return anchor;
        };


    var constructAObjAddPrototypeFirst = function (constructor) {
        var emptyConstructor = function () {
        };
        emptyConstructor.prototype = constructor.prototype;
        var obj = new emptyConstructor;
        constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
        return obj;
    };

    //@TODO 都是些什么东西
    //居然和这个有关
    var isVeInteractive = function (src) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!src)return false;
        var hostName = getValueInLocation(anchorFactory(src), "host");
        if (!hostName)return false;
        for (var i = 0; b && i < b.length; i++) {
            var testHost = b[i] && b[i].toLowerCase();
            if (testHost) {
                var f = hostName.length - testHost.length;
                0 < f && "." != testHost.charAt(0) && (f--, testHost = "." + testHost);
                if (0 <= f && hostName.indexOf(testHost, f) == f) {
                    return true
                }
            }
        }
        return false
    };
    var loadBatDotJs = function (onload, onerror) {
            loadScriptWithCallback("//bat.bing.com/bat.js", onload, onerror)
        },
    //@TODO 好像上面定义过
        window = window,
        getThenChangeAGlobalProperty = function (property, newVal, replaced) {
            newVal && (undefined === window[property] || replaced && !window[property]) && (window[property] = newVal);
            return window[property]
        };
    var plainActionStore = new ActionList,
        pyramidActionStore = {},
        actionStore = {
            set: function (actionName, val) {
                cloneObj(transDotPartStr2pyramid(actionName, val), pyramidActionStore)
            },
            get: function (actionName) {
                return getVal(actionName, 2)
            },
            reset: function () {
                plainActionStore = new ActionList;
                pyramidActionStore = {}
            }
        },
        getVal = function (actionName, mode) {
            if (2 == mode) {
                var val = pyramidActionStore,
                    actionList = actionName.split("."),
                    index = 0;
                for (; index < actionList.length; index++) {
                    if (undefined === val[actionList[index]])return;
                    val = val[actionList[index]]
                }
                return val
            }
            return plainActionStore.get(actionName)
        },
        transDotPartStr2pyramid = function (actionName, deepest) {
            var exports = {},
                currentLevel = exports,
                actionItems = actionName.split("."),
                i = 0;
            for (; i < actionItems.length - 1; i++) {
                currentLevel[actionItems[i]] = {};
                currentLevel = currentLevel[actionItems[i]];
            }
            currentLevel[actionItems[actionItems.length - 1]] = deepest;
            return exports
        };
    var googleHostRegex = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Gf = {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Hf = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        /**
         * 将数组中对应的元素从obj中取出来
         * @param arr
         * @param obj
         * @returns {Array}
         */
        getValuesInObjForKeysInArray = function (arr, obj) {
            var result = [];
            for (var i = 0; i < arr.length; i++) {
                result.push(arr[i]);
                result.push.apply(result, obj[arr[i]] || []);
            }
            return result
        },
        Jf = function () {
            var whiteList = getVal("gtm.whitelist");
            var whiteList = whiteList && getValuesInObjForKeysInArray(arr2String(whiteList), Gf),
                blackList = getVal("gtm.blacklist") || getVal("tagTypeBlacklist") || [];
            googleHostRegex.test(window.location && window.location.hostname) &&
            (blackList = arr2String(blackList), blackList.push("nonGooglePixels", "nonGoogleScripts"));
            var d = blackList && getValuesInObjForKeysInArray(arr2String(blackList), Hf), e = {};
            return function (f) {
                var g = f && f[uc];
                if (!g) {
                    return true;
                }
                if (undefined !== e[g.a]) {
                    return e[g.a];
                }
                var k = true;
                if (whiteList)a:{
                    if (0 > indexOf(whiteList, g.a))if (g.b && 0 < g.b.length)for (var l = 0; l < g.b.length; l++) {
                        if (0 > indexOf(whiteList,
                                g.b[l])) {
                            k = false;
                            break a
                        }
                    } else {
                        k = false;
                        break a
                    }
                    k = true
                }
                var m = false;
                if (blackList) {
                    var h;
                    if (!(h = 0 <= indexOf(d, g.a)))a:{
                        for (var p = g.b || [], r = new ActionList, t = 0; t < d.length; t++)r.set(d[t], true);
                        for (t = 0; t < p.length; t++)if (r.get(p[t])) {
                            h = true;
                            break a
                        }
                        h = false
                    }
                    m = h
                }
                var v = !!f[Tc];
                return e[g.a] = !k || m || v
            }
        };
    var _c = function (a) {
        return a[Ge]
    };
    _c.a = "c";
    _c.b = ["google"];
    var _ctv = function () {
        return "93"
    };
    _ctv.a = "ctv";
    _ctv.b = ["google"];
    var T = function (a) {
        var b = document;
        return Kf ? b.querySelectorAll(a) : null
    }, Lf;
    a:{
        var Mf = /MSIE +([\d\.]+)/.exec(navigator.userAgent);
        if (Mf && Mf[1]) {
            var Nf = document.documentMode;
            Nf || (Nf = "CSS1Compat" == document.compatMode ? parseInt(Mf[1], 10) : 5);
            if (!Nf || 8 >= Nf) {
                Lf = false;
                break a
            }
        }
        Lf = !!document.querySelectorAll
    }
    var Kf = Lf;
    var Of = undefined, Pf = "", Qf = 0, Rf = undefined, _et = function (a) {
        var b, c = getVal("gtm.element"), d = getVal("event"), e = Number(DateFactory());
        if (Of === c && Pf === d && Qf > e - 250)b = Rf; else {
            var f;
            if (c) {
                var g = c.innerText || c.textContent || "";
                g && " " != g && (g = g.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
                g && (g = g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
                f = g
            } else f = "";
            Rf = b = f;
            Of = c;
            Pf = d
        }
        Qf = e;
        return b ? b : a[Rb]
    };
    _et.a = "et";
    _et.b = ["google"];
    var _eu = function (a) {
        var b = String(getVal("gtm.elementUrl") || a[Rb] || ""), c = anchorFactory(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function () {
        return Ha
    };
    _e.a = "e";
    _e.b = ["google"];
    var doubleClickHostRegex = /(^|\.)doubleclick\.net$/i,
        wwwGoogleRegex = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        getValueArrayFor_gaexpInCookie = function () {
            for (var cookieArr = String(document.cookie).split(";"), result = [], i = 0; i < cookieArr.length; i++) {
                var d = cookieArr[i].split("="),
                    e = trim(d[0]);
                if (e && "_gaexp" == e) {
                    var f = trim(d.slice(1).join("="));
                    f && (f = decodeURIComponent(f));
                    result.push(f)
                }
            }
            return result
        },
        setValueArrayFor_gaexpInCookie = function (value, path, domain, liveTime) {
            if (doubleClickHostRegex.test(document.location.hostname) || "/" == path && wwwGoogleRegex.test(domain))return false;
            var e = "_gaexp=" + value + "; ";
            path && (e += "path=" + path + "; ");
            liveTime && (e += "expires=" + liveTime.toGMTString() + "; ");
            domain && (e += "domain=" + domain + ";");
            var f = document.cookie;
            document.cookie =
                e;
            return f != document.cookie || 0 <= indexOf(getValueArrayFor_gaexpInCookie(), value)
        },
        /**
         * 字符串被点号分割为x部分
         * @param a
         * @returns {*}
         */
        dotPartedLength = function (a) {
            if ("none" == a) {
                return 0;
            }
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        pathLength = function (path) {
            var b = path;
            if (b && b.length > 1 && b.lastIndexOf("/") == b.length - 1) {
                b = b.substr(0, b.length - 1);
                if (0 != b.indexOf("/")) {
                    b = "/" + b;
                }
                path = b;
            }
            else {
                path = "/";
            }

            return "/" == path ? 1 : path.split("/").length;
        };
    var Yf = function (a, b) {
        this.f = a;
        this.j = b
    };
    Yf.prototype.toString = function () {
        var a = "" + this.f;
        1 < this.j && (a = a + "-" + this.j);
        return a
    };
    var Zf = function (a, b) {
        this.xa = a;
        this.Y = b
    };
    Zf.prototype.toString = function () {
        return "" + this.Y + "." + this.xa
    };
    var bg = function (a, b) {
        var c = new $f(null, a, b);
        ag(c);
        return c
    }, $f = function (a, b, c) {
        this.Fa = Math.floor(DateFactory().getTime() / 864E5);
        this.X = b || "auto";
        this.P = c || "/";
        var d = dotPartedLength(this.X), e = pathLength(this.P);
        this.B = a || new Yf(d, e);
        this.h = [];
        this.w = new ActionList
    }, dg = function (a, b, c) {
        b && ("" == c.xa ? cg(a, b) : (a.w.contains(b) || a.h.push(b), a.w.set(b, c)))
    }, eg = function (a, b) {
        for (var c = 0; c < b.length; c++)dg(a, b[c][0], b[c][1])
    }, cg = function (a, b) {
        var c = indexOf(a.h, b);
        0 <= c && a.h.splice(c, 1);
        a.w.set(b, undefined)
    }, fg = function (a) {
        for (var b = [], c = 0; c < a.h.length; c++) {
            var d =
                a.h[c];
            b.push([d, a.w.get(d)])
        }
        return b
    }, gg = function (a) {
        for (var b = 0, c = 0; c < a.h.length; c++)b = Math.max(b, a.w.get(a.h[c]).Y);
        return 864E5 * b
    };
    $f.prototype.toString = function () {
        if (0 == this.h.length)return "";
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            a.push("" + c + "." + this.w.get(c).toString())
        }
        return "GAX1." + this.B.toString() + "." + a.join("!")
    };
    var hg = function (a, b) {
            for (var c = new Date, d = pathLength(a.P), e = [], f = 0; f < a.h.length; f++) {
                var g = a.h[f];
                a.w.get(g).Y < a.Fa && e.push(g)
            }
            for (f = 0; f < e.length; f++)cg(a, e[f]);
            if (a.h.length > (b || 10))return false;
            c.setTime(gg(a));
            if ("auto" != a.X)return setValueArrayFor_gaexpInCookie(a.toString(), a.P, a.X, c);
            var k;
            var l = getValueInLocation(window.location, "host", true).split(".");
            if (4 == l.length && /^[0-9]*$/.exec(l[3]))k = ["none"]; else {
                for (var m = [], h = l.length - 2; 0 <= h; h--)m.push(l.slice(h).join("."));
                m.push("none");
                k = m
            }
            for (var p = 0; p < k.length; p++)if ("none" != k[p] && (a.B = new Yf(dotPartedLength(k[p]), d),
                    setValueArrayFor_gaexpInCookie(a.toString(), a.P, k[p], c)))return true;
            return false
        },
        ag = function (a) {
            for (var b = a.B.f, c = a.B.j, d = getValueArrayFor_gaexpInCookie(), e = [], f = 0; f < d.length; f++) {
                var g = ig(a, d[f]);
                g && e.push(g)
            }
            reverseSort(e, function (a, d) {
                var e = a.B, f = d.B;
                return e.f == f.f && e.j == f.j ? false : e.f == b && e.j == c ? true : f.f == b && f.j == c ? false : e.f == b ? f.f != b || e.j < f.j : f.f == b ? false : e.j == c ? f.f != b && (f.j != c || e.f < f.f) : f.j == c ? false : e.f < f.f || e.f == f.f && e.j < f.j
            });
            a.B = 0 < e.length ? e[0].B : new Yf(b, c);
            for (f = e.length - 1; 0 <= f; f--)eg(a, fg(e[f]))
        },
        ig = function (a, b) {
            var c = b.match(/GAX1\.([^.]+).(.*)/);
            if (c) {
                var d;
                a:{
                    var e =
                        (c[1] || "").split("-");
                    if (!(0 == e.length || 2 < e.length)) {
                        var f = trim(e[0]);
                        if (0 != f.length) {
                            var g = 2 == e.length ? trim(e[1]) : "1";
                            if (isUnsignedInteger(f) && isUnsignedInteger(g)) {
                                d = new Yf(round2Int(f), round2Int(g));
                                break a
                            }
                        }
                    }
                    d = undefined
                }
                if (d) {
                    for (var k = new $f(d, a.X, a.P), l = (c[2] || "").split("!"), m = 0; m < l.length; m++) {
                        var h = l[m].split(".");
                        if (3 == h.length) {
                            if (!isUnsignedInteger(h[1]))return;
                            dg(k, h[0], new Zf(h[2], round2Int(h[1])))
                        }
                    }
                    return k
                }
            }
        };
    var _hid = function () {
        return undefinedStrSymbol
    };
    _hid.a = "hid";
    _hid.b = ["google"];
    var _v = function (a) {
        var b = getVal(a[ed].replace(/\\\./g, "."), a[Jb]);
        return undefined !== b ? b : a[Rb]
    };
    _v.a = "v";
    _v.b = ["google"];
    var _r = function (a) {
        return randomWithSeed(a[Zc], a[Vc])
    };
    _r.a = "r";
    _r.b = ["google"];
    var _f = function (a) {
        var b = String(getVal("gtm.referrer") || document.referrer);
        if (!b)return b;
        var c = anchorFactory(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var va = function (a) {
        var b = window.location, c;
        (c = a[Gb] ? a[Gb] : getVal("gtm.url")) && (b = anchorFactory(String(c)));
        var d = b.href, e = d.indexOf("#"), f = 0 > e ? d : d.substr(0, e);
        a[qb] && (f = getValueInLocation(b, a[qb], a[Sd], a[Qb], a[Fd]));
        return f
    }, _u = va;
    _u.a = "u";
    _u.b = ["google"];
    var _cn = function (a) {
        return 0 <= String(a[O]).indexOf(String(a[P]))
    };
    _cn.a = "cn";
    _cn.b = ["google"];
    var _eq = function (a) {
        return String(a[O]) == String(a[P])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var _awct = function (a, b, c) {
        loadScriptWithCallback("//www.googleadservices.com/pagead/conversion_async.js", function () {
            var d = window.google_trackConversion,
                e = {
                    google_conversion_id: a[R],
                    google_conversion_label: a[Jc],
                    google_conversion_value: a[Ge] || 0,
                    google_remarketing_only: false,
                    onload_callback: b
                };
            a[Fb] && (e.google_conversion_currency = a[Fb]);
            isFunction(d) ? d(e) || c() : c()
        }, c)
    };
    _awct.a = "awct";
    _awct.b = ["google"];
    var qg = Math.random(), rg = "1.000000" > qg;
    var sg = emptyFunction;
    var tg = emptyFunction,
        sendBackQueue = [],
        vg = false,
        wg = function (a) {
            return window["dataLayer"].push(a)
        },
        xg = function (a) {
            var b = false;
            return function () {
                !b && isFunction(a) && delayExecute(a);
                b = true
            }
        },
        sendBackThingInQueue = function () {
            for (var a = false; !vg && 0 < sendBackQueue.length;) {
                vg = true;
                var firstObj = sendBackQueue.shift();
                if (isFunction(firstObj))try {
                    firstObj.call(actionStore)
                }
                catch (e) {
                }
                else if (isArray(firstObj))label:{
                    var first = firstObj;
                    if ("string" == typeOfA(first[0])) {
                        var d = first[0].split("."),
                            e = d.pop(),
                            f = first.slice(1),
                            g = pyramidActionStore,
                            k = 0;
                        for (; k < d.length; k++) {
                            if (undefined === g[d[k]])break label;
                            g = g[d[k]]
                        }
                        try {
                            g[e].apply(g, f)
                        }
                        catch (e) {
                        }
                    }
                }
                else {
                    var first = firstObj,
                        key = undefined;
                    for (key in first) {
                        if (first.hasOwnProperty(key)) {
                            var key = key,
                                value = first[key];
                            plainActionStore.set(key, value);
                            cloneObj(transDotPartStr2pyramid(key, value), pyramidActionStore)
                        }
                    }

                    var r = false,
                        t = first.event,
                        v = undefined;
                    if (t) {
                        v = currentTime++;
                        Ha = t;
                        if (!first["gtm.uniqueEventId"]) {
                            var u = v;
                            plainActionStore.set("gtm.uniqueEventId", u);
                            cloneObj(transDotPartStr2pyramid("gtm.uniqueEventId", u), pyramidActionStore)
                        }
                        var z = xg(first.eventCallback),
                            D = first.eventTimeout;
                        D && window.setTimeout(z, Number(D));
                        r = tg(v, t, z, first.eventReporter)
                    }
                    Ga || (Ga = first["gtm.start"]) && sg();
                    var E = first, F = v, y = t, C = pyramidActionStore;
                    if (!r) {
                        var I = v, U = t;
                    }
                    Ha = null;
                    a = r || a
                }
                var ba = firstObj,
                    Y = pyramidActionStore;
                emptyFunction();
                vg = false
            }
            return !a
        };
    var Eg,
        Fg = /(Firefox\D28\D)/g.test(navigator.userAgent),
        Gg = {
            nwnc: {},
            nwc: {},
            wnc: {},
            wc: {},
            wt: null,
            l: false
        },
        Hg = {
            nwnc: {},
            nwc: {},
            wnc: {},
            wc: {},
            wt: null,
            l: false
        },
        Ng = function (a, b) {
            return function (c) {
                c = c || window.event;
                var d = eventTarget(c), e = false;
                if (3 !== c.which || "LINK_CLICK" != a) {
                    "LINK_CLICK" == a && (d = findClosestParentWithTheTag(d, ["a", "area"]), e = !d || !d.href || Ig(d.href) || 2 === c.which || null == c.which && 4 == c.button || c.ctrlKey || c.shiftKey || c.altKey || true === c.metaKey);
                    var f = "FORM_SUBMIT" == a ? Hg : Gg;
                    if (c.defaultPrevented || false === c.returnValue || c.oa && c.oa()) {
                        if (d) {
                            var g = {simulateDefault: false},
                                k = Jg(f, ["wnc", "nwnc"]);
                            k && Kg(a, d, g, f.wt, k)
                        }
                    } else {
                        if (d) {
                            var g = {}, l = true, m = Jg(f, ["wnc", "nwnc", "nwc", "wc"]);
                            (l = Kg(a, d, g, f.wt, m)) || (Lg(g.eventReport, f) ? b = true : e = true);
                            e = e || l || "LINK_CLICK" == a && Fg;
                            g.simulateDefault = !l && b && !e;
                            g.simulateDefault && (e = Mg(d, g) || e, !e && c.preventDefault && c.preventDefault());
                            c.returnValue = l || !b || e;
                            return c.returnValue
                        }
                        return true
                    }
                }
            }
        },
        Kg = function (a, b, c, d, e) {
            var f = d || 2E3, g = {
                "gtm.element": b,
                "gtm.elementClasses": b.className,
                "gtm.elementId": b["for"] || getAttributeByName(b, "id") || "",
                "gtm.elementTarget": b.formTarget ||
                b.target || ""
            };
            switch (a) {
                case "LINK_CLICK":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.linkClick";
                    g["gtm.elementUrl"] = b.href;
                    g.eventTimeout = f;
                    g.eventCallback = Og(b, c);
                    g.eventReporter = function (a) {
                        c.eventReport = a
                    };
                    break;
                case "FORM_SUBMIT":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.formSubmit";
                    g["gtm.elementUrl"] = Pg(b);
                    g.eventTimeout = f;
                    g.eventCallback = Qg(b, c);
                    g.eventReporter = function (a) {
                        c.eventReport = a
                    };
                    break;
                case "CLICK":
                    g.event = "gtm.click";
                    g["gtm.elementUrl"] = b.formAction || b.action || b.href || b.src || b.code || b.codebase ||
                        "";
                    break;
                default:
                    return true
            }
            return wg(g)
        },
        Pg = function (a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(false).action);
            return b
        },
        Rg = function (a) {
            var b = a.target;
            if (!b)switch (String(a.tagName).toLowerCase()) {
                case "a":
                case "area":
                case "form":
                    b = "_self"
            }
            return b
        },
        Mg = function (a, b) {
            var c = false, d = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), e = Rg(a).toLowerCase();
            switch (e) {
                case "":
                case "_self":
                case "_parent":
                case "_top":
                    var f;
                    f = (e || "_self").substring(1);
                    b.targetWindow = window.frames && window.frames[f] || window[f];
                    break;
                case "_blank":
                    d ? (b.simulateDefault = false, c = true) : (b.targetWindowName = "gtm_autoEvent_" + DateFactory().getTime(), b.targetWindow = window.open("", b.targetWindowName));
                    break;
                default:
                    d && !window.frames[e] ? (b.simulateDefault = false, c = true) : (window.frames[e] || (b.targetWindowName = e), b.targetWindow = window.frames[e] || window.open("", e))
            }
            return c
        },
        Og = function (a, b, c) {
            return function () {
                b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (c = c || DateFactory().getTime(), 500 > DateFactory().getTime() - c && window.setTimeout(Og(a, b, c), 25)))
            }
        },
        Qg = function (a, b, c) {
            return function () {
                if (b.simulateDefault)if (b.targetWindow) {
                    var d;
                    b.targetWindowName && (d = a.target, a.target = b.targetWindowName);
                    document.gtmSubmitFormNow = true;
                    Sg(a).call(a);
                    b.targetWindowName && (a.target = d)
                } else c = c || DateFactory().getTime(), 500 > DateFactory().getTime() - c && window.setTimeout(Qg(a, b, c), 25)
            }
        },
        Jg = function (a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = a[b[d]], f;
                for (f in e)e.hasOwnProperty(f) && e[f] && c.push(f)
            }
            return c.join(",")
        },
        Tg = function (a, b, c, d, e) {
            var f = e;
            if (!f || "0" == f) {
                if (a.l)return;
                a.l = true;
                f = "0"
            }
            var g = a.wt;
            b && (!g || g > d) && (a.wt = d);
            a[b ? c ? "wc" : "wnc" : c ? "nwc" : "nwnc"][f] = true
        },
        Lg = function (a, b) {
            if (b.wnc["0"] ||
                b.wc["0"])return true;
            for (var c = 0; c < Ug.length; c++)if (a.passingRules[c]) {
                var d = Ug[c], e = Vg[c], f = e && e[0] && e[0][0] || e[1] && e[1][0];
                if (f && "0" != f && (b.wc[f] || b.wnc[f]))for (var g = d[1], k = 0; k < g.length; k++)if (a.resolvedTags[g[k]])return true
            }
            return false
        },
        Wg = function (a, b, c, d, e) {
            var f, g, k = false;
            switch (a) {
                case "CLICK":
                    if (document.gtmHasClickListenerTag)return;
                    document.gtmHasClickListenerTag = true;
                    f = "click";
                    g = function (a) {
                        var b = eventTarget(a);
                        b && Kg("CLICK", b, {}, d)
                    };
                    k = true;
                    break;
                case "LINK_CLICK":
                    b && !Eg && (Eg = getServerGotUrl(document.location));
                    Tg(Gg, b || false, c || false, d, e);
                    if (document.gtmHasLinkClickListenerTag)return;
                    document.gtmHasLinkClickListenerTag = true;
                    f = "click";
                    g = Ng(a, b || false);
                    break;
                case "FORM_SUBMIT":
                    Tg(Hg, b || false, c || false, d, e);
                    if (document.gtmHasFormSubmitListenerTag)return;
                    document.gtmHasFormSubmitListenerTag = true;
                    f = "submit";
                    g = Ng(a, b || false);
                    break;
                default:
                    return
            }
            addEve(document, f, g, k)
        },
        Ig = function (a) {
            if (!Eg)return true;
            var b = a.indexOf("#");
            if (0 > b)return false;
            if (0 == b)return true;
            var c = anchorFactory(a);
            return Eg == getServerGotUrl(c)
        },
        Sg = function (a) {
            try {
                if (a.constructor && a.constructor.prototype)return a.constructor.prototype.submit
            } catch (b) {
            }
            if (a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
            document.gtmFormElementSubmitter || (document.gtmFormElementSubmitter = document.createElement("form"));
            return document.gtmFormElementSubmitter.submit.call ? document.gtmFormElementSubmitter.submit : a.submit
        };
    var undefinedStrSymbol = new String("undefined");

    function arrStoreWithResolve(arr) {
        this.resolve = function (defaultVal) {
            for (var result = [], i = 0; i < arr.length; i++) {
                result.push(arr[i] === undefinedStrSymbol ? defaultVal : arr[i]);
            }
            return result.join("");
        }
    };
    arrStoreWithResolve.prototype.toString = function () {
        return this.resolve("undefined")
    };
    arrStoreWithResolve.prototype.valueOf = arrStoreWithResolve.prototype.toString;
    var eh = {},
        fh = function (a, b) {
            var c = currentTime++;
            eh[c] = [a, b];
            return c
        },
        gh = function (a) {
            var b = a ? 0 : 1;
            return function (a) {
                var d = eh[a];
                if (d && isFunction(d[b]))d[b]();
                eh[a] = undefined
            }
        };
    var trimAstr = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        compareFunction = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    var jh;
    a:{
        var kh = window.navigator;
        if (kh) {
            var lh = kh.userAgent;
            if (lh) {
                jh = lh;
                break a
            }
        }
        jh = ""
    }
    var W = function (a) {
        return -1 != jh.indexOf(a)
    };
    var mh = W("Opera") || W("OPR"), nh = W("Trident") || W("MSIE"), oh = W("Edge"), ph;
    if (ph = W("Gecko"))ph = !(-1 != jh.toLowerCase().indexOf("webkit") && !W("Edge"));
    var qh = ph && !(W("Trident") || W("MSIE")) && !W("Edge"), rh = -1 != jh.toLowerCase().indexOf("webkit") && !W("Edge");
    rh && W("Mobile");
    W("Macintosh");
    W("Windows");
    W("Linux") || W("CrOS");
    var sh = window.navigator || null;
    sh && (sh.appVersion || "").indexOf("X11");
    W("Android");
    !W("iPhone") || W("iPod") || W("iPad");
    W("iPad");
    var th = function () {
            var a = jh;
            if (qh)return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (oh)return /Edge\/([\d\.]+)/.exec(a);
            if (nh)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (rh)return /WebKit\/(\S+)/.exec(a)
        },
        uh = function () {
            var a = window.document;
            return a ? a.documentMode : undefined
        },
        vh = function () {
            if (mh && window.opera) {
                var a;
                var b = window.opera.version;
                try {
                    a = b()
                } catch (f) {
                    a = b
                }
                return a
            }
            var c = "", d = th();
            d && (c = d ? d[1] : "");
            if (nh) {
                var e = uh();
                if (e > parseFloat(c))return String(e)
            }
            return c
        }(),
        wh = {},
        xh = function (a) {
            var b;
            if (!(b = wh[a])) {
                var c = 0,
                    d = trimAstr(String(vh)).split("."),
                    e = trimAstr(String(a)).split("."),
                    f = Math.max(d.length, e.length),
                    g = 0;
                for (; 0 == c && g < f; g++) {
                    var k = d[g] || "", l = e[g] || "",
                        m = RegExp("(\\d*)(\\D*)", "g"),
                        h = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var p = m.exec(k) || ["", "", ""],
                            r = h.exec(l) || ["", "", ""];
                        if (0 == p[0].length && 0 == r[0].length){
                            break;
                        }
                        c = compareFunction(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) ||
                            compareFunction(0 == p[2].length, 0 == r[2].length) ||
                            compareFunction(p[2], r[2])
                    } while (0 == c)
                }
                b = wh[a] = 0 <= c
            }
            return b
        },
        yh = window.document, zh = yh && nh ? uh() || ("CSS1Compat" == yh.compatMode ?
            parseInt(vh, 10) : 5) : undefined;
    var Ah;
    if (!(Ah = !qh && !nh)) {
        var Bh;
        if (Bh = nh)Bh = 9 <= zh;
        Ah = Bh
    }
    Ah || qh && xh("1.9.1");
    nh && xh("9");
    var Ch = function (a) {
        Ch[" "](a);
        return a
    };
    Ch[" "] = function () {
    };
    var oa = function (a, b) {
            var c = "";
            if (nh && !Dh(a)) {
                c = '<script>document.domain="' + document.domain + '";</script>' + c;
            }
            var d = "<!DOCTYPE html><html><head><script>var inDapIF=true;</script>" + c + "</head><body>" + b + "</body></html>";
            if (Eh) {
                a.srcdoc = d;
            }
            else if (Fh) {
                var e = a.contentWindow.document;
                e.open("text/html", "replace");
                e.write(d);
                e.close()
            }
            else {
                Gh(a, d)
            }
        },
        Eh = rh && "srcdoc" in document.createElement("iframe"),
        Fh = qh || rh || nh && xh(11),
        Gh = function (a, b) {
            nh && xh(7) && !xh(10) && 6 >
            Hh() && Ih(b) && (b = Jh(b));
            var c = function () {
                a.contentWindow.goog_content = b;
                a.contentWindow.location.replace("javascript:window.goog_content")
            };
            nh && !Dh(a) ? Kh(a, c) : c()
        },
        Hh = function () {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Dh = function (a) {
            try {
                var b;
                var c = a.contentWindow;
                try {
                    var d;
                    if (d = !!c && null != c.location.href)b:{
                        try {
                            Ch(c.foo);
                            d = true;
                            break b
                        } catch (e) {
                        }
                        d = false
                    }
                    b = d
                } catch (e) {
                    b = false
                }
                return b
            } catch (e) {
                return false
            }
        },
        Lh = 0, Kh = function (a, b) {
            var c = "goog_rendering_callback" + Lh++;
            window[c] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" +
                document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        Ih = function (a) {
            for (var b = 0; b < a.length; ++b)if (127 < a.charCodeAt(b))return true;
            return false
        },
        Jh = function (a) {
            for (var b = unescape(encodeURIComponent(a)), c = Math.floor(b.length / 2), d = [], e = 0; e < c; ++e)d[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
            1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
            return d.join("")
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var Nh = function (insertElePoint, b, c, d) {
        return function () {
            try {
                if (0 < b.length) {
                    var element = b.shift(),
                        f = Nh(insertElePoint, b, c, d);
                    if ("SCRIPT" == String(element.nodeName).toUpperCase() && "text/gtmscript" == element.type) {
                        var scriptEle = document.createElement("script");
                        scriptEle.async = false;
                        scriptEle.type = "text/javascript";
                        scriptEle.id = element.id;
                        scriptEle.text = element.text || element.textContent || element.innerHTML || "";
                        element.charset && (scriptEle.charset = element.charset);
                        var dataGtmSrc = element.getAttribute("data-gtmsrc");
                        if (dataGtmSrc) {
                            scriptEle.src = dataGtmSrc;
                            addOnloadCallback(scriptEle, f);
                        }
                        insertElePoint.insertBefore(scriptEle, null);
                        dataGtmSrc || f()
                    }
                    else if (element.innerHTML && 0 <= element.innerHTML.toLowerCase().indexOf("<script")) {
                        for (var l = []; element.firstChild;)l.push(element.removeChild(element.firstChild));
                        insertElePoint.insertBefore(element, null);
                        Nh(element, l, f, d)()
                    }
                    else {
                        insertElePoint.insertBefore(element, null), f()
                    }
                }
                else {
                    c()
                }
            }
            catch (e) {
                delayExecute(d)
            }
        }
    };

    var Ph = function (a, b, c) {
            if (document.body) {
                var d = a[zc];
                if (d instanceof arrStoreWithResolve) {
                    d = d.resolve(fh(b, c));
                    b = emptyFunction;
                }
                if (a[Be]) {
                    try {
                        oa(loadIframeWithCallback(), "<script>var google_tag_manager=parent.google_tag_manager;</script>" + d);
                        delayExecute(b);
                    } catch (e) {
                        delayExecute(c);
                    }
                }
                else {
                    a[De] ? Oh(d, b, c) : Nh(document.body, getElesOfHtmlString(d), b, c)()
                }
            }
            else {
                window.setTimeout(function () {
                    Ph(a, b, c)
                }, 200)
            }
        },
        _html = Ph;
    _html.a = "html";
    _html.b = ["customScripts"];
    var Yh = function (a, b, c, d) {
            var e = b + ": " + c + (d ? " !important" : ""), f = document;
            if (f.createStyleSheet) {
                var g = Vh(f), k = g.rules.length;
                g.addRule(a, e);
                return function () {
                    g.removeRule ? g.removeRule(k) : g.deleteRule(k);
                    g.addRule("x", "-", k)
                }
            }
            var l = Wh(a + "{" + e + "}", f);
            Xh(l, f);
            var m = l.parentNode;
            return function () {
                m.removeChild(l)
            }
        },
        Zh = null,
        Vh = function (a) {
            if (Zh)return Zh;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b], d = c.ownerNode;
                if (d && d.parentNode && "HEAD" == d.parentNode.tagName)return Zh = c
            }
            0 == a.styleSheets.length &&
            a.createStyleSheet();
            return Zh = a.styleSheets[0]
        },
        Wh = function (a, b) {
            var c = (b || document).createElement("style");
            undefined !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        Xh = function (a, b) {
            var c = b || document, d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        };
    var ci = {},
        ei = function (a, b, c, d, e) {
            if (!Kf)return false;
            var f = ci[a];
            f || (f = {id: a, L: [], ba: 0, za: null, Ea: false}, ci[a] = f);
            var g = {id: a + ":" + f.L.length, Ua: c, Pa: d, K: b, ma: 0, ja: e || null, Da: 0, aa: false};
            f.L.push(g);
            null === b ? (g.aa = true, c(null)) : di(f);
            return true
        },
        fi = function (a) {
            var b = Yh(a, "visibility", "hidden", true);
            return function () {
                isFunction(b) && b.apply();
                b = null
            }
        },
        gi = function (a, b, c, d, e) {
            var f = fi(b.u);
            domloadedListensers.push(f);
            return ei(a, b, function (a, b) {
                c(a, b);
                f()
            }, d, e)
        },
        di = function (a) {
            for (var b = a.ba; b < a.L.length; b++) {
                var c = a.L[b], d = b == a.ba;
                if (!c.aa && !hi(d, c))break;
                c.aa && d && a.ba++
            }
            a.L.length > a.ba && (a.za || (a.za = window.setTimeout(function () {
                a.za = null;
                di(a)
            }, 80)), domLoaded || a.Ea || (a.Ea = true, domloadedListensers.push(function () {
                di(a)
            })))
        },
        hi = function (a, b) {
            var c = [];
            if (b.K) {
                var d = ii(b.K, b.id), e = null;
                b.ja && (e = ii(b.ja, b.id + "-t"));
                for (var f = 0; f < d.length; f++) {
                    var g = d[f], k;
                    if (null != e && (k = e.length > f ? e[f] : null, !k && !domLoaded && (null === b.ja.o || b.Da + c.length < b.ja.o)))break;
                    c.push({element: g, tb: k})
                }
            }
            if (!domLoaded && b.Pa && (!a || null == b.K.o || b.K.o != b.ma + c.length))return false;
            for (var l = 0; l < c.length; l++) {
                var m = c[l].element,
                    h = c[l].tb;
                b.ma++;
                ji(m, b.id);
                h && (b.Da++, ji(h, b.id + "-t"));
                b.Ua(m, h)
            }
            if (b.K.o && b.K.o == b.ma || domLoaded)b.aa = true;
            return true
        },
        ji = function (a, b) {
            a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = true
        },
        ii = function (a, b) {
            for (var c = T(a.u) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.A && !ki(f))break;
                    d.push(f)
                }
            }
            return d
        },
        ki = function (a) {
            if (domLoaded)return true;
            for (; a;) {
                if (a.nextSibling)return true;
                a = a.parentNode
            }
            return false
        };
    var ni,
        oi;
    var yi = function (a) {
        return function () {
        }
    }, zi = function (a) {
        return function () {
        }
    };
    var Yi = function (a) {
        var b = window || window, c = b.onerror, d = false;
        rh && !xh("535.3") && (d = !d);
        b.onerror = function (b, f, g, k, l) {
            c && c(b, f, g, k, l);
            a({message: b, fileName: f, mb: g, Jb: k, error: l});
            return d
        }
    };
    var tj = 121, uj = [], vj = [], wj = [], xj = new ActionList, yj = [], Z = [], Ug = [], Vg = [], zj = function () {
        this.D = []
    };
    zj.prototype.set = function (a, b) {
        this.D.push([a, b]);
        return this
    };
    zj.prototype.resolve = function (a, b) {
        for (var c = {}, d = 0; d < this.D.length; d++) {
            var e = Aj(this.D[d][0], a, b), f = Aj(this.D[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Bj = function (a) {
        this.index = a
    };
    Bj.prototype.resolve = function (a, b) {
        var c = wj[this.index];
        if (c && !b(c)) {
            var d = c[Ec];
            if (a) {
                if (a.get(d))return;
                a.set(d, true)
            }
            c = Aj(c, a, b);
            a && a.set(d, false);
            return $e(c)
        }
    };
    var _M = function (a) {
            return new Bj(a)
        },
        Cj = function (a) {
            this.resolve = function (b, c) {
                for (var d = [], e = false, f = 0; f < a.length; f++) {
                    var g = Aj(uj[a[f]], b, c);
                    g === undefinedStrSymbol && (e = true);
                    d.push(g)
                }
                return e ? new arrStoreWithResolve(d) : d.join("")
            }
        },
        _T = function (a) {
            return new Cj(arguments)
        },
        Dj = function (a) {
            function b(b) {
                for (var d = 1; d < a.length; d++)if (a[d] == b)return true;
                return false
            }

            this.resolve =
                function (c, d) {
                    var e = Aj(a[0], c, d);
                    if (a[0] instanceof Bj && b(8) && b(16)) {
                        if (e === undefinedStrSymbol)return e;
                        var f = "gtm" + currentTime++;
                        xj.set(f, e);
                        return 'google_tag_manager["GTM-W6L835"].macro(\'' + f + "')"
                    }
                    for (var e = String(e), g = 1; g < a.length; g++)e = X[a[g]](e);
                    return e
                }
        },
        _E = function (a, b) {
            return new Dj(arguments)
        },
        Ej = function (a, b) {
            this.s = a;
            this.ia = b
        },
        _R = function (a, b) {
            return new Ej(a, b)
        },
        Fj = function (a, b) {
            return Aj(a, new ActionList, b)
        },
        Aj = function (a, b, c) {
            var d = a;
            if (a instanceof Bj || a instanceof zj || a instanceof Cj || a instanceof Dj)return a.resolve(b,
                c);
            if (!(a instanceof Ej))if (isArray(a))for (var d = [], e = 0; e < a.length; e++)d[e] = Aj(a[e], b, c); else if (a && "object" == typeof a) {
                var d = {}, f;
                for (f in a)a.hasOwnProperty(f) && (d[f] = Aj(a[f], b, c))
            }
            return d
        },
        Gj = function (a, b) {
            var c = b[a], d = c;
            if (c instanceof Bj || c instanceof Dj || c instanceof Cj || c instanceof Ej)d = c; else if (isArray(c))for (var d = [], e = 0; e < c.length; e++)d[e] = Gj(c[e], b); else if ("object" == typeof c) {
                var d = new zj, f;
                for (f in c)c.hasOwnProperty(f) && d.set(b[f], Gj(c[f], b))
            }
            return d
        },
        Ij = function (a, b) {
            for (var c = b ? b.split(",") :
                [], d = 0; d < c.length; d++) {
                var e = c[d] = c[d].split(":");
                0 == a && (e[1] = uj[e[1]]);
                if (1 == a)for (var f = Hj(e[0]), e = c[d] = {}, g = 0; g < f.length; g++) {
                    var k = vj[f[g]];
                    e[k[0]] = k[1]
                }
                if (2 == a)for (g = 0; 4 > g; g++)e[g] = Hj(e[g]);
                3 == a && (c[d] = uj[e[0]]);
                if (4 == a)for (g = 0; 2 > g; g++)if (e[g]) {
                    e[g] = e[g].split(".");
                    for (var l = 0; l < e[g].length; l++)e[g][l] = uj[e[g][l]]
                } else e[g] = [];
                5 == a && (c[d] = e[0])
            }
            return c
        },
        Hj = function (a) {
            var b = [];
            if (!a)return b;
            for (var c = 0, d = 0; d < a.length && c < tj; c += 6, d++) {
                var e = a && a.charCodeAt(d) || 65;
                if (65 != e) {
                    var f = 0, f = 65 < e && 90 >=
                    e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                    1 & f && b.push(c);
                    2 & f && b.push(c + 1);
                    4 & f && b.push(c + 2);
                    8 & f && b.push(c + 3);
                    16 & f && b.push(c + 4);
                    32 & f && b.push(c + 5)
                }
            }
            return b
        }, Jj = function (a, b, c) {
            a.push.apply(a, Ij(b, c))
        };
    var zg = function () {
        },
        Rj = function (a) {
        },
        emptyFunction = function () {
        },
        Sj = function (a) {
        },
        Tj = function (a, b) {
        },
        Uj = function (a, b) {
        },
        Ag = function (a) {
        };
    var Vj = function (a) {
            var b = this;
            this.g = a;
            this.complete = this.Ma = false;
            this.ha = [];
            this.Z = [];
            this.O = function () {
                if (b.i && b.i.event) {
                    var a = b.i.event, d = b.g;
                }
                b.complete || functionArrExec(b.ha);
                jf(b, 1)
            };
            this.N = function () {
                if (b.i && b.i.event) {
                    var a = b.i.event, d = b.g;
                }
                b.complete || functionArrExec(b.Z);
                jf(b, 2)
            };
            this.v = emptyFunction
        },
        Wj = function (a, b) {
            a.ha.push(b)
        },
        Xj = function (a, b) {
            a.Z.push(b)
        },
        Yj = function (a) {
            this.F = [];
            this.ya = [];
            this.Ga = {};
            this.sa = [];
            this.M = 0;
            this.Ka = {};
            this.Na = {};
            this.ka = {};
            this.event = a
        };
    Yj.prototype.addListener = function (a) {
        this.sa.push(a)
    };
    var Zj = function (a, b, c, d, e, f) {
            if (!c.complete) {
                a.F[b] = c;
                undefined == d && (d = []);
                undefined == e && (e = []);
                undefined == f && (f = []);
                d = isArray(d) ? d.slice() : ["or", d];
                e = isArray(e) ? e.slice() : [e];
                f = isArray(f) ? f.slice() : [f];
                a.Ga[b] = d;
                a.Ka[b] = 0 < e.length;
                a.Na[b] = 0 < f.length;
                a.M++;
                var g = function () {
                    0 < a.M && a.M--;
                    0 < a.M || functionArrExec(a.sa)
                };
                Wj(c, g);
                Xj(c, g)
            }
        },
        ak = function (a, b, c) {
            a.F[b] && (Wj(a.F[b], function () {
                c(b, true)
            }), Xj(a.F[b], function () {
                c(b, false)
            }))
        },
        bk = function (a, b) {
            var c = false;
            return function (d, e) {
                var f;
                a:{
                    for (var g = 0; g < a.length; g++)if (a[g] instanceof Ej && a[g].s ===
                        d || a[g] === d) {
                        f = g;
                        break a
                    }
                    f = -1
                }
                c || 0 > f || ("or" == a[0] ? e ? (c = true, b()) : (a.splice(f, 1), 1 == a.length && (c = true)) : e ? (a.splice(f, 1), 1 == a.length && (c = true, b())) : c = true)
            }
        },
        fk = function (a, b) {
            var c = [], d = false, e = function (b) {
                var f, g, k = Z[b];
                if (a.event.c(k)) {
                } else g = ck(k, b, a);
                if (f = g) {
                    var h = dk(b, true);
                    0 < h.length && e(h[0].s);
                    c.push(f);
                    var l = dk(b, false);
                    0 < l.length && e(l[0].s)
                } else d = true
            };
            e(b);
            if (!d) {
                for (var f = 0; f < c.length; f++) {
                    var g = c[f], k = dk(g.g, true);
                    if (0 < k.length) {
                        var l = c[f - 1], m = ek(g);
                        Wj(l, m);
                        0 == k[0].ia && Xj(l, m)
                    }
                    var h = dk(g.g, false);
                    0 < h.length && (m = ek(c[f + 1]), Wj(g, m), 0 == h[0].ia && Xj(g, m))
                }
                a.ya.push(c)
            }
        },
        dk = function (a, b) {
            var c = b ? Pd : fe, d = Z[a], e = undefined === d[c] ? [] : d[c];
            return isArray(e) ? e : [e]
        },
        ek = function (a) {
            return function () {
                a.v()
            }
        },
        hk = function (a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c], e = [], f = function (a) {
                    var b = dk(a, true);
                    0 < b.length && f(b[0].s);
                    e.push(a);
                    var c = dk(a, false);
                    0 < c.length && f(c[0].s)
                };
                f(d.g);
                b[d.g] = e
            }
            gk(a, b);
            return b
        },
        gk = function (a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c].g, e;
                for (e in b)if (b.hasOwnProperty(e) && e != d && -1 < indexOf(b[e], d)) {
                    delete b[d];
                    break
                }
            }
        };
    var jk = function (a, b) {
        return function () {
            a[wc] = b.O;
            a[xc] = b.N;
            var c = b.g, d = b.i && b.i.ka[c], e = Ia[c] && Ia[c].state, f = d ? undefined !== d : b.Ma, g = Ia[c] && Ia[c].firingOption, k = g && 2 == g, l = g && 1 == g;
            if ((f || e && 0 != e) && (f || k) && (k || l))k && Ia[c] && 1 == Ia[c].state || l && b.i && 1 == b.i.ka[c] ? b.O() : b.N(); else {
                var m = b.i ? b.i.event : undefined;
                a = ik(a, m ? m.c : Jf());
                jf(b, 0);
                if (m) {
                    var h = a;
                    Tj(m, c)
                }
                $e(a, b.O, b.N)
            }
        }
    }, ik = function (a, b) {
        a = Fj(a, b);
        return a
    }, ck = function (a, b, c) {
        var d = new Vj(b);
        d.i = c;
        Wj(d, yi(a));
        Xj(d, zi(a));
        d.v = jk(a, d);
        return d
    };


    var _sp = function (a, b, c) {
        loadScriptWithCallback("//www.googleadservices.com/pagead/conversion_async.js", function () {
            var d = window.google_trackConversion;
            isFunction(d) ? d({
                google_conversion_id: a[R],
                google_conversion_label: a[Jc],
                google_custom_params: a[Hb] || {},
                google_remarketing_only: true,
                onload_callback: b
            }) || c() : c()
        }, c)
    };
    _sp.a = "sp";
    _sp.b = ["google"];
    var nk = false,
        _ua = function (a, b, c) {
            function d() {
                var args = [].slice.call(arguments, 0);
                args[0] = p + args[0];
                window[getGAOBjectSymbol()].apply(window, args)
            }

            function e(b, c) {
                undefined !== a[c] && d("set", b, a[c])
            }

            function f(a, b) {
                return undefined === b ? b : a(b)
            }

            function g(a, b) {
                if (b)for (var c in b)b.hasOwnProperty(c) && d("set", a + c, b[c])
            }

            function k() {
                var b = function (a, b, c) {
                    if (!isCommonObj(b))return false;
                    for (var e = getValueForKeyWithDefault(Object(b), c, []), f = 0; e && f < e.length; f++)d(a, e[f]);
                    return !!e && 0 < e.length
                }, c;
                a[Zb] ? c = getVal("ecommerce") :
                a[Yb] && (c = a[Yb].ecommerce);
                if (!isCommonObj(c))return;
                c = Object(c);
                var e = getValueForKeyWithDefault(a[rc], "currencyCode", c.currencyCode);
                undefined !== e && d("set", "&cu", e);
                b("ec:addImpression", c, "impressions");
                if (b("ec:addPromo", c[c.promoClick ? "promoClick" : "promoView"], "promotions") && c.promoClick) {
                    d("ec:setAction", "promo_click", c.promoClick.actionField);
                    return
                }
                for (var f = "detail checkout checkout_option click add remove purchase refund".split(" "), g = 0; g < f.length; g++) {
                    var h = c[f[g]];
                    if (h) {
                        b("ec:addProduct", h, "products");
                        d("ec:setAction", f[g],
                            h.actionField);
                        break
                    }
                }
            }

            function l(a, b, c) {
                var d = 0;
                if (undefined !== a)for (var e in a)if (a.hasOwnProperty(e) && (c && v[e] || !c && undefined === v[e])) {
                    var f = u[e] ? isTrue(a[e]) : a[e];
                    "anonymizeIp" != e || f || (f = undefined);
                    b[e] = f;
                    d++
                }
                return d
            }

            getThenChangeAGlobalProperty("GoogleAnalyticsObject", a[ed] || "ga", false);
            var getGAOBjectSymbol = function () {
                    return window.GoogleAnalyticsObject
                },
                gaq = getThenChangeAGlobalProperty(getGAOBjectSymbol(), function () {
                    var _gaq = window[getGAOBjectSymbol()];
                    _gaq.q = _gaq.q || [];
                    _gaq.q.push(arguments)
                }, false);
            gaq.l = Number(DateFactory());
            var p = "",
                r = "";
            undefined == a[se] ? (r = "gtm" + currentTime++, p = r + ".") : "" !==
            a[se] && (r = a[se], p = r + ".");
            var t = false;
            var z = {name: r};
            gaq("create", a[Ka], z);
            d("set", "&gtm", "GTM-W6L835");
            e("nonInteraction", jd);
            a[Oc] && d("require", "linkid", "linkid.js");
            d("set", "hitCallback", function () {
                if (isFunction(a[yc]))a[yc](); else {
                    var c = a[rc], d = c && c.hitCallback;
                    isFunction(d) && d()
                }
                b()
            });
            if (a[oe]) {
                a[gc] && (d("require", "ec", "ec.js"), k()), d("send", {
                    hitType: "event",
                    eventCategory: String(a[kc]),
                    eventAction: String(a[jc]),
                    eventLabel: f(String, a[lc]),
                    eventValue: f(round2Int, a[mc])
                });
            } else if (a[pe]) {
            } else if (a[re]) {
            } else if (a[qe]) {
            } else if (a[Pb]) {
            } else if (a[Nb]) {
            } else if (a[ne]) {
            } else {
                a[gc] && (d("require", "ec", "ec.js"), k());
                if (a[Xb] && !a[ic]) {
                    var U = "_dc_gtm_" + String(a[Ka]).replace(/[^A-Za-z0-9-]/g,
                            "");
                    d("require", "displayfeatures", undefined, {cookieName: U})
                }
                d("send", "pageview");
            }
            if (!nk) {
                var Y = a[Lb] ? "u/analytics_debug.js" : "analytics.js";
                nk = true;
                loadScriptWithCallback(getBasePath("https:", "http:", "//www.google-analytics.com/" + Y, t), function () {
                    window[getGAOBjectSymbol()].loaded || c()
                }, c)
            }
        };
    _ua.a = "ua";
    _ua.b = ["google"];
    var ok,
        pk;
    var yk = function () {
            var a = [];
            return function (b, c) {
                if (undefined === a[b]) {
                    var d = yj[b] && Fj(yj[b], c), e = d;
                    if (d)if (d[Ta] && isArray(d[P]))for (var f = d[P], e = false, g = 0; !e && g < f.length; g++)d[P] = f[g], e = $e(d); else e = $e(d);
                    a[b] = [e, d]
                }
                return a[b]
            }
        },
        Qj = function (a, b) {
            for (var c = b[0], d = 0; d < c.length; d++)if (!a.I(c[d], a.c)[0])return false;
            for (var e = b[2], d = 0; d < e.length; d++)if (a.I(e[d], a.c)[0])return false;
            return true
        },
        zk = false,
        tg = function (a, b, c, d) {
            switch (b) {
                case "gtm.js":
                    if (zk)return false;
                    zk = true;
                    break;
                case "gtm.sync":
                    if (getVal("gtm.snippet") != randomSalt)return false
            }
            getVal("tagTypeBlacklist");
            for (var e = {
                id: a,
                name: b,
                V: c || emptyFunction,
                U: Hj(),
                ga: Hj(),
                I: yk(),
                c: Jf()
            }, f = [], g = 0; g < Ug.length; g++)if (Qj(e, Ug[g])) {
                f[g] = true;
                for (var k = e, l = Ug[g], m = l[1], h = 0; h < m.length; h++)k.U[m[h]] = true;
                for (var p = l[3], h = 0; h < p.length; h++)k.ga[p[h]] = true
            } else f[g] = false;
            Tj(e);
            var t = [];
            for (var v = 0; v < tj; v++)if (e.U[v] && !e.ga[v])if (e.c(Z[v])) {
            } else {
                t[v] = Z[v];
            }
            e.J = t;
            for (var u = new Yj(e), z = 0; z < tj; z++)if (e.U[z] && !e.ga[z])if (e.c(Z[z])) {
            } else {
                var D = e.J[z], E = ck(D, z, u);
                Zj(u, z, E, D[Sb], D[Pd], D[fe]);
                if (D[Ja])break
            }
            u.addListener(e.V);
            for (var F = [], y =
                0; y < u.F.length; y++) {
                var C = u.F[y];
                if (C) {
                    var x = u.Ga[y], I = u.Ka[y], U = u.Na[y];
                    if (0 != x.length || I || U) {
                        if (0 < x.length)for (var ba = bk(x, C.v), Y = 0; Y < x.length; Y++)x[Y] instanceof Ej && x[Y].s != y && ak(u, x[Y].s, ba);
                        (I || U) && fk(u, y)
                    } else F.push(y)
                }
            }
            for (y = 0; y < F.length; y++)u.F[F[y]].v();
            for (y = 0; y < u.ya.length; y++) {
                for (var ub = u.ya[y], Aa = ub, cf = [], bd = 0; bd < Aa.length; bd++) {
                    var cd = Aa[bd], af = cd.g, bf = Ia[af], $c = bf.firingOption;
                    0 != $c && (1 == $c && undefined !== cd.i.ka[af] || 2 == $c && undefined !== bf.state) && cf.push(cd)
                }
                var ad = hk(cf), cc = undefined;
                for (cc in ad)if (ad.hasOwnProperty(cc)) {
                    for (var Se =
                        undefined, Qi = undefined, Wc = ad[cc], Mk = Wc[0], Ri = Wc[Wc.length - 1], Si, za = 0; za < Aa.length; za++) {
                        var Xc = Aa[za];
                        !Se && Xc.g == Mk && 0 < za && (Se = Aa[za - 1]);
                        Xc.g == Ri && za < Aa.length - 1 && (Qi = Aa[za + 1]);
                        if (-1 < indexOf(Wc, Xc.g))if (Si = Aa.splice(za, 1)[0], Xc.g == Ri)break; else za--
                    }
                    if (Si) {
                        var Ti = Number(cc), aa = Se, Te = Qi;
                        if (aa) {
                            var Nk = aa.ha[0], Ok = aa.Z[0], Ui = aa;
                            Ui.ha = [];
                            Ui.Z = [];
                            Wj(aa, Nk);
                            Xj(aa, Ok)
                        }
                        if (aa && Te) {
                            var Ue = ek(Te);
                            Wj(aa, Ue);
                            var Ve = dk(aa.g, false);
                            0 < Ve.length && Ve[0].s != Ti && 0 == Ve[0].ia && Xj(aa, Ue);
                            var We = dk(Te.g, true);
                            0 < We.length && We[0].s != Ti &&
                            0 == We[0].ia && Xj(aa, Ue)
                        }
                    }
                }
                0 < ub.length && ub[0].v()
            }
            0 < u.M || functionArrExec(u.sa);
            d && isFunction(d) && d({
                passingRules: f,
                resolvedTags: e.J
            });
            for (var Vi in e.J)if (e.J.hasOwnProperty(Vi)) {
                var Wi = e.J[Vi], Xe;
                if (!(Xe = undefined == Wi[Ec])) {
                    var Xi = Wi[Ec];
                    Xe = !("function" != typeof String.prototype.startsWith ? 0 === Xi.indexOf("_implicit") : Xi.startsWith("_implicit"))
                }
                if (Xe)return true
            }
            return false
        };
    var Ak = {
        macro: function (a) {
            if (xj.contains(a))return xj.get(a)
        }
    };
    Ak.dataLayer = actionStore;
    Ak.onHtmlSuccess = gh(true);
    Ak.onHtmlFailure = gh(false);
    Ak.Ya = function () {
        var a = window.google_tag_manager;
        a || (a = window.google_tag_manager = {});
        a["GTM-W6L835"] || (a["GTM-W6L835"] = Ak);
        ja = a
    };
    uj.push.apply(uj, function () {
        for (var a = [_eq, _e, '_event', _M(0), 'gtm.js', '1694188_2147479553', _ua, true, 'UA-69742529-1', false, '\x26tid', {10: 8}, 1, _sp, '956650047', '', 7, _cn, _u, 'Page URL', _M(1), '/index.php?model\x3dpay_result', '1694188_7', _awct, 'rd3iCO_9imEQv6SVyAM', 8, 'gtm.dom', '1694188_11', 13, 'productClick', '1694188_4', _c, 'gaProperty', _M(2), 'Ecommerce', 'Product Click', _v, 'Click URL', 'gtm.elementUrl', _M(3), '\x26t', '\x26ec', '\x26ea', '\x26el', '\x26ni', 'event', {
            10: 33,
            40: 45,
            41: 34,
            42: 35,
            43: 39,
            44: 9
        }, 14, {10: 33}, 15, '944807294', 19, 'b57dCMyq4WIQ_rrCwgM', 20, 'addToCart', '1694188_17', 'Add to Cart', {
            10: 33,
            40: 45,
            41: 34,
            42: 56,
            44: 9
        }, 29, 'removeFromCart', '1694188_18', 'Remove from Cart', {
            10: 33,
            40: 45,
            41: 34,
            42: 61,
            44: 9
        }, 30, 31, 'ecomm_prodid', 'ecomm_pagetype', 'ecomm_totalvalue', 'dataLayer_ecomm_pagetype', 2, _M(4), 'dataLayer_ecomm_totalvalue', _M(5), {
            65: 70,
            66: 70,
            67: 72
        }, 32, _html, '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);fbq(\x22track\x22,\x22PageView\x22);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dPageView\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 23, '/products/', '1694188_5', '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);fbq(\x22track\x22,\x22ViewContent\x22);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dViewContent\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 24, '/shopping-cart.html', '1694188_8', '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);\nfbq(\x22track\x22,\x22AddToCart\x22,{value:\x220.00\x22,currency:\x22USD\x22});\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dAddToCart\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 25, '/login_register.php', '1694188_6', '/index.php?model\x3dlogin_register\x26action\x3dgo_verify\x26return\x3daHR0cDovL3d3dy5tYWtlbWVjaGljLmNvbS9sb2dpbl9yZWdpc3Rlci5waHA\x3d', '1694188_15', '/index.php?model\x3dorder\x26action\x3dplace_order', '1694188_16', '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);fbq(\x22track\x22,\x22CompleteRegistration\x22);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dCompleteRegistration\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 26, '/index.php?model\x3dorder\x26action\x3dgenerate_orders', '1694188_9', '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);\nfbq(\x22track\x22,\x22InitiateCheckout\x22,{value:\x220.00\x22,currency:\x22USD\x22});\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dInitiateCheckout\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 27, '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3dtrue,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3dtrue,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22//connect.facebook.net/en_US/fbevents.js\x22);!function(b){fbq.tempPixel\x3dfbq.tempPixel||{};fbq.tempPixel[b]||(fbq(\x22init\x22,b),fbq.tempPixel[b]\x3dtrue)}(\x221412157455753569\x22);\nfbq(\x22track\x22,\x22Purchase\x22,{value:\x220.00\x22,currency:\x22USD\x22});\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1412157455753569\x26amp;ev\x3dPurchase\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n', 28, 'dataLayer_event', 'Event', _M(6), 'dataLayer_ecomm_prodid', 'Page Hostname', 'host', 'Page Path', 'path', _f, 'Referrer', 'Click Element', 'gtm.element', 'Click Classes', 'gtm.elementClasses', 'Click ID', 'gtm.elementId', 'Click Target', 'gtm.elementTarget', _et, 'Click Text', _ctv, 'Container Version', _r, 'Random Number', 'Container ID', 'GTM-W6L835', _hid, 'HTML ID'], b = [], c = 0; c < a.length; c++)b[c] = Gj(c, a);
        return b
    }());
    Jj(vj, 0, "16:0,16:1,19:2,3:3,4:4,16:6,27:7,0:8,12:9,11:9,28:9,8:9,9:9,1:11,21:9,10:9,25:12,16:13,18:14,6:15,25:16,16:17,16:18,19:19,3:20,4:21,16:23,20:24,29:15,25:25,4:26,24:7,12:7,11:7,25:28,4:29,16:31,19:32,29:8,0:33,26:7,2:7,14:34,13:35,16:36,19:37,22:38,15:39,23:9,1:46,25:47,1:48,25:49,18:50,25:51,20:52,25:53,4:54,13:56,1:57,25:58,4:59,13:61,1:62,25:63,25:64,19:68,22:66,7:69,19:71,22:67,6:73,25:74,16:75,17:76,25:77,4:78,17:80,25:81,4:82,17:84,25:85,4:86,4:88,4:90,17:92,25:93,4:94,17:96,25:97,17:98,25:99,19:100,19:101,22:102,19:103,22:65,19:104,5:105,19:106,5:107,16:108,19:109,19:110,22:111,19:112,22:113,19:114,22:115,19:116,22:117,16:118,19:119,16:120,19:121,16:122,19:123,19:124,29:125,16:126,19:127");
    Jj(wj, 1, "G,AAAw,AAAAAAH,AAAAAAAc,AAAAAAAEAAAH,AAAAAAAEAAAc,CAAAAAAAAAAAAAAI,AAAAAAAEAAAEAAAU,AAAAAAAEAAAEAAAgB,AAAQAAAAAAAAAAAAG,AAAQAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAgB,AAAAAAAEAAAAAAAAAG,AAAAAAAEAAAAAAAAAY,AAAAAAAEAAAAAAAAAgB,AAAAAAAEAAAAAAAAAAG,AAAAAAAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAgB,AAAAAAAAAAAAAAAAAAAG,AAAAAABAAAAAAAAAAAAY,AAAAAAAAAAAAAAAAAAAgB");
    Jj(yj, 1, "Z,AAAID,JAAAAB,JAAAAg,JAAAAAAAAI,JAAAAAAAAAC,AAAIBAAAAAAAQ,AAAIBAAAAAAAAC,AAAIBAAAAAAAAQ,AAAIBAAAAAAAAg,AAAIBAAAAAAAAAB,AAAIBAAAAAAAAAI");
    Jj(Z, 1, "g_f,ABgH,ABAB8,gyPAAe,ggMAAO4jH,gwNAAOIAY,AAgCACAAgB,ABAAUAAAgG,ggMAAO4BBwB,ggMAAO4BBAc,gwNAAOIAIAg,AAgAACAAgAAgB,AAAAACAAAAAAO,AAAAACAAAAAAiB,AAAAACAAAAAACM,AAAAACAAAAAACAG,AAAAACAAAAAACAw,AAAAACAAAAAACAAD");
    Jj(Ug, 2, "B:DhB::,D:ECg::,E:oQ::,I:Q::,Q:AE::,g:AI::,BB:AAC::,BC:AAE::,BE:AAI::,BI:AAI::,BQ:AAI::,Bg:AAQ::");
    Jj(Vg, 4, "5.5.5.5.5:,22.22.22:,27.27.27:,30:,55:,60:,79:,83:,87:,89:,91:,95:");
    for (var Bk = 0; Bk < Z.length; Bk++) {
        var Ck = Z[Bk], Dk = 1;
        Ck[ld] ? Dk = 2 : Ck[xe] && (Dk = 0);
        Ia[Bk] = {firingOption: Dk, state: undefined}
    }
    Ak.Ya();
    (function (a) {
    })("async");
    (function () {
        var dataLayer = getThenChangeAGlobalProperty("dataLayer", [], false),
            gtm = getThenChangeAGlobalProperty("google_tag_manager", {}, false),
        //这个b只是为了逗号。。。
            b = gtm["dataLayer"] = gtm["dataLayer"] || {};
        domloadedListensers.push(function () {
            gtm.gtmDom || (gtm.gtmDom = true, dataLayer.push({event: "gtm.dom"}))
        });
        anUnkownCallbackList.push(function () {
            gtm.gtmLoad || (gtm.gtmLoad = true, dataLayer.push({event: "gtm.load"}))
        });
        var push = dataLayer.push;
        dataLayer.push = function () {
            var args = [].slice.call(arguments, 0);
            push.apply(dataLayer, args);
            for (sendBackQueue.push.apply(sendBackQueue, args); 300 < this.length;)this.shift();
            return sendBackThingInQueue()
        };
        sendBackQueue.push.apply(sendBackQueue, dataLayer.slice(0));
        delayExecute(sendBackThingInQueue)
    })();
    if ("interactive" == document.readyState && !document.createEventObject || "complete" == document.readyState)callbackDomloaded(); else {
        addEve(document, "DOMContentLoaded", callbackDomloaded);
        addEve(document, "readystatechange", callbackDomloaded);
        if (document.createEventObject && document.documentElement.doScroll) {
            var Lk = true;
            try {
                Lk = !window.frameElement
            } catch (a) {
            }
            Lk && simulateDomLoaded()
        }
        addEve(window, "load", callbackDomloaded)
    }
    "complete" === document.readyState ? triggerUnknowEvent() : addEve(window, "load", triggerUnknowEvent);
    (function (a) {
    })("async");
    (function () {
    })();
    var _vs = "res_ts:1451880174033000,srv_cl:109452713,ds:live,cv:93";
})()
