//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  //javascript for responsive navigation sidebar menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a")
  
  menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  
  //javascript for scroll to top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  //javascript for scroll back to top on click scroll-to-top button
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  //javascript for reveal website elements on scroll
  window.addEventListener("scroll", reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }
  
  
  
  const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
  
  accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
      
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
      // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      //   currentlyActiveAccordionItemHeader.classList.toggle("active");
      //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      // }
  
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
      else {
        accordionItemBody.style.maxHeight = 0;
      }
      
    });
  });
  //
  /* const items = document.querySelectorAll('.accordion button');
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
  
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach((item) => item.addEventListener('click', toggleAccordion)); */

  ////////////////Numbers go uppp//////

  function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    return (coords.top > 0 && coords.top < windowHeight) || (coords.bottom < windowHeight && coords.bottom > 0);
  }
  
  function countUp(finalValue, element) {
    let currentNumber = 0;
    const increment = finalValue / 200; // Adjust for smooth animation
    const counter = setInterval(() => {
      currentNumber += increment;
      if (currentNumber > finalValue) {
        clearInterval(counter);
        element.textContent = finalValue.toLocaleString() + (element.id === 'aum-count' ? 'B+' : '+');
      } else {
        element.textContent = Math.floor(currentNumber).toLocaleString() + (element.id === 'aum-count' ? 'B+' : '+');
      }
    }, 10);
  }
  
  function countUpDecimal(finalValue, element, increment, suffix = '') {
    let currentNumber = 0.0;
    const counter = setInterval(() => {
      currentNumber += increment;
      if (currentNumber > finalValue) {
        currentNumber = increment; // Restart after reaching finalValue
      }
      element.textContent = currentNumber.toFixed(1) + suffix;
    }, 100); // Adjust interval speed as needed
  }
  
  function checkVisibilityAndCount() {
    const statsSection = document.getElementById('statistics');
    const investmentsCountElement = document.getElementById('investments-count');
    const aumCountElement = document.getElementById('aum-count');
    const yearsCountElement = document.getElementById('years-count');
  
    if (isVisible(statsSection) && !statsSection.classList.contains('counted')) {
      countUp(parseInt(investmentsCountElement.dataset.count), investmentsCountElement); // Integer count for "States Covered"
      countUpDecimal(2.5, aumCountElement, 0.1, 'B+'); // Decimal count for "Billion Insured"
      countUp(parseInt(yearsCountElement.dataset.count), yearsCountElement); // Integer count for "Years of Experience"
      statsSection.classList.add('counted');
    }
  }
  
  window.addEventListener('scroll', checkVisibilityAndCount);
  checkVisibilityAndCount();
  
  
  