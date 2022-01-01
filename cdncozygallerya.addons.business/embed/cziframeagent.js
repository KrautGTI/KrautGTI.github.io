"use strict";
var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
        }
        return e
    },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

function _instanceof(e, t) {
    return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t
}

function _classCallCheck(e, t) {
    if (!_instanceof(e, t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function() {
    function e(e, t, n) {
        var a = t._settings;
        !n && r(e) || (z(a.callback_enter, e), L.indexOf(e.tagName) > -1 && (E(e, t), w(e, a.class_loading)), p(e, t), o(e), z(a.callback_set, e))
    }
    var t = {
            elements_selector: "img",
            container: document,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_enter: null,
            callback_finish: null,
            to_webp: !1
        },
        n = function(e) {
            return _extends({}, t, e)
        },
        a = function(e, t) {
            return e.getAttribute("data-" + t)
        },
        i = function(e, t, n) {
            var a = "data-" + t;
            null !== n ? e.setAttribute(a, n) : e.removeAttribute(a)
        },
        o = function(e) {
            return i(e, "was-processed", "true")
        },
        r = function(e) {
            return "true" === a(e, "was-processed")
        },
        l = function(e, t) {
            return i(e, "ll-timeout", t)
        },
        s = function(e) {
            return a(e, "ll-timeout")
        },
        c = function(e, t) {
            var n, a = new e(t);
            try {
                n = new CustomEvent("LazyLoad::Initialized", {
                    detail: {
                        instance: a
                    }
                })
            } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                    instance: a
                })
            }
            window.dispatchEvent(n)
        },
        d = function(e, t) {
            return t ? e.replace(/\.(jpe?g|png)/gi, ".webp") : e
        },
        u = "undefined" != typeof window,
        f = u && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        h = u && "IntersectionObserver" in window,
        m = u && "classList" in document.createElement("p"),
        g = u && function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        y = function(e, t, n, i) {
            for (var o, r = 0; o = e.children[r]; r += 1)
                if ("SOURCE" === o.tagName) {
                    var l = a(o, n);
                    _(o, t, l, i)
                }
        },
        _ = function(e, t, n, a) {
            n && e.setAttribute(t, d(n, a))
        },
        b = function(e, t) {
            var n = g && t.to_webp,
                i = a(e, t.data_src),
                o = a(e, t.data_bg);
            if (i) {
                var r = d(i, n);
                e.style.backgroundImage = 'url("' + r + '")'
            }
            if (o) {
                var l = d(o, n);
                e.style.backgroundImage = l
            }
        },
        v = {
            IMG: function(e, t) {
                var n = g && t.to_webp,
                    i = t.data_srcset,
                    o = e.parentNode;
                o && "PICTURE" === o.tagName && y(o, "srcset", i, n);
                var r = a(e, t.data_sizes);
                _(e, "sizes", r);
                var l = a(e, i);
                _(e, "srcset", l, n);
                var s = a(e, t.data_src);
                _(e, "src", s, n)
            },
            IFRAME: function(e, t) {
                var n = a(e, t.data_src);
                _(e, "src", n)
            },
            VIDEO: function(e, t) {
                var n = t.data_src,
                    i = a(e, n);
                y(e, "src", n), _(e, "src", i), e.load()
            }
        },
        p = function(e, t) {
            var n = t._settings,
                a = e.tagName,
                i = v[a];
            if (i) return i(e, n), t._updateLoadingCount(1), void(t._elements = function(e, t) {
                return e.filter(function(e) {
                    return e !== t
                })
            }(t._elements, e));
            b(e, n)
        },
        w = function(e, t) {
            m ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        },
        z = function(e, t) {
            e && e(t)
        },
        x = function(e, t, n) {
            e.addEventListener(t, n)
        },
        C = function(e, t, n) {
            e.removeEventListener(t, n)
        },
        I = function(e, t, n) {
            C(e, "load", t), C(e, "loadeddata", t), C(e, "error", n)
        },
        k = function(e, t, n) {
            var a = n._settings,
                i = t ? a.class_loaded : a.class_error,
                o = t ? a.callback_load : a.callback_error,
                r = e.target;
            (function(e, t) {
                m ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            })(r, a.class_loading), w(r, i), z(o, r), n._updateLoadingCount(-1)
        },
        E = function(e, t) {
            var n = function n(i) {
                    k(i, !0, t), I(e, n, a)
                },
                a = function a(i) {
                    k(i, !1, t), I(e, n, a)
                };
            ! function(e, t, n) {
                x(e, "load", t), x(e, "loadeddata", t), x(e, "error", n)
            }(e, n, a)
        },
        L = ["IMG", "IFRAME", "VIDEO"],
        O = function(t, n, a) {
            e(t, a), n.unobserve(t)
        },
        M = function(e) {
            var t = s(e);
            t && (clearTimeout(t), l(e, null))
        },
        S = function(e) {
            return e.isIntersecting || e.intersectionRatio > 0
        },
        A = function(e, t) {
            this._settings = n(e), this._setObserver(), this._loadingCount = 0, this.update(t)
        };
    return A.prototype = {
        _manageIntersection: function(e) {
            var t = this._observer,
                n = this._settings.load_delay,
                a = e.target;
            n ? S(e) ? function(e, t, n) {
                var a = n._settings.load_delay,
                    i = s(e);
                i || (i = setTimeout(function() {
                    O(e, t, n), M(e)
                }, a), l(e, i))
            }(a, t, this) : M(a) : S(e) && O(a, t, this)
        },
        _onIntersection: function(e) {
            e.forEach(this._manageIntersection.bind(this))
        },
        _setObserver: function() {
            var e;
            h && (this._observer = new IntersectionObserver(this._onIntersection.bind(this), {
                root: (e = this._settings).container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px"
            }))
        },
        _updateLoadingCount: function(e) {
            this._loadingCount += e, 0 === this._elements.length && 0 === this._loadingCount && z(this._settings.callback_finish)
        },
        update: function(e) {
            var t = this,
                n = this._settings,
                a = e || n.container.querySelectorAll(n.elements_selector);
            this._elements = function(e) {
                return e.filter(function(e) {
                    return !r(e)
                })
            }(Array.prototype.slice.call(a)), !f && this._observer ? this._elements.forEach(function(e) {
                t._observer.observe(e)
            }) : this.loadAll()
        },
        destroy: function() {
            var e = this;
            this._observer && (this._elements.forEach(function(t) {
                e._observer.unobserve(t)
            }), this._observer = null), this._elements = null, this._settings = null
        },
        load: function(t, n) {
            e(t, this, n)
        },
        loadAll: function() {
            var e = this;
            this._elements.forEach(function(t) {
                e.load(t)
            })
        }
    }, u && function(e, t) {
        if (t)
            if (t.length)
                for (var n, a = 0; n = t[a]; a += 1) c(e, n);
            else c(e, t)
    }(A, window.lazyLoadOptions), A
}),
function() {
    if (!0 === window.CIG_LOADED) return !1;
    window.CIG_LOADED = !0, window.cozyCache = window.cozyCache || {};
    var e = function() {
        var e = jQuery,
            t = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, n, a) {
            t[n] = a
        });
        var n = function() {
                function n() {
                    _classCallCheck(this, n);
                    try {
                        this.body = e("body"), this.head = e("head"), this.galleryClass = "cz-embed-gallery", this.galleries = e(".".concat(this.galleryClass)), this.findUrl(), this.isNewLightBox = this.getUrlParameter("new_light"), this.galleries.length > 0 && (this.hasGalleries = !0), this.events()
                    } catch (e) {
                        return n.handleCatch(e)
                    }
                }
                return _createClass(n, null, [{
                    key: "handleCatch",
                    value: function() {
                        n.console.apply(n, arguments)
                    }
                }, {
                    key: "console",
                    value: function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        }, t
                    }(function() {
                        var e;
                        (t.debug || !0 === window.CIG_DEBUG) && (e = console).log.apply(e, arguments)
                    })
                }]), _createClass(n, [{
                    key: "findUrl",
                    value: function() {
                        var t = e("[src*='".concat("cziframeagent", "']")).attr("src");
                        this.myshopify_domain = t.split("shop=")[1];
                        var n = t.split("/embed/")[0];
                        this.assets_domain = "https://cozygallery.addons.business", n.includes("localhost") && (this.assets_domain = n)
                    }
                }, {
                    key: "getUrlParameter",
                    value: function(e) {
                        for (var t, n = decodeURIComponent(window.location.search.substring(1)).split("&"), a = 0; a < n.length; a++)
                            if ((t = n[a].split("="))[0] === e) return void 0 === t[1] || t[1]
                    }
                }, {
                    key: "createAgent",
                    value: function() {
                        var e = this;
                        if (!0 !== this.hasGalleries) return n.console("No Gallery is found"), !0;
                        this.eachGallery(function(t) {
                            e.createIframe(t), e.createFancyLightboxIframe(t)
                        });
                        new LazyLoad({
                            elements_selector: ".cozy-iframe-lazy-load",
                            callback_enter: function(e) {},
                            callback_load: function(e) {},
                            class_loading: "cig-loading",
                            class_loaded: "cig-loaded",
                            class_error: "cig-error"
                        })
                    }
                }, {
                    key: "iframeFactory",
                    value: function() {
                        return e("<iframe />").attr({
                            allow: "autoplay",
                            allowTransparency: !0,
                            frameBorder: 0,
                            scrolling: "no",
                            allowfullscreen: "allowfullscreen",
                            mozallowfullscreen: "mozallowfullscreen",
                            msallowfullscreen: "msallowfullscreen",
                            oallowfullscreen: "oallowfullscreen",
                            webkitallowfullscreen: "webkitallowfullscreen",
                            title: "Gallery",
                            class: "fitvidsignore"
                        })
                    }
                }, {
                    key: "createFancyLightboxIframe",
                    value: function(t) {
                        if (0 === e("#czy-gallery-65-fancy-ltbx-iframe").length) {
                            var a = e('<div id="cz-embed-glr-fancy-lbx" class="lbx-iframe-show"></div>');
                            this.body.addClass("contains_cozy_gallery").append(a);
                            var i = e("#cz-embed-glr-fancy-lbx"),
                                o = this.iframeFactory();
                            o.attr({
                                id: "czy-gallery-65-fancy-ltbx-iframe",
                                style: "width:100%;position:fixed;height:100%!important;top:0;bottom:0;left:0;z-index:2147483647",
                                src: "".concat(this.assets_domain, "/apousr/gallery/modal/").concat(t, "?shop=").concat(this.myshopify_domain, "&width=").concat(n.getX())
                            }), i.append(o), e("#cz-embed-glr-fancy-lbx").removeClass("lbx-iframe-show").addClass("lbx-iframe-hide")
                        }
                    }
                }, {
                    key: "createLightboxIframe",
                    value: function(t) {
                        if (0 === e("#czy-gallery-65-ltbx-iframe-".concat(t)).length) {
                            var a = e('<div id="cz-embed-glr-lbx'.concat(t, '" class="lbx-iframe-hide"></div>'));
                            this.body.append(a);
                            var i = e("#cz-embed-glr-lbx".concat(t)),
                                o = this.iframeFactory();
                            o.attr({
                                id: "czy-gallery-65-ltbx-iframe-".concat(t),
                                style: "width:100%;position:fixed;height:100%!important;top:0;bottom:0;z-index:2147483647",
                                src: "".concat(this.assets_domain, "/apousr/lbx/").concat(t, "?shop=").concat(this.myshopify_domain, "&width=").concat(n.getX())
                            }), i.append(o)
                        }
                    }
                }, {
                    key: "createIframe",
                    value: function(t) {
                        var a = 1,
                            i = "";
                        e(".cz-embed-gallery").each(function() {
                            e(this).attr("id") == "cz-embed-gallery" + t && (e(this).addClass("cz-embed-gallery" + t + "-" + a), a += 1)
                        });
                        var o = e(".cz-embed-gallery".concat(t));
                        0 == o.length && (o = e("#cz-embed-gallery".concat(t)));
                        var r = o.hasClass("cozy-gallery-lazy-load"),
                            l = "cozy-iframe",
                            s = null,
                            c = null,
                            d = this.assets_domain + "/apousr/glry/" + t + "?shop=" + this.myshopify_domain + "&width=" + n.getX();
                        e("#cozy-global-style").length < 1 && this.head.append('<style id="cozy-global-style" type="text/css">.cz-embed-gallery { clear:both;} .lbx-iframe-show {transition: all .2s ease-out;display:block;}.lbx-iframe-hide {transition: all .2s ease-out;display:none;}</style>');
                        var u = this.iframeFactory(),
                            f = 1;
                        e(".cz-embed-gallery").each(function() {
                            if (e(this).attr("id") == "cz-embed-gallery" + t) {
                                if (i = "cz-embed-gallery" + t + "-" + f, e(this).addClass(i), d += "&iframeid=" + i, r ? (c = d, l = "cozy-iframe-lazy-load") : s = d, 0 === e(".iframe-".concat(i)).length) {
                                    u.attr({
                                        class: l + " iframe-".concat(i, " fitvidsignore"),
                                        id: "czy-gallery-65-iframe-".concat(t),
                                        style: "width:100%;max-width:100%!important;position:relative;height:100%!important;border:0;margin:0;padding:0;",
                                        "data-src": c,
                                        src: s
                                    });
                                    var n = e(".cz-embed-gallery" + t + "-" + f);
                                    u.appendTo(n)
                                }
                                f += 1
                            }
                        })
                    }
                }, {
                    key: "getMsgOfChild",
                    value: function(t) {
                        var n = t.data;
                        if (n.length > 0 && 0 === n.indexOf("cz_child_height_msg_")) {
                            var a = n.replace("cz_child_height_msg_", "");
                            a = a.split("_");
                            var i = e(".".concat(a[2]));
                            if (0 == i.length && (i = e("#cz-embed-gallery".concat(a[0]))), a[0] > 0 && a[1] > 0) e(".iframe-".concat(a[2])).css("height", a[1] + "px"), i.attr("style", "height:" + a[1] + "px")
                        } else if (n.length > 0 && 0 === n.indexOf("cz_lbx_show_")) {
                            var o = n.replace("cz_lbx_show_", ""),
                                r = o.split("_"),
                                l = r[0];
                            e("#cz-embed-glr-lbx".concat(r[0])).removeClass("lbx-iframe-hide").addClass("lbx-iframe-show"), e("#czy-gallery-65-ltbx-iframe-".concat(l))[0].contentWindow.postMessage("cz_slide_lbx_show_".concat(o), "*")
                        } else if (n.length > 0 && 0 === n.indexOf("close-lbx-iframe")) e(".lbx-iframe-show").removeClass("lbx-iframe-show").addClass("lbx-iframe-hide");
                        else if (n.length > 0 && 0 === n.indexOf("close-lbx-fancy-iframe")) e(".lbx-iframe-show").removeClass("lbx-iframe-show").addClass("lbx-iframe-hide");
                        else if ("openLbx" == n.msg) {
                            var s = n.gal_id,
                                c = n.images,
                                d = {
                                    msg: "openLbxChild",
                                    gal_id: s,
                                    shop_id: n.shop_id,
                                    store_name: n.store_name,
                                    cz_user_custom_css: n.cz_user_custom_css,
                                    images: c
                                };
                            e("#cz-embed-glr-fancy-lbx").removeClass("lbx-iframe-hide").addClass("lbx-iframe-show"), e("#czy-gallery-65-fancy-ltbx-iframe")[0].contentWindow.postMessage(d, "*")
                        }
                    }
                }, {
                    key: "sendMsgToIframe",
                    value: function(t) {
                        var a = this;
                        e(".cz-embed-gallery").each(function(i, o) {
                            var r = e(o);
                            if (r.attr("id") == "cz-embed-gallery" + t) {
                                var l = r.find("iframe");
                                l.length > 0 ? l[0].contentWindow.postMessage("cz_otrwd_scrin_wdth_msg_" + t + "_" + n.getX(), "*") : (a.createIframe(t), a.createFancyLightboxIframe(t)), 1
                            }
                        })
                    }
                }, {
                    key: "eachGallery",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (null === t) return !1;
                        this.galleries.each(function(n, a) {
                            var i = e(a).attr("id");
                            return void 0 === i || (i = i.replace("cz-embed-gallery", ""), t(i), !0)
                        })
                    }
                }, {
                    key: "events",
                    value: function() {
                        this.hasGalleries && !0 !== window.cozyCache.listening && (window.cozyCache.listening = !0, window.addEventListener ? window.addEventListener("message", this.getMsgOfChild, !1) : window.attachEvent("onmessage", this.getMsgOfChild), window.addEventListener("resize", this.sendMessage))
                    }
                }, {
                    key: "sendMessage",
                    value: function() {
                        var e = new n;
                        e.eachGallery(function(t) {
                            e.sendMsgToIframe(t)
                        })
                    }
                }], [{
                    key: "getX",
                    value: function() {
                        var e = window,
                            t = document,
                            n = t.documentElement,
                            a = t.getElementsByTagName("body")[0];
                        return e.innerWidth || n.clientWidth || a.clientWidth
                    }
                }]), n
            }(),
            a = 0,
            i = function() {
                a++, n.console("In Pinger ".concat(a)), window.Cozy = new n, window.Cozy.createAgent()
            };
        setInterval(function() {
            try {
                i()
            } catch (e) {
                n.handleCatch(e)
            }
        }, 1e3);
        setInterval(function() {
            try {
                window.Cozy.sendMessage()
            } catch (e) {
                n.handleCatch(e)
            }
        }, 1e3), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? i() : document.addEventListener("DOMContentLoaded", i)
    };
    ! function(e) {
        if ("undefined" == typeof document) throw new Error("document-ready only runs in the browser");
        var t = document.readyState;
        if ("complete" === t || "interactive" === t) return setTimeout(e, 0);
        document.addEventListener("DOMContentLoaded", function() {
            e()
        })
    }(function() {
        if (window.jQuery) e();
        else {
            var t = document.createElement("script");
            document.head.appendChild(t), t.type = "text/javascript", t.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js", t.onload = e
        }
    })
}();