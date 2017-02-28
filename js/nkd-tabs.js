;(function ($, window, undefined){

  $.fn.nkdTabs = function(options){

    var defaults = {
      onHover: false
    }

    var settings = $.extend({}, defaults, options);

    function closeNavByClickingAnywhere(){
      $('.js-nkd-tabs').find('[data-state="open"]').each(function(){
        $(this).attr('data-state','closed');
      });
    }

    function onLinkClick(){
      // Get clicked link sublevel state (open/closed)
      var getSubLevelState = $(this)
        .parent('.js-nkd-item')
        .attr('data-state');

      if (getSubLevelState == 'closed'){
        nkd.setSubLevelState($(this),'open');
        
        $(this)
          .parent('.js-nkd-item')
          .siblings('[data-state="open"]')
          .attr('data-state', 'closed');
      }

      else if (getSubLevelState == 'open'){
        nkd.setSubLevelState($(this),'closed');
      }
    }

    if (settings.onHover == true){
      $('.js-nkd-tabs').addClass('nkd-hover');
    }

    else if (settings.onHover == false){
      $('.js-nkd-link').on('click', onLinkClick);
      $(document).on('click', closeNavByClickingAnywhere);
      $('.js-nkd-tabs').on('click', function(e){
        e.stopPropagation();
        return false;
      });
    }
  };
}(jQuery, window));
