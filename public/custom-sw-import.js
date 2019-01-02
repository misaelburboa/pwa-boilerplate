/**Background Sync */
const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    /https:\/\/json\.ultimatecoupons\.com\/featured-stores-json\//,
    workbox.strategies.networkOnly({
        plugins: [bgSyncPlugin]
    }),
    'GET'
);

/**Background Sync Ends */
