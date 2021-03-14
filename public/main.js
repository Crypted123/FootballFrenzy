// Javascript goes here
const testResponse = [{
  "imgsrc": "https://e2.365dm.com/21/03/384x216/skysports-leandro-trossard_5304600.jpg?20210314132152", "title": "Trossard gives Brighton vital win at Southampton ", "shortdesc": "Leandro Trossard's second-half strike provided a vital winner for Brighton to move three points clear of the relegation zone with a 2-1 victory at Southampton.", "link":
    "https://www.skysports.com/football/southampton-vs-brighton-and-hove-albion/report/429115"
}, {
  "imgsrc":
    "https://e0.365dm.com/21/03/384x216/skysports-xherdan-shaqiri-liverpool_5304533.jpg?20210314123127", "title": " Shaqiri: Liverpool have to be at the top ", "shortdesc": "Xherdan Shaqiri on his Liverpool best bits, the team's current problems and his hopes for the future. ", "link":
    "https://www.skysports.com/football/news/11669/12245787/xherdan-shaqiri-exclusive-interview-on-liverpools-struggles-this-club-has-to-be-successful-it-has-to-be-at-the-top"
}];

/**
 *  <div class="headline">
      <img src="" />
      <div class="title">Title</div>
      <div class="description">Description</div>
      <a href="#">Full story</a>
    </div>
 */
function transformHeadline(headline) {
  const { imgsrc, title, shortdesc, link } = headline;

  return '<div class="headline">' +
    // Image
    '<img src="' + imgsrc + '" alt=' + title + ' />' +
    // title of the story
    '<div class="title">' + title + '</div>' +
    // description of the story
    '<div class="description">' + shortdesc + '</div>' +
    // the link to the story
    '<a href="' + link + '" target="_blank">Full story</a>' +
    "</div>";
}

$(function () {
  const foo = "hello"
  console.log('<img src="' + foo + '" />')

  testResponse.forEach((item) => {
    $("#headlines").append(transformHeadline(item));
  });
});

