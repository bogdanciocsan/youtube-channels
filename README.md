# youtube-channels
Using youtube data api, I created a simple embed script that works with data tags 

I currently use my own API key in the example. You can obtain a new API key by following the instructions on the youtube website: https://developers.google.com/youtube/registering_an_application

I will probably add templating in the future. 

Dependencies: jQuery 1.9+

In my example I used bootstrap as a framework. Once I will add templating, it will be possible to use without any css framework.

The most important part happens here:

<div id="youtube-channel-embed" class="youtube-channel"
     data-published-date-text='Published on'
     data-read-more-text='Watch the video'
     data-channel-id='UC-RakYU-f2yvmYoSVfR011w'
     data-api-key='AIzaSyBlbTV_gJI7tAItKLvNpdk5oK4fAOVYALY'
     data-videos-count='4'>
</div>

data-channel-id and data-api-key are required in order for to get data from Youtube. 
