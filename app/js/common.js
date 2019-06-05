'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
    var _ref;

    $('.burger').click(function () {
        var $this = $(this);
        $('body').toggleClass('main-nav--open');
    });

    $('.menu-list .root-item').each(function (i, el) {
        var $this = $(el);
        $this.find('.section-list').closest('.root-item').addClass('js__has-sub-menu');
    });

    if ($(window).width() < 820) {
        $('.js__has-sub-menu').click(function () {
            var $this = $(this);
            $this.toggleClass('js__sub-menu--open');
        });

        $('.section-list').prepend('<div class="back">Назад</div>');

        var phone = $('.header-phone.link-with-icon').clone();
        $('.menu-list').append(phone);

        $('.menu-list').append('<li class="root-item"><a href="http://www.parkcityhotel.ru/booking/" class="root-link">Бронирование</a></li>');
    }

    $('.events-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        slide: '.slider-item',
        responsive: [(_ref = {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        }, _defineProperty(_ref, 'breakpoint', 660), _defineProperty(_ref, 'settings', {
            slidesToShow: 1
        }), _ref)]

    });

    // if($(window).width() < 1000){
    //     var menuSlider = $('.b-slider.slider-detail ~ .b-content .content-menu').clone().addClass('js__slider-menu');
    //     $('.b-slider.slider-detail ~ .b-content .content-menu').closest('body').append(menuSlider);

    // }


    // var innerMenu = $('.section-list').clone();
    // $('.menu-list').append(innerMenu);

    (function () {
        $('.js-fancybox').fancybox({
            padding: 10,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    })();

    (function () {
        var $slider = $('.b-slider.slider-offers');

        if (!$slider.length) return;

        $slider.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            slide: '.slider-item',
            responsive: [{
                breakpoint: 660,
                settings: {
                    slidesToShow: 1
                }

            }]

        });
    })();

    (function () {
        var $slider = $('.b-slider.slider-main, .slider-main-mobile');

        if (!$slider.length) return;

        var $sliderNav = $('.b-slider.slider-nav');

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            slide: '.slider-item',
            asNavFor: $sliderNav
            /*customPaging: function() {
                return '<div class="slider-nav"><div class="slider-dot"></div></div>';
            }*/
        });

        // $(".")

        /*
        $sliderNav.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: $slider,
            dots: false,
            arrows: true,
            slide: '.nav-item',
            focusOnSelect: true,
            centerMode: true
        });
        */
    })();

    (function () {
        var $slider = $('.b-container .b-slider.slider-detail');

        if (!$slider.length) return;

        var $sliderNav = $('.b-slider.slider-nav');

        $slider.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            // arrows: true,
            slide: '.slider-item',
            asNavFor: $sliderNav,
            responsive: [{
                breakpoint: 660,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }

            }]
            /*customPaging: function() {
                return '<div class="slider-nav"><div class="slider-dot"></div></div>';
            }*/
        });

        $sliderNav.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: $slider,
            dots: false,
            arrows: true,
            slide: '.nav-item',
            focusOnSelect: true,
            centerMode: true
            // responsive: [
            //     {
            //       breakpoint: 660,
            //       settings: {
            //         arrows: true,
            //       }

            //     },
            //   ]
        });

        var $sliderGallery = $('.b-page > .b-slider.slider-detail');

        if (!$sliderGallery.length) return;

        var $sliderNav = $('.b-page > .b-slider.slider-nav');

        $sliderGallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            slide: '.slider-item',
            asNavFor: $sliderNav,
            responsive: [{
                breakpoint: 660,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }

            }]

        });

        $sliderNav.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: $slider,
            dots: false,
            arrows: true,
            slide: '.nav-item',
            focusOnSelect: true,
            centerMode: true
            // responsive: [
            //     {
            //       breakpoint: 660,
            //       settings: {
            //         arrows: true,
            //       }

            //     },
            //   ]
        });
    })();

    (function () {
        $('.js-show-text').click(function () {
            var $this = $(this);
            var $parent = $this.parents('.info-text');
            $parent.addClass('show-text');
        });
    })();

    (function () {
        $('.js-hide-text').click(function () {
            var $this = $(this);
            var $parent = $this.parents('.info-text');
            $parent.removeClass('show-text');
        });
    })();

    (function () {
        $('.js-show-staff').click(function () {
            var $this = $(this);
            var $parent = $this.parents('.staff-list');
            $parent.addClass('show-detail');
        });
    })();

    (function () {
        $('.js-hide-staff').click(function () {
            var $this = $(this);
            var $parent = $this.parents('.staff-list');
            $parent.removeClass('show-detail');
        });
    })();

    (function () {
        $('.js-show-detail-description').click(function () {
            var $this = $(this);
            var $detail = $this.parents('.b-detail');

            $detail.addClass('show-detail');
        });
    })();

    (function () {
        $('.js-hide-detail-description').click(function () {
            var $this = $(this);
            var $detail = $this.parents('.b-detail');

            $detail.removeClass('show-detail');
        });
    })();

    (function () {
        $('.js-show-gallery').click(function () {
            var $this = $(this);
            var $content = $this.parents('.b-content');

            $content.addClass('show-gallery');
        });
    })();

    (function () {
        $('.js-hide-gallery').click(function () {
            var $this = $(this);
            var $content = $this.parents('.b-content');

            $content.removeClass('show-gallery');
        });
    })();

    (function () {
        $('.js-show-detail-vacancy').click(function () {
            var $this = $(this);
            var $detail = $this.parents('.vacancy-item');

            $detail.addClass('show-detail');
        });
    })();

    (function () {
        $('.js-hide-detail-vacancy').click(function () {
            var $this = $(this);
            var $detail = $this.parents('.vacancy-item');

            $detail.removeClass('show-detail');
        });
    })();

    (function () {
        function getParameterByName(name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        $('.offer-btn').click(function () {
            var target = 'CLICK_OFFER_' + getParameterByName('offer_id', $(this).attr('href'));
            yaCounter441413.reachGoal(target);
        });

        $('#sauna-submit').click(function () {
            yaCounter441413.reachGoal('BookingSauna');
        });

        $('#sauna-request').click(function () {
            yaCounter441413.reachGoal('ClickButtonBookingSauna');
        });
    })();
});

