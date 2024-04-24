document.addEventListener("DOMContentLoaded", start);

content = [
  {
    description:
      
  },
  {
    description:
      
    image: "Images/azureflute.png",
  },
];

function start() {
  /* the only div without an image so process separately*/
  let cellOneDiv = document.querySelector(".cell-one");
  cellOneDiv.textContent = "1";

    let counter = 0;
  content.forEach((content) =>{

      counter += 1;
  });
    let cellOnePDiv = document.querySelector(".cell-one-p");
  cellOnePDiv.textContent = content[0].description;

  let file = content[0].image;
  let imageTag = document.createElement("image");
  imageTag.setAttribute("href", file);

  let cellTwoDiv = document.querySelector(".cell-two");
  cellTwoDiv.textContent = "2";

  let cellTwoPDiv = document.querySelector(".cell-two-p");
  cellTwoPDiv.textContent = content[1].description;

  let cellThreeDiv = document.querySelector(".cell-three");
  cellThreeDiv.textContent = "3";
}
