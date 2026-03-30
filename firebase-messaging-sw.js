importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// Configuración de Firebase desde tu .env
firebase.initializeApp({
    apiKey: "AIzaSyA9hinztfYgVtVs7ReqNI0kVLkPIUz3fUg",
    authDomain: "azaktilza.firebaseapp.com",
    databaseURL: "https://azaktilza-default-rtdb.firebaseio.com",
    projectId: "azaktilza",
    storageBucket: "azaktilza.firebasestorage.app",
    messagingSenderId: "177530289587",
    appId: "1:177530289587:web:8cafae94dee5abceb89fc6",
    measurementId: "G-JHBH0BWS3V"
});

const messaging = firebase.messaging();

// Manejo de notificaciones en segundo plano (cuando la app está cerrada)
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano:', payload);

    const notificationTitle = payload.notification?.title || payload.data?.title || 'Azaktilza';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || 'Nueva notificación',
        icon: '/icons/Icon-192.png',
        badge: '/icons/Icon-192.png',
        tag: payload.data?.tag || 'azaktilza-notification',
        requireInteraction: true, // La notificación permanece hasta que el usuario interactúe
        vibrate: [200, 100, 200], // Patrón de vibración
        data: {
            url: payload.data?.url || '/',
            click_action: payload.data?.click_action || '/'
        },
        actions: [
            {
                action: 'open',
                title: 'Abrir'
            },
            {
                action: 'close',
                title: 'Cerrar'
            }
        ]
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Notificación clickeada:', event);

    event.notification.close();

    if (event.action === 'close') {
        return;
    }

    // Abrir o enfocar la ventana de la app
    const urlToOpen = event.notification.data?.url || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                // Buscar si ya hay una ventana abierta
                for (let i = 0; i < windowClients.length; i++) {
                    const client = windowClients[i];
                    if (client.url.includes(urlToOpen) && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Si no hay ventana abierta, abrir una nueva
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});

// Actualizar badge count
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'UPDATE_BADGE') {
        if ('setAppBadge' in navigator) {
            navigator.setAppBadge(event.data.count).catch((error) => {
                console.error('Error actualizando badge:', error);
            });
        }
    } else if (event.data && event.data.type === 'CLEAR_BADGE') {
        if ('clearAppBadge' in navigator) {
            navigator.clearAppBadge().catch((error) => {
                console.error('Error limpiando badge:', error);
            });
        }
    }
});
