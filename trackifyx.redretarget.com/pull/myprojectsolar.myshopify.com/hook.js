const tfx_shop_settings = {
    "shop_id": 23465,
    "shop": "myprojectsolar.myshopify.com",
    "plan": "unlimited",
    "tfx_plan": {
        "optin": false,
        "popular": true,
        "price": 59.95,
        "isPlanAvailable": true,
        "ui": {
            "color": "#1c2260",
            "border": "#11aa51"
        },
        "limits": {
            "pixels": 15,
            "Server-Side API": "Purchase events",
            "Non-Purchase events Server-Side API": "",
            "Niche Tracking Tags": "Unlimited",
            "analytics": "2 Months",
            "Auto Catalog Feed": "",
            "Custom Diagnosis": "",
            "Scripts & Coding": "Basic",
            "Feed Options": "Advanced",
            "FB Audience Builder": "Advanced",
            "Time Based Events": "Basic",
            "Report Variants": "",
            "Advanced Matching": "",
            "Report Microdata": "",
            "Value Reporting": "",
            "Price Value Reporting": "",
            "InitiateCheckout Button Click": "",
            "CCPA": "",
            "Tracking Consent Api": "",
            "Event To Fire": "",
            "Enable IOS14 Suppression": "",
            "Enable SS for pending status": ""
        }
    },
    "tfx_planName": "marketer",
    "currency": "USD",
    "debug": false,
    "baseURL": "https://trackifyx.redretarget.com",
    "pixels": [{
        "id": 111350,
        "pixel_id": "4602391253113233",
        "type": "master",
        "context": [""],
        "enabled": true,
        "month_ago": "2021-04-11T23:43:27Z",
        "serversideapi_enabled": true,
        "serversideapi_status": "enabled at: 2021-05-12",
        "is_token_valid": true
    }],
    "orders": [],
    "logging": true,
    "proxy": "a/tfx",
    "user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 DuckDuckGo/7 Safari/605.1.15",
    "user_ip": "2603:8001:141:9c00:6447:22a:c16e:633d",
    "id": 31588,
    "enabled": true,
    "report_variants": false,
    "advance_matching": true,
    "microdata": true,
    "value_reporting": true,
    "reporting_percentage": 100,
    "time_on_site": false,
    "ccpa": "geo",
    "tracking_consent_api": "ignore",
    "event_to_fire": ["pageViewEvent", "viewContentEvent", "purchaseEvent", "initiateCheckoutEvent", "addToCartEvent", "microData", "buttonClick", "paymentLeadEvent"],
    "all_events_for_suppress": ["viewCategoryEvent", "customizeProductEvent", "viewCartEvent", "paymentLeadEvent", "addShippingInfoEvent", "addToWishListEvent", "searchEvent", "contactEvent", "timerEvent", "pageViewEvent", "viewContentEvent", "addPaymentInfoEvent", "purchaseEvent", "initiateCheckoutEvent", "addToCartEvent", "microData", "buttonClick"],
    "enable_ios14_suppression": false,
    "enable_ssevents_for_pending": false,
    "orders_purchase": false,
    "ocu_ss_api": 0,
    "shopify_pixel": false,
    "contents": true,
    "atc_click": true,
    "ic_switch": true
};
! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(o, i, function(e) {
                return t[e]
            }.bind(null, i));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 4)
}({
    "/SWy": function(t, e, n) {
        "use strict";
        n.r(e);
        var o, i = n("o0o1"),
            a = n.n(i);

        function r(t, e, n, o, i, a, r) {
            try {
                var c = t[a](r),
                    s = c.value
            } catch (t) {
                return void n(t)
            }
            c.done ? e(s) : Promise.resolve(s).then(o, i)
        }

        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, o)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(n, !0).forEach(function(e) {
                    d(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        function d(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var h = 150,
            p = "PageView",
            g = "ViewContent",
            f = "AddToCart",
            v = "Purchase",
            m = "InitiateCheckout",
            y = "TrackifyXRetarget",
            _ = "Products",
            w = "Orders",
            k = "Collections",
            C = "ThankYou",
            E = "Search",
            b = "ZipifyPage",
            S = "GemProductPage",
            T = "BetterCartCheckoutThankYou",
            P = (d(o = {
                AF: "afghanistan",
                AL: "albania",
                DZ: "algeria",
                AS: "americansamoa",
                AD: "andorra",
                AO: "angola",
                AI: "anguilla",
                AQ: "antarctica",
                AG: "antiguaandbarbuda",
                AR: "argentina",
                AM: "armenia",
                AW: "aruba",
                AU: "australia",
                AT: "austria",
                AZ: "azerbaijan",
                BS: "bahamas",
                BH: "bahrain",
                BD: "bangladesh",
                BB: "barbados",
                BY: "belaruz",
                BE: "belgium",
                BZ: "belize",
                BJ: "benin",
                BM: "bermuda",
                BT: "bhutan",
                BO: "bolivia",
                BA: "bosniaandherzegovina",
                BW: "botswana",
                BV: "bouvetisland",
                BR: "brazil",
                BN: "brunei",
                BG: "bulgaria",
                BF: "burkinafaso",
                BI: "burundi",
                KH: "cambodia",
                CM: "cameroon",
                CA: "canada",
                CV: "capeVerde",
                KY: "caymanislands",
                CF: "centralafricanrepublic",
                TD: "chad",
                CL: "chile",
                CN: "china",
                CX: "christmasisland",
                CC: "cocos",
                CO: "colombia",
                KM: "comoros",
                CG: "congo",
                CK: "cookislands",
                CR: "costarica",
                CI: "cotedivoire",
                HR: "croatia",
                CU: "cuba",
                CY: "cyprus",
                CZ: "czechrepublic",
                CS: "czechoslavakia",
                DK: "denmark",
                DJ: "djibouti",
                DM: "dominica",
                DO: "dominicanrepublic",
                TP: "easttimor",
                EC: "ecuador",
                EG: "egypt",
                SV: "elsalvador",
                GQ: "equatorialguinea",
                ER: "eritrea",
                EE: "estonia",
                ET: "ethiopia",
                FK: "falklandislands",
                FO: "faroeislands",
                FJ: "fiji",
                FI: "finland",
                FR: "france",
                GF: "frenchguiana"
            }, "GF", "frenchguyana"), d(o, "PF", "frencpolynesia"), d(o, "GA", "gabon"), d(o, "GM", "gambia"), d(o, "GE", "georgia"), d(o, "DE", "germany"), d(o, "GH", "ghana"), d(o, "GI", "gibraltar"), d(o, "GB", "greatbritain"), d(o, "GB", "unitedkingdom"), d(o, "GR", "greece"), d(o, "GL", "greenland"), d(o, "GD", "grenada"), d(o, "GP", "guadeloupe"), d(o, "GU", "guam"), d(o, "GT", "guatemala"), d(o, "GN", "guinea"), d(o, "GW", "guinea-bissau"), d(o, "GY", "guyana"), d(o, "HT", "haiti"), d(o, "HM", "heardislandandmcdonaldislands"), d(o, "VA", "holysee"), d(o, "VA", "vaticancity"), d(o, "HN", "honduras"), d(o, "HK", "hongKong"), d(o, "HU", "hungary"), d(o, "IS", "iceland"), d(o, "IN", "india"), d(o, "ID", "indonesia"), d(o, "IR", "iran"), d(o, "IR", "islamicrepublicOfiran"), d(o, "IQ", "iraq"), d(o, "IE", "ireland"), d(o, "IL", "israel"), d(o, "IT", "italy"), d(o, "JM", "jamaica"), d(o, "JP", "japan"), d(o, "JO", "jordan"), d(o, "KZ", "kazakstan"), d(o, "KZ", "kazakhstan"), d(o, "KE", "kenya"), d(o, "KI", "kiribati"), d(o, "KP", "northkorea"), d(o, "KR", "southkorea"), d(o, "KW", "kuwait"), d(o, "KG", "kyrgyzstan"), d(o, "LA", "laos"), d(o, "LV", "latvia"), d(o, "LB", "lebanon"), d(o, "LS", "lesotho"), d(o, "LR", "liberia"), d(o, "LY", "libya"), d(o, "LI", "liechtenstein"), d(o, "LT", "lithuania"), d(o, "LU", "luxembourg"), d(o, "MO", "macau"), d(o, "MK", "macedonia"), d(o, "MG", "madagascar"), d(o, "MW", "malawi"), d(o, "MY", "malaysia"), d(o, "MV", "maldives"), d(o, "ML", "mali"), d(o, "MT", "malta"), d(o, "MH", "marshallislands"), d(o, "MQ", "martinique"), d(o, "MR", "mauritania"), d(o, "MU", "mauritius"), d(o, "YT", "mayotte"), d(o, "MX", "mexico"), d(o, "FM", "micronesia"), d(o, "MD", "moldova"), d(o, "MC", "monaco"), d(o, "MN", "mongolia"), d(o, "MS", "montserrat"), d(o, "MA", "morocco"), d(o, "MZ", "mozambique"), d(o, "MM", "myanmar"), d(o, "NA", "namibia"), d(o, "NR", "nauru"), d(o, "NP", "nepal"), d(o, "NL", "netherlands"), d(o, "AN", "netherlandsantilles"), d(o, "NC", "newcaledonia"), d(o, "NZ", "newzealand"), d(o, "NI", "nicaragua"), d(o, "NE", "niger"), d(o, "NG", "nigeria"), d(o, "NU", "niue"), d(o, "NF", "norfolkisland"), d(o, "MP", "northernmarianaislands"), d(o, "NO", "norway"), d(o, "OM", "oman"), d(o, "PK", "pakistan"), d(o, "PW", "palau"), d(o, "PS", "palestinianstate"), d(o, "PA", "panama"), d(o, "PG", "papuanewguinea"), d(o, "PY", "paraguay"), d(o, "PE", "peru"), d(o, "PH", "philippines"), d(o, "PN", "pitcairnisland"), d(o, "PL", "poland"), d(o, "PT", "portugal"), d(o, "PR", "puertorico"), d(o, "QA", "qatar"), d(o, "RO", "romania"), d(o, "RU", "russianfederation"), d(o, "RW", "rwanda"), d(o, "SH", "sainthelena"), d(o, "KN", "saintKittsandnevis"), d(o, "LC", "saintlucia"), d(o, "PM", "saintpierreandmiquelon"), d(o, "VC", "saintvincentandthegrenadines"), d(o, "WS", "samoa"), d(o, "SM", "sanmarino"), d(o, "ST", "saotomeandtrincipe"), d(o, "SA", "saudiarabia"), d(o, "RS", "serbia"), d(o, "SN", "senegal"), d(o, "SC", "seychelles"), d(o, "SL", "sierraleone"), d(o, "SG", "singapore"), d(o, "SK", "slovakia"), d(o, "SI", "slovenia"), d(o, "SB", "solomon"), d(o, "SO", "somalia"), d(o, "ZA", "southafrica"), d(o, "GS", "southgeorgiaandthesouthsandwichislands"), d(o, "ES", "spain"), d(o, "LK", "sriLanka"), d(o, "SD", "sudan"), d(o, "SR", "suriname"), d(o, "SJ", "svalbard"), d(o, "SZ", "swaziland"), d(o, "SE", "sweden"), d(o, "CH", "switzerland"), d(o, "SY", "syria"), d(o, "TW", "taiwan"), d(o, "TJ", "tajikistan"), d(o, "TZ", "tanzania"), d(o, "TH", "thailand"), d(o, "TG", "togo"), d(o, "TK", "tokelau"), d(o, "TO", "tonga"), d(o, "TT", "trinidadandtobago"), d(o, "TE", "tromelinisland"), d(o, "TN", "tunisia"), d(o, "TR", "turkey"), d(o, "TM", "turkmenistan"), d(o, "TC", "turksandcaicosislands"), d(o, "TV", "tuvalu"), d(o, "UG", "uganda"), d(o, "UA", "ukraine"), d(o, "AE", "unitedarabemirates"), d(o, "US", "unitedstates"), d(o, "UY", "uruguay"), d(o, "UZ", "uzbekistan"), d(o, "VU", "vanuatu"), d(o, "VA", "vaticancitystate"), d(o, "VE", "venezuela"), d(o, "VN", "vietnam"), d(o, "VI", "virginislandsbritish"), d(o, "VQ", "virginislandsunitedstates"), d(o, "WF", "wallisandfutunaislands"), d(o, "EH", "westernsahara"), d(o, "YE", "yemen"), d(o, "YU", "yugoslavia"), d(o, "ZR", "zaire"), d(o, "ZM", "zambia"), d(o, "ZW", "zimbabwe"), o);

        function L(t) {
            var e = null;
            return window.location.href.indexOf(t) > -1 && window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, o) {
                e = o
            }), e
        }

        function O(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (n = l({
                path: "/",
                SameSite: "Strict"
            }, n)).expires && n.expires.toUTCString && (n.expires = n.expires.toUTCString());
            var o = encodeURIComponent(t) + "=" + encodeURIComponent(e);
            for (var i in n) {
                o += "; " + i;
                var a = n[i];
                !0 !== a && (o += "=" + a)
            }
            document.cookie = o
        }

        function I(t) {
            var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : null
        }

        function F(t) {
            O(t, "", {
                "max-age": -1
            })
        }

        function A(t, e) {
            for (var n = e.split("."), o = 0, i = n.length; o < i; o++) {
                if (!t || !t[n[o]]) return !1;
                t = t[n[o]]
            }
            return !0
        }

        function x(t, e) {
            for (var n = e.split("."), o = 0, i = n.length; o < i; o++) {
                if (!t || !t[n[o]]) return null;
                t = t[n[o]]
            }
            return t
        }

        function U(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise(function(n, o) {
                var i = new XMLHttpRequest;
                i.open(e.method || "GET", t), e.headers && Object.keys(e.headers).forEach(function(t) {
                    i.setRequestHeader(t, e.headers[t])
                }), i.onload = function() {
                    i.status >= 200 && i.status < 300 ? n(i.response) : o(i.statusText)
                }, i.onerror = function() {
                    return o(i.statusText)
                }, i.send(e.body)
            })
        }

        function D() {
            var t = (new Date).toLocaleString("en-US", {
                    timeZone: "America/New_York"
                }),
                e = new Date(t),
                n = e.toDateString().split(" "),
                o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][e.getDay()];
            return n[1] + "_" + e.getDate() + "_" + e.getFullYear() + "_" + o + "_Hour_" + e.getHours()
        }

        function N(t) {
            return "string" != typeof t ? "" : t.charAt(0).toUpperCase() + t.slice(1)
        }

        function R(t, e, n) {
            e.split(" ").forEach(function(e) {
                return t.addEventListener(e, n, !1)
            })
        }

        function q() {
            var t, e = {
                options: [],
                header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
                dataos: [{
                    name: "Windows Phone",
                    value: "Windows Phone",
                    version: "OS"
                }, {
                    name: "Windows",
                    value: "Win",
                    version: "NT"
                }, {
                    name: "iPhone",
                    value: "iPhone",
                    version: "OS"
                }, {
                    name: "iPad",
                    value: "iPad",
                    version: "OS"
                }, {
                    name: "Kindle",
                    value: "Silk",
                    version: "Silk"
                }, {
                    name: "Android",
                    value: "Android",
                    version: "Android"
                }, {
                    name: "PlayBook",
                    value: "PlayBook",
                    version: "OS"
                }, {
                    name: "BlackBerry",
                    value: "BlackBerry",
                    version: "/"
                }, {
                    name: "Macintosh",
                    value: "Mac",
                    version: "OS X"
                }, {
                    name: "Linux",
                    value: "Linux",
                    version: "rv"
                }, {
                    name: "Palm",
                    value: "Palm",
                    version: "PalmOS"
                }],
                databrowser: [{
                    name: "Chrome",
                    value: "Chrome",
                    version: "Chrome"
                }, {
                    name: "Firefox",
                    value: "Firefox",
                    version: "Firefox"
                }, {
                    name: "Safari",
                    value: "Safari",
                    version: "Version"
                }, {
                    name: "Internet Explorer",
                    value: "MSIE",
                    version: "MSIE"
                }, {
                    name: "Opera",
                    value: "Opera",
                    version: "Opera"
                }, {
                    name: "BlackBerry",
                    value: "CLDC",
                    version: "CLDC"
                }, {
                    name: "Mozilla",
                    value: "Mozilla",
                    version: "Mozilla"
                }],
                init: function() {
                    var t = this.header.join(" ");
                    return {
                        os: this.matchItem(t, this.dataos),
                        browser: this.matchItem(t, this.databrowser)
                    }
                },
                matchItem: function(t, e) {
                    var n, o, i, a = 0,
                        r = 0;
                    for (a = 0; a < e.length; a += 1)
                        if (new RegExp(e[a].value, "i").test(t)) {
                            if (n = new RegExp(e[a].version + "[- /:;]([\\d._]+)", "i"), i = "", (o = t.match(n)) && o[1] && (o = o[1]), o)
                                for (o = o.split(/[._]+/), r = 0; r < o.length; r += 1) i += 0 === r ? o[r] + "." : o[r];
                            else i = "0";
                            return {
                                name: e[a].name,
                                version: parseFloat(i)
                            }
                        }
                    return {
                        name: "unknown",
                        version: 0
                    }
                }
            }.init();
            return {
                osName: e.os ? e.os.name : "unknown",
                osVersion: e.os ? e.os.version : "unknown",
                browserName: e.browser ? e.browser.name : "unknown",
                browserVersion: e.browser ? e.browser.version : "unknown",
                navigatorUserAgent: navigator.version || "unknown",
                isMobile: (t = navigator.userAgent || navigator.vendor || window.opera, /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? 1 : 0)
            }
        }

        function j(t, e, n) {
            document.querySelector(t) || e <= 0 ? n(document.querySelector(t)) : window.setTimeout(function() {
                j(t, --e, n)
            }, 250)
        }

        function M(t, e, n) {
            document.querySelectorAll(t) || e <= 0 ? n(document.querySelectorAll(t)) : window.setTimeout(function() {
                M(t, --e, n)
            }, 250)
        }
        var X = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.backendURL = "https://trackifyx.redretarget.com", this.uniqueId = "_" + Math.random().toString(36).substr(2, 9), this.shopName = null, this.shopHost = "", this.shop = null, this.isZipifyTagsCollectionsLoaded = !1, this.isLogingZipifyTagsCollections = !1, this.zipifyProductsTagsCollections = [], this.collections = [], this.tags = [], this.pixels = [], this.initializedPixels = [], this.page = null, this.product = null, this.cart = null, this.checkout = null, this.isTriggeredByState = !1, this.isLoadingProduct = !1, this.isAddingToCart = !1, this.isFetchingShop = !1, this.isFetchingCart = !1, this.user = this.saveEmptyUser(), this.maxAttemps = h, this.debug = !0, this.eventPrefix = "", this.timeOnPage = 0, this.reloadCartAttemps = 5, this.timeOnSite = parseInt(localStorage.getItem("TFX_TIME_ON_SITE") || 0), this.isLoaded = !1, this.productIds = [], this.pixelEvent = !0, this.advanceMatching = !0, this.isIOS14 = !1, this.viewCategoryEventFire = !0, this.viewContentEventFire = !0, this.viewCartEventFire = !0, this.pageViewEventFire = !0, this.customizeProductEventFire = !0, this.addToCartEventFire = !0, this.initiateCheckoutEventFire = !0, this.addPaymentLeadEventFire = !0, this.addShippingInfoEventFire = !0, this.addPaymentInfoEventFire = !0, this.purchaseEventFire = !0, this.addToWishlistEventFire = !0, this.searchEventFire = !0, this.contactEventFire = !0, this.timerEventFire = !0, this.isScriptInIframe = window.self !== window.top, this.upsellInCartOnce = !0, this.incartForms = 0, this.isBetterCart = !1, this.isPageFlyPage = !1, this.isShogunPage = !1, this.interCartEvents = [], this.interCartEvent = null, this.triggerQueue(), this.triggerATCQueue(), this.iscategoryswatchloaded = 0, this.client_ip_address = {}, this.is_client_ip_address_loaded = !1
            }
            var e, n, o;
            return e = t, (n = [{
                key: "reset",
                value: function() {
                    this.tags = [], this.collections = [], this.page = null, this.product = null, this.maxAttemps = h
                }
            }, {
                key: "init",
                value: function() {
                    var t = this,
                        e = window.location.href;
                    e = e.replace("https://", ""), !this.is_client_ip_address_loaded && (e.includes("/products/") || e.includes("/cart") || e.includes("/thank_you") || e.includes("/checkouts/")) && (this.is_client_ip_address_loaded = !0, this.getipInfo()), this.isResourcesLoaded() ? this.shop.enabled ? (this.loadIOSDeviceVersions(), this.setup()) : this.consoleLog("This shop is disabled") : (this.maxAttemps === h && this.load(), setTimeout(function() {
                        if (--t.maxAttemps <= 0) {
                            var e = t.getFailMessage();
                            t.consoleLog(e), t.consoleLog(t)
                        } else t.load(), t.loadIOSDeviceVersions(), t.init()
                    }, 30))
                }
            }, {
                key: "getipInfo",
                value: function() {
                    var t = this;
                    U("https://freegeoip.app/json/").then(function(e) {
                        t.client_ip_address = JSON.parse(e)
                    }).catch(function(t) {
                        _this.consoleLog("TFX", t)
                    })
                }
            }, {
                key: "initTrackingConsent",
                value: function() {
                    var t = this;
                    if (t.consoleLog("init tracking function is called"), x(window, "Shopify.loadFeatures")) t.consoleLog("Shopify.loadFeatures property loaded"), window.Shopify.loadFeatures([{
                        name: "consent-tracking-api",
                        version: "0.1"
                    }], function(e) {
                        if (e) throw t.consoleLog(e, "Shopify.loadFeatures property error"), e;
                        t.initCookieBanner()
                    });
                    else {
                        if (t.consoleLog("Shopify.loadFeatures property not loaded"), !localStorage.getItem("TFX_CONSENT")) return;
                        t.consoleLog("TFX Consent available");
                        var e = JSON.parse(localStorage.getItem("TFX_CONSENT")),
                            n = e.userCanBeTracked,
                            o = e.userTrackingConsent;
                        if (t.consoleLog(' tracking consent response : User Can Be Tracked "'.concat(n, '"')), t.consoleLog(' tracking consent response : Get Tracking consent "'.concat(o, '"')), !n && "no_interaction" === o || "no" === o) switch (this.shop.tracking_consent_api) {
                            case "all":
                                this.pixelEvent = !1, t.consoleLog("Pixel Is blocked because tracking consent is not given");
                                break;
                            case "advance":
                                t.consoleLog("Advance Matching Is blocked because tracking consent is not given"), this.advanceMatching = !1
                        }
                    }
                }
            }, {
                key: "initCookieBanner",
                value: function() {
                    var t = window.Shopify.customerPrivacy.userCanBeTracked();
                    this.consoleLog("Cookie Banner Function is called");
                    var e = window.Shopify.customerPrivacy.getTrackingConsent();
                    this.consoleLog(' tracking consent response : User Can Be Tracked "'.concat(t, '"')), this.consoleLog(' tracking consent response : Get Tracking consent "'.concat(e, '"'));
                    var n = {
                        userCanBeTracked: t,
                        userTrackingConsent: e
                    };
                    if (this.setConsent(n), !t && "no_interaction" === e || "no" === e) switch (this.shop.tracking_consent_api) {
                        case "all":
                            this.pixelEvent = !1, this.consoleLog("Pixel Is blocked because tracking consent is not given");
                            break;
                        case "advance":
                            this.consoleLog("Advance Matching Is blocked because tracking consent is not given"), this.advanceMatching = !1
                    }
                    return !0
                }
            }, {
                key: "setConsent",
                value: function(t) {
                    t && localStorage.setItem("TFX_CONSENT", JSON.stringify(t))
                }
            }, {
                key: "load",
                value: function() {
                    this.setUTMs(), this.user || this.getUserExternalId(), this.page || this.setPage(), this.shopName || this.setShopName(), "fbq" in window || this.loadPixelLibrary(), !this.shop && this.shopName && this.loadShopSettings(), this.shop && !this.product && this.loadProduct(), this.tags.length || this.loadTags(), this.collections.length || this.loadCollections(), this.cart || this.loadCart(), -1 === [C, w, T].indexOf(this.page) || this.checkout || this.loadCheckout(), this.isTriggeredByState && this.page === _ && this.setTagsCollections(window.location.pathname), this.page !== b || this.isZipifyTagsCollectionsLoaded || this.setZipifyTagsCollections(), "UpSellPage" === this.page && this.getOCUProduct()
                }
            }, {
                key: "loadIOSDeviceVersions",
                value: function() {}
            }, {
                key: "getFailMessage",
                value: function() {
                    var t = [];
                    switch ("fbq" in window || t.push("FB Pixel script is not loaded"), this.shop || t.push("Can not get shop info"), this.shopName || t.push("Can not get shop name"), this.page || t.push("Can not get page"), this.page) {
                        case S:
                        case "PageFly":
                        case "Shogun":
                        case _:
                            this.product || t.push("Can not get product checking zipify pages"), A(window, "ZipifyPages") && (this.page = b, this.init());
                            break;
                        case "Cart":
                            this.cart || t.push("Can not get cart");
                            break;
                        case C:
                            this.checkout || t.push("Can not get checkout")
                    }
                    return t.join("\n* ")
                }
            }, {
                key: "isResourcesLoaded",
                value: function() {
                    var t = "fbq" in window && this.shopName && this.shop && this.page,
                        e = !0;
                    switch (this.page) {
                        case S:
                        case _:
                            e = this.product;
                            break;
                        case "PageFly":
                            window.__pageflyProducts && (e = this.product && this.collections);
                            break;
                        case "Shogun":
                            window.__shgProducts && window.__shgProducts.length && (e = this.product && this.collections);
                            break;
                        case "Cart":
                            e = this.cart;
                            break;
                        case C:
                            e = this.checkout
                    }
                    return t && e
                }
            }, {
                key: "setup",
                value: function() {
                    if (this.isLoaded) this.consoleLog("TFX already loaded");
                    else {
                        this.setDebugMode(), this.consoleLog("setup function is called"), this.consoleLog("USER", this.user), this.initTrackingConsent();
                        var t = this;
                        setTimeout(function() {
                            t.consoleLog("TFX ID: " + t.uniqueId), t.isLoaded = !0, t.setEventsPrefix(), t.consoleLog("Loaded", t), t.consoleLog(' Page is "'.concat(t.page, '"')), t.filterPixels() && t.pixelEvent ? (t.initPixels(), t.fireEvents(), t.isEventsAttached || t.attachListeners(), t.shop.time_on_site && t.trackTime()) : t.consoleLog("No Attached Pixels to current scenario")
                        }, 500)
                    }
                }
            }, {
                key: "setEventsPrefix",
                value: function() {
                    A(window, "OCUConfig") && (this.eventPrefix = "OCU")
                }
            }, {
                key: "setDebugMode",
                value: function() {
                    this.debug = this.shop.debug
                }
            }, {
                key: "consoleLog",
                value: function() {
                    if (this && this.debug) {
                        var t = [];
                        t.push("TFX:");
                        for (var e = 0; e < arguments.length; e++) t.push(arguments[e]);
                        console.log.apply(console, t)
                    }
                }
            }, {
                key: "setPage",
                value: function() {
                    var t = this,
                        e = window.location.href,
                        n = this;
                    if ((e = e.replace("https://", "")).includes("/collections") && (this.page = k), e.includes("/products/") && (this.page = _), e.includes("/cart")) this.page = "Cart";
                    else {
                        if ((e.includes("/checkouts/") || e.includes("/secure-checkout/") && x(window, "OCUConfig")) && (this.page = "Checkout"), e.includes("/s/checkout/") && (this.page = "Checkout"), (e.includes("/secure-checkout/offers/") || e.includes("/secure-chechout/offers")) && (this.page = "UpSellPage"), e.includes("/thank_you") && (this.page = C), e.includes("/orders/") && (this.page = w), e.includes("/secure-checkout/thank_you/") && (this.page = "OCUThankYou"), e.includes("/account/login") && (this.page = "Login"), e.includes("/account/register") && (this.page = "SignUp"), e.includes("/search") && (this.page = E), e.includes("apps/fast-checkout/")) {
                            e.includes("checkouts") && (this.page = "BetterCartCheckout");
                            var o = location.href;
                            setInterval(function() {
                                if (o != location.href) {
                                    o = location.href;
                                    var e = window.location.href;
                                    "payment" != L("step") || I("TFX_BC_PI") || (t.addPaymentInfoEvent(), O("TFX_BC_PI", !0, {
                                        "max-age": 60
                                    })), (e.includes("fast-checkout/checkouts") && e.includes("order") || e.includes("fast-checkout/orders") && e.includes("thank-you")) && !window.location.hash && (window.location = window.location + "#loaded", e.includes("fast-checkout/orders") && e.includes("thank-you") && (n.isLoaded = !1, n.checkout = null, n.cart = null), n.reset(), setTimeout(function() {
                                        n.load(), n.attachListeners(), n.filterPixels(), n.initPixels()
                                    }, 500))
                                }
                            }, 1500), setTimeout(function() {
                                n.initiateCheckoutEvent()
                            }, 2e3)
                        }
                        e.includes("fast-checkout/checkouts") && e.includes("order") && (this.page = "BetterCartCheckoutOffer"), e.includes("fast-checkout/orders") && e.includes("thank-you") && (this.page = T), A(window, "ZipifyPages") && !e.includes("/products/") && (this.page = b), "checkout_page" === x(window, "CHDataObject.partial_type") && (this.page = "CartHookCheckout"), "thank_you_page" === x(window, "CHDataObject.partial_type") && (this.page = "CartHookThankYou"), "upsell_page" === x(window, "CHDataObject.partial_type") && (this.page = "CartHookUpSellPage"), "downsell_page" === x(window, "CHDataObject.partial_type") && (this.page = "CartHookDownSellPage"), "page" === x(window, "CHDataObject.partial_type") && (this.page = "CartHookPage"), document.querySelector("body.gempage") && e.includes("/pages/") && (this.page = S), (e.includes("/pages/") || e.includes("/blogs/news/") || e.includes("/password")) && document.querySelector('link[href*="pagefly"]') && (this.page = "PageFly"), (e.includes("/pages/") || e.includes("/blogs/news/") || e.includes("/password")) && document.querySelector('link[href*="shogun"]') && (this.page = "Shogun"), this.page || (this.page = "Unknown")
                    }
                }
            }, {
                key: "loadPixelLibrary",
                value: function() {
                    if ("fbq" in window) return !0;
                    var t, e, n, o, i, a;
                    t = window, e = document, n = "script", t.fbq || (o = t.fbq = function() {
                        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
                    }, t._fbq || (t._fbq = o), o.push = o, o.loaded = !0, o.version = "2.0", o.queue = [], (i = e.createElement(n)).async = !0, i.src = "https://connect.facebook.net/en_US/fbevents.js", (a = e.getElementsByTagName(n)[0]).parentNode.insertBefore(i, a))
                }
            }, {
                key: "loadShopSettings",
                value: function() {
                    if ("undefined" != typeof tfx_shop_settings) console.log("config route not called"), this.shop = tfx_shop_settings, this.product || this.loadProduct();
                    else {
                        var t = this;
                        if (t.isFetchingShop) return;
                        t.isFetchingShop = !0, setTimeout(function() {
                            t.isFetchingShop = !1
                        }, 700), console.log("config route called"), U("".concat(this.backendURL, "/pull/config/").concat(this.shopName)).then(function(e) {
                            t.shop = JSON.parse(e), t.isFetchingShop = !1, t.product || t.loadProduct()
                        }).catch(function(e) {
                            t.consoleLog("TFX", e)
                        })
                    }
                }
            }, {
                key: "setShopName",
                value: function() {
                    this.shopName = x(window, "Shopify.shop") || x(window, "Shopify.Checkout.apiHost") || x(window, "CHDataObject.store_urls.store_url"), window.getOrderRequestObject && (this.shopName = window.getOrderRequestObject().shop), "BetterCartCheckout" != this.page && "BetterCartCheckoutOffer" != this.page && this.page != T || (this.shopName = window.location.hostname)
                }
            }, {
                key: "getUserExternalId",
                value: function() {
                    var t = this,
                        e = 5;
                    ! function n() {
                        "Shopify" in window ? t.setUser({
                            external_id: A(window, "ShopifyAnalytics.lib.user") ? window.ShopifyAnalytics.lib.user().traits().uniqToken : null
                        }) : --e >= 0 && setTimeout(function() {
                            t.consoleLog("time out for external ID"), n()
                        }, 200)
                    }()
                }
            }, {
                key: "loadCheckout",
                value: function() {
                    this.checkout = x(window, "Shopify.checkout"), this.checkout || this.page != T || (this.checkout = x(window, "bcData.order"), this.checkout.discount = x(window, "bcData.order.coupon"))
                }
            }, {
                key: "printTags",
                value: function(t) {
                    var e = t || this.tags || (localStorage.getItem("tags") || "").split(", ");
                    return e && e.length ? (t || (this.tags = e), c(new Set(e.map(function(t) {
                        return "string" == typeof t ? t.toString().trim() : t
                    }).filter(function(t) {
                        return "" !== t.trim()
                    }))).join(", ")) : ""
                }
            }, {
                key: "printCollections",
                value: function(t) {
                    var e = t || this.collections || (localStorage.getItem("collections") || "").split(", ");
                    return e && e.length ? (t || (this.collections = e), c(new Set(e.map(function(t) {
                        return "string" == typeof t ? t.toString().trim() : t
                    }).filter(function(t) {
                        return "" !== t.trim()
                    }))).join(", ")) : ""
                }
            }, {
                key: "clearArray",
                value: function(t) {
                    return t && Array.isArray(t) ? t.map(function(t) {
                        return t.trim()
                    }).filter(function(t) {
                        return t.length > 0
                    }) : []
                }
            }, {
                key: "loadTags",
                value: function() {
                    var t = document.querySelector('meta[name="tfx:tags"]');
                    t ? (this.tags = this.clearArray(t.content.split(", ")), localStorage.setItem("tags", this.tags.join(", "))) : -1 === [_, k, S, E, b].indexOf(this.page) && (this.tags = (localStorage.getItem("tags") || "").split(", "))
                }
            }, {
                key: "loadCollections",
                value: function() {
                    var t = document.querySelector('meta[name="tfx:collections"]');
                    if (t) this.collections = t.content.split(", ").map(function(t) {
                        return t.trim()
                    }).filter(function(t) {
                        return t.length > 0
                    }), localStorage.setItem("collections", this.collections.join(", "));
                    else {
                        var e = localStorage.getItem("collections") || "";
                        this.collections = e.split(", ")
                    }
                }
            }, {
                key: "extractTagsCollections",
                value: function(t) {
                    var e = {
                            tags: [],
                            collections: []
                        },
                        n = /<meta name="tfx:tags" content="(.*?)">/g.exec(t),
                        o = /<meta name="tfx:collections" content="(.*?)">/g.exec(t);
                    return n && (e.tags = n[1].split(", ").map(function(t) {
                        return t.trim()
                    }).filter(function(t) {
                        return t.length > 0
                    })), o && (e.collections = o[1].split(", ").map(function(t) {
                        return t.trim()
                    }).filter(function(t) {
                        return t.length > 0
                    })), e
                }
            }, {
                key: "setTagsCollections",
                value: function(t) {
                    var e = this;
                    this.getTagsCollections(t).then(function(t) {
                        var n = e.extractTagsCollections(t);
                        e.tags = n.tags, localStorage.setItem("tags", e.clearArray(e.tags).join(", ")), e.collections = n.collections, localStorage.setItem("collections", e.clearArray(e.collections).join(", "))
                    }).catch(this.consoleLog)
                }
            }, {
                key: "getTagsCollections",
                value: function(t) {
                    return U(t)
                }
            }, {
                key: "setTagsAndCollectionsFromBackend",
                value: function(t) {
                    var e = this,
                        n = this;
                    return t ? new Promise(function(o, i) {
                        U("".concat(e.backendURL, "/get/").concat(e.shopName, "/products?ids=") + t.join(",")).then(function(t) {
                            var a = JSON.parse(t);
                            if (a.products && a.products.length) {
                                var r = a.products.map(function(t) {
                                    return new Promise(function(o, i) {
                                        e.getTagsCollections("".concat(e.shopHost, "/products/").concat(t.handle)).then(function(i) {
                                            var a = e.extractTagsCollections(i);
                                            n.collections = n.collections.concat(a.collections), n.tags = n.tags.concat(a.tags), o({
                                                product_id: t.id,
                                                html: i
                                            })
                                        }).catch(function(t) {
                                            i(t)
                                        })
                                    })
                                });
                                Promise.all(r).then(function() {
                                    n.tags = c(new Set(n.tags)), n.collections = c(new Set(n.collections)), n.filterPixels(), n.initPixels(), o()
                                }).catch(function(t) {
                                    o(t)
                                })
                            } else i("No products fetched...")
                        }).catch(i)
                    }) : new Promise(function(t) {
                        return t()
                    })
                }
            }, {
                key: "getProduct",
                value: function(t) {
                    if (t) return U(t.endsWith("/") ? t.slice(0, -1) : t + ".json")
                }
            }, {
                key: "getProductById",
                value: function(t) {
                    if (t) return U("".concat(this.backendURL, "/get/").concat(this.shopName, "/products?ids=").concat(t))
                }
            }, {
                key: "loadProduct",
                value: function() {
                    var t = this;
                    if (!this.isLoadingProduct) {
                        var e = window.tfxProduct || null;
                        if (setTimeout(function() {
                                0 == t.incartForms && (t.incartForms = document.querySelectorAll("form[action='/cart/add'].variants").length, t.consoleLog(t.incartForms + " upsell offer"))
                            }, 1e3), e) this.product = e;
                        else {
                            var n = x(window, "ShopifyAnalytics.meta.page.pageType") ? window.ShopifyAnalytics.meta.page.pageType : "Unknown";
                            if (!window.__pageflyProducts || "home" != n && "page" != n && "article" != n && "password" != n || (this.isPageFlyPage = !0), "PageFly" === this.page) {
                                if (!this.shop) return null;
                                if (window.__pageflyProducts)
                                    for (var o in window.__pageflyProducts) window.__pageflyProducts.hasOwnProperty(o) && o && (this.product = l({}, window.__pageflyProducts[o].selected_or_first_available_variant), this.shop.report_variants || (this.product.id = parseInt(o)), this.tags = window.__pageflyProducts[o].tags, this.setTagsCollections("/products/".concat(window.__pageflyProducts[o].handle)))
                            } else if (void 0 !== window.__shgProducts && (this.isShogunPage = !0, "Shogun" === this.page)) {
                                if (!this.shop) return null;
                                if (window.__shgProducts)
                                    for (var i in this.consoleLog("Is shogun product page"), window.__shgProducts) window.__shgProducts.hasOwnProperty(i) && i && (this.consoleLog("shogun product"), this.consoleLog(window.__shgProducts[i]), this.product = window.__shgProducts[i], this.tags = window.__shgProducts[i].tags, this.setTagsCollections("/products/".concat(window.__shgProducts[i].handle)))
                            }
                            "Cart" === this.page && null == this.product && this.incartForms > 0 && this.getInCartUpsellProduct(this.upsellInCartOnce), this.consoleLog("load product called!!");
                            var a = document.querySelectorAll("form[action='/cart/add']");
                            if (this.consoleLog("load product addToCartForms.length: " + a.length), a.length > 0 && this.page != k && !this.isPageFlyPage && !this.isShogunPage) {
                                var r = a[0],
                                    c = r.querySelector('input[name="id"]'),
                                    s = r.getAttribute("id");
                                this.consoleLog("Product Form detected, product id is ".concat(s)), c && c.getAttribute("data-productid") && (s = c.getAttribute("data-productid")), s && (s = (s = (s = (s = (s = (s = (s = (s = s.replace("product_form_", "")).replace("upsell_product_form_", "")).replace("product-form-", "")).replace("product-template", "")).replace("AddToCartForm--", "")).replace("AddToCartForm-", "")).replace("js--", "")).replace(/\D/g, ""), isNaN(parseInt(s)) && (s = r.getAttribute("data-product_id")), this.consoleLog("Cleared Product ID is: ".concat(parseInt(s))), parseInt(s) && (parseInt(s) < 1e4 && document.querySelector("[product-id]") && -1 != document.querySelector("[product-id]").getAttribute("class").indexOf("arv-collection") && (s = document.querySelector("[product-id]").getAttribute("product-id"), this.consoleLog("more filters with Product ID is: ".concat(parseInt(s)))), this.isLoadingProduct = !0, this.getProductById(s).then(function(e) {
                                    var n = JSON.parse(e);
                                    n.products && n.products.length && (t.product = n.products[0], t.setTagsCollections("/products/".concat(t.product.handle)), t.page != _ && setTimeout(function() {
                                        t.viewContentEvent()
                                    }, 500)), t.isLoadingProduct = !1
                                }).catch(function(e) {
                                    t.isLoadingProduct = !1, t.consoleLog("loadProduct", e)
                                })))
                            }
                            null == this.product && "BetterCartCheckoutOffer" === this.page && (this.isLoadingProduct = !0, x(window, "bcData.product") && this.getProductById(x(window, "bcData.product.product_id")).then(function(e) {
                                var n = JSON.parse(e);
                                n.products && n.products.length && (t.product = n.products[0], t.isLoadingProduct = !1), t.isLoadingProduct = !1
                            }).then(function() {
                                t.viewContentEvent()
                            }).catch(function() {
                                t.isLoadingProduct = !1
                            }))
                        }
                    }
                }
            }, {
                key: "getInCartUpsellProduct",
                value: function(t) {
                    var e = this;
                    t && (this.upsellInCartOnce = !1, document.querySelectorAll("form[action='/cart/add'].variants").forEach(function(t) {
                        var n = t.querySelector('*[id^="product-select-"]').options[0].value;
                        parseInt(n) && U("".concat(e.backendURL, "/get/").concat(e.shopName, "/product/").concat(n, "/variant")).then(function() {
                            var n, o = (n = a.a.mark(function n(o) {
                                var i, r;
                                return a.a.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (void 0 === (i = JSON.parse(o)).variant.product_id) {
                                                n.next = 6;
                                                break
                                            }
                                            return r = "upsell_product_form_".concat(i.variant.product_id), t.setAttribute("id", r), n.next = 6, e.getProductById(i.variant.product_id).then(function(t) {
                                                var n = JSON.parse(t);
                                                n.products && n.products.length && (e.product = n.products[0], e.consoleLog("upsell offer product set", e.product))
                                            }).catch(function(t) {
                                                e.consoleLog(t)
                                            });
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n)
                            }), function() {
                                var t = this,
                                    e = arguments;
                                return new Promise(function(o, i) {
                                    var a = n.apply(t, e);

                                    function c(t) {
                                        r(a, o, i, c, s, "next", t)
                                    }

                                    function s(t) {
                                        r(a, o, i, c, s, "throw", t)
                                    }
                                    c(void 0)
                                })
                            });
                            return function(t) {
                                return o.apply(this, arguments)
                            }
                        }()).catch(function(t) {
                            e.consoleLog(t)
                        })
                    }))
                }
            }, {
                key: "setCart",
                value: function(t) {
                    if (t) {
                        for (var e in this.cart || (this.cart = {}), t) t.hasOwnProperty(e) && (this.cart[e] = t[e]);
                        localStorage.setItem("TFX_CART", JSON.stringify(this.cart))
                    }
                }
            }, {
                key: "setCartFromStorage",
                value: function() {
                    var t = null;
                    if (!localStorage.getItem("TFX_CART")) return t;
                    try {
                        this.cart = JSON.parse(localStorage.getItem("TFX_CART")), this.consoleLog("Set cart from storage", this.cart), t = !0
                    } catch (t) {
                        this.consoleLog(t)
                    }
                    return t
                }
            }, {
                key: "addToCart",
                value: function(t) {
                    if (t) try {
                        var e = JSON.parse(localStorage.getItem("TFX_CART"));
                        e || (e = {
                            items: []
                        }, localStorage.setItem("TFX_CART", JSON.stringify(e)));
                        var n = this.getVariant(t);
                        n.line_price = this.shop.value_reporting ? this.calculatePrice(n.price) : "0.00", n.quantity = document.getElementsByName("quantity")[0] ? document.getElementsByName("quantity")[0].value : 1, n.product_type = t.product_type, e.items.find(function(t) {
                            return t.id === n.id
                        }) || (e.items.push(n), localStorage.setItem("TFX_CART", JSON.stringify(e))), this.cart = e
                    } catch (t) {
                        this.consoleLog(t)
                    }
                }
            }, {
                key: "reloadCart",
                value: function() {
                    var t = this;
                    if (!this.isFetchingCart && 0 !== this.reloadCartAttemps) {
                        this.isFetchingCart = !0;
                        var e = x(this.cart, "item_count");
                        U("".concat(this.shopHost, "/cart.json")).then(function(n) {
                            var o = JSON.parse(n);
                            t.isFetchingCart = !1, o && (t.consoleLog("data.items.length", e), o.item_count === e ? (t.reloadCartAttemps--, setTimeout(function() {
                                t.reloadCart()
                            }, 500)) : (t.cart = o, localStorage.setItem("TFX_CART", JSON.stringify(o))))
                        }).catch(function(e) {
                            t.consoleLog(e), t.isFetchingCart = !1
                        })
                    }
                }
            }, {
                key: "loadCart",
                value: function() {
                    var t = this;
                    if (!this.isFetchingCart) {
                        this.isFetchingCart = !0;
                        var e = window.tfxCart || null;
                        e ? (this.cart = e, localStorage.setItem("TFX_CART", JSON.stringify(e)), this.isFetchingCart = !1) : this.setCartFromStorage() ? this.isFetchingCart = !1 : U("".concat(this.shopHost, "/cart.json")).then(function(e) {
                            var n = JSON.parse(e);
                            t.isFetchingCart = !1, n && (t.cart = n, localStorage.setItem("TFX_CART", JSON.stringify(n)))
                        }).catch(function(e) {
                            t.consoleLog(e), t.isFetchingCart = !1
                        })
                    }
                }
            }, {
                key: "saveCartProduct",
                value: function(t) {
                    if (t) try {
                        var e = JSON.parse(I("TFX_ATC"));
                        e.push(t), O("TFX_ATC", JSON.stringify(c(new Set(e))), {
                            "max-age": 1209600
                        })
                    } catch (e) {
                        O("TFX_ATC", JSON.stringify([t]), {
                            "max-age": 600
                        })
                    }
                }
            }, {
                key: "getSavedCartProducts",
                value: function() {
                    var t = [];
                    try {
                        t = JSON.parse(I("TFX_ATC"))
                    } catch (t) {
                        this.consoleLog(t)
                    }
                    return t || []
                }
            }, {
                key: "setAdvanceMatchingData",
                value: function() {
                    this.page === C || this.page === w ? x(window, "Shopify.checkout.shipping_address") ? this.setUser({
                        em: x(window, "Shopify.checkout.email"),
                        fn: x(window, "Shopify.checkout.shipping_address.first_name") ? x(window, "Shopify.checkout.shipping_address.first_name").toLowerCase() : "",
                        ln: x(window, "Shopify.checkout.shipping_address.last_name") ? x(window, "Shopify.checkout.shipping_address.last_name").toLowerCase() : "",
                        ct: x(window, "Shopify.checkout.shipping_address.city") ? x(window, "Shopify.checkout.shipping_address.city").toLowerCase().replace(/\s+/g, "") : "",
                        zp: x(window, "Shopify.checkout.shipping_address.zip") ? x(window, "Shopify.checkout.shipping_address.zip").replace(/\D/g, "") : "",
                        ph: A(window, "Shopify.checkout.shipping_address.phone") ? x(window, "Shopify.checkout.shipping_address.phone").replace(/[^0-9]/g, "") : null
                    }) : x(window, "Shopify.checkout.billing_address") ? this.setUser({
                        em: x(window, "Shopify.checkout.email"),
                        fn: x(window, "Shopify.checkout.billing_address.first_name") ? x(window, "Shopify.checkout.billing_address.first_name").toLowerCase() : "",
                        ln: x(window, "Shopify.checkout.billing_address.last_name") ? x(window, "Shopify.checkout.billing_address.last_name").toLowerCase() : "",
                        ct: x(window, "Shopify.checkout.billing_address.city") ? x(window, "Shopify.checkout.billing_address.city").toLowerCase().replace(/\s+/g, "") : "",
                        zp: x(window, "Shopify.checkout.billing_address.zip") ? x(window, "Shopify.checkout.billing_address.zip").replace(/\D/g, "") : "",
                        ph: A(window, "Shopify.checkout.billing_address.phone") ? x(window, "Shopify.checkout.billing_address.phone").replace(/[^0-9]/g, "") : null
                    }) : this.setUser({
                        em: x(window, "Shopify.checkout.email"),
                        fn: "",
                        ln: "",
                        ct: "",
                        zp: "",
                        ph: ""
                    }) : this.page === T && x(window, "bcData.order.shipping_address") && this.setUser({
                        em: x(window, "bcData.order.customer.email"),
                        fn: x(window, "bcData.order.shipping_address.first_name") ? x(window, "bcData.order.shipping_address.first_name").toLowerCase() : "",
                        ln: x(window, "bcData.order.shipping_address.last_name") ? x(window, "bcData.order.shipping_address.last_name").toLowerCase() : "",
                        ct: x(window, "bcData.order.shipping_address.city") ? x(window, "bcData.order.shipping_address.city").toLowerCase().replace(/\s+/g, "") : "",
                        zp: x(window, "bcData.order.shipping_address.zip") ? x(window, "bcData.order.shipping_address.zip").replace(/\D/g, "") : "",
                        ph: A(window, "bcData.order.customer.phone") ? x(window, "bcData.order.customer.phone").replace(/[^0-9]/g, "") : ""
                    })
                }
            }, {
                key: "getAdvanceMatchingData",
                value: function() {
                    if (this.setAdvanceMatchingData(), !this.shop.advance_matching || !this.advanceMatching) return {};
                    var t = this.getUser(),
                        e = {};
                    for (var n in t) t.hasOwnProperty(n) && t[n] && "".concat(t[n]).trim() && (e[n] = t[n].replace(/\s+/g, ""));
                    if (e.country) {
                        var o = Object.keys(P)[Object.values(P).indexOf(e.country.toLowerCase().replace(/\s/g, ""))];
                        e.country = o ? o.toLowerCase() : ""
                    }
                    return !e.country && this.client_ip_address.country_code && (e.country = this.client_ip_address.country_code.toLowerCase()), !e.st && this.client_ip_address.region_code && (e.st = this.client_ip_address.region_code.toLowerCase()), !e.zp && this.client_ip_address.zip_code && (e.zp = this.client_ip_address.zip_code.replace(/\D/g, "")), !e.ct && this.client_ip_address.city && (e.ct = this.client_ip_address.city.toLowerCase().replace(/\s+/g, "")), e
                }
            }, {
                key: "filterPixels",
                value: function() {
                    var t = this;
                    return t.consoleLog("Tags: ".concat(t.tags)), t.consoleLog("Collections: ".concat(t.collections)), t.pixels = t.shop.pixels.filter(function(e) {
                        var n = e.context ? e.context.filter(function(e) {
                                return -1 !== t.tags.indexOf(e.trim())
                            }) : [],
                            o = e.context ? e.context.filter(function(e) {
                                return -1 !== t.collections.indexOf(e.trim())
                            }) : [];
                        return t.consoleLog("".concat(e.pixel_id, " - Matched Tags ").concat(n.join(", "), ", Matched Collections ").concat(o.join(", "))), "master" === e.type || "tag" === e.type && n.length || "collection" === e.type && o.length
                    }), t.pixels.length
                }
            }, {
                key: "initPixels",
                value: function() {
                    var t = this,
                        e = t.getAdvanceMatchingData();
                    t.pixels.forEach(function(n) {
                        "geo" === t.shop.ccpa && fbq("dataProcessingOptions", ["LDU"], 0, 0), "disabled" === t.shop.ccpa && fbq("dataProcessingOptions", []), t.shop.microdata || fbq("set", "autoConfig", "false", n.pixel_id), -1 === t.initializedPixels.indexOf(n.pixel_id) && (fbq("init", n.pixel_id, e), t.initializedPixels.push(n.pixel_id), t.consoleLog(" Init Pixel: ".concat(n.pixel_id, ", Type: ").concat(n.type)), t.shop.shopify_pixel && t.pageViewEvent(n.pixel_id))
                    })
                }
            }, {
                key: "saveEmptyUser",
                value: function() {
                    var t = A(window, "ShopifyAnalytics.lib.user") ? window.ShopifyAnalytics.lib.user().traits().uniqToken : "",
                        e = {
                            fbc: I("_fbc"),
                            fbp: I("_fbp"),
                            em: "",
                            fn: "",
                            ln: "",
                            ph: "",
                            external_id: t,
                            ge: "",
                            db: "",
                            ct: "",
                            st: "",
                            zp: "",
                            country: "",
                            la: ""
                        };
                    try {
                        var n = localStorage.getItem("TFX_USER_DATA"),
                            o = JSON.parse(n);
                        if (o)
                            for (var i in o) o.hasOwnProperty(i) && o[i].length && (e[i] = o[i])
                    } catch (t) {
                        this.consoleLog("ERROR ON PARSE USER DATA", t)
                    }
                    return localStorage.setItem("TFX_USER_DATA", JSON.stringify(e)), e
                }
            }, {
                key: "getUser",
                value: function() {
                    try {
                        return JSON.parse(localStorage.getItem("TFX_USER_DATA")) || {}
                    } catch (t) {
                        this.consoleLog("User Data Parse Error")
                    }
                    return {}
                }
            }, {
                key: "setUser",
                value: function(t) {
                    if (t) {
                        var e = this.getUser();
                        for (var n in t) t.hasOwnProperty(n) && t[n] && "".concat(t[n]).trim() && (e[n] = t[n]);
                        this.user = e, localStorage.setItem("TFX_USER_DATA", JSON.stringify(e)), this.consoleLog("User data is saved:", e)
                    }
                }
            }, {
                key: "setUTMs",
                value: function() {
                    var t = {},
                        e = new URLSearchParams(window.location.search),
                        n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, r = e[Symbol.iterator](); !(n = (a = r.next()).done); n = !0) {
                            var c = a.value;
                            c[0].startsWith("utm_") && (t[c[0].replace("utm_", "")] = c[1])
                        }
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            n || null == r.return || r.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    Object.keys(t).length > 0 && localStorage.setItem("TFX_UTM", JSON.stringify(t))
                }
            }, {
                key: "getUTMs",
                value: function() {
                    try {
                        return JSON.parse(localStorage.getItem("TFX_UTM"))
                    } catch (t) {
                        return this.consoleLog(" ERROR on parse utm tags"), {}
                    }
                }
            }, {
                key: "fireEvents",
                value: function() {
                    switch (this.shop.shopify_pixel || this.pageViewEvent(), this.page) {
                        case "PageFly":
                        case S:
                        case "Shogun":
                            window.__shgProducts && this.ShogunViewContentEvent();
                            break;
                        case _:
                            this.viewContentEvent();
                            break;
                        case b:
                            this.zipifyViewContentEvent();
                            break;
                        case k:
                            this.viewCategoryEvent();
                            break;
                        case T:
                            this.purchaseEvent(x(this.checkout, "line_items"));
                            break;
                        case "Cart":
                            this.triggerMissedAtcEvents(), this.viewCartEvent();
                            break;
                        case "Checkout":
                            this.initiateCheckoutEvent(), this.ocuClearCookies();
                            break;
                        case w:
                            this.shop.orders_purchase && this.purchaseEvent(x(this.checkout, "line_items"));
                            break;
                        case C:
                            this.purchaseEvent(x(this.checkout, "line_items"));
                            break;
                        case "OCUThankYou":
                            this.ocuPurchaseEvent();
                            break;
                        case "UpSellPage":
                            this.ocuViewContentEvent(), this.ocuPurchaseEvent();
                            break;
                        case "CartHookCheckout":
                            this.cartHookInitiateCheckoutEvent();
                            break;
                        case "CartHookThankYou":
                            this.cartHookPurchaseEvent(this.page);
                            break;
                        case "CartHookUpSellPage":
                        case "CartHookDownSellPage":
                            this.cartHookPurchaseEvent(this.page), this.cartHookViewContentEvent();
                            break;
                        case "CartHookPage":
                            this.cartHookViewContentEvent();
                            break;
                        case E:
                            this.searchEvent({
                                q: L("q")
                            })
                    }
                }
            }, {
                key: "attachListeners",
                value: function() {
                    this.isEventsAttached = !0, this.listenSubmitsEvent(), this.listenModalOpenEvent(), this.listenFormChangeEvent(), this.listenDocumentClickEvent(), this.listenSpecialElements(10), this.listenElementsClickEvent(), this.listenTouchEvent(), this.listenPushStateEvent(), this.listenRequests(), this.listenBlurEvent(10)
                }
            }, {
                key: "testRequest",
                value: function(t) {
                    return U("https://tfx-bizspice.ngrok.io/?event=".concat(t.event, "&data=").concat(JSON.stringify(t.data))).then().catch()
                }
            }, {
                key: "fire",
                value: function(t, e, n, o, i, a) {
                    var r = o ? "trackSingleCustom" : "trackSingle",
                        c = null;
                    if (-1 !== [v].indexOf(t)) {
                        var s = n.order_id || x(window, "Shopify.checkout.order_id") || null;
                        if (s) {
                            if (I("".concat(s))) return;
                            if (U("".concat(this.backendURL, "/shop-orders/").concat(this.shopName, "?order_id=").concat(s), {
                                    method: "GET"
                                }).then().catch(console.log), this.getUser().hasOwnProperty("fbc") || this.getUser().hasOwnProperty("fbp") || this.getUser().hasOwnProperty("external_id")) {
                                var u = this.getUser().hasOwnProperty("fbc") ? this.getUser().fbc : "",
                                    l = this.getUser().hasOwnProperty("fbp") ? this.getUser().fbp : "",
                                    d = this.getUser().hasOwnProperty("external_id") ? this.getUser().external_id : "";
                                U("".concat(this.backendURL, "/save_fbp_fbc/").concat(this.shopName, "?order_id=").concat(s, "&fbc=").concat(u, "&fbp=").concat(l, "&external_id=").concat(d), {
                                    method: "GET"
                                }).then().catch(console.log)
                            }
                            a || O("".concat(s), !0, {
                                "max-age": 2592e3
                            }), c = {
                                eventID: "".concat(s)
                            }
                        }
                    }
                    if (-1 !== [f, g, m].indexOf(t)) {
                        var h = Math.floor(9e4 * Math.random()) + 1e4,
                            _ = Math.random().toString(36).substring(2) + "_" + h + "_" + (new Date).getTime();
                        this.shop && (_ = _ + "_" + this.shop.shop_id), c = {
                            eventID: _
                        }
                    }
                    n && !this.shop.contents && n.contents && delete n.contents, e && (i ? fbq(r, i, t, n, c) : this.pixels.forEach(function(e) {
                        return fbq(r, e.pixel_id, t, n, c)
                    }), t === p && (this.pageViewFired = !0), this.consoleLog('Fired : "'.concat(t, '" (').concat(r, ") with data:"), n)), -1 === [p, y].indexOf(t) && this.log(t, n, c)
                }
            }, {
                key: "log",
                value: function(t, e, n) {
                    var o = this;
                    if (this.shop.logging && e) {
                        if (t === v) {
                            var i = e.content_name.toLowerCase();
                            (i.includes("upsellpurchase") || i.includes("downsellpurchase")) && (t = "PurchUpDown"), i.includes("initial") && (t = "PurchInitial")
                        }
                        var a = [];
                        this.tags && this.tags.length && (a = c(new Set(this.tags.map(function(t) {
                            return "string" == typeof t ? t.toString().trim() : t
                        }).filter(function(t) {
                            return "" !== t.trim()
                        }))));
                        var r = [];
                        this.collections && this.collections.length && (r = c(new Set(this.collections.map(function(t) {
                            return "string" == typeof t ? t.toString().trim() : t
                        }).filter(function(t) {
                            return "" !== t.trim()
                        }))));
                        var s = {
                                ev: t,
                                evId: e.order_id || null,
                                si: this.shop.shop_id,
                                us: this.getUser(),
                                cr: this.shop.currency,
                                px: this.pixels.map(function(t) {
                                    return t.pixel_id
                                }),
                                cx: {
                                    tags: a.splice(0, 50),
                                    collections: r.splice(0, 50)
                                },
                                vl: x(e, "value") || 0,
                                pr: this.productIds,
                                ds: x(e, "discount") || 0,
                                ut: this.getUTMs() || {},
                                url: "".concat(window.location.origin).concat(window.location.pathname),
                                device: q(),
                                problems: this.getProblems(t),
                                content_name: e.content_name,
                                dirtyTags: this.tags,
                                uip: this.shop.user_ip,
                                uua: this.shop.user_agent,
                                sn: this.shop.shop,
                                splan: this.shop.tfx_planName
                            },
                            u = this.getAdvanceMatchingData();
                        null != u.external_id && "" != u.external_id || (this.getUserExternalId(), u = this.getAdvanceMatchingData()), t !== f && t !== g && t != m || (s.evId = n.eventID, s.ssed = e, s.ts = (new Date).toISOString(), s.ss = this.pixels.map(function(t) {
                            return {
                                pixel: t.pixel_id,
                                ss: t.serversideapi_enabled
                            }
                        }), s.am = u), t === v && (s.am = u), this.queueLog(s), U("".concat(this.backendURL, "/log"), {
                            method: "POST",
                            body: JSON.stringify(s)
                        }).then(function(t) {
                            o.consoleLog("LOGGED data", s, "Response", t), o.removeFromLogQueue(s)
                        }).catch(function(t) {
                            o.consoleLog("TFX:", t)
                        })
                    }
                }
            }, {
                key: "getProblems",
                value: function(t) {
                    var e = null;
                    if (t === v && !this.tags.length) {
                        var n = document.querySelector('meta[name="tfx:tags"]');
                        n && (this.tags = n.content);
                        var o = 1;
                        try {
                            localStorage.setItem("test", "test"), localStorage.removeItem("test"), o = 1
                        } catch (t) {
                            o = t.message
                        }
                        e = {
                            liquidTags: document.querySelector('meta[name="tfx:tags"]') ? document.querySelector('meta[name="tfx:tags"]').content : null,
                            page: this.page,
                            isLocalStorageWorking: o
                        }
                    }
                    return e
                }
            }, {
                key: "removeFromLogQueue",
                value: function(t) {
                    var e = null;
                    try {
                        e = (e = JSON.parse(localStorage.getItem("TFX_LOG_QUEUE"))).splice(1, e.indexOf(t)), localStorage.setItem("TFX_LOG_QUEUE", JSON.stringify(e))
                    } catch (e) {
                        this.consoleLog(e), localStorage.setItem("TFX_LOG_QUEUE", JSON.stringify([t]))
                    }
                }
            }, {
                key: "queueLog",
                value: function(t) {
                    var e = null;
                    try {
                        (e = JSON.parse(localStorage.getItem("TFX_LOG_QUEUE"))).push(t), localStorage.setItem("TFX_LOG_QUEUE", JSON.stringify(e))
                    } catch (e) {
                        localStorage.setItem("TFX_LOG_QUEUE", JSON.stringify([t]))
                    }
                }
            }, {
                key: "deleteATCqueue",
                value: function(t) {
                    if (t) {
                        var e = null;
                        try {
                            (e = JSON.parse(localStorage.getItem("TFX_QUEUE_ATC"))).splice(e.indexOf(t), 1), localStorage.setItem("TFX_QUEUE_ATC", JSON.stringify(c(new Set(e))))
                        } catch (t) {
                            this.consoleLog(t)
                        }
                    }
                }
            }, {
                key: "queueATC",
                value: function(t) {
                    if (t) {
                        var e = null;
                        try {
                            (e = JSON.parse(localStorage.getItem("TFX_QUEUE_ATC"))).push(t), localStorage.setItem("TFX_QUEUE_ATC", JSON.stringify(c(new Set(e))))
                        } catch (e) {
                            localStorage.setItem("TFX_QUEUE_ATC", JSON.stringify([t]))
                        }
                    }
                }
            }, {
                key: "triggerMissedAtcEvents",
                value: function() {
                    var t = this,
                        e = !0;
                    this.isIOS14 && !this.addToCartEventFire && (this.consoleLog("IOS14: Add To Cart Event Restricted"), e = !1);
                    var n = this;
                    if (this.cart && this.cart.items) {
                        var o = this.getSavedCartProducts();
                        this.cart.items.forEach(function(i) {
                            -1 === o.indexOf(i.handle) && (i.id = i.product_id, n.getTagsCollections(i.url).then(function(o) {
                                var a = t.extractTagsCollections(o),
                                    r = a.tags,
                                    c = a.collections,
                                    s = n.getProductData(f, i, r, c);
                                n.fire(f, e, s), n.saveCartProduct(i.handle)
                            }).catch(t.consoleLog))
                        })
                    }
                }
            }, {
                key: "triggerATCQueue",
                value: function() {
                    var t = this,
                        e = this,
                        n = null,
                        o = this.getSavedCartProducts(),
                        i = !0;
                    this.isIOS14 && !this.addToCartEventFire && (this.consoleLog("IOS14: Add To Cart Event Restricted"), i = !1);
                    try {
                        (n = JSON.parse(localStorage.getItem("TFX_QUEUE_ATC"))).length && n.forEach(function(n) {
                            -1 === o.indexOf(n) ? e.getProduct(n).then(function(o) {
                                try {
                                    var a = JSON.parse(o).product;
                                    e.getTagsCollections(n).then(function(o) {
                                        var r = t.extractTagsCollections(o),
                                            c = r.tags,
                                            s = r.collections,
                                            u = e.getProductData(f, a, c, s);
                                        e.fire(f, i, u), e.deleteATCqueue(n)
                                    }).catch(t.consoleLog)
                                } catch (e) {
                                    t.consoleLog(e)
                                }
                            }) : e.deleteATCqueue(n)
                        })
                    } catch (t) {}
                }
            }, {
                key: "triggerQueue",
                value: function() {
                    var t = this,
                        e = null;
                    try {
                        (e = JSON.parse(localStorage.getItem("TFX_LOG_QUEUE"))).length && e.forEach(function(e) {
                            U("".concat(t.backendURL, "/log"), {
                                method: "POST",
                                body: JSON.stringify(l({}, e, {
                                    isTriggeredFromQueue: 1
                                }))
                            }).then(function(n) {
                                t.removeFromLogQueue(e)
                            }).catch(function(e) {
                                t.consoleLog("TFX:", e)
                            })
                        })
                    } catch (t) {}
                }
            }, {
                key: "trackTime",
                value: function() {
                    var t = this;
                    setInterval(function() {
                        t.timeOnPage += 5, t.timeOnSite += 5, localStorage.setItem("TFX_TIME_ON_SITE", t.timeOnSite), t.timerEvent()
                    }, 5e3)
                }
            }, {
                key: "calculatePrice",
                value: function(t, e) {
                    if (!t) return 0;
                    var n = e || -1 !== t.toString().indexOf(".") ? t : t / 100;
                    return parseFloat(n / 100 * this.shop.reporting_percentage).toFixed(2)
                }
            }, {
                key: "getVariant",
                value: function(t) {
                    var e = null,
                        n = L("variant") || x(window, "ShopifyAnalytics.meta.selectedVariantId");
                    if (n && parseInt(n)) {
                        var o = x(window, "ShopifyAnalytics.meta.product.variants");
                        if (o && (e = o.find(function(t) {
                                return t.id === parseInt(n)
                            }))) return e
                    }
                    return this.consoleLog("V", e), !e && t.variants && t.variants.length && (e = t.variants[0]), e || t
                }
            }, {
                key: "getProductData",
                value: function(t, e, n, o) {
                    if (!e) return null;
                    var i = this.getVariant(e);
                    this.consoleLog("Selected Variant", i);
                    var a = document.getElementsByName("quantity")[0] ? document.getElementsByName("quantity")[0].value : 1,
                        r = this.shop.report_variants ? i.id : e.id,
                        c = x(window, "ShopifyAnalytics.meta.selectedVariantId");
                    return this.productIds = [e.id], {
                        content_name: "Trackify ".concat(this.eventPrefix, " ").concat(t, ": ").concat(this.printTags(n)),
                        content_type: this.shop.report_variants && e.variants.length ? "product" : "product_group",
                        content_ids: this.shop.report_variants && (parseInt(c) || i.id) || e.id,
                        content_category: x(e, "product_type") || x(e, "type") || "",
                        content_timedata: D(),
                        content_collections: this.printCollections(o),
                        value: this.shop.value_reporting ? this.calculatePrice(i.price) : "0.00",
                        currency: x(window, "ShopifyAnalytics.meta.currency") || this.shop.currency || "USD",
                        contents: [{
                            id: r,
                            name: e.title,
                            quantity: a
                        }]
                    }
                }
            }, {
                key: "getCartProductsData",
                value: function(t, e) {
                    var n = this;
                    if (!this.cart) return null;
                    var o = this,
                        i = e || !1;
                    return this.productIds = this.cart.items.map(function(t) {
                        return t.product_id || t.id
                    }), {
                        content_name: "Trackify ".concat(this.eventPrefix, " ").concat(t, " : ").concat(this.printTags()),
                        content_type: this.shop.report_variants ? "product" : "product_group",
                        content_ids: this.cart.items.map(function(t) {
                            return o.shop.report_variants ? t.id : t.product_id || t.id
                        }),
                        content_category: c(new Set(this.cart.items.map(function(t) {
                            return t.product_type
                        }))).join(", "),
                        content_timedata: D(),
                        content_collections: this.printCollections(),
                        value: this.shop.value_reporting ? this.calculatePrice(this.cart.original_total_price, i) : "0.00",
                        currency: x(window, "ShopifyAnalytics.meta.currency") || this.cart.currency || "USD",
                        contents: this.cart.items.map(function(t) {
                            return {
                                id: o.shop.report_variants ? t.id : t.product_id || t.id,
                                name: t.title,
                                quantity: t.quantity,
                                currency: x(window, "ShopifyAnalytics.meta.currency") || n.cart.currency || "USD",
                                item_price: o.calculatePrice(t.line_price),
                                item_category: t.product_type
                            }
                        }),
                        discount: this.cart.total_discount || 0,
                        num_items: this.cart.items.length
                    }
                }
            }, {
                key: "getPurchaseData",
                value: function(t, e) {
                    if (!t) return this.consoleLog("No Items found for trigger purchase"), null;
                    var n = this,
                        o = null,
                        i = [],
                        a = [],
                        r = [];
                    return this.productIds = [], t.forEach(function(t) {
                        n.cart && (o = n.cart.items.find(function(e) {
                            return e.variant_id === t.variant_id
                        })) && r.push(o.product_type), n.productIds.push(t.product_id || t.id), a.push(n.shop.report_variants && t.variant_id ? t.variant_id : t.product_id || t.id), i.push({
                            id: n.shop.report_variants && t.variant_id ? t.variant_id : t.product_id || t.id,
                            name: t.variant_title || t.title,
                            quantity: t.quantity,
                            item_price: n.calculatePrice(t.price, !0),
                            item_category: o ? o.product_type : ""
                        })
                    }), {
                        content_name: "Trackify ".concat(e || "Purchase", " : ").concat(this.printTags()),
                        content_type: this.shop.report_variants ? "product" : "product_group",
                        content_ids: a,
                        content_category: c(new Set(r)).join(", "),
                        content_timedata: D(),
                        content_collections: this.printCollections(),
                        value: this.calculatePrice(x(this, "checkout.total_price") || n.cart.original_total_price, !0),
                        currency: x(window, "ShopifyAnalytics.meta.currency") || this.shop.currency || "USD",
                        contents: i,
                        num_items: (x(this, "checkout.line_items") || t || []).length,
                        discount: x(this, "checkout.discount") || 0,
                        order_id: x(this, "checkout.order_id") || x(this, "interCartEvent.additional.transaction_id") || x(window, "chData.order.order_id"),
                        content_pmtmethod: x(this, "checkout.credit_card.brand") || "other"
                    }
                }
            }, {
                key: "getTimerData",
                value: function() {
                    return {
                        content_timeonpage: this.timeOnPage,
                        content_timeonsite: this.timeOnSite,
                        content_page: this.page
                    }
                }
            }, {
                key: "listenSpecialElements",
                value: function(t) {
                    var e = this,
                        n = this,
                        o = ['button[type*="submit"]', 'input[type*="submit"]', "button.btn-addtocart", 'button[type="button"][data-label="Add to Cart"]', "[id^=buttonapp]"].map(function(t) {
                            return 'form[action="/cart/add"] '.concat(t, ':not([style*="display:none"])')
                        }).concat(['#mst-stiky-box button[name="add"]', "#copyAddtoCartMobile", '.buy-me-btn button[type="submit"]', ".zpa-add-to-cart-btn.zp"]),
                        i = document.querySelectorAll(o.join(","));
                    i.length ? i.forEach(function(t) {
                        R(t, "click mousedown touch", function() {
                            if (e.page === b) {
                                var t = document.querySelector("form[data-zp-product-url]"),
                                    o = t.getAttribute("data-productid");
                                t && o && (e.zipifyAddToCartEvent({
                                    id: parseInt(o)
                                }), t.getAttribute("data-zp-link-type") && "checkout" == t.getAttribute("data-zp-link-type") && n.initiateCheckoutEvent(), n.consoleLog("method: listenSpecialElements called: zipifyAddToCartEvent"))
                            } else "Cart" === e.page && document.querySelectorAll("form[action='/cart/add'].variants"), e.addToCartEvent(!0), n.consoleLog("method: listenSpecialElements called: addToCartEvent")
                        })
                    }) : t > 0 && setTimeout(function() {
                        e.listenSpecialElements(--t)
                    }, 400)
                }
            }, {
                key: "listenRequests",
                value: function() {
                    if ("PageFly" !== this.page && "Shogun" !== this.page) {
                        var t, e, n = this;
                        t = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function(e, n) {
                            if (-1 !== n.indexOf("ref=tfx")) return t.apply(this, arguments), !0;
                            var i = this;
                            i.addEventListener("readystatechange", function t() {
                                4 === i.readyState && (o(i, e, n), i.removeEventListener("readyStateChange", t))
                            }), t.apply(i, arguments)
                        }, e = XMLHttpRequest.prototype.send, XMLHttpRequest.prototype.send = function() {
                            var t = this;
                            t.requestData = arguments[0], e.apply(t, arguments)
                        }
                    }

                    function o(t, e, o) {
                        if ("/cart/add.js" === o && "POST" === e) try {
                            var i = JSON.parse(t.response);
                            n.consoleLog("XHR", o, i), window.productJSON ? (n.zipifyAddToCartEvent({
                                id: i.id
                            }), n.consoleLog("method: listenRequests called: zipifyAddToCartEvent")) : n.product ? (n.addToCartEvent(), n.consoleLog("method: listenRequests called: addToCartEvent")) : (n.queueATC(i.handle), n.consoleLog("method: listenRequests called: queueATC"))
                        } catch (e) {
                            var a = JSON.parse(JSON.stringify(t.response));
                            n.consoleLog("XHR", o, a), window.productJSON ? (n.zipifyAddToCartEvent({
                                id: a.id
                            }), n.consoleLog("method: listenRequests called: zipifyAddToCartEvent")) : n.product ? (n.addToCartEvent(), n.consoleLog("method: listenRequests called: addToCartEvent")) : (n.queueATC(a.handle), n.consoleLog("method: listenRequests called: queueATC"))
                        }
                    }
                }
            }, {
                key: "listenPushStateEvent",
                value: function() {
                    var t = this;
                    ! function(t) {
                        var e = t.pushState;
                        t.pushState = function(n) {
                            return "function" == typeof t.onpushstate && t.onpushstate({
                                state: n
                            }), e.apply(t, arguments)
                        }
                    }(window.history), window.onpopstate = history.onpushstate = function() {
                        setTimeout(function() {
                            t.isTriggeredByState = !0, t.reset(), t.init()
                        }, 250)
                    }
                }
            }, {
                key: "listenSubmitsEvent",
                value: function() {
                    var t = this,
                        e = this,
                        n = window.location.href;
                    document.addEventListener("submit", function(o) {
                        if ((!document.activeElement || "update" !== document.activeElement.name) && A(o, "target.action")) {
                            var i = x(o, "target.action"),
                                a = null;
                            try {
                                a = Object.fromEntries(new FormData(o.target))
                            } catch (o) {
                                t.consoleLog(o)
                            }
                            a && t.setUser({
                                em: a["checkout[email_or_phone]"] || a["checkout[email]"],
                                ph: a["checkout[shipping_address_attributes][phone]"] || "",
                                fn: a["checkout[shipping_address][first_name]"] || a["checkout[shipping_address_attributes][first_name]"],
                                ln: a["checkout[shipping_address][last_name]"] || a["checkout[shipping_address_attributes][last_name]"],
                                ct: a["checkout[shipping_address][city]"] || a["checkout[shipping_address_attributes][city]"],
                                zp: a["checkout[shipping_address_attributes][zip]"]
                            }), i.includes("/search") && e.searchEvent(a), i.includes("/contact#contact_form") && e.contactEvent(a), i.includes("/account") && e.signUpEvent(a), i.includes("/account/login") && e.loginEvent(a), i.includes("/cart/add") && (e.addToCartEvent(!0), e.consoleLog("method: listenSubmitsEvent called: addToCartEvent")), !i.includes("/cart/add") && (i.includes("/cart") || i.includes("/checkout") && !n.includes("/thank_you") || "/checkout" === a.return_to) && e.initiateCheckoutEvent(), i.includes("/cart/add") && "/checkout" === a.return_to && e.initiateCheckoutEvent(), "/cart" === o.target.getAttribute("data-zp-product-url") && e.zipifyAddToCartEvent({
                                id: o.target.getAttribute("data-productid")
                            }), "contact_information" === x(window, "Shopify.Checkout.step") && e.paymentLeadEvent(), "shipping_method" === x(window, "Shopify.Checkout.step") && e.addShippingInfoEvent(), "payment_method" === x(window, "Shopify.Checkout.step") && e.addPaymentInfoEvent(), ("step_customer_information" === L("step") || x(window, "OCUConfig") && Object.keys(a).includes("checkout[email]")) && e.paymentLeadEvent(), "step_shipping_method" === L("step") && e.addShippingInfoEvent(), "step_payment_method" === L("step") && e.addPaymentInfoEvent()
                        }
                    })
                }
            }, {
                key: "listenModalOpenEvent",
                value: function() {
                    var t = this,
                        e = null;
                    document.addEventListener("click", function(n) {
                        setTimeout(function() {
                            var o = this,
                                i = !1;
                            n.target.getAttribute("data-remodal-target") && (i = !0, e = n.target.getAttribute("data-url")), "btn quick-shop" === n.target.classList.value && (e = n.target.parentElement.parentElement.querySelector('a[href*="collections"]').href, i = !0), "quick_shop action_button" === n.target.classList.value && n.target.closest("a") && (e = n.target.closest("a").href, i = !0), i && e && t.getProduct(e).then(function(e) {
                                var n = JSON.parse(e);
                                t.product = n.product, t.viewContentEvent()
                            }).catch(function(t) {
                                return o.consoleLog("listenModalOpenEvent", t)
                            })
                        }, 50)
                    })
                }
            }, {
                key: "listenTouchEvent",
                value: function() {
                    var t = this;
                    document.addEventListener("touchend", function(e) {
                        var n = e.target.closest("input");
                        n && "submit" === n.type && n.closest("form") && n.closest("form").action.includes("/checkout") && t.initiateCheckoutEvent()
                    })
                }
            }, {
                key: "listenDocumentClickEvent",
                value: function() {
                    var t = this;
                    document.addEventListener("click", function(e) {
                        setTimeout(function() {
                            if (A(e, "target")) {
                                "bookmarkit" === e.target.id && t.addToWishListEvent(), e.target.closest("form") && e.target.closest("form").action.includes("/cart/add") && (e.target.closest("button") && e.target.closest("button").classList.value.includes("action_button add_to_cart") && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: action_button add_to_cart")), e.target.closest("button") && e.target.closest("button").classList.value.includes("product__add-to-cart-button add_to_cart") && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: product__add-to-cart-button add_to_cart")), e.target.closest("button") && e.target.closest("button").classList.value.includes("fastcheckout_buy_button") && (t.addToCartEvent(!0), t.initiateCheckoutEvent(), t.consoleLog("method: listenDocumentClickEvent called: initiateCheckoutEvent action: fastcheckout_buy_button")), e.target.closest("button") && (e.target.closest("button").classList.value.includes("shopify_add_to_cart") || e.target.closest("button").classList.value.includes("so-btn-add-to-cart")) && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: shopify_add_to_cart")), e.target.closest("button") && e.target.closest("button").classList.value.includes("ProductForm__AddToCart") && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: ProductForm__AddToCart")), e.target.closest("button") && "buttonapp" === e.target.closest("button").id && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: buttonapp")), e.target.closest("button") && e.target.closest("button").getAttribute("data-cart-url") && (t.addToCartEvent(!0), t.consoleLog("method: listenDocumentClickEvent called: addToCartEvent action: data-cart-url")));
                                var n = e.target.closest("button");
                                (n && n.classList.value.includes("Cart__Checkout") || n.classList.value.includes("mu-checkout-btn")) && t.initiateCheckoutEvent();
                                var o = e.target.closest("a");
                                o && o.href.includes("/checkout") && !o.href.includes("a/secure/checkout") && t.initiateCheckoutEvent();
                                var i = e.target.closest("button");
                                i && i.classList.value.includes("checkout-button") && t.initiateCheckoutEvent();
                                var a = e.target.closest("button");
                                a && a.classList.value.includes("shopify-payment-button__button") && (t.addToCartEvent(!0), t.initiateCheckoutEvent())
                            }
                        }, 10)
                    })
                }
            }, {
                key: "listenElementsClickEvent",
                value: function() {
                    var t = this,
                        e = this;
                    document.querySelector("ch-button button") && document.querySelector("ch-button button").addEventListener("click", function(t) {
                        e.cartHookAddPaymentInfoEvent()
                    }), j(".product-form__add-button", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.consoleLog("method: listenElementsClickEvent called: addToCartEvent action: .product-form__add-button")
                        })
                    }), j('button[data-action="add-to-cart"]', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.consoleLog('method: listenElementsClickEvent called: addToCartEvent action: button[data-action="add-to-cart"]')
                        })
                    }), setTimeout(function() {
                        c(document.querySelectorAll("span")).filter(function(t) {
                            return t.innerHTML.trim().toLowerCase().includes("shoppay")
                        }).forEach(function(t) {
                            var n = t.closest("div[role=button]");
                            n && R(n, "click mousedown touch", function() {
                                e.initiateCheckoutEvent()
                            })
                        })
                    }, 1e3), j(".checkout-button.button", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j("form[action='/cart'] [name='checkout']", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j("form[action='/cart?locale=en'] [name='checkout']", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j('a[href="/checkout"]', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j("button[data-opc-dyn-c-btn-id]", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.initiateCheckoutEvent(), e.consoleLog("method: listenElementsClickEvent called: addToCartEvent action: button[data-opc-dyn-c-btn-id]")
                        })
                    }), j(".hs-checkout-purchase", 5, function(n) {
                        n && R(n, "click mousedown touch", function() {
                            t.consoleLog("TFX Fired Event"), e.initiateCheckoutEvent()
                        })
                    }), j(".quick-cart__buy-now", 5, function(n) {
                        n && R(n, "click mousedown touch", function() {
                            t.consoleLog("TFX Fired Event"), e.initiateCheckoutEvent()
                        })
                    }), j(".satcb-cs-checkout-btn", 5, function(n) {
                        n && R(n, "click mousedown touch", function() {
                            t.consoleLog("TFX Fired Event"), e.initiateCheckoutEvent()
                        })
                    }), j('button[name="buy"]', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.initiateCheckoutEvent(), e.consoleLog('method: listenElementsClickEvent called: addToCartEvent action: button[name="buy"]')
                        })
                    }), j("button[data-testid]", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.initiateCheckoutEvent(), e.consoleLog("method: listenElementsClickEvent called: addToCartEvent action: button[data-testid]")
                        })
                    }), j('input[value="Check out"]', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.initiateCheckoutEvent(), e.consoleLog('method: listenElementsClickEvent called: addToCartEvent action: input[value="Check out"]')
                        })
                    }), j('.cart_container button[type="submit"].action_button.add_to_cart', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.consoleLog('method: listenElementsClickEvent called: addToCartEvent action: .cart_container button[type="submit"].action_button.add_to_cart')
                        })
                    }), j('button[name="add"].action_button.add_to_cart', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.addToCartEvent(!0), e.consoleLog('method: listenElementsClickEvent called: addToCartEvent action: button[name="add"].action_button.add_to_cart')
                        })
                    }), j('button[type="submit"].Cart__Checkout', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j('button[name="checkout"].checkout_btn', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j('button[name="checkout"].checkout', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j('button[name="checkout"].action_button.add_to_cart', 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j(".slidecarthq .footer-buttons button.button.full", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j(".grid__item .right.Checkout", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j(".actions button.btn[onclick]", 5, function(t) {
                        t && R(t, "click mousedown touch", function() {
                            e.initiateCheckoutEvent()
                        })
                    }), j('button[name="add"].bttn.product-price', 5, function(n) {
                        n && R(n, "click mousedown touch", function() {
                            var n = !1,
                                o = document.querySelectorAll("form[action='/cart/add']");
                            if (o.length > 0 && e.page != k) {
                                var i = o[0].getAttribute("id");
                                e.consoleLog("Incart Product Form detected, product id is ".concat(i)), i && (i = (i = i.replace("product-actions-", "")).replace("upsell_product_form_", ""), e.consoleLog("Incart Cleared Product ID is: ".concat(parseInt(i))), parseInt(i) && my_offers.forEach(function(o) {
                                    t.consoleLog(o, "incart offer"), (o.id === parseInt(i) || o.offerable_product_shopify_ids.includes(parseInt(i))) && (e.consoleLog("incart offer product"), n = o.checkout_after_accepted)
                                }))
                            }
                            n && (e.consoleLog("Inside redirectToCheckout"), e.isFetchingCart = !0, U("".concat(e.shopHost, "/cart.json")).then(function(t) {
                                var n = JSON.parse(t);
                                e.isFetchingCart = !1, n && (e.cart = n, localStorage.setItem("TFX_CART", JSON.stringify(n)), setTimeout(function() {
                                    e.initiateCheckoutEvent()
                                }, 1e3))
                            }).catch(function(n) {
                                t.consoleLog(n), e.isFetchingCart = !1
                            })), e.consoleLog('method: listenElementsClickEvent Test called: InitiateCheckoutEvent action: button[name="add"].action_button.add_to_cart')
                        })
                    }), M(".bettercart_checkout", 5, function(n) {
                        n.length > 0 && (t.isBetterCart = !0, n.forEach(function(n) {
                            R(n, "click mousedown touch", function() {
                                t.consoleLog("GBTC_IC"), e.initiateCheckoutEvent()
                            })
                        }))
                    }), M(".shopify-payment-button .bettercart_checkout", 5, function(t) {
                        t.forEach(function(t) {
                            t && R(t, "click mousedown touch", function() {
                                e.addToCartEvent(!0), e.initiateCheckoutEvent(), e.consoleLog("method: listenElementsClickEvent called: addToCartEvent action: .shopify-payment-button .bettercart_checkout.bettercart_checkout")
                            })
                        })
                    }), j(".text-center.uppercase.cursor-pointer", 5, function(n) {
                        "BetterCartCheckoutOffer" == t.page && n && R(n, "click mousedown touch", function() {
                            e.addToCartEvent(!0)
                        })
                    }), M('button[data-pf-type="ProductATC"]', 5, function(n) {
                        n.forEach(function(n) {
                            n && R(n, "click touch", function() {
                                parseInt(n.getAttribute("data-product-id")) && (t.isLoadingProduct = !0, t.getProductById(n.getAttribute("data-product-id")).then(function(o) {
                                    var i = JSON.parse(o);
                                    i.products && i.products.length && (t.product = i.products[0], t.setTagsCollections("/products/".concat(t.product.handle)), t.isLoadingProduct = !1), t.isLoadingProduct = !1, e.addToCartEvent(!0), n.getAttribute("data-checkout") && "checkout" == n.getAttribute("data-checkout") && e.initiateCheckoutEvent()
                                }).catch(function(e) {
                                    t.isLoadingProduct = !1, t.consoleLog("loadProduct", e)
                                }))
                            })
                        })
                    }), this.page != k || this.iscategoryswatchloaded || (this.iscategoryswatchloaded = 1, M(".shopify-product-form.custome-product-form .swatch-element", 5, function(n) {
                        n && n.forEach(function(n) {
                            R(n, "click touch", function() {
                                var o = n.closest("form[action='/cart/add']"),
                                    i = o.querySelector('input[name="id"]'),
                                    a = o.getAttribute("id");
                                t.consoleLog("Product Form detected, product id is ".concat(a)), i && i.getAttribute("data-productid") && (a = i.getAttribute("data-productid")), a && (a = (a = (a = (a = (a = (a = a.replace("product_form_", "")).replace("upsell_product_form_", "")).replace("product-form-", "")).replace("product-template", "")).replace("AddToCartForm--", "")).replace("js--", ""), e.consoleLog("Cleared Product ID is: ".concat(parseInt(a))), parseInt(a) && (e.isLoadingProduct = !0, e.getProductById(a).then(function(t) {
                                    var n = JSON.parse(t);
                                    n.products && n.products.length && (e.product = n.products[0], e.setTagsCollections("/products/".concat(e.product.handle)), e.addToCartEvent(!0)), e.isLoadingProduct = !1
                                }).catch(function(t) {
                                    e.isLoadingProduct = !1, e.consoleLog("loadProduct", t)
                                })))
                            })
                        })
                    })), M("a.shg-btn.shg-cse", 5, function(n) {
                        n.forEach(function(n) {
                            n && R(n, "click touch", function() {
                                var o = n.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[data-shg-product-target="product-title"]').innerHTML,
                                    i = null;
                                for (var a in window.__shgProducts) window.__shgProducts[a].title === o && (i = window.__shgProducts[a].id);
                                i && (t.isLoadingProduct = !0, t.loadProduct(), t.getProductById(i).then(function(n) {
                                    var o = JSON.parse(n);
                                    o.products && o.products.length && (t.product = o.products[0], t.setTagsCollections("/products/".concat(t.product.handle)), t.isLoadingProduct = !1), t.isLoadingProduct = !1, e.addToCartEvent(!0)
                                }).catch(function(e) {
                                    t.isLoadingProduct = !1, t.consoleLog("loadProduct", e)
                                }))
                            })
                        })
                    })
                }
            }, {
                key: "listenFormChangeEvent",
                value: function() {
                    var t = this,
                        e = this;
                    document.addEventListener("change", function(n) {
                        if (n.target.closest("form")) try {
                            var o = Object.fromEntries(new FormData(n.target.closest("form"))),
                                i = x(n, "target.form.action");
                            (i.includes("/cart/add") || i.includes("/secure-checkout/offers/")) && e.customizeProductEvent(o)
                        } catch (n) {
                            t.consoleLog(n)
                        }
                    })
                }
            }, {
                key: "listenBlurEvent",
                value: function(t) {
                    var e = this,
                        n = this,
                        o = document.querySelectorAll(['customer-fieldset input[name="email"]'].join(","));
                    o.length ? o.forEach(function(t) {
                        t.addEventListener("blur", function(t) {
                            n.paymentLeadEvent(), n.setUser({
                                em: t.target.value
                            })
                        })
                    }) : t > 0 && setTimeout(function() {
                        e.listenBlurEvent(--t)
                    }, 400)
                }
            }, {
                key: "pageViewEvent",
                value: function(t) {
                    var e = !0;
                    this.isIOS14 && !this.pageViewEventFire && (this.consoleLog("IOS14: Page View Event Restricted"), e = !1), this.fire(p, e, null, !1, t)
                }
            }, {
                key: "viewCategoryEvent",
                value: function() {
                    var t = this.collections.join(","),
                        e = {
                            content_name: "Collection [ ".concat(t, " ]")
                        },
                        n = !0;
                    this.isIOS14 && !this.viewCategoryEventFire && (this.consoleLog("IOS14: View Category Event Restricted"), n = !1), this.fire("ViewCategory", n, e, !0)
                }
            }, {
                key: "viewContentEvent",
                value: function(t) {
                    var e = t || g,
                        n = !0;
                    this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: View Content Event Restricted"), n = !1), !this.product || this.isPageFlyPage || this.isShogunPage || this.fire(g, n, this.getProductData(e, this.product))
                }
            }, {
                key: "customizeProductEvent",
                value: function() {
                    var t = this.getProductData("CustomizeProduct", this.product),
                        e = !0;
                    this.isIOS14 && !this.customizeProductEventFire && (this.consoleLog("IOS14: Customize Product Event Restricted"), e = !1), this.fire("CustomizeProduct", e, t)
                }
            }, {
                key: "addToCartEvent",
                value: function(t) {
                    var e = this;
                    if ((!t || this.shop.atc_click) && !this.isAddingToCart) {
                        this.isAddingToCart = !0;
                        var n = !0;
                        if (this.isIOS14 && !this.addToCartEventFire && (this.consoleLog("IOS14: Add To Cart Event Restricted"), n = !1), this.product) {
                            var o = this.getProductData(f, this.product);
                            this.fire(f, n, o), this.addToCart(this.product), this.saveCartProduct(this.product.handle), setTimeout(function() {
                                e.isAddingToCart = !1, e.reloadCart(), e.setTagsCollections("/cart"), e.isPageFlyPage || e.isShogunPage || e.listenElementsClickEvent()
                            }, 2e3)
                        } else this.isAddingToCart = !1
                    }
                }
            }, {
                key: "viewCartEvent",
                value: function() {
                    var t = this.getCartProductsData("ViewCart"),
                        e = !0;
                    this.isIOS14 && !this.viewCartEventFire && (this.consoleLog("IOS14: View Cart Event Restricted"), e = !1), this.fire("ViewCart", e, t, !0)
                }
            }, {
                key: "initiateCheckoutEvent",
                value: function(t) {
                    var e = this;
                    this.consoleLog("Initiate Checkout Event");
                    var n = !0;
                    if (this.isIOS14 && !this.initiateCheckoutEventFire && (this.consoleLog("IOS14: Initiate Checkout Event Restricted"), n = !1), !I("TFX_IC") && this.shop.ic_switch) {
                        O("TFX_IC", !0, {
                            "max-age": 600
                        });
                        var o, i = !0;
                        if (window.OCUIncart)
                            if (window.OCUIncart.is_precheckout) ! function() {
                                var a = e,
                                    r = {};
                                x(window, "OCUIncart.incarts") ? r = window.OCUIncart.incarts : (e.consoleLog("updated condition for ocu 1"), window.OCUIncart.metafields.main.general.incarts && (r = window.OCUIncart.metafields.main.general.incarts)), e.consoleLog(r, "ocuincarts");
                                var c = [];
                                window.OCUIncart.triggers;
                                "string" == typeof window.OCUIncart.triggers && window.OCUIncart.triggers.split(",").forEach(function(t) {
                                    t && c.push(t.split(":")[1])
                                });
                                var s = !1,
                                    u = !0,
                                    l = !0;
                                e.isIOS14 && !e.addToCartEventFire && (e.consoleLog("IOS14: Add To Cart Event Restricted"), u = !1), e.isIOS14 && !e.viewContentEventFire && (e.consoleLog("IOS14: View Content Event Restricted"), l = !1);
                                var d = function() {
                                    if (e.consoleLog("inside ocu key"), !r.hasOwnProperty(o)) return "continue";
                                    e.consoleLog("inside ocu keya after continue");
                                    var d = r[o];
                                    e.consoleLog(d, "incartobject");
                                    var h = !1;
                                    if (d.shopify_product_id && (c.forEach(function(t) {
                                            d.tag_titles.forEach(function(e) {
                                                e.toLowerCase() == t && (h = !0)
                                            }), d.variant_ids.forEach(function(e) {
                                                e == t && (h = !0)
                                            })
                                        }), x(window, "OCUIncart.metafields.main.general.incarts") && (e.consoleLog("updated condition for ocu 2"), h = !0), !s && h)) {
                                        s = !0, e.consoleLog("Pre Purchase: product found");
                                        var p = d.shopify_product_id,
                                            v = "",
                                            y = "";
                                        i = !1, a.getProductById(p).then(function(o) {
                                            var i = JSON.parse(o);
                                            if (i.products && i.products.length) {
                                                var r = i.products[0];
                                                try {
                                                    a.getTagsCollections("/products/".concat(r.handle)).then(function(t) {
                                                        var n = e.extractTagsCollections(t);
                                                        v = n.tags, y = n.collections;
                                                        var o = a.getProductData(g, r, v, y);
                                                        a.fire(g, l, o), e.consoleLog("Pre Purchase: fire View content")
                                                    }).catch(e.consoleLog)
                                                } catch (t) {
                                                    e.consoleLog(t)
                                                }
                                                setTimeout(function() {
                                                    var e = this;
                                                    j(".ocu-hero-content__cta button.ocu-cta__buy", 5, function(o) {
                                                        o && R(o, "click touch", function() {
                                                            var o = a.getProductData(f, r, v, y);
                                                            a.fire(f, u, n, o), a.addToCart(r), a.saveCartProduct(r.handle), e.consoleLog("Pre Purchase: fire AddToCart"), a.collections = a.collections.concat(y), a.tags = a.tags.concat(v), localStorage.setItem("tags", a.clearArray(a.tags).join(", ")), localStorage.setItem("collections", a.clearArray(a.collections).join(", "));
                                                            var i = a.getVariant(r);
                                                            a.shop.value_reporting && (a.cart.original_total_price = parseFloat(a.cart.original_total_price + 100 * i.price), a.cart.total_price = parseFloat(a.cart.total_price + 100 * i.price), a.cart.items_subtotal_price = parseFloat(a.cart.total_price + 100 * i.price), localStorage.setItem("TFX_CART", JSON.stringify(a.cart))), new Promise(function(t, e) {
                                                                t(!0)
                                                            }).then(function(t) {
                                                                a.reloadCart()
                                                            }).then(function() {
                                                                setTimeout(function() {
                                                                    a.fire(m, n, a.getCartProductsData(m, t))
                                                                }, 1e3)
                                                            })
                                                        })
                                                    }), j(".ocu-hero-content__cta .ocu-cta__decline", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    }), j("button.ocu-modal__close", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    }), j("div.pico-overlay", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    }), j(".ocu-upsell__footer button.ocu-proceed", 5, function(o) {
                                                        o && R(o, "click touch", function() {
                                                            var o = a.getProductData(f, r, v, y);
                                                            a.fire(f, u, n, o), a.addToCart(r), a.saveCartProduct(r.handle), e.consoleLog("Pre Purchase: fire AddToCart"), a.collections = a.collections.concat(y), a.tags = a.tags.concat(v), localStorage.setItem("tags", a.clearArray(a.tags).join(", ")), localStorage.setItem("collections", a.clearArray(a.collections).join(", "));
                                                            var i = a.getVariant(r);
                                                            a.shop.value_reporting && (a.cart.original_total_price = parseFloat(a.cart.original_total_price + 100 * i.price), a.cart.total_price = parseFloat(a.cart.total_price + 100 * i.price), a.cart.items_subtotal_price = parseFloat(a.cart.total_price + 100 * i.price), localStorage.setItem("TFX_CART", JSON.stringify(a.cart))), new Promise(function(t, e) {
                                                                t(!0)
                                                            }).then(function(t) {
                                                                a.reloadCart()
                                                            }).then(function() {
                                                                setTimeout(function() {
                                                                    a.fire(m, n, a.getCartProductsData(m, t))
                                                                }, 1e3)
                                                            })
                                                        })
                                                    }), j(".ocu-upsell__footer .ocu-decline", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    }), j("button.ocu-upsell__cross", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    }), j("div.v--modal-overlay", 5, function(e) {
                                                        e && R(e, "click touch", function() {
                                                            a.fire(m, n, a.getCartProductsData(m, t))
                                                        })
                                                    })
                                                }, 4e3)
                                            }
                                            a.isLoadingProduct = !1
                                        }).catch(function(t) {
                                            a.isLoadingProduct = !1, a.consoleLog("loadProduct", t)
                                        })
                                    }
                                };
                                for (o in r) d()
                            }();
                        i && this.fire(m, n, this.getCartProductsData(m, t)), this.consoleLog("Other: Initiate Checkout Event Fired")
                    }
                }
            }, {
                key: "paymentLeadEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.addPaymentLeadEventFire && (this.consoleLog("IOS14: Payment Lead Event Restricted"), t = !1), I("TFX_LEAD") || (O("TFX_LEAD", !0, {
                        "max-age": 200
                    }), this.fire("Lead", t, this.getCartProductsData("Lead")), this.consoleLog("Other: Payment Lead Event Fired"))
                }
            }, {
                key: "addShippingInfoEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.addShippingInfoEventFire && (this.consoleLog("IOS14: Add Shipping Info Event Restricted"), t = !1);
                    var e = this.getCartProductsData("AddShippingInfo");
                    this.fire("AddShippingInfo", t, e, !0), this.consoleLog("Other: Add Shipping Info Event Fired")
                }
            }, {
                key: "addPaymentInfoEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.addPaymentInfoEventFire && (this.consoleLog("IOS14: Add Payment Info Event Restricted"), t = !1);
                    var e = this.getCartProductsData("AddPaymentInfo");
                    this.fire("AddPaymentInfo", t, e, !0), this.consoleLog("Other: Add Payment Info Event Fired")
                }
            }, {
                key: "purchaseEvent",
                value: function(t, e) {
                    var n = !0;
                    this.isIOS14 && !this.purchaseEventFire && (this.consoleLog("IOS14: Purchase Event Restricted"), n = !1);
                    var o = this,
                        i = null;
                    this.clearArray(this.tags).length && this.clearArray(this.collections).length && this.page !== T || t && (i = t.map(function(t) {
                        return t.product_id
                    }).filter(function(t) {
                        return !!t
                    })), this.setTagsAndCollectionsFromBackend(i).then(function() {
                        var i = o.getPurchaseData(t, e);
                        if ((o.consoleLog("PURCHASE EVENT DATA", JSON.stringify(i)), o.checkout) && Math.floor(((new Date).getTime() - new Date(o.checkout.updated_at).getTime()) / 1e3 / 60) > 10) return void o.consoleLog("Event not triggered because order created at more then 10 minutes ago");
                        o.fire(v, n, i), F("TFX_IC"), F("TFX_LEAD"), F("TFX_ATC")
                    }).catch(this.consoleLog)
                }
            }, {
                key: "addToWishListEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.addToWishlistEventFire && (this.consoleLog("IOS14: Add To Wish List Event Restricted"), t = !1);
                    var e = this.getProductData(g, this.product);
                    this.fire("AddToWishlist", t, e)
                }
            }, {
                key: "searchEvent",
                value: function(t) {
                    var e = !0;
                    this.isIOS14 && !this.searchEventFire && (this.consoleLog("IOS14: Search Event Restricted"), e = !1);
                    var n = {
                        currency: this.shop.currency,
                        search_string: t.q,
                        value: 0
                    };
                    this.fire("Search", e, n)
                }
            }, {
                key: "contactEvent",
                value: function(t) {
                    var e = !0;
                    this.isIOS14 && !this.contactEventFire && (this.consoleLog("IOS14: Contact Event Restricted"), e = !1), this.setUser({
                        fn: t["contact[first_name]"],
                        ln: t["contact[last_name]"],
                        em: t["contact[email]"]
                    }), this.fire("Contact", e, {})
                }
            }, {
                key: "signUpEvent",
                value: function(t) {
                    this.setUser({
                        fn: t["customer[first_name]"],
                        ln: t["customer[last_name]"],
                        em: t["customer[email]"]
                    })
                }
            }, {
                key: "loginEvent",
                value: function(t) {
                    this.setUser({
                        em: t["customer[email]"]
                    })
                }
            }, {
                key: "timerEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.timerEventFire && (this.consoleLog("IOS14: Timer Event Restricted"), t = !1);
                    var e = this.getTimerData();
                    this.fire(y, t, e, !0)
                }
            }, {
                key: "setZipifyTagsCollections",
                value: function() {
                    var t = this;
                    if (!A(window, "productJSON")) return {};
                    var e = this;
                    this.collections = [], this.tags = [], this.isZipifyTagsCollectionsLoaded = !0, this.isLogingZipifyTagsCollections = !0, setTimeout(function() {
                        t.isZipifyTagsCollectionsLoaded = !1
                    }, 1200);
                    var n = window.productJSON.map(function(e) {
                        return new Promise(function(n) {
                            t.getTagsCollections("/products/".concat(e.handle)).then(function(t) {
                                n({
                                    product_id: e.id,
                                    html: t
                                })
                            }).catch(t.consoleLog)
                        })
                    });
                    Promise.all(n).then(function(n) {
                        n.forEach(function(n) {
                            var o = t.extractTagsCollections(n.html);
                            t.collections = t.collections.concat(o.collections), t.tags = t.tags.concat(o.tags), e.tags = c(new Set(e.tags)), e.collections = c(new Set(e.collections)), e.shop && (e.filterPixels(), e.initPixels()), t.zipifyProductsTagsCollections.push({
                                product_id: n.product_id,
                                tags: o.tags,
                                collections: o.collections
                            }), t.isLogingZipifyTagsCollections = !1
                        })
                    }).catch(function(e) {
                        t.consoleLog(e), t.isLogingZipifyTagsCollections = !1
                    })
                }
            }, {
                key: "getZipifyProductsData",
                value: function() {
                    var t = this;
                    if (!A(window, "productJSON")) return null;
                    var e = window.productJSON;
                    return {
                        content_name: "Trackify PG ViewContent: ".concat(this.printTags()),
                        content_type: this.shop.report_variants && product.variants.length ? "product" : "product_group",
                        content_ids: e.map(function(e) {
                            return t.shop.report_variants ? t.getVariant(e).id : e.id
                        }),
                        content_category: c(new Set(e.map(function(t) {
                            return t.type
                        }))).join(", "),
                        content_timedata: D(),
                        content_collections: this.printCollections(),
                        value: this.shop.value_reporting ? this.calculatePrice(e.reduce(function(t, e) {
                            return t + e.price
                        }, 0)) : 0,
                        currency: x(window, "ShopifyAnalytics.meta.currency") || this.cart.currency,
                        contents: e.map(function(e) {
                            return {
                                id: t.shop.report_variants ? t.getVariant(e).id : e.id,
                                name: e.title,
                                quantity: 1,
                                item_price: t.calculatePrice(e.price),
                                item_category: e.type
                            }
                        }),
                        num_items: e.length
                    }
                }
            }, {
                key: "zipifyViewContentEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: Zipify View Content Event Restricted"), t = !1);
                    var e = this;
                    if (this.isLogingZipifyTagsCollections) setTimeout(function() {
                        e.zipifyViewContentEvent()
                    }, 500);
                    else {
                        var n = this.getZipifyProductsData();
                        n && !(x(window, "ZipifyPages.analytics.disabled_events.trackify") || []).length && this.fire(g, t, n), this.consoleLog("Other: Zipify View Content Event Fired")
                    }
                }
            }, {
                key: "zipifyAddToCartEvent",
                value: function(t) {
                    var e = this;
                    if (A(window, "productJSON"))
                        if (this.isLogingZipifyTagsCollections) setTimeout(function() {
                            e.zipifyAddToCartEvent()
                        }, 500);
                        else {
                            var n = window.productJSON.find(function(e) {
                                return e.id === parseInt(t.id) || e.variants.find(function(e) {
                                    return e.id === parseInt(t.id)
                                })
                            });
                            if (n) {
                                var o = this.zipifyProductsTagsCollections.find(function(t) {
                                    return t.product_id === n.id
                                });
                                o && (this.tags = o.tags, this.collections = o.collections), this.product = n, this.addToCartEvent()
                            }
                            this.consoleLog("Other: Zipify Add To Cart Event Fired")
                        }
                }
            }, {
                key: "ShogunViewContentEvent",
                value: function() {
                    var t = !0;
                    if (this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: Shogun View Content Event Restricted"), t = !1), this.product) {
                        var e = this.getProductData(g, this.product);
                        this.fire(g, t, e)
                    } else this.consoleLog("Other: Shogun View Content Event Fired")
                }
            }, {
                key: "getOCUProduct",
                value: function() {
                    this.product = x(window, "OCUConfig.product")
                }
            }, {
                key: "getOcuPurchaseData",
                value: function(t, e) {
                    var n = this;
                    if (!A(window, "OCUConfig.trackify.transactions")) return {};
                    var o = this,
                        i = [],
                        a = [],
                        r = [],
                        s = 0,
                        u = [];
                    return window.OCUConfig.trackify.transactions.forEach(function(t) {
                        e ? -1 !== ["completed", "bought", "thank_you_page"].indexOf(t.status) && t.items.length && (u = u.concat(t.items), s += parseFloat(t.total_amount)) : ("completed" === t.status && t.items.length && (u = t.items, s = t.total_amount), "bought" === t.status && t.items.length && (u = t.items, s = t.total_amount), "thank_you_page" === t.status && t.items.length && (u = t.items, s = t.total_amount))
                    }), u.forEach(function(t) {
                        r.push(t.product.product_type), a.push(n.shop.report_variants ? t.shopify_variant_id : t.shopify_product_id), i.push({
                            id: o.shop.report_variants ? t.shopify_variant_id : t.shopify_product_id,
                            name: t.variant_title || t.title,
                            quantity: t.quantity,
                            currency: n.shop.currency,
                            item_price: o.calculatePrice(t.price, !0),
                            item_category: t.product ? t.product.product_type : ""
                        })
                    }), {
                        content_name: "Trackify OCU ".concat(t, ": ").concat(this.printTags()),
                        content_type: this.shop.report_variants ? "product" : "product_group",
                        content_ids: a,
                        content_category: c(new Set(r)).join(", "),
                        content_timedata: D(),
                        content_collections: this.printCollections(),
                        value: this.calculatePrice(s || 0, !0),
                        currency: this.shop.currency || "USD",
                        contents: i,
                        num_items: (window.OCUConfig.trackify.transactions[0].items || []).length,
                        discount: x(this, "checkout.discount.brand") || 0,
                        order_id: x(window, "OCUConfig.trackify.shopify_order_id"),
                        content_pmtmethod: "OCU_".concat(x(window, "OCUConfig.trackify.payment_method") || "other")
                    }
                }
            }, {
                key: "getOcuPurchaseEventName",
                value: function() {
                    var t = null,
                        e = null,
                        n = null,
                        o = !1;
                    return window.OCUConfig.trackify.transactions.forEach(function(i) {
                        if ("completed" !== i.status || I("TFX_OCU_".concat(i.name)) || (e = "TFX_OCU_".concat(i.name), t = {
                                name: "InitialPurchase",
                                cookie: e,
                                price: i.total_amount
                            }, O(e, !0, {
                                "max-age": 600
                            })), "bought" === i.status && !I("TFX_OCU_".concat(i.name))) {
                            e = "TFX_OCU_".concat(i.name);
                            t = {
                                name: "".concat(i.name.replace(/[a-zA-Z]/g, "")).concat(i.name.replace(/[0-9]/g, ""), "Purchase"),
                                cookie: e,
                                price: i.total_amount
                            };
                            O(e, !0, {
                                "max-age": 600
                            })
                        }
                        "thank_you_page" !== i.status || I("TFX_OCU_Purchase") || (n = {
                            name: "Purchase",
                            cookie: e = "TFX_OCU_Purchase",
                            price: i.total_amount
                        }, O(e, !0, {
                            "max-age": 600
                        })), !o && i.name.indexOf("Upsell") > -1 && (o = !0)
                    }), !o && n && (t = n), t
                }
            }, {
                key: "ocuClearCookies",
                value: function() {
                    document.cookie.split(";").map(function(t) {
                        return t.split("=")[0]
                    }).filter(function(t) {
                        return t.includes("TFX_OCU_")
                    }).forEach(function(t) {
                        F(t.trim())
                    })
                }
            }, {
                key: "ocuPurchaseEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.purchaseEventFire && (this.consoleLog("IOS14: OCU Purchase Event Restricted"), t = !1);
                    var e = this.getOcuPurchaseEventName();
                    if (this.consoleLog(e), "OCUThankYou" === this.page) {
                        if (I("TFX_ORDER_OCU_".concat(x(window, "OCUConfig.trackify.shopify_order_id")))) return;
                        if (O("TFX_ORDER_OCU_".concat(x(window, "OCUConfig.trackify.shopify_order_id")), 1, {
                                "max-age": 600
                            }), e) {
                            var n = this.getOcuPurchaseData(e.name);
                            this.shop.ocu_ss_api ? (this.fire(e.name.replace("TFX_OCU_", ""), t, n, !0), n = this.getOcuPurchaseData(e.name, !0), this.fire(v, t, n)) : this.fire(v, t, n, !1, null, !0)
                        }
                    } else {
                        if (!e) return;
                        var o = this.getOcuPurchaseData(e.name);
                        this.shop.ocu_ss_api ? this.fire(e.name.replace("TFX_OCU_", ""), t, o, !0) : this.fire(v, t, o)
                    }
                    F("TFX_IC"), F("TFX_LEAD"), this.consoleLog("Other: OCU Purchase Event Fired")
                }
            }, {
                key: "ocuViewContentEvent",
                value: function() {
                    var t = !0;
                    this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: OUC View Content Event Restricted"), t = !1);
                    var e, n, o, i = window.OCUConfig.trackify.transactions.filter(function(t) {
                            return "declined" === t.status
                        }).length,
                        a = window.OCUConfig.trackify.transactions.filter(function(t) {
                            return -1 !== ["bought", "offered"].indexOf(t.status)
                        }).length,
                        r = "DownsellViewContent";
                    i || (n = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth"], o = ["twent", "thirt", "fort", "fift", "sixt", "sevent", "eight", "ninet"], r = ((e = a) < 20 ? N(n[e]) : e % 10 == 0 ? N(o[Math.floor(e / 10) - 2] + "ieth") : N(o[Math.floor(e / 10) - 2]) + "y" + N(n[e % 10])) + "UpsellViewContent"), this.viewContentEvent(r, t), this.consoleLog("Other: OUC View Content Event Fired")
                }
            }, {
                key: "getProductsFromBackend",
                value: function(t, e) {
                    var n = this,
                        o = this;
                    return new Promise(function(i, a) {
                        U("".concat(n.backendURL, "/get/").concat(n.shopName, "/products?ids=") + t.map(function(t) {
                            return t.id
                        }).join(",")).then(function(r) {
                            var s = JSON.parse(r);
                            if (s.products && s.products.length) {
                                var u = s.products.map(function(e) {
                                    var n = t.find(function(t) {
                                        return t.id === e.id
                                    }) || {};
                                    return l({}, e, {}, n)
                                });
                                o.setCart({
                                    items: u,
                                    original_total_price: e.original_total_price,
                                    currency: e.currency,
                                    total_discount: e.discount
                                });
                                var d = s.products.map(function(t) {
                                    return new Promise(function(e, i) {
                                        n.getTagsCollections("".concat(n.shopHost, "/products/").concat(t.handle)).then(function(i) {
                                            var a = n.extractTagsCollections(i);
                                            o.collections = o.collections.concat(a.collections), o.tags = o.tags.concat(a.tags), e({
                                                product_id: t.id,
                                                html: i
                                            })
                                        }).catch(function(t) {
                                            i(t)
                                        })
                                    })
                                });
                                Promise.all(d).then(function() {
                                    o.tags = c(new Set(o.tags)), o.collections = c(new Set(o.collections)), o.filterPixels(), o.initPixels(), i({
                                        items: u
                                    })
                                }).catch(function(t) {
                                    i({
                                        items: u
                                    })
                                })
                            } else a("No products fetched...")
                        }).catch(a)
                    })
                }
            }, {
                key: "listenInterCartEvents",
                value: function(t) {
                    var e = this,
                        n = this,
                        o = [];
                    this.consoleLog("Intercart", t), t.forEach(function(t) {
                        if (-1 === n.interCartEvents.indexOf(t.type)) {
                            n.interCartEvents.push(t.type), n.interCartEvent = t;
                            var i = {
                                original_total_price: x(t, "additional.total"),
                                currency: x(t, "additional.currency"),
                                total_discount: x(t, "additional.discount")
                            };
                            switch (A(t, "payload.content_ids") && (o = x(t, "payload.content_ids").map(function(t) {
                                return {
                                    id: parseInt(t)
                                }
                            })), A(t, "additional.items") && x(t, "additional.items").forEach(function(t, e) {
                                o[e] && (o[e].quantity = parseInt(t.quantity) || 1, o[e].line_price = t.price || 0, o[e].price = t.price || 0)
                            }), t.type) {
                                case "initialize":
                                    n.shopName = x(t, "payload.shop"), n.shopHost = x(t, "payload.origin"), n.setUser({
                                        external_id: x(t, "payload.session_id")
                                    });
                                    break;
                                case "InitiateCheckout":
                                    n.getProductsFromBackend(o, i).then(function() {
                                        n.initiateCheckoutEvent(!0)
                                    }).catch(e.consoleLog);
                                    break;
                                case "AddPaymentInfo":
                                    e.setCart(i), e.addPaymentInfoEvent();
                                    break;
                                case "Purchase":
                                case "PostPurchase":
                                    n.getProductsFromBackend(o, i).then(function(e) {
                                        n.purchaseEvent(e.items, t.type)
                                    }).catch(e.consoleLog)
                            }
                        }
                    })
                }
            }, {
                key: "cartHookAddPaymentInfoEvent",
                value: function() {
                    if (A(window, "carthook_object.cart_data")) {
                        x(window, "carthook_object.cart_data");
                        this.addPaymentInfoEvent()
                    }
                }
            }, {
                key: "cartHookInitiateCheckoutEvent",
                value: function() {
                    if (A(window, "carthook_object.cart_data")) {
                        var t = this,
                            e = x(window, "carthook_object.cart_data"),
                            n = e.line_items.map(function(t) {
                                return {
                                    id: parseInt(t.id),
                                    quantity: parseInt(t.quantity) || 1,
                                    variant_id: parseInt(t.variant_id),
                                    line_price: t.line_price,
                                    price: t.line_price
                                }
                            }),
                            o = {
                                original_total_price: e.total_price,
                                currency: e.currency || "USD",
                                total_discount: e.coupon
                            };
                        this.getProductsFromBackend(n, o).then(function() {
                            t.initiateCheckoutEvent()
                        }).catch(this.consoleLog)
                    }
                }
            }, {
                key: "getCartHookPurchaseEventName",
                value: function() {
                    var t = x(window, "chData");
                    return t ? "checkout_page" === t.last_charged_page_type ? "TFX_CH_InitialPurchase" : "upsell_page" === t.last_charged_page_type ? "TFX_CH_UpsellPurchase" : "downsell_page" === t.last_charged_page_type ? "TFX_CH_DownsellPurchase" : void 0 : ""
                }
            }, {
                key: "cartHookPurchaseEvent",
                value: function(t) {
                    if (x(window, "chData.last_charged_page_type")) {
                        var e = this,
                            n = (I("TFX_PURCHASED"), x(window, "chData.order")),
                            o = this.getCartHookPurchaseEventName(),
                            i = [],
                            a = n.last_charged_line_items.map(function(t) {
                                return {
                                    id: parseInt(t.id),
                                    quantity: parseInt(t.quantity) || 1,
                                    variant_id: parseInt(t.variant_id),
                                    line_price: t.price,
                                    price: t.price
                                }
                            }).filter(function(e) {
                                return -1 === i.indexOf("".concat(e.id, ":").concat(t))
                            });
                        if (a.length) {
                            var r = {
                                original_total_price: "TFX_CH_InitialPurchase" == o ? x(window, "chData.order.total_price") : a.reduce(function(t, e) {
                                    return t + e.line_price * e.quantity
                                }, 0),
                                currency: n.currency || "USD",
                                total_discount: n.coupon
                            };
                            this.getProductsFromBackend(a, r).then(function(n) {
                                var a = n.items.map(function(e) {
                                    return "".concat(e.id, ":").concat(t)
                                });
                                O("TFX_PURCHASED", [].concat(i, c(a)).join(","), {
                                    "max-age": 200
                                }), e.purchaseEvent(n.items, o)
                            }).catch(this.consoleLog)
                        } else this.consoleLog("No Products, Check TFX_PURCHASED")
                    }
                }
            }, {
                key: "cartHookViewContentEvent",
                value: function() {
                    var t = this,
                        e = x(window, "carthook_object.product") || (x(window, "carthook_object.cart_data.line_items") || [])[0];
                    e && this.getTagsCollections("/products/".concat(e.handle)).then(function(n) {
                        var o = t.extractTagsCollections(n);
                        t.getProduct("/products/".concat(e.handle)).then(function(n) {
                            t.tags = o.tags, t.collections = o.collections, localStorage.setItem("tags", t.tags.join(", ")), localStorage.setItem("collections", t.collections.join(", ")), t.product = JSON.parse(n).product, t.product.price = e.line_price, t.product.variants && t.product.variants.length && (t.product.variants[0].price = e.line_price), t.viewContentEvent()
                        })
                    }).catch(this.consoleLog)
                }
            }, {
                key: "listenShopiPayEvents",
                value: function(t) {
                    switch (this.consoleLog("SHOPIPAY EVENT", JSON.stringify(t)), this.consoleLog("SHOPIPAY DATA LOADED", this.shop), t.type) {
                        case "Initialize":
                            this.consoleLog("ShopiPay Init...");
                            break;
                        case m:
                            this.shopiPayInitiateCheckoutEvent(t);
                            break;
                        case v:
                        case "PostPurchase":
                            this.shopiPayPurchaseEvent(t);
                            break;
                        case g:
                            this.shopiPayViewContentEvent(t)
                    }
                }
            }, {
                key: "shopiPayInitiateCheckoutEvent",
                value: function(t) {
                    var e = this,
                        n = t.products.map(function(t) {
                            return {
                                id: t.product_id
                            }
                        });
                    this.getProductsFromBackend(n, this.cart).then(function() {
                        e.initiateCheckoutEvent()
                    }).catch(console.log)
                }
            }, {
                key: "shopiPayPurchaseEvent",
                value: function(t) {
                    var e = [];
                    t.products.forEach(function(t) {
                        t.product_id ? e.push(t) : t.id && (t.product_id = t.id, e.push(t))
                    }), t.upsellStep && t.accept ? this.purchaseEvent(e, "TFX_SHP_" + t.upsellStep + " Purchase") : this.purchaseEvent(e, "TFX_SHP_Initial Purchase")
                }
            }, {
                key: "shopiPayViewContentEvent",
                value: function(t) {
                    var e = !0;
                    this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: ShopiPay View Content Event Restricted"), e = !1);
                    var n = this;
                    t.products.forEach(function(t) {
                        return n.fire(g, e, n.getProductData(g, t))
                    }), this.consoleLog("Other: ShopiPay View Content Event Fired")
                }
            }, {
                key: "listenBetterCartEvents",
                value: function(t) {
                    switch (this.consoleLog("BetterCart EVENT", JSON.stringify(t)), this.consoleLog("BetterCart DATA LOADED", this.shop), t.type) {
                        case "Initialize":
                            this.consoleLog("BetterCart Init...");
                            break;
                        case m:
                            this.betterCartInitiateCheckoutEvent(t);
                            break;
                        case v:
                        case "PostPurchase":
                            this.betterCartPurchaseEvent(t);
                            break;
                        case g:
                            this.betterCartViewContentEvent(t);
                            break;
                        case "AddPaymentInfo":
                            this.betterCartAddpaymentinfoEvent();
                            break;
                        case f:
                            this.betterCartAddToCartEvent(t)
                    }
                }
            }, {
                key: "betterCartInitiateCheckoutEvent",
                value: function(t) {
                    var e = this,
                        n = t.products.map(function(t) {
                            return {
                                id: t.id
                            }
                        });
                    console.log(n), this.getProductsFromBackend(n, this.cart).then(function() {
                        e.initiateCheckoutEvent(!0)
                    }).catch(console.log)
                }
            }, {
                key: "betterCartPurchaseEvent",
                value: function(t) {
                    var e = [];
                    t.products.forEach(function(t) {
                        t.product_id ? e.push(t) : t.id && (t.product_id = t.id, e.push(t))
                    }), t.upsellStep && t.accept ? this.purchaseEvent(e, "TFX_SHP_" + t.upsellStep + " Purchase") : this.purchaseEvent(e, "TFX_SHP_Initial Purchase")
                }
            }, {
                key: "betterCartViewContentEvent",
                value: function(t) {
                    var e = !0;
                    this.isIOS14 && !this.viewContentEventFire && (this.consoleLog("IOS14: BetterCart View Content Event Restricted"), e = !1);
                    var n = this;
                    t.products.forEach(function(t) {
                        return n.fire(g, e, n.getProductData(g, t))
                    }), this.consoleLog("Other: BetterCart View Content Event Fired")
                }
            }, {
                key: "betterCartAddToCartEvent",
                value: function(t) {
                    this.product = t.products, this.addToCartEvent()
                }
            }, {
                key: "betterCartAddpaymentinfoEvent",
                value: function() {
                    this.setCart(this.cart), this.addPaymentInfoEvent()
                }
            }]) && s(e.prototype, n), o && s(e, o), t
        }();
        window.trackify || (window.trackify = new X, window.trackify.init())
    },
    4: function(t, e, n) {
        t.exports = n("/SWy")
    },
    ls82: function(t, e, n) {
        var o = function(t) {
            "use strict";
            var e, n = Object.prototype,
                o = n.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                r = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag";

            function s(t, e, n, o) {
                var i = e && e.prototype instanceof f ? e : f,
                    a = Object.create(i.prototype),
                    r = new P(o || []);
                return a._invoke = function(t, e, n) {
                    var o = l;
                    return function(i, a) {
                        if (o === h) throw new Error("Generator is already running");
                        if (o === p) {
                            if ("throw" === i) throw a;
                            return O()
                        }
                        for (n.method = i, n.arg = a;;) {
                            var r = n.delegate;
                            if (r) {
                                var c = b(r, n);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === l) throw o = p, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = h;
                            var s = u(t, e, n);
                            if ("normal" === s.type) {
                                if (o = n.done ? p : d, s.arg === g) continue;
                                return {
                                    value: s.arg,
                                    done: n.done
                                }
                            }
                            "throw" === s.type && (o = p, n.method = "throw", n.arg = s.arg)
                        }
                    }
                }(t, n, r), a
            }

            function u(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = s;
            var l = "suspendedStart",
                d = "suspendedYield",
                h = "executing",
                p = "completed",
                g = {};

            function f() {}

            function v() {}

            function m() {}
            var y = {};
            y[a] = function() {
                return this
            };
            var _ = Object.getPrototypeOf,
                w = _ && _(_(L([])));
            w && w !== n && o.call(w, a) && (y = w);
            var k = m.prototype = f.prototype = Object.create(y);

            function C(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function E(t) {
                var e;
                this._invoke = function(n, i) {
                    function a() {
                        return new Promise(function(e, a) {
                            ! function e(n, i, a, r) {
                                var c = u(t[n], t, i);
                                if ("throw" !== c.type) {
                                    var s = c.arg,
                                        l = s.value;
                                    return l && "object" == typeof l && o.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                                        e("next", t, a, r)
                                    }, function(t) {
                                        e("throw", t, a, r)
                                    }) : Promise.resolve(l).then(function(t) {
                                        s.value = t, a(s)
                                    }, function(t) {
                                        return e("throw", t, a, r)
                                    })
                                }
                                r(c.arg)
                            }(n, i, e, a)
                        })
                    }
                    return e = e ? e.then(a, a) : a()
                }
            }

            function b(t, n) {
                var o = t.iterator[n.method];
                if (o === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = e, b(t, n), "throw" === n.method)) return g;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var i = u(o, t.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, g;
                var a = i.arg;
                return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
            }

            function S(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function T(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function P(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(S, this), this.reset(!0)
            }

            function L(t) {
                if (t) {
                    var n = t[a];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                            r = function n() {
                                for (; ++i < t.length;)
                                    if (o.call(t, i)) return n.value = t[i], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return r.next = r
                    }
                }
                return {
                    next: O
                }
            }

            function O() {
                return {
                    value: e,
                    done: !0
                }
            }
            return v.prototype = k.constructor = m, m.constructor = v, m[c] = v.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(k), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, C(E.prototype), E.prototype[r] = function() {
                return this
            }, t.AsyncIterator = E, t.async = function(e, n, o, i) {
                var a = new E(s(e, n, o, i));
                return t.isGeneratorFunction(n) ? a : a.next().then(function(t) {
                    return t.done ? t.value : a.next()
                })
            }, C(k), k[c] = "Generator", k[a] = function() {
                return this
            }, k.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var o = e.pop();
                            if (o in t) return n.value = o, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, t.values = L, P.prototype = {
                constructor: P,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(T), !t)
                        for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function i(o, i) {
                        return c.type = "throw", c.arg = t, n.next = o, i && (n.method = "next", n.arg = e), !!i
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var r = this.tryEntries[a],
                            c = r.completion;
                        if ("root" === r.tryLoc) return i("end");
                        if (r.tryLoc <= this.prev) {
                            var s = o.call(r, "catchLoc"),
                                u = o.call(r, "finallyLoc");
                            if (s && u) {
                                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return i(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return i(r.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return i(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                    var r = a ? a.completion : {};
                    return r.type = t, r.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(r)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), g
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var i = o.arg;
                                T(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, o) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: n,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = e), g
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = o
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(o)
        }
    },
    o0o1: function(t, e, n) {
        t.exports = n("ls82")
    }
});