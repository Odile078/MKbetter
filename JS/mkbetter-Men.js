//slideshow
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows defined
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 3000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      //  restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
//back end codes

// displaying and picking the questions

function render(data){
  var html = "<div class='comentBox'><div class='leftpanelImg'><img src='Images/userimg2.png'></div><div class='rightpanel surroundpanel'><div class='date'><span class='userinfo'> <a href='mkbetter-E-answer.html'>"+ data.name+"</a></span> "+ data.date+"</div><p>"+ data.body+"</p></div><div class='clear'></div></div><div class=' addopinion'></div>";
  
  $('#container').append(html);
}


$(document).ready(function(){
    var coment = [];
    if(!localStorage.comentData){
        localStorage.comentData = [];
    }else{
        coment = JSON.parse(localStorage.comentData);
    }
     
  
  for(var i=0; i<coment.length;i++){
      render(coment[i]); 
  }
  $('#addComent').click(function(){
      var addObj = {
          "name":$('#name').val(),
          "date":$('#date').val(),
          "body":$('#bodyText').val()
      };
      
      coment.push(addObj);
      localStorage.comentData = JSON.stringify(coment);
      render(addObj);
      $('#name').val('');
      $('#date').val('dd/mm/yyyy');
      $('#bodyText').val('');
  });
  
  
  
  
});
