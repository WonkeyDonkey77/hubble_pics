var count = 0; //counter for image array index
var images = ['http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/30064/STSCI-H-p1721a-m-2000x2000.png',
              'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/29432/1920x1200_wallpaper.jpg',
              'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/29438/2560x1024_wallpaper.jpg',
              'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/29950/STSCI-H-p1708a-w-1920x1200.png',
              'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/29462/2560x1024_wallpaper.jpg',
              'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/29468/2560x1024_wallpaper.jpg']
console.log(images);

//set initial backgroud
$("#pictureFrame").css('background-image', 'url('+images[count]+')');

//if click left - count backwards through image array 1 at a time
function left_click(){
    if (count>0) {
      count = count - 1;
  } else {
    count = images.length-1;
  }
  $("#pictureFrame").css('background-image', 'url('+images[count]+')');
  document.getElementById("picture").src= images[count];
}

//if click right - count forwards through image array one at a time
function right_click(){
  if (count<images.length-1) {
      count = count + 1;
  } else {
    count = 0;
  }
  $("#pictureFrame").css('background-image', 'url('+images[count]+')');
  document.getElementById("picture").src= images[count];
}
