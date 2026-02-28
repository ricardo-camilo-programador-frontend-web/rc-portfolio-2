
57
FCP
+5
LCP
+15
TBT
+3
CLS
+25
SI
+10
Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Expand view
First Contentful Paint
2.9 s
Largest Contentful Paint
3.6 s
Total Blocking Time
1,890 ms
Cumulative Layout Shift
0
Speed Index
2.9 s
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT
Insights
Network dependency tree
Warnings: More than 4 `preconnect` connections were found. These should be used sparingly and only to the most important origins.
Use efficient cache lifetimes Est savings of 1 KiB
A long cache lifetime can speed up repeat visits to your page. Learn more about caching.FCPLCPUnscored
Request
Cache TTL
Transfer Size
counter.dev
1 KiB
/script.js(cdn.counter.dev)
30m
1 KiB
Render blocking requests
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
localhost 1st party
6.0 KiB	160 ms
/assets/main-DxeS04PW.css(localhost)
6.0 KiB
160 ms
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
360
DOM depth
path
13
Most children
div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-8
13
LCP breakdown
Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
10 ms
Element render delay
790 ms
h1.text-6xl.md:text-[11rem].font-serif.leading-[0.8].tracking-tighter.mb-10
3rd parties
3rd party code can significantly impact load performance. Reduce and defer loading of 3rd party code to prioritize your page's content.Unscored
3rd party
Transfer size
Main thread time
jdcfmebflppkljibgpdlboifpcaalolg
0 KiB	660 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/capture-coupons/loader.js
0 KiB
326 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/cart-tracking/loader.js
0 KiB
186 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
0 KiB
91 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/customer/loader.js
0 KiB
57 ms
Google Tag Manager tag-manager 
128 KiB	64 ms
/gtag/js?id=AW-CONVERSION_ID(www.googletagmanager.com)
128 KiB
64 ms
nhdogjmejiglipccpnnnanhbledajbpd
0 KiB	24 ms
chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/dist/prepare.js
0 KiB
19 ms
chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/dist/devtools-overlay.js
0 KiB
4 ms
chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/dist/detector.js
0 KiB
1 ms
gppongmhjkpfnbhagpmjfkannfbllamg
0 KiB	21 ms
chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/js.js
0 KiB
10 ms
chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/content.js
0 KiB
9 ms
chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/dom.js
0 KiB
3 ms
pekhihjiehdafocefoimckjpbkegknoh
0 KiB	11 ms
chrome-extension://pekhihjiehdafocefoimckjpbkegknoh/sitePalette.js
0 KiB
7 ms
chrome-extension://pekhihjiehdafocefoimckjpbkegknoh/getPalette.js
0 KiB
2 ms
chrome-extension://pekhihjiehdafocefoimckjpbkegknoh/scroller.js
0 KiB
1 ms
counter.dev
2 KiB	4 ms
/script.js(cdn.counter.dev)
1 KiB
4 ms
/trackpage(t.counter.dev)
1 KiB
0 ms
Google/Doubleclick Ads ad 
57 KiB	1 ms
…viewthrou…/CONVERSION_ID?random=…(googleads.g.doubleclick.net)
2 KiB
1 ms
…js/adsbygoogle.js(pagead2.googlesyndication.com)
55 KiB
0 ms
depilomfokpbdjhmagangenafijekkjc
0 KiB	1 ms
chrome-extension://depilomfokpbdjhmagangenafijekkjc/themizer.js
0 KiB
1 ms
Google Fonts cdn 
86 KiB	0 ms
…v20/UcC73FwrK….woff2(fonts.gstatic.com)
47 KiB
0 ms
…v21/co3bmX5sl….woff2(fonts.gstatic.com)
37 KiB
0 ms
/css2?family=…(fonts.googleapis.com)
1 KiB
0 ms
/css2?family=Inter:wght@400;600&display=swap(fonts.googleapis.com)
1 KiB
0 ms
GitHub utility
0 KiB	0 ms
…main/hero-photo.jpg?format=webp(raw.githubusercontent.com)
0 KiB
0 ms
Other Google APIs/SDKs utility 
0 KiB	0 ms
…1p-user-list/CONVERSION_ID?random=…(www.google.com)
0 KiB
0 ms
…1p-user-list/CONVERSION_ID?random=…(www.google.com.br)
0 KiB
0 ms
/ccm/collect?frm=…(www.google.com)
0 KiB
0 ms
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Reduce JavaScript execution time 3.9 s
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to reduce Javascript execution time.TBTUnscored
URL
Total CPU Time
Script Evaluation
Script Parse
localhost 1st party
4,558 ms	727 ms	59 ms
http://localhost:3002
3,755 ms
117 ms
57 ms
/assets/main-HA49lVAb.js(localhost)
803 ms
610 ms
2 ms
Unattributable
3,622 ms	764 ms	1,904 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/capture-coupons/loader.js
1,337 ms
309 ms
1,003 ms
Unattributable
923 ms
17 ms
0 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/cart-tracking/loader.js
760 ms
256 ms
488 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
372 ms
110 ms
256 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/customer/loader.js
230 ms
73 ms
157 ms
Wappalyzer - Technology profiler Chrome Extension 
288 ms	58 ms	5 ms
chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/content.js
288 ms
58 ms
5 ms
Vue.js devtools Chrome Extension 
238 ms	232 ms	1 ms
chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/dist/devtools-overlay.js
238 ms
232 ms
1 ms
Google Tag Manager tag-manager 
181 ms	135 ms	43 ms
/gtag/js?id=AW-CONVERSION_ID(www.googletagmanager.com)
181 ms
135 ms
43 ms
Minimize main-thread work 9.0 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBTUnscored
Category
Time Spent
Other
2,853 ms
Script Parsing & Compilation
2,026 ms
Script Evaluation
2,017 ms
Style & Layout
1,652 ms
Rendering
412 ms
Parse HTML & CSS
65 ms
Garbage Collection
13 ms
Reduce unused JavaScript Est savings of 2,023 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCPUnscored
URL
Transfer Size
Est Savings
Unattributable
2,306.7 KiB	1,954.1 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/capture-coupons/loader.js
649.5 KiB
649.1 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/capture-coupons/loader.js
649.5 KiB
492.7 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/cart-tracking/loader.js
643.8 KiB
487.7 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/customer/loader.js
146.5 KiB
124.1 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
108.7 KiB
100.4 KiB
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
108.7 KiB
100.1 KiB
Google Tag Manager tag-manager 
117.2 KiB	44.6 KiB
/gtag/js?id=AW-CONVERSION_ID(www.googletagmanager.com)
117.2 KiB
44.6 KiB
localhost 1st party
78.6 KiB	24.3 KiB
/assets/main-HA49lVAb.js(localhost)
78.6 KiB
24.3 KiB
Avoid long main-thread tasks 18 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
Unattributable
2,192 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/capture-coupons/loader.js
2,682 ms
844 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/cart-tracking/loader.js
3,801 ms
760 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
1,126 ms
213 ms
chrome-extension://jdcfmebflppkljibgpdlboifpcaalolg/content-scripts/data-scraping/loader.js
2,524 ms
158 ms
Unattributable
605 ms
144 ms
Unattributable
1,053 ms
73 ms
localhost 1st party
1,747 ms
http://localhost:3002
1,611 ms
788 ms
http://localhost:3002
1,339 ms
241 ms
/assets/main-HA49lVAb.js(localhost)
3,605 ms
171 ms
http://localhost:3002
831 ms
163 ms
http://localhost:3002
2,440 ms
84 ms
http://localhost:3002
749 ms
82 ms
/assets/main-HA49lVAb.js(localhost)
5,983 ms
80 ms
/assets/main-HA49lVAb.js(localhost)
3,526 ms
79 ms
http://localhost:3002
994 ms
59 ms
Google Tag Manager tag-manager 
366 ms
/gtag/js?id=AW-CONVERSION_ID(www.googletagmanager.com)
5,617 ms
366 ms
Wappalyzer - Technology profiler Chrome Extension 
202 ms
chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/content.js
4,568 ms
202 ms
Vue.js devtools Chrome Extension 
197 ms
chrome-extension://nhdogjmejiglipccpnnnanhbledajbpd/dist/devtools-overlay.js
4,770 ms
197 ms
User Timing marks and measures 4 user timings
Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. Learn more about User Timing marks.Unscored
Name
Type
Start Time
Duration
Wappalyzer: getDom
Measure
2,732.10 ms
1.70 ms
Wappalyzer: getDom
Measure
2,732.10 ms
4.50 ms
Wappalyzer: getDom
Measure
2,732.10 ms
5.80 ms
Wappalyzer: getDom
Measure
3,008.50 ms
54.30 ms
More information about the performance of your application. These numbers don't directly affect the Performance score.