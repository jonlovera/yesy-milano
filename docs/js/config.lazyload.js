angular.module("app").constant("JQ_CONFIG",{}).config(["$ocLazyLoadProvider",function($ocLazyLoadProvider){$ocLazyLoadProvider.config({debug:!1,events:!1,modules:[{name:"com.2fdevs.videogular",files:["bower_components/videogular/videogular.js"]},{name:"com.2fdevs.videogular.plugins.controls",files:["bower_components_personal/videogular-controls/vg-controls.js"]},{name:"com.2fdevs.videogular.plugins.buffering",files:["bower_components/videogular-buffering/vg-buffering.min.js"]},{name:"com.2fdevs.videogular.plugins.overlayplay",files:["bower_components/videogular-overlay-play/vg-overlay-play.min.js"]},{name:"com.2fdevs.videogular.plugins.poster",files:["bower_components/videogular-poster/vg-poster.min.js"]},{name:"com.2fdevs.videogular.plugins.imaads",files:["bower_components/videogular-ima-ads/ima-ads.min.js"]}]})}]);