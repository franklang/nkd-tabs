var nkd = {
  // Set clicked link sublevel state (open/closed)
  setSubLevelState: function(element,state){
    element
      .parent('.js-nkd-item')
      .attr('data-state', state);
  }
}

;(function ($, window, undefined){
  // Reset DOM to its initial state
  $.fn.nkdReset = function(){
      $(this).find('[data-state="open"]').each(function(){
        $(this).attr('data-state','closed');
      });
  }
}(jQuery, window));