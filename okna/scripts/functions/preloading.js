var preloading;

preloading = function() {
  var body, preloader;
  preloader = document.createElement('div');
  preloader.style.backgroundColor = 'white';
  preloader.className = 'preloader';
  preloader.innerHTML = "<div class='preloader__body' id='spin'></div>";
  body = document.querySelector('body');
  return body.appendChild(preloader);
};

preloading();
