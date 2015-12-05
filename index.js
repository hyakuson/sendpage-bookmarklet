(function () {
    'use strict';

    var mk = new window.MilkCocoa('hotic23lr8n.mlkcca.com'),
        ds = mk.dataStore('website');

    ds.stream().size(100).next(function (err, data) {
        var tbody = document.getElementById('tbody');

        data.forEach(function (row, index) {
            var tr = tbody.insertRow(index),
                td_title = tr.insertCell(0),
                td_url = tr.insertCell(1),
                td_memo = tr.insertCell(2);
            td_title.textContent = row.value.title;
            td_url.textContent = row.value.url;
            td_memo.textContent = row.value.memo;
            tr.appendChild(td_title);
            tr.appendChild(td_url);
            tr.appendChild(td_memo);

            tbody.appendChild(tr);
        });
    });
}());