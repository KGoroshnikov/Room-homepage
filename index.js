var image_names = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials'];
var image_descriptions = ['We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];

var preloadedImages_desktop = [];
for(let i = 0; i < 3; i++){ // preload images
  let temp = new Image();
  temp.src = "images/desktop-image-hero-" + (i + 1) + ".jpg";
  preloadedImages_desktop.push(temp);
}

var preloadedImages_mobile = [];
for(let i = 0; i < 3; i++){ // preload images
  let temp = new Image();
  temp.src = "images/mobile-image-hero-" + (i + 1) + ".jpg";
  preloadedImages_mobile.push(temp);
}

var currentImg_ID = 0;
var currentImg = document.getElementById("main-img");
var imgName = document.getElementById("main-name");
var imgDescription = document.getElementById("main-description");

function changeImg_desktop(a){
  currentImg_ID += a;
  if (currentImg_ID < 0) currentImg_ID = 2;
  else if (currentImg_ID > 2) currentImg_ID = 0;

  imgName.textContent = image_names[currentImg_ID];
  imgDescription.textContent = image_descriptions[currentImg_ID];
  currentImg.src = preloadedImages_desktop[currentImg_ID].src;
}

function changeImg_mobile(a){
  currentImg_ID += a;
  if (currentImg_ID < 0) currentImg_ID = 2;
  else if (currentImg_ID > 2) currentImg_ID = 0;

  imgName.textContent = image_names[currentImg_ID];
  imgDescription.textContent = image_descriptions[currentImg_ID];
  currentImg.style.content = "url(" + preloadedImages_mobile[currentImg_ID].src + ")";
}
