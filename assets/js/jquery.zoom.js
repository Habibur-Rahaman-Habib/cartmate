/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/ !function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,r,c,a,l,m,s,f=o(t),h=f.css("position"),v=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){r=f.outerWidth(),u=f.outerHeight(),n===t?(a=r,c=u):(a=v.outerWidth(),c=v.outerHeight()),l=(e.width-r)/a,m=(e.height-u)/c,s=v.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,c),0),t=Math.max(Math.min(t,a),0),e.style.left=-(t*l)+"px",e.style.top=-(n*m)+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,r=o(u),c=document.createElement("img"),a=o(c),l="mousemove.zoom",m=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}r.one("zoom.destroy",(function(o,t){r.off(".zoom"),i.style.position=o,i.style.overflow=t,c.onload=null,a.remove()}).bind(this,i.style.position,i.style.overflow)),c.onload=function(){var t=o.zoom(i,u,c,e.magnify);function n(n){t.init(),t.move(n),a.stop().fadeTo(o.support.opacity?e.duration:0,1,!!o.isFunction(e.onZoomIn)&&e.onZoomIn.call(c))}function f(){a.stop().fadeTo(e.duration,0,!!o.isFunction(e.onZoomOut)&&e.onZoomOut.call(c))}"grab"===e.on?r.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){f(),o(document).off(l,t.move)}),n(e),o(document).on(l,t.move),e.preventDefault())}):"click"===e.on?r.on("click.zoom",function(e){if(!m)return m=!0,n(e),o(document).on(l,t.move),o(document).one("click.zoom",function(){f(),m=!1,o(document).off(l,t.move)}),!1}):"toggle"===e.on?r.on("click.zoom",function(o){m?f():n(o),m=!m}):"mouseover"===e.on&&(t.init(),r.on("mouseenter.zoom",n).on("mouseleave.zoom",f).on(l,t.move)),e.touch&&r.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,f()):(s=!0,n(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),t.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,f())}),o.isFunction(e.callback)&&e.callback.call(c)},c.setAttribute("role","presentation"),c.alt="",c.src=e.url})},o.fn.zoom.defaults=t}(window.jQuery);