$(document).ready(function () {

var rssUrls = ["http://rss.cnn.com/rss/cnn_topstories.rss", "http://feeds.bbci.co.uk/news/rss.xml?edition=int", "http://america.aljazeera.com/content/ajam/articles.rss", "http://www.scmp.com/rss/91/feed"];

   $('#test').rssfeed('http://rss.cnn.com/rss/cnn_topstories.rs', {
     limit: 5
   });
 });