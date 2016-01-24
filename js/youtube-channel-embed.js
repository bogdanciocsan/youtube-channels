var list;
function formatDate(value) {
    var month = Number(value.getMonth()) + 1;
    return value.getDate() + "/" + month + "/" + value.getFullYear();
}

$(document).ready(function () {
    var $youtubeChannel = $("#youtube-channel-embed");
    var maximumNumberOfVideos = $youtubeChannel.data("videos-count") || 2;
    var publishedDateText = $youtubeChannel.data("published-date-text");
    var readMoreText = $youtubeChannel.data("read-more-text");
    var channelId = $youtubeChannel.data("channel-id");
    var channelApiKey = $youtubeChannel.data("api-key");
    
    if (channelId && channelApiKey) {
    var jsonURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video%20&channelId=" + channelId + "&key=" + channelApiKey ;

    $.ajax({
        url: jsonURL,
        cache: false,
        dataType: "jsonp",
        success: function(data) {
            var response = data;
            for (var i = 0; i < maximumNumberOfVideos; i++) {
                if (response.items[i]) {
                    var firstClass = i === 0 ? "first" : "";
                    var currentVideoIdUrl = "https://www.youtube.com/watch?v=" + response.items[i].id.videoId;
                    var currentItem = response.items[i].snippet;
                    var currentItemDate = new Date(currentItem.publishedAt);
                    var title = "<h4 class='col-sm-12 title'><a href='" + currentVideoIdUrl + "' class='pull-left col-sm-8 col-xs-12' target='_blank'>" + currentItem.title + "</a><span class='pull-right date text-right col-sm-4 col-xs-12'>" + publishedDateText + " " + formatDate(currentItemDate) + "</span></h4>";
                    var description = "<div class='description col-xs-8 col-sm-7'><p>" + currentItem.description + "</p><a href='" + currentVideoIdUrl + "' class='btn btn-primary' target='_blank'>" + readMoreText + "</a></div>";
                    var thumbnailHigh = "<a href='" + currentVideoIdUrl + "' class='col-xs-4 col-sm-5' target='_blank'><img src='" + currentItem.thumbnails.high.url + "' class='img-responsive' /></a>";
                    $youtubeChannel.append("<div class='row'><div class='youtube-thumbnail " + firstClass + "'>" + title + thumbnailHigh + description + "</div></div>");
                }
            }
        }
    });

}
    else {
       $youtubeChannel.text("Remember to add api key and channel id");
    }
});