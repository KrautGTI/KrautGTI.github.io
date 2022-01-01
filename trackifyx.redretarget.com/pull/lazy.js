// ----- only continue if the injection is not loaded
(function() {
    let lazyTrackX = {
        "app": "trackify_x",
        "base": "https:\/\/trackifyx.redretarget.com",
        "shop": "myprojectsolar.myshopify.com"
    };
    if (window.tkfy != undefined || window.tkfy == true) return true;

    /* ----- TFX Theme theme hook start ----- */
    ! function(t, r, k, f, y, x) {
        y = r.createElement(k);
        y.src = f;
        y.async = true;
        x = r.getElementsByTagName(k)[0];
        x.parentNode.insertBefore(y, x);
    }(window, document, 'script', lazyTrackX.base + '/pull/' + lazyTrackX.shop + '/hook.js');
    /* ----- TFX theme hook end ----- */
})();