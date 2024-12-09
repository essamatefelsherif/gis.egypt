(function(global, factory){
	
	if(typeof exports === 'object' && typeof module !== 'undefined')
		factory(exports);
	else
	if(typeof define === 'function' && define.amd)
		define(['exports'], factory);
	else
		factory(global.L);

}(this, function(exports){ 'use strict';

var basemap = {
	google:{
		satellite:{
			title:	'Google Hybrid',
			credit:	'Map data ©2015 Google',
			url:	'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
			ssl:	'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		satellite_no_labels:{
			title:	'Google Satellite',
			credit:	'Map data ©2015 Google',
			url:	'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
			ssl:	'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		road:{
			title:	'Google Road',
			credit:	'Map data ©2015 Google',
			url:	'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
			ssl:	'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		terrain:{
			title:	'Google Terrain',
			credit:	'Map data ©2015 Google',
			url:	'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
			ssl:	'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		}
	},
	osm:{
		standard:{
			title:	'OSM Standard',
			credit:	'© OpenStreetMap contributors, CC-BY-SA',
			url:	'http://tile.openstreetmap.org/{z}/{x}/{y}.png',
			ssl:	'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:19
		},
		standard_no_labels:{
			title:	'OSM Standard No Labels',
			credit:	'OpenStreetMap contributors, under ODbL',
			url:	'https://tiles.wmflabs.org/osm-no-labels/${z}/${x}/${y}.png',
			ssl:	'https://tiles.wmflabs.org/osm-no-labels/${z}/${x}/${y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:21
		},
		bw:{
			title:	'OSM B&W',
			credit:	'OpenStreetMap contributors, under ODbL',
			url:	'https://{s}.tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png',
			ssl:	'https://{s}.tiles.wmflabs.org/bw-mapnik/${z}/${x}/${y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:21
		},
		topo:{
			title:	'OpenTopoMap',
			credit:	'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)',
			url:	'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
			ssl:	'https://a.tile.opentopomap.org/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:18
		}
	},
	stamen:{
		toner:{
			title:	'Stamen Toner',
			credit:	'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
			url:	'http://tile.stamen.com/toner/{z}/{x}/{y}.png',
			ssl:	'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		toner_no_labels:{
			title:	'Stamen Toner Background',
			credit:	'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
			url:	'http://tile.stamen.com/toner-background/{z}/{x}/{y}.png',
			ssl:	'https://stamen-tiles.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		toner_lite:{
			title:	'Stamen Toner Lite',
			credit:	'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
			url:	'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png',
			ssl:	'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		terrain:{
			title:	'Stamen Terrain',
			credit:	'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
			url:	'http://tile.stamen.com/terrain/{z}/{x}/{y}.png',
			ssl:	'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:20
		},
		watercolor:{
			title:	'Stamen Watercolor',
			credit:	'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
			url:	'http://tile.stamen.com/watercolor/{z}/{x}/{y}.png',
			ssl:	'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
			yorigin:	'top',
			zoom_min: 0, zoom_max:18
		},
	}
};

var mixin = {};
mixin.providers = basemap;

var TileLayerProvider = L.Class.extend({
		includes:mixin,
		
		initialize:function(obj){
		
			if(typeof obj !== 'object') return;
				
			for(var i in obj){
				if(typeof obj[i] !== 'object') return;
				for(var j in obj[i]){
					if(obj[i][j]['title'] === undefined || !obj[i][j]['title']) return;
					if((obj[i][j]['url'] === undefined || !obj[i][j]['url']) && (obj[i][j]['ssl'] === undefined || !obj[i][j]['ssl'])) return;
				}
			}
			this.providers = obj;
		}
	});
	
var tileLayerProvider = function(obj){
	return new TileLayerProvider(obj);
}

TileLayerProvider.prototype.getProviderObj = function(prov, variant){
	switch(arguments.length){
		case 0:																// return the top level object - this.providers
			return this.providers;
		case 1:																// return level 1 object - this.providers['stamen']
			if(typeof prov !== 'string')
				throw new Error('No valid provider given');
			
			if(!this.providers[prov])
				throw new Error('Provider not found');
			
			return this.providers[prov];
		default:															// return level 2 object - this.providers['stamen']['toner']
			if(typeof prov !== 'string' || typeof variant !== 'string')
				throw new Error('No valid provider/variant given');

			if(!this.providers[prov][variant])
				throw new Error('Provider/variant not found');

			return this.providers[prov][variant];
	}
};

TileLayerProvider.prototype.getProviderTitleUrl = function(prov, variant){
	var obj = {}, temp;

	switch(arguments.length){
		case 0:
			temp = this.getProviderObj();
			for(var i in temp)
				for(var j in temp[i])
					for(var k in temp[i][j])
						if(k === 'title'){
							obj[temp[i][j][k]] = temp[i][j]['url'];
						}
		break;
		case 1:
			temp = this.getProviderObj(prov);
			for(var j in temp)
				for(var k in temp[j])
					if(k === 'title'){
						obj[temp[j][k]] = temp[j]['url'];
					}
		break;
		default:
			temp = this.getProviderObj(prov, variant);
			for(var k in temp)
				if(k === 'title'){
					obj[temp[k]] = temp['url'];
				}
	}
	return obj;
};

TileLayerProvider.prototype.getProviderTitleSsl = function(prov, variant){
	var obj = {}, temp;

	switch(arguments.length){
		case 0:
			temp = this.getProviderObj();
			for(var i in temp)
				for(var j in temp[i])
					for(var k in temp[i][j])
						if(k === 'title'){
							obj[temp[i][j][k]] = temp[i][j]['ssl'];
						}
		break;
		case 1:
			temp = this.getProviderObj(prov);
			for(var j in temp)
				for(var k in temp[j])
					if(k === 'title'){
						obj[temp[j][k]] = temp[j]['ssl'];
					}
		break;
		default:
			temp = this.getProviderObj(prov, variant);
			for(var k in temp)
				if(k === 'title'){
					obj[temp[k]] = temp['ssl'];
				}
	}
	return obj;
};


TileLayerProvider.prototype.getProviderTitleCredit = function(prov, variant){

	var obj = {}, temp;

	switch(arguments.length){
		case 0:
			temp = this.getProviderObj();
			for(var i in temp)
				for(var j in temp[i])
					for(var k in temp[i][j])
						if(k === 'title')
							obj[temp[i][j][k]] = temp[i][j]['credit'];
		break;
		case 1:
			temp = this.getProviderObj(prov);
			for(var j in temp)
				for(var k in temp[j])
					if(k === 'title')
						obj[temp[j][k]] = temp[j]['credit'];
		break;
		default:
			temp = this.getProviderObj(prov, variant);
			for(var k in temp)
				if(k === 'title')
					obj[temp[k]] = temp['credit'];
	}
	
	return obj;
};

exports.TileLayerProvider = TileLayerProvider;
exports.tileLayerProvider = tileLayerProvider;

}));