$(window).load(function () {

    (function () {
        $('.b-menu .item-booking').click(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $form = $this.children('.b-search-form');
            $form.toggleClass('form-shown');
        });
    })();

    (function () {
        if ($("#map").length) {
            ymaps.ready(init);
        }

        var point = [55.150391, 61.363648];

        function init() {
            var map = new ymaps.Map('map', {
                center: point,
                zoom: 10
            });

            /*var mapHint = $("#map-hint").html(),
                mapBalloon = $("#map-balloon").html();*/

            var object = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: point /*,
                                       properties: {
                                          balloonContentBody: mapBalloon,
                                          hintContent: mapHint
                                       }*/ } }, {
                iconLayout: 'default#image',
                iconImageSize: [122, 118],
                iconImageOffset: [-61, -118],
                iconImageHref: "/upload/ui/marker.png"
            });

            map.geoObjects.add(object);
            map.behaviors.disable('scrollZoom');
        }
    })();

    // инициализация форм
    (function () {
        angular.bootstrap('.b-form', ['form']);
        var $form = $('.b-form');

        $form.addClass('state-shown');
    })();

    (function () {
        var previewImage = document.querySelector(".preview-image");
        var popupBlock = document.querySelector(".popup-block");
        var popupBlockClose = document.querySelector(".popup-block__close");
        var popupBg = document.querySelector(".popup-block__bg");

        if (previewImage) {
            previewImage.addEventListener('click', function () {
                if (!popupBlock.classList.contains('popup-block__open')) {
                    popupBlock.classList.add('popup-block__open');
                    $('body').addClass('js__popup-open');
                }
            });
            popupBlockClose.addEventListener('click', function () {
                if (popupBlock.classList.contains('popup-block__open')) {
                    popupBlock.classList.remove('popup-block__open');
                    $('body').removedClass('js__popup-open');
                }
            });

            popupBg.addEventListener('click', function () {
                if (popupBlock.classList.contains('popup-block__open')) {
                    popupBlock.classList.remove('popup-block__open');
                }
            });
        }
    })();
});

