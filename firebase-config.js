// Firebase settings for the game's shared rooms.
// These values are meant to be public: what people can do is controlled by the
// database rules (database.rules.json), not by keeping this file secret.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCorxSnMXcGrisS92uEE0AstqVcZpKYBwk",
  authDomain: "codenames-by-vedant.firebaseapp.com",

  // CHECK THIS LINE: copy the URL shown at the top of
  // Firebase console > Build > Realtime Database > Data.
  // US databases look like the line below. Other regions look like
  // https://codenames-by-vedant-default-rtdb.europe-west1.firebasedatabase.app
  databaseURL: "https://codenames-by-vedant-default-rtdb.firebaseio.com",

  projectId: "codenames-by-vedant",
  storageBucket: "codenames-by-vedant.firebasestorage.app",
  messagingSenderId: "136665694080",
  appId: "1:136665694080:web:d613ce4e80a9657862cb65"
};
