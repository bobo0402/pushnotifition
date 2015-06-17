
	var exec = require("cordova/exec");
	function PushNotification() {}

	// Call this to register for push notifications and retreive a deviceToken
	PushNotification.prototype.registerDevice = function(config, callback) {
		cordova.exec(callback, callback, "PushNotification", "registerDevice", config ? [config] : []);
	};

	// Call this to retreive pending notification received while the application is in background or at launch
	PushNotification.prototype.getPendingNotifications = function(callback) {
		cordova.exec(callback, callback, "PushNotification", "getPendingNotifications", []);
	};

	// Call this to get a detailed status of remoteNotifications
	PushNotification.prototype.getRemoteNotificationStatus = function(callback) {
		cordova.exec(callback, callback, "PushNotification", "getRemoteNotificationStatus", []);
	};

	  // Call this to get the current value of the application badge number
	  PushNotification.prototype.getApplicationIconBadgeNumber = function(callback) {
	    cordova.exec(callback, callback, "PushNotification", "getApplicationIconBadgeNumber", []);
	  };

	// Call this to set the application icon badge
	PushNotification.prototype.setApplicationIconBadgeNumber = function(badge, callback) {
		cordova.exec(callback, callback, "PushNotification", "setApplicationIconBadgeNumber", [{badge: badge}]);
	};

	// Call this to clear all notifications from the notification center
	PushNotification.prototype.cancelAllLocalNotifications = function(callback) {
		cordova.exec(callback, callback, "PushNotification", "cancelAllLocalNotifications", []);
	};

	// Call this to retreive the original device unique id
	// @warning As of today, usage is deprecated and requires explicit consent from the user
	PushNotification.prototype.getDeviceUniqueIdentifier = function(callback) {
		cordova.exec(callback, callback, "PushNotification", "getDeviceUniqueIdentifier", []);
	};

	// Event spawned when a notification is received while the application is active
	PushNotification.prototype.notificationCallback = function(notification) {
		var ev = document.createEvent('HTMLEvents');
		ev.notification = notification;
		ev.initEvent('push-notification', true, true, arguments);
		document.dispatchEvent(ev);
	};
	PushNotification.prototype.getNotification = function(successCallback, data) {
		try {
			cordova.exec(successCallback, successCallback, 'PushNotification', "getNotification", [data]);
		} catch (exception) {
			alert(exception);
		}
	}
	cordova.addConstructor(function() {
		if(!window.plugins) window.plugins = {};
		window.plugins.pushNotification = new PushNotification();
	});
	
	module.exports = new PushNotification();
