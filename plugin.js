var defaultSettings = require("./defaultSettings");

/*
Settings
*/

sampleGraph.defaultSettings = defaultSettings;

sampleGraph.settings = EnebularIntelligence.SchemaProcessor([{
  type : "key", name : "key", help : "値を表すデータのkeyを指定してください。"
}]);

function sampleGraph(settings, options) {
  var that = this;
  this.el = document.createElement('div');
  this.el.classList.add("graph-sample-text");
  this.settings = settings;
  this.options = options;
  this.data = null;
  this.onDrillDownListener = null;
}

sampleGraph.prototype.onDrillDown = function(cb) {
    this.onDrillDownListener = cb;
}


sampleGraph.prototype.addData = function(data) {
    var that = this;
    if(data instanceof Array) {
        data.forEach(function(d) {
          that.data = d;
        });
        this.refresh();
    }else{
      this.data = data;
      this.refresh();
    }
}

sampleGraph.prototype.clearData = function() {
  this.data = null
}

sampleGraph.prototype.refresh = function() {
  if(this.data) {
    this.el.textContent = this.data[this.settings.key];
  }
}

sampleGraph.prototype.resize = function() {
}

sampleGraph.prototype.getEl = function() {
  return this.el;
}

window.EnebularIntelligence.register('sample', sampleGraph);

module.exports = sampleGraph;