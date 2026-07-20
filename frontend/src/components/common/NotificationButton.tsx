import { useState } from 'react';
import axios from 'axios';

const publicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);

  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);

  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export default function NotificationButton() {
  const [loading, setLoading] = useState(false);

  const subscribe = async () => {
    setLoading(true);

    try {
      const permission = await Notification.requestPermission();

      if (permission !== 'granted') {
        alert('Разрешите уведомления.');
        return;
      }

      const registration = await navigator.serviceWorker.ready;

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });

      await axios.post(`${import.meta.env.VITE_API_URL}/api/push/subscribe`, subscription);

      alert('Уведомления подключены 🎉');
    } catch (e) {
      console.error(e);
      alert('Ошибка подключения уведомлений');
    } finally {
      setLoading(false);
    }
  };

  const sendNotification = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/push/send`);
  };

  return (
    <div>
      <button onClick={subscribe} disabled={loading}>
        {loading ? 'Подключение...' : '🔔 Включить уведомления'}
      </button>
      <button onClick={sendNotification}>🚀 Отправить тестовое уведомление</button>
    </div>
  );
}