angular.module('form', ['ui.bootstrap']).constant('lang', angular.element.find('html')[0].getAttribute('lang')).config(['datepickerConfig', 'datepickerPopupConfig', function (datepickerConfig, datepickerPopupConfig) {
    datepickerPopupConfig.showButtonBar = false;
    datepickerConfig.showWeeks = false;
    datepickerConfig.startingDay = 1;
    datepickerConfig.minDate = new Date();
}]).controller('formCtrl', ['$scope', '$http', function ($scope, $http) {
    var delay = 1000;

    $scope.data = {};
    $scope.state = '';
    $scope.loading = false;

    $scope.goToBooking = true;

    $scope.states = {
        default: 'DEFAULT',
        success: 'SUCCESS',
        noData: 'NO_DATA',
        validationError: 'VALIDATION_ERROR',
        saveError: 'SAVE_ERROR'
    };

    $scope.submit = function () {
        $scope.loading = true;

        setTimeout(function () {
            $scope.submitted = true;

            var data = angular.copy($scope.data);
            data.lang = $scope.lang;
            if ($scope.offer) {
                data.offer = $scope.offer;
            }
            if ($scope.bookingSauna) {
                yaCounter441413.reachGoal('BookingSauna');
            }

            var tmpDate = data.date;

            data.date = new Date(data.date);

            console.log(data);

            var d = data.date.getDate() < 10 ? '0' + data.date.getDate() : data.date.getDate();
            var m = data.date.getMonth() + 1 < 10 ? '0' + (data.date.getMonth() + 1) : data.date.getMonth() + 1;
            data.date = d + '-' + m + '-' + data.date.getFullYear();

            data.date = tmpDate;

            $http.post($scope.submitURL, data).success(function (response) {
                $scope.loading = false;
                $scope.state = response.state;

                if (response.success) {
                    $scope.success = true;
                } else {
                    $scope.error = response.message;
                }
            }).error(function () {
                $scope.loading = false;
                $scope.state = $scope.states.saveError;
            });
        }, delay);
    };
}]).directive('formatdate', function (dateFilter) {
    return {
        require: 'ngModel',
        link: function link(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (viewValue) {
                return dateFilter(viewValue, 'dd.MM.yyyy');
            });
        }
    };
}).directive('check', ['range', 'lang', function (range, lang) {
    return {
        restrict: 'A',
        templateUrl: function templateUrl(elem, attr) {
            return '/bitrix/templates/common/ajax/tpl/' + attr.tpl + '.php?lang=' + lang;
        },
        scope: {
            data: '=',
            model: '=model',
            list: '=list'
        },
        link: function link(scope) {
            scope.checked = [];
            scope.data[scope.model] = '';

            scope.selectValue = function (value) {
                var index = scope.checked.indexOf(value);
                if (index == -1) {
                    scope.checked.push(value);
                } else {
                    scope.checked.splice(index, 1);
                }

                scope.data[scope.model] = scope.checked.join();
            };
        }
    };
}]).directive('day', ['lang', function (lang) {
    return {
        restrict: 'A',
        templateUrl: '/bitrix/templates/common/ajax/tpl/day.php?lang=' + lang,
        scope: {
            data: '=',
            hall: '='
        },
        link: function link(scope) {
            scope.dayStart = [];
            scope.dayEnd = [];
            scope.daycount = 1;
            scope.range = function (min, max, step) {
                step = step || 1;
                var input = [];
                for (var i = min; i <= max; i += step) {
                    input.push(i);
                }return input;
            };

            scope.toHour = function (hourVal, minutesVal) {
                return hourVal + ":" + minutesVal;
            };

            scope.updateDay = function () {
                var result = '';
                for (var i = 1; i <= scope.daycount; i++) {
                    result += 'День ' + i.toString() + ' с ' + scope.toHour(scope.dayStart[i], "00") + ' до ' + scope.toHour(scope.dayEnd[i], "00") + '\r\n';
                }
                scope.data.day = result;
            };
        }
    };
}]).directive('state', ['lang', function (lang) {
    return {
        restrict: 'A',
        templateUrl: '/bitrix/templates/common/ajax/tpl/state.php?lang=' + lang,
        link: function link(scope, element, attrs) {
            scope.messages = scope.$eval(attrs.messages);
        }
    };
}]).service('range', function () {
    this.create = function (min, max, step) {
        var result = [];

        step = step || 1;
        for (var i = min; i <= max; i += step) {
            result.push(i);
        }return result;
    };
});
//# sourceMappingURL=common.js.map
