// Initialize app
var app = new Framework7;

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add main view
var viewMain = app.addView('#view-main');

// Declare pullToRefresh
var pullToRefreshPosts = $$('#content-posts');

// When pullToRefresh is called
pullToRefreshPosts.on('refresh', function (e) {
  // Simulation of an Ajax request, put your real Ajax request here
  setTimeout(function(){
    $$('#post-list').prepend(
      '<li>'+
        '<a href="post.html">'+
          '<div class="post-thumbnail"><img src="img/thumbnails/image14.jpg"></div>'+
          '<div class="post-infos">'+
            '<div class="post-title"><span>Wow, pull-to-refresh seems to work well !</span></div>'+
            '<div class="post-category green">Business</div>'+
            '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
          '</div>'+
        '</a>'+
      '</li>'
    );
    app.pullToRefreshDone(pullToRefreshPosts);
  }, 1500);
});

// isLoading infinite-scroll
var isLoading = false;

// When infiniteScroll is called
$$('#content-posts').on('infinite', function () {
  // Exit, if infiniteLoading in progress
  if (isLoading) return;
  // Set loading true
  isLoading = true;

  // Simulation of an Ajax request, put your real Ajax request here
  setTimeout(function(){
    $$('#post-list').append(
      '<li>'+
        '<a href="post.html">'+
          '<div class="post-thumbnail"><img src="img/thumbnails/image11.jpg"></div>'+
          '<div class="post-infos">'+
            '<div class="post-title"><span>Ut enim ad minim veniam, quis nostrud</span></div>'+
            '<div class="post-category green">Business</div>'+
            '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
          '</div>'+
        '</a>'+
      '</li>'+
      '<li>'+
        '<a href="post.html">'+
          '<div class="post-thumbnail"><img src="img/thumbnails/image12.jpg"></div>'+
          '<div class="post-infos">'+
            '<div class="post-title"><span>Laboris nisi ut aliquip ex commodo tincidunt</span></div>'+
            '<div class="post-category yellow">Sports</div>'+
            '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
          '</div>'+
        '</a>'+
      '</li>'+
      '<li>'+
        '<a href="post.html">'+
          '<div class="post-thumbnail"><img src="img/thumbnails/image13.jpg"></div>'+
          '<div class="post-infos">'+
            '<div class="post-title"><span>Donec consectetuer ligula vulputate sem tristique cursus</span></div>'+
            '<div class="post-category blue">Fashion</div>'+
            '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
          '</div>'+
        '</a>'+
      '</li>'
    );
    $$('#infinite-loader').remove();
    isLoading = false;
  }, 2000);

});

// When a post is opened
app.onPageInit('post', function(page){

  // Display back arrow
  $$('#view-main .back-hidden').toggleClass('back-hidden back-visible');

  // Replace the content of each element of the post page
  /*
  $$('#content-post .page-post-thumbnail').html();
  $$('#content-post .page-post-title').html();
  $$('#content-post .page-post-category').html();
  $$('#content-post .page-post-category').addClass('category-blue');
  $$('#content-post .page-post-date').html('<i class="icon ion-android-time"></i>');
  $$('#content-post .page-post-content').html();
  */
});

// When back arrow is clicked
app.onPageBack('post', function(e){
  // Remove the back arrow
  $$('#view-main .back-visible').toggleClass('back-hidden back-visible');
});
