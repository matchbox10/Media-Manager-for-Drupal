/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($) {
  Drupal.behaviors.media_manager_core = {
    attach: function (context, settings) {
        console.log('Start');
      $('.media-manager-wrapper', context).click(function () {
        alert('Hello');
      });
    }
  };


})(jQuery);