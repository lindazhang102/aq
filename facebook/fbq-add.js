!function (window, document, tagName, src, fbqShort, scriptEle, firstScript) {
    if (window.fbq)return;
    fbqShort = window.fbq = function () {
        fbqShort.callMethod ?
            fbqShort.callMethod.apply(fbqShort, arguments) : fbqShort.queue.push(arguments)
    };
    if (!window._fbq)window._fbq = fbqShort;
    fbqShort.push = fbqShort;
    fbqShort.loaded = !0;
    fbqShort.version = '2.0';
    fbqShort.queue = [];
    scriptEle = document.createElement(tagName);
    scriptEle.async = !0;
    scriptEle.src = src;
    firstScript = document.getElementsByTagName(tagName)[0];
    firstScript.parentNode.insertBefore(scriptEle, firstScript)
}(window,
    document, 'script', '//connect.facebook.net/en_US/fbevents.js');
// Insert Your Custom Audience Pixel ID below.
fbq('init', '<FB_PIXEL_ID>');
fbq('track', 'PageView');
