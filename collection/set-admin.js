// set-admin.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // put your JSON in same folder

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const adminEmail = 'wondergallery2003@gmail.com'; // <-- replace with the admin user's email

async function setAdmin() {
  try {
    const user = await admin.auth().getUserByEmail(adminEmail);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log('Custom claim admin:true set for', adminEmail);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}
setAdmin();