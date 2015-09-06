function setUrl(n) {
    location.hash = "#" + n
}
var ZeroClipboard, Router;
(function() {
    var n = window.globalConstants || {};
    n.armsApiUrl = "http://arms-api.azurewebsites.net/api/";
    n.nassUrl = "http://nass-api.azurewebsites.net/";
    n.nassApiUrl = n.nassUrl + "api/";
    n.maxGetRequestLength = 2e3;
    n.postRequestMessage = "Lenght of URL longer then " + n.maxGetRequestLength + " symbols ! Therefore this request will be execeuted like POST request.";
    n.cropScapeFC = [{
        cropScapeFCId: 1,
        cropScapeFC: "Corn",
        quickstats: "CORN"
    }, {
        cropScapeFCId: 2,
        cropScapeFC: "Cotton",
        quickstats: "COTTON"
    }, {
        cropScapeFCId: 3,
        cropScapeFC: "Rice",
        quickstats: "RICE"
    }, {
        cropScapeFCId: 4,
        cropScapeFC: "Sorghum",
        quickstats: "SORGHUM"
    }, {
        cropScapeFCId: 5,
        cropScapeFC: "Soybeans",
        quickstats: "SOYBEANS"
    }, {
        cropScapeFCId: 6,
        cropScapeFC: "Sunflower",
        quickstats: "SUNFLOWER"
    }, {
        cropScapeFCId: 10,
        cropScapeFC: "Peanuts",
        quickstats: "PEANUTS"
    }, {
        cropScapeFCId: 11,
        cropScapeFC: "Tobacco",
        quickstats: "TOBACCO"
    }, {
        cropScapeFCId: 12,
        cropScapeFC: "Sweet Corn",
        quickstats: "SWEET CORN"
    }, {
        cropScapeFCId: 14,
        cropScapeFC: "Mint",
        quickstats: "MINT"
    }, {
        cropScapeFCId: 21,
        cropScapeFC: "Barley",
        quickstats: "BARLEY"
    }, {
        cropScapeFCId: 27,
        cropScapeFC: "Rye",
        quickstats: "RYE"
    }, {
        cropScapeFCId: 28,
        cropScapeFC: "Oats",
        quickstats: "OATS"
    }, {
        cropScapeFCId: 29,
        cropScapeFC: "Millet",
        quickstats: "MILLET"
    }, {
        cropScapeFCId: 31,
        cropScapeFC: "Canola",
        quickstats: "CANOLA"
    }, {
        cropScapeFCId: 32,
        cropScapeFC: "Flaxseed",
        quickstats: "FLAXSEED"
    }, {
        cropScapeFCId: 33,
        cropScapeFC: "Safflower",
        quickstats: "SAFFLOWER"
    }, {
        cropScapeFCId: 35,
        cropScapeFC: "Mustard",
        quickstats: "MUSTARD"
    }, {
        cropScapeFCId: 38,
        cropScapeFC: "Camelina",
        quickstats: "CAMELINA"
    }, {
        cropScapeFCId: 39,
        cropScapeFC: "Buckwheat",
        quickstats: "BUCKWHEAT"
    }, {
        cropScapeFCId: 41,
        cropScapeFC: "Sugarbeets",
        quickstats: "SUGARBEETS"
    }, {
        cropScapeFCId: 43,
        cropScapeFC: "Potatoes",
        quickstats: "POTATOES"
    }, {
        cropScapeFCId: 45,
        cropScapeFC: "Sugarcane",
        quickstats: "SUGARCANE"
    }, {
        cropScapeFCId: 46,
        cropScapeFC: "Sweet Potatoes",
        quickstats: "SWEET POTATOES"
    }, {
        cropScapeFCId: 49,
        cropScapeFC: "Onions",
        quickstats: "ONIONS"
    }, {
        cropScapeFCId: 50,
        cropScapeFC: "Cucumbers",
        quickstats: "CUCUMBERS"
    }, {
        cropScapeFCId: 52,
        cropScapeFC: "Lentils",
        quickstats: "LENTILS"
    }, {
        cropScapeFCId: 53,
        cropScapeFC: "Peas",
        quickstats: "PEAS"
    }, {
        cropScapeFCId: 54,
        cropScapeFC: "Tomatoes",
        quickstats: "TOMATOES"
    }, {
        cropScapeFCId: 55,
        cropScapeFC: "Caneberries",
        quickstats: "CANEBERRIES"
    }, {
        cropScapeFCId: 56,
        cropScapeFC: "Hops",
        quickstats: "HOPS"
    }, {
        cropScapeFCId: 57,
        cropScapeFC: "Herbs",
        quickstats: "HERBS"
    }, {
        cropScapeFCId: 60,
        cropScapeFC: "Switchgrass",
        quickstats: "SWITCHGRASS"
    }, {
        cropScapeFCId: 66,
        cropScapeFC: "Cherries",
        quickstats: "CHERRIES"
    }, {
        cropScapeFCId: 67,
        cropScapeFC: "Peaches",
        quickstats: "PEACHES"
    }, {
        cropScapeFCId: 68,
        cropScapeFC: "Apples",
        quickstats: "APPLES"
    }, {
        cropScapeFCId: 69,
        cropScapeFC: "Grapes",
        quickstats: "GRAPES"
    }, {
        cropScapeFCId: 74,
        cropScapeFC: "Pecans",
        quickstats: "PECANS"
    }, {
        cropScapeFCId: 75,
        cropScapeFC: "Almonds",
        quickstats: "ALMONDS"
    }, {
        cropScapeFCId: 76,
        cropScapeFC: "Walnuts",
        quickstats: "WALNUTS"
    }, {
        cropScapeFCId: 77,
        cropScapeFC: "Pears",
        quickstats: "PEARS"
    }, {
        cropScapeFCId: 83,
        cropScapeFC: "Water",
        quickstats: "WATER"
    }, {
        cropScapeFCId: 204,
        cropScapeFC: "Pistachios",
        quickstats: "PISTACHIOS"
    }, {
        cropScapeFCId: 205,
        cropScapeFC: "Triticale",
        quickstats: "TRITICALE"
    }, {
        cropScapeFCId: 206,
        cropScapeFC: "Carrots",
        quickstats: "CARROTS"
    }, {
        cropScapeFCId: 207,
        cropScapeFC: "Asparagus",
        quickstats: "ASPARAGUS"
    }, {
        cropScapeFCId: 208,
        cropScapeFC: "Garlic",
        quickstats: "GARLIC"
    }, {
        cropScapeFCId: 210,
        cropScapeFC: "Prunes",
        quickstats: "PRUNES"
    }, {
        cropScapeFCId: 211,
        cropScapeFC: "Olives",
        quickstats: "OLIVES"
    }, {
        cropScapeFCId: 212,
        cropScapeFC: "Oranges",
        quickstats: "ORANGES"
    }, {
        cropScapeFCId: 214,
        cropScapeFC: "Broccoli",
        quickstats: "BROCCOLI"
    }, {
        cropScapeFCId: 216,
        cropScapeFC: "Peppers",
        quickstats: "PEPPERS"
    }, {
        cropScapeFCId: 217,
        cropScapeFC: "Pomegranates",
        quickstats: "POMEGRANATES"
    }, {
        cropScapeFCId: 218,
        cropScapeFC: "Nectarines",
        quickstats: "NECTARINES"
    }, {
        cropScapeFCId: 219,
        cropScapeFC: "Greens",
        quickstats: "GREENS"
    }, {
        cropScapeFCId: 220,
        cropScapeFC: "Plums",
        quickstats: "PLUMS"
    }, {
        cropScapeFCId: 221,
        cropScapeFC: "Strawberries",
        quickstats: "STRAWBERRIES"
    }, {
        cropScapeFCId: 222,
        cropScapeFC: "Squash",
        quickstats: "SQUASH"
    }, {
        cropScapeFCId: 223,
        cropScapeFC: "Apricots",
        quickstats: "APRICOTS"
    }, {
        cropScapeFCId: 227,
        cropScapeFC: "Lettuce",
        quickstats: "LETTUCE"
    }, {
        cropScapeFCId: 229,
        cropScapeFC: "Pumpkins",
        quickstats: "PUMPKINS"
    }, {
        cropScapeFCId: 242,
        cropScapeFC: "Blueberries",
        quickstats: "BLUEBERRIES"
    }, {
        cropScapeFCId: 243,
        cropScapeFC: "Cabbage",
        quickstats: "CABBAGE"
    }, {
        cropScapeFCId: 244,
        cropScapeFC: "Cauliflower",
        quickstats: "CAULIFLOWER"
    }, {
        cropScapeFCId: 245,
        cropScapeFC: "Celery",
        quickstats: "CELERY"
    }, {
        cropScapeFCId: 246,
        cropScapeFC: "Radishes",
        quickstats: "RADISHES"
    }, {
        cropScapeFCId: 247,
        cropScapeFC: "Turnips",
        quickstats: "TURNIPS"
    }, {
        cropScapeFCId: 250,
        cropScapeFC: "Cranberries",
        quickstats: "CRANBERRIES"
    }];
    n.abudantUsaCrops = {
        CORN: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=CORN&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&util_practice_desc=GRAIN&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=CORN&statisticcat_desc=AREA%20PLANTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=CORN&statisticcat_desc=YIELD&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&util_practice_desc=GRAIN&reference_period_desc=YEAR&unit_desc=BU+/+ACRE&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        },
        SOYBEANS: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SOYBEANS&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SOYBEANS&statisticcat_desc=AREA%20PLANTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SOYBEANS&statisticcat_desc=YIELD&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&unit_desc=BU+/+ACRE&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        },
        WHEAT: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=WHEAT&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=WHEAT&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=AREA%20PLANTED&class_desc=ALL%20CLASSES&domain_desc=TOTAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=WHEAT&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=YIELD&class_desc=ALL%20CLASSES&domain_desc=TOTAL&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        },
        COTTON: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=COTTON&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=COTTON&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=AREA%20PLANTED&class_desc=ALL%20CLASSES&domain_desc=TOTAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=COTTON&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=YIELD&class_desc=ALL%20CLASSES&domain_desc=TOTAL&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        },
        SORGHUM: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SORGHUM&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&util_practice_desc=GRAIN&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SORGHUM&statisticcat_desc=AREA%20PLANTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=SORGHUM&statisticcat_desc=YIELD&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&util_practice_desc=GRAIN&reference_period_desc=YEAR&unit_desc=BU+/+ACRE&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        },
        RICE: {
            areaHarvested: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=RICE&statisticcat_desc=AREA%20HARVESTED&domain_desc=TOTAL&agg_level_desc=STATE&state_name=STATENAME&year__LE=2015&freq_desc=ANNUAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            areaPlanted: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=RICE&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=AREA%20PLANTED&class_desc=ALL%20CLASSES&domain_desc=TOTAL&reference_period_desc=YEAR&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES",
            _yield: "source_desc=SURVEY&sector_desc=CROPS&group_desc=FIELD%20CROPS&commodity_desc=RICE&agg_level_desc=STATE&year__LE=2015&state_name=STATENAME&freq_desc=ANNUAL&statisticcat_desc=YIELD&class_desc=ALL%20CLASSES&domain_desc=TOTAL&reference_period_desc=YEAR&unit_desc=LB+/+ACRE&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES"
        }
    };
    n.additionalStr = "&unit_desc=CWT&statisticcat_desc=PRODUCTION&class_desc=ALL%20CLASSES&util_practice=ALL%20UTILIZATION%20PRACTICES&agg_level_desc=STATE&domaincat_desc=NOT%20SPECIFIED&source_desc=SURVEY";
    n.iframeUrl = "http://msrfc.cloudapp.net/iframe.html";
    n.propsForTableInNass = ["source_desc", "year", "reference_period_desc", "agg_level_desc", "state_name", "state_ansi", "asd_desc", "asd_code", "county_name", "county_ansi", "watershed_code", "commodity_desc", "data_item", "domain_desc", "domaincat_desc", "value", "CV"];
    n.propsForTableInArms = ["state", "stat_year", "subject", "estimate", "rse", "topic_header", "unit_desc"];
    n.loadMaskGif = '<img src="/Images/gifs/load.gif">';
    n.tableOddColumnColor = "#e7e7e8";
    window.globalConstants = n
})(),
function() {
    var n = window.helper || {};
    n.armsApiUrl = globalConstants.armsApiUrl;
    n.nassUrl = globalConstants.nassUrl;
    n.nassApiUrl = globalConstants.nassApiUrl;
    n.filterPoints = function(n, t) {
        for (var r, u = n.data, f = {
                stateCount: n.stateCount,
                data: []
            }, i = 0; i < u.length; i++)
            for (r = 0; r < t.length; r++)
                if (u[i].cropId == t[r]) {
                    f.data.push(u[i]);
                    break
                }
        return f
    };
    n.showOrHideTooltipForApiRequest = function(n, t) {
        t.length > globalConstants.maxGetRequestLength ? (n.tooltip({
            title: globalConstants.postRequestMessage,
            placement: "right"
        }), n.tooltip("show"), setTimeout(function() {
            n.tooltip("hide")
        }, 3e3)) : n.tooltip("destroy")
    };
    n.validationUrlApiRequest = function(n, t) {
        var r = document.createElement("a"),
            i;
        r.href = n;
        i = !1;
        switch (t) {
            case "nass":
                return i = globalConstants.nassApiUrl.indexOf(r.hostname), i >= 0 ? !0 : !1;
            case "arms":
                return i = globalConstants.armsApiUrl.indexOf(r.hostname), i >= 0 ? !0 : !1;
            default:
                return !1
        }
    };
    n.prepareGraphicPostData = function(n) {
        var r = ["CV", "agg_level_desc", "asd_code", "asd_desc", "begin_code", "class_desc", "commodity_desc", "congr_district_code", "country_code", "country_name", "county_ansi", "county_code", "county_name", "domain_desc", "domaincat_desc", "end_code", "freq_desc", "group_desc", "load_time", "location_desc", "prodn_practice_desc", "reference_period_desc", "region_desc", "sector_desc", "source_desc", "state_alpha", "state_ansi", "state_fips_code", "state_name", "statisticcat_desc", "unit_desc", "util_practice_desc", "value", "watershed_code", "watershed_desc", "week_ending", "year", "yield", "zip_5"],
            i = {
                Inputs: {
                    input1: {
                        ColumnNames: [],
                        Values: []
                    }
                },
                GlobalParameters: {
                    URL: ""
                }
            }, t, u;
        for (i.Inputs.input1.ColumnNames = r, t = 0; t < n.length; t++) u = table.prepareResponseData(r, n[t], "0"), i.Inputs.input1.Values.push(u);
        return i
    };
    n.hasFlashPlayer = function() {
        var n = !1,
            t;
        try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            n = !0
        } catch (i) {
            navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] != undefined && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (n = !0)
        }
        return n
    };
    n.IsIE = function() {
        return /mozilla/.test(navigator.userAgent.toLowerCase()) && !n.IsFireFox() || /ie/.test(navigator.userAgent.toLowerCase())
    };
    n.IsFireFox = function() {
        return /firefox/.test(navigator.userAgent.toLowerCase())
    };
    n.Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(n) {
            var f = "",
                e, t, i, s, h, o, r, u = 0;
            for (n = this._utf8_encode(n); u < n.length;) e = n.charCodeAt(u++), t = n.charCodeAt(u++), i = n.charCodeAt(u++), s = e >> 2, h = (e & 3) << 4 | t >> 4, o = (t & 15) << 2 | i >> 6, r = i & 63, isNaN(t) ? o = r = 64 : isNaN(i) && (r = 64), f = f + this._keyStr.charAt(s) + this._keyStr.charAt(h) + this._keyStr.charAt(o) + this._keyStr.charAt(r);
            return f
        },
        decode: function(n) {
            var t = "",
                e, o, s, h, u, r, f, i = 0;
            for (n = n.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < n.length;) h = this._keyStr.indexOf(n.charAt(i++)), u = this._keyStr.indexOf(n.charAt(i++)), r = this._keyStr.indexOf(n.charAt(i++)), f = this._keyStr.indexOf(n.charAt(i++)), e = h << 2 | u >> 4, o = (u & 15) << 4 | r >> 2, s = (r & 3) << 6 | f, t = t + String.fromCharCode(e), r != 64 && (t = t + String.fromCharCode(o)), f != 64 && (t = t + String.fromCharCode(s));
            return this._utf8_decode(t)
        },
        _utf8_encode: function(n) {
            var i, r, t;
            for (n = n.replace(/\r\n/g, "\n"), i = "", r = 0; r < n.length; r++) t = n.charCodeAt(r), t < 128 ? i += String.fromCharCode(t) : t > 127 && t < 2048 ? (i += String.fromCharCode(t >> 6 | 192), i += String.fromCharCode(t & 63 | 128)) : (i += String.fromCharCode(t >> 12 | 224), i += String.fromCharCode(t >> 6 & 63 | 128), i += String.fromCharCode(t & 63 | 128));
            return i
        },
        _utf8_decode: function(n) {
            for (var r = "", t = 0, i = c1 = c2 = 0; t < n.length;) i = n.charCodeAt(t), i < 128 ? (r += String.fromCharCode(i), t++) : i > 191 && i < 224 ? (c2 = n.charCodeAt(t + 1), r += String.fromCharCode((i & 31) << 6 | c2 & 63), t += 2) : (c2 = n.charCodeAt(t + 1), c3 = n.charCodeAt(t + 2), r += String.fromCharCode((i & 15) << 12 | (c2 & 63) << 6 | c3 & 63), t += 3);
            return r
        }
    };
    window.helper = n
}(),
function() {
    var n = window.dictionary || {};
    n.states = [{
        name: "Alaska",
        points: [{
            lat: "70.0187",
            lon: "-141.0205"
        }, {
            lat: "70.1292",
            lon: "-141.7291"
        }, {
            lat: "70.4515",
            lon: "-144.8163"
        }, {
            lat: "70.7471",
            lon: "-148.4583"
        }, {
            lat: "70.7923",
            lon: "-151.1609"
        }, {
            lat: "71.1470",
            lon: "-152.6221"
        }, {
            lat: "71.1185",
            lon: "-153.9954"
        }, {
            lat: "71.4307",
            lon: "-154.8853"
        }, {
            lat: "71.5232",
            lon: "-156.7529"
        }, {
            lat: "71.2796",
            lon: "-157.9449"
        }, {
            lat: "71.2249",
            lon: "-159.6313"
        }, {
            lat: "70.6363",
            lon: "-161.8671"
        }, {
            lat: "70.0843",
            lon: "-163.5809"
        }, {
            lat: "69.3028",
            lon: "-165.2399"
        }, {
            lat: "69.1782",
            lon: "-166.8768"
        }, {
            lat: "68.3344",
            lon: "-168.0414"
        }, {
            lat: "67.6844",
            lon: "-165.9155"
        }, {
            lat: "67.2933",
            lon: "-164.6082"
        }, {
            lat: "66.7789",
            lon: "-164.0149"
        }, {
            lat: "66.5810",
            lon: "-165.7507"
        }, {
            lat: "66.2867",
            lon: "-167.5745"
        }, {
            lat: "66.0269",
            lon: "-168.9862"
        }, {
            lat: "65.4970",
            lon: "-168.9478"
        }, {
            lat: "65.0420",
            lon: "-167.4756"
        }, {
            lat: "64.3922",
            lon: "-167.0142"
        }, {
            lat: "64.0554",
            lon: "-165.7343"
        }, {
            lat: "64.0193",
            lon: "-163.2294"
        }, {
            lat: "63.9615",
            lon: "-162.1143"
        }, {
            lat: "63.6877",
            lon: "-163.6029"
        }, {
            lat: "63.4530",
            lon: "-165.3717"
        }, {
            lat: "62.4133",
            lon: "-166.3715"
        }, {
            lat: "61.6534",
            lon: "-166.9867"
        }, {
            lat: "60.8556",
            lon: "-166.4429"
        }, {
            lat: "60.5357",
            lon: "-167.8381"
        }, {
            lat: "59.5482",
            lon: "-167.7118"
        }, {
            lat: "59.4115",
            lon: "-165.8002"
        }, {
            lat: "59.3696",
            lon: "-164.5972"
        }, {
            lat: "59.1168",
            lon: "-162.8558"
        }, {
            lat: "58.1185",
            lon: "-162.5427"
        }, {
            lat: "58.1359",
            lon: "-160.6421"
        }, {
            lat: "58.0285",
            lon: "-159.5050"
        }, {
            lat: "57.6336",
            lon: "-158.8953"
        }, {
            lat: "56.9090",
            lon: "-159.9060"
        }, {
            lat: "56.3926",
            lon: "-160.6531"
        }, {
            lat: "56.2342",
            lon: "-161.8835"
        }, {
            lat: "55.7240",
            lon: "-162.9822"
        }, {
            lat: "55.2478",
            lon: "-164.3994"
        }, {
            lat: "54.7753",
            lon: "-165.3168"
        }, {
            lat: "54.1463",
            lon: "-167.1075"
        }, {
            lat: "53.5632",
            lon: "-168.5852"
        }, {
            lat: "53.1402",
            lon: "-169.9146"
        }, {
            lat: "52.5964",
            lon: "-169.5959"
        }, {
            lat: "52.9089",
            lon: "-168.2227"
        }, {
            lat: "54.2139",
            lon: "-162.7734"
        }, {
            lat: "54.6786",
            lon: "-159.1452"
        }, {
            lat: "55.6567",
            lon: "-155.4634"
        }, {
            lat: "57.3510",
            lon: "-152.1400"
        }, {
            lat: "59.2209",
            lon: "-150.8203"
        }, {
            lat: "59.7695",
            lon: "-147.4461"
        }, {
            lat: "60.3521",
            lon: "-145.9850"
        }, {
            lat: "59.8917",
            lon: "-144.1544"
        }, {
            lat: "59.8172",
            lon: "-141.6811"
        }, {
            lat: "59.5225",
            lon: "-140.5124"
        }, {
            lat: "59.0292",
            lon: "-138.8548"
        }, {
            lat: "57.9032",
            lon: "-136.8526"
        }, {
            lat: "56.9157",
            lon: "-136.0725"
        }, {
            lat: "56.1555",
            lon: "-134.9794"
        }, {
            lat: "55.3237",
            lon: "-134.0057"
        }, {
            lat: "54.6341",
            lon: "-133.6418"
        }, {
            lat: "54.7135",
            lon: "-130.6261"
        }, {
            lat: "55.2869",
            lon: "-129.9930"
        }, {
            lat: "55.9869",
            lon: "-130.0108"
        }, {
            lat: "56.1057",
            lon: "-130.1083"
        }, {
            lat: "56.6086",
            lon: "-131.5887"
        }, {
            lat: "57.8404",
            lon: "-132.8755"
        }, {
            lat: "58.7276",
            lon: "-133.8423"
        }, {
            lat: "59.3108",
            lon: "-134.9121"
        }, {
            lat: "59.8020",
            lon: "-135.4724"
        }, {
            lat: "59.6039",
            lon: "-136.3445"
        }, {
            lat: "59.1619",
            lon: "-136.8251"
        }, {
            lat: "59.2441",
            lon: "-137.6079"
        }, {
            lat: "60.0902",
            lon: "-139.2119"
        }, {
            lat: "60.3575",
            lon: "-139.0938"
        }, {
            lat: "60.1866",
            lon: "-140.0056"
        }, {
            lat: "60.3059",
            lon: "-140.9999"
        }, {
            lat: "70.0187",
            lon: "-141.0205"
        }]
    }, {
        name: "Alabama",
        points: [{
            lat: "35.0041",
            lon: "-88.1955"
        }, {
            lat: "34.9918",
            lon: "-85.6068"
        }, {
            lat: "32.8404",
            lon: "-85.1756"
        }, {
            lat: "32.2593",
            lon: "-84.8927"
        }, {
            lat: "32.1535",
            lon: "-85.0342"
        }, {
            lat: "31.7947",
            lon: "-85.1358"
        }, {
            lat: "31.5200",
            lon: "-85.0438"
        }, {
            lat: "31.3384",
            lon: "-85.0836"
        }, {
            lat: "31.2093",
            lon: "-85.1070"
        }, {
            lat: "31.0023",
            lon: "-84.9944"
        }, {
            lat: "30.9953",
            lon: "-87.6009"
        }, {
            lat: "30.9423",
            lon: "-87.5926"
        }, {
            lat: "30.8539",
            lon: "-87.6256"
        }, {
            lat: "30.6745",
            lon: "-87.4072"
        }, {
            lat: "30.4404",
            lon: "-87.3688"
        }, {
            lat: "30.1463",
            lon: "-87.5240"
        }, {
            lat: "30.1546",
            lon: "-88.3864"
        }, {
            lat: "31.8939",
            lon: "-88.4743"
        }, {
            lat: "34.8938",
            lon: "-88.1021"
        }, {
            lat: "34.9479",
            lon: "-88.1721"
        }, {
            lat: "34.9107",
            lon: "-88.1461"
        }]
    }, {
        name: "Arkansas",
        points: [{
            lat: "33.0225",
            lon: "-94.0416"
        }, {
            lat: "33.0075",
            lon: "-91.2057"
        }, {
            lat: "33.1180",
            lon: "-91.1989"
        }, {
            lat: "33.1824",
            lon: "-91.1041"
        }, {
            lat: "33.3053",
            lon: "-91.1343"
        }, {
            lat: "33.4211",
            lon: "-91.1646"
        }, {
            lat: "33.4337",
            lon: "-91.2263"
        }, {
            lat: "33.5403",
            lon: "-91.2524"
        }, {
            lat: "33.6112",
            lon: "-91.1797"
        }, {
            lat: "33.6855",
            lon: "-91.2524"
        }, {
            lat: "33.6946",
            lon: "-91.1261"
        }, {
            lat: "33.7883",
            lon: "-91.1412"
        }, {
            lat: "33.7700",
            lon: "-91.0451"
        }, {
            lat: "33.8328",
            lon: "-91.0341"
        }, {
            lat: "33.9399",
            lon: "-91.0863"
        }, {
            lat: "34.0208",
            lon: "-90.9256"
        }, {
            lat: "34.0856",
            lon: "-90.9036"
        }, {
            lat: "34.1345",
            lon: "-90.9586"
        }, {
            lat: "34.1675",
            lon: "-90.9132"
        }, {
            lat: "34.1380",
            lon: "-90.8501"
        }, {
            lat: "34.2311",
            lon: "-90.9325"
        }, {
            lat: "34.3446",
            lon: "-90.6935"
        }, {
            lat: "34.4409",
            lon: "-90.5603"
        }, {
            lat: "34.5348",
            lon: "-90.5548"
        }, {
            lat: "34.5959",
            lon: "-90.5768"
        }, {
            lat: "34.7213",
            lon: "-90.5301"
        }, {
            lat: "34.7574",
            lon: "-90.5328"
        }, {
            lat: "34.8780",
            lon: "-90.4546"
        }, {
            lat: "34.8454",
            lon: "-90.3529"
        }, {
            lat: "34.8690",
            lon: "-90.2911"
        }, {
            lat: "35.0255",
            lon: "-90.3104"
        }, {
            lat: "35.1154",
            lon: "-90.2843"
        }, {
            lat: "35.1323",
            lon: "-90.1772"
        }, {
            lat: "35.1985",
            lon: "-90.1112"
        }, {
            lat: "35.2826",
            lon: "-90.1524"
        }, {
            lat: "35.4383",
            lon: "-90.1332"
        }, {
            lat: "35.5579",
            lon: "-90.0206"
        }, {
            lat: "35.6740",
            lon: "-89.9780"
        }, {
            lat: "35.7287",
            lon: "-89.9547"
        }, {
            lat: "35.9169",
            lon: "-89.6594"
        }, {
            lat: "35.9658",
            lon: "-89.6883"
        }, {
            lat: "36.0013",
            lon: "-89.7130"
        }, {
            lat: "35.9958",
            lon: "-90.3735"
        }, {
            lat: "36.1268",
            lon: "-90.2664"
        }, {
            lat: "36.2875",
            lon: "-90.0934"
        }, {
            lat: "36.3892",
            lon: "-90.0742"
        }, {
            lat: "36.4180",
            lon: "-90.1511"
        }, {
            lat: "36.4997",
            lon: "-90.1566"
        }, {
            lat: "36.4986",
            lon: "-94.6198"
        }, {
            lat: "35.3801",
            lon: "-94.4412"
        }, {
            lat: "33.6318",
            lon: "-94.4893"
        }, {
            lat: "33.6421",
            lon: "-94.4522"
        }, {
            lat: "33.5597",
            lon: "-94.4000"
        }, {
            lat: "33.5883",
            lon: "-94.2462"
        }, {
            lat: "33.5872",
            lon: "-94.1885"
        }, {
            lat: "33.5345",
            lon: "-94.0375"
        }, {
            lat: "33.4314",
            lon: "-94.0430"
        }, {
            lat: "33.0213",
            lon: "-94.0430"
        }]
    }, {
        name: "Arizona",
        points: [{
            lat: "36.9993",
            lon: "-112.5989"
        }, {
            lat: "37.0004",
            lon: "-110.8630"
        }, {
            lat: "37.0004",
            lon: "-109.0475"
        }, {
            lat: "31.3325",
            lon: "-109.0503"
        }, {
            lat: "31.3325",
            lon: "-111.0718"
        }, {
            lat: "32.4935",
            lon: "-114.8126"
        }, {
            lat: "32.5184",
            lon: "-114.8099"
        }, {
            lat: "32.5827",
            lon: "-114.8044"
        }, {
            lat: "32.6246",
            lon: "-114.7992"
        }, {
            lat: "32.6700",
            lon: "-114.7474"
        }, {
            lat: "32.7457",
            lon: "-114.7014"
        }, {
            lat: "32.7342",
            lon: "-114.6176"
        }, {
            lat: "32.7422",
            lon: "-114.5819"
        }, {
            lat: "32.7584",
            lon: "-114.5393"
        }, {
            lat: "32.8167",
            lon: "-114.5095"
        }, {
            lat: "32.8450",
            lon: "-114.4696"
        }, {
            lat: "32.9107",
            lon: "-114.4817"
        }, {
            lat: "32.9741",
            lon: "-114.4803"
        }, {
            lat: "33.0317",
            lon: "-114.5256"
        }, {
            lat: "33.0259",
            lon: "-114.6094"
        }, {
            lat: "33.0317",
            lon: "-114.6588"
        }, {
            lat: "33.0904",
            lon: "-114.7096"
        }, {
            lat: "33.2065",
            lon: "-114.6849"
        }, {
            lat: "33.2846",
            lon: "-114.7220"
        }, {
            lat: "33.3546",
            lon: "-114.6973"
        }, {
            lat: "33.4051",
            lon: "-114.7258"
        }, {
            lat: "33.4120",
            lon: "-114.6533"
        }, {
            lat: "33.5016",
            lon: "-114.5888"
        }, {
            lat: "33.5317",
            lon: "-114.5599"
        }, {
            lat: "33.6306",
            lon: "-114.5187"
        }, {
            lat: "33.6786",
            lon: "-114.5297"
        }, {
            lat: "33.7083",
            lon: "-114.4940"
        }, {
            lat: "33.7609",
            lon: "-114.5036"
        }, {
            lat: "33.8157",
            lon: "-114.5284"
        }, {
            lat: "33.8545",
            lon: "-114.5325"
        }, {
            lat: "33.9285",
            lon: "-114.5380"
        }, {
            lat: "33.9530",
            lon: "-114.5235"
        }, {
            lat: "34.0049",
            lon: "-114.4748"
        }, {
            lat: "34.0299",
            lon: "-114.4308"
        }, {
            lat: "34.0891",
            lon: "-114.4363"
        }, {
            lat: "34.1357",
            lon: "-114.3526"
        }, {
            lat: "34.1720",
            lon: "-114.2908"
        }, {
            lat: "34.2044",
            lon: "-114.2255"
        }, {
            lat: "34.2595",
            lon: "-114.1685"
        }, {
            lat: "34.2572",
            lon: "-114.1301"
        }, {
            lat: "34.3037",
            lon: "-114.1397"
        }, {
            lat: "34.3664",
            lon: "-114.2276"
        }, {
            lat: "34.4012",
            lon: "-114.2633"
        }, {
            lat: "34.4534",
            lon: "-114.3388"
        }, {
            lat: "34.4930",
            lon: "-114.3608"
        }, {
            lat: "34.5292",
            lon: "-114.3811"
        }, {
            lat: "34.5959",
            lon: "-114.4377"
        }, {
            lat: "34.6547",
            lon: "-114.4569"
        }, {
            lat: "34.7506",
            lon: "-114.5297"
        }, {
            lat: "34.8172",
            lon: "-114.5847"
        }, {
            lat: "34.8724",
            lon: "-114.6341"
        }, {
            lat: "34.9490",
            lon: "-114.6313"
        }, {
            lat: "35.0342",
            lon: "-114.6351"
        }, {
            lat: "35.1019",
            lon: "-114.6451"
        }, {
            lat: "35.1233",
            lon: "-114.6190"
        }, {
            lat: "35.1716",
            lon: "-114.5682"
        }, {
            lat: "35.3364",
            lon: "-114.5984"
        }, {
            lat: "35.4506",
            lon: "-114.6643"
        }, {
            lat: "35.5780",
            lon: "-114.6753"
        }, {
            lat: "35.6171",
            lon: "-114.6547"
        }, {
            lat: "35.6528",
            lon: "-114.6918"
        }, {
            lat: "35.7053",
            lon: "-114.7028"
        }, {
            lat: "35.8050",
            lon: "-114.7093"
        }, {
            lat: "35.8679",
            lon: "-114.6602"
        }, {
            lat: "35.9836",
            lon: "-114.7426"
        }, {
            lat: "36.0891",
            lon: "-114.7536"
        }, {
            lat: "36.1124",
            lon: "-114.6794"
        }, {
            lat: "36.1423",
            lon: "-114.6327"
        }, {
            lat: "36.1301",
            lon: "-114.4872"
        }, {
            lat: "36.1445",
            lon: "-114.3690"
        }, {
            lat: "36.0746",
            lon: "-114.3038"
        }, {
            lat: "36.0602",
            lon: "-114.3172"
        }, {
            lat: "36.0163",
            lon: "-114.2451"
        }, {
            lat: "36.0402",
            lon: "-114.1438"
        }, {
            lat: "36.0979",
            lon: "-114.1150"
        }, {
            lat: "36.1101",
            lon: "-114.1274"
        }, {
            lat: "36.1190",
            lon: "-114.1054"
        }, {
            lat: "36.1989",
            lon: "-114.0463"
        }, {
            lat: "36.3638",
            lon: "-114.0450"
        }, {
            lat: "37.0001",
            lon: "-114.0508"
        }]
    }, {
        name: "California",
        points: [{
            lat: "41.9983",
            lon: "-124.4009"
        }, {
            lat: "42.0024",
            lon: "-123.6237"
        }, {
            lat: "42.0126",
            lon: "-123.1526"
        }, {
            lat: "42.0075",
            lon: "-122.0073"
        }, {
            lat: "41.9962",
            lon: "-121.2369"
        }, {
            lat: "41.9983",
            lon: "-119.9982"
        }, {
            lat: "39.0021",
            lon: "-120.0037"
        }, {
            lat: "37.5555",
            lon: "-117.9575"
        }, {
            lat: "36.3594",
            lon: "-116.3699"
        }, {
            lat: "35.0075",
            lon: "-114.6368"
        }, {
            lat: "34.9659",
            lon: "-114.6382"
        }, {
            lat: "34.9107",
            lon: "-114.6286"
        }, {
            lat: "34.8758",
            lon: "-114.6382"
        }, {
            lat: "34.8454",
            lon: "-114.5970"
        }, {
            lat: "34.7890",
            lon: "-114.5682"
        }, {
            lat: "34.7269",
            lon: "-114.4968"
        }, {
            lat: "34.6648",
            lon: "-114.4501"
        }, {
            lat: "34.6581",
            lon: "-114.4597"
        }, {
            lat: "34.5869",
            lon: "-114.4322"
        }, {
            lat: "34.5235",
            lon: "-114.3787"
        }, {
            lat: "34.4601",
            lon: "-114.3869"
        }, {
            lat: "34.4500",
            lon: "-114.3361"
        }, {
            lat: "34.4375",
            lon: "-114.3031"
        }, {
            lat: "34.4024",
            lon: "-114.2674"
        }, {
            lat: "34.3559",
            lon: "-114.1864"
        }, {
            lat: "34.3049",
            lon: "-114.1383"
        }, {
            lat: "34.2561",
            lon: "-114.1315"
        }, {
            lat: "34.2595",
            lon: "-114.1651"
        }, {
            lat: "34.2044",
            lon: "-114.2249"
        }, {
            lat: "34.1914",
            lon: "-114.2221"
        }, {
            lat: "34.1720",
            lon: "-114.2908"
        }, {
            lat: "34.1368",
            lon: "-114.3237"
        }, {
            lat: "34.1186",
            lon: "-114.3622"
        }, {
            lat: "34.1118",
            lon: "-114.4089"
        }, {
            lat: "34.0856",
            lon: "-114.4363"
        }, {
            lat: "34.0276",
            lon: "-114.4336"
        }, {
            lat: "34.0117",
            lon: "-114.4652"
        }, {
            lat: "33.9582",
            lon: "-114.5119"
        }, {
            lat: "33.9308",
            lon: "-114.5366"
        }, {
            lat: "33.9058",
            lon: "-114.5091"
        }, {
            lat: "33.8613",
            lon: "-114.5256"
        }, {
            lat: "33.8248",
            lon: "-114.5215"
        }, {
            lat: "33.7597",
            lon: "-114.5050"
        }, {
            lat: "33.7083",
            lon: "-114.4940"
        }, {
            lat: "33.6832",
            lon: "-114.5284"
        }, {
            lat: "33.6363",
            lon: "-114.5242"
        }, {
            lat: "33.5895",
            lon: "-114.5393"
        }, {
            lat: "33.5528",
            lon: "-114.5242"
        }, {
            lat: "33.5311",
            lon: "-114.5586"
        }, {
            lat: "33.5070",
            lon: "-114.5778"
        }, {
            lat: "33.4418",
            lon: "-114.6245"
        }, {
            lat: "33.4142",
            lon: "-114.6506"
        }, {
            lat: "33.4039",
            lon: "-114.7055"
        }, {
            lat: "33.3546",
            lon: "-114.6973"
        }, {
            lat: "33.3041",
            lon: "-114.7302"
        }, {
            lat: "33.2858",
            lon: "-114.7206"
        }, {
            lat: "33.2754",
            lon: "-114.6808"
        }, {
            lat: "33.2582",
            lon: "-114.6698"
        }, {
            lat: "33.2467",
            lon: "-114.6904"
        }, {
            lat: "33.1720",
            lon: "-114.6794"
        }, {
            lat: "33.0904",
            lon: "-114.7083"
        }, {
            lat: "33.0858",
            lon: "-114.6918"
        }, {
            lat: "33.0328",
            lon: "-114.6629"
        }, {
            lat: "33.0501",
            lon: "-114.6451"
        }, {
            lat: "33.0305",
            lon: "-114.6286"
        }, {
            lat: "33.0282",
            lon: "-114.5888"
        }, {
            lat: "33.0351",
            lon: "-114.5750"
        }, {
            lat: "33.0328",
            lon: "-114.5174"
        }, {
            lat: "32.9718",
            lon: "-114.4913"
        }, {
            lat: "32.9764",
            lon: "-114.4775"
        }, {
            lat: "32.9372",
            lon: "-114.4844"
        }, {
            lat: "32.8427",
            lon: "-114.4679"
        }, {
            lat: "32.8161",
            lon: "-114.5091"
        }, {
            lat: "32.7850",
            lon: "-114.5311"
        }, {
            lat: "32.7573",
            lon: "-114.5284"
        }, {
            lat: "32.7503",
            lon: "-114.5641"
        }, {
            lat: "32.7353",
            lon: "-114.6162"
        }, {
            lat: "32.7480",
            lon: "-114.6986"
        }, {
            lat: "32.7191",
            lon: "-114.7220"
        }, {
            lat: "32.6868",
            lon: "-115.1944"
        }, {
            lat: "32.5121",
            lon: "-117.3395"
        }, {
            lat: "32.7838",
            lon: "-117.4823"
        }, {
            lat: "33.0501",
            lon: "-117.5977"
        }, {
            lat: "33.2341",
            lon: "-117.6814"
        }, {
            lat: "33.4578",
            lon: "-118.0591"
        }, {
            lat: "33.5403",
            lon: "-118.6290"
        }, {
            lat: "33.7928",
            lon: "-118.7073"
        }, {
            lat: "33.9582",
            lon: "-119.3706"
        }, {
            lat: "34.1925",
            lon: "-120.0050"
        }, {
            lat: "34.2561",
            lon: "-120.7164"
        }, {
            lat: "34.5360",
            lon: "-120.9128"
        }, {
            lat: "34.9749",
            lon: "-120.8427"
        }, {
            lat: "35.2131",
            lon: "-121.1325"
        }, {
            lat: "35.5255",
            lon: "-121.3220"
        }, {
            lat: "35.9691",
            lon: "-121.8013"
        }, {
            lat: "36.2808",
            lon: "-122.1446"
        }, {
            lat: "36.7268",
            lon: "-122.1721"
        }, {
            lat: "37.2227",
            lon: "-122.6871"
        }, {
            lat: "37.7783",
            lon: "-122.8903"
        }, {
            lat: "37.8965",
            lon: "-123.2378"
        }, {
            lat: "38.3449",
            lon: "-123.3202"
        }, {
            lat: "38.7423",
            lon: "-123.8338"
        }, {
            lat: "38.9946",
            lon: "-123.9793"
        }, {
            lat: "39.3088",
            lon: "-124.0329"
        }, {
            lat: "39.7642",
            lon: "-124.0823"
        }, {
            lat: "40.1663",
            lon: "-124.5314"
        }, {
            lat: "40.4658",
            lon: "-124.6509"
        }, {
            lat: "41.0110",
            lon: "-124.3144"
        }, {
            lat: "41.2386",
            lon: "-124.3419"
        }, {
            lat: "41.7170",
            lon: "-124.4545"
        }, {
            lat: "41.9983",
            lon: "-124.4009"
        }]
    }, {
        name: "Colorado",
        points: [{
            lat: "37.0004",
            lon: "-109.0448"
        }, {
            lat: "36.9949",
            lon: "-102.0424"
        }, {
            lat: "41.0006",
            lon: "-102.0534"
        }, {
            lat: "40.9996",
            lon: "-109.0489"
        }, {
            lat: "37.0004",
            lon: "-109.0448"
        }]
    }, {
        name: "Connecticut",
        points: [{
            lat: "42.0498",
            lon: "-73.4875"
        }, {
            lat: "42.0511",
            lon: "-73.4247"
        }, {
            lat: "42.0371",
            lon: "-72.8146"
        }, {
            lat: "41.9983",
            lon: "-72.8174"
        }, {
            lat: "42.0044",
            lon: "-72.7638"
        }, {
            lat: "42.0360",
            lon: "-72.7563"
        }, {
            lat: "42.0368",
            lon: "-72.6945"
        }, {
            lat: "42.0309",
            lon: "-72.6086"
        }, {
            lat: "42.0269",
            lon: "-72.6059"
        }, {
            lat: "42.0269",
            lon: "-72.5784"
        }, {
            lat: "42.0350",
            lon: "-72.5729"
        }, {
            lat: "42.0350",
            lon: "-72.4026"
        }, {
            lat: "42.0248",
            lon: "-71.7984"
        }, {
            lat: "41.6832",
            lon: "-71.7874"
        }, {
            lat: "41.4165",
            lon: "-71.7984"
        }, {
            lat: "41.3892",
            lon: "-71.8341"
        }, {
            lat: "41.3273",
            lon: "-71.8526"
        }, {
            lat: "41.3309",
            lon: "-71.8938"
        }, {
            lat: "41.3103",
            lon: "-71.9302"
        }, {
            lat: "41.2907",
            lon: "-72.0195"
        }, {
            lat: "41.2618",
            lon: "-72.0827"
        }, {
            lat: "41.1962",
            lon: "-72.4322"
        }, {
            lat: "41.0866",
            lon: "-73.0007"
        }, {
            lat: "41.0255",
            lon: "-73.2493"
        }, {
            lat: "40.9509",
            lon: "-73.6132"
        }, {
            lat: "40.9830",
            lon: "-73.6606"
        }, {
            lat: "41.0338",
            lon: "-73.6723"
        }, {
            lat: "41.1011",
            lon: "-73.7272"
        }, {
            lat: "41.2153",
            lon: "-73.4834"
        }, {
            lat: "41.2953",
            lon: "-73.5507"
        }, {
            lat: "41.4906",
            lon: "-73.5329"
        }, {
            lat: "42.0493",
            lon: "-73.4875"
        }]
    }, {
        name: "Delaware",
        points: [{
            lat: "39.7188",
            lon: "-75.7919"
        }, {
            lat: "39.5210",
            lon: "-75.7837"
        }, {
            lat: "38.9081",
            lon: "-75.7288"
        }, {
            lat: "38.5911",
            lon: "-75.7068"
        }, {
            lat: "38.4600",
            lon: "-75.6944"
        }, {
            lat: "38.4482",
            lon: "-74.8608"
        }, {
            lat: "38.8654",
            lon: "-74.8526"
        }, {
            lat: "38.8451",
            lon: "-75.0504"
        }, {
            lat: "39.0565",
            lon: "-75.1678"
        }, {
            lat: "39.2525",
            lon: "-75.3236"
        }, {
            lat: "39.3662",
            lon: "-75.4610"
        }, {
            lat: "39.4542",
            lon: "-75.5592"
        }, {
            lat: "39.4908",
            lon: "-75.5578"
        }, {
            lat: "39.5713",
            lon: "-75.5118"
        }, {
            lat: "39.6284",
            lon: "-75.5557"
        }, {
            lat: "39.8106",
            lon: "-75.3937"
        }, {
            lat: "39.8249",
            lon: "-75.4692"
        }, {
            lat: "39.8296",
            lon: "-75.6477"
        }, {
            lat: "39.7199",
            lon: "-75.7906"
        }]
    }, {
        name: "Florida",
        points: [{
            lat: "30.9988",
            lon: "-87.6050"
        }, {
            lat: "30.9964",
            lon: "-86.5613"
        }, {
            lat: "31.0035",
            lon: "-85.5313"
        }, {
            lat: "31.0012",
            lon: "-85.1193"
        }, {
            lat: "31.0023",
            lon: "-85.0012"
        }, {
            lat: "30.9364",
            lon: "-84.9847"
        }, {
            lat: "30.8845",
            lon: "-84.9367"
        }, {
            lat: "30.8409",
            lon: "-84.9271"
        }, {
            lat: "30.7902",
            lon: "-84.9257"
        }, {
            lat: "30.7489",
            lon: "-84.9147"
        }, {
            lat: "30.6993",
            lon: "-84.8611"
        }, {
            lat: "30.6911",
            lon: "-84.4272"
        }, {
            lat: "30.6509",
            lon: "-83.5991"
        }, {
            lat: "30.5895",
            lon: "-82.5595"
        }, {
            lat: "30.5682",
            lon: "-82.2134"
        }, {
            lat: "30.5315",
            lon: "-82.2134"
        }, {
            lat: "30.3883",
            lon: "-82.1997"
        }, {
            lat: "30.3598",
            lon: "-82.1544"
        }, {
            lat: "30.3598",
            lon: "-82.0638"
        }, {
            lat: "30.4877",
            lon: "-82.0226"
        }, {
            lat: "30.6308",
            lon: "-82.0473"
        }, {
            lat: "30.6757",
            lon: "-82.0514"
        }, {
            lat: "30.7111",
            lon: "-82.0377"
        }, {
            lat: "30.7371",
            lon: "-82.0514"
        }, {
            lat: "30.7678",
            lon: "-82.0102"
        }, {
            lat: "30.7914",
            lon: "-82.0322"
        }, {
            lat: "30.7997",
            lon: "-81.9717"
        }, {
            lat: "30.8244",
            lon: "-81.9608"
        }, {
            lat: "30.8056",
            lon: "-81.8893"
        }, {
            lat: "30.7914",
            lon: "-81.8372"
        }, {
            lat: "30.7796",
            lon: "-81.7960"
        }, {
            lat: "30.7536",
            lon: "-81.6696"
        }, {
            lat: "30.7289",
            lon: "-81.6051"
        }, {
            lat: "30.7324",
            lon: "-81.5666"
        }, {
            lat: "30.7229",
            lon: "-81.5295"
        }, {
            lat: "30.7253",
            lon: "-81.4856"
        }, {
            lat: "30.7111",
            lon: "-81.4609"
        }, {
            lat: "30.7088",
            lon: "-81.4169"
        }, {
            lat: "30.7064",
            lon: "-81.2274"
        }, {
            lat: "30.4345",
            lon: "-81.2357"
        }, {
            lat: "30.3160",
            lon: "-81.1725"
        }, {
            lat: "29.7763",
            lon: "-81.0379"
        }, {
            lat: "28.8603",
            lon: "-80.5861"
        }, {
            lat: "28.4771",
            lon: "-80.3650"
        }, {
            lat: "28.1882",
            lon: "-80.3815"
        }, {
            lat: "27.1789",
            lon: "-79.9255"
        }, {
            lat: "26.8425",
            lon: "-79.8198"
        }, {
            lat: "26.1394",
            lon: "-79.9118"
        }, {
            lat: "25.5115",
            lon: "-79.9997"
        }, {
            lat: "24.8802",
            lon: "-80.3815"
        }, {
            lat: "24.5384",
            lon: "-80.8704"
        }, {
            lat: "24.3959",
            lon: "-81.9250"
        }, {
            lat: "24.4496",
            lon: "-82.2066"
        }, {
            lat: "24.5484",
            lon: "-82.3137"
        }, {
            lat: "24.6982",
            lon: "-82.1997"
        }, {
            lat: "25.2112",
            lon: "-81.3977"
        }, {
            lat: "25.6019",
            lon: "-81.4622"
        }, {
            lat: "25.9235",
            lon: "-81.9456"
        }, {
            lat: "26.3439",
            lon: "-82.2876"
        }, {
            lat: "26.9098",
            lon: "-82.5307"
        }, {
            lat: "27.3315",
            lon: "-82.8342"
        }, {
            lat: "27.7565",
            lon: "-83.0182"
        }, {
            lat: "28.0574",
            lon: "-83.0017"
        }, {
            lat: "28.6098",
            lon: "-82.8548"
        }, {
            lat: "28.9697",
            lon: "-83.0264"
        }, {
            lat: "29.0478",
            lon: "-83.2050"
        }, {
            lat: "29.4157",
            lon: "-83.5318"
        }, {
            lat: "29.9133",
            lon: "-83.9767"
        }, {
            lat: "29.8930",
            lon: "-84.1072"
        }, {
            lat: "29.6940",
            lon: "-84.4409"
        }, {
            lat: "29.4551",
            lon: "-85.0465"
        }, {
            lat: "29.4946",
            lon: "-85.3610"
        }, {
            lat: "29.7262",
            lon: "-85.5807"
        }, {
            lat: "30.1594",
            lon: "-86.1946"
        }, {
            lat: "30.2175",
            lon: "-86.8510"
        }, {
            lat: "30.1499",
            lon: "-87.5171"
        }, {
            lat: "30.3006",
            lon: "-87.4429"
        }, {
            lat: "30.4256",
            lon: "-87.3750"
        }, {
            lat: "30.4830",
            lon: "-87.3743"
        }, {
            lat: "30.5658",
            lon: "-87.3907"
        }, {
            lat: "30.6344",
            lon: "-87.4004"
        }, {
            lat: "30.6763",
            lon: "-87.4141"
        }, {
            lat: "30.7702",
            lon: "-87.5253"
        }, {
            lat: "30.8527",
            lon: "-87.6256"
        }, {
            lat: "30.9470",
            lon: "-87.5912"
        }, {
            lat: "30.9682",
            lon: "-87.5912"
        }, {
            lat: "30.9964",
            lon: "-87.6050"
        }]
    }, {
        name: "Georgia",
        points: [{
            lat: "34.9974",
            lon: "-85.6082"
        }, {
            lat: "34.9906",
            lon: "-84.7266"
        }, {
            lat: "34.9895",
            lon: "-84.1580"
        }, {
            lat: "34.9996",
            lon: "-83.1088"
        }, {
            lat: "34.9287",
            lon: "-83.1418"
        }, {
            lat: "34.8318",
            lon: "-83.3025"
        }, {
            lat: "34.7281",
            lon: "-83.3560"
        }, {
            lat: "34.6569",
            lon: "-83.3080"
        }, {
            lat: "34.5744",
            lon: "-83.1528"
        }, {
            lat: "34.4839",
            lon: "-83.0072"
        }, {
            lat: "34.4681",
            lon: "-82.8918"
        }, {
            lat: "34.4443",
            lon: "-82.8589"
        }, {
            lat: "34.2674",
            lon: "-82.7490"
        }, {
            lat: "34.1254",
            lon: "-82.6831"
        }, {
            lat: "34.0140",
            lon: "-82.5952"
        }, {
            lat: "33.8647",
            lon: "-82.3988"
        }, {
            lat: "33.7563",
            lon: "-82.2505"
        }, {
            lat: "33.6695",
            lon: "-82.2217"
        }, {
            lat: "33.5963",
            lon: "-82.1558"
        }, {
            lat: "33.5036",
            lon: "-82.0432"
        }, {
            lat: "33.3707",
            lon: "-81.9484"
        }, {
            lat: "33.2077",
            lon: "-81.8303"
        }, {
            lat: "33.1674",
            lon: "-81.7795"
        }, {
            lat: "33.1456",
            lon: "-81.7424"
        }, {
            lat: "33.0881",
            lon: "-81.6078"
        }, {
            lat: "33.0075",
            lon: "-81.5034"
        }, {
            lat: "32.9418",
            lon: "-81.5089"
        }, {
            lat: "32.6914",
            lon: "-81.4142"
        }, {
            lat: "32.5815",
            lon: "-81.4087"
        }, {
            lat: "32.5283",
            lon: "-81.2769"
        }, {
            lat: "32.4576",
            lon: "-81.1945"
        }, {
            lat: "32.3185",
            lon: "-81.1642"
        }, {
            lat: "32.2151",
            lon: "-81.1436"
        }, {
            lat: "32.1128",
            lon: "-81.1134"
        }, {
            lat: "32.0477",
            lon: "-80.9225"
        }, {
            lat: "32.0500",
            lon: "-80.6960"
        }, {
            lat: "31.8881",
            lon: "-80.7289"
        }, {
            lat: "31.4697",
            lon: "-80.9665"
        }, {
            lat: "30.9988",
            lon: "-81.1011"
        }, {
            lat: "30.7041",
            lon: "-81.2288"
        }, {
            lat: "30.7241",
            lon: "-81.6023"
        }, {
            lat: "30.7713",
            lon: "-81.7657"
        }, {
            lat: "30.8221",
            lon: "-81.9498"
        }, {
            lat: "30.7560",
            lon: "-82.0239"
        }, {
            lat: "30.6379",
            lon: "-82.0459"
        }, {
            lat: "30.4866",
            lon: "-82.0239"
        }, {
            lat: "30.4309",
            lon: "-82.0363"
        }, {
            lat: "30.3575",
            lon: "-82.0610"
        }, {
            lat: "30.3598",
            lon: "-82.1585"
        }, {
            lat: "30.3859",
            lon: "-82.2025"
        }, {
            lat: "30.4842",
            lon: "-82.2148"
        }, {
            lat: "30.5682",
            lon: "-82.2162"
        }, {
            lat: "30.6131",
            lon: "-82.9688"
        }, {
            lat: "30.7041",
            lon: "-84.8639"
        }, {
            lat: "30.7831",
            lon: "-84.9257"
        }, {
            lat: "30.9117",
            lon: "-84.9586"
        }, {
            lat: "30.9741",
            lon: "-84.9985"
        }, {
            lat: "31.1282",
            lon: "-85.0630"
        }, {
            lat: "31.2116",
            lon: "-85.1070"
        }, {
            lat: "31.5247",
            lon: "-85.0493"
        }, {
            lat: "31.8006",
            lon: "-85.1358"
        }, {
            lat: "31.9592",
            lon: "-85.0919"
        }, {
            lat: "32.1570",
            lon: "-85.0342"
        }, {
            lat: "32.2500",
            lon: "-84.9023"
        }, {
            lat: "32.3974",
            lon: "-84.9628"
        }, {
            lat: "32.5468",
            lon: "-85.0342"
        }, {
            lat: "32.6949",
            lon: "-85.1001"
        }, {
            lat: "32.8138",
            lon: "-85.1660"
        }, {
            lat: "32.9833",
            lon: "-85.2072"
        }, {
            lat: "33.6512",
            lon: "-85.3418"
        }, {
            lat: "34.5620",
            lon: "-85.5231"
        }, {
            lat: "34.9929",
            lon: "-85.6068"
        }]
    }, {
        name: "Hawaii",
        points: [{
            lat: "19.5158",
            lon: "-154.6284"
        }, {
            lat: "19.8894",
            lon: "-154.8235"
        }, {
            lat: "20.1849",
            lon: "-155.0391"
        }, {
            lat: "20.3910",
            lon: "-155.5952"
        }, {
            lat: "20.8614",
            lon: "-155.7930"
        }, {
            lat: "21.0948",
            lon: "-156.1858"
        }, {
            lat: "21.3597",
            lon: "-156.6595"
        }, {
            lat: "21.4748",
            lon: "-157.1182"
        }, {
            lat: "21.5515",
            lon: "-157.5247"
        }, {
            lat: "21.8832",
            lon: "-157.8186"
        }, {
            lat: "22.3386",
            lon: "-159.2180"
        }, {
            lat: "22.3374",
            lon: "-159.7508"
        }, {
            lat: "22.1493",
            lon: "-160.1422"
        }, {
            lat: "21.8857",
            lon: "-160.3922"
        }, {
            lat: "21.6025",
            lon: "-160.3249"
        }, {
            lat: "21.7276",
            lon: "-159.9939"
        }, {
            lat: "21.6932",
            lon: "-159.4295"
        }, {
            lat: "21.1037",
            lon: "-158.1784"
        }, {
            lat: "20.8152",
            lon: "-157.4629"
        }, {
            lat: "20.6803",
            lon: "-157.2171"
        }, {
            lat: "20.3408",
            lon: "-156.8285"
        }, {
            lat: "20.2931",
            lon: "-156.5456"
        }, {
            lat: "20.1643",
            lon: "-156.1418"
        }, {
            lat: "19.9308",
            lon: "-156.2393"
        }, {
            lat: "19.2826",
            lon: "-156.1432"
        }, {
            lat: "18.9881",
            lon: "-156.1212"
        }, {
            lat: "18.7100",
            lon: "-155.7120"
        }, {
            lat: "18.8829",
            lon: "-155.3673"
        }, {
            lat: "19.2048",
            lon: "-154.8839"
        }, {
            lat: "19.5158",
            lon: "-154.6271"
        }]
    }, {
        name: "Iowa",
        points: [{
            lat: "40.5848",
            lon: "-95.7623"
        }, {
            lat: "40.5785",
            lon: "-93.5445"
        }, {
            lat: "40.6129",
            lon: "-91.7372"
        }, {
            lat: "40.5545",
            lon: "-91.6768"
        }, {
            lat: "40.5451",
            lon: "-91.6246"
        }, {
            lat: "40.3622",
            lon: "-91.4365"
        }, {
            lat: "40.4637",
            lon: "-91.3623"
        }, {
            lat: "40.5482",
            lon: "-91.4021"
        }, {
            lat: "40.6931",
            lon: "-91.1124"
        }, {
            lat: "40.8107",
            lon: "-91.1028"
        }, {
            lat: "40.9218",
            lon: "-90.9668"
        }, {
            lat: "41.1642",
            lon: "-91.0121"
        }, {
            lat: "41.2406",
            lon: "-91.1082"
        }, {
            lat: "41.4067",
            lon: "-91.0451"
        }, {
            lat: "41.4510",
            lon: "-90.7086"
        }, {
            lat: "41.5178",
            lon: "-90.4793"
        }, {
            lat: "41.5908",
            lon: "-90.3419"
        }, {
            lat: "41.7457",
            lon: "-90.2788"
        }, {
            lat: "41.8164",
            lon: "-90.2074"
        }, {
            lat: "41.9023",
            lon: "-90.1538"
        }, {
            lat: "42.0962",
            lon: "-90.1744"
        }, {
            lat: "42.1441",
            lon: "-90.2692"
        }, {
            lat: "42.2905",
            lon: "-90.4298"
        }, {
            lat: "42.4093",
            lon: "-90.5370"
        }, {
            lat: "42.5217",
            lon: "-90.6400"
        }, {
            lat: "42.6360",
            lon: "-90.7127"
        }, {
            lat: "42.6956",
            lon: "-90.7883"
        }, {
            lat: "42.7712",
            lon: "-91.0533"
        }, {
            lat: "42.8448",
            lon: "-91.0904"
        }, {
            lat: "42.9082",
            lon: "-91.1398"
        }, {
            lat: "43.0609",
            lon: "-91.1549"
        }, {
            lat: "43.1391",
            lon: "-91.1522"
        }, {
            lat: "43.2882",
            lon: "-91.0547"
        }, {
            lat: "43.3322",
            lon: "-91.2057"
        }, {
            lat: "43.4140",
            lon: "-91.2236"
        }, {
            lat: "43.5008",
            lon: "-91.2305"
        }, {
            lat: "43.4998",
            lon: "-96.5973"
        }, {
            lat: "43.4818",
            lon: "-96.6110"
        }, {
            lat: "43.3871",
            lon: "-96.5245"
        }, {
            lat: "43.2232",
            lon: "-96.5533"
        }, {
            lat: "43.1301",
            lon: "-96.4421"
        }, {
            lat: "42.9243",
            lon: "-96.5479"
        }, {
            lat: "42.7188",
            lon: "-96.6357"
        }, {
            lat: "42.6158",
            lon: "-96.5561"
        }, {
            lat: "42.5055",
            lon: "-96.4847"
        }, {
            lat: "42.4599",
            lon: "-96.3995"
        }, {
            lat: "42.3667",
            lon: "-96.4050"
        }, {
            lat: "42.2722",
            lon: "-96.3446"
        }, {
            lat: "42.2051",
            lon: "-96.3625"
        }, {
            lat: "41.9983",
            lon: "-96.2416"
        }, {
            lat: "41.9513",
            lon: "-96.1372"
        }, {
            lat: "41.7662",
            lon: "-96.0741"
        }, {
            lat: "41.6267",
            lon: "-96.0988"
        }, {
            lat: "41.4561",
            lon: "-95.9477"
        }, {
            lat: "41.2819",
            lon: "-95.8804"
        }, {
            lat: "41.0338",
            lon: "-95.8653"
        }, {
            lat: "40.8346",
            lon: "-95.8365"
        }, {
            lat: "40.6775",
            lon: "-95.8461"
        }, {
            lat: "40.5837",
            lon: "-95.7610"
        }]
    }, {
        name: "Idaho",
        points: [{
            lat: "49.0000",
            lon: "-117.0319"
        }, {
            lat: "49.0018",
            lon: "-116.0486"
        }, {
            lat: "47.9752",
            lon: "-116.0445"
        }, {
            lat: "47.5765",
            lon: "-115.6915"
        }, {
            lat: "47.5487",
            lon: "-115.7574"
        }, {
            lat: "47.4239",
            lon: "-115.7595"
        }, {
            lat: "47.3109",
            lon: "-115.5350"
        }, {
            lat: "47.2606",
            lon: "-115.3235"
        }, {
            lat: "47.1888",
            lon: "-115.2878"
        }, {
            lat: "47.1542",
            lon: "-115.2493"
        }, {
            lat: "46.9728",
            lon: "-115.0433"
        }, {
            lat: "46.8677",
            lon: "-114.9472"
        }, {
            lat: "46.7201",
            lon: "-114.7865"
        }, {
            lat: "46.6984",
            lon: "-114.7549"
        }, {
            lat: "46.6325",
            lon: "-114.5874"
        }, {
            lat: "46.6325",
            lon: "-114.4638"
        }, {
            lat: "46.6466",
            lon: "-114.3279"
        }, {
            lat: "46.5135",
            lon: "-114.3430"
        }, {
            lat: "46.4530",
            lon: "-114.3896"
        }, {
            lat: "46.3488",
            lon: "-114.4144"
        }, {
            lat: "46.2682",
            lon: "-114.4611"
        }, {
            lat: "46.1227",
            lon: "-114.5105"
        }, {
            lat: "45.8585",
            lon: "-114.4418"
        }, {
            lat: "45.7742",
            lon: "-114.5654"
        }, {
            lat: "45.6745",
            lon: "-114.5229"
        }, {
            lat: "45.5621",
            lon: "-114.5654"
        }, {
            lat: "45.5439",
            lon: "-114.4666"
        }, {
            lat: "45.4601",
            lon: "-114.3375"
        }, {
            lat: "45.5468",
            lon: "-114.2441"
        }, {
            lat: "45.5631",
            lon: "-114.1342"
        }, {
            lat: "45.6889",
            lon: "-113.9708"
        }, {
            lat: "45.6102",
            lon: "-113.8403"
        }, {
            lat: "45.4409",
            lon: "-113.7978"
        }, {
            lat: "45.2720",
            lon: "-113.7085"
        }, {
            lat: "45.0260",
            lon: "-113.4256"
        }, {
            lat: "44.9405",
            lon: "-113.4998"
        }, {
            lat: "44.7887",
            lon: "-113.3459"
        }, {
            lat: "44.8062",
            lon: "-113.2471"
        }, {
            lat: "44.7350",
            lon: "-113.1180"
        }, {
            lat: "44.4887",
            lon: "-113.0246"
        }, {
            lat: "44.3592",
            lon: "-112.8502"
        }, {
            lat: "44.4151",
            lon: "-112.8310"
        }, {
            lat: "44.4887",
            lon: "-112.7266"
        }, {
            lat: "44.4504",
            lon: "-112.3901"
        }, {
            lat: "44.5347",
            lon: "-112.3270"
        }, {
            lat: "44.5220",
            lon: "-112.1127"
        }, {
            lat: "44.5582",
            lon: "-111.8848"
        }, {
            lat: "44.5132",
            lon: "-111.8271"
        }, {
            lat: "44.5396",
            lon: "-111.4645"
        }, {
            lat: "44.6198",
            lon: "-111.5057"
        }, {
            lat: "44.7292",
            lon: "-111.3684"
        }, {
            lat: "44.4759",
            lon: "-111.0539"
        }, {
            lat: "43.8623",
            lon: "-111.0471"
        }, {
            lat: "42.0013",
            lon: "-111.0471"
        }, {
            lat: "41.9962",
            lon: "-112.1663"
        }, {
            lat: "41.9871",
            lon: "-113.8458"
        }, {
            lat: "41.9942",
            lon: "-114.0422"
        }, {
            lat: "42.0013",
            lon: "-114.8222"
        }, {
            lat: "41.9973",
            lon: "-115.9126"
        }, {
            lat: "41.9962",
            lon: "-117.0140"
        }, {
            lat: "42.0013",
            lon: "-117.0264"
        }, {
            lat: "43.7820",
            lon: "-117.0277"
        }, {
            lat: "43.8330",
            lon: "-117.0325"
        }, {
            lat: "43.8632",
            lon: "-117.0030"
        }, {
            lat: "43.9073",
            lon: "-116.9776"
        }, {
            lat: "44.0244",
            lon: "-116.9302"
        }, {
            lat: "44.0491",
            lon: "-116.9735"
        }, {
            lat: "44.1014",
            lon: "-116.9330"
        }, {
            lat: "44.1561",
            lon: "-116.8945"
        }, {
            lat: "44.1965",
            lon: "-116.9714"
        }, {
            lat: "44.2442",
            lon: "-116.9810"
        }, {
            lat: "44.2486",
            lon: "-117.0339"
        }, {
            lat: "44.2304",
            lon: "-117.0525"
        }, {
            lat: "44.2585",
            lon: "-117.0895"
        }, {
            lat: "44.2806",
            lon: "-117.1122"
        }, {
            lat: "44.2590",
            lon: "-117.1541"
        }, {
            lat: "44.2973",
            lon: "-117.2255"
        }, {
            lat: "44.3445",
            lon: "-117.1994"
        }, {
            lat: "44.3813",
            lon: "-117.2372"
        }, {
            lat: "44.4769",
            lon: "-117.2269"
        }, {
            lat: "44.5234",
            lon: "-117.1836"
        }, {
            lat: "44.5376",
            lon: "-117.1458"
        }, {
            lat: "44.7423",
            lon: "-117.0442"
        }, {
            lat: "44.7921",
            lon: "-116.9316"
        }, {
            lat: "44.8568",
            lon: "-116.8980"
        }, {
            lat: "44.9356",
            lon: "-116.8327"
        }, {
            lat: "44.9624",
            lon: "-116.8513"
        }, {
            lat: "44.9896",
            lon: "-116.8554"
        }, {
            lat: "45.0313",
            lon: "-116.8417"
        }, {
            lat: "45.0968",
            lon: "-116.7819"
        }, {
            lat: "45.1627",
            lon: "-116.7229"
        }, {
            lat: "45.2178",
            lon: "-116.7105"
        }, {
            lat: "45.3213",
            lon: "-116.6741"
        }, {
            lat: "45.3984",
            lon: "-116.6185"
        }, {
            lat: "45.4433",
            lon: "-116.5883"
        }, {
            lat: "45.4630",
            lon: "-116.5553"
        }, {
            lat: "45.5371",
            lon: "-116.5334"
        }, {
            lat: "45.6140",
            lon: "-116.4640"
        }, {
            lat: "45.6904",
            lon: "-116.5354"
        }, {
            lat: "45.7340",
            lon: "-116.5354"
        }, {
            lat: "45.7541",
            lon: "-116.5594"
        }, {
            lat: "45.7843",
            lon: "-116.6357"
        }, {
            lat: "45.7781",
            lon: "-116.5965"
        }, {
            lat: "45.7805",
            lon: "-116.6597"
        }, {
            lat: "45.8259",
            lon: "-116.7105"
        }, {
            lat: "45.8159",
            lon: "-116.7586"
        }, {
            lat: "45.8341",
            lon: "-116.7908"
        }, {
            lat: "45.8642",
            lon: "-116.8046"
        }, {
            lat: "45.9053",
            lon: "-116.8595"
        }, {
            lat: "45.9545",
            lon: "-116.8739"
        }, {
            lat: "45.9769",
            lon: "-116.8925"
        }, {
            lat: "46.0218",
            lon: "-116.9302"
        }, {
            lat: "46.0932",
            lon: "-116.9838"
        }, {
            lat: "46.1385",
            lon: "-116.9344"
        }, {
            lat: "46.1727",
            lon: "-116.9268"
        }, {
            lat: "46.2007",
            lon: "-116.9646"
        }, {
            lat: "46.2435",
            lon: "-116.9591"
        }, {
            lat: "46.2782",
            lon: "-116.9920"
        }, {
            lat: "46.3152",
            lon: "-117.0209"
        }, {
            lat: "46.3446",
            lon: "-117.0511"
        }, {
            lat: "46.4270",
            lon: "-117.0408"
        }, {
            lat: "46.9451",
            lon: "-117.0394"
        }, {
            lat: "48.9996",
            lon: "-117.0319"
        }]
    }, {
        name: "Illinois",
        points: [{
            lat: "42.5116",
            lon: "-90.6290"
        }, {
            lat: "42.4924",
            lon: "-87.0213"
        }, {
            lat: "41.7641",
            lon: "-87.2067"
        }, {
            lat: "41.7611",
            lon: "-87.5226"
        }, {
            lat: "39.6417",
            lon: "-87.5336"
        }, {
            lat: "39.3566",
            lon: "-87.5308"
        }, {
            lat: "39.1386",
            lon: "-87.6517"
        }, {
            lat: "38.9445",
            lon: "-87.5157"
        }, {
            lat: "38.7294",
            lon: "-87.5047"
        }, {
            lat: "38.6115",
            lon: "-87.6146"
        }, {
            lat: "38.4944",
            lon: "-87.6544"
        }, {
            lat: "38.3740",
            lon: "-87.7780"
        }, {
            lat: "38.2856",
            lon: "-87.8371"
        }, {
            lat: "38.2414",
            lon: "-87.9758"
        }, {
            lat: "38.1454",
            lon: "-87.9291"
        }, {
            lat: "37.9788",
            lon: "-88.0225"
        }, {
            lat: "37.8900",
            lon: "-88.0458"
        }, {
            lat: "37.7881",
            lon: "-88.0321"
        }, {
            lat: "37.6349",
            lon: "-88.1529"
        }, {
            lat: "37.5097",
            lon: "-88.0609"
        }, {
            lat: "37.4149",
            lon: "-88.4152"
        }, {
            lat: "37.2828",
            lon: "-88.5086"
        }, {
            lat: "37.1428",
            lon: "-88.4221"
        }, {
            lat: "37.0585",
            lon: "-88.4990"
        }, {
            lat: "37.1428",
            lon: "-88.7256"
        }, {
            lat: "37.2128",
            lon: "-88.9453"
        }, {
            lat: "37.1559",
            lon: "-89.0689"
        }, {
            lat: "37.0376",
            lon: "-89.1650"
        }, {
            lat: "36.9894",
            lon: "-89.2873"
        }, {
            lat: "37.1505",
            lon: "-89.4356"
        }, {
            lat: "37.2762",
            lon: "-89.5345"
        }, {
            lat: "37.3996",
            lon: "-89.4315"
        }, {
            lat: "37.6936",
            lon: "-89.5358"
        }, {
            lat: "37.9767",
            lon: "-89.9670"
        }, {
            lat: "38.2587",
            lon: "-90.3790"
        }, {
            lat: "38.6169",
            lon: "-90.2376"
        }, {
            lat: "38.7573",
            lon: "-90.1744"
        }, {
            lat: "38.8247",
            lon: "-90.1167"
        }, {
            lat: "38.8846",
            lon: "-90.1799"
        }, {
            lat: "38.9680",
            lon: "-90.4504"
        }, {
            lat: "38.8654",
            lon: "-90.5905"
        }, {
            lat: "39.0405",
            lon: "-90.7086"
        }, {
            lat: "39.2301",
            lon: "-90.7306"
        }, {
            lat: "39.3173",
            lon: "-90.8350"
        }, {
            lat: "39.3853",
            lon: "-90.9338"
        }, {
            lat: "39.5559",
            lon: "-91.1398"
        }, {
            lat: "39.7262",
            lon: "-91.3554"
        }, {
            lat: "39.8570",
            lon: "-91.4406"
        }, {
            lat: "39.9940",
            lon: "-91.4941"
        }, {
            lat: "40.1694",
            lon: "-91.5120"
        }, {
            lat: "40.3497",
            lon: "-91.4667"
        }, {
            lat: "40.4166",
            lon: "-91.3939"
        }, {
            lat: "40.5566",
            lon: "-91.4021"
        }, {
            lat: "40.6265",
            lon: "-91.2524"
        }, {
            lat: "40.6963",
            lon: "-91.1151"
        }, {
            lat: "40.8232",
            lon: "-91.0890"
        }, {
            lat: "40.9312",
            lon: "-90.9792"
        }, {
            lat: "41.1642",
            lon: "-91.0162"
        }, {
            lat: "41.2355",
            lon: "-91.1055"
        }, {
            lat: "41.4170",
            lon: "-91.0368"
        }, {
            lat: "41.4458",
            lon: "-90.8487"
        }, {
            lat: "41.4417",
            lon: "-90.7251"
        }, {
            lat: "41.5816",
            lon: "-90.3516"
        }, {
            lat: "41.7713",
            lon: "-90.2637"
        }, {
            lat: "41.9023",
            lon: "-90.1538"
        }, {
            lat: "42.0819",
            lon: "-90.1758"
        }, {
            lat: "42.2021",
            lon: "-90.3598"
        }, {
            lat: "42.2936",
            lon: "-90.4395"
        }, {
            lat: "42.4032",
            lon: "-90.5356"
        }, {
            lat: "42.4843",
            lon: "-90.6564"
        }]
    }, {
        name: "Indiana",
        points: [{
            lat: "41.7611",
            lon: "-87.5253"
        }, {
            lat: "41.7611",
            lon: "-84.8090"
        }, {
            lat: "39.0981",
            lon: "-84.8199"
        }, {
            lat: "39.0533",
            lon: "-84.8927"
        }, {
            lat: "38.8996",
            lon: "-84.8625"
        }, {
            lat: "38.8312",
            lon: "-84.8268"
        }, {
            lat: "38.7841",
            lon: "-84.8145"
        }, {
            lat: "38.7905",
            lon: "-84.8941"
        }, {
            lat: "38.7809",
            lon: "-84.9861"
        }, {
            lat: "38.6877",
            lon: "-85.1797"
        }, {
            lat: "38.7198",
            lon: "-85.4420"
        }, {
            lat: "38.5653",
            lon: "-85.4091"
        }, {
            lat: "38.4461",
            lon: "-85.5986"
        }, {
            lat: "38.2695",
            lon: "-85.7510"
        }, {
            lat: "38.2824",
            lon: "-85.8266"
        }, {
            lat: "38.2414",
            lon: "-85.8376"
        }, {
            lat: "38.0967",
            lon: "-85.9035"
        }, {
            lat: "38.0232",
            lon: "-85.9200"
        }, {
            lat: "37.9594",
            lon: "-86.0477"
        }, {
            lat: "38.0102",
            lon: "-86.0944"
        }, {
            lat: "38.0578",
            lon: "-86.2729"
        }, {
            lat: "38.0935",
            lon: "-86.2811"
        }, {
            lat: "38.1346",
            lon: "-86.2729"
        }, {
            lat: "38.1842",
            lon: "-86.3704"
        }, {
            lat: "38.0416",
            lon: "-86.5187"
        }, {
            lat: "37.9193",
            lon: "-86.5874"
        }, {
            lat: "37.8402",
            lon: "-86.6409"
        }, {
            lat: "37.9085",
            lon: "-86.6478"
        }, {
            lat: "37.9085",
            lon: "-86.6876"
        }, {
            lat: "37.9821",
            lon: "-86.8236"
        }, {
            lat: "37.9464",
            lon: "-86.9019"
        }, {
            lat: "37.9009",
            lon: "-87.0392"
        }, {
            lat: "37.7924",
            lon: "-87.1394"
        }, {
            lat: "37.9464",
            lon: "-87.4429"
        }, {
            lat: "37.9756",
            lon: "-87.5885"
        }, {
            lat: "37.9225",
            lon: "-87.6283"
        }, {
            lat: "37.8694",
            lon: "-87.6915"
        }, {
            lat: "37.9236",
            lon: "-87.8879"
        }, {
            lat: "37.7718",
            lon: "-87.9620"
        }, {
            lat: "37.7870",
            lon: "-88.0321"
        }, {
            lat: "37.8092",
            lon: "-88.0376"
        }, {
            lat: "37.8011",
            lon: "-88.0643"
        }, {
            lat: "37.8206",
            lon: "-88.0925"
        }, {
            lat: "37.8223",
            lon: "-88.0451"
        }, {
            lat: "37.8483",
            lon: "-88.0575"
        }, {
            lat: "37.9041",
            lon: "-88.0980"
        }, {
            lat: "37.9307",
            lon: "-88.0705"
        }, {
            lat: "37.9561",
            lon: "-88.0369"
        }, {
            lat: "37.9669",
            lon: "-88.0122"
        }, {
            lat: "38.0102",
            lon: "-88.0259"
        }, {
            lat: "38.0384",
            lon: "-88.0417"
        }, {
            lat: "38.0530",
            lon: "-88.0005"
        }, {
            lat: "38.0762",
            lon: "-87.9607"
        }, {
            lat: "38.1000",
            lon: "-88.0163"
        }, {
            lat: "38.1313",
            lon: "-87.9710"
        }, {
            lat: "38.1497",
            lon: "-87.9284"
        }, {
            lat: "38.1734",
            lon: "-87.9387"
        }, {
            lat: "38.1939",
            lon: "-87.9730"
        }, {
            lat: "38.2349",
            lon: "-87.9813"
        }, {
            lat: "38.2608",
            lon: "-87.9421"
        }, {
            lat: "38.2759",
            lon: "-87.8604"
        }, {
            lat: "38.3029",
            lon: "-87.8302"
        }, {
            lat: "38.3233",
            lon: "-87.8350"
        }, {
            lat: "38.3567",
            lon: "-87.8137"
        }, {
            lat: "38.3767",
            lon: "-87.7739"
        }, {
            lat: "38.4116",
            lon: "-87.7444"
        }, {
            lat: "38.5149",
            lon: "-87.6448"
        }, {
            lat: "38.5460",
            lon: "-87.6723"
        }, {
            lat: "38.5949",
            lon: "-87.6105"
        }, {
            lat: "38.5986",
            lon: "-87.6242"
        }, {
            lat: "38.6828",
            lon: "-87.5343"
        }, {
            lat: "38.7284",
            lon: "-87.5075"
        }, {
            lat: "38.7696",
            lon: "-87.4972"
        }, {
            lat: "38.8247",
            lon: "-87.5322"
        }, {
            lat: "38.9039",
            lon: "-87.5171"
        }, {
            lat: "38.9413",
            lon: "-87.5253"
        }, {
            lat: "38.9712",
            lon: "-87.5281"
        }, {
            lat: "38.9872",
            lon: "-87.5761"
        }, {
            lat: "39.0906",
            lon: "-87.6228"
        }, {
            lat: "39.1066",
            lon: "-87.6517"
        }, {
            lat: "39.1365",
            lon: "-87.6599"
        }, {
            lat: "39.1695",
            lon: "-87.6366"
        }, {
            lat: "39.2493",
            lon: "-87.5899"
        }, {
            lat: "39.3492",
            lon: "-87.5336"
        }, {
            lat: "41.7600",
            lon: "-87.5253"
        }]
    }, {
        name: "Kansas",
        points: [{
            lat: "40.0034",
            lon: "-102.0506"
        }, {
            lat: "40.0034",
            lon: "-102.0506"
        }, {
            lat: "36.9927",
            lon: "-102.0438"
        }, {
            lat: "36.9982",
            lon: "-94.6211"
        }, {
            lat: "38.8803",
            lon: "-94.6046"
        }, {
            lat: "39.0789",
            lon: "-94.6143"
        }, {
            lat: "39.1971",
            lon: "-94.6184"
        }, {
            lat: "39.1673",
            lon: "-94.7255"
        }, {
            lat: "39.2759",
            lon: "-94.8793"
        }, {
            lat: "39.5612",
            lon: "-95.0990"
        }, {
            lat: "39.7283",
            lon: "-94.8807"
        }, {
            lat: "39.8286",
            lon: "-94.8930"
        }, {
            lat: "39.8823",
            lon: "-94.9342"
        }, {
            lat: "39.8971",
            lon: "-95.0098"
        }, {
            lat: "39.8760",
            lon: "-95.0922"
        }, {
            lat: "39.9445",
            lon: "-95.2213"
        }, {
            lat: "40.0087",
            lon: "-95.3036"
        }, {
            lat: "40.0024",
            lon: "-102.0506"
        }]
    }, {
        name: "Kentucky",
        points: [{
            lat: "36.4986",
            lon: "-89.5372"
        }, {
            lat: "36.5074",
            lon: "-89.3010"
        }, {
            lat: "36.5008",
            lon: "-88.6871"
        }, {
            lat: "36.4931",
            lon: "-88.0568"
        }, {
            lat: "36.6695",
            lon: "-88.0692"
        }, {
            lat: "36.6343",
            lon: "-87.8535"
        }, {
            lat: "36.6265",
            lon: "-86.5654"
        }, {
            lat: "36.5979",
            lon: "-83.6375"
        }, {
            lat: "36.6860",
            lon: "-83.3423"
        }, {
            lat: "36.7466",
            lon: "-83.1377"
        }, {
            lat: "36.9762",
            lon: "-82.8589"
        }, {
            lat: "37.2894",
            lon: "-82.3192"
        }, {
            lat: "37.4934",
            lon: "-82.0308"
        }, {
            lat: "37.6653",
            lon: "-82.2121"
        }, {
            lat: "37.8618",
            lon: "-82.4016"
        }, {
            lat: "37.9908",
            lon: "-82.5073"
        }, {
            lat: "38.1778",
            lon: "-82.6392"
        }, {
            lat: "38.3761",
            lon: "-82.5952"
        }, {
            lat: "38.5030",
            lon: "-82.7477"
        }, {
            lat: "38.5825",
            lon: "-82.8369"
        }, {
            lat: "38.7316",
            lon: "-82.9015"
        }, {
            lat: "38.7027",
            lon: "-83.0196"
        }, {
            lat: "38.6190",
            lon: "-83.1418"
        }, {
            lat: "38.5986",
            lon: "-83.2819"
        }, {
            lat: "38.6941",
            lon: "-83.5291"
        }, {
            lat: "38.6351",
            lon: "-83.6595"
        }, {
            lat: "38.7487",
            lon: "-83.8930"
        }, {
            lat: "38.7701",
            lon: "-84.0440"
        }, {
            lat: "38.8119",
            lon: "-84.2184"
        }, {
            lat: "38.9872",
            lon: "-84.3228"
        }, {
            lat: "39.1013",
            lon: "-84.4917"
        }, {
            lat: "39.1183",
            lon: "-84.6277"
        }, {
            lat: "39.1439",
            lon: "-84.7554"
        }, {
            lat: "39.0523",
            lon: "-84.8914"
        }, {
            lat: "38.9263",
            lon: "-84.8735"
        }, {
            lat: "38.7894",
            lon: "-84.8131"
        }, {
            lat: "38.7691",
            lon: "-84.9957"
        }, {
            lat: "38.6866",
            lon: "-85.1921"
        }, {
            lat: "38.7209",
            lon: "-85.4407"
        }, {
            lat: "38.5653",
            lon: "-85.4077"
        }, {
            lat: "38.4461",
            lon: "-85.5972"
        }, {
            lat: "38.2748",
            lon: "-85.7455"
        }, {
            lat: "38.2716",
            lon: "-85.8087"
        }, {
            lat: "38.2069",
            lon: "-85.8650"
        }, {
            lat: "38.0286",
            lon: "-85.9323"
        }, {
            lat: "37.9550",
            lon: "-86.0422"
        }, {
            lat: "38.0135",
            lon: "-86.1108"
        }, {
            lat: "38.0643",
            lon: "-86.2756"
        }, {
            lat: "38.1389",
            lon: "-86.2770"
        }, {
            lat: "38.1864",
            lon: "-86.3690"
        }, {
            lat: "38.0308",
            lon: "-86.5283"
        }, {
            lat: "37.9204",
            lon: "-86.5874"
        }, {
            lat: "37.8423",
            lon: "-86.6423"
        }, {
            lat: "37.9041",
            lon: "-86.6547"
        }, {
            lat: "37.9864",
            lon: "-86.8250"
        }, {
            lat: "37.9095",
            lon: "-87.0406"
        }, {
            lat: "37.7935",
            lon: "-87.1381"
        }, {
            lat: "37.9420",
            lon: "-87.4168"
        }, {
            lat: "37.9745",
            lon: "-87.5858"
        }, {
            lat: "37.8749",
            lon: "-87.6929"
        }, {
            lat: "37.9215",
            lon: "-87.8906"
        }, {
            lat: "37.7761",
            lon: "-87.9552"
        }, {
            lat: "37.7903",
            lon: "-88.0307"
        }, {
            lat: "37.6479",
            lon: "-88.1584"
        }, {
            lat: "37.5097",
            lon: "-88.0664"
        }, {
            lat: "37.4193",
            lon: "-88.4180"
        }, {
            lat: "37.2784",
            lon: "-88.5086"
        }, {
            lat: "37.1428",
            lon: "-88.4248"
        }, {
            lat: "37.0738",
            lon: "-88.5059"
        }, {
            lat: "37.1461",
            lon: "-88.7421"
        }, {
            lat: "37.2249",
            lon: "-88.9522"
        }, {
            lat: "37.1406",
            lon: "-89.0964"
        }, {
            lat: "37.0278",
            lon: "-89.1815"
        }, {
            lat: "36.9488",
            lon: "-89.1032"
        }, {
            lat: "36.8214",
            lon: "-89.1733"
        }, {
            lat: "36.7411",
            lon: "-89.1925"
        }, {
            lat: "36.6265",
            lon: "-89.2007"
        }, {
            lat: "36.5449",
            lon: "-89.2529"
        }, {
            lat: "36.6232",
            lon: "-89.3518"
        }, {
            lat: "36.4986",
            lon: "-89.5345"
        }]
    }, {
        name: "Louisiana",
        points: [{
            lat: "33.0225",
            lon: "-94.0430"
        }, {
            lat: "33.0179",
            lon: "-93.0048"
        }, {
            lat: "33.0087",
            lon: "-91.1646"
        }, {
            lat: "32.9269",
            lon: "-91.2209"
        }, {
            lat: "32.8773",
            lon: "-91.1220"
        }, {
            lat: "32.8358",
            lon: "-91.1481"
        }, {
            lat: "32.7642",
            lon: "-91.1412"
        }, {
            lat: "32.6382",
            lon: "-91.1536"
        }, {
            lat: "32.5804",
            lon: "-91.1069"
        }, {
            lat: "32.6093",
            lon: "-91.0080"
        }, {
            lat: "32.4588",
            lon: "-91.0904"
        }, {
            lat: "32.4379",
            lon: "-91.0355"
        }, {
            lat: "32.3742",
            lon: "-91.0286"
        }, {
            lat: "32.3150",
            lon: "-90.9064"
        }, {
            lat: "32.2616",
            lon: "-90.9723"
        }, {
            lat: "32.1942",
            lon: "-91.0464"
        }, {
            lat: "32.1198",
            lon: "-91.0739"
        }, {
            lat: "32.0593",
            lon: "-91.0464"
        }, {
            lat: "31.9918",
            lon: "-91.1014"
        }, {
            lat: "31.9498",
            lon: "-91.1865"
        }, {
            lat: "31.8262",
            lon: "-91.3101"
        }, {
            lat: "31.7947",
            lon: "-91.3527"
        }, {
            lat: "31.6230",
            lon: "-91.3925"
        }, {
            lat: "31.6218",
            lon: "-91.5134"
        }, {
            lat: "31.5668",
            lon: "-91.4310"
        }, {
            lat: "31.5130",
            lon: "-91.5161"
        }, {
            lat: "31.3701",
            lon: "-91.5244"
        }, {
            lat: "31.2598",
            lon: "-91.5477"
        }, {
            lat: "31.2692",
            lon: "-91.6425"
        }, {
            lat: "31.2328",
            lon: "-91.6603"
        }, {
            lat: "31.1917",
            lon: "-91.5848"
        }, {
            lat: "31.1047",
            lon: "-91.6287"
        }, {
            lat: "31.0318",
            lon: "-91.5614"
        }, {
            lat: "30.9988",
            lon: "-91.6397"
        }, {
            lat: "31.0012",
            lon: "-89.7336"
        }, {
            lat: "30.6686",
            lon: "-89.8517"
        }, {
            lat: "30.5386",
            lon: "-89.7858"
        }, {
            lat: "30.3148",
            lon: "-89.6347"
        }, {
            lat: "30.1807",
            lon: "-89.5688"
        }, {
            lat: "30.1582",
            lon: "-89.4960"
        }, {
            lat: "30.2140",
            lon: "-89.1843"
        }, {
            lat: "30.1463",
            lon: "-89.0373"
        }, {
            lat: "30.0905",
            lon: "-88.8354"
        }, {
            lat: "29.8383",
            lon: "-88.7421"
        }, {
            lat: "29.5758",
            lon: "-88.8712"
        }, {
            lat: "29.1833",
            lon: "-88.9371"
        }, {
            lat: "28.9649",
            lon: "-89.0359"
        }, {
            lat: "28.8832",
            lon: "-89.2282"
        }, {
            lat: "28.9048",
            lon: "-89.4754"
        }, {
            lat: "29.1210",
            lon: "-89.7418"
        }, {
            lat: "28.9529",
            lon: "-90.1126"
        }, {
            lat: "28.9120",
            lon: "-90.6619"
        }, {
            lat: "28.9553",
            lon: "-91.0355"
        }, {
            lat: "29.1210",
            lon: "-91.3211"
        }, {
            lat: "29.2864",
            lon: "-91.9061"
        }, {
            lat: "29.4360",
            lon: "-92.7452"
        }, {
            lat: "29.6009",
            lon: "-93.8177"
        }, {
            lat: "29.6749",
            lon: "-93.8631"
        }, {
            lat: "29.7370",
            lon: "-93.8933"
        }, {
            lat: "29.7930",
            lon: "-93.9304"
        }, {
            lat: "29.8216",
            lon: "-93.9276"
        }, {
            lat: "29.8883",
            lon: "-93.8370"
        }, {
            lat: "29.9811",
            lon: "-93.7985"
        }, {
            lat: "30.0144",
            lon: "-93.7601"
        }, {
            lat: "30.0691",
            lon: "-93.7106"
        }, {
            lat: "30.0929",
            lon: "-93.7354"
        }, {
            lat: "30.1166",
            lon: "-93.6996"
        }, {
            lat: "30.1997",
            lon: "-93.7271"
        }, {
            lat: "30.2899",
            lon: "-93.7106"
        }, {
            lat: "30.3350",
            lon: "-93.7656"
        }, {
            lat: "30.3871",
            lon: "-93.7601"
        }, {
            lat: "30.4416",
            lon: "-93.6914"
        }, {
            lat: "30.5102",
            lon: "-93.7106"
        }, {
            lat: "30.5433",
            lon: "-93.7463"
        }, {
            lat: "30.5954",
            lon: "-93.7106"
        }, {
            lat: "30.5906",
            lon: "-93.6914"
        }, {
            lat: "30.6545",
            lon: "-93.6859"
        }, {
            lat: "30.6781",
            lon: "-93.6365"
        }, {
            lat: "30.7513",
            lon: "-93.6200"
        }, {
            lat: "30.7890",
            lon: "-93.5925"
        }, {
            lat: "30.8150",
            lon: "-93.5513"
        }, {
            lat: "30.8645",
            lon: "-93.5623"
        }, {
            lat: "30.8881",
            lon: "-93.5788"
        }, {
            lat: "30.9187",
            lon: "-93.5541"
        }, {
            lat: "30.9423",
            lon: "-93.5294"
        }, {
            lat: "31.0082",
            lon: "-93.5760"
        }, {
            lat: "31.0318",
            lon: "-93.5101"
        }, {
            lat: "31.0906",
            lon: "-93.5596"
        }, {
            lat: "31.1211",
            lon: "-93.5321"
        }, {
            lat: "31.1799",
            lon: "-93.5349"
        }, {
            lat: "31.1658",
            lon: "-93.5953"
        }, {
            lat: "31.2292",
            lon: "-93.6282"
        }, {
            lat: "31.2668",
            lon: "-93.6118"
        }, {
            lat: "31.3044",
            lon: "-93.6859"
        }, {
            lat: "31.3888",
            lon: "-93.6694"
        }, {
            lat: "31.4240",
            lon: "-93.7051"
        }, {
            lat: "31.4427",
            lon: "-93.6859"
        }, {
            lat: "31.4755",
            lon: "-93.7573"
        }, {
            lat: "31.5083",
            lon: "-93.7189"
        }, {
            lat: "31.5411",
            lon: "-93.8040"
        }, {
            lat: "31.6113",
            lon: "-93.8425"
        }, {
            lat: "31.6581",
            lon: "-93.8205"
        }, {
            lat: "31.7071",
            lon: "-93.7985"
        }, {
            lat: "31.8029",
            lon: "-93.8480"
        }, {
            lat: "31.8892",
            lon: "-93.9029"
        }, {
            lat: "31.9149",
            lon: "-93.9606"
        }, {
            lat: "32.0081",
            lon: "-94.0430"
        }, {
            lat: "32.7041",
            lon: "-94.0430"
        }, {
            lat: "33.0225",
            lon: "-94.0430"
        }]
    }, {
        name: "Massachusetts",
        points: [{
            lat: "42.0003",
            lon: "-72.7789"
        }, {
            lat: "42.0330",
            lon: "-72.7405"
        }, {
            lat: "42.0330",
            lon: "-72.3779"
        }, {
            lat: "42.0228",
            lon: "-71.7984"
        }, {
            lat: "42.0085",
            lon: "-71.8011"
        }, {
            lat: "42.0197",
            lon: "-71.3850"
        }, {
            lat: "41.8961",
            lon: "-71.3837"
        }, {
            lat: "41.8982",
            lon: "-71.3411"
        }, {
            lat: "41.8358",
            lon: "-71.3370"
        }, {
            lat: "41.8245",
            lon: "-71.3493"
        }, {
            lat: "41.7816",
            lon: "-71.3342"
        }, {
            lat: "41.7529",
            lon: "-71.2628"
        }, {
            lat: "41.6719",
            lon: "-71.1914"
        }, {
            lat: "41.6616",
            lon: "-71.1351"
        }, {
            lat: "41.6124",
            lon: "-71.1433"
        }, {
            lat: "41.5939",
            lon: "-71.1310"
        }, {
            lat: "41.4973",
            lon: "-71.1214"
        }, {
            lat: "41.3149",
            lon: "-71.0266"
        }, {
            lat: "41.1590",
            lon: "-70.8316"
        }, {
            lat: "41.1662",
            lon: "-69.9225"
        }, {
            lat: "41.3201",
            lon: "-69.7948"
        }, {
            lat: "41.8133",
            lon: "-69.7398"
        }, {
            lat: "42.1939",
            lon: "-70.0337"
        }, {
            lat: "42.2173",
            lon: "-70.5144"
        }, {
            lat: "42.4133",
            lon: "-70.6984"
        }, {
            lat: "42.6420",
            lon: "-70.3647"
        }, {
            lat: "42.8286",
            lon: "-70.4759"
        }, {
            lat: "42.8760",
            lon: "-70.6133"
        }, {
            lat: "42.8619",
            lon: "-70.8440"
        }, {
            lat: "42.8890",
            lon: "-70.9154"
        }, {
            lat: "42.8075",
            lon: "-71.0651"
        }, {
            lat: "42.8226",
            lon: "-71.1337"
        }, {
            lat: "42.7873",
            lon: "-71.1859"
        }, {
            lat: "42.7369",
            lon: "-71.1832"
        }, {
            lat: "42.7470",
            lon: "-71.2189"
        }, {
            lat: "42.7400",
            lon: "-71.2560"
        }, {
            lat: "42.6986",
            lon: "-71.2985"
        }, {
            lat: "42.7127",
            lon: "-71.9151"
        }, {
            lat: "42.7309",
            lon: "-72.5441"
        }, {
            lat: "42.7450",
            lon: "-73.2541"
        }, {
            lat: "42.7460",
            lon: "-73.2664"
        }, {
            lat: "42.5460",
            lon: "-73.3406"
        }, {
            lat: "42.2671",
            lon: "-73.4436"
        }, {
            lat: "42.1349",
            lon: "-73.4917"
        }, {
            lat: "42.0880",
            lon: "-73.5081"
        }, {
            lat: "42.0483",
            lon: "-73.4985"
        }, {
            lat: "42.0452",
            lon: "-73.1841"
        }, {
            lat: "42.0371",
            lon: "-72.8146"
        }, {
            lat: "41.9962",
            lon: "-72.8160"
        }, {
            lat: "42.0024",
            lon: "-72.7803"
        }]
    }, {
        name: "Maryland",
        points: [{
            lat: "39.7220",
            lon: "-79.4778"
        }, {
            lat: "39.7220",
            lon: "-78.3600"
        }, {
            lat: "39.7220",
            lon: "-75.7878"
        }, {
            lat: "39.5655",
            lon: "-75.7809"
        }, {
            lat: "39.3152",
            lon: "-75.7617"
        }, {
            lat: "38.9498",
            lon: "-75.7329"
        }, {
            lat: "38.4611",
            lon: "-75.6944"
        }, {
            lat: "38.4482",
            lon: "-74.8581"
        }, {
            lat: "38.0200",
            lon: "-74.9721"
        }, {
            lat: "38.0275",
            lon: "-75.2316"
        }, {
            lat: "37.9962",
            lon: "-75.6079"
        }, {
            lat: "37.9951",
            lon: "-75.6230"
        }, {
            lat: "37.9464",
            lon: "-75.6436"
        }, {
            lat: "37.9529",
            lon: "-75.7288"
        }, {
            lat: "37.9117",
            lon: "-75.8084"
        }, {
            lat: "37.9095",
            lon: "-75.9512"
        }, {
            lat: "37.9464",
            lon: "-75.9430"
        }, {
            lat: "37.9529",
            lon: "-76.0584"
        }, {
            lat: "37.8889",
            lon: "-76.2396"
        }, {
            lat: "37.9474",
            lon: "-76.3454"
        }, {
            lat: "37.9669",
            lon: "-76.4154"
        }, {
            lat: "38.0146",
            lon: "-76.4703"
        }, {
            lat: "38.0275",
            lon: "-76.5170"
        }, {
            lat: "38.0751",
            lon: "-76.5363"
        }, {
            lat: "38.1464",
            lon: "-76.6063"
        }, {
            lat: "38.1616",
            lon: "-76.6928"
        }, {
            lat: "38.1670",
            lon: "-76.7601"
        }, {
            lat: "38.1637",
            lon: "-76.8494"
        }, {
            lat: "38.2080",
            lon: "-76.9482"
        }, {
            lat: "38.2748",
            lon: "-76.9908"
        }, {
            lat: "38.3093",
            lon: "-77.0306"
        }, {
            lat: "38.3761",
            lon: "-77.0114"
        }, {
            lat: "38.4009",
            lon: "-77.0430"
        }, {
            lat: "38.3697",
            lon: "-77.0897"
        }, {
            lat: "38.3697",
            lon: "-77.1432"
        }, {
            lat: "38.3320",
            lon: "-77.2627"
        }, {
            lat: "38.4525",
            lon: "-77.3135"
        }, {
            lat: "38.5514",
            lon: "-77.2737"
        }, {
            lat: "38.5954",
            lon: "-77.2490"
        }, {
            lat: "38.6373",
            lon: "-77.1281"
        }, {
            lat: "38.6737",
            lon: "-77.1378"
        }, {
            lat: "38.7112",
            lon: "-77.0760"
        }, {
            lat: "38.7187",
            lon: "-77.0361"
        }, {
            lat: "38.7766",
            lon: "-77.0416"
        }, {
            lat: "38.8451",
            lon: "-77.0320"
        }, {
            lat: "38.9025",
            lon: "-77.0708"
        }, {
            lat: "38.9570",
            lon: "-77.1395"
        }, {
            lat: "38.9773",
            lon: "-77.2335"
        }, {
            lat: "39.0240",
            lon: "-77.2462"
        }, {
            lat: "39.0634",
            lon: "-77.3431"
        }, {
            lat: "39.0717",
            lon: "-77.4351"
        }, {
            lat: "39.0792",
            lon: "-77.4636"
        }, {
            lat: "39.1218",
            lon: "-77.5202"
        }, {
            lat: "39.1804",
            lon: "-77.5092"
        }, {
            lat: "39.2269",
            lon: "-77.4577"
        }, {
            lat: "39.3051",
            lon: "-77.5666"
        }, {
            lat: "39.3067",
            lon: "-77.6321"
        }, {
            lat: "39.3202",
            lon: "-77.7159"
        }, {
            lat: "39.3383",
            lon: "-77.7626"
        }, {
            lat: "39.3810",
            lon: "-77.7544"
        }, {
            lat: "39.4288",
            lon: "-77.7602"
        }, {
            lat: "39.4367",
            lon: "-77.8038"
        }, {
            lat: "39.4606",
            lon: "-77.7997"
        }, {
            lat: "39.5019",
            lon: "-77.7859"
        }, {
            lat: "39.5062",
            lon: "-77.8436"
        }, {
            lat: "39.5210",
            lon: "-77.8217"
        }, {
            lat: "39.5337",
            lon: "-77.8354"
        }, {
            lat: "39.5231",
            lon: "-77.8656"
        }, {
            lat: "39.5591",
            lon: "-77.8848"
        }, {
            lat: "39.6015",
            lon: "-77.8821"
        }, {
            lat: "39.6078",
            lon: "-77.9974"
        }, {
            lat: "39.6247",
            lon: "-78.0222"
        }, {
            lat: "39.6924",
            lon: "-78.1430"
        }, {
            lat: "39.6945",
            lon: "-78.1924"
        }, {
            lat: "39.6839",
            lon: "-78.2062"
        }, {
            lat: "39.6839",
            lon: "-78.2419"
        }, {
            lat: "39.6586",
            lon: "-78.2281"
        }, {
            lat: "39.6226",
            lon: "-78.2776"
        }, {
            lat: "39.6438",
            lon: "-78.3517"
        }, {
            lat: "39.6120",
            lon: "-78.3765"
        }, {
            lat: "39.6036",
            lon: "-78.4067"
        }, {
            lat: "39.5824",
            lon: "-78.4177"
        }, {
            lat: "39.5750",
            lon: "-78.4245"
        }, {
            lat: "39.5464",
            lon: "-78.4232"
        }, {
            lat: "39.5146",
            lon: "-78.4698"
        }, {
            lat: "39.5189",
            lon: "-78.5687"
        }, {
            lat: "39.5337",
            lon: "-78.6676"
        }, {
            lat: "39.5888",
            lon: "-78.7390"
        }, {
            lat: "39.6015",
            lon: "-78.7720"
        }, {
            lat: "39.6184",
            lon: "-78.7363"
        }, {
            lat: "39.6438",
            lon: "-78.7775"
        }, {
            lat: "39.6036",
            lon: "-78.7912"
        }, {
            lat: "39.6036",
            lon: "-78.8187"
        }, {
            lat: "39.5549",
            lon: "-78.8571"
        }, {
            lat: "39.4913",
            lon: "-78.9203"
        }, {
            lat: "39.4426",
            lon: "-78.9725"
        }, {
            lat: "39.4834",
            lon: "-79.0542"
        }, {
            lat: "39.4738",
            lon: "-79.0604"
        }, {
            lat: "39.4553",
            lon: "-79.1043"
        }, {
            lat: "39.3853",
            lon: "-79.1936"
        }, {
            lat: "39.3449",
            lon: "-79.2705"
        }, {
            lat: "39.3014",
            lon: "-79.3282"
        }, {
            lat: "39.2535",
            lon: "-79.4044"
        }, {
            lat: "39.2073",
            lon: "-79.4696"
        }, {
            lat: "39.2051",
            lon: "-79.4861"
        }, {
            lat: "39.2546",
            lon: "-79.4861"
        }, {
            lat: "39.3444",
            lon: "-79.4854"
        }, {
            lat: "39.3454",
            lon: "-79.4840"
        }, {
            lat: "39.5316",
            lon: "-79.4833"
        }, {
            lat: "39.7214",
            lon: "-79.4772"
        }]
    }, {
        name: "Maine",
        points: [{
            lat: "45.3425",
            lon: "-71.0129"
        }, {
            lat: "45.3328",
            lon: "-70.9525"
        }, {
            lat: "45.2294",
            lon: "-70.8618"
        }, {
            lat: "45.3917",
            lon: "-70.8247"
        }, {
            lat: "45.4274",
            lon: "-70.7808"
        }, {
            lat: "45.3830",
            lon: "-70.6380"
        }, {
            lat: "45.5092",
            lon: "-70.7190"
        }, {
            lat: "45.6544",
            lon: "-70.5721"
        }, {
            lat: "45.7292",
            lon: "-70.3894"
        }, {
            lat: "45.7924",
            lon: "-70.4169"
        }, {
            lat: "45.9368",
            lon: "-70.2493"
        }, {
            lat: "45.9597",
            lon: "-70.3098"
        }, {
            lat: "46.0923",
            lon: "-70.2946"
        }, {
            lat: "46.0989",
            lon: "-70.2589"
        }, {
            lat: "46.1342",
            lon: "-70.2466"
        }, {
            lat: "46.1903",
            lon: "-70.2905"
        }, {
            lat: "46.2710",
            lon: "-70.2466"
        }, {
            lat: "46.3270",
            lon: "-70.2040"
        }, {
            lat: "46.4151",
            lon: "-70.0571"
        }, {
            lat: "46.6956",
            lon: "-69.9994"
        }, {
            lat: "47.4550",
            lon: "-69.2303"
        }, {
            lat: "47.4132",
            lon: "-69.0381"
        }, {
            lat: "47.2578",
            lon: "-69.0504"
        }, {
            lat: "47.1748",
            lon: "-68.8843"
        }, {
            lat: "47.2643",
            lon: "-68.6206"
        }, {
            lat: "47.3546",
            lon: "-68.3350"
        }, {
            lat: "47.3165",
            lon: "-68.1564"
        }, {
            lat: "47.1038",
            lon: "-67.8804"
        }, {
            lat: "47.0664",
            lon: "-67.7898"
        }, {
            lat: "45.9359",
            lon: "-67.7802"
        }, {
            lat: "45.9177",
            lon: "-67.7527"
        }, {
            lat: "45.7599",
            lon: "-67.8090"
        }, {
            lat: "45.6208",
            lon: "-67.6524"
        }, {
            lat: "45.5987",
            lon: "-67.4533"
        }, {
            lat: "45.5044",
            lon: "-67.4176"
        }, {
            lat: "45.4823",
            lon: "-67.5014"
        }, {
            lat: "45.3714",
            lon: "-67.4231"
        }, {
            lat: "45.2768",
            lon: "-67.4863"
        }, {
            lat: "45.1297",
            lon: "-67.3434"
        }, {
            lat: "45.1830",
            lon: "-67.2487"
        }, {
            lat: "45.1230",
            lon: "-67.1223"
        }, {
            lat: "44.8315",
            lon: "-66.9672"
        }, {
            lat: "44.7409",
            lon: "-66.8628"
        }, {
            lat: "44.4945",
            lon: "-67.3105"
        }, {
            lat: "44.3268",
            lon: "-67.9051"
        }, {
            lat: "43.8702",
            lon: "-68.6673"
        }, {
            lat: "43.7274",
            lon: "-68.8431"
        }, {
            lat: "43.6639",
            lon: "-69.7137"
        }, {
            lat: "43.5625",
            lon: "-70.0818"
        }, {
            lat: "42.9182",
            lon: "-70.5569"
        }, {
            lat: "43.0649",
            lon: "-70.7108"
        }, {
            lat: "43.1391",
            lon: "-70.8302"
        }, {
            lat: "43.2292",
            lon: "-70.8179"
        }, {
            lat: "43.3631",
            lon: "-70.9799"
        }, {
            lat: "43.5675",
            lon: "-70.9717"
        }, {
            lat: "45.3029",
            lon: "-71.0829"
        }]
    }, {
        name: "Michigan",
        points: [{
            lat: "48.3033",
            lon: "-88.3713"
        }, {
            lat: "48.0101",
            lon: "-87.6050"
        }, {
            lat: "46.8902",
            lon: "-84.8584"
        }, {
            lat: "46.6362",
            lon: "-84.7650"
        }, {
            lat: "46.4606",
            lon: "-84.5563"
        }, {
            lat: "46.4525",
            lon: "-84.4780"
        }, {
            lat: "46.4894",
            lon: "-84.4450"
        }, {
            lat: "46.5008",
            lon: "-84.4203"
        }, {
            lat: "46.4989",
            lon: "-84.3956"
        }, {
            lat: "46.5093",
            lon: "-84.3750"
        }, {
            lat: "46.5069",
            lon: "-84.3386"
        }, {
            lat: "46.4927",
            lon: "-84.2905"
        }, {
            lat: "46.4951",
            lon: "-84.2651"
        }, {
            lat: "46.5343",
            lon: "-84.2253"
        }, {
            lat: "46.5404",
            lon: "-84.1951"
        }, {
            lat: "46.5272",
            lon: "-84.1779"
        }, {
            lat: "46.5348",
            lon: "-84.1347"
        }, {
            lat: "46.5041",
            lon: "-84.1113"
        }, {
            lat: "46.4189",
            lon: "-84.1457"
        }, {
            lat: "46.3720",
            lon: "-84.1395"
        }, {
            lat: "46.3218",
            lon: "-84.1058"
        }, {
            lat: "46.3147",
            lon: "-84.1203"
        }, {
            lat: "46.2672",
            lon: "-84.1148"
        }, {
            lat: "46.2563",
            lon: "-84.0969"
        }, {
            lat: "46.2411",
            lon: "-84.1093"
        }, {
            lat: "46.2098",
            lon: "-84.0859"
        }, {
            lat: "46.1879",
            lon: "-84.0777"
        }, {
            lat: "46.1508",
            lon: "-84.0097"
        }, {
            lat: "46.1180",
            lon: "-84.0070"
        }, {
            lat: "46.1018",
            lon: "-83.9761"
        }, {
            lat: "46.0570",
            lon: "-83.9555"
        }, {
            lat: "46.0604",
            lon: "-83.9040"
        }, {
            lat: "46.1185",
            lon: "-83.8264"
        }, {
            lat: "46.1028",
            lon: "-83.7598"
        }, {
            lat: "46.1218",
            lon: "-83.6547"
        }, {
            lat: "46.1056",
            lon: "-83.5723"
        }, {
            lat: "45.9993",
            lon: "-83.4343"
        }, {
            lat: "45.8211",
            lon: "-83.5977"
        }, {
            lat: "45.3396",
            lon: "-82.5197"
        }, {
            lat: "43.5918",
            lon: "-82.1221"
        }, {
            lat: "43.0112",
            lon: "-82.4119"
        }, {
            lat: "42.9956",
            lon: "-82.4249"
        }, {
            lat: "42.9579",
            lon: "-82.4236"
        }, {
            lat: "42.9021",
            lon: "-82.4648"
        }, {
            lat: "42.8543",
            lon: "-82.4689"
        }, {
            lat: "42.8100",
            lon: "-82.4826"
        }, {
            lat: "42.7863",
            lon: "-82.4723"
        }, {
            lat: "42.7339",
            lon: "-82.4847"
        }, {
            lat: "42.6855",
            lon: "-82.5032"
        }, {
            lat: "42.6380",
            lon: "-82.5108"
        }, {
            lat: "42.6036",
            lon: "-82.5307"
        }, {
            lat: "42.5672",
            lon: "-82.5774"
        }, {
            lat: "42.5490",
            lon: "-82.5993"
        }, {
            lat: "42.5521",
            lon: "-82.6501"
        }, {
            lat: "42.5354",
            lon: "-82.6680"
        }, {
            lat: "42.4746",
            lon: "-82.7257"
        }, {
            lat: "42.4726",
            lon: "-82.7250"
        }, {
            lat: "42.3738",
            lon: "-82.8280"
        }, {
            lat: "42.3469",
            lon: "-82.9440"
        }, {
            lat: "42.3382",
            lon: "-82.9550"
        }, {
            lat: "42.3098",
            lon: "-83.0779"
        }, {
            lat: "42.2392",
            lon: "-83.1294"
        }, {
            lat: "42.1741",
            lon: "-83.1342"
        }, {
            lat: "42.1267",
            lon: "-83.1212"
        }, {
            lat: "42.0411",
            lon: "-83.1493"
        }, {
            lat: "41.9600",
            lon: "-83.1116"
        }, {
            lat: "41.7344",
            lon: "-83.4164"
        }, {
            lat: "41.7211",
            lon: "-83.8724"
        }, {
            lat: "41.7057",
            lon: "-84.3736"
        }, {
            lat: "41.6965",
            lon: "-84.8062"
        }, {
            lat: "41.7611",
            lon: "-84.8076"
        }, {
            lat: "41.7621",
            lon: "-87.2067"
        }, {
            lat: "42.4934",
            lon: "-87.0241"
        }, {
            lat: "43.3771",
            lon: "-87.1477"
        }, {
            lat: "43.7056",
            lon: "-87.1216"
        }, {
            lat: "43.9958",
            lon: "-87.0474"
        }, {
            lat: "44.1674",
            lon: "-86.9939"
        }, {
            lat: "44.4720",
            lon: "-86.8662"
        }, {
            lat: "44.8841",
            lon: "-86.6849"
        }, {
            lat: "45.0813",
            lon: "-86.5009"
        }, {
            lat: "45.2353",
            lon: "-86.2495"
        }, {
            lat: "45.4438",
            lon: "-86.7563"
        }, {
            lat: "45.4438",
            lon: "-87.0996"
        }, {
            lat: "45.3772",
            lon: "-87.1518"
        }, {
            lat: "45.3502",
            lon: "-87.1710"
        }, {
            lat: "45.2401",
            lon: "-87.3166"
        }, {
            lat: "45.2024",
            lon: "-87.4059"
        }, {
            lat: "45.0774",
            lon: "-87.4416"
        }, {
            lat: "45.0910",
            lon: "-87.5912"
        }, {
            lat: "45.1036",
            lon: "-87.6407"
        }, {
            lat: "45.2207",
            lon: "-87.6970"
        }, {
            lat: "45.3367",
            lon: "-87.6476"
        }, {
            lat: "45.3878",
            lon: "-87.6984"
        }, {
            lat: "45.3425",
            lon: "-87.8494"
        }, {
            lat: "45.5025",
            lon: "-87.7959"
        }, {
            lat: "45.6726",
            lon: "-87.7890"
        }, {
            lat: "45.7570",
            lon: "-87.9318"
        }, {
            lat: "45.7953",
            lon: "-87.9922"
        }, {
            lat: "45.8058",
            lon: "-88.1186"
        }, {
            lat: "45.8585",
            lon: "-88.0870"
        }, {
            lat: "45.9531",
            lon: "-88.1955"
        }, {
            lat: "45.9722",
            lon: "-88.3438"
        }, {
            lat: "45.9836",
            lon: "-88.3891"
        }, {
            lat: "46.0113",
            lon: "-88.5457"
        }, {
            lat: "45.9970",
            lon: "-88.7022"
        }, {
            lat: "46.0227",
            lon: "-88.8135"
        }, {
            lat: "46.0418",
            lon: "-88.8547"
        }, {
            lat: "46.1408",
            lon: "-89.0936"
        }, {
            lat: "46.3384",
            lon: "-90.1222"
        }, {
            lat: "46.5692",
            lon: "-90.4175"
        }, {
            lat: "46.9034",
            lon: "-90.2019"
        }, {
            lat: "47.2913",
            lon: "-89.9547"
        }, {
            lat: "48.0129",
            lon: "-89.4946"
        }, {
            lat: "47.9743",
            lon: "-89.3381"
        }, {
            lat: "48.2448",
            lon: "-88.6761"
        }, {
            lat: "48.3042",
            lon: "-88.3726"
        }]
    }, {
        name: "Minnesota",
        points: [{
            lat: "43.5008",
            lon: "-96.4517"
        }, {
            lat: "43.5017",
            lon: "-91.2195"
        }, {
            lat: "43.8226",
            lon: "-91.3101"
        }, {
            lat: "43.9651",
            lon: "-91.4914"
        }, {
            lat: "44.1113",
            lon: "-91.7084"
        }, {
            lat: "44.2806",
            lon: "-91.8951"
        }, {
            lat: "44.3710",
            lon: "-91.9556"
        }, {
            lat: "44.4357",
            lon: "-92.2083"
        }, {
            lat: "44.5513",
            lon: "-92.3360"
        }, {
            lat: "44.6501",
            lon: "-92.6367"
        }, {
            lat: "44.7877",
            lon: "-92.7658"
        }, {
            lat: "45.3135",
            lon: "-92.7081"
        }, {
            lat: "45.4505",
            lon: "-92.6532"
        }, {
            lat: "45.6083",
            lon: "-92.8482"
        }, {
            lat: "45.8307",
            lon: "-92.7356"
        }, {
            lat: "45.9760",
            lon: "-92.5159"
        }, {
            lat: "46.0151",
            lon: "-92.3566"
        }, {
            lat: "46.0789",
            lon: "-92.2934"
        }, {
            lat: "46.5957",
            lon: "-92.2879"
        }, {
            lat: "47.3072",
            lon: "-90.6564"
        }, {
            lat: "47.2885",
            lon: "-89.9615"
        }, {
            lat: "48.0120",
            lon: "-89.4919"
        }, {
            lat: "48.0193",
            lon: "-89.7583"
        }, {
            lat: "48.0285",
            lon: "-89.9931"
        }, {
            lat: "48.0827",
            lon: "-90.0261"
        }, {
            lat: "48.1074",
            lon: "-90.1758"
        }, {
            lat: "48.0955",
            lon: "-90.3502"
        }, {
            lat: "48.1074",
            lon: "-90.4834"
        }, {
            lat: "48.1175",
            lon: "-90.5644"
        }, {
            lat: "48.0928",
            lon: "-90.7471"
        }, {
            lat: "48.1588",
            lon: "-90.7759"
        }, {
            lat: "48.2402",
            lon: "-90.8405"
        }, {
            lat: "48.2174",
            lon: "-90.9792"
        }, {
            lat: "48.0726",
            lon: "-91.3252"
        }, {
            lat: "48.0505",
            lon: "-91.5738"
        }, {
            lat: "48.1166",
            lon: "-91.7070"
        }, {
            lat: "48.1963",
            lon: "-91.7166"
        }, {
            lat: "48.2494",
            lon: "-91.9844"
        }, {
            lat: "48.3188",
            lon: "-92.0078"
        }, {
            lat: "48.3544",
            lon: "-92.0531"
        }, {
            lat: "48.3599",
            lon: "-92.1561"
        }, {
            lat: "48.3307",
            lon: "-92.2975"
        }, {
            lat: "48.2475",
            lon: "-92.2742"
        }, {
            lat: "48.2228",
            lon: "-92.3717"
        }, {
            lat: "48.3854",
            lon: "-92.4609"
        }, {
            lat: "48.4474",
            lon: "-92.5104"
        }, {
            lat: "48.4611",
            lon: "-92.7122"
        }, {
            lat: "48.4984",
            lon: "-92.6340"
        }, {
            lat: "48.5403",
            lon: "-92.6395"
        }, {
            lat: "48.6393",
            lon: "-93.2066"
        }, {
            lat: "48.5884",
            lon: "-93.4648"
        }, {
            lat: "48.5439",
            lon: "-93.4621"
        }, {
            lat: "48.5166",
            lon: "-93.8013"
        }, {
            lat: "48.6284",
            lon: "-93.8356"
        }, {
            lat: "48.6547",
            lon: "-94.2531"
        }, {
            lat: "48.7046",
            lon: "-94.2792"
        }, {
            lat: "48.6982",
            lon: "-94.4467"
        }, {
            lat: "48.7861",
            lon: "-94.6925"
        }, {
            lat: "48.8756",
            lon: "-94.6788"
        }, {
            lat: "49.0955",
            lon: "-94.7488"
        }, {
            lat: "49.1889",
            lon: "-94.7955"
        }, {
            lat: "49.3189",
            lon: "-94.8175"
        }, {
            lat: "49.3815",
            lon: "-94.9631"
        }, {
            lat: "49.3538",
            lon: "-95.0400"
        }, {
            lat: "49.3681",
            lon: "-95.1196"
        }, {
            lat: "49.3877",
            lon: "-95.1553"
        }, {
            lat: "48.9991",
            lon: "-95.1553"
        }, {
            lat: "49.0000",
            lon: "-97.2304"
        }, {
            lat: "48.8647",
            lon: "-97.1851"
        }, {
            lat: "48.7806",
            lon: "-97.1576"
        }, {
            lat: "48.6683",
            lon: "-97.1040"
        }, {
            lat: "48.5539",
            lon: "-97.1645"
        }, {
            lat: "48.2832",
            lon: "-97.1411"
        }, {
            lat: "48.1578",
            lon: "-97.1397"
        }, {
            lat: "47.9633",
            lon: "-97.0587"
        }, {
            lat: "47.7098",
            lon: "-96.9434"
        }, {
            lat: "47.5821",
            lon: "-96.8582"
        }, {
            lat: "47.2345",
            lon: "-96.8335"
        }, {
            lat: "46.6702",
            lon: "-96.8005"
        }, {
            lat: "46.5135",
            lon: "-96.7126"
        }, {
            lat: "46.2786",
            lon: "-96.6028"
        }, {
            lat: "46.0189",
            lon: "-96.5767"
        }, {
            lat: "45.8173",
            lon: "-96.5891"
        }, {
            lat: "45.6169",
            lon: "-96.8486"
        }, {
            lat: "45.4601",
            lon: "-96.7456"
        }, {
            lat: "45.3676",
            lon: "-96.5918"
        }, {
            lat: "45.2961",
            lon: "-96.4558"
        }, {
            lat: "43.5008",
            lon: "-96.4531"
        }]
    }, {
        name: "Missouri",
        points: [{
            lat: "40.6181",
            lon: "-91.7468"
        }, {
            lat: "40.5597",
            lon: "-91.6809"
        }, {
            lat: "40.5472",
            lon: "-91.6260"
        }, {
            lat: "40.4658",
            lon: "-91.5463"
        }, {
            lat: "40.3675",
            lon: "-91.4337"
        }, {
            lat: "40.1663",
            lon: "-91.5161"
        }, {
            lat: "39.9866",
            lon: "-91.4900"
        }, {
            lat: "39.8634",
            lon: "-91.4447"
        }, {
            lat: "39.7283",
            lon: "-91.3623"
        }, {
            lat: "39.6861",
            lon: "-91.3074"
        }, {
            lat: "39.5464",
            lon: "-91.1096"
        }, {
            lat: "39.4022",
            lon: "-90.9558"
        }, {
            lat: "39.2450",
            lon: "-90.7306"
        }, {
            lat: "38.9893",
            lon: "-90.6812"
        }, {
            lat: "38.8697",
            lon: "-90.5878"
        }, {
            lat: "38.9722",
            lon: "-90.4504"
        }, {
            lat: "38.8868",
            lon: "-90.1813"
        }, {
            lat: "38.8269",
            lon: "-90.1154"
        }, {
            lat: "38.7155",
            lon: "-90.1978"
        }, {
            lat: "38.4149",
            lon: "-90.3186"
        }, {
            lat: "38.2597",
            lon: "-90.3790"
        }, {
            lat: "37.9572",
            lon: "-89.9341"
        }, {
            lat: "37.6925",
            lon: "-89.5331"
        }, {
            lat: "37.4007",
            lon: "-89.4287"
        }, {
            lat: "37.2784",
            lon: "-89.5386"
        }, {
            lat: "37.1734",
            lon: "-89.4452"
        }, {
            lat: "37.0859",
            lon: "-89.3793"
        }, {
            lat: "36.9938",
            lon: "-89.2859"
        }, {
            lat: "37.0311",
            lon: "-89.1829"
        }, {
            lat: "36.9839",
            lon: "-89.1403"
        }, {
            lat: "36.9466",
            lon: "-89.1005"
        }, {
            lat: "36.7884",
            lon: "-89.1788"
        }, {
            lat: "36.6288",
            lon: "-89.2035"
        }, {
            lat: "36.5449",
            lon: "-89.2516"
        }, {
            lat: "36.6188",
            lon: "-89.3532"
        }, {
            lat: "36.5538",
            lon: "-89.4397"
        }, {
            lat: "36.4942",
            lon: "-89.5358"
        }, {
            lat: "36.3594",
            lon: "-89.5331"
        }, {
            lat: "36.2509",
            lon: "-89.5345"
        }, {
            lat: "36.0891",
            lon: "-89.6100"
        }, {
            lat: "36.0002",
            lon: "-89.7116"
        }, {
            lat: "35.9958",
            lon: "-90.3735"
        }, {
            lat: "36.1223",
            lon: "-90.2747"
        }, {
            lat: "36.2886",
            lon: "-90.0934"
        }, {
            lat: "36.3903",
            lon: "-90.0769"
        }, {
            lat: "36.4213",
            lon: "-90.1538"
        }, {
            lat: "36.5008",
            lon: "-90.1538"
        }, {
            lat: "36.4975",
            lon: "-94.6184"
        }, {
            lat: "38.9722",
            lon: "-94.6143"
        }, {
            lat: "39.1982",
            lon: "-94.6143"
        }, {
            lat: "39.1684",
            lon: "-94.7241"
        }, {
            lat: "39.2790",
            lon: "-94.8834"
        }, {
            lat: "39.5612",
            lon: "-95.1086"
        }, {
            lat: "39.7283",
            lon: "-94.8834"
        }, {
            lat: "39.8296",
            lon: "-94.8944"
        }, {
            lat: "39.8845",
            lon: "-94.9384"
        }, {
            lat: "39.8971",
            lon: "-95.0153"
        }, {
            lat: "39.8718",
            lon: "-95.0922"
        }, {
            lat: "40.0066",
            lon: "-95.3119"
        }, {
            lat: "40.2460",
            lon: "-95.4794"
        }, {
            lat: "40.3256",
            lon: "-95.6635"
        }, {
            lat: "40.5879",
            lon: "-95.7527"
        }, {
            lat: "40.5795",
            lon: "-94.3135"
        }, {
            lat: "40.5962",
            lon: "-92.5818"
        }, {
            lat: "40.6140",
            lon: "-91.7358"
        }]
    }, {
        name: "Mississippi",
        points: [{
            lat: "35.0041",
            lon: "-90.3049"
        }, {
            lat: "35.0075",
            lon: "-88.1955"
        }, {
            lat: "34.8882",
            lon: "-88.0994"
        }, {
            lat: "34.7044",
            lon: "-88.1241"
        }, {
            lat: "33.6661",
            lon: "-88.2573"
        }, {
            lat: "31.8939",
            lon: "-88.4756"
        }, {
            lat: "30.8657",
            lon: "-88.4180"
        }, {
            lat: "30.1594",
            lon: "-88.3850"
        }, {
            lat: "30.0905",
            lon: "-88.8327"
        }, {
            lat: "30.2104",
            lon: "-89.1870"
        }, {
            lat: "30.1570",
            lon: "-89.4919"
        }, {
            lat: "30.1796",
            lon: "-89.5757"
        }, {
            lat: "30.3326",
            lon: "-89.6457"
        }, {
            lat: "30.5232",
            lon: "-89.7748"
        }, {
            lat: "30.6663",
            lon: "-89.8531"
        }, {
            lat: "30.9988",
            lon: "-89.7377"
        }, {
            lat: "30.9988",
            lon: "-91.6287"
        }, {
            lat: "31.0341",
            lon: "-91.5601"
        }, {
            lat: "31.1106",
            lon: "-91.6273"
        }, {
            lat: "31.1658",
            lon: "-91.5916"
        }, {
            lat: "31.2304",
            lon: "-91.6589"
        }, {
            lat: "31.2656",
            lon: "-91.6452"
        }, {
            lat: "31.2609",
            lon: "-91.5436"
        }, {
            lat: "31.3724",
            lon: "-91.5271"
        }, {
            lat: "31.4099",
            lon: "-91.5161"
        }, {
            lat: "31.5071",
            lon: "-91.5120"
        }, {
            lat: "31.5692",
            lon: "-91.4502"
        }, {
            lat: "31.6230",
            lon: "-91.5147"
        }, {
            lat: "31.6253",
            lon: "-91.3966"
        }, {
            lat: "31.7936",
            lon: "-91.3513"
        }, {
            lat: "31.8589",
            lon: "-91.2744"
        }, {
            lat: "31.9755",
            lon: "-91.1673"
        }, {
            lat: "32.0267",
            lon: "-91.0767"
        }, {
            lat: "32.1198",
            lon: "-91.0767"
        }, {
            lat: "32.1942",
            lon: "-91.0437"
        }, {
            lat: "32.2221",
            lon: "-91.0107"
        }, {
            lat: "32.3150",
            lon: "-90.9132"
        }, {
            lat: "32.3742",
            lon: "-91.0313"
        }, {
            lat: "32.4263",
            lon: "-91.0217"
        }, {
            lat: "32.4634",
            lon: "-91.0986"
        }, {
            lat: "32.6070",
            lon: "-91.0080"
        }, {
            lat: "32.5746",
            lon: "-91.1096"
        }, {
            lat: "32.6394",
            lon: "-91.1536"
        }, {
            lat: "32.7226",
            lon: "-91.1426"
        }, {
            lat: "32.7873",
            lon: "-91.1426"
        }, {
            lat: "32.8519",
            lon: "-91.1536"
        }, {
            lat: "32.8796",
            lon: "-91.1206"
        }, {
            lat: "32.9257",
            lon: "-91.2195"
        }, {
            lat: "32.9995",
            lon: "-91.2085"
        }, {
            lat: "33.0444",
            lon: "-91.2016"
        }, {
            lat: "33.1192",
            lon: "-91.2016"
        }, {
            lat: "33.1835",
            lon: "-91.1041"
        }, {
            lat: "33.3397",
            lon: "-91.1536"
        }, {
            lat: "33.4223",
            lon: "-91.1646"
        }, {
            lat: "33.4337",
            lon: "-91.2291"
        }, {
            lat: "33.5414",
            lon: "-91.2524"
        }, {
            lat: "33.6135",
            lon: "-91.1838"
        }, {
            lat: "33.6878",
            lon: "-91.2524"
        }, {
            lat: "33.6969",
            lon: "-91.1261"
        }, {
            lat: "33.7883",
            lon: "-91.1426"
        }, {
            lat: "33.7700",
            lon: "-91.0437"
        }, {
            lat: "33.8339",
            lon: "-91.0327"
        }, {
            lat: "33.8795",
            lon: "-91.0657"
        }, {
            lat: "33.9434",
            lon: "-91.0876"
        }, {
            lat: "33.9889",
            lon: "-90.9998"
        }, {
            lat: "34.0253",
            lon: "-90.9229"
        }, {
            lat: "34.0891",
            lon: "-90.9009"
        }, {
            lat: "34.1345",
            lon: "-90.9668"
        }, {
            lat: "34.1709",
            lon: "-90.9119"
        }, {
            lat: "34.1345",
            lon: "-90.8501"
        }, {
            lat: "34.2277",
            lon: "-90.9338"
        }, {
            lat: "34.2833",
            lon: "-90.8267"
        }, {
            lat: "34.3434",
            lon: "-90.6921"
        }, {
            lat: "34.3774",
            lon: "-90.6509"
        }, {
            lat: "34.3978",
            lon: "-90.6152"
        }, {
            lat: "34.4432",
            lon: "-90.5589"
        }, {
            lat: "34.5179",
            lon: "-90.5740"
        }, {
            lat: "34.5880",
            lon: "-90.5823"
        }, {
            lat: "34.7506",
            lon: "-90.5356"
        }, {
            lat: "34.7913",
            lon: "-90.5136"
        }, {
            lat: "34.8780",
            lon: "-90.4532"
        }, {
            lat: "34.8476",
            lon: "-90.3543"
        }, {
            lat: "34.8702",
            lon: "-90.2911"
        }, {
            lat: "35.0041",
            lon: "-90.3062"
        }]
    }, {
        name: "Montana",
        points: [{
            lat: "44.4750",
            lon: "-111.0512"
        }, {
            lat: "44.7311",
            lon: "-111.3684"
        }, {
            lat: "44.6198",
            lon: "-111.5071"
        }, {
            lat: "44.5386",
            lon: "-111.4673"
        }, {
            lat: "44.5151",
            lon: "-111.8285"
        }, {
            lat: "44.5592",
            lon: "-111.8848"
        }, {
            lat: "44.5229",
            lon: "-112.1127"
        }, {
            lat: "44.5367",
            lon: "-112.3270"
        }, {
            lat: "44.4475",
            lon: "-112.3901"
        }, {
            lat: "44.4896",
            lon: "-112.7293"
        }, {
            lat: "44.4181",
            lon: "-112.8296"
        }, {
            lat: "44.3563",
            lon: "-112.8529"
        }, {
            lat: "44.4857",
            lon: "-113.0205"
        }, {
            lat: "44.5905",
            lon: "-113.0713"
        }, {
            lat: "44.7389",
            lon: "-113.1152"
        }, {
            lat: "44.8091",
            lon: "-113.2471"
        }, {
            lat: "44.7887",
            lon: "-113.3459"
        }, {
            lat: "44.9386",
            lon: "-113.4970"
        }, {
            lat: "45.0269",
            lon: "-113.4229"
        }, {
            lat: "45.2749",
            lon: "-113.7085"
        }, {
            lat: "45.4447",
            lon: "-113.7964"
        }, {
            lat: "45.6140",
            lon: "-113.8403"
        }, {
            lat: "45.6908",
            lon: "-113.9722"
        }, {
            lat: "45.5631",
            lon: "-114.1315"
        }, {
            lat: "45.5525",
            lon: "-114.2358"
        }, {
            lat: "45.4592",
            lon: "-114.3347"
        }, {
            lat: "45.5439",
            lon: "-114.4652"
        }, {
            lat: "45.5583",
            lon: "-114.5668"
        }, {
            lat: "45.6755",
            lon: "-114.5215"
        }, {
            lat: "45.7733",
            lon: "-114.5641"
        }, {
            lat: "45.8613",
            lon: "-114.4391"
        }, {
            lat: "45.9989",
            lon: "-114.4817"
        }, {
            lat: "46.1237",
            lon: "-114.5132"
        }, {
            lat: "46.2577",
            lon: "-114.4652"
        }, {
            lat: "46.3441",
            lon: "-114.4171"
        }, {
            lat: "46.4530",
            lon: "-114.3896"
        }, {
            lat: "46.5069",
            lon: "-114.3484"
        }, {
            lat: "46.6504",
            lon: "-114.3279"
        }, {
            lat: "46.6334",
            lon: "-114.4652"
        }, {
            lat: "46.6362",
            lon: "-114.5929"
        }, {
            lat: "46.7003",
            lon: "-114.7659"
        }, {
            lat: "46.8423",
            lon: "-114.9307"
        }, {
            lat: "47.0402",
            lon: "-115.1147"
        }, {
            lat: "47.1888",
            lon: "-115.2933"
        }, {
            lat: "47.2569",
            lon: "-115.3290"
        }, {
            lat: "47.3025",
            lon: "-115.5267"
        }, {
            lat: "47.4253",
            lon: "-115.7547"
        }, {
            lat: "47.5487",
            lon: "-115.7533"
        }, {
            lat: "47.5793",
            lon: "-115.6956"
        }, {
            lat: "47.9771",
            lon: "-116.0458"
        }, {
            lat: "48.9991",
            lon: "-116.0458"
        }, {
            lat: "48.9991",
            lon: "-104.0501"
        }, {
            lat: "45.0269",
            lon: "-104.0186"
        }, {
            lat: "45.0153",
            lon: "-104.0186"
        }, {
            lat: "44.9978",
            lon: "-104.0199"
        }, {
            lat: "44.9959",
            lon: "-111.0498"
        }, {
            lat: "44.4750",
            lon: "-111.0512"
        }]
    }, {
        name: "North Carolina",
        points: [{
            lat: "33.7963",
            lon: "-78.4850"
        }, {
            lat: "34.8037",
            lon: "-79.6742"
        }, {
            lat: "34.8206",
            lon: "-80.8003"
        }, {
            lat: "34.9377",
            lon: "-80.7880"
        }, {
            lat: "35.1019",
            lon: "-80.9377"
        }, {
            lat: "35.0356",
            lon: "-81.0379"
        }, {
            lat: "35.1457",
            lon: "-81.0324"
        }, {
            lat: "35.1660",
            lon: "-81.3867"
        }, {
            lat: "35.1985",
            lon: "-82.2739"
        }, {
            lat: "35.2041",
            lon: "-82.3933"
        }, {
            lat: "35.0637",
            lon: "-82.7765"
        }, {
            lat: "35.0817",
            lon: "-82.7861"
        }, {
            lat: "34.9996",
            lon: "-83.1075"
        }, {
            lat: "34.9918",
            lon: "-83.6183"
        }, {
            lat: "34.9918",
            lon: "-84.3201"
        }, {
            lat: "35.2131",
            lon: "-84.2885"
        }, {
            lat: "35.2680",
            lon: "-84.2226"
        }, {
            lat: "35.2310",
            lon: "-84.1113"
        }, {
            lat: "35.2815",
            lon: "-84.0454"
        }, {
            lat: "35.4058",
            lon: "-84.0248"
        }, {
            lat: "35.4719",
            lon: "-83.9424"
        }, {
            lat: "35.5166",
            lon: "-83.8559"
        }, {
            lat: "35.5512",
            lon: "-83.6938"
        }, {
            lat: "35.5680",
            lon: "-83.5181"
        }, {
            lat: "35.6327",
            lon: "-83.3849"
        }, {
            lat: "35.7142",
            lon: "-83.2475"
        }, {
            lat: "35.7799",
            lon: "-82.9962"
        }, {
            lat: "35.8445",
            lon: "-82.9276"
        }, {
            lat: "35.9224",
            lon: "-82.8191"
        }, {
            lat: "35.9958",
            lon: "-82.7710"
        }, {
            lat: "36.0613",
            lon: "-82.6419"
        }, {
            lat: "35.9702",
            lon: "-82.6103"
        }, {
            lat: "35.9547",
            lon: "-82.5677"
        }, {
            lat: "36.0236",
            lon: "-82.4730"
        }, {
            lat: "36.0669",
            lon: "-82.4194"
        }, {
            lat: "36.1168",
            lon: "-82.3535"
        }, {
            lat: "36.1345",
            lon: "-82.2862"
        }, {
            lat: "36.1467",
            lon: "-82.1461"
        }, {
            lat: "36.1035",
            lon: "-82.1228"
        }, {
            lat: "36.1268",
            lon: "-82.0267"
        }, {
            lat: "36.2797",
            lon: "-81.9360"
        }, {
            lat: "36.3527",
            lon: "-81.7987"
        }, {
            lat: "36.3361",
            lon: "-81.7081"
        }, {
            lat: "36.5880",
            lon: "-81.6724"
        }, {
            lat: "36.5659",
            lon: "-80.7234"
        }, {
            lat: "36.5438",
            lon: "-80.2977"
        }, {
            lat: "36.5449",
            lon: "-79.6729"
        }, {
            lat: "36.5449",
            lon: "-77.2559"
        }, {
            lat: "36.5505",
            lon: "-75.7562"
        }, {
            lat: "36.3129",
            lon: "-75.7068"
        }, {
            lat: "35.7131",
            lon: "-75.4129"
        }, {
            lat: "35.2041",
            lon: "-75.4720"
        }, {
            lat: "34.9794",
            lon: "-76.0748"
        }, {
            lat: "34.5258",
            lon: "-76.4951"
        }, {
            lat: "34.5880",
            lon: "-76.8109"
        }, {
            lat: "34.5314",
            lon: "-77.1378"
        }, {
            lat: "34.3910",
            lon: "-77.4481"
        }, {
            lat: "34.0481",
            lon: "-77.7983"
        }, {
            lat: "33.7666",
            lon: "-77.9260"
        }, {
            lat: "33.7963",
            lon: "-78.4863"
        }]
    }, {
        name: "North Dakota",
        points: [{
            lat: "48.9955",
            lon: "-104.0501"
        }, {
            lat: "45.9445",
            lon: "-104.0446"
        }, {
            lat: "45.9340",
            lon: "-96.5671"
        }, {
            lat: "46.3242",
            lon: "-96.6028"
        }, {
            lat: "46.6636",
            lon: "-96.7978"
        }, {
            lat: "46.8602",
            lon: "-96.7896"
        }, {
            lat: "46.9503",
            lon: "-96.7896"
        }, {
            lat: "47.1300",
            lon: "-96.8335"
        }, {
            lat: "47.2345",
            lon: "-96.8335"
        }, {
            lat: "47.4132",
            lon: "-96.8555"
        }, {
            lat: "47.5469",
            lon: "-96.8555"
        }, {
            lat: "47.6506",
            lon: "-96.8774"
        }, {
            lat: "47.9918",
            lon: "-97.0601"
        }, {
            lat: "48.1267",
            lon: "-97.1260"
        }, {
            lat: "48.2859",
            lon: "-97.1109"
        }, {
            lat: "48.4301",
            lon: "-97.1233"
        }, {
            lat: "48.5530",
            lon: "-97.1425"
        }, {
            lat: "48.6765",
            lon: "-97.0999"
        }, {
            lat: "48.7326",
            lon: "-97.1356"
        }, {
            lat: "48.7951",
            lon: "-97.1727"
        }, {
            lat: "48.9081",
            lon: "-97.2290"
        }, {
            lat: "48.9982",
            lon: "-97.2331"
        }, {
            lat: "48.9946",
            lon: "-104.0501"
        }]
    }, {
        name: "Nebraska",
        points: [{
            lat: "42.9986",
            lon: "-104.0543"
        }, {
            lat: "41.0027",
            lon: "-104.0543"
        }, {
            lat: "41.0006",
            lon: "-102.0506"
        }, {
            lat: "40.0034",
            lon: "-102.0493"
        }, {
            lat: "39.9992",
            lon: "-95.3091"
        }, {
            lat: "40.2397",
            lon: "-95.4808"
        }, {
            lat: "40.3130",
            lon: "-95.6470"
        }, {
            lat: "40.4302",
            lon: "-95.6689"
        }, {
            lat: "40.5900",
            lon: "-95.7500"
        }, {
            lat: "40.6827",
            lon: "-95.8543"
        }, {
            lat: "40.8138",
            lon: "-95.8447"
        }, {
            lat: "40.9654",
            lon: "-95.8324"
        }, {
            lat: "41.0794",
            lon: "-95.8667"
        }, {
            lat: "41.2923",
            lon: "-95.8722"
        }, {
            lat: "41.4458",
            lon: "-95.9354"
        }, {
            lat: "41.5261",
            lon: "-95.9999"
        }, {
            lat: "41.6380",
            lon: "-96.0988"
        }, {
            lat: "41.7703",
            lon: "-96.0686"
        }, {
            lat: "41.8368",
            lon: "-96.1084"
        }, {
            lat: "41.9677",
            lon: "-96.1372"
        }, {
            lat: "42.0330",
            lon: "-96.2402"
        }, {
            lat: "42.1155",
            lon: "-96.2746"
        }, {
            lat: "42.2021",
            lon: "-96.3583"
        }, {
            lat: "42.2448",
            lon: "-96.3281"
        }, {
            lat: "42.3890",
            lon: "-96.4188"
        }, {
            lat: "42.4731",
            lon: "-96.4037"
        }, {
            lat: "42.5369",
            lon: "-96.6357"
        }, {
            lat: "42.6057",
            lon: "-96.7099"
        }, {
            lat: "42.6532",
            lon: "-96.6893"
        }, {
            lat: "42.6602",
            lon: "-96.7621"
        }, {
            lat: "42.7147",
            lon: "-96.8390"
        }, {
            lat: "42.7571",
            lon: "-96.9763"
        }, {
            lat: "42.8085",
            lon: "-97.2029"
        }, {
            lat: "42.8458",
            lon: "-97.2290"
        }, {
            lat: "42.8629",
            lon: "-97.3979"
        }, {
            lat: "42.8427",
            lon: "-97.5133"
        }, {
            lat: "42.8488",
            lon: "-97.6149"
        }, {
            lat: "42.8659",
            lon: "-97.8456"
        }, {
            lat: "42.7470",
            lon: "-97.9980"
        }, {
            lat: "42.8337",
            lon: "-98.1450"
        }, {
            lat: "42.9293",
            lon: "-98.4485"
        }, {
            lat: "42.9966",
            lon: "-98.5020"
        }, {
            lat: "43.0006",
            lon: "-104.0543"
        }]
    }, {
        name: "New Hampshire",
        points: [{
            lat: "45.0153",
            lon: "-71.5045"
        }, {
            lat: "45.0532",
            lon: "-71.4977"
        }, {
            lat: "45.0910",
            lon: "-71.4619"
        }, {
            lat: "45.1520",
            lon: "-71.4276"
        }, {
            lat: "45.2043",
            lon: "-71.3960"
        }, {
            lat: "45.2362",
            lon: "-71.4455"
        }, {
            lat: "45.2372",
            lon: "-71.3878"
        }, {
            lat: "45.2710",
            lon: "-71.3617"
        }, {
            lat: "45.3029",
            lon: "-71.2834"
        }, {
            lat: "45.2507",
            lon: "-71.2299"
        }, {
            lat: "45.2391",
            lon: "-71.1818"
        }, {
            lat: "45.2478",
            lon: "-71.1584"
        }, {
            lat: "45.2469",
            lon: "-71.1337"
        }, {
            lat: "45.2846",
            lon: "-71.1145"
        }, {
            lat: "45.3058",
            lon: "-71.0843"
        }, {
            lat: "44.9230",
            lon: "-71.0527"
        }, {
            lat: "44.3592",
            lon: "-71.0143"
        }, {
            lat: "43.7364",
            lon: "-70.9840"
        }, {
            lat: "43.5704",
            lon: "-70.9731"
        }, {
            lat: "43.3621",
            lon: "-70.9813"
        }, {
            lat: "43.2942",
            lon: "-70.9030"
        }, {
            lat: "43.2272",
            lon: "-70.8083"
        }, {
            lat: "43.1411",
            lon: "-70.8261"
        }, {
            lat: "43.1000",
            lon: "-70.7671"
        }, {
            lat: "43.0498",
            lon: "-70.6970"
        }, {
            lat: "42.9222",
            lon: "-70.5583"
        }, {
            lat: "42.8760",
            lon: "-70.6146"
        }, {
            lat: "42.8599",
            lon: "-70.8467"
        }, {
            lat: "42.8860",
            lon: "-70.9195"
        }, {
            lat: "42.8105",
            lon: "-71.0609"
        }, {
            lat: "42.8125",
            lon: "-71.1420"
        }, {
            lat: "42.7904",
            lon: "-71.1873"
        }, {
            lat: "42.7349",
            lon: "-71.1832"
        }, {
            lat: "42.7450",
            lon: "-71.2463"
        }, {
            lat: "42.6986",
            lon: "-71.2972"
        }, {
            lat: "42.7077",
            lon: "-71.7421"
        }, {
            lat: "42.7268",
            lon: "-72.4590"
        }, {
            lat: "42.7621",
            lon: "-72.5098"
        }, {
            lat: "42.8105",
            lon: "-72.5414"
        }, {
            lat: "42.8609",
            lon: "-72.5592"
        }, {
            lat: "42.8981",
            lon: "-72.5317"
        }, {
            lat: "42.9524",
            lon: "-72.5400"
        }, {
            lat: "42.9745",
            lon: "-72.4919"
        }, {
            lat: "42.9906",
            lon: "-72.4658"
        }, {
            lat: "43.0127",
            lon: "-72.4480"
        }, {
            lat: "43.0287",
            lon: "-72.4713"
        }, {
            lat: "43.0508",
            lon: "-72.4713"
        }, {
            lat: "43.0819",
            lon: "-72.4356"
        }, {
            lat: "43.1040",
            lon: "-72.4452"
        }, {
            lat: "43.1180",
            lon: "-72.4342"
        }, {
            lat: "43.1501",
            lon: "-72.4590"
        }, {
            lat: "43.2052",
            lon: "-72.4329"
        }, {
            lat: "43.2562",
            lon: "-72.4384"
        }, {
            lat: "43.2812",
            lon: "-72.4095"
        }, {
            lat: "43.3741",
            lon: "-72.4150"
        }, {
            lat: "43.4988",
            lon: "-72.3807"
        }, {
            lat: "43.5127",
            lon: "-72.4013"
        }, {
            lat: "43.5834",
            lon: "-72.3779"
        }, {
            lat: "43.6420",
            lon: "-72.3134"
        }, {
            lat: "43.6758",
            lon: "-72.3024"
        }, {
            lat: "43.7036",
            lon: "-72.3079"
        }, {
            lat: "43.7344",
            lon: "-72.2694"
        }, {
            lat: "43.7741",
            lon: "-72.2035"
        }, {
            lat: "43.8187",
            lon: "-72.1870"
        }, {
            lat: "43.8672",
            lon: "-72.1843"
        }, {
            lat: "43.8890",
            lon: "-72.1568"
        }, {
            lat: "43.9117",
            lon: "-72.1321"
        }, {
            lat: "43.9454",
            lon: "-72.1198"
        }, {
            lat: "44.0017",
            lon: "-72.1170"
        }, {
            lat: "44.0856",
            lon: "-72.0470"
        }, {
            lat: "44.1093",
            lon: "-72.0552"
        }, {
            lat: "44.1428",
            lon: "-72.0387"
        }, {
            lat: "44.1763",
            lon: "-72.0580"
        }, {
            lat: "44.1999",
            lon: "-72.0703"
        }, {
            lat: "44.2511",
            lon: "-72.0525"
        }, {
            lat: "44.2796",
            lon: "-72.0607"
        }, {
            lat: "44.3199",
            lon: "-72.0291"
        }, {
            lat: "44.3376",
            lon: "-71.9783"
        }, {
            lat: "44.3592",
            lon: "-71.9289"
        }, {
            lat: "44.3366",
            lon: "-71.8712"
        }, {
            lat: "44.3572",
            lon: "-71.8135"
        }, {
            lat: "44.3877",
            lon: "-71.8108"
        }, {
            lat: "44.4014",
            lon: "-71.7778"
        }, {
            lat: "44.4122",
            lon: "-71.7380"
        }, {
            lat: "44.4416",
            lon: "-71.6597"
        }, {
            lat: "44.4642",
            lon: "-71.6542"
        }, {
            lat: "44.5073",
            lon: "-71.5855"
        }, {
            lat: "44.5357",
            lon: "-71.5746"
        }, {
            lat: "44.5601",
            lon: "-71.6048"
        }, {
            lat: "44.5680",
            lon: "-71.5897"
        }, {
            lat: "44.5680",
            lon: "-71.5649"
        }, {
            lat: "44.5914",
            lon: "-71.5485"
        }, {
            lat: "44.5993",
            lon: "-71.5649"
        }, {
            lat: "44.6315",
            lon: "-71.5540"
        }, {
            lat: "44.6608",
            lon: "-71.5924"
        }, {
            lat: "44.7243",
            lon: "-71.6130"
        }, {
            lat: "44.7526",
            lon: "-71.6364"
        }, {
            lat: "44.8198",
            lon: "-71.5746"
        }, {
            lat: "44.8325",
            lon: "-71.5526"
        }, {
            lat: "44.8539",
            lon: "-71.5553"
        }, {
            lat: "44.8744",
            lon: "-71.5279"
        }, {
            lat: "44.9123",
            lon: "-71.5018"
        }, {
            lat: "44.9366",
            lon: "-71.5182"
        }, {
            lat: "44.9697",
            lon: "-71.5237"
        }, {
            lat: "44.9862",
            lon: "-71.5443"
        }, {
            lat: "45.0017",
            lon: "-71.5237"
        }, {
            lat: "45.0163",
            lon: "-71.5045"
        }]
    }, {
        name: "New Jersey",
        points: [{
            lat: "41.3572",
            lon: "-74.6950"
        }, {
            lat: "41.3394",
            lon: "-74.6559"
        }, {
            lat: "40.9934",
            lon: "-73.8940"
        }, {
            lat: "40.8398",
            lon: "-73.9586"
        }, {
            lat: "40.7691",
            lon: "-74.0094"
        }, {
            lat: "40.6994",
            lon: "-74.0231"
        }, {
            lat: "40.6786",
            lon: "-74.0437"
        }, {
            lat: "40.6515",
            lon: "-74.0808"
        }, {
            lat: "40.6421",
            lon: "-74.1357"
        }, {
            lat: "40.6452",
            lon: "-74.1962"
        }, {
            lat: "40.5952",
            lon: "-74.2003"
        }, {
            lat: "40.5566",
            lon: "-74.2195"
        }, {
            lat: "40.4877",
            lon: "-74.2552"
        }, {
            lat: "40.4762",
            lon: "-74.2264"
        }, {
            lat: "40.5253",
            lon: "-73.9503"
        }, {
            lat: "40.4846",
            lon: "-73.8885"
        }, {
            lat: "40.0045",
            lon: "-73.9352"
        }, {
            lat: "39.6131",
            lon: "-74.0410"
        }, {
            lat: "39.4744",
            lon: "-74.2209"
        }, {
            lat: "38.9882",
            lon: "-74.6713"
        }, {
            lat: "38.8664",
            lon: "-74.8553"
        }, {
            lat: "38.8472",
            lon: "-75.0476"
        }, {
            lat: "39.0565",
            lon: "-75.1685"
        }, {
            lat: "39.2525",
            lon: "-75.3250"
        }, {
            lat: "39.4500",
            lon: "-75.5544"
        }, {
            lat: "39.4966",
            lon: "-75.5612"
        }, {
            lat: "39.4998",
            lon: "-75.5283"
        }, {
            lat: "39.5411",
            lon: "-75.5338"
        }, {
            lat: "39.5761",
            lon: "-75.5090"
        }, {
            lat: "39.6237",
            lon: "-75.5708"
        }, {
            lat: "39.6713",
            lon: "-75.5104"
        }, {
            lat: "39.7167",
            lon: "-75.4843"
        }, {
            lat: "39.8033",
            lon: "-75.4156"
        }, {
            lat: "39.8360",
            lon: "-75.2632"
        }, {
            lat: "39.8823",
            lon: "-75.1918"
        }, {
            lat: "40.1180",
            lon: "-74.7922"
        }, {
            lat: "40.1390",
            lon: "-74.7331"
        }, {
            lat: "40.2565",
            lon: "-74.8485"
        }, {
            lat: "40.3361",
            lon: "-74.9419"
        }, {
            lat: "40.4020",
            lon: "-74.9721"
        }, {
            lat: "40.4240",
            lon: "-75.0627"
        }, {
            lat: "40.4898",
            lon: "-75.0613"
        }, {
            lat: "40.5733",
            lon: "-75.1067"
        }, {
            lat: "40.5639",
            lon: "-75.2138"
        }, {
            lat: "40.6192",
            lon: "-75.2028"
        }, {
            lat: "40.6494",
            lon: "-75.2069"
        }, {
            lat: "40.8284",
            lon: "-75.0806"
        }, {
            lat: "40.8429",
            lon: "-75.0998"
        }, {
            lat: "40.8689",
            lon: "-75.0504"
        }, {
            lat: "40.9913",
            lon: "-75.1369"
        }, {
            lat: "41.2293",
            lon: "-74.8677"
        }, {
            lat: "41.3479",
            lon: "-74.7537"
        }, {
            lat: "41.3469",
            lon: "-74.7249"
        }, {
            lat: "41.3593",
            lon: "-74.6960"
        }]
    }, {
        name: "New Mexico",
        points: [{
            lat: "36.9971",
            lon: "-109.0448"
        }, {
            lat: "31.3337",
            lon: "-109.0489"
        }, {
            lat: "31.3349",
            lon: "-108.2140"
        }, {
            lat: "31.7795",
            lon: "-108.2071"
        }, {
            lat: "31.7830",
            lon: "-106.5317"
        }, {
            lat: "32.0034",
            lon: "-106.6223"
        }, {
            lat: "31.9999",
            lon: "-103.0696"
        }, {
            lat: "36.9982",
            lon: "-103.0023"
        }, {
            lat: "36.9982",
            lon: "-109.0475"
        }]
    }, {
        name: "Nevada",
        points: [{
            lat: "41.9922",
            lon: "-120.0037"
        }, {
            lat: "42.0003",
            lon: "-117.9602"
        }, {
            lat: "42.0003",
            lon: "-117.0264"
        }, {
            lat: "42.0003",
            lon: "-115.7300"
        }, {
            lat: "41.9952",
            lon: "-114.0436"
        }, {
            lat: "38.2856",
            lon: "-114.0546"
        }, {
            lat: "36.1955",
            lon: "-114.0491"
        }, {
            lat: "36.1334",
            lon: "-114.0985"
        }, {
            lat: "36.1068",
            lon: "-114.1260"
        }, {
            lat: "36.0891",
            lon: "-114.1150"
        }, {
            lat: "36.0313",
            lon: "-114.1534"
        }, {
            lat: "36.0136",
            lon: "-114.2468"
        }, {
            lat: "36.0624",
            lon: "-114.3292"
        }, {
            lat: "36.1024",
            lon: "-114.3237"
        }, {
            lat: "36.1434",
            lon: "-114.3896"
        }, {
            lat: "36.1290",
            lon: "-114.5105"
        }, {
            lat: "36.1467",
            lon: "-114.5215"
        }, {
            lat: "36.1556",
            lon: "-114.5654"
        }, {
            lat: "36.1334",
            lon: "-114.6204"
        }, {
            lat: "36.1157",
            lon: "-114.6863"
        }, {
            lat: "36.0979",
            lon: "-114.7742"
        }, {
            lat: "36.0580",
            lon: "-114.7357"
        }, {
            lat: "36.0447",
            lon: "-114.7522"
        }, {
            lat: "35.9691",
            lon: "-114.7412"
        }, {
            lat: "35.8980",
            lon: "-114.7028"
        }, {
            lat: "35.8757",
            lon: "-114.6588"
        }, {
            lat: "35.8579",
            lon: "-114.7083"
        }, {
            lat: "35.8267",
            lon: "-114.6973"
        }, {
            lat: "35.8089",
            lon: "-114.7192"
        }, {
            lat: "35.6618",
            lon: "-114.6973"
        }, {
            lat: "35.6037",
            lon: "-114.6478"
        }, {
            lat: "35.5814",
            lon: "-114.6863"
        }, {
            lat: "35.5233",
            lon: "-114.6533"
        }, {
            lat: "35.5054",
            lon: "-114.6863"
        }, {
            lat: "35.4070",
            lon: "-114.6149"
        }, {
            lat: "35.3218",
            lon: "-114.5929"
        }, {
            lat: "35.1783",
            lon: "-114.5737"
        }, {
            lat: "35.1199",
            lon: "-114.6094"
        }, {
            lat: "35.1109",
            lon: "-114.6368"
        }, {
            lat: "35.0929",
            lon: "-114.6368"
        }, {
            lat: "35.0750",
            lon: "-114.6039"
        }, {
            lat: "35.0480",
            lon: "-114.6259"
        }, {
            lat: "35.0345",
            lon: "-114.6478"
        }, {
            lat: "35.0030",
            lon: "-114.6423"
        }, {
            lat: "35.1334",
            lon: "-114.8016"
        }, {
            lat: "37.2303",
            lon: "-117.5153"
        }, {
            lat: "39.0000",
            lon: "-120.0009"
        }, {
            lat: "41.9942",
            lon: "-119.9982"
        }]
    }, {
        name: "New York",
        points: [{
            lat: "42.5142",
            lon: "-79.7624"
        }, {
            lat: "42.7783",
            lon: "-79.0672"
        }, {
            lat: "42.8508",
            lon: "-78.9313"
        }, {
            lat: "42.9061",
            lon: "-78.9024"
        }, {
            lat: "42.9554",
            lon: "-78.9313"
        }, {
            lat: "42.9584",
            lon: "-78.9656"
        }, {
            lat: "42.9886",
            lon: "-79.0219"
        }, {
            lat: "43.0568",
            lon: "-79.0027"
        }, {
            lat: "43.0769",
            lon: "-79.0727"
        }, {
            lat: "43.1220",
            lon: "-79.0713"
        }, {
            lat: "43.1441",
            lon: "-79.0302"
        }, {
            lat: "43.1801",
            lon: "-79.0576"
        }, {
            lat: "43.2482",
            lon: "-79.0604"
        }, {
            lat: "43.2812",
            lon: "-79.0837"
        }, {
            lat: "43.4509",
            lon: "-79.2004"
        }, {
            lat: "43.6311",
            lon: "-78.6909"
        }, {
            lat: "43.6321",
            lon: "-76.7958"
        }, {
            lat: "43.9987",
            lon: "-76.4978"
        }, {
            lat: "44.0965",
            lon: "-76.4388"
        }, {
            lat: "44.1349",
            lon: "-76.3536"
        }, {
            lat: "44.1989",
            lon: "-76.3124"
        }, {
            lat: "44.2049",
            lon: "-76.2437"
        }, {
            lat: "44.2413",
            lon: "-76.1655"
        }, {
            lat: "44.2973",
            lon: "-76.1353"
        }, {
            lat: "44.3327",
            lon: "-76.0474"
        }, {
            lat: "44.3553",
            lon: "-75.9856"
        }, {
            lat: "44.3749",
            lon: "-75.9196"
        }, {
            lat: "44.3994",
            lon: "-75.8730"
        }, {
            lat: "44.4308",
            lon: "-75.8221"
        }, {
            lat: "44.4740",
            lon: "-75.8098"
        }, {
            lat: "44.5425",
            lon: "-75.7288"
        }, {
            lat: "44.6647",
            lon: "-75.5585"
        }, {
            lat: "44.7672",
            lon: "-75.4088"
        }, {
            lat: "44.8101",
            lon: "-75.3442"
        }, {
            lat: "44.8383",
            lon: "-75.3058"
        }, {
            lat: "44.8676",
            lon: "-75.2399"
        }, {
            lat: "44.9211",
            lon: "-75.1204"
        }, {
            lat: "44.9609",
            lon: "-74.9995"
        }, {
            lat: "44.9803",
            lon: "-74.9899"
        }, {
            lat: "44.9852",
            lon: "-74.9103"
        }, {
            lat: "45.0017",
            lon: "-74.8856"
        }, {
            lat: "45.0153",
            lon: "-74.8306"
        }, {
            lat: "45.0046",
            lon: "-74.7633"
        }, {
            lat: "45.0027",
            lon: "-74.7070"
        }, {
            lat: "45.0007",
            lon: "-74.5642"
        }, {
            lat: "44.9920",
            lon: "-74.1467"
        }, {
            lat: "45.0037",
            lon: "-73.7306"
        }, {
            lat: "45.0085",
            lon: "-73.4203"
        }, {
            lat: "45.0109",
            lon: "-73.3430"
        }, {
            lat: "44.9874",
            lon: "-73.3547"
        }, {
            lat: "44.9648",
            lon: "-73.3379"
        }, {
            lat: "44.9160",
            lon: "-73.3396"
        }, {
            lat: "44.8354",
            lon: "-73.3739"
        }, {
            lat: "44.8013",
            lon: "-73.3324"
        }, {
            lat: "44.7419",
            lon: "-73.3667"
        }, {
            lat: "44.6139",
            lon: "-73.3873"
        }, {
            lat: "44.5787",
            lon: "-73.3736"
        }, {
            lat: "44.4916",
            lon: "-73.3049"
        }, {
            lat: "44.4289",
            lon: "-73.2953"
        }, {
            lat: "44.3513",
            lon: "-73.3365"
        }, {
            lat: "44.2757",
            lon: "-73.3118"
        }, {
            lat: "44.1980",
            lon: "-73.3818"
        }, {
            lat: "44.1142",
            lon: "-73.4079"
        }, {
            lat: "44.0511",
            lon: "-73.4367"
        }, {
            lat: "44.0165",
            lon: "-73.4065"
        }, {
            lat: "43.9375",
            lon: "-73.4079"
        }, {
            lat: "43.8771",
            lon: "-73.3749"
        }, {
            lat: "43.8167",
            lon: "-73.3914"
        }, {
            lat: "43.7790",
            lon: "-73.3557"
        }, {
            lat: "43.6460",
            lon: "-73.4244"
        }, {
            lat: "43.5893",
            lon: "-73.4340"
        }, {
            lat: "43.5655",
            lon: "-73.3969"
        }, {
            lat: "43.6112",
            lon: "-73.3818"
        }, {
            lat: "43.6271",
            lon: "-73.3049"
        }, {
            lat: "43.5764",
            lon: "-73.3063"
        }, {
            lat: "43.5675",
            lon: "-73.2582"
        }, {
            lat: "43.5227",
            lon: "-73.2445"
        }, {
            lat: "43.2582",
            lon: "-73.2582"
        }, {
            lat: "42.9715",
            lon: "-73.2733"
        }, {
            lat: "42.8004",
            lon: "-73.2898"
        }, {
            lat: "42.7460",
            lon: "-73.2664"
        }, {
            lat: "42.4630",
            lon: "-73.3708"
        }, {
            lat: "42.0840",
            lon: "-73.5095"
        }, {
            lat: "42.0218",
            lon: "-73.4903"
        }, {
            lat: "41.8808",
            lon: "-73.4999"
        }, {
            lat: "41.2953",
            lon: "-73.5535"
        }, {
            lat: "41.2128",
            lon: "-73.4834"
        }, {
            lat: "41.1011",
            lon: "-73.7275"
        }, {
            lat: "41.0237",
            lon: "-73.6644"
        }, {
            lat: "40.9851",
            lon: "-73.6578"
        }, {
            lat: "40.9509",
            lon: "-73.6132"
        }, {
            lat: "41.1869",
            lon: "-72.4823"
        }, {
            lat: "41.2551",
            lon: "-72.0950"
        }, {
            lat: "41.3005",
            lon: "-71.9714"
        }, {
            lat: "41.3108",
            lon: "-71.9193"
        }, {
            lat: "41.1838",
            lon: "-71.7915"
        }, {
            lat: "41.1249",
            lon: "-71.7929"
        }, {
            lat: "41.0462",
            lon: "-71.7517"
        }, {
            lat: "40.6306",
            lon: "-72.9465"
        }, {
            lat: "40.5368",
            lon: "-73.4628"
        }, {
            lat: "40.4887",
            lon: "-73.8885"
        }, {
            lat: "40.5232",
            lon: "-73.9490"
        }, {
            lat: "40.4772",
            lon: "-74.2271"
        }, {
            lat: "40.4861",
            lon: "-74.2532"
        }, {
            lat: "40.6468",
            lon: "-74.1866"
        }, {
            lat: "40.6556",
            lon: "-74.0547"
        }, {
            lat: "40.7618",
            lon: "-74.0156"
        }, {
            lat: "40.8699",
            lon: "-73.9421"
        }, {
            lat: "40.9980",
            lon: "-73.8934"
        }, {
            lat: "41.0343",
            lon: "-73.9854"
        }, {
            lat: "41.3268",
            lon: "-74.6274"
        }, {
            lat: "41.3583",
            lon: "-74.7084"
        }, {
            lat: "41.3811",
            lon: "-74.7101"
        }, {
            lat: "41.4386",
            lon: "-74.8265"
        }, {
            lat: "41.5075",
            lon: "-74.9913"
        }, {
            lat: "41.6000",
            lon: "-75.0668"
        }, {
            lat: "41.6719",
            lon: "-75.0366"
        }, {
            lat: "41.7672",
            lon: "-75.0545"
        }, {
            lat: "41.8808",
            lon: "-75.1945"
        }, {
            lat: "42.0013",
            lon: "-75.3552"
        }, {
            lat: "42.0003",
            lon: "-75.4266"
        }, {
            lat: "42.0013",
            lon: "-77.0306"
        }, {
            lat: "41.9993",
            lon: "-79.7250"
        }, {
            lat: "42.0003",
            lon: "-79.7621"
        }, {
            lat: "42.1827",
            lon: "-79.7621"
        }, {
            lat: "42.5146",
            lon: "-79.7621"
        }]
    }, {
        name: "Ohio",
        points: [{
            lat: "38.4385",
            lon: "-82.3425"
        }, {
            lat: "38.5707",
            lon: "-82.2917"
        }, {
            lat: "38.5965",
            lon: "-82.1722"
        }, {
            lat: "38.7712",
            lon: "-82.1997"
        }, {
            lat: "39.0181",
            lon: "-82.0294"
        }, {
            lat: "38.8750",
            lon: "-81.8729"
        }, {
            lat: "38.9359",
            lon: "-81.7644"
        }, {
            lat: "39.1865",
            lon: "-81.7397"
        }, {
            lat: "39.2812",
            lon: "-81.5680"
        }, {
            lat: "39.4022",
            lon: "-81.4444"
        }, {
            lat: "39.3460",
            lon: "-81.3661"
        }, {
            lat: "39.4479",
            lon: "-81.1244"
        }, {
            lat: "39.5549",
            lon: "-81.0352"
        }, {
            lat: "39.6565",
            lon: "-80.8374"
        }, {
            lat: "39.8676",
            lon: "-80.7948"
        }, {
            lat: "40.5941",
            lon: "-80.6520"
        }, {
            lat: "40.6223",
            lon: "-80.5188"
        }, {
            lat: "42.3210",
            lon: "-80.5229"
        }, {
            lat: "42.2153",
            lon: "-81.2521"
        }, {
            lat: "41.9962",
            lon: "-81.6806"
        }, {
            lat: "41.9962",
            lon: "-81.7094"
        }, {
            lat: "41.6770",
            lon: "-82.3961"
        }, {
            lat: "41.6709",
            lon: "-82.6845"
        }, {
            lat: "41.9585",
            lon: "-83.1157"
        }, {
            lat: "41.7314",
            lon: "-83.4219"
        }, {
            lat: "41.6944",
            lon: "-84.8021"
        }, {
            lat: "39.1056",
            lon: "-84.8172"
        }, {
            lat: "39.1407",
            lon: "-84.7444"
        }, {
            lat: "39.0960",
            lon: "-84.5068"
        }, {
            lat: "39.0459",
            lon: "-84.4052"
        }, {
            lat: "38.9434",
            lon: "-84.2857"
        }, {
            lat: "38.8055",
            lon: "-84.2432"
        }, {
            lat: "38.7712",
            lon: "-84.0866"
        }, {
            lat: "38.7519",
            lon: "-83.8916"
        }, {
            lat: "38.6330",
            lon: "-83.6636"
        }, {
            lat: "38.6962",
            lon: "-83.5263"
        }, {
            lat: "38.5976",
            lon: "-83.2736"
        }, {
            lat: "38.6169",
            lon: "-83.1445"
        }, {
            lat: "38.7027",
            lon: "-83.0127"
        }, {
            lat: "38.7327",
            lon: "-82.8973"
        }, {
            lat: "38.5782",
            lon: "-82.8355"
        }, {
            lat: "38.3761",
            lon: "-82.5952"
        }]
    }, {
        name: "Oklahoma",
        points: [{
            lat: "37.0015",
            lon: "-103.0051"
        }, {
            lat: "36.5030",
            lon: "-103.0037"
        }, {
            lat: "36.4986",
            lon: "-100.0003"
        }, {
            lat: "34.5620",
            lon: "-99.9934"
        }, {
            lat: "34.3763",
            lon: "-99.6172"
        }, {
            lat: "34.4137",
            lon: "-99.5787"
        }, {
            lat: "34.3763",
            lon: "-99.4290"
        }, {
            lat: "34.4534",
            lon: "-99.3823"
        }, {
            lat: "34.3616",
            lon: "-99.2505"
        }, {
            lat: "34.2129",
            lon: "-99.1818"
        }, {
            lat: "34.1982",
            lon: "-98.9648"
        }, {
            lat: "34.1232",
            lon: "-98.7424"
        }, {
            lat: "34.1254",
            lon: "-98.5570"
        }, {
            lat: "34.0618",
            lon: "-98.4746"
        }, {
            lat: "34.1414",
            lon: "-98.3743"
        }, {
            lat: "34.1118",
            lon: "-98.1793"
        }, {
            lat: "34.0060",
            lon: "-98.0818"
        }, {
            lat: "33.8966",
            lon: "-97.9843"
        }, {
            lat: "33.8487",
            lon: "-97.8662"
        }, {
            lat: "33.9798",
            lon: "-97.6932"
        }, {
            lat: "33.8841",
            lon: "-97.4529"
        }, {
            lat: "33.8282",
            lon: "-97.4611"
        }, {
            lat: "33.8237",
            lon: "-97.3622"
        }, {
            lat: "33.9001",
            lon: "-97.2166"
        }, {
            lat: "33.7426",
            lon: "-97.1645"
        }, {
            lat: "33.7392",
            lon: "-97.0930"
        }, {
            lat: "33.9354",
            lon: "-96.9173"
        }, {
            lat: "33.8704",
            lon: "-96.8527"
        }, {
            lat: "33.8271",
            lon: "-96.7484"
        }, {
            lat: "33.8202",
            lon: "-96.5602"
        }, {
            lat: "33.7769",
            lon: "-96.5053"
        }, {
            lat: "33.6912",
            lon: "-96.3474"
        }, {
            lat: "33.8522",
            lon: "-96.0205"
        }, {
            lat: "33.8396",
            lon: "-95.8379"
        }, {
            lat: "33.8887",
            lon: "-95.7349"
        }, {
            lat: "33.8841",
            lon: "-95.5426"
        }, {
            lat: "33.8738",
            lon: "-95.2831"
        }, {
            lat: "33.9570",
            lon: "-95.2171"
        }, {
            lat: "33.8670",
            lon: "-95.0496"
        }, {
            lat: "33.7677",
            lon: "-94.8862"
        }, {
            lat: "33.6695",
            lon: "-94.6692"
        }, {
            lat: "33.6386",
            lon: "-94.4852"
        }, {
            lat: "35.3499",
            lon: "-94.4357"
        }, {
            lat: "36.3715",
            lon: "-94.5978"
        }, {
            lat: "36.4942",
            lon: "-94.6198"
        }, {
            lat: "36.9982",
            lon: "-94.6211"
        }, {
            lat: "37.0004",
            lon: "-103.0064"
        }]
    }, {
        name: "Oregon",
        points: [{
            lat: "46.2587",
            lon: "-124.2444"
        }, {
            lat: "46.2634",
            lon: "-124.0384"
        }, {
            lat: "46.2891",
            lon: "-124.0205"
        }, {
            lat: "46.2407",
            lon: "-123.9368"
        }, {
            lat: "46.2388",
            lon: "-123.8681"
        }, {
            lat: "46.2691",
            lon: "-123.7390"
        }, {
            lat: "46.2520",
            lon: "-123.6868"
        }, {
            lat: "46.2596",
            lon: "-123.6456"
        }, {
            lat: "46.2577",
            lon: "-123.5468"
        }, {
            lat: "46.2672",
            lon: "-123.4863"
        }, {
            lat: "46.2369",
            lon: "-123.4287"
        }, {
            lat: "46.1817",
            lon: "-123.4287"
        }, {
            lat: "46.1513",
            lon: "-123.3765"
        }, {
            lat: "46.1494",
            lon: "-123.3051"
        }, {
            lat: "46.1874",
            lon: "-123.1512"
        }, {
            lat: "46.1380",
            lon: "-123.0222"
        }, {
            lat: "46.0980",
            lon: "-122.9398"
        }, {
            lat: "46.0551",
            lon: "-122.8848"
        }, {
            lat: "45.9588",
            lon: "-122.8189"
        }, {
            lat: "45.9053",
            lon: "-122.8162"
        }, {
            lat: "45.8824",
            lon: "-122.7887"
        }, {
            lat: "45.8173",
            lon: "-122.7969"
        }, {
            lat: "45.7637",
            lon: "-122.7585"
        }, {
            lat: "45.6851",
            lon: "-122.7750"
        }, {
            lat: "45.6505",
            lon: "-122.7530"
        }, {
            lat: "45.6064",
            lon: "-122.5937"
        }, {
            lat: "45.5679",
            lon: "-122.4426"
        }, {
            lat: "45.5756",
            lon: "-122.3712"
        }, {
            lat: "45.5506",
            lon: "-122.3245"
        }, {
            lat: "45.5641",
            lon: "-122.2064"
        }, {
            lat: "45.5987",
            lon: "-122.0856"
        }, {
            lat: "45.6659",
            lon: "-121.8933"
        }, {
            lat: "45.6812",
            lon: "-121.8906"
        }, {
            lat: "45.7081",
            lon: "-121.8164"
        }, {
            lat: "45.6966",
            lon: "-121.7560"
        }, {
            lat: "45.7254",
            lon: "-121.5335"
        }, {
            lat: "45.6928",
            lon: "-121.3907"
        }, {
            lat: "45.7081",
            lon: "-121.3646"
        }, {
            lat: "45.6582",
            lon: "-121.2039"
        }, {
            lat: "45.6083",
            lon: "-121.1957"
        }, {
            lat: "45.6102",
            lon: "-121.1462"
        }, {
            lat: "45.6524",
            lon: "-121.0803"
        }, {
            lat: "45.6582",
            lon: "-121.0144"
        }, {
            lat: "45.6467",
            lon: "-120.9814"
        }, {
            lat: "45.6563",
            lon: "-120.9430"
        }, {
            lat: "45.6371",
            lon: "-120.9100"
        }, {
            lat: "45.6755",
            lon: "-120.8524"
        }, {
            lat: "45.7445",
            lon: "-120.6052"
        }, {
            lat: "45.7158",
            lon: "-120.5310"
        }, {
            lat: "45.6966",
            lon: "-120.4733"
        }, {
            lat: "45.7234",
            lon: "-120.2893"
        }, {
            lat: "45.7234",
            lon: "-120.2124"
        }, {
            lat: "45.7714",
            lon: "-120.1575"
        }, {
            lat: "45.8211",
            lon: "-119.9680"
        }, {
            lat: "45.8498",
            lon: "-119.7839"
        }, {
            lat: "45.8575",
            lon: "-119.6658"
        }, {
            lat: "45.9149",
            lon: "-119.6136"
        }, {
            lat: "45.9244",
            lon: "-119.5724"
        }, {
            lat: "45.9110",
            lon: "-119.5258"
        }, {
            lat: "45.9378",
            lon: "-119.2676"
        }, {
            lat: "45.9168",
            lon: "-119.1687"
        }, {
            lat: "45.9779",
            lon: "-119.0149"
        }, {
            lat: "46.0027",
            lon: "-118.9847"
        }, {
            lat: "45.9970",
            lon: "-116.9165"
        }, {
            lat: "45.9569",
            lon: "-116.8781"
        }, {
            lat: "45.8957",
            lon: "-116.8588"
        }, {
            lat: "45.8747",
            lon: "-116.8066"
        }, {
            lat: "45.8307",
            lon: "-116.7902"
        }, {
            lat: "45.8192",
            lon: "-116.7654"
        }, {
            lat: "45.8231",
            lon: "-116.7105"
        }, {
            lat: "45.7828",
            lon: "-116.6748"
        }, {
            lat: "45.7828",
            lon: "-116.6144"
        }, {
            lat: "45.7522",
            lon: "-116.5430"
        }, {
            lat: "45.6889",
            lon: "-116.5402"
        }, {
            lat: "45.6121",
            lon: "-116.4606"
        }, {
            lat: "45.5006",
            lon: "-116.5567"
        }, {
            lat: "45.4640",
            lon: "-116.5567"
        }, {
            lat: "45.4447",
            lon: "-116.5869"
        }, {
            lat: "45.3213",
            lon: "-116.6721"
        }, {
            lat: "45.2633",
            lon: "-116.6940"
        }, {
            lat: "45.1414",
            lon: "-116.7325"
        }, {
            lat: "45.1065",
            lon: "-116.7764"
        }, {
            lat: "45.0696",
            lon: "-116.7847"
        }, {
            lat: "45.0231",
            lon: "-116.8451"
        }, {
            lat: "44.9765",
            lon: "-116.8616"
        }, {
            lat: "44.9298",
            lon: "-116.8286"
        }, {
            lat: "44.7955",
            lon: "-116.9302"
        }, {
            lat: "44.7487",
            lon: "-117.0346"
        }, {
            lat: "44.5787",
            lon: "-117.1225"
        }, {
            lat: "44.5455",
            lon: "-117.1445"
        }, {
            lat: "44.4847",
            lon: "-117.2076"
        }, {
            lat: "44.4789",
            lon: "-117.2269"
        }, {
            lat: "44.4063",
            lon: "-117.2269"
        }, {
            lat: "44.3926",
            lon: "-117.2488"
        }, {
            lat: "44.3455",
            lon: "-117.1939"
        }, {
            lat: "44.2983",
            lon: "-117.2269"
        }, {
            lat: "44.2570",
            lon: "-117.1774"
        }, {
            lat: "44.2609",
            lon: "-117.1445"
        }, {
            lat: "44.2806",
            lon: "-117.1005"
        }, {
            lat: "44.2314",
            lon: "-117.0511"
        }, {
            lat: "44.2491",
            lon: "-117.0428"
        }, {
            lat: "44.2432",
            lon: "-116.9797"
        }, {
            lat: "44.1940",
            lon: "-116.9742"
        }, {
            lat: "44.1664",
            lon: "-116.8945"
        }, {
            lat: "44.0935",
            lon: "-116.9330"
        }, {
            lat: "44.0836",
            lon: "-116.9714"
        }, {
            lat: "44.0521",
            lon: "-116.9879"
        }, {
            lat: "44.0244",
            lon: "-116.9302"
        }, {
            lat: "43.9533",
            lon: "-116.9659"
        }, {
            lat: "43.8207",
            lon: "-117.0209"
        }, {
            lat: "43.6639",
            lon: "-117.0264"
        }, {
            lat: "42.0024",
            lon: "-117.0264"
        }, {
            lat: "41.9983",
            lon: "-121.2836"
        }, {
            lat: "42.0085",
            lon: "-122.5003"
        }, {
            lat: "42.0064",
            lon: "-123.0798"
        }, {
            lat: "42.0105",
            lon: "-123.1540"
        }, {
            lat: "42.0044",
            lon: "-123.2419"
        }, {
            lat: "42.0024",
            lon: "-123.6209"
        }, {
            lat: "41.9952",
            lon: "-124.3982"
        }, {
            lat: "42.1593",
            lon: "-124.5493"
        }, {
            lat: "42.6521",
            lon: "-124.5877"
        }, {
            lat: "42.8115",
            lon: "-124.7305"
        }, {
            lat: "43.7552",
            lon: "-124.4119"
        }, {
            lat: "46.0065",
            lon: "-124.2554"
        }, {
            lat: "46.2587",
            lon: "-124.2444"
        }]
    }, {
        name: "Pennsylvania",
        points: [{
            lat: "42.3261",
            lon: "-80.5174"
        }, {
            lat: "42.3961",
            lon: "-80.0821"
        }, {
            lat: "42.5167",
            lon: "-79.7621"
        }, {
            lat: "42.0003",
            lon: "-79.7607"
        }, {
            lat: "41.9983",
            lon: "-75.3580"
        }, {
            lat: "41.9431",
            lon: "-75.2673"
        }, {
            lat: "41.8696",
            lon: "-75.1794"
        }, {
            lat: "41.7713",
            lon: "-75.0586"
        }, {
            lat: "41.6729",
            lon: "-75.0366"
        }, {
            lat: "41.6021",
            lon: "-75.0641"
        }, {
            lat: "41.5086",
            lon: "-74.9927"
        }, {
            lat: "41.4283",
            lon: "-74.7935"
        }, {
            lat: "41.3933",
            lon: "-74.7070"
        }, {
            lat: "41.2282",
            lon: "-74.8608"
        }, {
            lat: "40.9830",
            lon: "-75.1355"
        }, {
            lat: "40.8554",
            lon: "-75.0490"
        }, {
            lat: "40.6806",
            lon: "-75.1904"
        }, {
            lat: "40.5639",
            lon: "-75.2124"
        }, {
            lat: "40.5743",
            lon: "-75.1025"
        }, {
            lat: "40.5013",
            lon: "-75.0600"
        }, {
            lat: "40.4208",
            lon: "-75.0655"
        }, {
            lat: "40.4072",
            lon: "-74.9776"
        }, {
            lat: "40.3392",
            lon: "-74.9432"
        }, {
            lat: "40.2628",
            lon: "-74.8389"
        }, {
            lat: "40.1495",
            lon: "-74.7221"
        }, {
            lat: "39.9592",
            lon: "-75.0929"
        }, {
            lat: "39.8370",
            lon: "-75.2577"
        }, {
            lat: "39.8128",
            lon: "-75.4321"
        }, {
            lat: "39.8317",
            lon: "-75.6477"
        }, {
            lat: "39.7199",
            lon: "-75.7892"
        }, {
            lat: "39.7220",
            lon: "-80.5243"
        }, {
            lat: "42.3240",
            lon: "-80.5202"
        }]
    }, {
        name: "Rhode Island",
        points: [{
            lat: "41.3706",
            lon: "-71.0568"
        }, {
            lat: "41.3706",
            lon: "-71.0541"
        }, {
            lat: "41.6339",
            lon: "-71.1447"
        }, {
            lat: "41.6791",
            lon: "-71.1942"
        }, {
            lat: "41.7611",
            lon: "-71.2793"
        }, {
            lat: "41.7775",
            lon: "-71.3315"
        }, {
            lat: "41.7918",
            lon: "-71.3425"
        }, {
            lat: "41.8225",
            lon: "-71.3507"
        }, {
            lat: "41.8512",
            lon: "-71.3370"
        }, {
            lat: "41.8880",
            lon: "-71.3397"
        }, {
            lat: "41.9288",
            lon: "-71.3837"
        }, {
            lat: "42.0156",
            lon: "-71.3795"
        }, {
            lat: "42.0064",
            lon: "-71.7984"
        }, {
            lat: "41.6750",
            lon: "-71.7874"
        }, {
            lat: "41.4530",
            lon: "-71.7984"
        }, {
            lat: "41.3943",
            lon: "-71.8492"
        }, {
            lat: "41.3315",
            lon: "-71.8520"
        }, {
            lat: "41.3057",
            lon: "-71.9041"
        }, {
            lat: "41.1849",
            lon: "-71.7915"
        }, {
            lat: "41.2665",
            lon: "-71.4084"
        }]
    }, {
        name: "South Carolina",
        points: [{
            lat: "32.0488",
            lon: "-80.7001"
        }, {
            lat: "32.0453",
            lon: "-80.8978"
        }, {
            lat: "32.1105",
            lon: "-81.1134"
        }, {
            lat: "32.2058",
            lon: "-81.1423"
        }, {
            lat: "32.3846",
            lon: "-81.1821"
        }, {
            lat: "32.4576",
            lon: "-81.1986"
        }, {
            lat: "32.5283",
            lon: "-81.2769"
        }, {
            lat: "32.5838",
            lon: "-81.4087"
        }, {
            lat: "32.6926",
            lon: "-81.4183"
        }, {
            lat: "32.8242",
            lon: "-81.4746"
        }, {
            lat: "32.9465",
            lon: "-81.5117"
        }, {
            lat: "33.0098",
            lon: "-81.5034"
        }, {
            lat: "33.0777",
            lon: "-81.6010"
        }, {
            lat: "33.1238",
            lon: "-81.7122"
        }, {
            lat: "33.2065",
            lon: "-81.8289"
        }, {
            lat: "33.3443",
            lon: "-81.9319"
        }, {
            lat: "33.4830",
            lon: "-82.0280"
        }, {
            lat: "33.5860",
            lon: "-82.1475"
        }, {
            lat: "33.6878",
            lon: "-82.2437"
        }, {
            lat: "33.7609",
            lon: "-82.2437"
        }, {
            lat: "33.8305",
            lon: "-82.3576"
        }, {
            lat: "33.9308",
            lon: "-82.5018"
        }, {
            lat: "33.9650",
            lon: "-82.5471"
        }, {
            lat: "34.0947",
            lon: "-82.6625"
        }, {
            lat: "34.1664",
            lon: "-82.7216"
        }, {
            lat: "34.3434",
            lon: "-82.7930"
        }, {
            lat: "34.4647",
            lon: "-82.8905"
        }, {
            lat: "34.4760",
            lon: "-82.9893"
        }, {
            lat: "34.5281",
            lon: "-83.0855"
        }, {
            lat: "34.6581",
            lon: "-83.3121"
        }, {
            lat: "34.7326",
            lon: "-83.3588"
        }, {
            lat: "34.8318",
            lon: "-83.2983"
        }, {
            lat: "34.9276",
            lon: "-83.1459"
        }, {
            lat: "34.9996",
            lon: "-83.1047"
        }, {
            lat: "35.0817",
            lon: "-82.7779"
        }, {
            lat: "35.2075",
            lon: "-82.3920"
        }, {
            lat: "35.1974",
            lon: "-82.2203"
        }, {
            lat: "35.1480",
            lon: "-81.0379"
        }, {
            lat: "35.0446",
            lon: "-81.0324"
        }, {
            lat: "35.1019",
            lon: "-80.9322"
        }, {
            lat: "34.9344",
            lon: "-80.7811"
        }, {
            lat: "34.8194",
            lon: "-80.7948"
        }, {
            lat: "34.8048",
            lon: "-79.6756"
        }, {
            lat: "34.2016",
            lon: "-78.9560"
        }, {
            lat: "33.7951",
            lon: "-78.4836"
        }, {
            lat: "33.6489",
            lon: "-78.7871"
        }, {
            lat: "33.2019",
            lon: "-79.0837"
        }, {
            lat: "32.7607",
            lon: "-79.4476"
        }, {
            lat: "32.5225",
            lon: "-79.8116"
        }, {
            lat: "32.3556",
            lon: "-80.1508"
        }, {
            lat: "32.2012",
            lon: "-80.4240"
        }, {
            lat: "32.0500",
            lon: "-80.7001"
        }]
    }, {
        name: "South Dakota",
        points: [{
            lat: "45.9435",
            lon: "-104.0501"
        }, {
            lat: "43.0026",
            lon: "-104.0529"
        }, {
            lat: "42.9946",
            lon: "-98.4993"
        }, {
            lat: "42.9283",
            lon: "-98.4444"
        }, {
            lat: "42.8438",
            lon: "-98.1958"
        }, {
            lat: "42.7773",
            lon: "-98.0571"
        }, {
            lat: "42.7631",
            lon: "-97.9761"
        }, {
            lat: "42.8599",
            lon: "-97.8566"
        }, {
            lat: "42.8518",
            lon: "-97.2290"
        }, {
            lat: "42.8075",
            lon: "-97.2057"
        }, {
            lat: "42.7157",
            lon: "-96.8486"
        }, {
            lat: "42.5237",
            lon: "-96.6220"
        }, {
            lat: "42.4772",
            lon: "-96.4806"
        }, {
            lat: "42.7299",
            lon: "-96.6289"
        }, {
            lat: "43.0046",
            lon: "-96.5039"
        }, {
            lat: "43.1331",
            lon: "-96.4380"
        }, {
            lat: "43.2262",
            lon: "-96.5561"
        }, {
            lat: "43.3841",
            lon: "-96.5259"
        }, {
            lat: "43.4848",
            lon: "-96.6138"
        }, {
            lat: "43.4998",
            lon: "-96.4558"
        }, {
            lat: "45.2981",
            lon: "-96.4545"
        }, {
            lat: "45.4601",
            lon: "-96.7429"
        }, {
            lat: "45.6160",
            lon: "-96.8472"
        }, {
            lat: "45.8202",
            lon: "-96.5849"
        }, {
            lat: "45.9311",
            lon: "-96.5643"
        }, {
            lat: "45.9416",
            lon: "-104.0501"
        }]
    }, {
        name: "Tennessee",
        points: [{
            lat: "36.6739",
            lon: "-88.0678"
        }, {
            lat: "36.6354",
            lon: "-87.8522"
        }, {
            lat: "36.6023",
            lon: "-83.6787"
        }, {
            lat: "36.5946",
            lon: "-81.9402"
        }, {
            lat: "36.6144",
            lon: "-81.9209"
        }, {
            lat: "36.6111",
            lon: "-81.6518"
        }, {
            lat: "36.3295",
            lon: "-81.7163"
        }, {
            lat: "36.3516",
            lon: "-81.7973"
        }, {
            lat: "36.2974",
            lon: "-81.9072"
        }, {
            lat: "36.1212",
            lon: "-82.0308"
        }, {
            lat: "36.1024",
            lon: "-82.1255"
        }, {
            lat: "36.1434",
            lon: "-82.1475"
        }, {
            lat: "36.1323",
            lon: "-82.2450"
        }, {
            lat: "36.1168",
            lon: "-82.3521"
        }, {
            lat: "36.0702",
            lon: "-82.4167"
        }, {
            lat: "35.9669",
            lon: "-82.5389"
        }, {
            lat: "35.9702",
            lon: "-82.6076"
        }, {
            lat: "36.0602",
            lon: "-82.6378"
        }, {
            lat: "35.9925",
            lon: "-82.7751"
        }, {
            lat: "35.9169",
            lon: "-82.8177"
        }, {
            lat: "35.8623",
            lon: "-82.9042"
        }, {
            lat: "35.7755",
            lon: "-83.0017"
        }, {
            lat: "35.7131",
            lon: "-83.2393"
        }, {
            lat: "35.5635",
            lon: "-83.4961"
        }, {
            lat: "35.5501",
            lon: "-83.6938"
        }, {
            lat: "35.5233",
            lon: "-83.8284"
        }, {
            lat: "35.5065",
            lon: "-83.8847"
        }, {
            lat: "35.4014",
            lon: "-84.0248"
        }, {
            lat: "35.2905",
            lon: "-84.0276"
        }, {
            lat: "35.2322",
            lon: "-84.1113"
        }, {
            lat: "35.2624",
            lon: "-84.2294"
        }, {
            lat: "35.2198",
            lon: "-84.2926"
        }, {
            lat: "34.9884",
            lon: "-84.3201"
        }, {
            lat: "34.9996",
            lon: "-90.3131"
        }, {
            lat: "35.1233",
            lon: "-90.2843"
        }, {
            lat: "35.1379",
            lon: "-90.1758"
        }, {
            lat: "35.1985",
            lon: "-90.1112"
        }, {
            lat: "35.2849",
            lon: "-90.1524"
        }, {
            lat: "35.4372",
            lon: "-90.1346"
        }, {
            lat: "35.5568",
            lon: "-90.0192"
        }, {
            lat: "35.7343",
            lon: "-89.9547"
        }, {
            lat: "35.8579",
            lon: "-89.7638"
        }, {
            lat: "35.9180",
            lon: "-89.6635"
        }, {
            lat: "35.9947",
            lon: "-89.7130"
        }, {
            lat: "36.0902",
            lon: "-89.6759"
        }, {
            lat: "36.1279",
            lon: "-89.5894"
        }, {
            lat: "36.1856",
            lon: "-89.6484"
        }, {
            lat: "36.2343",
            lon: "-89.7006"
        }, {
            lat: "36.2531",
            lon: "-89.5331"
        }, {
            lat: "36.2996",
            lon: "-89.6210"
        }, {
            lat: "36.3494",
            lon: "-89.5784"
        }, {
            lat: "36.3406",
            lon: "-89.5180"
        }, {
            lat: "36.4964",
            lon: "-89.5345"
        }, {
            lat: "36.5107",
            lon: "-89.3051"
        }, {
            lat: "36.4986",
            lon: "-88.1667"
        }, {
            lat: "36.4997",
            lon: "-88.0692"
        }, {
            lat: "36.6871",
            lon: "-88.0637"
        }]
    }, {
        name: "Texas",
        points: [{
            lat: "31.8659",
            lon: "-106.5715"
        }, {
            lat: "31.7504",
            lon: "-106.5042"
        }, {
            lat: "31.6242",
            lon: "-106.3092"
        }, {
            lat: "31.4638",
            lon: "-106.2103"
        }, {
            lat: "31.3912",
            lon: "-106.0181"
        }, {
            lat: "31.1846",
            lon: "-105.7874"
        }, {
            lat: "31.0012",
            lon: "-105.5663"
        }, {
            lat: "30.8456",
            lon: "-105.4015"
        }, {
            lat: "30.6462",
            lon: "-105.0032"
        }, {
            lat: "30.3847",
            lon: "-104.8521"
        }, {
            lat: "30.2591",
            lon: "-104.7437"
        }, {
            lat: "30.0738",
            lon: "-104.6915"
        }, {
            lat: "29.9169",
            lon: "-104.6777"
        }, {
            lat: "29.7644",
            lon: "-104.5679"
        }, {
            lat: "29.6475",
            lon: "-104.5280"
        }, {
            lat: "29.5603",
            lon: "-104.4044"
        }, {
            lat: "29.4719",
            lon: "-104.2067"
        }, {
            lat: "29.3834",
            lon: "-104.1559"
        }, {
            lat: "29.2948",
            lon: "-103.9774"
        }, {
            lat: "29.2804",
            lon: "-103.9128"
        }, {
            lat: "29.2481",
            lon: "-103.8208"
        }, {
            lat: "29.1378",
            lon: "-103.5640"
        }, {
            lat: "29.0682",
            lon: "-103.4692"
        }, {
            lat: "29.0105",
            lon: "-103.3154"
        }, {
            lat: "28.9601",
            lon: "-103.1616"
        }, {
            lat: "29.0177",
            lon: "-103.0957"
        }, {
            lat: "29.1330",
            lon: "-103.0298"
        }, {
            lat: "29.2157",
            lon: "-102.8677"
        }, {
            lat: "29.2565",
            lon: "-102.8979"
        }, {
            lat: "29.3570",
            lon: "-102.8375"
        }, {
            lat: "29.4898",
            lon: "-102.8004"
        }, {
            lat: "29.6881",
            lon: "-102.7002"
        }, {
            lat: "29.7691",
            lon: "-102.5134"
        }, {
            lat: "29.7596",
            lon: "-102.3843"
        }, {
            lat: "29.8788",
            lon: "-102.3047"
        }, {
            lat: "29.7834",
            lon: "-102.1509"
        }, {
            lat: "29.7572",
            lon: "-101.7004"
        }, {
            lat: "29.7644",
            lon: "-101.4917"
        }, {
            lat: "29.6308",
            lon: "-101.2939"
        }, {
            lat: "29.5269",
            lon: "-101.2582"
        }, {
            lat: "29.3642",
            lon: "-101.0056"
        }, {
            lat: "29.3056",
            lon: "-100.9204"
        }, {
            lat: "29.1642",
            lon: "-100.7707"
        }, {
            lat: "29.0946",
            lon: "-100.7007"
        }, {
            lat: "28.9012",
            lon: "-100.6306"
        }, {
            lat: "28.6593",
            lon: "-100.4974"
        }, {
            lat: "28.4675",
            lon: "-100.3601"
        }, {
            lat: "28.2778",
            lon: "-100.2969"
        }, {
            lat: "28.1882",
            lon: "-100.1733"
        }, {
            lat: "28.0526",
            lon: "-100.0195"
        }, {
            lat: "27.9435",
            lon: "-99.9344"
        }, {
            lat: "27.7638",
            lon: "-99.8438"
        }, {
            lat: "27.6641",
            lon: "-99.7119"
        }, {
            lat: "27.4839",
            lon: "-99.4812"
        }, {
            lat: "27.3059",
            lon: "-99.5375"
        }, {
            lat: "27.1948",
            lon: "-99.4290"
        }, {
            lat: "27.0175",
            lon: "-99.4455"
        }, {
            lat: "26.8829",
            lon: "-99.3164"
        }, {
            lat: "26.6867",
            lon: "-99.2065"
        }, {
            lat: "26.4116",
            lon: "-99.0967"
        }, {
            lat: "26.3574",
            lon: "-98.8138"
        }, {
            lat: "26.2257",
            lon: "-98.6668"
        }, {
            lat: "26.2343",
            lon: "-98.5474"
        }, {
            lat: "26.1357",
            lon: "-98.3276"
        }, {
            lat: "26.0457",
            lon: "-98.1697"
        }, {
            lat: "26.0518",
            lon: "-97.9143"
        }, {
            lat: "26.0050",
            lon: "-97.6643"
        }, {
            lat: "25.8419",
            lon: "-97.4020"
        }, {
            lat: "25.9074",
            lon: "-97.3526"
        }, {
            lat: "25.9679",
            lon: "-97.0148"
        }, {
            lat: "26.1789",
            lon: "-97.0697"
        }, {
            lat: "26.8253",
            lon: "-97.2249"
        }, {
            lat: "27.4230",
            lon: "-97.0752"
        }, {
            lat: "28.0599",
            lon: "-96.6096"
        }, {
            lat: "28.4228",
            lon: "-95.9285"
        }, {
            lat: "28.7568",
            lon: "-95.3036"
        }, {
            lat: "29.0742",
            lon: "-94.7296"
        }, {
            lat: "29.3810",
            lon: "-94.3355"
        }, {
            lat: "29.6021",
            lon: "-93.8205"
        }, {
            lat: "29.8013",
            lon: "-93.9317"
        }, {
            lat: "29.9157",
            lon: "-93.8136"
        }, {
            lat: "30.0489",
            lon: "-93.7230"
        }, {
            lat: "30.1214",
            lon: "-93.6996"
        }, {
            lat: "30.2021",
            lon: "-93.7216"
        }, {
            lat: "30.2792",
            lon: "-93.7038"
        }, {
            lat: "30.3278",
            lon: "-93.7628"
        }, {
            lat: "30.3835",
            lon: "-93.7587"
        }, {
            lat: "30.4380",
            lon: "-93.7010"
        }, {
            lat: "30.5079",
            lon: "-93.7024"
        }, {
            lat: "30.5362",
            lon: "-93.7299"
        }, {
            lat: "30.6296",
            lon: "-93.6694"
        }, {
            lat: "30.7466",
            lon: "-93.6090"
        }, {
            lat: "30.8114",
            lon: "-93.5527"
        }, {
            lat: "30.8834",
            lon: "-93.5747"
        }, {
            lat: "30.9376",
            lon: "-93.5307"
        }, {
            lat: "31.0318",
            lon: "-93.5074"
        }, {
            lat: "31.0812",
            lon: "-93.5266"
        }, {
            lat: "31.1787",
            lon: "-93.5335"
        }, {
            lat: "31.1670",
            lon: "-93.5980"
        }, {
            lat: "31.3055",
            lon: "-93.6832"
        }, {
            lat: "31.3830",
            lon: "-93.6708"
        }, {
            lat: "31.4369",
            lon: "-93.6887"
        }, {
            lat: "31.5107",
            lon: "-93.7202"
        }, {
            lat: "31.5820",
            lon: "-93.8315"
        }, {
            lat: "31.6440",
            lon: "-93.8123"
        }, {
            lat: "31.7188",
            lon: "-93.8232"
        }, {
            lat: "31.7936",
            lon: "-93.8342"
        }, {
            lat: "31.8309",
            lon: "-93.8782"
        }, {
            lat: "31.8869",
            lon: "-93.9221"
        }, {
            lat: "31.9335",
            lon: "-93.9661"
        }, {
            lat: "32.0081",
            lon: "-94.0430"
        }, {
            lat: "33.4681",
            lon: "-94.0430"
        }, {
            lat: "33.5414",
            lon: "-94.0430"
        }, {
            lat: "33.5689",
            lon: "-94.1528"
        }, {
            lat: "33.5872",
            lon: "-94.1968"
        }, {
            lat: "33.5872",
            lon: "-94.2627"
        }, {
            lat: "33.5689",
            lon: "-94.3176"
        }, {
            lat: "33.5597",
            lon: "-94.3945"
        }, {
            lat: "33.5780",
            lon: "-94.4275"
        }, {
            lat: "33.6055",
            lon: "-94.4275"
        }, {
            lat: "33.6421",
            lon: "-94.4495"
        }, {
            lat: "33.6329",
            lon: "-94.4879"
        }, {
            lat: "33.6421",
            lon: "-94.5236"
        }, {
            lat: "33.6695",
            lon: "-94.6637"
        }, {
            lat: "33.7061",
            lon: "-94.7461"
        }, {
            lat: "33.7791",
            lon: "-94.8999"
        }, {
            lat: "33.8818",
            lon: "-95.0757"
        }, {
            lat: "33.9251",
            lon: "-95.1526"
        }, {
            lat: "33.9604",
            lon: "-95.2254"
        }, {
            lat: "33.8750",
            lon: "-95.2858"
        }, {
            lat: "33.8841",
            lon: "-95.5399"
        }, {
            lat: "33.8887",
            lon: "-95.7568"
        }, {
            lat: "33.8408",
            lon: "-95.8420"
        }, {
            lat: "33.8556",
            lon: "-96.0274"
        }, {
            lat: "33.6901",
            lon: "-96.3528"
        }, {
            lat: "33.8442",
            lon: "-96.6179"
        }, {
            lat: "33.8898",
            lon: "-96.5836"
        }, {
            lat: "33.8955",
            lon: "-96.6673"
        }, {
            lat: "33.8179",
            lon: "-96.7538"
        }, {
            lat: "33.8613",
            lon: "-96.8335"
        }, {
            lat: "33.8613",
            lon: "-96.8774"
        }, {
            lat: "33.9388",
            lon: "-96.9159"
        }, {
            lat: "33.7392",
            lon: "-97.0917"
        }, {
            lat: "33.7449",
            lon: "-97.1645"
        }, {
            lat: "33.8978",
            lon: "-97.2180"
        }, {
            lat: "33.8225",
            lon: "-97.3746"
        }, {
            lat: "33.8305",
            lon: "-97.4611"
        }, {
            lat: "33.8761",
            lon: "-97.4460"
        }, {
            lat: "33.9798",
            lon: "-97.6945"
        }, {
            lat: "33.8476",
            lon: "-97.8648"
        }, {
            lat: "33.8978",
            lon: "-97.9651"
        }, {
            lat: "34.0299",
            lon: "-98.0983"
        }, {
            lat: "34.1141",
            lon: "-98.1752"
        }, {
            lat: "34.1425",
            lon: "-98.3743"
        }, {
            lat: "34.0640",
            lon: "-98.4773"
        }, {
            lat: "34.1209",
            lon: "-98.5529"
        }, {
            lat: "34.1232",
            lon: "-98.7520"
        }, {
            lat: "34.2095",
            lon: "-98.9539"
        }, {
            lat: "34.2073",
            lon: "-99.0637"
        }, {
            lat: "34.2141",
            lon: "-99.1832"
        }, {
            lat: "34.3593",
            lon: "-99.2505"
        }, {
            lat: "34.4613",
            lon: "-99.3823"
        }, {
            lat: "34.3774",
            lon: "-99.4318"
        }, {
            lat: "34.4160",
            lon: "-99.5718"
        }, {
            lat: "34.3706",
            lon: "-99.6158"
        }, {
            lat: "34.4726",
            lon: "-99.8094"
        }, {
            lat: "34.5631",
            lon: "-99.9934"
        }, {
            lat: "36.4975",
            lon: "-100.0017"
        }, {
            lat: "36.5008",
            lon: "-103.0408"
        }, {
            lat: "32.0011",
            lon: "-103.0655"
        }, {
            lat: "32.0023",
            lon: "-106.6168"
        }]
    }, {
        name: "Utah",
        points: [{
            lat: "36.9982",
            lon: "-114.0491"
        }, {
            lat: "37.0026",
            lon: "-109.0462"
        }, {
            lat: "40.9986",
            lon: "-109.0503"
        }, {
            lat: "41.0006",
            lon: "-111.0471"
        }, {
            lat: "41.9993",
            lon: "-111.0498"
        }, {
            lat: "41.9901",
            lon: "-114.0395"
        }, {
            lat: "37.0015",
            lon: "-114.0504"
        }]
    }, {
        name: "Virginia",
        points: [{
            lat: "36.6017",
            lon: "-83.6753"
        }, {
            lat: "36.6519",
            lon: "-83.5613"
        }, {
            lat: "36.6673",
            lon: "-83.4432"
        }, {
            lat: "36.7108",
            lon: "-83.3080"
        }, {
            lat: "36.7389",
            lon: "-83.1974"
        }, {
            lat: "36.7433",
            lon: "-83.1363"
        }, {
            lat: "36.8032",
            lon: "-83.1047"
        }, {
            lat: "36.8302",
            lon: "-83.1033"
        }, {
            lat: "36.8544",
            lon: "-83.0704"
        }, {
            lat: "36.8478",
            lon: "-83.0127"
        }, {
            lat: "36.9839",
            lon: "-82.8534"
        }, {
            lat: "37.0086",
            lon: "-82.7971"
        }, {
            lat: "37.0442",
            lon: "-82.7360"
        }, {
            lat: "37.2664",
            lon: "-82.3494"
        }, {
            lat: "37.3046",
            lon: "-82.3027"
        }, {
            lat: "37.5054",
            lon: "-82.0136"
        }, {
            lat: "37.5380",
            lon: "-81.9681"
        }, {
            lat: "37.5139",
            lon: "-81.9259"
        }, {
            lat: "37.4889",
            lon: "-81.9707"
        }, {
            lat: "37.4563",
            lon: "-81.9800"
        }, {
            lat: "37.4389",
            lon: "-81.9374"
        }, {
            lat: "37.3592",
            lon: "-81.9319"
        }, {
            lat: "37.3134",
            lon: "-81.8619"
        }, {
            lat: "37.2872",
            lon: "-81.7987"
        }, {
            lat: "37.2424",
            lon: "-81.7259"
        }, {
            lat: "37.2008",
            lon: "-81.6792"
        }, {
            lat: "37.2083",
            lon: "-81.5549"
        }, {
            lat: "37.2588",
            lon: "-81.4988"
        }, {
            lat: "37.2456",
            lon: "-81.4856"
        }, {
            lat: "37.2742",
            lon: "-81.4367"
        }, {
            lat: "37.3243",
            lon: "-81.3675"
        }, {
            lat: "37.2653",
            lon: "-81.2741"
        }, {
            lat: "37.2719",
            lon: "-81.1560"
        }, {
            lat: "37.3025",
            lon: "-80.9802"
        }, {
            lat: "37.3396",
            lon: "-80.8566"
        }, {
            lat: "37.3876",
            lon: "-80.8786"
        }, {
            lat: "37.4247",
            lon: "-80.8511"
        }, {
            lat: "37.3702",
            lon: "-80.7715"
        }, {
            lat: "37.4749",
            lon: "-80.5518"
        }, {
            lat: "37.4792",
            lon: "-80.5133"
        }, {
            lat: "37.4247",
            lon: "-80.4803"
        }, {
            lat: "37.5097",
            lon: "-80.3018"
        }, {
            lat: "37.5359",
            lon: "-80.2798"
        }, {
            lat: "37.5380",
            lon: "-80.3293"
        }, {
            lat: "37.6316",
            lon: "-80.2249"
        }, {
            lat: "37.6903",
            lon: "-80.3018"
        }, {
            lat: "37.7251",
            lon: "-80.2551"
        }, {
            lat: "37.7707",
            lon: "-80.2551"
        }, {
            lat: "37.8347",
            lon: "-80.1961"
        }, {
            lat: "37.8749",
            lon: "-80.1508"
        }, {
            lat: "38.0394",
            lon: "-79.9722"
        }, {
            lat: "38.1302",
            lon: "-79.9448"
        }, {
            lat: "38.1972",
            lon: "-79.9063"
        }, {
            lat: "38.2684",
            lon: "-79.7882"
        }, {
            lat: "38.3093",
            lon: "-79.8129"
        }, {
            lat: "38.3589",
            lon: "-79.7662"
        }, {
            lat: "38.3513",
            lon: "-79.7401"
        }, {
            lat: "38.3869",
            lon: "-79.7333"
        }, {
            lat: "38.4321",
            lon: "-79.6893"
        }, {
            lat: "38.4987",
            lon: "-79.6948"
        }, {
            lat: "38.5857",
            lon: "-79.6495"
        }, {
            lat: "38.5492",
            lon: "-79.5328"
        }, {
            lat: "38.4557",
            lon: "-79.4724"
        }, {
            lat: "38.4149",
            lon: "-79.3103"
        }, {
            lat: "38.5138",
            lon: "-79.2087"
        }, {
            lat: "38.6576",
            lon: "-79.1016"
        }, {
            lat: "38.6941",
            lon: "-79.0851"
        }, {
            lat: "38.7112",
            lon: "-79.1016"
        }, {
            lat: "38.7712",
            lon: "-79.0576"
        }, {
            lat: "38.7926",
            lon: "-79.0604"
        }, {
            lat: "38.7926",
            lon: "-79.0247"
        }, {
            lat: "38.8504",
            lon: "-78.9944"
        }, {
            lat: "38.7637",
            lon: "-78.8736"
        }, {
            lat: "38.8857",
            lon: "-78.7830"
        }, {
            lat: "38.9327",
            lon: "-78.7198"
        }, {
            lat: "38.9071",
            lon: "-78.7129"
        }, {
            lat: "38.9850",
            lon: "-78.6291"
        }, {
            lat: "38.9658",
            lon: "-78.6044"
        }, {
            lat: "39.0170",
            lon: "-78.5522"
        }, {
            lat: "39.0384",
            lon: "-78.5770"
        }, {
            lat: "39.0938",
            lon: "-78.5083"
        }, {
            lat: "39.1492",
            lon: "-78.4314"
        }, {
            lat: "39.1684",
            lon: "-78.4039"
        }, {
            lat: "39.1939",
            lon: "-78.4314"
        }, {
            lat: "39.3470",
            lon: "-78.3380"
        }, {
            lat: "39.3853",
            lon: "-78.3380"
        }, {
            lat: "39.4659",
            lon: "-78.3469"
        }, {
            lat: "39.2283",
            lon: "-77.9744"
        }, {
            lat: "39.1338",
            lon: "-77.8302"
        }, {
            lat: "39.3130",
            lon: "-77.7355"
        }, {
            lat: "39.3213",
            lon: "-77.7090"
        }, {
            lat: "39.3043",
            lon: "-77.6218"
        }, {
            lat: "39.3067",
            lon: "-77.5686"
        }, {
            lat: "39.2248",
            lon: "-77.4567"
        }, {
            lat: "39.1543",
            lon: "-77.5226"
        }, {
            lat: "39.1277",
            lon: "-77.5243"
        }, {
            lat: "39.0914",
            lon: "-77.4687"
        }, {
            lat: "39.0720",
            lon: "-77.4485"
        }, {
            lat: "39.0634",
            lon: "-77.3427"
        }, {
            lat: "39.0456",
            lon: "-77.2936"
        }, {
            lat: "39.0168",
            lon: "-77.2459"
        }, {
            lat: "38.9829",
            lon: "-77.2445"
        }, {
            lat: "38.9680",
            lon: "-77.1834"
        }, {
            lat: "38.9250",
            lon: "-77.1120"
        }, {
            lat: "38.8798",
            lon: "-77.0464"
        }, {
            lat: "38.7538",
            lon: "-77.0444"
        }, {
            lat: "38.7142",
            lon: "-77.0409"
        }, {
            lat: "38.6635",
            lon: "-77.1312"
        }, {
            lat: "38.6319",
            lon: "-77.1285"
        }, {
            lat: "38.5935",
            lon: "-77.2456"
        }, {
            lat: "38.4547",
            lon: "-77.3094"
        }, {
            lat: "38.3904",
            lon: "-77.3046"
        }, {
            lat: "38.3500",
            lon: "-77.2188"
        }, {
            lat: "38.4041",
            lon: "-77.0622"
        }, {
            lat: "38.4256",
            lon: "-77.0265"
        }, {
            lat: "38.3039",
            lon: "-76.9826"
        }, {
            lat: "38.2155",
            lon: "-76.8851"
        }, {
            lat: "38.1745",
            lon: "-76.5926"
        }, {
            lat: "37.9496",
            lon: "-76.2424"
        }, {
            lat: "37.9561",
            lon: "-76.0501"
        }, {
            lat: "37.9474",
            lon: "-75.9416"
        }, {
            lat: "37.9085",
            lon: "-75.9512"
        }, {
            lat: "37.9139",
            lon: "-75.8002"
        }, {
            lat: "37.9539",
            lon: "-75.6931"
        }, {
            lat: "37.9474",
            lon: "-75.6477"
        }, {
            lat: "37.9962",
            lon: "-75.6258"
        }, {
            lat: "38.0091",
            lon: "-75.4596"
        }, {
            lat: "38.0373",
            lon: "-74.9707"
        }, {
            lat: "37.3625",
            lon: "-75.5777"
        }, {
            lat: "36.8994",
            lon: "-75.8180"
        }, {
            lat: "36.5516",
            lon: "-75.8043"
        }, {
            lat: "36.5516",
            lon: "-76.1476"
        }, {
            lat: "36.5516",
            lon: "-76.8617"
        }, {
            lat: "36.5516",
            lon: "-76.9180"
        }, {
            lat: "36.5438",
            lon: "-76.9180"
        }, {
            lat: "36.5505",
            lon: "-77.1803"
        }, {
            lat: "36.5449",
            lon: "-77.5278"
        }, {
            lat: "36.5427",
            lon: "-80.2730"
        }, {
            lat: "36.5571",
            lon: "-80.5971"
        }, {
            lat: "36.5626",
            lon: "-80.7248"
        }, {
            lat: "36.5593",
            lon: "-80.8511"
        }, {
            lat: "36.5681",
            lon: "-81.1066"
        }, {
            lat: "36.5813",
            lon: "-81.4746"
        }, {
            lat: "36.5802",
            lon: "-81.5007"
        }, {
            lat: "36.5902",
            lon: "-81.6792"
        }, {
            lat: "36.6122",
            lon: "-81.6476"
        }, {
            lat: "36.6177",
            lon: "-81.9237"
        }, {
            lat: "36.5935",
            lon: "-81.9360"
        }, {
            lat: "36.5957",
            lon: "-82.3961"
        }, {
            lat: "36.5935",
            lon: "-82.9344"
        }, {
            lat: "36.5957",
            lon: "-83.2654"
        }, {
            lat: "36.6023",
            lon: "-83.6746"
        }]
    }, {
        name: "Vermont",
        points: [{
            lat: "45.0104",
            lon: "-73.3427"
        }, {
            lat: "45.0134",
            lon: "-73.1827"
        }, {
            lat: "45.0153",
            lon: "-72.7432"
        }, {
            lat: "45.0134",
            lon: "-72.6100"
        }, {
            lat: "45.0075",
            lon: "-72.5551"
        }, {
            lat: "45.0090",
            lon: "-72.4562"
        }, {
            lat: "45.0037",
            lon: "-72.3113"
        }, {
            lat: "45.0066",
            lon: "-72.0964"
        }, {
            lat: "45.0070",
            lon: "-71.9131"
        }, {
            lat: "45.0138",
            lon: "-71.5636"
        }, {
            lat: "45.0138",
            lon: "-71.5059"
        }, {
            lat: "44.9748",
            lon: "-71.5294"
        }, {
            lat: "44.9123",
            lon: "-71.4949"
        }, {
            lat: "44.8296",
            lon: "-71.5567"
        }, {
            lat: "44.7506",
            lon: "-71.6281"
        }, {
            lat: "44.7077",
            lon: "-71.6061"
        }, {
            lat: "44.6481",
            lon: "-71.5677"
        }, {
            lat: "44.5817",
            lon: "-71.5388"
        }, {
            lat: "44.5533",
            lon: "-71.6006"
        }, {
            lat: "44.5308",
            lon: "-71.5746"
        }, {
            lat: "44.4955",
            lon: "-71.5883"
        }, {
            lat: "44.4504",
            lon: "-71.6556"
        }, {
            lat: "44.4093",
            lon: "-71.7146"
        }, {
            lat: "44.3975",
            lon: "-71.7957"
        }, {
            lat: "44.3563",
            lon: "-71.8163"
        }, {
            lat: "44.3327",
            lon: "-71.8698"
        }, {
            lat: "44.3484",
            lon: "-71.9138"
        }, {
            lat: "44.3386",
            lon: "-71.9865"
        }, {
            lat: "44.3052",
            lon: "-72.0346"
        }, {
            lat: "44.2432",
            lon: "-72.0428"
        }, {
            lat: "44.1930",
            lon: "-72.0662"
        }, {
            lat: "44.1349",
            lon: "-72.0360"
        }, {
            lat: "44.0698",
            lon: "-72.0580"
        }, {
            lat: "44.0017",
            lon: "-72.1101"
        }, {
            lat: "43.9671",
            lon: "-72.0937"
        }, {
            lat: "43.9088",
            lon: "-72.1252"
        }, {
            lat: "43.8682",
            lon: "-72.1733"
        }, {
            lat: "43.7899",
            lon: "-72.1994"
        }, {
            lat: "43.7899",
            lon: "-72.1994"
        }, {
            lat: "43.7384",
            lon: "-72.2392"
        }, {
            lat: "43.7056",
            lon: "-72.3010"
        }, {
            lat: "43.6391",
            lon: "-72.3271"
        }, {
            lat: "43.5893",
            lon: "-72.3436"
        }, {
            lat: "43.5814",
            lon: "-72.3793"
        }, {
            lat: "43.5027",
            lon: "-72.3972"
        }, {
            lat: "43.4988",
            lon: "-72.3807"
        }, {
            lat: "43.4150",
            lon: "-72.3999"
        }, {
            lat: "43.3601",
            lon: "-72.4123"
        }, {
            lat: "43.3591",
            lon: "-72.3903"
        }, {
            lat: "43.3282",
            lon: "-72.4081"
        }, {
            lat: "43.2762",
            lon: "-72.3999"
        }, {
            lat: "43.2342",
            lon: "-72.4370"
        }, {
            lat: "43.1852",
            lon: "-72.4493"
        }, {
            lat: "43.1311",
            lon: "-72.4480"
        }, {
            lat: "43.0679",
            lon: "-72.4507"
        }, {
            lat: "43.0067",
            lon: "-72.4438"
        }, {
            lat: "42.9846",
            lon: "-72.4699"
        }, {
            lat: "42.9645",
            lon: "-72.5276"
        }, {
            lat: "42.8951",
            lon: "-72.5331"
        }, {
            lat: "42.8639",
            lon: "-72.5633"
        }, {
            lat: "42.7863",
            lon: "-72.5098"
        }, {
            lat: "42.7652",
            lon: "-72.5166"
        }, {
            lat: "42.7541",
            lon: "-72.4741"
        }, {
            lat: "42.7289",
            lon: "-72.4590"
        }, {
            lat: "42.7465",
            lon: "-73.2761"
        }, {
            lat: "42.8025",
            lon: "-73.2912"
        }, {
            lat: "42.8357",
            lon: "-73.2850"
        }, {
            lat: "43.0679",
            lon: "-73.2678"
        }, {
            lat: "43.5022",
            lon: "-73.2472"
        }, {
            lat: "43.5615",
            lon: "-73.2561"
        }, {
            lat: "43.5774",
            lon: "-73.2939"
        }, {
            lat: "43.6271",
            lon: "-73.3049"
        }, {
            lat: "43.6271",
            lon: "-73.3557"
        }, {
            lat: "43.5675",
            lon: "-73.3976"
        }, {
            lat: "43.5883",
            lon: "-73.4326"
        }, {
            lat: "43.6351",
            lon: "-73.4285"
        }, {
            lat: "43.6684",
            lon: "-73.4079"
        }, {
            lat: "43.7031",
            lon: "-73.3907"
        }, {
            lat: "43.7701",
            lon: "-73.3516"
        }, {
            lat: "43.8207",
            lon: "-73.3928"
        }, {
            lat: "43.8533",
            lon: "-73.3832"
        }, {
            lat: "43.9033",
            lon: "-73.3969"
        }, {
            lat: "43.9365",
            lon: "-73.4086"
        }, {
            lat: "43.9795",
            lon: "-73.4134"
        }, {
            lat: "44.0427",
            lon: "-73.4381"
        }, {
            lat: "44.1058",
            lon: "-73.4141"
        }, {
            lat: "44.1921",
            lon: "-73.3928"
        }, {
            lat: "44.2393",
            lon: "-73.3427"
        }, {
            lat: "44.2467",
            lon: "-73.3186"
        }, {
            lat: "44.3484",
            lon: "-73.3406"
        }, {
            lat: "44.3690",
            lon: "-73.3385"
        }, {
            lat: "44.4328",
            lon: "-73.2946"
        }, {
            lat: "44.5367",
            lon: "-73.3296"
        }, {
            lat: "44.5919",
            lon: "-73.3832"
        }, {
            lat: "44.6569",
            lon: "-73.3770"
        }, {
            lat: "44.7477",
            lon: "-73.3681"
        }, {
            lat: "44.7857",
            lon: "-73.3317"
        }, {
            lat: "44.8043",
            lon: "-73.3324"
        }, {
            lat: "44.8398",
            lon: "-73.3818"
        }, {
            lat: "44.9040",
            lon: "-73.3564"
        }, {
            lat: "44.9181",
            lon: "-73.3392"
        }, {
            lat: "44.9643",
            lon: "-73.3372"
        }, {
            lat: "44.9799",
            lon: "-73.3537"
        }, {
            lat: "45.0046",
            lon: "-73.3447"
        }, {
            lat: "45.0109",
            lon: "-73.3447"
        }, {
            lat: "45.0104",
            lon: "-73.3426"
        }]
    }, {
        name: "Washington",
        points: [{
            lat: "49.0023",
            lon: "-123.3208"
        }, {
            lat: "49.0027",
            lon: "-123.0338"
        }, {
            lat: "49.0018",
            lon: "-122.0650"
        }, {
            lat: "48.9973",
            lon: "-121.7491"
        }, {
            lat: "48.9991",
            lon: "-121.5912"
        }, {
            lat: "49.0009",
            lon: "-119.6082"
        }, {
            lat: "49.0005",
            lon: "-118.0378"
        }, {
            lat: "48.9996",
            lon: "-117.0319"
        }, {
            lat: "47.9614",
            lon: "-117.0415"
        }, {
            lat: "46.5060",
            lon: "-117.0394"
        }, {
            lat: "46.4274",
            lon: "-117.0394"
        }, {
            lat: "46.3498",
            lon: "-117.0621"
        }, {
            lat: "46.3384",
            lon: "-117.0277"
        }, {
            lat: "46.2848",
            lon: "-116.9879"
        }, {
            lat: "46.2388",
            lon: "-116.9577"
        }, {
            lat: "46.2022",
            lon: "-116.9659"
        }, {
            lat: "46.1722",
            lon: "-116.9254"
        }, {
            lat: "46.1432",
            lon: "-116.9357"
        }, {
            lat: "46.1009",
            lon: "-116.9584"
        }, {
            lat: "46.0785",
            lon: "-116.9762"
        }, {
            lat: "46.0537",
            lon: "-116.9433"
        }, {
            lat: "45.9960",
            lon: "-116.9165"
        }, {
            lat: "46.0008",
            lon: "-118.0330"
        }, {
            lat: "45.9998",
            lon: "-118.9867"
        }, {
            lat: "45.9320",
            lon: "-119.1302"
        }, {
            lat: "45.9278",
            lon: "-119.1708"
        }, {
            lat: "45.9402",
            lon: "-119.2559"
        }, {
            lat: "45.9354",
            lon: "-119.3047"
        }, {
            lat: "45.9220",
            lon: "-119.3644"
        }, {
            lat: "45.9172",
            lon: "-119.4386"
        }, {
            lat: "45.9067",
            lon: "-119.4894"
        }, {
            lat: "45.9249",
            lon: "-119.5724"
        }, {
            lat: "45.9196",
            lon: "-119.6013"
        }, {
            lat: "45.8565",
            lon: "-119.6700"
        }, {
            lat: "45.8479",
            lon: "-119.8052"
        }, {
            lat: "45.8278",
            lon: "-119.9096"
        }, {
            lat: "45.8245",
            lon: "-119.9652"
        }, {
            lat: "45.7852",
            lon: "-120.0710"
        }, {
            lat: "45.7623",
            lon: "-120.1705"
        }, {
            lat: "45.7258",
            lon: "-120.2110"
        }, {
            lat: "45.7057",
            lon: "-120.3628"
        }, {
            lat: "45.6951",
            lon: "-120.4829"
        }, {
            lat: "45.7469",
            lon: "-120.5942"
        }, {
            lat: "45.7460",
            lon: "-120.6340"
        }, {
            lat: "45.7143",
            lon: "-120.6924"
        }, {
            lat: "45.6721",
            lon: "-120.8558"
        }, {
            lat: "45.6409",
            lon: "-120.9142"
        }, {
            lat: "45.6572",
            lon: "-120.9471"
        }, {
            lat: "45.6419",
            lon: "-120.9787"
        }, {
            lat: "45.6529",
            lon: "-121.0645"
        }, {
            lat: "45.6078",
            lon: "-121.1469"
        }, {
            lat: "45.6083",
            lon: "-121.1847"
        }, {
            lat: "45.6721",
            lon: "-121.2177"
        }, {
            lat: "45.7057",
            lon: "-121.3392"
        }, {
            lat: "45.6932",
            lon: "-121.4010"
        }, {
            lat: "45.7263",
            lon: "-121.5328"
        }, {
            lat: "45.7091",
            lon: "-121.6145"
        }, {
            lat: "45.6947",
            lon: "-121.7361"
        }, {
            lat: "45.7067",
            lon: "-121.8095"
        }, {
            lat: "45.6452",
            lon: "-121.9338"
        }, {
            lat: "45.6088",
            lon: "-122.0451"
        }, {
            lat: "45.5833",
            lon: "-122.1089"
        }, {
            lat: "45.5838",
            lon: "-122.1426"
        }, {
            lat: "45.5660",
            lon: "-122.2009"
        }, {
            lat: "45.5439",
            lon: "-122.2641"
        }, {
            lat: "45.5482",
            lon: "-122.3321"
        }, {
            lat: "45.5756",
            lon: "-122.3795"
        }, {
            lat: "45.5636",
            lon: "-122.4392"
        }, {
            lat: "45.6006",
            lon: "-122.5676"
        }, {
            lat: "45.6236",
            lon: "-122.6891"
        }, {
            lat: "45.6582",
            lon: "-122.7647"
        }, {
            lat: "45.6817",
            lon: "-122.7750"
        }, {
            lat: "45.7613",
            lon: "-122.7619"
        }, {
            lat: "45.8106",
            lon: "-122.7962"
        }, {
            lat: "45.8642",
            lon: "-122.7839"
        }, {
            lat: "45.9120",
            lon: "-122.8114"
        }, {
            lat: "45.9612",
            lon: "-122.8148"
        }, {
            lat: "46.0160",
            lon: "-122.8587"
        }, {
            lat: "46.0604",
            lon: "-122.8848"
        }, {
            lat: "46.0832",
            lon: "-122.9034"
        }, {
            lat: "46.1028",
            lon: "-122.9597"
        }, {
            lat: "46.1556",
            lon: "-123.0579"
        }, {
            lat: "46.1865",
            lon: "-123.1210"
        }, {
            lat: "46.1893",
            lon: "-123.1664"
        }, {
            lat: "46.1446",
            lon: "-123.2810"
        }, {
            lat: "46.1470",
            lon: "-123.3703"
        }, {
            lat: "46.1822",
            lon: "-123.4314"
        }, {
            lat: "46.2293",
            lon: "-123.4287"
        }, {
            lat: "46.2691",
            lon: "-123.4946"
        }, {
            lat: "46.2582",
            lon: "-123.5557"
        }, {
            lat: "46.2573",
            lon: "-123.6209"
        }, {
            lat: "46.2497",
            lon: "-123.6875"
        }, {
            lat: "46.2691",
            lon: "-123.7404"
        }, {
            lat: "46.2350",
            lon: "-123.8729"
        }, {
            lat: "46.2383",
            lon: "-123.9292"
        }, {
            lat: "46.2677",
            lon: "-123.9711"
        }, {
            lat: "46.2924",
            lon: "-124.0212"
        }, {
            lat: "46.2653",
            lon: "-124.0329"
        }, {
            lat: "46.2596",
            lon: "-124.2444"
        }, {
            lat: "46.4312",
            lon: "-124.2691"
        }, {
            lat: "46.8386",
            lon: "-124.3529"
        }, {
            lat: "47.1832",
            lon: "-124.4380"
        }, {
            lat: "47.4689",
            lon: "-124.5616"
        }, {
            lat: "47.8012",
            lon: "-124.7566"
        }, {
            lat: "48.0423",
            lon: "-124.8679"
        }, {
            lat: "48.2457",
            lon: "-124.8679"
        }, {
            lat: "48.3727",
            lon: "-124.8486"
        }, {
            lat: "48.4984",
            lon: "-124.7539"
        }, {
            lat: "48.4096",
            lon: "-124.4174"
        }, {
            lat: "48.3599",
            lon: "-124.2389"
        }, {
            lat: "48.2964",
            lon: "-124.0116"
        }, {
            lat: "48.2795",
            lon: "-123.9141"
        }, {
            lat: "48.2247",
            lon: "-123.5413"
        }, {
            lat: "48.2539",
            lon: "-123.3998"
        }, {
            lat: "48.2841",
            lon: "-123.2501"
        }, {
            lat: "48.4233",
            lon: "-123.1169"
        }, {
            lat: "48.4533",
            lon: "-123.1609"
        }, {
            lat: "48.5548",
            lon: "-123.2220"
        }, {
            lat: "48.5902",
            lon: "-123.2336"
        }, {
            lat: "48.6901",
            lon: "-123.2721"
        }, {
            lat: "48.7675",
            lon: "-123.0084"
        }, {
            lat: "48.8313",
            lon: "-123.0084"
        }, {
            lat: "49.0023",
            lon: "-123.3215"
        }]
    }, {
        name: "Wisconsin",
        points: [{
            lat: "42.5116",
            lon: "-90.6303"
        }, {
            lat: "42.4954",
            lon: "-87.0241"
        }, {
            lat: "43.3721",
            lon: "-87.1477"
        }, {
            lat: "43.6838",
            lon: "-87.1230"
        }, {
            lat: "44.1694",
            lon: "-86.9911"
        }, {
            lat: "44.4828",
            lon: "-86.8579"
        }, {
            lat: "44.8792",
            lon: "-86.6876"
        }, {
            lat: "45.2343",
            lon: "-86.2523"
        }, {
            lat: "45.4418",
            lon: "-86.7535"
        }, {
            lat: "45.4438",
            lon: "-87.1024"
        }, {
            lat: "45.3531",
            lon: "-87.1724"
        }, {
            lat: "45.2401",
            lon: "-87.3193"
        }, {
            lat: "45.1995",
            lon: "-87.4100"
        }, {
            lat: "45.0784",
            lon: "-87.4443"
        }, {
            lat: "45.0987",
            lon: "-87.6379"
        }, {
            lat: "45.2217",
            lon: "-87.6956"
        }, {
            lat: "45.3367",
            lon: "-87.6462"
        }, {
            lat: "45.3869",
            lon: "-87.6956"
        }, {
            lat: "45.3425",
            lon: "-87.8549"
        }, {
            lat: "45.4813",
            lon: "-87.7945"
        }, {
            lat: "45.5679",
            lon: "-87.7945"
        }, {
            lat: "45.6764",
            lon: "-87.7876"
        }, {
            lat: "45.7934",
            lon: "-87.9936"
        }, {
            lat: "45.8077",
            lon: "-88.1145"
        }, {
            lat: "45.8728",
            lon: "-88.0733"
        }, {
            lat: "45.9521",
            lon: "-88.1982"
        }, {
            lat: "46.0122",
            lon: "-88.5498"
        }, {
            lat: "45.9970",
            lon: "-88.7036"
        }, {
            lat: "46.0380",
            lon: "-88.8451"
        }, {
            lat: "46.1389",
            lon: "-89.0909"
        }, {
            lat: "46.3412",
            lon: "-90.1195"
        }, {
            lat: "46.5664",
            lon: "-90.4147"
        }, {
            lat: "47.2876",
            lon: "-89.9615"
        }, {
            lat: "47.3100",
            lon: "-90.6578"
        }, {
            lat: "46.7079",
            lon: "-92.0352"
        }, {
            lat: "46.5928",
            lon: "-92.2948"
        }, {
            lat: "46.0761",
            lon: "-92.2975"
        }, {
            lat: "46.0132",
            lon: "-92.3579"
        }, {
            lat: "45.9769",
            lon: "-92.5227"
        }, {
            lat: "45.8135",
            lon: "-92.7466"
        }, {
            lat: "45.6140",
            lon: "-92.8564"
        }, {
            lat: "45.5477",
            lon: "-92.7754"
        }, {
            lat: "45.4293",
            lon: "-92.6587"
        }, {
            lat: "45.3029",
            lon: "-92.7136"
        }, {
            lat: "44.9648",
            lon: "-92.7466"
        }, {
            lat: "44.7877",
            lon: "-92.7686"
        }, {
            lat: "44.6530",
            lon: "-92.6422"
        }, {
            lat: "44.5504",
            lon: "-92.3552"
        }, {
            lat: "44.4652",
            lon: "-92.2632"
        }, {
            lat: "44.4024",
            lon: "-92.0654"
        }, {
            lat: "44.2580",
            lon: "-91.8745"
        }, {
            lat: "44.0600",
            lon: "-91.6383"
        }, {
            lat: "43.9612",
            lon: "-91.4941"
        }, {
            lat: "43.8296",
            lon: "-91.3184"
        }, {
            lat: "43.6440",
            lon: "-91.2524"
        }, {
            lat: "43.5167",
            lon: "-91.2305"
        }, {
            lat: "43.3342",
            lon: "-91.2085"
        }, {
            lat: "43.2932",
            lon: "-91.0547"
        }, {
            lat: "43.1651",
            lon: "-91.1865"
        }, {
            lat: "43.0257",
            lon: "-91.1536"
        }, {
            lat: "42.9082",
            lon: "-91.1426"
        }, {
            lat: "42.7692",
            lon: "-91.0547"
        }, {
            lat: "42.6915",
            lon: "-90.7910"
        }, {
            lat: "42.6340",
            lon: "-90.7031"
        }, {
            lat: "42.5096",
            lon: "-90.6303"
        }]
    }, {
        name: "West Virginia",
        points: [{
            lat: "39.7188",
            lon: "-79.4765"
        }, {
            lat: "39.2057",
            lon: "-79.4806"
        }, {
            lat: "39.4871",
            lon: "-79.0576"
        }, {
            lat: "39.4394",
            lon: "-78.9725"
        }, {
            lat: "39.6438",
            lon: "-78.7747"
        }, {
            lat: "39.5369",
            lon: "-78.6703"
        }, {
            lat: "39.5210",
            lon: "-78.5742"
        }, {
            lat: "39.5210",
            lon: "-78.4644"
        }, {
            lat: "39.6015",
            lon: "-78.4094"
        }, {
            lat: "39.6395",
            lon: "-78.3517"
        }, {
            lat: "39.6205",
            lon: "-78.2817"
        }, {
            lat: "39.6839",
            lon: "-78.2405"
        }, {
            lat: "39.6935",
            lon: "-78.1732"
        }, {
            lat: "39.5972",
            lon: "-77.8835"
        }, {
            lat: "39.4987",
            lon: "-77.7859"
        }, {
            lat: "39.3279",
            lon: "-77.7310"
        }, {
            lat: "39.1279",
            lon: "-77.8271"
        }, {
            lat: "39.4563",
            lon: "-78.3421"
        }, {
            lat: "39.3407",
            lon: "-78.3408"
        }, {
            lat: "39.1918",
            lon: "-78.4341"
        }, {
            lat: "39.1652",
            lon: "-78.4053"
        }, {
            lat: "39.0299",
            lon: "-78.5715"
        }, {
            lat: "39.0160",
            lon: "-78.5522"
        }, {
            lat: "38.8846",
            lon: "-78.7843"
        }, {
            lat: "38.7669",
            lon: "-78.8722"
        }, {
            lat: "38.8451",
            lon: "-78.9917"
        }, {
            lat: "38.7102",
            lon: "-79.0974"
        }, {
            lat: "38.6555",
            lon: "-79.1029"
        }, {
            lat: "38.4106",
            lon: "-79.3007"
        }, {
            lat: "38.4600",
            lon: "-79.4792"
        }, {
            lat: "38.5342",
            lon: "-79.5314"
        }, {
            lat: "38.5868",
            lon: "-79.6481"
        }, {
            lat: "38.4869",
            lon: "-79.6962"
        }, {
            lat: "38.4213",
            lon: "-79.6989"
        }, {
            lat: "38.3557",
            lon: "-79.7690"
        }, {
            lat: "38.2813",
            lon: "-79.7937"
        }, {
            lat: "38.1518",
            lon: "-79.9365"
        }, {
            lat: "38.0232",
            lon: "-79.9818"
        }, {
            lat: "37.8835",
            lon: "-80.1370"
        }, {
            lat: "37.7295",
            lon: "-80.2592"
        }, {
            lat: "37.6795",
            lon: "-80.2881"
        }, {
            lat: "37.6295",
            lon: "-80.2194"
        }, {
            lat: "37.5391",
            lon: "-80.3224"
        }, {
            lat: "37.5315",
            lon: "-80.2881"
        }, {
            lat: "37.4988",
            lon: "-80.3032"
        }, {
            lat: "37.4182",
            lon: "-80.4776"
        }, {
            lat: "37.4814",
            lon: "-80.5119"
        }, {
            lat: "37.3691",
            lon: "-80.7715"
        }, {
            lat: "37.4214",
            lon: "-80.8635"
        }, {
            lat: "37.3429",
            lon: "-80.8525"
        }, {
            lat: "37.2872",
            lon: "-81.0516"
        }, {
            lat: "37.2598",
            lon: "-81.2741"
        }, {
            lat: "37.3254",
            lon: "-81.3675"
        }, {
            lat: "37.2019",
            lon: "-81.5543"
        }, {
            lat: "37.1953",
            lon: "-81.6724"
        }, {
            lat: "37.2697",
            lon: "-81.7685"
        }, {
            lat: "37.3003",
            lon: "-81.8701"
        }, {
            lat: "37.3636",
            lon: "-81.9333"
        }, {
            lat: "37.4574",
            lon: "-81.9772"
        }, {
            lat: "37.4912",
            lon: "-82.0308"
        }, {
            lat: "37.6142",
            lon: "-82.1558"
        }, {
            lat: "37.8054",
            lon: "-82.3535"
        }, {
            lat: "38.0481",
            lon: "-82.5513"
        }, {
            lat: "38.1864",
            lon: "-82.6392"
        }, {
            lat: "38.3761",
            lon: "-82.5966"
        }, {
            lat: "38.4106",
            lon: "-82.4854"
        }, {
            lat: "38.4407",
            lon: "-82.3412"
        }, {
            lat: "38.5890",
            lon: "-82.2876"
        }, {
            lat: "38.5976",
            lon: "-82.1764"
        }, {
            lat: "38.7980",
            lon: "-82.2148"
        }, {
            lat: "39.0160",
            lon: "-82.0280"
        }, {
            lat: "38.9615",
            lon: "-81.9649"
        }, {
            lat: "38.8750",
            lon: "-81.8756"
        }, {
            lat: "38.9370",
            lon: "-81.7671"
        }, {
            lat: "39.0117",
            lon: "-81.7657"
        }, {
            lat: "39.0800",
            lon: "-81.7520"
        }, {
            lat: "39.1790",
            lon: "-81.7465"
        }, {
            lat: "39.2642",
            lon: "-81.5872"
        }, {
            lat: "39.3969",
            lon: "-81.4499"
        }, {
            lat: "39.3481",
            lon: "-81.3675"
        }, {
            lat: "39.4012",
            lon: "-81.2370"
        }, {
            lat: "39.4691",
            lon: "-81.1093"
        }, {
            lat: "39.5644",
            lon: "-81.0104"
        }, {
            lat: "39.6120",
            lon: "-80.9198"
        }, {
            lat: "39.6522",
            lon: "-80.8319"
        }, {
            lat: "39.8054",
            lon: "-80.8072"
        }, {
            lat: "39.8802",
            lon: "-80.7893"
        }, {
            lat: "39.8518",
            lon: "-80.7990"
        }, {
            lat: "40.0980",
            lon: "-80.7495"
        }, {
            lat: "40.2282",
            lon: "-80.7262"
        }, {
            lat: "40.3926",
            lon: "-80.6918"
        }, {
            lat: "40.5910",
            lon: "-80.6451"
        }, {
            lat: "40.6338",
            lon: "-80.5188"
        }, {
            lat: "39.7241",
            lon: "-80.5174"
        }, {
            lat: "39.7209",
            lon: "-79.4778"
        }]
    }, {
        name: "Wyoming",
        points: [{
            lat: "41.0037",
            lon: "-104.0556"
        }, {
            lat: "44.9949",
            lon: "-104.0584"
        }, {
            lat: "44.9998",
            lon: "-111.0539"
        }, {
            lat: "40.9986",
            lon: "-111.0457"
        }, {
            lat: "41.0006",
            lon: "-104.0556"
        }]
    }];
    window.dictionary = n
}(),
function() {
    function t(n) {
        for (var i, e = n.split("?")[1], r = e.split("&"), u = [], f = [], t = 0; t < r.length; t++) i = r[t].split("="), u.push(decodeURIComponent(i[0])), f.push(decodeURIComponent(i[1]));
        return {
            Keys: u,
            Values: f
        }
    }
    var n = window.table || {}, i = function(n, t, i, r) {
            var o = i.start / i.length,
                s = i.length,
                h = i.order.length > 0 ? i.order[0].column : -1,
                f, e, u;
            if (h >= 0)
                if (f = n[h], e = i.order[0].dir, r.ajax.type == "GET") u = r.ajax.url, u = u.replace(/(orderby=).*?(&)/, "orderby=" + f + "&"), u = u.replace(/(orderDirection=).*?(&)/, "orderDirection=" + e + "&"), u = u.replace(/(pagenum=).*?(&)/, "pagenum=" + o + "&"), u = u.replace(/(pagesize=).*/, "pagesize=" + s), r.ajax.url = u;
                else if (r.ajax.type == "POST") {
                var c = t.Keys.indexOf("orderby"),
                    l = t.Keys.indexOf("orderDirection"),
                    a = t.Keys.indexOf("pagenum"),
                    v = t.Keys.indexOf("pagesize");
                c >= 0 && (t.Values[c] = f);
                l >= 0 && (t.Values[l] = e);
                a >= 0 && (t.Values[a] = o);
                v >= 0 && (t.Values[v] = s)
            }
            return JSON.stringify(t)
        }, r;
    n.prepareResponseData = function(n, t, i) {
        var u, r, f;
        for (i = typeof i != "undefined" ? i : "0", u = [], r = 0; r < n.length; r++) f = n[r], u.push(t[f] || i);
        return u
    };
    n.fillDataTableNass = function(r) {
        var u = [];
        u.push({
            title: "Program",
            "class": "center"
        });
        u.push({
            title: "Year",
            "class": "center"
        });
        u.push({
            title: "Period",
            "class": "center"
        });
        u.push({
            title: "Geo level",
            "class": "center"
        });
        u.push({
            title: "State",
            "class": "center"
        });
        u.push({
            title: "State ANSI",
            "class": "center"
        });
        u.push({
            title: "Ag district",
            "class": "center"
        });
        u.push({
            title: "Ag district Code",
            "class": "center"
        });
        u.push({
            title: "County",
            "class": "center"
        });
        u.push({
            title: "County ANSI",
            "class": "center"
        });
        u.push({
            title: "Watershed code",
            "class": "center"
        });
        u.push({
            title: "Commodity",
            "class": "center"
        });
        u.push({
            title: "Data Item",
            "class": "center",
            width: "40%"
        });
        u.push({
            title: "Domain",
            "class": "center"
        });
        u.push({
            title: "Domain Category",
            "class": "center"
        });
        u.push({
            title: "Value",
            "class": "center"
        });
        u.push({
            title: "CV(%)",
            "class": "center"
        });
        var f = {}, s = globalConstants.maxGetRequestLength,
            e = "GET",
            o = [];
        r.length >= s && (e = "POST", o = t(r), r = r.substr(0, r.indexOf("?")));
        $("#nassTable").DataTable({
            columns: u,
            serverSide: !0,
            processing: !0,
            order: [
                [1, "desc"]
            ],
            language: {
                emptyTable: "No data available",
                processing: globalConstants.loadMaskGif,
                info: "Displaying _END_ of _TOTAL_ Results",
                oPaginate: {
                    sNext: '<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"><\/span>',
                    sPrevious: '<span class="glyphicon glyphicon-triangle-left" aria-hidden="true"><\/span>'
                }
            },
            fnRowCallback: function(n) {
                for (var t = 0; t < n.cells.length; ++t)(t + 1) % 2 && $(n.cells[t]).css("background-color", globalConstants.tableOddColumnColor)
            },
            columnDefs: [{
                orderable: !1,
                targets: [12]
            }],
            ajax: {
                url: r,
                cache: !0,
                type: e,
                data: function(n, t) {
                    f = {
                        draw: n.draw,
                        length: n.length,
                        start: n.start
                    };
                    return i(globalConstants.propsForTableInNass, o, n, t)
                },
                dataSrc: function(t) {
                    for (var e, u = t, r = (u || {}).data || [], o = [], i = 0; i < r.length; i++) e = n.prepareResponseData(globalConstants.propsForTableInNass, r[i]), e.push(r[i].commodity_desc + "-" + r[i].commodity_desc + "-" + r[i].class_desc + "-" + r[i].unit_desc), o.push(e);
                    return t.sEcho = f.draw, t.iTotalRecords = u.count, t.iTotalDisplayRecords = u.count, o
                }
            }
        });
        $("#apiNassTable").find("input[type=search]").addClass("form-control");
        $("#apiNassTable").find("input[type=search]").addClass("searchInput");
        $("#getDataFromApi").prop("disabled", !1);
        $("#apiDataTableLoad").css("display", "none")
    };
    n.fillDataTableArms = function(r) {
        var u = [];
        u.push({
            title: "State",
            "class": "center"
        });
        u.push({
            title: "Year",
            "class": "center"
        });
        u.push({
            title: "Subject",
            "class": "center"
        });
        u.push({
            title: "Estimate",
            "class": "center"
        });
        u.push({
            title: "RSE",
            "class": "center"
        });
        u.push({
            title: "Topic header",
            "class": "center"
        });
        u.push({
            title: "Units",
            "class": "center"
        });
        var f = {}, s = globalConstants.maxGetRequestLength,
            e = "GET",
            o = [];
        r.length >= s && (e = "POST", o = t(r), r = r.substr(0, r.indexOf("?")));
        $("#armsTable").DataTable({
            columns: u,
            serverSide: !0,
            processing: !0,
            order: [
                [5, "asc"]
            ],
            language: {
                emptyTable: "No data available",
                processing: globalConstants.loadMaskGif,
                info: "Displaying _END_ of _TOTAL_ Results",
                oPaginate: {
                    sNext: '<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"><\/span>',
                    sPrevious: '<span class="glyphicon glyphicon-triangle-left" aria-hidden="true"><\/span>'
                }
            },
            fnRowCallback: function(n) {
                for (var t = 0; t < n.cells.length; ++t)(t + 1) % 2 && $(n.cells[t]).css("background-color", globalConstants.tableOddColumnColor)
            },
            ajax: {
                url: r,
                cache: !0,
                type: e,
                data: function(n, t) {
                    f = {
                        draw: n.draw,
                        length: n.length,
                        start: n.start
                    };
                    return i(globalConstants.propsForTableInArms, o, n, t)
                },
                dataSrc: function(t) {
                    for (var o, i = t, u = (i || {}).data || [], e = [], r = 0; r < u.length; r++) o = n.prepareResponseData(globalConstants.propsForTableInArms, u[r]), e.push(o);
                    return t.sEcho = f.draw, t.iTotalRecords = i.count, t.iTotalDisplayRecords = i.count, e
                }
            }
        });
        $("#apiArmsTable").find("input[type=search]").addClass("form-control");
        $("#apiArmsTable").find("input[type=search]").addClass("searchInput");
        $("#getDataFromApiArms").prop("disabled", !1);
        $("#apiDataTableLoadArms").css("display", "none")
    };
    n.prepareUseCaseTable = function(t) {
        var u, i, f, e, r, o;
        for ($("#useCaseTable").html(""), $("#useCaseTable").append('<table id="ucTable" class="display" cellspacing="0" width="100%"><\/table>'), u = t, i = [], i.push({
            title: "Year",
            "class": "center"
        }), i.push({
            title: "State",
            "class": "center"
        }), i.push({
            title: "Area Harvest (acres)",
            "class": "center"
        }), i.push({
            title: "Area Planted (acres)",
            "class": "center"
        }), i.push({
            title: "Yield (BU/Acre)",
            "class": "center"
        }), f = [], e = ["year", "state_name", "area_harvest", "area_planted", "_yield"], r = 0; r < u.length; r++) o = n.prepareResponseData(e, u[r], "-"), f.push(o);
        $("#ucTable").DataTable({
            data: f,
            columns: i,
            order: [
                [0, "desc"]
            ],
            fnRowCallback: function(n) {
                for (var t = 0; t < n.cells.length; ++t)(t + 1) % 2 && $(n.cells[t]).css("background-color", globalConstants.tableOddColumnColor)
            },
            language: {
                info: "Displaying _END_ of _TOTAL_ Results",
                oPaginate: {
                    sNext: '<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"><\/span>',
                    sPrevious: '<span class="glyphicon glyphicon-triangle-left" aria-hidden="true"><\/span>'
                }
            }
        });
        $("#ucTable thead tr").before('<tr role="row">', '<th class="center" tabindex="0" aria-controls="ucTable" rowspan="1" colspan="1" style="text-align: center;">Joined Column<\/th>', '<th class="center" tabindex="0" aria-controls="ucTable" rowspan="1" colspan="4" style="text-align: center;">NASS Data<\/th>', "<\/tr>");
        $("#useCaseTable").find("input[type=search]").addClass("form-control");
        $("#processUseCase").prop("disabled", !1);
        $("#useCaseDataTableLoad").css("display", "none")
    };
    n.createTableByAzureMlData = function(t, i) {
        var f, r, e, o, u, s;
        for ($("#ucAzureMlTable").html(""), $("#ucAzureMlTable").append('<table id="azureMlTable" class="display" cellspacing="0" width="100%"><\/table>'), f = t, r = [], r.push({
            title: "Year",
            "class": "center"
        }), r.push({
            title: "Area Planted - Actual (acres)",
            "class": "center"
        }), r.push({
            title: "Area Planted - Estimate (acres)",
            "class": "center"
        }), e = [], o = ["year", "arePlantedActual", "areaPlantedEstimate"], u = 0; u < f.length; u++) s = n.prepareResponseData(o, f[u], "-"), e.push(s);
        $("#azureMlTable").DataTable({
            data: e,
            columns: r,
            order: [
                [0, "desc"]
            ],
            language: {
                emptyTable: i,
                info: "Displaying _END_ of _TOTAL_ Results",
                oPaginate: {
                    sNext: '<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"><\/span>',
                    sPrevious: '<span class="glyphicon glyphicon-triangle-left" aria-hidden="true"><\/span>'
                }
            },
            fnRowCallback: function(n) {
                for (var t = 0; t < n.cells.length; ++t)(t + 1) % 2 && $(n.cells[t]).css("background-color", globalConstants.tableOddColumnColor)
            }
        });
        $("#azureMlTable thead tr").before('<tr role="row">', '<th class="center" tabindex="0" aria-controls="azureMlTable" rowspan="1" colspan="1" style="text-align: center;">Joined Column<\/th>', '<th class="center" tabindex="0" aria-controls="azureMlTable" rowspan="1" colspan="4" style="text-align: center;">NASS Data<\/th>', "<\/tr>");
        $("#ucAzureMlTable").find("input[type=search]").addClass("form-control");
        $("#processUseCaseAzureMl").prop("disabled", !1);
        $("#ucAzureMlDataTableLoad").css("display", "none")
    };
    r = function(n) {
        var o = [],
            r = n.Values,
            f, e, t, i, s;
        if (r && r.length) {
            var u = function(n) {
                for (var i = 0, t = 0; t < this.ColumnNames.length; t++)
                    if (this.ColumnNames[t] == n) {
                        i = t;
                        break
                    }
                return i
            }, h = u.call(n, "Year"),
                c = u.call(n, "Planted - Actual"),
                l = u.call(n, "Planted - Estimate"),
                a = u.call(n, "Coefficients");
            for (f = 0; f < r.length; ++f) e = r[f], t = parseFloat(e[c]), t = t ? t.toFixed(2).replace(".00", "") : "-", i = parseFloat(e[l]), i = i ? i.toFixed(2).replace(".00", "") : "-", s = {
                year: e[h],
                arePlantedActual: t,
                areaPlantedEstimate: i
            }, o.push(s)
        }
        return o
    };
    n.getDataFromAzureMlByStateAndCrop = function(t) {
        var i = {
            cropName: t.cropName,
            stateName: t.stateName
        };
        $.ajax({
            type: "POST",
            beforeSend: function(n) {
                n.setRequestHeader("Content-Type", "application/json")
            },
            accepts: "applicaton/json",
            url: "CustomRegrR/Index",
            data: JSON.stringify(i),
            success: function(t) {
                var i = t.Results ? t.Results.output1.value : [],
                    u;
                i.Values && i.Values.length ? (u = r(i), n.createTableByAzureMlData(u, "No data from Azure ML"), lineChart.buildAzureMlFirstChart(u, "azureMlFirstChart", "ucAzureMlFirstChartLoad"), n.createTableС oefficientsFromAzureMl(i)) : (n.createTableByAzureMlData([], "No data from Azure ML"), lineChart.clearGraphic("azureMlFirstChart"), $("#firstAzureMlChartTableСoefficients").html(""))
            },
            error: function() {
                console.log("lineChart.buildLineChart error")
            }
        })
    };
    n.createTableС oefficientsFromAzureMl = function(t) {
        var s = n.prepareС oefficientsFromAzureMl(t),
            u, i, f, e, r, o;
        for ($("#firstAzureMlChartTableСoefficients").html(""), $("#firstAzureMlChartTableСoefficients").append('<table id="azureMlCoeffTable" class="display" cellspacing="0" width="100%"><\/table>'), u = s, i = [], i.push({
            title: "Crop",
            "class": "center"
        }), i.push({
            title: "Coefficient",
            "class": "center"
        }), f = [], e = ["coeffName", "coeffValue"], r = 0; r < u.length; r++) o = n.prepareResponseData(e, u[r], "-"), f.push(o);
        $("#azureMlCoeffTable").DataTable({
            data: f,
            columns: i,
            order: [
                [0, "desc"]
            ],
            bInfo: !1,
            bPaginate: !1,
            fnRowCallback: function(n) {
                for (var t = 0; t < n.cells.length; ++t)(t + 1) % 2 && $(n.cells[t]).css("background-color", globalConstants.tableOddColumnColor)
            },
            language: {
                info: "Displaying _END_ of _TOTAL_ Results",
                oPaginate: {
                    sNext: '<span class="glyphicon glyphicon-triangle-right" aria-hidden="true"><\/span>',
                    sPrevious: '<span class="glyphicon glyphicon-triangle-left" aria-hidden="true"><\/span>'
                }
            }
        })
    };
    n.prepareС oefficientsFromAzureMl = function(n) {
        var u = [],
            t = n.Values,
            i, f, r;
        if (t && t.length) {
            var o = function(n) {
                for (var i = 0, t = 0; t < this.ColumnNames.length; t++)
                    if (this.ColumnNames[t] == n) {
                        i = t;
                        break
                    }
                return i
            }, s = function(n) {
                    var t = n.replace(/[()$.]/g, "");
                    return t.replace("modeldata", "")
                }, h = o.call(n, "Coefficients");
            for (i = 0; i < t.length; ++i) {
                if (f = t[i], r = f[h], !r) break;
                var e = r.split("="),
                    c = s(e[0]),
                    l = parseFloat(e[1]).toFixed(2),
                    a = {
                        coeffName: c,
                        coeffValue: l
                    };
                u.push(a)
            }
        }
        return u
    };
    n.clear = function(n) {
        $("#" + n).DataTable().clear().draw()
    };
    window.table = n
}(),
function(n) {
    n.fn.zclip = function(t) {
        if (typeof t != "object" || t.length) {
            if (typeof t == "string") return this.each(function() {
                var r = n(this),
                    u, i;
                t = t.toLowerCase();
                u = r.data("zclipId");
                i = n("#" + u + ".zclip");
                t == "remove" ? (i.remove(), r.removeClass("active hover")) : t == "hide" ? (i.hide(), r.removeClass("active hover")) : t == "show" && i.show()
            })
        } else {
            var i = n.extend({
                path: "ZeroClipboard.swf",
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: !0,
                setHandCursor: !0,
                setCSSEffects: !0
            }, t);
            return this.each(function() {
                var t = n(this),
                    r;
                t.is(":visible") && (typeof i.copy == "string" || n.isFunction(i.copy)) && (ZeroClipboard.setMoviePath(i.path), r = new ZeroClipboard.Client, n.isFunction(i.copy) && t.bind("zClip_copy", i.copy), n.isFunction(i.beforeCopy) && t.bind("zClip_beforeCopy", i.beforeCopy), n.isFunction(i.afterCopy) && t.bind("zClip_afterCopy", i.afterCopy), r.setHandCursor(i.setHandCursor), r.setCSSEffects(i.setCSSEffects), r.addEventListener("mouseOver", function() {
                    t.trigger("mouseenter")
                }), r.addEventListener("mouseOut", function() {
                    t.trigger("mouseleave")
                }), r.addEventListener("mouseDown", function() {
                    t.trigger("mousedown");
                    n.isFunction(i.copy) ? r.setText(t.triggerHandler("zClip_copy")) : r.setText(i.copy);
                    n.isFunction(i.beforeCopy) && t.trigger("zClip_beforeCopy")
                }), r.addEventListener("complete", function(r, u) {
                    n.isFunction(i.afterCopy) ? t.trigger("zClip_afterCopy") : (u.length > 500 && (u = u.substr(0, 500) + "...\n\n(" + (u.length - 500) + " characters not shown)"), t.removeClass("hover"));
                    i.clickAfter && t.trigger("click")
                }), r.glue(t[0], t.parent()[0]), n(window).bind("load resize", function() {
                    r.reposition()
                }))
            })
        }
    }
}(jQuery);
ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: "ZeroClipboard.swf",
    nextId: 1,
    $: function(n) {
        return typeof n == "string" && (n = document.getElementById(n)), n.addClass || (n.hide = function() {
            this.style.display = "none"
        }, n.show = function() {
            this.style.display = ""
        }, n.addClass = function(n) {
            this.removeClass(n);
            this.className += " " + n
        }, n.removeClass = function(n) {
            for (var t = this.className.split(/\s+/), r = -1, i = 0; i < t.length; i++) t[i] == n && (r = i, i = t.length);
            return r > -1 && (t.splice(r, 1), this.className = t.join(" ")), this
        }, n.hasClass = function(n) {
            return !!this.className.match(new RegExp("\\s*" + n + "\\s*"))
        }), n
    },
    setMoviePath: function(n) {
        this.moviePath = n
    },
    dispatch: function(n, t, i) {
        var r = this.clients[n];
        r && r.receiveEvent(t, i)
    },
    register: function(n, t) {
        this.clients[n] = t
    },
    getDOMObjectPosition: function(n, t) {
        var i = {
            left: 0,
            top: 0,
            width: n.width ? n.width : n.offsetWidth,
            height: n.height ? n.height : n.offsetHeight
        };
        return n && n != t && (i.left += n.offsetLeft, i.top += n.offsetTop), i
    },
    Client: function(n) {
        this.handlers = {};
        this.id = ZeroClipboard.nextId++;
        this.movieId = "ZeroClipboardMovie_" + this.id;
        ZeroClipboard.register(this.id, this);
        n && this.glue(n)
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    glue: function(n, t, i) {
        var f, u, r;
        if (this.domElement = ZeroClipboard.$(n), f = 99, this.domElement.style.zIndex && (f = parseInt(this.domElement.style.zIndex, 10) + 1), typeof t == "string" ? t = ZeroClipboard.$(t) : typeof t == "undefined" && (t = document.getElementsByTagName("body")[0]), u = ZeroClipboard.getDOMObjectPosition(this.domElement, t), this.div = document.createElement("div"), this.div.className = "zclip", this.div.id = "zclip-" + this.movieId, $(this.domElement).data("zclipId", "zclip-" + this.movieId), r = this.div.style, r.position = "absolute", r.left = "" + u.left + "px", r.top = "" + u.top + "px", r.width = "" + u.width + "px", r.height = "" + u.height + "px", r.zIndex = f, typeof i == "object")
            for (addedStyle in i) r[addedStyle] = i[addedStyle];
        t.appendChild(this.div);
        this.div.innerHTML = this.getHTML(u.width, u.height)
    },
    getHTML: function(n, t) {
        var i = "",
            r = "id=" + this.id + "&width=" + n + "&height=" + t,
            u;
        return navigator.userAgent.match(/MSIE/) ? (u = location.href.match(/^https/i) ? "https://" : "http://", i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + u + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + n + '" height="' + t + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + r + '"/><param name="wmode" value="transparent"/><\/object>') : i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + n + '" height="' + t + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + r + '" wmode="transparent" />', i
    },
    hide: function() {
        this.div && (this.div.style.left = "-2000px")
    },
    show: function() {
        this.reposition()
    },
    destroy: function() {
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = "";
            var n = document.getElementsByTagName("body")[0];
            try {
                n.removeChild(this.div)
            } catch (t) {}
            this.domElement = null;
            this.div = null
        }
    },
    reposition: function(n) {
        if (n && (this.domElement = ZeroClipboard.$(n), this.domElement || this.hide()), this.domElement && this.div) {
            var t = ZeroClipboard.getDOMObjectPosition(this.domElement),
                i = this.div.style;
            i.left = "" + t.left + "px";
            i.top = "" + t.top + "px"
        }
    },
    setText: function(n) {
        this.clipText = n;
        this.ready && this.movie.setText(n)
    },
    addEventListener: function(n, t) {
        n = n.toString().toLowerCase().replace(/^on/, "");
        this.handlers[n] || (this.handlers[n] = []);
        this.handlers[n].push(t)
    },
    setHandCursor: function(n) {
        this.handCursorEnabled = n;
        this.ready && this.movie.setHandCursor(n)
    },
    setCSSEffects: function(n) {
        this.cssEffects = !! n
    },
    receiveEvent: function(n, t) {
        var r, u, f, i;
        n = n.toString().toLowerCase().replace(/^on/, "");
        switch (n) {
            case "load":
                if (this.movie = document.getElementById(this.movieId), !this.movie) {
                    r = this;
                    setTimeout(function() {
                        r.receiveEvent("load", null)
                    }, 1);
                    return
                }
                if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                    r = this;
                    setTimeout(function() {
                        r.receiveEvent("load", null)
                    }, 100);
                    this.ready = !0;
                    return
                }
                this.ready = !0;
                try {
                    this.movie.setText(this.clipText)
                } catch (e) {}
                try {
                    this.movie.setHandCursor(this.handCursorEnabled)
                } catch (e) {}
                break;
            case "mouseover":
                this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
                break;
            case "mouseout":
                this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
                break;
            case "mousedown":
                this.domElement && this.cssEffects && this.domElement.addClass("active");
                break;
            case "mouseup":
                this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
        }
        if (this.handlers[n])
            for (u = 0, f = this.handlers[n].length; u < f; u++) i = this.handlers[n][u], typeof i == "function" ? i(this, t) : typeof i == "object" && i.length == 2 ? i[0][i[1]](this, t) : typeof i == "string" && window[i](this, t)
    }
},
function() {
    var t = [{
        id: 10,
        containerName: "Source",
        dataItem: "source_desc",
        isDefault: 1,
        Sector: 1,
        Order: 10,
        parent: {}
    }, {
        id: 20,
        containerName: "Sector",
        dataItem: "sector_desc",
        isDefault: 1,
        Sector: 1,
        Order: 20,
        parent: {}
    }, {
        id: 30,
        containerName: "Group",
        dataItem: "group_desc",
        isDefault: 1,
        Sector: 1,
        Order: 30,
        parent: {}
    }, {
        id: 40,
        containerName: "Commodity",
        dataItem: "commodity_desc",
        isDefault: 1,
        Sector: 1,
        Order: 40,
        parent: {}
    }, {
        id: 50,
        containerName: "Category",
        dataItem: "statisticcat_desc",
        isDefault: 0,
        Sector: 1,
        Order: 50,
        parent: {
            id: 40
        }
    }, {
        id: 60,
        containerName: "Class",
        dataItem: "class_desc",
        isDefault: 0,
        Sector: 1,
        Order: 60,
        parent: {
            id: 40
        }
    }, {
        id: 70,
        containerName: "Domain",
        dataItem: "domain_desc",
        isDefault: 0,
        Sector: 1,
        Order: 70,
        parent: {
            id: 60
        }
    }, {
        id: 80,
        containerName: "AggregationLevel",
        dataItem: "agg_level_desc",
        isDefault: 1,
        Sector: 2,
        Order: 80,
        parent: {}
    }, {
        id: 90,
        containerName: "State",
        dataItem: "state_name",
        isDefault: 0,
        Sector: 2,
        Order: 90,
        parent: {
            id: 80,
            visibleByAggregLevelValues: ["AGRICULTURAL DISTRICT", "COUNTY", "NATIONAL", "REGION : SUB-STATE", "STATE", "ZIP CODE"]
        }
    }, {
        id: 100,
        containerName: "AgDistinct",
        dataItem: "asd_desc",
        isDefault: 0,
        Sector: 2,
        Order: 100,
        parent: {
            id: 90,
            visibleByAggregLevelValues: ["AGRICULTURAL DISTRICT", "COUNTY"]
        }
    }, {
        id: 110,
        containerName: "County",
        dataItem: "county_name",
        isDefault: 0,
        Order: 110,
        parent: {
            id: 90,
            visibleByAggregLevelValues: ["AGRICULTURAL DISTRICT", "COUNTY"]
        }
    }, {
        id: 120,
        containerName: "Region",
        dataItem: "region_desc",
        isDefault: 0,
        Sector: 2,
        Order: 120,
        parent: {
            id: 80,
            visibleByAggregLevelValues: ["REGION : MULTI-STATE", "REGION : SUB-STATE"]
        }
    }, {
        id: 130,
        containerName: "Watershed",
        dataItem: "watershed_desc",
        isDefault: 0,
        Sector: 2,
        Order: 130,
        parent: {
            id: 80,
            visibleByAggregLevelValues: ["WATERSHED"]
        }
    }, {
        id: 140,
        containerName: "Zip",
        dataItem: "zip_5",
        isDefault: 0,
        Sector: 2,
        Order: 140,
        parent: {
            id: 90,
            visibleByAggregLevelValues: ["ZIP CODE"]
        }
    }, {
        id: 150,
        containerName: "Year",
        dataItem: "year",
        isDefault: 1,
        Sector: 3,
        Order: 150,
        parent: {}
    }, {
        id: 160,
        containerName: "PeriodType",
        dataItem: "freq_desc",
        isDefault: 0,
        Sector: 3,
        Order: 160,
        parent: {}
    }],
        i = [],
        r = globalConstants.nassApiUrl,
        u = globalConstants.nassApiUrl + "api_get?",
        f = globalConstants.nassApiUrl + "get_dependent_param_values?",
        n = window.nass || {}, e = function(i) {
            var u = {}, r, f, e;
            for (u.Keys = [], u.Values = [], r = 0; r < i.length; ++r)
                if (f = n.findContainerByField(t, i[r].ContainerName, "containerName"), f)
                    if (i[r].Data.length == 1) u.Keys.push(f.dataItem), u.Values.push(i[r].Data[0].Id);
                    else if (i[r].Data.length > 1)
                for (e = 0; e < i[r].Data.length; ++e) u.Keys.push(f.dataItem + "__or"), u.Values.push(i[r].Data[e].Id);
            return u
        }, o = function() {
            var r, i, t;
            return function(u) {
                u || (u = {});
                r = u.numRequest || 0;
                i = u.requestsCompleted || 0;
                t = [];
                var f = function() {
                    n.enableAllContainers();
                    for (var i = 0; i < t.length; i++) t[i]()
                };
                u.singleCallback && t.push(u.singleCallback);
                this.addCallbackToQueue = function(n, u) {
                    n && i++;
                    u && t.push(u);
                    i == r && f()
                };
                this.requestComplete = function(n) {
                    n && i++;
                    i == r && f()
                };
                this.setCallback = function() {
                    t.push(callBack)
                }
            }
        }(),
        s = function(t) {
            $.ajax({
                url: t,
                success: function(t) {
                    var i = t.Count;
                    n.refreshRecordsCount(i, !0)
                },
                error: function(n) {
                    devLogger(!1, n)
                }
            })
        }, h = function(t, i) {
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: t,
                data: JSON.stringify(i),
                success: function(t) {
                    var i = t.Count;
                    n.refreshRecordsCount(i, !0)
                },
                error: function(n) {
                    devLogger(!1, n)
                }
            })
        }, c = function(t, i, r) {
            $.ajax({
                url: i,
                cache: !0,
                success: function(i) {
                    n.buldContainers(t, i, 0);
                    r.addCallbackToQueue(!0, function() {})
                },
                error: function() {
                    r.addCallbackToQueue(!0, function() {})
                }
            })
        }, l = function(t, i, r, u) {
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: i,
                data: JSON.stringify(u),
                success: function(i) {
                    r.addCallbackToQueue(!0, function() {
                        n.buldContainers(t, i, 0)
                    })
                },
                error: function(n) {
                    console.log(n.responseText)
                }
            })
        }, a = function(n, t, i) {
            var u = globalConstants.nassApiUrl + "get_dependent_param_values",
                r = new o({
                    numRequest: 1
                });
            t.length < globalConstants.maxGetRequestLength ? c(n, t, r) : l(n, u, r, i)
        }, v = function(n, t) {
            var i = r + "get_counts";
            n.length < globalConstants.maxGetRequestLength ? s(n) : h(i, t)
        };
    n.refreshRecordsCount = function(n, t) {
        if ($("#nassRecordCount .statusLoading").text("There are currently "), t) {
            var i = n != 1 ? " records" : " record",
                r = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                u = r + i + " available.";
            $("#nassRecordCount .status_go.recordsCount").text(r + i);
            $("#nassRecordCount .rCounts .recordsCount").text(u)
        } else $("#nassRecordCount .status_go.recordsCount").text("31,613,259 records"), $("#nassRecordCount .rCounts .recordsCount").text("31,613,259 records available.")
    };
    n.buldContainers = function(i, r) {
        for (var u, v, s, f, y = r.data, h = 0; h < i.length; h++) {
            var c = i[h],
                e = n.findContainerByField(y, c, "Name"),
                l = n.findContainerByField(t, c, "dataItem");
            if (l) {
                var a = l.containerName,
                    p = $("#" + a),
                    o = $("#" + a + "Block");
                if (e) {
                    for (u = e.Values, e.Name && e.Name.toUpperCase() == "YEAR" ? (v = u.map(function(n) {
                        return parseInt(n, 10)
                    }), u = v.sort(function(n, t) {
                        return t - n
                    })) : u = u.sort(), o.find(".load-mask").hide(), s = "", f = 0; f < u.length; f++) u[f] && (s += "<option value='" + u[f] + "'>" + u[f] + "<\/option>");
                    s ? (p.html(s), o.fadeIn(500)) : o.fadeOut(500)
                } else o.fadeOut(500)
            }
        }
    };
    n.findContainerByField = function(n, t, i) {
        for (var f, u, r = 0, e = n.length; r < e; r++)
            if (f = n[r], u = f[i], u)
                if (i != "id") {
                    if (u.toUpperCase() === t.toUpperCase()) return n[r]
                } else if (u === t) return n[r];
        return {}
    };
    n.fillDataSelects = function(n) {
        for (var e, r, u, i, f = 0; f < n.data.length; f++) {
            for (e = "", r = n.data[f], u = 0; u < r.Data.length; u++) e += "<option value='" + r.Data[u].Id + "'>" + r.Data[u].Name + "<\/option>";
            for (i = 0; i < t.length; i++) t[i].isDefault == 1 && t[i].dataItem == r.DataItem && ($("#" + t[i].containerName).html(e), $("#" + t[i].containerName + "Block").fadeIn(500))
        }
    };
    n.getSources = function(t) {
        $.ajax({
            type: "GET",
            url: "/Api/Sources/Get",
            cache: !0,
            data: {
                containers: t.join()
            },
            success: n.fillDataSelects,
            error: function(n) {
                console.log(n.statusText)
            }
        })
    };
    n.buildDefaultBlocks = function() {
        for (var u, r = [], i = 0; i < t.length; i++) t[i].isDefault == 1 ? r.push(t[i].dataItem) : (u = t[i].containerName + "Block", $("#" + u).fadeOut(500));
        n.getSources(r)
    };
    n.enableAllContainers = function() {
        for (var i, n = 0, r = t.length; n < r; n++) i = t[n].containerName, $("#" + i).prop("disabled", !1), $("#" + i + "Block").find(".load-mask").hide()
    };
    n.reloadContainers = function(u) {
        for (var g, h, y, nt, et, ot, tt, st, ht, ct, lt, it = f, at = r + "get_counts?", c = e(i), vt = c, l = n.buildRequestString(i), rt = l.substr(l.indexOf("?") + 1, l.length - l.indexOf("?") - 1), s = n.findContainerByField(t, u.id, "containerName"), ut = [], p = 0, yt = t.length; p < yt; p++) {
            var o = t[p],
                w = o.containerName,
                b = o.Order,
                k = o.Sector,
                pt = s.id,
                d = $("#" + w),
                ft = $("#" + w + "Block");
            d.prop("disabled", !0);
            g = d.val();
            w !== u.id && (h = !0, y = o.parent, y && y.id && (nt = y.id, h = !1, et = n.findContainerByField(t, nt, "id"), ot = $("#" + et.containerName + " option:selected").text(), (ot || k == s.Sector && b < s.Order) && (h = !0), tt = o.parent.visibleByAggregLevelValues, pt == nt && tt && (st = $("#AggregationLevel option:selected").text(), ht = tt.indexOf(st), h = ht >= 0 ? !0 : !1)), !h || g && k != s.Sector || !(s.Order < b || s.Order > b && !g) ? h || k != s.Sector || ft.fadeOut(500) : (it += "distinctParams=" + o.dataItem + "&", c.Keys.push("distinctParams"), c.Values.push(o.dataItem), ut.push(o.dataItem), d.find("option").removeAttr("selected"), ft.find(".load-mask").show()))
        }
        ct = it + rt;
        lt = at + rt;
        a(ut, ct, c);
        $("#nassRecordCount .status_go").text("loading...");
        $("#nassRecordCount .statusLoading").text("");
        $("#nassRecordCount .rCounts .recordsCount").text("");
        v(lt, vt)
    };
    n.editSelectedItemsOnContainers = function(r) {
        for (var c, e, h, o, s = n.findContainerByField(t, r.id, "containerName"), f = [], u = 0, l = i.length; u < l; u++) c = i[u].ContainerName, e = n.findContainerByField(t, c, "containerName"), s.Sector == e.Sector && e.Order < s.Order && f.push(i[u]), s.Sector != e.Sector && f.push(i[u]);
        return h = [], $(r).find(":selected").each(function(n, t) {
            var i = {};
            i.Id = t.text;
            i.Name = t.text;
            h.push(i)
        }), o = {}, o.ContainerName = r.id, o.Data = h, f.push(o), f
    };
    n.toggleSelect = function(t) {
        var r, u;
        i = n.editSelectedItemsOnContainers(t);
        r = n.buildRequestString(i);
        r.length > 0 && (u = $("#requestString"), u.val(r), helper.showOrHideTooltipForApiRequest(u, r));
        n.reloadContainers(t)
    };
    n.defaultInitializeNassTab = function() {
        var e = $("#nassContainer"),
            u = e.find("select"),
            t, f, i, r;
        for (t in u) isNaN(t) || (u[t].onchange = function() {
            n.toggleSelect(this)
        });
        f = $("#downloadButtonContainer");
        i = f.find("input[type=button]");
        for (r in i) isNaN(r) || (i[r].onclick = function() {
            n.downloadURI(this)
        });
        n.buildDefaultBlocks();
        helper.hasFlashPlayer() ? $("#copyToClipboard").zclip({
            path: "Scripts/zClipboard/ZeroClipboard.swf",
            copy: function() {
                return $("#requestString").val()
            }
        }) : ($("#copyToClipboard").attr("title", "Adobe Shockwave Flash player is not installed or disabled"), $("#copyToClipboard").attr("data-toggle", "tooltip"))
    };
    n.buildRequestString = function(n) {
        var i = u;
        return $.each(n, function(r) {
            var s, e, u, o, f;
            if (n[r].Data.length > 0) {
                for (s = n[r].ContainerName, e = "", u = 0; u < t.length; u++)
                    if (s == t[u].containerName) {
                        e = t[u].dataItem;
                        break
                    }
                if (n[r].Data.length == 1) i.indexOf("=") > -1 && (i += "&"), i += e + "=" + encodeURIComponent(n[r].Data[0].Name);
                else {
                    for (o = [], i.indexOf("=") > -1 && (i += "&"), f = 0; f < n[r].Data.length; f++) o[f] = e + "__or=" + encodeURIComponent(n[r].Data[f].Name);
                    i += o.join("&")
                }
            }
        }), i
    };
    n.downloadURI = function(n) {
        var t = $("#requestString").val(),
            i, r;
        t.length > 0 && (i = n.getAttribute("typeof"), r = t + "&format=" + i + "&file=true", window.open(r))
    };
    n.goNassClick = function() {
        var n = $("#requestString").val(),
            t = helper.validationUrlApiRequest(n, "nass");
        n.length > 0 && t ? ($("#getDataFromApi").prop("disabled", !0), $("#apiNassTable").html(""), $("#apiDataTableLoad").css("display", "block"), window.scrollTo(0, document.body.scrollHeight), $("#apiNassTable").append('<table id="nassTable" class="display" cellspacing="0" width="100%"><\/table>'), n.indexOf("get_dependent_param_values") < 0 && (n += "&orderby=year&orderDirection=asc&pagenum=0&pagesize=10"), table.fillDataTableNass(n)) : console.log(n + " is empty or is not valid")
    };
    n.clear = function() {
        var r, u;
        for (i = [], n.refreshRecordsCount(0, !1), r = 0; r < t.length; r++) $("#" + t[r].containerName + " option:selected").removeAttr("selected");
        n.buildDefaultBlocks();
        n.enableAllContainers();
        u = $("#requestString");
        u.val("");
        helper.showOrHideTooltipForApiRequest(u, "")
    };
    window.nass = n
}(),
function() {
    var t = window.arms || {}, n = [{
            name: "Survey",
            requestParamName: "survey",
            dataIndex: ["survey_abb", "surveyDesc"],
            defaultValue: "Crop",
            priority: 10
        }, {
            name: "Report",
            requestParamName: "report",
            dataIndex: ["report_num", "report_header"],
            defaultValue: "1",
            priority: 20
        }, {
            name: "Subject",
            requestParamName: "subject",
            dataIndex: ["subject_num", "subject"],
            defaultValue: "1",
            priority: 30
        }, {
            name: "RowGroup",
            requestParamName: "series1",
            dataIndex: ["series_abb", "series_header"],
            defaultValue: "FARM",
            priority: 30
        }, {
            name: "State",
            requestParamName: "fipsStateCode",
            dataIndex: ["fips_st", "state"],
            defaultValue: "00",
            priority: 40
        }, {
            name: "SubGroup",
            requestParamName: "series2",
            dataIndex: ["series_abb", "series_header"],
            defaultValue: "FARM",
            priority: 40
        }, {
            name: "Year",
            requestParamName: "stat_year",
            dataIndex: ["Year", "Year"],
            defaultValue: "2010",
            priority: 50
        }],
        i = globalConstants.armsApiUrl,
        r = function(n) {
            var t = [];
            return $(n).find(":selected").each(function(n, i) {
                var r = {};
                r.Id = i.value;
                r.Name = i.text;
                t.push(r)
            }), t
        }, s = function(t) {
            for (var i = 0; i < n.length; i++)
                if (n[i].requestParamName.toLowerCase() == t.toLowerCase()) return n[i];
            return {}
        }, e = function(t) {
            for (var i = 0; i < n.length; i++)
                if (n[i].name.toLowerCase() == t.toLowerCase()) return n[i];
            return {}
        }, h = function() {
            for (var t = 0; t < n.length; ++t) n[t].currentValues = []
        }, u = function(n, i, r, u) {
            $.ajax({
                url: i,
                success: function(i) {
                    if (n != "countStatus") r.addCallbackToQueue(!0, function() {
                        u ? t.buildDefaultListBoxes(n, i) : t.buildComboboxes(n, i)
                    });
                    else {
                        var f = i.Count;
                        f >= 0 && t.refreshRecordsCount(f, !0)
                    }
                }
            })
        }, c = function(n, i, r, u) {
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: i,
                data: JSON.stringify(u),
                success: function(i) {
                    r.addCallbackToQueue(!0, function() {
                        t.buildComboboxes(n, i)
                    })
                },
                error: function(n) {
                    console.log(n.responseText)
                }
            })
        }, l = function(n, i) {
            $.ajax({
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                url: n,
                data: JSON.stringify(i),
                success: function(n) {
                    var i = n.Count;
                    i >= 0 && t.refreshRecordsCount(i, !0)
                },
                error: function(n) {
                    console.log(n.responseText)
                }
            })
        }, o = function(n, t, r, f) {
            var e = i + "Parameters",
                o = e + "?" + r.join("&");
            o.length < globalConstants.maxGetRequestLength ? u(n, o, f, !1) : c(n, e, f, t)
        }, a = function(n, t, i) {
            if (n.length < globalConstants.maxGetRequestLength) {
                var r = n + "?" + t.join("&");
                u("countStatus", r, undefined)
            } else l(n, i)
        }, f;
    t.refreshRecordsCount = function(n, t) {
        if ($("#armsRecordCount .statusLoading").text("There are currently "), t) {
            var i = n != 1 ? " records" : " record",
                r = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                u = r + i + " available.";
            $("#armsRecordCount .status_go.recordsCount").text(r + i);
            $("#armsRecordCount .rCounts .recordsCount").text(u)
        } else $("#armsRecordCount .status_go.recordsCount").text("31,613,259 records"), $("#armsRecordCount .rCounts .recordsCount").text("31,613,259 records available.")
    };
    t.buildRequest = function() {
        var s = i,
            c = i,
            l = r("#" + n[0].name + "Arms"),
            t, e, u, f, o, h;
        for (l.length > 0 && (n[0].currentValue = l[0].Id), t = {}, t.Keys = [], t.Values = [], e = [], u = 1; u < n.length; u++)
            if (f = r("#" + n[u].name + "Arms"), f.length == 1) e.push(n[u].requestParamName + "=" + f[0].Id), t.Keys.push(n[u].requestParamName), t.Values.push(f[0].Id);
            else if (f.length > 1)
            for (o = 0; o < f.length; ++o) e.push(n[u].requestParamName + "__or=" + f[o].Id), t.Keys.push(n[u].requestParamName + "__or"), t.Values.push(f[o].Id);
        s += (n[0].currentValue || n[0].defaultValue) + "?" + e.join("&");
        c += (n[0].currentValue || n[0].defaultValue) + "Count";
        h = $("#requestStringArms");
        h.val(s);
        helper.showOrHideTooltipForApiRequest(h, s);
        $("#armsRecordCount .status_go").text("loading...");
        $("#armsRecordCount .statusLoading").text("");
        $("#armsRecordCount .rCounts .recordsCount").text("");
        a(c, e, t)
    };
    f = function() {
        var i, t, n;
        return function(r) {
            r || (r = {});
            i = r.numRequest || 0;
            t = r.requestsCompleted || 0;
            n = [];
            var u = function() {
                for (var t = 0; t < n.length; t++) n[t]()
            };
            r.singleCallback && n.push(r.singleCallback);
            this.addCallbackToQueue = function(r, f) {
                r && t++;
                f && n.push(f);
                t == i && u()
            };
            this.requestComplete = function(n) {
                n && t++;
                t == i && u()
            };
            this.setCallback = function() {
                n.push(callBack)
            }
        }
    }();
    t.defaultInitializeArmsTab = function() {
        var e, i, r, o, u, f;
        t.defaultLoadListBoxes(n);
        e = $("#downloadButtonContainerArms");
        i = e.find("input[type=button]");
        for (r in i) isNaN(r) || (i[r].onclick = function() {
            t.downloadURIArms(this)
        });
        o = $("#armsContainer");
        u = o.find("select");
        for (f in u) isNaN(f) || (u[f].onchange = function() {
            t.reloadRelativeCombobox(this)
        });
        helper.hasFlashPlayer() ? $("#copyToClipboardArms").zclip({
            path: "Scripts/zClipboard/ZeroClipboard.swf",
            copy: function() {
                return $("#requestStringArms").val()
            }
        }) : ($("#copyToClipboardArms").attr("title", "Adobe Shockwave Flash player is not installed or disabled"), $("#copyToClipboardArms").attr("data-toggle", "tooltip"))
    };
    t.buildDefaultListBoxes = function(t, i) {
        var u = i.data,
            r, e, o, f;
        if (u)
            if (u.length > 0) {
                for (r = 0; r < n.length; r++)
                    if (n[r].name == t) {
                        for (e = "", o = n[r].dataIndex, f = 0; f < u.length; f++) e += "<option value='" + u[f][o[0]] + "'>" + u[f][o[1]] + "<\/option>";
                        $("#" + t + "Arms").html(e);
                        $("#" + t + "BlockArms").show();
                        t == "Survey" && $("#SurveyArms").val(n[r].defaultValue)
                    }
            } else $("#" + t + "Arms").html(""), $("#" + t + "BlockArms").hide();
            else $("#" + t + "Arms").html(""), $("#" + t + "BlockArms").hide();
        $("#" + t + "Arms").prop("disabled", !1);
        $("#" + t + "BlockArms").find(".load-mask").hide()
    };
    t.buildComboboxes = function(n, i) {
        var r = i.data,
            u, f, e;
        if (r && r.length > 0) {
            for (u = 0; u < r.length; u++)
                if (f = s(r[u].Name), f.name) {
                    var o = "",
                        h = r[u].Keys,
                        c = r[u].Values;
                    for (e = 0; e < h.length; ++e) o += "<option value='" + h[e].trim() + "'>" + c[e].trim() + "<\/option>";
                    $("#" + f.name + "Arms").html(o);
                    $("#" + f.name + "BlockArms").show();
                    t.maskForListBox(f.name, !1);
                    t.maskForListBox(n, !1)
                }
            t.disableOrEnableAllListBoxes(!1)
        }
        t.buildRequest()
    };
    t.loadComboboxData = function(t) {
        var v = new f({
            numRequest: 1
        }),
            c = [],
            i = {}, l, u, s, a, h;
        if (i.Keys = [], i.Values = [], t != "Survey") {
            for (l = e(t), u = 0; u < n.length; u++)
                if (s = [], (l.priority >= n[u].priority || l.name == n[u].name) && (s = r("#" + n[u].name + "Arms")), s.length < 1 && (i.Keys.push("distinctParams"), i.Values.push(n[u].requestParamName), c.push("distinctParams=" + n[u].requestParamName)), s.length == 1 && (i.Keys.push(n[u].requestParamName), i.Values.push(s[0].Id), c.push(n[u].requestParamName + "=" + s[0].Id)), s.length > 1)
                    for (h = 0; h < s.length; ++h) i.Keys.push(n[u].requestParamName + "__or"), i.Values.push(s[h].Id), c.push(n[u].requestParamName + "__or=" + s[h].Id)
        } else
            for (a = $("#SurveyArms").val(), i.Keys = ["survey"], i.Values = [a], c.push("survey=" + a), h = 1; h < n.length; ++h) i.Keys.push("distinctParams"), i.Values.push(n[h].requestParamName), c.push("distinctParams=" + n[h].requestParamName);
        o(t, i, c, v)
    };
    t.defaultLoadListBoxes = function(t) {
        var c = i + "/Surveys",
            h = new f({
                numRequest: 2,
                processName: "defaultListBoxesLoading"
            }),
            s = [],
            r, e;
        for (s.push("survey=Crop"), r = {}, r.Keys = ["survey"], r.Values = ["Crop"], e = 0; e < n.length; ++e) n[e].requestParamName != "survey" && (s.push("distinctParams=" + n[e].requestParamName), r.Keys.push("distinctParams"), r.Values.push(n[e].requestParamName));
        u(t[0].name, c, h, !0);
        o(t[0].name, r, s, h)
    };
    t.downloadURIArms = function(n) {
        var t = $("#requestStringArms").val(),
            i, r;
        t.length > 0 && (i = n.getAttribute("typeof"), r = t + "&format=" + i + "&file=true", window.open(r))
    };
    t.goArmsClick = function() {
        var n = $("#requestStringArms").val(),
            t = helper.validationUrlApiRequest(n, "arms");
        n.length > 0 && t ? ($("#getDataFromApiArms").prop("disabled", !0), $("#apiArmsTable").html(""), $("#apiDataTableLoadArms").css("display", "block"), window.scrollTo(0, document.body.scrollHeight), $("#apiArmsTable").append('<table id="armsTable" class="display" cellspacing="0" width="100%"><\/table>'), n += "&orderby=topic_header&orderDirection=asc&pagenum=0&pagesize=10", table.fillDataTableArms(n)) : console.log(n + " is empty or is not valid")
    };
    t.reloadRelativeCombobox = function(i) {
        for (var o, f, r = [], s = i.id.replace("Arms", ""), h = e(s), u = 0; u < n.length; u++) o = $("#" + n[u].name + "Arms").val(), o || r.push(n[u]);
        if (r.length > 0)
            for (t.disableOrEnableAllListBoxes(!0), f = 0; f < r.length; ++f) t.maskForListBox(r[f].name, !0);
        t.loadComboboxData(h.name)
    };
    t.clear = function() {
        h();
        t.defaultLoadListBoxes(n)
    };
    t.disableOrEnableAllListBoxes = function(t) {
        for (var i = 0; i < n.length; ++i) $("#" + n[i].name + "Arms").prop("disabled", t)
    };
    t.maskForListBox = function(n, t) {
        t ? $("#" + n + "BlockArms").find(".load-mask").show() : $("#" + n + "BlockArms").find(".load-mask").hide()
    };
    window.arms = t
}(),
function() {
    var n = window.devLogger || {};
    n.Assert = function(n, t) {
        n || t && console.log(t)
    };
    window.devLogger = n
}();
! function() {
    function ll(n) {
        return n && (n.ownerDocument || n.document || n).documentElement
    }

    function bt(n) {
        return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView)
    }

    function nr(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }

    function si(n) {
        return null === n ? NaN : +n
    }

    function ct(n) {
        return !isNaN(n)
    }

    function al(n) {
        return {
            left: function(t, i, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var f = r + u >>> 1;
                    n(t[f], i) < 0 ? r = f + 1 : u = f
                }
                return r
            },
            right: function(t, i, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var f = r + u >>> 1;
                    n(t[f], i) > 0 ? u = f : r = f + 1
                }
                return r
            }
        }
    }

    function uk(n) {
        return n.length
    }

    function fk(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function vl(n, t) {
        for (var i in t) Object.defineProperty(n.prototype, i, {
            value: t[i],
            enumerable: !1
        })
    }

    function lt() {
        this._ = Object.create(null)
    }

    function ar(n) {
        return (n += "") === nb || n[0] === gf ? gf + n : n
    }

    function vu(n) {
        return (n += "")[0] === gf ? n.slice(1) : n
    }

    function yl(n) {
        return ar(n) in this._
    }

    function pl(n) {
        return (n = ar(n)) in this._ && delete this._[n]
    }

    function wl() {
        var n = [];
        for (var t in this._) n.push(vu(t));
        return n
    }

    function bl() {
        var n = 0;
        for (var t in this._)++n;
        return n
    }

    function kl() {
        for (var n in this._) return !1;
        return !0
    }

    function fo() {
        this._ = Object.create(null)
    }

    function v(n) {
        return n
    }

    function ek(n, t, i) {
        return function() {
            var r = i.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function eo(n, t) {
        var i, u, r;
        if (t in n) return t;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0, u = gh.length; u > i; ++i)
            if (r = gh[i] + t, r in n) return r
    }

    function l() {}

    function oo() {}

    function dl(n) {
        function r() {
            for (var i, r = t, u = -1, f = r.length; ++u < f;)(i = r[u].on) && i.apply(this, arguments);
            return n
        }
        var t = [],
            i = new lt;
        return r.on = function(r, u) {
            var e, f = i.get(r);
            return arguments.length < 2 ? f && f.on : (f && (f.on = null, t = t.slice(0, e = t.indexOf(f)).concat(t.slice(e + 1)), i.remove(r)), u && t.push(i.set(r, {
                on: u
            })), n)
        }, r
    }

    function kt() {
        n.event.preventDefault()
    }

    function so() {
        for (var i, t = n.event; i = t.sourceEvent;) t = i;
        return t
    }

    function ho(t) {
        for (var i = new oo, r = 0, u = arguments.length; ++r < u;) i[arguments[r]] = dl(i);
        return i.of = function(r, u) {
            return function(f) {
                try {
                    var e = f.sourceEvent = n.event;
                    f.target = t;
                    n.event = f;
                    i[f.type].apply(r, u)
                } finally {
                    n.event = e
                }
            }
        }, i
    }

    function dt(n) {
        return ne(n, e), n
    }

    function co(n) {
        return "function" == typeof n ? n : function() {
            return nc(n, this)
        }
    }

    function gl(n) {
        return "function" == typeof n ? n : function() {
            return tc(n, this)
        }
    }

    function na(t, i) {
        function r() {
            this.removeAttribute(t)
        }

        function u() {
            this.removeAttributeNS(t.space, t.local)
        }

        function f() {
            this.setAttribute(t, i)
        }

        function e() {
            this.setAttributeNS(t.space, t.local, i)
        }

        function o() {
            var n = i.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }

        function s() {
            var n = i.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
        return t = n.ns.qualify(t), null == i ? t.local ? u : r : "function" == typeof i ? t.local ? s : o : t.local ? e : f
    }

    function ta(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function ia(t) {
        return new RegExp("(?:^|\\s+)" + n.requote(t) + "(?:\\s+|$)", "g")
    }

    function ra(n) {
        return (n + "").trim().split(/^|\s+/)
    }

    function ua(n, t) {
        function r() {
            for (var r = -1; ++r < i;) n[r](this, t)
        }

        function u() {
            for (var r = -1, u = t.apply(this, arguments); ++r < i;) n[r](this, u)
        }
        n = ra(n).map(ok);
        var i = n.length;
        return "function" == typeof t ? u : r
    }

    function ok(n) {
        var t = ia(n);
        return function(i, r) {
            if (u = i.classList) return r ? u.add(n) : u.remove(n);
            var u = i.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || i.setAttribute("class", ta(u + " " + n))) : i.setAttribute("class", ta(u.replace(t, " ")))
        }
    }

    function fa(n, t, i) {
        function r() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, i)
        }

        function f() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, i)
        }
        return null == t ? r : "function" == typeof t ? f : u
    }

    function ea(n, t) {
        function i() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function u() {
            var i = t.apply(this, arguments);
            null == i ? delete this[n] : this[n] = i
        }
        return null == t ? i : "function" == typeof t ? u : r
    }

    function oa(t) {
        function i() {
            var n = this.ownerDocument,
                i = this.namespaceURI;
            return i ? n.createElementNS(i, t) : n.createElement(t)
        }

        function r() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
        return "function" == typeof t ? t : (t = n.ns.qualify(t)).local ? r : i
    }

    function sk() {
        var n = this.parentNode;
        n && n.removeChild(this)
    }

    function lo(n) {
        return {
            __data__: n
        }
    }

    function sa(n) {
        return function() {
            return ic(this, n)
        }
    }

    function hk(n) {
        return arguments.length || (n = nr),
        function(t, i) {
            return t && i ? n(t.__data__, i.__data__) : !t - !i
        }
    }

    function at(n, t) {
        for (var i = 0, u = n.length; u > i; i++)
            for (var f, e = n[i], r = 0, o = e.length; o > r; r++)(f = e[r]) && t(f, r, i);
        return n
    }

    function ha(n) {
        return ne(n, ot), n
    }

    function ck(n) {
        var t, i;
        return function(r, u, f) {
            var e, o = n[f].update,
                s = o.length;
            for (f != i && (i = f, t = 0), u >= t && (t = u + 1); !(e = o[t]) && ++t < s;);
            return e
        }
    }

    function ca(t, i, r) {
        function o() {
            var n = this[u];
            n && (this.removeEventListener(t, n, n.$), delete this[u])
        }

        function h() {
            var n = s(i, ti(arguments));
            o.call(this);
            this.addEventListener(t, this[u] = n, n.$ = r);
            n._ = i
        }

        function c() {
            var u, f = new RegExp("^__on([^.]+)" + n.requote(t) + "$"),
                i, r;
            for (i in this)(u = i.match(f)) && (r = this[i], this.removeEventListener(u[1], r, r.$), delete this[i])
        }
        var u = "__on" + t,
            f = t.indexOf("."),
            s = la,
            e;
        return f > 0 && (t = t.slice(0, f)), e = ie.get(t), e && (t = e, s = lk), f ? i ? h : o : i ? l : c
    }

    function la(t, i) {
        return function(r) {
            var u = n.event;
            n.event = r;
            i[0] = this.__data__;
            try {
                t.apply(this, i)
            } finally {
                n.event = u
            }
        }
    }

    function lk(n, t) {
        var i = la(n, t);
        return function(n) {
            var t = this,
                r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || i.call(t, n)
        }
    }

    function yu(t) {
        var i = ".dragsuppress-" + ++tb,
            f = "click" + i,
            u = n.select(bt(t)).on("touchmove" + i, kt).on("dragstart" + i, kt).on("selectstart" + i, kt),
            r, e;
        return (null == pi && (pi = "onselectstart" in t ? !1 : eo(t.style, "userSelect")), pi) && (r = ll(t).style, e = r[pi], r[pi] = "none"),
        function(n) {
            if (u.on(i, null), pi && (r[pi] = e), n) {
                var t = function() {
                    u.on(f, null)
                };
                u.on(f, function() {
                    kt();
                    t()
                }, !0);
                setTimeout(t, 0)
            }
        }
    }

    function ao(t, i) {
        var u, r, f, e, o;
        return (i.changedTouches && (i = i.changedTouches[0]), u = t.ownerSVGElement || t, u.createSVGPoint) ? (r = u.createSVGPoint(), 0 > re && (f = bt(t), (f.scrollX || f.scrollY) && (u = n.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
        }, "important"), e = u[0][0].getScreenCTM(), re = !(e.f || e.e), u.remove())), re ? (r.x = i.pageX, r.y = i.pageY) : (r.x = i.clientX, r.y = i.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]) : (o = t.getBoundingClientRect(), [i.clientX - o.left - t.clientLeft, i.clientY - o.top - t.clientTop])
    }

    function ak() {
        return n.event.changedTouches[0].identifier
    }

    function aa(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function vo(n, t, i) {
        return (t[0] - n[0]) * (i[1] - n[1]) - (t[1] - n[1]) * (i[0] - n[0])
    }

    function va(n) {
        return n > 1 ? 0 : -1 > n ? f : Math.acos(n)
    }

    function gt(n) {
        return n > 1 ? h : -1 > n ? -h : Math.asin(n)
    }

    function vk(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function ya(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function yk(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function pa(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function hi() {}

    function ft(n, t, i) {
        return this instanceof ft ? (this.h = +n, this.s = +t, void(this.l = +i)) : arguments.length < 2 ? n instanceof ft ? new ft(n.h, n.s, n.l) : da("" + n, ga, ft) : new ft(n, t, i)
    }

    function yo(n, t, i) {
        function e(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? r + (u - r) * n / 60 : 180 > n ? u : 240 > n ? r + (u - r) * (240 - n) / 60 : r
        }

        function f(n) {
            return Math.round(255 * e(n))
        }
        var r, u;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, i = 0 > i ? 0 : i > 1 ? 1 : i, u = .5 >= i ? i * (1 + t) : i + t - i * t, r = 2 * i - u, new b(f(n + 120), f(n), f(n - 120))
    }

    function tt(t, i, r) {
        return this instanceof tt ? (this.h = +t, this.c = +i, void(this.l = +r)) : arguments.length < 2 ? t instanceof tt ? new tt(t.h, t.c, t.l) : t instanceof it ? ba(t.l, t.a, t.b) : ba((t = nv((t = n.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new tt(t, i, r)
    }

    function po(n, t, i) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new it(i, Math.cos(n *= u) * t, Math.sin(n) * t)
    }

    function it(n, t, i) {
        return this instanceof it ? (this.l = +n, this.a = +t, void(this.b = +i)) : arguments.length < 2 ? n instanceof it ? new it(n.l, n.a, n.b) : n instanceof tt ? po(n.h, n.c, n.l) : nv((n = b(n)).r, n.g, n.b) : new it(n, t, i)
    }

    function wa(n, t, i) {
        var r = (n + 16) / 116,
            u = r + t / 500,
            f = r - i / 200;
        return u = wo(u) * rb, r = wo(r) * ub, f = wo(f) * fb, new b(ko(3.2404542 * u - 1.5371385 * r - .4985314 * f), ko(-.969266 * u + 1.8760108 * r + .041556 * f), ko(.0556434 * u - .2040259 * r + 1.0572252 * f))
    }

    function ba(n, t, i) {
        return n > 0 ? new tt(Math.atan2(i, t) * s, Math.sqrt(t * t + i * i), n) : new tt(NaN, NaN, n)
    }

    function wo(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function bo(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function ko(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function b(n, t, i) {
        return this instanceof b ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~i)) : arguments.length < 2 ? n instanceof b ? new b(n.r, n.g, n.b) : da("" + n, b, yo) : new b(n, t, i)
    }

    function ka(n) {
        return new b(n >> 16, n >> 8 & 255, 255 & n)
    }

    function pu(n) {
        return ka(n) + ""
    }

    function tr(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function da(n, t, i) {
        var s, u, r, f = 0,
            e = 0,
            o = 0;
        if (s = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = s[2].split(","), s[1]) {
            case "hsl":
                return i(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(ns(u[0]), ns(u[1]), ns(u[2]))
        }
        return (r = fu.get(n.toLowerCase())) ? t(r.r, r.g, r.b) : (null == n || "#" !== n.charAt(0) || isNaN(r = parseInt(n.slice(1), 16)) || (4 === n.length ? (f = (3840 & r) >> 4, f = f >> 4 | f, e = 240 & r, e = e >> 4 | e, o = 15 & r, o = o << 4 | o) : 7 === n.length && (f = (16711680 & r) >> 16, e = (65280 & r) >> 8, o = 255 & r)), t(f, e, o))
    }

    function ga(n, t, i) {
        var f, s, e = Math.min(n /= 255, t /= 255, i /= 255),
            r = Math.max(n, t, i),
            u = r - e,
            o = (r + e) / 2;
        return u ? (s = .5 > o ? u / (r + e) : u / (2 - r - e), f = n == r ? (t - i) / u + (i > t ? 6 : 0) : t == r ? (i - n) / u + 2 : (n - t) / u + 4, f *= 60) : (f = NaN, s = o > 0 && 1 > o ? 0 : f), new ft(f, s, o)
    }

    function nv(n, t, i) {
        n = go(n);
        t = go(t);
        i = go(i);
        var u = bo((.4124564 * n + .3575761 * t + .1804375 * i) / rb),
            r = bo((.2126729 * n + .7151522 * t + .072175 * i) / ub),
            f = bo((.0193339 * n + .119192 * t + .9503041 * i) / fb);
        return it(116 * r - 16, 500 * (u - r), 200 * (r - f))
    }

    function go(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function ns(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function o(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }

    function ts(n) {
        return function(t, i, r) {
            return 2 === arguments.length && "function" == typeof i && (r = i, i = null), wu(t, i, n, r)
        }
    }

    function wu(t, i, r, u) {
        function c() {
            var t, n = e.status;
            if (!n && wk(e) || n >= 200 && 300 > n || 304 === n) {
                try {
                    t = r.call(f, e)
                } catch (i) {
                    return void s.error.call(f, i)
                }
                s.load.call(f, t)
            } else s.error.call(f, e)
        }
        var f = {}, s = n.dispatch("beforesend", "progress", "load", "error"),
            o = {}, e = new XMLHttpRequest,
            h = null;
        return !this.XDomainRequest || "withCredentials" in e || !/^(http(s)?:)?\/\//.test(t) || (e = new XDomainRequest), "onload" in e ? e.onload = e.onerror = c : e.onreadystatechange = function() {
            e.readyState > 3 && c()
        }, e.onprogress = function(t) {
            var i = n.event;
            n.event = t;
            try {
                s.progress.call(f, e)
            } finally {
                n.event = i
            }
        }, f.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? o[n] : (null == t ? delete o[n] : o[n] = t + "", f)
        }, f.mimeType = function(n) {
            return arguments.length ? (i = null == n ? null : n + "", f) : i
        }, f.responseType = function(n) {
            return arguments.length ? (h = n, f) : h
        }, f.response = function(n) {
            return r = n, f
        }, ["get", "post"].forEach(function(n) {
            f[n] = function() {
                return f.send.apply(f, [n].concat(ti(arguments)))
            }
        }), f.send = function(n, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), e.open(n, t, !0), null == i || "accept" in o || (o.accept = i + ",*/*"), e.setRequestHeader)
                for (var c in o) e.setRequestHeader(c, o[c]);
            return null != i && e.overrideMimeType && e.overrideMimeType(i), null != h && (e.responseType = h), null != u && f.on("error", u).on("load", function(n) {
                u(null, n)
            }), s.beforesend.call(f, e), e.send(null == r ? null : r), f
        }, f.abort = function() {
            return e.abort(), f
        }, n.rebind(f, s, "on"), null == u ? f : f.get(pk(u))
    }

    function pk(n) {
        return 1 === n.length ? function(t, i) {
            n(null == t ? i : null)
        } : n
    }

    function wk(n) {
        var t = n.responseType;
        return t && "text" !== t ? n.response : n.responseText
    }

    function is() {
        var t = tv(),
            n = iv() - t;
        n > 24 ? (isFinite(n) && (clearTimeout(ae), ae = setTimeout(is, n)), le = 0) : (le = 1, sc(is))
    }

    function tv() {
        var n = Date.now();
        for (pt = he; pt;) n >= pt.t && (pt.f = pt.c(n - pt.t)), pt = pt.n;
        return n
    }

    function iv() {
        for (var t, n = he, i = 1 / 0; n;) n.f ? n = t ? t.n = n.n : he = n.n : (n.t < i && (i = n.t), n = (t = n).n);
        return ce = t, i
    }

    function rs(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function bk(n, t) {
        var i = Math.pow(10, 3 * r(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / i
            } : function(n) {
                return n * i
            },
            symbol: n
        }
    }

    function kk(t) {
        var e = t.decimal,
            r = t.thousands,
            i = t.grouping,
            u = t.currency,
            f = i && r ? function(n, t) {
                for (var f = n.length, o = [], s = 0, u = i[0], e = 0; f > 0 && u > 0 && (e + u + 1 > t && (u = Math.max(1, t - e)), o.push(n.substring(f -= u, f + u)), !((e += u + 1) > t));) u = i[s = (s + 1) % i.length];
                return o.reverse().join(r)
            } : v;
        return function(t) {
            var o = ob.exec(t),
                y = o[1] || " ",
                s = o[2] || ">",
                b = o[3] || "-",
                k = o[4] || "",
                l = o[5],
                p = +o[6],
                w = o[7],
                r = o[8],
                i = o[9],
                h = 1,
                a = "",
                c = "",
                d = !1,
                g = !0,
                v;
            switch (r && (r = +r.substring(1)), (l || "0" === y && "=" === s) && (l = y = "0", s = "="), i) {
                case "n":
                    w = !0;
                    i = "g";
                    break;
                case "%":
                    h = 100;
                    c = "%";
                    i = "f";
                    break;
                case "p":
                    h = 100;
                    c = "%";
                    i = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === k && (a = "0" + i.toLowerCase());
                case "c":
                    g = !1;
                case "d":
                    d = !0;
                    r = 0;
                    break;
                case "s":
                    h = -1;
                    i = "r"
            }
            return "$" === k && (a = u[0], c = u[1]), "r" != i || r || (i = "g"), null != r && ("g" == i ? r = Math.max(1, Math.min(21, r)) : ("e" == i || "f" == i) && (r = Math.max(0, Math.min(20, r)))), i = drt.get(i) || dk, v = l && w,
            function(t) {
                var ft = c,
                    k, ut, u, nt, it, rt, tt, o;
                return d && t % 1 ? "" : (k = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === b ? "" : b, 0 > h ? (ut = n.formatPrefix(t, r), t = ut.scale(t), ft = ut.symbol + c) : t *= h, t = i(t, r), it = t.lastIndexOf("."), 0 > it ? (rt = g ? t.lastIndexOf("e") : -1, 0 > rt ? (u = t, nt = "") : (u = t.substring(0, rt), nt = t.substring(rt))) : (u = t.substring(0, it), nt = e + t.substring(it + 1)), !l && w && (u = f(u, 1 / 0)), tt = a.length + u.length + nt.length + (v ? 0 : k.length), o = p > tt ? new Array(tt = p - tt + 1).join(y) : "", v && (u = f(o + u, o.length ? p - nt.length : 1 / 0)), k += a, t = u + nt, ("<" === s ? k + t + o : ">" === s ? o + k + t : "^" === s ? o.substring(0, tt >>= 1) + k + t + o.substring(tt) : k + (v ? t : o + t)) + ft)
            }
        }
    }

    function dk(n) {
        return n + ""
    }

    function vt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function ci(n, t, i) {
        function e(t) {
            var i = n(t),
                r = f(i, 1);
            return r - t > t - i ? i : r
        }

        function u(i) {
            return t(i = n(new y(i - 1)), 1), i
        }

        function f(n, i) {
            return t(n = new y(+n), i), n
        }

        function o(n, r, f) {
            var e = u(n),
                o = [];
            if (f > 1)
                for (; r > e;) i(e) % f || o.push(new Date(+e)), t(e, 1);
            else
                for (; r > e;) o.push(new Date(+e)), t(e, 1);
            return o
        }

        function s(n, t, i) {
            try {
                y = vt;
                var r = new vt;
                return r._ = n, o(r, t, i)
            } finally {
                y = Date
            }
        }
        n.floor = n;
        n.round = e;
        n.ceil = u;
        n.offset = f;
        n.range = o;
        var r = n.utc = bu(n);
        return r.floor = r, r.round = bu(e), r.ceil = bu(u), r.offset = bu(f), r.range = s, n
    }

    function bu(n) {
        return function(t, i) {
            try {
                y = vt;
                var r = new vt;
                return r._ = t, n(r, i)._
            } finally {
                y = Date
            }
        }
    }

    function gk(t) {
        function r(n) {
            function t(t) {
                for (var f, o, h, e = [], r = -1, s = 0; ++r < i;) 37 === n.charCodeAt(r) && (e.push(n.slice(s, r)), null != (o = sb[f = n.charAt(++r)]) && (f = n.charAt(++r)), (h = u[f]) && (f = h(t, null == o ? "e" === f ? " " : "0" : o)), e.push(f), s = r + 1);
                return e.push(n.slice(s, r)), e.join("")
            }
            var i = n.length;
            return t.parse = function(t) {
                var i = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, e = f(i, n, t, 0),
                    u, r;
                return e != t.length ? null : ("p" in i && (i.H = i.H % 12 + 12 * i.p), u = null != i.Z && y !== vt, r = new(u ? vt : y), "j" in i ? r.setFullYear(i.y, 0, i.j) : "w" in i && ("W" in i || "U" in i) ? (r.setFullYear(i.y, 0, 1), r.setFullYear(i.y, 0, "W" in i ? (i.w + 6) % 7 + 7 * i.W - (r.getDay() + 5) % 7 : i.w + 7 * i.U - (r.getDay() + 6) % 7)) : r.setFullYear(i.y, i.m, i.d), r.setHours(i.H + (i.Z / 100 | 0), i.M + i.Z % 100, i.S, i.L), u ? r._ : r)
            }, t.toString = function() {
                return n
            }, t
        }

        function f(n, t, i, r) {
            for (var f, e, o, u = 0, s = t.length, h = i.length; s > u;) {
                if (r >= h) return -1;
                if (f = t.charCodeAt(u++), 37 === f) {
                    if (o = t.charAt(u++), e = k[o in sb ? t.charAt(u++) : o], !e || (r = e(n, i, r)) < 0) return -1
                } else if (f != i.charCodeAt(r++)) return -1
            }
            return r
        }

        function d(n, t, i) {
            v.lastIndex = 0;
            var r = v.exec(t.slice(i));
            return r ? (n.w = ct.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function g(n, t, i) {
            a.lastIndex = 0;
            var r = a.exec(t.slice(i));
            return r ? (n.w = ht.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function nt(n, t, i) {
            b.lastIndex = 0;
            var r = b.exec(t.slice(i));
            return r ? (n.m = at.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function tt(n, t, i) {
            p.lastIndex = 0;
            var r = p.exec(t.slice(i));
            return r ? (n.m = lt.get(r[0].toLowerCase()), i + r[0].length) : -1
        }

        function it(n, t, i) {
            return f(n, u.c.toString(), t, i)
        }

        function rt(n, t, i) {
            return f(n, u.x.toString(), t, i)
        }

        function ut(n, t, i) {
            return f(n, u.X.toString(), t, i)
        }

        function ft(n, t, i) {
            var r = l.get(t.slice(i, i += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, i)
        }
        var et = t.dateTime,
            ot = t.date,
            st = t.time,
            c = t.periods,
            e = t.days,
            o = t.shortDays,
            s = t.months,
            h = t.shortMonths,
            u, k;
        r.utc = function(n) {
            function t(n) {
                try {
                    y = vt;
                    var t = new y;
                    return t._ = n, i(t)
                } finally {
                    y = Date
                }
            }
            var i = r(n);
            return t.parse = function(n) {
                try {
                    y = vt;
                    var t = i.parse(n);
                    return t && t._
                } finally {
                    y = Date
                }
            }, t.toString = i.toString, t
        };
        r.multi = r.utc.multi = yd;
        var l = n.map(),
            a = ku(e),
            ht = du(e),
            v = ku(o),
            ct = du(o),
            p = ku(s),
            lt = du(s),
            b = ku(h),
            at = du(h);
        return c.forEach(function(n, t) {
            l.set(n.toLowerCase(), t)
        }), u = {
            a: function(n) {
                return o[n.getDay()]
            },
            A: function(n) {
                return e[n.getDay()]
            },
            b: function(n) {
                return h[n.getMonth()]
            },
            B: function(n) {
                return s[n.getMonth()]
            },
            c: r(et),
            d: function(n, t) {
                return w(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return w(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return w(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return w(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return w(1 + i.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return w(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return w(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return w(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return c[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return w(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return w(i.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return w(i.mondayOfYear(n), t, 2)
            },
            x: r(ot),
            X: r(st),
            y: function(n, t) {
                return w(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return w(n.getFullYear() % 1e4, t, 4)
            },
            Z: ad,
            "%": function() {
                return "%"
            }
        }, k = {
            a: d,
            A: g,
            b: nt,
            B: tt,
            c: it,
            d: rv,
            e: rv,
            H: uv,
            I: uv,
            j: sd,
            L: ld,
            m: od,
            M: hd,
            p: ft,
            S: cd,
            U: td,
            w: nd,
            W: id,
            x: rt,
            X: ut,
            y: ud,
            Y: rd,
            Z: fd,
            "%": vd
        }, r
    }

    function w(n, t, i) {
        var u = 0 > n ? "-" : "",
            r = (u ? -n : n) + "",
            f = r.length;
        return u + (i > f ? new Array(i - f + 1).join(t) + r : r)
    }

    function ku(t) {
        return new RegExp("^(?:" + t.map(n.requote).join("|") + ")", "i")
    }

    function du(n) {
        for (var i = new lt, t = -1, r = n.length; ++t < r;) i.set(n[t].toLowerCase(), t);
        return i
    }

    function nd(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 1));
        return r ? (n.w = +r[0], i + r[0].length) : -1
    }

    function td(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i));
        return r ? (n.U = +r[0], i + r[0].length) : -1
    }

    function id(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i));
        return r ? (n.W = +r[0], i + r[0].length) : -1
    }

    function rd(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 4));
        return r ? (n.y = +r[0], i + r[0].length) : -1
    }

    function ud(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.y = ed(+r[0]), i + r[0].length) : -1
    }

    function fd(n, t, i) {
        return /^[+-]\d{4}$/.test(t = t.slice(i, i + 5)) ? (n.Z = -t, i + 5) : -1
    }

    function ed(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function od(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.m = r[0] - 1, i + r[0].length) : -1
    }

    function rv(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.d = +r[0], i + r[0].length) : -1
    }

    function sd(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 3));
        return r ? (n.j = +r[0], i + r[0].length) : -1
    }

    function uv(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.H = +r[0], i + r[0].length) : -1
    }

    function hd(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.M = +r[0], i + r[0].length) : -1
    }

    function cd(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 2));
        return r ? (n.S = +r[0], i + r[0].length) : -1
    }

    function ld(n, t, i) {
        c.lastIndex = 0;
        var r = c.exec(t.slice(i, i + 3));
        return r ? (n.L = +r[0], i + r[0].length) : -1
    }

    function ad(n) {
        var t = n.getTimezoneOffset(),
            i = t > 0 ? "-" : "+",
            u = r(t) / 60 | 0,
            f = r(t) % 60;
        return i + w(u, "0", 2) + w(f, "0", 2)
    }

    function vd(n, t, i) {
        hb.lastIndex = 0;
        var r = hb.exec(t.slice(i, i + 1));
        return r ? i + r[0].length : -1
    }

    function yd(n) {
        for (var i = n.length, t = -1; ++t < i;) n[t][0] = this(n[t][0]);
        return function(t) {
            for (var r = 0, i = n[r]; !i[1](t);) i = n[++r];
            return i[0](t)
        }
    }

    function us() {}

    function fv(n, t, i) {
        var r = i.s = n + t,
            u = r - n,
            f = r - u;
        i.t = n - f + (t - u)
    }

    function gu(n, t) {
        n && lc.hasOwnProperty(n.type) && lc[n.type](n, t)
    }

    function fs(n, t, i) {
        var r, u = -1,
            f = n.length - i;
        for (t.lineStart(); ++u < f;) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function ev(n, t) {
        var i = -1,
            r = n.length;
        for (t.polygonStart(); ++i < r;) fs(n[i], t, 1);
        t.polygonEnd()
    }

    function pd() {
        function r(r, e) {
            r *= u;
            e = e * u / 2 + f / 4;
            var o = r - n,
                s = o >= 0 ? 1 : -1,
                h = s * o,
                c = Math.cos(e),
                l = Math.sin(e),
                a = i * l,
                v = t * c + a * Math.cos(h),
                y = a * s * Math.sin(h);
            ii.add(Math.atan2(y, v));
            n = r;
            t = c;
            i = l
        }
        var e, o, n, t, i;
        k.point = function(s, h) {
            k.point = r;
            n = (e = s) * u;
            t = Math.cos(h = (o = h) * u / 2 + f / 4);
            i = Math.sin(h)
        };
        k.lineEnd = function() {
            r(e, o)
        }
    }

    function li(n) {
        var t = n[0],
            i = n[1],
            r = Math.cos(i);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(i)]
    }

    function nf(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function ir(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function es(n, t) {
        n[0] += t[0];
        n[1] += t[1];
        n[2] += t[2]
    }

    function tf(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function rf(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t;
        n[1] /= t;
        n[2] /= t
    }

    function uf(n) {
        return [Math.atan2(n[1], n[0]), gt(n[2])]
    }

    function ff(n, i) {
        return r(n[0] - i[0]) < t && r(n[1] - i[1]) < t
    }

    function os(n, t) {
        n *= u;
        var i = Math.cos(t *= u);
        vr(i * Math.cos(n), i * Math.sin(n), Math.sin(t))
    }

    function vr(n, t, i) {
        ++ou;
        wi += (n - wi) / ou;
        bi += (t - bi) / ou;
        wt += (i - wt) / ou
    }

    function ov() {
        function r(r, f) {
            r *= u;
            var c = Math.cos(f *= u),
                o = c * Math.cos(r),
                s = c * Math.sin(r),
                h = Math.sin(f),
                e = Math.atan2(Math.sqrt((e = t * h - i * s) * e + (e = i * o - n * h) * e + (e = n * s - t * o) * e), n * o + t * s + i * h);
            ye += e;
            ri += e * (n + (n = o));
            ui += e * (t + (t = s));
            ht += e * (i + (i = h));
            vr(n, t, i)
        }
        var n, t, i;
        rt.point = function(f, e) {
            f *= u;
            var o = Math.cos(e *= u);
            n = o * Math.cos(f);
            t = o * Math.sin(f);
            i = Math.sin(e);
            rt.point = r;
            vr(n, t, i)
        }
    }

    function sv() {
        rt.point = os
    }

    function wd() {
        function r(r, f) {
            r *= u;
            var p = Math.cos(f *= u),
                e = p * Math.cos(r),
                o = p * Math.sin(r),
                s = Math.sin(f),
                c = t * s - i * o,
                l = i * e - n * s,
                a = n * o - t * e,
                v = Math.sqrt(c * c + l * l + a * a),
                w = n * e + t * o + i * s,
                y = v && -va(w) / v,
                h = Math.atan2(v, w);
            sr += y * c;
            hr += y * l;
            fi += y * a;
            ye += h;
            ri += h * (n + (n = e));
            ui += h * (t + (t = o));
            ht += h * (i + (i = s));
            vr(n, t, i)
        }
        var f, e, n, t, i;
        rt.point = function(o, s) {
            f = o;
            e = s;
            rt.point = r;
            o *= u;
            var h = Math.cos(s *= u);
            n = h * Math.cos(o);
            t = h * Math.sin(o);
            i = Math.sin(s);
            vr(n, t, i)
        };
        rt.lineEnd = function() {
            r(f, e);
            rt.lineEnd = sv;
            rt.point = os
        }
    }

    function hv(n, t) {
        function i(i, r) {
            return i = n(i, r), t(i[0], i[1])
        }
        return n.invert && t.invert && (i.invert = function(i, r) {
            return i = t.invert(i, r), i && n.invert(i[0], i[1])
        }), i
    }

    function rr() {
        return !0
    }

    function cv(n, t, i, r, u) {
        var h = [],
            s = [],
            o, l, v, f, c, a, e;
        if (n.forEach(function(n) {
            var o, i, f, e, t, r;
            if (!((o = n.length - 1) <= 0)) {
                if (i = n[0], f = n[o], ff(i, f)) {
                    for (u.lineStart(), e = 0; o > e; ++e) u.point((i = n[e])[0], i[1]);
                    return void u.lineEnd()
                }
                t = new ef(i, n, null, !0);
                r = new ef(i, null, t, !1);
                t.o = r;
                h.push(t);
                s.push(r);
                t = new ef(f, n, null, !1);
                r = new ef(f, null, t, !0);
                t.o = r;
                h.push(t);
                s.push(r)
            }
        }), s.sort(t), lv(h), lv(s), h.length) {
            for (var e = 0, y = i, a = s.length; a > e; ++e) s[e].e = y = !y;
            for (v = h[0];;) {
                for (f = v, c = !0; f.v;)
                    if ((f = f.n) === v) return;
                o = f.z;
                u.lineStart();
                do {
                    if (f.v = f.o.v = !0, f.e) {
                        if (c)
                            for (e = 0, a = o.length; a > e; ++e) u.point((l = o[e])[0], l[1]);
                        else r(f.x, f.n.x, 1, u);
                        f = f.n
                    } else {
                        if (c)
                            for (o = f.p.z, e = o.length - 1; e >= 0; --e) u.point((l = o[e])[0], l[1]);
                        else r(f.x, f.p.x, -1, u);
                        f = f.p
                    }
                    f = f.o;
                    o = f.z;
                    c = !c
                } while (!f.v);
                u.lineEnd()
            }
        }
    }

    function lv(n) {
        if (r = n.length) {
            for (var r, t, u = 0, i = n[0]; ++u < r;) i.n = t = n[u], t.p = i, i = t;
            i.n = t = n[0];
            t.p = i
        }
    }

    function ef(n, t, i, r) {
        this.x = n;
        this.z = t;
        this.o = i;
        this.e = r;
        this.v = !1;
        this.n = this.p = null
    }

    function av(t, i, r, u) {
        return function(f, e) {
            function v(n, i) {
                var r = f(n, i);
                t(n = r[0], i = r[1]) && e.point(n, i)
            }

            function d(n, t) {
                var i = f(n, t);
                y.point(i[0], i[1])
            }

            function p() {
                o.point = d;
                y.lineStart()
            }

            function w() {
                o.point = v;
                y.lineEnd()
            }

            function b(n, t) {
                c.push([n, t]);
                var i = f(n, t);
                a.point(i[0], i[1])
            }

            function g() {
                a.lineStart();
                c = []
            }

            function nt() {
                var f, t, r;
                b(c[0][0], c[0][1]);
                a.lineEnd();
                var i, u = a.clean(),
                    n = k.buffer(),
                    t = n.length;
                if (c.pop(), l.push(c), c = null, t)
                    if (1 & u) {
                        if (i = n[0], t = i.length - 1, r = -1, t > 0) {
                            for (s || (e.polygonStart(), s = !0), e.lineStart(); ++r < t;) e.point((f = i[r])[0], f[1]);
                            e.lineEnd()
                        }
                    } else t > 1 && 2 & u && n.push(n.pop().concat(n.shift())), h.push(n.filter(bd))
            }
            var h, l, c, y = i(e),
                tt = f.invert(u[0], u[1]),
                o = {
                    point: v,
                    lineStart: p,
                    lineEnd: w,
                    polygonStart: function() {
                        o.point = b;
                        o.lineStart = g;
                        o.lineEnd = nt;
                        h = [];
                        l = []
                    },
                    polygonEnd: function() {
                        o.point = v;
                        o.lineStart = p;
                        o.lineEnd = w;
                        h = n.merge(h);
                        var t = tg(tt, l);
                        h.length ? (s || (e.polygonStart(), s = !0), cv(h, kd, t, r, e)) : t && (s || (e.polygonStart(), s = !0), e.lineStart(), r(null, null, 1, e), e.lineEnd());
                        s && (e.polygonEnd(), s = !1);
                        h = l = null
                    },
                    sphere: function() {
                        e.polygonStart();
                        e.lineStart();
                        r(null, null, 1, e);
                        e.lineEnd();
                        e.polygonEnd()
                    }
                }, k = vv(),
                a = i(k),
                s = !1;
            return o
        }
    }

    function bd(n) {
        return n.length > 1
    }

    function vv() {
        var t, n = [];
        return {
            lineStart: function() {
                n.push(t = [])
            },
            point: function(n, i) {
                t.push([n, i])
            },
            lineEnd: l,
            buffer: function() {
                var i = n;
                return n = [], t = null, i
            },
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            }
        }
    }

    function kd(n, i) {
        return ((n = n.x)[0] < 0 ? n[1] - h - t : h - n[1]) - ((i = i.x)[0] < 0 ? i[1] - h - t : h - i[1])
    }

    function dd(n) {
        var o, u = NaN,
            i = NaN,
            e = NaN;
        return {
            lineStart: function() {
                n.lineStart();
                o = 1
            },
            point: function(s, c) {
                var l = s > 0 ? f : -f,
                    a = r(s - u);
                r(a - f) < t ? (n.point(u, i = (i + c) / 2 > 0 ? h : -h), n.point(e, i), n.lineEnd(), n.lineStart(), n.point(l, i), n.point(s, i), o = 0) : e !== l && a >= f && (r(u - e) < t && (u -= e * t), r(s - l) < t && (s -= l * t), i = gd(u, i, s, c), n.point(e, i), n.lineEnd(), n.lineStart(), n.point(l, i), o = 0);
                n.point(u = s, i = c);
                e = l
            },
            lineEnd: function() {
                n.lineEnd();
                u = i = NaN
            },
            clean: function() {
                return 2 - o
            }
        }
    }

    function gd(n, i, u, f) {
        var e, o, s = Math.sin(n - u);
        return r(s) > t ? Math.atan((Math.sin(i) * (o = Math.cos(f)) * Math.sin(u) - Math.sin(f) * (e = Math.cos(i)) * Math.sin(n)) / (e * o * s)) : (i + f) / 2
    }

    function ng(n, i, u, e) {
        var o, s;
        null == n ? (o = u * h, e.point(-f, o), e.point(0, o), e.point(f, o), e.point(f, 0), e.point(f, -o), e.point(0, -o), e.point(-f, -o), e.point(-f, 0), e.point(-f, o)) : r(n[0] - i[0]) > t ? (s = n[0] < i[0] ? f : -f, o = u * s / 2, e.point(-s, o), e.point(0, o), e.point(s, o)) : e.point(i[0], i[1])
    }

    function tg(n, i) {
        var e = n[0],
            nt = n[1],
            ct = [Math.sin(e), -Math.cos(e), 0],
            a = 0,
            tt = 0,
            o, it, s, v, u, k, d;
        for (ii.reset(), o = 0, it = i.length; it > o; ++o)
            if (s = i[o], v = s.length, v)
                for (var h = s[0], y = h[0], rt = h[1] / 2 + f / 4, ut = Math.sin(rt), ft = Math.cos(rt), c = 1;;) {
                    c === v && (c = 0);
                    n = s[c];
                    var p = n[0],
                        et = n[1] / 2 + f / 4,
                        ot = Math.sin(et),
                        st = Math.cos(et),
                        r = p - y,
                        w = r >= 0 ? 1 : -1,
                        b = w * r,
                        l = b > f,
                        ht = ut * ot;
                    if ((ii.add(Math.atan2(ht * w * Math.sin(b), ft * st + ht * Math.cos(b))), a += l ? r + w * g : r, l ^ y >= e ^ p >= e) && (u = ir(li(h), li(n)), rf(u), k = ir(ct, u), rf(k), d = (l ^ r >= 0 ? -1 : 1) * gt(k[2]), (nt > d || nt === d && (u[0] || u[1])) && (tt += l ^ r >= 0 ? 1 : -1)), !c++) break;
                    y = p;
                    ut = ot;
                    ft = st;
                    h = n
                }
            return (-t > a || t > a && 0 > ii) ^ 1 & tt
    }

    function ig(n) {
        function s(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function c(n) {
            var i, a, r, c, u;
            return {
                lineStart: function() {
                    c = r = !1;
                    u = 1
                },
                point: function(v, y) {
                    var w, p = [v, y],
                        b = s(v, y),
                        d = e ? b ? 0 : h(v, y) : b ? h(v + (0 > v ? f : -f), y) : 0,
                        k;
                    (!i && (c = r = b) && n.lineStart(), b !== r && (w = o(i, p), (ff(i, w) || ff(p, w)) && (p[0] += t, p[1] += t, b = s(p[0], p[1]))), b !== r) ? (u = 0, b ? (n.lineStart(), w = o(p, i), n.point(w[0], w[1])) : (w = o(i, p), n.point(w[0], w[1]), n.lineEnd()), i = w) : l && i && e ^ b && (d & a || !(k = o(p, i, !0)) || (u = 0, e ? (n.lineStart(), n.point(k[0][0], k[0][1]), n.point(k[1][0], k[1][1]), n.lineEnd()) : (n.point(k[1][0], k[1][1]), n.lineEnd(), n.lineStart(), n.point(k[0][0], k[0][1]))));
                    !b || i && ff(i, p) || n.point(p[0], p[1]);
                    i = p;
                    r = b;
                    a = d
                },
                lineEnd: function() {
                    r && n.lineEnd();
                    i = null
                },
                clean: function() {
                    return u | (c && r) << 1
                }
            }
        }

        function o(n, u, e) {
            var et = li(n),
                ot = li(u),
                rt = [1, 0, 0],
                a = ir(et, ot),
                ut = nf(a, a),
                b = a[0],
                k = ut - b * b,
                g, o, it;
            if (!k) return !e && n;
            var st = i * ut / k,
                ht = -i * b / k,
                ct = ir(rt, a),
                s = tf(rt, st),
                lt = tf(a, ht);
            es(s, lt);
            var v = ct,
                p = nf(s, v),
                d = nf(v, v),
                ft = p * p - d * (nf(s, s) - 1);
            if (!(0 > ft)) {
                if (g = Math.sqrt(ft), o = tf(v, (-p - g) / d), es(o, s), o = uf(o), !e) return o;
                var w, h = n[0],
                    y = u[0],
                    c = n[1],
                    l = u[1];
                h > y && (w = h, h = y, y = w);
                var nt = y - h,
                    tt = r(nt - f) < t,
                    at = tt || t > nt;
                if (!tt && c > l && (w = c, c = l, l = w), at ? tt ? c + l > 0 ^ o[1] < (r(o[0] - h) < t ? c : l) : c <= o[1] && o[1] <= l : nt > f ^ (h <= o[0] && o[0] <= y)) return it = tf(v, (-p + g) / d), es(it, s), [o, uf(it)]
            }
        }

        function h(t, i) {
            var u = e ? n : f - n,
                r = 0;
            return -u > t ? r |= 1 : t > u && (r |= 2), -u > i ? r |= 4 : i > u && (r |= 8), r
        }
        var i = Math.cos(n),
            e = i > 0,
            l = r(i) > t,
            a = ls(n, 6 * u);
        return av(s, c, a, e ? [0, -n] : [-f, n - f])
    }

    function yv(n, t, i, r) {
        return function(u) {
            var f, a = u.a,
                v = u.b,
                c = a.x,
                l = a.y,
                y = v.x,
                p = v.y,
                e = 0,
                o = 1,
                s = y - c,
                h = p - l;
            if (f = n - c, s || !(f > 0)) {
                if (f /= s, 0 > s) {
                    if (e > f) return;
                    o > f && (o = f)
                } else if (s > 0) {
                    if (f > o) return;
                    f > e && (e = f)
                }
                if (f = i - c, s || !(0 > f)) {
                    if (f /= s, 0 > s) {
                        if (f > o) return;
                        f > e && (e = f)
                    } else if (s > 0) {
                        if (e > f) return;
                        o > f && (o = f)
                    }
                    if (f = t - l, h || !(f > 0)) {
                        if (f /= h, 0 > h) {
                            if (e > f) return;
                            o > f && (o = f)
                        } else if (h > 0) {
                            if (f > o) return;
                            f > e && (e = f)
                        }
                        if (f = r - l, h || !(0 > f)) {
                            if (f /= h, 0 > h) {
                                if (f > o) return;
                                f > e && (e = f)
                            } else if (h > 0) {
                                if (e > f) return;
                                o > f && (o = f)
                            }
                            return e > 0 && (u.a = {
                                x: c + e * s,
                                y: l + e * h
                            }), 1 > o && (u.b = {
                                x: c + o * s,
                                y: l + o * h
                            }), u
                        }
                    }
                }
            }
        }
    }

    function pv(i, u, f, e) {
        function o(n, e) {
            return r(n[0] - i) < t ? e > 0 ? 0 : 3 : r(n[0] - f) < t ? e > 0 ? 2 : 1 : r(n[1] - u) < t ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
        }

        function h(n, t) {
            return s(n.x, t.x)
        }

        function s(n, t) {
            var i = o(n, 1),
                r = o(t, 1);
            return i !== r ? i - r : 0 === i ? t[1] - n[1] : 1 === i ? n[0] - t[0] : 2 === i ? n[1] - t[1] : t[0] - n[0]
        }
        return function(t) {
            function ft(n) {
                for (var r = 0, s = c.length, u = n[1], f = 0; s > f; ++f)
                    for (var t, e = 1, o = c[f], h = o.length, i = o[0]; h > e; ++e) t = o[e], i[1] <= u ? t[1] > u && vo(i, t, n) > 0 && ++r : t[1] <= u && vo(i, t, n) < 0 && --r, i = t;
                return 0 !== r
            }

            function d(n, t, r, h) {
                var c = 0,
                    l = 0;
                if (null == n || (c = o(n, r)) !== (l = o(t, r)) || s(n, t) < 0 ^ r > 0) {
                    do h.point(0 === c || 3 === c ? i : f, c > 1 ? e : u); while ((c = (c + r + 4) % 4) !== l)
                } else h.point(t[0], t[1])
            }

            function g(n, t) {
                return n >= i && f >= n && t >= u && e >= t
            }

            function nt(n, i) {
                g(n, i) && t.point(n, i)
            }

            function et() {
                k.point = tt;
                c && c.push(v = []);
                w = !0;
                l = !1;
                y = p = NaN
            }

            function ot() {
                r && (tt(it, rt), ut && l && b.rejoin(), r.push(b.buffer()));
                k.point = nt;
                l && t.lineEnd()
            }

            function tt(n, i) {
                var r, u;
                n = Math.max(-pe, Math.min(pe, n));
                i = Math.max(-pe, Math.min(pe, i));
                r = g(n, i);
                (c && v.push([n, i]), w) ? (it = n, rt = i, ut = r, w = !1, r && (t.lineStart(), t.point(n, i))) : r && l ? t.point(n, i) : (u = {
                    a: {
                        x: y,
                        y: p
                    },
                    b: {
                        x: n,
                        y: i
                    }
                }, ht(u) ? (l || (t.lineStart(), t.point(u.a.x, u.a.y)), t.point(u.b.x, u.b.y), r || t.lineEnd(), a = !1) : r && (t.lineStart(), t.point(n, i), a = !1));
                y = n;
                p = i;
                l = r
            }
            var r, c, v, it, rt, ut, y, p, l, w, a, st = t,
                b = vv(),
                ht = yv(i, u, f, e),
                k = {
                    point: nt,
                    lineStart: et,
                    lineEnd: ot,
                    polygonStart: function() {
                        t = b;
                        r = [];
                        c = [];
                        a = !0
                    },
                    polygonEnd: function() {
                        t = st;
                        r = n.merge(r);
                        var u = ft([i, e]),
                            f = a && u,
                            o = r.length;
                        (f || o) && (t.polygonStart(), f && (t.lineStart(), d(null, null, 1, t), t.lineEnd()), o && cv(r, h, u, d, t), t.polygonEnd());
                        r = c = v = null
                    }
                };
            return k
        }
    }

    function ss(n) {
        var t = 0,
            i = f / 3,
            r = hs(n),
            u = r(t, i);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * f / 180, i = n[1] * f / 180) : [t / f * 180, i / f * 180]
        }, u
    }

    function wv(n, t) {
        function f(n, t) {
            var r = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
            return [r * Math.sin(n *= i), e - r * Math.cos(n)]
        }
        var r = Math.sin(n),
            i = (r + Math.sin(t)) / 2,
            u = 1 + r * (2 * i - r),
            e = Math.sqrt(u) / i;
        return f.invert = function(n, t) {
            var r = e - t;
            return [Math.atan2(n, r) / i, gt((u - (n * n + r * r) * i * i) / (2 * i))]
        }, f
    }

    function rg() {
        function i(i, r) {
            vc += t * i - n * r;
            n = i;
            t = r
        }
        var r, u, n, t;
        ei.point = function(f, e) {
            ei.point = i;
            r = n = f;
            u = t = e
        };
        ei.lineEnd = function() {
            i(r, u)
        }
    }

    function ug(n, t) {
        we > n && (we = n);
        n > ke && (ke = n);
        be > t && (be = t);
        t > de && (de = t)
    }

    function fg() {
        function i(n, i) {
            t.push("M", n, ",", i, u)
        }

        function f(i, r) {
            t.push("M", i, ",", r);
            n.point = e
        }

        function e(n, i) {
            t.push("L", n, ",", i)
        }

        function r() {
            n.point = i
        }

        function o() {
            t.push("Z")
        }
        var u = bv(4.5),
            t = [],
            n = {
                point: i,
                lineStart: function() {
                    n.point = f
                },
                lineEnd: r,
                polygonStart: function() {
                    n.lineEnd = o
                },
                polygonEnd: function() {
                    n.lineEnd = r;
                    n.point = i
                },
                pointRadius: function(t) {
                    return u = bv(t), n
                },
                result: function() {
                    if (t.length) {
                        var n = t.join("");
                        return t = [], n
                    }
                }
            };
        return n
    }

    function bv(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function ai(n, t) {
        wi += n;
        bi += t;
        ++wt
    }

    function kv() {
        function i(i, r) {
            var f = i - n,
                e = r - t,
                u = Math.sqrt(f * f + e * e);
            ri += u * (n + i) / 2;
            ui += u * (t + r) / 2;
            ht += u;
            ai(n = i, t = r)
        }
        var n, t;
        ut.point = function(r, u) {
            ut.point = i;
            ai(n = r, t = u)
        }
    }

    function dv() {
        ut.point = ai
    }

    function eg() {
        function i(i, r) {
            var f = i - n,
                e = r - t,
                u = Math.sqrt(f * f + e * e);
            ri += u * (n + i) / 2;
            ui += u * (t + r) / 2;
            ht += u;
            u = t * i - n * r;
            sr += u * (n + i);
            hr += u * (t + r);
            fi += 3 * u;
            ai(n = i, t = r)
        }
        var r, u, n, t;
        ut.point = function(f, e) {
            ut.point = i;
            ai(r = n = f, u = t = e)
        };
        ut.lineEnd = function() {
            i(r, u)
        }
    }

    function og(n) {
        function i(t, i) {
            n.moveTo(t + r, i);
            n.arc(t, i, r, 0, g)
        }

        function f(i, r) {
            n.moveTo(i, r);
            t.point = e
        }

        function e(t, i) {
            n.lineTo(t, i)
        }

        function u() {
            t.point = i
        }

        function o() {
            n.closePath()
        }
        var r = 4.5,
            t = {
                point: i,
                lineStart: function() {
                    t.point = f
                },
                lineEnd: u,
                polygonStart: function() {
                    t.lineEnd = o
                },
                polygonEnd: function() {
                    t.lineEnd = u;
                    t.point = i
                },
                pointRadius: function(n) {
                    return r = n, t
                },
                result: l
            };
        return t
    }

    function gv(n) {
        function o(n) {
            return (e ? h : s)(n)
        }

        function s(t) {
            return ty(t, function(i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            })
        }

        function h(t) {
            function y(i, r) {
                i = n(i, r);
                t.point(i[0], i[1])
            }

            function c() {
                u = NaN;
                r.point = l;
                t.lineStart()
            }

            function l(r, c) {
                var l = li([r, c]),
                    a = n(r, c);
                i(u, f, v, o, s, h, u = a[0], f = a[1], v = r, o = l[0], s = l[1], h = l[2], e, t);
                t.point(u, f)
            }

            function a() {
                r.point = y;
                t.lineEnd()
            }

            function nt() {
                c();
                r.point = tt;
                r.lineEnd = it
            }

            function tt(n, t) {
                l(p = n, rt = t);
                w = u;
                b = f;
                k = o;
                d = s;
                g = h;
                r.point = l
            }

            function it() {
                i(u, f, v, o, s, h, w, b, p, k, d, g, e, t);
                r.lineEnd = a;
                a()
            }
            var p, rt, w, b, k, d, g, v, u, f, o, s, h, r = {
                    point: y,
                    lineStart: c,
                    lineEnd: a,
                    polygonStart: function() {
                        t.polygonStart();
                        r.lineStart = nt
                    },
                    polygonEnd: function() {
                        t.polygonEnd();
                        r.lineStart = c
                    }
                };
            return r
        }

        function i(u, e, o, s, h, l, a, v, y, p, w, b, k, d) {
            var it = a - u,
                rt = v - e,
                et = it * it + rt * rt;
            if (et > 4 * f && k--) {
                var nt = s + p,
                    tt = h + w,
                    g = l + b,
                    ot = Math.sqrt(nt * nt + tt * tt + g * g),
                    vt = Math.asin(g /= ot),
                    st = r(r(g) - 1) < t || r(o - y) < t ? (o + y) / 2 : Math.atan2(tt, nt),
                    ht = n(st, vt),
                    ut = ht[0],
                    ft = ht[1],
                    ct = ut - u,
                    lt = ft - e,
                    at = rt * ct - it * lt;
                (at * at / et > f || r((it * ct + rt * lt) / et - .5) > .3 || c > s * p + h * w + l * b) && (i(u, e, o, s, h, l, ut, ft, st, nt /= ot, tt /= ot, g, k, d), d.point(ut, ft), i(ut, ft, st, nt, tt, g, a, v, y, p, w, b, k, d))
            }
        }
        var f = .5,
            c = Math.cos(30 * u),
            e = 16;
        return o.precision = function(n) {
            return arguments.length ? (e = (f = n * n) > 0 && 16, o) : Math.sqrt(f)
        }, o
    }

    function sg(n) {
        var t = gv(function(t, i) {
            return n([t * s, i * s])
        });
        return function(n) {
            return iy(t(n))
        }
    }

    function ny(n) {
        this.stream = n
    }

    function ty(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }

    function ni(n) {
        return hs(function() {
            return n
        })()
    }

    function hs(t) {
        function i(n) {
            return n = a(n[0] * u, n[1] * u), [n[0] * r + h, c - n[1] * r]
        }

        function et(n) {
            return n = a.invert((n[0] - h) / r, (c - n[1]) / r), n && [n[0] * s, n[1] * s]
        }

        function e() {
            a = hv(tt = cs(k, d, g), o);
            var n = o(w, b);
            return h = y - n[0] * r, c = p + n[1] * r, l()
        }

        function l() {
            return f && (f.valid = !1, f = null), i
        }
        var o, tt, a, h, c, f, it = gv(function(n, t) {
                return n = o(n, t), [n[0] * r + h, c - n[1] * r]
            }),
            r = 150,
            y = 480,
            p = 250,
            w = 0,
            b = 0,
            k = 0,
            d = 0,
            g = 0,
            rt = cb,
            ut = v,
            nt = null,
            ft = null;
        return i.stream = function(n) {
            return f && (f.valid = !1), f = iy(rt(tt, it(ut(n)))), f.valid = !0, f
        }, i.clipAngle = function(n) {
            return arguments.length ? (rt = null == n ? (nt = n, cb) : ig((nt = +n) * u), l()) : nt
        }, i.clipExtent = function(n) {
            return arguments.length ? (ft = n, ut = n ? pv(n[0][0], n[0][1], n[1][0], n[1][1]) : v, l()) : ft
        }, i.scale = function(n) {
            return arguments.length ? (r = +n, e()) : r
        }, i.translate = function(n) {
            return arguments.length ? (y = +n[0], p = +n[1], e()) : [y, p]
        }, i.center = function(n) {
            return arguments.length ? (w = n[0] % 360 * u, b = n[1] % 360 * u, e()) : [w * s, b * s]
        }, i.rotate = function(n) {
            return arguments.length ? (k = n[0] % 360 * u, d = n[1] % 360 * u, g = n.length > 2 ? n[2] % 360 * u : 0, e()) : [k * s, d * s, g * s]
        }, n.rebind(i, it, "precision"),
        function() {
            return o = t.apply(this, arguments), i.invert = o.invert && et, e()
        }
    }

    function iy(n) {
        return ty(n, function(t, i) {
            n.point(t * u, i * u)
        })
    }

    function yr(n, t) {
        return [n, t]
    }

    function ry(n, t) {
        return [n > f ? n - g : -f > n ? n + g : n, t]
    }

    function cs(n, t, i) {
        return n ? t || i ? hv(fy(n), ey(t, i)) : fy(n) : t || i ? ey(t, i) : ry
    }

    function uy(n) {
        return function(t, i) {
            return t += n, [t > f ? t - g : -f > t ? t + g : t, i]
        }
    }

    function fy(n) {
        var t = uy(n);
        return t.invert = uy(-n), t
    }

    function ey(n, t) {
        function e(n, t) {
            var e = Math.cos(t),
                o = Math.cos(n) * e,
                s = Math.sin(n) * e,
                h = Math.sin(t),
                c = h * i + o * r;
            return [Math.atan2(s * u - c * f, o * i - h * r), gt(c * u + s * f)]
        }
        var i = Math.cos(n),
            r = Math.sin(n),
            u = Math.cos(t),
            f = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t),
                o = Math.cos(n) * e,
                s = Math.sin(n) * e,
                h = Math.sin(t),
                c = h * u - s * f;
            return [Math.atan2(s * u + h * f, o * i + c * r), gt(c * i - o * r)]
        }, e
    }

    function ls(n, t) {
        var i = Math.cos(n),
            r = Math.sin(n);
        return function(u, f, e, o) {
            var h = e * t,
                c, s;
            for (null != u ? (u = oy(i, u), f = oy(i, f), (e > 0 ? f > u : u > f) && (u += e * g)) : (u = n + e * g, f = n - .5 * h), s = u; e > 0 ? s > f : f > s; s -= h) o.point((c = uf([i, -r * Math.cos(s), -r * Math.sin(s)]))[0], c[1])
        }
    }

    function oy(n, i) {
        var r = li(i),
            u;
        return r[0] -= n, rf(r), u = va(-r[1]), ((-r[2] < 0 ? -u : u) + 2 * Math.PI - t) % (2 * Math.PI)
    }

    function sy(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function(n) {
            return f.map(function(t) {
                return [n, t]
            })
        }
    }

    function hy(i, r, u) {
        var f = n.range(i, r - t, u).concat(r);
        return function(n) {
            return f.map(function(t) {
                return [t, n]
            })
        }
    }

    function as(n) {
        return n.source
    }

    function vs(n) {
        return n.target
    }

    function hg(n, t, i, r) {
        var f = Math.cos(t),
            c = Math.sin(t),
            e = Math.cos(r),
            l = Math.sin(r),
            a = f * Math.cos(n),
            v = f * Math.sin(n),
            y = e * Math.cos(i),
            p = e * Math.sin(i),
            u = 2 * Math.asin(Math.sqrt(pa(r - t) + f * e * pa(i - n))),
            o = 1 / Math.sin(u),
            h = u ? function(n) {
                var t = Math.sin(n *= u) * o,
                    i = Math.sin(u - n) * o,
                    r = i * a + t * y,
                    f = i * v + t * p,
                    e = i * c + t * l;
                return [Math.atan2(f, r) * s, Math.atan2(e, Math.sqrt(r * r + f * f)) * s]
            } : function() {
                return [n * s, t * s]
            };
        return h.distance = u, h
    }

    function cg() {
        function f(f, e) {
            var h = Math.sin(e *= u),
                s = Math.cos(e),
                o = r((f *= u) - i),
                c = Math.cos(o);
            yc += Math.atan2(Math.sqrt((o = s * Math.sin(o)) * o + (o = t * h - n * s * c) * o), n * h + t * s * c);
            i = f;
            n = h;
            t = s
        }
        var i, n, t;
        ki.point = function(r, e) {
            i = r * u;
            n = Math.sin(e *= u);
            t = Math.cos(e);
            ki.point = f
        };
        ki.lineEnd = function() {
            ki.point = ki.lineEnd = l
        }
    }

    function pr(n, t) {
        function i(t, i) {
            var f = Math.cos(t),
                r = Math.cos(i),
                u = n(f * r);
            return [u * r * Math.sin(t), u * Math.sin(i)]
        }
        return i.invert = function(n, i) {
            var r = Math.sqrt(n * n + i * i),
                u = t(r),
                f = Math.sin(u),
                e = Math.cos(u);
            return [Math.atan2(n * f, r * e), Math.asin(r && i * f / r)]
        }, i
    }

    function cy(n, i) {
        function o(n, i) {
            u > 0 ? -h + t > i && (i = -h + t) : i > h - t && (i = h - t);
            var f = u / Math.pow(e(i), r);
            return [f * Math.sin(r * n), u - f * Math.cos(r * n)]
        }
        var s = Math.cos(n),
            e = function(n) {
                return Math.tan(f / 4 + n / 2)
            }, r = n === i ? Math.sin(n) : Math.log(s / Math.cos(i)) / Math.log(e(i) / e(n)),
            u = s * Math.pow(e(n), r) / r;
        return r ? (o.invert = function(n, t) {
            var i = u - t,
                f = aa(r) * Math.sqrt(n * n + i * i);
            return [Math.atan2(n, i) / r, 2 * Math.atan(Math.pow(u / f, 1 / r)) - h]
        }, o) : of
    }

    function ly(n, i) {
        function e(n, t) {
            var i = f - t;
            return [i * Math.sin(u * n), f - i * Math.cos(u * n)]
        }
        var o = Math.cos(n),
            u = n === i ? Math.sin(n) : (o - Math.cos(i)) / (i - n),
            f = o / u + n;
        return r(u) < t ? yr : (e.invert = function(n, t) {
            var i = f - t;
            return [Math.atan2(n, i) / u, f - aa(u) * Math.sqrt(n * n + i * i)]
        }, e)
    }

    function of(n, t) {
        return [n, Math.log(Math.tan(f / 4 + t / 2))]
    }

    function ay(n) {
        var i, t = ni(n),
            r = t.scale,
            u = t.translate,
            e = t.clipExtent;
        return t.scale = function() {
            var n = r.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null) : t : n
        }, t.translate = function() {
            var n = u.apply(t, arguments);
            return n === t ? i ? t.clipExtent(null) : t : n
        }, t.clipExtent = function(n) {
            var h = e.apply(t, arguments),
                o, s;
            return h === t ? (i = null == n) && (o = f * r(), s = u(), e([
                [s[0] - o, s[1] - o],
                [s[0] + o, s[1] + o]
            ])) : i && (h = null), h
        }, t.clipExtent(null)
    }

    function ys(n, t) {
        return [Math.log(Math.tan(f / 4 + t / 2)), -n]
    }

    function ur(n) {
        return n[0]
    }

    function wr(n) {
        return n[1]
    }

    function vy(n) {
        for (var u = n.length, i = [0, 1], t = 2, r = 2; u > r; r++) {
            for (; t > 1 && vo(n[i[t - 2]], n[i[t - 1]], n[r]) <= 0;)--t;
            i[t++] = r
        }
        return i.slice(0, t)
    }

    function lg(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function ps(n, t, i) {
        return (i[0] - t[0]) * (n[1] - t[1]) < (i[1] - t[1]) * (n[0] - t[0])
    }

    function ws(n, t, i, r) {
        var u = n[0],
            e = i[0],
            o = t[0] - u,
            s = r[0] - e,
            f = n[1],
            h = i[1],
            c = t[1] - f,
            l = r[1] - h,
            a = (s * (f - h) - l * (u - e)) / (l * o - s * c);
        return [u + a * o, f + a * c]
    }

    function yy(n) {
        var t = n[0],
            i = n[n.length - 1];
        return !(t[0] - i[0] || t[1] - i[1])
    }

    function ag() {
        cf(this);
        this.edge = this.site = this.circle = null
    }

    function py(n) {
        var t = nl.pop() || new ag;
        return t.site = n, t
    }

    function bs(n) {
        er(n);
        lr.remove(n);
        nl.push(n);
        cf(n)
    }

    function vg(n) {
        var a = n.circle,
            o = a.x,
            s = a.cy,
            v = {
                x: o,
                y: s
            }, h = n.P,
            c = n.N,
            f = [n],
            u, i, e, l;
        for (bs(n), u = h; u.circle && r(o - u.circle.x) < t && r(s - u.circle.cy) < t;) h = u.P, f.unshift(u), bs(u), u = h;
        for (f.unshift(u), er(u), i = c; i.circle && r(o - i.circle.x) < t && r(s - i.circle.cy) < t;) c = i.N, f.push(i), bs(i), i = c;
        for (f.push(i), er(i), l = f.length, e = 1; l > e; ++e) i = f[e], u = f[e - 1], sf(i.edge, u.site, i.site, v);
        u = f[0];
        i = f[l - 1];
        i.edge = br(u.site, i.site, null, v);
        fr(u);
        fr(i)
    }

    function yg(n) {
        for (var f, i, r, a, v, b = n.x, k = n.y, u = lr._; u;)
            if (a = wy(u, k) - b, a > t) u = u.L;
            else {
                if (v = b - pg(u, k), !(v > t)) {
                    a > -t ? (i = u.P, r = u) : v > -t ? (i = u, r = u.N) : i = r = u;
                    break
                }
                if (!u.R) {
                    i = u;
                    break
                }
                u = u.R
            }
        if (f = py(n), lr.insert(i, f), i || r) {
            if (i === r) return er(i), r = py(i.site), lr.insert(f, r), f.edge = r.edge = br(i.site, f.site), fr(i), void fr(r);
            if (!r) return void(f.edge = br(i.site, f.site));
            er(i);
            er(r);
            var e = i.site,
                y = e.x,
                p = e.y,
                o = n.x - y,
                s = n.y - p,
                h = r.site,
                c = h.x - y,
                l = h.y - p,
                d = 2 * (o * l - s * c),
                g = o * o + s * s,
                nt = c * c + l * l,
                w = {
                    x: (l * g - s * nt) / d + y,
                    y: (o * nt - c * g) / d + p
                };
            sf(r.edge, e, h, w);
            f.edge = br(e, n, null, w);
            r.edge = br(n, h, null, w);
            fr(i);
            fr(r)
        }
    }

    function wy(n, t) {
        var i = n.site,
            u = i.x,
            l = i.y,
            f = l - t,
            e;
        if (!f) return u;
        if (e = n.P, !e) return -1 / 0;
        i = e.site;
        var o = i.x,
            a = i.y,
            r = a - t;
        if (!r) return o;
        var s = o - u,
            h = 1 / f - 1 / r,
            c = s / r;
        return h ? (-c + Math.sqrt(c * c - 2 * h * (s * s / (-2 * r) - a + r / 2 + l - f / 2))) / h + u : (u + o) / 2
    }

    function pg(n, t) {
        var r = n.N,
            i;
        return r ? wy(r, t) : (i = n.site, i.y === t ? i.x : 1 / 0)
    }

    function by(n) {
        this.site = n;
        this.edges = []
    }

    function wg(n) {
        for (var i, u, f, e, o, s, h, y, w, p, c = n[0][0], l = n[1][0], a = n[0][1], v = n[1][1], b = di, k = b.length; k--;)
            if (o = b[k], o && o.prepare())
                for (h = o.edges, y = h.length, s = 0; y > s;) p = h[s].end(), f = p.x, e = p.y, w = h[++s % y].start(), i = w.x, u = w.y, (r(f - i) > t || r(e - u) > t) && (h.splice(s, 0, new hf(gg(o.site, p, r(f - c) < t && v - e > t ? {
                    x: c,
                    y: r(i - c) < t ? u : v
                } : r(e - v) < t && l - f > t ? {
                    x: r(u - v) < t ? i : l,
                    y: v
                } : r(f - l) < t && e - a > t ? {
                    x: l,
                    y: r(i - l) < t ? u : a
                } : r(e - a) < t && f - c > t ? {
                    x: r(u - a) < t ? i : c,
                    y: a
                } : null), o.site, null)), ++y)
    }

    function ky(n, t) {
        return t.angle - n.angle
    }

    function bg() {
        cf(this);
        this.x = this.y = this.arc = this.site = this.cy = null
    }

    function fr(n) {
        var w = n.P,
            b = n.N,
            u, t;
        if (w && b) {
            var s = w.site,
                h = n.site,
                c = b.site;
            if (s !== c) {
                var l = h.x,
                    a = h.y,
                    f = s.x - l,
                    e = s.y - a,
                    o = c.x - l,
                    r = c.y - a,
                    v = 2 * (f * r - e * o);
                if (!(v >= -rc)) {
                    var k = f * f + e * e,
                        d = o * o + r * r,
                        y = (r * k - e * d) / v,
                        p = (f * d - o * k) / v,
                        r = p + a,
                        i = tl.pop() || new bg;
                    for (i.arc = n, i.site = h, i.x = y + l, i.y = r + Math.sqrt(y * y + p * p), i.cy = r, n.circle = i, u = null, t = hu._; t;)
                        if (i.y < t.y || i.y === t.y && i.x <= t.x) {
                            if (!t.L) {
                                u = t.P;
                                break
                            }
                            t = t.L
                        } else {
                            if (!t.R) {
                                u = t;
                                break
                            }
                            t = t.R
                        }
                    hu.insert(u, i);
                    u || (gc = i)
                }
            }
        }
    }

    function er(n) {
        var t = n.circle;
        t && (t.P || (gc = t.N), hu.remove(t), tl.push(t), cf(t), n.circle = null)
    }

    function kg(n) {
        for (var i, u = cr, e = yv(n[0][0], n[0][1], n[1][0], n[1][1]), f = u.length; f--;) i = u[f], (!dg(i, n) || !e(i) || r(i.a.x - i.b.x) < t && r(i.a.y - i.b.y) < t) && (i.a = i.b = null, u.splice(f, 1))
    }

    function dg(n, t) {
        var f = n.b;
        if (f) return !0;
        var r, u, i = n.a,
            h = t[0][0],
            c = t[1][0],
            e = t[0][1],
            o = t[1][1],
            p = n.l,
            w = n.r,
            l = p.x,
            a = p.y,
            v = w.x,
            y = w.y,
            s = (l + v) / 2,
            b = (a + y) / 2;
        if (y === a) {
            if (h > s || s >= c) return;
            if (l > v) {
                if (i) {
                    if (i.y >= o) return
                } else i = {
                    x: s,
                    y: e
                };
                f = {
                    x: s,
                    y: o
                }
            } else {
                if (i) {
                    if (i.y < e) return
                } else i = {
                    x: s,
                    y: o
                };
                f = {
                    x: s,
                    y: e
                }
            }
        } else if (r = (l - v) / (y - a), u = b - r * s, -1 > r || r > 1)
            if (l > v) {
                if (i) {
                    if (i.y >= o) return
                } else i = {
                    x: (e - u) / r,
                    y: e
                };
                f = {
                    x: (o - u) / r,
                    y: o
                }
            } else {
                if (i) {
                    if (i.y < e) return
                } else i = {
                    x: (o - u) / r,
                    y: o
                };
                f = {
                    x: (e - u) / r,
                    y: e
                }
            } else if (y > a) {
            if (i) {
                if (i.x >= c) return
            } else i = {
                x: h,
                y: r * h + u
            };
            f = {
                x: c,
                y: r * c + u
            }
        } else {
            if (i) {
                if (i.x < h) return
            } else i = {
                x: c,
                y: r * c + u
            };
            f = {
                x: h,
                y: r * h + u
            }
        }
        return n.a = i, n.b = f, !0
    }

    function dy(n, t) {
        this.l = n;
        this.r = t;
        this.a = this.b = null
    }

    function br(n, t, i, r) {
        var u = new dy(n, t);
        return cr.push(u), i && sf(u, n, t, i), r && sf(u, t, n, r), di[n.i].edges.push(new hf(u, n, t)), di[t.i].edges.push(new hf(u, t, n)), u
    }

    function gg(n, t, i) {
        var r = new dy(n, null);
        return r.a = t, r.b = i, cr.push(r), r
    }

    function sf(n, t, i, r) {
        n.a || n.b ? n.l === i ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = i)
    }

    function hf(n, t, i) {
        var r = n.a,
            u = n.b;
        this.edge = n;
        this.site = t;
        this.angle = i ? Math.atan2(i.y - t.y, i.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }

    function ks() {
        this._ = null
    }

    function cf(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function kr(n, t) {
        var i = t,
            r = t.R,
            u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.R = r.L;
        i.R && (i.R.U = i);
        r.L = i
    }

    function dr(n, t) {
        var i = t,
            r = t.L,
            u = i.U;
        u ? u.L === i ? u.L = r : u.R = r : n._ = r;
        r.U = u;
        i.U = r;
        i.L = r.R;
        i.L && (i.L.U = i);
        r.R = i
    }

    function gy(n) {
        for (; n.L;) n = n.L;
        return n
    }

    function ds(n, t) {
        var u, f, r, i = n.sort(nn).pop(),
            e;
        for (cr = [], di = new Array(n.length), lr = new ks, hu = new ks;;)
            if (r = gc, i && (!r || i.y < r.y || i.y === r.y && i.x < r.x))(i.x !== u || i.y !== f) && (di[i.i] = new by(i), yg(i), u = i.x, f = i.y), i = n.pop();
            else {
                if (!r) break;
                vg(r.arc)
            }
        return t && (kg(t), wg(t)), e = {
            cells: di,
            edges: cr
        }, lr = hu = cr = di = null, e
    }

    function nn(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function tn(n, t, i) {
        return (n.x - i.x) * (t.y - n.y) - (n.x - t.x) * (i.y - n.y)
    }

    function rn(n) {
        return n.x
    }

    function un(n) {
        return n.y
    }

    function np() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function gr(n, t, i, r, u, f) {
        if (!n(t, i, r, u, f)) {
            var o = .5 * (i + u),
                s = .5 * (r + f),
                e = t.nodes;
            e[0] && gr(n, e[0], i, r, o, s);
            e[1] && gr(n, e[1], o, r, u, s);
            e[2] && gr(n, e[2], i, s, o, f);
            e[3] && gr(n, e[3], o, s, u, f)
        }
    }

    function fn(n, t, i, r, u, f, e) {
        var s, h = 1 / 0;
        return function o(n, c, l, a, v) {
            var y;
            if (!(c > f || l > e || r > a || u > v)) {
                if (k = n.point) {
                    var k, d = t - n.x,
                        g = i - n.y,
                        nt = d * d + g * g;
                    h > nt && (y = Math.sqrt(h = nt), r = t - y, u = i - y, f = t + y, e = i + y, s = k)
                }
                for (var tt = n.nodes, p = .5 * (c + a), w = .5 * (l + v), it = t >= p, rt = i >= w, b = rt << 1 | it, ut = b + 4; ut > b; ++b)
                    if (n = tt[3 & b]) switch (3 & b) {
                        case 0:
                            o(n, c, l, p, w);
                            break;
                        case 1:
                            o(n, p, l, a, w);
                            break;
                        case 2:
                            o(n, c, w, p, v);
                            break;
                        case 3:
                            o(n, p, w, a, v)
                    }
            }
        }(n, r, u, f, e), s
    }

    function gs(t, i) {
        t = n.rgb(t);
        i = n.rgb(i);
        var r = t.r,
            u = t.g,
            f = t.b,
            e = i.r - r,
            o = i.g - u,
            s = i.b - f;
        return function(n) {
            return "#" + tr(Math.round(r + e * n)) + tr(Math.round(u + o * n)) + tr(Math.round(f + s * n))
        }
    }

    function tp(n, t) {
        var i, u = {}, r = {};
        for (i in n) i in t ? u[i] = vi(n[i], t[i]) : r[i] = n[i];
        for (i in t) i in n || (r[i] = t[i]);
        return function(n) {
            for (i in u) r[i] = u[i](n);
            return r
        }
    }

    function yt(n, t) {
        return n = +n, t = +t,
        function(i) {
            return n * (1 - i) + t * i
        }
    }

    function ip(n, t) {
        var s, f, u, e = ge.lastIndex = no.lastIndex = 0,
            r = -1,
            i = [],
            o = [];
        for (n += "", t += "";
            (s = ge.exec(n)) && (f = no.exec(t));)(u = f.index) > e && (u = t.slice(e, u), i[r] ? i[r] += u : i[++r] = u), (s = s[0]) === (f = f[0]) ? i[r] ? i[r] += f : i[++r] = f : (i[++r] = null, o.push({
            i: r,
            x: yt(s, f)
        })), e = no.lastIndex;
        return e < t.length && (u = t.slice(e), i[r] ? i[r] += u : i[++r] = u), i.length < 2 ? o[0] ? (t = o[0].x, function(n) {
            return t(n) + ""
        }) : function() {
            return t
        } : (t = o.length, function(n) {
            for (var u, r = 0; t > r; ++r) i[(u = o[r]).i] = u.x(n);
            return i.join("")
        })
    }

    function vi(t, i) {
        for (var r, u = n.interpolators.length; --u >= 0 && !(r = n.interpolators[u](t, i)););
        return r
    }

    function lf(n, t) {
        for (var u = [], r = [], e = n.length, o = t.length, f = Math.min(n.length, t.length), i = 0; f > i; ++i) u.push(vi(n[i], t[i]));
        for (; e > i; ++i) r[i] = n[i];
        for (; o > i; ++i) r[i] = t[i];
        return function(n) {
            for (i = 0; f > i; ++i) r[i] = u[i](n);
            return r
        }
    }

    function en(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function rp(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }

    function up(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function on(n) {
        return n * n
    }

    function sn(n) {
        return n * n * n
    }

    function hn(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n,
            i = t * n;
        return 4 * (.5 > n ? i : 3 * (n - t) + i - .75)
    }

    function cn(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }

    function ln(n) {
        return 1 - Math.cos(n * h)
    }

    function an(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function vn(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function yn(n, t) {
        var i;
        return arguments.length < 2 && (t = .45), arguments.length ? i = t / g * Math.asin(1 / n) : (n = 1, i = t / 4),
        function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - i) * g / t)
        }
    }

    function pn(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function wn(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function bn(t, i) {
        t = n.hcl(t);
        i = n.hcl(i);
        var u = t.h,
            f = t.c,
            o = t.l,
            r = i.h - u,
            e = i.c - f,
            s = i.l - o;
        return isNaN(e) && (e = 0, f = isNaN(f) ? i.c : f), isNaN(r) ? (r = 0, u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : -180 > r && (r += 360),
        function(n) {
            return po(u + r * n, f + e * n, o + s * n) + ""
        }
    }

    function kn(t, i) {
        t = n.hsl(t);
        i = n.hsl(i);
        var u = t.h,
            f = t.s,
            o = t.l,
            r = i.h - u,
            e = i.s - f,
            s = i.l - o;
        return isNaN(e) && (e = 0, f = isNaN(f) ? i.s : f), isNaN(r) ? (r = 0, u = isNaN(u) ? i.h : u) : r > 180 ? r -= 360 : -180 > r && (r += 360),
        function(n) {
            return yo(u + r * n, f + e * n, o + s * n) + ""
        }
    }

    function dn(t, i) {
        t = n.lab(t);
        i = n.lab(i);
        var r = t.l,
            u = t.a,
            f = t.b,
            e = i.l - r,
            o = i.a - u,
            s = i.b - f;
        return function(n) {
            return wa(r + e * n, u + o * n, f + s * n) + ""
        }
    }

    function fp(n, t) {
        return t -= n,
        function(i) {
            return Math.round(n + t * i)
        }
    }

    function ep(n) {
        var t = [n.a, n.b],
            i = [n.c, n.d],
            r = sp(t),
            u = op(t, i),
            f = sp(gn(i, t, -u)) || 0;
        t[0] * i[1] < i[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1);
        this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-i[0], i[1])) * s;
        this.translate = [n.e, n.f];
        this.scale = [r, f];
        this.skew = f ? Math.atan2(u, f) * s : 0
    }

    function op(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function sp(n) {
        var t = Math.sqrt(op(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function gn(n, t, i) {
        return n[0] += i * t[0], n[1] += i * t[1], n
    }

    function hp(t, i) {
        var s, r = [],
            o = [],
            c = n.transform(t),
            l = n.transform(i),
            a = c.translate,
            u = l.translate,
            h = c.rotate,
            f = l.rotate,
            p = c.skew,
            v = l.skew,
            y = c.scale,
            e = l.scale;
        return a[0] != u[0] || a[1] != u[1] ? (r.push("translate(", null, ",", null, ")"), o.push({
            i: 1,
            x: yt(a[0], u[0])
        }, {
            i: 3,
            x: yt(a[1], u[1])
        })) : r.push(u[0] || u[1] ? "translate(" + u + ")" : ""), h != f ? (h - f > 180 ? f += 360 : f - h > 180 && (h += 360), o.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: yt(h, f)
        })) : f && r.push(r.pop() + "rotate(" + f + ")"), p != v ? o.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: yt(p, v)
        }) : v && r.push(r.pop() + "skewX(" + v + ")"), y[0] != e[0] || y[1] != e[1] ? (s = r.push(r.pop() + "scale(", null, ",", null, ")"), o.push({
            i: s - 4,
            x: yt(y[0], e[0])
        }, {
            i: s - 2,
            x: yt(y[1], e[1])
        })) : (1 != e[0] || 1 != e[1]) && r.push(r.pop() + "scale(" + e + ")"), s = o.length,
        function(n) {
            for (var t, i = -1; ++i < s;) r[(t = o[i]).i] = t.x(n);
            return r.join("")
        }
    }

    function ntt(n, t) {
        return t = (t -= n = +n) || 1 / t,
        function(i) {
            return (i - n) / t
        }
    }

    function ttt(n, t) {
        return t = (t -= n = +n) || 1 / t,
        function(i) {
            return Math.max(0, Math.min(1, (i - n) / t))
        }
    }

    function itt(n) {
        for (var f, t = n.source, i = n.target, u = rtt(t, i), r = [t]; t !== u;) t = t.parent, r.push(t);
        for (f = r.length; i !== u;) r.splice(f, 0, i), i = i.parent;
        return r
    }

    function cp(n) {
        for (var i = [], t = n.parent; null != t;) i.push(n), n = t, t = t.parent;
        return i.push(n), i
    }

    function rtt(n, t) {
        if (n === t) return n;
        for (var r = cp(n), u = cp(t), i = r.pop(), f = u.pop(), e = null; i === f;) e = i, i = r.pop(), f = u.pop();
        return e
    }

    function utt(n) {
        n.fixed |= 2
    }

    function ftt(n) {
        n.fixed &= -7
    }

    function ett(n) {
        n.fixed |= 4;
        n.px = n.x;
        n.py = n.y
    }

    function ott(n) {
        n.fixed &= -5
    }

    function lp(n, t, i) {
        var f = 0,
            e = 0,
            u;
        if (n.charge = 0, !n.leaf)
            for (var r, o = n.nodes, h = o.length, s = -1; ++s < h;) r = o[s], null != r && (lp(r, t, i), n.charge += r.charge, f += r.charge * r.cx, e += r.charge * r.cy);
        n.point && (n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5), u = t * i[n.point.index], n.charge += n.pointCharge = u, f += u * n.point.x, e += u * n.point.y);
        n.cx = f / n.charge;
        n.cy = e / n.charge
    }

    function nu(t, i) {
        return n.rebind(t, i, "sort", "children", "value"), t.nodes = t, t.links = ltt, t
    }

    function tu(n, t) {
        for (var r, u, i = [n]; null != (n = i.pop());)
            if (t(n), (u = n.children) && (r = u.length))
                for (; --r >= 0;) i.push(u[r])
    }

    function et(n, t) {
        for (var e, u, f, i = [n], r = []; null != (n = i.pop());)
            if (r.push(n), (u = n.children) && (e = u.length))
                for (f = -1; ++f < e;) i.push(u[f]);
        for (; null != (n = r.pop());) t(n)
    }

    function stt(n) {
        return n.children
    }

    function htt(n) {
        return n.value
    }

    function ctt(n, t) {
        return t.value - n.value
    }

    function ltt(t) {
        return n.merge(t.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            })
        }))
    }

    function att(n) {
        return n.x
    }

    function vtt(n) {
        return n.y
    }

    function ytt(n, t, i) {
        n.y0 = t;
        n.y = i
    }

    function nh(t) {
        return n.range(t.length)
    }

    function th(n) {
        for (var t = -1, r = n[0].length, i = []; ++t < r;) i[t] = 0;
        return i
    }

    function ptt(n) {
        for (var i, t = 1, r = 0, u = n[0][1], f = n.length; f > t; ++t)(i = n[t][1]) > u && (r = t, u = i);
        return r
    }

    function wtt(n) {
        return n.reduce(btt, 0)
    }

    function btt(n, t) {
        return n + t[1]
    }

    function ktt(n, t) {
        return ap(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function ap(n, t) {
        for (var i = -1, r = +n[0], f = (n[1] - r) / t, u = []; ++i <= t;) u[i] = f * i + r;
        return u
    }

    function dtt(t) {
        return [n.min(t), n.max(t)]
    }

    function gtt(n, t) {
        return n.value - t.value
    }

    function ih(n, t) {
        var i = n._pack_next;
        n._pack_next = t;
        t._pack_prev = n;
        t._pack_next = i;
        i._pack_prev = t
    }

    function vp(n, t) {
        n._pack_next = t;
        t._pack_prev = n
    }

    function yp(n, t) {
        var i = t.x - n.x,
            r = t.y - n.y,
            u = n.r + t.r;
        return .999 * u * u > i * i + r * r
    }

    function pp(n) {
        function h(n) {
            c = Math.min(n.x - n.r, c);
            l = Math.max(n.x + n.r, l);
            a = Math.min(n.y - n.r, a);
            v = Math.max(n.y + n.r, v)
        }
        if ((u = n.children) && (s = u.length)) {
            var u, i, r, t, f, e, o, s, c = 1 / 0,
                l = -1 / 0,
                a = 1 / 0,
                v = -1 / 0;
            if (u.forEach(nit), i = u[0], i.x = -i.r, i.y = 0, h(i), s > 1 && (r = u[1], r.x = r.r, r.y = 0, h(r), s > 2))
                for (t = u[2], bp(i, r, t), h(t), ih(i, t), i._pack_prev = t, ih(t, r), r = i._pack_next, f = 3; s > f; f++) {
                    bp(i, r, t = u[f]);
                    var y = 0,
                        p = 1,
                        w = 1;
                    for (e = r._pack_next; e !== r; e = e._pack_next, p++)
                        if (yp(e, t)) {
                            y = 1;
                            break
                        }
                    if (1 == y)
                        for (o = i._pack_prev; o !== e._pack_prev && !yp(o, t); o = o._pack_prev, w++);
                    y ? (w > p || p == w && r.r < i.r ? vp(i, r = e) : vp(i = o, r), f--) : (ih(i, t), r = t, h(t))
                }
            var k = (c + l) / 2,
                d = (a + v) / 2,
                b = 0;
            for (f = 0; s > f; f++) t = u[f], t.x -= k, t.y -= d, b = Math.max(b, t.r + Math.sqrt(t.x * t.x + t.y * t.y));
            n.r = b;
            u.forEach(tit)
        }
    }

    function nit(n) {
        n._pack_next = n._pack_prev = n
    }

    function tit(n) {
        delete n._pack_next;
        delete n._pack_prev
    }

    function wp(n, t, i, r) {
        var u = n.children,
            f, e;
        if (n.x = t += r * n.x, n.y = i += r * n.y, n.r *= r, u)
            for (f = -1, e = u.length; ++f < e;) wp(u[f], t, i, r)
    }

    function bp(n, t, i) {
        var r = n.r + i.r,
            f = t.x - n.x,
            e = t.y - n.y,
            u, o, s, h;
        r && (f || e) ? (u = t.r + i.r, o = f * f + e * e, u *= u, r *= r, s = .5 + (r - u) / (2 * o), h = Math.sqrt(Math.max(0, 2 * u * (r + o) - (r -= o) * r - u * u)) / (2 * o), i.x = n.x + s * f + h * e, i.y = n.y + s * e - h * f) : (i.x = n.x + r, i.y = n.y)
    }

    function kp(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function rh(n) {
        var t = n.children;
        return t.length ? t[0] : n.t
    }

    function uh(n) {
        var t, i = n.children;
        return (t = i.length) ? i[t - 1] : n.t
    }

    function iit(n, t, i) {
        var r = i / (t.i - n.i);
        t.c -= r;
        t.s += i;
        n.c += r;
        t.z += i;
        t.m += i
    }

    function rit(n) {
        for (var t, i = 0, f = 0, r = n.children, u = r.length; --u >= 0;) t = r[u], t.z += i, t.m += i, i += t.s + (f += t.c)
    }

    function uit(n, t, i) {
        return n.a.parent === t.parent ? n.a : i
    }

    function fit(t) {
        return 1 + n.max(t, function(n) {
            return n.y
        })
    }

    function eit(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function dp(n) {
        var t = n.children;
        return t && t.length ? dp(t[0]) : n
    }

    function gp(n) {
        var i, t = n.children;
        return t && (i = t.length) ? gp(t[i - 1]) : n
    }

    function fh(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }

    function nw(n, t) {
        var u = n.x + t[3],
            f = n.y + t[0],
            i = n.dx - t[1] - t[3],
            r = n.dy - t[0] - t[2];
        return 0 > i && (u += i / 2, i = 0), 0 > r && (f += r / 2, r = 0), {
            x: u,
            y: f,
            dx: i,
            dy: r
        }
    }

    function or(n) {
        var t = n[0],
            i = n[n.length - 1];
        return i > t ? [t, i] : [i, t]
    }

    function af(n) {
        return n.rangeExtent ? n.rangeExtent() : or(n.range())
    }

    function oit(n, t, i, r) {
        var u = i(n[0], n[1]),
            f = r(t[0], t[1]);
        return function(n) {
            return f(u(n))
        }
    }

    function eh(n, t) {
        var i, r = 0,
            u = n.length - 1,
            f = n[r],
            e = n[u];
        return f > e && (i = r, r = u, u = i, i = f, f = e, e = i), n[r] = t.floor(f), n[u] = t.ceil(e), n
    }

    function sit(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : pb
    }

    function hit(t, i, r, u) {
        var o = [],
            s = [],
            f = 0,
            e = Math.min(t.length, i.length) - 1;
        for (t[e] < t[0] && (t = t.slice().reverse(), i = i.slice().reverse()); ++f <= e;) o.push(r(t[f - 1], t[f])), s.push(u(i[f - 1], i[f]));
        return function(i) {
            var r = n.bisect(t, i, 1, e) - 1;
            return s[r](o[r](i))
        }
    }

    function tw(n, t, i, r) {
        function f() {
            var f = Math.min(n.length, t.length) > 2 ? hit : oit,
                s = r ? ttt : ntt;
            return e = f(n, t, s, i), o = f(t, n, s, vi), u
        }

        function u(n) {
            return e(n)
        }
        var e, o;
        return u.invert = function(n) {
            return o(n)
        }, u.domain = function(t) {
            return arguments.length ? (n = t.map(Number), f()) : n
        }, u.range = function(n) {
            return arguments.length ? (t = n, f()) : t
        }, u.rangeRound = function(n) {
            return u.range(n).interpolate(fp)
        }, u.clamp = function(n) {
            return arguments.length ? (r = n, f()) : r
        }, u.interpolate = function(n) {
            return arguments.length ? (i = n, f()) : i
        }, u.ticks = function(t) {
            return sh(n, t)
        }, u.tickFormat = function(t, i) {
            return hh(n, t, i)
        }, u.nice = function(t) {
            return iw(n, t), f()
        }, u.copy = function() {
            return tw(n, t, i, r)
        }, f()
    }

    function oh(t, i) {
        return n.rebind(t, i, "range", "rangeRound", "interpolate", "clamp")
    }

    function iw(n, t) {
        return eh(n, sit(iu(n, t)[2]))
    }

    function iu(n, t) {
        null == t && (t = 10);
        var r = or(n),
            f = r[1] - r[0],
            i = Math.pow(10, Math.floor(Math.log(f / t) / Math.LN10)),
            u = t / f * i;
        return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), r[0] = Math.ceil(r[0] / i) * i, r[1] = Math.floor(r[1] / i) * i + .5 * i, r[2] = i, r
    }

    function sh(t, i) {
        return n.range.apply(n, iu(t, i))
    }

    function hh(t, i, u) {
        var e = iu(t, i),
            f, o;
        if (u) {
            if (f = ob.exec(u), f.shift(), "s" === f[8]) return o = n.formatPrefix(Math.max(r(e[0]), r(e[1]))), f[7] || (f[7] = "." + vf(o.scale(e[2]))), f[8] = "f", u = n.format(f.join("")),
            function(n) {
                return u(o.scale(n)) + o.symbol
            };
            f[7] || (f[7] = "." + cit(f[8], e));
            u = f.join("")
        } else u = ",." + vf(e[2]) + "f";
        return n.format(u)
    }

    function vf(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function cit(n, t) {
        var i = vf(t[2]);
        return n in wb ? Math.abs(i - vf(Math.max(r(t[0]), r(t[1])))) + +("e" !== n) : i - 2 * ("%" === n)
    }

    function rw(t, i, r, u) {
        function e(n) {
            return (r ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(i)
        }

        function o(n) {
            return r ? Math.pow(i, n) : -Math.pow(i, -n)
        }

        function f(n) {
            return t(e(n))
        }
        return f.invert = function(n) {
            return o(t.invert(n))
        }, f.domain = function(n) {
            return arguments.length ? (r = n[0] >= 0, t.domain((u = n.map(Number)).map(e)), f) : u
        }, f.base = function(n) {
            return arguments.length ? (i = +n, t.domain(u.map(e)), f) : i
        }, f.nice = function() {
            var n = eh(u.map(e), r ? Math : bb);
            return t.domain(n), u = n.map(o), f
        }, f.ticks = function() {
            var h = or(u),
                t = [],
                c = h[0],
                l = h[1],
                n = Math.floor(e(c)),
                s = Math.ceil(e(l)),
                a = i % 1 ? 2 : i,
                f;
            if (isFinite(s - n)) {
                if (r) {
                    for (; s > n; n++)
                        for (f = 1; a > f; f++) t.push(o(n) * f);
                    t.push(o(n))
                } else
                    for (t.push(o(n)); n++ < s;)
                        for (f = a - 1; f > 0; f--) t.push(o(n) * f);
                for (n = 0; t[n] < c; n++);
                for (s = t.length; t[s - 1] > l; s--);
                t = t.slice(n, s)
            }
            return t
        }, f.tickFormat = function(t, i) {
            if (!arguments.length) return rl;
            arguments.length < 2 ? i = rl : "function" != typeof i && (i = n.format(i));
            var u, s = Math.max(.1, t / f.ticks().length),
                h = r ? (u = 1e-12, Math.ceil) : (u = -1e-12, Math.floor);
            return function(n) {
                return n / o(h(e(n) + u)) <= s ? i(n) : ""
            }
        }, f.copy = function() {
            return rw(t.copy(), i, r, u)
        }, oh(f, t)
    }

    function uw(n, t, i) {
        function r(t) {
            return n(u(t))
        }
        var u = yf(t),
            f = yf(1 / t);
        return r.invert = function(t) {
            return f(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((i = t.map(Number)).map(u)), r) : i
        }, r.ticks = function(n) {
            return sh(i, n)
        }, r.tickFormat = function(n, t) {
            return hh(i, n, t)
        }, r.nice = function(n) {
            return r.domain(iw(i, n))
        }, r.exponent = function(e) {
            return arguments.length ? (u = yf(t = e), f = yf(1 / t), n.domain(i.map(u)), r) : t
        }, r.copy = function() {
            return uw(n.copy(), t, i)
        }, oh(r, n)
    }

    function yf(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function fw(t, i) {
        function r(n) {
            return u[((e.get(n) || ("range" === i.t ? e.set(n, t.push(n)) : NaN)) - 1) % u.length]
        }

        function o(i, r) {
            return n.range(t.length).map(function(n) {
                return i + r * n
            })
        }
        var e, u, f;
        return r.domain = function(n) {
            if (!arguments.length) return t;
            t = [];
            e = new lt;
            for (var u, f = -1, o = n.length; ++f < o;) e.has(u = n[f]) || e.set(u, t.push(u));
            return r[i.t].apply(r, i.a)
        }, r.range = function(n) {
            return arguments.length ? (u = n, f = 0, i = {
                t: "range",
                a: arguments
            }, r) : u
        }, r.rangePoints = function(n, e) {
            arguments.length < 2 && (e = 0);
            var s = n[0],
                h = n[1],
                c = t.length < 2 ? (s = (s + h) / 2, 0) : (h - s) / (t.length - 1 + e);
            return u = o(s + c * e / 2, c), f = 0, i = {
                t: "rangePoints",
                a: arguments
            }, r
        }, r.rangeRoundPoints = function(n, e) {
            arguments.length < 2 && (e = 0);
            var s = n[0],
                h = n[1],
                c = t.length < 2 ? (s = h = Math.round((s + h) / 2), 0) : (h - s) / (t.length - 1 + e) | 0;
            return u = o(s + Math.round(c * e / 2 + (h - s - (t.length - 1 + e) * c) / 2), c), f = 0, i = {
                t: "rangeRoundPoints",
                a: arguments
            }, r
        }, r.rangeBands = function(n, e, s) {
            arguments.length < 2 && (e = 0);
            arguments.length < 3 && (s = e);
            var h = n[1] < n[0],
                l = n[+h],
                a = n[1 - h],
                c = (a - l) / (t.length - e + 2 * s);
            return u = o(l + c * s, c), h && u.reverse(), f = c * (1 - e), i = {
                t: "rangeBands",
                a: arguments
            }, r
        }, r.rangeRoundBands = function(n, e, s) {
            arguments.length < 2 && (e = 0);
            arguments.length < 3 && (s = e);
            var h = n[1] < n[0],
                c = n[+h],
                a = n[1 - h],
                l = Math.floor((a - c) / (t.length - e + 2 * s));
            return u = o(c + Math.round((a - c - (t.length - e) * l) / 2), l), h && u.reverse(), f = Math.round(l * (1 - e)), i = {
                t: "rangeRoundBands",
                a: arguments
            }, r
        }, r.rangeBand = function() {
            return f
        }, r.rangeExtent = function() {
            return or(i.a[0])
        }, r.copy = function() {
            return fw(t, i)
        }, r.domain(t)
    }

    function ew(t, i) {
        function f() {
            var f = 0,
                e = i.length;
            for (r = []; ++f < e;) r[f - 1] = n.quantile(t, f / e);
            return u
        }

        function u(t) {
            if (!isNaN(t = +t)) return i[n.bisect(r, t)]
        }
        var r;
        return u.domain = function(n) {
            return arguments.length ? (t = n.map(si).filter(ct).sort(nr), f()) : t
        }, u.range = function(n) {
            return arguments.length ? (i = n, f()) : i
        }, u.quantiles = function() {
            return r
        }, u.invertExtent = function(n) {
            return n = i.indexOf(n), 0 > n ? [NaN, NaN] : [n > 0 ? r[n - 1] : t[0], n < r.length ? r[n] : t[t.length - 1]]
        }, u.copy = function() {
            return ew(t, i)
        }, f()
    }

    function ow(n, t, i) {
        function r(t) {
            return i[Math.max(0, Math.min(e, Math.floor(u * (t - n))))]
        }

        function f() {
            return u = i.length / (t - n), e = i.length - 1, r
        }
        var u, e;
        return r.domain = function(i) {
            return arguments.length ? (n = +i[0], t = +i[i.length - 1], f()) : [n, t]
        }, r.range = function(n) {
            return arguments.length ? (i = n, f()) : i
        }, r.invertExtent = function(t) {
            return t = i.indexOf(t), t = 0 > t ? NaN : t / u + n, [t, t + 1 / u]
        }, r.copy = function() {
            return ow(n, t, i)
        }, f()
    }

    function sw(t, i) {
        function r(r) {
            if (r >= r) return i[n.bisect(t, r)]
        }
        return r.domain = function(n) {
            return arguments.length ? (t = n, r) : t
        }, r.range = function(n) {
            return arguments.length ? (i = n, r) : i
        }, r.invertExtent = function(n) {
            return n = i.indexOf(n), [t[n - 1], t[n]]
        }, r.copy = function() {
            return sw(t, i)
        }, r
    }

    function hw(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(i) {
            return arguments.length ? (n = i.map(t), t) : n
        }, t.ticks = function(t) {
            return sh(n, t)
        }, t.tickFormat = function(t, i) {
            return hh(n, t, i)
        }, t.copy = function() {
            return hw(n)
        }, t
    }

    function lit() {
        return 0
    }

    function ait(n) {
        return n.innerRadius
    }

    function vit(n) {
        return n.outerRadius
    }

    function cw(n) {
        return n.startAngle
    }

    function lw(n) {
        return n.endAngle
    }

    function yit(n) {
        return n && n.padAngle
    }

    function pf(n, t, i, r) {
        return (n - i) * t - (t - r) * n > 0 ? 0 : 1
    }

    function wf(n, t, i, r, u) {
        var v = n[0] - t[0],
            y = n[1] - t[1],
            nt = (u ? r : -r) / Math.sqrt(v * v + y * y),
            p = nt * y,
            w = -nt * v,
            b = n[0] + p,
            k = n[1] + w,
            d = t[0] + p,
            g = t[1] + w,
            tt = (b + d) / 2,
            it = (k + g) / 2,
            e = d - b,
            f = g - k,
            s = e * e + f * f,
            h = i - r,
            o = b * g - d * k,
            c = (0 > f ? -1 : 1) * Math.sqrt(h * h * s - o * o),
            l = (o * f - e * c) / s,
            a = (-o * e - f * c) / s,
            rt = (o * f + e * c) / s,
            ut = (-o * e + f * c) / s,
            ft = l - tt,
            et = a - it,
            ot = rt - tt,
            st = ut - it;
        return ft * ft + et * et > ot * ot + st * st && (l = rt, a = ut), [
            [l - p, a - w],
            [l * i / h, a * i / h]
        ]
    }

    function aw(n) {
        function t(t) {
            function a() {
                l.push("M", i(n(s), e))
            }
            for (var c, l = [], s = [], h = -1, v = t.length, y = o(r), p = o(u); ++h < v;) f.call(this, c = t[h], h) ? s.push([+y.call(this, c, h), +p.call(this, c, h)]) : s.length && (a(), s = []);
            return s.length && a(), l.length ? l.join("") : null
        }
        var r = ur,
            u = wr,
            f = rr,
            i = d,
            s = i.key,
            e = .7;
        return t.x = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.defined = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t.interpolate = function(n) {
            return arguments.length ? (s = "function" == typeof n ? i = n : (i = to.get(n) || d).key, t) : s
        }, t.tension = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t
    }

    function d(n) {
        return n.join("L")
    }

    function pit(n) {
        return d(n) + "Z"
    }

    function wit(n) {
        for (var r = 0, u = n.length, t = n[0], i = [t[0], ",", t[1]]; ++r < u;) i.push("H", (t[0] + (t = n[r])[0]) / 2, "V", t[1]);
        return u > 1 && i.push("H", t[0]), i.join("")
    }

    function ch(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u;) r.push("V", (t = n[i])[1], "H", t[0]);
        return r.join("")
    }

    function lh(n) {
        for (var i = 0, u = n.length, t = n[0], r = [t[0], ",", t[1]]; ++i < u;) r.push("H", (t = n[i])[0], "V", t[1]);
        return r.join("")
    }

    function bit(n, t) {
        return n.length < 4 ? d(n) : n[1] + bf(n.slice(1, -1), ah(n, t))
    }

    function kit(n, t) {
        return n.length < 3 ? d(n) : n[0] + bf((n.push(n[0]), n), ah([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function dit(n, t) {
        return n.length < 3 ? d(n) : n[0] + bf(n, ah(n, t))
    }

    function bf(n, t) {
        var o, h;
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return d(n);
        var c = n.length != t.length,
            f = "",
            s = n[0],
            i = n[1],
            e = t[0],
            r = e,
            u = 1;
        if (c && (f += "Q" + (i[0] - 2 * e[0] / 3) + "," + (i[1] - 2 * e[1] / 3) + "," + i[0] + "," + i[1], s = n[1], u = 2), t.length > 1)
            for (r = t[1], i = n[u], u++, f += "C" + (s[0] + e[0]) + "," + (s[1] + e[1]) + "," + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1], o = 2; o < t.length; o++, u++) i = n[u], r = t[o], f += "S" + (i[0] - r[0]) + "," + (i[1] - r[1]) + "," + i[0] + "," + i[1];
        return c && (h = n[u], f += "Q" + (i[0] + 2 * r[0] / 3) + "," + (i[1] + 2 * r[1] / 3) + "," + h[0] + "," + h[1]), f
    }

    function ah(n, t) {
        for (var r, u = [], f = (1 - t) / 2, e = n[0], i = n[1], o = 1, s = n.length; ++o < s;) r = e, e = i, i = n[o], u.push([f * (i[0] - r[0]), f * (i[1] - r[1])]);
        return u
    }

    function vw(n) {
        if (n.length < 3) return d(n);
        var o = 1,
            s = n.length,
            t = n[0],
            i = t[0],
            r = t[1],
            u = [i, i, i, (t = n[1])[0]],
            f = [r, r, r, t[1]],
            e = [i, ",", r, "L", nt(oi, u), ",", nt(oi, f)];
        for (n.push(n[s - 1]); ++o <= s;) t = n[o], u.shift(), u.push(t[0]), f.shift(), f.push(t[1]), vh(e, u, f);
        return n.pop(), e.push("L", t), e.join("")
    }

    function git(n) {
        if (n.length < 4) return d(n);
        for (var t, f = [], i = -1, e = n.length, r = [0], u = [0]; ++i < 3;) t = n[i], r.push(t[0]), u.push(t[1]);
        for (f.push(nt(oi, r) + "," + nt(oi, u)), --i; ++i < e;) t = n[i], r.shift(), r.push(t[0]), u.shift(), u.push(t[1]), vh(f, r, u);
        return f.join("")
    }

    function nrt(n) {
        for (var f, t, i = -1, e = n.length, o = e + 4, r = [], u = []; ++i < 4;) t = n[i % e], r.push(t[0]), u.push(t[1]);
        for (f = [nt(oi, r), ",", nt(oi, u)], --i; ++i < o;) t = n[i % e], r.shift(), r.push(t[0]), u.shift(), u.push(t[1]), vh(f, r, u);
        return f.join("")
    }

    function trt(n, t) {
        var i = n.length - 1;
        if (i)
            for (var r, u, e = n[0][0], o = n[0][1], s = n[i][0] - e, h = n[i][1] - o, f = -1; ++f <= i;) r = n[f], u = f / i, r[0] = t * r[0] + (1 - t) * (e + u * s), r[1] = t * r[1] + (1 - t) * (o + u * h);
        return vw(n)
    }

    function nt(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function vh(n, t, i) {
        n.push("C", nt(kb, t), ",", nt(kb, i), ",", nt(db, t), ",", nt(db, i), ",", nt(oi, t), ",", nt(oi, i))
    }

    function yh(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function irt(n) {
        for (var t = 0, e = n.length - 1, i = [], f = n[0], r = n[1], u = i[0] = yh(f, r); ++t < e;) i[t] = (u + (u = yh(f = r, r = n[t + 1]))) / 2;
        return i[t] = u, i
    }

    function rrt(n) {
        for (var e, o, s, u, c = [], f = irt(n), i = -1, h = n.length - 1; ++i < h;) e = yh(n[i], n[i + 1]), r(e) < t ? f[i] = f[i + 1] = 0 : (o = f[i] / e, s = f[i + 1] / e, u = o * o + s * s, u > 9 && (u = 3 * e / Math.sqrt(u), f[i] = u * o, f[i + 1] = u * s));
        for (i = -1; ++i <= h;) u = (n[Math.min(h, i + 1)][0] - n[Math.max(0, i - 1)][0]) / (6 * (1 + f[i] * f[i])), c.push([u || 0, f[i] * u || 0]);
        return c
    }

    function urt(n) {
        return n.length < 3 ? d(n) : n[0] + bf(n, rrt(n))
    }

    function yw(n) {
        for (var t, i, r, u = -1, f = n.length; ++u < f;) t = n[u], i = t[0], r = t[1] - h, t[0] = i * Math.cos(r), t[1] = i * Math.sin(r);
        return n
    }

    function pw(n) {
        function t(t) {
            function b() {
                p.push("M", i(n(w), s), a, l(n(y.reverse()), s), "Z")
            }
            for (var v, k, d, p = [], y = [], w = [], c = -1, g = t.length, nt = o(f), tt = o(e), it = f === r ? function() {
                    return k
                } : o(r), rt = e === u ? function() {
                    return d
                } : o(u); ++c < g;) h.call(this, v = t[c], c) ? (y.push([k = +nt.call(this, v, c), d = +tt.call(this, v, c)]), w.push([+it.call(this, v, c), +rt.call(this, v, c)])) : y.length && (b(), y = [], w = []);
            return y.length && b(), p.length ? p.join("") : null
        }
        var f = ur,
            r = ur,
            e = 0,
            u = wr,
            h = rr,
            i = d,
            c = i.key,
            l = i,
            a = "L",
            s = .7;
        return t.x = function(n) {
            return arguments.length ? (f = r = n, t) : r
        }, t.x0 = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (e = u = n, t) : u
        }, t.y0 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y1 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.defined = function(n) {
            return arguments.length ? (h = n, t) : h
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? i = n : (i = to.get(n) || d).key, l = i.reverse || i, a = i.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (s = n, t) : s
        }, t
    }

    function frt(n) {
        return n.radius
    }

    function ww(n) {
        return [n.x, n.y]
    }

    function ert(n) {
        return function() {
            var t = n.apply(this, arguments),
                i = t[0],
                r = t[1] - h;
            return [i * Math.cos(r), i * Math.sin(r)]
        }
    }

    function ort() {
        return 64
    }

    function srt() {
        return "circle"
    }

    function bw(n) {
        var t = Math.sqrt(n / f);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function kw(n) {
        return function() {
            var t, i;
            (t = this[n]) && (i = t[t.active]) && (--t.count ? delete t[t.active] : delete this[n], t.active += .5, i.event && i.event.interrupt.call(this, this.__data__, i.index))
        }
    }

    function ru(n, t, i) {
        return ne(n, a), n.namespace = t, n.id = i, n
    }

    function ph(n, t, i, r) {
        var u = n.id,
            f = n.namespace;
        return at(n, "function" == typeof i ? function(n, e, o) {
            n[f][u].tween.set(t, r(i.call(n, n.__data__, e, o)))
        } : (i = r(i), function(n) {
            n[f][u].tween.set(t, i)
        }))
    }

    function hrt(n) {
        return null == n && (n = ""),
        function() {
            this.textContent = n
        }
    }

    function wh(n) {
        return null == n ? "__transition__" : "__transition_" + n + "__"
    }

    function kf(t, i, r, u, f) {
        var e = t[r] || (t[r] = {
            active: 0,
            count: 0
        }),
            o = e[u],
            s;
        o || (s = f.time, o = e[u] = {
            tween: new lt,
            time: s,
            delay: f.delay,
            duration: f.duration,
            ease: f.ease,
            index: i
        }, f = null, ++e.count, n.timer(function(f) {
            function a(r) {
                if (e.active > u) return y();
                var f = e[e.active];
                f && (--e.count, delete e[e.active], f.event && f.event.interrupt.call(t, t.__data__, f.index));
                e.active = u;
                o.event && o.event.start.call(t, t.__data__, i);
                o.tween.forEach(function(n, r) {
                    (r = r.call(t, t.__data__, i)) && l.push(r)
                });
                w = o.ease;
                p = o.duration;
                n.timer(function() {
                    return c.c = v(r || 1) ? rr : v, 1
                }, 0, s)
            }

            function v(n) {
                if (e.active !== u) return 1;
                for (var r = n / p, s = w(r), f = l.length; f > 0;) l[--f].call(t, s);
                if (r >= 1) return (o.event && o.event.end.call(t, t.__data__, i), y())
            }

            function y() {
                return --e.count ? delete e[u] : delete t[r], 1
            }
            var p, w, h = o.delay,
                c = pt,
                l = [];
            return c.t = h + s, f >= h ? a(f - h) : void(c.c = a)
        }, 0, s))
    }

    function crt(n, t, i) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(" + (isFinite(r) ? r : i(n)) + ",0)"
        })
    }

    function lrt(n, t, i) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(0," + (isFinite(r) ? r : i(n)) + ")"
        })
    }

    function bh(n) {
        return n.toISOString()
    }

    function kh(t, i, r) {
        function u(n) {
            return t(n)
        }

        function f(t, r) {
            var e = t[1] - t[0],
                f = e / r,
                u = n.bisect(uo, f);
            return u == uo.length ? [i.year, iu(t.map(function(n) {
                return n / 31536e6
            }), r)[2]] : u ? i[f / uo[u - 1] < uo[u] / f ? u - 1 : u] : [lut, iu(t, r)[2]]
        }
        return u.invert = function(n) {
            return yi(t.invert(n))
        }, u.domain = function(n) {
            return arguments.length ? (t.domain(n), u) : t.domain().map(yi)
        }, u.nice = function(n, t) {
            function r(i) {
                return !isNaN(i) && !n.range(i, yi(+i + 1), t).length
            }
            var e = u.domain(),
                o = or(e),
                i = null == n ? f(o, 10) : "number" == typeof n && f(o, n);
            return i && (n = i[0], t = i[1]), u.domain(eh(e, t > 1 ? {
                floor: function(t) {
                    for (; r(t = n.floor(t));) t = yi(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; r(t = n.ceil(t));) t = yi(+t + 1);
                    return t
                }
            } : n))
        }, u.ticks = function(n, t) {
            var i = or(u.domain()),
                r = null == n ? f(i, 10) : "number" == typeof n ? f(i, n) : !n.range && [{
                        range: n
                    },
                    t
                ];
            return r && (n = r[0], t = r[1]), n.range(i[0], yi(+i[1] + 1), 1 > t ? 1 : t)
        }, u.tickFormat = function() {
            return r
        }, u.copy = function() {
            return kh(t.copy(), i, r)
        }, oh(u, t)
    }

    function yi(n) {
        return new Date(n)
    }

    function art(n) {
        return JSON.parse(n.responseText)
    }

    function vrt(n) {
        var t = p.createRange();
        return t.selectNode(p.body), t.createContextualFragment(n.responseText)
    }
    var n = {
        version: "3.5.5"
    }, dw = [].slice,
        ti = function(n) {
            return dw.call(n)
        }, p = this.document,
        dh, r, nb, gf, gh, e, te, ot, ie, pi, tb, re, fe, fc, ec, ee, oe, uu, fu, he, ce, le, ae, pt, sc, eb, st, hc, eu, cc, lc, ve, ii, k, yc, ki, pc, wc, bc, kc, dc, su, cr, di, lr, gc, hu, nl, tl, cu, ge, no, ab, il, vb, yb, pb, wb, rl, bb, lu, to, ul, au, fl, el, nk, cl, rk;
    if (p) try {
        ti(p.documentElement.childNodes)[0].nodeType
    } catch (aut) {
        ti = function(n) {
            for (var t = n.length, i = new Array(t); t--;) i[t] = n[t];
            return i
        }
    }
    if (Date.now || (Date.now = function() {
        return +new Date
    }), p) try {
        p.createElement("DIV").style.setProperty("opacity", 0, "")
    } catch (vut) {
        var df = this.Element.prototype,
            yrt = df.setAttribute,
            prt = df.setAttributeNS,
            gw = this.CSSStyleDeclaration.prototype,
            wrt = gw.setProperty;
        df.setAttribute = function(n, t) {
            yrt.call(this, n, t + "")
        };
        df.setAttributeNS = function(n, t, i) {
            prt.call(this, n, t, i + "")
        };
        gw.setProperty = function(n, t, i) {
            wrt.call(this, n, t + "", i)
        }
    }
    n.ascending = nr;
    n.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    };
    n.min = function(n, t) {
        var u, i, r = -1,
            f = n.length;
        if (1 === arguments.length) {
            for (; ++r < f;)
                if (null != (i = n[r]) && i >= i) {
                    u = i;
                    break
                }
            for (; ++r < f;) null != (i = n[r]) && u > i && (u = i)
        } else {
            for (; ++r < f;)
                if (null != (i = t.call(n, n[r], r)) && i >= i) {
                    u = i;
                    break
                }
            for (; ++r < f;) null != (i = t.call(n, n[r], r)) && u > i && (u = i)
        }
        return u
    };
    n.max = function(n, t) {
        var u, i, r = -1,
            f = n.length;
        if (1 === arguments.length) {
            for (; ++r < f;)
                if (null != (i = n[r]) && i >= i) {
                    u = i;
                    break
                }
            for (; ++r < f;) null != (i = n[r]) && i > u && (u = i)
        } else {
            for (; ++r < f;)
                if (null != (i = t.call(n, n[r], r)) && i >= i) {
                    u = i;
                    break
                }
            for (; ++r < f;) null != (i = t.call(n, n[r], r)) && i > u && (u = i)
        }
        return u
    };
    n.extent = function(n, t) {
        var u, i, f, r = -1,
            e = n.length;
        if (1 === arguments.length) {
            for (; ++r < e;)
                if (null != (i = n[r]) && i >= i) {
                    u = f = i;
                    break
                }
            for (; ++r < e;) null != (i = n[r]) && (u > i && (u = i), i > f && (f = i))
        } else {
            for (; ++r < e;)
                if (null != (i = t.call(n, n[r], r)) && i >= i) {
                    u = f = i;
                    break
                }
            for (; ++r < e;) null != (i = t.call(n, n[r], r)) && (u > i && (u = i), i > f && (f = i))
        }
        return [u, f]
    };
    n.sum = function(n, t) {
        var r, u = 0,
            f = n.length,
            i = -1;
        if (1 === arguments.length)
            for (; ++i < f;) ct(r = +n[i]) && (u += r);
        else
            for (; ++i < f;) ct(r = +t.call(n, n[i], i)) && (u += r);
        return u
    };
    n.mean = function(n, t) {
        var r, f = 0,
            e = n.length,
            i = -1,
            u = e;
        if (1 === arguments.length)
            for (; ++i < e;) ct(r = si(n[i])) ? f += r : --u;
        else
            for (; ++i < e;) ct(r = si(t.call(n, n[i], i))) ? f += r : --u; if (u) return f / u
    };
    n.quantile = function(n, t) {
        var u = (n.length - 1) * t + 1,
            i = Math.floor(u),
            r = +n[i - 1],
            f = u - i;
        return f ? r + f * (n[i] - r) : r
    };
    n.median = function(t, i) {
        var u, f = [],
            e = t.length,
            r = -1;
        if (1 === arguments.length)
            for (; ++r < e;) ct(u = si(t[r])) && f.push(u);
        else
            for (; ++r < e;) ct(u = si(i.call(t, t[r], r))) && f.push(u); if (f.length) return n.quantile(f.sort(nr), .5)
    };
    n.variance = function(n, t) {
        var i, r, s = n.length,
            u = 0,
            o = 0,
            f = -1,
            e = 0;
        if (1 === arguments.length)
            for (; ++f < s;) ct(i = si(n[f])) && (r = i - u, u += r / ++e, o += r * (i - u));
        else
            for (; ++f < s;) ct(i = si(t.call(n, n[f], f))) && (r = i - u, u += r / ++e, o += r * (i - u)); if (e > 1) return o / (e - 1)
    };
    n.deviation = function() {
        var t = n.variance.apply(this, arguments);
        return t ? Math.sqrt(t) : t
    };
    dh = al(nr);
    n.bisectLeft = dh.left;
    n.bisect = n.bisectRight = dh.right;
    n.bisector = function(n) {
        return al(1 === n.length ? function(t, i) {
            return nr(n(t), i)
        } : n)
    };
    n.shuffle = function(n, t, i) {
        (r = arguments.length) < 3 && (i = n.length, 2 > r && (t = 0));
        for (var f, u, r = i - t; r;) u = Math.random() * r-- | 0, f = n[r + t], n[r + t] = n[u + t], n[u + t] = f;
        return n
    };
    n.permute = function(n, t) {
        for (var i = t.length, r = new Array(i); i--;) r[i] = n[t[i]];
        return r
    };
    n.pairs = function(n) {
        for (var f, t = 0, i = n.length - 1, r = n[0], u = new Array(0 > i ? 0 : i); i > t;) u[t] = [f = r, r = n[++t]];
        return u
    };
    n.zip = function() {
        var r, t, e;
        if (!(r = arguments.length)) return [];
        for (var i = -1, u = n.min(arguments, uk), f = new Array(u); ++i < u;)
            for (t = -1, e = f[i] = new Array(r); ++t < r;) e[t] = arguments[t][i];
        return f
    };
    n.transpose = function(t) {
        return n.zip.apply(n, t)
    };
    n.keys = function(n) {
        var t = [];
        for (var i in n) t.push(i);
        return t
    };
    n.values = function(n) {
        var t = [];
        for (var i in n) t.push(n[i]);
        return t
    };
    n.entries = function(n) {
        var t = [];
        for (var i in n) t.push({
            key: i,
            value: n[i]
        });
        return t
    };
    n.merge = function(n) {
        for (var t, i, r, u = n.length, e = -1, f = 0; ++e < u;) f += n[e].length;
        for (i = new Array(f); --u >= 0;)
            for (r = n[u], t = r.length; --t >= 0;) i[--f] = r[t];
        return i
    };
    r = Math.abs;
    n.range = function(n, t, i) {
        if (arguments.length < 3 && (i = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / i == 1 / 0) throw new Error("infinite range");
        var f, e = [],
            u = fk(r(i)),
            o = -1;
        if (n *= u, t *= u, i *= u, 0 > i)
            for (;
                (f = n + i * ++o) > t;) e.push(f / u);
        else
            for (;
                (f = n + i * ++o) < t;) e.push(f / u);
        return e
    };
    n.map = function(n, t) {
        var r = new lt,
            e, i, u, f;
        if (n instanceof lt) n.forEach(function(n, t) {
            r.set(n, t)
        });
        else if (Array.isArray(n))
            if (i = -1, u = n.length, 1 === arguments.length)
                for (; ++i < u;) r.set(i, n[i]);
            else
                for (; ++i < u;) r.set(t.call(n, e = n[i], i), e);
            else
                for (f in n) r.set(f, n[f]);
        return r
    };
    nb = "__proto__";
    gf = "\x00";
    vl(lt, {
        has: yl,
        get: function(n) {
            return this._[ar(n)]
        },
        set: function(n, t) {
            return this._[ar(n)] = t
        },
        remove: pl,
        keys: wl,
        values: function() {
            var n = [];
            for (var t in this._) n.push(this._[t]);
            return n
        },
        entries: function() {
            var n = [];
            for (var t in this._) n.push({
                key: vu(t),
                value: this._[t]
            });
            return n
        },
        size: bl,
        empty: kl,
        forEach: function(n) {
            for (var t in this._) n.call(this, vu(t), this._[t])
        }
    });
    n.nest = function() {
        function r(n, e, o) {
            if (o >= i.length) return f ? f.call(t, e) : u ? e.sort(u) : e;
            for (var l, s, h, a, v = -1, y = e.length, p = i[o++], c = new lt; ++v < y;)(a = c.get(l = p(s = e[v]))) ? a.push(s) : c.set(l, [s]);
            return n ? (s = n(), h = function(t, i) {
                s.set(t, r(n, i, o))
            }) : (s = {}, h = function(t, i) {
                s[t] = r(n, i, o)
            }), c.forEach(h), s
        }

        function e(n, t) {
            if (t >= i.length) return n;
            var r = [],
                u = o[t++];
            return n.forEach(function(n, i) {
                r.push({
                    key: n,
                    values: e(i, t)
                })
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }) : r
        }
        var u, f, t = {}, i = [],
            o = [];
        return t.map = function(n, t) {
            return r(t, n, 0)
        }, t.entries = function(t) {
            return e(r(n.map, t, 0), 0)
        }, t.key = function(n) {
            return i.push(n), t
        }, t.sortKeys = function(n) {
            return o[i.length - 1] = n, t
        }, t.sortValues = function(n) {
            return u = n, t
        }, t.rollup = function(n) {
            return f = n, t
        }, t
    };
    n.set = function(n) {
        var i = new fo,
            t, r;
        if (n)
            for (t = 0, r = n.length; r > t; ++t) i.add(n[t]);
        return i
    };
    vl(fo, {
        has: yl,
        add: function(n) {
            return this._[ar(n += "")] = !0, n
        },
        remove: pl,
        values: wl,
        size: bl,
        empty: kl,
        forEach: function(n) {
            for (var t in this._) n.call(this, vu(t))
        }
    });
    n.behavior = {};
    n.rebind = function(n, t) {
        for (var i, r = 1, u = arguments.length; ++r < u;) n[i = arguments[r]] = ek(n, t, t[i]);
        return n
    };
    gh = ["webkit", "ms", "moz", "Moz", "o", "O"];
    n.dispatch = function() {
        for (var n = new oo, t = -1, i = arguments.length; ++t < i;) n[arguments[t]] = dl(n);
        return n
    };
    oo.prototype.on = function(n, t) {
        var r = n.indexOf("."),
            i = "";
        if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n) return arguments.length < 2 ? this[n].on(i) : this[n].on(i, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(i, null);
            return this
        }
    };
    n.event = null;
    n.requote = function(n) {
        return n.replace(brt, "\\$&")
    };
    var brt = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        ne = {}.__proto__ ? function(n, t) {
            n.__proto__ = t
        } : function(n, t) {
            for (var i in t) n[i] = t[i]
        }, nc = function(n, t) {
            return t.querySelector(n)
        }, tc = function(n, t) {
            return t.querySelectorAll(n)
        }, ic = function(n, t) {
            var i = n.matches || n[eo(n, "matchesSelector")];
            return (ic = function(n, t) {
                return i.call(n, t)
            })(n, t)
        };
    "function" == typeof Sizzle && (nc = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, tc = Sizzle, ic = Sizzle.matchesSelector);
    n.selection = function() {
        return n.select(p.documentElement)
    };
    e = n.selection.prototype = [];
    e.select = function(n) {
        var i, f, e, t, o = [],
            r, s, u, h;
        for (n = co(n), r = -1, s = this.length; ++r < s;)
            for (o.push(i = []), i.parentNode = (e = this[r]).parentNode, u = -1, h = e.length; ++u < h;)(t = e[u]) ? (i.push(f = n.call(t, t.__data__, u, r)), f && "__data__" in t && (f.__data__ = t.__data__)) : i.push(null);
        return dt(o)
    };
    e.selectAll = function(n) {
        var u, t, f = [],
            i, e;
        for (n = gl(n), i = -1, e = this.length; ++i < e;)
            for (var o = this[i], r = -1, s = o.length; ++r < s;)(t = o[r]) && (f.push(u = ti(n.call(t, t.__data__, r, i))), u.parentNode = t);
        return dt(f)
    };
    te = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    n.ns = {
        prefix: te,
        qualify: function(n) {
            var t = n.indexOf(":"),
                i = n;
            return t >= 0 && (i = n.slice(0, t), n = n.slice(t + 1)), te.hasOwnProperty(i) ? {
                space: te[i],
                local: n
            } : n
        }
    };
    e.attr = function(t, i) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var r = this.node();
                return t = n.ns.qualify(t), t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
            }
            for (i in t) this.each(na(i, t[i]));
            return this
        }
        return this.each(na(t, i))
    };
    e.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var r = this.node(),
                    u = (n = ra(n)).length,
                    i = -1;
                if (t = r.classList) {
                    for (; ++i < u;)
                        if (!t.contains(n[i])) return !1
                } else
                    for (t = r.getAttribute("class"); ++i < u;)
                        if (!ia(n[i]).test(t)) return !1; return !0
            }
            for (t in n) this.each(ua(t, n[t]));
            return this
        }
        return this.each(ua(n, t))
    };
    e.style = function(n, t, i) {
        var r = arguments.length,
            u;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (i in n) this.each(fa(i, n[i], t));
                return this
            }
            if (2 > r) return u = this.node(), bt(u).getComputedStyle(u, null).getPropertyValue(n);
            i = ""
        }
        return this.each(fa(n, t, i))
    };
    e.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(ea(t, n[t]));
            return this
        }
        return this.each(ea(n, t))
    };
    e.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    };
    e.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    };
    e.append = function(n) {
        return n = oa(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    };
    e.insert = function(n, t) {
        return n = oa(n), t = co(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    };
    e.remove = function() {
        return this.each(sk)
    };
    e.data = function(n, t) {
        function e(n, i) {
            var r, u, e, o = n.length,
                a = i.length,
                b = Math.min(o, a),
                v = new Array(a),
                c = new Array(a),
                y = new Array(o),
                p, l, w;
            if (t) {
                for (l = new lt, w = new Array(o), r = -1; ++r < o;) l.has(p = t.call(u = n[r], u.__data__, r)) ? y[r] = u : l.set(p, u), w[r] = p;
                for (r = -1; ++r < a;)(u = l.get(p = t.call(i, e = i[r], r))) ? u !== !0 && (v[r] = u, u.__data__ = e) : c[r] = lo(e), l.set(p, !0);
                for (r = -1; ++r < o;) l.get(w[r]) !== !0 && (y[r] = n[r])
            } else {
                for (r = -1; ++r < b;) u = n[r], e = i[r], u ? (u.__data__ = e, v[r] = u) : c[r] = lo(e);
                for (; a > r; ++r) c[r] = lo(i[r]);
                for (; o > r; ++r) y[r] = n[r]
            }
            c.update = v;
            c.parentNode = v.parentNode = y.parentNode = n.parentNode;
            s.push(c);
            f.push(v);
            h.push(y)
        }
        var r, o, i = -1,
            u = this.length;
        if (!arguments.length) {
            for (n = new Array(u = (r = this[0]).length); ++i < u;)(o = r[i]) && (n[i] = o.__data__);
            return n
        }
        var s = ha([]),
            f = dt([]),
            h = dt([]);
        if ("function" == typeof n)
            for (; ++i < u;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < u;) e(r = this[i], n);
        return f.enter = function() {
            return s
        }, f.exit = function() {
            return h
        }, f
    };
    e.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    };
    e.filter = function(n) {
        var u, f, r, e = [],
            t, o, i, s;
        for ("function" != typeof n && (n = sa(n)), t = 0, o = this.length; o > t; t++)
            for (e.push(u = []), u.parentNode = (f = this[t]).parentNode, i = 0, s = f.length; s > i; i++)(r = f[i]) && n.call(r, r.__data__, i, t) && u.push(r);
        return dt(e)
    };
    e.order = function() {
        for (var i = -1, f = this.length; ++i < f;)
            for (var t, r = this[i], u = r.length - 1, n = r[u]; --u >= 0;)(t = r[u]) && (n && n !== t.nextSibling && n.parentNode.insertBefore(t, n), n = t);
        return this
    };
    e.sort = function(n) {
        n = hk.apply(this, arguments);
        for (var t = -1, i = this.length; ++t < i;) this[t].sort(n);
        return this.order()
    };
    e.each = function(n) {
        return at(this, function(t, i, r) {
            n.call(t, t.__data__, i, r)
        })
    };
    e.call = function(n) {
        var t = ti(arguments);
        return n.apply(t[0] = this, t), this
    };
    e.empty = function() {
        return !this.node()
    };
    e.node = function() {
        for (var i, n = 0, r = this.length; r > n; n++)
            for (var u = this[n], t = 0, f = u.length; f > t; t++)
                if (i = u[t], i) return i;
        return null
    };
    e.size = function() {
        var n = 0;
        return at(this, function() {
            ++n
        }), n
    };
    ot = [];
    n.selection.enter = ha;
    n.selection.enter.prototype = ot;
    ot.append = e.append;
    ot.empty = e.empty;
    ot.node = e.node;
    ot.call = e.call;
    ot.size = e.size;
    ot.select = function(n) {
        for (var i, h, r, e, o, t, u, s = [], f = -1, c = this.length; ++f < c;)
            for (o = (t = this[f]).update, s.push(r = []), r.parentNode = t.parentNode, i = -1, h = t.length; ++i < h;)(u = t[i]) ? (r.push(o[i] = e = n.call(t.parentNode, u.__data__, i, f)), e.__data__ = u.__data__) : r.push(null);
        return dt(s)
    };
    ot.insert = function(n, t) {
        return arguments.length < 2 && (t = ck(this)), e.insert.call(this, n, t)
    };
    n.select = function(n) {
        var t;
        return "string" == typeof n ? (t = [nc(n, p)], t.parentNode = p.documentElement) : (t = [n], t.parentNode = ll(n)), dt([t])
    };
    n.selectAll = function(n) {
        var t;
        return "string" == typeof n ? (t = ti(tc(n, p)), t.parentNode = p.documentElement) : (t = n, t.parentNode = null), dt([t])
    };
    e.on = function(n, t, i) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (i in n) this.each(ca(i, n[i], t));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            i = !1
        }
        return this.each(ca(n, t, i))
    };
    ie = n.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    p && ie.forEach(function(n) {
        "on" + n in p && ie.remove(n)
    });
    tb = 0;
    n.mouse = function(n) {
        return ao(n, so())
    };
    re = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    n.touch = function(n, t, i) {
        if (arguments.length < 3 && (i = t, t = so().changedTouches), t)
            for (var u, r = 0, f = t.length; f > r; ++r)
                if ((u = t[r]).identifier === i) return ao(n, u)
    };
    n.behavior.drag = function() {
        function t() {
            this.on("mousedown.drag", f).on("touchstart.drag", e)
        }

        function r(t, r, f, e, o) {
            return function() {
                function b() {
                    var t, i, n = r(y, h);
                    n && (t = n[0] - c[0], i = n[1] - c[1], w |= t | i, c = n, p({
                        type: "drag",
                        x: n[0] + s[0],
                        y: n[1] + s[1],
                        dx: t,
                        dy: i
                    }))
                }

                function k() {
                    r(y, h) && (d.on(e + l, null).on(o + l, null), g(w && n.event.target === v), p({
                        type: "dragend"
                    }))
                }
                var s, a = this,
                    v = n.event.target,
                    y = a.parentNode,
                    p = u.of(a, arguments),
                    w = 0,
                    h = t(),
                    l = ".drag" + (null == h ? "" : "-" + h),
                    d = n.select(f(v)).on(e + l, b).on(o + l, k),
                    g = yu(v),
                    c = r(y, h);
                i ? (s = i.apply(a, arguments), s = [s.x - c[0], s.y - c[1]]) : s = [0, 0];
                p({
                    type: "dragstart"
                })
            }
        }
        var u = ho(t, "drag", "dragstart", "dragend"),
            i = null,
            f = r(l, n.mouse, bt, "mousemove", "mouseup"),
            e = r(ak, n.touch, v, "touchmove", "touchend");
        return t.origin = function(n) {
            return arguments.length ? (i = n, t) : i
        }, n.rebind(t, u, "on")
    };
    n.touches = function(n, t) {
        return arguments.length < 2 && (t = so().touches), t ? ti(t).map(function(t) {
            var i = ao(n, t);
            return i.identifier = t.identifier, i
        }) : []
    };
    var t = 1e-6,
        rc = t * t,
        f = Math.PI,
        g = 2 * f,
        krt = g - t,
        h = f / 2,
        u = f / 180,
        s = 180 / f,
        ue = Math.SQRT2,
        uc = 2,
        ib = 4;
    n.interpolateZoom = function(n, t) {
        function v(n) {
            var t = n * p,
                r, h;
            return y ? (r = ya(u), h = i / (uc * c) * (r * yk(ue * t + u) - vk(u)), [o + h * f, s + h * e, i * r / ya(ue * t + u)]) : [o + n * f, s + n * e, i * Math.exp(ue * t)]
        }
        var o = n[0],
            s = n[1],
            i = n[2],
            w = t[0],
            b = t[1],
            r = t[2],
            f = w - o,
            e = b - s,
            h = f * f + e * e,
            c = Math.sqrt(h),
            l = (r * r - i * i + ib * h) / (2 * i * uc * c),
            a = (r * r - i * i - ib * h) / (2 * r * uc * c),
            u = Math.log(Math.sqrt(l * l + 1) - l),
            k = Math.log(Math.sqrt(a * a + 1) - a),
            y = k - u,
            p = (y || Math.log(r / i)) / ue;
        return v.duration = 1e3 * p, v
    };
    n.behavior.zoom = function() {
        function i(n) {
            n.on(it, ft).on(fc + ".zoom", at).on("dblclick.zoom", vt).on(rt, et)
        }

        function s(n) {
            return [(n[0] - t.x) / t.k, (n[1] - t.y) / t.k]
        }

        function lt(n) {
            return [n[0] * t.k + t.x, n[1] * t.k + t.y]
        }

        function b(n) {
            t.k = Math.max(y[0], Math.min(y[1], n))
        }

        function h(n, i) {
            i = lt(i);
            t.x += n[0] - i[0];
            t.y += n[1] - i[1]
        }

        function ut(u, f, e, o) {
            u.__chart__ = {
                x: t.x,
                y: t.y,
                k: t.k
            };
            b(Math.pow(2, o));
            h(r = f, e);
            u = n.select(u);
            w > 0 && (u = u.transition().duration(w));
            u.call(i.event)
        }

        function k() {
            l && l.domain(nt.range().map(function(n) {
                return (n - t.x) / t.k
            }).map(nt.invert));
            a && a.domain(tt.range().map(function(n) {
                return (n - t.y) / t.k
            }).map(tt.invert))
        }

        function f(n) {
            st++ || n({
                type: "zoomstart"
            })
        }

        function e(n) {
            k();
            n({
                type: "zoom",
                scale: t.k,
                translate: [t.x, t.y]
            })
        }

        function u(n) {
            --st || n({
                type: "zoomend"
            });
            r = null
        }

        function ft() {
            function c() {
                r = 1;
                h(n.mouse(t), y);
                e(i)
            }

            function l() {
                v.on(ht, null).on(ct, null);
                p(r && n.event.target === a);
                u(i)
            }
            var t = this,
                a = n.event.target,
                i = o.of(t, arguments),
                r = 0,
                v = n.select(bt(t)).on(ht, c).on(ct, l),
                y = s(n.mouse(t)),
                p = yu(t);
            ro.call(t);
            f(i)
        }

        function et() {
            function v() {
                var u = n.touches(i);
                return p = t.k, u.forEach(function(n) {
                    n.identifier in r && (r[n.identifier] = s(n))
                }), u
            }

            function y() {
                var s = n.event.target,
                    u, o, f;
                n.select(s).on(tt, d).on(ot, nt);
                w.push(s);
                for (var h = n.event.changedTouches, e = 0, p = h.length; p > e; ++e) r[h[e].identifier] = null;
                if (u = v(), o = Date.now(), 1 === u.length) 500 > o - g && (f = u[0], ut(i, f, r[f.identifier], Math.floor(Math.log(t.k) / Math.LN2) + 1), kt()), g = o;
                else if (u.length > 1) {
                    var f = u[0],
                        c = u[1],
                        a = f[0] - c[0],
                        y = f[1] - c[1];
                    l = a * a + y * y
                }
            }

            function d() {
                var t, f, u, o, v = n.touches(i),
                    a, y, s, w;
                for (ro.call(i), a = 0, y = v.length; y > a; ++a, o = null)
                    if (u = v[a], o = r[u.identifier]) {
                        if (f) break;
                        t = u;
                        f = o
                    }
                o && (s = (s = u[0] - t[0]) * s + (s = u[1] - t[1]) * s, w = l && Math.sqrt(s / l), t = [(t[0] + u[0]) / 2, (t[1] + u[1]) / 2], f = [(f[0] + o[0]) / 2, (f[1] + o[1]) / 2], b(w * p));
                g = null;
                h(t, f);
                e(c)
            }

            function nt() {
                var e;
                if (n.event.touches.length) {
                    for (var i = n.event.changedTouches, t = 0, f = i.length; f > t; ++t) delete r[i[t].identifier];
                    for (e in r) return void v()
                }
                n.selectAll(w).on(a, null);
                k.on(it, ft).on(rt, et);
                st();
                u(c)
            }
            var p, i = this,
                c = o.of(i, arguments),
                r = {}, l = 0,
                a = ".zoom-" + n.event.changedTouches[0].identifier,
                tt = "touchmove" + a,
                ot = "touchend" + a,
                w = [],
                k = n.select(i),
                st = yu(i);
            y();
            f(c);
            k.on(it, null).on(rt, y)
        }

        function at() {
            var i = o.of(this, arguments);
            c ? clearTimeout(c) : (ot = s(r = d || n.mouse(this)), ro.call(this), f(i));
            c = setTimeout(function() {
                c = null;
                u(i)
            }, 50);
            kt();
            b(Math.pow(2, .002 * fe()) * t.k);
            h(r, ot);
            e(i)
        }

        function vt() {
            var i = n.mouse(this),
                r = Math.log(t.k) / Math.LN2;
            ut(this, i, s(i), n.event.shiftKey ? Math.ceil(r) - 1 : Math.floor(r) + 1)
        }
        var ot, r, d, c, g, nt, l, tt, a, t = {
                x: 0,
                y: 0,
                k: 1
            }, v = [960, 500],
            y = ec,
            w = 250,
            st = 0,
            it = "mousedown.zoom",
            ht = "mousemove.zoom",
            ct = "mouseup.zoom",
            rt = "touchstart.zoom",
            o = ho(i, "zoomstart", "zoom", "zoomend");
        return fc || (fc = "onwheel" in p ? (fe = function() {
            return -n.event.deltaY * (n.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in p ? (fe = function() {
            return n.event.wheelDelta
        }, "mousewheel") : (fe = function() {
            return -n.event.detail
        }, "MozMousePixelScroll")), i.event = function(i) {
            i.each(function() {
                var i = o.of(this, arguments),
                    s = t;
                gi ? n.select(this).transition().each("start.zoom", function() {
                    t = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    };
                    f(i)
                }).tween("zoom:zoom", function() {
                    var u = v[0],
                        h = v[1],
                        f = r ? r[0] : u / 2,
                        o = r ? r[1] : h / 2,
                        c = n.interpolateZoom([(f - t.x) / t.k, (o - t.y) / t.k, u / t.k], [(f - s.x) / s.k, (o - s.y) / s.k, u / s.k]);
                    return function(n) {
                        var r = c(n),
                            s = u / r[2];
                        this.__chart__ = t = {
                            x: f - r[0] * s,
                            y: o - r[1] * s,
                            k: s
                        };
                        e(i)
                    }
                }).each("interrupt.zoom", function() {
                    u(i)
                }).each("end.zoom", function() {
                    u(i)
                }) : (this.__chart__ = t, f(i), e(i), u(i))
            })
        }, i.translate = function(n) {
            return arguments.length ? (t = {
                x: +n[0],
                y: +n[1],
                k: t.k
            }, k(), i) : [t.x, t.y]
        }, i.scale = function(n) {
            return arguments.length ? (t = {
                x: t.x,
                y: t.y,
                k: +n
            }, k(), i) : t.k
        }, i.scaleExtent = function(n) {
            return arguments.length ? (y = null == n ? ec : [+n[0], +n[1]], i) : y
        }, i.center = function(n) {
            return arguments.length ? (d = n && [+n[0], +n[1]], i) : d
        }, i.size = function(n) {
            return arguments.length ? (v = n && [+n[0], +n[1]], i) : v
        }, i.duration = function(n) {
            return arguments.length ? (w = +n, i) : w
        }, i.x = function(n) {
            return arguments.length ? (l = n, nt = n.copy(), t = {
                x: 0,
                y: 0,
                k: 1
            }, i) : l
        }, i.y = function(n) {
            return arguments.length ? (a = n, tt = n.copy(), t = {
                x: 0,
                y: 0,
                k: 1
            }, i) : a
        }, n.rebind(i, o, "on")
    };
    ec = [0, 1 / 0];
    n.color = hi;
    hi.prototype.toString = function() {
        return this.rgb() + ""
    };
    n.hsl = ft;
    ee = ft.prototype = new hi;
    ee.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new ft(this.h, this.s, this.l / n)
    };
    ee.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new ft(this.h, this.s, n * this.l)
    };
    ee.rgb = function() {
        return yo(this.h, this.s, this.l)
    };
    n.hcl = tt;
    oe = tt.prototype = new hi;
    oe.brighter = function(n) {
        return new tt(this.h, this.c, Math.min(100, this.l + se * (arguments.length ? n : 1)))
    };
    oe.darker = function(n) {
        return new tt(this.h, this.c, Math.max(0, this.l - se * (arguments.length ? n : 1)))
    };
    oe.rgb = function() {
        return po(this.h, this.c, this.l).rgb()
    };
    n.lab = it;
    var se = 18,
        rb = .95047,
        ub = 1,
        fb = 1.08883,
        oc = it.prototype = new hi;
    oc.brighter = function(n) {
        return new it(Math.min(100, this.l + se * (arguments.length ? n : 1)), this.a, this.b)
    };
    oc.darker = function(n) {
        return new it(Math.max(0, this.l - se * (arguments.length ? n : 1)), this.a, this.b)
    };
    oc.rgb = function() {
        return wa(this.l, this.a, this.b)
    };
    n.rgb = b;
    uu = b.prototype = new hi;
    uu.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var i = this.r,
            r = this.g,
            u = this.b,
            t = 30;
        return i || r || u ? (i && t > i && (i = t), r && t > r && (r = t), u && t > u && (u = t), new b(Math.min(255, i / n), Math.min(255, r / n), Math.min(255, u / n))) : new b(t, t, t)
    };
    uu.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new b(n * this.r, n * this.g, n * this.b)
    };
    uu.hsl = function() {
        return ga(this.r, this.g, this.b)
    };
    uu.toString = function() {
        return "#" + tr(this.r) + tr(this.g) + tr(this.b)
    };
    fu = n.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    fu.forEach(function(n, t) {
        fu.set(n, ka(t))
    });
    n.functor = o;
    n.xhr = ts(v);
    n.dsv = function(n, t) {
        function i(n, i, r) {
            arguments.length < 3 && (r = i, i = null);
            var e = wu(n, t, null == i ? u : f(i), r);
            return e.row = function(n) {
                return arguments.length ? e.response(null == (i = n) ? u : f(n)) : i
            }, e
        }

        function u(n) {
            return i.parse(n.responseText)
        }

        function f(n) {
            return function(t) {
                return i.parse(t.responseText, n)
            }
        }

        function e(t) {
            return t.map(r).join(n)
        }

        function r(n) {
            return o.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var o = new RegExp('["' + n + "\n]"),
            s = n.charCodeAt(0);
        return i.parse = function(n, t) {
            var r;
            return i.parseRows(n, function(n, i) {
                if (r) return r(n, i - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function(n, i) {
                    return t(u(n), i)
                } : u
            })
        }, i.parseRows = function(n, t) {
            function h() {
                var f, t, u, h;
                if (i >= o) return e;
                if (r) return r = !1, c;
                if (f = i, 34 === n.charCodeAt(f)) {
                    for (t = f; t++ < o;)
                        if (34 === n.charCodeAt(t)) {
                            if (34 !== n.charCodeAt(t + 1)) break;
                            ++t
                        }
                    return i = t + 2, u = n.charCodeAt(t + 1), 13 === u ? (r = !0, 10 === n.charCodeAt(t + 2) && ++i) : 10 === u && (r = !0), n.slice(f + 1, t).replace(/""/g, '"')
                }
                for (; o > i;) {
                    if (u = n.charCodeAt(i++), h = 1, 10 === u) r = !0;
                    else if (13 === u) r = !0, 10 === n.charCodeAt(i) && (++i, ++h);
                    else if (u !== s) continue;
                    return n.slice(f, i - h)
                }
                return n.slice(f)
            }
            for (var f, u, r, c = {}, e = {}, l = [], o = n.length, i = 0, a = 0;
                (u = h()) !== e;) {
                for (f = []; u !== c && u !== e;) f.push(u), u = h();
                t && null == (f = t(f, a++)) || l.push(f)
            }
            return l
        }, i.format = function(t) {
            if (Array.isArray(t[0])) return i.formatRows(t);
            var f = new fo,
                u = [];
            return t.forEach(function(n) {
                for (var t in n) f.has(t) || u.push(f.add(t))
            }), [u.map(r).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return r(t[n])
                }).join(n)
            })).join("\n")
        }, i.formatRows = function(n) {
            return n.map(e).join("\n")
        }, i
    };
    n.csv = n.dsv(",", "text/csv");
    n.tsv = n.dsv("\t", "text/tab-separated-values");
    sc = this[eo(this, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17)
    };
    n.timer = function(n, t, i) {
        var u = arguments.length,
            f, r;
        2 > u && (t = 0);
        3 > u && (i = Date.now());
        f = i + t;
        r = {
            c: n,
            t: f,
            f: !1,
            n: null
        };
        ce ? ce.n = r : he = r;
        ce = r;
        le || (ae = clearTimeout(ae), le = 1, sc(is))
    };
    n.timer.flush = function() {
        tv();
        iv()
    };
    n.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    eb = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(bk);
    n.formatPrefix = function(t, i) {
        var r = 0;
        return t && (0 > t && (t *= -1), i && (t = n.round(t, rs(t, i))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, 3 * Math.floor((r - 1) / 3)))), eb[8 + r / 3]
    };
    var ob = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        drt = n.map({
            b: function(n) {
                return n.toString(2)
            },
            c: function(n) {
                return String.fromCharCode(n)
            },
            o: function(n) {
                return n.toString(8)
            },
            x: function(n) {
                return n.toString(16)
            },
            X: function(n) {
                return n.toString(16).toUpperCase()
            },
            g: function(n, t) {
                return n.toPrecision(t)
            },
            e: function(n, t) {
                return n.toExponential(t)
            },
            f: function(n, t) {
                return n.toFixed(t)
            },
            r: function(t, i) {
                return (t = n.round(t, rs(t, i))).toFixed(Math.max(0, Math.min(20, rs(t * (1 + 1e-15), i))))
            }
        }),
        i = n.time = {}, y = Date;
    vt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            st.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            st.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            st.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            st.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            st.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            st.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            st.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            st.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            st.setTime.apply(this._, arguments)
        }
    };
    st = Date.prototype;
    i.year = ci(function(n) {
        return n = i.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    });
    i.years = i.year.range;
    i.years.utc = i.year.utc.range;
    i.day = ci(function(n) {
        var t = new y(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    });
    i.days = i.day.range;
    i.days.utc = i.day.utc.range;
    i.dayOfYear = function(n) {
        var t = i.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    };
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var r = i[n] = ci(function(n) {
            return (n = i.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7) - (r !== t)
        });
        i[n + "s"] = r.range;
        i[n + "s"].utc = r.utc.range;
        i[n + "OfYear"] = function(n) {
            var r = i.year(n).getDay();
            return Math.floor((i.dayOfYear(n) + (r + t) % 7) / 7)
        }
    });
    i.week = i.sunday;
    i.weeks = i.sunday.range;
    i.weeks.utc = i.sunday.utc.range;
    i.weekOfYear = i.sundayOfYear;
    var sb = {
        "-": "",
        _: " ",
        0: "0"
    }, c = /^\s*\d+/,
        hb = /^%/;
    n.locale = function(n) {
        return {
            numberFormat: kk(n),
            timeFormat: gk(n)
        }
    };
    hc = n.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    n.format = hc.numberFormat;
    n.geo = {};
    us.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            fv(n, this.t, eu);
            fv(eu.s, this.s, this);
            this.s ? this.t += eu.t : this.s = eu.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    eu = new us;
    n.geo.stream = function(n, t) {
        n && cc.hasOwnProperty(n.type) ? cc[n.type](n, t) : gu(n, t)
    };
    cc = {
        Feature: function(n, t) {
            gu(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var i = n.features, r = -1, u = i.length; ++r < u;) gu(i[r].geometry, t)
        }
    };
    lc = {
        Sphere: function(n, t) {
            t.sphere()
        },
        Point: function(n, t) {
            n = n.coordinates;
            t.point(n[0], n[1], n[2])
        },
        MultiPoint: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) n = i[r], t.point(n[0], n[1], n[2])
        },
        LineString: function(n, t) {
            fs(n.coordinates, t, 0)
        },
        MultiLineString: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) fs(i[r], t, 0)
        },
        Polygon: function(n, t) {
            ev(n.coordinates, t)
        },
        MultiPolygon: function(n, t) {
            for (var i = n.coordinates, r = -1, u = i.length; ++r < u;) ev(i[r], t)
        },
        GeometryCollection: function(n, t) {
            for (var i = n.geometries, r = -1, u = i.length; ++r < u;) gu(i[r], t)
        }
    };
    n.geo.area = function(t) {
        return ve = 0, n.geo.stream(t, k), ve
    };
    ii = new us;
    k = {
        sphere: function() {
            ve += 4 * f
        },
        point: l,
        lineStart: l,
        lineEnd: l,
        polygonStart: function() {
            ii.reset();
            k.lineStart = pd
        },
        polygonEnd: function() {
            var n = 2 * ii;
            ve += 0 > n ? 4 * f + n : n;
            k.lineStart = k.lineEnd = k.point = l
        }
    };
    n.geo.bounds = function() {
        function w(n, t) {
            v.push(l = [i = n, f = n]);
            o > t && (o = t);
            t > h && (h = t)
        }

        function b(n, t) {
            var d = li([n * u, t * u]),
                v;
            if (y) {
                var b = ir(y, d),
                    nt = [b[1], -b[0], 0],
                    c = ir(nt, b);
                rf(c);
                c = uf(c);
                var g = n - a,
                    p = g > 0 ? 1 : -1,
                    l = c[0] * s * p,
                    k = r(g) > 180;
                k ^ (l > p * a && p * n > l) ? (v = c[1] * s, v > h && (h = v)) : (l = (l + 360) % 360 - 180, k ^ (l > p * a && p * n > l)) ? (v = -c[1] * s, o > v && (o = v)) : (o > t && (o = t), t > h && (h = t));
                k ? a > n ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n) : f >= i ? (i > n && (i = n), n > f && (f = n)) : n > a ? e(i, n) > e(i, f) && (f = n) : e(n, f) > e(i, f) && (i = n)
            } else w(n, t);
            y = d;
            a = n
        }

        function d() {
            c.point = b
        }

        function g() {
            l[0] = i;
            l[1] = f;
            c.point = w;
            y = null
        }

        function nt(n, t) {
            if (y) {
                var i = n - a;
                p += r(i) > 180 ? i + (i > 0 ? 360 : -360) : i
            } else it = n, rt = t;
            k.point(n, t);
            b(n, t)
        }

        function ut() {
            k.lineStart()
        }

        function ft() {
            nt(it, rt);
            k.lineEnd();
            r(p) > t && (i = -(f = 180));
            l[0] = i;
            l[1] = f;
            y = null
        }

        function e(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function et(n, t) {
            return n[0] - t[0]
        }

        function tt(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var i, o, f, h, a, it, rt, y, p, v, l, c = {
                point: w,
                lineStart: d,
                lineEnd: g,
                polygonStart: function() {
                    c.point = nt;
                    c.lineStart = ut;
                    c.lineEnd = ft;
                    p = 0;
                    k.polygonStart()
                },
                polygonEnd: function() {
                    k.polygonEnd();
                    c.point = w;
                    c.lineStart = d;
                    c.lineEnd = g;
                    0 > ii ? (i = -(f = 180), o = -(h = 90)) : p > t ? h = 90 : -t > p && (o = -90);
                    l[0] = i;
                    l[1] = f
                }
            };
        return function(t) {
            var a;
            if (h = f = -(i = o = 1 / 0), v = [], n.geo.stream(t, c), a = v.length, a) {
                v.sort(et);
                for (var u, s = 1, r = v[0], y = [r]; a > s; ++s) u = v[s], tt(u[0], r) || tt(u[1], r) ? (e(r[0], u[1]) > e(r[0], r[1]) && (r[1] = u[1]), e(u[0], r[1]) > e(r[0], r[1]) && (r[0] = u[0])) : y.push(r = u);
                for (var p, u, w = -1 / 0, a = y.length - 1, s = 0, r = y[a]; a >= s; r = u, ++s) u = y[s], (p = e(r[1], u[0])) > w && (w = p, i = u[0], f = r[1])
            }
            return v = l = null, 1 / 0 === i || 1 / 0 === o ? [
                [NaN, NaN],
                [NaN, NaN]
            ] : [
                [i, o],
                [f, h]
            ]
        }
    }();
    n.geo.centroid = function(i) {
        ou = ye = wi = bi = wt = ri = ui = ht = sr = hr = fi = 0;
        n.geo.stream(i, rt);
        var r = sr,
            u = hr,
            f = fi,
            e = r * r + u * u + f * f;
        return rc > e && (r = ri, u = ui, f = ht, t > ye && (r = wi, u = bi, f = wt), e = r * r + u * u + f * f, rc > e) ? [NaN, NaN] : [Math.atan2(u, r) * s, gt(f / Math.sqrt(e)) * s]
    };
    var ou, ye, wi, bi, wt, ri, ui, ht, sr, hr, fi, rt = {
            sphere: l,
            point: os,
            lineStart: ov,
            lineEnd: sv,
            polygonStart: function() {
                rt.lineStart = wd
            },
            polygonEnd: function() {
                rt.lineStart = ov
            }
        }, cb = av(rr, dd, ng, [-f, -f / 2]),
        pe = 1e9;
    n.geo.clipExtent = function() {
        var t, i, r, u, n, f, e = {
                stream: function(t) {
                    return n && (n.valid = !1), n = f(t), n.valid = !0, n
                },
                extent: function(o) {
                    return arguments.length ? (f = pv(t = +o[0][0], i = +o[0][1], r = +o[1][0], u = +o[1][1]), n && (n.valid = !1, n = null), e) : [
                        [t, i],
                        [r, u]
                    ]
                }
            };
        return e.extent([
            [0, 0],
            [960, 500]
        ])
    };
    (n.geo.conicEqualArea = function() {
        return ss(wv)
    }).raw = wv;
    n.geo.albers = function() {
        return n.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    };
    n.geo.albersUsa = function() {
        function r(n) {
            var t = n[0],
                i = n[1];
            return u = null, s(t, i), u || (h(t, i), u) || c(t, i), u
        }
        var u, s, h, c, i = n.geo.albers(),
            f = n.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            e = n.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            o = {
                point: function(n, t) {
                    u = [n, t]
                }
            };
        return r.invert = function(n) {
            var u = i.scale(),
                o = i.translate(),
                t = (n[0] - o[0]) / u,
                r = (n[1] - o[1]) / u;
            return (r >= .12 && .234 > r && t >= -.425 && -.214 > t ? f : r >= .166 && .234 > r && t >= -.214 && -.115 > t ? e : i).invert(n)
        }, r.stream = function(n) {
            var t = i.stream(n),
                r = f.stream(n),
                u = e.stream(n);
            return {
                point: function(n, i) {
                    t.point(n, i);
                    r.point(n, i);
                    u.point(n, i)
                },
                sphere: function() {
                    t.sphere();
                    r.sphere();
                    u.sphere()
                },
                lineStart: function() {
                    t.lineStart();
                    r.lineStart();
                    u.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd();
                    r.lineEnd();
                    u.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart();
                    r.polygonStart();
                    u.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd();
                    r.polygonEnd();
                    u.polygonEnd()
                }
            }
        }, r.precision = function(n) {
            return arguments.length ? (i.precision(n), f.precision(n), e.precision(n), r) : i.precision()
        }, r.scale = function(n) {
            return arguments.length ? (i.scale(n), f.scale(.35 * n), e.scale(n), r.translate(i.translate())) : i.scale()
        }, r.translate = function(n) {
            if (!arguments.length) return i.translate();
            var u = i.scale(),
                l = +n[0],
                a = +n[1];
            return s = i.translate(n).clipExtent([
                [l - .455 * u, a - .238 * u],
                [l + .455 * u, a + .238 * u]
            ]).stream(o).point, h = f.translate([l - .307 * u, a + .201 * u]).clipExtent([
                [l - .425 * u + t, a + .12 * u + t],
                [l - .214 * u - t, a + .234 * u - t]
            ]).stream(o).point, c = e.translate([l - .205 * u, a + .212 * u]).clipExtent([
                [l - .214 * u + t, a + .166 * u + t],
                [l - .115 * u - t, a + .234 * u - t]
            ]).stream(o).point, r
        }, r.scale(1070)
    };
    var ac, vc, we, be, ke, de, ei = {
            point: l,
            lineStart: l,
            lineEnd: l,
            polygonStart: function() {
                vc = 0;
                ei.lineStart = rg
            },
            polygonEnd: function() {
                ei.lineStart = ei.lineEnd = ei.point = l;
                ac += r(vc / 2)
            }
        }, grt = {
            point: ug,
            lineStart: l,
            lineEnd: l,
            polygonStart: l,
            polygonEnd: l
        }, ut = {
            point: ai,
            lineStart: kv,
            lineEnd: dv,
            polygonStart: function() {
                ut.lineStart = eg
            },
            polygonEnd: function() {
                ut.point = ai;
                ut.lineStart = kv;
                ut.lineEnd = dv
            }
        };
    n.geo.path = function() {
        function t(t) {
            return t && ("function" == typeof r && i.pointRadius(+r.apply(this, arguments)), f && f.valid || (f = u(i)), n.geo.stream(t, f)), i.result()
        }

        function e() {
            return f = null, t
        }
        var o, s, u, i, f, r = 4.5;
        return t.area = function(t) {
            return ac = 0, n.geo.stream(t, u(ei)), ac
        }, t.centroid = function(t) {
            return wi = bi = wt = ri = ui = ht = sr = hr = fi = 0, n.geo.stream(t, u(ut)), fi ? [sr / fi, hr / fi] : ht ? [ri / ht, ui / ht] : wt ? [wi / wt, bi / wt] : [NaN, NaN]
        }, t.bounds = function(t) {
            return ke = de = -(we = be = 1 / 0), n.geo.stream(t, u(grt)), [
                [we, be],
                [ke, de]
            ]
        }, t.projection = function(n) {
            return arguments.length ? (u = (o = n) ? n.stream || sg(n) : v, e()) : o
        }, t.context = function(n) {
            return arguments.length ? (i = null == (s = n) ? new fg : new og(n), "function" != typeof r && i.pointRadius(r), e()) : s
        }, t.pointRadius = function(n) {
            return arguments.length ? (r = "function" == typeof n ? n : (i.pointRadius(+n), +n), t) : r
        }, t.projection(n.geo.albersUsa()).context(null)
    };
    n.geo.transform = function(n) {
        return {
            stream: function(t) {
                var i = new ny(t);
                for (var r in n) i[r] = n[r];
                return i
            }
        }
    };
    ny.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    n.geo.projection = ni;
    n.geo.projectionMutator = hs;
    (n.geo.equirectangular = function() {
        return ni(yr)
    }).raw = yr.invert = yr;
    n.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * u, t[1] * u), t[0] *= s, t[1] *= s, t
        }
        return n = cs(n[0] % 360 * u, n[1] * u, n.length > 2 ? n[2] * u : 0), t.invert = function(t) {
            return t = n.invert(t[0] * u, t[1] * u), t[0] *= s, t[1] *= s, t
        }, t
    };
    ry.invert = yr;
    n.geo.circle = function() {
        function n() {
            var n = "function" == typeof t ? t.apply(this, arguments) : t,
                f = cs(-n[0] * u, -n[1] * u, 0).invert,
                i = [];
            return r(null, null, 1, {
                point: function(n, t) {
                    i.push(n = f(n, t));
                    n[0] *= s;
                    n[1] *= s
                }
            }), {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var i, r, t = [0, 0],
            f = 6;
        return n.origin = function(i) {
            return arguments.length ? (t = i, n) : t
        }, n.angle = function(t) {
            return arguments.length ? (r = ls((i = +t) * u, f * u), n) : i
        }, n.precision = function(t) {
            return arguments.length ? (r = ls(i * u, (f = +t) * u), n) : f
        }, n.angle(90)
    };
    n.geo.distance = function(n, t) {
        var i, f = (t[0] - n[0]) * u,
            e = n[1] * u,
            o = t[1] * u,
            a = Math.sin(f),
            s = Math.cos(f),
            h = Math.sin(e),
            c = Math.cos(e),
            l = Math.sin(o),
            r = Math.cos(o);
        return Math.atan2(Math.sqrt((i = r * a) * i + (i = c * l - h * r * s) * i), h * l + c * r * s)
    };
    n.geo.graticule = function() {
        function i() {
            return {
                type: "MultiLineString",
                coordinates: d()
            }
        }

        function d() {
            return n.range(Math.ceil(f / v) * v, u, v).map(b).concat(n.range(Math.ceil(o / y) * y, e, y).map(k)).concat(n.range(Math.ceil(h / a) * a, s, a).filter(function(n) {
                return r(n % v) > t
            }).map(g)).concat(n.range(Math.ceil(l / w) * w, c, w).filter(function(n) {
                return r(n % y) > t
            }).map(nt))
        }
        var s, h, u, f, c, l, e, o, g, nt, b, k, a = 10,
            w = a,
            v = 90,
            y = 360,
            p = 2.5;
        return i.lines = function() {
            return d().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            })
        }, i.outline = function() {
            return {
                type: "Polygon",
                coordinates: [b(f).concat(k(e).slice(1), b(u).reverse().slice(1), k(o).reverse().slice(1))]
            }
        }, i.extent = function(n) {
            return arguments.length ? i.majorExtent(n).minorExtent(n) : i.minorExtent()
        }, i.majorExtent = function(n) {
            return arguments.length ? (f = +n[0][0], u = +n[1][0], o = +n[0][1], e = +n[1][1], f > u && (n = f, f = u, u = n), o > e && (n = o, o = e, e = n), i.precision(p)) : [
                [f, o],
                [u, e]
            ]
        }, i.minorExtent = function(n) {
            return arguments.length ? (h = +n[0][0], s = +n[1][0], l = +n[0][1], c = +n[1][1], h > s && (n = h, h = s, s = n), l > c && (n = l, l = c, c = n), i.precision(p)) : [
                [h, l],
                [s, c]
            ]
        }, i.step = function(n) {
            return arguments.length ? i.majorStep(n).minorStep(n) : i.minorStep()
        }, i.majorStep = function(n) {
            return arguments.length ? (v = +n[0], y = +n[1], i) : [v, y]
        }, i.minorStep = function(n) {
            return arguments.length ? (a = +n[0], w = +n[1], i) : [a, w]
        }, i.precision = function(n) {
            return arguments.length ? (p = +n, g = sy(l, c, 90), nt = hy(h, s, p), b = sy(o, e, 90), k = hy(f, u, p), i) : p
        }, i.majorExtent([
            [-180, -90 + t],
            [180, 90 - t]
        ]).minorExtent([
            [-180, -80 - t],
            [180, 80 + t]
        ])
    };
    n.geo.greatArc = function() {
        function t() {
            return {
                type: "LineString",
                coordinates: [u || i.apply(this, arguments), f || r.apply(this, arguments)]
            }
        }
        var u, f, i = as,
            r = vs;
        return t.distance = function() {
            return n.geo.distance(u || i.apply(this, arguments), f || r.apply(this, arguments))
        }, t.source = function(n) {
            return arguments.length ? (i = n, u = "function" == typeof n ? null : n, t) : i
        }, t.target = function(n) {
            return arguments.length ? (r = n, f = "function" == typeof n ? null : n, t) : r
        }, t.precision = function() {
            return arguments.length ? t : 0
        }, t
    };
    n.geo.interpolate = function(n, t) {
        return hg(n[0] * u, n[1] * u, t[0] * u, t[1] * u)
    };
    n.geo.length = function(t) {
        return yc = 0, n.geo.stream(t, ki), yc
    };
    ki = {
        sphere: l,
        point: l,
        lineStart: cg,
        lineEnd: l,
        polygonStart: l,
        polygonEnd: l
    };
    pc = pr(function(n) {
        return Math.sqrt(2 / (1 + n))
    }, function(n) {
        return 2 * Math.asin(n / 2)
    });
    (n.geo.azimuthalEqualArea = function() {
        return ni(pc)
    }).raw = pc;
    wc = pr(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, v);
    (n.geo.azimuthalEquidistant = function() {
        return ni(wc)
    }).raw = wc;
    (n.geo.conicConformal = function() {
        return ss(cy)
    }).raw = cy;
    (n.geo.conicEquidistant = function() {
        return ss(ly)
    }).raw = ly;
    bc = pr(function(n) {
        return 1 / n
    }, Math.atan);
    (n.geo.gnomonic = function() {
        return ni(bc)
    }).raw = bc;
    of.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - h]
    };
    (n.geo.mercator = function() {
        return ay(of)
    }).raw = of;
    kc = pr(function() {
        return 1
    }, Math.asin);
    (n.geo.orthographic = function() {
        return ni(kc)
    }).raw = kc;
    dc = pr(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (n.geo.stereographic = function() {
        return ni(dc)
    }).raw = dc;
    ys.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - h]
    };
    (n.geo.transverseMercator = function() {
        var n = ay(ys),
            i = n.center,
            t = n.rotate;
        return n.center = function(n) {
            return n ? i([-n[1], n[0]]) : (n = i(), [n[1], -n[0]])
        }, n.rotate = function(n) {
            return n ? t([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = t(), [n[0], n[1], n[2] - 90])
        }, t([0, 0, 90])
    }).raw = ys;
    n.geom = {};
    n.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            for (var l = o(i), a = o(r), h = n.length, u = [], c = [], t = 0; h > t; t++) u.push([+l.call(this, n[t], t), +a.call(this, n[t], t), t]);
            for (u.sort(lg), t = 0; h > t; t++) c.push([u[t][0], -u[t][1]]);
            var f = vy(u),
                e = vy(c),
                v = e[0] === f[0],
                y = e[e.length - 1] === f[f.length - 1],
                s = [];
            for (t = f.length - 1; t >= 0; --t) s.push(n[u[f[t]][2]]);
            for (t = +v; t < e.length - y; ++t) s.push(n[u[e[t]][2]]);
            return s
        }
        var i = ur,
            r = wr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    };
    n.geom.polygon = function(n) {
        return ne(n, su), n
    };
    su = n.geom.polygon.prototype = [];
    su.area = function() {
        for (var t, i = -1, r = this.length, n = this[r - 1], u = 0; ++i < r;) t = n, n = this[i], u += t[1] * n[0] - t[0] * n[1];
        return .5 * u
    };
    su.centroid = function(n) {
        var i, r, u = -1,
            f = this.length,
            e = 0,
            o = 0,
            t = this[f - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++u < f;) i = t, t = this[u], r = i[0] * t[1] - t[0] * i[1], e += (i[0] + t[0]) * r, o += (i[1] + t[1]) * r;
        return [e * n, o * n]
    };
    su.clip = function(n) {
        for (var f, e, o, t, i, r, s = yy(n), h = -1, c = this.length - yy(this), u = this[c - 1]; ++h < c;) {
            for (f = n.slice(), n.length = 0, t = this[h], i = f[(o = f.length - s) - 1], e = -1; ++e < o;) r = f[e], ps(r, u, t) ? (ps(i, u, t) || n.push(ws(i, r, u, t)), n.push(r)) : ps(i, u, t) && n.push(ws(i, r, u, t)), i = r;
            s && n.push(n[0]);
            u = t
        }
        return n
    };
    nl = [];
    tl = [];
    by.prototype.prepare = function() {
        for (var t, n = this.edges, i = n.length; i--;) t = n[i].edge, t.b && t.a || n.splice(i, 1);
        return n.sort(ky), n.length
    };
    hf.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    };
    ks.prototype = {
        insert: function(n, t) {
            var i, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                i = n
            } else this._ ? (n = gy(this._), t.P = null, t.N = n, n.P = n.L = t, i = n) : (t.P = t.N = null, this._ = t, i = null);
            for (t.L = t.R = null, t.U = i, t.C = !0, n = t; i && i.C;) r = i.U, i === r.L ? (u = r.R, u && u.C ? (i.C = u.C = !1, r.C = !0, n = r) : (n === i.R && (kr(this, i), n = i, i = n.U), i.C = !1, r.C = !0, dr(this, r))) : (u = r.L, u && u.C ? (i.C = u.C = !1, r.C = !0, n = r) : (n === i.L && (dr(this, i), n = i, i = n.U), i.C = !1, r.C = !0, kr(this, r))), i = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P);
            n.P && (n.P.N = n.N);
            n.N = n.P = null;
            var t, r, e, i = n.U,
                f = n.L,
                u = n.R;
            if (r = f ? u ? gy(u) : f : u, i ? i.L === n ? i.L = r : i.R = r : this._ = r, f && u ? (e = r.C, r.C = n.C, r.L = f, f.U = r, r !== u ? (i = r.U, r.U = n.U, n = r.R, i.L = n, r.R = u, u.U = r) : (r.U = i, i = r, n = r.R)) : (e = n.C, n = r), n && (n.U = i), !e) {
                if (n && n.C) return void(n.C = !1);
                do {
                    if (n === this._) break;
                    if (n === i.L) {
                        if (t = i.R, t.C && (t.C = !1, i.C = !0, kr(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, dr(this, t), t = i.R);
                            t.C = i.C;
                            i.C = t.R.C = !1;
                            kr(this, i);
                            n = this._;
                            break
                        }
                    } else if (t = i.L, t.C && (t.C = !1, i.C = !0, dr(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, kr(this, t), t = i.L);
                        t.C = i.C;
                        i.C = t.L.C = !1;
                        dr(this, i);
                        n = this._;
                        break
                    }
                    t.C = !0;
                    n = i;
                    i = i.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    };
    n.geom.voronoi = function(n) {
        function i(n) {
            var o = new Array(n.length),
                t = r[0][0],
                i = r[0][1],
                f = r[1][0],
                e = r[1][1];
            return ds(u(n), r).cells.forEach(function(r, u) {
                var h = r.edges,
                    s = r.site,
                    c = o[u] = h.length ? h.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : s.x >= t && s.x <= f && s.y >= i && s.y <= e ? [
                        [t, e],
                        [f, e],
                        [f, i],
                        [t, i]
                    ] : [];
                c.point = n[u]
            }), o
        }

        function u(n) {
            return n.map(function(n, i) {
                return {
                    x: Math.round(s(n, i) / t) * t,
                    y: Math.round(h(n, i) / t) * t,
                    i: i
                }
            })
        }
        var f = ur,
            e = wr,
            s = f,
            h = e,
            r = cu;
        return n ? i(n) : (i.links = function(n) {
            return ds(u(n)).edges.filter(function(n) {
                return n.l && n.r
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            })
        }, i.triangles = function(n) {
            var t = [];
            return ds(u(n)).cells.forEach(function(i, r) {
                for (var l, e, o = i.site, s = i.edges.sort(ky), h = -1, c = s.length, u = s[c - 1].edge, f = u.l === o ? u.r : u.l; ++h < c;) l = u, e = f, u = s[h].edge, f = u.l === o ? u.r : u.l, r < e.i && r < f.i && tn(o, e, f) < 0 && t.push([n[r], n[e.i], n[f.i]])
            }), t
        }, i.x = function(n) {
            return arguments.length ? (s = o(f = n), i) : f
        }, i.y = function(n) {
            return arguments.length ? (h = o(e = n), i) : e
        }, i.clipExtent = function(n) {
            return arguments.length ? (r = null == n ? cu : n, i) : r === cu ? null : r
        }, i.size = function(n) {
            return arguments.length ? i.clipExtent(n && [
                [0, 0], n
            ]) : r === cu ? null : r && r[1]
        }, i)
    };
    cu = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    n.geom.delaunay = function(t) {
        return n.geom.voronoi().triangles(t)
    };
    n.geom.quadtree = function(n, t, i, u, f) {
        function e(n) {
            function it(n, t, i, u, f, e, o, s) {
                var h, c, l;
                isNaN(i) || isNaN(u) || (n.leaf ? (h = n.x, c = n.y, null != h ? r(h - i) + r(c - u) < .01 ? nt(n, t, i, u, f, e, o, s) : (l = n.point, n.x = n.y = n.point = null, nt(n, l, h, c, f, e, o, s), nt(n, t, i, u, f, e, o, s)) : (n.x = i, n.y = u, n.point = t)) : nt(n, t, i, u, f, e, o, s))
            }

            function nt(n, t, i, r, u, f, e, o) {
                var s = .5 * (u + e),
                    h = .5 * (f + o),
                    c = i >= s,
                    l = r >= h,
                    a = l << 1 | c;
                n.leaf = !1;
                n = n.nodes[a] || (n.nodes[a] = np());
                c ? u = s : e = s;
                l ? f = h : o = h;
                it(n, t, i, r, u, f, e, o)
            }
            var l, d, g, e, tt, a, v, y, p, ft = o(s),
                et = o(h),
                b, k, rt, ut, w;
            if (null != t) a = t, v = i, y = u, p = f;
            else if (y = p = -(a = v = 1 / 0), d = [], g = [], tt = n.length, c)
                for (e = 0; tt > e; ++e) l = n[e], l.x < a && (a = l.x), l.y < v && (v = l.y), l.x > y && (y = l.x), l.y > p && (p = l.y), d.push(l.x), g.push(l.y);
            else
                for (e = 0; tt > e; ++e) b = +ft(l = n[e], e), k = +et(l, e), a > b && (a = b), v > k && (v = k), b > y && (y = b), k > p && (p = k), d.push(b), g.push(k); if (rt = y - a, ut = p - v, rt > ut ? p = v + rt : y = a + ut, w = np(), w.add = function(n) {
                it(w, n, +ft(n, ++e), +et(n, e), a, v, y, p)
            }, w.visit = function(n) {
                gr(n, w, a, v, y, p)
            }, w.find = function(n) {
                return fn(w, n[0], n[1], a, v, y, p)
            }, e = -1, null == t) {
                for (; ++e < tt;) it(w, n[e], d[e], g[e], a, v, y, p);
                --e
            } else n.forEach(w.add);
            return d = g = n = l = null, w
        }
        var c, s = ur,
            h = wr;
        return (c = arguments.length) ? (s = rn, h = un, 3 === c && (f = i, u = t, i = t = 0), e(n)) : (e.x = function(n) {
            return arguments.length ? (s = n, e) : s
        }, e.y = function(n) {
            return arguments.length ? (h = n, e) : h
        }, e.extent = function(n) {
            return arguments.length ? (null == n ? t = i = u = f = null : (t = +n[0][0], i = +n[0][1], u = +n[1][0], f = +n[1][1]), e) : null == t ? null : [
                [t, i],
                [u, f]
            ]
        }, e.size = function(n) {
            return arguments.length ? (null == n ? t = i = u = f = null : (t = i = 0, u = +n[0], f = +n[1]), e) : null == t ? null : [u - t, f - i]
        }, e)
    };
    n.interpolateRgb = gs;
    n.interpolateObject = tp;
    n.interpolateNumber = yt;
    n.interpolateString = ip;
    ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    no = new RegExp(ge.source, "g");
    n.interpolate = vi;
    n.interpolators = [
        function(n, t) {
            var i = typeof t;
            return ("string" === i ? fu.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? gs : ip : t instanceof hi ? gs : Array.isArray(t) ? lf : "object" === i && isNaN(t) ? tp : yt)(n, t)
        }
    ];
    n.interpolateArray = lf;
    var lb = function() {
        return v
    }, nut = n.map({
            linear: lb,
            poly: cn,
            quad: function() {
                return on
            },
            cubic: function() {
                return sn
            },
            sin: function() {
                return ln
            },
            exp: function() {
                return an
            },
            circle: function() {
                return vn
            },
            elastic: yn,
            back: pn,
            bounce: function() {
                return wn
            }
        }),
        tut = n.map({
            "in": v,
            out: rp,
            "in-out": up,
            "out-in": function(n) {
                return up(rp(n))
            }
        });
    n.ease = function(n) {
        var t = n.indexOf("-"),
            i = t >= 0 ? n.slice(0, t) : n,
            r = t >= 0 ? n.slice(t + 1) : "in";
        return i = nut.get(i) || lb, r = tut.get(r) || v, en(r(i.apply(null, dw.call(arguments, 1))))
    };
    n.interpolateHcl = bn;
    n.interpolateHsl = kn;
    n.interpolateLab = dn;
    n.interpolateRound = fp;
    n.transform = function(t) {
        var i = p.createElementNS(n.ns.prefix.svg, "g");
        return (n.transform = function(n) {
            if (null != n) {
                i.setAttribute("transform", n);
                var t = i.transform.baseVal.consolidate()
            }
            return new ep(t ? t.matrix : ab)
        })(t)
    };
    ep.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    ab = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    n.interpolateTransform = hp;
    n.layout = {};
    n.layout.bundle = function() {
        return function(n) {
            for (var t = [], i = -1, r = n.length; ++i < r;) t.push(itt(n[i]));
            return t
        }
    };
    n.layout.chord = function() {
        function c() {
            var v, t, b, c, a, k = {}, d = [],
                it = n.range(r),
                nt = [],
                p, w;
            for (i = [], u = [], v = 0, c = -1; ++c < r;) {
                for (t = 0, a = -1; ++a < r;) t += f[c][a];
                d.push(t);
                nt.push(n.range(r));
                v += t
            }
            for (e && it.sort(function(n, t) {
                return e(d[n], d[t])
            }), o && nt.forEach(function(n, t) {
                n.sort(function(n, i) {
                    return o(f[t][n], f[t][i])
                })
            }), v = (g - h * r) / v, t = 0, c = -1; ++c < r;) {
                for (b = t, a = -1; ++a < r;) {
                    var y = it[c],
                        tt = nt[y][a],
                        rt = f[y][tt],
                        ut = t,
                        ft = t += rt * v;
                    k[y + "-" + tt] = {
                        index: y,
                        subindex: tt,
                        startAngle: ut,
                        endAngle: ft,
                        value: rt
                    }
                }
                u[y] = {
                    index: y,
                    startAngle: b,
                    endAngle: t,
                    value: (t - b) / v
                };
                t += h
            }
            for (c = -1; ++c < r;)
                for (a = c - 1; ++a < r;) p = k[c + "-" + a], w = k[a + "-" + c], (p.value || w.value) && i.push(p.value < w.value ? {
                    source: w,
                    target: p
                } : {
                    source: p,
                    target: w
                });
            s && l()
        }

        function l() {
            i.sort(function(n, t) {
                return s((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var i, u, f, r, e, o, s, t = {}, h = 0;
        return t.matrix = function(n) {
            return arguments.length ? (r = (f = n) && f.length, i = u = null, t) : f
        }, t.padding = function(n) {
            return arguments.length ? (h = n, i = u = null, t) : h
        }, t.sortGroups = function(n) {
            return arguments.length ? (e = n, i = u = null, t) : e
        }, t.sortSubgroups = function(n) {
            return arguments.length ? (o = n, i = null, t) : o
        }, t.sortChords = function(n) {
            return arguments.length ? (s = n, i && l(), t) : s
        }, t.chords = function() {
            return i || c(), i
        }, t.groups = function() {
            return u || c(), u
        }, t
    };
    n.layout.force = function() {
        function d(n) {
            return function(t, i, r, u) {
                var e;
                if (t.point !== n) {
                    var o = t.cx - n.x,
                        s = t.cy - n.y,
                        h = u - i,
                        f = o * o + s * s;
                    if (f > h * h / k) return w > f && (e = t.charge / f, n.px -= o * e, n.py -= s * e), !0;
                    t.point && f && w > f && (e = t.pointCharge / f, n.px -= o * e, n.py -= s * e)
                }
                return !t.charge
            }
        }

        function g(i) {
            i.px = n.event.x;
            i.py = n.event.y;
            t.resume()
        }
        var h, r, c, l, a, t = {}, y = n.dispatch("start", "tick", "end"),
            f = [1, 1],
            p = .9,
            o = iut,
            s = rut,
            e = -30,
            w = uut,
            b = .1,
            k = .64,
            i = [],
            u = [];
        return t.tick = function() {
            if ((r *= .99) < .005) return y.end({
                type: "end",
                alpha: r = 0
            }), !0;
            for (var tt, t, w, g, k, s, h, v, nt = i.length, it = u.length, o = 0; it > o; ++o) t = u[o], w = t.source, g = t.target, h = g.x - w.x, v = g.y - w.y, (k = h * h + v * v) && (k = r * l[o] * ((k = Math.sqrt(k)) - c[o]) / k, h *= k, v *= k, g.x -= h * (s = w.weight / (g.weight + w.weight)), g.y -= v * s, w.x += h * (s = 1 - s), w.y += v * s);
            if ((s = r * b) && (h = f[0] / 2, v = f[1] / 2, o = -1, s))
                for (; ++o < nt;) t = i[o], t.x += (h - t.x) * s, t.y += (v - t.y) * s;
            if (e)
                for (lp(tt = n.geom.quadtree(i), r, a), o = -1; ++o < nt;)(t = i[o]).fixed || tt.visit(d(t));
            for (o = -1; ++o < nt;) t = i[o], t.fixed ? (t.x = t.px, t.y = t.py) : (t.x -= (t.px - (t.px = t.x)) * p, t.y -= (t.py - (t.py = t.y)) * p);
            y.tick({
                type: "tick",
                alpha: r
            })
        }, t.nodes = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.links = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.size = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t.linkDistance = function(n) {
            return arguments.length ? (o = "function" == typeof n ? n : +n, t) : o
        }, t.distance = t.linkDistance, t.linkStrength = function(n) {
            return arguments.length ? (s = "function" == typeof n ? n : +n, t) : s
        }, t.friction = function(n) {
            return arguments.length ? (p = +n, t) : p
        }, t.charge = function(n) {
            return arguments.length ? (e = "function" == typeof n ? n : +n, t) : e
        }, t.chargeDistance = function(n) {
            return arguments.length ? (w = n * n, t) : Math.sqrt(w)
        }, t.gravity = function(n) {
            return arguments.length ? (b = +n, t) : b
        }, t.theta = function(n) {
            return arguments.length ? (k = n * n, t) : Math.sqrt(k)
        }, t.alpha = function(i) {
            return arguments.length ? (i = +i, r ? r = i > 0 ? i : 0 : i > 0 && (y.start({
                type: "start",
                alpha: r = i
            }), n.timer(t.tick)), t) : r
        }, t.start = function() {
            function p(t, i) {
                var f;
                if (!h) {
                    for (h = new Array(v), r = 0; v > r; ++r) h[r] = [];
                    for (r = 0; y > r; ++r) f = u[r], h[f.source.index].push(f.target), h[f.target.index].push(f.source)
                }
                for (var e, o = h[n], r = -1, s = o.length; ++r < s;)
                    if (!isNaN(e = o[r][t])) return e;
                return Math.random() * i
            }
            for (var h, r, v = i.length, y = u.length, w = f[0], b = f[1], n = 0; v > n; ++n)(r = i[n]).index = n, r.weight = 0;
            for (n = 0; y > n; ++n) r = u[n], "number" == typeof r.source && (r.source = i[r.source]), "number" == typeof r.target && (r.target = i[r.target]), ++r.source.weight, ++r.target.weight;
            for (n = 0; v > n; ++n) r = i[n], isNaN(r.x) && (r.x = p("x", w)), isNaN(r.y) && (r.y = p("y", b)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (c = [], "function" == typeof o)
                for (n = 0; y > n; ++n) c[n] = +o.call(this, u[n], n);
            else
                for (n = 0; y > n; ++n) c[n] = o; if (l = [], "function" == typeof s)
                for (n = 0; y > n; ++n) l[n] = +s.call(this, u[n], n);
            else
                for (n = 0; y > n; ++n) l[n] = s; if (a = [], "function" == typeof e)
                for (n = 0; v > n; ++n) a[n] = +e.call(this, i[n], n);
            else
                for (n = 0; v > n; ++n) a[n] = e;
            return t.resume()
        }, t.resume = function() {
            return t.alpha(.1)
        }, t.stop = function() {
            return t.alpha(0)
        }, t.drag = function() {
            return h || (h = n.behavior.drag().origin(v).on("dragstart.force", utt).on("drag.force", g).on("dragend.force", ftt)), arguments.length ? void this.on("mouseover.force", ett).on("mouseout.force", ott).call(h) : h
        }, n.rebind(t, y, "on")
    };
    var iut = 20,
        rut = 1,
        uut = 1 / 0;
    n.layout.hierarchy = function() {
        function n(u) {
            var f, h = [u],
                c = [],
                o, e, s;
            for (u.depth = 0; null != (f = h.pop());)
                if (c.push(f), (e = r.call(n, f, f.depth)) && (o = e.length)) {
                    for (; --o >= 0;) h.push(s = e[o]), s.parent = f, s.depth = f.depth + 1;
                    t && (f.value = 0);
                    f.children = e
                } else t && (f.value = +t.call(n, f, f.depth) || 0), delete f.children;
            return et(u, function(n) {
                var r, u;
                i && (r = n.children) && r.sort(i);
                t && (u = n.parent) && (u.value += n.value)
            }), c
        }
        var i = ctt,
            r = stt,
            t = htt;
        return n.sort = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.children = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.value = function(i) {
            return arguments.length ? (t = i, n) : t
        }, n.revalue = function(i) {
            return t && (tu(i, function(n) {
                n.children && (n.value = 0)
            }), et(i, function(i) {
                var r;
                i.children || (i.value = +t.call(n, i, i.depth) || 0);
                (r = i.parent) && (r.value += i.value)
            })), i
        }, n
    };
    n.layout.partition = function() {
        function r(n, t, i, u) {
            var f = n.children,
                o, s, h, e;
            if (n.x = t, n.y = n.depth * u, n.dx = i, n.dy = u, f && (o = f.length))
                for (e = -1, i = n.value ? i / n.value : 0; ++e < o;) r(s = f[e], t, h = s.value * i, u), t += h
        }

        function u(n) {
            var t = n.children,
                i = 0,
                f, r;
            if (t && (f = t.length))
                for (r = -1; ++r < f;) i = Math.max(i, u(t[r]));
            return 1 + i
        }

        function i(n, i) {
            var e = f.call(this, n, i);
            return r(e[0], 0, t[0], t[1] / u(e[0])), e
        }
        var f = n.layout.hierarchy(),
            t = [1, 1];
        return i.size = function(n) {
            return arguments.length ? (t = n, i) : t
        }, nu(i, f)
    };
    n.layout.pie = function() {
        function t(o) {
            var a, h = o.length,
                s = o.map(function(n, i) {
                    return +e.call(t, n, i)
                }),
                c = +("function" == typeof r ? r.apply(this, arguments) : r),
                l = ("function" == typeof u ? u.apply(this, arguments) : u) - c,
                v = Math.min(Math.abs(l) / h, +("function" == typeof f ? f.apply(this, arguments) : f)),
                y = v * (0 > l ? -1 : 1),
                b = (l - h * y) / n.sum(s),
                p = n.range(h),
                w = [];
            return null != i && p.sort(i === il ? function(n, t) {
                return s[t] - s[n]
            } : function(n, t) {
                return i(o[n], o[t])
            }), p.forEach(function(n) {
                w[n] = {
                    data: o[n],
                    value: a = s[n],
                    startAngle: c,
                    endAngle: c += a * b + y,
                    padAngle: v
                }
            }), w
        }
        var e = Number,
            i = il,
            r = 0,
            u = g,
            f = 0;
        return t.value = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.sort = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.startAngle = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.endAngle = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.padAngle = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    };
    il = {};
    n.layout.stack = function() {
        function t(s, h) {
            var p, v, c, w, b, k;
            if (!(p = s.length)) return s;
            var a = s.map(function(n, i) {
                return r.call(t, n, i)
            }),
                l = a.map(function(n) {
                    return n.map(function(n, i) {
                        return [e.call(t, n, i), o.call(t, n, i)]
                    })
                }),
                y = u.call(t, l, h);
            for (a = n.permute(a, y), l = n.permute(l, y), b = f.call(t, l, h), k = a[0].length, c = 0; k > c; ++c)
                for (i.call(t, a[0][c], w = b[c], l[0][c][1]), v = 1; p > v; ++v) i.call(t, a[v][c], w += l[v - 1][c][1], l[v][c][1]);
            return s
        }
        var r = v,
            u = nh,
            f = th,
            i = ytt,
            e = att,
            o = vtt;
        return t.values = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.order = function(n) {
            return arguments.length ? (u = "function" == typeof n ? n : vb.get(n) || nh, t) : u
        }, t.offset = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : yb.get(n) || th, t) : f
        }, t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.out = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t
    };
    vb = n.map({
        "inside-out": function(t) {
            for (var i, u = t.length, f = t.map(ptt), e = t.map(wtt), l = n.range(u).sort(function(n, t) {
                    return f[n] - f[t]
                }), o = 0, s = 0, h = [], c = [], r = 0; u > r; ++r) i = l[r], s > o ? (o += e[i], h.push(i)) : (s += e[i], c.push(i));
            return c.reverse().concat(h)
        },
        reverse: function(t) {
            return n.range(t.length).reverse()
        },
        "default": nh
    });
    yb = n.map({
        silhouette: function(n) {
            for (var r, i, s = n.length, f = n[0].length, e = [], u = 0, o = [], t = 0; f > t; ++t) {
                for (r = 0, i = 0; s > r; r++) i += n[r][t][1];
                i > u && (u = i);
                e.push(i)
            }
            for (t = 0; f > t; ++t) o[t] = (u - e[t]) / 2;
            return o
        },
        wiggle: function(n) {
            var i, t, r, u, h, c, f, e, o, a = n.length,
                l = n[0],
                v = l.length,
                s = [];
            for (s[0] = e = o = 0, t = 1; v > t; ++t) {
                for (i = 0, u = 0; a > i; ++i) u += n[i][t][1];
                for (i = 0, h = 0, f = l[t][0] - l[t - 1][0]; a > i; ++i) {
                    for (r = 0, c = (n[i][t][1] - n[i][t - 1][1]) / (2 * f); i > r; ++r) c += (n[r][t][1] - n[r][t - 1][1]) / f;
                    h += c * n[i][t][1]
                }
                s[t] = e -= u ? h / u * f : 0;
                o > e && (o = e)
            }
            for (t = 0; v > t; ++t) s[t] -= o;
            return s
        },
        expand: function(n) {
            for (var t, r, u = n.length, f = n[0].length, o = 1 / u, e = [], i = 0; f > i; ++i) {
                for (t = 0, r = 0; u > t; t++) r += n[t][i][1];
                if (r)
                    for (t = 0; u > t; t++) n[t][i][1] /= r;
                else
                    for (t = 0; u > t; t++) n[t][i][1] = o
            }
            for (i = 0; f > i; ++i) e[i] = 0;
            return e
        },
        zero: th
    });
    n.layout.histogram = function() {
        function t(t, e) {
            for (var o, s, l = [], h = t.map(r, this), a = u.call(this, h, e), c = f.call(this, a, h, e), e = -1, y = h.length, v = c.length - 1, p = i ? 1 : 1 / y; ++e < v;) o = l[e] = [], o.dx = c[e + 1] - (o.x = c[e]), o.y = 0;
            if (v > 0)
                for (e = -1; ++e < y;) s = h[e], s >= a[0] && s <= a[1] && (o = l[n.bisect(c, s, 1, v) - 1], o.y += p, o.push(t[e]));
            return l
        }
        var i = !0,
            r = Number,
            u = dtt,
            f = ktt;
        return t.value = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.range = function(n) {
            return arguments.length ? (u = o(n), t) : u
        }, t.bins = function(n) {
            return arguments.length ? (f = "number" == typeof n ? function(t) {
                return ap(t, n)
            } : o(n), t) : f
        }, t.frequency = function(n) {
            return arguments.length ? (i = !! n, t) : i
        }, t
    };
    n.layout.pack = function() {
        function i(n, i) {
            var c = f.call(this, n, i),
                e = c[0],
                o = u[0],
                s = u[1],
                l = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                    return t
                }, h;
            return (e.x = e.y = 0, et(e, function(n) {
                n.r = +l(n.value)
            }), et(e, pp), r) && (h = r * (t ? 1 : Math.max(2 * e.r / o, 2 * e.r / s)) / 2, et(e, function(n) {
                n.r += h
            }), et(e, pp), et(e, function(n) {
                n.r -= h
            })), wp(e, o / 2, s / 2, t ? 1 : 1 / Math.max(2 * e.r / o, 2 * e.r / s)), c
        }
        var t, f = n.layout.hierarchy().sort(gtt),
            r = 0,
            u = [1, 1];
        return i.size = function(n) {
            return arguments.length ? (u = n, i) : u
        }, i.radius = function(n) {
            return arguments.length ? (t = null == n || "function" == typeof n ? n : +n, i) : t
        }, i.padding = function(n) {
            return arguments.length ? (r = +n, i) : r
        }, nu(i, f)
    };
    n.layout.tree = function() {
        function i(n, i) {
            var p = e.call(this, n, i),
                c = p[0],
                v = o(c);
            if (et(v, s), v.parent.m = -v.z, tu(v, h), u) tu(c, f);
            else {
                var l = c,
                    a = c,
                    y = c;
                tu(c, function(n) {
                    n.x < l.x && (l = n);
                    n.x > a.x && (a = n);
                    n.depth > y.depth && (y = n)
                });
                var w = r(l, a) / 2 - l.x,
                    b = t[0] / (a.x + r(a, l) / 2 + w),
                    k = t[1] / (y.depth || 1);
                tu(c, function(n) {
                    n.x = (n.x + w) * b;
                    n.y = n.depth * k
                })
            }
            return p
        }

        function o(n) {
            for (var u, f = {
                    A: null,
                    children: [n]
                }, e = [f]; null != (u = e.pop());)
                for (var i, r = u.children, t = 0, o = r.length; o > t; ++t) e.push((r[t] = i = {
                    _: r[t],
                    parent: u,
                    children: (i = r[t].children) && i.slice() || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: t
                }).a = i);
            return f.children[0]
        }

        function s(n) {
            var i = n.children,
                f = n.parent.children,
                t = n.i ? f[n.i - 1] : null,
                u;
            i.length ? (rit(n), u = (i[0].z + i[i.length - 1].z) / 2, t ? (n.z = t.z + r(n._, t._), n.m = n.z - u) : n.z = u) : t && (n.z = t.z + r(n._, t._));
            n.parent.A = c(n, t, n.parent.A || f[0])
        }

        function h(n) {
            n._.x = n.z + n.parent.m;
            n.m += n.parent.m
        }

        function c(n, t, i) {
            if (t) {
                for (var s, u = n, e = n, f = t, o = u.parent.children[0], h = u.m, c = e.m, l = f.m, a = o.m; f = uh(f), u = rh(u), f && u;) o = rh(o), e = uh(e), e.a = n, s = f.z + l - u.z - h + r(f._, u._), s > 0 && (iit(uit(f, n, i), n, s), h += s, c += s), l += f.m, h += u.m, a += o.m, c += e.m;
                f && !uh(e) && (e.t = f, e.m += l - c);
                u && !rh(o) && (o.t = u, o.m += h - a, i = n)
            }
            return i
        }

        function f(n) {
            n.x *= t[0];
            n.y = n.depth * t[1]
        }
        var e = n.layout.hierarchy().sort(null).value(null),
            r = kp,
            t = [1, 1],
            u = null;
        return i.separation = function(n) {
            return arguments.length ? (r = n, i) : r
        }, i.size = function(n) {
            return arguments.length ? (u = null == (t = n) ? f : null, i) : u ? null : t
        }, i.nodeSize = function(n) {
            return arguments.length ? (u = null == (t = n) ? null : f, i) : u ? t : null
        }, nu(i, e)
    };
    n.layout.cluster = function() {
        function i(n, i) {
            var o, c = f.call(this, n, i),
                e = c[0],
                a = 0;
            et(e, function(n) {
                var t = n.children;
                t && t.length ? (n.x = eit(t), n.y = fit(t)) : (n.x = o ? a += r(n, o) : 0, n.y = 0, o = n)
            });
            var s = dp(e),
                h = gp(e),
                l = s.x - r(s, h) / 2,
                v = h.x + r(h, s) / 2;
            return et(e, u ? function(n) {
                n.x = (n.x - e.x) * t[0];
                n.y = (e.y - n.y) * t[1]
            } : function(n) {
                n.x = (n.x - l) / (v - l) * t[0];
                n.y = (1 - (e.y ? n.y / e.y : 1)) * t[1]
            }), c
        }
        var f = n.layout.hierarchy().sort(null).value(null),
            r = kp,
            t = [1, 1],
            u = !1;
        return i.separation = function(n) {
            return arguments.length ? (r = n, i) : r
        }, i.size = function(n) {
            return arguments.length ? (u = null == (t = n), i) : u ? null : t
        }, i.nodeSize = function(n) {
            return arguments.length ? (u = null != (t = n), i) : u ? t : null
        }, nu(i, f)
    };
    n.layout.treemap = function() {
        function o(n, t) {
            for (var r, i, u = -1, f = n.length; ++u < f;) i = (r = n[u]).value * (0 > t ? 0 : t), r.area = isNaN(i) || 0 >= i ? 0 : i
        }

        function a(n) {
            var u = n.children;
            if (u && u.length) {
                var l, v, y, r = c(n),
                    t = [],
                    f = u.slice(),
                    h = 1 / 0,
                    e = "slice" === i ? r.dx : "dice" === i ? r.dy : "slice-dice" === i ? 1 & n.depth ? r.dy : r.dx : Math.min(r.dx, r.dy);
                for (o(f, r.dx * r.dy / n.value), t.area = 0;
                    (y = f.length) > 0;) t.push(l = f[y - 1]), t.area += l.area, "squarify" !== i || (v = p(t, e)) <= h ? (f.pop(), h = v) : (t.area -= t.pop().area, s(t, e, r, !1), e = Math.min(r.dx, r.dy), t.length = t.area = 0, h = 1 / 0);
                t.length && (s(t, e, r, !0), t.length = t.area = 0);
                u.forEach(a)
            }
        }

        function v(n) {
            var u = n.children;
            if (u && u.length) {
                var i, r = c(n),
                    f = u.slice(),
                    t = [];
                for (o(f, r.dx * r.dy / n.value), t.area = 0; i = f.pop();) t.push(i), t.area += i.area, null != i.z && (s(t, i.z ? r.dx : r.dy, r, !f.length), t.length = t.area = 0);
                u.forEach(v)
            }
        }

        function p(n, t) {
            for (var i, r = n.area, u = 0, f = 1 / 0, o = -1, s = n.length; ++o < s;)(i = n[o].area) && (f > i && (f = i), i > u && (u = i));
            return r *= r, t *= t, r ? Math.max(t * u * e / r, r / (t * f * e)) : 1 / 0
        }

        function s(n, t, i, r) {
            var f, h = -1,
                c = n.length,
                o = i.x,
                s = i.y,
                e = t ? u(n.area / t) : 0;
            if (t == i.dx) {
                for ((r || e > i.dy) && (e = i.dy); ++h < c;) f = n[h], f.x = o, f.y = s, f.dy = e, o += f.dx = Math.min(i.x + i.dx - o, e ? u(f.area / e) : 0);
                f.z = !0;
                f.dx += i.x + i.dx - o;
                i.y += e;
                i.dy -= e
            } else {
                for ((r || e > i.dx) && (e = i.dx); ++h < c;) f = n[h], f.x = o, f.y = s, f.dx = e, s += f.dy = Math.min(i.y + i.dy - s, e ? u(f.area / e) : 0);
                f.z = !1;
                f.dy += i.y + i.dy - s;
                i.x += e;
                i.dx -= e
            }
        }

        function t(n) {
            var i = r || h(n),
                t = i[0];
            return t.x = 0, t.y = 0, t.dx = f[0], t.dy = f[1], r && h.revalue(t), o([t], t.dx * t.dy / t.value), (r ? v : a)(t), l && (r = i), i
        }
        var r, h = n.layout.hierarchy(),
            u = Math.round,
            f = [1, 1],
            y = null,
            c = fh,
            l = !1,
            i = "squarify",
            e = .5 * (1 + Math.sqrt(5));
        return t.size = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t.padding = function(n) {
            function u(i) {
                var r = n.call(t, i, i.depth);
                return null == r ? fh(i) : nw(i, "number" == typeof r ? [r, r, r, r] : r)
            }

            function i(t) {
                return nw(t, n)
            }
            if (!arguments.length) return y;
            var r;
            return c = null == (y = n) ? fh : "function" == (r = typeof n) ? u : "number" === r ? (n = [n, n, n, n], i) : i, t
        }, t.round = function(n) {
            return arguments.length ? (u = n ? Math.round : Number, t) : u != Number
        }, t.sticky = function(n) {
            return arguments.length ? (l = n, r = null, t) : l
        }, t.ratio = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.mode = function(n) {
            return arguments.length ? (i = n + "", t) : i
        }, nu(t, h)
    };
    n.random = {
        normal: function(n, t) {
            var i = arguments.length;
            return 2 > i && (t = 1), 1 > i && (n = 0),
            function() {
                var r, u, i;
                do r = 2 * Math.random() - 1, u = 2 * Math.random() - 1, i = r * r + u * u; while (!i || i > 1);
                return n + t * r * Math.sqrt(-2 * Math.log(i) / i)
            }
        },
        logNormal: function() {
            var t = n.random.normal.apply(n, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        bates: function(t) {
            var i = n.random.irwinHall(t);
            return function() {
                return i() / t
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, i = 0; n > i; i++) t += Math.random();
                return t
            }
        }
    };
    n.scale = {};
    pb = {
        floor: v,
        ceil: v
    };
    n.scale.linear = function() {
        return tw([0, 1], [0, 1], vi, !1)
    };
    wb = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    n.scale.log = function() {
        return rw(n.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    rl = n.format(".0e");
    bb = {
        floor: function(n) {
            return -Math.ceil(-n)
        },
        ceil: function(n) {
            return -Math.floor(-n)
        }
    };
    n.scale.pow = function() {
        return uw(n.scale.linear(), 1, [0, 1])
    };
    n.scale.sqrt = function() {
        return n.scale.pow().exponent(.5)
    };
    n.scale.ordinal = function() {
        return fw([], {
            t: "range",
            a: [
                []
            ]
        })
    };
    n.scale.category10 = function() {
        return n.scale.ordinal().range(fut)
    };
    n.scale.category20 = function() {
        return n.scale.ordinal().range(eut)
    };
    n.scale.category20b = function() {
        return n.scale.ordinal().range(out)
    };
    n.scale.category20c = function() {
        return n.scale.ordinal().range(sut)
    };
    var fut = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(pu),
        eut = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(pu),
        out = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(pu),
        sut = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(pu);
    n.scale.quantile = function() {
        return ew([], [])
    };
    n.scale.quantize = function() {
        return ow(0, 1, [0, 1])
    };
    n.scale.threshold = function() {
        return sw([.5], [0, 1])
    };
    n.scale.identity = function() {
        return hw([0, 1])
    };
    n.svg = {};
    n.svg.arc = function() {
        function n() {
            var n = Math.max(0, +t.apply(this, arguments)),
                o = Math.max(0, +i.apply(this, arguments)),
                g = u.apply(this, arguments) - h,
                nt = e.apply(this, arguments) - h,
                ei = Math.abs(nt - g),
                a = g > nt ? 0 : 1,
                wt, bt, kt, dt;
            if (n > o && (et = o, o = n, n = et), ei >= krt) return l(o, a) + (n ? l(n, 1 - a) : "") + "Z";
            var et, ot, yt, pt, v, y, p, rt, b, k, d, st, ht = 0,
                ut = 0,
                w = [];
            if (((pt = (+c.apply(this, arguments) || 0) / 2) && (yt = r === lu ? Math.sqrt(n * n + o * o) : +r.apply(this, arguments), a || (ut *= -1), o && (ut = gt(yt / o * Math.sin(pt))), n && (ht = gt(yt / n * Math.sin(pt)))), o) ? (v = o * Math.cos(g + ut), y = o * Math.sin(g + ut), p = o * Math.cos(nt - ut), rt = o * Math.sin(nt - ut), wt = Math.abs(nt - g - 2 * ut) <= f ? 0 : 1, ut && pf(v, y, p, rt) === a ^ wt && (bt = (g + nt) / 2, v = o * Math.cos(bt), y = o * Math.sin(bt), p = rt = null)) : v = y = 0, n ? (b = n * Math.cos(nt - ht), k = n * Math.sin(nt - ht), d = n * Math.cos(g + ht), st = n * Math.sin(g + ht), kt = Math.abs(g - nt + 2 * ht) <= f ? 0 : 1, ht && pf(b, k, d, st) === 1 - a ^ kt && (dt = (g + nt) / 2, b = n * Math.cos(dt), k = n * Math.sin(dt), d = st = null)) : b = k = 0, (et = Math.min(Math.abs(o - n) / 2, +s.apply(this, arguments))) > .001) {
                ot = o > n ^ a ? 0 : 1;
                var ft = null == d ? [b, k] : null == p ? [v, y] : ws([v, y], [d, st], [p, rt], [b, k]),
                    ni = v - ft[0],
                    ti = y - ft[1],
                    ii = p - ft[0],
                    ri = rt - ft[1],
                    ui = 1 / Math.sin(Math.acos((ni * ii + ti * ri) / (Math.sqrt(ni * ni + ti * ti) * Math.sqrt(ii * ii + ri * ri))) / 2),
                    fi = Math.sqrt(ft[0] * ft[0] + ft[1] * ft[1]);
                if (null != p) {
                    var tt = Math.min(et, (o - fi) / (ui + 1)),
                        ct = wf(null == d ? [b, k] : [d, st], [v, y], o, tt, a),
                        lt = wf([p, rt], [b, k], o, tt, a);
                    et === tt ? w.push("M", ct[0], "A", tt, ",", tt, " 0 0,", ot, " ", ct[1], "A", o, ",", o, " 0 ", 1 - a ^ pf(ct[1][0], ct[1][1], lt[1][0], lt[1][1]), ",", a, " ", lt[1], "A", tt, ",", tt, " 0 0,", ot, " ", lt[0]) : w.push("M", ct[0], "A", tt, ",", tt, " 0 1,", ot, " ", lt[0])
                } else w.push("M", v, ",", y); if (null != d) {
                    var it = Math.min(et, (n - fi) / (ui - 1)),
                        at = wf([v, y], [d, st], n, -it, a),
                        vt = wf([b, k], null == p ? [v, y] : [p, rt], n, -it, a);
                    et === it ? w.push("L", vt[0], "A", it, ",", it, " 0 0,", ot, " ", vt[1], "A", n, ",", n, " 0 ", a ^ pf(vt[1][0], vt[1][1], at[1][0], at[1][1]), ",", 1 - a, " ", at[1], "A", it, ",", it, " 0 0,", ot, " ", at[0]) : w.push("L", vt[0], "A", it, ",", it, " 0 0,", ot, " ", at[0])
                } else w.push("L", b, ",", k)
            } else w.push("M", v, ",", y), null != p && w.push("A", o, ",", o, " 0 ", wt, ",", a, " ", p, ",", rt), w.push("L", b, ",", k), null != d && w.push("A", n, ",", n, " 0 ", kt, ",", 1 - a, " ", d, ",", st);
            return w.push("Z"), w.join("")
        }

        function l(n, t) {
            return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n
        }
        var t = ait,
            i = vit,
            s = lit,
            r = lu,
            u = cw,
            e = lw,
            c = yit;
        return n.innerRadius = function(i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.outerRadius = function(t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.cornerRadius = function(t) {
            return arguments.length ? (s = o(t), n) : s
        }, n.padRadius = function(t) {
            return arguments.length ? (r = t == lu ? lu : o(t), n) : r
        }, n.startAngle = function(t) {
            return arguments.length ? (u = o(t), n) : u
        }, n.endAngle = function(t) {
            return arguments.length ? (e = o(t), n) : e
        }, n.padAngle = function(t) {
            return arguments.length ? (c = o(t), n) : c
        }, n.centroid = function() {
            var n = (+t.apply(this, arguments) + +i.apply(this, arguments)) / 2,
                r = (+u.apply(this, arguments) + +e.apply(this, arguments)) / 2 - h;
            return [Math.cos(r) * n, Math.sin(r) * n]
        }, n
    };
    lu = "auto";
    n.svg.line = function() {
        return aw(v)
    };
    to = n.map({
        linear: d,
        "linear-closed": pit,
        step: wit,
        "step-before": ch,
        "step-after": lh,
        basis: vw,
        "basis-open": git,
        "basis-closed": nrt,
        bundle: trt,
        cardinal: dit,
        "cardinal-open": bit,
        "cardinal-closed": kit,
        monotone: urt
    });
    to.forEach(function(n, t) {
        t.key = n;
        t.closed = /-closed$/.test(n)
    });
    var kb = [0, 2 / 3, 1 / 3, 0],
        db = [0, 1 / 3, 2 / 3, 0],
        oi = [0, 1 / 6, 2 / 3, 1 / 6];
    n.svg.line.radial = function() {
        var n = aw(yw);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    };
    ch.reverse = lh;
    lh.reverse = ch;
    n.svg.area = function() {
        return pw(v)
    };
    n.svg.area.radial = function() {
        var n = pw(yw);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    };
    n.svg.chord = function() {
        function n(n, u) {
            var f = c(this, i, n, u),
                e = c(this, r, n, u);
            return "M" + f.p0 + l(f.r, f.p1, f.a1 - f.a0) + (a(f, e) ? t(f.r, f.p1, f.r, f.p0) : t(f.r, f.p1, e.r, e.p0) + l(e.r, e.p1, e.a1 - e.a0) + t(e.r, e.p1, f.r, f.p0)) + "Z"
        }

        function c(n, t, i, r) {
            var o = t.call(n, i, r),
                f = u.call(n, o, r),
                c = e.call(n, o, r) - h,
                l = s.call(n, o, r) - h;
            return {
                r: f,
                a0: c,
                a1: l,
                p0: [f * Math.cos(c), f * Math.sin(c)],
                p1: [f * Math.cos(l), f * Math.sin(l)]
            }
        }

        function a(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function l(n, t, i) {
            return "A" + n + "," + n + " 0 " + +(i > f) + ",1 " + t
        }

        function t(n, t, i, r) {
            return "Q 0,0 " + r
        }
        var i = as,
            r = vs,
            u = frt,
            e = cw,
            s = lw;
        return n.radius = function(t) {
            return arguments.length ? (u = o(t), n) : u
        }, n.source = function(t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (r = o(t), n) : r
        }, n.startAngle = function(t) {
            return arguments.length ? (e = o(t), n) : e
        }, n.endAngle = function(t) {
            return arguments.length ? (s = o(t), n) : s
        }, n
    };
    n.svg.diagonal = function() {
        function n(n, u) {
            var e = t.call(this, n, u),
                o = i.call(this, n, u),
                s = (e.y + o.y) / 2,
                f = [e, {
                        x: e.x,
                        y: s
                    }, {
                        x: o.x,
                        y: s
                    },
                    o
                ];
            return f = f.map(r), "M" + f[0] + "C" + f[1] + " " + f[2] + " " + f[3]
        }
        var t = as,
            i = vs,
            r = ww;
        return n.source = function(i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.target = function(t) {
            return arguments.length ? (i = o(t), n) : i
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n
    };
    n.svg.diagonal.radial = function() {
        var t = n.svg.diagonal(),
            i = ww,
            r = t.projection;
        return t.projection = function(n) {
            return arguments.length ? r(ert(i = n)) : i
        }, t
    };
    n.svg.symbol = function() {
        function n(n, r) {
            return (ul.get(t.call(this, n, r)) || bw)(i.call(this, n, r))
        }
        var t = srt,
            i = ort;
        return n.type = function(i) {
            return arguments.length ? (t = o(i), n) : t
        }, n.size = function(t) {
            return arguments.length ? (i = o(t), n) : i
        }, n
    };
    ul = n.map({
        circle: bw,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * fl)),
                i = t * fl;
            return "M0," + -t + "L" + i + ",0 0," + t + " " + -i + ",0Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / au),
                i = t * au / 2;
            return "M0," + i + "L" + t + "," + -i + " " + -t + "," + -i + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / au),
                i = t * au / 2;
            return "M0," + -i + "L" + t + "," + i + " " + -t + "," + i + "Z"
        }
    });
    n.svg.symbolTypes = ul.keys();
    au = Math.sqrt(3);
    fl = Math.tan(30 * u);
    e.transition = function(n) {
        for (var r, t, u = gi || ++gb, f = wh(n), e = [], h = io || {
                time: Date.now(),
                ease: hn,
                delay: 0,
                duration: 250
            }, o = -1, c = this.length; ++o < c;) {
            e.push(r = []);
            for (var s = this[o], i = -1, l = s.length; ++i < l;)(t = s[i]) && kf(t, i, f, u, h), r.push(t)
        }
        return ru(e, f, u)
    };
    e.interrupt = function(n) {
        return this.each(null == n ? ro : kw(wh(n)))
    };
    var gi, io, ro = kw(wh()),
        a = [],
        gb = 0;
    a.call = e.call;
    a.empty = e.empty;
    a.node = e.node;
    a.size = e.size;
    n.transition = function(t, i) {
        return t && t.transition ? gi ? t.transition(i) : t : n.selection().transition(t)
    };
    n.transition.prototype = a;
    a.select = function(n) {
        var f, i, t, e = this.id,
            o = this.namespace,
            s = [],
            r, h;
        for (n = co(n), r = -1, h = this.length; ++r < h;) {
            s.push(f = []);
            for (var c = this[r], u = -1, l = c.length; ++u < l;)(t = c[u]) && (i = n.call(t, t.__data__, u, r)) ? ("__data__" in t && (i.__data__ = t.__data__), kf(i, u, o, e, t[o][e]), f.push(i)) : f.push(null)
        }
        return ru(s, o, e)
    };
    a.selectAll = function(n) {
        var h, u, t, f, c, e = this.id,
            o = this.namespace,
            l = [],
            i, a, r, y;
        for (n = gl(n), i = -1, a = this.length; ++i < a;)
            for (var v = this[i], s = -1, p = v.length; ++s < p;)
                if (t = v[s])
                    for (c = t[o][e], u = n.call(t, t.__data__, s, i), l.push(h = []), r = -1, y = u.length; ++r < y;)(f = u[r]) && kf(f, r, o, e, c), h.push(f);
        return ru(l, o, e)
    };
    a.filter = function(n) {
        var u, f, i, e = [],
            t, o;
        for ("function" != typeof n && (n = sa(n)), t = 0, o = this.length; o > t; t++) {
            e.push(u = []);
            for (var f = this[t], r = 0, s = f.length; s > r; r++)(i = f[r]) && n.call(i, i.__data__, r, t) && u.push(i)
        }
        return ru(e, this.namespace, this.id)
    };
    a.tween = function(n, t) {
        var i = this.id,
            r = this.namespace;
        return arguments.length < 2 ? this.node()[r][i].tween.get(n) : at(this, null == t ? function(t) {
            t[r][i].tween.remove(n)
        } : function(u) {
            u[r][i].tween.set(n, t)
        })
    };
    a.attr = function(t, i) {
        function f() {
            this.removeAttribute(r)
        }

        function e() {
            this.removeAttributeNS(r.space, r.local)
        }

        function o(n) {
            return null == n ? f : (n += "", function() {
                var t, i = this.getAttribute(r);
                return i !== n && (t = u(i, n), function(n) {
                    this.setAttribute(r, t(n))
                })
            })
        }

        function s(n) {
            return null == n ? e : (n += "", function() {
                var t, i = this.getAttributeNS(r.space, r.local);
                return i !== n && (t = u(i, n), function(n) {
                    this.setAttributeNS(r.space, r.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (i in t) this.attr(i, t[i]);
            return this
        }
        var u = "transform" == t ? hp : vi,
            r = n.ns.qualify(t);
        return ph(this, "attr." + t, i, r.local ? s : o)
    };
    a.attrTween = function(t, i) {
        function u(n, t) {
            var u = i.call(this, n, t, this.getAttribute(r));
            return u && function(n) {
                this.setAttribute(r, u(n))
            }
        }

        function f(n, t) {
            var u = i.call(this, n, t, this.getAttributeNS(r.space, r.local));
            return u && function(n) {
                this.setAttributeNS(r.space, r.local, u(n))
            }
        }
        var r = n.ns.qualify(t);
        return this.tween("attr." + t, r.local ? f : u)
    };
    a.style = function(n, t, i) {
        function u() {
            this.style.removeProperty(n)
        }

        function f(t) {
            return null == t ? u : (t += "", function() {
                var r, u = bt(this).getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = vi(u, t), function(t) {
                    this.style.setProperty(n, r(t), i)
                })
            })
        }
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (i in n) this.style(i, n[i], t);
                return this
            }
            i = ""
        }
        return ph(this, "style." + n, t, f)
    };
    a.styleTween = function(n, t, i) {
        function r(r, u) {
            var f = t.call(this, r, u, bt(this).getComputedStyle(this, null).getPropertyValue(n));
            return f && function(t) {
                this.style.setProperty(n, f(t), i)
            }
        }
        return arguments.length < 3 && (i = ""), this.tween("style." + n, r)
    };
    a.text = function(n) {
        return ph(this, "text", n, hrt)
    };
    a.remove = function() {
        var n = this.namespace;
        return this.each("end.transition", function() {
            var t;
            this[n].count < 2 && (t = this.parentNode) && t.removeChild(this)
        })
    };
    a.ease = function(t) {
        var i = this.id,
            r = this.namespace;
        return arguments.length < 1 ? this.node()[r][i].ease : ("function" != typeof t && (t = n.ease.apply(n, arguments)), at(this, function(n) {
            n[r][i].ease = t
        }))
    };
    a.delay = function(n) {
        var t = this.id,
            i = this.namespace;
        return arguments.length < 1 ? this.node()[i][t].delay : at(this, "function" == typeof n ? function(r, u, f) {
            r[i][t].delay = +n.call(r, r.__data__, u, f)
        } : (n = +n, function(r) {
            r[i][t].delay = n
        }))
    };
    a.duration = function(n) {
        var t = this.id,
            i = this.namespace;
        return arguments.length < 1 ? this.node()[i][t].duration : at(this, "function" == typeof n ? function(r, u, f) {
            r[i][t].duration = Math.max(1, n.call(r, r.__data__, u, f))
        } : (n = Math.max(1, n), function(r) {
            r[i][t].duration = n
        }))
    };
    a.each = function(t, i) {
        var r = this.id,
            u = this.namespace,
            f, e;
        if (arguments.length < 2) {
            f = io;
            e = gi;
            try {
                gi = r;
                at(this, function(n, i, f) {
                    io = n[u][r];
                    t.call(n, n.__data__, i, f)
                })
            } finally {
                io = f;
                gi = e
            }
        } else at(this, function(f) {
            var e = f[u][r];
            (e.event || (e.event = n.dispatch("start", "end", "interrupt"))).on(t, i)
        });
        return this
    };
    a.transition = function() {
        for (var f, e, t, n, h = this.id, o = ++gb, r = this.namespace, s = [], u = 0, c = this.length; c > u; u++) {
            s.push(f = []);
            for (var e = this[u], i = 0, l = e.length; l > i; i++)(t = e[i]) && (n = t[r][h], kf(t, i, r, o, {
                time: n.time,
                ease: n.ease,
                delay: n.delay + n.duration,
                duration: n.duration
            })), f.push(t)
        }
        return ru(s, r, o)
    };
    n.svg.axis = function() {
        function i(i) {
            i.each(function() {
                var a, rt = n.select(this),
                    y = this.__chart__ || o,
                    i = this.__chart__ = o.copy(),
                    ht = null == h ? i.ticks ? i.ticks.apply(i, s) : i.domain() : h,
                    ct = null == e ? i.tickFormat ? i.tickFormat.apply(i, s) : v : e,
                    w = rt.selectAll(".tick").data(ht, i),
                    p = w.enter().insert("g", ".domain").attr("class", "tick").style("opacity", t),
                    lt = n.transition(w.exit()).style("opacity", t).remove(),
                    g = n.transition(w.order()).style("opacity", 1),
                    ut = Math.max(r, 0) + c,
                    b = af(i),
                    ft = rt.selectAll(".domain").data([0]),
                    et = (ft.enter().append("path").attr("class", "domain"), n.transition(ft)),
                    it, st;
                p.append("line");
                p.append("text");
                var nt, tt, k, d, at = p.select("line"),
                    vt = g.select("line"),
                    ot = w.select("text").text(ct),
                    yt = p.select("text"),
                    pt = g.select("text"),
                    l = "top" === f || "left" === f ? -1 : 1;
                ("bottom" === f || "top" === f ? (a = crt, nt = "x", k = "y", tt = "x2", d = "y2", ot.attr("dy", 0 > l ? "0em" : ".71em").style("text-anchor", "middle"), et.attr("d", "M" + b[0] + "," + l * u + "V0H" + b[1] + "V" + l * u)) : (a = lrt, nt = "y", k = "x", tt = "y2", d = "x2", ot.attr("dy", ".32em").style("text-anchor", 0 > l ? "end" : "start"), et.attr("d", "M" + l * u + "," + b[0] + "H0V" + b[1] + "H" + l * u)), at.attr(d, l * r), yt.attr(k, l * ut), vt.attr(tt, 0).attr(d, l * r), pt.attr(nt, 0).attr(k, l * ut), i.rangeBand) ? (it = i, st = it.rangeBand() / 2, y = i = function(n) {
                        return it(n) + st
                    }) : y.rangeBand ? y = i : lt.call(a, i, y);
                p.call(a, y, i);
                g.call(a, i, i)
            })
        }
        var e, o = n.scale.linear(),
            f = el,
            r = 6,
            u = 6,
            c = 3,
            s = [10],
            h = null;
        return i.scale = function(n) {
            return arguments.length ? (o = n, i) : o
        }, i.orient = function(n) {
            return arguments.length ? (f = n in nk ? n + "" : el, i) : f
        }, i.ticks = function() {
            return arguments.length ? (s = arguments, i) : s
        }, i.tickValues = function(n) {
            return arguments.length ? (h = n, i) : h
        }, i.tickFormat = function(n) {
            return arguments.length ? (e = n, i) : e
        }, i.tickSize = function(n) {
            var t = arguments.length;
            return t ? (r = +n, u = +arguments[t - 1], i) : r
        }, i.innerTickSize = function(n) {
            return arguments.length ? (r = +n, i) : r
        }, i.outerTickSize = function(n) {
            return arguments.length ? (u = +n, i) : u
        }, i.tickPadding = function(n) {
            return arguments.length ? (c = +n, i) : c
        }, i.tickSubdivide = function() {
            return arguments.length && i
        }, i
    };
    el = "bottom";
    nk = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    n.svg.brush = function() {
        function f(t) {
            t.each(function() {
                var i = n.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", w).on("touchstart.brush", w),
                    h = i.selectAll(".background").data([0]),
                    e, t, o, s;
                h.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                e = i.selectAll(".resize").data(l, v);
                e.exit().remove();
                e.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return hut[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                e.style("display", f.empty() ? "none" : null);
                o = n.transition(i);
                s = n.transition(h);
                r && (t = af(r), s.attr("x", t[0]).attr("width", t[1] - t[0]), y(o));
                u && (t = af(u), s.attr("y", t[0]).attr("height", t[1] - t[0]), p(o));
                a(o)
            })
        }

        function a(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + t[+/e$/.test(n)] + "," + i[+/^s/.test(n)] + ")"
            })
        }

        function y(n) {
            n.select(".extent").attr("x", t[0]);
            n.selectAll(".extent,.n>rect,.s>rect").attr("width", t[1] - t[0])
        }

        function p(n) {
            n.select(".extent").attr("y", i[0]);
            n.selectAll(".extent,.e>rect,.w>rect").attr("height", i[1] - i[0])
        }

        function w() {
            function st() {
                32 == n.event.keyCode && (w || (v = null, l[0] -= t[1], l[1] -= i[1], w = 2), kt())
            }

            function ht() {
                32 == n.event.keyCode && 2 == w && (l[0] += t[1], l[1] += i[1], w = 0, kt())
            }

            function g() {
                var f = n.mouse(b),
                    e = !1;
                nt && (f[0] += nt[0], f[1] += nt[1]);
                w || (n.event.altKey ? (v || (v = [(t[0] + t[1]) / 2, (i[0] + i[1]) / 2]), l[0] = t[+(f[0] < v[0])], l[1] = i[+(f[1] < v[1])]) : v = null);
                ct && et(f, r, 0) && (y(k), e = !0);
                lt && et(f, u, 1) && (p(k), e = !0);
                e && (a(k), it({
                    type: "brush",
                    mode: w ? "move" : "resize"
                }))
            }

            function et(n, r, u) {
                var f, y, k = af(r),
                    p = k[0],
                    b = k[1],
                    c = l[u],
                    a = u ? i : t,
                    d = a[1] - a[0];
                return w && (p -= c, b -= d + c), f = (u ? h : s) ? Math.max(p, Math.min(b, n[u])) : n[u], w ? y = (f += c) + d : (v && (c = Math.max(p, Math.min(b, 2 * v[u] - f))), f > c ? (y = f, f = c) : y = c), a[0] != f || a[1] != y ? (u ? o = null : e = null, a[0] = f, a[1] = y, !0) : void 0
            }

            function ot() {
                g();
                k.style("pointer-events", "all").selectAll(".resize").style("display", f.empty() ? "none" : null);
                n.select("body").style("cursor", null);
                rt.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
                at();
                it({
                    type: "brushend"
                })
            }
            var v, nt, b = this,
                tt = n.select(n.event.target),
                it = c.of(b, arguments),
                k = n.select(b),
                d = tt.datum(),
                ct = !/^(n|s)$/.test(d) && r,
                lt = !/^(e|w)$/.test(d) && u,
                w = tt.classed("extent"),
                at = yu(b),
                l = n.mouse(b),
                rt = n.select(bt(b)).on("keydown.brush", st).on("keyup.brush", ht),
                ut, ft;
            (n.event.changedTouches ? rt.on("touchmove.brush", g).on("touchend.brush", ot) : rt.on("mousemove.brush", g).on("mouseup.brush", ot), k.interrupt().selectAll("*").interrupt(), w) ? (l[0] = t[0] - l[0], l[1] = i[0] - l[1]) : d ? (ut = +/w$/.test(d), ft = +/^n/.test(d), nt = [t[1 - ut] - l[0], i[1 - ft] - l[1]], l[0] = t[ut], l[1] = i[ft]) : n.event.altKey && (v = l.slice());
            k.style("pointer-events", "none").selectAll(".resize").style("display", null);
            n.select("body").style("cursor", tt.style("cursor"));
            it({
                type: "brushstart"
            });
            g()
        }
        var e, o, c = ho(f, "brushstart", "brush", "brushend"),
            r = null,
            u = null,
            t = [0, 0],
            i = [0, 0],
            s = !0,
            h = !0,
            l = ol[0];
        return f.event = function(r) {
            r.each(function() {
                var u = c.of(this, arguments),
                    r = {
                        x: t,
                        y: i,
                        i: e,
                        j: o
                    }, f = this.__chart__ || r;
                this.__chart__ = r;
                gi ? n.select(this).transition().each("start.brush", function() {
                    e = f.i;
                    o = f.j;
                    t = f.x;
                    i = f.y;
                    u({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var n = lf(t, r.x),
                        f = lf(i, r.y);
                    return e = o = null,
                    function(e) {
                        t = r.x = n(e);
                        i = r.y = f(e);
                        u({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }).each("end.brush", function() {
                    e = r.i;
                    o = r.j;
                    u({
                        type: "brush",
                        mode: "resize"
                    });
                    u({
                        type: "brushend"
                    })
                }) : (u({
                    type: "brushstart"
                }), u({
                    type: "brush",
                    mode: "resize"
                }), u({
                    type: "brushend"
                }))
            })
        }, f.x = function(n) {
            return arguments.length ? (r = n, l = ol[!r << 1 | !u], f) : r
        }, f.y = function(n) {
            return arguments.length ? (u = n, l = ol[!r << 1 | !u], f) : u
        }, f.clamp = function(n) {
            return arguments.length ? (r && u ? (s = !! n[0], h = !! n[1]) : r ? s = !! n : u && (h = !! n), f) : r && u ? [s, h] : r ? s : u ? h : null
        }, f.extent = function(n) {
            var s, h, c, l, a;
            return arguments.length ? (r && (s = n[0], h = n[1], u && (s = s[0], h = h[0]), e = [s, h], r.invert && (s = r(s), h = r(h)), s > h && (a = s, s = h, h = a), (s != t[0] || h != t[1]) && (t = [s, h])), u && (c = n[0], l = n[1], r && (c = c[1], l = l[1]), o = [c, l], u.invert && (c = u(c), l = u(l)), c > l && (a = c, c = l, l = a), (c != i[0] || l != i[1]) && (i = [c, l])), f) : (r && (e ? (s = e[0], h = e[1]) : (s = t[0], h = t[1], r.invert && (s = r.invert(s), h = r.invert(h)), s > h && (a = s, s = h, h = a))), u && (o ? (c = o[0], l = o[1]) : (c = i[0], l = i[1], u.invert && (c = u.invert(c), l = u.invert(l)), c > l && (a = c, c = l, l = a))), r && u ? [
                [s, c],
                [h, l]
            ] : r ? [s, h] : u && [c, l])
        }, f.clear = function() {
            return f.empty() || (t = [0, 0], i = [0, 0], e = o = null), f
        }, f.empty = function() {
            return !!r && t[0] == t[1] || !! u && i[0] == i[1]
        }, n.rebind(f, c, "on")
    };
    var hut = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, ol = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        sl = i.format = hc.timeFormat,
        tk = sl.utc,
        ik = tk("%Y-%m-%dT%H:%M:%S.%LZ");
    sl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? bh : ik;
    bh.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    };
    bh.toString = ik.toString;
    i.second = ci(function(n) {
        return new y(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    });
    i.seconds = i.second.range;
    i.seconds.utc = i.second.utc.range;
    i.minute = ci(function(n) {
        return new y(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    });
    i.minutes = i.minute.range;
    i.minutes.utc = i.minute.utc.range;
    i.hour = ci(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new y(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    });
    i.hours = i.hour.range;
    i.hours.utc = i.hour.utc.range;
    i.month = ci(function(n) {
        return n = i.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    });
    i.months = i.month.range;
    i.months.utc = i.month.utc.range;
    var uo = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        hl = [
            [i.second, 1],
            [i.second, 5],
            [i.second, 15],
            [i.second, 30],
            [i.minute, 1],
            [i.minute, 5],
            [i.minute, 15],
            [i.minute, 30],
            [i.hour, 1],
            [i.hour, 3],
            [i.hour, 6],
            [i.hour, 12],
            [i.day, 1],
            [i.day, 2],
            [i.week, 1],
            [i.month, 1],
            [i.month, 3],
            [i.year, 1]
        ],
        cut = sl.multi([
            [".%L",
                function(n) {
                    return n.getMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getDay() && 1 != n.getDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getMonth()
                }
            ],
            ["%Y", rr]
        ]),
        lut = {
            range: function(t, i, r) {
                return n.range(Math.ceil(t / r) * r, +i, r).map(yi)
            },
            floor: v,
            ceil: v
        };
    hl.year = i.year;
    i.scale = function() {
        return kh(n.scale.linear(), hl, cut)
    };
    cl = hl.map(function(n) {
        return [n[0].utc, n[1]]
    });
    rk = tk.multi([
        [".%L",
            function(n) {
                return n.getUTCMilliseconds()
            }
        ],
        [":%S",
            function(n) {
                return n.getUTCSeconds()
            }
        ],
        ["%I:%M",
            function(n) {
                return n.getUTCMinutes()
            }
        ],
        ["%I %p",
            function(n) {
                return n.getUTCHours()
            }
        ],
        ["%a %d",
            function(n) {
                return n.getUTCDay() && 1 != n.getUTCDate()
            }
        ],
        ["%b %d",
            function(n) {
                return 1 != n.getUTCDate()
            }
        ],
        ["%B",
            function(n) {
                return n.getUTCMonth()
            }
        ],
        ["%Y", rr]
    ]);
    cl.year = i.year.utc;
    i.scale.utc = function() {
        return kh(n.scale.linear(), cl, rk)
    };
    n.text = ts(function(n) {
        return n.responseText
    });
    n.json = function(n, t) {
        return wu(n, "application/json", art, t)
    };
    n.html = function(n, t) {
        return wu(n, "text/html", vrt, t)
    };
    n.xml = ts(function(n) {
        return n.responseXML
    });
    "function" == typeof define && define.amd ? define(n) : "object" == typeof module && module.exports && (module.exports = n);
    this.d3 = n
}(),
function() {
    var r = window.armsBarChart || {}, s = function(n) {
            return n.sort(function(n, t) {
                return n.year < t.year ? -1 : n.year > t.year ? 1 : 0
            })
        }, n, t, i, f, e, u, o = function() {
            n = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            };
            width = 600 - n.left - n.right;
            height = 550 - n.top - n.bottom;
            t = d3.scale.ordinal().rangeRoundBands([0, width], .3);
            i = d3.scale.linear().range([height, 0]);
            e = d3.svg.axis().scale(t).orient("bottom");
            f = d3.svg.axis().scale(i).orient("left").ticks(10);
            u = d3.select("#armsBarChart").append("svg").attr("width", width + n.left + n.right).attr("height", height + n.top + n.bottom).append("g").attr("transform", "translate(" + n.left + "," + n.top + ")")
        };
    o();
    r.clearGraphic = function() {
        $("#armsBarChart").html("");
        o()
    };
    r.buildBarChart = function(n) {
        var c, h, o;
        for (r.clearGraphic(), $("#useCaseBarChartArmsLoad").css("display", "block"), o = 0; o < n.length; o++) n[o].ContainerName == "StateUseCase" && (c = n[o].Data[0].Id), n[o].ContainerName == "CommodityUseCase" && (h = n[o].Data[0].Name, h = h.substring(0, 1).toLocaleUpperCase() + h.substring(1).toLowerCase());
        $.ajax({
            url: helper.armsApiUrl + "subjects?survey=CROP",
            success: function(n) {
                for (var o = n.data, l, a = 0, r = 0; r < o.length; r++)
                    if (o[r].subject == h) {
                        l = o[r].subject_num;
                        a = 1;
                        break
                    }
                a == 1 ? $.ajax({
                    url: helper.armsApiUrl + "Crop?subject=" + l + "&fipsStateCode=" + ("0" + c).slice(-2) + "&size=100&start=1",
                    success: function(n) {
                        var h = n.data,
                            r, o;
                        if (h) {
                            for ($(".chart-noData").css("display", "none"), r = [], o = 0; o < h.length; o++) r.push({
                                year: +h[o].stat_year,
                                estimate: +h[o].estimate
                            });
                            r = s(r);
                            t.domain(r.map(function(n) {
                                return n.year
                            }));
                            i.domain([0, d3.max(r, function(n) {
                                return +n.estimate
                            })]);
                            u.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(e);
                            u.append("g").attr("class", "y axis").call(f).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("Estimate, %");
                            u.selectAll(".bar").data(r).enter().append("rect").attr("class", "bar").attr("x", function(n) {
                                return t(n.year)
                            }).attr("width", t.rangeBand()).attr("y", function(n) {
                                return i(n.estimate)
                            }).attr("height", function(n) {
                                return height - i(n.estimate)
                            })
                        } else $(".chart-noData").css("display", "block");
                        $("#useCaseBarChartArmsLoad").css("display", "none")
                    }
                }) : $("#useCaseBarChartArmsLoad").css("display", "none")
            }
        })
    };
    window.armsBarChart = r
}(),
function() {
    function ut() {
        var n = {}, t = [];
        return n.data = function(i) {
            return arguments.length ? (t = i.slice(), n) : t
        }, n.mb = function() {
            var u, e, n = t.length,
                f;
            if (n === 1) u = 0, e = t[0][1];
            else {
                var i = 0,
                    o = 0,
                    c = 0,
                    l = 0,
                    s, r, h;
                for (f = 0; f < n; f++) s = t[f], r = s[0], h = s[1], i += r, o += h, c += r * r, l += r * h;
                u = (n * l - i * o) / (n * c - i * i);
                e = o / n - u * i / n
            }
            return {
                m: u,
                b: e
            }
        }, n.m = function() {
            return n.mb().m
        }, n.b = function() {
            return n.mb().b
        }, n.line = function() {
            var t = n.mb(),
                i = t.m,
                r = t.b;
            return function(n) {
                return r + i * n
            }
        }, n
    }

    function ft(n, t) {
        var f, s, r, e, u, o, i;
        if (n.length < 2) return 1;
        for (f = 0, r = 0; r < n.length; r++) f += n[r][1];
        for (s = f / n.length, e = 0, u = 0; u < n.length; u++) e += Math.pow(s - n[u][1], 2);
        for (o = 0, i = 0; i < n.length; i++) o += Math.pow(n[i][1] - t(n[i][0]), 2);
        return 1 - o / e
    }

    function et() {
        var t = {}, i = 0,
            n = {};
        return t.train = function(t, r) {
            var u, f;
            n[r] || (n[r] = {});
            for (u in t) f = t[u], n[r][u] === undefined && (n[r][u] = {}), n[r][u][f] === undefined && (n[r][u][f] = 0), n[r][u][t[u]]++;
            i++
        }, t.score = function(t) {
            var u = {}, r, f, o, e, s;
            for (f in t) {
                o = t[f];
                for (r in n) u[r] === undefined && (u[r] = {}), u[r][f + "_" + o] = n[r][f] ? (n[r][f][o] || 0) / i : 0
            }
            e = {};
            for (r in u)
                for (s in u[r]) e[r] === undefined && (e[r] = 0), e[r] += u[r][s];
            return e
        }, t
    }

    function c(n) {
        for (var i = 0, t = 0; t < n.length; t++) i += n[t];
        return i
    }

    function t(n) {
        return n.length === 0 ? null : c(n) / n.length
    }

    function ot(n) {
        var i, t;
        if (n.length === 0) return null;
        for (i = 1, t = 0; t < n.length; t++) {
            if (n[t] <= 0) return null;
            i *= n[t]
        }
        return Math.pow(i, 1 / n.length)
    }

    function st(n) {
        var i, t;
        if (n.length === 0) return null;
        for (i = 0, t = 0; t < n.length; t++) {
            if (n[t] <= 0) return null;
            i += 1 / n[t]
        }
        return n.length / i
    }

    function l(n) {
        var i, t;
        if (n.length === 0) return null;
        for (i = 0, t = 0; t < n.length; t++) i += Math.pow(n[t], 2);
        return Math.sqrt(i / n.length)
    }

    function ht(n) {
        for (var t, i = 0; i < n.length; i++)(n[i] < t || t === undefined) && (t = n[i]);
        return t
    }

    function ct(n) {
        for (var t, i = 0; i < n.length; i++)(n[i] > t || t === undefined) && (t = n[i]);
        return t
    }

    function a(n) {
        var u, r, i;
        if (n.length === 0) return null;
        for (u = t(n), r = [], i = 0; i < n.length; i++) r.push(Math.pow(n[i] - u, 2));
        return t(r)
    }

    function v(n) {
        return n.length === 0 ? null : Math.sqrt(a(n))
    }

    function y(n, i) {
        for (var f = t(n), u = 0, r = 0; r < n.length; r++) u += Math.pow(n[r] - f, i);
        return u
    }

    function u(n) {
        if (n.length <= 1) return null;
        var t = y(n, 2);
        return t / (n.length - 1)
    }

    function f(n) {
        return n.length <= 1 ? null : Math.sqrt(u(n))
    }

    function p(n, i) {
        var r;
        if (n.length <= 1 || n.length !== i.length) return null;
        var f = t(n),
            e = t(i),
            u = 0;
        for (r = 0; r < n.length; r++) u += (n[r] - f) * (i[r] - e);
        return u / (n.length - 1)
    }

    function lt(n, t) {
        var i = p(n, t),
            r = f(n),
            u = f(t);
        return i === null || r === null || u === null ? null : i / r / u
    }

    function o(n) {
        var t, i, r;
        return n.length === 0 ? null : (t = n.slice().sort(function(n, t) {
            return n - t
        }), t.length % 2 == 1 ? t[(t.length - 1) / 2] : (i = t[t.length / 2 - 1], r = t[t.length / 2], (i + r) / 2))
    }

    function at(n) {
        var t;
        if (n.length === 0) return null;
        if (n.length === 1) return n[0];
        var i = n.slice().sort(function(n, t) {
            return n - t
        }),
            u = i[0],
            f, e = 0,
            r = 1;
        for (t = 1; t < i.length + 1; t++) i[t] !== u ? (r > e && (e = r, f = u), r = 1, u = i[t]) : r++;
        return f
    }

    function vt(n, i) {
        var r = t(n),
            u = v(n),
            f = Math.sqrt(n.length);
        return (r - i) / (u / f)
    }

    function yt(n, i, r) {
        var f = n.length,
            e = i.length;
        if (!f || !e) return null;
        r || (r = 0);
        var o = t(n),
            s = t(i),
            h = ((f - 1) * u(n) + (e - 1) * u(i)) / (f + e - 2);
        return (o - s - r) / Math.sqrt(h * (1 / f + 1 / e))
    }

    function pt(n, t) {
        var r = [],
            i;
        if (t <= 0) return null;
        for (i = 0; i < n.length; i += t) r.push(n.slice(i, i + t));
        return r
    }

    function w(n, t) {
        t = t || Math.random;
        for (var i = n.length, u, r; i > 0;) r = Math.floor(t() * i--), u = n[i], n[i] = n[r], n[r] = u;
        return n
    }

    function b(n, t) {
        return n = n.slice(), w(n.slice(), t)
    }

    function wt(n, t, i) {
        var r = b(n, i);
        return r.slice(0, t)
    }

    function s(n, t) {
        var i = n.length * t;
        return t < 0 || t > 1 ? null : t === 1 ? n[n.length - 1] : t === 0 ? n[0] : i % 1 != 0 ? n[Math.ceil(i) - 1] : n.length % 2 == 0 ? (n[i - 1] + n[i]) / 2 : n[i]
    }

    function h(n, t) {
        var r, u, i;
        if (n.length === 0) return null;
        if (r = n.slice().sort(function(n, t) {
            return n - t
        }), t.length) {
            for (u = [], i = 0; i < t.length; i++) u[i] = s(r, t[i]);
            return u
        }
        return s(r, t)
    }

    function k(n) {
        return n.length === 0 ? null : h(n, .75) - h(n, .25)
    }

    function d(n) {
        var r, i, t;
        if (!n || n.length === 0) return null;
        for (r = o(n), i = [], t = 0; t < n.length; t++) i.push(Math.abs(n[t] - r));
        return o(i)
    }

    function g(n, t) {
        for (var e = [], u = [], i, o = 0, a, v, r, h, c, l, f = 0; f < n.length + 1; f++) {
            for (a = [], v = [], i = 0; i < t + 1; i++) a.push(0), v.push(0);
            e.push(a);
            u.push(v)
        }
        for (f = 1; f < t + 1; f++)
            for (e[1][f] = 1, u[1][f] = 0, i = 2; i < n.length + 1; i++) u[i][f] = Infinity;
        for (r = 2; r < n.length + 1; r++) {
            var y = 0,
                p = 0,
                w = 0,
                s = 0;
            for (h = 1; h < r + 1; h++)
                if (c = r - h + 1, l = n[c - 1], w++, y += l, p += l * l, o = p - y * y / w, s = c - 1, s !== 0)
                    for (i = 2; i < t + 1; i++) u[r][i] >= o + u[s][i - 1] && (e[r][i] = c, u[r][i] = o + u[s][i - 1]);
            e[r][1] = 1;
            u[r][1] = o
        }
        return {
            lower_class_limits: e,
            variance_combinations: u
        }
    }

    function nt(n, t, i) {
        var u = n.length,
            f = [],
            r = i;
        for (f[i] = n[n.length - 1]; r > 0;) f[r - 1] = n[t[u][r] - 1], u = t[u][r] - 1, r--;
        return f
    }

    function bt(n, t) {
        if (t > n.length) return null;
        n = n.slice().sort(function(n, t) {
            return n - t
        });
        var i = g(n, t),
            r = i.lower_class_limits;
        return nt(n, r, t)
    }

    function kt(n) {
        if (n.length < 3) return null;
        var t = n.length,
            i = Math.pow(f(n), 3),
            r = y(n, 3);
        return t * r / ((t - 1) * (t - 2) * i)
    }

    function tt(n) {
        var t = 1 / (1 + .5 * Math.abs(n)),
            i = t * Math.exp(-Math.pow(n, 2) - 1.26551223 + 1.00002368 * t + .37409196 * Math.pow(t, 2) + .09678418 * Math.pow(t, 3) - .18628806 * Math.pow(t, 4) + .27886807 * Math.pow(t, 5) - 1.13520398 * Math.pow(t, 6) + 1.48851587 * Math.pow(t, 7) - .82215223 * Math.pow(t, 8) + .17087277 * Math.pow(t, 9));
        return n >= 0 ? 1 - i : i - 1
    }

    function dt(n) {
        var r = Math.abs(n),
            t = Math.min(Math.round(r * 100), i.length - 1);
        return n >= 0 ? i[t] : +(1 - i[t]).toFixed(4)
    }

    function gt(n, t, i) {
        return (n - t) / i
    }

    function r(n) {
        var i, t;
        if (n < 0) return null;
        for (i = 1, t = 2; t <= n; t++) i *= t;
        return i
    }

    function it(n, t) {
        function o(n, t, i) {
            return r(t) / (r(n) * r(t - n)) * Math.pow(i, n) * Math.pow(1 - i, t - n)
        }
        if (t < 0 || t > 1 || n <= 0 || n % 1 != 0) return null;
        var i = 0,
            f = 0,
            u = {};
        do u[i] = o(i, n, t), f += u[i], i++; while (f < 1 - e);
        return u
    }

    function ni(n) {
        return n < 0 || n > 1 ? null : it(1, n)
    }

    function ti(n) {
        function f(n, t) {
            return Math.pow(Math.E, -t) * Math.pow(t, n) / r(n)
        }
        if (n <= 0) return null;
        var t = 0,
            u = 0,
            i = {};
        do i[t] = f(t, n), u += i[t], t++; while (u < 1 - e);
        return i
    }

    function ii(n, i, r) {
        for (var l = t(n), s = 0, h, c = i(l), f = [], o = [], u, e = 0; e < n.length; e++) f[n[e]] === undefined && (f[n[e]] = 0), f[n[e]]++;
        for (e = 0; e < f.length; e++) f[e] === undefined && (f[e] = 0);
        for (u in c) u in f && (o[u] = c[u] * n.length);
        for (u = o.length - 1; u >= 0; u--) o[u] < 3 && (o[u - 1] += o[u], o.pop(), f[u - 1] += f[u], f.pop());
        for (u = 0; u < f.length; u++) s += Math.pow(f[u] - o[u], 2) / o[u];
        return h = f.length - 2, rt[h][r] < s
    }

    function ri(t) {
        function e(t) {
            return function() {
                var i = Array.prototype.slice.apply(arguments);
                return i.unshift(this), n[t].apply(n, i)
            }
        }
        var f = !! (Object.defineProperty && Object.defineProperties),
            r, u, i;
        if (!f) throw new Error("without defineProperty, simple-statistics cannot be mixed in");
        for (r = ["median", "standard_deviation", "sum", "sample_skewness", "mean", "min", "max", "quantile", "geometric_mean", "harmonic_mean", "root_mean_square"], u = t ? t.slice() : Array.prototype, i = 0; i < r.length; i++) Object.defineProperty(u, r[i], {
            value: e(r[i]),
            configurable: !0,
            enumerable: !1,
            writable: !0
        });
        return u
    }
    var n = {}, i, e, rt;
    typeof module != "undefined" ? module.exports = n : this.ss = n;
    i = [.5, .504, .508, .512, .516, .5199, .5239, .5279, .5319, .5359, .5398, .5438, .5478, .5517, .5557, .5596, .5636, .5675, .5714, .5753, .5793, .5832, .5871, .591, .5948, .5987, .6026, .6064, .6103, .6141, .6179, .6217, .6255, .6293, .6331, .6368, .6406, .6443, .648, .6517, .6554, .6591, .6628, .6664, .67, .6736, .6772, .6808, .6844, .6879, .6915, .695, .6985, .7019, .7054, .7088, .7123, .7157, .719, .7224, .7257, .7291, .7324, .7357, .7389, .7422, .7454, .7486, .7517, .7549, .758, .7611, .7642, .7673, .7704, .7734, .7764, .7794, .7823, .7852, .7881, .791, .7939, .7967, .7995, .8023, .8051, .8078, .8106, .8133, .8159, .8186, .8212, .8238, .8264, .8289, .8315, .834, .8365, .8389, .8413, .8438, .8461, .8485, .8508, .8531, .8554, .8577, .8599, .8621, .8643, .8665, .8686, .8708, .8729, .8749, .877, .879, .881, .883, .8849, .8869, .8888, .8907, .8925, .8944, .8962, .898, .8997, .9015, .9032, .9049, .9066, .9082, .9099, .9115, .9131, .9147, .9162, .9177, .9192, .9207, .9222, .9236, .9251, .9265, .9279, .9292, .9306, .9319, .9332, .9345, .9357, .937, .9382, .9394, .9406, .9418, .9429, .9441, .9452, .9463, .9474, .9484, .9495, .9505, .9515, .9525, .9535, .9545, .9554, .9564, .9573, .9582, .9591, .9599, .9608, .9616, .9625, .9633, .9641, .9649, .9656, .9664, .9671, .9678, .9686, .9693, .9699, .9706, .9713, .9719, .9726, .9732, .9738, .9744, .975, .9756, .9761, .9767, .9772, .9778, .9783, .9788, .9793, .9798, .9803, .9808, .9812, .9817, .9821, .9826, .983, .9834, .9838, .9842, .9846, .985, .9854, .9857, .9861, .9864, .9868, .9871, .9875, .9878, .9881, .9884, .9887, .989, .9893, .9896, .9898, .9901, .9904, .9906, .9909, .9911, .9913, .9916, .9918, .992, .9922, .9925, .9927, .9929, .9931, .9932, .9934, .9936, .9938, .994, .9941, .9943, .9945, .9946, .9948, .9949, .9951, .9952, .9953, .9955, .9956, .9957, .9959, .996, .9961, .9962, .9963, .9964, .9965, .9966, .9967, .9968, .9969, .997, .9971, .9972, .9973, .9974, .9974, .9975, .9976, .9977, .9977, .9978, .9979, .9979, .998, .9981, .9981, .9982, .9982, .9983, .9984, .9984, .9985, .9985, .9986, .9986, .9987, .9987, .9987, .9988, .9988, .9989, .9989, .9989, .999, .999];
    e = .0001;
    rt = {
        1: {.995: 0,
            .99: 0,
            .975: 0,
            .95: 0,
            .9: .02,
            .5: .45,
            .1: 2.71,
            .05: 3.84,
            .025: 5.02,
            .01: 6.63,
            .005: 7.88
        },
        2: {.995: .01,
            .99: .02,
            .975: .05,
            .95: .1,
            .9: .21,
            .5: 1.39,
            .1: 4.61,
            .05: 5.99,
            .025: 7.38,
            .01: 9.21,
            .005: 10.6
        },
        3: {.995: .07,
            .99: .11,
            .975: .22,
            .95: .35,
            .9: .58,
            .5: 2.37,
            .1: 6.25,
            .05: 7.81,
            .025: 9.35,
            .01: 11.34,
            .005: 12.84
        },
        4: {.995: .21,
            .99: .3,
            .975: .48,
            .95: .71,
            .9: 1.06,
            .5: 3.36,
            .1: 7.78,
            .05: 9.49,
            .025: 11.14,
            .01: 13.28,
            .005: 14.86
        },
        5: {.995: .41,
            .99: .55,
            .975: .83,
            .95: 1.15,
            .9: 1.61,
            .5: 4.35,
            .1: 9.24,
            .05: 11.07,
            .025: 12.83,
            .01: 15.09,
            .005: 16.75
        },
        6: {.995: .68,
            .99: .87,
            .975: 1.24,
            .95: 1.64,
            .9: 2.2,
            .5: 5.35,
            .1: 10.65,
            .05: 12.59,
            .025: 14.45,
            .01: 16.81,
            .005: 18.55
        },
        7: {.995: .99,
            .99: 1.25,
            .975: 1.69,
            .95: 2.17,
            .9: 2.83,
            .5: 6.35,
            .1: 12.02,
            .05: 14.07,
            .025: 16.01,
            .01: 18.48,
            .005: 20.28
        },
        8: {.995: 1.34,
            .99: 1.65,
            .975: 2.18,
            .95: 2.73,
            .9: 3.49,
            .5: 7.34,
            .1: 13.36,
            .05: 15.51,
            .025: 17.53,
            .01: 20.09,
            .005: 21.96
        },
        9: {.995: 1.73,
            .99: 2.09,
            .975: 2.7,
            .95: 3.33,
            .9: 4.17,
            .5: 8.34,
            .1: 14.68,
            .05: 16.92,
            .025: 19.02,
            .01: 21.67,
            .005: 23.59
        },
        10: {.995: 2.16,
            .99: 2.56,
            .975: 3.25,
            .95: 3.94,
            .9: 4.87,
            .5: 9.34,
            .1: 15.99,
            .05: 18.31,
            .025: 20.48,
            .01: 23.21,
            .005: 25.19
        },
        11: {.995: 2.6,
            .99: 3.05,
            .975: 3.82,
            .95: 4.57,
            .9: 5.58,
            .5: 10.34,
            .1: 17.28,
            .05: 19.68,
            .025: 21.92,
            .01: 24.72,
            .005: 26.76
        },
        12: {.995: 3.07,
            .99: 3.57,
            .975: 4.4,
            .95: 5.23,
            .9: 6.3,
            .5: 11.34,
            .1: 18.55,
            .05: 21.03,
            .025: 23.34,
            .01: 26.22,
            .005: 28.3
        },
        13: {.995: 3.57,
            .99: 4.11,
            .975: 5.01,
            .95: 5.89,
            .9: 7.04,
            .5: 12.34,
            .1: 19.81,
            .05: 22.36,
            .025: 24.74,
            .01: 27.69,
            .005: 29.82
        },
        14: {.995: 4.07,
            .99: 4.66,
            .975: 5.63,
            .95: 6.57,
            .9: 7.79,
            .5: 13.34,
            .1: 21.06,
            .05: 23.68,
            .025: 26.12,
            .01: 29.14,
            .005: 31.32
        },
        15: {.995: 4.6,
            .99: 5.23,
            .975: 6.27,
            .95: 7.26,
            .9: 8.55,
            .5: 14.34,
            .1: 22.31,
            .05: 25,
            .025: 27.49,
            .01: 30.58,
            .005: 32.8
        },
        16: {.995: 5.14,
            .99: 5.81,
            .975: 6.91,
            .95: 7.96,
            .9: 9.31,
            .5: 15.34,
            .1: 23.54,
            .05: 26.3,
            .025: 28.85,
            .01: 32,
            .005: 34.27
        },
        17: {.995: 5.7,
            .99: 6.41,
            .975: 7.56,
            .95: 8.67,
            .9: 10.09,
            .5: 16.34,
            .1: 24.77,
            .05: 27.59,
            .025: 30.19,
            .01: 33.41,
            .005: 35.72
        },
        18: {.995: 6.26,
            .99: 7.01,
            .975: 8.23,
            .95: 9.39,
            .9: 10.87,
            .5: 17.34,
            .1: 25.99,
            .05: 28.87,
            .025: 31.53,
            .01: 34.81,
            .005: 37.16
        },
        19: {.995: 6.84,
            .99: 7.63,
            .975: 8.91,
            .95: 10.12,
            .9: 11.65,
            .5: 18.34,
            .1: 27.2,
            .05: 30.14,
            .025: 32.85,
            .01: 36.19,
            .005: 38.58
        },
        20: {.995: 7.43,
            .99: 8.26,
            .975: 9.59,
            .95: 10.85,
            .9: 12.44,
            .5: 19.34,
            .1: 28.41,
            .05: 31.41,
            .025: 34.17,
            .01: 37.57,
            .005: 40
        },
        21: {.995: 8.03,
            .99: 8.9,
            .975: 10.28,
            .95: 11.59,
            .9: 13.24,
            .5: 20.34,
            .1: 29.62,
            .05: 32.67,
            .025: 35.48,
            .01: 38.93,
            .005: 41.4
        },
        22: {.995: 8.64,
            .99: 9.54,
            .975: 10.98,
            .95: 12.34,
            .9: 14.04,
            .5: 21.34,
            .1: 30.81,
            .05: 33.92,
            .025: 36.78,
            .01: 40.29,
            .005: 42.8
        },
        23: {.995: 9.26,
            .99: 10.2,
            .975: 11.69,
            .95: 13.09,
            .9: 14.85,
            .5: 22.34,
            .1: 32.01,
            .05: 35.17,
            .025: 38.08,
            .01: 41.64,
            .005: 44.18
        },
        24: {.995: 9.89,
            .99: 10.86,
            .975: 12.4,
            .95: 13.85,
            .9: 15.66,
            .5: 23.34,
            .1: 33.2,
            .05: 36.42,
            .025: 39.36,
            .01: 42.98,
            .005: 45.56
        },
        25: {.995: 10.52,
            .99: 11.52,
            .975: 13.12,
            .95: 14.61,
            .9: 16.47,
            .5: 24.34,
            .1: 34.28,
            .05: 37.65,
            .025: 40.65,
            .01: 44.31,
            .005: 46.93
        },
        26: {.995: 11.16,
            .99: 12.2,
            .975: 13.84,
            .95: 15.38,
            .9: 17.29,
            .5: 25.34,
            .1: 35.56,
            .05: 38.89,
            .025: 41.92,
            .01: 45.64,
            .005: 48.29
        },
        27: {.995: 11.81,
            .99: 12.88,
            .975: 14.57,
            .95: 16.15,
            .9: 18.11,
            .5: 26.34,
            .1: 36.74,
            .05: 40.11,
            .025: 43.19,
            .01: 46.96,
            .005: 49.65
        },
        28: {.995: 12.46,
            .99: 13.57,
            .975: 15.31,
            .95: 16.93,
            .9: 18.94,
            .5: 27.34,
            .1: 37.92,
            .05: 41.34,
            .025: 44.46,
            .01: 48.28,
            .005: 50.99
        },
        29: {.995: 13.12,
            .99: 14.26,
            .975: 16.05,
            .95: 17.71,
            .9: 19.77,
            .5: 28.34,
            .1: 39.09,
            .05: 42.56,
            .025: 45.72,
            .01: 49.59,
            .005: 52.34
        },
        30: {.995: 13.79,
            .99: 14.95,
            .975: 16.79,
            .95: 18.49,
            .9: 20.6,
            .5: 29.34,
            .1: 40.26,
            .05: 43.77,
            .025: 46.98,
            .01: 50.89,
            .005: 53.67
        },
        40: {.995: 20.71,
            .99: 22.16,
            .975: 24.43,
            .95: 26.51,
            .9: 29.05,
            .5: 39.34,
            .1: 51.81,
            .05: 55.76,
            .025: 59.34,
            .01: 63.69,
            .005: 66.77
        },
        50: {.995: 27.99,
            .99: 29.71,
            .975: 32.36,
            .95: 34.76,
            .9: 37.69,
            .5: 49.33,
            .1: 63.17,
            .05: 67.5,
            .025: 71.42,
            .01: 76.15,
            .005: 79.49
        },
        60: {.995: 35.53,
            .99: 37.48,
            .975: 40.48,
            .95: 43.19,
            .9: 46.46,
            .5: 59.33,
            .1: 74.4,
            .05: 79.08,
            .025: 83.3,
            .01: 88.38,
            .005: 91.95
        },
        70: {.995: 43.28,
            .99: 45.44,
            .975: 48.76,
            .95: 51.74,
            .9: 55.33,
            .5: 69.33,
            .1: 85.53,
            .05: 90.53,
            .025: 95.02,
            .01: 100.42,
            .005: 104.22
        },
        80: {.995: 51.17,
            .99: 53.54,
            .975: 57.15,
            .95: 60.39,
            .9: 64.28,
            .5: 79.33,
            .1: 96.58,
            .05: 101.88,
            .025: 106.63,
            .01: 112.33,
            .005: 116.32
        },
        90: {.995: 59.2,
            .99: 61.75,
            .975: 65.65,
            .95: 69.13,
            .9: 73.29,
            .5: 89.33,
            .1: 107.57,
            .05: 113.14,
            .025: 118.14,
            .01: 124.12,
            .005: 128.3
        },
        100: {.995: 67.33,
            .99: 70.06,
            .975: 74.22,
            .95: 77.93,
            .9: 82.36,
            .5: 99.33,
            .1: 118.5,
            .05: 124.34,
            .025: 129.56,
            .01: 135.81,
            .005: 140.17
        }
    };
    n.linear_regression = ut;
    n.standard_deviation = v;
    n.r_squared = ft;
    n.median = o;
    n.mean = t;
    n.mode = at;
    n.min = ht;
    n.max = ct;
    n.sum = c;
    n.quantile = h;
    n.quantile_sorted = s;
    n.iqr = k;
    n.mad = d;
    n.chunk = pt;
    n.shuffle = b;
    n.shuffle_in_place = w;
    n.sample = wt;
    n.sample_covariance = p;
    n.sample_correlation = lt;
    n.sample_variance = u;
    n.sample_standard_deviation = f;
    n.sample_skewness = kt;
    n.geometric_mean = ot;
    n.harmonic_mean = st;
    n.root_mean_square = l;
    n.variance = a;
    n.t_test = vt;
    n.t_test_two_sample = yt;
    n.jenksMatrices = g;
    n.jenksBreaks = nt;
    n.jenks = bt;
    n.bayesian = et;
    n.epsilon = e;
    n.factorial = r;
    n.bernoulli_distribution = ni;
    n.binomial_distribution = it;
    n.poisson_distribution = ti;
    n.chi_squared_goodness_of_fit = ii;
    n.z_score = gt;
    n.cumulative_std_normal_probability = dt;
    n.standard_normal_table = i;
    n.error_function = tt;
    n.average = t;
    n.interquartile_range = k;
    n.mixin = ri;
    n.median_absolute_deviation = d;
    n.rms = l;
    n.erf = tt
}(this),
function() {
    var r = window.lineChart || {}, n = {}, i = {}, t = {};
    r.clearGraphic = function(n) {
        $("#" + n).html("");
        switch (n) {
            case "pythonRegression":
                $(".chart-legend." + n).empty();
                break;
            case "standardRegression":
                $(".chart-legend." + n).css("display", "none");
                break;
            case "azureMlFirstChart":
                $(".chart-legend." + n).css("display", "none");
                break;
            case "azureMlSecondChart":
                $(".chart-legend." + n).empty()
        }
    };
    var e = function(n) {
        var t = this,
            r = $("#" + n).width(),
            i = $("#ucTable").height(),
            u;
        n.indexOf("azureMl") >= 0 && (i = $("#azureMlTable").height());
        r == 0 && ($("#nassTab").css("display", "block"), r = $("#" + n).width(), i = $("#ucTable").height(), $("#nassTab").css("display", ""));
        i = i > 200 ? i : 507;
        t.margin = {
            top: 20,
            right: 20,
            bottom: 45,
            left: 50
        };
        t.width = r - t.margin.left - t.margin.right;
        t.height = i - t.margin.top - t.margin.bottom;
        t.x = d3.scale.linear().range([0, t.width]);
        t.y = d3.scale.linear().range([t.height, 0]);
        t.yR = d3.scale.linear().range([t.height, 0]);
        u = d3.format(".0f");
        t.xAxis = d3.svg.axis().scale(t.x).orient("bottom").tickFormat(u).ticks(10);
        t.yAxis = d3.svg.axis().scale(t.y).orient("left");
        t.yAxisR = d3.svg.axis().scale(t.yR).orient("right");
        t.line = d3.svg.line().x(function(n) {
            return t.x(n.year)
        }).y(function(n) {
            return t.y(n.value)
        });
        t.lineR = d3.svg.line().x(function(n) {
            return t.x(n.year)
        }).y(function(n) {
            return t.yR(n.value)
        });
        t.svg = d3.select("#" + n).append("svg").attr("width", t.width + t.margin.left + t.margin.right + 5).attr("height", t.height + t.margin.top + t.margin.bottom).append("g").attr("transform", "translate(" + t.margin.left + "," + t.margin.top + ")")
    }, u = function(n) {
            return n.sort(function(n, t) {
                return n.year < t.year ? -1 : n.year > t.year ? 1 : 0
            })
        }, f = function(n) {
            var r = [],
                u = 0,
                t, f, i;
            for (r[u] = [], t = -1, f = -1, i = 0; i < n.length; i++) t = n[i].year, t > 0 && f > 0 && Math.abs(t - f) > 1 && (++u, r[u] = []), r[u].push(n[i]), f = t;
            return r
        };
    r.buildLineChart = function(t, i, o) {
        var y, it, g, c, nt, l, rt, b, k, d;
        r.clearGraphic(i);
        e.call(n, i);
        $("#" + o).css("display", "block");
        $(".chart-legend." + i).show();
        var s = [],
            h = [],
            a = [],
            v = [];
        for (y = 0; y < t.length; y++) {
            var p = t[y],
                w = p.year,
                tt = p._yield;
            tt && (it = parseFloat(tt.replace(/\,/g, "")).toFixed(2), h.push({
                year: +w,
                value: +it
            }));
            g = p.area_harvest;
            c = 0;
            g && (c = parseFloat(g.replace(/\,/g, "")).toFixed(2), a.push({
                year: +w,
                value: +(c / 1e6)
            }));
            nt = p.area_planted;
            l = 0;
            nt && (l = parseFloat(nt.replace(/\,/g, "")).toFixed(2), v.push({
                year: +w,
                value: +(l / 1e6)
            }));
            rt = c >= l ? c : l;
            s.push({
                year: +w,
                value: +(rt / 1e6)
            })
        }
        s = u(s);
        a = u(a);
        v = u(v);
        h = u(h);
        var ut = f(h),
            ft = f(a),
            et = f(v);
        for (n.x.domain(d3.extent(s, function(n) {
            return n.year
        })), n.y.domain(d3.extent(s, function(n) {
            return n.value
        })), n.yR.domain(d3.extent(h, function(n) {
            return n.value
        })), n.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + n.height + ")").call(n.xAxis), n.svg.append("g").attr("class", "y axis").call(n.yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").style("text-anchor", "end").text("Acres, mil"), b = 0; b < et.length; b++) n.svg.append("path").datum(et[b]).attr("class", "line-second").attr("d", n.line);
        for (k = 0; k < ft.length; k++) n.svg.append("path").datum(ft[k]).attr("class", "line").attr("d", n.line);
        for (d = 0; d < ut.length; d++) n.svg.append("path").datum(ut[d]).attr("class", "line-third").attr("d", n.lineR);
        n.svg.append("g").attr("class", "y axis").attr("transform", "translate(" + (n.width - 1) + " ,0)").call(n.yAxisR).append("text").attr("transform", "rotate(90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").text("BU / Acre");
        $("#" + o).css("display", "none")
    };
    r.buildAzureMlFirstChart = function(n, i, o) {
        var l, v, k, c, d, g, nt, p, w;
        r.clearGraphic(i);
        e.call(t, i);
        l = 1e6;
        $("#" + o).css("display", "block");
        $(".chart-legend." + i).show();
        var a = [],
            h = [],
            s = 0;
        for (v = 0; v < n.length; v++) {
            var b = n[v],
                tt = b.year,
                it = b.arePlantedActual,
                y = 0;
            it && (y = parseFloat(it.replace(/\,/g, "")), a.push({
                year: +tt,
                value: +(y / l).toFixed(2)
            }));
            k = b.areaPlantedEstimate;
            c = 0;
            k && (c = parseFloat(k.replace(/\,/g, "")), h.push({
                year: +tt,
                value: +(c / l).toFixed(2)
            }));
            d = y >= c ? y : c;
            s = s > d ? s : d
        }
        for (h = u(h), a = u(a), g = f(h), nt = f(a), s = s / l, t.x.domain(d3.extent(h, function(n) {
            return n.year
        })), t.y.domain([0, s]), t.yR.domain([0, s]), t.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + t.height + ")").call(t.xAxis), t.svg.append("g").attr("class", "y axis").call(t.yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").style("text-anchor", "end").text("Acres, mil"), p = 0; p < nt.length; p++) t.svg.append("path").datum(nt[p]).attr("class", "line-second").attr("d", t.line);
        for (w = 0; w < g.length; w++) t.svg.append("path").datum(g[w]).attr("class", "line").attr("d", t.line);
        t.svg.append("g").attr("class", "y axis").attr("transform", "translate(" + (t.width - 1) + " ,0)").call(t.yAxisR).append("text").attr("transform", "rotate(90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").text("Acres, mil");
        $("#" + o).css("display", "none")
    };
    r.buildRegressionChart = function(n, t, o, s, h) {
        var tt, d, y, it, p, w, v, ut, ft, st, nt;
        r.clearGraphic(t);
        e.call(i, t);
        tt = 1e6;
        $("#" + o).css("display", "block");
        var ht = $("." + t),
            b = {}, c = [],
            k = [];
        for (d = 0; d < n.length; d++)
            if (y = n[d], it = y.statisticcat_desc, it == "AREA PLANTED") {
                var l = y.year,
                    a = y.commodity_desc,
                    rt = y.value;
                k[l] = k[l] || {};
                p = k[l] || {};
                p[a] = p[a] || {};
                p[a][it] = rt;
                k[l] = p;
                b[a] = b[a] || [];
                b[a].push({
                    year: l,
                    value: rt
                });
                c.push({
                    year: l,
                    value: rt
                })
            }
        for (c.forEach(function(n) {
            n.year = +n.year;
            var t = parseFloat(n.value.split(",").join("")).toFixed(2);
            n.value = +(t / tt)
        }), c = u(c), i.x.domain(d3.extent(c, function(n) {
            return n.year
        })), i.y.domain(d3.extent(c, function(n) {
            return n.value
        })), i.yR.domain(d3.extent(c, function(n) {
            return n.value
        })), i.svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + i.height + ")").call(i.xAxis), i.svg.append("g").attr("class", "y axis").call(i.yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").style("text-anchor", "end").text("Acres, mil"), w = 0; w < s.length; w++) {
            var g = s[w],
                et = "chart-color-default",
                ot = w + 1;
            if (g != h && (et = "chart-color-" + ot), v = b[g], v)
                for (v.forEach(function(n) {
                    n.year = +n.year;
                    var t = parseFloat(n.value.split(",").join("")).toFixed(2);
                    n.value = +(t / tt)
                }), v = u(v), ut = f(v), ft = "legend-color-default", g != h && (ft = "legend-color-" + ot), st = ' <span class="legend-block ' + ft + '"><\/span> - ' + g, ht.append(st), nt = 0; nt < ut.length; nt++) i.svg.append("path").datum(ut[nt]).attr("class", et).attr("d", i.line)
        }
        i.svg.append("g").attr("class", "y axis").attr("transform", "translate(" + (i.width - 1) + " ,0)").call(i.yAxisR).append("text").attr("transform", "rotate(90)").attr("y", 6).attr("dy", ".71em").attr("class", "chart-texts").text("Acres, mil");
        $("#" + o).css("display", "none")
    };
    r.buildTableForLineChart = function(n) {
        var t = [],
            u, i, r, e, o, f, s;
        for ($("#CommodityUseCase").find(":not(:selected)").each(function(n, i) {
            t.push(i.text)
        }), u = $("#CommodityUseCase option:selected").text(), i = [], i.push({
            title: "Year",
            "class": "center"
        }), r = 0, e = t.length; r < e; r++) o = {
            title: "Area Planted - " + t[r],
            "class": "center"
        }, i.push(o);
        i.push({
            title: "Area Planted - " + u,
            "class": "center"
        });
        f = [];
        s = n;
        s.forEach(function(n, i) {
            var o = n[u],
                r = [],
                e, l, s, h, c;
            for (r.push(i), e = 0, l = t.length; e < l; e++) s = n[t[e]], h = "-", s && (h = s["AREA PLANTED"] || "-"), r.push(h);
            c = "-";
            o && o["AREA PLANTED"] && (c = o["AREA PLANTED"]);
            r.push(c);
            f.push(r)
        });
        $("#secondChartTable").append('<table id="secChartTable" class="display" cellspacing="0" width="100%"><\/table>');
        $("#secChartTable").DataTable({
            data: f,
            columns: i,
            bFilter: !1,
            bLengthChange: !1,
            language: {
                emptyTable: "No data available"
            },
            order: [
                [0, "desc"]
            ]
        })
    };
    r.tableForLineChartClear = function() {
        $("#secondChartTable").empty()
    };
    r.parseFloatIgnoreCommas = function(n) {
        var t = n.replace(/,/g, "");
        return parseFloat(t)
    };
    window.lineChart = r
}(),
function(n, t) {
    function r(n, t, i) {
        return i ? i : t && t != "timeout" && t != "abort" && t != "error" && t != "parsererror" ? t : "timeout (" + n.timeout / 1e3 + " sec.)"
    }

    function i() {
        var n = new Date;
        return n.toUTCString() + " +" + n.getMilliseconds() + "ms"
    }

    function u(n) {
        var i = Number.MAX_VALUE,
            r = -Number.MAX_VALUE,
            s, f, e, o;
        if (t.isArray(n))
            if (s = n[0], t.isArray(s))
                for (e = 0; e < n.length; e++) f = n[e], u(f), i > f.max ? i = f.max : i > f.min && (i = f.min), r < f.min ? r = f.min : r < f.max && (r = f.max);
            else
                for (e = 0; e < n.length; e++) o = parseFloat(n[e]), i > o && (i = o), r < o && (r = o), n[e] = o;
            else n = parseFloat(n), i > n && (i = n), r < n && (r = n);
        return i == Number.MAX_VALUE && (i = r = Number.NaN), n.min = i, n.max = r, n
    }

    function f(n) {
        for (var i, r, u, f, e, t = 0; t < n.EnvironmentalVariables.length; t++)
            for (i = n.EnvironmentalVariables[t], i.DataSources = [], r = 0; r < n.DataSources.length; r++) {
                for (u = n.DataSources[r], f = !1, e = 0; e < u.ProvidedVariables.length && !f; e++) f = u.ProvidedVariables[e] == i.Name;
                f && i.DataSources.push(u)
            }
        return n
    }

    function e(t) {
        for (var i, s, r, f, e, u = [], o = 0; o < t.EnvironmentalVariables.length; o++)
            for (i = t.EnvironmentalVariables[o], s = n.getCategoriesFromDescription(i.Description), i.Description = s.description, i.Categories = s.categories, r = 0; r < i.Categories.length; r++) {
                for (f = !0, e = 0; e < u.length && f; e++) f = u[e] != i.Categories[r];
                f && u.push(i.Categories[r])
            }
        return t.Categories = u, t
    }
    n.TemporalDomain = function(n, i, r, u, f, e) {
        if (!t.isArray(n) || !t.isArray(r) || !t.isArray(f)) throw "Years, days and hours must be arrays";
        if (i && n.length < 2) throw "At least two years must be specified in cell mode";
        if (u && r.length < 2) throw "At least two days must be specified in cell mode";
        if (e && f.length < 2) throw "At least two hours must be specified in cell mode";
        this.years = n;
        this.yearCellMode = i;
        this.days = r;
        this.dayCellMode = u;
        this.hours = f;
        this.hourCellMode = e
    };
    n.TemporalDomain.prototype.isEqual = function(n) {
        var i;
        if (this.yearCellMode !== n.yearCellMode || this.dayCellMode !== n.dayCellMode || this.hourCellMode !== n.hourCellMode || !t.isArray(n.years) || !t.isArray(n.days) || !t.isArray(n.hours) || this.years.length !== n.years.length || this.days.length !== n.days.length || this.hours.length !== n.hours.length) return !1;
        for (i = 0; i < this.years.length; i++)
            if (this.years[i] !== n.years[i]) return !1;
        for (i = 0; i < this.days.length; i++)
            if (this.days[i] !== n.days[i]) return !1;
        for (i = 0; i < this.hours.length; i++)
            if (this.hours[i] !== n.hours[i]) return !1;
        return !0
    };
    n.TemporalDomain.prototype.fillFetchRequest = function(n) {
        n.Domain = n.Domain || {};
        n.Domain.TimeRegion = {
            Years: this.years,
            Days: this.days,
            Hours: this.hours,
            IsIntervalsGridYears: this.yearCellMode,
            IsIntervalsGridDays: this.dayCellMode,
            IsIntervalsGridHours: this.hourCellMode
        }
    };
    n.TemporalDomain.prototype.yearAxisLength = function() {
        return this.yearCellMode ? this.years.length - 1 : this.years.length
    };
    n.TemporalDomain.prototype.dayAxisLength = function() {
        return this.dayCellMode ? this.days.length - 1 : this.days.length
    };
    n.TemporalDomain.prototype.hourAxisLength = function() {
        return this.hourCellMode ? this.hours.length - 1 : this.hours.length
    };
    n.ScatteredPoints = function(n, i) {
        if (this.spatialRegionType = "Points", i) {
            if (!t.isArray(n) || !t.isArray(i) || n.length != i.length) throw "Lats and lons must be arrays of same length";
            this.lats = n;
            this.lons = i
        } else {
            if (!t.isArray(n)) throw "Argument must be an array";
            this.lats = [];
            this.lons = [];
            for (var r = 0; r < n.length; r++) this.lats.push(n[r].lat), this.lons.push(n[r].lon)
        }
    };
    n.ScatteredPoints.prototype.fillFetchRequest = function(n) {
        n.Domain = n.Domain || {};
        n.Domain.SpatialRegionType = "Points";
        n.Domain.Lats = this.lats;
        n.Domain.Lons = this.lons;
        n.Domain.Lats2 = null;
        n.Domain.Lons2 = null
    };
    n.Grid = function(n, i, r, u, f, e, o) {
        var s;
        if (this.spatialRegionType = n, !t.isArray(i) || !t.isArray(r) || u || f || e || o) {
            for (this.lats = [], s = 0; s < u; s++) this.lats[s] = i + (r - i) * s / (u - 1);
            for (this.lons = [], s = 0; s < o; s++) this.lons[s] = f + (e - f) * s / (o - 1)
        } else this.lats = i, this.lons = r
    };
    n.Grid.prototype.fillFetchRequest = function(n) {
        n.Domain = n.Domain || {};
        n.Domain.SpatialRegionType = this.spatialRegionType;
        n.Domain.Lats = this.lats;
        n.Domain.Lons = this.lons;
        n.Domain.Lats2 = null;
        n.Domain.Lons2 = null
    };
    n.CellGrid = function(t, i, r, u, f, e) {
        n.Grid.call(this, "CellGrid", t, i, r, u, f, e)
    };
    n.CellGrid.prototype.fillFetchRequest = n.Grid.prototype.fillFetchRequest;
    n.PointGrid = function(t, i, r, u, f, e) {
        n.Grid.call(this, "PointGrid", t, i, r, u, f, e)
    };
    n.PointGrid.prototype.fillFetchRequest = n.Grid.prototype.fillFetchRequest;
    n.CellGrid.prototype.fillFetchRequest = function(n) {
        n.Domain = n.Domain || {};
        n.Domain.SpatialRegionType = "CellGrid";
        n.Domain.Lats = this.lats;
        n.Domain.Lons = this.lons;
        n.Domain.Lats2 = null;
        n.Domain.Lons2 = null
    };
    n.ScatteredCells = function() {
        if (!t.isArray(latmin) || !t.isArray(latmax) || !t.isArray(lonmin) || !t.isArray(lonmax)) throw "All arguments must be arrays";
        if (latmin.length != lonmin.length || lonmin.length != lonmax.length || lonmax.length != latmax.length) throw "All arguments must be arrays of the same length";
        this.spatialRegionType = "Cells";
        this.lats = latmin;
        this.lats2 = latmax;
        this.lons = lonmin;
        this.lons2 = lonmax
    };
    n.ScatteredCells.prototype.fillFetchRequest = function(n) {
        n.Domain = n.Domain || {};
        n.Domain.SpatialRegionType = "Cells";
        n.Domain.Lats = this.lats;
        n.Domain.Lons = this.lons;
        n.Domain.Lats2 = this.lats2;
        n.Domain.Lons2 = this.lons2
    };
    n.Response = function(n, t) {
        this.rq = n;
        this.uri = t;
        Object.defineProperty(this, "request", {
            get: function() {
                return this.rq
            },
            configurable: !1
        });
        Object.defineProperty(this, "resultUri", {
            get: function() {
                return this.uri
            },
            configurable: !1
        })
    };
    n.Response.prototype.getSchema = function() {
        var n = new jQuery.Deferred;
        return t.ajax({
            url: this.rq.serviceUrl + "/jsproxy/schema?uri=" + encodeURIComponent(this.uri),
            type: "GET",
            dataType: "json",
            timeout: this.rq.timeout,
            success: function(t) {
                n.resolve(t)
            },
            error: function(t, i, u) {
                n.reject(r(this.rq, i, u))
            }
        }), n.promise()
    };
    n.Response.prototype.getData = function(n) {
        var e, f, o;
        for (n || (n = this.request.dataSources.length === 1 ? ["values", "sd"] : ["values", "provenance", "sd"]), e = new jQuery.Deferred, console.log(i() + ": Requesting " + n + " of " + this.uri), f = "", o = 0; o < n.length; o++) f.length > 0 && (f = f + ","), f += n[o];
        return t.ajax({
            url: this.rq.serviceUrl + "/jsproxy/data?uri=" + encodeURIComponent(this.uri) + "&variables=" + encodeURIComponent(f),
            type: "GET",
            dataType: "json",
            timeout: this.timeout,
            success: function(t) {
                console.log(i() + ": Received data for " + n);
                for (var r = 0; r < n.length; r++) u(t[n[r]]);
                e.resolve(t)
            },
            error: function(t, u, f) {
                var o = r(this.rq, u, f);
                console.log(i() + ": Error getting " + n + ": " + o);
                e.reject(o)
            }
        }), e.promise()
    };
    n.Response.prototype.getValues = function() {
        return this.getData("values")
    };
    n.Response.prototype.getUncertainty = function() {
        return this.getData("sd")
    };
    n.Response.prototype.getProvenance = function() {
        return this.getData("provenance")
    };
    n.Request = function(u) {
        var e = "new",
            o = null,
            a = {}, c;
        Object.defineProperty(this, "status", {
            get: function() {
                return e
            },
            set: function(n) {
                e = n
            },
            configurable: !1
        });
        Object.defineProperty(this, "statusData", {
            set: function(n) {
                o = n
            },
            configurable: !1
        });
        Object.defineProperty(this, "positionInQueue", {
            get: function() {
                return e != "pending" ? NaN : o
            },
            configurable: !1
        });
        Object.defineProperty(this, "percentCompleted", {
            get: function() {
                return e === "calculating" ? o : e === "receiving" || e === "completed" || e === "failed" ? 100 : 0
            },
            configurable: !1
        });
        Object.defineProperty(this, "errorMessage", {
            get: function() {
                return e != "failed" ? "" : o
            },
            configurable: !1
        });
        Object.defineProperty(this, "resultUrl", {
            get: function() {
                return e != "completed" ? null : o
            },
            configurable: !1
        });
        Object.defineProperty(this, "dataSources", {
            get: function() {
                return a
            }
        });
        this.timeout = u.timeout ? u.timeout : 18e4;
        this.pollInterval = u.pollingInterval ? u.pollingInterval : 1e4;
        this.serviceUrl = u.serviceUrl ? u.serviceUrl : "";
        a = u.dataSources || [];
        u.rawJSON ? c = u.rawJSON : (this.spatial = u.spatial, this.temporal = u.temporal, this.variable = u.variable, c = {
            EnvironmentVariableName: this.variable,
            Domain: {
                Mask: null
            },
            ParticularDataSources: u.dataSources ? u.dataSources : {},
            ReproducibilityTimestamp: u.timestamp ? u.timestamp : Date.UTC(9999, 12, 31, 23, 59, 59, 999)
        }, this.spatial.fillFetchRequest(c), this.temporal.fillFetchRequest(c));
        var f = this,
            s = null,
            h = null,
            l = function(n) {
                e = "failed";
                o = n;
                s && s.reject && s.reject(n);
                s = h = null
            }, v = function(t) {
                var u = t.substring(0, Math.min(t.length, 5)),
                    r;
                console.log(i() + ": Status received " + t);
                u === "pendi" || u === "progr" ? (r = t.indexOf("hash="), r == -1 ? l("No hash found in response: " + t) : f.hash = t.substring(r + 5).trim(), u === "pendi" ? (e = "pending", o = parseInt(t.match(/pending=(\d+);/)[1], 10), h && h(f), setTimeout(p, f.pollInterval)) : u === "progr" && (e = "calculating", o = parseInt(t.match(/progress=(\d+)%;/)[1], 10), h && h(f), setTimeout(p, f.pollInterval))) : u === "compl" ? (e = "receiving", o = t.substring(10), r = t.indexOf("Blob="), r !== -1 && (f.hash = t.substring(r + 5).trim()), h && h(f), s.resolve(new n.Response(f, o)), s = h = null) : u === "fault" ? (r = t.indexOf("hash "), r == -1 ? l("No hash found in response: " + t) : f.hash = t.substring(r + 5).trim(), l(t)) : l("Unexpected response: " + t)
            }, y = function(n, t, u) {
                var e = r(f, t, u);
                console.log(i() + ": Request failed: " + e);
                l(e)
            }, w = function() {
                console.log(i() + ": Invoking compute for variable " + c.EnvironmentVariableName);
                e = "pending";
                o = NaN;
                t.ajax({
                    url: f.serviceUrl + "/api/compute",
                    type: "POST",
                    data: JSON.stringify(c),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: f.timeout,
                    success: v,
                    error: y
                })
            }, p = function() {
                console.log(i() + ": Getting state for " + f.hash);
                t.ajax({
                    url: f.serviceUrl + "/api/status?hash=" + f.hash,
                    type: "GET",
                    dataType: "json",
                    timeout: f.timeout,
                    success: v,
                    error: y
                })
            };
        this.perform = function(n) {
            return s || (s = new jQuery.Deferred, h = n, w()), s.promise()
        }
    };
    n.getConfigurationTimeout = 18e4;
    n.getConfiguration = function(i) {
        i = i || {};
        var u = new jQuery.Deferred;
        return t.ajax({
            url: (i.serviceUrl ? i.serviceUrl : "") + (i.timestamp ? "/api/configuration?timestamp=" + i.timestamp : "/api/configuration"),
            type: "GET",
            dataType: "json",
            timeout: n.getConfigurationTimeout,
            success: function(n) {
                u.resolve(e(f(n)))
            },
            error: function(n, t, i) {
                u.reject(r(self, t, i))
            }
        }), u.promise()
    };
    n.getCategoriesFromDescription = function(n) {
        var i, t, r, u;
        if (!n) return {
            description: "",
            categories: []
        };
        if (i = n.lastIndexOf("Category:"), t = "", i != -1) t = n.substring(i + 9).trim(), n = n.substring(0, i).trim();
        else if (i = n.lastIndexOf("Categories:"), i != -1) t = n.substring(i + 11).trim(), n = n.substring(0, i).trim();
        else return {
            description: n,
            categories: []
        };
        for (n.charAt(n.length - 1) == ";" && (n = n.substring(0, n.length - 1)), t.charAt(t.length - 1) == "." && (t = t.substring(0, t.length - 1)), r = t.split(","), u = 0; u < r.length;) r[u] = r[u].trim(), r[u] === "" ? r.splice(u, 1) : u++;
        return {
            description: n,
            categories: r
        }
    }
}(window.FC = window.FC || {}, jQuery),
function() {
    function t(t) {
        t = t.substring(0, 1).toLocaleUpperCase() + t.substring(1).toLowerCase();
        for (var i = 0; i < n.length; i++)
            if (n[i].name.toLowerCase() == t.toLowerCase()) return n[i];
        return null
    }

    function i(n) {
        for (var i, r, t = {
                minLat: Number(n[0].lat),
                minLon: Number(n[0].lon),
                maxLat: Number(n[0].lat),
                maxLon: Number(n[0].lon)
            }, u = 1; u < n.length; u++) i = Number(n[u].lat), r = Number(n[u].lon), i < t.minLat && (t.minLat = i), r < t.minLon && (t.minLon = r), i > t.maxLat && (t.maxLat = i), r > t.maxLon && (t.maxLon = r);
        return t
    }

    function r(n) {
        var r = t(n);
        return i(r.points)
    }
    var n = [{
        name: "Alaska",
        points: [{
            lat: 70.0187,
            lon: -141.0205
        }, {
            lat: 70.1292,
            lon: -141.7291
        }, {
            lat: 70.4515,
            lon: -144.8163
        }, {
            lat: 70.7471,
            lon: -148.4583
        }, {
            lat: 70.7923,
            lon: -151.1609
        }, {
            lat: 71.147,
            lon: -152.6221
        }, {
            lat: 71.1185,
            lon: -153.9954
        }, {
            lat: 71.4307,
            lon: -154.8853
        }, {
            lat: 71.5232,
            lon: -156.7529
        }, {
            lat: 71.2796,
            lon: -157.9449
        }, {
            lat: 71.2249,
            lon: -159.6313
        }, {
            lat: 70.6363,
            lon: -161.8671
        }, {
            lat: 70.0843,
            lon: -163.5809
        }, {
            lat: 69.3028,
            lon: -165.2399
        }, {
            lat: 69.1782,
            lon: -166.8768
        }, {
            lat: 68.3344,
            lon: -168.0414
        }, {
            lat: 67.6844,
            lon: -165.9155
        }, {
            lat: 67.2933,
            lon: -164.6082
        }, {
            lat: 66.7789,
            lon: -164.0149
        }, {
            lat: 66.581,
            lon: -165.7507
        }, {
            lat: 66.2867,
            lon: -167.5745
        }, {
            lat: 66.0269,
            lon: -168.9862
        }, {
            lat: 65.497,
            lon: -168.9478
        }, {
            lat: 65.042,
            lon: -167.4756
        }, {
            lat: 64.3922,
            lon: -167.0142
        }, {
            lat: 64.0554,
            lon: -165.7343
        }, {
            lat: 64.0193,
            lon: -163.2294
        }, {
            lat: 63.9615,
            lon: -162.1143
        }, {
            lat: 63.6877,
            lon: -163.6029
        }, {
            lat: 63.453,
            lon: -165.3717
        }, {
            lat: 62.4133,
            lon: -166.3715
        }, {
            lat: 61.6534,
            lon: -166.9867
        }, {
            lat: 60.8556,
            lon: -166.4429
        }, {
            lat: 60.5357,
            lon: -167.8381
        }, {
            lat: 59.5482,
            lon: -167.7118
        }, {
            lat: 59.4115,
            lon: -165.8002
        }, {
            lat: 59.3696,
            lon: -164.5972
        }, {
            lat: 59.1168,
            lon: -162.8558
        }, {
            lat: 58.1185,
            lon: -162.5427
        }, {
            lat: 58.1359,
            lon: -160.6421
        }, {
            lat: 58.0285,
            lon: -159.505
        }, {
            lat: 57.6336,
            lon: -158.8953
        }, {
            lat: 56.909,
            lon: -159.906
        }, {
            lat: 56.3926,
            lon: -160.6531
        }, {
            lat: 56.2342,
            lon: -161.8835
        }, {
            lat: 55.724,
            lon: -162.9822
        }, {
            lat: 55.2478,
            lon: -164.3994
        }, {
            lat: 54.7753,
            lon: -165.3168
        }, {
            lat: 54.1463,
            lon: -167.1075
        }, {
            lat: 53.5632,
            lon: -168.5852
        }, {
            lat: 53.1402,
            lon: -169.9146
        }, {
            lat: 52.5964,
            lon: -169.5959
        }, {
            lat: 52.9089,
            lon: -168.2227
        }, {
            lat: 54.2139,
            lon: -162.7734
        }, {
            lat: 54.6786,
            lon: -159.1452
        }, {
            lat: 55.6567,
            lon: -155.4634
        }, {
            lat: 57.351,
            lon: -152.14
        }, {
            lat: 59.2209,
            lon: -150.8203
        }, {
            lat: 59.7695,
            lon: -147.4461
        }, {
            lat: 60.3521,
            lon: -145.985
        }, {
            lat: 59.8917,
            lon: -144.1544
        }, {
            lat: 59.8172,
            lon: -141.6811
        }, {
            lat: 59.5225,
            lon: -140.5124
        }, {
            lat: 59.0292,
            lon: -138.8548
        }, {
            lat: 57.9032,
            lon: -136.8526
        }, {
            lat: 56.9157,
            lon: -136.0725
        }, {
            lat: 56.1555,
            lon: -134.9794
        }, {
            lat: 55.3237,
            lon: -134.0057
        }, {
            lat: 54.6341,
            lon: -133.6418
        }, {
            lat: 54.7135,
            lon: -130.6261
        }, {
            lat: 55.2869,
            lon: -129.993
        }, {
            lat: 55.9869,
            lon: -130.0108
        }, {
            lat: 56.1057,
            lon: -130.1083
        }, {
            lat: 56.6086,
            lon: -131.5887
        }, {
            lat: 57.8404,
            lon: -132.8755
        }, {
            lat: 58.7276,
            lon: -133.8423
        }, {
            lat: 59.3108,
            lon: -134.9121
        }, {
            lat: 59.802,
            lon: -135.4724
        }, {
            lat: 59.6039,
            lon: -136.3445
        }, {
            lat: 59.1619,
            lon: -136.8251
        }, {
            lat: 59.2441,
            lon: -137.6079
        }, {
            lat: 60.0902,
            lon: -139.2119
        }, {
            lat: 60.3575,
            lon: -139.0938
        }, {
            lat: 60.1866,
            lon: -140.0056
        }, {
            lat: 60.3059,
            lon: -140.9999
        }, {
            lat: 70.0187,
            lon: -141.0205
        }]
    }, {
        name: "Alabama",
        points: [{
            lat: 35.0041,
            lon: -88.1955
        }, {
            lat: 34.9918,
            lon: -85.6068
        }, {
            lat: 32.8404,
            lon: -85.1756
        }, {
            lat: 32.2593,
            lon: -84.8927
        }, {
            lat: 32.1535,
            lon: -85.0342
        }, {
            lat: 31.7947,
            lon: -85.1358
        }, {
            lat: 31.52,
            lon: -85.0438
        }, {
            lat: 31.3384,
            lon: -85.0836
        }, {
            lat: 31.2093,
            lon: -85.107
        }, {
            lat: 31.0023,
            lon: -84.9944
        }, {
            lat: 30.9953,
            lon: -87.6009
        }, {
            lat: 30.9423,
            lon: -87.5926
        }, {
            lat: 30.8539,
            lon: -87.6256
        }, {
            lat: 30.6745,
            lon: -87.4072
        }, {
            lat: 30.4404,
            lon: -87.3688
        }, {
            lat: 30.1463,
            lon: -87.524
        }, {
            lat: 30.1546,
            lon: -88.3864
        }, {
            lat: 31.8939,
            lon: -88.4743
        }, {
            lat: 34.8938,
            lon: -88.1021
        }, {
            lat: 34.9479,
            lon: -88.1721
        }, {
            lat: 34.9107,
            lon: -88.1461
        }]
    }, {
        name: "Arkansas",
        points: [{
            lat: 33.0225,
            lon: -94.0416
        }, {
            lat: 33.0075,
            lon: -91.2057
        }, {
            lat: 33.118,
            lon: -91.1989
        }, {
            lat: 33.1824,
            lon: -91.1041
        }, {
            lat: 33.3053,
            lon: -91.1343
        }, {
            lat: 33.4211,
            lon: -91.1646
        }, {
            lat: 33.4337,
            lon: -91.2263
        }, {
            lat: 33.5403,
            lon: -91.2524
        }, {
            lat: 33.6112,
            lon: -91.1797
        }, {
            lat: 33.6855,
            lon: -91.2524
        }, {
            lat: 33.6946,
            lon: -91.1261
        }, {
            lat: 33.7883,
            lon: -91.1412
        }, {
            lat: 33.77,
            lon: -91.0451
        }, {
            lat: 33.8328,
            lon: -91.0341
        }, {
            lat: 33.9399,
            lon: -91.0863
        }, {
            lat: 34.0208,
            lon: -90.9256
        }, {
            lat: 34.0856,
            lon: -90.9036
        }, {
            lat: 34.1345,
            lon: -90.9586
        }, {
            lat: 34.1675,
            lon: -90.9132
        }, {
            lat: 34.138,
            lon: -90.8501
        }, {
            lat: 34.2311,
            lon: -90.9325
        }, {
            lat: 34.3446,
            lon: -90.6935
        }, {
            lat: 34.4409,
            lon: -90.5603
        }, {
            lat: 34.5348,
            lon: -90.5548
        }, {
            lat: 34.5959,
            lon: -90.5768
        }, {
            lat: 34.7213,
            lon: -90.5301
        }, {
            lat: 34.7574,
            lon: -90.5328
        }, {
            lat: 34.878,
            lon: -90.4546
        }, {
            lat: 34.8454,
            lon: -90.3529
        }, {
            lat: 34.869,
            lon: -90.2911
        }, {
            lat: 35.0255,
            lon: -90.3104
        }, {
            lat: 35.1154,
            lon: -90.2843
        }, {
            lat: 35.1323,
            lon: -90.1772
        }, {
            lat: 35.1985,
            lon: -90.1112
        }, {
            lat: 35.2826,
            lon: -90.1524
        }, {
            lat: 35.4383,
            lon: -90.1332
        }, {
            lat: 35.5579,
            lon: -90.0206
        }, {
            lat: 35.674,
            lon: -89.978
        }, {
            lat: 35.7287,
            lon: -89.9547
        }, {
            lat: 35.9169,
            lon: -89.6594
        }, {
            lat: 35.9658,
            lon: -89.6883
        }, {
            lat: 36.0013,
            lon: -89.713
        }, {
            lat: 35.9958,
            lon: -90.3735
        }, {
            lat: 36.1268,
            lon: -90.2664
        }, {
            lat: 36.2875,
            lon: -90.0934
        }, {
            lat: 36.3892,
            lon: -90.0742
        }, {
            lat: 36.418,
            lon: -90.1511
        }, {
            lat: 36.4997,
            lon: -90.1566
        }, {
            lat: 36.4986,
            lon: -94.6198
        }, {
            lat: 35.3801,
            lon: -94.4412
        }, {
            lat: 33.6318,
            lon: -94.4893
        }, {
            lat: 33.6421,
            lon: -94.4522
        }, {
            lat: 33.5597,
            lon: -94.4
        }, {
            lat: 33.5883,
            lon: -94.2462
        }, {
            lat: 33.5872,
            lon: -94.1885
        }, {
            lat: 33.5345,
            lon: -94.0375
        }, {
            lat: 33.4314,
            lon: -94.043
        }, {
            lat: 33.0213,
            lon: -94.043
        }]
    }, {
        name: "Arizona",
        points: [{
            lat: 36.9993,
            lon: -112.5989
        }, {
            lat: 37.0004,
            lon: -110.863
        }, {
            lat: 37.0004,
            lon: -109.0475
        }, {
            lat: 31.3325,
            lon: -109.0503
        }, {
            lat: 31.3325,
            lon: -111.0718
        }, {
            lat: 32.4935,
            lon: -114.8126
        }, {
            lat: 32.5184,
            lon: -114.8099
        }, {
            lat: 32.5827,
            lon: -114.8044
        }, {
            lat: 32.6246,
            lon: -114.7992
        }, {
            lat: 32.67,
            lon: -114.7474
        }, {
            lat: 32.7457,
            lon: -114.7014
        }, {
            lat: 32.7342,
            lon: -114.6176
        }, {
            lat: 32.7422,
            lon: -114.5819
        }, {
            lat: 32.7584,
            lon: -114.5393
        }, {
            lat: 32.8167,
            lon: -114.5095
        }, {
            lat: 32.845,
            lon: -114.4696
        }, {
            lat: 32.9107,
            lon: -114.4817
        }, {
            lat: 32.9741,
            lon: -114.4803
        }, {
            lat: 33.0317,
            lon: -114.5256
        }, {
            lat: 33.0259,
            lon: -114.6094
        }, {
            lat: 33.0317,
            lon: -114.6588
        }, {
            lat: 33.0904,
            lon: -114.7096
        }, {
            lat: 33.2065,
            lon: -114.6849
        }, {
            lat: 33.2846,
            lon: -114.722
        }, {
            lat: 33.3546,
            lon: -114.6973
        }, {
            lat: 33.4051,
            lon: -114.7258
        }, {
            lat: 33.412,
            lon: -114.6533
        }, {
            lat: 33.5016,
            lon: -114.5888
        }, {
            lat: 33.5317,
            lon: -114.5599
        }, {
            lat: 33.6306,
            lon: -114.5187
        }, {
            lat: 33.6786,
            lon: -114.5297
        }, {
            lat: 33.7083,
            lon: -114.494
        }, {
            lat: 33.7609,
            lon: -114.5036
        }, {
            lat: 33.8157,
            lon: -114.5284
        }, {
            lat: 33.8545,
            lon: -114.5325
        }, {
            lat: 33.9285,
            lon: -114.538
        }, {
            lat: 33.953,
            lon: -114.5235
        }, {
            lat: 34.0049,
            lon: -114.4748
        }, {
            lat: 34.0299,
            lon: -114.4308
        }, {
            lat: 34.0891,
            lon: -114.4363
        }, {
            lat: 34.1357,
            lon: -114.3526
        }, {
            lat: 34.172,
            lon: -114.2908
        }, {
            lat: 34.2044,
            lon: -114.2255
        }, {
            lat: 34.2595,
            lon: -114.1685
        }, {
            lat: 34.2572,
            lon: -114.1301
        }, {
            lat: 34.3037,
            lon: -114.1397
        }, {
            lat: 34.3664,
            lon: -114.2276
        }, {
            lat: 34.4012,
            lon: -114.2633
        }, {
            lat: 34.4534,
            lon: -114.3388
        }, {
            lat: 34.493,
            lon: -114.3608
        }, {
            lat: 34.5292,
            lon: -114.3811
        }, {
            lat: 34.5959,
            lon: -114.4377
        }, {
            lat: 34.6547,
            lon: -114.4569
        }, {
            lat: 34.7506,
            lon: -114.5297
        }, {
            lat: 34.8172,
            lon: -114.5847
        }, {
            lat: 34.8724,
            lon: -114.6341
        }, {
            lat: 34.949,
            lon: -114.6313
        }, {
            lat: 35.0342,
            lon: -114.6351
        }, {
            lat: 35.1019,
            lon: -114.6451
        }, {
            lat: 35.1233,
            lon: -114.619
        }, {
            lat: 35.1716,
            lon: -114.5682
        }, {
            lat: 35.3364,
            lon: -114.5984
        }, {
            lat: 35.4506,
            lon: -114.6643
        }, {
            lat: 35.578,
            lon: -114.6753
        }, {
            lat: 35.6171,
            lon: -114.6547
        }, {
            lat: 35.6528,
            lon: -114.6918
        }, {
            lat: 35.7053,
            lon: -114.7028
        }, {
            lat: 35.805,
            lon: -114.7093
        }, {
            lat: 35.8679,
            lon: -114.6602
        }, {
            lat: 35.9836,
            lon: -114.7426
        }, {
            lat: 36.0891,
            lon: -114.7536
        }, {
            lat: 36.1124,
            lon: -114.6794
        }, {
            lat: 36.1423,
            lon: -114.6327
        }, {
            lat: 36.1301,
            lon: -114.4872
        }, {
            lat: 36.1445,
            lon: -114.369
        }, {
            lat: 36.0746,
            lon: -114.3038
        }, {
            lat: 36.0602,
            lon: -114.3172
        }, {
            lat: 36.0163,
            lon: -114.2451
        }, {
            lat: 36.0402,
            lon: -114.1438
        }, {
            lat: 36.0979,
            lon: -114.115
        }, {
            lat: 36.1101,
            lon: -114.1274
        }, {
            lat: 36.119,
            lon: -114.1054
        }, {
            lat: 36.1989,
            lon: -114.0463
        }, {
            lat: 36.3638,
            lon: -114.045
        }, {
            lat: 37.0001,
            lon: -114.0508
        }]
    }, {
        name: "California",
        points: [{
            lat: 41.9983,
            lon: -124.4009
        }, {
            lat: 42.0024,
            lon: -123.6237
        }, {
            lat: 42.0126,
            lon: -123.1526
        }, {
            lat: 42.0075,
            lon: -122.0073
        }, {
            lat: 41.9962,
            lon: -121.2369
        }, {
            lat: 41.9983,
            lon: -119.9982
        }, {
            lat: 39.0021,
            lon: -120.0037
        }, {
            lat: 37.5555,
            lon: -117.9575
        }, {
            lat: 36.3594,
            lon: -116.3699
        }, {
            lat: 35.0075,
            lon: -114.6368
        }, {
            lat: 34.9659,
            lon: -114.6382
        }, {
            lat: 34.9107,
            lon: -114.6286
        }, {
            lat: 34.8758,
            lon: -114.6382
        }, {
            lat: 34.8454,
            lon: -114.597
        }, {
            lat: 34.789,
            lon: -114.5682
        }, {
            lat: 34.7269,
            lon: -114.4968
        }, {
            lat: 34.6648,
            lon: -114.4501
        }, {
            lat: 34.6581,
            lon: -114.4597
        }, {
            lat: 34.5869,
            lon: -114.4322
        }, {
            lat: 34.5235,
            lon: -114.3787
        }, {
            lat: 34.4601,
            lon: -114.3869
        }, {
            lat: 34.45,
            lon: -114.3361
        }, {
            lat: 34.4375,
            lon: -114.3031
        }, {
            lat: 34.4024,
            lon: -114.2674
        }, {
            lat: 34.3559,
            lon: -114.1864
        }, {
            lat: 34.3049,
            lon: -114.1383
        }, {
            lat: 34.2561,
            lon: -114.1315
        }, {
            lat: 34.2595,
            lon: -114.1651
        }, {
            lat: 34.2044,
            lon: -114.2249
        }, {
            lat: 34.1914,
            lon: -114.2221
        }, {
            lat: 34.172,
            lon: -114.2908
        }, {
            lat: 34.1368,
            lon: -114.3237
        }, {
            lat: 34.1186,
            lon: -114.3622
        }, {
            lat: 34.1118,
            lon: -114.4089
        }, {
            lat: 34.0856,
            lon: -114.4363
        }, {
            lat: 34.0276,
            lon: -114.4336
        }, {
            lat: 34.0117,
            lon: -114.4652
        }, {
            lat: 33.9582,
            lon: -114.5119
        }, {
            lat: 33.9308,
            lon: -114.5366
        }, {
            lat: 33.9058,
            lon: -114.5091
        }, {
            lat: 33.8613,
            lon: -114.5256
        }, {
            lat: 33.8248,
            lon: -114.5215
        }, {
            lat: 33.7597,
            lon: -114.505
        }, {
            lat: 33.7083,
            lon: -114.494
        }, {
            lat: 33.6832,
            lon: -114.5284
        }, {
            lat: 33.6363,
            lon: -114.5242
        }, {
            lat: 33.5895,
            lon: -114.5393
        }, {
            lat: 33.5528,
            lon: -114.5242
        }, {
            lat: 33.5311,
            lon: -114.5586
        }, {
            lat: 33.507,
            lon: -114.5778
        }, {
            lat: 33.4418,
            lon: -114.6245
        }, {
            lat: 33.4142,
            lon: -114.6506
        }, {
            lat: 33.4039,
            lon: -114.7055
        }, {
            lat: 33.3546,
            lon: -114.6973
        }, {
            lat: 33.3041,
            lon: -114.7302
        }, {
            lat: 33.2858,
            lon: -114.7206
        }, {
            lat: 33.2754,
            lon: -114.6808
        }, {
            lat: 33.2582,
            lon: -114.6698
        }, {
            lat: 33.2467,
            lon: -114.6904
        }, {
            lat: 33.172,
            lon: -114.6794
        }, {
            lat: 33.0904,
            lon: -114.7083
        }, {
            lat: 33.0858,
            lon: -114.6918
        }, {
            lat: 33.0328,
            lon: -114.6629
        }, {
            lat: 33.0501,
            lon: -114.6451
        }, {
            lat: 33.0305,
            lon: -114.6286
        }, {
            lat: 33.0282,
            lon: -114.5888
        }, {
            lat: 33.0351,
            lon: -114.575
        }, {
            lat: 33.0328,
            lon: -114.5174
        }, {
            lat: 32.9718,
            lon: -114.4913
        }, {
            lat: 32.9764,
            lon: -114.4775
        }, {
            lat: 32.9372,
            lon: -114.4844
        }, {
            lat: 32.8427,
            lon: -114.4679
        }, {
            lat: 32.8161,
            lon: -114.5091
        }, {
            lat: 32.785,
            lon: -114.5311
        }, {
            lat: 32.7573,
            lon: -114.5284
        }, {
            lat: 32.7503,
            lon: -114.5641
        }, {
            lat: 32.7353,
            lon: -114.6162
        }, {
            lat: 32.748,
            lon: -114.6986
        }, {
            lat: 32.7191,
            lon: -114.722
        }, {
            lat: 32.6868,
            lon: -115.1944
        }, {
            lat: 32.5121,
            lon: -117.3395
        }, {
            lat: 32.7838,
            lon: -117.4823
        }, {
            lat: 33.0501,
            lon: -117.5977
        }, {
            lat: 33.2341,
            lon: -117.6814
        }, {
            lat: 33.4578,
            lon: -118.0591
        }, {
            lat: 33.5403,
            lon: -118.629
        }, {
            lat: 33.7928,
            lon: -118.7073
        }, {
            lat: 33.9582,
            lon: -119.3706
        }, {
            lat: 34.1925,
            lon: -120.005
        }, {
            lat: 34.2561,
            lon: -120.7164
        }, {
            lat: 34.536,
            lon: -120.9128
        }, {
            lat: 34.9749,
            lon: -120.8427
        }, {
            lat: 35.2131,
            lon: -121.1325
        }, {
            lat: 35.5255,
            lon: -121.322
        }, {
            lat: 35.9691,
            lon: -121.8013
        }, {
            lat: 36.2808,
            lon: -122.1446
        }, {
            lat: 36.7268,
            lon: -122.1721
        }, {
            lat: 37.2227,
            lon: -122.6871
        }, {
            lat: 37.7783,
            lon: -122.8903
        }, {
            lat: 37.8965,
            lon: -123.2378
        }, {
            lat: 38.3449,
            lon: -123.3202
        }, {
            lat: 38.7423,
            lon: -123.8338
        }, {
            lat: 38.9946,
            lon: -123.9793
        }, {
            lat: 39.3088,
            lon: -124.0329
        }, {
            lat: 39.7642,
            lon: -124.0823
        }, {
            lat: 40.1663,
            lon: -124.5314
        }, {
            lat: 40.4658,
            lon: -124.6509
        }, {
            lat: 41.011,
            lon: -124.3144
        }, {
            lat: 41.2386,
            lon: -124.3419
        }, {
            lat: 41.717,
            lon: -124.4545
        }, {
            lat: 41.9983,
            lon: -124.4009
        }]
    }, {
        name: "Colorado",
        points: [{
            lat: 37.0004,
            lon: -109.0448
        }, {
            lat: 36.9949,
            lon: -102.0424
        }, {
            lat: 41.0006,
            lon: -102.0534
        }, {
            lat: 40.9996,
            lon: -109.0489
        }, {
            lat: 37.0004,
            lon: -109.0448
        }]
    }, {
        name: "Connecticut",
        points: [{
            lat: 42.0498,
            lon: -73.4875
        }, {
            lat: 42.0511,
            lon: -73.4247
        }, {
            lat: 42.0371,
            lon: -72.8146
        }, {
            lat: 41.9983,
            lon: -72.8174
        }, {
            lat: 42.0044,
            lon: -72.7638
        }, {
            lat: 42.036,
            lon: -72.7563
        }, {
            lat: 42.0368,
            lon: -72.6945
        }, {
            lat: 42.0309,
            lon: -72.6086
        }, {
            lat: 42.0269,
            lon: -72.6059
        }, {
            lat: 42.0269,
            lon: -72.5784
        }, {
            lat: 42.035,
            lon: -72.5729
        }, {
            lat: 42.035,
            lon: -72.4026
        }, {
            lat: 42.0248,
            lon: -71.7984
        }, {
            lat: 41.6832,
            lon: -71.7874
        }, {
            lat: 41.4165,
            lon: -71.7984
        }, {
            lat: 41.3892,
            lon: -71.8341
        }, {
            lat: 41.3273,
            lon: -71.8526
        }, {
            lat: 41.3309,
            lon: -71.8938
        }, {
            lat: 41.3103,
            lon: -71.9302
        }, {
            lat: 41.2907,
            lon: -72.0195
        }, {
            lat: 41.2618,
            lon: -72.0827
        }, {
            lat: 41.1962,
            lon: -72.4322
        }, {
            lat: 41.0866,
            lon: -73.0007
        }, {
            lat: 41.0255,
            lon: -73.2493
        }, {
            lat: 40.9509,
            lon: -73.6132
        }, {
            lat: 40.983,
            lon: -73.6606
        }, {
            lat: 41.0338,
            lon: -73.6723
        }, {
            lat: 41.1011,
            lon: -73.7272
        }, {
            lat: 41.2153,
            lon: -73.4834
        }, {
            lat: 41.2953,
            lon: -73.5507
        }, {
            lat: 41.4906,
            lon: -73.5329
        }, {
            lat: 42.0493,
            lon: -73.4875
        }]
    }, {
        name: "Delaware",
        points: [{
            lat: 39.7188,
            lon: -75.7919
        }, {
            lat: 39.521,
            lon: -75.7837
        }, {
            lat: 38.9081,
            lon: -75.7288
        }, {
            lat: 38.5911,
            lon: -75.7068
        }, {
            lat: 38.46,
            lon: -75.6944
        }, {
            lat: 38.4482,
            lon: -74.8608
        }, {
            lat: 38.8654,
            lon: -74.8526
        }, {
            lat: 38.8451,
            lon: -75.0504
        }, {
            lat: 39.0565,
            lon: -75.1678
        }, {
            lat: 39.2525,
            lon: -75.3236
        }, {
            lat: 39.3662,
            lon: -75.461
        }, {
            lat: 39.4542,
            lon: -75.5592
        }, {
            lat: 39.4908,
            lon: -75.5578
        }, {
            lat: 39.5713,
            lon: -75.5118
        }, {
            lat: 39.6284,
            lon: -75.5557
        }, {
            lat: 39.8106,
            lon: -75.3937
        }, {
            lat: 39.8249,
            lon: -75.4692
        }, {
            lat: 39.8296,
            lon: -75.6477
        }, {
            lat: 39.7199,
            lon: -75.7906
        }]
    }, {
        name: "Florida",
        points: [{
            lat: 30.9988,
            lon: -87.605
        }, {
            lat: 30.9964,
            lon: -86.5613
        }, {
            lat: 31.0035,
            lon: -85.5313
        }, {
            lat: 31.0012,
            lon: -85.1193
        }, {
            lat: 31.0023,
            lon: -85.0012
        }, {
            lat: 30.9364,
            lon: -84.9847
        }, {
            lat: 30.8845,
            lon: -84.9367
        }, {
            lat: 30.8409,
            lon: -84.9271
        }, {
            lat: 30.7902,
            lon: -84.9257
        }, {
            lat: 30.7489,
            lon: -84.9147
        }, {
            lat: 30.6993,
            lon: -84.8611
        }, {
            lat: 30.6911,
            lon: -84.4272
        }, {
            lat: 30.6509,
            lon: -83.5991
        }, {
            lat: 30.5895,
            lon: -82.5595
        }, {
            lat: 30.5682,
            lon: -82.2134
        }, {
            lat: 30.5315,
            lon: -82.2134
        }, {
            lat: 30.3883,
            lon: -82.1997
        }, {
            lat: 30.3598,
            lon: -82.1544
        }, {
            lat: 30.3598,
            lon: -82.0638
        }, {
            lat: 30.4877,
            lon: -82.0226
        }, {
            lat: 30.6308,
            lon: -82.0473
        }, {
            lat: 30.6757,
            lon: -82.0514
        }, {
            lat: 30.7111,
            lon: -82.0377
        }, {
            lat: 30.7371,
            lon: -82.0514
        }, {
            lat: 30.7678,
            lon: -82.0102
        }, {
            lat: 30.7914,
            lon: -82.0322
        }, {
            lat: 30.7997,
            lon: -81.9717
        }, {
            lat: 30.8244,
            lon: -81.9608
        }, {
            lat: 30.8056,
            lon: -81.8893
        }, {
            lat: 30.7914,
            lon: -81.8372
        }, {
            lat: 30.7796,
            lon: -81.796
        }, {
            lat: 30.7536,
            lon: -81.6696
        }, {
            lat: 30.7289,
            lon: -81.6051
        }, {
            lat: 30.7324,
            lon: -81.5666
        }, {
            lat: 30.7229,
            lon: -81.5295
        }, {
            lat: 30.7253,
            lon: -81.4856
        }, {
            lat: 30.7111,
            lon: -81.4609
        }, {
            lat: 30.7088,
            lon: -81.4169
        }, {
            lat: 30.7064,
            lon: -81.2274
        }, {
            lat: 30.4345,
            lon: -81.2357
        }, {
            lat: 30.316,
            lon: -81.1725
        }, {
            lat: 29.7763,
            lon: -81.0379
        }, {
            lat: 28.8603,
            lon: -80.5861
        }, {
            lat: 28.4771,
            lon: -80.365
        }, {
            lat: 28.1882,
            lon: -80.3815
        }, {
            lat: 27.1789,
            lon: -79.9255
        }, {
            lat: 26.8425,
            lon: -79.8198
        }, {
            lat: 26.1394,
            lon: -79.9118
        }, {
            lat: 25.5115,
            lon: -79.9997
        }, {
            lat: 24.8802,
            lon: -80.3815
        }, {
            lat: 24.5384,
            lon: -80.8704
        }, {
            lat: 24.3959,
            lon: -81.925
        }, {
            lat: 24.4496,
            lon: -82.2066
        }, {
            lat: 24.5484,
            lon: -82.3137
        }, {
            lat: 24.6982,
            lon: -82.1997
        }, {
            lat: 25.2112,
            lon: -81.3977
        }, {
            lat: 25.6019,
            lon: -81.4622
        }, {
            lat: 25.9235,
            lon: -81.9456
        }, {
            lat: 26.3439,
            lon: -82.2876
        }, {
            lat: 26.9098,
            lon: -82.5307
        }, {
            lat: 27.3315,
            lon: -82.8342
        }, {
            lat: 27.7565,
            lon: -83.0182
        }, {
            lat: 28.0574,
            lon: -83.0017
        }, {
            lat: 28.6098,
            lon: -82.8548
        }, {
            lat: 28.9697,
            lon: -83.0264
        }, {
            lat: 29.0478,
            lon: -83.205
        }, {
            lat: 29.4157,
            lon: -83.5318
        }, {
            lat: 29.9133,
            lon: -83.9767
        }, {
            lat: 29.893,
            lon: -84.1072
        }, {
            lat: 29.694,
            lon: -84.4409
        }, {
            lat: 29.4551,
            lon: -85.0465
        }, {
            lat: 29.4946,
            lon: -85.361
        }, {
            lat: 29.7262,
            lon: -85.5807
        }, {
            lat: 30.1594,
            lon: -86.1946
        }, {
            lat: 30.2175,
            lon: -86.851
        }, {
            lat: 30.1499,
            lon: -87.5171
        }, {
            lat: 30.3006,
            lon: -87.4429
        }, {
            lat: 30.4256,
            lon: -87.375
        }, {
            lat: 30.483,
            lon: -87.3743
        }, {
            lat: 30.5658,
            lon: -87.3907
        }, {
            lat: 30.6344,
            lon: -87.4004
        }, {
            lat: 30.6763,
            lon: -87.4141
        }, {
            lat: 30.7702,
            lon: -87.5253
        }, {
            lat: 30.8527,
            lon: -87.6256
        }, {
            lat: 30.947,
            lon: -87.5912
        }, {
            lat: 30.9682,
            lon: -87.5912
        }, {
            lat: 30.9964,
            lon: -87.605
        }]
    }, {
        name: "Georgia",
        points: [{
            lat: 34.9974,
            lon: -85.6082
        }, {
            lat: 34.9906,
            lon: -84.7266
        }, {
            lat: 34.9895,
            lon: -84.158
        }, {
            lat: 34.9996,
            lon: -83.1088
        }, {
            lat: 34.9287,
            lon: -83.1418
        }, {
            lat: 34.8318,
            lon: -83.3025
        }, {
            lat: 34.7281,
            lon: -83.356
        }, {
            lat: 34.6569,
            lon: -83.308
        }, {
            lat: 34.5744,
            lon: -83.1528
        }, {
            lat: 34.4839,
            lon: -83.0072
        }, {
            lat: 34.4681,
            lon: -82.8918
        }, {
            lat: 34.4443,
            lon: -82.8589
        }, {
            lat: 34.2674,
            lon: -82.749
        }, {
            lat: 34.1254,
            lon: -82.6831
        }, {
            lat: 34.014,
            lon: -82.5952
        }, {
            lat: 33.8647,
            lon: -82.3988
        }, {
            lat: 33.7563,
            lon: -82.2505
        }, {
            lat: 33.6695,
            lon: -82.2217
        }, {
            lat: 33.5963,
            lon: -82.1558
        }, {
            lat: 33.5036,
            lon: -82.0432
        }, {
            lat: 33.3707,
            lon: -81.9484
        }, {
            lat: 33.2077,
            lon: -81.8303
        }, {
            lat: 33.1674,
            lon: -81.7795
        }, {
            lat: 33.1456,
            lon: -81.7424
        }, {
            lat: 33.0881,
            lon: -81.6078
        }, {
            lat: 33.0075,
            lon: -81.5034
        }, {
            lat: 32.9418,
            lon: -81.5089
        }, {
            lat: 32.6914,
            lon: -81.4142
        }, {
            lat: 32.5815,
            lon: -81.4087
        }, {
            lat: 32.5283,
            lon: -81.2769
        }, {
            lat: 32.4576,
            lon: -81.1945
        }, {
            lat: 32.3185,
            lon: -81.1642
        }, {
            lat: 32.2151,
            lon: -81.1436
        }, {
            lat: 32.1128,
            lon: -81.1134
        }, {
            lat: 32.0477,
            lon: -80.9225
        }, {
            lat: 32.05,
            lon: -80.696
        }, {
            lat: 31.8881,
            lon: -80.7289
        }, {
            lat: 31.4697,
            lon: -80.9665
        }, {
            lat: 30.9988,
            lon: -81.1011
        }, {
            lat: 30.7041,
            lon: -81.2288
        }, {
            lat: 30.7241,
            lon: -81.6023
        }, {
            lat: 30.7713,
            lon: -81.7657
        }, {
            lat: 30.8221,
            lon: -81.9498
        }, {
            lat: 30.756,
            lon: -82.0239
        }, {
            lat: 30.6379,
            lon: -82.0459
        }, {
            lat: 30.4866,
            lon: -82.0239
        }, {
            lat: 30.4309,
            lon: -82.0363
        }, {
            lat: 30.3575,
            lon: -82.061
        }, {
            lat: 30.3598,
            lon: -82.1585
        }, {
            lat: 30.3859,
            lon: -82.2025
        }, {
            lat: 30.4842,
            lon: -82.2148
        }, {
            lat: 30.5682,
            lon: -82.2162
        }, {
            lat: 30.6131,
            lon: -82.9688
        }, {
            lat: 30.7041,
            lon: -84.8639
        }, {
            lat: 30.7831,
            lon: -84.9257
        }, {
            lat: 30.9117,
            lon: -84.9586
        }, {
            lat: 30.9741,
            lon: -84.9985
        }, {
            lat: 31.1282,
            lon: -85.063
        }, {
            lat: 31.2116,
            lon: -85.107
        }, {
            lat: 31.5247,
            lon: -85.0493
        }, {
            lat: 31.8006,
            lon: -85.1358
        }, {
            lat: 31.9592,
            lon: -85.0919
        }, {
            lat: 32.157,
            lon: -85.0342
        }, {
            lat: 32.25,
            lon: -84.9023
        }, {
            lat: 32.3974,
            lon: -84.9628
        }, {
            lat: 32.5468,
            lon: -85.0342
        }, {
            lat: 32.6949,
            lon: -85.1001
        }, {
            lat: 32.8138,
            lon: -85.166
        }, {
            lat: 32.9833,
            lon: -85.2072
        }, {
            lat: 33.6512,
            lon: -85.3418
        }, {
            lat: 34.562,
            lon: -85.5231
        }, {
            lat: 34.9929,
            lon: -85.6068
        }]
    }, {
        name: "Hawaii",
        points: [{
            lat: 19.5158,
            lon: -154.6284
        }, {
            lat: 19.8894,
            lon: -154.8235
        }, {
            lat: 20.1849,
            lon: -155.0391
        }, {
            lat: 20.391,
            lon: -155.5952
        }, {
            lat: 20.8614,
            lon: -155.793
        }, {
            lat: 21.0948,
            lon: -156.1858
        }, {
            lat: 21.3597,
            lon: -156.6595
        }, {
            lat: 21.4748,
            lon: -157.1182
        }, {
            lat: 21.5515,
            lon: -157.5247
        }, {
            lat: 21.8832,
            lon: -157.8186
        }, {
            lat: 22.3386,
            lon: -159.218
        }, {
            lat: 22.3374,
            lon: -159.7508
        }, {
            lat: 22.1493,
            lon: -160.1422
        }, {
            lat: 21.8857,
            lon: -160.3922
        }, {
            lat: 21.6025,
            lon: -160.3249
        }, {
            lat: 21.7276,
            lon: -159.9939
        }, {
            lat: 21.6932,
            lon: -159.4295
        }, {
            lat: 21.1037,
            lon: -158.1784
        }, {
            lat: 20.8152,
            lon: -157.4629
        }, {
            lat: 20.6803,
            lon: -157.2171
        }, {
            lat: 20.3408,
            lon: -156.8285
        }, {
            lat: 20.2931,
            lon: -156.5456
        }, {
            lat: 20.1643,
            lon: -156.1418
        }, {
            lat: 19.9308,
            lon: -156.2393
        }, {
            lat: 19.2826,
            lon: -156.1432
        }, {
            lat: 18.9881,
            lon: -156.1212
        }, {
            lat: 18.71,
            lon: -155.712
        }, {
            lat: 18.8829,
            lon: -155.3673
        }, {
            lat: 19.2048,
            lon: -154.8839
        }, {
            lat: 19.5158,
            lon: -154.6271
        }]
    }, {
        name: "Iowa",
        points: [{
            lat: 40.5848,
            lon: -95.7623
        }, {
            lat: 40.5785,
            lon: -93.5445
        }, {
            lat: 40.6129,
            lon: -91.7372
        }, {
            lat: 40.5545,
            lon: -91.6768
        }, {
            lat: 40.5451,
            lon: -91.6246
        }, {
            lat: 40.3622,
            lon: -91.4365
        }, {
            lat: 40.4637,
            lon: -91.3623
        }, {
            lat: 40.5482,
            lon: -91.4021
        }, {
            lat: 40.6931,
            lon: -91.1124
        }, {
            lat: 40.8107,
            lon: -91.1028
        }, {
            lat: 40.9218,
            lon: -90.9668
        }, {
            lat: 41.1642,
            lon: -91.0121
        }, {
            lat: 41.2406,
            lon: -91.1082
        }, {
            lat: 41.4067,
            lon: -91.0451
        }, {
            lat: 41.451,
            lon: -90.7086
        }, {
            lat: 41.5178,
            lon: -90.4793
        }, {
            lat: 41.5908,
            lon: -90.3419
        }, {
            lat: 41.7457,
            lon: -90.2788
        }, {
            lat: 41.8164,
            lon: -90.2074
        }, {
            lat: 41.9023,
            lon: -90.1538
        }, {
            lat: 42.0962,
            lon: -90.1744
        }, {
            lat: 42.1441,
            lon: -90.2692
        }, {
            lat: 42.2905,
            lon: -90.4298
        }, {
            lat: 42.4093,
            lon: -90.537
        }, {
            lat: 42.5217,
            lon: -90.64
        }, {
            lat: 42.636,
            lon: -90.7127
        }, {
            lat: 42.6956,
            lon: -90.7883
        }, {
            lat: 42.7712,
            lon: -91.0533
        }, {
            lat: 42.8448,
            lon: -91.0904
        }, {
            lat: 42.9082,
            lon: -91.1398
        }, {
            lat: 43.0609,
            lon: -91.1549
        }, {
            lat: 43.1391,
            lon: -91.1522
        }, {
            lat: 43.2882,
            lon: -91.0547
        }, {
            lat: 43.3322,
            lon: -91.2057
        }, {
            lat: 43.414,
            lon: -91.2236
        }, {
            lat: 43.5008,
            lon: -91.2305
        }, {
            lat: 43.4998,
            lon: -96.5973
        }, {
            lat: 43.4818,
            lon: -96.611
        }, {
            lat: 43.3871,
            lon: -96.5245
        }, {
            lat: 43.2232,
            lon: -96.5533
        }, {
            lat: 43.1301,
            lon: -96.4421
        }, {
            lat: 42.9243,
            lon: -96.5479
        }, {
            lat: 42.7188,
            lon: -96.6357
        }, {
            lat: 42.6158,
            lon: -96.5561
        }, {
            lat: 42.5055,
            lon: -96.4847
        }, {
            lat: 42.4599,
            lon: -96.3995
        }, {
            lat: 42.3667,
            lon: -96.405
        }, {
            lat: 42.2722,
            lon: -96.3446
        }, {
            lat: 42.2051,
            lon: -96.3625
        }, {
            lat: 41.9983,
            lon: -96.2416
        }, {
            lat: 41.9513,
            lon: -96.1372
        }, {
            lat: 41.7662,
            lon: -96.0741
        }, {
            lat: 41.6267,
            lon: -96.0988
        }, {
            lat: 41.4561,
            lon: -95.9477
        }, {
            lat: 41.2819,
            lon: -95.8804
        }, {
            lat: 41.0338,
            lon: -95.8653
        }, {
            lat: 40.8346,
            lon: -95.8365
        }, {
            lat: 40.6775,
            lon: -95.8461
        }, {
            lat: 40.5837,
            lon: -95.761
        }]
    }, {
        name: "Idaho",
        points: [{
            lat: 49,
            lon: -117.0319
        }, {
            lat: 49.0018,
            lon: -116.0486
        }, {
            lat: 47.9752,
            lon: -116.0445
        }, {
            lat: 47.5765,
            lon: -115.6915
        }, {
            lat: 47.5487,
            lon: -115.7574
        }, {
            lat: 47.4239,
            lon: -115.7595
        }, {
            lat: 47.3109,
            lon: -115.535
        }, {
            lat: 47.2606,
            lon: -115.3235
        }, {
            lat: 47.1888,
            lon: -115.2878
        }, {
            lat: 47.1542,
            lon: -115.2493
        }, {
            lat: 46.9728,
            lon: -115.0433
        }, {
            lat: 46.8677,
            lon: -114.9472
        }, {
            lat: 46.7201,
            lon: -114.7865
        }, {
            lat: 46.6984,
            lon: -114.7549
        }, {
            lat: 46.6325,
            lon: -114.5874
        }, {
            lat: 46.6325,
            lon: -114.4638
        }, {
            lat: 46.6466,
            lon: -114.3279
        }, {
            lat: 46.5135,
            lon: -114.343
        }, {
            lat: 46.453,
            lon: -114.3896
        }, {
            lat: 46.3488,
            lon: -114.4144
        }, {
            lat: 46.2682,
            lon: -114.4611
        }, {
            lat: 46.1227,
            lon: -114.5105
        }, {
            lat: 45.8585,
            lon: -114.4418
        }, {
            lat: 45.7742,
            lon: -114.5654
        }, {
            lat: 45.6745,
            lon: -114.5229
        }, {
            lat: 45.5621,
            lon: -114.5654
        }, {
            lat: 45.5439,
            lon: -114.4666
        }, {
            lat: 45.4601,
            lon: -114.3375
        }, {
            lat: 45.5468,
            lon: -114.2441
        }, {
            lat: 45.5631,
            lon: -114.1342
        }, {
            lat: 45.6889,
            lon: -113.9708
        }, {
            lat: 45.6102,
            lon: -113.8403
        }, {
            lat: 45.4409,
            lon: -113.7978
        }, {
            lat: 45.272,
            lon: -113.7085
        }, {
            lat: 45.026,
            lon: -113.4256
        }, {
            lat: 44.9405,
            lon: -113.4998
        }, {
            lat: 44.7887,
            lon: -113.3459
        }, {
            lat: 44.8062,
            lon: -113.2471
        }, {
            lat: 44.735,
            lon: -113.118
        }, {
            lat: 44.4887,
            lon: -113.0246
        }, {
            lat: 44.3592,
            lon: -112.8502
        }, {
            lat: 44.4151,
            lon: -112.831
        }, {
            lat: 44.4887,
            lon: -112.7266
        }, {
            lat: 44.4504,
            lon: -112.3901
        }, {
            lat: 44.5347,
            lon: -112.327
        }, {
            lat: 44.522,
            lon: -112.1127
        }, {
            lat: 44.5582,
            lon: -111.8848
        }, {
            lat: 44.5132,
            lon: -111.8271
        }, {
            lat: 44.5396,
            lon: -111.4645
        }, {
            lat: 44.6198,
            lon: -111.5057
        }, {
            lat: 44.7292,
            lon: -111.3684
        }, {
            lat: 44.4759,
            lon: -111.0539
        }, {
            lat: 43.8623,
            lon: -111.0471
        }, {
            lat: 42.0013,
            lon: -111.0471
        }, {
            lat: 41.9962,
            lon: -112.1663
        }, {
            lat: 41.9871,
            lon: -113.8458
        }, {
            lat: 41.9942,
            lon: -114.0422
        }, {
            lat: 42.0013,
            lon: -114.8222
        }, {
            lat: 41.9973,
            lon: -115.9126
        }, {
            lat: 41.9962,
            lon: -117.014
        }, {
            lat: 42.0013,
            lon: -117.0264
        }, {
            lat: 43.782,
            lon: -117.0277
        }, {
            lat: 43.833,
            lon: -117.0325
        }, {
            lat: 43.8632,
            lon: -117.003
        }, {
            lat: 43.9073,
            lon: -116.9776
        }, {
            lat: 44.0244,
            lon: -116.9302
        }, {
            lat: 44.0491,
            lon: -116.9735
        }, {
            lat: 44.1014,
            lon: -116.933
        }, {
            lat: 44.1561,
            lon: -116.8945
        }, {
            lat: 44.1965,
            lon: -116.9714
        }, {
            lat: 44.2442,
            lon: -116.981
        }, {
            lat: 44.2486,
            lon: -117.0339
        }, {
            lat: 44.2304,
            lon: -117.0525
        }, {
            lat: 44.2585,
            lon: -117.0895
        }, {
            lat: 44.2806,
            lon: -117.1122
        }, {
            lat: 44.259,
            lon: -117.1541
        }, {
            lat: 44.2973,
            lon: -117.2255
        }, {
            lat: 44.3445,
            lon: -117.1994
        }, {
            lat: 44.3813,
            lon: -117.2372
        }, {
            lat: 44.4769,
            lon: -117.2269
        }, {
            lat: 44.5234,
            lon: -117.1836
        }, {
            lat: 44.5376,
            lon: -117.1458
        }, {
            lat: 44.7423,
            lon: -117.0442
        }, {
            lat: 44.7921,
            lon: -116.9316
        }, {
            lat: 44.8568,
            lon: -116.898
        }, {
            lat: 44.9356,
            lon: -116.8327
        }, {
            lat: 44.9624,
            lon: -116.8513
        }, {
            lat: 44.9896,
            lon: -116.8554
        }, {
            lat: 45.0313,
            lon: -116.8417
        }, {
            lat: 45.0968,
            lon: -116.7819
        }, {
            lat: 45.1627,
            lon: -116.7229
        }, {
            lat: 45.2178,
            lon: -116.7105
        }, {
            lat: 45.3213,
            lon: -116.6741
        }, {
            lat: 45.3984,
            lon: -116.6185
        }, {
            lat: 45.4433,
            lon: -116.5883
        }, {
            lat: 45.463,
            lon: -116.5553
        }, {
            lat: 45.5371,
            lon: -116.5334
        }, {
            lat: 45.614,
            lon: -116.464
        }, {
            lat: 45.6904,
            lon: -116.5354
        }, {
            lat: 45.734,
            lon: -116.5354
        }, {
            lat: 45.7541,
            lon: -116.5594
        }, {
            lat: 45.7843,
            lon: -116.6357
        }, {
            lat: 45.7781,
            lon: -116.5965
        }, {
            lat: 45.7805,
            lon: -116.6597
        }, {
            lat: 45.8259,
            lon: -116.7105
        }, {
            lat: 45.8159,
            lon: -116.7586
        }, {
            lat: 45.8341,
            lon: -116.7908
        }, {
            lat: 45.8642,
            lon: -116.8046
        }, {
            lat: 45.9053,
            lon: -116.8595
        }, {
            lat: 45.9545,
            lon: -116.8739
        }, {
            lat: 45.9769,
            lon: -116.8925
        }, {
            lat: 46.0218,
            lon: -116.9302
        }, {
            lat: 46.0932,
            lon: -116.9838
        }, {
            lat: 46.1385,
            lon: -116.9344
        }, {
            lat: 46.1727,
            lon: -116.9268
        }, {
            lat: 46.2007,
            lon: -116.9646
        }, {
            lat: 46.2435,
            lon: -116.9591
        }, {
            lat: 46.2782,
            lon: -116.992
        }, {
            lat: 46.3152,
            lon: -117.0209
        }, {
            lat: 46.3446,
            lon: -117.0511
        }, {
            lat: 46.427,
            lon: -117.0408
        }, {
            lat: 46.9451,
            lon: -117.0394
        }, {
            lat: 48.9996,
            lon: -117.0319
        }]
    }, {
        name: "Illinois",
        points: [{
            lat: 42.5116,
            lon: -90.629
        }, {
            lat: 42.4924,
            lon: -87.0213
        }, {
            lat: 41.7641,
            lon: -87.2067
        }, {
            lat: 41.7611,
            lon: -87.5226
        }, {
            lat: 39.6417,
            lon: -87.5336
        }, {
            lat: 39.3566,
            lon: -87.5308
        }, {
            lat: 39.1386,
            lon: -87.6517
        }, {
            lat: 38.9445,
            lon: -87.5157
        }, {
            lat: 38.7294,
            lon: -87.5047
        }, {
            lat: 38.6115,
            lon: -87.6146
        }, {
            lat: 38.4944,
            lon: -87.6544
        }, {
            lat: 38.374,
            lon: -87.778
        }, {
            lat: 38.2856,
            lon: -87.8371
        }, {
            lat: 38.2414,
            lon: -87.9758
        }, {
            lat: 38.1454,
            lon: -87.9291
        }, {
            lat: 37.9788,
            lon: -88.0225
        }, {
            lat: 37.89,
            lon: -88.0458
        }, {
            lat: 37.7881,
            lon: -88.0321
        }, {
            lat: 37.6349,
            lon: -88.1529
        }, {
            lat: 37.5097,
            lon: -88.0609
        }, {
            lat: 37.4149,
            lon: -88.4152
        }, {
            lat: 37.2828,
            lon: -88.5086
        }, {
            lat: 37.1428,
            lon: -88.4221
        }, {
            lat: 37.0585,
            lon: -88.499
        }, {
            lat: 37.1428,
            lon: -88.7256
        }, {
            lat: 37.2128,
            lon: -88.9453
        }, {
            lat: 37.1559,
            lon: -89.0689
        }, {
            lat: 37.0376,
            lon: -89.165
        }, {
            lat: 36.9894,
            lon: -89.2873
        }, {
            lat: 37.1505,
            lon: -89.4356
        }, {
            lat: 37.2762,
            lon: -89.5345
        }, {
            lat: 37.3996,
            lon: -89.4315
        }, {
            lat: 37.6936,
            lon: -89.5358
        }, {
            lat: 37.9767,
            lon: -89.967
        }, {
            lat: 38.2587,
            lon: -90.379
        }, {
            lat: 38.6169,
            lon: -90.2376
        }, {
            lat: 38.7573,
            lon: -90.1744
        }, {
            lat: 38.8247,
            lon: -90.1167
        }, {
            lat: 38.8846,
            lon: -90.1799
        }, {
            lat: 38.968,
            lon: -90.4504
        }, {
            lat: 38.8654,
            lon: -90.5905
        }, {
            lat: 39.0405,
            lon: -90.7086
        }, {
            lat: 39.2301,
            lon: -90.7306
        }, {
            lat: 39.3173,
            lon: -90.835
        }, {
            lat: 39.3853,
            lon: -90.9338
        }, {
            lat: 39.5559,
            lon: -91.1398
        }, {
            lat: 39.7262,
            lon: -91.3554
        }, {
            lat: 39.857,
            lon: -91.4406
        }, {
            lat: 39.994,
            lon: -91.4941
        }, {
            lat: 40.1694,
            lon: -91.512
        }, {
            lat: 40.3497,
            lon: -91.4667
        }, {
            lat: 40.4166,
            lon: -91.3939
        }, {
            lat: 40.5566,
            lon: -91.4021
        }, {
            lat: 40.6265,
            lon: -91.2524
        }, {
            lat: 40.6963,
            lon: -91.1151
        }, {
            lat: 40.8232,
            lon: -91.089
        }, {
            lat: 40.9312,
            lon: -90.9792
        }, {
            lat: 41.1642,
            lon: -91.0162
        }, {
            lat: 41.2355,
            lon: -91.1055
        }, {
            lat: 41.417,
            lon: -91.0368
        }, {
            lat: 41.4458,
            lon: -90.8487
        }, {
            lat: 41.4417,
            lon: -90.7251
        }, {
            lat: 41.5816,
            lon: -90.3516
        }, {
            lat: 41.7713,
            lon: -90.2637
        }, {
            lat: 41.9023,
            lon: -90.1538
        }, {
            lat: 42.0819,
            lon: -90.1758
        }, {
            lat: 42.2021,
            lon: -90.3598
        }, {
            lat: 42.2936,
            lon: -90.4395
        }, {
            lat: 42.4032,
            lon: -90.5356
        }, {
            lat: 42.4843,
            lon: -90.6564
        }]
    }, {
        name: "Indiana",
        points: [{
            lat: 41.7611,
            lon: -87.5253
        }, {
            lat: 41.7611,
            lon: -84.809
        }, {
            lat: 39.0981,
            lon: -84.8199
        }, {
            lat: 39.0533,
            lon: -84.8927
        }, {
            lat: 38.8996,
            lon: -84.8625
        }, {
            lat: 38.8312,
            lon: -84.8268
        }, {
            lat: 38.7841,
            lon: -84.8145
        }, {
            lat: 38.7905,
            lon: -84.8941
        }, {
            lat: 38.7809,
            lon: -84.9861
        }, {
            lat: 38.6877,
            lon: -85.1797
        }, {
            lat: 38.7198,
            lon: -85.442
        }, {
            lat: 38.5653,
            lon: -85.4091
        }, {
            lat: 38.4461,
            lon: -85.5986
        }, {
            lat: 38.2695,
            lon: -85.751
        }, {
            lat: 38.2824,
            lon: -85.8266
        }, {
            lat: 38.2414,
            lon: -85.8376
        }, {
            lat: 38.0967,
            lon: -85.9035
        }, {
            lat: 38.0232,
            lon: -85.92
        }, {
            lat: 37.9594,
            lon: -86.0477
        }, {
            lat: 38.0102,
            lon: -86.0944
        }, {
            lat: 38.0578,
            lon: -86.2729
        }, {
            lat: 38.0935,
            lon: -86.2811
        }, {
            lat: 38.1346,
            lon: -86.2729
        }, {
            lat: 38.1842,
            lon: -86.3704
        }, {
            lat: 38.0416,
            lon: -86.5187
        }, {
            lat: 37.9193,
            lon: -86.5874
        }, {
            lat: 37.8402,
            lon: -86.6409
        }, {
            lat: 37.9085,
            lon: -86.6478
        }, {
            lat: 37.9085,
            lon: -86.6876
        }, {
            lat: 37.9821,
            lon: -86.8236
        }, {
            lat: 37.9464,
            lon: -86.9019
        }, {
            lat: 37.9009,
            lon: -87.0392
        }, {
            lat: 37.7924,
            lon: -87.1394
        }, {
            lat: 37.9464,
            lon: -87.4429
        }, {
            lat: 37.9756,
            lon: -87.5885
        }, {
            lat: 37.9225,
            lon: -87.6283
        }, {
            lat: 37.8694,
            lon: -87.6915
        }, {
            lat: 37.9236,
            lon: -87.8879
        }, {
            lat: 37.7718,
            lon: -87.962
        }, {
            lat: 37.787,
            lon: -88.0321
        }, {
            lat: 37.8092,
            lon: -88.0376
        }, {
            lat: 37.8011,
            lon: -88.0643
        }, {
            lat: 37.8206,
            lon: -88.0925
        }, {
            lat: 37.8223,
            lon: -88.0451
        }, {
            lat: 37.8483,
            lon: -88.0575
        }, {
            lat: 37.9041,
            lon: -88.098
        }, {
            lat: 37.9307,
            lon: -88.0705
        }, {
            lat: 37.9561,
            lon: -88.0369
        }, {
            lat: 37.9669,
            lon: -88.0122
        }, {
            lat: 38.0102,
            lon: -88.0259
        }, {
            lat: 38.0384,
            lon: -88.0417
        }, {
            lat: 38.053,
            lon: -88.0005
        }, {
            lat: 38.0762,
            lon: -87.9607
        }, {
            lat: 38.1,
            lon: -88.0163
        }, {
            lat: 38.1313,
            lon: -87.971
        }, {
            lat: 38.1497,
            lon: -87.9284
        }, {
            lat: 38.1734,
            lon: -87.9387
        }, {
            lat: 38.1939,
            lon: -87.973
        }, {
            lat: 38.2349,
            lon: -87.9813
        }, {
            lat: 38.2608,
            lon: -87.9421
        }, {
            lat: 38.2759,
            lon: -87.8604
        }, {
            lat: 38.3029,
            lon: -87.8302
        }, {
            lat: 38.3233,
            lon: -87.835
        }, {
            lat: 38.3567,
            lon: -87.8137
        }, {
            lat: 38.3767,
            lon: -87.7739
        }, {
            lat: 38.4116,
            lon: -87.7444
        }, {
            lat: 38.5149,
            lon: -87.6448
        }, {
            lat: 38.546,
            lon: -87.6723
        }, {
            lat: 38.5949,
            lon: -87.6105
        }, {
            lat: 38.5986,
            lon: -87.6242
        }, {
            lat: 38.6828,
            lon: -87.5343
        }, {
            lat: 38.7284,
            lon: -87.5075
        }, {
            lat: 38.7696,
            lon: -87.4972
        }, {
            lat: 38.8247,
            lon: -87.5322
        }, {
            lat: 38.9039,
            lon: -87.5171
        }, {
            lat: 38.9413,
            lon: -87.5253
        }, {
            lat: 38.9712,
            lon: -87.5281
        }, {
            lat: 38.9872,
            lon: -87.5761
        }, {
            lat: 39.0906,
            lon: -87.6228
        }, {
            lat: 39.1066,
            lon: -87.6517
        }, {
            lat: 39.1365,
            lon: -87.6599
        }, {
            lat: 39.1695,
            lon: -87.6366
        }, {
            lat: 39.2493,
            lon: -87.5899
        }, {
            lat: 39.3492,
            lon: -87.5336
        }, {
            lat: 41.76,
            lon: -87.5253
        }]
    }, {
        name: "Kansas",
        points: [{
            lat: 40.0034,
            lon: -102.0506
        }, {
            lat: 40.0034,
            lon: -102.0506
        }, {
            lat: 36.9927,
            lon: -102.0438
        }, {
            lat: 36.9982,
            lon: -94.6211
        }, {
            lat: 38.8803,
            lon: -94.6046
        }, {
            lat: 39.0789,
            lon: -94.6143
        }, {
            lat: 39.1971,
            lon: -94.6184
        }, {
            lat: 39.1673,
            lon: -94.7255
        }, {
            lat: 39.2759,
            lon: -94.8793
        }, {
            lat: 39.5612,
            lon: -95.099
        }, {
            lat: 39.7283,
            lon: -94.8807
        }, {
            lat: 39.8286,
            lon: -94.893
        }, {
            lat: 39.8823,
            lon: -94.9342
        }, {
            lat: 39.8971,
            lon: -95.0098
        }, {
            lat: 39.876,
            lon: -95.0922
        }, {
            lat: 39.9445,
            lon: -95.2213
        }, {
            lat: 40.0087,
            lon: -95.3036
        }, {
            lat: 40.0024,
            lon: -102.0506
        }]
    }, {
        name: "Kentucky",
        points: [{
            lat: 36.4986,
            lon: -89.5372
        }, {
            lat: 36.5074,
            lon: -89.301
        }, {
            lat: 36.5008,
            lon: -88.6871
        }, {
            lat: 36.4931,
            lon: -88.0568
        }, {
            lat: 36.6695,
            lon: -88.0692
        }, {
            lat: 36.6343,
            lon: -87.8535
        }, {
            lat: 36.6265,
            lon: -86.5654
        }, {
            lat: 36.5979,
            lon: -83.6375
        }, {
            lat: 36.686,
            lon: -83.3423
        }, {
            lat: 36.7466,
            lon: -83.1377
        }, {
            lat: 36.9762,
            lon: -82.8589
        }, {
            lat: 37.2894,
            lon: -82.3192
        }, {
            lat: 37.4934,
            lon: -82.0308
        }, {
            lat: 37.6653,
            lon: -82.2121
        }, {
            lat: 37.8618,
            lon: -82.4016
        }, {
            lat: 37.9908,
            lon: -82.5073
        }, {
            lat: 38.1778,
            lon: -82.6392
        }, {
            lat: 38.3761,
            lon: -82.5952
        }, {
            lat: 38.503,
            lon: -82.7477
        }, {
            lat: 38.5825,
            lon: -82.8369
        }, {
            lat: 38.7316,
            lon: -82.9015
        }, {
            lat: 38.7027,
            lon: -83.0196
        }, {
            lat: 38.619,
            lon: -83.1418
        }, {
            lat: 38.5986,
            lon: -83.2819
        }, {
            lat: 38.6941,
            lon: -83.5291
        }, {
            lat: 38.6351,
            lon: -83.6595
        }, {
            lat: 38.7487,
            lon: -83.893
        }, {
            lat: 38.7701,
            lon: -84.044
        }, {
            lat: 38.8119,
            lon: -84.2184
        }, {
            lat: 38.9872,
            lon: -84.3228
        }, {
            lat: 39.1013,
            lon: -84.4917
        }, {
            lat: 39.1183,
            lon: -84.6277
        }, {
            lat: 39.1439,
            lon: -84.7554
        }, {
            lat: 39.0523,
            lon: -84.8914
        }, {
            lat: 38.9263,
            lon: -84.8735
        }, {
            lat: 38.7894,
            lon: -84.8131
        }, {
            lat: 38.7691,
            lon: -84.9957
        }, {
            lat: 38.6866,
            lon: -85.1921
        }, {
            lat: 38.7209,
            lon: -85.4407
        }, {
            lat: 38.5653,
            lon: -85.4077
        }, {
            lat: 38.4461,
            lon: -85.5972
        }, {
            lat: 38.2748,
            lon: -85.7455
        }, {
            lat: 38.2716,
            lon: -85.8087
        }, {
            lat: 38.2069,
            lon: -85.865
        }, {
            lat: 38.0286,
            lon: -85.9323
        }, {
            lat: 37.955,
            lon: -86.0422
        }, {
            lat: 38.0135,
            lon: -86.1108
        }, {
            lat: 38.0643,
            lon: -86.2756
        }, {
            lat: 38.1389,
            lon: -86.277
        }, {
            lat: 38.1864,
            lon: -86.369
        }, {
            lat: 38.0308,
            lon: -86.5283
        }, {
            lat: 37.9204,
            lon: -86.5874
        }, {
            lat: 37.8423,
            lon: -86.6423
        }, {
            lat: 37.9041,
            lon: -86.6547
        }, {
            lat: 37.9864,
            lon: -86.825
        }, {
            lat: 37.9095,
            lon: -87.0406
        }, {
            lat: 37.7935,
            lon: -87.1381
        }, {
            lat: 37.942,
            lon: -87.4168
        }, {
            lat: 37.9745,
            lon: -87.5858
        }, {
            lat: 37.8749,
            lon: -87.6929
        }, {
            lat: 37.9215,
            lon: -87.8906
        }, {
            lat: 37.7761,
            lon: -87.9552
        }, {
            lat: 37.7903,
            lon: -88.0307
        }, {
            lat: 37.6479,
            lon: -88.1584
        }, {
            lat: 37.5097,
            lon: -88.0664
        }, {
            lat: 37.4193,
            lon: -88.418
        }, {
            lat: 37.2784,
            lon: -88.5086
        }, {
            lat: 37.1428,
            lon: -88.4248
        }, {
            lat: 37.0738,
            lon: -88.5059
        }, {
            lat: 37.1461,
            lon: -88.7421
        }, {
            lat: 37.2249,
            lon: -88.9522
        }, {
            lat: 37.1406,
            lon: -89.0964
        }, {
            lat: 37.0278,
            lon: -89.1815
        }, {
            lat: 36.9488,
            lon: -89.1032
        }, {
            lat: 36.8214,
            lon: -89.1733
        }, {
            lat: 36.7411,
            lon: -89.1925
        }, {
            lat: 36.6265,
            lon: -89.2007
        }, {
            lat: 36.5449,
            lon: -89.2529
        }, {
            lat: 36.6232,
            lon: -89.3518
        }, {
            lat: 36.4986,
            lon: -89.5345
        }]
    }, {
        name: "Louisiana",
        points: [{
            lat: 33.0225,
            lon: -94.043
        }, {
            lat: 33.0179,
            lon: -93.0048
        }, {
            lat: 33.0087,
            lon: -91.1646
        }, {
            lat: 32.9269,
            lon: -91.2209
        }, {
            lat: 32.8773,
            lon: -91.122
        }, {
            lat: 32.8358,
            lon: -91.1481
        }, {
            lat: 32.7642,
            lon: -91.1412
        }, {
            lat: 32.6382,
            lon: -91.1536
        }, {
            lat: 32.5804,
            lon: -91.1069
        }, {
            lat: 32.6093,
            lon: -91.008
        }, {
            lat: 32.4588,
            lon: -91.0904
        }, {
            lat: 32.4379,
            lon: -91.0355
        }, {
            lat: 32.3742,
            lon: -91.0286
        }, {
            lat: 32.315,
            lon: -90.9064
        }, {
            lat: 32.2616,
            lon: -90.9723
        }, {
            lat: 32.1942,
            lon: -91.0464
        }, {
            lat: 32.1198,
            lon: -91.0739
        }, {
            lat: 32.0593,
            lon: -91.0464
        }, {
            lat: 31.9918,
            lon: -91.1014
        }, {
            lat: 31.9498,
            lon: -91.1865
        }, {
            lat: 31.8262,
            lon: -91.3101
        }, {
            lat: 31.7947,
            lon: -91.3527
        }, {
            lat: 31.623,
            lon: -91.3925
        }, {
            lat: 31.6218,
            lon: -91.5134
        }, {
            lat: 31.5668,
            lon: -91.431
        }, {
            lat: 31.513,
            lon: -91.5161
        }, {
            lat: 31.3701,
            lon: -91.5244
        }, {
            lat: 31.2598,
            lon: -91.5477
        }, {
            lat: 31.2692,
            lon: -91.6425
        }, {
            lat: 31.2328,
            lon: -91.6603
        }, {
            lat: 31.1917,
            lon: -91.5848
        }, {
            lat: 31.1047,
            lon: -91.6287
        }, {
            lat: 31.0318,
            lon: -91.5614
        }, {
            lat: 30.9988,
            lon: -91.6397
        }, {
            lat: 31.0012,
            lon: -89.7336
        }, {
            lat: 30.6686,
            lon: -89.8517
        }, {
            lat: 30.5386,
            lon: -89.7858
        }, {
            lat: 30.3148,
            lon: -89.6347
        }, {
            lat: 30.1807,
            lon: -89.5688
        }, {
            lat: 30.1582,
            lon: -89.496
        }, {
            lat: 30.214,
            lon: -89.1843
        }, {
            lat: 30.1463,
            lon: -89.0373
        }, {
            lat: 30.0905,
            lon: -88.8354
        }, {
            lat: 29.8383,
            lon: -88.7421
        }, {
            lat: 29.5758,
            lon: -88.8712
        }, {
            lat: 29.1833,
            lon: -88.9371
        }, {
            lat: 28.9649,
            lon: -89.0359
        }, {
            lat: 28.8832,
            lon: -89.2282
        }, {
            lat: 28.9048,
            lon: -89.4754
        }, {
            lat: 29.121,
            lon: -89.7418
        }, {
            lat: 28.9529,
            lon: -90.1126
        }, {
            lat: 28.912,
            lon: -90.6619
        }, {
            lat: 28.9553,
            lon: -91.0355
        }, {
            lat: 29.121,
            lon: -91.3211
        }, {
            lat: 29.2864,
            lon: -91.9061
        }, {
            lat: 29.436,
            lon: -92.7452
        }, {
            lat: 29.6009,
            lon: -93.8177
        }, {
            lat: 29.6749,
            lon: -93.8631
        }, {
            lat: 29.737,
            lon: -93.8933
        }, {
            lat: 29.793,
            lon: -93.9304
        }, {
            lat: 29.8216,
            lon: -93.9276
        }, {
            lat: 29.8883,
            lon: -93.837
        }, {
            lat: 29.9811,
            lon: -93.7985
        }, {
            lat: 30.0144,
            lon: -93.7601
        }, {
            lat: 30.0691,
            lon: -93.7106
        }, {
            lat: 30.0929,
            lon: -93.7354
        }, {
            lat: 30.1166,
            lon: -93.6996
        }, {
            lat: 30.1997,
            lon: -93.7271
        }, {
            lat: 30.2899,
            lon: -93.7106
        }, {
            lat: 30.335,
            lon: -93.7656
        }, {
            lat: 30.3871,
            lon: -93.7601
        }, {
            lat: 30.4416,
            lon: -93.6914
        }, {
            lat: 30.5102,
            lon: -93.7106
        }, {
            lat: 30.5433,
            lon: -93.7463
        }, {
            lat: 30.5954,
            lon: -93.7106
        }, {
            lat: 30.5906,
            lon: -93.6914
        }, {
            lat: 30.6545,
            lon: -93.6859
        }, {
            lat: 30.6781,
            lon: -93.6365
        }, {
            lat: 30.7513,
            lon: -93.62
        }, {
            lat: 30.789,
            lon: -93.5925
        }, {
            lat: 30.815,
            lon: -93.5513
        }, {
            lat: 30.8645,
            lon: -93.5623
        }, {
            lat: 30.8881,
            lon: -93.5788
        }, {
            lat: 30.9187,
            lon: -93.5541
        }, {
            lat: 30.9423,
            lon: -93.5294
        }, {
            lat: 31.0082,
            lon: -93.576
        }, {
            lat: 31.0318,
            lon: -93.5101
        }, {
            lat: 31.0906,
            lon: -93.5596
        }, {
            lat: 31.1211,
            lon: -93.5321
        }, {
            lat: 31.1799,
            lon: -93.5349
        }, {
            lat: 31.1658,
            lon: -93.5953
        }, {
            lat: 31.2292,
            lon: -93.6282
        }, {
            lat: 31.2668,
            lon: -93.6118
        }, {
            lat: 31.3044,
            lon: -93.6859
        }, {
            lat: 31.3888,
            lon: -93.6694
        }, {
            lat: 31.424,
            lon: -93.7051
        }, {
            lat: 31.4427,
            lon: -93.6859
        }, {
            lat: 31.4755,
            lon: -93.7573
        }, {
            lat: 31.5083,
            lon: -93.7189
        }, {
            lat: 31.5411,
            lon: -93.804
        }, {
            lat: 31.6113,
            lon: -93.8425
        }, {
            lat: 31.6581,
            lon: -93.8205
        }, {
            lat: 31.7071,
            lon: -93.7985
        }, {
            lat: 31.8029,
            lon: -93.848
        }, {
            lat: 31.8892,
            lon: -93.9029
        }, {
            lat: 31.9149,
            lon: -93.9606
        }, {
            lat: 32.0081,
            lon: -94.043
        }, {
            lat: 32.7041,
            lon: -94.043
        }, {
            lat: 33.0225,
            lon: -94.043
        }]
    }, {
        name: "Massachusetts",
        points: [{
            lat: 42.0003,
            lon: -72.7789
        }, {
            lat: 42.033,
            lon: -72.7405
        }, {
            lat: 42.033,
            lon: -72.3779
        }, {
            lat: 42.0228,
            lon: -71.7984
        }, {
            lat: 42.0085,
            lon: -71.8011
        }, {
            lat: 42.0197,
            lon: -71.385
        }, {
            lat: 41.8961,
            lon: -71.3837
        }, {
            lat: 41.8982,
            lon: -71.3411
        }, {
            lat: 41.8358,
            lon: -71.337
        }, {
            lat: 41.8245,
            lon: -71.3493
        }, {
            lat: 41.7816,
            lon: -71.3342
        }, {
            lat: 41.7529,
            lon: -71.2628
        }, {
            lat: 41.6719,
            lon: -71.1914
        }, {
            lat: 41.6616,
            lon: -71.1351
        }, {
            lat: 41.6124,
            lon: -71.1433
        }, {
            lat: 41.5939,
            lon: -71.131
        }, {
            lat: 41.4973,
            lon: -71.1214
        }, {
            lat: 41.3149,
            lon: -71.0266
        }, {
            lat: 41.159,
            lon: -70.8316
        }, {
            lat: 41.1662,
            lon: -69.9225
        }, {
            lat: 41.3201,
            lon: -69.7948
        }, {
            lat: 41.8133,
            lon: -69.7398
        }, {
            lat: 42.1939,
            lon: -70.0337
        }, {
            lat: 42.2173,
            lon: -70.5144
        }, {
            lat: 42.4133,
            lon: -70.6984
        }, {
            lat: 42.642,
            lon: -70.3647
        }, {
            lat: 42.8286,
            lon: -70.4759
        }, {
            lat: 42.876,
            lon: -70.6133
        }, {
            lat: 42.8619,
            lon: -70.844
        }, {
            lat: 42.889,
            lon: -70.9154
        }, {
            lat: 42.8075,
            lon: -71.0651
        }, {
            lat: 42.8226,
            lon: -71.1337
        }, {
            lat: 42.7873,
            lon: -71.1859
        }, {
            lat: 42.7369,
            lon: -71.1832
        }, {
            lat: 42.747,
            lon: -71.2189
        }, {
            lat: 42.74,
            lon: -71.256
        }, {
            lat: 42.6986,
            lon: -71.2985
        }, {
            lat: 42.7127,
            lon: -71.9151
        }, {
            lat: 42.7309,
            lon: -72.5441
        }, {
            lat: 42.745,
            lon: -73.2541
        }, {
            lat: 42.746,
            lon: -73.2664
        }, {
            lat: 42.546,
            lon: -73.3406
        }, {
            lat: 42.2671,
            lon: -73.4436
        }, {
            lat: 42.1349,
            lon: -73.4917
        }, {
            lat: 42.088,
            lon: -73.5081
        }, {
            lat: 42.0483,
            lon: -73.4985
        }, {
            lat: 42.0452,
            lon: -73.1841
        }, {
            lat: 42.0371,
            lon: -72.8146
        }, {
            lat: 41.9962,
            lon: -72.816
        }, {
            lat: 42.0024,
            lon: -72.7803
        }]
    }, {
        name: "Maryland",
        points: [{
            lat: 39.722,
            lon: -79.4778
        }, {
            lat: 39.722,
            lon: -78.36
        }, {
            lat: 39.722,
            lon: -75.7878
        }, {
            lat: 39.5655,
            lon: -75.7809
        }, {
            lat: 39.3152,
            lon: -75.7617
        }, {
            lat: 38.9498,
            lon: -75.7329
        }, {
            lat: 38.4611,
            lon: -75.6944
        }, {
            lat: 38.4482,
            lon: -74.8581
        }, {
            lat: 38.02,
            lon: -74.9721
        }, {
            lat: 38.0275,
            lon: -75.2316
        }, {
            lat: 37.9962,
            lon: -75.6079
        }, {
            lat: 37.9951,
            lon: -75.623
        }, {
            lat: 37.9464,
            lon: -75.6436
        }, {
            lat: 37.9529,
            lon: -75.7288
        }, {
            lat: 37.9117,
            lon: -75.8084
        }, {
            lat: 37.9095,
            lon: -75.9512
        }, {
            lat: 37.9464,
            lon: -75.943
        }, {
            lat: 37.9529,
            lon: -76.0584
        }, {
            lat: 37.8889,
            lon: -76.2396
        }, {
            lat: 37.9474,
            lon: -76.3454
        }, {
            lat: 37.9669,
            lon: -76.4154
        }, {
            lat: 38.0146,
            lon: -76.4703
        }, {
            lat: 38.0275,
            lon: -76.517
        }, {
            lat: 38.0751,
            lon: -76.5363
        }, {
            lat: 38.1464,
            lon: -76.6063
        }, {
            lat: 38.1616,
            lon: -76.6928
        }, {
            lat: 38.167,
            lon: -76.7601
        }, {
            lat: 38.1637,
            lon: -76.8494
        }, {
            lat: 38.208,
            lon: -76.9482
        }, {
            lat: 38.2748,
            lon: -76.9908
        }, {
            lat: 38.3093,
            lon: -77.0306
        }, {
            lat: 38.3761,
            lon: -77.0114
        }, {
            lat: 38.4009,
            lon: -77.043
        }, {
            lat: 38.3697,
            lon: -77.0897
        }, {
            lat: 38.3697,
            lon: -77.1432
        }, {
            lat: 38.332,
            lon: -77.2627
        }, {
            lat: 38.4525,
            lon: -77.3135
        }, {
            lat: 38.5514,
            lon: -77.2737
        }, {
            lat: 38.5954,
            lon: -77.249
        }, {
            lat: 38.6373,
            lon: -77.1281
        }, {
            lat: 38.6737,
            lon: -77.1378
        }, {
            lat: 38.7112,
            lon: -77.076
        }, {
            lat: 38.7187,
            lon: -77.0361
        }, {
            lat: 38.7766,
            lon: -77.0416
        }, {
            lat: 38.8451,
            lon: -77.032
        }, {
            lat: 38.9025,
            lon: -77.0708
        }, {
            lat: 38.957,
            lon: -77.1395
        }, {
            lat: 38.9773,
            lon: -77.2335
        }, {
            lat: 39.024,
            lon: -77.2462
        }, {
            lat: 39.0634,
            lon: -77.3431
        }, {
            lat: 39.0717,
            lon: -77.4351
        }, {
            lat: 39.0792,
            lon: -77.4636
        }, {
            lat: 39.1218,
            lon: -77.5202
        }, {
            lat: 39.1804,
            lon: -77.5092
        }, {
            lat: 39.2269,
            lon: -77.4577
        }, {
            lat: 39.3051,
            lon: -77.5666
        }, {
            lat: 39.3067,
            lon: -77.6321
        }, {
            lat: 39.3202,
            lon: -77.7159
        }, {
            lat: 39.3383,
            lon: -77.7626
        }, {
            lat: 39.381,
            lon: -77.7544
        }, {
            lat: 39.4288,
            lon: -77.7602
        }, {
            lat: 39.4367,
            lon: -77.8038
        }, {
            lat: 39.4606,
            lon: -77.7997
        }, {
            lat: 39.5019,
            lon: -77.7859
        }, {
            lat: 39.5062,
            lon: -77.8436
        }, {
            lat: 39.521,
            lon: -77.8217
        }, {
            lat: 39.5337,
            lon: -77.8354
        }, {
            lat: 39.5231,
            lon: -77.8656
        }, {
            lat: 39.5591,
            lon: -77.8848
        }, {
            lat: 39.6015,
            lon: -77.8821
        }, {
            lat: 39.6078,
            lon: -77.9974
        }, {
            lat: 39.6247,
            lon: -78.0222
        }, {
            lat: 39.6924,
            lon: -78.143
        }, {
            lat: 39.6945,
            lon: -78.1924
        }, {
            lat: 39.6839,
            lon: -78.2062
        }, {
            lat: 39.6839,
            lon: -78.2419
        }, {
            lat: 39.6586,
            lon: -78.2281
        }, {
            lat: 39.6226,
            lon: -78.2776
        }, {
            lat: 39.6438,
            lon: -78.3517
        }, {
            lat: 39.612,
            lon: -78.3765
        }, {
            lat: 39.6036,
            lon: -78.4067
        }, {
            lat: 39.5824,
            lon: -78.4177
        }, {
            lat: 39.575,
            lon: -78.4245
        }, {
            lat: 39.5464,
            lon: -78.4232
        }, {
            lat: 39.5146,
            lon: -78.4698
        }, {
            lat: 39.5189,
            lon: -78.5687
        }, {
            lat: 39.5337,
            lon: -78.6676
        }, {
            lat: 39.5888,
            lon: -78.739
        }, {
            lat: 39.6015,
            lon: -78.772
        }, {
            lat: 39.6184,
            lon: -78.7363
        }, {
            lat: 39.6438,
            lon: -78.7775
        }, {
            lat: 39.6036,
            lon: -78.7912
        }, {
            lat: 39.6036,
            lon: -78.8187
        }, {
            lat: 39.5549,
            lon: -78.8571
        }, {
            lat: 39.4913,
            lon: -78.9203
        }, {
            lat: 39.4426,
            lon: -78.9725
        }, {
            lat: 39.4834,
            lon: -79.0542
        }, {
            lat: 39.4738,
            lon: -79.0604
        }, {
            lat: 39.4553,
            lon: -79.1043
        }, {
            lat: 39.3853,
            lon: -79.1936
        }, {
            lat: 39.3449,
            lon: -79.2705
        }, {
            lat: 39.3014,
            lon: -79.3282
        }, {
            lat: 39.2535,
            lon: -79.4044
        }, {
            lat: 39.2073,
            lon: -79.4696
        }, {
            lat: 39.2051,
            lon: -79.4861
        }, {
            lat: 39.2546,
            lon: -79.4861
        }, {
            lat: 39.3444,
            lon: -79.4854
        }, {
            lat: 39.3454,
            lon: -79.484
        }, {
            lat: 39.5316,
            lon: -79.4833
        }, {
            lat: 39.7214,
            lon: -79.4772
        }]
    }, {
        name: "Maine",
        points: [{
            lat: 45.3425,
            lon: -71.0129
        }, {
            lat: 45.3328,
            lon: -70.9525
        }, {
            lat: 45.2294,
            lon: -70.8618
        }, {
            lat: 45.3917,
            lon: -70.8247
        }, {
            lat: 45.4274,
            lon: -70.7808
        }, {
            lat: 45.383,
            lon: -70.638
        }, {
            lat: 45.5092,
            lon: -70.719
        }, {
            lat: 45.6544,
            lon: -70.5721
        }, {
            lat: 45.7292,
            lon: -70.3894
        }, {
            lat: 45.7924,
            lon: -70.4169
        }, {
            lat: 45.9368,
            lon: -70.2493
        }, {
            lat: 45.9597,
            lon: -70.3098
        }, {
            lat: 46.0923,
            lon: -70.2946
        }, {
            lat: 46.0989,
            lon: -70.2589
        }, {
            lat: 46.1342,
            lon: -70.2466
        }, {
            lat: 46.1903,
            lon: -70.2905
        }, {
            lat: 46.271,
            lon: -70.2466
        }, {
            lat: 46.327,
            lon: -70.204
        }, {
            lat: 46.4151,
            lon: -70.0571
        }, {
            lat: 46.6956,
            lon: -69.9994
        }, {
            lat: 47.455,
            lon: -69.2303
        }, {
            lat: 47.4132,
            lon: -69.0381
        }, {
            lat: 47.2578,
            lon: -69.0504
        }, {
            lat: 47.1748,
            lon: -68.8843
        }, {
            lat: 47.2643,
            lon: -68.6206
        }, {
            lat: 47.3546,
            lon: -68.335
        }, {
            lat: 47.3165,
            lon: -68.1564
        }, {
            lat: 47.1038,
            lon: -67.8804
        }, {
            lat: 47.0664,
            lon: -67.7898
        }, {
            lat: 45.9359,
            lon: -67.7802
        }, {
            lat: 45.9177,
            lon: -67.7527
        }, {
            lat: 45.7599,
            lon: -67.809
        }, {
            lat: 45.6208,
            lon: -67.6524
        }, {
            lat: 45.5987,
            lon: -67.4533
        }, {
            lat: 45.5044,
            lon: -67.4176
        }, {
            lat: 45.4823,
            lon: -67.5014
        }, {
            lat: 45.3714,
            lon: -67.4231
        }, {
            lat: 45.2768,
            lon: -67.4863
        }, {
            lat: 45.1297,
            lon: -67.3434
        }, {
            lat: 45.183,
            lon: -67.2487
        }, {
            lat: 45.123,
            lon: -67.1223
        }, {
            lat: 44.8315,
            lon: -66.9672
        }, {
            lat: 44.7409,
            lon: -66.8628
        }, {
            lat: 44.4945,
            lon: -67.3105
        }, {
            lat: 44.3268,
            lon: -67.9051
        }, {
            lat: 43.8702,
            lon: -68.6673
        }, {
            lat: 43.7274,
            lon: -68.8431
        }, {
            lat: 43.6639,
            lon: -69.7137
        }, {
            lat: 43.5625,
            lon: -70.0818
        }, {
            lat: 42.9182,
            lon: -70.5569
        }, {
            lat: 43.0649,
            lon: -70.7108
        }, {
            lat: 43.1391,
            lon: -70.8302
        }, {
            lat: 43.2292,
            lon: -70.8179
        }, {
            lat: 43.3631,
            lon: -70.9799
        }, {
            lat: 43.5675,
            lon: -70.9717
        }, {
            lat: 45.3029,
            lon: -71.0829
        }]
    }, {
        name: "Michigan",
        points: [{
            lat: 48.3033,
            lon: -88.3713
        }, {
            lat: 48.0101,
            lon: -87.605
        }, {
            lat: 46.8902,
            lon: -84.8584
        }, {
            lat: 46.6362,
            lon: -84.765
        }, {
            lat: 46.4606,
            lon: -84.5563
        }, {
            lat: 46.4525,
            lon: -84.478
        }, {
            lat: 46.4894,
            lon: -84.445
        }, {
            lat: 46.5008,
            lon: -84.4203
        }, {
            lat: 46.4989,
            lon: -84.3956
        }, {
            lat: 46.5093,
            lon: -84.375
        }, {
            lat: 46.5069,
            lon: -84.3386
        }, {
            lat: 46.4927,
            lon: -84.2905
        }, {
            lat: 46.4951,
            lon: -84.2651
        }, {
            lat: 46.5343,
            lon: -84.2253
        }, {
            lat: 46.5404,
            lon: -84.1951
        }, {
            lat: 46.5272,
            lon: -84.1779
        }, {
            lat: 46.5348,
            lon: -84.1347
        }, {
            lat: 46.5041,
            lon: -84.1113
        }, {
            lat: 46.4189,
            lon: -84.1457
        }, {
            lat: 46.372,
            lon: -84.1395
        }, {
            lat: 46.3218,
            lon: -84.1058
        }, {
            lat: 46.3147,
            lon: -84.1203
        }, {
            lat: 46.2672,
            lon: -84.1148
        }, {
            lat: 46.2563,
            lon: -84.0969
        }, {
            lat: 46.2411,
            lon: -84.1093
        }, {
            lat: 46.2098,
            lon: -84.0859
        }, {
            lat: 46.1879,
            lon: -84.0777
        }, {
            lat: 46.1508,
            lon: -84.0097
        }, {
            lat: 46.118,
            lon: -84.007
        }, {
            lat: 46.1018,
            lon: -83.9761
        }, {
            lat: 46.057,
            lon: -83.9555
        }, {
            lat: 46.0604,
            lon: -83.904
        }, {
            lat: 46.1185,
            lon: -83.8264
        }, {
            lat: 46.1028,
            lon: -83.7598
        }, {
            lat: 46.1218,
            lon: -83.6547
        }, {
            lat: 46.1056,
            lon: -83.5723
        }, {
            lat: 45.9993,
            lon: -83.4343
        }, {
            lat: 45.8211,
            lon: -83.5977
        }, {
            lat: 45.3396,
            lon: -82.5197
        }, {
            lat: 43.5918,
            lon: -82.1221
        }, {
            lat: 43.0112,
            lon: -82.4119
        }, {
            lat: 42.9956,
            lon: -82.4249
        }, {
            lat: 42.9579,
            lon: -82.4236
        }, {
            lat: 42.9021,
            lon: -82.4648
        }, {
            lat: 42.8543,
            lon: -82.4689
        }, {
            lat: 42.81,
            lon: -82.4826
        }, {
            lat: 42.7863,
            lon: -82.4723
        }, {
            lat: 42.7339,
            lon: -82.4847
        }, {
            lat: 42.6855,
            lon: -82.5032
        }, {
            lat: 42.638,
            lon: -82.5108
        }, {
            lat: 42.6036,
            lon: -82.5307
        }, {
            lat: 42.5672,
            lon: -82.5774
        }, {
            lat: 42.549,
            lon: -82.5993
        }, {
            lat: 42.5521,
            lon: -82.6501
        }, {
            lat: 42.5354,
            lon: -82.668
        }, {
            lat: 42.4746,
            lon: -82.7257
        }, {
            lat: 42.4726,
            lon: -82.725
        }, {
            lat: 42.3738,
            lon: -82.828
        }, {
            lat: 42.3469,
            lon: -82.944
        }, {
            lat: 42.3382,
            lon: -82.955
        }, {
            lat: 42.3098,
            lon: -83.0779
        }, {
            lat: 42.2392,
            lon: -83.1294
        }, {
            lat: 42.1741,
            lon: -83.1342
        }, {
            lat: 42.1267,
            lon: -83.1212
        }, {
            lat: 42.0411,
            lon: -83.1493
        }, {
            lat: 41.96,
            lon: -83.1116
        }, {
            lat: 41.7344,
            lon: -83.4164
        }, {
            lat: 41.7211,
            lon: -83.8724
        }, {
            lat: 41.7057,
            lon: -84.3736
        }, {
            lat: 41.6965,
            lon: -84.8062
        }, {
            lat: 41.7611,
            lon: -84.8076
        }, {
            lat: 41.7621,
            lon: -87.2067
        }, {
            lat: 42.4934,
            lon: -87.0241
        }, {
            lat: 43.3771,
            lon: -87.1477
        }, {
            lat: 43.7056,
            lon: -87.1216
        }, {
            lat: 43.9958,
            lon: -87.0474
        }, {
            lat: 44.1674,
            lon: -86.9939
        }, {
            lat: 44.472,
            lon: -86.8662
        }, {
            lat: 44.8841,
            lon: -86.6849
        }, {
            lat: 45.0813,
            lon: -86.5009
        }, {
            lat: 45.2353,
            lon: -86.2495
        }, {
            lat: 45.4438,
            lon: -86.7563
        }, {
            lat: 45.4438,
            lon: -87.0996
        }, {
            lat: 45.3772,
            lon: -87.1518
        }, {
            lat: 45.3502,
            lon: -87.171
        }, {
            lat: 45.2401,
            lon: -87.3166
        }, {
            lat: 45.2024,
            lon: -87.4059
        }, {
            lat: 45.0774,
            lon: -87.4416
        }, {
            lat: 45.091,
            lon: -87.5912
        }, {
            lat: 45.1036,
            lon: -87.6407
        }, {
            lat: 45.2207,
            lon: -87.697
        }, {
            lat: 45.3367,
            lon: -87.6476
        }, {
            lat: 45.3878,
            lon: -87.6984
        }, {
            lat: 45.3425,
            lon: -87.8494
        }, {
            lat: 45.5025,
            lon: -87.7959
        }, {
            lat: 45.6726,
            lon: -87.789
        }, {
            lat: 45.757,
            lon: -87.9318
        }, {
            lat: 45.7953,
            lon: -87.9922
        }, {
            lat: 45.8058,
            lon: -88.1186
        }, {
            lat: 45.8585,
            lon: -88.087
        }, {
            lat: 45.9531,
            lon: -88.1955
        }, {
            lat: 45.9722,
            lon: -88.3438
        }, {
            lat: 45.9836,
            lon: -88.3891
        }, {
            lat: 46.0113,
            lon: -88.5457
        }, {
            lat: 45.997,
            lon: -88.7022
        }, {
            lat: 46.0227,
            lon: -88.8135
        }, {
            lat: 46.0418,
            lon: -88.8547
        }, {
            lat: 46.1408,
            lon: -89.0936
        }, {
            lat: 46.3384,
            lon: -90.1222
        }, {
            lat: 46.5692,
            lon: -90.4175
        }, {
            lat: 46.9034,
            lon: -90.2019
        }, {
            lat: 47.2913,
            lon: -89.9547
        }, {
            lat: 48.0129,
            lon: -89.4946
        }, {
            lat: 47.9743,
            lon: -89.3381
        }, {
            lat: 48.2448,
            lon: -88.6761
        }, {
            lat: 48.3042,
            lon: -88.3726
        }]
    }, {
        name: "Minnesota",
        points: [{
            lat: 43.5008,
            lon: -96.4517
        }, {
            lat: 43.5017,
            lon: -91.2195
        }, {
            lat: 43.8226,
            lon: -91.3101
        }, {
            lat: 43.9651,
            lon: -91.4914
        }, {
            lat: 44.1113,
            lon: -91.7084
        }, {
            lat: 44.2806,
            lon: -91.8951
        }, {
            lat: 44.371,
            lon: -91.9556
        }, {
            lat: 44.4357,
            lon: -92.2083
        }, {
            lat: 44.5513,
            lon: -92.336
        }, {
            lat: 44.6501,
            lon: -92.6367
        }, {
            lat: 44.7877,
            lon: -92.7658
        }, {
            lat: 45.3135,
            lon: -92.7081
        }, {
            lat: 45.4505,
            lon: -92.6532
        }, {
            lat: 45.6083,
            lon: -92.8482
        }, {
            lat: 45.8307,
            lon: -92.7356
        }, {
            lat: 45.976,
            lon: -92.5159
        }, {
            lat: 46.0151,
            lon: -92.3566
        }, {
            lat: 46.0789,
            lon: -92.2934
        }, {
            lat: 46.5957,
            lon: -92.2879
        }, {
            lat: 47.3072,
            lon: -90.6564
        }, {
            lat: 47.2885,
            lon: -89.9615
        }, {
            lat: 48.012,
            lon: -89.4919
        }, {
            lat: 48.0193,
            lon: -89.7583
        }, {
            lat: 48.0285,
            lon: -89.9931
        }, {
            lat: 48.0827,
            lon: -90.0261
        }, {
            lat: 48.1074,
            lon: -90.1758
        }, {
            lat: 48.0955,
            lon: -90.3502
        }, {
            lat: 48.1074,
            lon: -90.4834
        }, {
            lat: 48.1175,
            lon: -90.5644
        }, {
            lat: 48.0928,
            lon: -90.7471
        }, {
            lat: 48.1588,
            lon: -90.7759
        }, {
            lat: 48.2402,
            lon: -90.8405
        }, {
            lat: 48.2174,
            lon: -90.9792
        }, {
            lat: 48.0726,
            lon: -91.3252
        }, {
            lat: 48.0505,
            lon: -91.5738
        }, {
            lat: 48.1166,
            lon: -91.707
        }, {
            lat: 48.1963,
            lon: -91.7166
        }, {
            lat: 48.2494,
            lon: -91.9844
        }, {
            lat: 48.3188,
            lon: -92.0078
        }, {
            lat: 48.3544,
            lon: -92.0531
        }, {
            lat: 48.3599,
            lon: -92.1561
        }, {
            lat: 48.3307,
            lon: -92.2975
        }, {
            lat: 48.2475,
            lon: -92.2742
        }, {
            lat: 48.2228,
            lon: -92.3717
        }, {
            lat: 48.3854,
            lon: -92.4609
        }, {
            lat: 48.4474,
            lon: -92.5104
        }, {
            lat: 48.4611,
            lon: -92.7122
        }, {
            lat: 48.4984,
            lon: -92.634
        }, {
            lat: 48.5403,
            lon: -92.6395
        }, {
            lat: 48.6393,
            lon: -93.2066
        }, {
            lat: 48.5884,
            lon: -93.4648
        }, {
            lat: 48.5439,
            lon: -93.4621
        }, {
            lat: 48.5166,
            lon: -93.8013
        }, {
            lat: 48.6284,
            lon: -93.8356
        }, {
            lat: 48.6547,
            lon: -94.2531
        }, {
            lat: 48.7046,
            lon: -94.2792
        }, {
            lat: 48.6982,
            lon: -94.4467
        }, {
            lat: 48.7861,
            lon: -94.6925
        }, {
            lat: 48.8756,
            lon: -94.6788
        }, {
            lat: 49.0955,
            lon: -94.7488
        }, {
            lat: 49.1889,
            lon: -94.7955
        }, {
            lat: 49.3189,
            lon: -94.8175
        }, {
            lat: 49.3815,
            lon: -94.9631
        }, {
            lat: 49.3538,
            lon: -95.04
        }, {
            lat: 49.3681,
            lon: -95.1196
        }, {
            lat: 49.3877,
            lon: -95.1553
        }, {
            lat: 48.9991,
            lon: -95.1553
        }, {
            lat: 49,
            lon: -97.2304
        }, {
            lat: 48.8647,
            lon: -97.1851
        }, {
            lat: 48.7806,
            lon: -97.1576
        }, {
            lat: 48.6683,
            lon: -97.104
        }, {
            lat: 48.5539,
            lon: -97.1645
        }, {
            lat: 48.2832,
            lon: -97.1411
        }, {
            lat: 48.1578,
            lon: -97.1397
        }, {
            lat: 47.9633,
            lon: -97.0587
        }, {
            lat: 47.7098,
            lon: -96.9434
        }, {
            lat: 47.5821,
            lon: -96.8582
        }, {
            lat: 47.2345,
            lon: -96.8335
        }, {
            lat: 46.6702,
            lon: -96.8005
        }, {
            lat: 46.5135,
            lon: -96.7126
        }, {
            lat: 46.2786,
            lon: -96.6028
        }, {
            lat: 46.0189,
            lon: -96.5767
        }, {
            lat: 45.8173,
            lon: -96.5891
        }, {
            lat: 45.6169,
            lon: -96.8486
        }, {
            lat: 45.4601,
            lon: -96.7456
        }, {
            lat: 45.3676,
            lon: -96.5918
        }, {
            lat: 45.2961,
            lon: -96.4558
        }, {
            lat: 43.5008,
            lon: -96.4531
        }]
    }, {
        name: "Missouri",
        points: [{
            lat: 40.6181,
            lon: -91.7468
        }, {
            lat: 40.5597,
            lon: -91.6809
        }, {
            lat: 40.5472,
            lon: -91.626
        }, {
            lat: 40.4658,
            lon: -91.5463
        }, {
            lat: 40.3675,
            lon: -91.4337
        }, {
            lat: 40.1663,
            lon: -91.5161
        }, {
            lat: 39.9866,
            lon: -91.49
        }, {
            lat: 39.8634,
            lon: -91.4447
        }, {
            lat: 39.7283,
            lon: -91.3623
        }, {
            lat: 39.6861,
            lon: -91.3074
        }, {
            lat: 39.5464,
            lon: -91.1096
        }, {
            lat: 39.4022,
            lon: -90.9558
        }, {
            lat: 39.245,
            lon: -90.7306
        }, {
            lat: 38.9893,
            lon: -90.6812
        }, {
            lat: 38.8697,
            lon: -90.5878
        }, {
            lat: 38.9722,
            lon: -90.4504
        }, {
            lat: 38.8868,
            lon: -90.1813
        }, {
            lat: 38.8269,
            lon: -90.1154
        }, {
            lat: 38.7155,
            lon: -90.1978
        }, {
            lat: 38.4149,
            lon: -90.3186
        }, {
            lat: 38.2597,
            lon: -90.379
        }, {
            lat: 37.9572,
            lon: -89.9341
        }, {
            lat: 37.6925,
            lon: -89.5331
        }, {
            lat: 37.4007,
            lon: -89.4287
        }, {
            lat: 37.2784,
            lon: -89.5386
        }, {
            lat: 37.1734,
            lon: -89.4452
        }, {
            lat: 37.0859,
            lon: -89.3793
        }, {
            lat: 36.9938,
            lon: -89.2859
        }, {
            lat: 37.0311,
            lon: -89.1829
        }, {
            lat: 36.9839,
            lon: -89.1403
        }, {
            lat: 36.9466,
            lon: -89.1005
        }, {
            lat: 36.7884,
            lon: -89.1788
        }, {
            lat: 36.6288,
            lon: -89.2035
        }, {
            lat: 36.5449,
            lon: -89.2516
        }, {
            lat: 36.6188,
            lon: -89.3532
        }, {
            lat: 36.5538,
            lon: -89.4397
        }, {
            lat: 36.4942,
            lon: -89.5358
        }, {
            lat: 36.3594,
            lon: -89.5331
        }, {
            lat: 36.2509,
            lon: -89.5345
        }, {
            lat: 36.0891,
            lon: -89.61
        }, {
            lat: 36.0002,
            lon: -89.7116
        }, {
            lat: 35.9958,
            lon: -90.3735
        }, {
            lat: 36.1223,
            lon: -90.2747
        }, {
            lat: 36.2886,
            lon: -90.0934
        }, {
            lat: 36.3903,
            lon: -90.0769
        }, {
            lat: 36.4213,
            lon: -90.1538
        }, {
            lat: 36.5008,
            lon: -90.1538
        }, {
            lat: 36.4975,
            lon: -94.6184
        }, {
            lat: 38.9722,
            lon: -94.6143
        }, {
            lat: 39.1982,
            lon: -94.6143
        }, {
            lat: 39.1684,
            lon: -94.7241
        }, {
            lat: 39.279,
            lon: -94.8834
        }, {
            lat: 39.5612,
            lon: -95.1086
        }, {
            lat: 39.7283,
            lon: -94.8834
        }, {
            lat: 39.8296,
            lon: -94.8944
        }, {
            lat: 39.8845,
            lon: -94.9384
        }, {
            lat: 39.8971,
            lon: -95.0153
        }, {
            lat: 39.8718,
            lon: -95.0922
        }, {
            lat: 40.0066,
            lon: -95.3119
        }, {
            lat: 40.246,
            lon: -95.4794
        }, {
            lat: 40.3256,
            lon: -95.6635
        }, {
            lat: 40.5879,
            lon: -95.7527
        }, {
            lat: 40.5795,
            lon: -94.3135
        }, {
            lat: 40.5962,
            lon: -92.5818
        }, {
            lat: 40.614,
            lon: -91.7358
        }]
    }, {
        name: "Mississippi",
        points: [{
            lat: 35.0041,
            lon: -90.3049
        }, {
            lat: 35.0075,
            lon: -88.1955
        }, {
            lat: 34.8882,
            lon: -88.0994
        }, {
            lat: 34.7044,
            lon: -88.1241
        }, {
            lat: 33.6661,
            lon: -88.2573
        }, {
            lat: 31.8939,
            lon: -88.4756
        }, {
            lat: 30.8657,
            lon: -88.418
        }, {
            lat: 30.1594,
            lon: -88.385
        }, {
            lat: 30.0905,
            lon: -88.8327
        }, {
            lat: 30.2104,
            lon: -89.187
        }, {
            lat: 30.157,
            lon: -89.4919
        }, {
            lat: 30.1796,
            lon: -89.5757
        }, {
            lat: 30.3326,
            lon: -89.6457
        }, {
            lat: 30.5232,
            lon: -89.7748
        }, {
            lat: 30.6663,
            lon: -89.8531
        }, {
            lat: 30.9988,
            lon: -89.7377
        }, {
            lat: 30.9988,
            lon: -91.6287
        }, {
            lat: 31.0341,
            lon: -91.5601
        }, {
            lat: 31.1106,
            lon: -91.6273
        }, {
            lat: 31.1658,
            lon: -91.5916
        }, {
            lat: 31.2304,
            lon: -91.6589
        }, {
            lat: 31.2656,
            lon: -91.6452
        }, {
            lat: 31.2609,
            lon: -91.5436
        }, {
            lat: 31.3724,
            lon: -91.5271
        }, {
            lat: 31.4099,
            lon: -91.5161
        }, {
            lat: 31.5071,
            lon: -91.512
        }, {
            lat: 31.5692,
            lon: -91.4502
        }, {
            lat: 31.623,
            lon: -91.5147
        }, {
            lat: 31.6253,
            lon: -91.3966
        }, {
            lat: 31.7936,
            lon: -91.3513
        }, {
            lat: 31.8589,
            lon: -91.2744
        }, {
            lat: 31.9755,
            lon: -91.1673
        }, {
            lat: 32.0267,
            lon: -91.0767
        }, {
            lat: 32.1198,
            lon: -91.0767
        }, {
            lat: 32.1942,
            lon: -91.0437
        }, {
            lat: 32.2221,
            lon: -91.0107
        }, {
            lat: 32.315,
            lon: -90.9132
        }, {
            lat: 32.3742,
            lon: -91.0313
        }, {
            lat: 32.4263,
            lon: -91.0217
        }, {
            lat: 32.4634,
            lon: -91.0986
        }, {
            lat: 32.607,
            lon: -91.008
        }, {
            lat: 32.5746,
            lon: -91.1096
        }, {
            lat: 32.6394,
            lon: -91.1536
        }, {
            lat: 32.7226,
            lon: -91.1426
        }, {
            lat: 32.7873,
            lon: -91.1426
        }, {
            lat: 32.8519,
            lon: -91.1536
        }, {
            lat: 32.8796,
            lon: -91.1206
        }, {
            lat: 32.9257,
            lon: -91.2195
        }, {
            lat: 32.9995,
            lon: -91.2085
        }, {
            lat: 33.0444,
            lon: -91.2016
        }, {
            lat: 33.1192,
            lon: -91.2016
        }, {
            lat: 33.1835,
            lon: -91.1041
        }, {
            lat: 33.3397,
            lon: -91.1536
        }, {
            lat: 33.4223,
            lon: -91.1646
        }, {
            lat: 33.4337,
            lon: -91.2291
        }, {
            lat: 33.5414,
            lon: -91.2524
        }, {
            lat: 33.6135,
            lon: -91.1838
        }, {
            lat: 33.6878,
            lon: -91.2524
        }, {
            lat: 33.6969,
            lon: -91.1261
        }, {
            lat: 33.7883,
            lon: -91.1426
        }, {
            lat: 33.77,
            lon: -91.0437
        }, {
            lat: 33.8339,
            lon: -91.0327
        }, {
            lat: 33.8795,
            lon: -91.0657
        }, {
            lat: 33.9434,
            lon: -91.0876
        }, {
            lat: 33.9889,
            lon: -90.9998
        }, {
            lat: 34.0253,
            lon: -90.9229
        }, {
            lat: 34.0891,
            lon: -90.9009
        }, {
            lat: 34.1345,
            lon: -90.9668
        }, {
            lat: 34.1709,
            lon: -90.9119
        }, {
            lat: 34.1345,
            lon: -90.8501
        }, {
            lat: 34.2277,
            lon: -90.9338
        }, {
            lat: 34.2833,
            lon: -90.8267
        }, {
            lat: 34.3434,
            lon: -90.6921
        }, {
            lat: 34.3774,
            lon: -90.6509
        }, {
            lat: 34.3978,
            lon: -90.6152
        }, {
            lat: 34.4432,
            lon: -90.5589
        }, {
            lat: 34.5179,
            lon: -90.574
        }, {
            lat: 34.588,
            lon: -90.5823
        }, {
            lat: 34.7506,
            lon: -90.5356
        }, {
            lat: 34.7913,
            lon: -90.5136
        }, {
            lat: 34.878,
            lon: -90.4532
        }, {
            lat: 34.8476,
            lon: -90.3543
        }, {
            lat: 34.8702,
            lon: -90.2911
        }, {
            lat: 35.0041,
            lon: -90.3062
        }]
    }, {
        name: "Montana",
        points: [{
            lat: 44.475,
            lon: -111.0512
        }, {
            lat: 44.7311,
            lon: -111.3684
        }, {
            lat: 44.6198,
            lon: -111.5071
        }, {
            lat: 44.5386,
            lon: -111.4673
        }, {
            lat: 44.5151,
            lon: -111.8285
        }, {
            lat: 44.5592,
            lon: -111.8848
        }, {
            lat: 44.5229,
            lon: -112.1127
        }, {
            lat: 44.5367,
            lon: -112.327
        }, {
            lat: 44.4475,
            lon: -112.3901
        }, {
            lat: 44.4896,
            lon: -112.7293
        }, {
            lat: 44.4181,
            lon: -112.8296
        }, {
            lat: 44.3563,
            lon: -112.8529
        }, {
            lat: 44.4857,
            lon: -113.0205
        }, {
            lat: 44.5905,
            lon: -113.0713
        }, {
            lat: 44.7389,
            lon: -113.1152
        }, {
            lat: 44.8091,
            lon: -113.2471
        }, {
            lat: 44.7887,
            lon: -113.3459
        }, {
            lat: 44.9386,
            lon: -113.497
        }, {
            lat: 45.0269,
            lon: -113.4229
        }, {
            lat: 45.2749,
            lon: -113.7085
        }, {
            lat: 45.4447,
            lon: -113.7964
        }, {
            lat: 45.614,
            lon: -113.8403
        }, {
            lat: 45.6908,
            lon: -113.9722
        }, {
            lat: 45.5631,
            lon: -114.1315
        }, {
            lat: 45.5525,
            lon: -114.2358
        }, {
            lat: 45.4592,
            lon: -114.3347
        }, {
            lat: 45.5439,
            lon: -114.4652
        }, {
            lat: 45.5583,
            lon: -114.5668
        }, {
            lat: 45.6755,
            lon: -114.5215
        }, {
            lat: 45.7733,
            lon: -114.5641
        }, {
            lat: 45.8613,
            lon: -114.4391
        }, {
            lat: 45.9989,
            lon: -114.4817
        }, {
            lat: 46.1237,
            lon: -114.5132
        }, {
            lat: 46.2577,
            lon: -114.4652
        }, {
            lat: 46.3441,
            lon: -114.4171
        }, {
            lat: 46.453,
            lon: -114.3896
        }, {
            lat: 46.5069,
            lon: -114.3484
        }, {
            lat: 46.6504,
            lon: -114.3279
        }, {
            lat: 46.6334,
            lon: -114.4652
        }, {
            lat: 46.6362,
            lon: -114.5929
        }, {
            lat: 46.7003,
            lon: -114.7659
        }, {
            lat: 46.8423,
            lon: -114.9307
        }, {
            lat: 47.0402,
            lon: -115.1147
        }, {
            lat: 47.1888,
            lon: -115.2933
        }, {
            lat: 47.2569,
            lon: -115.329
        }, {
            lat: 47.3025,
            lon: -115.5267
        }, {
            lat: 47.4253,
            lon: -115.7547
        }, {
            lat: 47.5487,
            lon: -115.7533
        }, {
            lat: 47.5793,
            lon: -115.6956
        }, {
            lat: 47.9771,
            lon: -116.0458
        }, {
            lat: 48.9991,
            lon: -116.0458
        }, {
            lat: 48.9991,
            lon: -104.0501
        }, {
            lat: 45.0269,
            lon: -104.0186
        }, {
            lat: 45.0153,
            lon: -104.0186
        }, {
            lat: 44.9978,
            lon: -104.0199
        }, {
            lat: 44.9959,
            lon: -111.0498
        }, {
            lat: 44.475,
            lon: -111.0512
        }]
    }, {
        name: "North Carolina",
        points: [{
            lat: 33.7963,
            lon: -78.485
        }, {
            lat: 34.8037,
            lon: -79.6742
        }, {
            lat: 34.8206,
            lon: -80.8003
        }, {
            lat: 34.9377,
            lon: -80.788
        }, {
            lat: 35.1019,
            lon: -80.9377
        }, {
            lat: 35.0356,
            lon: -81.0379
        }, {
            lat: 35.1457,
            lon: -81.0324
        }, {
            lat: 35.166,
            lon: -81.3867
        }, {
            lat: 35.1985,
            lon: -82.2739
        }, {
            lat: 35.2041,
            lon: -82.3933
        }, {
            lat: 35.0637,
            lon: -82.7765
        }, {
            lat: 35.0817,
            lon: -82.7861
        }, {
            lat: 34.9996,
            lon: -83.1075
        }, {
            lat: 34.9918,
            lon: -83.6183
        }, {
            lat: 34.9918,
            lon: -84.3201
        }, {
            lat: 35.2131,
            lon: -84.2885
        }, {
            lat: 35.268,
            lon: -84.2226
        }, {
            lat: 35.231,
            lon: -84.1113
        }, {
            lat: 35.2815,
            lon: -84.0454
        }, {
            lat: 35.4058,
            lon: -84.0248
        }, {
            lat: 35.4719,
            lon: -83.9424
        }, {
            lat: 35.5166,
            lon: -83.8559
        }, {
            lat: 35.5512,
            lon: -83.6938
        }, {
            lat: 35.568,
            lon: -83.5181
        }, {
            lat: 35.6327,
            lon: -83.3849
        }, {
            lat: 35.7142,
            lon: -83.2475
        }, {
            lat: 35.7799,
            lon: -82.9962
        }, {
            lat: 35.8445,
            lon: -82.9276
        }, {
            lat: 35.9224,
            lon: -82.8191
        }, {
            lat: 35.9958,
            lon: -82.771
        }, {
            lat: 36.0613,
            lon: -82.6419
        }, {
            lat: 35.9702,
            lon: -82.6103
        }, {
            lat: 35.9547,
            lon: -82.5677
        }, {
            lat: 36.0236,
            lon: -82.473
        }, {
            lat: 36.0669,
            lon: -82.4194
        }, {
            lat: 36.1168,
            lon: -82.3535
        }, {
            lat: 36.1345,
            lon: -82.2862
        }, {
            lat: 36.1467,
            lon: -82.1461
        }, {
            lat: 36.1035,
            lon: -82.1228
        }, {
            lat: 36.1268,
            lon: -82.0267
        }, {
            lat: 36.2797,
            lon: -81.936
        }, {
            lat: 36.3527,
            lon: -81.7987
        }, {
            lat: 36.3361,
            lon: -81.7081
        }, {
            lat: 36.588,
            lon: -81.6724
        }, {
            lat: 36.5659,
            lon: -80.7234
        }, {
            lat: 36.5438,
            lon: -80.2977
        }, {
            lat: 36.5449,
            lon: -79.6729
        }, {
            lat: 36.5449,
            lon: -77.2559
        }, {
            lat: 36.5505,
            lon: -75.7562
        }, {
            lat: 36.3129,
            lon: -75.7068
        }, {
            lat: 35.7131,
            lon: -75.4129
        }, {
            lat: 35.2041,
            lon: -75.472
        }, {
            lat: 34.9794,
            lon: -76.0748
        }, {
            lat: 34.5258,
            lon: -76.4951
        }, {
            lat: 34.588,
            lon: -76.8109
        }, {
            lat: 34.5314,
            lon: -77.1378
        }, {
            lat: 34.391,
            lon: -77.4481
        }, {
            lat: 34.0481,
            lon: -77.7983
        }, {
            lat: 33.7666,
            lon: -77.926
        }, {
            lat: 33.7963,
            lon: -78.4863
        }]
    }, {
        name: "North Dakota",
        points: [{
            lat: 48.9955,
            lon: -104.0501
        }, {
            lat: 45.9445,
            lon: -104.0446
        }, {
            lat: 45.934,
            lon: -96.5671
        }, {
            lat: 46.3242,
            lon: -96.6028
        }, {
            lat: 46.6636,
            lon: -96.7978
        }, {
            lat: 46.8602,
            lon: -96.7896
        }, {
            lat: 46.9503,
            lon: -96.7896
        }, {
            lat: 47.13,
            lon: -96.8335
        }, {
            lat: 47.2345,
            lon: -96.8335
        }, {
            lat: 47.4132,
            lon: -96.8555
        }, {
            lat: 47.5469,
            lon: -96.8555
        }, {
            lat: 47.6506,
            lon: -96.8774
        }, {
            lat: 47.9918,
            lon: -97.0601
        }, {
            lat: 48.1267,
            lon: -97.126
        }, {
            lat: 48.2859,
            lon: -97.1109
        }, {
            lat: 48.4301,
            lon: -97.1233
        }, {
            lat: 48.553,
            lon: -97.1425
        }, {
            lat: 48.6765,
            lon: -97.0999
        }, {
            lat: 48.7326,
            lon: -97.1356
        }, {
            lat: 48.7951,
            lon: -97.1727
        }, {
            lat: 48.9081,
            lon: -97.229
        }, {
            lat: 48.9982,
            lon: -97.2331
        }, {
            lat: 48.9946,
            lon: -104.0501
        }]
    }, {
        name: "Nebraska",
        points: [{
            lat: 42.9986,
            lon: -104.0543
        }, {
            lat: 41.0027,
            lon: -104.0543
        }, {
            lat: 41.0006,
            lon: -102.0506
        }, {
            lat: 40.0034,
            lon: -102.0493
        }, {
            lat: 39.9992,
            lon: -95.3091
        }, {
            lat: 40.2397,
            lon: -95.4808
        }, {
            lat: 40.313,
            lon: -95.647
        }, {
            lat: 40.4302,
            lon: -95.6689
        }, {
            lat: 40.59,
            lon: -95.75
        }, {
            lat: 40.6827,
            lon: -95.8543
        }, {
            lat: 40.8138,
            lon: -95.8447
        }, {
            lat: 40.9654,
            lon: -95.8324
        }, {
            lat: 41.0794,
            lon: -95.8667
        }, {
            lat: 41.2923,
            lon: -95.8722
        }, {
            lat: 41.4458,
            lon: -95.9354
        }, {
            lat: 41.5261,
            lon: -95.9999
        }, {
            lat: 41.638,
            lon: -96.0988
        }, {
            lat: 41.7703,
            lon: -96.0686
        }, {
            lat: 41.8368,
            lon: -96.1084
        }, {
            lat: 41.9677,
            lon: -96.1372
        }, {
            lat: 42.033,
            lon: -96.2402
        }, {
            lat: 42.1155,
            lon: -96.2746
        }, {
            lat: 42.2021,
            lon: -96.3583
        }, {
            lat: 42.2448,
            lon: -96.3281
        }, {
            lat: 42.389,
            lon: -96.4188
        }, {
            lat: 42.4731,
            lon: -96.4037
        }, {
            lat: 42.5369,
            lon: -96.6357
        }, {
            lat: 42.6057,
            lon: -96.7099
        }, {
            lat: 42.6532,
            lon: -96.6893
        }, {
            lat: 42.6602,
            lon: -96.7621
        }, {
            lat: 42.7147,
            lon: -96.839
        }, {
            lat: 42.7571,
            lon: -96.9763
        }, {
            lat: 42.8085,
            lon: -97.2029
        }, {
            lat: 42.8458,
            lon: -97.229
        }, {
            lat: 42.8629,
            lon: -97.3979
        }, {
            lat: 42.8427,
            lon: -97.5133
        }, {
            lat: 42.8488,
            lon: -97.6149
        }, {
            lat: 42.8659,
            lon: -97.8456
        }, {
            lat: 42.747,
            lon: -97.998
        }, {
            lat: 42.8337,
            lon: -98.145
        }, {
            lat: 42.9293,
            lon: -98.4485
        }, {
            lat: 42.9966,
            lon: -98.502
        }, {
            lat: 43.0006,
            lon: -104.0543
        }]
    }, {
        name: "New Hampshire",
        points: [{
            lat: 45.0153,
            lon: -71.5045
        }, {
            lat: 45.0532,
            lon: -71.4977
        }, {
            lat: 45.091,
            lon: -71.4619
        }, {
            lat: 45.152,
            lon: -71.4276
        }, {
            lat: 45.2043,
            lon: -71.396
        }, {
            lat: 45.2362,
            lon: -71.4455
        }, {
            lat: 45.2372,
            lon: -71.3878
        }, {
            lat: 45.271,
            lon: -71.3617
        }, {
            lat: 45.3029,
            lon: -71.2834
        }, {
            lat: 45.2507,
            lon: -71.2299
        }, {
            lat: 45.2391,
            lon: -71.1818
        }, {
            lat: 45.2478,
            lon: -71.1584
        }, {
            lat: 45.2469,
            lon: -71.1337
        }, {
            lat: 45.2846,
            lon: -71.1145
        }, {
            lat: 45.3058,
            lon: -71.0843
        }, {
            lat: 44.923,
            lon: -71.0527
        }, {
            lat: 44.3592,
            lon: -71.0143
        }, {
            lat: 43.7364,
            lon: -70.984
        }, {
            lat: 43.5704,
            lon: -70.9731
        }, {
            lat: 43.3621,
            lon: -70.9813
        }, {
            lat: 43.2942,
            lon: -70.903
        }, {
            lat: 43.2272,
            lon: -70.8083
        }, {
            lat: 43.1411,
            lon: -70.8261
        }, {
            lat: 43.1,
            lon: -70.7671
        }, {
            lat: 43.0498,
            lon: -70.697
        }, {
            lat: 42.9222,
            lon: -70.5583
        }, {
            lat: 42.876,
            lon: -70.6146
        }, {
            lat: 42.8599,
            lon: -70.8467
        }, {
            lat: 42.886,
            lon: -70.9195
        }, {
            lat: 42.8105,
            lon: -71.0609
        }, {
            lat: 42.8125,
            lon: -71.142
        }, {
            lat: 42.7904,
            lon: -71.1873
        }, {
            lat: 42.7349,
            lon: -71.1832
        }, {
            lat: 42.745,
            lon: -71.2463
        }, {
            lat: 42.6986,
            lon: -71.2972
        }, {
            lat: 42.7077,
            lon: -71.7421
        }, {
            lat: 42.7268,
            lon: -72.459
        }, {
            lat: 42.7621,
            lon: -72.5098
        }, {
            lat: 42.8105,
            lon: -72.5414
        }, {
            lat: 42.8609,
            lon: -72.5592
        }, {
            lat: 42.8981,
            lon: -72.5317
        }, {
            lat: 42.9524,
            lon: -72.54
        }, {
            lat: 42.9745,
            lon: -72.4919
        }, {
            lat: 42.9906,
            lon: -72.4658
        }, {
            lat: 43.0127,
            lon: -72.448
        }, {
            lat: 43.0287,
            lon: -72.4713
        }, {
            lat: 43.0508,
            lon: -72.4713
        }, {
            lat: 43.0819,
            lon: -72.4356
        }, {
            lat: 43.104,
            lon: -72.4452
        }, {
            lat: 43.118,
            lon: -72.4342
        }, {
            lat: 43.1501,
            lon: -72.459
        }, {
            lat: 43.2052,
            lon: -72.4329
        }, {
            lat: 43.2562,
            lon: -72.4384
        }, {
            lat: 43.2812,
            lon: -72.4095
        }, {
            lat: 43.3741,
            lon: -72.415
        }, {
            lat: 43.4988,
            lon: -72.3807
        }, {
            lat: 43.5127,
            lon: -72.4013
        }, {
            lat: 43.5834,
            lon: -72.3779
        }, {
            lat: 43.642,
            lon: -72.3134
        }, {
            lat: 43.6758,
            lon: -72.3024
        }, {
            lat: 43.7036,
            lon: -72.3079
        }, {
            lat: 43.7344,
            lon: -72.2694
        }, {
            lat: 43.7741,
            lon: -72.2035
        }, {
            lat: 43.8187,
            lon: -72.187
        }, {
            lat: 43.8672,
            lon: -72.1843
        }, {
            lat: 43.889,
            lon: -72.1568
        }, {
            lat: 43.9117,
            lon: -72.1321
        }, {
            lat: 43.9454,
            lon: -72.1198
        }, {
            lat: 44.0017,
            lon: -72.117
        }, {
            lat: 44.0856,
            lon: -72.047
        }, {
            lat: 44.1093,
            lon: -72.0552
        }, {
            lat: 44.1428,
            lon: -72.0387
        }, {
            lat: 44.1763,
            lon: -72.058
        }, {
            lat: 44.1999,
            lon: -72.0703
        }, {
            lat: 44.2511,
            lon: -72.0525
        }, {
            lat: 44.2796,
            lon: -72.0607
        }, {
            lat: 44.3199,
            lon: -72.0291
        }, {
            lat: 44.3376,
            lon: -71.9783
        }, {
            lat: 44.3592,
            lon: -71.9289
        }, {
            lat: 44.3366,
            lon: -71.8712
        }, {
            lat: 44.3572,
            lon: -71.8135
        }, {
            lat: 44.3877,
            lon: -71.8108
        }, {
            lat: 44.4014,
            lon: -71.7778
        }, {
            lat: 44.4122,
            lon: -71.738
        }, {
            lat: 44.4416,
            lon: -71.6597
        }, {
            lat: 44.4642,
            lon: -71.6542
        }, {
            lat: 44.5073,
            lon: -71.5855
        }, {
            lat: 44.5357,
            lon: -71.5746
        }, {
            lat: 44.5601,
            lon: -71.6048
        }, {
            lat: 44.568,
            lon: -71.5897
        }, {
            lat: 44.568,
            lon: -71.5649
        }, {
            lat: 44.5914,
            lon: -71.5485
        }, {
            lat: 44.5993,
            lon: -71.5649
        }, {
            lat: 44.6315,
            lon: -71.554
        }, {
            lat: 44.6608,
            lon: -71.5924
        }, {
            lat: 44.7243,
            lon: -71.613
        }, {
            lat: 44.7526,
            lon: -71.6364
        }, {
            lat: 44.8198,
            lon: -71.5746
        }, {
            lat: 44.8325,
            lon: -71.5526
        }, {
            lat: 44.8539,
            lon: -71.5553
        }, {
            lat: 44.8744,
            lon: -71.5279
        }, {
            lat: 44.9123,
            lon: -71.5018
        }, {
            lat: 44.9366,
            lon: -71.5182
        }, {
            lat: 44.9697,
            lon: -71.5237
        }, {
            lat: 44.9862,
            lon: -71.5443
        }, {
            lat: 45.0017,
            lon: -71.5237
        }, {
            lat: 45.0163,
            lon: -71.5045
        }]
    }, {
        name: "New Jersey",
        points: [{
            lat: 41.3572,
            lon: -74.695
        }, {
            lat: 41.3394,
            lon: -74.6559
        }, {
            lat: 40.9934,
            lon: -73.894
        }, {
            lat: 40.8398,
            lon: -73.9586
        }, {
            lat: 40.7691,
            lon: -74.0094
        }, {
            lat: 40.6994,
            lon: -74.0231
        }, {
            lat: 40.6786,
            lon: -74.0437
        }, {
            lat: 40.6515,
            lon: -74.0808
        }, {
            lat: 40.6421,
            lon: -74.1357
        }, {
            lat: 40.6452,
            lon: -74.1962
        }, {
            lat: 40.5952,
            lon: -74.2003
        }, {
            lat: 40.5566,
            lon: -74.2195
        }, {
            lat: 40.4877,
            lon: -74.2552
        }, {
            lat: 40.4762,
            lon: -74.2264
        }, {
            lat: 40.5253,
            lon: -73.9503
        }, {
            lat: 40.4846,
            lon: -73.8885
        }, {
            lat: 40.0045,
            lon: -73.9352
        }, {
            lat: 39.6131,
            lon: -74.041
        }, {
            lat: 39.4744,
            lon: -74.2209
        }, {
            lat: 38.9882,
            lon: -74.6713
        }, {
            lat: 38.8664,
            lon: -74.8553
        }, {
            lat: 38.8472,
            lon: -75.0476
        }, {
            lat: 39.0565,
            lon: -75.1685
        }, {
            lat: 39.2525,
            lon: -75.325
        }, {
            lat: 39.45,
            lon: -75.5544
        }, {
            lat: 39.4966,
            lon: -75.5612
        }, {
            lat: 39.4998,
            lon: -75.5283
        }, {
            lat: 39.5411,
            lon: -75.5338
        }, {
            lat: 39.5761,
            lon: -75.509
        }, {
            lat: 39.6237,
            lon: -75.5708
        }, {
            lat: 39.6713,
            lon: -75.5104
        }, {
            lat: 39.7167,
            lon: -75.4843
        }, {
            lat: 39.8033,
            lon: -75.4156
        }, {
            lat: 39.836,
            lon: -75.2632
        }, {
            lat: 39.8823,
            lon: -75.1918
        }, {
            lat: 40.118,
            lon: -74.7922
        }, {
            lat: 40.139,
            lon: -74.7331
        }, {
            lat: 40.2565,
            lon: -74.8485
        }, {
            lat: 40.3361,
            lon: -74.9419
        }, {
            lat: 40.402,
            lon: -74.9721
        }, {
            lat: 40.424,
            lon: -75.0627
        }, {
            lat: 40.4898,
            lon: -75.0613
        }, {
            lat: 40.5733,
            lon: -75.1067
        }, {
            lat: 40.5639,
            lon: -75.2138
        }, {
            lat: 40.6192,
            lon: -75.2028
        }, {
            lat: 40.6494,
            lon: -75.2069
        }, {
            lat: 40.8284,
            lon: -75.0806
        }, {
            lat: 40.8429,
            lon: -75.0998
        }, {
            lat: 40.8689,
            lon: -75.0504
        }, {
            lat: 40.9913,
            lon: -75.1369
        }, {
            lat: 41.2293,
            lon: -74.8677
        }, {
            lat: 41.3479,
            lon: -74.7537
        }, {
            lat: 41.3469,
            lon: -74.7249
        }, {
            lat: 41.3593,
            lon: -74.696
        }]
    }, {
        name: "New Mexico",
        points: [{
            lat: 36.9971,
            lon: -109.0448
        }, {
            lat: 31.3337,
            lon: -109.0489
        }, {
            lat: 31.3349,
            lon: -108.214
        }, {
            lat: 31.7795,
            lon: -108.2071
        }, {
            lat: 31.783,
            lon: -106.5317
        }, {
            lat: 32.0034,
            lon: -106.6223
        }, {
            lat: 31.9999,
            lon: -103.0696
        }, {
            lat: 36.9982,
            lon: -103.0023
        }, {
            lat: 36.9982,
            lon: -109.0475
        }]
    }, {
        name: "Nevada",
        points: [{
            lat: 41.9922,
            lon: -120.0037
        }, {
            lat: 42.0003,
            lon: -117.9602
        }, {
            lat: 42.0003,
            lon: -117.0264
        }, {
            lat: 42.0003,
            lon: -115.73
        }, {
            lat: 41.9952,
            lon: -114.0436
        }, {
            lat: 38.2856,
            lon: -114.0546
        }, {
            lat: 36.1955,
            lon: -114.0491
        }, {
            lat: 36.1334,
            lon: -114.0985
        }, {
            lat: 36.1068,
            lon: -114.126
        }, {
            lat: 36.0891,
            lon: -114.115
        }, {
            lat: 36.0313,
            lon: -114.1534
        }, {
            lat: 36.0136,
            lon: -114.2468
        }, {
            lat: 36.0624,
            lon: -114.3292
        }, {
            lat: 36.1024,
            lon: -114.3237
        }, {
            lat: 36.1434,
            lon: -114.3896
        }, {
            lat: 36.129,
            lon: -114.5105
        }, {
            lat: 36.1467,
            lon: -114.5215
        }, {
            lat: 36.1556,
            lon: -114.5654
        }, {
            lat: 36.1334,
            lon: -114.6204
        }, {
            lat: 36.1157,
            lon: -114.6863
        }, {
            lat: 36.0979,
            lon: -114.7742
        }, {
            lat: 36.058,
            lon: -114.7357
        }, {
            lat: 36.0447,
            lon: -114.7522
        }, {
            lat: 35.9691,
            lon: -114.7412
        }, {
            lat: 35.898,
            lon: -114.7028
        }, {
            lat: 35.8757,
            lon: -114.6588
        }, {
            lat: 35.8579,
            lon: -114.7083
        }, {
            lat: 35.8267,
            lon: -114.6973
        }, {
            lat: 35.8089,
            lon: -114.7192
        }, {
            lat: 35.6618,
            lon: -114.6973
        }, {
            lat: 35.6037,
            lon: -114.6478
        }, {
            lat: 35.5814,
            lon: -114.6863
        }, {
            lat: 35.5233,
            lon: -114.6533
        }, {
            lat: 35.5054,
            lon: -114.6863
        }, {
            lat: 35.407,
            lon: -114.6149
        }, {
            lat: 35.3218,
            lon: -114.5929
        }, {
            lat: 35.1783,
            lon: -114.5737
        }, {
            lat: 35.1199,
            lon: -114.6094
        }, {
            lat: 35.1109,
            lon: -114.6368
        }, {
            lat: 35.0929,
            lon: -114.6368
        }, {
            lat: 35.075,
            lon: -114.6039
        }, {
            lat: 35.048,
            lon: -114.6259
        }, {
            lat: 35.0345,
            lon: -114.6478
        }, {
            lat: 35.003,
            lon: -114.6423
        }, {
            lat: 35.1334,
            lon: -114.8016
        }, {
            lat: 37.2303,
            lon: -117.5153
        }, {
            lat: 39,
            lon: -120.0009
        }, {
            lat: 41.9942,
            lon: -119.9982
        }]
    }, {
        name: "New York",
        points: [{
            lat: 42.5142,
            lon: -79.7624
        }, {
            lat: 42.7783,
            lon: -79.0672
        }, {
            lat: 42.8508,
            lon: -78.9313
        }, {
            lat: 42.9061,
            lon: -78.9024
        }, {
            lat: 42.9554,
            lon: -78.9313
        }, {
            lat: 42.9584,
            lon: -78.9656
        }, {
            lat: 42.9886,
            lon: -79.0219
        }, {
            lat: 43.0568,
            lon: -79.0027
        }, {
            lat: 43.0769,
            lon: -79.0727
        }, {
            lat: 43.122,
            lon: -79.0713
        }, {
            lat: 43.1441,
            lon: -79.0302
        }, {
            lat: 43.1801,
            lon: -79.0576
        }, {
            lat: 43.2482,
            lon: -79.0604
        }, {
            lat: 43.2812,
            lon: -79.0837
        }, {
            lat: 43.4509,
            lon: -79.2004
        }, {
            lat: 43.6311,
            lon: -78.6909
        }, {
            lat: 43.6321,
            lon: -76.7958
        }, {
            lat: 43.9987,
            lon: -76.4978
        }, {
            lat: 44.0965,
            lon: -76.4388
        }, {
            lat: 44.1349,
            lon: -76.3536
        }, {
            lat: 44.1989,
            lon: -76.3124
        }, {
            lat: 44.2049,
            lon: -76.2437
        }, {
            lat: 44.2413,
            lon: -76.1655
        }, {
            lat: 44.2973,
            lon: -76.1353
        }, {
            lat: 44.3327,
            lon: -76.0474
        }, {
            lat: 44.3553,
            lon: -75.9856
        }, {
            lat: 44.3749,
            lon: -75.9196
        }, {
            lat: 44.3994,
            lon: -75.873
        }, {
            lat: 44.4308,
            lon: -75.8221
        }, {
            lat: 44.474,
            lon: -75.8098
        }, {
            lat: 44.5425,
            lon: -75.7288
        }, {
            lat: 44.6647,
            lon: -75.5585
        }, {
            lat: 44.7672,
            lon: -75.4088
        }, {
            lat: 44.8101,
            lon: -75.3442
        }, {
            lat: 44.8383,
            lon: -75.3058
        }, {
            lat: 44.8676,
            lon: -75.2399
        }, {
            lat: 44.9211,
            lon: -75.1204
        }, {
            lat: 44.9609,
            lon: -74.9995
        }, {
            lat: 44.9803,
            lon: -74.9899
        }, {
            lat: 44.9852,
            lon: -74.9103
        }, {
            lat: 45.0017,
            lon: -74.8856
        }, {
            lat: 45.0153,
            lon: -74.8306
        }, {
            lat: 45.0046,
            lon: -74.7633
        }, {
            lat: 45.0027,
            lon: -74.707
        }, {
            lat: 45.0007,
            lon: -74.5642
        }, {
            lat: 44.992,
            lon: -74.1467
        }, {
            lat: 45.0037,
            lon: -73.7306
        }, {
            lat: 45.0085,
            lon: -73.4203
        }, {
            lat: 45.0109,
            lon: -73.343
        }, {
            lat: 44.9874,
            lon: -73.3547
        }, {
            lat: 44.9648,
            lon: -73.3379
        }, {
            lat: 44.916,
            lon: -73.3396
        }, {
            lat: 44.8354,
            lon: -73.3739
        }, {
            lat: 44.8013,
            lon: -73.3324
        }, {
            lat: 44.7419,
            lon: -73.3667
        }, {
            lat: 44.6139,
            lon: -73.3873
        }, {
            lat: 44.5787,
            lon: -73.3736
        }, {
            lat: 44.4916,
            lon: -73.3049
        }, {
            lat: 44.4289,
            lon: -73.2953
        }, {
            lat: 44.3513,
            lon: -73.3365
        }, {
            lat: 44.2757,
            lon: -73.3118
        }, {
            lat: 44.198,
            lon: -73.3818
        }, {
            lat: 44.1142,
            lon: -73.4079
        }, {
            lat: 44.0511,
            lon: -73.4367
        }, {
            lat: 44.0165,
            lon: -73.4065
        }, {
            lat: 43.9375,
            lon: -73.4079
        }, {
            lat: 43.8771,
            lon: -73.3749
        }, {
            lat: 43.8167,
            lon: -73.3914
        }, {
            lat: 43.779,
            lon: -73.3557
        }, {
            lat: 43.646,
            lon: -73.4244
        }, {
            lat: 43.5893,
            lon: -73.434
        }, {
            lat: 43.5655,
            lon: -73.3969
        }, {
            lat: 43.6112,
            lon: -73.3818
        }, {
            lat: 43.6271,
            lon: -73.3049
        }, {
            lat: 43.5764,
            lon: -73.3063
        }, {
            lat: 43.5675,
            lon: -73.2582
        }, {
            lat: 43.5227,
            lon: -73.2445
        }, {
            lat: 43.2582,
            lon: -73.2582
        }, {
            lat: 42.9715,
            lon: -73.2733
        }, {
            lat: 42.8004,
            lon: -73.2898
        }, {
            lat: 42.746,
            lon: -73.2664
        }, {
            lat: 42.463,
            lon: -73.3708
        }, {
            lat: 42.084,
            lon: -73.5095
        }, {
            lat: 42.0218,
            lon: -73.4903
        }, {
            lat: 41.8808,
            lon: -73.4999
        }, {
            lat: 41.2953,
            lon: -73.5535
        }, {
            lat: 41.2128,
            lon: -73.4834
        }, {
            lat: 41.1011,
            lon: -73.7275
        }, {
            lat: 41.0237,
            lon: -73.6644
        }, {
            lat: 40.9851,
            lon: -73.6578
        }, {
            lat: 40.9509,
            lon: -73.6132
        }, {
            lat: 41.1869,
            lon: -72.4823
        }, {
            lat: 41.2551,
            lon: -72.095
        }, {
            lat: 41.3005,
            lon: -71.9714
        }, {
            lat: 41.3108,
            lon: -71.9193
        }, {
            lat: 41.1838,
            lon: -71.7915
        }, {
            lat: 41.1249,
            lon: -71.7929
        }, {
            lat: 41.0462,
            lon: -71.7517
        }, {
            lat: 40.6306,
            lon: -72.9465
        }, {
            lat: 40.5368,
            lon: -73.4628
        }, {
            lat: 40.4887,
            lon: -73.8885
        }, {
            lat: 40.5232,
            lon: -73.949
        }, {
            lat: 40.4772,
            lon: -74.2271
        }, {
            lat: 40.4861,
            lon: -74.2532
        }, {
            lat: 40.6468,
            lon: -74.1866
        }, {
            lat: 40.6556,
            lon: -74.0547
        }, {
            lat: 40.7618,
            lon: -74.0156
        }, {
            lat: 40.8699,
            lon: -73.9421
        }, {
            lat: 40.998,
            lon: -73.8934
        }, {
            lat: 41.0343,
            lon: -73.9854
        }, {
            lat: 41.3268,
            lon: -74.6274
        }, {
            lat: 41.3583,
            lon: -74.7084
        }, {
            lat: 41.3811,
            lon: -74.7101
        }, {
            lat: 41.4386,
            lon: -74.8265
        }, {
            lat: 41.5075,
            lon: -74.9913
        }, {
            lat: 41.6,
            lon: -75.0668
        }, {
            lat: 41.6719,
            lon: -75.0366
        }, {
            lat: 41.7672,
            lon: -75.0545
        }, {
            lat: 41.8808,
            lon: -75.1945
        }, {
            lat: 42.0013,
            lon: -75.3552
        }, {
            lat: 42.0003,
            lon: -75.4266
        }, {
            lat: 42.0013,
            lon: -77.0306
        }, {
            lat: 41.9993,
            lon: -79.725
        }, {
            lat: 42.0003,
            lon: -79.7621
        }, {
            lat: 42.1827,
            lon: -79.7621
        }, {
            lat: 42.5146,
            lon: -79.7621
        }]
    }, {
        name: "Ohio",
        points: [{
            lat: 38.4385,
            lon: -82.3425
        }, {
            lat: 38.5707,
            lon: -82.2917
        }, {
            lat: 38.5965,
            lon: -82.1722
        }, {
            lat: 38.7712,
            lon: -82.1997
        }, {
            lat: 39.0181,
            lon: -82.0294
        }, {
            lat: 38.875,
            lon: -81.8729
        }, {
            lat: 38.9359,
            lon: -81.7644
        }, {
            lat: 39.1865,
            lon: -81.7397
        }, {
            lat: 39.2812,
            lon: -81.568
        }, {
            lat: 39.4022,
            lon: -81.4444
        }, {
            lat: 39.346,
            lon: -81.3661
        }, {
            lat: 39.4479,
            lon: -81.1244
        }, {
            lat: 39.5549,
            lon: -81.0352
        }, {
            lat: 39.6565,
            lon: -80.8374
        }, {
            lat: 39.8676,
            lon: -80.7948
        }, {
            lat: 40.5941,
            lon: -80.652
        }, {
            lat: 40.6223,
            lon: -80.5188
        }, {
            lat: 42.321,
            lon: -80.5229
        }, {
            lat: 42.2153,
            lon: -81.2521
        }, {
            lat: 41.9962,
            lon: -81.6806
        }, {
            lat: 41.9962,
            lon: -81.7094
        }, {
            lat: 41.677,
            lon: -82.3961
        }, {
            lat: 41.6709,
            lon: -82.6845
        }, {
            lat: 41.9585,
            lon: -83.1157
        }, {
            lat: 41.7314,
            lon: -83.4219
        }, {
            lat: 41.6944,
            lon: -84.8021
        }, {
            lat: 39.1056,
            lon: -84.8172
        }, {
            lat: 39.1407,
            lon: -84.7444
        }, {
            lat: 39.096,
            lon: -84.5068
        }, {
            lat: 39.0459,
            lon: -84.4052
        }, {
            lat: 38.9434,
            lon: -84.2857
        }, {
            lat: 38.8055,
            lon: -84.2432
        }, {
            lat: 38.7712,
            lon: -84.0866
        }, {
            lat: 38.7519,
            lon: -83.8916
        }, {
            lat: 38.633,
            lon: -83.6636
        }, {
            lat: 38.6962,
            lon: -83.5263
        }, {
            lat: 38.5976,
            lon: -83.2736
        }, {
            lat: 38.6169,
            lon: -83.1445
        }, {
            lat: 38.7027,
            lon: -83.0127
        }, {
            lat: 38.7327,
            lon: -82.8973
        }, {
            lat: 38.5782,
            lon: -82.8355
        }, {
            lat: 38.3761,
            lon: -82.5952
        }]
    }, {
        name: "Oklahoma",
        points: [{
            lat: 37.0015,
            lon: -103.0051
        }, {
            lat: 36.503,
            lon: -103.0037
        }, {
            lat: 36.4986,
            lon: -100.0003
        }, {
            lat: 34.562,
            lon: -99.9934
        }, {
            lat: 34.3763,
            lon: -99.6172
        }, {
            lat: 34.4137,
            lon: -99.5787
        }, {
            lat: 34.3763,
            lon: -99.429
        }, {
            lat: 34.4534,
            lon: -99.3823
        }, {
            lat: 34.3616,
            lon: -99.2505
        }, {
            lat: 34.2129,
            lon: -99.1818
        }, {
            lat: 34.1982,
            lon: -98.9648
        }, {
            lat: 34.1232,
            lon: -98.7424
        }, {
            lat: 34.1254,
            lon: -98.557
        }, {
            lat: 34.0618,
            lon: -98.4746
        }, {
            lat: 34.1414,
            lon: -98.3743
        }, {
            lat: 34.1118,
            lon: -98.1793
        }, {
            lat: 34.006,
            lon: -98.0818
        }, {
            lat: 33.8966,
            lon: -97.9843
        }, {
            lat: 33.8487,
            lon: -97.8662
        }, {
            lat: 33.9798,
            lon: -97.6932
        }, {
            lat: 33.8841,
            lon: -97.4529
        }, {
            lat: 33.8282,
            lon: -97.4611
        }, {
            lat: 33.8237,
            lon: -97.3622
        }, {
            lat: 33.9001,
            lon: -97.2166
        }, {
            lat: 33.7426,
            lon: -97.1645
        }, {
            lat: 33.7392,
            lon: -97.093
        }, {
            lat: 33.9354,
            lon: -96.9173
        }, {
            lat: 33.8704,
            lon: -96.8527
        }, {
            lat: 33.8271,
            lon: -96.7484
        }, {
            lat: 33.8202,
            lon: -96.5602
        }, {
            lat: 33.7769,
            lon: -96.5053
        }, {
            lat: 33.6912,
            lon: -96.3474
        }, {
            lat: 33.8522,
            lon: -96.0205
        }, {
            lat: 33.8396,
            lon: -95.8379
        }, {
            lat: 33.8887,
            lon: -95.7349
        }, {
            lat: 33.8841,
            lon: -95.5426
        }, {
            lat: 33.8738,
            lon: -95.2831
        }, {
            lat: 33.957,
            lon: -95.2171
        }, {
            lat: 33.867,
            lon: -95.0496
        }, {
            lat: 33.7677,
            lon: -94.8862
        }, {
            lat: 33.6695,
            lon: -94.6692
        }, {
            lat: 33.6386,
            lon: -94.4852
        }, {
            lat: 35.3499,
            lon: -94.4357
        }, {
            lat: 36.3715,
            lon: -94.5978
        }, {
            lat: 36.4942,
            lon: -94.6198
        }, {
            lat: 36.9982,
            lon: -94.6211
        }, {
            lat: 37.0004,
            lon: -103.0064
        }]
    }, {
        name: "Oregon",
        points: [{
            lat: 46.2587,
            lon: -124.2444
        }, {
            lat: 46.2634,
            lon: -124.0384
        }, {
            lat: 46.2891,
            lon: -124.0205
        }, {
            lat: 46.2407,
            lon: -123.9368
        }, {
            lat: 46.2388,
            lon: -123.8681
        }, {
            lat: 46.2691,
            lon: -123.739
        }, {
            lat: 46.252,
            lon: -123.6868
        }, {
            lat: 46.2596,
            lon: -123.6456
        }, {
            lat: 46.2577,
            lon: -123.5468
        }, {
            lat: 46.2672,
            lon: -123.4863
        }, {
            lat: 46.2369,
            lon: -123.4287
        }, {
            lat: 46.1817,
            lon: -123.4287
        }, {
            lat: 46.1513,
            lon: -123.3765
        }, {
            lat: 46.1494,
            lon: -123.3051
        }, {
            lat: 46.1874,
            lon: -123.1512
        }, {
            lat: 46.138,
            lon: -123.0222
        }, {
            lat: 46.098,
            lon: -122.9398
        }, {
            lat: 46.0551,
            lon: -122.8848
        }, {
            lat: 45.9588,
            lon: -122.8189
        }, {
            lat: 45.9053,
            lon: -122.8162
        }, {
            lat: 45.8824,
            lon: -122.7887
        }, {
            lat: 45.8173,
            lon: -122.7969
        }, {
            lat: 45.7637,
            lon: -122.7585
        }, {
            lat: 45.6851,
            lon: -122.775
        }, {
            lat: 45.6505,
            lon: -122.753
        }, {
            lat: 45.6064,
            lon: -122.5937
        }, {
            lat: 45.5679,
            lon: -122.4426
        }, {
            lat: 45.5756,
            lon: -122.3712
        }, {
            lat: 45.5506,
            lon: -122.3245
        }, {
            lat: 45.5641,
            lon: -122.2064
        }, {
            lat: 45.5987,
            lon: -122.0856
        }, {
            lat: 45.6659,
            lon: -121.8933
        }, {
            lat: 45.6812,
            lon: -121.8906
        }, {
            lat: 45.7081,
            lon: -121.8164
        }, {
            lat: 45.6966,
            lon: -121.756
        }, {
            lat: 45.7254,
            lon: -121.5335
        }, {
            lat: 45.6928,
            lon: -121.3907
        }, {
            lat: 45.7081,
            lon: -121.3646
        }, {
            lat: 45.6582,
            lon: -121.2039
        }, {
            lat: 45.6083,
            lon: -121.1957
        }, {
            lat: 45.6102,
            lon: -121.1462
        }, {
            lat: 45.6524,
            lon: -121.0803
        }, {
            lat: 45.6582,
            lon: -121.0144
        }, {
            lat: 45.6467,
            lon: -120.9814
        }, {
            lat: 45.6563,
            lon: -120.943
        }, {
            lat: 45.6371,
            lon: -120.91
        }, {
            lat: 45.6755,
            lon: -120.8524
        }, {
            lat: 45.7445,
            lon: -120.6052
        }, {
            lat: 45.7158,
            lon: -120.531
        }, {
            lat: 45.6966,
            lon: -120.4733
        }, {
            lat: 45.7234,
            lon: -120.2893
        }, {
            lat: 45.7234,
            lon: -120.2124
        }, {
            lat: 45.7714,
            lon: -120.1575
        }, {
            lat: 45.8211,
            lon: -119.968
        }, {
            lat: 45.8498,
            lon: -119.7839
        }, {
            lat: 45.8575,
            lon: -119.6658
        }, {
            lat: 45.9149,
            lon: -119.6136
        }, {
            lat: 45.9244,
            lon: -119.5724
        }, {
            lat: 45.911,
            lon: -119.5258
        }, {
            lat: 45.9378,
            lon: -119.2676
        }, {
            lat: 45.9168,
            lon: -119.1687
        }, {
            lat: 45.9779,
            lon: -119.0149
        }, {
            lat: 46.0027,
            lon: -118.9847
        }, {
            lat: 45.997,
            lon: -116.9165
        }, {
            lat: 45.9569,
            lon: -116.8781
        }, {
            lat: 45.8957,
            lon: -116.8588
        }, {
            lat: 45.8747,
            lon: -116.8066
        }, {
            lat: 45.8307,
            lon: -116.7902
        }, {
            lat: 45.8192,
            lon: -116.7654
        }, {
            lat: 45.8231,
            lon: -116.7105
        }, {
            lat: 45.7828,
            lon: -116.6748
        }, {
            lat: 45.7828,
            lon: -116.6144
        }, {
            lat: 45.7522,
            lon: -116.543
        }, {
            lat: 45.6889,
            lon: -116.5402
        }, {
            lat: 45.6121,
            lon: -116.4606
        }, {
            lat: 45.5006,
            lon: -116.5567
        }, {
            lat: 45.464,
            lon: -116.5567
        }, {
            lat: 45.4447,
            lon: -116.5869
        }, {
            lat: 45.3213,
            lon: -116.6721
        }, {
            lat: 45.2633,
            lon: -116.694
        }, {
            lat: 45.1414,
            lon: -116.7325
        }, {
            lat: 45.1065,
            lon: -116.7764
        }, {
            lat: 45.0696,
            lon: -116.7847
        }, {
            lat: 45.0231,
            lon: -116.8451
        }, {
            lat: 44.9765,
            lon: -116.8616
        }, {
            lat: 44.9298,
            lon: -116.8286
        }, {
            lat: 44.7955,
            lon: -116.9302
        }, {
            lat: 44.7487,
            lon: -117.0346
        }, {
            lat: 44.5787,
            lon: -117.1225
        }, {
            lat: 44.5455,
            lon: -117.1445
        }, {
            lat: 44.4847,
            lon: -117.2076
        }, {
            lat: 44.4789,
            lon: -117.2269
        }, {
            lat: 44.4063,
            lon: -117.2269
        }, {
            lat: 44.3926,
            lon: -117.2488
        }, {
            lat: 44.3455,
            lon: -117.1939
        }, {
            lat: 44.2983,
            lon: -117.2269
        }, {
            lat: 44.257,
            lon: -117.1774
        }, {
            lat: 44.2609,
            lon: -117.1445
        }, {
            lat: 44.2806,
            lon: -117.1005
        }, {
            lat: 44.2314,
            lon: -117.0511
        }, {
            lat: 44.2491,
            lon: -117.0428
        }, {
            lat: 44.2432,
            lon: -116.9797
        }, {
            lat: 44.194,
            lon: -116.9742
        }, {
            lat: 44.1664,
            lon: -116.8945
        }, {
            lat: 44.0935,
            lon: -116.933
        }, {
            lat: 44.0836,
            lon: -116.9714
        }, {
            lat: 44.0521,
            lon: -116.9879
        }, {
            lat: 44.0244,
            lon: -116.9302
        }, {
            lat: 43.9533,
            lon: -116.9659
        }, {
            lat: 43.8207,
            lon: -117.0209
        }, {
            lat: 43.6639,
            lon: -117.0264
        }, {
            lat: 42.0024,
            lon: -117.0264
        }, {
            lat: 41.9983,
            lon: -121.2836
        }, {
            lat: 42.0085,
            lon: -122.5003
        }, {
            lat: 42.0064,
            lon: -123.0798
        }, {
            lat: 42.0105,
            lon: -123.154
        }, {
            lat: 42.0044,
            lon: -123.2419
        }, {
            lat: 42.0024,
            lon: -123.6209
        }, {
            lat: 41.9952,
            lon: -124.3982
        }, {
            lat: 42.1593,
            lon: -124.5493
        }, {
            lat: 42.6521,
            lon: -124.5877
        }, {
            lat: 42.8115,
            lon: -124.7305
        }, {
            lat: 43.7552,
            lon: -124.4119
        }, {
            lat: 46.0065,
            lon: -124.2554
        }, {
            lat: 46.2587,
            lon: -124.2444
        }]
    }, {
        name: "Pennsylvania",
        points: [{
            lat: 42.3261,
            lon: -80.5174
        }, {
            lat: 42.3961,
            lon: -80.0821
        }, {
            lat: 42.5167,
            lon: -79.7621
        }, {
            lat: 42.0003,
            lon: -79.7607
        }, {
            lat: 41.9983,
            lon: -75.358
        }, {
            lat: 41.9431,
            lon: -75.2673
        }, {
            lat: 41.8696,
            lon: -75.1794
        }, {
            lat: 41.7713,
            lon: -75.0586
        }, {
            lat: 41.6729,
            lon: -75.0366
        }, {
            lat: 41.6021,
            lon: -75.0641
        }, {
            lat: 41.5086,
            lon: -74.9927
        }, {
            lat: 41.4283,
            lon: -74.7935
        }, {
            lat: 41.3933,
            lon: -74.707
        }, {
            lat: 41.2282,
            lon: -74.8608
        }, {
            lat: 40.983,
            lon: -75.1355
        }, {
            lat: 40.8554,
            lon: -75.049
        }, {
            lat: 40.6806,
            lon: -75.1904
        }, {
            lat: 40.5639,
            lon: -75.2124
        }, {
            lat: 40.5743,
            lon: -75.1025
        }, {
            lat: 40.5013,
            lon: -75.06
        }, {
            lat: 40.4208,
            lon: -75.0655
        }, {
            lat: 40.4072,
            lon: -74.9776
        }, {
            lat: 40.3392,
            lon: -74.9432
        }, {
            lat: 40.2628,
            lon: -74.8389
        }, {
            lat: 40.1495,
            lon: -74.7221
        }, {
            lat: 39.9592,
            lon: -75.0929
        }, {
            lat: 39.837,
            lon: -75.2577
        }, {
            lat: 39.8128,
            lon: -75.4321
        }, {
            lat: 39.8317,
            lon: -75.6477
        }, {
            lat: 39.7199,
            lon: -75.7892
        }, {
            lat: 39.722,
            lon: -80.5243
        }, {
            lat: 42.324,
            lon: -80.5202
        }]
    }, {
        name: "Rhode Island",
        points: [{
            lat: 41.3706,
            lon: -71.0568
        }, {
            lat: 41.3706,
            lon: -71.0541
        }, {
            lat: 41.6339,
            lon: -71.1447
        }, {
            lat: 41.6791,
            lon: -71.1942
        }, {
            lat: 41.7611,
            lon: -71.2793
        }, {
            lat: 41.7775,
            lon: -71.3315
        }, {
            lat: 41.7918,
            lon: -71.3425
        }, {
            lat: 41.8225,
            lon: -71.3507
        }, {
            lat: 41.8512,
            lon: -71.337
        }, {
            lat: 41.888,
            lon: -71.3397
        }, {
            lat: 41.9288,
            lon: -71.3837
        }, {
            lat: 42.0156,
            lon: -71.3795
        }, {
            lat: 42.0064,
            lon: -71.7984
        }, {
            lat: 41.675,
            lon: -71.7874
        }, {
            lat: 41.453,
            lon: -71.7984
        }, {
            lat: 41.3943,
            lon: -71.8492
        }, {
            lat: 41.3315,
            lon: -71.852
        }, {
            lat: 41.3057,
            lon: -71.9041
        }, {
            lat: 41.1849,
            lon: -71.7915
        }, {
            lat: 41.2665,
            lon: -71.4084
        }]
    }, {
        name: "South Carolina",
        points: [{
            lat: 32.0488,
            lon: -80.7001
        }, {
            lat: 32.0453,
            lon: -80.8978
        }, {
            lat: 32.1105,
            lon: -81.1134
        }, {
            lat: 32.2058,
            lon: -81.1423
        }, {
            lat: 32.3846,
            lon: -81.1821
        }, {
            lat: 32.4576,
            lon: -81.1986
        }, {
            lat: 32.5283,
            lon: -81.2769
        }, {
            lat: 32.5838,
            lon: -81.4087
        }, {
            lat: 32.6926,
            lon: -81.4183
        }, {
            lat: 32.8242,
            lon: -81.4746
        }, {
            lat: 32.9465,
            lon: -81.5117
        }, {
            lat: 33.0098,
            lon: -81.5034
        }, {
            lat: 33.0777,
            lon: -81.601
        }, {
            lat: 33.1238,
            lon: -81.7122
        }, {
            lat: 33.2065,
            lon: -81.8289
        }, {
            lat: 33.3443,
            lon: -81.9319
        }, {
            lat: 33.483,
            lon: -82.028
        }, {
            lat: 33.586,
            lon: -82.1475
        }, {
            lat: 33.6878,
            lon: -82.2437
        }, {
            lat: 33.7609,
            lon: -82.2437
        }, {
            lat: 33.8305,
            lon: -82.3576
        }, {
            lat: 33.9308,
            lon: -82.5018
        }, {
            lat: 33.965,
            lon: -82.5471
        }, {
            lat: 34.0947,
            lon: -82.6625
        }, {
            lat: 34.1664,
            lon: -82.7216
        }, {
            lat: 34.3434,
            lon: -82.793
        }, {
            lat: 34.4647,
            lon: -82.8905
        }, {
            lat: 34.476,
            lon: -82.9893
        }, {
            lat: 34.5281,
            lon: -83.0855
        }, {
            lat: 34.6581,
            lon: -83.3121
        }, {
            lat: 34.7326,
            lon: -83.3588
        }, {
            lat: 34.8318,
            lon: -83.2983
        }, {
            lat: 34.9276,
            lon: -83.1459
        }, {
            lat: 34.9996,
            lon: -83.1047
        }, {
            lat: 35.0817,
            lon: -82.7779
        }, {
            lat: 35.2075,
            lon: -82.392
        }, {
            lat: 35.1974,
            lon: -82.2203
        }, {
            lat: 35.148,
            lon: -81.0379
        }, {
            lat: 35.0446,
            lon: -81.0324
        }, {
            lat: 35.1019,
            lon: -80.9322
        }, {
            lat: 34.9344,
            lon: -80.7811
        }, {
            lat: 34.8194,
            lon: -80.7948
        }, {
            lat: 34.8048,
            lon: -79.6756
        }, {
            lat: 34.2016,
            lon: -78.956
        }, {
            lat: 33.7951,
            lon: -78.4836
        }, {
            lat: 33.6489,
            lon: -78.7871
        }, {
            lat: 33.2019,
            lon: -79.0837
        }, {
            lat: 32.7607,
            lon: -79.4476
        }, {
            lat: 32.5225,
            lon: -79.8116
        }, {
            lat: 32.3556,
            lon: -80.1508
        }, {
            lat: 32.2012,
            lon: -80.424
        }, {
            lat: 32.05,
            lon: -80.7001
        }]
    }, {
        name: "South Dakota",
        points: [{
            lat: 45.9435,
            lon: -104.0501
        }, {
            lat: 43.0026,
            lon: -104.0529
        }, {
            lat: 42.9946,
            lon: -98.4993
        }, {
            lat: 42.9283,
            lon: -98.4444
        }, {
            lat: 42.8438,
            lon: -98.1958
        }, {
            lat: 42.7773,
            lon: -98.0571
        }, {
            lat: 42.7631,
            lon: -97.9761
        }, {
            lat: 42.8599,
            lon: -97.8566
        }, {
            lat: 42.8518,
            lon: -97.229
        }, {
            lat: 42.8075,
            lon: -97.2057
        }, {
            lat: 42.7157,
            lon: -96.8486
        }, {
            lat: 42.5237,
            lon: -96.622
        }, {
            lat: 42.4772,
            lon: -96.4806
        }, {
            lat: 42.7299,
            lon: -96.6289
        }, {
            lat: 43.0046,
            lon: -96.5039
        }, {
            lat: 43.1331,
            lon: -96.438
        }, {
            lat: 43.2262,
            lon: -96.5561
        }, {
            lat: 43.3841,
            lon: -96.5259
        }, {
            lat: 43.4848,
            lon: -96.6138
        }, {
            lat: 43.4998,
            lon: -96.4558
        }, {
            lat: 45.2981,
            lon: -96.4545
        }, {
            lat: 45.4601,
            lon: -96.7429
        }, {
            lat: 45.616,
            lon: -96.8472
        }, {
            lat: 45.8202,
            lon: -96.5849
        }, {
            lat: 45.9311,
            lon: -96.5643
        }, {
            lat: 45.9416,
            lon: -104.0501
        }]
    }, {
        name: "Tennessee",
        points: [{
            lat: 36.6739,
            lon: -88.0678
        }, {
            lat: 36.6354,
            lon: -87.8522
        }, {
            lat: 36.6023,
            lon: -83.6787
        }, {
            lat: 36.5946,
            lon: -81.9402
        }, {
            lat: 36.6144,
            lon: -81.9209
        }, {
            lat: 36.6111,
            lon: -81.6518
        }, {
            lat: 36.3295,
            lon: -81.7163
        }, {
            lat: 36.3516,
            lon: -81.7973
        }, {
            lat: 36.2974,
            lon: -81.9072
        }, {
            lat: 36.1212,
            lon: -82.0308
        }, {
            lat: 36.1024,
            lon: -82.1255
        }, {
            lat: 36.1434,
            lon: -82.1475
        }, {
            lat: 36.1323,
            lon: -82.245
        }, {
            lat: 36.1168,
            lon: -82.3521
        }, {
            lat: 36.0702,
            lon: -82.4167
        }, {
            lat: 35.9669,
            lon: -82.5389
        }, {
            lat: 35.9702,
            lon: -82.6076
        }, {
            lat: 36.0602,
            lon: -82.6378
        }, {
            lat: 35.9925,
            lon: -82.7751
        }, {
            lat: 35.9169,
            lon: -82.8177
        }, {
            lat: 35.8623,
            lon: -82.9042
        }, {
            lat: 35.7755,
            lon: -83.0017
        }, {
            lat: 35.7131,
            lon: -83.2393
        }, {
            lat: 35.5635,
            lon: -83.4961
        }, {
            lat: 35.5501,
            lon: -83.6938
        }, {
            lat: 35.5233,
            lon: -83.8284
        }, {
            lat: 35.5065,
            lon: -83.8847
        }, {
            lat: 35.4014,
            lon: -84.0248
        }, {
            lat: 35.2905,
            lon: -84.0276
        }, {
            lat: 35.2322,
            lon: -84.1113
        }, {
            lat: 35.2624,
            lon: -84.2294
        }, {
            lat: 35.2198,
            lon: -84.2926
        }, {
            lat: 34.9884,
            lon: -84.3201
        }, {
            lat: 34.9996,
            lon: -90.3131
        }, {
            lat: 35.1233,
            lon: -90.2843
        }, {
            lat: 35.1379,
            lon: -90.1758
        }, {
            lat: 35.1985,
            lon: -90.1112
        }, {
            lat: 35.2849,
            lon: -90.1524
        }, {
            lat: 35.4372,
            lon: -90.1346
        }, {
            lat: 35.5568,
            lon: -90.0192
        }, {
            lat: 35.7343,
            lon: -89.9547
        }, {
            lat: 35.8579,
            lon: -89.7638
        }, {
            lat: 35.918,
            lon: -89.6635
        }, {
            lat: 35.9947,
            lon: -89.713
        }, {
            lat: 36.0902,
            lon: -89.6759
        }, {
            lat: 36.1279,
            lon: -89.5894
        }, {
            lat: 36.1856,
            lon: -89.6484
        }, {
            lat: 36.2343,
            lon: -89.7006
        }, {
            lat: 36.2531,
            lon: -89.5331
        }, {
            lat: 36.2996,
            lon: -89.621
        }, {
            lat: 36.3494,
            lon: -89.5784
        }, {
            lat: 36.3406,
            lon: -89.518
        }, {
            lat: 36.4964,
            lon: -89.5345
        }, {
            lat: 36.5107,
            lon: -89.3051
        }, {
            lat: 36.4986,
            lon: -88.1667
        }, {
            lat: 36.4997,
            lon: -88.0692
        }, {
            lat: 36.6871,
            lon: -88.0637
        }]
    }, {
        name: "Texas",
        points: [{
            lat: 31.8659,
            lon: -106.5715
        }, {
            lat: 31.7504,
            lon: -106.5042
        }, {
            lat: 31.6242,
            lon: -106.3092
        }, {
            lat: 31.4638,
            lon: -106.2103
        }, {
            lat: 31.3912,
            lon: -106.0181
        }, {
            lat: 31.1846,
            lon: -105.7874
        }, {
            lat: 31.0012,
            lon: -105.5663
        }, {
            lat: 30.8456,
            lon: -105.4015
        }, {
            lat: 30.6462,
            lon: -105.0032
        }, {
            lat: 30.3847,
            lon: -104.8521
        }, {
            lat: 30.2591,
            lon: -104.7437
        }, {
            lat: 30.0738,
            lon: -104.6915
        }, {
            lat: 29.9169,
            lon: -104.6777
        }, {
            lat: 29.7644,
            lon: -104.5679
        }, {
            lat: 29.6475,
            lon: -104.528
        }, {
            lat: 29.5603,
            lon: -104.4044
        }, {
            lat: 29.4719,
            lon: -104.2067
        }, {
            lat: 29.3834,
            lon: -104.1559
        }, {
            lat: 29.2948,
            lon: -103.9774
        }, {
            lat: 29.2804,
            lon: -103.9128
        }, {
            lat: 29.2481,
            lon: -103.8208
        }, {
            lat: 29.1378,
            lon: -103.564
        }, {
            lat: 29.0682,
            lon: -103.4692
        }, {
            lat: 29.0105,
            lon: -103.3154
        }, {
            lat: 28.9601,
            lon: -103.1616
        }, {
            lat: 29.0177,
            lon: -103.0957
        }, {
            lat: 29.133,
            lon: -103.0298
        }, {
            lat: 29.2157,
            lon: -102.8677
        }, {
            lat: 29.2565,
            lon: -102.8979
        }, {
            lat: 29.357,
            lon: -102.8375
        }, {
            lat: 29.4898,
            lon: -102.8004
        }, {
            lat: 29.6881,
            lon: -102.7002
        }, {
            lat: 29.7691,
            lon: -102.5134
        }, {
            lat: 29.7596,
            lon: -102.3843
        }, {
            lat: 29.8788,
            lon: -102.3047
        }, {
            lat: 29.7834,
            lon: -102.1509
        }, {
            lat: 29.7572,
            lon: -101.7004
        }, {
            lat: 29.7644,
            lon: -101.4917
        }, {
            lat: 29.6308,
            lon: -101.2939
        }, {
            lat: 29.5269,
            lon: -101.2582
        }, {
            lat: 29.3642,
            lon: -101.0056
        }, {
            lat: 29.3056,
            lon: -100.9204
        }, {
            lat: 29.1642,
            lon: -100.7707
        }, {
            lat: 29.0946,
            lon: -100.7007
        }, {
            lat: 28.9012,
            lon: -100.6306
        }, {
            lat: 28.6593,
            lon: -100.4974
        }, {
            lat: 28.4675,
            lon: -100.3601
        }, {
            lat: 28.2778,
            lon: -100.2969
        }, {
            lat: 28.1882,
            lon: -100.1733
        }, {
            lat: 28.0526,
            lon: -100.0195
        }, {
            lat: 27.9435,
            lon: -99.9344
        }, {
            lat: 27.7638,
            lon: -99.8438
        }, {
            lat: 27.6641,
            lon: -99.7119
        }, {
            lat: 27.4839,
            lon: -99.4812
        }, {
            lat: 27.3059,
            lon: -99.5375
        }, {
            lat: 27.1948,
            lon: -99.429
        }, {
            lat: 27.0175,
            lon: -99.4455
        }, {
            lat: 26.8829,
            lon: -99.3164
        }, {
            lat: 26.6867,
            lon: -99.2065
        }, {
            lat: 26.4116,
            lon: -99.0967
        }, {
            lat: 26.3574,
            lon: -98.8138
        }, {
            lat: 26.2257,
            lon: -98.6668
        }, {
            lat: 26.2343,
            lon: -98.5474
        }, {
            lat: 26.1357,
            lon: -98.3276
        }, {
            lat: 26.0457,
            lon: -98.1697
        }, {
            lat: 26.0518,
            lon: -97.9143
        }, {
            lat: 26.005,
            lon: -97.6643
        }, {
            lat: 25.8419,
            lon: -97.402
        }, {
            lat: 25.9074,
            lon: -97.3526
        }, {
            lat: 25.9679,
            lon: -97.0148
        }, {
            lat: 26.1789,
            lon: -97.0697
        }, {
            lat: 26.8253,
            lon: -97.2249
        }, {
            lat: 27.423,
            lon: -97.0752
        }, {
            lat: 28.0599,
            lon: -96.6096
        }, {
            lat: 28.4228,
            lon: -95.9285
        }, {
            lat: 28.7568,
            lon: -95.3036
        }, {
            lat: 29.0742,
            lon: -94.7296
        }, {
            lat: 29.381,
            lon: -94.3355
        }, {
            lat: 29.6021,
            lon: -93.8205
        }, {
            lat: 29.8013,
            lon: -93.9317
        }, {
            lat: 29.9157,
            lon: -93.8136
        }, {
            lat: 30.0489,
            lon: -93.723
        }, {
            lat: 30.1214,
            lon: -93.6996
        }, {
            lat: 30.2021,
            lon: -93.7216
        }, {
            lat: 30.2792,
            lon: -93.7038
        }, {
            lat: 30.3278,
            lon: -93.7628
        }, {
            lat: 30.3835,
            lon: -93.7587
        }, {
            lat: 30.438,
            lon: -93.701
        }, {
            lat: 30.5079,
            lon: -93.7024
        }, {
            lat: 30.5362,
            lon: -93.7299
        }, {
            lat: 30.6296,
            lon: -93.6694
        }, {
            lat: 30.7466,
            lon: -93.609
        }, {
            lat: 30.8114,
            lon: -93.5527
        }, {
            lat: 30.8834,
            lon: -93.5747
        }, {
            lat: 30.9376,
            lon: -93.5307
        }, {
            lat: 31.0318,
            lon: -93.5074
        }, {
            lat: 31.0812,
            lon: -93.5266
        }, {
            lat: 31.1787,
            lon: -93.5335
        }, {
            lat: 31.167,
            lon: -93.598
        }, {
            lat: 31.3055,
            lon: -93.6832
        }, {
            lat: 31.383,
            lon: -93.6708
        }, {
            lat: 31.4369,
            lon: -93.6887
        }, {
            lat: 31.5107,
            lon: -93.7202
        }, {
            lat: 31.582,
            lon: -93.8315
        }, {
            lat: 31.644,
            lon: -93.8123
        }, {
            lat: 31.7188,
            lon: -93.8232
        }, {
            lat: 31.7936,
            lon: -93.8342
        }, {
            lat: 31.8309,
            lon: -93.8782
        }, {
            lat: 31.8869,
            lon: -93.9221
        }, {
            lat: 31.9335,
            lon: -93.9661
        }, {
            lat: 32.0081,
            lon: -94.043
        }, {
            lat: 33.4681,
            lon: -94.043
        }, {
            lat: 33.5414,
            lon: -94.043
        }, {
            lat: 33.5689,
            lon: -94.1528
        }, {
            lat: 33.5872,
            lon: -94.1968
        }, {
            lat: 33.5872,
            lon: -94.2627
        }, {
            lat: 33.5689,
            lon: -94.3176
        }, {
            lat: 33.5597,
            lon: -94.3945
        }, {
            lat: 33.578,
            lon: -94.4275
        }, {
            lat: 33.6055,
            lon: -94.4275
        }, {
            lat: 33.6421,
            lon: -94.4495
        }, {
            lat: 33.6329,
            lon: -94.4879
        }, {
            lat: 33.6421,
            lon: -94.5236
        }, {
            lat: 33.6695,
            lon: -94.6637
        }, {
            lat: 33.7061,
            lon: -94.7461
        }, {
            lat: 33.7791,
            lon: -94.8999
        }, {
            lat: 33.8818,
            lon: -95.0757
        }, {
            lat: 33.9251,
            lon: -95.1526
        }, {
            lat: 33.9604,
            lon: -95.2254
        }, {
            lat: 33.875,
            lon: -95.2858
        }, {
            lat: 33.8841,
            lon: -95.5399
        }, {
            lat: 33.8887,
            lon: -95.7568
        }, {
            lat: 33.8408,
            lon: -95.842
        }, {
            lat: 33.8556,
            lon: -96.0274
        }, {
            lat: 33.6901,
            lon: -96.3528
        }, {
            lat: 33.8442,
            lon: -96.6179
        }, {
            lat: 33.8898,
            lon: -96.5836
        }, {
            lat: 33.8955,
            lon: -96.6673
        }, {
            lat: 33.8179,
            lon: -96.7538
        }, {
            lat: 33.8613,
            lon: -96.8335
        }, {
            lat: 33.8613,
            lon: -96.8774
        }, {
            lat: 33.9388,
            lon: -96.9159
        }, {
            lat: 33.7392,
            lon: -97.0917
        }, {
            lat: 33.7449,
            lon: -97.1645
        }, {
            lat: 33.8978,
            lon: -97.218
        }, {
            lat: 33.8225,
            lon: -97.3746
        }, {
            lat: 33.8305,
            lon: -97.4611
        }, {
            lat: 33.8761,
            lon: -97.446
        }, {
            lat: 33.9798,
            lon: -97.6945
        }, {
            lat: 33.8476,
            lon: -97.8648
        }, {
            lat: 33.8978,
            lon: -97.9651
        }, {
            lat: 34.0299,
            lon: -98.0983
        }, {
            lat: 34.1141,
            lon: -98.1752
        }, {
            lat: 34.1425,
            lon: -98.3743
        }, {
            lat: 34.064,
            lon: -98.4773
        }, {
            lat: 34.1209,
            lon: -98.5529
        }, {
            lat: 34.1232,
            lon: -98.752
        }, {
            lat: 34.2095,
            lon: -98.9539
        }, {
            lat: 34.2073,
            lon: -99.0637
        }, {
            lat: 34.2141,
            lon: -99.1832
        }, {
            lat: 34.3593,
            lon: -99.2505
        }, {
            lat: 34.4613,
            lon: -99.3823
        }, {
            lat: 34.3774,
            lon: -99.4318
        }, {
            lat: 34.416,
            lon: -99.5718
        }, {
            lat: 34.3706,
            lon: -99.6158
        }, {
            lat: 34.4726,
            lon: -99.8094
        }, {
            lat: 34.5631,
            lon: -99.9934
        }, {
            lat: 36.4975,
            lon: -100.0017
        }, {
            lat: 36.5008,
            lon: -103.0408
        }, {
            lat: 32.0011,
            lon: -103.0655
        }, {
            lat: 32.0023,
            lon: -106.6168
        }]
    }, {
        name: "Utah",
        points: [{
            lat: 36.9982,
            lon: -114.0491
        }, {
            lat: 37.0026,
            lon: -109.0462
        }, {
            lat: 40.9986,
            lon: -109.0503
        }, {
            lat: 41.0006,
            lon: -111.0471
        }, {
            lat: 41.9993,
            lon: -111.0498
        }, {
            lat: 41.9901,
            lon: -114.0395
        }, {
            lat: 37.0015,
            lon: -114.0504
        }]
    }, {
        name: "Virginia",
        points: [{
            lat: 36.6017,
            lon: -83.6753
        }, {
            lat: 36.6519,
            lon: -83.5613
        }, {
            lat: 36.6673,
            lon: -83.4432
        }, {
            lat: 36.7108,
            lon: -83.308
        }, {
            lat: 36.7389,
            lon: -83.1974
        }, {
            lat: 36.7433,
            lon: -83.1363
        }, {
            lat: 36.8032,
            lon: -83.1047
        }, {
            lat: 36.8302,
            lon: -83.1033
        }, {
            lat: 36.8544,
            lon: -83.0704
        }, {
            lat: 36.8478,
            lon: -83.0127
        }, {
            lat: 36.9839,
            lon: -82.8534
        }, {
            lat: 37.0086,
            lon: -82.7971
        }, {
            lat: 37.0442,
            lon: -82.736
        }, {
            lat: 37.2664,
            lon: -82.3494
        }, {
            lat: 37.3046,
            lon: -82.3027
        }, {
            lat: 37.5054,
            lon: -82.0136
        }, {
            lat: 37.538,
            lon: -81.9681
        }, {
            lat: 37.5139,
            lon: -81.9259
        }, {
            lat: 37.4889,
            lon: -81.9707
        }, {
            lat: 37.4563,
            lon: -81.98
        }, {
            lat: 37.4389,
            lon: -81.9374
        }, {
            lat: 37.3592,
            lon: -81.9319
        }, {
            lat: 37.3134,
            lon: -81.8619
        }, {
            lat: 37.2872,
            lon: -81.7987
        }, {
            lat: 37.2424,
            lon: -81.7259
        }, {
            lat: 37.2008,
            lon: -81.6792
        }, {
            lat: 37.2083,
            lon: -81.5549
        }, {
            lat: 37.2588,
            lon: -81.4988
        }, {
            lat: 37.2456,
            lon: -81.4856
        }, {
            lat: 37.2742,
            lon: -81.4367
        }, {
            lat: 37.3243,
            lon: -81.3675
        }, {
            lat: 37.2653,
            lon: -81.2741
        }, {
            lat: 37.2719,
            lon: -81.156
        }, {
            lat: 37.3025,
            lon: -80.9802
        }, {
            lat: 37.3396,
            lon: -80.8566
        }, {
            lat: 37.3876,
            lon: -80.8786
        }, {
            lat: 37.4247,
            lon: -80.8511
        }, {
            lat: 37.3702,
            lon: -80.7715
        }, {
            lat: 37.4749,
            lon: -80.5518
        }, {
            lat: 37.4792,
            lon: -80.5133
        }, {
            lat: 37.4247,
            lon: -80.4803
        }, {
            lat: 37.5097,
            lon: -80.3018
        }, {
            lat: 37.5359,
            lon: -80.2798
        }, {
            lat: 37.538,
            lon: -80.3293
        }, {
            lat: 37.6316,
            lon: -80.2249
        }, {
            lat: 37.6903,
            lon: -80.3018
        }, {
            lat: 37.7251,
            lon: -80.2551
        }, {
            lat: 37.7707,
            lon: -80.2551
        }, {
            lat: 37.8347,
            lon: -80.1961
        }, {
            lat: 37.8749,
            lon: -80.1508
        }, {
            lat: 38.0394,
            lon: -79.9722
        }, {
            lat: 38.1302,
            lon: -79.9448
        }, {
            lat: 38.1972,
            lon: -79.9063
        }, {
            lat: 38.2684,
            lon: -79.7882
        }, {
            lat: 38.3093,
            lon: -79.8129
        }, {
            lat: 38.3589,
            lon: -79.7662
        }, {
            lat: 38.3513,
            lon: -79.7401
        }, {
            lat: 38.3869,
            lon: -79.7333
        }, {
            lat: 38.4321,
            lon: -79.6893
        }, {
            lat: 38.4987,
            lon: -79.6948
        }, {
            lat: 38.5857,
            lon: -79.6495
        }, {
            lat: 38.5492,
            lon: -79.5328
        }, {
            lat: 38.4557,
            lon: -79.4724
        }, {
            lat: 38.4149,
            lon: -79.3103
        }, {
            lat: 38.5138,
            lon: -79.2087
        }, {
            lat: 38.6576,
            lon: -79.1016
        }, {
            lat: 38.6941,
            lon: -79.0851
        }, {
            lat: 38.7112,
            lon: -79.1016
        }, {
            lat: 38.7712,
            lon: -79.0576
        }, {
            lat: 38.7926,
            lon: -79.0604
        }, {
            lat: 38.7926,
            lon: -79.0247
        }, {
            lat: 38.8504,
            lon: -78.9944
        }, {
            lat: 38.7637,
            lon: -78.8736
        }, {
            lat: 38.8857,
            lon: -78.783
        }, {
            lat: 38.9327,
            lon: -78.7198
        }, {
            lat: 38.9071,
            lon: -78.7129
        }, {
            lat: 38.985,
            lon: -78.6291
        }, {
            lat: 38.9658,
            lon: -78.6044
        }, {
            lat: 39.017,
            lon: -78.5522
        }, {
            lat: 39.0384,
            lon: -78.577
        }, {
            lat: 39.0938,
            lon: -78.5083
        }, {
            lat: 39.1492,
            lon: -78.4314
        }, {
            lat: 39.1684,
            lon: -78.4039
        }, {
            lat: 39.1939,
            lon: -78.4314
        }, {
            lat: 39.347,
            lon: -78.338
        }, {
            lat: 39.3853,
            lon: -78.338
        }, {
            lat: 39.4659,
            lon: -78.3469
        }, {
            lat: 39.2283,
            lon: -77.9744
        }, {
            lat: 39.1338,
            lon: -77.8302
        }, {
            lat: 39.313,
            lon: -77.7355
        }, {
            lat: 39.3213,
            lon: -77.709
        }, {
            lat: 39.3043,
            lon: -77.6218
        }, {
            lat: 39.3067,
            lon: -77.5686
        }, {
            lat: 39.2248,
            lon: -77.4567
        }, {
            lat: 39.1543,
            lon: -77.5226
        }, {
            lat: 39.1277,
            lon: -77.5243
        }, {
            lat: 39.0914,
            lon: -77.4687
        }, {
            lat: 39.072,
            lon: -77.4485
        }, {
            lat: 39.0634,
            lon: -77.3427
        }, {
            lat: 39.0456,
            lon: -77.2936
        }, {
            lat: 39.0168,
            lon: -77.2459
        }, {
            lat: 38.9829,
            lon: -77.2445
        }, {
            lat: 38.968,
            lon: -77.1834
        }, {
            lat: 38.925,
            lon: -77.112
        }, {
            lat: 38.8798,
            lon: -77.0464
        }, {
            lat: 38.7538,
            lon: -77.0444
        }, {
            lat: 38.7142,
            lon: -77.0409
        }, {
            lat: 38.6635,
            lon: -77.1312
        }, {
            lat: 38.6319,
            lon: -77.1285
        }, {
            lat: 38.5935,
            lon: -77.2456
        }, {
            lat: 38.4547,
            lon: -77.3094
        }, {
            lat: 38.3904,
            lon: -77.3046
        }, {
            lat: 38.35,
            lon: -77.2188
        }, {
            lat: 38.4041,
            lon: -77.0622
        }, {
            lat: 38.4256,
            lon: -77.0265
        }, {
            lat: 38.3039,
            lon: -76.9826
        }, {
            lat: 38.2155,
            lon: -76.8851
        }, {
            lat: 38.1745,
            lon: -76.5926
        }, {
            lat: 37.9496,
            lon: -76.2424
        }, {
            lat: 37.9561,
            lon: -76.0501
        }, {
            lat: 37.9474,
            lon: -75.9416
        }, {
            lat: 37.9085,
            lon: -75.9512
        }, {
            lat: 37.9139,
            lon: -75.8002
        }, {
            lat: 37.9539,
            lon: -75.6931
        }, {
            lat: 37.9474,
            lon: -75.6477
        }, {
            lat: 37.9962,
            lon: -75.6258
        }, {
            lat: 38.0091,
            lon: -75.4596
        }, {
            lat: 38.0373,
            lon: -74.9707
        }, {
            lat: 37.3625,
            lon: -75.5777
        }, {
            lat: 36.8994,
            lon: -75.818
        }, {
            lat: 36.5516,
            lon: -75.8043
        }, {
            lat: 36.5516,
            lon: -76.1476
        }, {
            lat: 36.5516,
            lon: -76.8617
        }, {
            lat: 36.5516,
            lon: -76.918
        }, {
            lat: 36.5438,
            lon: -76.918
        }, {
            lat: 36.5505,
            lon: -77.1803
        }, {
            lat: 36.5449,
            lon: -77.5278
        }, {
            lat: 36.5427,
            lon: -80.273
        }, {
            lat: 36.5571,
            lon: -80.5971
        }, {
            lat: 36.5626,
            lon: -80.7248
        }, {
            lat: 36.5593,
            lon: -80.8511
        }, {
            lat: 36.5681,
            lon: -81.1066
        }, {
            lat: 36.5813,
            lon: -81.4746
        }, {
            lat: 36.5802,
            lon: -81.5007
        }, {
            lat: 36.5902,
            lon: -81.6792
        }, {
            lat: 36.6122,
            lon: -81.6476
        }, {
            lat: 36.6177,
            lon: -81.9237
        }, {
            lat: 36.5935,
            lon: -81.936
        }, {
            lat: 36.5957,
            lon: -82.3961
        }, {
            lat: 36.5935,
            lon: -82.9344
        }, {
            lat: 36.5957,
            lon: -83.2654
        }, {
            lat: 36.6023,
            lon: -83.6746
        }]
    }, {
        name: "Vermont",
        points: [{
            lat: 45.0104,
            lon: -73.3427
        }, {
            lat: 45.0134,
            lon: -73.1827
        }, {
            lat: 45.0153,
            lon: -72.7432
        }, {
            lat: 45.0134,
            lon: -72.61
        }, {
            lat: 45.0075,
            lon: -72.5551
        }, {
            lat: 45.009,
            lon: -72.4562
        }, {
            lat: 45.0037,
            lon: -72.3113
        }, {
            lat: 45.0066,
            lon: -72.0964
        }, {
            lat: 45.007,
            lon: -71.9131
        }, {
            lat: 45.0138,
            lon: -71.5636
        }, {
            lat: 45.0138,
            lon: -71.5059
        }, {
            lat: 44.9748,
            lon: -71.5294
        }, {
            lat: 44.9123,
            lon: -71.4949
        }, {
            lat: 44.8296,
            lon: -71.5567
        }, {
            lat: 44.7506,
            lon: -71.6281
        }, {
            lat: 44.7077,
            lon: -71.6061
        }, {
            lat: 44.6481,
            lon: -71.5677
        }, {
            lat: 44.5817,
            lon: -71.5388
        }, {
            lat: 44.5533,
            lon: -71.6006
        }, {
            lat: 44.5308,
            lon: -71.5746
        }, {
            lat: 44.4955,
            lon: -71.5883
        }, {
            lat: 44.4504,
            lon: -71.6556
        }, {
            lat: 44.4093,
            lon: -71.7146
        }, {
            lat: 44.3975,
            lon: -71.7957
        }, {
            lat: 44.3563,
            lon: -71.8163
        }, {
            lat: 44.3327,
            lon: -71.8698
        }, {
            lat: 44.3484,
            lon: -71.9138
        }, {
            lat: 44.3386,
            lon: -71.9865
        }, {
            lat: 44.3052,
            lon: -72.0346
        }, {
            lat: 44.2432,
            lon: -72.0428
        }, {
            lat: 44.193,
            lon: -72.0662
        }, {
            lat: 44.1349,
            lon: -72.036
        }, {
            lat: 44.0698,
            lon: -72.058
        }, {
            lat: 44.0017,
            lon: -72.1101
        }, {
            lat: 43.9671,
            lon: -72.0937
        }, {
            lat: 43.9088,
            lon: -72.1252
        }, {
            lat: 43.8682,
            lon: -72.1733
        }, {
            lat: 43.7899,
            lon: -72.1994
        }, {
            lat: 43.7899,
            lon: -72.1994
        }, {
            lat: 43.7384,
            lon: -72.2392
        }, {
            lat: 43.7056,
            lon: -72.301
        }, {
            lat: 43.6391,
            lon: -72.3271
        }, {
            lat: 43.5893,
            lon: -72.3436
        }, {
            lat: 43.5814,
            lon: -72.3793
        }, {
            lat: 43.5027,
            lon: -72.3972
        }, {
            lat: 43.4988,
            lon: -72.3807
        }, {
            lat: 43.415,
            lon: -72.3999
        }, {
            lat: 43.3601,
            lon: -72.4123
        }, {
            lat: 43.3591,
            lon: -72.3903
        }, {
            lat: 43.3282,
            lon: -72.4081
        }, {
            lat: 43.2762,
            lon: -72.3999
        }, {
            lat: 43.2342,
            lon: -72.437
        }, {
            lat: 43.1852,
            lon: -72.4493
        }, {
            lat: 43.1311,
            lon: -72.448
        }, {
            lat: 43.0679,
            lon: -72.4507
        }, {
            lat: 43.0067,
            lon: -72.4438
        }, {
            lat: 42.9846,
            lon: -72.4699
        }, {
            lat: 42.9645,
            lon: -72.5276
        }, {
            lat: 42.8951,
            lon: -72.5331
        }, {
            lat: 42.8639,
            lon: -72.5633
        }, {
            lat: 42.7863,
            lon: -72.5098
        }, {
            lat: 42.7652,
            lon: -72.5166
        }, {
            lat: 42.7541,
            lon: -72.4741
        }, {
            lat: 42.7289,
            lon: -72.459
        }, {
            lat: 42.7465,
            lon: -73.2761
        }, {
            lat: 42.8025,
            lon: -73.2912
        }, {
            lat: 42.8357,
            lon: -73.285
        }, {
            lat: 43.0679,
            lon: -73.2678
        }, {
            lat: 43.5022,
            lon: -73.2472
        }, {
            lat: 43.5615,
            lon: -73.2561
        }, {
            lat: 43.5774,
            lon: -73.2939
        }, {
            lat: 43.6271,
            lon: -73.3049
        }, {
            lat: 43.6271,
            lon: -73.3557
        }, {
            lat: 43.5675,
            lon: -73.3976
        }, {
            lat: 43.5883,
            lon: -73.4326
        }, {
            lat: 43.6351,
            lon: -73.4285
        }, {
            lat: 43.6684,
            lon: -73.4079
        }, {
            lat: 43.7031,
            lon: -73.3907
        }, {
            lat: 43.7701,
            lon: -73.3516
        }, {
            lat: 43.8207,
            lon: -73.3928
        }, {
            lat: 43.8533,
            lon: -73.3832
        }, {
            lat: 43.9033,
            lon: -73.3969
        }, {
            lat: 43.9365,
            lon: -73.4086
        }, {
            lat: 43.9795,
            lon: -73.4134
        }, {
            lat: 44.0427,
            lon: -73.4381
        }, {
            lat: 44.1058,
            lon: -73.4141
        }, {
            lat: 44.1921,
            lon: -73.3928
        }, {
            lat: 44.2393,
            lon: -73.3427
        }, {
            lat: 44.2467,
            lon: -73.3186
        }, {
            lat: 44.3484,
            lon: -73.3406
        }, {
            lat: 44.369,
            lon: -73.3385
        }, {
            lat: 44.4328,
            lon: -73.2946
        }, {
            lat: 44.5367,
            lon: -73.3296
        }, {
            lat: 44.5919,
            lon: -73.3832
        }, {
            lat: 44.6569,
            lon: -73.377
        }, {
            lat: 44.7477,
            lon: -73.3681
        }, {
            lat: 44.7857,
            lon: -73.3317
        }, {
            lat: 44.8043,
            lon: -73.3324
        }, {
            lat: 44.8398,
            lon: -73.3818
        }, {
            lat: 44.904,
            lon: -73.3564
        }, {
            lat: 44.9181,
            lon: -73.3392
        }, {
            lat: 44.9643,
            lon: -73.3372
        }, {
            lat: 44.9799,
            lon: -73.3537
        }, {
            lat: 45.0046,
            lon: -73.3447
        }, {
            lat: 45.0109,
            lon: -73.3447
        }, {
            lat: 45.0104,
            lon: -73.3426
        }]
    }, {
        name: "Washington",
        points: [{
            lat: 49.0023,
            lon: -123.3208
        }, {
            lat: 49.0027,
            lon: -123.0338
        }, {
            lat: 49.0018,
            lon: -122.065
        }, {
            lat: 48.9973,
            lon: -121.7491
        }, {
            lat: 48.9991,
            lon: -121.5912
        }, {
            lat: 49.0009,
            lon: -119.6082
        }, {
            lat: 49.0005,
            lon: -118.0378
        }, {
            lat: 48.9996,
            lon: -117.0319
        }, {
            lat: 47.9614,
            lon: -117.0415
        }, {
            lat: 46.506,
            lon: -117.0394
        }, {
            lat: 46.4274,
            lon: -117.0394
        }, {
            lat: 46.3498,
            lon: -117.0621
        }, {
            lat: 46.3384,
            lon: -117.0277
        }, {
            lat: 46.2848,
            lon: -116.9879
        }, {
            lat: 46.2388,
            lon: -116.9577
        }, {
            lat: 46.2022,
            lon: -116.9659
        }, {
            lat: 46.1722,
            lon: -116.9254
        }, {
            lat: 46.1432,
            lon: -116.9357
        }, {
            lat: 46.1009,
            lon: -116.9584
        }, {
            lat: 46.0785,
            lon: -116.9762
        }, {
            lat: 46.0537,
            lon: -116.9433
        }, {
            lat: 45.996,
            lon: -116.9165
        }, {
            lat: 46.0008,
            lon: -118.033
        }, {
            lat: 45.9998,
            lon: -118.9867
        }, {
            lat: 45.932,
            lon: -119.1302
        }, {
            lat: 45.9278,
            lon: -119.1708
        }, {
            lat: 45.9402,
            lon: -119.2559
        }, {
            lat: 45.9354,
            lon: -119.3047
        }, {
            lat: 45.922,
            lon: -119.3644
        }, {
            lat: 45.9172,
            lon: -119.4386
        }, {
            lat: 45.9067,
            lon: -119.4894
        }, {
            lat: 45.9249,
            lon: -119.5724
        }, {
            lat: 45.9196,
            lon: -119.6013
        }, {
            lat: 45.8565,
            lon: -119.67
        }, {
            lat: 45.8479,
            lon: -119.8052
        }, {
            lat: 45.8278,
            lon: -119.9096
        }, {
            lat: 45.8245,
            lon: -119.9652
        }, {
            lat: 45.7852,
            lon: -120.071
        }, {
            lat: 45.7623,
            lon: -120.1705
        }, {
            lat: 45.7258,
            lon: -120.211
        }, {
            lat: 45.7057,
            lon: -120.3628
        }, {
            lat: 45.6951,
            lon: -120.4829
        }, {
            lat: 45.7469,
            lon: -120.5942
        }, {
            lat: 45.746,
            lon: -120.634
        }, {
            lat: 45.7143,
            lon: -120.6924
        }, {
            lat: 45.6721,
            lon: -120.8558
        }, {
            lat: 45.6409,
            lon: -120.9142
        }, {
            lat: 45.6572,
            lon: -120.9471
        }, {
            lat: 45.6419,
            lon: -120.9787
        }, {
            lat: 45.6529,
            lon: -121.0645
        }, {
            lat: 45.6078,
            lon: -121.1469
        }, {
            lat: 45.6083,
            lon: -121.1847
        }, {
            lat: 45.6721,
            lon: -121.2177
        }, {
            lat: 45.7057,
            lon: -121.3392
        }, {
            lat: 45.6932,
            lon: -121.401
        }, {
            lat: 45.7263,
            lon: -121.5328
        }, {
            lat: 45.7091,
            lon: -121.6145
        }, {
            lat: 45.6947,
            lon: -121.7361
        }, {
            lat: 45.7067,
            lon: -121.8095
        }, {
            lat: 45.6452,
            lon: -121.9338
        }, {
            lat: 45.6088,
            lon: -122.0451
        }, {
            lat: 45.5833,
            lon: -122.1089
        }, {
            lat: 45.5838,
            lon: -122.1426
        }, {
            lat: 45.566,
            lon: -122.2009
        }, {
            lat: 45.5439,
            lon: -122.2641
        }, {
            lat: 45.5482,
            lon: -122.3321
        }, {
            lat: 45.5756,
            lon: -122.3795
        }, {
            lat: 45.5636,
            lon: -122.4392
        }, {
            lat: 45.6006,
            lon: -122.5676
        }, {
            lat: 45.6236,
            lon: -122.6891
        }, {
            lat: 45.6582,
            lon: -122.7647
        }, {
            lat: 45.6817,
            lon: -122.775
        }, {
            lat: 45.7613,
            lon: -122.7619
        }, {
            lat: 45.8106,
            lon: -122.7962
        }, {
            lat: 45.8642,
            lon: -122.7839
        }, {
            lat: 45.912,
            lon: -122.8114
        }, {
            lat: 45.9612,
            lon: -122.8148
        }, {
            lat: 46.016,
            lon: -122.8587
        }, {
            lat: 46.0604,
            lon: -122.8848
        }, {
            lat: 46.0832,
            lon: -122.9034
        }, {
            lat: 46.1028,
            lon: -122.9597
        }, {
            lat: 46.1556,
            lon: -123.0579
        }, {
            lat: 46.1865,
            lon: -123.121
        }, {
            lat: 46.1893,
            lon: -123.1664
        }, {
            lat: 46.1446,
            lon: -123.281
        }, {
            lat: 46.147,
            lon: -123.3703
        }, {
            lat: 46.1822,
            lon: -123.4314
        }, {
            lat: 46.2293,
            lon: -123.4287
        }, {
            lat: 46.2691,
            lon: -123.4946
        }, {
            lat: 46.2582,
            lon: -123.5557
        }, {
            lat: 46.2573,
            lon: -123.6209
        }, {
            lat: 46.2497,
            lon: -123.6875
        }, {
            lat: 46.2691,
            lon: -123.7404
        }, {
            lat: 46.235,
            lon: -123.8729
        }, {
            lat: 46.2383,
            lon: -123.9292
        }, {
            lat: 46.2677,
            lon: -123.9711
        }, {
            lat: 46.2924,
            lon: -124.0212
        }, {
            lat: 46.2653,
            lon: -124.0329
        }, {
            lat: 46.2596,
            lon: -124.2444
        }, {
            lat: 46.4312,
            lon: -124.2691
        }, {
            lat: 46.8386,
            lon: -124.3529
        }, {
            lat: 47.1832,
            lon: -124.438
        }, {
            lat: 47.4689,
            lon: -124.5616
        }, {
            lat: 47.8012,
            lon: -124.7566
        }, {
            lat: 48.0423,
            lon: -124.8679
        }, {
            lat: 48.2457,
            lon: -124.8679
        }, {
            lat: 48.3727,
            lon: -124.8486
        }, {
            lat: 48.4984,
            lon: -124.7539
        }, {
            lat: 48.4096,
            lon: -124.4174
        }, {
            lat: 48.3599,
            lon: -124.2389
        }, {
            lat: 48.2964,
            lon: -124.0116
        }, {
            lat: 48.2795,
            lon: -123.9141
        }, {
            lat: 48.2247,
            lon: -123.5413
        }, {
            lat: 48.2539,
            lon: -123.3998
        }, {
            lat: 48.2841,
            lon: -123.2501
        }, {
            lat: 48.4233,
            lon: -123.1169
        }, {
            lat: 48.4533,
            lon: -123.1609
        }, {
            lat: 48.5548,
            lon: -123.222
        }, {
            lat: 48.5902,
            lon: -123.2336
        }, {
            lat: 48.6901,
            lon: -123.2721
        }, {
            lat: 48.7675,
            lon: -123.0084
        }, {
            lat: 48.8313,
            lon: -123.0084
        }, {
            lat: 49.0023,
            lon: -123.3215
        }]
    }, {
        name: "Wisconsin",
        points: [{
            lat: 42.5116,
            lon: -90.6303
        }, {
            lat: 42.4954,
            lon: -87.0241
        }, {
            lat: 43.3721,
            lon: -87.1477
        }, {
            lat: 43.6838,
            lon: -87.123
        }, {
            lat: 44.1694,
            lon: -86.9911
        }, {
            lat: 44.4828,
            lon: -86.8579
        }, {
            lat: 44.8792,
            lon: -86.6876
        }, {
            lat: 45.2343,
            lon: -86.2523
        }, {
            lat: 45.4418,
            lon: -86.7535
        }, {
            lat: 45.4438,
            lon: -87.1024
        }, {
            lat: 45.3531,
            lon: -87.1724
        }, {
            lat: 45.2401,
            lon: -87.3193
        }, {
            lat: 45.1995,
            lon: -87.41
        }, {
            lat: 45.0784,
            lon: -87.4443
        }, {
            lat: 45.0987,
            lon: -87.6379
        }, {
            lat: 45.2217,
            lon: -87.6956
        }, {
            lat: 45.3367,
            lon: -87.6462
        }, {
            lat: 45.3869,
            lon: -87.6956
        }, {
            lat: 45.3425,
            lon: -87.8549
        }, {
            lat: 45.4813,
            lon: -87.7945
        }, {
            lat: 45.5679,
            lon: -87.7945
        }, {
            lat: 45.6764,
            lon: -87.7876
        }, {
            lat: 45.7934,
            lon: -87.9936
        }, {
            lat: 45.8077,
            lon: -88.1145
        }, {
            lat: 45.8728,
            lon: -88.0733
        }, {
            lat: 45.9521,
            lon: -88.1982
        }, {
            lat: 46.0122,
            lon: -88.5498
        }, {
            lat: 45.997,
            lon: -88.7036
        }, {
            lat: 46.038,
            lon: -88.8451
        }, {
            lat: 46.1389,
            lon: -89.0909
        }, {
            lat: 46.3412,
            lon: -90.1195
        }, {
            lat: 46.5664,
            lon: -90.4147
        }, {
            lat: 47.2876,
            lon: -89.9615
        }, {
            lat: 47.31,
            lon: -90.6578
        }, {
            lat: 46.7079,
            lon: -92.0352
        }, {
            lat: 46.5928,
            lon: -92.2948
        }, {
            lat: 46.0761,
            lon: -92.2975
        }, {
            lat: 46.0132,
            lon: -92.3579
        }, {
            lat: 45.9769,
            lon: -92.5227
        }, {
            lat: 45.8135,
            lon: -92.7466
        }, {
            lat: 45.614,
            lon: -92.8564
        }, {
            lat: 45.5477,
            lon: -92.7754
        }, {
            lat: 45.4293,
            lon: -92.6587
        }, {
            lat: 45.3029,
            lon: -92.7136
        }, {
            lat: 44.9648,
            lon: -92.7466
        }, {
            lat: 44.7877,
            lon: -92.7686
        }, {
            lat: 44.653,
            lon: -92.6422
        }, {
            lat: 44.5504,
            lon: -92.3552
        }, {
            lat: 44.4652,
            lon: -92.2632
        }, {
            lat: 44.4024,
            lon: -92.0654
        }, {
            lat: 44.258,
            lon: -91.8745
        }, {
            lat: 44.06,
            lon: -91.6383
        }, {
            lat: 43.9612,
            lon: -91.4941
        }, {
            lat: 43.8296,
            lon: -91.3184
        }, {
            lat: 43.644,
            lon: -91.2524
        }, {
            lat: 43.5167,
            lon: -91.2305
        }, {
            lat: 43.3342,
            lon: -91.2085
        }, {
            lat: 43.2932,
            lon: -91.0547
        }, {
            lat: 43.1651,
            lon: -91.1865
        }, {
            lat: 43.0257,
            lon: -91.1536
        }, {
            lat: 42.9082,
            lon: -91.1426
        }, {
            lat: 42.7692,
            lon: -91.0547
        }, {
            lat: 42.6915,
            lon: -90.791
        }, {
            lat: 42.634,
            lon: -90.7031
        }, {
            lat: 42.5096,
            lon: -90.6303
        }]
    }, {
        name: "West Virginia",
        points: [{
            lat: 39.7188,
            lon: -79.4765
        }, {
            lat: 39.2057,
            lon: -79.4806
        }, {
            lat: 39.4871,
            lon: -79.0576
        }, {
            lat: 39.4394,
            lon: -78.9725
        }, {
            lat: 39.6438,
            lon: -78.7747
        }, {
            lat: 39.5369,
            lon: -78.6703
        }, {
            lat: 39.521,
            lon: -78.5742
        }, {
            lat: 39.521,
            lon: -78.4644
        }, {
            lat: 39.6015,
            lon: -78.4094
        }, {
            lat: 39.6395,
            lon: -78.3517
        }, {
            lat: 39.6205,
            lon: -78.2817
        }, {
            lat: 39.6839,
            lon: -78.2405
        }, {
            lat: 39.6935,
            lon: -78.1732
        }, {
            lat: 39.5972,
            lon: -77.8835
        }, {
            lat: 39.4987,
            lon: -77.7859
        }, {
            lat: 39.3279,
            lon: -77.731
        }, {
            lat: 39.1279,
            lon: -77.8271
        }, {
            lat: 39.4563,
            lon: -78.3421
        }, {
            lat: 39.3407,
            lon: -78.3408
        }, {
            lat: 39.1918,
            lon: -78.4341
        }, {
            lat: 39.1652,
            lon: -78.4053
        }, {
            lat: 39.0299,
            lon: -78.5715
        }, {
            lat: 39.016,
            lon: -78.5522
        }, {
            lat: 38.8846,
            lon: -78.7843
        }, {
            lat: 38.7669,
            lon: -78.8722
        }, {
            lat: 38.8451,
            lon: -78.9917
        }, {
            lat: 38.7102,
            lon: -79.0974
        }, {
            lat: 38.6555,
            lon: -79.1029
        }, {
            lat: 38.4106,
            lon: -79.3007
        }, {
            lat: 38.46,
            lon: -79.4792
        }, {
            lat: 38.5342,
            lon: -79.5314
        }, {
            lat: 38.5868,
            lon: -79.6481
        }, {
            lat: 38.4869,
            lon: -79.6962
        }, {
            lat: 38.4213,
            lon: -79.6989
        }, {
            lat: 38.3557,
            lon: -79.769
        }, {
            lat: 38.2813,
            lon: -79.7937
        }, {
            lat: 38.1518,
            lon: -79.9365
        }, {
            lat: 38.0232,
            lon: -79.9818
        }, {
            lat: 37.8835,
            lon: -80.137
        }, {
            lat: 37.7295,
            lon: -80.2592
        }, {
            lat: 37.6795,
            lon: -80.2881
        }, {
            lat: 37.6295,
            lon: -80.2194
        }, {
            lat: 37.5391,
            lon: -80.3224
        }, {
            lat: 37.5315,
            lon: -80.2881
        }, {
            lat: 37.4988,
            lon: -80.3032
        }, {
            lat: 37.4182,
            lon: -80.4776
        }, {
            lat: 37.4814,
            lon: -80.5119
        }, {
            lat: 37.3691,
            lon: -80.7715
        }, {
            lat: 37.4214,
            lon: -80.8635
        }, {
            lat: 37.3429,
            lon: -80.8525
        }, {
            lat: 37.2872,
            lon: -81.0516
        }, {
            lat: 37.2598,
            lon: -81.2741
        }, {
            lat: 37.3254,
            lon: -81.3675
        }, {
            lat: 37.2019,
            lon: -81.5543
        }, {
            lat: 37.1953,
            lon: -81.6724
        }, {
            lat: 37.2697,
            lon: -81.7685
        }, {
            lat: 37.3003,
            lon: -81.8701
        }, {
            lat: 37.3636,
            lon: -81.9333
        }, {
            lat: 37.4574,
            lon: -81.9772
        }, {
            lat: 37.4912,
            lon: -82.0308
        }, {
            lat: 37.6142,
            lon: -82.1558
        }, {
            lat: 37.8054,
            lon: -82.3535
        }, {
            lat: 38.0481,
            lon: -82.5513
        }, {
            lat: 38.1864,
            lon: -82.6392
        }, {
            lat: 38.3761,
            lon: -82.5966
        }, {
            lat: 38.4106,
            lon: -82.4854
        }, {
            lat: 38.4407,
            lon: -82.3412
        }, {
            lat: 38.589,
            lon: -82.2876
        }, {
            lat: 38.5976,
            lon: -82.1764
        }, {
            lat: 38.798,
            lon: -82.2148
        }, {
            lat: 39.016,
            lon: -82.028
        }, {
            lat: 38.9615,
            lon: -81.9649
        }, {
            lat: 38.875,
            lon: -81.8756
        }, {
            lat: 38.937,
            lon: -81.7671
        }, {
            lat: 39.0117,
            lon: -81.7657
        }, {
            lat: 39.08,
            lon: -81.752
        }, {
            lat: 39.179,
            lon: -81.7465
        }, {
            lat: 39.2642,
            lon: -81.5872
        }, {
            lat: 39.3969,
            lon: -81.4499
        }, {
            lat: 39.3481,
            lon: -81.3675
        }, {
            lat: 39.4012,
            lon: -81.237
        }, {
            lat: 39.4691,
            lon: -81.1093
        }, {
            lat: 39.5644,
            lon: -81.0104
        }, {
            lat: 39.612,
            lon: -80.9198
        }, {
            lat: 39.6522,
            lon: -80.8319
        }, {
            lat: 39.8054,
            lon: -80.8072
        }, {
            lat: 39.8802,
            lon: -80.7893
        }, {
            lat: 39.8518,
            lon: -80.799
        }, {
            lat: 40.098,
            lon: -80.7495
        }, {
            lat: 40.2282,
            lon: -80.7262
        }, {
            lat: 40.3926,
            lon: -80.6918
        }, {
            lat: 40.591,
            lon: -80.6451
        }, {
            lat: 40.6338,
            lon: -80.5188
        }, {
            lat: 39.7241,
            lon: -80.5174
        }, {
            lat: 39.7209,
            lon: -79.4778
        }]
    }, {
        name: "Wyoming",
        points: [{
            lat: 41.0037,
            lon: -104.0556
        }, {
            lat: 44.9949,
            lon: -104.0584
        }, {
            lat: 44.9998,
            lon: -111.0539
        }, {
            lat: 40.9986,
            lon: -111.0457
        }, {
            lat: 41.0006,
            lon: -104.0556
        }]
    }];
    window.stateshelper = {
        states: n,
        getStateByName: t,
        getStateRectByName: r
    }
}(),
function(n) {
    function s(n) {
        t = n.contentWindow;
        r = n.src;
        var i = $(t).width(),
            u = $(t).height();
        try {
            setTimeout(function() {
                t.FC.mapEntities.map.setOptions({
                    width: i,
                    height: u
                })
            }, t.FC.mapEntities ? 0 : 1e3)
        } catch (f) {
            $(t).trigger("resize")
        }
        t.FC.Settings.NAVIGATION_PANEL_WIDTH = 0;
        t.FC.Settings.SIDE_PANEL_WIDTH = 0
    }

    function u(n, i) {
        var u = h(n.toString().replace("'", '"'), i);
        r && t.postMessage("function() {" + u + "}", r)
    }

    function h(n, t) {
        var i = c(t);
        return "(" + n + ")(" + i + ")"
    }

    function c(n) {
        var t;
        if (!n) return "";
        for (t = 0; t < n.length; t++) typeof n[t] == "string" && (n[t] = '"' + n[t].replace('"', "").replace('"', "") + '"');
        return n.join()
    }

    function l() {
        t.$(".layers-selection-area").hide();
        t.$(".map-area-selection-panel").hide();
        t.$(".time-selection-panel").hide();
        t.$(".geo-map-controls").hide();
        t.$(".results-panel").hide();
        t.$(".export-panel").hide();
        t.$(".results-panel").hide();
        t.$("nav").hide();
        t.$(".geo-panel").css("margin-left", 0);
        t.$(".geo-panel").css("width", "100%");
        t.$("nav+main").css("padding-left", 0)
    }

    function f(n, i, r, u, f, e, o, s) {
        var c = t.$("section.geography"),
            h = new t.FC.GeoGrid(n, i, r, u, f, e, o, s);
        c.trigger("gridschanged", {
            id: h.id,
            grid: h
        })
    }

    function e(n, i) {
        setTimeout(function() {
            t.FC.mapEntities.map.setView({
                center: new t.Microsoft.Maps.Location(n, i),
                animate: !1
            })
        }, t.FC.mapEntities ? 0 : 1e3)
    }

    function a(n) {
        setTimeout(function() {
            t.FC.mapEntities.map.setView({
                zoom: n,
                animate: !1
            })
        }, t.FC.mapEntities ? 0 : 1e3)
    }

    function v(n, t, i, r) {
        return {
            lat: n + (t - n) / 2,
            lon: i + (r - i) / 2
        }
    }

    function y(n) {
        var i = t.$("section.geography");
        i.trigger("gridschanged", {
            id: n
        })
    }

    function p(n) {
        var i = t.FC.state.config.EnvironmentalVariables[n];
        i.selected = !i.selected;
        t.FC.state.toggleVariable(i.Name, i.DataSources.map(function(n) {
            return n.ID
        }))
    }

    function w() {
        t.FC.setActivePage("results")
    }

    function i(n, t) {
        for (var i = 0; i < n.length; i++) n[i].lon = Number(n[i].lon), n[i].lat = Number(n[i].lat);
        for (var u = !1, i = -1, f = n.length, r = f - 1; ++i < f; r = i)(n[i].lon <= t.lon && t.lon < n[r].lon || n[r].lon <= t.lon && t.lon < n[i].lon) && t.lat < (n[r].lat - n[i].lat) * (t.lon - n[i].lon) / (n[r].lon - n[i].lon) + n[i].lat && (u = !u);
        return u
    }

    function o(n, i, r, u, f, e, o, s, h, c, l, a) {
        for (var p, y = [], v = o; v <= s; v++) y.push(v);
        p = new t.FC.Request({
            spatial: new t.FC.CellGrid(n, i, r, u, f, e),
            temporal: new t.FC.TemporalDomain(y, !1, [1, 366], !0, [0, 24], !0),
            variable: h,
            serviceUrl: c
        });
        p.perform().then(function(n) {
            n.getData(["lat", "lon", "values", "sd"]).then(l, a)
        }, a)
    }

    function b(t, r, u, f, e, s, h, c) {
        var l = n.getStateByName(t),
            a = n.getStateRectByName(t);
        o(a.minLat, a.maxLat, r, a.minLon, a.maxLon, r, u, f, e, s, function(n) {
            for (var t, u = {
                    values: [],
                    sd: []
                }, f = n.values.length, r = 0; r < f; r++)
                for (t = 0; t < f; t++) {
                    var e = n.lat[r],
                        o = n.lat[r + 1],
                        s = n.lon[t],
                        c = n.lon[t + 1];
                    i(l.points, {
                        lat: e,
                        lon: s
                    }) && i(l.points, {
                        lat: e,
                        lon: c
                    }) && i(l.points, {
                        lat: o,
                        lon: s
                    }) && i(l.points, {
                        lat: o,
                        lon: c
                    }) && (u.values.push(n.values[r][t]), u.sd.push(n.sd[r][t]))
                }
            h(u)
        }, c)
    }
    var t, r;
    window.fchelper = window.fchelper || {};
    window.fchelper.ui = {
        setIFrame: function(n) {
            s(n)
        },
        setMapLocation: function(n, t) {
            e(n, t)
        },
        setMapZoom: function(n) {
            a(n)
        },
        addGrid: function() {
            u(f, Array.prototype.slice.call(arguments))
        },
        addStateGrid: function(t, i, r, u) {
            var o = n.getStateRectByName(t),
                s;
            f(o.minLat, o.maxLat, i, o.minLon, o.maxLon, i, t, r);
            u = u === undefined ? !0 : u;
            u && (s = v(o.minLat, o.maxLat, o.minLon, o.maxLon), e(s.lat, s.lon))
        },
        removeGrid: function(n) {
            y(n)
        },
        selectLayer: function() {
            u(p, Array.prototype.slice.call(arguments))
        },
        drawData: function() {
            u(w)
        },
        hidePanels: function() {
            l()
        }
    };
    window.fchelper.datafetching = {
        fetchData: o,
        fetchStateData: b
    }
}(stateshelper),
function() {
    var n = window.usecaseTab || {}, e = globalConstants.nassApiUrl + "api_get?",
        o = globalConstants.additionalStr,
        s = globalConstants.abudantUsaCrops,
        i = globalConstants.cropScapeFC,
        r = "",
        t = [{
            containerName: "State",
            dataItem: "state_name",
            isDefault: 1
        }, {
            containerName: "Commodity",
            dataItem: "commodity_desc",
            isDefault: 0
        }],
        u, f;
    n.buildRequestString = function(n, i) {
        var r = e;
        return $.each(n, function(u) {
            var h, o, f, s, e;
            if (n[u].Data.length > 0) {
                for (h = n[u].ContainerName, o = "", f = 0; f < t.length; f++)
                    if (h == t[f].containerName + i) {
                        o = t[f].dataItem;
                        break
                    }
                if (n[u].Data.length == 1) r.indexOf("=") > -1 && (r += "&"), r += o + "=" + encodeURIComponent(n[u].Data[0].Name);
                else {
                    for (s = [], r.indexOf("=") > -1 && (r += "&"), e = 0; e < n[u].Data.length; e++) s[e] = o + "__or=" + encodeURIComponent(n[u].Data[e].Name);
                    r += s.join("&")
                }
            }
        }), r + o
    };
    u = function(n, t) {
        for (var r, u, o = [], s = n.options, f, h = n.length, e = 0; e < h; e++)
            if (f = s[e], f.selected) {
                if (r = {}, r.Id = f.value, r.Name = f.text, t == 1)
                    for (u = 0; u < i.length; u++)
                        if (i[u].quickstats == r.Name) {
                            r.cropId = i[u].cropScapeFCId;
                            break
                        }
                o.push(r)
            }
        return o
    };
    f = function(n) {
        var r = [],
            t, i;
        if (n && n.length > 0)
            for (t = 0; t < n.length; t++) i = n[t].Name, s[i] && r.push(i);
        return r
    };
    n.removeFromArray = function(n, t) {
        $.each(n, function(i) {
            return n[i].ContainerName === t ? (n.splice(i, 1), !1) : !0
        })
    };
    n.fillDataSelects = function(n, i) {
        for (var o, r, u, f, e = 0; e < n.data.length; e++) {
            for (o = "", r = n.data[e], u = 0; u < r.Data.length; u++) r.Data[u].Id != 99 && r.Data[u].Id != 98 && (o += "<option value='" + r.Data[u].Id + "'>" + r.Data[u].Name + "<\/option>");
            for (f = 0; f < t.length; f++) t[f].dataItem == r.DataItem && ($("#" + t[f].containerName + i).html(o), $("#" + t[f].containerName + "Block" + i).show())
        }
    };
    n.getSources = function(t, i) {
        $.ajax({
            type: "GET",
            url: "/Api/Sources/Get",
            cache: !0,
            data: {
                containers: t.join()
            },
            success: function(t) {
                n.fillDataSelects(t, i)
            },
            error: function(n) {
                console.log(n.statusText)
            }
        })
    };
    n.buildDefaultBlocks = function(i) {
        for (var u = [], r = 0; r < t.length; r++) t[r].isDefault == 1 && u.push(t[r].dataItem);
        n.getSources(u, i)
    };
    n.toggleSelect = function(t, i, e) {
        var o = this,
            h = t.id,
            s = u(t, 0),
            c, l;
        if (h == i) {
            if ($("#process" + e).prop("disabled", !0), i == "StateUseCase") {
                if (o.oldSelectedState == "") o.oldSelectedState = s[0];
                else {
                    try {
                        fchelper.ui.removeGrid(Number(o.oldSelectedState.Id))
                    } catch (a) {
                        console.log(a)
                    }
                    o.oldSelectedState = s[0]
                }
                try {
                    fchelper.ui.addStateGrid(s[0].Name, 25, Number(s[0].Id))
                } catch (a) {
                    console.log(a)
                }
            }
            c = {};
            c.ContainerName = h;
            c.Data = s;
            n.removeFromArray(o.selectedItems, h);
            o.selectedItems.push(c);
            $("#CommodityBlock" + e).find(".load-mask").show();
            $.ajax({
                url: helper.nassUrl + "api/uc/Commodity/GetCommodityByState?stateId=" + s[0].Id,
                cache: !0,
                success: function(t) {
                    var i, s, u;
                    if ($("#CommodityBlock" + e).find(".load-mask").hide(), i = f(t.data), i) {
                        for (s = "", u = 0; u < i.length; u++) s += "<option value='" + i[u] + "'>" + i[u] + "<\/option>";
                        $("#Commodity" + e).html(s);
                        $("#CommodityBlock" + e).show();
                        n.removeFromArray(o.selectedItems, "Commodity" + e)
                    } else $("#Commodity" + e).html(""), n.removeFromArray(o.selectedItems, "Commodity" + e);
                    r = n.buildRequestString(o.selectedItems, e)
                }
            })
        } else l = {}, l.ContainerName = h, l.Data = s, n.removeFromArray(o.selectedItems, h), o.selectedItems.push(l), r = n.buildRequestString(o.selectedItems, e), $("#process" + e).prop("disabled", !1)
    };
    n.defaultInitializeUseCasesTab = function() {
        usecase.defaultInitializeUCDataVisualizationTab();
        usecaseAzureMl.defaultInitializeUCAzureMLTab()
    };
    window.usecaseTab = n
}(),
function() {
    var e = window.usecase || {}, w = "UseCase",
        nt = "StateUseCase",
        n = {
            areaPlanted: "areaPlanted",
            areaHarvested: "areaHarvested",
            _yield: "yield"
        }, tt = globalConstants.abudantUsaCrops,
        s = function(t, i, r) {
            var u = k + "api_get?",
                f = tt[i];
            switch (r) {
                case n.areaPlanted:
                    u = u + f.areaPlanted;
                    break;
                case n.areaHarvested:
                    u = u + f.areaHarvested;
                    break;
                case n._yield:
                    u = u + f._yield
            }
            return u.replace("STATENAME", t)
        }, k = "",
        t = {};
    t.selectedItems = [];
    t.oldSelectedState = "";
    var f = [],
        a = [],
        i = [],
        r = [],
        u = [],
        o = [],
        d = [],
        l = [],
        it = function() {
            var i = [],
                f = "",
                a = $("#CommodityUseCase option:selected").text(),
                e, r, o, u, c, l;
            for ($("#CommodityUseCase").find(":not(:selected)").each(function(n, t) {
                i.push(t.text)
            }), e = new g({
                numRequest: i.length * 2 + 1,
                processName: "multivariateRegression"
            }), r = 0; r < t.selectedItems.length; r++) t.selectedItems[r].ContainerName == "StateUseCase" && (f = t.selectedItems[r].Data[0].Name);
            for (o = s(f, a, n.areaPlanted), h(o, e, ""), u = 0; u < i.length; u++) c = s(f, i[u], n.areaPlanted), h(c, e, ""), l = s(f, i[u], n.areaPlanted), h(l, e, "")
        }, rt = function() {
            for (var e, h = [], t = 0; t < f.length; t++) switch (f[t].name) {
                case n.areaPlanted:
                    f[t].data.data && (i = f[t].data.data.sort(v));
                    break;
                case n.areaHarvested:
                    f[t].data.data && (r = f[t].data.data.sort(v));
                    break;
                case n._yield:
                    f[t].data.data && (u = f[t].data.data.sort(v))
            }
            if (u.length > 0 || r.length > 0 || i.length > 0) {
                o = [];
                o = o.concat(u);
                o = o.concat(r);
                o = o.concat(i);
                var l = y(u),
                    a = y(r),
                    w = y(i),
                    k = p(u),
                    d = p(r),
                    g = p(i),
                    nt = Math.min(l, a, w),
                    tt = Math.max(k, d, g),
                    s = b = c = 0;
                for (t = tt; t >= nt; t--) {
                    if (e = {}, i.length && s < i.length && i[s].year && parseInt(i[s].year) == t)
                        for (e.state_name = i[s].state_name, e.year = i[s].year, e.area_planted = i[s].value; s < i.length - 1 && parseInt(i[s].year) == t;) s++;
                    if (r.length && b < r.length && r[b].year && parseInt(r[b].year) == t)
                        for (e.state_name = r[b].state_name, e.year = r[b].year, e.area_harvest = r[b].value; b < r.length - 1 && parseInt(r[b].year) == t;) b++;
                    if (u.length && c < u.length && u[c].year && parseInt(u[c].year) == t)
                        for (e.state_name = u[c].state_name, e.year = u[c].year, e._yield = u[c].value; c < u.length - 1 && parseInt(u[c].year) == t;) c++;
                    e.year && h.push(e)
                }
            }
            return h
        }, g = function() {
            var i, t, n;
            return function(r) {
                r || (r = {});
                i = r.numRequest || 0;
                t = r.requestsCompleted || 0;
                n = [];
                var u = function() {
                    var i, u, t;
                    for (r.processName == "tableData" ? (d = rt(), a = d, table.prepareUseCaseTable(a), lineChart.buildLineChart(a, "standardRegression", "useCaseLineChartLoad"), it()) : r.processName == "multivariateRegression" && (i = [], u = $("#CommodityUseCase option:selected").text(), $("#CommodityUseCase option").each(function(n, t) {
                        i.push(t.value)
                    }), lineChart.buildRegressionChart(l, "pythonRegression", "useCaseBarChartLoad", i, u), l = []), t = 0; t < n.length; t++) n[t]()
                };
                r.singleCallback && n.push(r.singleCallback);
                this.addCallbackToQueue = function(r, f) {
                    r && t++;
                    f && n.push(f);
                    t == i && u()
                };
                this.requestComplete = function(n) {
                    n && t++;
                    t == i && u()
                };
                this.setCallback = function() {
                    n.push(callBack)
                }
            }
        }();
    e.fetchClimateLoad = function() {
        fchelper.ui.setIFrame($("#fetchClimateMap")[0]);
        fchelper.ui.setMapLocation(40.675, -99.092);
        fchelper.ui.setMapZoom(4);
        fchelper.ui.hidePanels()
    };
    e.defaultInitializeUCDataVisualizationTab = function() {
        var r = $("#collapseGraphics"),
            n = r.find("select");
        for (var i in n) isNaN(i) || (n[i].onchange = function() {
            usecaseTab.toggleSelect.call(t, this, nt, w)
        });
        table.prepareUseCaseTable([]);
        $("#processUseCase").prop("disabled", !0);
        $("#fetchClimateMap").load(function() {
            var n, i, r;
            if (e.fetchClimateLoad(), n = $("#fetchClimateMap")[0].contentWindow, n.$(".MicrosoftMap").css("width", "100%"), n.onresize = function() {
                n.$(".MicrosoftMap").css("width", "100%")
            }, t.oldSelectedState) {
                i = t.oldSelectedState.Name;
                r = t.oldSelectedState.Id;
                try {
                    fchelper.ui.addStateGrid(i, 25, Number(r))
                } catch (u) {
                    console.log(u)
                }
            }
        });
        $('a[href^="#collapseGraphics"]').click(function() {
            var t = $("#fetchClimateMap"),
                r = t.attr("data-is-loaded"),
                i, n;
            r || (i = $(this).attr("aria-expanded"), i == "false" && (n = $("#fetchClimateMap")[0], n.src = n.src, t.attr("data-is-loaded", !0)))
        });
        k = helper.nassApiUrl;
        usecaseTab.buildDefaultBlocks(w);
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    };
    var h = function(n, t, i) {
        $.ajax({
            url: n,
            cache: !0,
            success: function(n) {
                i.length > 0 ? (f.push({
                    data: n,
                    name: i
                }), t.addCallbackToQueue(!0, function() {})) : (n.data && (l = l.concat(n.data)), t.addCallbackToQueue(!0, function() {}))
            },
            error: function() {
                t.addCallbackToQueue(!0, function() {})
            }
        })
    }, ft = function(n) {
            for (var i = "", t = 0; t < selectedItems.length; t++) selectedItems[t].ContainerName == "StateUseCase" && (i = selectedItems[t].Data[0].Name);
            fchelper.datafetching.fetchStateData(i, 25, 2008, 2014, "CropScape", "http://msrfc.cloudapp.net", function(t) {
                fcData = t;
                n.addCallbackToQueue(!0, function() {})
            }, function(n) {
                console("Error getting data from FetchClimate: " + n)
            })
        }, ut = function(i) {
            for (var e, o, c, u = "", f = "", r = 0; r < t.selectedItems.length; r++) t.selectedItems[r].ContainerName == "StateUseCase" ? u = t.selectedItems[r].Data[0].Name : f = t.selectedItems[r].Data[0].Name;
            e = s(u, f, n.areaPlanted);
            h(e, i, n.areaPlanted);
            o = s(u, f, n.areaHarvested);
            h(o, i, n.areaHarvested);
            c = s(u, f, n._yield);
            h(c, i, n._yield)
        };
    e.clear = function() {
        f = [];
        i = [];
        r = [];
        u = [];
        table.clear("ucTable");
        lineChart.clearGraphic("standardRegression");
        lineChart.clearGraphic("pythonRegression")
    };
    e.processUseCase = function() {
        var i, n;
        e.clear();
        t.selectedItems.length == 2 ? ($("#processUseCase").prop("disabled", !0), $("#useCaseDataTableLoad").css("display", "block"), i = new g({
            numRequest: 3,
            processName: "tableData"
        }), f = [], ut(i)) : (n = "Please, select ", n += t.selectedItems.length == 0 ? "State and Commodity" : "Commodity", $("#message-text").text(n), $("#unselected").modal("show"))
    };
    var v = function(n, t) {
        return parseInt(n.year) > parseInt(t.year) ? -1 : parseInt(n.year) < parseInt(t.year) ? 1 : 0
    }, y = function(n) {
            var t = 0;
            return n.length > 0 && (t = parseInt(n[n.length - 1].year)), t
        }, p = function(n) {
            var t = 0;
            return n.length > 0 && (t = parseInt(n[0].year)), t
        };
    window.usecase = e
}(),
function() {
    var a = window.usecaseAzureMl || {}, u = {};
    u.selectedItems = [];
    var k = "UseCaseAzureMl",
        v = "StateUseCaseAzureMl",
        h = "CommodityUseCaseAzureMl",
        f = [],
        nt = [],
        t = [],
        i = [],
        r = [],
        e = [],
        d = [],
        n = {
            areaPlanted: "areaPlanted",
            areaHarvested: "areaHarvested",
            _yield: "yield"
        }, l = [],
        tt = helper.nassApiUrl,
        it = globalConstants.abudantUsaCrops;
    a.defaultInitializeUCAzureMLTab = function() {
        var i = $("#collapseAzureMl"),
            n = i.find("select");
        for (var t in n) isNaN(t) || (n[t].onchange = function() {
            usecaseTab.toggleSelect.call(u, this, v, k)
        });
        usecaseTab.buildDefaultBlocks(k);
        table.createTableByAzureMlData([], "No data available in table");
        $("#processUseCaseAzureMl").prop("disabled", !0);
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    };
    var o = function(t, i, r) {
        var u = tt + "api_get?",
            f = it[i];
        switch (r) {
            case n.areaPlanted:
                u = u + f.areaPlanted;
                break;
            case n.areaHarvested:
                u = u + f.areaHarvested;
                break;
            case n._yield:
                u = u + f._yield
        }
        return u.replace("STATENAME", t)
    }, s = function(n, t, i) {
            $.ajax({
                url: n,
                cache: !0,
                success: function(n) {
                    i.length > 0 ? (f.push({
                        data: n,
                        name: i
                    }), t.addCallbackToQueue(!0, function() {})) : (n.data && (l = l.concat(n.data)), t.addCallbackToQueue(!0, function() {}))
                },
                error: function() {
                    t.addCallbackToQueue(!0, function() {})
                }
            })
        }, rt = function(t) {
            for (var e, h, c, r = "", f = "", i = 0; i < u.selectedItems.length; i++) u.selectedItems[i].ContainerName == v ? r = u.selectedItems[i].Data[0].Name : f = u.selectedItems[i].Data[0].Name;
            e = o(r, f, n.areaPlanted);
            s(e, t, n.areaPlanted);
            h = o(r, f, n.areaHarvested);
            s(h, t, n.areaHarvested);
            c = o(r, f, n._yield);
            s(c, t, n._yield)
        }, y = function(n) {
            var t = 0;
            return n.length > 0 && (t = parseInt(n[n.length - 1].year)), t
        }, p = function(n) {
            var t = 0;
            return n.length > 0 && (t = parseInt(n[0].year)), t
        }, w = function(n, t) {
            return parseInt(n.year) > parseInt(t.year) ? -1 : parseInt(n.year) < parseInt(t.year) ? 1 : 0
        }, ut = function() {
            var t = [],
                f = "",
                v = $("#" + h + " option:selected").text(),
                e, i, c, r, l, a;
            for ($("#" + h).find(":not(:selected)").each(function(n, i) {
                t.push(i.text)
            }), e = new g({
                numRequest: t.length * 2 + 1,
                processName: "azureMlSecondChart"
            }), i = 0; i < u.selectedItems.length; i++) u.selectedItems[i].ContainerName == "StateUseCaseAzureMl" && (f = u.selectedItems[i].Data[0].Name);
            for (c = o(f, v, n.areaPlanted), s(c, e, ""), r = 0; r < t.length; r++) l = o(f, t[r], n.areaPlanted), s(l, e, ""), a = o(f, t[r], n.areaPlanted), s(a, e, "")
        }, ft = function() {
            var n = {};
            return n.stateName = $("#" + v + " option:selected").text(), n.cropName = $("#" + h + " option:selected").text(), n
        }, et = function() {
            for (var o, h = [], u = 0; u < f.length; u++) switch (f[u].name) {
                case n.areaPlanted:
                    f[u].data.data && (t = f[u].data.data.sort(w));
                    break;
                case n.areaHarvested:
                    f[u].data.data && (i = f[u].data.data.sort(w));
                    break;
                case n._yield:
                    f[u].data.data && (r = f[u].data.data.sort(w))
            }
            if (r.length > 0 || i.length > 0 || t.length > 0) {
                e = [];
                e = e.concat(r);
                e = e.concat(i);
                e = e.concat(t);
                var l = y(r),
                    a = y(i),
                    v = y(t),
                    k = p(r),
                    d = p(i),
                    g = p(t),
                    nt = Math.min(l, a, v),
                    tt = Math.max(k, d, g),
                    s = b = c = 0;
                for (u = tt; u >= nt; u--) {
                    if (o = {}, t.length && s < t.length && t[s].year && parseInt(t[s].year) == u)
                        for (o.state_name = t[s].state_name, o.year = t[s].year, o.area_planted = t[s].value; s < t.length - 1 && parseInt(t[s].year) == u;) s++;
                    if (i.length && b < i.length && i[b].year && parseInt(i[b].year) == u)
                        for (o.state_name = i[b].state_name, o.year = i[b].year, o.area_harvest = i[b].value; b < i.length - 1 && parseInt(i[b].year) == u;) b++;
                    if (r.length && c < r.length && r[c].year && parseInt(r[c].year) == u)
                        for (o.state_name = r[c].state_name, o.year = r[c].year, o._yield = r[c].value; c < r.length - 1 && parseInt(r[c].year) == u;) c++;
                    o.year && h.push(o)
                }
            }
            return h
        }, g = function() {
            var i, t, n;
            return function(r) {
                r || (r = {});
                i = r.numRequest || 0;
                t = r.requestsCompleted || 0;
                n = [];
                var u = function() {
                    var u, i, f, t;
                    for (r.processName == "tableData" ? (d = et(), nt = d, u = ft(), table.getDataFromAzureMlByStateAndCrop(u), ut(), $(".hrefAzureMlDescription .use-case-details").show()) : r.processName == "azureMlSecondChart" && (i = [], f = $("#" + h + " option:selected").text(), $("#" + h + " option").each(function(n, t) {
                        i.push(t.value)
                    }), lineChart.buildRegressionChart(l, "azureMlSecondChart", "ucAzureMlSecondChartLoad", i, f), l = []), t = 0; t < n.length; t++) n[t]()
                };
                r.singleCallback && n.push(r.singleCallback);
                this.addCallbackToQueue = function(r, f) {
                    r && t++;
                    f && n.push(f);
                    t == i && u()
                };
                this.requestComplete = function(n) {
                    n && t++;
                    t == i && u()
                };
                this.setCallback = function() {
                    n.push(callBack)
                }
            }
        }();
    a.processUseCase = function() {
        var t, n;
        u.selectedItems.length == 2 ? ($("#processUseCaseAzureMl").prop("disabled", !0), $("#ucAzureMlDataTableLoad").css("display", "block"), t = new g({
            numRequest: 3,
            processName: "tableData"
        }), f = [], rt(t)) : (n = "Please, select ", n += u.selectedItems.length == 0 ? "State and Commodity" : "Commodity", $("#message-textAzureMl").text(n), $("#unselectedAzureMl").modal("show"))
    };
    window.usecaseAzureMl = a
}(),
function() {
    var n = window.documentationTab || {};
    n.defaultInitializeDocumentationTab = function() {
        $(".m_button").on("click", function() {
            var t = $(this),
                n = t.children()[0],
                i, r;
            n.src = n.src.indexOf("plus") >= 0 ? n.src.replace("plus", "minus") : n.src.replace("minus", "plus");
            i = t.parent();
            r = i.find(".doc");
            r.toggle()
        })
    };
    window.documentationTab = n
}(),
function() {
    var t = {
        none: {
            name: "none",
            value: "none"
        },
        MAZ: {
            name: "MAZ",
            value: "maize-table"
        },
        SBN: {
            name: "SBN",
            value: "soybean-table"
        },
        WHB: {
            name: "WHB",
            value: "bread-wheat-table"
        }
    }, n = window.agmipTab || {};
    n.getAgMipList = function() {
        var n = $("#CropFilter").val();
        $("#miptable > thead").each(function() {
            $(this).hide()
        });
        $("#miptable > tbody").each(function() {
            $(this).hide()
        });
        n != t.none.name && ($("#miptable > thead[class=" + t[n].value + "]").show(), $("#miptable > tbody[class=" + t[n].value + "]").show())
    };
    n.defaultInitializeAgMipTab = function() {
        $("#viewMetadata").bind("click", function() {
            n.getAgMipList()
        })
    };
    window.agmipTab = n
}(),
function() {
    var n = window.downloadTab || {};
    n.defaultInitializeDownloadTab = function() {
        $(".collapseagMIP").each(function() {
            $(this).find("thead").show();
            $(this).find("tbody").show()
        })
    };
    window.downloadTab = n
}();
$(document).ready(function() {
    var n = {
        NassTab: nass.defaultInitializeNassTab,
        ArmsTab: arms.defaultInitializeArmsTab,
        UseCasesTab: usecaseTab.defaultInitializeUseCasesTab,
        AgmipTab: agmipTab.defaultInitializeAgMipTab,
        DocumentationTab: documentationTab.defaultInitializeDocumentationTab,
        DownloadTab: downloadTab.defaultInitializeDownloadTab
    };
    $("#NassTab").length > 0 && (Router.nav("NassTab"), Router.routes.NassTab == 0 && (n.NassTab(), Router.routes.NassTab = 1));
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
        t.preventDefault();
        var i = t.target.id;
        Router.nav(i);
        n[i] && Router.routes[i] == 0 && (n[i](), Router.routes[i] = 1)
    });
    $(window).bind("hashchange", function() {
        var t = location.hash.replace("#", "");
        n[t] && (Router.routes[t] == 0 && n[t](), $("#" + t).tab("show"))
    })
});
Router = {
    routes: {
        NassTab: 0,
        ArmsTab: 0,
        UseCasesTab: 0,
        AgmipTab: 0,
        DocumentationTab: 0,
        DownloadTab: 0
    },
    nav: function(n) {
        setUrl(n)
    }
}
