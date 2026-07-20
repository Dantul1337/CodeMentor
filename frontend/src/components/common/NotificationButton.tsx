import { useEffect, useState } from 'react';
import { subscribeToPush, sendPushNotification } from '../../services/courseApi';

const publicKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);

  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);

  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export default function NotificationButton() {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!('serviceWorker' in navigator)) return;

      const registration = await navigator.serviceWorker.ready;

      const subscription = await registration.pushManager.getSubscription();

      if (subscription) {
        setEnabled(true);
      }
    };

    checkSubscription();
  }, []);

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

      await subscribeToPush(subscription);

      setEnabled(true);

      alert('Уведомления успешно подключены 🎉');
    } catch (error) {
      console.error(error);

      alert('Ошибка подключения уведомлений');
    } finally {
      setLoading(false);
    }
  };

  const sendNotification = async () => {
    try {
      await sendPushNotification();

      alert('Тестовое уведомление отправлено 🚀');
    } catch (error) {
      console.error(error);

      alert('Ошибка отправки уведомления');
    }
  };

  return (
    <div className="notification-card">
      <div className="notification-icon">🔔</div>

      <h2 className="notification-title">Push-уведомления</h2>

      <p className="notification-description">Получайте уведомления о новых курсах, скидках и обновлениях платформы.</p>

      <button className={`notification-button ${enabled ? 'connected' : ''}`} onClick={subscribe} disabled={loading || enabled}>
        {loading ? 'Подключение...' : enabled ? '✓ Подключено' : 'Включить уведомления'}
      </button>

      <button className="notification-button secondary" onClick={sendNotification}>
        🚀 Отправить тестовое уведомление
      </button>
    </div>
  );
}
