const input = document.getElementById("input");
const cursor = document.getElementById("cursor");

document.getElementById('input').addEventListener('keydown', function() {
    document.getElementById('cursor').style.display = 'block';
});
  
document.getElementById('input').addEventListener('blur', function() {
    document.getElementById('cursor').style.display = 'none';
});

  
function updateCursor() {
    var inputRect = input.getBoundingClientRect();
    var cursorRect = cursor.getBoundingClientRect();
  
    cursor.style.left = inputRect.right - cursorRect.width / 2 + "px";
    cursor.style.top = inputRect.top + "px";
}
  
document.getElementById("input").addEventListener("input", updateCursor);
document.getElementById("input").addEventListener("keydown", updateCursor);

document.addEventListener('keydown', function() {
  var cursor = document.getElementById('cursor');
  cursor.style.display = 'none';
});

let inputValue;

setInterval(function() {
  inputValue = document.getElementById("input").value;
}, 10);

document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    if (inputValue === "blog") {
      window.href("https://blog.avunit.tk/", "_blank");
    } else if (inputValue === "about") {
      window.href("https://blog.avunit.tk/posts/whoami/", "_blank");
    } else if (inputValue === "retro") {
      window.href("https://coolsite.avunit.tk/", "_blank");
    } else if (inputValue === "uptime") {
      window.href("https://uptime.avunit.tk/", "_blank");
    } else if (inputValue === "rickroll") {
      window.href("https://troll.avunit.tk/", "_blank");
    } else if (inputValue === "gitfolio") {
      window.href("https://gitfolio.avunit.tk/", "_blank");
    } else if (inputValue === "github") {
      window.href("https://github.com/avunit1", "_blank");
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {  // Check if enter key was pressed
    document.getElementById('input').value = "";  // Clear text in input element
    document.getElementById('cursor').style.opacity = "1";  // Make cursor reappear
  }
});
