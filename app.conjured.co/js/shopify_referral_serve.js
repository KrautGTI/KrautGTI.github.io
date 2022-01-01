(function() {

    // get forms
    var forms = document.getElementsByTagName('form');
    var has_cart = false;
    for (var x = 0; x < forms.length; x++) {
        if (forms[x].action.slice(-5) == '/cart' || forms[x].action.slice(-9) == '/checkout') {
            has_cart = true;
            break;
        }
    }

    if (!has_cart) {
        var links = document.getElementsByTagName('a');
        for (var x = 0; x < links.length; x++) {
            if (links[x].href.slice(-9) == '/checkout') {
                has_cart = true;
                break;
            }
        }
    }

    // if this is the cart, add the discount field
    if (has_cart) {
        var jQuery;
        // check if jquery exists - if not, load it.
        // then initiate our class
        if (window.jQuery === undefined) {
            var script_tag = document.createElement('script');
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js");
            if (script_tag.readyState) {
                script_tag.onreadystatechange = function() { // For old versions of IE
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        jQuery = window.jQuery.noConflict(true);
                        conjuredReferralCartHandler();
                    }
                };
            } else { // Other browsers
                script_tag.onload = function() {
                    jQuery = window.jQuery.noConflict(true);
                    conjuredReferralCartHandler();
                }
            }
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
        } else {
            jQuery = window.jQuery;
            conjuredReferralCartHandler();
        }


        function conjuredReferralCartHandler() {
            jQuery(document).ready(function() {


                // set up javascript cookie
                ! function(e) {
                    if ("function" == typeof define && define.amd) define(e);
                    else if ("object" == typeof exports) module.exports = e();
                    else {
                        var n = window.Cookies,
                            t = window.Cookies = e();
                        t.noConflict = function() {
                            return window.Cookies = n, t
                        }
                    }
                }(function() {
                    function e() {
                        for (var e = 0, n = {}; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var o in t) n[o] = t[o]
                        }
                        return n
                    }

                    function n(t) {
                        function o(n, r, i) {
                            var c;
                            if ("undefined" != typeof document) {
                                if (arguments.length > 1) {
                                    if (i = e({
                                            path: "/"
                                        }, o.defaults, i), "number" == typeof i.expires) {
                                        var a = new Date;
                                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                                    }
                                    try {
                                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                                    } catch (s) {}
                                    return r = t.write ? t.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                                }
                                n || (c = {});
                                for (var p = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                                    var f = p[d].split("="),
                                        l = f.slice(1).join("=");
                                    '"' === l.charAt(0) && (l = l.slice(1, -1));
                                    try {
                                        var m = f[0].replace(u, decodeURIComponent);
                                        if (l = t.read ? t.read(l, m) : t(l, m) || l.replace(u, decodeURIComponent), this.json) try {
                                            l = JSON.parse(l)
                                        } catch (s) {}
                                        if (n === m) {
                                            c = l;
                                            break
                                        }
                                        n || (c[m] = l)
                                    } catch (s) {}
                                }
                                return c
                            }
                        }
                        return o.set = o, o.get = function(e) {
                            return o(e)
                        }, o.getJSON = function() {
                            return o.apply({
                                json: !0
                            }, [].slice.call(arguments))
                        }, o.defaults = {}, o.remove = function(n, t) {
                            o(n, "", e(t, {
                                expires: -1
                            }))
                        }, o.withConverter = n, o
                    }
                    return n(function() {})
                });

                // if the cookie is set, move on forward
                if (Cookies.get('conjured_discount') !== undefined) {

                    // find the form
                    var cart = jQuery('form[action="/cart"]');

                    // check to see if there's already a discount field
                    if (cart.find('input[name="discount"]').length > 0) {
                        var discount_field = cart.find('input[name="discount"]').first();
                        if (discount_field.val() == '') discount_field.val(Cookies.get('conjured_discount'));
                    } else {
                        cart.append('<input type="hidden" name="discount" value="' + Cookies.get('conjured_discount') + '" />');
                    }

                    // find the links
                    jQuery('a[href="/checkout"]').attr('href', '/checkout?discount=' + Cookies.get('conjured_discount'));


                }

            });
        }
    }
})();