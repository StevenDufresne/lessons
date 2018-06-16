var myImg = document.getElementById("photos");

for(var i =0; i < 3; i++) {
  var div = document.createElement('div');
  var img = document.createElement('img');

  div.className = "carousel-item";
  img.src = "imgs/" + i + ".jpg";
  img.className = "d-block w-100"

  if(i == 0){
  	div.className += " active";
  }

  div.appendChild(img);
  myImg.appendChild(div)
}