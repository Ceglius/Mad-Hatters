import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function amimations() {
  let mm = gsap.matchMedia();
  gsap.registerPlugin(ScrollTrigger);

  // hero section
  const heroImagesArr = document.querySelectorAll(".hero__item");
  const heroContent = document.querySelectorAll(".hero__content");

  if (!heroImagesArr) return;
  else {
    mm.add("(min-width: 992px)", () => {
      heroImagesArr.forEach((el, i) => {
        if (i === 0) {
          gsap.fromTo(el, { y: 500 }, { y: 0, duration: 1 });
        } else {
          gsap.fromTo(el, { y: -500 }, { y: 0, duration: 1 });
        }
      });
    });
    mm.add("(max-width: 992px)", () => {
      heroImagesArr.forEach((el, i) => {
        if (i === 0) {
          gsap.fromTo(el, { x: 500 }, { x: 0, duration: 1 });
        } else {
          gsap.fromTo(el, { x: -500 }, { x: 0, duration: 1 });
        }
      });
    });
  }

  if (!heroContent) return;
  else {
    mm.add("(min-width: 992px)", () => {
      gsap.fromTo(heroContent, { x: -500 }, { x: 0, duration: 1 });
    });
    mm.add("(max-width: 992px)", () => {
      gsap.fromTo(heroContent, { y: 500 }, { y: 0, duration: 1 });
    });
  }

  // options section
  const optionsItemsArr = document.querySelectorAll(".list-options__item");
  if (!optionsItemsArr) return;
  else {
    gsap.fromTo(
      optionsItemsArr,
      { scale: 0.5, opacity: 0 }, // From properties
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: optionsItemsArr,
          start: "50% bottom",
        },
      }
    );
  }

  // favorites aniamtion
  const favoritesImages = document.querySelector(".favorites__images");
  const favoritesContent = document.querySelector(".favorites__content");

  if (!favoritesImages) return;
  else {
    gsap.fromTo(
      favoritesImages,
      { x: -500, opacity: 0 }, // From properties
      {
        x: 0,
        opacity: 1,

        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: favoritesImages,
          start: "50% bottom",
        },
      }
    );
  }

  if (!favoritesContent) return;
  else {
    gsap.fromTo(
      favoritesContent,
      { x: 500, opacity: 0 }, // From properties
      {
        x: 0,
        opacity: 1,

        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: favoritesContent,
          start: "50% bottom",
        },
      }
    );
  }

  // styles section
  const stylesItem = document.querySelectorAll(".styles__item");
  if (!stylesItem) return;
  else {
    stylesItem.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.5, opacity: 0 }, // From properties
        {
          scale: 1,
          opacity: 1,

          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "20% bottom",
          },
        }
      );
    });
    }
    
    // quote section
    const quoteCircle = document.querySelector('.quote__circle');
    const quote = document.querySelector('.quote__text');
    if (!quoteCircle) return;
    else {
      gsap.fromTo(
        quoteCircle,
        { scale:0, opacity: 0 }, // From properties
        {
          scale: 1,
          opacity: 1,
  
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteCircle,
            start: "100% bottom",
          },
        }
      );
    }

    if (!quote) return;
    else {
      gsap.fromTo(
        quote,
        { scale:0, opacity: 0 }, // From properties
        {
          scale: 1,
          opacity: 1,
          delay: 0.5,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quote,
            start: "20 bottom",
          },
        }
      );
    }
}

amimations();
