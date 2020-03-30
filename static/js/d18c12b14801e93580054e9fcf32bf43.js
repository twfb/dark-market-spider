(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('松阳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"331124","properties":{"name":"松阳县","cp":[119.481511,28.448803],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@A@@AA@@A@@A@@A@AA@BAA@@@BA@A@@@AA@@@@@A@@BA@@@@@A@ABA@A@@@A@@@@@AB@@@EB@BA@@DA@@@AAAA@@A@A@@@AB@@BBB@BB@BB@@@@@A@@@@AAAAA@@AA@@@B@F@@@@@BA@@@@B@B@@C@@@@@A@@@A@@AC@@A@@@@A@@A@@@A@A@A@A@@@@@@B@@@@@B@BA@@BA@@@A@@B@@@@A@@A@@A@@B@@AAA@@BAAA@@@BA@@BA@A@@@@A@@@AAA@A@ABA@AB@@@@@B@B@@ABA@@@@B@@@B@BA@@B@@@AA@@@@B@@BB@@A@@@@BB@@@A@ABB@@@@B@@A@ABA@@@AAA@@AAAAA@A@A@@A@@@ABCB@@@@CB@@A@@@@@A@@@@@@@A@AA@@A@AAA@@A@@@@@AA@@A@@@AA@@@@@@CAA@@CAABA@@@@BAB@@@B@@B@@BB@@@BB@@@@@B@BB@@B@B@@AB@@AB@@CBA@ABA@@@AB@@B@@@@@A@A@@B@@B@@B@@@@BA@@B@BA@@@B@@@B@@BB@@B@@@BB@@B@@@ABA@C@@@ABA@@B@@AA@@A@@@A@A@AB@@A@A@AA@A@@A@@AAAA@@A@@@A@@A@@A@AA@AA@@@@AAAB@A@@A@@AB@@@AA@@A@@@A@@A@@AA@@BA@@AA@@@@BA@AA@@@@@A@@@@@@AA@@@@@A@@@A@A@@@A@@A@@A@A@A@AB@@@AA@AB@@@@A@@@A@A@@@A@CAAAA@@@@@A@@@@AA@@@@AA@A@AB@@@@A@@@A@A@CA@BAD@@@BA@@B@B@B@BA@A@A@@@@B@@@BA@BBA@@B@@@B@@@@AB@@@B@@A@A@EB@@@@A@@@A@A@@@@@AAA@@A@@A@CA@@AAA@AAA@@@A@A@@@A@@@AAA@@AA@@@ACAC@AAA@@@AAA@@AB@@C@A@@BA@A@@@@@A@@@EB@@C@A@C@A@@BA@A@@@A@A@CA@@A@@A@B@B@@@DBBBBB@BB@@B@@B@@@@A@@B@@@BB@@@@BA@@B@B@@@B@@BB@BA@@B@@A@A@BB@@@@ABA@@@A@A@@B@@@@@B@@A@@A@@@@A@C@AA@@@@@B@@A@AB@@AB@@@@AB@@ABAB@@@B@B@@B@@@@@@BA@@@BB@BA@AB@B@@@@@BA@@BAB@@@B@B@BB@@F@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@BA@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@AAA@@@@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@A@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@A@@B@@@B@@A@@@A@@AA@A@@@@BA@AA@BAB@BA@AB@@@@A@@@A@ABA@A@A@@@A@A@@AA@A@@@A@@@A@@@@A@@@A@A@@@@AAACA@@AA@@ABAA@BA@A@A@@@AAA@@@A@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@A@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@AB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@B@@A@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@@@@@B@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@A@@@@@@@@@A@@@@@@B@@@@@@@@A@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@AB@@@@@A@@@@@@@@@@@B@@A@@@@@@@@@B@@@@@@@@@@@B@@@@B@@@@B@@B@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@B@@@@@@A@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@BCD@@AB@B@@ABA@A@A@A@@@@@CB@@@B@@A@@@@@@BA@@@A@@@BB@@@B@@@BBB@B@@@@ABB@@@B@@BB@@@@@A@@@AB@@AB@@@B@@@@@BA@@@@@@BA@BB@@@@@@@DA@@@BB@BBB@BB@BAB@B@BAB@@@@A@@@@@A@@@@A@@A@@B@AAB@@@@@@@@@@@@@@B@A@B@@B@@@@BBB@@@B@B@B@B@B@@A@@BA@@B@B@@ABBB@B@@A@@B@BBB@@@B@@B@B@@@BB@@@@B@@@BB@@@@@BA@DBDD@@@@@@@B@@@B@@@@@B@@@B@@@BB@@@@BB@@B@@BB@@A@@B@@AB@@@@BD@@AB@@BB@@@B@BA@AB@@@@@B@@AB@@BB@@@B@@AB@@@B@@@@@BBB@@@@@B@@@BA@@@@BA@@@@@BB@@@B@@B@@BB@@@@B@@B@B@BA@@@B@@@BAB@@@BA@@@@@AB@@@B@@@D@@@@@AB@@BB@@BB@@B@B@@BB@@@BB@@BBB@@@@BB@@@B@@B@B@BBBABBB@@@@@@BB@@B@@B@D@D@@@@B@BB@@@@@@B@@@B@@BD@B@@A@AD@B@@D@@@B@@ABABBBA@@BA@@B@B@DA@A@@@@@BBB@@B@B@@@@@@B@@@B@BBB@B@B@@B@@BB@B@@@B@@B@@@@@B@@@BB@@B@@@B@@@BBB@B@@@B@@B@@B@@B@@@@BB@BB@@@@@B@@@BAB@@A@@@ABA@@@AB@B@@CDA@@BAB@B@@@B@@@@BB@@B@BD@@@BB@@B@@DDB@@@BBB@BB@@BBB@@@@@BB@@B@@@@@@@@@@B@@@B@B@@A@@@@B@B@@@@@B@@@B@@@@@@@@@B@BA@@B@@@D@@@B@B@@@BAB@@B@@BA@@@@D@@@@BB@BAB@@BB@@AB@B@B@@BB@B@@@B@@@@@B@@@@B@@@@@BB@@@B@@@B@@@@BB@B@@BB@@@BB@BB@B@@B@@@B@@B@@@@@B@B@D@@A@@BC@@B@@ABBB@@@B@B@@BB@BB@@B@@B@@BB@@B@@@@@B@@@D@@@B@@BDBF@@@@BB@ABBBB@BB@@BBB@@@B@@A@@BA@@@@BBB@B@@@@BB@@@B@@B@B@B@B@B@B@@@@BD@@@B@@@@@@@@@@@@@B@BA@@B@@@B@@@B@@@@BB@@@@BBB@@B@@@BB@@B@@@B@@A@@BA@@@AA@@@BABA@@D@@@B@@AB@@BB@@AB@@@B@@A@@@@@@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@BB@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@BB@@B@@@@@@B@@B@@@@@BAB@@@BBBAB@B@B@@@@@@@@AB@@@@@@@@B@@B@@@@A@@@@@AB@@@@A@@@@@@BB@B@@AB@@@@@DA@@@AB@@AB@@@@@@@@@@@@B@@@@B@@AB@@@@A@@B@@AB@@@@@@@@@B@@@@@BABA@@@@@DB@@@@@@B@@@@@B@@@@@BA@AB@@BB@B@@@@@B@@BB@@@BB@@@@@B@@AB@@@@@BA@@@@BB@@@B@@@@BBB@@B@@@BA@@@@B@@@@ABA@@BCBA@@@@@@BBB@@@B@@@@B@@@B@@@@B@B@B@@B@@@B@B@B@DAB@@@@@B@FA@@@@BA@@@A@@@@BDA@@BB@BB@@@B@@@@BA@@@@BA@@@@@@B@@@@@@BA@@@@B@@@@@@@@@B@BA@@@AB@@@BJF@@B@@@@B@B@@@B@@BA@@@BB@BDB@B@@B@@@B@@BB@@@B@B@@DBB@@@@BB@@@@BB@@B@@@BBBB@@@@B@BB@BB@@BBBB@BA@@B@@BD@B@@BBBB@BB@@@@@AA@@B@@@@@@B@@B@@AB@@@@BB@@@@AA@@@@@@A@@@@@@@A@@B@@@@@@BB@BD@@@@B@@@@@@BB@@@@BAB@@@B@@@DA@@@@BA@@@@@@@B@@@B@@A@@B@B@B@@@B@@A@@@A@@@A@@@AD@@@@B@@@BBDBDBB@B@B@@@B@@BBBAB@@@@AB@BAB@@@BBB@BBD@@BB@BB@@B@@BB@@@@@B@B@@@B@@BB@B@@@B@@@@@@BB@@@@@BBB@@@B@DB@@@BB@BB@@@@@B@@@B@B@BBB@@DBBBB@BA@@@@B@@@@@B@@@B@@@@@B@@@@@@B@B@@B@B@B@@@@@@@B@@@@@BA@@B@BAB@@AB@@@@@B@@@B@@AB@@@@AB@@A@@@A@@BA@@AC@C@@@A@@@A@@@A@@@A@@B@@A@AB@@@B@@A@@B@@@@B@@@@@B@@@BB@@@@@B@@@@@BA@@B@@@@@@BB@B@@BBA@@D@B@@AB@@@@@@@@@A@@BA@B@@B@@B@@@@@BB@@B@@@@B@BA@@@BAAA@@@@A@@AA@AA@@@B@@@B@@@@B@@B@BBB@@B@@B@@@@@@BA@@B@@AB@@A@AB@@@@@B@DAB@BB@@@B@@@B@@B@BA@@BA@@BBBA@@B@@A@@BA@@B@B@@@BA@AB@@@BA@@@@BB@@B@@@@@@@BB@@AB@B@@BC@@B@B@B@BB@@@@B@@@BAB@@B@@@D@@B@@B@F@@@@B@BABAB@@@B@@@@@@AB@@AB@@A@@@@@@BB@@B@@B@@@@BBB@@@BA@@@ABB@@B@@@@A@AA@@@@@BA@@@@B@@@@@@AB@@A@@@A@AB@@B@B@@B@@@@A@@B@B@@@@@@AA@@A@A@CA@@AAAA@A@@@@@AA@A@@@A@A@@@A@@@@@AAA@@@A@@@C@@@@@@@A@@A@@@@A@@@A@@@@@@@A@@A@@@@@A@@@@@@A@@@A@@@@@@@A@@A@@A@@@@@@@@@AA@@@AA@@@A@@A@@@A@@@@A@@AA@@@@AA@@B@@A@@B@@BB@@@@BB@@@@@B@@@BA@@@BB@@AB@B@@@@@B@@@B@@@@@B@@@BB@@B@@ABB@AB@@@@@B@@@B@BA@@BB@@BA@@B@@@B@@B@@BA@@@@B@@@@@@BB@@@@AB@@@@@@@@@@@B@B@BB@@B@@@B@@@@A@@@@BA@@@@@AB@@@D@@@@@@@@BB@BAB@B@BA@@B@BB@AB@@B@@BB@@@@@@@@B@@@DB@@B@@@AABA@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@B@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@ABB@@@@@@@BBB@@B@BBB@BB@@@BB@@@@B@B@@BB@BBB@BB@@@B@@@BBB@B@B@BAB@B@@AB@@AB@@@@@@@B@B@@@B@BA@@BA@@@@BB@@B@@@BABA@ABA@@B@@@@@@B@@@@B@B@@@@@@@@BB@@AB@@AB@@@A@@AAA@@@A@C@@BB@@@@@@@A@@@@B@BA@@@@@A@@@AA@@AA@BA@@@A@@DC@@@A@A@@@@A@@@@@@BB@@@A@@@A@@@AD@@@@@A@@@@@AAAB@@@@@@A@ABAA@@@@@B@@BB@BBB@@B@@@@@ABA@A@@@@@A@@BB@@@@@BB@@@@@@A@A@@@A@@@@@@@A@@@@@@BC@@@@B@BD@@B@@@@@@@@@@@@AB@@@@@@@@@B@@A@@@@BA@AD@@@@@B@@B@@@B@B@@@@@BDB@@@BB@@@B@@@@@@A@@@@@@A@@A@@AA@@@@@@@@@@@A@@@@@@@@@A@@B@B@@BB@@B@@@@B@DB@@B@B@@@@@@@@@D@@@BA@@@@F@@@BBB@BABA@@@@BBBB@@BB@B@@B@F@@BB@@@B@B@@AB@@@@@@AB@@ABABB@BDB@BB@BD@@B@D@@ADA@@@@@AA@@@@@@@@AAA@@@@@A@@@@@A@@B@@@@@@@@B@BB@@@@BB@AAB@@A@@BAB@BA@C@@BA@@@A@@B@@@@@B@B@AABABB@@@BBB@BBB@ABA@@@@AFB@@@@@@@B@@@B@@@BA@@@@A@@@@AB@@ABA@@B@@@@BB@@@B@D@@@B@B@@@B@@A@AB@@A@@@@@A@@B@@ABA@ABCBA@@B@@@BC@@AA@A@@AA@@@A@A@@@A@@@A@A@@AC@A@A@@B@BAD@@@B@B@@@@@AA@@AA@@@AA@@A@@@A@@@AA@@AA@@@@AB@@@BABE@@@A@@@@@AA@@@@@@AA@@@@@@AB@@A@@B@@AB@@A@@@A@@B@@@@@@A@@@@AA@@@@@A@@@A@@@ABA@@@C@A@ABAAAAA@A@A@A@AB@@AAC@@AC@@@CA@@@@@D@@@@B@@@@BBB@@B@@BB@@@@B@B@@@@@B@@@BA@@B@@@BBDA@BB@@@BB@@@DDD@BBB@@A@@@@BA@@@B@@@@BB@@@BBBA@@B@@@@@BB@AB@@@@A@@BAB@@AB@@AB@@@B@B@@@B@@@B@DB@@@@@A@@@AA@@A@@@@AAAA@@BAA@@@@@A@@@@A@@@@@@B@B@@B@@BB@@B@@BBB@@@B@@DB@BBB@@@B@@B@B@B@@B@@B@BB@@@B@@B@@@@ADA@@A@@AB@@@A@@@@B@@@@@@@@@@@A@@@@@@@AB@@@@@B@@@@@@A@@B@@A@A@A@A@@DBB@@@@@AB@@@@@B@@B@@@@@@A@@BBB@B@BAB@@@D@B@@@@B@@@@D@@@BA@@B@@BB@B@@A@@B@@@@A@@AAAA@@@ABA@A@CB@AAB@@A@AB@@AHC@@@AAC@@@@@@@A@ABA@@AA@@A@BA@A@@@A@@BA@@@AA@@@@AB@@@@AAA@@B@@@AA@@@@BA@@@A@A@@@@@A@A@@B@@A@@@@@@B@AC@@@A@AAAA@@A@A@@@@@@@@@@@@B@@A@A@@A@@@A@AAA@A@@AA@@AAA@@A@@@EA@B@@@@AA@@@@A@BAAABAA@AA@@@AAA@@A@@A@@@A@@AA@@BA@@BA@@@A@@@@BB@@@A@@B@BA@A@@B@@@@A@@@A@@BA@@B@@AB@@@B@@@@B@@@@@@@@B@@@B@B@@@BA@@@@D@BB@@AC@A@A@@AA@@@@@AB@@AA@@@BA@AB@@@@C@@@@@@@A@@@@@A@@@A@ABA@@@A@@@@@@AAB@@@B@@@@@@@@ABAA@@A@@@A@@B@B@@@BA@@A@@CAA@@@@B@@@B@B@@@B@BAA@@A@@@@@AC@@@B@A@@A@@@@@@B@@@@@BA@@@@@A@@CA@@@@AB@@A@@@@@C@A@@A@@@ABC@@AC@C@@B@@@B@@@@BBBB@BB@@@@@A@AA@@ABA@A@ABAA@@ABA@A@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BA@AA@@@B@B@@AB@@@B@@@@@BAAA@@@@AA@A@@@@@@A@@AA@@@AA@@B@@A@AB@@@@@@B@@@B@@@@@@@@B@@BB@@@@@BA@@@@@@@AB@@@@@@@BA@@@@@@@@AB@@@B@@@BB@@@@@@ABA@@@A@@@@A@@A@@@@@A@A@A@A@@@A@@C@@A@@ABA@@B@@@@@@B@BBB@@B@@@@AAA@A@A@@@A@@@@C@AAA@@BA@@KC@AA@@@@@@@@@@@@B@@A@@A@@@@@A@@AA@@C@@@A@@B@@A@@@@A@@@@A@@B@AA@A@A@@@A@@@@@@@@A@@@@@A@@@@@@@@@B@B@@A@@BA@A@@A@A@@@@@@@BAAB@@@@@@AC@@@ABB@ABB@@@@@@@BB@@A@A@A@@AC@A@@AA@@@@@@A@BA@A@@@AB@@AAA@@BAAAB@@@B@@A@@@@@A@@@A@@BA@@B@@@BA@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@A@@@@BA@@@AA@AA@@@@@@A@@A@AA@@A@@@CB@@A@A@A@@BABA@A@@@@BB@@BB@@@@BA@@@@A@@AB@@@B@B@@@B@@@@A@@@@@A@@@@@A@AA@@@@A@@@A@@@BB@@@@B@@BBB@@@@@BA@@B@@A@A@@@A@A@A@@@@@@B@@@@AA@@@E@@BC@A@@@A@@AA@@A@@AABA@@@@@ABA@@@@@@@@B@@@@AB@@@@@@A@@@@@AA@@@AB@@@BAB@D@@@@@@AAB@@@A@@@@@A@@@@@@AAA@@@A@@@AB@@@@A@AAC@A@A@AA@@DA@@@@@AAB@@A@AB@@@A@@A@AA@@AA@@AA@@@AA@@@A@@B@@@@@@B@@@AB@@@@@@@@@B@@@@@@@B@@@@@@@@A@@@@@B@@@AAB@@@A@@@A@@@@@@@BA@@@@@@@@@@@A@A@@A@@@@@A@@B@@@BA@@@A@@@AAAA@@@@@@@D@@@B@@@@A@@@AA@@A@@@AA@@@@@@A@A@@BA@AAAAA@@@@@A@@B@@@B@@@@@BBBBB@@DB@@@BA@@@ABA@@@AB@@@@A@@AA@@A@@A@@@AB@@AA@@A@A@A@A@@BB@@@A@@@ADA@@@B@C@A@AAAB@@A@@@AAA@A@@A@@A@@A@A@@CB@@A@A@@@@@A@@@AA@@ABA@A@A@A@A@@@@@ABCAA@@BAA@@A@A@A@@@@A@@@@A@@@@@@@@@AB@@@@AB@A@@AA@BAAA@A@A@A@A@@A@@@@AA@@@A@@A@@@AA@@@AA@AAAA@@BABA@A@@@C@@@A@A@@BA@@BAB@BAB@@@B@BA@@A@A@@@@A@@A@A@@@@BA@@A@@AC@@BA@@AAA@@@@A@@@AB@@A@@@C@@BA@A@A@@@@@A@A@@AA@@@AC@@@B@BA@@@AA@@@AAA@@@@@B@@A@@@@B@@@@@AA@@@@AABAAABA@@@AAC@A@A@@B@BAB@@AB@@AA@AA@A@@@AA@@@ADCBA@ABA@CDA@A@A@@@AB@@A@CB@@A@@@@@ABA@@@A@A@@@A@@@@@A@@B@AA@@BA@@@A@@A@@@@@A@A@@@@@@@@A@@@@@@BA@@@@AA@A@CAAAA@@@@@@B@B@BAB@@@@DBBBB@A@AB@@A@@@A@AB@@A@CBA@@AA@@@A@@AC@A@@@A@@@A@@@A@A@@B@@@@A@@@A@@@@BA@@@ABA@@@ABC@@@@BA@@@@@C@@@@@A@A@@@@@A@@@@@BA@@@CA@@A@@AA@@@@@@@@@@@BA@@@@@@@A@@AA@@@BC@@@@A@@@AB@@@@A@@A@@@AA@AA@BA@@B@@@@@B@@A@@A@@@@@ABA@A@@@@@AA@@A@@AA@@A@@BA@A@@@C@@@@B@@@@A@@@@BA@@B@@@@@@@@AA@B@@A@@@A@A@@@@@@@A@@@A@A@@B@@A@A@@@@@@@BB@@@@@@@@@@@B@@@@A@@@@@A@@A@AA@A@@@@@A@@A@@A@@@AA@AA@@@@@A@A@AA@@@BA@A@A@A@@BA@A@"],"encodeOffsets":[[122315,28942]]}}],"UTF8Encoding":true});}));