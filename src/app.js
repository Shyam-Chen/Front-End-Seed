import './app.css';

import { home } from './pages/home';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { error } from './pages/error';

firebase.initializeApp({
  apiKey: 'AIzaSyABgvqPE5cNRsTS0UfXpWdyYvqxvR5lGYs',
  authDomain: 'frontend-starter-kit.firebaseapp.com',
  databaseURL: 'https://frontend-starter-kit.firebaseio.com',
  storageBucket: 'frontend-starter-kit.appspot.com',
  messagingSenderId: '428173442531'
});

if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          const { installing, update } = registration;

          installing.onstatechange = () => {
            switch (installing.state) {
              case 'installed':
                update();
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
            }
          };
        }
      };
    });
}

home();
about();
contact();
error();
page();
