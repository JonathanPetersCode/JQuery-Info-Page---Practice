const $odd= $("a:odd");
const $secureLinks = $("a[href^='https://']");
const $pdfs= $("a[href$='.pdf']") 
const $checkBox = $("<label><input type='checkbox'> Allow PDF downloads</label>")                      

$secureLinks.attr("target", "_blank")
$pdfs.attr("download", true);

$secureLinks.addClass("secure");
$pdfs.addClass("pdf");

$pdfs.on("click", function(event){
  if($(":checked") === 0){
      event.preventDefault();
      alert("Please check the box to allow .pdf downaloads.");
  }
})

$("#links").append($checkBox);