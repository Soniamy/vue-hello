const { createApp } = Vue;

createApp({
    data() {
        return {
            saluto: 'Hello Vue!',
            immagine:
                'https://vueschool.io/storage/media/d54747c9b842f611b65d14cc865d403f/Common-Vue.js-Mistakes-and-How-to-Avoid-Them-01.png',
        };
    },
}).mount('#app');
