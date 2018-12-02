import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'UdaciFlashcards:notifications';

export const clearLocalNotification = () =>
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );

export const createNotification = () => ({
  title: `Don't forget to study! 😏 😏 😏`,
  body: `Did you practice your flashcard today? 🤔 🤔 🤔`,
  ios: {
    sound: true
  },
  android: {
    sound: true,
    vibrate: true,
    color: '#512DA8',
    sticky: false,
    priority: 'high'
  }
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY) // check if we already haven't set a local notiication b/c we don't to have 2 local notifications
    .then(JSON.parse)
    .then(data => {
      if (!data) {
        // if we haven't set a local notification
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            // permission is granted
            Notifications.cancelAllScheduledNotificationsAsync(); // clear all notification just in case so we don't set two
            // create a date object represent tomorrow 8 pm
            const tomorrow = new Date();
            // tomorrow.setDate(tomorrow.getDate() + 1);
            // tomorrow.setHours(20);
            // tomorrow.setMinutes(tomorrow.getMinutes() + 1);
            tomorrow.setSeconds(tomorrow.getSeconds() + 5);
            // notification obj, when to go off
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day'
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
