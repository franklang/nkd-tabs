;(function ($, window, undefined){

  $.fn.nkdTabs = function(options){

    function closeNavByClickingAnywhere(){
      $('.js-nkd-tabs').find('[data-state="open"]').each(function(){
        $(this).attr('data-state','closed');
      });
    }

    function onLinkClick(){
      // Get current nav level of clicked link
      var getLinkNavLevel = $(this)
        .closest('.js-nkd-level')
        .attr('data-level');

      // Get clicked link sublevel state (open/closed)
      var getSubLevelState = $(this)
        .parent('.js-nkd-item')
        .attr('data-state');

      // Close children sublevels
      var closeChildren = $(this)
        .parent('.js-nkd-item')
        .find('[data-state="open"]')
        .each(function(){
          $(this)
            .attr('data-state', 'closed');
        });

      // Get current level
      var getCurrentLevelValue = $(this)
        .parent('.js-nkd-item')
        .children('.js-nkd-level')
        .attr('data-level');

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

    $('.js-nkd-link').on('click', onLinkClick);

    $(document).on('click', closeNavByClickingAnywhere);
    $('.js-nkd-tabs').on('click', function(e){
      e.stopPropagation();
      return false;
    });

  };
}(jQuery, window));
