if (typeof candid === "undefined") {
    var candid = {
        host: "api.getcandid.com",
        forceSSL: false,
        syncDomain: "",
        lastIndex: -1,
        lastControlId: "",
        widgetIndex: 0,
        data: null,
        callback: null,
        error: null,
        tags: [],
        loadedOptions: [],
        page: 0,
        results: {data: []},
        isWall: false,
        defaultOptions: {
            id: "",
            containerId: "",
            hideIfEmpty: true,
            externalScriptsLoaded: false,
            placeholderId: "",
            placeholderDisplay: "block",
            isotope: {masonry: {isFitWidth: false}},
            controlNav: true,
            customTags: null,
            approvalFilter: "Approved",
            tag: "",
            tagUrl: "",
            tagsCount: "",
            term: "",
            type: "",
            query: "",
            layout: "",
            startDate: "",
            endDate: "",
            ids: "",
            highlight: "",
            source: "",
            host: "api.getcandid.com",
            linkMode: "",
            linksTarget: "_blank",
            linksHeading: "Shop this look",
            loadMoreHtml: "Load More...",
            loadingAnimation: true,
            margin: 0,
            mediaTemplateId: "mediaTemplate",
            width: 256,
            count: 40,
            sort: "",
            cache: true,
            slideshow: true,
            animationLoop: true,
            animationSpeed: 1000,
            slideshowSpeed: 7000,
            frameHeight: 320,
            ignoreExternalCss: false,
            scroll: true,
            proxyUrl: "",
            maxTagsPerRequest: 25,
            overlayPosition: "top",
            fb: false
        },
        /**
         * 相当于Object.assign
         * @returns {*}
         */
        extend: function () {
            for (var b = 1; b < arguments.length; b++) {
                for (var a in arguments[b]) {
                    if (arguments[b].hasOwnProperty(a)) {
                        arguments[0][a] = arguments[b][a]
                    }
                }
            }
            return arguments[0]
        },
        toggleNav: function (ele, h) {
            //禁止触摸？
            if ("ontouchstart" in document.documentElement) {
                return
            }
            var boudingRect = ele.getBoundingClientRect();
            var centerX = boudingRect.left + (boudingRect.right - boudingRect.left) / 2;
            var prevoiusButton = this.e("candid-prev"),
                nextButton = this.e("candid-next");
            if (h.clientY > boudingRect.top + 100) {
                var d = (h.clientX > centerX);
                nextButton.style.visibility = d ? "visible" : "hidden";
                prevoiusButton.style.visibility = d ? "hidden" : "visible"
            }
        },
        pageWall: function (a, b) {
            jQuery(window).data("pageready", false);
            //@TODO c的用处?
            var c = b.host;
            candid.renderWallPage(a, b)
        },
        renderWallPage: function (a, options) {
            var f = [];
            var baseUrl = (options.forceSSL ? "https:" : "") + "//" + options.host;
            var g = jQuery(a);
            var b = g.data("candid-page") == 0 ? options.highlight : "";
            var queryString = "id={{c.id}}&highlight={{b}}&ids={{c.ids}}&startDate={{c.startDate}}&endDate={{c.endDate}}" +
                "&tag={{c.tag}}&term={{c.term}}&type={{c.type}}&query={{c.query}}&page={{g.data('candid-page')}}" +
                "&pageSize={{c.count}}&approvalFilter={{c.approvalFilter}}&sort={{ c.sort}}&cache={{c.cache}}";

            var methodShouldUse = queryString.length >= 2000 ? "POST" : "GET";
            jQuery.ajax({
                url: (methodShouldUse == "POST" ? baseUrl + "/stream/page/?id=" + options.id :
                baseUrl + "/stream/page/?" + queryString),
                type: methodShouldUse,
                cache: true,
                data: (methodShouldUse == "POST" ? queryString : null),
                dataType: "text",
                error: function (err) {
                    if (options.error && typeof(options.error) == "function") {
                        options.error.call(err)
                    }
                },
                success: function (result) {
                    result = JSON.parse(result);
                    if (options.callback && typeof(options.callback) == "function") {
                        options.callback.call(result)
                    }
                    g.data("candid-results").settings = result.Settings;
                    if (null != result && result.Views) {
                        result = result.Views
                    }
                    if (g.data("candid-page") == 0) {
                        g.html("");
                        if (!g.next().hasClass("candid-wall-load-more") && null != result && result.length >= options.count && options.loadMoreHtml != null) {
                            g.after(jQuery("<a class='candid-wall-load-more'>" + options.loadMoreHtml + "</a>").click(function () {
                                candid.pageWall(a, options)
                            }))
                        }
                    }
                    if (null != result && result.length) {
                        g.data("candid-page", g.data("candid-page") + 1);
                        for (var n = 0; n < result.length; n++) {
                            var m = typeof jsviews != "undefined" ? jsviews.render.mediaTemplate({
                                Index: n + g.data("candid-results").data.length,
                                Media: result[n].Media
                            }) : jQuery("#" + options.mediaTemplateId).render({
                                Index: n + g.data("candid-results").data.length,
                                Media: result[n].Media
                            });
                            var k = jQuery(m);
                            g.append(k);
                            if (g.isotope && g.data("isotope")) {
                                g.isotope("appended", k)
                            }
                            k.find("img.lazy").each(function () {
                                jQuery(this).attr("src", jQuery(this).attr("data-original")).removeAttr("original")
                            });
                            if (null != result[n].StreamEntry && null != result[n].StreamEntry.Tags) {
                                for (var l = 0; l < result[n].StreamEntry.Tags.Items.length; l++) {
                                    if (null != result[n].StreamEntry.Tags.Items[l].TagId && f.indexOf(result[n].StreamEntry.Tags.Items[l].TagId) == -1) {
                                        f.push(result[n].StreamEntry.Tags.Items[l].TagId)
                                    }
                                }
                            }
                        }
                        if (g.isotope && g.data("isotope")) {
                            g.isotope("layout");
                            setTimeout(function () {
                                jQuery(window).trigger("scroll")
                            }, 500)
                        }
                        for (n = 0, l = f.length; n < l; n += options.maxTagsPerRequest) {
                            jQuery.ajax({
                                url: baseUrl + "/stream/tags/?id=" + options.id + "&cache=" + options.cache + "&format=json&page=0&filter=" + f.slice(n, n + options.maxTagsPerRequest).join(),
                                cache: true,
                                dataType: "text",
                                success: function (i) {
                                    g.data("candid-tags", g.data("candid-tags").concat(JSON.parse(i)))
                                }
                            })
                        }
                        jQuery.merge(g.data("candid-results").data, result);
                        if (b) {
                            setTimeout(function () {
                                g.find("a.media:first").click()
                            }, 500)
                        }
                    } else {
                        if (null != result && result.length == 0) {
                            jQuery("a.candid-wall-load-more").fadeOut()
                        }
                    }
                    if (options.ready && typeof(options.ready) == "function") {
                        options.ready.call(result)
                    }
                    jQuery(window).data("pageready", true)
                }
            })
        },
        isIE: function () {
            var a = navigator.userAgent.toLowerCase();
            return (a.indexOf("msie") != -1) ? parseInt(a.split("msie")[1]) : false
        },
        wall: function (a, c) {
            var options = this.extend({}, this.defaultOptions, c);
            this.host = options.host;
            if (this.getParameterByName("candid_id")) {
                options.highlight = this.getParameterByName("candid_id")
            }
            candid.isWall = true;
            candid.loadedOptions["candid.wall"] = options;
            candidAnalytics.addEvent("wall-load", {
                StreamId: options.id,
                Url: window.location,
                RawUrl: window.location.toString(),
                Referrer: document.referrer,
                CandidUserId: candid.uniqueUserId(),
                UserAgent: "${keen.user_agent}",
                keen: {
                    addons: [{
                        name: "keen:url_parser",
                        input: {url: "RawUrl"},
                        output: "ParsedUrl"
                    },
                        {
                            name: "keen:ua_parser",
                            input: {ua_string: "UserAgent"},
                            output: "ParsedUserAgent"
                        }
                    ]
                }
            });
            if (!this.e("candid-wall-css")) {
                if (!options.ignoreExternalCss) {
                    jQuery("head").prepend('<link rel="stylesheet" type="text/css"' +
                        ' href="//{{options.host}}/stream/css/?id={{options.id}}&cache={{options.cache}} id="candid-css-overrides">')
                }
                jQuery("head").prepend('<link rel="stylesheet" type="text/css" ' +
                    'href="//{{options.host}}/content/widget.css id="candid-wall-css">');
                jQuery("body").prepend(candid.renderOverlay(options));
                if (options.fb) {
                    jQuery("body").addClass("candid-fb")
                }
                if (jQuery(document).on) {
                    jQuery(document).on("click", "a.media", function () {
                        var f = jQuery(this).closest(".candid-wall-container");
                        candid.mediaClick(this, f.data("candid-results"), f.data("candid-tags"))
                    });
                    jQuery(document).on("click", ".candid-wall-overlay-text", function () {
                        var f = jQuery(this).next("a.media").trigger("click")
                    })
                } else {
                    jQuery("a.media").live("click", function () {
                        var f = jQuery(this).closest(".candid-wall-container");
                        candid.mediaClick(this, f.data("candid-results"), f.data("candid-tags"))
                    });
                    jQuery(".candid-wall-overlay-text").live("click", function () {
                        var f = jQuery(this).next("a.media").trigger("click")
                    })
                }
            }
            var e = function () {
                var f = jQuery(a);
                if (null != jQuery.views) {
                    jQuery.views.helpers({httpsUrl: candid.httpsUrl})
                }
                f.data("candid-results", {
                    streamId: options.id,
                    data: []
                }).data("candid-tags", []).data("candid-page", 0).addClass("candid-wall-container");
                if (options.layout == "isotope") {
                    f.html("");
                    if (f.isotope) {
                        if (f.data("isotope")) {
                            f.isotope("destroy")
                        }
                        f.addClass("candid-wall-isotope").isotope({
                            itemSelector: ".candid-wall-cell",
                            layoutMode: "masonry",
                            masonry: {isFitWidth: options.isotope.masonry.isFitWidth}
                        })
                    }
                }
                jQuery("a.candid-wall-load-more").remove();
                if (options.loadingAnimation) {
                    f.append('<div style="min-height:100px;position:relative;">                                          <ul class="candid-spinner"><li></li><li></li><li></li><li></li></ul>                                        </div>')
                }
                if (typeof jsviews != "undefined") {
                    jsviews.templates({mediaTemplate: document.getElementById(options.mediaTemplateId).innerHTML})
                }
                candid.renderWallPage(a, options)
            };
            if (!candid.externalScriptsLoaded) {
                jQuery.ajax({
                    dataType: "script",
                    url: "//" + options.host + "/scripts/" + (this.isIE() == 8 || this.isIE() == 9 ? "wall.ie.js" : "wall.js"),
                    cache: true,
                    success: function () {
                        candid.externalScriptsLoaded = true;
                        if (jQuery.isReady) {
                            e()
                        } else {
                            jQuery(document).ready(e)
                        }
                    }
                })
            } else {
                e()
            }
            if (null != jQuery(window).data("candid-scroll")) {
                jQuery(window).unbind("scroll", jQuery(window).data("candid-scroll"))
            }
            if (options.scroll) {
                var d = function () {
                    if (jQuery(window).data("pageready") != true) {
                        return
                    }
                    if (jQuery(document).height() == jQuery(window).height()) {
                        return
                    }
                    if (jQuery(window).scrollTop() >= (jQuery(document).height() - jQuery(window).height() - 200)) {
                        candid.pageWall(a, options)
                    }
                };
                jQuery(window).data("candid-scroll", d).scroll(d)
            }
        },
        mediaClick: function (c, b, a) {
            var d = jQuery(c);
            var e = candid.isWall ? window : parent.window;
            e.postMessage(JSON.stringify({
                results: b,
                tags: a,
                controlId: candid.isWall ? "candid.wall" : null,
                index: d.attr("data-media-index")
            }), "*");
            return false
        },
        init: function (b) {
            var a = this.extend({}, this.defaultOptions, b);
            this.host = a.host;
            if (this.getParameterByName("candid_id")) {
                a.highlight = this.getParameterByName("candid_id")
            }
            if (!this.e("candid-css")) {
                candid.appendLink("//" + a.host + "/content/widget.css", "candid-css");
                if (!a.ignoreExternalCss) {
                    candid.appendLink("//" + a.host + "/stream/css/?id=" + a.id + "&cache=" + a.cache, "candid-css-overrides")
                }
            }
            (function (k) {
                var i = a.overlayPosition;
                if (typeof jQuery === "undefined" || i == "inline") {
                    k.write(candid.renderOverlay(a))
                } else {
                    if (i == "top") {
                        jQuery("body").prepend(candid.renderOverlay(a))
                    } else {
                        if (i == "bottom") {
                            jQuery("body").append(candid.renderOverlay(a))
                        }
                    }
                }
                var c = "cw_" + candid.widgetIndex;
                var j = '<iframe id="' + c + '" src="javascript:false;" style="width:100%;border:none;overflow:hidden;height:' + a.frameHeight + 'px;visibility:hidden;" frameBorder="0" scrolling="no"></iframe>';
                if (a.containerId) {
                    k.getElementById(a.containerId).innerHTML = j
                } else {
                    k.write(j)
                }
                candid.loadedOptions[c] = a;
                var g = k.getElementById(c);
                candid.widgetIndex = candid.widgetIndex + 1;
                doc = g.contentWindow.document;
                var f = (a.forceSSL ? "https:" : "") + "//" + a.host + "/stream/frame/?id=" + a.id + "&cId=" + c + "&approvalFilter=" + a.approvalFilter + "&margin=" + a.margin + "&controlNav=" + a.controlNav + "&width=" + a.width + "&count=" + a.count + "&sort=" + a.sort + "&tag=" + a.tag + (a.term ? "&term=" + a.term : "") + (a.notTerm ? "&notTerm=" + a.notTerm : "") + (a.type ? "&type=" + a.type : "") + (a.tagsCount ? "&tagsCount=" + a.tagsCount : "") + (a.tagUrl ? "&tagUrl=" + a.tagUrl : "") + (a.linkMode ? "&linkMode=" + a.linkMode : "") + (a.highlight ? "&highlight=" + a.highlight : "") + (a.source ? "&source=" + a.source : "") + (a.ids ? "&ids=" + a.ids : "") + "&slideshow=" + a.slideshow + "&animationLoop=" + a.animationLoop + "&animationSpeed=" + a.animationSpeed + "&slideshowSpeed=" + a.slideshowSpeed + (a.ignoreExternalCss ? "&ignoreExternalCss=true" : "") + "&cache=" + a.cache;
                if (candid.isIE() > 0 || (!!window.MSInputMethodContext)) {
                    g.contentWindow.location.replace(f)
                } else {
                    doc.open().write("<body onload=\"setTimeout(function() { document.location = '" + f + "'; }, 5);\">");
                    try {
                        doc.close()
                    } catch (h) {
                    }
                }
            })(document)
        },
        appendLink: function (b, c) {
            var a = document.createElement("link");
            a.rel = "stylesheet";
            a.type = "text/css";
            a.href = b;
            a.id = c;
            document.getElementsByTagName("head")[0].appendChild(a)
        },
        renderOverlay: function (a) {
            if (null != this.e("candid-overlay")) {
                return ""
            }
            return '<div id="candid-overlay" style="visibility: hidden;" tabindex="0">                     <div class="wrapper" onmousemove="candid.toggleNav(this, event);">                         <div class="inner">                             <div class="overlay-img-container">                                 <div id="candid-image-overlay" class="candid-image-overlay">                                     <div class="candid-zoom-overlay" id="candid-zoom-overlay"></div>                                     <div class="candid-zoom-overlay-expand"></div>                                     <div class="candid-zoom-overlay-footer" id="candid-zoom-overlay-footer"></div>                                     <div class="candid-zoom-overlay-footer-mobile" id="candid-zoom-overlay-footer-mobile"></div>                                 </div>                                 <div class="candid-zoom-overlay-play" id="candid-zoom-overlay-play"><span class="halflings play"></span></div>                                 <video controls id="candid-overlay-video"></video>                                 <div id="candid-overlay-iframe"></div>                                 <a id="candid-overlay-img-link" target="' + a.linksTarget + '"><img id="candid-overlay-img" /></a>                                 <div id="candid-overlay-img-loader">                                     <ul class="candid-spinner">                                         <li></li>                                         <li></li>                                         <li></li>                                         <li></li>                                     </ul>                                 </div>                             </div>                             <div class="profile-wrap clearfix">                                 <a id="overlay-profile-img-link" target="_blank"><img id="overlay-profile-img" class="user-avatar" src="//api.getcandid.com/images/blank.png"></img></a>                                 <div class="name" id="overlay-profile-img-sub">                                     <h3 class="user-name"><a id="overlay-profile-username" target="_blank"></a></h3>                                     <p class="user-fullname" id="overlay-profile-fullname"></p>                                 </div>                                 <div id="candid-overlay-links">                                     <div class="links-heading" id="candid-overlay-link-heading">' + a.linksHeading + '</div>                                     <div id="candid-overlay-link-items"></div>                                 </div>                                 <div class="gallery-container" id="candid-overlay-gallery-container">                                     <a href="//www.getcandid.com/stream/gallery/?id=' + a.id + '" title="Browse the full collection" target="_blank"></a>                                 </div>                                 <div class="candid-by-container" id="candid-overlay-by-container">                                     <a href="https://www.getcandid.com/products/?utm_source=widget" class="by-logo" target="_blank" title="Community Inspired Commerce | Powered by Candid"></a>                                 </div>                             </div>                         </div>                         <div class="controls">                             <a class="candid-close" onclick="candid.overlay(event);"></a>                             <div style="clear:both">                                 <a class="candid-prev" onclick="candid.prev(event);" id="candid-prev"></a>                                 <a class="candid-next" onclick="candid.next(event);" id="candid-next"></a>                             </div>                         </div>                         <div class="candid-shortcuts">keyboard shortcuts: <span>鈫� previous</span><span>鈫� next</span><span>&#8629; click</span></div>                     </div>                 </div>                 <div id="candid-progress" style="visibility: hidden;">                     <div class="candid-progress-inner">                         <div class="inner">                             <span id="candid-progress-text"></span>                             <form id="candid-uploadfields">                                 <p style="visibility:hidden" id="candid-uploadfields-error">Please enter your name & email</p>                                 <p><input type="text" id="candid-uploadfields-name" placeholder="Name" /></p>                                 <p><input type="email" id="candid-uploadfields-email" placeholder="Email" /></p>                                 <p><input type="submit" value="Pick Files" /></p>                             </form>                             <div id="candid-progress-img-loader">                                 <ul class="candid-spinner">                                     <li></li>                                     <li></li>                                     <li></li>                                     <li></li>                                 </ul>                             </div>                         </div>                         <div class="controls">                             <a class="candid-close" onclick="candid.closeProgress();"></a>                         </div>                     </div>                 </div>'
        },
        closeProgress: function () {
            this.e("candid-progress").style.visibility = "hidden";
            this.e("candid-progress-img-loader").style.visibility = "hidden"
        },
        swipedetect: function (c, m) {
            var l = c, d, h, f, k, j, g = 50, i = 100, b = 300, n, a, e = m || function (o) {
                };
            if (c.hasSwipeDetect) {
                return
            }
            c.hasSwipeDetect = true;
            l.addEventListener("touchstart", function (p) {
                var o = p.changedTouches[0];
                d = "none";
                dist = 0;
                h = o.pageX;
                f = o.pageY;
                a = new Date().getTime()
            }, false);
            l.addEventListener("touchmove", function (o) {
            }, false);
            l.addEventListener("touchend", function (p) {
                var o = p.changedTouches[0];
                k = o.pageX - h;
                j = o.pageY - f;
                n = new Date().getTime() - a;
                if (n <= b) {
                    if (Math.abs(k) >= g && Math.abs(j) <= i) {
                        d = (k < 0) ? "left" : "right"
                    } else {
                        if (Math.abs(j) >= g && Math.abs(k) <= i) {
                            d = (j < 0) ? "up" : "down"
                        }
                    }
                }
                e(d)
            }, false)
        },
        move: function (d, e) {
            var previousBtn = this.e("candid-prev"),
                nextBtn = this.e("candid-next");
            if (d != null) {
                d.stopPropagation();
                d.preventDefault()
            }
            if ("ontouchstart" in document.documentElement) {
                previousBtn.style.visibility = nextBtn.style.visibility = "hidden"
            }
            candid.lastIndex += e;
            var b = candid.data.data.length - 1;
            if (candid.lastIndex > b) {
                candid.lastIndex = 0
            } else {
                if (candid.lastIndex < 0) {
                    candid.lastIndex = b
                }
            }
            this.showMedia(candid.lastIndex, candid.data, candid.lastControlId);
            return false
        },
        next: function (a) {
            return this.move(a, 1)
        },
        prev: function (a) {
            return this.move(a, -1)
        },
        trackClick: function (d, f, a, c, b, e, g) {
            candidAnalytics.trackExternalLink(d, "widget-click", {
                StreamId: f.streamId,
                Media: f.data[c].Media,
                ControlId: candid.lastControlId,
                LoadedOptions: candid.loadedOptions[candid.lastControlId],
                Tag: a,
                Url: window.location,
                RawUrl: window.location.toString(),
                Referrer: document.referrer,
                CandidUserId: candid.uniqueUserId(),
                Origin: b,
                UserAgent: "${keen.user_agent}",
                keen: {
                    addons: [{
                        name: "keen:url_parser",
                        input: {url: "RawUrl"},
                        output: "ParsedUrl"
                    }, {name: "keen:ua_parser", input: {ua_string: "UserAgent"}, output: "ParsedUserAgent"}]
                }
            }, e, g)
        },
        click: function (b, a, c) {
            this.trackClick(b, candid.data, this.getTagById(c), a, "product", 3000, function () {
                return false
            });
            return false
        },
        getTagUrl: function (a, b) {
            if (b.proxyUrl.length) {
                return b.proxyUrl + (b.proxyUrl.indexOf("?") > 0 ? "&" : "?") + "tagUrl=" + encodeURIComponent(a.Url)
            }
            return a.Url
        },
        getMediaUrl: function (a) {
            return encodeURIComponent(this.updateQueryStringParameter(window.location.toString(), "candid_id", a.Media.Id))
        },
        httpsUrl: function (d, b) {
            var c = d.Source != "Pinterest";
            var a = b == "low" ? d.Images.LowResolution.Url : d.Images.StandardResolution.Url;
            return c ? a.replace(/^https?:/i, "") : a
        },
        getShareLink: function (b, a) {
            return "<a target='_blank' title='Share this look on " + b + "' href=\"" + a + "\"><img src='//api.getcandid.com/images/gallery/" + b + "-64.png' /></a>"
        },
        showMedia: function (C, K, s) {
            var p = K.settings != null && K.settings.DisplaySettings != null;
            var f = candid.loadedOptions[s];
            candidAnalytics.addEvent("widget-view", {
                StreamId: K.streamId,
                Media: K.data[C].Media,
                ControlId: s,
                LoadedOptions: f,
                Url: window.location,
                RawUrl: window.location.toString(),
                Referrer: document.referrer,
                CandidUserId: candid.uniqueUserId(),
                UserAgent: "${keen.user_agent}",
                keen: {
                    addons: [{
                        name: "keen:url_parser",
                        input: {url: "RawUrl"},
                        output: "ParsedUrl"
                    }, {name: "keen:ua_parser", input: {ua_string: "UserAgent"}, output: "ParsedUserAgent"}]
                }
            });
            var h = this.e("overlay-profile-username");
            this.setTextContent(h, (K.data[C].Media.Source != "YouTube" ? "@" : "") + K.data[C].Media.User.UserName);
            if (!(p && K.settings.DisplaySettings.DisableContributorLinks)) {
                h.href = K.data[C].Media.User.ProfileUrl
            }
            var B = this.e("overlay-profile-fullname");
            this.setTextContent(B, K.data[C].Media.User.FullName);
            var M = this.e("candid-overlay-img"), k = this.e("candid-overlay-img-link"), D = this.e("candid-overlay-video"), n = this.e("candid-overlay-iframe"), F = this.e("candid-image-overlay"), c = this.e("candid-zoom-overlay"), H = this.e("candid-zoom-overlay-play"), w = this.e("candid-zoom-overlay-footer"), y = this.e("candid-zoom-overlay-footer-mobile"), o = this.e("candid-overlay-img-loader");
            M.markers = null;
            M.src = "//" + candid.host + "/images/blank.png";
            M.style.display = F.style.display = "";
            var x = M.parentNode.getElementsByClassName("candid-marker");
            while (x[0]) {
                x[0].parentNode.removeChild(x[0])
            }
            o.style.visibility = "visible";
            D.style.visibility = "hidden";
            n.style.display = "none";
            n.innerHTML = "";
            D.style.position = "absolute";
            if (typeof(D.pause) != "undefined") {
                D.pause()
            }
            if (K.data[C].Media.Type == "video" && K.data[C].Media.EmbedUrl == null) {
                H.style.display = "block";
                D.setAttribute("src", K.data[C].Media.Videos.StandardResolution.Url)
            } else {
                if (K.data[C].Media.Type == "video" && K.data[C].Media.EmbedUrl != null) {
                    n.innerHTML = "<iframe type='text/html' src='" + K.data[C].Media.EmbedUrl + "' allowfullscreen='true'/>";
                    n.style.display = "";
                    M.style.display = "none"
                } else {
                    H.style.display = "none"
                }
            }
            var u = this.getMediaUrl(K.data[C]);
            c.style.visibility = "inherit";
            c.innerHTML = p && K.settings.DisplaySettings.ShowShareButtons ? "<div class='candid-share'>" + this.getShareLink("Tumblr", "https://tumblr.com/share/photo?clickthru=" + u + "&source=" + K.data[C].Media.Images.StandardResolution.Url + "&caption=" + encodeURIComponent(K.data[C].Media.Caption)) + this.getShareLink("Facebook", "https://www.facebook.com/dialog/feed?app_id=812314252158705&diaply=popup&link=" + u + "&redirect_uri=" + encodeURIComponent("https://www.getcandid.com/?r=" + u) + "&picture=" + K.data[C].Media.Images.StandardResolution.Url + "&caption=" + encodeURIComponent(K.data[C].CaptionHtml)) + this.getShareLink("Pinterest", "https://pinterest.com/pin/create/button/?url=" + u + "&media=" + K.data[C].Media.Images.StandardResolution.Url + "&description=" + encodeURIComponent(K.data[C].Media.Caption)) + this.getShareLink("Twitter", "https://twitter.com/share?url=" + u) + "</div>" : "";
            if (K.data[C].Media.Source == "Twitter") {
                c.innerHTML += '<span class="halflings heart"></span>' + K.data[C].Media.LikesDisplay + ' <span class="halflings retweet" style="padding-right:3px"></span>' + K.data[C].Media.Retweets
            } else {
                if (K.data[C].Media.Source == "Instagram" || K.data[C].Media.Source == "Facebook") {
                    c.innerHTML += '<span class="halflings heart"></span>' + K.data[C].Media.LikesDisplay + ' <span class="halflings comments"></span>' + K.data[C].Media.Comments
                } else {
                    c.style.visibility = "hidden"
                }
            }
            this.preloadImage(K.data[C].Media.Images.StandardResolution.Url, function () {
                M.src = K.data[C].Media.Images.StandardResolution.Url;
                setTimeout(function () {
                    o.style.visibility = "hidden"
                }, 200);
                candid.swipedetect(M, function (j) {
                    if (j == "left") {
                        candid.next(null)
                    }
                    if (j == "right") {
                        candid.prev(null)
                    }
                });
                var a = M.markers;
                if (null != a) {
                    for (var i = 0; i < a.length; i++) {
                        a[i].e.style.left = M.offsetLeft + (a[i].X / 100 * M.clientWidth) + "px";
                        a[i].e.style.top = M.offsetTop + (a[i].Y / 100 * M.clientHeight) + "px"
                    }
                }
            });
            H.onclick = function () {
                D.style.visibility = "visible";
                D.style.position = "relative";
                D.addEventListener("pause", function () {
                    M.style.display = F.style.display = "";
                    if (D.style.visibility == "visible") {
                        H.style.display = "block";
                        D.style.visibility = "hidden";
                        D.style.position = "absolute"
                    }
                }, false);
                M.style.display = F.style.display = H.style.display = "none";
                D.play();
                return false
            };
            M.onclick = function () {
                if (K.data[C].Media.Type == "video") {
                    return H.onclick()
                }
            };
            k.onclick = null;
            k.removeAttribute("href");
            var E = this.e("overlay-profile-img"), A = this.e("overlay-profile-img-link"), I = this.e("overlay-profile-img-sub");
            E.src = "//" + candid.host + "/images/blank.png";
            if (K.data[C].Media.Source != "DirectUpload") {
                A.style.visibility = I.style.visibility = "";
                E.src = "//" + candid.host + "/image/h/" + K.data[C].Media.User.ProfilePicture.replace(/^https?:\/\//i, "");
                E.onerror = function () {
                    this.src = "//" + candid.host + "/images/no-profile-image.jpg"
                };
                A.title = "Photo courtesy of @" + K.data[C].Media.User.UserName + " on " + K.data[C].Media.Source;
                if (!(p && K.settings.DisplaySettings.DisableContributorLinks)) {
                    A.href = K.data[C].Media.User.ProfileUrl
                } else {
                    A.style.cursor = "default"
                }
            } else {
                A.style.visibility = I.style.visibility = "hidden"
            }
            if (p) {
                var e = this.e("candid-overlay-by-container"), b = this.e("candid-overlay-gallery-container");
                if (K.settings.DisplaySettings.OverlayLogoType == "minimal" || K.settings.DisplaySettings.OverlayLogoType == "whitelabel") {
                    if (K.settings.DisplaySettings.OverlayLogoType == "minimal") {
                        e.innerHTML = "<img src='//" + candid.host + "/images/logo-128.png' style='margin:10px;float:right;' title='Powered by www.candid.io'></img>"
                    } else {
                        if (K.settings.DisplaySettings.OverlayLogoType == "whitelabel") {
                            e.innerHTML = "<div style='float:right;margin:5px'></div>"
                        }
                    }
                    if (K.settings.DisplaySettings.OverlayCobrandLogoUrl != null) {
                        e.innerHTML += "<img src='//" + candid.host + K.settings.DisplaySettings.OverlayCobrandLogoUrl + "' style='margin:10px 0 10px 0;float:right;'></img>"
                    }
                    b.style.display = "none"
                } else {
                    if (K.settings.DisplaySettings.OverlayLogoType == "text") {
                        e.innerHTML = '<a href="https://www.getcandid.com/products/?utm_source=widget" class="by-logo-text" target="_blank" title="Community Inspired Commerce">Powered by Candid</a>'
                    }
                }
            }
            var d = this.e("candid-overlay-links");
            var g = this.e("candid-overlay-link-heading");
            var v = this.e("candid-overlay-link-items");
            d.style.visibility = "visible";
            w.innerHTML = '<img src="//' + candid.host + '/images/by-candid-w-115.png"> + <img src="//' + candid.host + "/images/gallery/" + K.data[C].Media.Source + '-64.png" width="32" height="32" />';
            y.innerHTML = "";
            v.innerHTML = null != K.data[C].CaptionHtml ? '<p class="candid-caption">' + K.data[C].CaptionHtml + "</p>" : "";
            if (null != g) {
                this.setTextContent(g, "");
                g.style.display = "none"
            }
            if (null != K.data[C].StreamEntry && null != K.data[C].StreamEntry.Tags) {
                var l = 0;
                for (var z = 0; z < K.data[C].StreamEntry.Tags.Items.length; z++) {
                    if (null != K.data[C].StreamEntry.Tags.Items[z].TagId) {
                        var L = this.getTag(K.data[C].StreamEntry.Tags.Items[z].TagId);
                        var q = K.data[C].StreamEntry.Tags.Items[z];
                        if (null != L && L.Type != "Placement" && (l < 3 || l < 6 && (q.X > 0 || q.Y > 0))) {
                            (function (a, j) {
                                k.setAttribute("href", a.Url);
                                k.onclick = function () {
                                    candid.trackClick(k, K, a, j, "image", 3000, function () {
                                        return false
                                    })
                                }
                            })(L, C);
                            if (L.Description != null && L.Description.length && !(L.UseCaption && this.isApproved(L, K.data[C].Media.User.UserName))) {
                                w.innerHTML = "";
                                this.setTextContent(w, L.Description)
                            } else {
                                if (K.data[C].CaptionHtml != null) {
                                    w.innerHTML = K.data[C].CaptionHtml
                                }
                            }
                            if (null != K.data[C].Media.User.ProfilePicture) {
                                y.innerHTML = '<img class="user-avatar" src=' + K.data[C].Media.User.ProfilePicture + ' onerror="this.parentNode.removeChild(this);"></img>'
                            }
                            d.style.visibility = "visible";
                            if (l == 0) {
                                v.innerHTML = ""
                            }
                            if (null == L.ImageUrl) {
                                v.insertAdjacentHTML("beforeend", '<div class="item"><a onclick="candid.click(this, ' + C + ",'" + L.Id + '\');" class="product-btn candid-btn" target="' + f.linksTarget + '" href="' + candid.getTagUrl(L, f) + '">' + L.DisplayText + "</a></div>")
                            } else {
                                v.insertAdjacentHTML("beforeend", '<div class="item"><a onclick="candid.click(this, ' + C + ",'" + L.Id + '\');" class="candid-image-btn" target="' + f.linksTarget + '" href="' + candid.getTagUrl(L, f) + '"><img id="product-image' + z + '" onmouseover="candid.marker(this,1)" onmouseout="candid.marker(this,0)" src="//' + candid.host + '/images/blank.png" data-cm="candid-marker-' + (l + 1) + '"></img>                                                     <ul class="candid-spinner">                                                         <li></li>                                                         <li></li>                                                         <li></li>                                                         <li></li>                                                     </ul>                                                     </a><a onclick="candid.click(this, ' + C + ",'" + L.Id + '\');" class="product-label" target="' + f.linksTarget + '" href="' + candid.getTagUrl(L, f) + '" onmouseover="candid.marker(this,1)" onmouseout="candid.marker(this,0)" data-cm="candid-marker-' + (l + 1) + '"><label class="candid-marker">' + (l + 1) + "</label>" + L.DisplayText + "</a></div>");
                                var G = "//" + candid.host + "/image/h/" + encodeURIComponent(L.ImageUrl.replace(/^https?:\/\//i, "")) + "?maxWidth=500";
                                this.preloadImage(G, (function (a, i) {
                                    return function () {
                                        a.src = i;
                                        a.parentNode.getElementsByClassName("candid-spinner")[0].style.visibility = "hidden"
                                    }
                                })(candid.e("product-image" + z), G), (function (a) {
                                    return function () {
                                        a.src = "//" + f.host + "/stream/placeholder/?id=" + f.id + "&cache=" + f.cache;
                                        a.parentNode.getElementsByClassName("candid-spinner")[0].style.visibility = "hidden"
                                    }
                                })(candid.e("product-image" + z)));
                                if (q.X > 0 || q.Y > 0) {
                                    var J = document.createElement("a");
                                    J.className = "candid-marker";
                                    J.href = candid.getTagUrl(L, f);
                                    J.target = "_blank";
                                    J.setAttribute("data-pi", "product-image" + z);
                                    J.onmouseover = function () {
                                        candid.marker(this, 1)
                                    };
                                    J.onmouseout = function () {
                                        candid.marker(this, 0)
                                    };
                                    J.onclick = function (j, a) {
                                        return function () {
                                            candid.click(this, j, a.Id)
                                        }
                                    }(C, L);
                                    J.id = "candid-marker-" + (l + 1);
                                    J.style.left = M.offsetLeft + (q.X / 100 * M.clientWidth) + "px";
                                    J.style.top = M.offsetTop + (q.Y / 100 * M.clientHeight) + "px";
                                    J.innerHTML = (l + 1);
                                    M.parentElement.appendChild(J);
                                    if (M.clientWidth <= 1) {
                                        if (null == M.markers) {
                                            M.markers = []
                                        }
                                        M.markers.push({e: J, X: q.X, Y: q.Y})
                                    }
                                }
                            }
                            if (null != g && l == 0) {
                                g.style.display = "";
                                g.classList.add("candid-fadeInLeft");
                                this.setTextContent(g, null != L.Headline && L.Headline.length ? L.Headline : f.linksHeading);
                                setTimeout(function () {
                                    g.classList.remove("candid-fadeInLeft")
                                }, 3000)
                            }
                            l++
                        }
                    }
                }
                v.className = v.className.replace(/ candid-items\d/g, "");
                v.className += " candid-items" + l;
                g.className = g.className.replace(/ candid-items\d/g, "");
                g.className += " candid-items" + l
            }
        },
        marker: function (d, b) {
            var c = d.getAttribute("data-pi");
            if (null != c) {
                candid.e(c).className = b ? candid.e(c).className + " hover" : candid.e(c).className.replace(/ hover$/g, "")
            } else {
                var a = candid.e(d.getAttribute("data-cm"));
                if (null != a) {
                    a.className = b ? "candid-marker candid-active" : "candid-marker"
                }
            }
        },
        getTag: function (b) {
            var c = this.shuffleArray(this.tags.slice(0));
            if (c.length) {
                for (var a = 0; a < c.length; a++) {
                    if (c[a].TagId == b) {
                        return c[a]
                    }
                }
            }
            return null
        },
        isApproved: function (a, c) {
            for (var b = 0; b < a.ApprovedAccounts.length; b++) {
                if (a.ApprovedAccounts[b].UserName == c) {
                    return true
                }
            }
            return false
        },
        getTagById: function (b) {
            for (var a = 0; a < this.tags.length; a++) {
                if (this.tags[a].Id == b) {
                    return this.tags[a]
                }
            }
            return null
        },
        shuffleArray: function (g) {
            for (var h = g.length - 1; h > 0; h--) {
                var e = Math.floor(Math.random() * (h + 1));
                var f = g[h];
                g[h] = g[e];
                g[e] = f
            }
            return g
        },
        setTextContent: function (a, b) {
            if (null != a) {
                while (a.firstChild !== null) {
                    a.removeChild(a.firstChild)
                }
                a.appendChild(document.createTextNode(b))
            }
        },
        e: function (id) {
            return document.getElementById(id)
        },
        overlay: function (h) {
            if (null != h) {
                h.stopPropagation();
                h.preventDefault()
            }
            var i = this.e;
            var g = i("candid-prev"), d = i("candid-next"), b = i("candid-overlay-links"), f = i("candid-overlay-video"), c = i("candid-overlay-iframe"), a = i("candid-overlay-img-loader");
            g.style.visibility = d.style.visibility = b.style.visibility = f.style.visibility = a.style.visibility = "hidden";
            c.style.display = "none";
            c.innerHTML = "";
            if (typeof(f.pause) != "undefined") {
                f.pause()
            }
            el = i("candid-overlay");
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            if (el.style.visibility == "visible") {
                el.focus();
                i("candid-overlay").onkeydown = function (k) {
                    if (this.style.visibility == "visible") {
                        switch (k.keyCode) {
                            case 13:
                                var j = document.getElementById("candid-overlay-img-link");
                                if (null != j) {
                                    j.click()
                                }
                                break;
                            case 27:
                                candid.overlay(k);
                                break;
                            case 37:
                            case 38:
                                candid.prev(k);
                                break;
                            case 39:
                            case 40:
                                candid.next(k);
                                break
                        }
                    }
                }
            }
            if (el.style.visibility == "visible") {
                d.style.visibility = "visible"
            }
        },
        message: function (b) {
            var g = null;
            try {
                g = JSON.parse(b.data)
            } catch (b) {
            }
            if (null != g) {
                if (g.results != null && g.results.streamId != null) {
                    candid.lastIndex = parseInt(g.index);
                    candid.data = g.results;
                    candid.tags = g.tags;
                    candid.lastControlId = g.controlId;
                    var j = candid.loadedOptions[candid.lastControlId];
                    if (null != j && null != j.customTags && j.customTags.length) {
                        candid.tags = j.customTags;
                        var d = [];
                        for (var a = 0; a < j.customTags.length; a++) {
                            if (d.indexOf(j.customTags[a].TagId) == -1) {
                                d.push(j.customTags[a].TagId)
                            }
                        }
                        var k = {Items: [], Count: d.length};
                        for (var a = 0; a < d.length; a++) {
                            k.Items.push({TagId: d[a]})
                        }
                        for (var a = 0; a < candid.data.data.length; a++) {
                            candid.data.data[a].StreamEntry.Tags = k
                        }
                    }
                    if (g.linkMode == "direct") {
                        var h = candid.data.data[candid.lastIndex].StreamEntry;
                        if (null != h && null != h.Tags) {
                            var l = candid.getTag(h.Tags.Items[0].TagId);
                            if (null != l) {
                                candid.trackClick(b, candid.data, l, candid.lastIndex, "product", 3000, function () {
                                    document.location = l.Url
                                })
                            }
                        }
                    } else {
                        candid.overlay();
                        candid.showMedia(candid.lastIndex, candid.data, candid.lastControlId)
                    }
                } else {
                    if (g.event == "onload" && g.controlId.length) {
                        if (!g.disableLoadTracking) {
                            candidAnalytics.addEvent("widget-load", {
                                StreamId: g.streamId,
                                Url: window.location,
                                RawUrl: window.location.toString(),
                                Referrer: document.referrer,
                                CandidUserId: candid.uniqueUserId(),
                                UserAgent: "${keen.user_agent}",
                                keen: {
                                    addons: [{
                                        name: "keen:url_parser",
                                        input: {url: "RawUrl"},
                                        output: "ParsedUrl"
                                    }, {
                                        name: "keen:ua_parser",
                                        input: {ua_string: "UserAgent"},
                                        output: "ParsedUserAgent"
                                    }]
                                }
                            })
                        }
                        candid.e(g.controlId).style.visibility = "visible"
                    } else {
                        if (g.event == "results-ready") {
                            if (g.height >= 100 && g.height < candid.loadedOptions[g.controlId].frameHeight) {
                                candid.e(g.controlId).style.height = g.height + "px"
                            }
                        } else {
                            if (g.event == "no-results") {
                                var j = candid.loadedOptions[g.controlId];
                                var f = candid.e(g.controlId);
                                if (j.placeholderId.length) {
                                    f.style.display = "none";
                                    candid.e(j.placeholderId).style.display = j.placeholderDisplay
                                } else {
                                    if (j.hideIfEmpty) {
                                        f.style.display = "none"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        /**
         * 预加载图片
         * @param src
         * @param onload
         * @param onerror
         */
        preloadImage: function (src, onload, onerror) {
            var img = new Image();
            img.src = src;
            if (img.complete) {
                onload();
                img.onload = function () {
                }
            } else {
                img.onload = function () {
                    onload();
                    img.onload = function () {
                    }
                };
                if (typeof onerror != "undefined") {
                    img.onerror = function () {
                        onerror();
                        img.onerror = function () {
                        }
                    }
                }
            }
        },
        upload: function (c, a, b) {
            this.setTextContent(this.e("candid-progress-text"), "Upload Your Photos");
            this.e("candid-progress-img-loader").style.visibility = "hidden";
            this.e("candid-uploadfields").style.display = "";
            this.e("candid-progress").style.visibility = "visible";
            this.e("candid-uploadfields-name").focus();
            this.e("candid-uploadfields").onsubmit = function () {
                var e = candid.e("candid-uploadfields-name").value;
                var d = candid.e("candid-uploadfields-email").value;
                if (e.length && d.length) {
                    candid.e("candid-uploadfields-error").style.visibility = "hidden";
                    candid.e("candid-uploadfields").style.display = "none";
                    candid.e("candid-progress").style.visibility = "hidden";
                    candid.processupload(c, a, b, {Name: e, Email: d})
                } else {
                    candid.e("candid-uploadfields-error").style.visibility = "inherit"
                }
                return false
            }
        },
        processupload: function (d, a, b, c) {
            filepicker.setKey("AI19m1ivyRliTpxJfrtpHz");
            filepicker.pickAndStore({
                    multiple: true,
                    maxFiles: 10,
                    mimetype: "image/*"
                },
                {
                    path: d + "/"
                },
                function (e) {
                    candid.setTextContent(candid.e("candid-progress-text"), "Processing uploads...");
                    candid.e("candid-progress").style.visibility = "visible";
                    candid.e("candid-progress-img-loader").style.visibility = "visible";
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        (function (h) {
                            filepicker.convert(h, {
                                    width: 640,
                                    height: 640,
                                    rotate: "exif"
                                },
                                {
                                    path: d + "/"
                                },
                                function (i) {
                                    filepicker.convert(h, {
                                            width: 306,
                                            height: 306,
                                            rotate: "exif"
                                        },
                                        {path: d + "/"},
                                        function (j) {
                                            filepicker.convert(h,
                                                {
                                                    width: 150,
                                                    height: 150,
                                                    rotate: "exif"
                                                },
                                                {path: d + "/"},
                                                function (k) {
                                                    var l = {
                                                        Tags: a,
                                                        User: {Username: c.Name, Email: c.Email},
                                                        Images: {
                                                            StandardResolution: {Url: i.url, Width: 640, Height: 640},
                                                            LowResolution: {Url: j.url, Width: 306, Height: 306},
                                                            Thumbnail: {Url: k.url, Width: 150, Height: 150}
                                                        }
                                                    };
                                                    jQuery.ajax({
                                                        type: "POST",
                                                        url: "//" + b + "/stream/uploadimage/?streamId=" + d,
                                                        dataType: "json",
                                                        contentType: "application/json; charset=utf-8",
                                                        cache: false,
                                                        timeout: 5000,
                                                        data: JSON.stringify(l),
                                                        success: function (m) {
                                                            if (m.Error == 0) {
                                                                candid.setTextContent(candid.e("candid-progress-text"), "Thank you! Your upload has been submitted.");
                                                                candid.e("candid-progress-img-loader").style.visibility = "hidden"
                                                            } else {
                                                                alert(JSON.stringify(m))
                                                            }
                                                            setTimeout(function () {
                                                                candid.closeProgress()
                                                            }, 2000)
                                                        },
                                                        error: function (o, p, n) {
                                                            candid.setTextContent(candid.e("candid-progress-text"), "Upload failed. Ensure this domain is registered as a safe upload domain.");
                                                            candid.e("candid-progress-img-loader").style.visibility = "hidden"
                                                        }
                                                    })
                                                })
                                        })
                                })
                        })(g)
                    }
                })
        },

        trackVote: function (streamId, c, a, debugMod) {
            candidAnalytics.addEvent("widget-vote", {
                StreamId: streamId,
                Media: c.data[a].Media,
                Url: window.location,
                RawUrl: window.location.toString(),
                Referrer: document.referrer,
                CandidUserId: candid.uniqueUserId(),
                UserAgent: "${keen.user_agent}",
                keen: {
                    addons: [{
                        name: "keen:url_parser",
                        input: {url: "RawUrl"},
                        output: "ParsedUrl"
                    }, {name: "keen:ua_parser", input: {ua_string: "UserAgent"}, output: "ParsedUserAgent"}]
                }
            });
            if (debugMod) {
                alert(debugMod)
            }
        },
        /**
         * 利用Keen追踪转化率
         * 主要是在结算的时候调用
         * @param conversionName
         * @param conversionId
         * @param description
         * @param price
         * @param quantity
         * @param transactionId
         * @param domainStreamId
         */
        trackConversion: function (conversionName, conversionId, description, price, quantity, transactionId, domainStreamId) {
            candidAnalytics.addEvent("widget-conversion", {
                ConversionName: conversionName,
                ConversionId: conversionId,
                Description: description,
                Price: parseFloat(price),
                Quantity: parseFloat(quantity),
                Total: parseFloat(price) * parseFloat(quantity),
                TransactionId: transactionId,
                Url: window.location,
                RawUrl: window.location.toString(),
                Referrer: document.referrer,
                CandidUserId: this.uniqueUserId(),
                DomainUserId: domainStreamId != null ? domainStreamId.domainUserId : null,
                StreamId: domainStreamId != null ? domainStreamId.streamId : null,
                UserAgent: "${keen.user_agent}",
                keen: {
                    addons: [{
                        name: "keen:url_parser",
                        input: {url: "RawUrl"},
                        output: "ParsedUrl"
                    }, {name: "keen:ua_parser", input: {ua_string: "UserAgent"}, output: "ParsedUserAgent"}]
                }
            })
        },
        /**
         * 保证candid的唯一性和正确性
         * 需要有一个同步服务器
         * @param hostName
         * @param setVal
         * @param callback
         */
        syncUserId: function (hostName, setVal, callback) {
            candid.jsonp("//" + hostName + "/analytics/id/" + (setVal != null ? "?set=" + setVal : ""), function (result) {
                if (result.candid_userid) {
                    candid.resetCookie("candid_userid", result.candid_userid)
                } else {
                    if (result.status == "ok") {
                        candid.resetCookie("candid_sync", "1")
                    }
                }
                if (null != callback) {
                    callback(result)
                }
            })
        },
        /**
         * 带有引用解除的jsonp
         * @param src
         * @param callback
         */
        jsonp: function (src, callback) {
            var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
            window[callbackName] = function (args) {
                delete window[callbackName];
                document.body.removeChild(ele);
                callback(args)
            };
            var ele = document.createElement("script");
            ele.src = src + (src.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
            document.body.appendChild(ele)
        },
        /**
         * 在cookie中设置一个userId
         * 并返回
         * 如果有同步服务器则之后会用jsonp的方式与服务器同步
         * 作用应该是去重
         * @returns {*}
         */
        uniqueUserId: function () {
            var candidUserId = this.getCookie("candid_userid");
            var uId = candidUserId;
            var uIdRegex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            if (!candidUserId || !uIdRegex.test(candidUserId)) {
                var uIdInUrl = this.getParameterByName("candid_userid");
                uId = (uIdInUrl != null && uIdInUrl.length && uIdRegex.test(uIdInUrl)) ? uIdInUrl : this.newId();
            }
            if (this.syncDomain && !this.getCookie("candid_sync")) {
                this.syncUserId(this.syncDomain, uId)
            }
            this.resetCookie("candid_userid", uId);
            return uId
        },
        /**
         * 设置成无主域domain
         * 不过判断比较奇葩
         * a.host.name就不变
         * 而 www.host.name就会变成host.name
         * @returns {string}
         */
        getTopLevelDomain: function () {
            var hostName = window.location.hostname,
                firstDomain = hostName.split(".");
            return firstDomain.length > 2 ? hostName.replace(firstDomain[0], "") : hostName
        },
        /**
         * 重置cookie
         * @param key
         * @param value
         */
        resetCookie: function (key, value) {
            this.setCookie(key, value, -1, "", "");
            this.setCookie(key, value, 365, "/", this.getTopLevelDomain())
        },
        /**
         * get value from queryString
         * @param b
         * @returns {Array|{index: number, input: string}|string}
         */
        getParameterByName: function (b) {
            var a = RegExp("[?&]" + b + "=([^&]*)").exec(window.location.search);
            return a && decodeURIComponent(a[1].replace(/\+/g, " "))
        },
        /**
         * change a value of query string
         * @param linkUrl
         * @param key
         * @param value
         * @returns {*}
         */
        updateQueryStringParameter: function (linkUrl, key, value) {
            var keyReg = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
            var linkSymbol = linkUrl.indexOf("?") !== -1 ? "&" : "?";
            if (linkUrl.match(keyReg)) {
                return linkUrl.replace(keyReg, "$1" + key + "=" + value + "$2")
            } else {
                return linkUrl.replace(location.hash, "") + linkSymbol + key + "=" + value + location.hash
            }
        },
        /**
         * get value from cookie
         * 没考虑同名cookie冲突的问题
         * @param key
         * @returns {*}
         */
        getCookie: function (key) {
            var keySymbol = key + "=";
            var cookieArray = document.cookie.split(";");
            for (var index = 0; index < cookieArray.length; index++) {
                var cookieRawValue = cookieArray[index];
                while (cookieRawValue.charAt(0) == " ") {
                    cookieRawValue = cookieRawValue.substring(1)
                }
                if (cookieRawValue.indexOf(keySymbol) != -1) {
                    return cookieRawValue.substring(keySymbol.length, cookieRawValue.length)
                }
            }
            return ""
        },
        /**
         * 设定cookie
         * @param key
         * @param value
         * @param liveDays
         * @param path
         * @param domain
         */
        setCookie: function (key, value, liveDays, path, domain) {
            var expiresTime = new Date();
            expiresTime.setTime(expiresTime.getTime() + (liveDays * 24 * 60 * 60 * 1000));
            document.cookie = key + "=" + value + "; expires=" + expiresTime.toGMTString() +
                "; path=" + path + "; domain=" + domain + ";"
        },
        /**
         * 生成特定格式的Id
         * @returns {string}
         */
        newId: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (d) {
                var b = Math.random() * 16 | 0, a = d == "x" ? b : (b & 3 | 8);
                return a.toString(16)
            })
        },
        /**
         * 支付追踪
         * @param goodsList
         * @param domainStreamId
         */
        trackPurchase: function (goodsList, domainStreamId) {
            var transactionId = this.newId();
            if (null != goodsList && goodsList.length) {
                for (var i = 0; i < goodsList.length; i++) {
                    this.trackConversion("purchase", goodsList[i].id, goodsList[i].description, goodsList[i].price, goodsList[i].quantity, transactionId, domainStreamId)
                }
            }
        }
    };
    (function () {
        candid.uniqueUserId();
        if (!document.getElementsByClassName) {
            getElementsByClassName = function (className, ele) {
                var result = document.querySelectorAll ? ele.querySelectorAll("." + className) : (function () {
                    var e = ele.getElementsByTagName("*"), f = [], d = 0;
                    for (; d < e.length; d++) {
                        if (e[d].className && (" " + e[d].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(f, e[d]) === -1) {
                            f.push(e[d])
                        }
                    }
                    return f
                })();
                return result
            };
            document.getElementsByClassName = function (a) {
                return getElementsByClassName(a, document)
            };
            Element.prototype.getElementsByClassName = function (a) {
                return getElementsByClassName(a, this)
            }
        }
    })();
    if (window.addEventListener) {
        window.addEventListener("message", candid.message, false)
    } else {
        window.attachEvent("onmessage", candid.message)
    }
    document.getElementsByAttribute = Element.prototype.getElementsByAttribute = function (attrName) {
        var allTags = this.getElementsByTagName("*");
        var resultArr = [];
        for (var i = 0, ele; ele = allTags[i]; i++) {
            if (ele.getAttribute(attrName)) {
                resultArr.push(ele)
            }
        }
        return resultArr
    };
    !function (keenSymbol, window) {
        if (undefined === window[keenSymbol]) {
            window["_" + keenSymbol] = {};
            window[keenSymbol] = function (a) {
                window["_" + keenSymbol].clients = window["_" + keenSymbol].clients || {},
                    window["_" + keenSymbol].clients[a.projectId] = this,
                    this._config = a
            };
            window[keenSymbol].ready = function (a) {
                window["_" + keenSymbol].ready = window["_" + keenSymbol].ready || [], window["_" + keenSymbol].ready.push(a);
            };
            for (var methodList = ["addEvent", "setGlobalProperties", "trackExternalLink", "on"], index = 0; index < methodList.length; index++) {
                var method = methodList[index],
                //这个函数可以拿出去……
                    wrappedMethod = function (methodName) {
                        return function () {
                            return this["_" + methodName] = this["_" + methodName] || [], this["_" + methodName].push(arguments), this
                        }
                    };
                window[keenSymbol].prototype[method] = wrappedMethod(method)
            }
            var scriptEle = document.createElement("script");
            scriptEle.type = "text/javascript";
            scriptEle.async = true;
            scriptEle.src = "https://content-getcandid.netdna-ssl.com/scripts/keen-tracker.3.0.7.min.js";
            var firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(scriptEle, firstScript)
        }
    }("Keen", window);
    //@TODO
    var candidAnalytics = new Keen({
        projectId: "529cd27100111c5d4c000001",
        writeKey: "7bbffa5e8dcf2817c4bc89e537d2666f87d4ea1f14ad3c749e6ce5210b7dfaec4f4a70a66784c4605be76d36fc731f3f6d773d37233ab1026e70d9b832cf894ba5aca490e4ac3e521e42f2c371a5d3277f88850a19f36025f8486281a8dde11a97222514b9c990fac123c9bab661cd71",
        requestType: "beacon"
    });
    !function (document) {
        if (window.filepicker) {
            return
        }
        var scriptEle = document.createElement("script");
        scriptEle.type = "text/javascript";
        scriptEle.async = true;
        scriptEle.src = ("https:" === document.location.protocol ? "https:" : "http:") + "//api.filepicker.io/v2/filepicker.js";
        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(scriptEle, firstScript);
        var filePicker = {};
        filePicker._queue = [];
        var methodList = ["pick",
            "pickMultiple",
            "pickAndStore",
            "read",
            "write",
            "writeUrl",
            "export",
            "convert",
            "store",
            "storeUrl",
            "remove",
            "stat",
            "setKey",
            "constructWidget",
            "makeDropPane"];
        var k = function (d, queue) {
            return function () {
                queue.push([d, arguments])
            }
        };
        for (var j = 0; j < methodList.length; j++) {
            filePicker[methodList[j]] = k(methodList[j], filePicker._queue)
        }
        window.filepicker = filePicker
    }(document);
};