(function () {
        var window = this;
        var ea = /^true$/.test("false") ? true : false;
        var k = function (a) {
                k[" "](a);
                return a
            }
            ;
        k[" "] = function () {
        };
        var forEach = function (obj, callback) {
            for (var key in obj) {
                Object.prototype.hasOwnProperty.call(obj, key) && callback.call(undefined, obj[key], key, obj)
            }

        };
        var trim = String.prototype.trim ? function (a) {
                return a.trim()
            } : function (a) {
                return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
            },
            compareFunction = function (a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            };
        var useragent;
        a: {
            var navigator = window.navigator;
            if (navigator) {
                var ua = navigator.userAgent;
                if (ua) {
                    useragent = ua;
                    break a
                }
            }
            useragent = ""
        }
        ;
        var isOpera = -1 != useragent.indexOf("Opera") || -1 != useragent.indexOf("OPR"),
            isIE = -1 != useragent.indexOf("Trident") || -1 != useragent.indexOf("MSIE"),
            isEdge = -1 != useragent.indexOf("Edge"),
            isFirefox = -1 != useragent.indexOf("Gecko") && !(-1 != useragent.toLowerCase().indexOf("webkit") && -1 == useragent.indexOf("Edge")) && !(-1 != useragent.indexOf("Trident") || -1 != useragent.indexOf("MSIE")) && -1 == useragent.indexOf("Edge"),
            isWebkit = -1 != useragent.toLowerCase().indexOf("webkit") && -1 == useragent.indexOf("Edge")
            ,
            ensureUA = function () {
                var ua = useragent;
                if (isFirefox)
                    return /rv\:([^\);]+)(\)|;)/.exec(ua);
                if (isEdge)
                    return /Edge\/([\d\.]+)/.exec(ua);
                if (isIE)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ua);
                if (isWebkit)
                    return /WebKit\/(\S+)/.exec(ua)
            },
            IEVersion = function () {
                var doc = window.document;
                return doc ? doc.documentMode : undefined
            },
            operaVersion = function () {
                if (isOpera && window.opera) {
                    var version;
                    var getVersion = window.opera.version;
                    try {
                        version = getVersion()
                    } catch (d) {
                        version = getVersion
                    }
                    return version
                }
                version = "";
                (getVersion = ensureUA()) && (version = getVersion ? getVersion[1] : "");
                //@TODO
                return isIE && (getVersion = IEVersion(), getVersion > parseFloat(version)) ?
                    String(getVersion) : version;
            }(),
            H = {},
            J = function (a) {
                if (!H[a]) {
                    var b = 0,
                        d = trim(String(operaVersion)).split("."),
                        c = trim(String(a)).split("."),
                        e = Math.max(d.length, c.length),
                        g = 0
                    for (; 0 == b && g < e; g++) {
                        var h = d[g] || ""
                            , l = c[g] || ""
                            , n = RegExp("(\\d*)(\\D*)", "g")
                            , q = RegExp("(\\d*)(\\D*)", "g");
                        do {
                            var p =
                                n.exec(h) || ["", "", ""]
                                , m = q.exec(l) || ["", "", ""];
                            if (0 == p[0].length && 0 == m[0].length)
                                break;
                            b = compareFunction(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || compareFunction(0 == p[2].length, 0 == m[2].length) || compareFunction(p[2], m[2])
                        } while (0 == b)
                    }
                    H[a] = 0 <= b
                }
            },
            document = window.document,
            IEOrOperaVersion = document && isIE ?
            IEVersion() || ("CSS1Compat" == document.compatMode ? parseInt(operaVersion, 10) : 5) : undefined;
        var NotFFAndIE;
        if (!(NotFFAndIE = !isFirefox && !isIE)) {
            var isHighVersionIE;
            if (isHighVersionIE = isIE)
                isHighVersionIE = 9 <= IEOrOperaVersion;
            NotFFAndIE = isHighVersionIE
        }
        NotFFAndIE || isFirefox && J("1.9.1");
        isIE && J("9");
        /**
         * 将key和value分开存储
         */
        var hashSaveInA = function () {
                this.b = {};
                this.a = {};
                for (var i = 0, l = arguments.length; i < l; ++i)
                    this.a[arguments[i]] = "";
            },
            getValueInN = function (key) {
                var NStore = N;
                return NStore.a.hasOwnProperty(key) ? NStore.a[key] : ""
            },
            NStore2Array = function () {
                var NStore = N
                    , result = [];
                forEach(NStore.b, function (key, value) {
                    result.push(value)
                });
                forEach(NStore.a, function (key) {
                    "" != key && result.push(key)
                });
                return result
            };
        var N,
            googleConversionArgs = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url google_conversion_referrer_url".split(" ");

        function encodeURI(a) {
            return null != a ?
                ("3455583315" == (N ? getValueInN(3) : "") ?
                    encodeURIComponent(a.toString()) : escape(a.toString()))
                : ""
        }

        function slice512Str(obj) {
            return null != obj ? obj.toString().substring(0, 512) : ""
        }

        function keyValue2QueryComponent(key, value) {
            var encodedUri = encodeURI(value);
            if ("" != encodedUri) {
                var encodedKey = encodeURI(key);
                if ("" != encodedKey)
                    return "&".concat(encodedKey, "=", encodedUri)
            }
            return ""
        }

        function T(str) {
            var type = typeof str;
            return null == str || "object" == type || "function" == type ?
                null :
                String(str).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        }

        function ma(a) {
            var b;
            if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
                var d = [];
                for (b in a)
                    if (Object.prototype.hasOwnProperty.call(a, b)) {
                        var c = a[b];
                        if (c && "function" == typeof c.join) {
                            for (var e = [], g = 0; g < c.length; ++g) {
                                var h = T(c[g]);
                                null != h && e.push(h)
                            }
                            c = 0 == e.length ? null : e.join(",")
                        } else
                            c = T(c);
                        (e = T(b)) && null != c && d.push(e + "=" + c)
                    }
                b = d.join(";")
            } else
                b = "";
            return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
        }

        function encodeObj(obj) {
            return "number" != typeof obj && "string" != typeof obj ? "" : encodeURI(obj.toString())
        }

        function conversionItems2QueryStr(conversionItems) {
            if (!conversionItems)
                return "";
            conversionItems = conversionItems.google_conversion_items;
            if (!conversionItems)
                return "";
            for (var conversionItemsArr = [], index = 0, l = conversionItems.length; index < l; index++) {
                var component = conversionItems[index]
                    , componets = [];
                component && (componets.push(encodeObj(component.value)),
                    componets.push(encodeObj(component.quantity)),
                    componets.push(encodeObj(component.item_id)),
                    componets.push(encodeObj(component.adwords_grouping)),
                    componets.push(encodeObj(component.sku)),
                    conversionItemsArr.push("(" + componets.join("*") + ")"))
            }
            return 0 < conversionItemsArr.length ? "&item=" + conversionItemsArr.join("") : ""
        }

        function baseInfo2QueryStr(window, navigator, datePrototype) {
            var queryComponentArr = [];
            if (window) {
                var screen = window.screen;
                screen && (queryComponentArr.push(keyValue2QueryComponent("u_h", screen.height)),
                    queryComponentArr.push(keyValue2QueryComponent("u_w", screen.width)),
                    queryComponentArr.push(keyValue2QueryComponent("u_ah", screen.availHeight)),
                    queryComponentArr.push(keyValue2QueryComponent("u_aw", screen.availWidth)),
                    queryComponentArr.push(keyValue2QueryComponent("u_cd", screen.colorDepth)));
                window.history && queryComponentArr.push(keyValue2QueryComponent("u_his", window.history.length))
            }
            datePrototype && "function" == typeof datePrototype.getTimezoneOffset && queryComponentArr.push(keyValue2QueryComponent("u_tz", -datePrototype.getTimezoneOffset()));
            navigator && ("function" == typeof navigator.javaEnabled && queryComponentArr.push(keyValue2QueryComponent("u_java", navigator.javaEnabled())),
            navigator.plugins && queryComponentArr.push(keyValue2QueryComponent("u_nplug", navigator.plugins.length)),
            navigator.mimeTypes && queryComponentArr.push(keyValue2QueryComponent("u_nmime", navigator.mimeTypes.length)));
            return queryComponentArr.join("")
        }

        function pa(a) {
            if ("3455315" != (N ? getValueInN(2) : ""))
                return "";
            a = a ? a.title : "";
            if (undefined == a)
                return "";
            var b = function (a) {
                    try {
                        return decodeURIComponent(a),
                            true
                    } catch (b) {
                        return false
                    }
                }
                ;
            a = encodeURIComponent(a);
            for (var d = 128; !b(a.substr(0, d));)
                d--;
            return "&tiba=" + a.substr(0, d)
        }

        function V(a, b, d, c) {
            var e = "";
            if (b) {
                var g;
                if (a.top == a)
                    g = 0;
                else {
                    var h = a.location.ancestorOrigins;
                    if (h)
                        g = h[h.length - 1] == a.location.origin ? 1 : 2;
                    else {
                        h = a.top;
                        try {
                            var l;
                            if (l = !!h && null != h.location.href)
                                c: {
                                    try {
                                        k(h.foo);
                                        l = true;
                                        break c
                                    } catch (n) {
                                    }
                                    l = false
                                }
                            g = l
                        } catch (n) {
                            g = false
                        }
                        g = g ? 1 : 2
                    }
                }
                l = "";
                l = d ? d : 1 == g ? a.top.location.href : a.location.href;
                e += keyValue2QueryComponent("frm", g);
                e += keyValue2QueryComponent("url", slice512Str(l));
                e += keyValue2QueryComponent("ref", slice512Str(c || b.referrer))
            }
            return e
        }

        function shouldHttps(window) {
            return (!ea && !android2DotXRegex.test(navigator.userAgent)) || window && window.location && window.location.protocol && "https:" == window.location.protocol.toString().toLowerCase() ?
                "https:" : "http:";
        }
        //不是安卓用https??
        var android2DotXRegex = /Android ([01]\.|2\.[01])/i;

        function imageFactory() {
            return new Image
        }

        /**
         * 优先使用参数中带的image generator
         * @param a
         * @param url
         * @param shouldCallback
         * @constructor
         */
        function X(a, url, shouldCallback) {
            var img ,
                imgFactory = imageFactory;
            "function" === typeof a.opt_image_generator && (img = a.opt_image_generator);
            img = imgFactory();
            url += keyValue2QueryComponent("async", "1");
            img.src = url;
            img.onload = shouldCallback && "function" === typeof a.onload_callback ? a.onload_callback : function () {
            }
        }

        function wrapSendBackInfo(sendBackInfo) {
            var win = window,
                exports = {},
                sendBackExports = function (key) {
                    exports[key] = sendBackInfo && null != sendBackInfo[key] ? sendBackInfo[key] : win[key]
                };

            for (var e = 0; e < googleConversionArgs.length; e++)
                sendBackExports(googleConversionArgs[e]);
            sendBackExports("onload_callback");
            return exports
        };
        window.google_trackConversion = function (trackInfo) {
            trackInfo = wrapSendBackInfo(trackInfo);
            trackInfo.google_conversion_format = 3;
            var addonQueryStr;
            var win = window,
                navigator = window.navigator,
                doc = document,
                g = false;
            if (trackInfo && 3 == trackInfo.google_conversion_format) {
                try {
                    var h;
                    "landing" == trackInfo.google_conversion_type || !trackInfo.google_conversion_id || trackInfo.google_remarketing_only && trackInfo.google_disable_viewthrough ? h = false : (trackInfo.google_conversion_date = new Date,
                        trackInfo.google_conversion_time = trackInfo.google_conversion_date.getTime(),
                        trackInfo.google_conversion_snippets = "number" == typeof trackInfo.google_conversion_snippets && 0 < trackInfo.google_conversion_snippets ? trackInfo.google_conversion_snippets +
                        1 : 1,
                    "number" != typeof trackInfo.google_conversion_first_time && (trackInfo.google_conversion_first_time = trackInfo.google_conversion_time),
                        trackInfo.google_conversion_js_version = "8",
                    0 != trackInfo.google_conversion_format && 1 != trackInfo.google_conversion_format && 2 != trackInfo.google_conversion_format && 3 != trackInfo.google_conversion_format && (trackInfo.google_conversion_format = 1),
                        N = new hashSaveInA(1, 2, 3),
                        h = true);
                    if (h) {
                        h = "/?";
                        "landing" == trackInfo.google_conversion_type && (h = "/extclk?");
                        var url,
                            NStore,
                            lastPathAndBaseQueryStr= [trackInfo.google_remarketing_only ? "viewthroughconversion/" : "conversion/",
                                encodeURI(trackInfo.google_conversion_id),
                                h,
                                "random=",
                                encodeURI(trackInfo.google_conversion_time)]
                                .join(""),
                            hostName,
                            //remarketing only 就回传到doubleclick
                            hostName1 = trackInfo.google_remarketing_only ? "googleads.g.doubleclick.net" : trackInfo.google_conversion_domain || "www.googleadservices.com";
                        url = shouldHttps(win) + "//" + hostName1 + "/pagead/" + lastPathAndBaseQueryStr;
                        if (N && (NStore = N,
                                hostName = ["3455314", "3455315"],
                            NStore.a.hasOwnProperty(2) && "" == NStore.a[2])) {
                            var p, m, I;
                            c: {
                                try {
                                    var Y = window.top.location.hash;
                                    if (Y) {
                                        var Z = Y.match(/\bdeid=([\d,]+)/);
                                        I = Z && Z[1] || "";
                                        break c
                                    }
                                } catch (aa) {
                                }
                                I = ""
                            }
                            var ba = I.match(new RegExp("\\b(" + hostName.join("|") + ")\\b"));
                            m = ba && ba[0] || null;
                            var y;
                            if (m)
                                y = m;
                            else
                                c: {
                                    if (!(1E-4 > Math.random())) {
                                        var z = Math.random();
                                        if (0 > z) {
                                            m = window;
                                            try {
                                                var ca =
                                                    new Uint32Array(1);
                                                m.crypto.getRandomValues(ca);
                                                z = ca[0] / 65536 / 65536
                                            } catch (aa) {
                                                z = Math.random()
                                            }
                                            y = hostName[Math.floor(z * hostName.length)];
                                            break c
                                        }
                                    }
                                    y = null
                                }
                            (p = y) && "" != p && NStore.a.hasOwnProperty(2) && (NStore.a[2] = p)
                        }
                        var A;
                        ba: {
                            var da = trackInfo.google_conversion_language;
                            if (null != da) {
                                var x = da.toString();
                                if (2 == x.length) {
                                    A = keyValue2QueryComponent("hl", x);
                                    break ba
                                }
                                if (5 == x.length) {
                                    A = keyValue2QueryComponent("hl", x.substring(0, 2)) + keyValue2QueryComponent("gl", x.substring(3, 5));
                                    break ba
                                }
                            }
                            A = ""
                        }
                        addonQueryStr = [keyValue2QueryComponent("cv", trackInfo.google_conversion_js_version),
                            keyValue2QueryComponent("fst", trackInfo.google_conversion_first_time),
                            keyValue2QueryComponent("num", trackInfo.google_conversion_snippets),
                            keyValue2QueryComponent("fmt", trackInfo.google_conversion_format),
                            keyValue2QueryComponent("value", trackInfo.google_conversion_value),
                            keyValue2QueryComponent("currency_code", trackInfo.google_conversion_currency),
                            keyValue2QueryComponent("label", trackInfo.google_conversion_label),
                            keyValue2QueryComponent("oid", trackInfo.google_conversion_order_id),
                            keyValue2QueryComponent("bg", trackInfo.google_conversion_color),
                            A,
                            keyValue2QueryComponent("guid", "ON"),
                            keyValue2QueryComponent("disvt", trackInfo.google_disable_viewthrough),
                            keyValue2QueryComponent("is_call", trackInfo.google_is_call),
                            keyValue2QueryComponent("eid", NStore2Array().join()),
                            conversionItems2QueryStr(trackInfo),
                            baseInfo2QueryStr(win, navigator, trackInfo.google_conversion_date),
                            ma(trackInfo),
                            V(win, doc, trackInfo.google_conversion_page_url, trackInfo.google_conversion_referrer_url),
                            trackInfo.google_remarketing_for_search && !trackInfo.google_conversion_domain ? "&srr=n" : "",
                            pa(doc)]
                            .join("");
                        X(trackInfo, url + addonQueryStr, true);
                        if (trackInfo.google_remarketing_for_search && !trackInfo.google_conversion_domain) {
                            var B, ta = [encodeURI(trackInfo.google_conversion_id), "/?random=", Math.floor(1E9 * Math.random())].join("");
                            B = shouldHttps(win) + "//www.google.com/ads/user-lists/" + ta;
                            B += [keyValue2QueryComponent("label", trackInfo.google_conversion_label), keyValue2QueryComponent("fmt", "3"), V(win, doc, trackInfo.google_conversion_page_url, trackInfo.google_conversion_referrer_url)].join("");
                            X(trackInfo, B, false)
                        }
                        g = true
                    }
                } catch (aa) {
                }
                addonQueryStr = g
            }
            else {
                addonQueryStr = false;
            }

            return addonQueryStr
        };
    }
).call(this);
