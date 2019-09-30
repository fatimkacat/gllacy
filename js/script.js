// var toggles = document.querySelectorAll("body > [name=toggle]");
// var currentSlide = 0;
// var SLIDE_DURATION = 10000;
// var slideInterval = setInterval(nextSlide, SLIDE_DURATION);
var link = document.querySelector(".reply_popup");
var popup = document.querySelector(".reply");
var overlay = document.querySelector(".modal_overlay");
var close = popup.querySelector(".close");
// var popup_name = popup.querySelector("[name=name]");
// var popup_email = popup.querySelector("[name=email]");
// var popup_message = popup.querySelector("[name=message]");
// var storage_name = "";
// try {
//   storage_name = localStorage.getItem("popup_name");
// } catch (e) {}
// var storage_email = "";
// try { storage_email = localStorage.getItem("popup_email");
// } catch (e) {}

// function nextSlide() {
//     if (currentSlide == toggles.length - 1) {
//         currentSlide = 0;
//     } else {
//         currentSlide++;
//     }
//     toggles[currentSlide].checked = true;
// }

function open() {
    popup.classList.add("reply_popup");
    overlay.classList.add("overlay_popup");
};

function close_popup() {
    popup.classList.remove("reply_popup");
    overlay.classList.remove("overlay_popup");
    popup.classList.remove("error_popup");
}

var currentSlide = 0;
    var indexOfChecked = 0;
    for (var j = 0; j < toggles.length; j++) {
       toggles[j].addEventListener("click", function() {
           for (var t = 0; t < toggles.length; t++) {
               if (toggles[t].checked) {
                   indexOfChecked = t;
               }
           }
           currentSlide = indexOfChecked;
           clearInterval(slideInterval);
           slideInterval = setInterval(nextSlide, 4000);
       });
    }

link.addEventListener("click", function(event) {
    event.preventDefault();
    open();
    if (!popup_name.value) {
      popup_name.focus();
    } else if (!popup_email.value) {
      popup_email.focus();
    } else {
      popup_message.focus();
    }
});

popup.addEventListener("submit", function(event) {
    if (!popup_name.value || !popup_email.value || !popup_message.value) {
        event.preventDefault();
        popup.classList.remove("error_popup");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("error_popup");
        popup_email.classList.remove("error_color");
        popup_message.classList.remove("error_color");
        popup_name.classList.remove("error_color");
        if (!popup_name.value) {
          popup_name.classList.add("error_color");
        } else {
        popup_email.focus();
        }
        if (!popup_email.value) {
          popup_email.classList.add("error_color");
        } else {
          popup_message.focus();
        }
        if (!popup_message.value) {
          popup_message.classList.add("error_color");
        } else {
         }
} else {
    try {
    localStorage.setItem("popup_name", popup_name.value);
    localStorage.setItem("popup_email", popup_email.value);
    } catch (e) {}
}
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        close_popup();
    }
});

overlay.addEventListener("click", function(event) {
    close_popup();
});

close.addEventListener("click", function(event) {
    close_popup();
});
