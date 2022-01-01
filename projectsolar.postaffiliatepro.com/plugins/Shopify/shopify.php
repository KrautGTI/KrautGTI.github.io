var s=document.createElement('script');s.id='pap_x2s6df8d';s.type='text/javascript';
s.src=(('https:' == document.location.protocol)?'https://':'http://')+'projectsolar.postaffiliatepro.com/scripts/h7j344n';
s.onload = doIfYouCan();
document.body.appendChild(s);

function getDiscountRate(ch) {
    var subtotalPrice = Number(ch.subtotal_price.replace(',',''));
    if (subtotalPrice == 0) return 0;
    var totalPrice = 0;
    var i = 0; var di = 0;
    while (typeof ch.line_items[i] != 'undefined') {
        var itemSubtotal = Number(ch.line_items[i].line_price.replace(',',''));
        while (typeof ch.line_items[i].applied_discounts[di] !== 'undefined') {
            itemSubtotal -= Number(ch.line_items[i].applied_discounts[di].amount.replace(',',''));
            di++;
        }
        totalPrice = totalPrice + itemSubtotal;
        i++;
    }
    var discountAmount = totalPrice - subtotalPrice;
    return 1 - (discountAmount/totalPrice);
}

function ts() {
    var discountpercent = 1;var discountcoupon = '';
    if (Shopify.checkout.discount != null && typeof Shopify.checkout.discount.amount !== 'undefined') {
        discountcoupon = Shopify.checkout.discount.code;
        if (Shopify.checkout.discount.rate != null && typeof Shopify.checkout.discount.rate !== 'undefined') {
            discountpercent = 1 - Shopify.checkout.discount.rate;
        } else {
            discountpercent = getDiscountRate(Shopify.checkout);
        }
    }
    
    var giftcard = 0;
    
    if ((typeof Shopify.checkout.gift_cards !== 'undefined')
        && (Shopify.checkout.gift_cards.length > 0)
    ) {
        for (var i=0; i < Shopify.checkout.gift_cards.length; i++) {
            if (Shopify.checkout.gift_cards[i].amount_used > 0) {
                giftcard += Number(Shopify.checkout.gift_cards[i].amount_used);
            }
        }
    }

    var papPhone = Shopify.checkout.phone;
    if (papPhone == null || papPhone == '') {
        papPhone = Shopify.checkout.billing_address.phone;
    }
var subtotal = Shopify.checkout.subtotal_price.replace(',','');
    if (giftcard > 0) {var rest = giftcard - subtotal; subtotal -= giftcard; giftcard = rest;}
    if (giftcard < 0) {giftcard = 0;}if (typeof Shopify.checkout.taxes_included !== 'undefined' && Shopify.checkout.taxes_included === true) {
            var item = 0;
            while (typeof Shopify.checkout.line_items[item] !== 'undefined') {
                if (typeof Shopify.checkout.line_items[item].taxable !== 'undefined' && Shopify.checkout.line_items[item].taxable === true) {
                    var ti = 0;
                    while (typeof Shopify.checkout.line_items[item].tax_lines[ti] !== 'undefined') {
                        subtotal -= Shopify.checkout.line_items[item].tax_lines[ti].price.replace(',','');
                        ti++;
                    }
                }
                item++;
            }
        }
    if (subtotal < 0) {subtotal = 0;}var sale = PostAffTracker.createSale();
sale.setTotalCost(subtotal);

    if (Shopify.checkout.order_id == null) {
        sale.setOrderID('checkout_token_'+Shopify.checkout.token+'(1)');
    } else {
        sale.setOrderID(Shopify.checkout.order_id + '(1)');
    }
            if (typeof Shopify.checkout.presentment_currency !== 'undefined') {
    sale.setCurrency(Shopify.checkout.presentment_currency);
} else {
    sale.setCurrency(Shopify.checkout.currency);
}
PostAffTracker.register();
}

function doIfYouCan() {
    if (typeof PostAffTracker !== 'undefined') {
        PostAffTracker.setAccountId('default1');
        if (window.location.href.indexOf('/thank_you') > 0) {
            ts();
        } else {
            
            try {
                PostAffTracker.track();
            } catch (err) { }
        }
    }
    else {
        setTimeout('doIfYouCan()', 500);
    }
}