import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
  }>;
}

const isIOS = () => {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  const [installed, setInstalled] = useState(() => {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true
    );
  });

  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    const beforeInstallHandler = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const installedHandler = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallHandler);
    window.addEventListener('appinstalled', installedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallHandler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  if (installed) {
    return (
      <section className="install-section">
        <button className="install-button install-button--installed" disabled>
          ✅ Приложение установлено
        </button>
      </section>
    );
  }

  if (isIOS()) {
    return (
      <>
        <section className="install-section">
          <button className="install-button" onClick={() => setShowIOSModal(true)}>
            📲 Установить приложение
          </button>
        </section>

        {showIOSModal && (
          <div className="install-modal" onClick={() => setShowIOSModal(false)}>
            <div className="install-modal__content" onClick={(e) => e.stopPropagation()}>
              <h2>Установка на iPhone</h2>

              <p>
                1️⃣ Откройте меню <strong>Поделиться</strong>
              </p>

              <p>
                2️⃣ Выберите <strong>«На экран Домой»</strong>
              </p>

              <p>
                3️⃣ Нажмите <strong>«Добавить»</strong>
              </p>

              <button className="install-button" onClick={() => setShowIOSModal(false)}>
                Понятно
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  if (!deferredPrompt) return null;

  return (
    <section className="install-section">
      <button className="install-button" onClick={handleInstall}>
        📲 Установить приложение
      </button>
    </section>
  );
};

export default InstallButton;
