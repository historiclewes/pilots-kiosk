(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bay.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <a href=\"#\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"button radius inactive\" onclick=\"Kiosk.getWeatherData('";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'); return false;\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a> ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"large-5 columns text-center\" id=\"bay-map\">\n    <h2 class=\"block-title\">Current<br/> Shipping Traffic</h2>\n\n    <div class=\"map\">\n      <iframe name=\"marinetraffic\" id=\"marinetraffic\" width=\"425\" height=\"415\" scrolling=\"no\" src=\"http://www.marinetraffic.com/ais/embed.aspx?zoom=10&remember=false&shownames=true&notation=false&border=0&maptype=1&centery=38.7744&centerx=-75.1397\"></iframe>\n    </div>\n    <div class=\"large-12 columns\"><span class=\"text-center\">Touch a ship to view more information</span>\n    </div>\n  </div>\n\n  <div class=\"large-5 columns\" id=\"current-conditions-block\"></div>\n\n  <div class=\"large-2 columns\" id=\"buoy-stations\">\n    <h2 class=\"block-title text-center\">Buoy Stations</h2>\n\n    <div class=\"navigation\">\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.list),stack1 ? stack1.call(depth0, depth0.buoys, options) : helperMissing.call(depth0, "list", depth0.buoys, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n\n  <div id=\"waves-tides\" class=\"large-6 columns\">\n    <div class=\"row waves-tides-header\">\n      <div class=\"waves-tides-header\"></div>\n      <div id=\"waves\" class=\"large-7 columns block-radius\">\n        <h2 class=\"block-title text-center\">Waves</h2>\n        <div id=\"wave-data\" class=\"row\"></div>\n      </div>\n\n      <div id=\"tides\"></div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['collection.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row artifact\">\n  <div id=\"artifact-image\" class=\"large-4  columns artifact-image\">\n    <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n  </div>\n  <div class=\"large-8 columns\">\n    <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n    <div class=\"large-12 artifact-info\">\n      ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <div class=\"artifact-divider\"></div>\n\n    <div class=\"row\">\n      <div class=\"large-4 columns description block-radius\">\n        <div class=\"large-12\">\n          <h6 class=\"meddon text-center\">Description</h6>\n          <h5>Early Date:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.early_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.early_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Late Date:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.late_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.late_date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Condition:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.condition) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.condition; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n      <div class=\"large-5 columns  categorical-info block-radius\">\n        <div class=\"large-12\">\n          <h6 class=\"meddon text-center\">Categorical Information</h6>\n          <h5>Collection:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.collection) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.collection; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Object ID:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.object_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.object_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Object Name:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.object_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.object_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n        <div class=\"large-12\">\n          <h5>Sterms:</h5>\n          <span class=\"red-span\">";
  if (stack1 = helpers.sterms) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sterms; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['collections.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <a href=\"#\" onclick=\"Kiosk.getNode('collection', '";
  if (stack1 = helpers.nid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'); return false;\">\n            <div class=\"large-12 columns artifact-teaser\">\n              <div class=\"large-3 columns\">\n                <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n              </div>\n              <div class=\"large-9 columns\">\n                <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n\n                ";
  if (stack1 = helpers.teaser) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.teaser; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                <p class=\"right collections meddon pointer-left\">Learn More</p>\n              </div>\n            </div>\n          </a>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row\" id=\"collection\">\n  <script type=\"text/javascript\">Kiosk.getSlideshow('slideshow', 'collections_slideshow');</script>\n  <div class=\"large-5 columns slideshow\">\n    <div class=\"large-12 collection-slideshow\">\n      <div id=\"slideshow\" style=\"width: 419px;\"></div>\n    </div>\n    <div class=\"large-12 block-radius collections-cta\">\n      <h5 class=\"meddon\">Learn About Artifacts</h5>\n      <p>Scroll through our many artifacts on the right. Click on any you wish to view more information on!</p>\n    </div>\n  </div>\n\n  <div class=\"large-6 columns\" id=\"collection-teaser\">\n    <div class=\"collection-teaser-top\"></div>\n    <div class=\"content large-12 columns\">\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div class=\"collection-teaser-bottom\"></div>\n  </div>\n</div>";
  return buffer;
  });
templates['conditions.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2 class=\"block-title text-center\">Current Conditions</h2>\n\n<div class=\"large-12 columns\" id=\"current-conditions\">\n  <div class=\"large-4 columns\" id=\"temperature\">\n    <h4 class=\"text-center\">Temperature</h4>\n    <div id=\"air_temperature_gauge\"></div>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Air:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.air_temperature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_temperature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Water:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.water_temperature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.water_temperature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"large-4 columns \" id=\"pressure\">\n    <h4 class=\"text-center\">Air Pressure</h4>\n    <div id=\"air_pressure_gauge\"></div>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns text-center\">\n        <span class=\"red-span\">";
  if (stack1 = helpers.air_pressure) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_pressure; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"text-center\">";
  if (stack1 = helpers.air_pressure_change) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.air_pressure_change; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"large-4 columns\" id=\"windspeed\">\n    <h4 class=\"text-center\">Wind Speed</h4>\n    <div id=\"wind_speed_gauge\"></div>\n\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <span class=\"red-span\">";
  if (stack1 = helpers.wind_speed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_speed; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <h4 class=\"left\">";
  if (stack1 = helpers.wind_direction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_direction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n      <div class=\"large-12 columns\">\n        <h4 class=\"left\">Gusts:</h4>\n        <span class=\"red-span\">";
  if (stack1 = helpers.wind_gusts) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wind_gusts; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });
templates['footer.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"large-10 columns\">\n    <nav id=\"footer-navigation\">\n      <ul class=\"inline-list\">\n        <li class=\"home inactive\"><a id=\"home\" href=\"#\" onclick=\"Kiosk.getPage('home'); return false;\">Home</a></li>\n        <li class=\"the-bay inactive\"><a id=\"the-bay\" href=\"#\" onclick=\"Kiosk.getBay(); return false;\">The Bay</a></li>\n        <li class=\"history inactive\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">History</a></li>\n        <li class=\"collection inactive\"><a href=\"#\" onclick=\"Kiosk.getCollections(); return false;\">Collection</a></li>\n        <li class=\"videos inactive\"><a href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Videos</a></li>\n        <li class=\"cannonball-house inactive\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 368); return false;\">Cannonball House</a></li>\n      </ul>\n    </nav>\n  </div>\n  <div class=\"large-2 columns text-center\" id=\"newsletter\">\n\n    <a href=\"#\" data-reveal-id=\"newsletter-signup\">\n    <img src=\"images/newsletter-signup-bg.png\" />\n\n    </a>\n  </div>\n</div>\n";
  });
templates['header.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"large-12 columns\">\n    <div class=\"large-6 large-offset-3 columns\" id=\"page-title\"><h2>Pilots on the Bay & River Delaware</h2></div>\n\n    <div id=\"search\" class=\"large-3 columns\">\n      <div class=\"search-wrapper\">\n        <input type=\"text\" id=\"kiosk-search\" class=\"large-1 columns\" placeholder=\"Search\">\n        <button type=\"submit\" value=\"\" class=\"telescope-button\" onclick=\"Kiosk.getSearchResults(); return false;\"></button>\n      </div>\n    </div>\n  </div>\n</div>";
  });
