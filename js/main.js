MAIN = {
	
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('.hamburger-icon').click (function(){
            $(this).toggleClass('open');
            $('header nav').slideToggle();
        });

		$(".scrollTo").on('click', function(e) {
		     e.preventDefault();
		     var target = $(this).attr('href');
		     $('html, body').animate({
		       scrollTop: ($(target).offset().top - 60)
		     }, 500);
		});

        !function (e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var a = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(a.exports, a, a.exports, n),
                    a.l = !0,
                    a.exports
            }
            n.m = e,
                n.c = t,
                n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                n.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                }
                ,
                n.t = function (e, t) {
                    if (1 & t && (e = n(e)),
                        8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var r = Object.create(null);
                    if (n.r(r),
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }),
                        2 & t && "string" != typeof e)
                        for (var a in e)
                            n.d(r, a, function (t) {
                                return e[t]
                            }
                                .bind(null, a));
                    return r
                }
                ,
                n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    }
                        : function () {
                            return e
                        }
                        ;
                    return n.d(t, "a", t),
                        t
                }
                ,
                n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "/",
                n(n.s = 0)
        }([function (t, n, r) {
            var { getLastRewards: a } = r(1)
                , o = '\n<a href="{{link}}" class="box" id="template-reward" target="_blank">\n<p><span class="bsc-address">{{address}}</span></p>\n<div class="round">\n  <p>got</p>\n  <span class="nzt-win">{{amount}}</span>\n  <div class="b">tokens</div>\n</div>\n</a>\n';
            function i(e, t = 6) {
                if (e.toString().length <= t)
                    return e.toString();
                var n = t - e.toFixed(0).toString().length
                    , r = n > 0 ? n : 0;
                return Number(e.toFixed(r)).toString()
            }
            $(document).ready((function () {
                    a(e => {
                        let t = Math.floor(e.length / 2)
                            , n = e.slice(0, t)
                            , r = e.slice(t, e.length);
                        n.forEach(e => {
                            var t = o.replace("{{link}}", `https://bscscan.com/tx/${e.tx}`).replace("{{address}}", `0x${e.winner.slice(0, 5)}...${e.winner.slice(-7)}`).replace("{{amount}}", i(e.amount / 1e18)).replace("#template-reward", "");
                            $("#template-container-l").append(t)
                        }
                        ),
                            r.forEach(e => {
                                var t = o.replace("{{link}}", `https://bscscan.com/tx/${e.tx}`).replace("{{address}}", `0x${e.winner.slice(0, 5)}...${e.winner.slice(-7)}`).replace("{{amount}}", i(e.amount / 1e18)).replace("#template-reward", "");
                                $("#template-container-r").append(t)
                            }
                            )
                    }
                    )
            }
            ))
        }
            , function (e, t) {
                e.exports.getLastRewards = function (e) {
                    $.ajax("https://mainnet.infura.io/v3/1a41bb7ab615464cbcd3cd48ece28b5d", {
                        data: JSON.stringify({
                            jsonrpc: "2.0",
                            method: "eth_getLogs",
                            params: [{
                                address: "0x3a9fff453d50d4ac52a6890647b823379ba36b9e",
                                fromBlock: "0x912ce3",
                                toBlock: "latest",
                                topics: ["0x9c2270628a9b29d30ae96b6c4c14ed646ee134febdce38a5b77f2bde9cea2e20"]
                            }],
                            id: 1
                        }),

                        contentType: "application/json",
                        type: "POST"
                    //$.ajax("https://bsc.getblock.io/mainnet/?api_key=a90c7e39-96ec-402d-98a0-906d7fd95ad7", {
                    //    data: JSON.stringify({
                    //        jsonrpc: "2.0",
                    //        method: "eth_getLogs",
                    //        params: [{
                    //            address: "0x643310aff0ff1fd10feffa9a5197ababbfef0797",
                    //            fromBlock: "0x6652B9",
                    //            toBlock: "latest",
                    //            topics: ["0x9c2270628a9b29d30ae96b6c4c14ed646ee134febdce38a5b77f2bde9cea2e20"]
                    //        }],
                    //        id: 1
                    //    }),
                    //    header: {
                    //        //'x-api-key': 'a90c7e39-96ec-402d-98a0-906d7fd95ad7',
                    //        //"Access-Control-Allow-Origin": "x-requested-with"
                    //        'Access-Control-Allow-Origin': 'https://bsc.getblock.io/mainnet/?api_key=a90c7e39-96ec-402d-98a0-906d7fd95ad7'
                    //    },
                    //    contentType: "application/json",
                    //    //dataType: 'jsonp',
                    //    crossDomain: true,
                    //    cache: false,
                    //    type: "POST",
                    }).done((function (t) {
                        e(t.result.slice(-6).reverse().map(e => {
                            return {
                                winner: (t = e).topics[1].replace("0x000000000000000000000000", ""),
                                amount: parseInt(t.data),
                                tx: t.transactionHash
                            };
                            var t
                        }
                        ))
                    }
                    ))
                }
            }
        ]);

	}
}


$(function () {
	
	MAIN.init();
	
});