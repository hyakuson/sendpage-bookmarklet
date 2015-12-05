javascript: (function () {
    'use strict';
    var scriptTag;
    scriptTag = document.createElement('script');
    scriptTag.src = "https://cdn.mlkcca.com/v2.0.0/milkcocoa.js";
    scriptTag.onload = function () {
        var mk = new window.MilkCocoa('{YourAppId}.mlkcca.com'),
            ds = mk.dataStore('website'),
            memo = window.prompt("メモ", "");
        ds.push({
            "title": document.title,
            "url": location.href,
            "memo": memo
        });
    };
    document.body.appendChild(scriptTag);
}());