templates['home.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\" id=\"homepage\">\n  <div class=\"large-7 columns slideshow\">\n    <script type=\"text/javascript\">Kiosk.getSlideshow('slideshow', 'homepage_slideshow');</script>\n    <a href=\"#\" class=\"collections rokkitt\" onclick=\"Kiosk.getCollections(); return false;\">View the Collections</a>\n    <div class=\"slideshow-frame\">\n      <div id=\"slideshow\" style=\"width: 575px;\"></div>\n    </div>\n  </div>\n  <div class=\"large-5 columns\">\n    <div class=\"large-6 columns\" id=\"videos-cta\">\n      <div class=\"large-6 right\"><h2 class=\"red-header\"><a href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Videos</a></h2>\n\n        <p>This gentleman was surely not equipped to watch videos but you certainly are.</p>\n      </div>\n      <a class=\"meddon\" href=\"#\" onclick=\"Kiosk.getVideos(); return false;\">Watch</a></div>\n    <div class=\"large-6 columns\" id=\"history-cta\">\n      <h2 class=\"red-header\"><a href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">History</a></h2>\n\n      <p>Explore the ebb and flow of a fishing industry once central to our local economy.</p>\n      <a class=\"meddon\" href=\"#\" onclick=\"Kiosk.getNode('node', 323); return false;\">Learn</a>\n    </div>\n    <div class=\"large-12 columns\" id=\"whale-divider\">\n    </div>\n    <div class=\"large-9 columns block-radius\" id=\"homepage-cta\">\n      <h2 class=\"text-center red-header\"><a href=\"#\" onclick=\"Kiosk.getBay(); return false;\">The Bay</a></h2>\n      <h4><a href=\"#\" onclick=\"Kiosk.getBay(); return false;\">Live Bay Reporting</a></h4>\n\n      <p>View our interactive map which shows not only the buoys currently in the Delaware Bay, but displays useful inforamtion about the weather and tides!</p>\n      <a href=\"#\" class=\"right collections meddon pointer-left\" onclick=\"Kiosk.getBay(); return false;\">View The Bay</a>\n    </div>\n  </div>\n</div>";
  });
