window.addEventListener("DOMContentLoaded", () =>{
   
    let cards = document.querySelectorAll(".layout__card");

    cards.forEach(card => {

        let btn = document.createElement("button");
        let text = document.createTextNode("Delete card");

        btn.classList.add("content__btn");
        btn.appendChild(text);

        card.children[1].appendChild(btn);

        //hover

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "darkred";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "transparent";
  });


    });




});