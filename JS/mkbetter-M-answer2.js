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


function bring(data){
  var html = "<div class='answercomentBox'><div class='answerleftpanelImg'><img src='Images/userimg2.png'></div><div class='answerrightpanel answersurroundpanel'><div class='answerdate'>Coment By, <span class='answeruserinfo'> "+ data.uname+"</span> </div><p>"+ data.ubody+"</p></div><div class='clear'></div></div><div class=' addopinion'></div>";
  
  $('#Ccontainer').append(html);
}

$(document).ready(function(){
    
    $("#showcoment").click(function(){
        $(".Cform").show();
        });
    $("#hide").click(function(){
        $(".Cform").hide();
        });
    $("#showcoment2").click(function(){
        $(".Cform").show();
        });
    $("#hide2").click(function(){
        $(".Cform").hide();
        });
    
    var Ucoment = [];
    if(!localStorage.UcomentData){
        localStorage.UcomentData = [];
    }else{
        Ucoment = JSON.parse(localStorage.UcomentData);
    }
     
  
  for(var i=0; i<Ucoment.length;i++){
      bring(Ucoment[i]); 
  }
  $('#Csubmit').click(function(){
      var addObj = {
          "uname":$('#Cname').val(),
        
          "ubody":$('#Cmessage').val()
      };
      
      Ucoment.push(addObj);
      localStorage.UcomentData = JSON.stringify(Ucoment);
      bring(addObj);
      $('#Cname').val('');
      
      $('#Cmessage').val('');
  });
  
  
  
  
});