templates['navigation.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"inactive\"><a href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.href; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<section class=\"top-bar-section\">\n  <ul class=\"left\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.navigation, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</section>";
  return buffer;
  });
templates['newsletter.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"small-10 columns\">\n  <input type=\"email\" id=\"newsletter-email-address\" placeholder=\"Enter e-mail address here\">\n</div>\n<div class=\"small-2 columns\">\n  <a href=\"#\" class=\"button radius\" onclick=\"Kiosk.newsletterSignup(); return false;\">Signup!</a>\n</div>";
  });
templates['node.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n  <div id=\"artifact-image\" class=\"large-4  columns artifact-image\">\n    <img src=\"";
  if (stack1 = helpers.image_src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n  </div>\n  <div class=\"large-7 columns\">\n    <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n    ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });
templates['rss.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n      <time>";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</time>\n\n      <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n      <p><a href=\"#\" data-reveal-id=\"rss-"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Read More &raquo;</a></p>\n\n      <div id=\"rss-"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"reveal-modal large-8\">\n        <div>\n          <p>This should be more content - but may not be possible with an iframe.</p>\n          <a class=\"close-reveal-modal\">x</a>\n        </div>\n      </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });
templates['search.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p>Your search for \"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" yielded no results. Please try another search term.</p>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <a href=\"#\" onclick=\"Kiosk.getNode('collection', '";
  if (stack1 = helpers.nid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'); return false;\">\n          <div class=\"large-5 columns news-teaser\">\n            <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n\n            ";
  if (stack1 = helpers.teaser) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.teaser; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n\n            <p href=\"#\" class=\"right collections meddon pointer-left\">Learn More</p>\n          </div>\n        </a>\n      ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"large-9 large-offset-1\">\n    <h2>Search Results for \"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</h2>\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.empty, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['slideshow.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li><img src=\"";
  if (stack1 = helpers.src) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.src; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" /></li>\n    ";
  return buffer;
  }

  buffer += "<ul data-orbit>\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });
templates['tides.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"large-12 columns\">\n          <h4 class=\"left\">";
  if (stack1 = helpers.highlow) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.highlow; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ":</h4>\n          <span class=\"red-span\">";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </div>\n      ";
  return buffer;
  }

  buffer += "<div class=\"large-4 columns block-radius\">\n  <h2 class=\"block-title text-center\">Tides</h2>\n  <div id=\"tide-data\" class=\"row\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });
templates['videos.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <ul class=\"large-block-grid-3\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <li>\n            <a href=\"#\" data-reveal-id=\"video-";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n              <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h4>\n              <img class=\"block-radius\" src=\"";
  if (stack1 = helpers.thumbnail_medium) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumbnail_medium; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n            </a>\n          </li>\n\n        <div id=\"video-";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"reveal-modal large-8\">\n          <div class=\"flex-video\" style=\"-webkit-transform-origin: 0px 0px; opacity: 0; -webkit-transform: scale(1, 1); -webkit-transition: opacity 0.1s linear; transition: opacity 0.1s linear; display: none;\">\n            <iframe src=\"http://player.vimeo.com/video/";
  if (stack1 = helpers.vimeo_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.vimeo_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff\" width=\"100%\" height=\"400\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n            <a class=\"close-reveal-modal\">x</a>\n          </div>\n        </div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n\n  ";
  }

  buffer += "<div class=\"row\" id=\"videos\">\n  <div class=\"large-8 large-offset-2\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.items),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });
templates['waves.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n  <div class=\"large-6 columns\">\n    <h4 class=\"left\">Height:</h4>\n    <span class=\"red-span\">";
  if (stack1 = helpers.wave_height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wave_height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n\n  <div class=\"large-6 columns\">\n    <h4 class=\"left\">Length:</h4>\n    <span class=\"red-span\">";
  if (stack1 = helpers.wave_length) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wave_length; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n\n  <div class=\"large-6 columns\">\n    <h4 class=\"left\">Period:</h4>\n    <span class=\"red-span\">";
  if (stack1 = helpers.wave_period) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wave_period; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n\n  <div class=\"large-6 columns\">\n    <h4 class=\"left\">Direction:</h4>\n    <span class=\"red-span\">";
  if (stack1 = helpers.wave_direction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.wave_direction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>";
  return buffer;
  });
})();