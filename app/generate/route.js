import { NextResponse } from 'next/server';
import admin from 'firebase-admin';
import { generateFlashcardsWithGemma } from '@/utils/generation';

// Initialize Firebase Admin SDK (if not already initialized)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}
export async function POST(req) {
  try {
    // Extract the text from the request body
    const { text } = await req.json();

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Invalid or missing text in the request body' },
        { status: 400 }
      );
    }
    // Generate flashcards using the Gemma function
    const flashcards = await generateFlashcardsWithGemma(text);

    // Return the flashcards
    return NextResponse.json({ flashcards });


  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: error.message , details: error.message},{ status: 500 });
  }
}