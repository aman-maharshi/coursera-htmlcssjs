// collapse the nav menu when clicked outside, on mobile view 
$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

    var dc = {};
    
    var homeHtml = "snippets/main-content.html";
    var mainContnet = "snippets/menu-content.html";
    var specialsContent = "snippets/specials-content.html";
    
    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
      var targetElem = document.querySelector(selector);
      targetElem.innerHTML = html;
    };
    
    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
      var html = "<div class='text-center'>";
      html += "<img class='spinner' src='spinner.gif' width=50></div>";
      insertHtml(selector, html);
    };
    
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
    
    // On first load, show home view
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
    });
    
    dc.loadMenuCategories = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
         mainContnet,
         function (responseText) {
            document.querySelector("#main-content")
              .innerHTML = responseText;
          },
          false);
      };

    dc.loadSpecialsItems = function () {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
         specialsContent,
         function (responseText) {
            document.querySelector("#main-content")
              .innerHTML = responseText;
          },
          false);
      };
    
    global.$dc = dc;
    
    })(window);
    