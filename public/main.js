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

// we this do determine when the page has finished loading
$(function () {

  // We are getting data from the news api
  $.getJSON('/news')
  // We have finished getting the data
  .done((data) => {
    // data will be formatted like {'articles': [ { /* news article */} ]}
    data.articles.forEach((item) => {
      $("#headlines").append(transformHeadline(item));
    });
  })
});

