(function() {
    "use strict";
    function placeholder(type, placeholder) {
        const input = document.querySelector(`input[type="${type}"]`);
        input.setAttribute("placeholder", `${placeholder}`);
        input.addEventListener("focus", (function() {
            this.removeAttribute("placeholder");
        }));
        input.addEventListener("blur", (function() {
            if (!this.value) this.setAttribute("placeholder", `${placeholder}`);
        }));
    }
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (e.target.closest(".icon-menu")) {
                document.documentElement.classList.toggle("menu-open");
                document.querySelector(".menu__list").classList.toggle("_active");
                document.querySelector(".header").classList.toggle("_active");
                document.querySelector("body").classList.toggle("_locked");
            }
        }));
        window.addEventListener("resize", (() => {
            document.querySelector("body").classList.remove("_locked");
        }));
    }
    function stickyHeader() {
        const header = document.querySelector(".header");
        let scrollPosition = window.scrollY;
        let previousScrollPosition = scrollPosition;
        function stickyCallBack() {
            const currentScrollPosition = window.scrollY;
            const headerMenuHeight = document.querySelector(".menu__list").offsetHeight;
            const headerHeight = header.offsetHeight;
            if (currentScrollPosition > previousScrollPosition) {
                if (this.window.innerWidth > 768) header.style.top = `-${headerHeight - headerMenuHeight - 48}px`; else if (this.window.innerWidth < 768 && !document.body.classList.contains("_locked")) header.style.top = `-${headerHeight}px`;
                header.classList.add("hidden");
            } else {
                if (this.window.innerWidth > 768) {
                    header.style.borderBottom = "1px solid var(--lines-co)";
                    if (currentScrollPosition === 2) header.style.removeProperty("border-bottom");
                }
                header.style.removeProperty("top");
                header.classList.remove("hidden");
            }
            previousScrollPosition = currentScrollPosition;
        }
        window.addEventListener("scroll", stickyCallBack);
        window.addEventListener("resize", stickyCallBack);
    }
    var external_gsap_namespaceObject = require("gsap");
    var ScrollTrigger_namespaceObject = require("gsap/ScrollTrigger");
    function amimations() {
        let mm = external_gsap_namespaceObject.gsap.matchMedia();
        external_gsap_namespaceObject.gsap.registerPlugin(ScrollTrigger_namespaceObject.ScrollTrigger);
        const heroImagesArr = document.querySelectorAll(".hero__item");
        const heroContent = document.querySelectorAll(".hero__content");
        if (!heroImagesArr) return; else {
            mm.add("(min-width: 992px)", (() => {
                heroImagesArr.forEach(((el, i) => {
                    if (i === 0) external_gsap_namespaceObject.gsap.fromTo(el, {
                        y: 500
                    }, {
                        y: 0,
                        duration: 1
                    }); else external_gsap_namespaceObject.gsap.fromTo(el, {
                        y: -500
                    }, {
                        y: 0,
                        duration: 1
                    });
                }));
            }));
            mm.add("(max-width: 992px)", (() => {
                heroImagesArr.forEach(((el, i) => {
                    if (i === 0) external_gsap_namespaceObject.gsap.fromTo(el, {
                        x: 500
                    }, {
                        x: 0,
                        duration: 1
                    }); else external_gsap_namespaceObject.gsap.fromTo(el, {
                        x: -500
                    }, {
                        x: 0,
                        duration: 1
                    });
                }));
            }));
        }
        if (!heroContent) return; else {
            mm.add("(min-width: 992px)", (() => {
                external_gsap_namespaceObject.gsap.fromTo(heroContent, {
                    x: -500
                }, {
                    x: 0,
                    duration: 1
                });
            }));
            mm.add("(max-width: 992px)", (() => {
                external_gsap_namespaceObject.gsap.fromTo(heroContent, {
                    y: 500
                }, {
                    y: 0,
                    duration: 1
                });
            }));
        }
        const optionsItemsArr = document.querySelectorAll(".list-options__item");
        if (!optionsItemsArr) return; else external_gsap_namespaceObject.gsap.fromTo(optionsItemsArr, {
            scale: .5,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            stagger: .2,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: optionsItemsArr,
                start: "50% bottom"
            }
        });
        const favoritesImages = document.querySelector(".favorites__images");
        const favoritesContent = document.querySelector(".favorites__content");
        if (!favoritesImages) return; else external_gsap_namespaceObject.gsap.fromTo(favoritesImages, {
            x: -500,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: favoritesImages,
                start: "50% bottom"
            }
        });
        if (!favoritesContent) return; else external_gsap_namespaceObject.gsap.fromTo(favoritesContent, {
            x: 500,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: favoritesContent,
                start: "50% bottom"
            }
        });
        const stylesItem = document.querySelectorAll(".styles__item");
        if (!stylesItem) return; else stylesItem.forEach((el => {
            external_gsap_namespaceObject.gsap.fromTo(el, {
                scale: .5,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "20% bottom"
                }
            });
        }));
        const quoteCircle = document.querySelector(".quote__circle");
        const quote = document.querySelector(".quote__text");
        if (!quoteCircle) return; else external_gsap_namespaceObject.gsap.fromTo(quoteCircle, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: quoteCircle,
                start: "100% bottom"
            }
        });
        if (!quote) return; else external_gsap_namespaceObject.gsap.fromTo(quote, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            delay: .5,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: quote,
                start: "20 bottom"
            }
        });
    }
    amimations();
    window.addEventListener("click", (function(e) {}));
    menuInit();
    stickyHeader();
    placeholder("email", "Enter your email");
})();