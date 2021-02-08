const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update all of the nav items
const navItems = document.querySelectorAll('nav a')
navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

// updating cta section
const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.ctaText')
cta.children[0].children[0].textContent = siteContent["cta"]["h1"]
cta.children[0].children[1].textContent = siteContent["cta"]["button"]
document.getElementById('cta-img').src = siteContent["cta"]["img-src"]

// updating main content section
// top content
const topContent = document.querySelector('.top-content')
topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"]
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"]
document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"]

// bottom content
const bottomContent = document.querySelector('.bottom-content')
bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"]
bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"]
bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"]
bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"]

// updating contact section
const contact = document.querySelector('.contact')
contact.children[0].textContent = siteContent["contact"]["contact-h4"]
contact.children[1].textContent = siteContent["contact"]["address"]
contact.children[2].textContent = siteContent["contact"]["phone"]
contact.children[3].textContent = siteContent["contact"]["email"]

// updating footer section
const footer = document.querySelector('footer')
footer.children[0].textContent = siteContent["footer"]["copyright"]