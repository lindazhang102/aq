/**
 * Created by Administrator on 2015/12/31.
 */

(function (global, document, scriptSymbol, gaSrc, gaName, ele, m) {
    global['GoogleAnalyticsObject'] = gaName;
    global[gaName] = global[gaName] || function () {
            (global[gaName].q = global[gaName].q || []).push(arguments)
        }, global[gaName].l = 1 * new Date();
    ele = document.createElement(scriptSymbol),
        m = document.getElementsByTagName(scriptSymbol)[0];
    ele.async = 1;
    ele.src = gaSrc;
    m.parentNode.insertBefore(ele, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-71840173-1', 'auto');
ga('send', 'pageview');
