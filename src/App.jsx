import { PushNotifications } from '@capacitor/push-notifications';
import rabbit from '../assets/white-rabbit.jpg'

console.log('du me may')
const initPushNotifications = async () => {
  // 1. Check & Request Permissions
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    console.error('User denied push notification permissions');
    return;
  }

  // 2. Register with FCM to receive the token
  await PushNotifications.register();

  // 3. Listener: Triggered when registration succeeds and returns the FCM device token
  await PushNotifications.addListener('registration', (token) => {
    console.log('FCM Device Registration Token:', token.value);
    // FCM Device Registration Token: 
    // fSNRsirXREiL4O0TKFMZyy:APA91bG4zKrMw4OfHTQDbWTTLAYJ5XQIHkHMABmK2wb-t-5g6hM_5pi36Ec7gp9BB_vt3WIbuMy93vAfxdC8L26cjRH_anGxAyAaLMsJ-HdGJfyE2GQn_mQ

    // TODO: Send token.value to your backend server to target this device
  
  });

  // 4. Listener: Triggered if registration fails
  await PushNotifications.addListener('registrationError', (error) => {
    console.error('Registration Error:', JSON.stringify(error));
  });

  // 5. Listener: Triggered when a notification arrives while the app is in foreground
  await PushNotifications.addListener('pushNotificationReceived', (notification) => {
    console.log('Push received in foreground:', notification);
  });

  // 6. Listener: Triggered when user taps on a notification
  await PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
    console.log('User tapped notification:', notification.actionId, notification.notification);
  });
};

// Call initialization function on app load
initPushNotifications();


function App() {

  return (
    <>
      <h1>WHITE RABBIT ANGRY</h1>
      <img src={rabbit} width="350" />
    </>
  )
}

export default App
