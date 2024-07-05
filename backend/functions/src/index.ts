import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import * as logger from 'firebase-functions/logger';
import serviceAccount from './config/dazle-66b05-firebase-adminsdk-yj01d-b3e18183f9.json';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
const db = admin.firestore();

exports.betaSignup = onRequest(async (req, res) => {
  try {
    const { email, job, phoneNumber } = req.body;

    if (!email || !job) throw Error();

    const existing = await db
      .collection('waitList')
      .where('email', '==', email)
      .get();

    if (existing.empty) {
      const doc = await db
        .collection('waitList')
        .add({ email, job, phoneNumber });

      res.status(200).json({ success: true, id: doc.id });
      return;
    }
  } catch (e) {
    logger.error('error while exectuting api: ', e);
    res.status(400).json({
      error: e
    });
  }
});
