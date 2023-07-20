export let isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

export function removeClasses(array, className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
}

export function placeholder(type, placeholder) {
  const input = document.querySelector(`input[type="${type}"]`);

  input.addEventListener("focus", function() {
    this.removeAttribute("placeholder");
  });

  input.addEventListener("blur", function() {
    if (!this.value) {
      this.setAttribute("placeholder", `${placeholder}`);
    }
  });
}

export function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function(e) {
      if (e.target.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        document.querySelector(".menu__list").classList.toggle("_active");
        document.querySelector(".header").classList.toggle("_active");
        document.querySelector("body").classList.toggle("_locked");
      }
    });
  }
}

export async function logJSONData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
}

export function stickyHeader() {
  const header = document.querySelector(".header");
  let scrollPosition = window.scrollY;
  let previousScrollPosition = scrollPosition;
 
  function stickyCallBack() {
    const currentScrollPosition = window.scrollY;
    const headerMenuHeight = document.querySelector(".menu__list").offsetHeight;
    const headerHeight = header.offsetHeight;

    if (currentScrollPosition > previousScrollPosition) {
      
      if (this.window.innerWidth > 768) {
        header.style.top = `-${headerHeight - headerMenuHeight - 48}px`;
      } else if(this.window.innerWidth <  768 && !document.body.classList.contains("_locked")) {
        header.style.top = `-${headerHeight}px`; 
      }

      header.classList.add("hidden");
    } else {

      if (this.window.innerWidth > 768) {
        header.style.borderBottom = "1px solid var(--lines-co)"
        if(currentScrollPosition === 2) header.style.removeProperty("border-bottom");
      } else {
        
      }
      header.style.removeProperty("top");
      header.classList.remove("hidden");
    }
    previousScrollPosition = currentScrollPosition;
  }

  window.addEventListener("scroll", stickyCallBack);
  window.addEventListener("resize", stickyCallBack);
}
