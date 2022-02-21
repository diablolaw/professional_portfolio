var str =
  "Im currently training to be a full-stack developer at University of Birmingham. Its a 6-month intense training for coding and covers both the theory and application of web development. The curriculum includes HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Java, Git, and more.";

var spans = "<span>" + str.split("").join("</span><span>") + "</span>";
$(spans)
  .hide()
  .appendTo("#css-typing")
  .each(function (i) {
    $(this)
      .delay(100 * i)
      .css({
        display: "inline",
        opacity: 0,
      })
      .animate(
        {
          opacity: 1,
        },
        100
      );
  });
