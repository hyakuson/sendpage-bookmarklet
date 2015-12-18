(function () {
    'use strict';

    var mk = new window.MilkCocoa('maxihu0p5d3.mlkcca.com'),
        ds = mk.dataStore('website');

    ds.stream().size(100).next(function (err, data) {
        var tbody = document.getElementById('tbody');

        data.forEach(function (row, index) {
            var tr = tbody.insertRow(index),
                td_title = tr.insertCell(0),
                td_url = tr.insertCell(1),
                td_memo = tr.insertCell(2),
                a_url = document.createElement('a');
            td_title.textContent = row.value.title;
            a_url.setAttribute('href', row.value.url);
            a_url.setAttribute('target', '_blank');
            a_url.appendChild(document.createTextNode(row.value.url));
            td_url.appendChild(a_url);
            td_memo.textContent = row.value.memo;
            tr.appendChild(td_title);
            tr.appendChild(td_url);
            tr.appendChild(td_memo);

            tbody.insertBefore(tr, tbody.firstChild);
        });
    });
}());
