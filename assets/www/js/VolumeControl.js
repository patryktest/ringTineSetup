/*
 * Phonegap VolumeControl Plugin for Android
 * Cordova 2.2.0
 * Email: manusimpson[at]gmail[dot]com
 * Author: Manuel Simpson
 * Date: 12/28/2012
 */
function VolumeControl(){}

var VolumeControl = {
  setVolume: function(vol, successCallback, failureCallback){
		return cordova.exec(
			successCallback,
			failureCallback,
			'VolumeControl',
			'setVolume',
			[vol]
		);
	},
	getVolume: function(successCallback,failureCallback){
		return cordova.exec(
			successCallback,
			failureCallback,
			'VolumeControl',
			'getVolume',
			[]);
	}
};
