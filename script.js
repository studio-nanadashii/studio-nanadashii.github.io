(function () {
  $(document).on("click", "#closeWorkModal", function () {
    $("#workModal").hide();
  });

  $(document).on("click", ".view-work", function () {
    var img = $(this).find("img").attr("src");
    $("#workModalImage").attr("src", img);
    $("#workModalContent").html($(this).find(".content").html());
    $("#workModal").show();
  });
})(jQuery);
