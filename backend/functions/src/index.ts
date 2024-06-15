/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as logger from 'firebase-functions/logger';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const db = admin.firestore();

exports.signup = functions.https.onRequest(async (req, res) => {
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
    }
    throw Error('User already signed in')
  } catch (e) {
    res.status(400).json({
      error: e
    });
  }
});

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
