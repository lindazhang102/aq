try {
    (function (window, document, location, history) {
        'use strict';
        var sendBackUri = 'https://www.facebook.com/tr/'
            , pureNumberRegex = /^\d+$/
            , duplIcateOption = {
            allowDuplicatePageViews: false
        }
            , InfoTableConstruct = (function (exports) {
            var module = {
                exports: exports
            };
            'use strict';
            var deepSymbol = 'deep'
            , shallowSymbol = 'shallow';

            function InfoTable() {
                this.list = [];
            }
            //常用函数定义
            InfoTable.prototype = {
                append: function (key, value) {
                    this._append(encodeURIComponent(key), value, deepSymbol);
                },
                _append: function (key, value, deepOption) {
                    if (Object(value) !== value) {
                        this._appendPrimitive(key, value);
                    } else if (deepOption === deepSymbol) {
                        this._appendObject(key, value);
                    } else
                        this._appendPrimitive(key, json_str(value));
                },
                _appendPrimitive: function (key, value) {
                    if (value != null)
                        this.list.push([key, value]);
                },
                _appendObject: function (key, value) {
                    for (var index in value)
                        if (value.hasOwnProperty(index)) {
                            var str = key + '[' + encodeURIComponent(index) + ']';
                            this._append(str, value[index], shallowSymbol);
                        }
                },
                each: function (callback) {
                    var list = this.list;
                    for (var i = 0, l = list.length; i < l; i++)
                        callback(list[i][0], list[i][1]);
                },
                toQueryString: function () {
                    var resultArr = [];
                    this.each(function (key, value) {
                        resultArr.push(key + '=' + encodeURIComponent(value));
                    });
                    return resultArr.join('&');
                }
            };
            //将json对象转换为字符串
            function json_str(obj) {
                if (typeof JSON === 'undefined' || JSON === null || !JSON.stringify) {
                    return Object.prototype.toString.call(obj);
                } else
                    return JSON.stringify(obj);
            }

            module.exports = InfoTable;
            return module.exports;
        })({})
            , util = (function (exports) {
            var module = {
                exports: exports
            };
            'use strict';
            var consoleSymbol = 'console'
                , errorSymbol = 'error'
                , fbPixelError = 'Facebook Pixel Error'
                , fbPixelWarning = 'Facebook Pixel Warning'
                , warnSymbol = 'warn'
                , toStr = Object.prototype.toString
                , domLevel2NotSupported = !('addEventListener' in document)
                , emptyFunction = function () {
            }
                , console = window[consoleSymbol] || {}
                , postMessa = window.postMessage || emptyFunction;

            function isArray(arr) {
                return Array.isArray ? Array.isArray(arr) : toStr.call(arr) === '[object Array]';
            }

            function errorLog(message) {
                postMessa({
                    action: 'FB_LOG',
                    logType: fbPixelError,
                    logMessage: message
                }, '*');
                if (errorSymbol in console)
                    console[errorSymbol](fbPixelError + ': ' + message);
            }        

            function warningLog(message) {
                postMessa({
                    action: 'FB_LOG',
                    logType: fbPixelWarning,
                    logMessage: message
                }, '*');
                if (warnSymbol in console)
                    console[warnSymbol](fbPixelWarning + ': ' + message);
            }

            function listenOnce(target, eventType, func) {
                eventType = domLevel2NotSupported ? 'on' + eventType : eventType;
                var bb = domLevel2NotSupported ? 'attachEvent' : 'addEventListener'
                    , cb = domLevel2NotSupported ? 'detachEvent' : 'removeEventListener'
                    , db = function () {
                        target[cb](eventType, db, false);
                        func();
                    }
                    ;
                target[bb](eventType, db, false);
            }

            function injectMethod(ctx, key, injectFunc) {
                var bb = ctx[key];
                ctx[key] = function () {
                    var cb = bb.apply(this, arguments); 
                    injectFunc.apply(this, arguments);
                    return cb;
                }
                ;
            }

            exports.isArray = isArray;
            exports.logError = errorLog;
            exports.logWarning = warningLog;
            exports.listenOnce = listenOnce;
            exports.injectMethod = injectMethod;
            return module.exports;
        })({})
            , eventValidator = (function (exports) {
            var module = {
                exports: exports
            };
            'use strict';
            var priceRegex = /^[+-]?\d+(\.\d+)?$/
                , numberSymbol = 'number'
                , currencySymbol = 'currency_code'
                , currencyList = {
                AED: 1,
                ARS: 1,
                AUD: 1,
                BOB: 1,
                BRL: 1,
                CAD: 1,
                CHF: 1,
                CLP: 1,
                CNY: 1,
                COP: 1,
                CRC: 1,
                CZK: 1,
                DKK: 1,
                EUR: 1,
                GBP: 1,
                GTQ: 1,
                HKD: 1,
                HNL: 1,
                HUF: 1,
                IDR: 1,
                ILS: 1,
                INR: 1,
                ISK: 1,
                JPY: 1,
                KRW: 1,
                MOP: 1,
                MXN: 1,
                MYR: 1,
                NIO: 1,
                NOK: 1,
                NZD: 1,
                PEN: 1,
                PHP: 1,
                PLN: 1,
                PYG: 1,
                QAR: 1,
                RON: 1,
                RUB: 1,
                SAR: 1,
                SEK: 1,
                SGD: 1,
                THB: 1,
                TRY: 1,
                TWD: 1,
                USD: 1,
                UYU: 1,
                VEF: 1,
                VND: 1,
                ZAR: 1
            }
                , purchaseSchema = {
                value: {
                    type: numberSymbol,
                    isRequired: true
                },
                currency: {
                    type: currencySymbol,
                    isRequired: true
                }
            }
                , eventList = {
                PageView: {},
                ViewContent: {},
                Search: {},
                AddToCart: {},
                AddToWishlist: {},
                InitiateCheckout: {},
                AddPaymentInfo: {},
                Purchase: {
                    validationSchema: purchaseSchema
                },
                Lead: {},
                CompleteRegistration: {},
                CustomEvent: {
                    validationSchema: {
                        event: {
                            isRequired: true
                        }
                    }
                }
            }
                , hasProp = Object.prototype.hasOwnProperty;
            // 事件验证
            function EventValidator(eventName, param) {
                this.eventName = eventName;
                this.params = param || {};
                this.error = null;
                this.warnings = [];
            }

            EventValidator.prototype = {
                validate: function () {
                    var eveName = this.eventName
                        , eventInfo = eventList[eveName];
                    if (!eventInfo)
                        return this._error('Unsupported event: ' + eveName);
                    var validationSchema = eventInfo.validationSchema;
                    for (var key in validationSchema)
                        if (hasProp.call(validationSchema, key)) {
                            var schema = validationSchema[key];
                            if (schema.isRequired === true && !hasProp.call(this.params, key))
                                return this._error('Required parameter "' + key + '" is missing for event "' + eveName + '"');
                            if (schema.type)
                                if (!this._validateParam(key, schema.type))
                                    return this._error('Parameter "' + key + '" is invalid for event "' + eveName + '"');
                        }
                    return this;
                },
                _validateParam: function (key, type) {
                    var value = this.params[key];
                    switch (type) {
                        case numberSymbol:
                            var isNum = priceRegex.test(value);
                            if (isNum && Number(value) < 0)
                                this.warnings.push('Parameter "' + key + '" is negative for event "' + this.eventName + '"');
                            return isNum;
                        case currencySymbol:
                            return currencyList[value.toUpperCase()] === 1;
                    }
                    return true;
                },
                _error: function (sa) {
                    this.error = sa;
                    return this;
                }
            };
            function validateEvent(eventName, param) {
                return new EventValidator(eventName, param).validate();
            }

            exports.validateEvent = validateEvent;
            return module.exports;
        })({})
            , fbq = window.fbq;

        if (!fbq)
            return util.logError('Pixel code is not installed correctly on this page');
        var slice = Array.prototype.slice
            , hasProp = Object.prototype.hasOwnProperty
            , link = location.href
            , hasPixelId = false
            , isInit = false
            , isIframe = window.top !== window
            , fbPixelAccountList = []
            , fbPixelAccounts = {}
            , reference = document.referrer
            , pvSentDic = {};

        function ObjectDotCreate(ha) {
            for (var ia in ha)
                if (hasProp.call(ha, ia))
                    this[ia] = ha[ia];
        }

        fbq.callMethod = function (methodName) {
            var args = slice.call(arguments)
                , arrayGiven = args.length === 1 && util.isArray(args[0]);
            if (arrayGiven)
                args = args[0];
            if (methodName.slice(0, 6) === 'report') {
                var eventType = methodName.slice(6);
                if (eventType === 'CustomEvent') {
                    eventType = (args[1] || {}).event || eventType;
                    args = ['trackCustom', eventType].concat(args.slice(1));
                } else
                    args = ['track', eventType].concat(args.slice(1));
            }

            methodName = args.shift();
            switch (methodName) {
                case 'addPixelId':
                    hasPixelId = true;
                    return addPixelId.apply(this, args);
                case 'init':
                    isInit = true;
                    return addPixelId.apply(this, args);
                case 'track':
                    if (pureNumberRegex.test(args[0]))
                        return sendBackNoPixel.apply(this, args);
                    if (arrayGiven)
                        return sendBackWithCheck.apply(this, args);
                    return sendBackEvent.apply(this, args);
                case 'trackCustom':
                    return sendBackWithCheck.apply(this, args);
                case 'send':
                    return sendBackWithoutCheck.apply(this, args);
                default:
                    util.logError('Invalid or unknown method name "' + methodName + '"');
            }
        }
        ;
        if (fbq.pixelId) {
            hasPixelId = true;
            addPixelId(fbq.pixelId);
        }
        var fbqQueue = fbq.queue.slice();
        for (var x = 0, y = fbqQueue.length; x < y; x++)
            fbq.callMethod.apply(fbq, fbqQueue[x]);
        fbq.queue.length = 0;
        //引入了冲突的多版本pixel代码
        if (hasPixelId && isInit || window.fbq !== window._fbq)
            util.logWarning('Multiple pixels with conflicting versions were detected on this page');
        if (fbPixelAccountList.length > 1)
            util.logWarning('Multiple different pixels were detected on this page');
        //在history中插代码
        (function () {
            if (fbq.disablePushState === true)
                return;
            if (!history.pushState || !history.replaceState)
                return;
            //利用h5history的API时，允许多次初始化fbq
            var injectFunc = function () {
                    reference = link;
                    link = location.href;
                    if (link === reference)
                        return;
                    var option = new ObjectDotCreate({
                        allowDuplicatePageViews: true
                    });
                    sendBackWithCheck.call(option, 'PageView');
                }
                ;
            util.injectMethod(history, 'pushState', injectFunc);
            util.injectMethod(history, 'replaceState', injectFunc);
            window.addEventListener('popstate', injectFunc, false);
        })();
        function addPixelId(fbId, userData) {
            if (hasProp.call(fbPixelAccounts, fbId)) {
                util.logError('Duplicate Pixel ID: ' + fbId);
                return;
            }
            var fbqInfo = {
                id: fbId,
                userData: userData || {}
            };
            fbPixelAccountList.push(fbqInfo);
            fbPixelAccounts[fbId] = fbqInfo;
        }

        function sendBackEvent(eventName, param) {
            param = param || {};
            var validator = eventValidator.validateEvent(eventName, param);
            if (validator.error)
                util.logError(validator.error);
            if (validator.warnings)
                for (var ka = 0; ka < validator.warnings.length; ka++)
                    util.logWarning(validator.warnings[ka]);
            if (eventName === 'CustomEvent')
                eventName = param.event;
            sendBackWithCheck.call(this, eventName, param);
        }

        function sendBackWithCheck(eventType, infoTable) {
            var option = this instanceof ObjectDotCreate ? this : duplIcateOption
                , isPv = eventType === 'PageView';
            for (var i = 0, l = fbPixelAccountList.length; i < l; i++) {
                var pixelAccount = fbPixelAccountList[i];
                if (isPv && option.allowDuplicatePageViews === false && pvSentDic[pixelAccount.id] === true)
                    continue;
                __sendBack(pixelAccount, eventType, infoTable);
                if (isPv)
                    pvSentDic[pixelAccount.id] = true;
            }
        }

        function sendBackNoPixel(eventType, contentDic) {
            __sendBack(null, eventType, contentDic);
        }

        function sendBackWithoutCheck(eventType, contentDic) {
            for (var i = 0, l = fbPixelAccountList.length; i < l; i++)
                __sendBack(fbPixelAccountList[i], eventType, contentDic);
        }

        function __sendBack(pixelAccount, eventType, contentDic) {
            pixelAccount = pixelAccount || {};
            var infoTable = new InfoTableConstruct();
            infoTable.append('id', pixelAccount.id);
            infoTable.append('ev', eventType);
            infoTable.append('dl', link);
            infoTable.append('rl', reference);
            infoTable.append('if', isIframe);
            infoTable.append('ts', new Date().valueOf());
            //需要深度复制
            infoTable.append('cd', contentDic);
            infoTable.append('ud', pixelAccount.userData);
            infoTable.append('v', fbq.version);
            infoTable.append('a', fbq.agent);
            var queryStr = infoTable.toQueryString();
            //URI过长被截断
            if (2048 > (sendBackUri + '?' + queryStr).length) {
                commonSend(sendBackUri, queryStr);
            } else
                longInfoSend(sendBackUri, infoTable);
        }

        function commonSend(baseUri, queryStr) {
            var img = new Image();
            img.src = baseUri + '?' + queryStr;
        }

        function longInfoSend(baseUri, queryStr) {
            var iframeName = 'fb' + Math.random().toString().replace('.', '')
                , formEle = document.createElement('form');
            formEle.method = 'post';
            formEle.action = baseUri;
            formEle.target = iframeName;
            formEle.acceptCharset = 'utf-8';
            formEle.style.display = 'none';
            var attachEveOnly = !!(window.attachEvent && !window.addEventListener)
                , iframeTag = attachEveOnly ? '<iframe name="' + iframeName + '">' : 'iframe'
                , iframeEle = document.createElement(iframeTag);
            iframeEle.src = 'javascript:false';    
            iframeEle.id = iframeName;
            iframeEle.name = iframeName;
            formEle.appendChild(iframeEle);
            util.listenOnce(iframeEle, 'load', function () {
                queryStr.each(function (oa, pa) {
                    var inputEle = document.createElement('input');
                    inputEle.name = oa;
                    inputEle.value = pa;
                    formEle.appendChild(inputEle);
                });
                util.listenOnce(iframeEle, 'load', function () {
                    formEle.parentNode.removeChild(formEle);
                });
                formEle.submit();
            });
            document.body.appendChild(formEle);
        }
    })(window, document, location, history);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"2109442","namespace":"FB","message":"' + e.message + '"}}');
}
