// Define DrupalAjaxRequest
var DrupalAjaxRequest = (function () {
  var fetchNode = function(node_id, callback) {
    Zepto.ajax(
      {
        url: Kiosk.util.contentUrl('node'),
        dataType: 'jsonp',
        data: {nid: node_id},
        type: 'GET',
        cache: false,
        success: function (result) {
          callback(result);
        }
      }
    );
  }

  var fetchView = function(feed_id, callback) {
    Zepto.ajax(
      {
        url: Kiosk.util.contentUrl(feed_id),
        dataType: 'jsonp',
        type: 'GET',
        cache: false,
        success: function (result) {
          callback(result);
        }
      }
    );
  }

  return {
    fetchNode : fetchNode,
    fetchView: fetchView
  }
})();