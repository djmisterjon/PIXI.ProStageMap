/*!
 * VERSION: 0.1.7
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * GSDevTools is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("GSDevTools", ["TweenLite", "core.Animation", "core.SimpleTimeline", "TimelineLite", "utils.Draggable", "plugins.CSSPlugin"], function(a, b, c, d, e) {
            var f, g, h, i, j, k = document,
                l = k.documentElement,
                m = "http://www.w3.org/2000/svg",
                n = "http://www.w3.org/1999/xhtml",
                o = 0,
                p = {},
                q = function(a, b, c) {
                    var d = k.createElementNS ? k.createElementNS("svg" === a ? m : n, a) : k.createElement(a);
                    return b && ("string" == typeof b && (b = k.querySelector(b)), b.appendChild(d)), "svg" === a && (d.setAttribute("xmlns", m), d.setAttribute("xmlns:xlink", n)), c && (d.style.cssText = c), d
                },
                r = function() {
                    k.selection ? k.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
                },
                s = b._rootTimeline,
                t = function(b, c) {
                    for (var d = [], e = 0, f = b._first; f;) f instanceof a ? f.vars.id && (d[e++] = f) : (c && f.vars.id && (d[e++] = f), d = d.concat(t(f, c)), e = d.length), f = f._next;
                    return d
                },
                u = function(a) {
                    var b = 0,
                        c = a._first;
                    if (!c) return a.duration();
                    for (; c;) b = Math.max(b, c.totalDuration() > 999 ? c.endTime(!1) : c._startTime + c._totalDuration / c._timeScale), c = c._next;
                    return b
                },
                v = function(a) {
                    if (!a) return null;
                    if (a instanceof b) return a;
                    for (var c = t(s, !0), d = c.length; --d > -1;)
                        if (c[d].vars.id === a) return c[d]
                },
                w = function(a, b, c, d) {
                    var e, f, g;
                    return "string" == typeof a && ("=" === a.charAt(1) ? (e = parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)), 0 > e && 0 === d && (d = 100), a = d / 100 * b.duration() + e) : isNaN(a) && b.getLabelTime && -1 !== b.getLabelTime(a) ? a = b.getLabelTime(a) : b === D && (f = a.indexOf("="), f > 0 ? (e = parseInt(a.charAt(f - 1) + "1", 10) * parseFloat(a.substr(f + 1)), a = a.substr(0, f - 1)) : e = 0, g = v(a), g && (a = x(g, c / 100 * g.duration()) + e))), a = isNaN(a) ? c : parseFloat(a), Math.min(100, Math.max(0, a / b.duration() * 100))
                },
                x = function(a, b) {
                    var c = a;
                    if (b = b || 0, c.timeline)
                        for (; c.timeline.timeline;) b = b / c._timeScale + c._startTime, c = c.timeline;
                    return b
                },
                y = function(b, c, d) {
                    f || (q("style", l).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", f = !0), "string" == typeof b && (b = document.querySelector(b));
                    var e = q("div", b || l.getElementsByTagName("body")[0] || l);
                    return e.setAttribute("class", "gs-dev-tools" + (c ? " minimal" : "")), e.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/Utilities/GSDevTools?source=GSDevTools"target=_blank title=Docs><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', b && (e.style.position = "absolute", e.style.top = c ? "calc(100% - 42px)" : "calc(100% - 51px)"), d && ("string" == typeof d ? e.style.cssText = d : "object" == typeof d && (d.data = "root", a.set(e, d).kill()), e.style.top && (e.style.bottom = "auto"), e.style.width && a.set(e, {
                        xPercent: -50,
                        left: "50%",
                        right: "auto",
                        data: "root"
                    }).kill()), !c && e.offsetWidth < 600 && (e.setAttribute("class", "gs-dev-tools minimal"), b && (e.style.top = "calc(100% - 42px)")), e
                },
                z = function(a, b, c, d) {
                    var e, f;
                    return ("mousedown" === b || "mouseup" === b) && (a.style.cursor = "pointer"), "mousedown" === b && (f = void 0 !== a.onpointerdown ? "pointerdown" : void 0 !== a.ontouchstart ? "touchstart" : null) ? (e = function(b) {
                        "select" !== b.target.nodeName.toLowerCase() && b.type === f ? (b.stopPropagation(), g && (b.preventDefault(), c.call(a, b))) : b.type !== f && c.call(a, b), g = !0
                    }, a.addEventListener(f, e, d), void a.addEventListener(b, e, d)) : void a.addEventListener(b, c, d)
                },
                A = function(a, b, c) {
                    a.removeEventListener(b, c), b = "mousedown" !== b ? null : void 0 !== a.onpointerdown ? "pointerdown" : void 0 !== a.ontouchstart ? "touchstart" : null, b && a.removeEventListener(b, c)
                },
                B = function(a, b, c, d) {
                    var e, f = a.options,
                        g = f.length;
                    for (b += ""; --g > -1;)
                        if (f[g].innerHTML === b || f[g].value === b) return a.selectedIndex = g, c.innerHTML = f[g].innerHTML, f[g];
                    d && (e = q("option", a), e.setAttribute("value", b), e.innerHTML = c.innerHTML = "string" == typeof d ? d : b, a.selectedIndex = f.length - 1)
                },
                C = function(a, b, c) {
                    var d = a.options,
                        e = Math.min(d.length - 1, Math.max(0, a.selectedIndex + b));
                    return a.selectedIndex = e, c && (c.innerHTML = d[e].innerHTML), d[e].value
                },
                D = new d({
                    data: "root",
                    id: "Global Timeline",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0
                }),
                E = new d({
                    data: "root",
                    id: "Global Temp",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0
                }),
                F = a.to(D, 1, {
                    time: 1,
                    ease: Linear.easeNone,
                    data: "root",
                    id: "_rootTween",
                    paused: !0,
                    immediateRender: !1
                }),
                G = function() {
                    var a, b, d = E._first;
                    if (d) {
                        if (h && h.animation() === D) {
                            for (a = D._duration; d;) b = d._next, "function" == typeof d.target && d.target === d.vars.onComplete && !d._duration || d.target && d.target._gsIgnore ? c.prototype.add.call(s, d, d._startTime - d._delay) : D.add(d, d._startTime - d._delay), d = b;
                            return a !== D.duration()
                        }
                        for (; d;) b = d._next, d._gc || d._totalTime === d._totalDuration ? d.kill() : c.prototype.add.call(s, d, d._startTime - d._delay), d = b
                    }
                },
                H = function() {
                    h && (h.update(), i = !1), a.ticker.removeEventListener("tick", H)
                },
                I = function(a) {
                    var b = new d({
                        data: "root",
                        onComplete: function() {
                            b.kill()
                        }
                    });
                    return b.to(a.querySelector(".play-1"), .5, {
                        attr: {
                            d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                        },
                        ease: Power3.easeInOut,
                        rotation: 360,
                        transformOrigin: "50% 50%"
                    }).to(a.querySelector(".play-2"), .5, {
                        attr: {
                            d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                        },
                        ease: Power3.easeInOut,
                        rotation: 360,
                        transformOrigin: "50% 50%"
                    }, .05), b
                },
                J = function(a) {
                    var b = new d({
                        data: "root",
                        paused: !0,
                        onComplete: function() {
                            b.kill()
                        }
                    });
                    return b.to(a, .5, {
                        rotation: 360,
                        ease: Power3.easeInOut,
                        transformOrigin: "50% 50%"
                    }).to(a.querySelectorAll(".loop-path"), .5, {
                        fill: "#91e600",
                        ease: Linear.easeNone
                    }, 0), b
                },
                K = function(c) {
                    this.vars = c = c || {}, c.id = c.id || ("string" == typeof c.animation ? c.animation : o++), p[c.id + ""] = this;
                    var d, f, g, i, k, m, n, s, x, E, H, K, L, N = this,
                        P = y(c.container, c.minimal, c.css),
                        Q = function(a) {
                            return P.querySelector(a)
                        },
                        R = function(a, b) {
                            return c.persist !== !1 && "undefined" != typeof sessionStorage && sessionStorage.setItem("gs-dev-" + a + c.id, b), b
                        },
                        S = function(a) {
                            var b;
                            return c.persist !== !1 && "undefined" != typeof sessionStorage ? (b = sessionStorage.getItem("gs-dev-" + a + c.id), "animation" === a ? b : "loop" === a ? "true" === b : parseFloat(b)) : void 0
                        },
                        T = Q(".playhead"),
                        U = Q(".timeline-track"),
                        V = Q(".progress-bar"),
                        W = Q(".time"),
                        X = Q(".duration"),
                        Y = 0,
                        Z = function(a, b, c) {
                            return function(e) {
                                var h, j = U.getBoundingClientRect(),
                                    l = a.getBoundingClientRect(),
                                    m = l.width * b,
                                    n = a._gsTransform.x,
                                    o = j.left - l.left - m + n,
                                    p = j.right - l.right + (l.width - m) + n,
                                    q = o;
                                c && (a !== _ && (h = _.getBoundingClientRect(), h.left && (o += h.left + h.width - j.left)), a !== aa && (h = aa.getBoundingClientRect(), h.left && (p -= j.left + j.width - h.left))), k = ka, this.applyBounds({
                                    minX: o,
                                    maxX: p
                                }), d = s.duration() / j.width, f = -q * d, i ? s.pause() : s.pause(f + d * this.x), this.target === T && (this.activated && (this.allowEventDefault = !1), this.activated = !0), g = !0
                            }
                        },
                        $ = e.create(T, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: Z(T, .5, !0),
                            onDrag: function() {
                                var a = f + d * this.x;
                                0 > a ? a = 0 : a > s._duration && (a = s._duration), i || s.time(a), V.style.width = Math.min(da - ca, Math.max(0, a / s._duration * 100 - ca)) + "%", W.innerHTML = a.toFixed(2)
                            },
                            onRelease: function(a) {
                                ka || s.resume()
                            }
                        })[0],
                        _ = Q(".in-point"),
                        aa = Q(".out-point"),
                        ba = function() {
                            ca = 0, da = 100, _.style.left = "0%", aa.style.left = "100%", R("in", ca), R("out", da), ga(!0)
                        },
                        ca = 0,
                        da = 100,
                        ea = e.create(_, {
                            type: "x",
                            cursor: "ew-resize",
                            zIndexBoost: !1,
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: Z(_, 1, !0),
                            onDoubleClick: ba,
                            onDrag: function() {
                                ca = (f + d * this.x) / s.duration() * 100, s.progress(ca / 100), ga(!0)
                            },
                            onRelease: function() {
                                0 > ca && (ca = 0), r(), _.style.left = ca + "%", R("in", ca), a.set(_, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), ka || s.resume()
                            }
                        })[0],
                        fa = e.create(aa, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            zIndexBoost: !1,
                            onPress: Z(aa, 0, !0),
                            onDoubleClick: ba,
                            onDrag: function() {
                                da = (f + d * this.x) / s.duration() * 100, s.progress(da / 100), ga(!0)
                            },
                            onRelease: function() {
                                da > 100 && (da = 100), r(), aa.style.left = da + "%", R("out", da), a.set(aa, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), k || (la(), s.resume())
                            }
                        })[0],
                        ga = function(a) {
                            if (!$.isPressed || a) {
                                var b = 100 * s.progress() || 0;
                                b > 100 && (b = 100), b >= da ? !m || s.paused() || $.isDragging ? (b !== da && (b = da, s.progress(b / 100)), ka || ma()) : (b = ca, s.target === n && s.target.seek(E + (H - E) * ca / 100), s.progress(b / 100, !0).resume()) : ca > b && (b = ca, s.progress(b / 100, !0)), b !== Y || a ? (V.style.left = ca + "%", V.style.width = Math.max(0, b - ca) + "%", T.style.left = b + "%", W.innerHTML = s._time.toFixed(2), X.innerHTML = s._duration.toFixed(2), g && (T.style.transform = "translate(-50%,0)", T._gsTransform.x = 0, T._gsTransform.xPercent = -50, g = !1), Y = b) : s._paused !== ka && na()
                            }
                        },
                        ha = function(a) {
                            if (!$.isPressed) {
                                var b = a.target.getBoundingClientRect(),
                                    c = (a.changedTouches ? a.changedTouches[0] : a).clientX,
                                    d = (c - b.left) / b.width * 100;
                                if (ca > d) return ca = d = Math.max(0, d), _.style.left = ca + "%", void ea.startDrag(a);
                                if (d > da) return da = d = Math.min(100, d), aa.style.left = da + "%", void fa.startDrag(a);
                                s.progress(d / 100).pause(), ga(!0), $.startDrag(a)
                            }
                        },
                        ia = Q(".play-pause"),
                        ja = I(ia),
                        ka = !1,
                        la = function() {
                            s.progress() >= da / 100 && (s.target === n && s.target.seek(E + (H - E) * ca / 100), s.progress(ca / 100, !0)), ja.play(), s.play(), ka && N.update(), ka = !1
                        },
                        ma = function() {
                            ja.reverse(), s && s.pause(), ka = !0
                        },
                        na = function() {
                            ka ? la() : ma()
                        },
                        oa = function(a) {
                            $.isPressed || (s.target === n && s.target.seek(E + (H - E) * ca / 100), s.progress(ca / 100, !0), ka || s.resume())
                        },
                        pa = Q(".loop"),
                        qa = J(pa),
                        ra = function(a) {
                            m = a, R("loop", m), m ? (qa.play(), s.progress() >= da / 100 && (s.target === n && s.target.seek(E + (H - E) * ca / 100), s.progress(ca / 100, !0).resume())) : qa.reverse()
                        },
                        sa = function() {
                            ra(!m)
                        },
                        ta = Q(".animation-list"),
                        ua = Q(".animation-label"),
                        va = function() {
                            var a, b, d = t(x && c.globalSync === !1 ? x : D, !0),
                                e = ta.children,
                                f = 0;
                            for (x && c.globalSync === !1 ? d.unshift(x) : c.hideGlobalTimeline || d.unshift(D), b = 0; b < d.length; b++) a = e[b] || q("option", ta),
                                a.animation = d[b], f = b && d[b].vars.id === d[b - 1].vars.id ? f + 1 : 0, a.setAttribute("value", a.innerHTML = d[b].vars.id + (f ? " [" + f + "]" : d[b + 1] && d[b + 1].vars.id === d[b].vars.id ? " [0]" : ""));
                            for (; b < e.length; b++) ta.removeChild(e[b])
                        },
                        wa = function(d) {
                            var e, f, g = 1;
                            if (!arguments.length) return n;
                            if ("string" == typeof d && (d = v(d)), d instanceof b || console.log("GSDevTools error: invalid animation."), d !== n) {
                                if (n && (n._inProgress = ca, n._outProgress = da), n = d, s && (g = s.timeScale(), s.target === x && (x.resume(), s.kill())), ca = n._inProgress || 0, da = n._outProgress || 100, _.style.left = ca + "%", aa.style.left = da + "%", K && (R("animation", n.vars.id), R("in", ca), R("out", da)), E = 0, f = Math.min(1e3, c.maxDuration || 1e3, u(n)), n === D || c.globalSync !== !1) {
                                    if (G(), s = F, h && h !== N && console.log("Error: GSDevTools can only have one instance that's globally synchronized."), h = N, n !== D)
                                        for (e = n, H = e.totalDuration(), H > 99999999 && (H = e.duration()); e.timeline.timeline;) E = E / e._timeScale + e._startTime, H = H / e._timeScale + e._startTime, e = e.timeline;
                                    else H = D.duration();
                                    H - E > f && (H = E + f), D.pause(E), F.vars.time = H, F.invalidate(), F.duration(H - E).timeScale(g), ka ? F.progress(1).pause(0) : a.delayedCall(.01, function() {
                                        F.resume().progress(ca / 100), ka && la()
                                    })
                                } else {
                                    if (h === N && (h = null), n !== x && x) {
                                        for (e = n, H = e.totalDuration(), H > 99999999 && (H = e.duration()); e.timeline.timeline && e !== x;) E = E / e._timeScale + e._startTime, H = H / e._timeScale + e._startTime, e = e.timeline;
                                        H - E > f && (H = E + f), x.pause(E), s = a.to(x, H - E, {
                                            time: H,
                                            ease: Linear.easeNone,
                                            data: "root"
                                        }), s.timeScale(g)
                                    } else s = n;
                                    F.pause(), D.resume(), s.seek(0)
                                }
                                X.innerHTML = s.duration().toFixed(2), B(ta, n.vars.id, ua)
                            }
                        },
                        xa = function() {
                            var a, b, c;
                            n === D && (a = D._time, D.progress(1, !0).time(a, !0), a = (F._timeline._time - F._startTime) * F._timeScale, c = Math.min(1e3, D.duration()), 1e3 === c && (c = Math.min(1e3, u(D))), b = F.duration() / c, 1 !== b && c && (ca *= b, 100 > da && (da *= b), F.seek(0), F.vars.time = c, F.invalidate(), F.duration(c), F.time(a), X.innerHTML = c.toFixed(2), ga(!0)))
                        },
                        ya = function(a) {
                            wa(ta.options[ta.selectedIndex].animation), a.target && a.target.blur && a.target.blur(), ka && la()
                        },
                        za = Q(".time-scale select"),
                        Aa = Q(".time-scale-label"),
                        Ba = function(b) {
                            var c = parseFloat(za.options[za.selectedIndex].value) || 1;
                            s.timeScale(c), R("timeScale", c), ka || (s.progress() >= da / 100 ? (s.target === n && s.target.seek(E + (H - E) * ca / 100), s.progress(ca / 100, !0).pause()) : s.pause(), a.delayedCall(.01, function() {
                                s.resume()
                            })), Aa.innerHTML = c + "x", za.blur && za.blur()
                        },
                        Ca = a.to([Q(".gs-bottom"), Q(".gs-top")], .3, {
                            autoAlpha: 0,
                            y: 50,
                            ease: Power2.easeIn,
                            data: "root",
                            paused: !0
                        }),
                        Da = !1,
                        Ea = function(a) {
                            e.hitTest(a, P) || $.isDragging || ea.isDragging || fa.isDragging || Ia.restart(!0)
                        },
                        Fa = function() {
                            Da || (Ca.play(), Ia.pause(), Da = !0)
                        },
                        Ga = function() {
                            Ia.pause(), Da && (Ca.reverse(), Da = !1)
                        },
                        Ha = function() {
                            Da ? Ga() : Fa()
                        },
                        Ia = a.delayedCall(1.3, Fa).pause(),
                        Ja = function(a) {
                            M && !O && (O = D._startTime), K = !a, x = v(c.animation), x && !x.vars.id && (x.vars.id = "[no id]"), va();
                            var b = v(S("animation"));
                            b && (b._inProgress = S("in") || 0, b._outProgress = S("out") || 100), c.paused && ma(), n = null, wa(x || b || D);
                            var d = c.timeScale || S("timeScale"),
                                e = b === n;
                            d && (B(za, d, Aa, d + "x"), F.timeScale(d)), ca = ("inTime" in c ? w(c.inTime, n, 0, 0) : e ? b._inProgress : 0) || 0, 100 === ca && !c.animation && b && (wa(D), ca = w(c.inTime, n, 0, 0) || 0), ca && (_.style.left = ca + "%", _.style.display = aa.style.display = "block"), da = ("outTime" in c ? w(c.outTime, n, 100, ca) : e ? b._outProgress : 0) || 100, ca > da && (da = 100), 100 !== da && (aa.style.left = da + "%", _.style.display = aa.style.display = "block"), m = "loop" in c ? c.loop : S("loop"), m && ra(!0), c.paused && s.progress(ca / 100, !0).pause(), M && n === D && O && c.globalSync !== !1 && !ka && s.time(-O, !0), ga(!0)
                        };
                    z(ta, "change", ya), z(ta, "mousedown", va), z(ia, "mousedown", na), z(Q(".seek-bar"), "mousedown", ha), z(Q(".rewind"), "mousedown", oa), z(pa, "mousedown", sa), z(za, "change", Ba), "auto" === c.visibility ? (z(P, "mouseout", Ea), z(P, "mouseover", Ga)) : "hidden" === c.visibility && (Da = !0, Ca.progress(1)), c.keyboard !== !1 && (j && c.keyboard ? console.log("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (j = N, L = function(a) {
                        var b, c = a.keyCode ? a.keyCode : a.which;
                        32 === c ? na() : 38 === c ? (b = parseFloat(C(za, -1, Aa)), s.timeScale(b), R("timeScale", b)) : 40 === c ? (b = parseFloat(C(za, 1, Aa)), s.timeScale(b), R("timeScale", b)) : 37 === c ? oa(a) : 39 === c ? s.progress(da / 100) : 76 === c ? sa() : 72 === c ? Ha() : 73 === c ? (ca = 100 * s.progress(), R("in", ca), _.style.left = ca + "%", ga(!0)) : 79 === c && (da = 100 * s.progress(), R("out", da), aa.style.left = da + "%", ga(!0))
                    }, z(l, "keydown", L))), a.set(T, {
                        xPercent: -50,
                        x: 0,
                        data: "root"
                    }), a.set(_, {
                        xPercent: -100,
                        x: 0,
                        data: "root"
                    }), _._gsIgnore = aa._gsIgnore = T._gsIgnore = ia._gsIgnore = pa._gsIgnore = !0, a.killTweensOf([_, aa, T]), Ja(M), M && a.delayedCall(1e-4, Ja, [!1], this), a.ticker.addEventListener("tick", ga), this.update = function(a) {
                        h === N && ((!F._paused || a) && G(), xa())
                    }, this.kill = function() {
                        A(ta, "change", ya), A(ta, "mousedown", va), A(ia, "mousedown", na), A(Q(".seek-bar"), "mousedown", ha), A(Q(".rewind"), "mousedown", oa), A(pa, "mousedown", sa), A(za, "change", Ba), $.disable(), ea.disable(), fa.disable(), a.ticker.removeEventListener("tick", ga), A(P, "mouseout", Ea), A(P, "mouseover", Ga), A(l, "keydown", L), P.parentNode.removeChild(P), h === N && (h = null), delete p[c.id + ""]
                    }, this.minimal = function(a) {
                        var b, d = P.classList.contains("minimal");
                        return arguments.length && d !== a ? (a ? P.classList.add("minimal") : P.classList.remove("minimal"), c.container && (P.style.top = a ? "calc(100% - 42px)" : "calc(100% - 51px)"), void($.isPressed && (i = !0, $.endDrag($.pointerEvent), i = !1, b = 100 * s.progress(), V.style.width = Math.max(0, b - ca) + "%", T.style.left = b + "%", T.style.transform = "translate(-50%,0)", T._gsTransform.x = 0, T._gsTransform.xPercent = -50, $.startDrag($.pointerEvent, !0)))) : d
                    }, this.animation = wa, this.updateList = va
                },
                L = !0,
                M = !0,
                N = a.onOverwrite,
                O = 0;
            return K.version = "0.1.7", K.logOverwrites = !1, K.globalRecordingTime = 2, K.getById = function(a) {
                return a ? p[a] : h
            }, s._startTime += s._time, D._startTime = E._startTime = s._time = s._totalTime = 0, a.delayedCall(.01, function() {
                h ? h.update() : G()
            }), a.delayedCall(2, function() {
                var b, d, e;
                if (!h)
                    for (G(), b = D._first, e = D._startTime; b;) d = b._next, b._totalDuration !== b._totalTime || 1 !== b.ratio ? c.prototype.add.call(s, b, b._startTime - b._delay + e) : b.kill(), b = d;
                K.globalRecordingTime > 2 ? a.delayedCall(K.globalRecordingTime - 2, function() {
                    h && h.update(), L = !1
                }) : L = !1, M = !1
            }), s.add = function(b, d, e, f) {
                var g = b.data;
                if (L && b.vars && "root" !== g && "ignore" !== g && "isStart" !== g && "isFromStart" !== g && "_draggable" !== g && !(M && !b._duration && b instanceof a) && (!b.vars.onComplete || b.vars.onComplete !== b.vars.onReverseComplete)) {
                    var h = D;
                    return F._time && (F._paused ? (h = E, b._recordedTime = D.rawTime()) : (d = (s._time - F._startTime) * F._timeScale, i || (a.ticker.addEventListener("tick", H), i = !0))), h.add(b, d, e, f), b.vars.repeat && (h._dirty = !0), this
                }
                return c.prototype.add.apply(this, arguments)
            }, D._enabled = E._enabled = function(a, b) {
                return c.prototype._enabled.apply(this, arguments)
            }, d.prototype._remove = function(a, b) {
                c.prototype._remove.apply(this, arguments);
                var d = this._last;
                return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, a.onOverwrite = function(a, b, c, d) {
                K.logOverwrites && (d ? console.log("[Overwrite warning] the following properties were overwritten: ", d, "| target:", c, "| overwritten tween: ", a, "| overwriting tween:", b) : console.log("[Overwrite warning] the following tween was overwritten:", a, "by", b)), "function" == typeof N && N(a, b, c, d)
            }, K.create = function(a) {
                return new K(a)
            }, K
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) {
        "use strict";
        var b = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[a]
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), require("../TimelineLite.min.js"), require("../plugins/CSSPlugin.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite", "TimelineLite", "CSSPlugin"], b)
    }("GSDevTools");
/*!
 * VERSION: 0.16.2
 * DATE: 2018-01-31
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = {
                css: {},
                data: "_draggable"
            },
            n = {
                css: {},
                data: "_draggable"
            },
            o = {
                css: {},
                data: "_draggable"
            },
            p = {
                css: {}
            },
            q = _gsScope._gsDefine.globals,
            r = {},
            s = {
                style: {}
            },
            t = _gsScope.document || {
                createElement: function() {
                    return s
                }
            },
            u = t.documentElement || {},
            v = function(a) {
                return t.createElementNS ? t.createElementNS("http://www.w3.org/1999/xhtml", a) : t.createElement(a)
            },
            w = v("div"),
            x = [],
            y = function() {
                return !1
            },
            z = 180 / Math.PI,
            A = 999999999999999,
            B = Date.now || function() {
                return (new Date).getTime()
            },
            C = !(t.addEventListener || !t.all),
            D = t.createElement("div"),
            E = [],
            F = {},
            G = 0,
            H = /^(?:a|input|textarea|button|select)$/i,
            I = 0,
            J = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"),
            K = 0,
            L = {},
            M = {},
            N = function(a) {
                if ("string" == typeof a && (a = b.selector(a)), !a || a.nodeType) return [a];
                var c, d = [],
                    e = a.length;
                for (c = 0; c !== e; d.push(a[c++]));
                return d
            },
            O = function(a, b) {
                var c, d = {};
                if (b)
                    for (c in a) d[c] = a[c] * b;
                else
                    for (c in a) d[c] = a[c];
                return d
            },
            P = function() {
                for (var a = E.length; --a > -1;) E[a]()
            },
            Q = function(a) {
                E.push(a), 1 === E.length && b.ticker.addEventListener("tick", P, this, !1, 1)
            },
            R = function(a) {
                for (var c = E.length; --c > -1;) E[c] === a && E.splice(c, 1);
                b.to(S, 0, {
                    overwrite: "all",
                    delay: 15,
                    onComplete: S,
                    data: "_draggable"
                })
            },
            S = function() {
                E.length || b.ticker.removeEventListener("tick", P)
            },
            T = function(a, b) {
                var c;
                for (c in b) void 0 === a[c] && (a[c] = b[c]);
                return a
            },
            U = function() {
                return null != window.pageYOffset ? window.pageYOffset : null != t.scrollTop ? t.scrollTop : u.scrollTop || t.body.scrollTop || 0
            },
            V = function() {
                return null != window.pageXOffset ? window.pageXOffset : null != t.scrollLeft ? t.scrollLeft : u.scrollLeft || t.body.scrollLeft || 0
            },
            W = function(a, b) {
                Ja(a, "scroll", b), Y(a.parentNode) || W(a.parentNode, b)
            },
            X = function(a, b) {
                Ka(a, "scroll", b), Y(a.parentNode) || X(a.parentNode, b)
            },
            Y = function(a) {
                return !(a && a !== u && a !== t && a !== t.body && a !== window && a.nodeType && a.parentNode)
            },
            Z = function(a, b) {
                var c = "x" === b ? "Width" : "Height",
                    d = "scroll" + c,
                    e = "client" + c,
                    f = t.body;
                return Math.max(0, Y(a) ? Math.max(u[d], f[d]) - (window["inner" + c] || u[e] || f[e]) : a[d] - a[e])
            },
            $ = function(a) {
                var b = Y(a),
                    c = Z(a, "x"),
                    d = Z(a, "y");
                b ? a = M : $(a.parentNode), a._gsMaxScrollX = c, a._gsMaxScrollY = d, a._gsScrollX = a.scrollLeft || 0, a._gsScrollY = a.scrollTop || 0
            },
            _ = function(a, b) {
                return a = a || window.event, r.pageX = a.clientX + t.body.scrollLeft + u.scrollLeft, r.pageY = a.clientY + t.body.scrollTop + u.scrollTop, b && (a.returnValue = !1), r
            },
            aa = function(a) {
                return a ? ("string" == typeof a && (a = b.selector(a)), a.length && a !== window && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === window || a.nodeType && a.style ? a : null) : a
            },
            ba = function(a, b) {
                var c, e, f, g = a.style;
                if (void 0 === g[b]) {
                    for (f = ["O", "Moz", "ms", "Ms", "Webkit"], e = 5, c = b.charAt(0).toUpperCase() + b.substr(1); --e > -1 && void 0 === g[f[e] + c];);
                    if (0 > e) return "";
                    d = 3 === e ? "ms" : f[e], b = d + c
                }
                return b
            },
            ca = function(a, b, c) {
                var d = a.style;
                d && (void 0 === d[b] && (b = ba(a, b)), null == c ? d.removeProperty ? d.removeProperty(b.replace(/([A-Z])/g, "-$1").toLowerCase()) : d.removeAttribute(b) : void 0 !== d[b] && (d[b] = c))
            },
            da = t.defaultView ? t.defaultView.getComputedStyle : y,
            ea = /(?:Left|Right|Width)/i,
            fa = /(?:\d|\-|\+|=|#|\.)*/g,
            ga = function(a, b, c, d, e) {
                if ("px" === d || !d) return c;
                if ("auto" === d || !c) return 0;
                var f, g = ea.test(b),
                    h = a,
                    i = w.style,
                    j = 0 > c;
                return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border:0 solid red;position:" + ia(a, "position", !0) + ";line-height:0;", "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || t.body, i[g ? "width" : "height"] = c + d), h.appendChild(w), f = parseFloat(w[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(w), 0 !== f || e || (f = ga(a, b, c, d, !0))), j ? -f : f
            },
            ha = function(a, b) {
                if ("absolute" !== ia(a, "position", !0)) return 0;
                var c = "left" === b ? "Left" : "Top",
                    d = ia(a, "margin" + c, !0);
                return a["offset" + c] - (ga(a, b, parseFloat(d), (d + "").replace(fa, "")) || 0)
            },
            ia = function(a, b, c) {
                var d, e = (a._gsTransform || {})[b];
                return e || 0 === e ? e : (a.style[b] ? e = a.style[b] : (d = da(a)) ? (e = d.getPropertyValue(b.replace(/([A-Z])/g, "-$1").toLowerCase()), e = e || d.length ? e : d[b]) : a.currentStyle && (e = a.currentStyle[b]), "auto" !== e || "top" !== b && "left" !== b || (e = ha(a, b)), c ? e : parseFloat(e) || 0)
            },
            ja = function(a, b, c) {
                var d = a.vars,
                    e = d[c],
                    f = a._listeners[b];
                "function" == typeof e && e.apply(d[c + "Scope"] || d.callbackScope || a, d[c + "Params"] || [a.pointerEvent]), f && a.dispatchEvent(b)
            },
            ka = function(a, b) {
                var c, d, e, f = aa(a);
                return f ? Ea(f, b) : void 0 !== a.left ? (e = ya(b), {
                    left: a.left - e.x,
                    top: a.top - e.y,
                    width: a.width,
                    height: a.height
                }) : (d = a.min || a.minX || a.minRotation || 0, c = a.min || a.minY || 0, {
                    left: d,
                    top: c,
                    width: (a.max || a.maxX || a.maxRotation || 0) - d,
                    height: (a.max || a.maxY || 0) - c
                })
            },
            la = function() {
                if (!t.createElementNS) return g = 0, void(h = !1);
                var a, b, c, d, e = v("div"),
                    f = t.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    l = v("div"),
                    m = e.style,
                    n = t.body || u,
                    o = "flex" === ia(n, "display", !0);
                t.body && oa && (m.position = "absolute", n.appendChild(l), l.appendChild(e), d = e.offsetParent, l.style[oa] = "rotate(1deg)", k = e.offsetParent === d, l.style.position = "absolute", m.height = "10px", d = e.offsetTop, l.style.border = "5px solid red", j = d !== e.offsetTop, n.removeChild(l)), m = f.style, f.setAttributeNS(null, "width", "400px"), f.setAttributeNS(null, "height", "400px"), f.setAttributeNS(null, "viewBox", "0 0 400 400"), m.display = "block", m.boxSizing = "border-box", m.border = "0px solid red", m.transform = "none", e.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", n.appendChild(e), e.appendChild(f), c = f.createSVGPoint().matrixTransform(f.getScreenCTM()), b = c.y, e.scrollTop = 100, c.x = c.y = 0, c = c.matrixTransform(f.getScreenCTM()), i = b - c.y < 100.1 ? 0 : b - c.y - 150, e.removeChild(f), n.removeChild(e), n.appendChild(f), o && (n.style.display = "block"), a = f.getScreenCTM(), b = a.e, m.border = "50px solid red", a = f.getScreenCTM(), 0 === b && 0 === a.e && 0 === a.f && 1 === a.a ? (g = 1, h = !0) : (g = b !== a.e ? 1 : 0, h = 1 !== a.a), o && (n.style.display = "flex"), n.removeChild(f)
            },
            ma = "" !== ba(w, "perspective"),
            na = ba(w, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            oa = ba(w, "transform"),
            pa = oa.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
            qa = {},
            ra = {},
            sa = _gsScope.SVGElement,
            ta = function(a) {
                return !!(sa && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
            },
            ua = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
            va = [],
            wa = [],
            xa = function(a) {
                if (!a.getBoundingClientRect || !a.parentNode || !oa) return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: u
                };
                if (Ta.cacheSVGData !== !1 && a._dCache && a._dCache.lastUpdate === b.ticker.frame) return a._dCache;
                var c, d, e, f, j, k, l, m, n, o, p, q, r = a,
                    s = za(a);
                if (s.lastUpdate = b.ticker.frame, a.getBBox && !s.isSVGRoot) {
                    for (r = a.parentNode, c = a.getBBox(); r && "svg" !== (r.nodeName + "").toLowerCase();) r = r.parentNode;
                    return f = xa(r), s.offsetTop = c.y * f.scaleY, s.offsetLeft = c.x * f.scaleX, s.scaleX = f.scaleX, s.scaleY = f.scaleY, s.offsetParent = r || u, s
                }
                for (e = s.offsetParent, e === t.body && (e = u), wa.length = va.length = 0; r && (j = ia(r, oa, !0), "matrix(1, 0, 0, 1, 0, 0)" !== j && "none" !== j && "translate3d(0px, 0px, 0px)" !== j && (wa.push(r), va.push(r.style[oa]), r.style[oa] = "none"), r !== e);) r = r.parentNode;
                for (d = e.getBoundingClientRect(), j = a.getScreenCTM(), m = a.createSVGPoint(), l = m.matrixTransform(j), m.x = m.y = 10, m = m.matrixTransform(j), s.scaleX = (m.x - l.x) / 10, s.scaleY = (m.y - l.y) / 10, void 0 === g && la(), s.borderBox && !h && a.getAttribute("width") && (f = da(a) || {}, n = parseFloat(f.borderLeftWidth) + parseFloat(f.borderRightWidth) || 0, o = parseFloat(f.borderTopWidth) + parseFloat(f.borderBottomWidth) || 0, p = parseFloat(f.width) || 0, q = parseFloat(f.height) || 0, s.scaleX *= (p - n) / p, s.scaleY *= (q - o) / q), i ? (c = a.getBoundingClientRect(), s.offsetLeft = c.left - d.left, s.offsetTop = c.top - d.top) : (s.offsetLeft = l.x - d.left, s.offsetTop = l.y - d.top), s.offsetParent = e, k = wa.length; --k > -1;) wa[k].style[oa] = va[k];
                return s
            },
            ya = function(a, c) {
                if (c = c || {}, !a || a === u || !a.parentNode || a === window) return {
                    x: 0,
                    y: 0
                };
                var d = da(a),
                    e = na && d ? d.getPropertyValue(na) : "50% 50%",
                    f = e.split(" "),
                    g = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : f[0],
                    h = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : f[1];
                return ("center" === h || null == h) && (h = "50%"), ("center" === g || isNaN(parseFloat(g))) && (g = "50%"), a.getBBox && ta(a) ? (a._gsTransform || (b.set(a, {
                    x: "+=0",
                    overwrite: !1
                }), void 0 === a._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), e = a.getBBox(), c.x = a._gsTransform.xOrigin - e.x, c.y = a._gsTransform.yOrigin - e.y) : (a.getBBox && -1 !== (g + h).indexOf("%") && (a = a.getBBox(), a = {
                    offsetWidth: a.width,
                    offsetHeight: a.height
                }), c.x = -1 !== g.indexOf("%") ? a.offsetWidth * parseFloat(g) / 100 : parseFloat(g), c.y = -1 !== h.indexOf("%") ? a.offsetHeight * parseFloat(h) / 100 : parseFloat(h)), c
            },
            za = function(a) {
                if (Ta.cacheSVGData !== !1 && a._dCache && a._dCache.lastUpdate === b.ticker.frame) return a._dCache;
                var c, d = a._dCache = a._dCache || {},
                    e = da(a),
                    f = a.getBBox && ta(a),
                    g = "svg" === (a.nodeName + "").toLowerCase();
                if (d.isSVG = f, d.isSVGRoot = g, d.borderBox = "border-box" === e.boxSizing, d.computedStyle = e, g) c = a.parentNode || u, c.insertBefore(w, a), d.offsetParent = w.offsetParent || u, c.removeChild(w);
                else if (f) {
                    for (c = a.parentNode; c && "svg" !== (c.nodeName + "").toLowerCase();) c = c.parentNode;
                    d.offsetParent = c
                } else d.offsetParent = a.offsetParent;
                return d
            },
            Aa = function(a, b, c, d, e) {
                if (a === window || !a || !a.style || !a.parentNode) return [1, 0, 0, 1, 0, 0];
                var f, h, i, l, m, n, o, p, q, r, s, v, w, x, y = a._dCache || za(a),
                    z = a.parentNode,
                    A = z._dCache || za(z),
                    B = y.computedStyle,
                    C = y.isSVG ? A.offsetParent : z.offsetParent;
                return f = y.isSVG && -1 !== (a.style[oa] + "").indexOf("matrix") ? a.style[oa] : B ? B.getPropertyValue(pa) : a.currentStyle ? a.currentStyle[oa] : "1,0,0,1,0,0", a.getBBox && -1 !== (a.getAttribute("transform") + "").indexOf("matrix") && (f = a.getAttribute("transform")), f = (f + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0], f.length > 6 && (f = [f[0], f[1], f[4], f[5], f[12], f[13]]), d ? f[4] = f[5] = 0 : y.isSVG && (m = a._gsTransform) && (m.xOrigin || m.yOrigin) && (f[0] = parseFloat(f[0]), f[1] = parseFloat(f[1]), f[2] = parseFloat(f[2]), f[3] = parseFloat(f[3]), f[4] = parseFloat(f[4]) - (m.xOrigin - (m.xOrigin * f[0] + m.yOrigin * f[2])), f[5] = parseFloat(f[5]) - (m.yOrigin - (m.xOrigin * f[1] + m.yOrigin * f[3]))), b && (void 0 === g && la(), i = y.isSVG || y.isSVGRoot ? xa(a) : a, y.isSVG ? (l = a.getBBox(), r = A.isSVGRoot ? {
                    x: 0,
                    y: 0
                } : z.getBBox(), i = {
                    offsetLeft: l.x - r.x,
                    offsetTop: l.y - r.y,
                    offsetParent: y.offsetParent
                }) : y.isSVGRoot ? (s = parseInt(B.borderTopWidth, 10) || 0, v = parseInt(B.borderLeftWidth, 10) || 0, w = (f[0] - g) * v + f[2] * s, x = f[1] * v + (f[3] - g) * s, n = b.x, o = b.y, p = n - (n * f[0] + o * f[2]), q = o - (n * f[1] + o * f[3]), f[4] = parseFloat(f[4]) + p, f[5] = parseFloat(f[5]) + q, b.x -= p, b.y -= q, n = i.scaleX, o = i.scaleY, e || (b.x *= n, b.y *= o), f[0] *= n, f[1] *= o, f[2] *= n, f[3] *= o, ua || (b.x += w, b.y += x), C === t.body && i.offsetParent === u && (C = u)) : !j && a.offsetParent && (b.x += parseInt(ia(a.offsetParent, "borderLeftWidth"), 10) || 0, b.y += parseInt(ia(a.offsetParent, "borderTopWidth"), 10) || 0), h = z === u || z === t.body, f[4] = Number(f[4]) + b.x + (i.offsetLeft || 0) - c.x - (h ? 0 : z.scrollLeft || 0), f[5] = Number(f[5]) + b.y + (i.offsetTop || 0) - c.y - (h ? 0 : z.scrollTop || 0), z && "fixed" === ia(a, "position", B) && (f[4] += V(), f[5] += U()), !z || z === u || C !== i.offsetParent || A.isSVG || k && "100100" !== Aa(z).join("") || (i = A.isSVGRoot ? xa(z) : z, f[4] -= i.offsetLeft || 0, f[5] -= i.offsetTop || 0, j || !A.offsetParent || y.isSVG || y.isSVGRoot || (f[4] -= parseInt(ia(A.offsetParent, "borderLeftWidth"), 10) || 0, f[5] -= parseInt(ia(A.offsetParent, "borderTopWidth"), 10) || 0))), f
            },
            Ba = function(a, b) {
                if (!a || a === window || !a.parentNode) return [1, 0, 0, 1, 0, 0];
                for (var c, d, e, f, g, h, i, j, k = ya(a, qa), l = ya(a.parentNode, ra), m = Aa(a, k, l, !1, !b);
                    (a = a.parentNode) && a.parentNode && a !== u;) k = l, l = ya(a.parentNode, k === qa ? ra : qa), i = Aa(a, k, l), c = m[0], d = m[1], e = m[2], f = m[3], g = m[4], h = m[5], m[0] = c * i[0] + d * i[2], m[1] = c * i[1] + d * i[3], m[2] = e * i[0] + f * i[2], m[3] = e * i[1] + f * i[3], m[4] = g * i[0] + h * i[2] + i[4], m[5] = g * i[1] + h * i[3] + i[5];
                return b && (c = m[0], d = m[1], e = m[2], f = m[3], g = m[4], h = m[5], j = c * f - d * e, m[0] = f / j, m[1] = -d / j, m[2] = -e / j, m[3] = c / j, m[4] = (e * h - f * g) / j, m[5] = -(c * h - d * g) / j), m
            },
            Ca = function(a, b, c, d, e) {
                a = aa(a);
                var f = Ba(a, !1, e),
                    g = b.x,
                    h = b.y;
                return c && (ya(a, b), g -= b.x, h -= b.y), d = d === !0 ? b : d || {}, d.x = g * f[0] + h * f[2] + f[4], d.y = g * f[1] + h * f[3] + f[5], d
            },
            Da = function(a, b, c) {
                var d = a.x * b[0] + a.y * b[2] + b[4],
                    e = a.x * b[1] + a.y * b[3] + b[5];
                return a.x = d * c[0] + e * c[2] + c[4], a.y = d * c[1] + e * c[3] + c[5], a
            },
            Ea = function(a, b, c) {
                if (!(a = aa(a))) return null;
                b = aa(b);
                var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, v, w, x, y, z, A, B = a.getBBox && ta(a);
                if (a === window) g = U(), e = V(), f = e + (u.clientWidth || a.innerWidth || t.body.clientWidth || 0), h = g + ((a.innerHeight || 0) - 20 < u.clientHeight ? u.clientHeight : a.innerHeight || t.body.clientHeight || 0);
                else {
                    if (void 0 === b || b === window) return a.getBoundingClientRect();
                    d = ya(a), e = -d.x, g = -d.y, B ? (o = a.getBBox(), p = o.width, q = o.height) : "svg" !== (a.nodeName + "").toLowerCase() && a.offsetWidth ? (p = a.offsetWidth, q = a.offsetHeight) : (z = da(a), p = parseFloat(z.width), q = parseFloat(z.height)), f = e + p, h = g + q, "svg" !== a.nodeName.toLowerCase() || C || (r = xa(a), A = r.computedStyle || {}, w = (a.getAttribute("viewBox") || "0 0").split(" "), x = parseFloat(w[0]), y = parseFloat(w[1]), s = parseFloat(A.borderLeftWidth) || 0, v = parseFloat(A.borderTopWidth) || 0, f -= p - (p - s) / r.scaleX - x, h -= q - (q - v) / r.scaleY - y, e -= s / r.scaleX - x, g -= v / r.scaleY - y, z && (f += (parseFloat(A.borderRightWidth) + s) / r.scaleX, h += (v + parseFloat(A.borderBottomWidth)) / r.scaleY))
                }
                return a === b ? {
                    left: e,
                    top: g,
                    width: f - e,
                    height: h - g
                } : (i = Ba(a), j = Ba(b, !0), k = Da({
                    x: e,
                    y: g
                }, i, j), l = Da({
                    x: f,
                    y: g
                }, i, j), m = Da({
                    x: f,
                    y: h
                }, i, j), n = Da({
                    x: e,
                    y: h
                }, i, j), e = Math.min(k.x, l.x, m.x, n.x), g = Math.min(k.y, l.y, m.y, n.y), L.x = L.y = 0, c && ya(b, L), {
                    left: e + L.x,
                    top: g + L.y,
                    width: Math.max(k.x, l.x, m.x, n.x) - e,
                    height: Math.max(k.y, l.y, m.y, n.y) - g
                })
            },
            Fa = function(a) {
                return a && a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
            },
            Ga = function(a) {
                var b, c, d, e = [],
                    f = a.length;
                for (b = 0; f > b; b++)
                    if (c = a[b], Fa(c))
                        for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
                    else c && 0 !== c.length && e.push(c);
                return e
            },
            Ha = "ontouchstart" in u && "orientation" in window,
            Ia = function(a) {
                for (var b = a.split(","), c = (void 0 !== w.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== w.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : a).split(","), d = {}, e = 4; --e > -1;) d[b[e]] = c[e], d[c[e]] = b[e];
                return d
            }("touchstart,touchmove,touchend,touchcancel"),
            Ja = function(a, b, c, d) {
                a.addEventListener ? (a.addEventListener(Ia[b], c, d), b !== Ia[b] && a.addEventListener(b, c, d)) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            Ka = function(a, b, c) {
                a.removeEventListener ? (a.removeEventListener(Ia[b], c), b !== Ia[b] && a.removeEventListener(b, c)) : a.detachEvent && a.detachEvent("on" + b, c)
            },
            La = function(a, b) {
                for (var c = a.length; --c > -1;)
                    if (a[c].identifier === b) return !0;
                return !1
            },
            Ma = function(a) {
                e = a.touches && I < a.touches.length, Ka(a.target, "touchend", Ma)
            },
            Na = function(a) {
                e = a.touches && I < a.touches.length, Ja(a.target, "touchend", Ma)
            },
            Oa = function(a, b, c, d, e, f) {
                var g, h, i, j = {};
                if (b)
                    if (1 !== e && b instanceof Array) {
                        if (j.end = g = [], i = b.length, "object" == typeof b[0])
                            for (h = 0; i > h; h++) g[h] = O(b[h], e);
                        else
                            for (h = 0; i > h; h++) g[h] = b[h] * e;
                        c += 1.1, d -= 1.1
                    } else "function" == typeof b ? j.end = function(c) {
                        var d, f, g = b.call(a, c);
                        if (1 !== e)
                            if ("object" == typeof g) {
                                d = {};
                                for (f in g) d[f] = g[f] * e;
                                g = d
                            } else g *= e;
                        return g
                    } : j.end = b;
                return (c || 0 === c) && (j.max = c), (d || 0 === d) && (j.min = d), f && (j.velocity = 0), j
            },
            Pa = function(a) {
                var b;
                return a && a.getAttribute && "BODY" !== a.nodeName ? "true" === (b = a.getAttribute("data-clickable")) || "false" !== b && (a.onclick || H.test(a.nodeName + "") || "true" === a.getAttribute("contentEditable")) ? !0 : Pa(a.parentNode) : !1
            },
            Qa = function(a, b) {
                for (var c, d = a.length; --d > -1;) c = a[d], c.ondragstart = c.onselectstart = b ? null : y, ca(c, "userSelect", b ? "text" : "none")
            },
            Ra = function() {
                var a, b = t.createElement("div"),
                    c = t.createElement("div"),
                    d = c.style,
                    e = t.body || w;
                return d.display = "inline-block", d.position = "relative", b.style.cssText = c.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", b.appendChild(c), e.appendChild(b), l = c.offsetHeight + 18 > b.scrollHeight, d.width = "100%", oa || (d.paddingRight = "500px", a = b.scrollLeft = b.scrollWidth - b.clientWidth, d.left = "-90px", a = a !== b.scrollLeft), e.removeChild(b), a
            }(),
            Sa = function(a, c) {
                a = aa(a), c = c || {};
                var d, e, f, g, h, i, j = t.createElement("div"),
                    k = j.style,
                    m = a.firstChild,
                    n = 0,
                    o = 0,
                    p = a.scrollTop,
                    q = a.scrollLeft,
                    r = a.scrollWidth,
                    s = a.scrollHeight,
                    u = 0,
                    v = 0,
                    w = 0;
                ma && c.force3D !== !1 ? (h = "translate3d(", i = "px,0px)") : oa && (h = "translate(", i = "px)"), this.scrollTop = function(a, b) {
                    return arguments.length ? void this.top(-a, b) : -this.top()
                }, this.scrollLeft = function(a, b) {
                    return arguments.length ? void this.left(-a, b) : -this.left()
                }, this.left = function(d, e) {
                    if (!arguments.length) return -(a.scrollLeft + o);
                    var f = a.scrollLeft - q,
                        g = o;
                    return (f > 2 || -2 > f) && !e ? (q = a.scrollLeft, b.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }), this.left(-q), void(c.onKill && c.onKill())) : (d = -d, 0 > d ? (o = d - .5 | 0, d = 0) : d > v ? (o = d - v | 0, d = v) : o = 0, (o || g) && (h ? this._suspendTransforms || (k[oa] = h + -o + "px," + -n + i) : k.left = -o + "px", Ra && o + u >= 0 && (k.paddingRight = o + u + "px")), a.scrollLeft = 0 | d, void(q = a.scrollLeft))
                }, this.top = function(d, e) {
                    if (!arguments.length) return -(a.scrollTop + n);
                    var f = a.scrollTop - p,
                        g = n;
                    return (f > 2 || -2 > f) && !e ? (p = a.scrollTop, b.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }), this.top(-p), void(c.onKill && c.onKill())) : (d = -d, 0 > d ? (n = d - .5 | 0, d = 0) : d > w ? (n = d - w | 0, d = w) : n = 0, (n || g) && (h ? this._suspendTransforms || (k[oa] = h + -o + "px," + -n + i) : k.top = -n + "px"), a.scrollTop = 0 | d, void(p = a.scrollTop))
                }, this.maxScrollTop = function() {
                    return w
                }, this.maxScrollLeft = function() {
                    return v
                }, this.disable = function() {
                    for (m = j.firstChild; m;) g = m.nextSibling, a.appendChild(m), m = g;
                    a === j.parentNode && a.removeChild(j)
                }, this.enable = function() {
                    if (m = a.firstChild, m !== j) {
                        for (; m;) g = m.nextSibling, j.appendChild(m), m = g;
                        a.appendChild(j), this.calibrate()
                    }
                }, this.calibrate = function(b) {
                    var c, g, h = a.clientWidth === d;
                    p = a.scrollTop, q = a.scrollLeft, (!h || a.clientHeight !== e || j.offsetHeight !== f || r !== a.scrollWidth || s !== a.scrollHeight || b) && ((n || o) && (c = this.left(), g = this.top(), this.left(-a.scrollLeft), this.top(-a.scrollTop)), (!h || b) && (k.display = "block", k.width = "auto", k.paddingRight = "0px", u = Math.max(0, a.scrollWidth - a.clientWidth), u && (u += ia(a, "paddingLeft") + (l ? ia(a, "paddingRight") : 0))), k.display = "inline-block", k.position = "relative", k.overflow = "visible", k.verticalAlign = "top", k.width = "100%", k.paddingRight = u + "px", l && (k.paddingBottom = ia(a, "paddingBottom", !0)), C && (k.zoom = "1"), d = a.clientWidth, e = a.clientHeight, r = a.scrollWidth, s = a.scrollHeight, v = a.scrollWidth - d, w = a.scrollHeight - e, f = j.offsetHeight, k.display = "block", (c || g) && (this.left(c), this.top(g)))
                }, this.content = j, this.element = a, this._suspendTransforms = !1, this.enable()
            },
            Ta = function(d, g) {
                a.call(this, d), d = aa(d), f || (f = q.com.greensock.plugins.ThrowPropsPlugin), this.vars = g = O(g || {}), this.target = d, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(g.dragResistance) || 0, this.edgeResistance = isNaN(g.edgeResistance) ? 1 : parseFloat(g.edgeResistance) || 0, this.lockAxis = g.lockAxis, this.autoScroll = g.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!g.allowEventDefault;
                var h, i, j, k, l, r, s, v, w, y, E, H, P, S, U, V, Z, ba, da, ea, fa, ga, ha, la, ma, na, oa, pa, qa, ra, sa, ua, va, wa, xa = (g.type || (C ? "top,left" : "x,y")).toLowerCase(),
                    ya = -1 !== xa.indexOf("x") || -1 !== xa.indexOf("y"),
                    za = -1 !== xa.indexOf("rotation"),
                    Aa = za ? "rotation" : ya ? "x" : "left",
                    Da = ya ? "y" : "top",
                    Ea = -1 !== xa.indexOf("x") || -1 !== xa.indexOf("left") || "scroll" === xa,
                    Fa = -1 !== xa.indexOf("y") || -1 !== xa.indexOf("top") || "scroll" === xa,
                    Ga = g.minimumMovement || 2,
                    Ma = this,
                    Ra = N(g.trigger || g.handle || d),
                    Ua = {},
                    Va = 0,
                    Wa = !1,
                    Ya = g.autoScrollMarginTop || 40,
                    Za = g.autoScrollMarginRight || 40,
                    $a = g.autoScrollMarginBottom || 40,
                    _a = g.autoScrollMarginLeft || 40,
                    ab = g.clickableTest || Pa,
                    bb = 0,
                    cb = function(a) {
                        return Ma.isPressed && a.which < 2 ? void Ma.endDrag() : (a.preventDefault(), a.stopPropagation(), !1)
                    },
                    db = function(a) {
                        if (Ma.autoScroll && Ma.isDragging && (Wa || ba)) {
                            var b, c, e, f, g, h, j, k, l = d,
                                m = 15 * Ma.autoScroll;
                            for (Wa = !1, M.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != u.scrollTop ? u.scrollTop : t.body.scrollTop, M.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != u.scrollLeft ? u.scrollLeft : t.body.scrollLeft, f = Ma.pointerX - M.scrollLeft, g = Ma.pointerY - M.scrollTop; l && !c;) c = Y(l.parentNode), b = c ? M : l.parentNode, e = c ? {
                                bottom: Math.max(u.clientHeight, window.innerHeight || 0),
                                right: Math.max(u.clientWidth, window.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : b.getBoundingClientRect(), h = j = 0, Fa && (k = b._gsMaxScrollY - b.scrollTop, 0 > k ? j = k : g > e.bottom - $a && k ? (Wa = !0, j = Math.min(k, m * (1 - Math.max(0, e.bottom - g) / $a) | 0)) : g < e.top + Ya && b.scrollTop && (Wa = !0, j = -Math.min(b.scrollTop, m * (1 - Math.max(0, g - e.top) / Ya) | 0)), j && (b.scrollTop += j)), Ea && (k = b._gsMaxScrollX - b.scrollLeft, 0 > k ? h = k : f > e.right - Za && k ? (Wa = !0, h = Math.min(k, m * (1 - Math.max(0, e.right - f) / Za) | 0)) : f < e.left + _a && b.scrollLeft && (Wa = !0, h = -Math.min(b.scrollLeft, m * (1 - Math.max(0, f - e.left) / _a) | 0)), h && (b.scrollLeft += h)), c && (h || j) && (window.scrollTo(b.scrollLeft, b.scrollTop), rb(Ma.pointerX + h, Ma.pointerY + j)), l = b
                        }
                        if (ba) {
                            var n = Ma.x,
                                o = Ma.y,
                                p = 1e-6;
                            p > n && n > -p && (n = 0), p > o && o > -p && (o = 0), za ? (Ma.deltaX = n - qa.data.rotation, qa.data.rotation = Ma.rotation = n, qa.setRatio(1)) : i ? (Fa && (Ma.deltaY = o - i.top(), i.top(o)), Ea && (Ma.deltaX = n - i.left(), i.left(n))) : ya ? (Fa && (Ma.deltaY = o - qa.data.y, qa.data.y = o), Ea && (Ma.deltaX = n - qa.data.x, qa.data.x = n), qa.setRatio(1)) : (Fa && (Ma.deltaY = o - parseFloat(d.style.top || 0), d.style.top = o + "px"), Ea && (Ma.deltaY = n - parseFloat(d.style.left || 0), d.style.left = n + "px")), !v || a || ua || (ua = !0, ja(Ma, "drag", "onDrag"), ua = !1)
                        }
                        ba = !1
                    },
                    eb = function(a, c) {
                        var e, f = Ma.x,
                            g = Ma.y;
                        d._gsTransform || !ya && !za || b.set(d, {
                            x: "+=0",
                            overwrite: !1,
                            data: "_draggable"
                        }), ya ? (Ma.y = d._gsTransform.y, Ma.x = d._gsTransform.x) : za ? Ma.x = Ma.rotation = d._gsTransform.rotation : i ? (Ma.y = i.top(), Ma.x = i.left()) : (Ma.y = parseInt(d.style.top, 10) || 0, Ma.x = parseInt(d.style.left, 10) || 0), (ea || fa || ga) && !c && (Ma.isDragging || Ma.isThrowing) && (ga && (L.x = Ma.x, L.y = Ma.y, e = ga(L), e.x !== Ma.x && (Ma.x = e.x, ba = !0), e.y !== Ma.y && (Ma.y = e.y, ba = !0)), ea && (e = ea(Ma.x), e !== Ma.x && (Ma.x = e, za && (Ma.rotation = e), ba = !0)), fa && (e = fa(Ma.y), e !== Ma.y && (Ma.y = e), ba = !0)), ba && db(!0), a || (Ma.deltaX = Ma.x - f, Ma.deltaY = Ma.y - g, ja(Ma, "throwupdate", "onThrowUpdate"))
                    },
                    fb = function() {
                        var a, b, c, e;
                        s = !1, i ? (i.calibrate(), Ma.minX = y = -i.maxScrollLeft(), Ma.minY = H = -i.maxScrollTop(), Ma.maxX = w = Ma.maxY = E = 0, s = !0) : g.bounds && (a = ka(g.bounds, d.parentNode), za ? (Ma.minX = y = a.left, Ma.maxX = w = a.left + a.width, Ma.minY = H = Ma.maxY = E = 0) : void 0 !== g.bounds.maxX || void 0 !== g.bounds.maxY ? (a = g.bounds, Ma.minX = y = a.minX, Ma.minY = H = a.minY, Ma.maxX = w = a.maxX, Ma.maxY = E = a.maxY) : (b = ka(d, d.parentNode), Ma.minX = y = ia(d, Aa) + a.left - b.left, Ma.minY = H = ia(d, Da) + a.top - b.top, Ma.maxX = w = y + (a.width - b.width), Ma.maxY = E = H + (a.height - b.height)), y > w && (Ma.minX = w, Ma.maxX = w = y, y = Ma.minX), H > E && (Ma.minY = E, Ma.maxY = E = H, H = Ma.minY), za && (Ma.minRotation = y, Ma.maxRotation = w), s = !0), g.liveSnap && (c = g.liveSnap === !0 ? g.snap || {} : g.liveSnap, e = c instanceof Array || "function" == typeof c, za ? (ea = nb(e ? c : c.rotation, y, w, 1), fa = null) : c.points ? ga = ob(e ? c : c.points, y, w, H, E, c.radius, i ? -1 : 1) : (Ea && (ea = nb(e ? c : c.x || c.left || c.scrollLeft, y, w, i ? -1 : 1)), Fa && (fa = nb(e ? c : c.y || c.top || c.scrollTop, H, E, i ? -1 : 1))))
                    },
                    gb = function() {
                        Ma.isThrowing = !1, ja(Ma, "throwcomplete", "onThrowComplete")
                    },
                    hb = function() {
                        Ma.isThrowing = !1
                    },
                    ib = function(a, b) {
                        var c, e, h, j;
                        a && f ? (a === !0 && (c = g.snap || g.liveSnap || {}, e = c instanceof Array || "function" == typeof c, a = {
                            resistance: (g.throwResistance || g.resistance || 1e3) / (za ? 10 : 1)
                        }, za ? a.rotation = Oa(Ma, e ? c : c.rotation, w, y, 1, b) : (Ea && (a[Aa] = Oa(Ma, e ? c : c.points || c.x || c.left || c.scrollLeft, w, y, i ? -1 : 1, b || "x" === Ma.lockedAxis)), Fa && (a[Da] = Oa(Ma, e ? c : c.points || c.y || c.top || c.scrollTop, E, H, i ? -1 : 1, b || "y" === Ma.lockedAxis)), (c.points || c instanceof Array && "object" == typeof c[0]) && (a.linkedProps = Aa + "," + Da, a.radius = c.radius))), Ma.isThrowing = !0, j = isNaN(g.overshootTolerance) ? 1 === g.edgeResistance ? 0 : 1 - Ma.edgeResistance + .2 : g.overshootTolerance, Ma.tween = h = f.to(i || d, {
                            throwProps: a,
                            data: "_draggable",
                            ease: g.ease || q.Power3.easeOut,
                            onComplete: gb,
                            onOverwrite: hb,
                            onUpdate: g.fastMode ? ja : eb,
                            onUpdateParams: g.fastMode ? [Ma, "onthrowupdate", "onThrowUpdate"] : c && c.radius ? [!1, !0] : x
                        }, isNaN(g.maxDuration) ? 2 : g.maxDuration, isNaN(g.minDuration) ? 0 === j || "object" == typeof a && a.resistance > 1e3 ? 0 : .5 : g.minDuration, j), g.fastMode || (i && (i._suspendTransforms = !0), h.render(h.duration(), !0, !0), eb(!0, !0), Ma.endX = Ma.x, Ma.endY = Ma.y, za && (Ma.endRotation = Ma.x), h.play(0), eb(!0, !0), i && (i._suspendTransforms = !1))) : s && Ma.applyBounds()
                    },
                    jb = function(a) {
                        var b, c, e, f, g, h, i, l, m, n = ma || [1, 0, 0, 1, 0, 0];
                        ma = Ba(d.parentNode, !0), a && Ma.isPressed && n.join(",") !== ma.join(",") && (b = n[0], c = n[1], e = n[2], f = n[3], g = n[4], h = n[5], i = b * f - c * e, l = j * (f / i) + k * (-e / i) + (e * h - f * g) / i, m = j * (-c / i) + k * (b / i) + -(b * h - c * g) / i, k = l * ma[1] + m * ma[3] + ma[5], j = l * ma[0] + m * ma[2] + ma[4]), ma[1] || ma[2] || 1 != ma[0] || 1 != ma[3] || 0 != ma[4] || 0 != ma[5] || (ma = null)
                    },
                    kb = function() {
                        var a = 1 - Ma.edgeResistance;
                        jb(!1), ma && (j = Ma.pointerX * ma[0] + Ma.pointerY * ma[2] + ma[4], k = Ma.pointerX * ma[1] + Ma.pointerY * ma[3] + ma[5]), ba && (rb(Ma.pointerX, Ma.pointerY), db(!0)), i ? (fb(), r = i.top(), l = i.left()) : (lb() ? (eb(!0, !0), fb()) : Ma.applyBounds(), za ? (Z = Ma.rotationOrigin = Ca(d, {
                            x: 0,
                            y: 0
                        }), eb(!0, !0), l = Ma.x, r = Ma.y = Math.atan2(Z.y - Ma.pointerY, Ma.pointerX - Z.x) * z) : (oa = d.parentNode ? d.parentNode.scrollTop || 0 : 0, pa = d.parentNode ? d.parentNode.scrollLeft || 0 : 0, r = ia(d, Da), l = ia(d, Aa))), s && a && (l > w ? l = w + (l - w) / a : y > l && (l = y - (y - l) / a), za || (r > E ? r = E + (r - E) / a : H > r && (r = H - (H - r) / a))), Ma.startX = l, Ma.startY = r
                    },
                    lb = function() {
                        return Ma.tween && Ma.tween.isActive()
                    },
                    mb = function() {
                        !D.parentNode || lb() || Ma.isDragging || D.parentNode.removeChild(D)
                    },
                    nb = function(a, b, c, d) {
                        return "function" == typeof a ? function(e) {
                            var f = Ma.isPressed ? 1 - Ma.edgeResistance : 1;
                            return a.call(Ma, e > c ? c + (e - c) * f : b > e ? b + (e - b) * f : e) * d
                        } : a instanceof Array ? function(d) {
                            for (var e, f, g = a.length, h = 0, i = A; --g > -1;) e = a[g], f = e - d, 0 > f && (f = -f), i > f && e >= b && c >= e && (h = g, i = f);
                            return a[h]
                        } : isNaN(a) ? function(a) {
                            return a
                        } : function() {
                            return a * d
                        }
                    },
                    ob = function(a, b, c, d, e, f, g) {
                        return f = f && A > f ? f * f : A, "function" == typeof a ? function(h) {
                            var i, j, k, l = Ma.isPressed ? 1 - Ma.edgeResistance : 1,
                                m = h.x,
                                n = h.y;
                            return h.x = m = m > c ? c + (m - c) * l : b > m ? b + (m - b) * l : m, h.y = n = n > e ? e + (n - e) * l : d > n ? d + (n - d) * l : n, i = a.call(Ma, h), i !== h && (h.x = i.x, h.y = i.y), 1 !== g && (h.x *= g, h.y *= g), A > f && (j = h.x - m, k = h.y - n, j * j + k * k > f && (h.x = m, h.y = n)), h
                        } : a instanceof Array ? function(b) {
                            for (var c, d, e, g, h = a.length, i = 0, j = A; --h > -1;) e = a[h], c = e.x - b.x, d = e.y - b.y, g = c * c + d * d, j > g && (i = h, j = g);
                            return f >= j ? a[i] : b
                        } : function(a) {
                            return a
                        }
                    },
                    pb = function(a, c) {
                        var e;
                        if (h && !Ma.isPressed && a && ("mousedown" !== a.type && "pointerdown" !== a.type || c || !(B() - bb < 30) || !Ia[Ma.pointerEvent.type])) {
                            if (na = lb(), Ma.pointerEvent = a, Ia[a.type] ? (la = -1 !== a.type.indexOf("touch") ? a.currentTarget || a.target : t, Ja(la, "touchend", sb), Ja(la, "touchmove", qb), Ja(la, "touchcancel", sb), Ja(t, "touchstart", Na)) : (la = null, Ja(t, "mousemove", qb)), sa = null, Ja(t, "mouseup", sb), a && a.target && Ja(a.target, "mouseup", sb), ha = ab.call(Ma, a.target) && !g.dragClickables && !c) return Ja(a.target, "change", sb), ja(Ma, "press", "onPress"), void Qa(Ra, !0);
                            if (ra = la && Ea !== Fa && Ma.vars.allowNativeTouchScrolling !== !1 ? Ea ? "y" : "x" : !1, C ? a = _(a, !0) : ra || Ma.allowEventDefault || (a.preventDefault(), a.preventManipulation && a.preventManipulation()), a.changedTouches ? (a = U = a.changedTouches[0], V = a.identifier) : a.pointerId ? V = a.pointerId : U = V = null, I++, Q(db), k = Ma.pointerY = a.pageY, j = Ma.pointerX = a.pageX, (ra || Ma.autoScroll) && $(d.parentNode), !d.parentNode || !Ma.autoScroll || i || za || !d.parentNode._gsMaxScrollX || D.parentNode || d.getBBox || (D.style.width = d.parentNode.scrollWidth + "px", d.parentNode.appendChild(D)), kb(), Ma.tween && Ma.tween.kill(), Ma.isThrowing = !1, b.killTweensOf(i || d, !0, Ua), i && b.killTweensOf(d, !0, {
                                    scrollTo: 1
                                }), Ma.tween = Ma.lockedAxis = null, (g.zIndexBoost || !za && !i && g.zIndexBoost !== !1) && (d.style.zIndex = Ta.zIndex++), Ma.isPressed = !0, v = !(!g.onDrag && !Ma._listeners.drag), !za)
                                for (e = Ra.length; --e > -1;) ca(Ra[e], "cursor", g.cursor || "move");
                            ja(Ma, "press", "onPress")
                        }
                    },
                    qb = function(a) {
                        var b, c, d, f, g, i, l = a;
                        if (h && !e && Ma.isPressed && a) {
                            if (Ma.pointerEvent = a, b = a.changedTouches) {
                                if (a = b[0], a !== U && a.identifier !== V) {
                                    for (f = b.length; --f > -1 && (a = b[f]).identifier !== V;);
                                    if (0 > f) return
                                }
                            } else if (a.pointerId && V && a.pointerId !== V) return;
                            if (C) a = _(a, !0);
                            else {
                                if (la && ra && !sa && (c = a.pageX, d = a.pageY, ma && (f = c * ma[0] + d * ma[2] + ma[4], d = c * ma[1] + d * ma[3] + ma[5], c = f), g = Math.abs(c - j), i = Math.abs(d - k), (g !== i && (g > Ga || i > Ga) || J && ra === sa) && (sa = g > i && Ea ? "x" : "y", Ma.vars.lockAxisOnTouchScroll !== !1 && (Ma.lockedAxis = "x" === sa ? "y" : "x", "function" == typeof Ma.vars.onLockAxis && Ma.vars.onLockAxis.call(Ma, l)), J && ra === sa))) return void sb(l);
                                Ma.allowEventDefault || ra && (!sa || ra === sa) || l.cancelable === !1 || (l.preventDefault(), l.preventManipulation && l.preventManipulation())
                            }
                            Ma.autoScroll && (Wa = !0), rb(a.pageX, a.pageY)
                        }
                    },
                    rb = function(a, b) {
                        var c, d, e, f, g, h, i = 1 - Ma.dragResistance,
                            m = 1 - Ma.edgeResistance;
                        Ma.pointerX = a, Ma.pointerY = b, za ? (f = Math.atan2(Z.y - b, a - Z.x) * z, g = Ma.y - f, g > 180 ? (r -= 360, Ma.y = f) : -180 > g && (r += 360, Ma.y = f), Ma.x !== l || Math.abs(r - f) > Ga ? (Ma.y = f, e = l + (r - f) * i) : e = l) : (ma && (h = a * ma[0] + b * ma[2] + ma[4], b = a * ma[1] + b * ma[3] + ma[5], a = h), d = b - k, c = a - j, Ga > d && d > -Ga && (d = 0), Ga > c && c > -Ga && (c = 0), (Ma.lockAxis || Ma.lockedAxis) && (c || d) && (h = Ma.lockedAxis, h || (Ma.lockedAxis = h = Ea && Math.abs(c) > Math.abs(d) ? "y" : Fa ? "x" : null, h && "function" == typeof Ma.vars.onLockAxis && Ma.vars.onLockAxis.call(Ma, Ma.pointerEvent)), "y" === h ? d = 0 : "x" === h && (c = 0)), e = l + c * i, f = r + d * i), (ea || fa || ga) && (Ma.x !== e || Ma.y !== f && !za) ? (ga && (L.x = e, L.y = f, h = ga(L), e = h.x, f = h.y), ea && (e = ea(e)), fa && (f = fa(f))) : s && (e > w ? e = w + (e - w) * m : y > e && (e = y + (e - y) * m), za || (f > E ? f = E + (f - E) * m : H > f && (f = H + (f - H) * m))), za || ma || (e = Math.round(e), f = Math.round(f)), (Ma.x !== e || Ma.y !== f && !za) && (za ? (Ma.endRotation = Ma.x = Ma.endX = e, ba = !0) : (Fa && (Ma.y = Ma.endY = f, ba = !0), Ea && (Ma.x = Ma.endX = e, ba = !0)), !Ma.isDragging && Ma.isPressed && (Ma.isDragging = !0, ja(Ma, "dragstart", "onDragStart")))
                    },
                    sb = function(a, c) {
                        if (h && Ma.isPressed && (!a || null == V || c || !(a.pointerId && a.pointerId !== V || a.changedTouches && !La(a.changedTouches, V)))) {
                            Ma.isPressed = !1;
                            var e, f, i, j, k, l = a,
                                m = Ma.isDragging,
                                n = b.delayedCall(.001, mb);
                            if (la ? (Ka(la, "touchend", sb), Ka(la, "touchmove", qb), Ka(la, "touchcancel", sb), Ka(t, "touchstart", Na)) : Ka(t, "mousemove", qb), Ka(t, "mouseup", sb), a && a.target && Ka(a.target, "mouseup", sb), ba = !1, ha) return a && (Ka(a.target, "change", sb), Ma.pointerEvent = l), Qa(Ra, !1), ja(Ma, "release", "onRelease"), ja(Ma, "click", "onClick"), void(ha = !1);
                            if (R(db), !za)
                                for (f = Ra.length; --f > -1;) ca(Ra[f], "cursor", g.cursor || "move");
                            if (m && (Va = K = B(), Ma.isDragging = !1), I--, a) {
                                if (C && (a = _(a, !1)), e = a.changedTouches, e && (a = e[0], a !== U && a.identifier !== V)) {
                                    for (f = e.length; --f > -1 && (a = e[f]).identifier !== V;);
                                    if (0 > f) return
                                }
                                Ma.pointerEvent = l, Ma.pointerX = a.pageX, Ma.pointerY = a.pageY
                            }
                            return l && !m ? (na && (g.snap || g.bounds) && ib(g.throwProps), ja(Ma, "release", "onRelease"), J && "touchmove" === l.type || -1 !== l.type.indexOf("cancel") || (ja(Ma, "click", "onClick"), B() - bb < 300 && ja(Ma, "doubleclick", "onDoubleClick"), j = l.target || l.srcElement || d, bb = B(), k = function() {
                                bb !== va && Ma.enabled() && !Ma.isPressed && (j.click ? j.click() : t.createEvent && (i = t.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 1, Ma.pointerEvent.screenX, Ma.pointerEvent.screenY, Ma.pointerX, Ma.pointerY, !1, !1, !1, !1, 0, null), j.dispatchEvent(i)))
                            }, J || l.defaultPrevented || b.delayedCall(1e-5, k))) : (ib(g.throwProps), C || Ma.allowEventDefault || !l || !g.dragClickables && ab.call(Ma, l.target) || !m || ra && (!sa || ra !== sa) || l.cancelable === !1 || (l.preventDefault(), l.preventManipulation && l.preventManipulation()), ja(Ma, "release", "onRelease")), lb() && n.duration(Ma.tween.duration()), m && ja(Ma, "dragend", "onDragEnd"), !0
                        }
                    },
                    tb = function(a) {
                        if (a && Ma.isDragging && !i) {
                            var b = a.target || a.srcElement || d.parentNode,
                                c = b.scrollLeft - b._gsScrollX,
                                e = b.scrollTop - b._gsScrollY;
                            (c || e) && (ma ? (j -= c * ma[0] + e * ma[2], k -= e * ma[3] + c * ma[1]) : (j -= c, k -= e), b._gsScrollX += c, b._gsScrollY += e, rb(Ma.pointerX, Ma.pointerY))
                        }
                    },
                    ub = function(a) {
                        var b = B(),
                            c = 40 > b - bb,
                            d = 40 > b - Va,
                            e = c && va === bb,
                            f = !!a.preventDefault,
                            g = Ma.pointerEvent && Ma.pointerEvent.defaultPrevented,
                            h = c && wa === bb,
                            i = a.isTrusted || null == a.isTrusted && c && e;
                        return f && (e || d && Ma.vars.suppressClickOnDrag !== !1) && a.stopImmediatePropagation(), !c || Ma.pointerEvent && Ma.pointerEvent.defaultPrevented || e && i === h ? void((Ma.isPressed || d || c) && (f ? i && a.detail && c && !g || (a.preventDefault(), a.preventManipulation && a.preventManipulation()) : a.returnValue = !1)) : (i && e && (wa = bb), void(va = bb))
                    },
                    vb = function(a) {
                        return ma ? {
                            x: a.x * ma[0] + a.y * ma[2] + ma[4],
                            y: a.x * ma[1] + a.y * ma[3] + ma[5]
                        } : {
                            x: a.x,
                            y: a.y
                        }
                    };
                da = Ta.get(this.target), da && da.kill(), this.startDrag = function(a, b) {
                    var c, e, f, g;
                    pb(a || Ma.pointerEvent, !0), b && !Ma.hitTest(a || Ma.pointerEvent) && (c = Xa(a || Ma.pointerEvent), e = Xa(d), f = vb({
                        x: c.left + c.width / 2,
                        y: c.top + c.height / 2
                    }), g = vb({
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 2
                    }), j -= f.x - g.x, k -= f.y - g.y), Ma.isDragging || (Ma.isDragging = !0,
                        ja(Ma, "dragstart", "onDragStart"))
                }, this.drag = qb, this.endDrag = function(a) {
                    sb(a || Ma.pointerEvent, !0)
                }, this.timeSinceDrag = function() {
                    return Ma.isDragging ? 0 : (B() - Va) / 1e3
                }, this.timeSinceClick = function() {
                    return (B() - bb) / 1e3
                }, this.hitTest = function(a, b) {
                    return Ta.hitTest(Ma.target, a, b)
                }, this.getDirection = function(a, b) {
                    var c, d, e, g, h, i, j = "velocity" === a && f ? a : "object" != typeof a || za ? "start" : "element";
                    return "element" === j && (h = Xa(Ma.target), i = Xa(a)), c = "start" === j ? Ma.x - l : "velocity" === j ? f.getVelocity(this.target, Aa) : h.left + h.width / 2 - (i.left + i.width / 2), za ? 0 > c ? "counter-clockwise" : "clockwise" : (b = b || 2, d = "start" === j ? Ma.y - r : "velocity" === j ? f.getVelocity(this.target, Da) : h.top + h.height / 2 - (i.top + i.height / 2), e = Math.abs(c / d), g = 1 / b > e ? "" : 0 > c ? "left" : "right", b > e && ("" !== g && (g += "-"), g += 0 > d ? "up" : "down"), g)
                }, this.applyBounds = function(a) {
                    var b, c, e, f, h, i;
                    if (a && g.bounds !== a) return g.bounds = a, Ma.update(!0);
                    if (eb(!0), fb(), s) {
                        if (b = Ma.x, c = Ma.y, b > w ? b = w : y > b && (b = y), c > E ? c = E : H > c && (c = H), (Ma.x !== b || Ma.y !== c) && (e = !0, Ma.x = Ma.endX = b, za ? Ma.endRotation = b : Ma.y = Ma.endY = c, ba = !0, db(!0), Ma.autoScroll && !Ma.isDragging))
                            for ($(d.parentNode), f = d, M.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != u.scrollTop ? u.scrollTop : t.body.scrollTop, M.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != u.scrollLeft ? u.scrollLeft : t.body.scrollLeft; f && !i;) i = Y(f.parentNode), h = i ? M : f.parentNode, Fa && h.scrollTop > h._gsMaxScrollY && (h.scrollTop = h._gsMaxScrollY), Ea && h.scrollLeft > h._gsMaxScrollX && (h.scrollLeft = h._gsMaxScrollX), f = h;
                        Ma.isThrowing && (e || Ma.endX > w || Ma.endX < y || Ma.endY > E || Ma.endY < H) && ib(g.throwProps, e)
                    }
                    return Ma
                }, this.update = function(a, b, c) {
                    var e = Ma.x,
                        f = Ma.y;
                    return jb(!b), a ? Ma.applyBounds() : (ba && c && db(!0), eb(!0)), b && (rb(Ma.pointerX, Ma.pointerY), ba && db(!0)), Ma.isPressed && !b && (Ea && Math.abs(e - Ma.x) > .01 || Fa && Math.abs(f - Ma.y) > .01 && !za) && kb(), Ma.autoScroll && ($(d.parentNode), Wa = Ma.isDragging, db(!0)), Ma.autoScroll && (X(d, tb), W(d, tb)), Ma
                }, this.enable = function(a) {
                    var e, j, k;
                    if ("soft" !== a) {
                        for (j = Ra.length; --j > -1;) k = Ra[j], Ja(k, "mousedown", pb), Ja(k, "touchstart", pb), Ja(k, "click", ub, !0), za || ca(k, "cursor", g.cursor || "move"), ca(k, "touchCallout", "none"), ca(k, "touchAction", Ea === Fa ? "none" : Ea ? "pan-y" : "pan-x"), ta(k) && ca(k.ownerSVGElement || k, "touchAction", Ea === Fa ? "none" : Ea ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Ja(k, "contextmenu", cb);
                        Qa(Ra, !1)
                    }
                    return W(d, tb), h = !0, f && "soft" !== a && f.track(i || d, ya ? "x,y" : za ? "rotation" : "top,left"), i && i.enable(), d._gsDragID = e = "d" + G++, F[e] = this, i && (i.element._gsDragID = e), b.set(d, {
                        x: "+=0",
                        overwrite: !1,
                        data: "_draggable"
                    }), qa = {
                        t: d,
                        data: C ? S : d._gsTransform,
                        tween: {},
                        setRatio: C ? function() {
                            b.set(d, P)
                        } : c._internals.setTransformRatio || c._internals.set3DTransformRatio
                    }, kb(), Ma.update(!0), Ma
                }, this.disable = function(a) {
                    var b, c, e = Ma.isDragging;
                    if (!za)
                        for (b = Ra.length; --b > -1;) ca(Ra[b], "cursor", null);
                    if ("soft" !== a) {
                        for (b = Ra.length; --b > -1;) c = Ra[b], ca(c, "touchCallout", null), ca(c, "touchAction", null), Ka(c, "mousedown", pb), Ka(c, "touchstart", pb), Ka(c, "click", ub), Ka(c, "contextmenu", cb);
                        Qa(Ra, !0), la && (Ka(la, "touchcancel", sb), Ka(la, "touchend", sb), Ka(la, "touchmove", qb)), Ka(t, "mouseup", sb), Ka(t, "mousemove", qb)
                    }
                    return X(d, tb), h = !1, f && "soft" !== a && f.untrack(i || d, ya ? "x,y" : za ? "rotation" : "top,left"), i && i.disable(), R(db), Ma.isDragging = Ma.isPressed = ha = !1, e && ja(Ma, "dragend", "onDragEnd"), Ma
                }, this.enabled = function(a, b) {
                    return arguments.length ? a ? Ma.enable(b) : Ma.disable(b) : h
                }, this.kill = function() {
                    return Ma.isThrowing = !1, b.killTweensOf(i || d, !0, Ua), Ma.disable(), delete F[d._gsDragID], Ma
                }, -1 !== xa.indexOf("scroll") && (i = this.scrollProxy = new Sa(d, T({
                    onKill: function() {
                        Ma.isPressed && sb(null)
                    }
                }, g)), d.style.overflowY = Fa && !Ha ? "auto" : "hidden", d.style.overflowX = Ea && !Ha ? "auto" : "hidden", d = i.content), g.force3D !== !1 && b.set(d, {
                    force3D: !0
                }), za ? Ua.rotation = 1 : (Ea && (Ua[Aa] = 1), Fa && (Ua[Da] = 1)), za ? (P = p, S = P.css, P.overwrite = !1) : ya && (P = Ea && Fa ? m : Ea ? n : o, S = P.css, P.overwrite = !1), this.enable()
            },
            Ua = Ta.prototype = new a;
        Ua.constructor = Ta, Ua.pointerX = Ua.pointerY = Ua.startX = Ua.startY = Ua.deltaX = Ua.deltaY = 0, Ua.isDragging = Ua.isPressed = !1, Ta.version = "0.16.1", Ta.zIndex = 1e3, Ja(t, "touchcancel", function() {}), Ja(t, "contextmenu", function(a) {
            var b;
            for (b in F) F[b].isPressed && F[b].endDrag()
        }), Ta.create = function(a, c) {
            "string" == typeof a && (a = b.selector(a));
            for (var d = a && 0 !== a.length ? Fa(a) ? Ga(a) : [a] : [], e = d.length; --e > -1;) d[e] = new Ta(d[e], c);
            return d
        }, Ta.get = function(a) {
            return F[(aa(a) || {})._gsDragID]
        }, Ta.timeSinceDrag = function() {
            return (B() - K) / 1e3
        };
        var Va = {},
            Wa = function(a) {
                var b, c, d = 0,
                    e = 0;
                for (a = aa(a), b = a.offsetWidth, c = a.offsetHeight; a;) d += a.offsetTop, e += a.offsetLeft, a = a.offsetParent;
                return {
                    top: d,
                    left: e,
                    width: b,
                    height: c
                }
            },
            Xa = function(a, b) {
                if (a === window) return Va.left = Va.top = 0, Va.width = Va.right = u.clientWidth || a.innerWidth || t.body.clientWidth || 0, Va.height = Va.bottom = (a.innerHeight || 0) - 20 < u.clientHeight ? u.clientHeight : a.innerHeight || t.body.clientHeight || 0, Va;
                var c = a.pageX !== b ? {
                    left: a.pageX - V(),
                    top: a.pageY - U(),
                    right: a.pageX - V() + 1,
                    bottom: a.pageY - U() + 1
                } : a.nodeType || a.left === b || a.top === b ? C ? Wa(a) : aa(a).getBoundingClientRect() : a;
                return c.right === b && c.width !== b ? (c.right = c.left + c.width, c.bottom = c.top + c.height) : c.width === b && (c = {
                    width: c.right - c.left,
                    height: c.bottom - c.top,
                    right: c.right,
                    left: c.left,
                    bottom: c.bottom,
                    top: c.top
                }), c
            };
        return Ta.hitTest = function(a, b, c) {
            if (a === b) return !1;
            var d, e, f, g = Xa(a),
                h = Xa(b),
                i = h.left > g.right || h.right < g.left || h.top > g.bottom || h.bottom < g.top;
            return i || !c ? !i : (f = -1 !== (c + "").indexOf("%"), c = parseFloat(c) || 0, d = {
                left: Math.max(g.left, h.left),
                top: Math.max(g.top, h.top)
            }, d.width = Math.min(g.right, h.right) - d.left, d.height = Math.min(g.bottom, h.bottom) - d.top, d.width < 0 || d.height < 0 ? !1 : f ? (c *= .01, e = d.width * d.height, e >= g.width * g.height * c || e >= h.width * h.height * c) : d.width > c && d.height > c)
        }, D.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Ta
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();