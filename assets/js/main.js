! function(t) {
	"use strict";
	t(document).ready(function() {
		t(window).scroll(function() {
				20 < t(window).scrollTop() ? (t("nav").removeClass("navbar-trans", 300), t("nav").removeClass("navbar-trans-dark"), t("nav").addClass("navbar-small", 300)) : (t("nav:not(.mobile-nav)").addClass("navbar-trans", 300), t("nav").removeClass("navbar-small", 300), t("nav").hasClass("trans-helper") && t("nav:not(.mobile-nav)").addClass("navbar-trans-dark")), t("nav:not(.navbar-fixed-top)").removeClass("navbar-trans navbar-small navbar-trans-dark")
			}), t(window).resize(function() {
				t(window).width() <= 1259 ? t("nav").addClass("mobile-nav") : t("nav").removeClass("mobile-nav"), t("nav").hasClass("mobile-nav") ? (t("nav").removeClass("navbar-trans"), t("nav").removeClass("navbar-trans-dark")) : 1259 <= t(window).width() && t(window).top && t("nav").addClass("navbar-trans"), t("nav").hasClass("mobile-nav") && t(".dropdown-toggle").on("mouseover", function(e) {
					e.preventDefault(), t(".dropdown").removeClass("open"), e.stopPropagation()
				}), t(".nav a").hasClass("dropdown-toggle") || t(".nav a").on("click", function() {
					"none" != t(".navbar-toggle").css("display") && t(".navbar-toggle").trigger("click")
				})
			}).resize(), t(".navbar-collapse").css({
				maxHeight: t(window).height() - t(".navbar-header").height() + "px"
			}), t("#navbar").localScroll({
				easing: "easeInOutExpo"
			}), t("#page-top").localScroll({
				easing: "easeInOutExpo"
			}),
			function() {
				if (t("#skillsCircles").hasClass("circles-counters")) new Waypoint({
					element: document.getElementById("skillsCircles"),
					handler: function() {
						t(".chart").easyPieChart({
							size: "150",
							lineWidth: 2,
							lineCap: "square",
							trackColor: "",
							barColor: "#f8f8f8",
							scaleColor: !1,
							easing: "easeOutBack",
							animate: {
								duration: 1600,
								enabled: !0
							}
						}), this.destroy()
					},
					offset: "80%"
				})
			}(),
			function() {
				if (t("#skillsCirclesMin").hasClass("circles-counters-dark-bg")) new Waypoint({
					element: document.getElementById("skillsCirclesMin"),
					handler: function() {
						t(".chart").easyPieChart({
							size: "150",
							lineWidth: 2,
							lineCap: "square",
							trackColor: "",
							barColor: "#f8f8f8",
							scaleColor: !1,
							easing: "easeOutBack",
							animate: {
								duration: 1600,
								enabled: !0
							}
						}), this.destroy()
					},
					offset: "80%"
				})
			}(),
			function() {
				if (t("#counters").hasClass("count-wrapper")) new Waypoint({
					element: document.getElementById("counters"),
					handler: function() {
						var e = {
							useEasing: !0,
							useGrouping: !0,
							separator: ","
						};
						new CountUp("count-1", 0, 467, 0, 3, e).start(), new CountUp("count-2", 0, 2835, 0, 3, e).start(), new CountUp("count-3", 0, 46930, 0, 3, e).start(), new CountUp("count-4", 0, 102890, 0, 3, e).start(), this.destroy()
					},
					offset: "80%"
				})
			}(),
			function() {
				if (t("#counters-min").hasClass("nbr-wrapper")) new Waypoint({
					element: document.getElementById("counters-min"),
					handler: function() {
						var e = {
							useEasing: !0,
							separator: ""
						};
						new CountUp("count-min-1", 0, 675, 0, 3, e).start(), new CountUp("count-min-2", 0, 1457, 0, 3, e).start(), new CountUp("count-min-3", 0, 471, 0, 3, e).start(), new CountUp("count-min-4", 0, 753, 0, 3, e).start(), this.destroy()
					},
					offset: "80%"
				})
			}(), t(".ft-slider").slick({
				autoplay: !0,
				autoplaySpeed: 4e3,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="info-slider-nav slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="info-slider-nav slick-next"><i class="fa fa-long-arrow-right"></i></button>',
				responsive: [{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: !0
					}
				}, {
					breakpoint: 770,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			}), t(".t-slider").slick({
				autoplay: !1,
				autoplaySpeed: 4e3,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>'
			}), t(".clients-slider").slick({
				autoplay: !0,
				autoplaySpeed: 4e3,
				slidesToShow: 5,
				slidesToScroll: 1,
				dots: !1,
				arrows: !1,
				responsive: [{
					breakpoint: 999,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: !0
					}
				}, {
					breakpoint: 770,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 599,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			}), t(".single-img-slider").slick({
				autoplay: !0,
				autoplaySpeed: 4e3,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: !0,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="slider-nav sl-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slider-nav sl-next"><span class="linea-arrows-slim-right"></span></button>'
			}), t(".centered-gallery").slick({
				centerMode: !0,
				centerPadding: "60px",
				slidesToShow: 3,
				responsive: [{
					breakpoint: 768,
					settings: {
						arrows: !1,
						centerMode: !0,
						centerPadding: "40px",
						slidesToShow: 3
					}
				}, {
					breakpoint: 480,
					settings: {
						arrows: !1,
						centerMode: !0,
						centerPadding: "40px",
						slidesToShow: 1
					}
				}]
			}), t(".fs-slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				useCSS: !0,
				fade: !0,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: !0,
				autoplaySpeed: 4e3
			}), t(".fw-slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: !0,
				dots: true,
				arrows: !0,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: !0,
				autoplaySpeed: 4e3
			}), t(".text-slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: !0,
				speed: 300,
				fade: !0,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: !0,
				autoplaySpeed: 4e3
			}), t(".shop-p-slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: !0,
				speed: 300,
				dots: !1,
				arrows: !0,
				prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: !1
			}), t(".prod_single_img_slider").slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: !0,
				speed: 300,
				infinite: !0,
				dots: !0,
				arrows: !0,
				prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
				nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
				autoplay: !1,
				accessibility: !1,
				customPaging: function(e, a) {
					return '<a href="#">' + t(".prod_single_thumbs_slider li:nth-child(" + (a + 1) + ")").html() + "</a>"
				}
			}),
			function() {
				t("a").hasClass("open-gallery") && t(".open-gallery").magnificPopup({
					type: "image",
					gallery: {
						enabled: !0
					}
				});
				t("a").hasClass("gallery-widget-lightbox") && t(".gallery-widget-lightbox").magnificPopup({
					type: "image",
					gallery: {
						enabled: !0
					}
				});
				t("a").hasClass("popup-video") && t(".popup-video").magnificPopup({
					disableOn: 700,
					type: "iframe",
					mainClass: "mfp-fade",
					removalDelay: 160,
					preloader: !1,
					fixedContentPos: !1
				})
			}(), (new WOW).init(),
			function() {
				var e = t("#fs-video-one-bg").hasClass("player"),
					a = t("#fw-video-one-bg").hasClass("player"),
					s = t("#section-video").hasClass("player");
				(e || a || s) && t(".player").YTPlayer()
			}(),
			function() {
				if (t(".kenburn-hero")[0]) {
					var e = t(window).height(),
						a = t(window).width();
					t(".kenburns").attr("width", a), t(".kenburns").attr("height", e), t(".kenburns").kenburns({
						images: ["https://placehold.it/2440x1578", "https://placehold.it/2440x1578/999/eee", "https://placehold.it/2440x1578/ccc/111"],
						frames_per_second: 30,
						display_time: 5e3,
						fade_time: 1e3,
						zoom: 1.1,
						background_color: "#000000"
					})
				}
			}(), t("#cs-timer").hasClass("cs-timer") && t("#cs-timer").countdown("2017/01/01", function(e) {
				t(this).html(e.strftime('<div class="item"><span class="nbr-timer">%D</span><span class="title-timer">Days<span></div><div class="item"><span class="nbr-timer">%H</span><span class="title-timer">Hours<span></div><div class="item"><span class="nbr-timer">%M</span><span class="title-timer">Minutes<span></div><div class="item"><span class="nbr-timer">%S</span><span class="title-timer">Seconds<span></div>'))
			}), document.getElementById("shop-slider-range") && (t("#shop-slider-range").slider({
				range: !0,
				min: 100,
				max: 750,
				values: [121, 721],
				slide: function(e, a) {
					t("#shop-slider-range-amount").val("$" + a.values[0] + " TO $" + a.values[1])
				}
			}), t("#shop-slider-range-amount").val("$" + t("#shop-slider-range").slider("values", 0) + " TO $" + t("#shop-slider-range").slider("values", 1))), 1260 <= t(window).width() && (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) || (t(".main-op").parallax("50%", .2), t(".number-counters").parallax("50%", .2), t(".cirlce-counters").parallax("50%", .3), t(".client-list-parallax").parallax("50%", .4), t(".ft-slider-parallax").parallax("50%", .4), t(".testimonials-parallaxx").parallax("50%", .4), t(".twitter-slider").parallax("50%", .4), t(".login-2").parallax("50%", .2)), t(window).stellar({
				hideDistantElements: !1
			}))
	}), t(window).load(function() {
		t(".preloader img").fadeOut(), t(".preloader").delay(350).fadeOut("slow", function() {}), t(".portfolio-filters a").click(function(e) {
				e.preventDefault(), t("li").removeClass("active"), t(this).parent().addClass("active")
			}),
			function() {
				var a = t("#pfolio");
				a.isotope({
					itemSelector: ".portfolio-item"
				}), t("#pfolio-filters").on("click", "a", function() {
					var e = t(this).attr("data-filter");
					a.isotope({
						filter: e
					})
				})
			}(),
			function() {
				var a = t(".pfolio-items");
				a.isotope({
					itemSelector: ".p-item",
					percentPosition: !0,
					layoutMode: "packery",
					masonry: {
						columnWidth: ".grid-sizer"
					}
				}), t("#pfolio-filters").on("click", "a", function() {
					var e = t(this).attr("data-filter");
					a.isotope({
						filter: e
					})
				})
			}(), t(".blog-container").isotope({
				itemSelector: ".blog-selector",
				percentPosition: !0
			})
	}), t(".show-map").on("click", function(e) {
		e.preventDefault(), t(".contact-info-wrapper").toggleClass("map-open"), t(".show-info-link").toggleClass("info-open")
	}), t(".show-info-link").on("click", function(e) {
		e.preventDefault(), t(".contact-info-wrapper").toggleClass("map-open"), t(this).toggleClass("info-open")
	})
}(jQuery), $(function() {
	var n = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/,
		o = /^[A-Za-z ]+$/;
	$(".form-ajax").on("keyup", "input.validate-locally", function() {
		! function(e) {
			var a = "",
				s = e.val(),
				t = e.siblings(".alert-error");
			"name" === e.attr("name") && (! function(e, a) {
				return $.trim(e).length > a
			}(s, 2) ? (!0, a += '<i class="fa fa-info-circle"></i> The name is too short!<br>', $('input[name="name"]').addClass("input-error")) : $('input[name="name"]').removeClass("input-error"), o.test(s) ? $('input[name="name"]').removeClass("input-error-2") : (!0, a += '<i class="fa fa-info-circle"></i> The name can contain only letters and spaces!<br>', $('input[name="name"]').addClass("input-error-2")));
			"email" === e.attr("name") && (n.test(s) ? $('input[name="email"]').removeClass("input-error") : (!0, a += '<i class="fa fa-info-circle"></i> Enter correct email address!<br>', $('input[name="email"]').addClass("input-error")));
			t.html(a)
		}($(this))
	}), $(".form-ajax").submit(function(e) {
		e.preventDefault();
		var a = $(this),
			s = a.attr("action");
		$.post(s, a.serialize(), function(e) {
			$(".ajax-message").html(e)
		})
	})
}), jQuery(document).ready(function(u) {
	var f = !1,
		a = !1,
		s = !1,
		e = u(".cd-image-container");

	function t(e) {
		e.each(function() {
			var e = u(this);
			u(window).scrollTop() + .5 * u(window).height() > e.offset().top && e.addClass("is-visible")
		}), a = !1
	}

	function n(e) {
		e.each(function() {
			var e = u(this);
			v(e.find('.cd-image-label[data-type="modified"]'), e.find(".cd-resize-img"), "left"), v(e.find('.cd-image-label[data-type="original"]'), e.find(".cd-resize-img"), "right")
		}), s = !1
	}

	function m(e, a, s, t, n, o, i, l, r, p) {
		var d = e.pageX + a - s;
		d < t ? d = t : n < d && (d = n);
		var c = 100 * (d + s / 2 - o) / i + "%";
		u(".draggable").css("left", c).on("mouseup vmouseup", function() {
			u(this).removeClass("draggable"), l.removeClass("resizable")
		}), u(".resizable").css("width", c), v(p, l, "left"), v(r, l, "right"), f = !1
	}

	function v(e, a, s) {
		"left" == s ? e.offset().left + e.outerWidth() < a.offset().left + a.outerWidth() ? e.removeClass("is-hidden") : e.addClass("is-hidden") : e.offset().left > a.offset().left + a.outerWidth() ? e.removeClass("is-hidden") : e.addClass("is-hidden")
	}
	t(e), u(window).on("scroll", function() {
		a || (a = !0, window.requestAnimationFrame ? requestAnimationFrame(function() {
			t(e)
		}) : setTimeout(function() {
			t(e)
		}, 100))
	}), e.each(function() {
		var e = u(this);
		! function(l, r, p, d, c) {
			l.on("mousedown vmousedown", function(e) {
				l.addClass("draggable"), r.addClass("resizable");
				var a = l.outerWidth(),
					s = l.offset().left + a - e.pageX,
					t = p.offset().left,
					n = p.outerWidth(),
					o = t + 10,
					i = t + n - a - 10;
				l.parents().on("mousemove vmousemove", function(e) {
					f || (f = !0, window.requestAnimationFrame ? requestAnimationFrame(function() {
						m(e, s, a, o, i, t, n, r, d, c)
					}) : setTimeout(function() {
						m(e, s, a, o, i, t, n, r, d, c)
					}, 100))
				}).on("mouseup vmouseup", function(e) {
					l.removeClass("draggable"), r.removeClass("resizable")
				}), e.preventDefault()
			}).on("mouseup vmouseup", function(e) {
				l.removeClass("draggable"), r.removeClass("resizable")
			})
		}(e.find(".cd-handle"), e.find(".cd-resize-img"), e, e.find('.cd-image-label[data-type="original"]'), e.find('.cd-image-label[data-type="modified"]'))
	}), u(window).on("resize", function() {
		s || (s = !0, window.requestAnimationFrame ? requestAnimationFrame(function() {
			n(e)
		}) : setTimeout(function() {
			n(e)
		}, 100))
	})
}), $(function() {

	$("#contact-form").on("submit", function(event) {
		event.preventDefault();
	  
		$.ajax({
		  url: "/",
		  type: "POST",
		  data: new FormData(this),
		  processData: false,
		  contentType: false,
		  success: function() {
			$("#contact-form")[0].reset(), $("#messages").text("Thank you for your submission, we'll get back to you soon :)"), console.log(e)
		  },
		  error: function(xhr, status, error) {
			$("#messages").text(error);
		  }
		});
	  });
	  
	$("#contact-form").on("submit", function(e) {
		e.preventDefault(), $.ajax({
			type: "POST",
			url: $(this).attr("action"),
			data: $(this).serialize(),
			headers: {
				Accept: "application/json"
			},
			success: function(e) {
				$("#contact-form")[0].reset(), $("#messages").text("Thank you for your submission, we'll get back to you soon :)"), console.log(e)
			}
		})
	})
	
	// Upload buttons
	const maxFileSize = 8 * 1024 * 1024; // 2 MB in bytes
	$('.upload-program').on('click', function() {
		$('#inputProgram').click();
	});
	$('#inputProgram').on('change', function() {
		const file = this.files[0]; // Get the selected file
            $('#messages').text(''); // Clear any previous error message

            if (file) {
                // Check file size
                if (file.size > maxFileSize) {
                    $('#messages').text('File size exceeds 8 MB limit.');
                    $(this).val(''); // Clear the file input
                } else {
                    const fileName = file.name;
                    $('.upload-program-file').text(`File: ${fileName}`);
                }
            }
	
	});

	$('.upload-floorplan').on('click', function() {
		$('#inputFloorplan').click();
	});
	$('#inputFloorplan').on('change', function() {
		const file = this.files[0]; // Get the selected file
            $('#messages').text(''); // Clear any previous error message

            if (file) {
                // Check file size
                if (file.size > maxFileSize) {
                    $('#messages').text('File size exceeds 8 MB limit.');
                    $(this).val(''); // Clear the file input
                } else {
                    const fileName = file.name;
                    $('.upload-floorplan-text').text(`File: ${fileName}`);
                }
            }
		
	});
});
// preloader
$(window).on("load", function() {
	$preloader = $(".loading"), $loader = $preloader.find(".loading-text"), $loader.fadeOut(), $preloader.delay(450).fadeOut("slow")
});
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};
TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
	var that = this;
	var delta = 200 - Math.random() * 100;
	if (this.isDeleting) {
		delta /= 2;
	}
	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}
	setTimeout(function() {
		that.tick();
	}, delta);
};
window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};