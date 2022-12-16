const accordionBtns = document.querySelectorAll(".item-header");
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
