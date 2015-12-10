javascript: (function () {
    'use strict';
    var scriptTag;
    scriptTag = document.createElement('script');
    scriptTag.src = "https://cdn.mlkcca.com/v2.0.0/milkcocoa.js";
    scriptTag.onload = function () {
        var mk = new window.MilkCocoa('maxihu0p5d3.mlkcca.com'),
            ds,
            memo;

        mk.user(function (err, user) {
            console.log(user);
            if (!user) {
                window.alert("Twitterアカウントでログインお願いします。");
                /*location.href = {index.htmlのページのURL};*/
                return;
            }

            ds = mk.dataStore('website').child(user.sub);
            memo = window.prompt("メモ", "");

            ds.push({
                "title": document.title,
                "url": location.href,
                "memo": memo
            });
        });
    };
    document.body.appendChild(scriptTag);
}());
