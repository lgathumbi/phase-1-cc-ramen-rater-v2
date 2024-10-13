// index.js

// Callbacks
const handleClick = (ramen) => {
  console.log(ramen);

    const detailDiv = document.getElementById('ramen-detail');

    //Update the elements directly in the #ramen-detail div
    const detailImg = detailDiv.querySelector('.detail-image');
    detailImg.src = ramen.image;
    detailImg.alt = ramen.name;

    const detailName = detailDiv.querySelector('.name');
    detailName.textContent = ramen.name;

    const detailRestaurant= detailDiv.querySelector('.restaurant');
    detailRestaurant.textContent = ramen.restaurant;

    const detailRating= document.querySelector('#rating-display');
    detailRating.textContent = ramen.rating;

    const detailComment = document.querySelector('#comment-display');
    detailComment.textContent = ramen.comment;
  
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');

  form.addEventListener('submit', (event) => {
   event.stopImmediatePropagation()
      event.preventDefault(); 

      const newRamen = {
          name: form.name.value,
          restaurant: form.restaurant.value,
          image: form.image.value,
          rating: form.rating.value,
          comment: form['new-comment'].value,
      };
      console.log(newRamen)
      const menuHolder = document.getElementById('ramen-menu');
      let menuImg = document.createElement('img');
        menuImg.src= newRamen.image;
        menuImg.onclick = e => handleClick(newRamen);
        menuHolder.appendChild(menuImg);
  });
};
const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    const menuHolder = document.getElementById('ramen-menu');
    data.forEach(element => {
      let menuImg = document.createElement('img');
      menuImg.src= element.image;
      menuImg.onclick = e => handleClick(element);
      menuHolder.appendChild(menuImg);
    });
    addSubmitListener();
  });
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
