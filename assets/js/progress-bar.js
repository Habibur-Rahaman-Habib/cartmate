!function(t){t.fn.ProgressBar=function(){return t(this).each(function(){var o=t(this).children(),r=t(this).offset().top,a=t(window).height(),n=o.attr("data-percent")+"%",i=o.attr("data-color");a>r&&(o.css({backgroundColor:i}),o.animate({width:n},1e3)),t(window).scroll(function(){var c;t(this).scrollTop()>r-a&&(o.css({backgroundColor:i}),o.animate({width:n},1e3))})}),this}}(jQuery);