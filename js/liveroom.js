


$(".skillbar").each(function(){
  $(this).find(".skillbar-title").animate({
    width:$(this).attr("date-parcent")
  },4000)

});



$(".skillbar-bar-parcent").each(function(){
  $(this).prop("counter",0).animate({
    counter:$(this).text()
  },{
    duration:4000,
    esaing:"swing",
    step:function(now){
      $(this).text(Math.ceil(now))
    }
  })
});


var wrapper = document.querySelector(".wrapper");
var text = document.querySelector(".text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 250 * i);
  }(i));
}








