// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-notify
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require jquery.turbolinks
//= require select2
//= require cocoon
//= require_tree .

$(function(){ $(document).foundation(); });


function infiniteScroll() {
    if ($('#infinite-scrolling').size() > 0) {
        return $('.scroll2watch').on('scroll', function () {
            var load_more_url;
            load_more_url = $('.pagination a.next_page').attr('href');
//                if (more_posts_url && $('.pane2-content').scrollTop() > $(document).height() - $('.pane2-content').height() - 60) {
            if (load_more_url && $('#paginator').height() - $('.scroll2watch').scrollTop() < $('.scroll2watch').height()) {
                $('.pagination').html('loading...');
                $.getScript(load_more_url);
            }
            return;
        });
    }
}