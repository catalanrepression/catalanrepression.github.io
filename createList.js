$(function() {
  $("document").ready(function() {
    var pictures = [];
    $.getJSON("data.json", function(data) {
      $.each(data, function(i, pic) {
        var picture = `<div class="col-sm-6 col-md-4">
				<div class="thumbnail">
					<a href="${pic.tweet}" target="_blank" rel="noopener noreferrer">
						<img src="${pic.imatge}">
					</a>
					<div class="caption">
						<p>${pic.text}</p>
					</div>
				</div>
            </div>`;
        pictures.push(picture);
      });
    })
      .done(function() {
        $(".row").html(pictures);
      })
      .fail(function(e) {
        console.log("error", e);
      });
  });
});
