// Install Event
self.addEventListener('install', e => {
    console.log('Service Worker: Installed')
})

// Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated')
}) 