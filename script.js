const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');
const popperButton = document.querySelector("#popper-button");
const popperPopup = document.querySelector("#popper-popup");
const popperInstance = Popper.createPopper(button, tooltip,{
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
            offset: [0, 10],
            },
        },
    ],
});
var popperInstance2 = Popper.createPopper(popperButton, popperPopup, {
    placement: "auto", //preferred placement of popper
    modifiers: [
      {
        name: "offset", //offsets popper from the reference/button
        options: {
          offset: [0, 10]
        }
      },
      {
        name: "flip", //flips popper with allowed placements
        options: {
          allowedAutoPlacements: ["right", "left", "top", "bottom"],
          rootBoundary: "viewport"
        }
      }
    ]
  });

  function showPopper() {
    popperPopup.setAttribute('data-show', '');
    popperInstance2.update();
  }
  
  function hidePopper() {
    popperPopup.removeAttribute('data-show');
  }
  
  function togglePopper() {
    if (popperPopup.hasAttribute("data-show")) {
      hidePopper();
      console.log("hide")
    } else {
        console.log("show")
      showPopper();
    }
  }
  popperButton.addEventListener("click", function (e) {
    e.preventDefault();
    togglePopper();
  });