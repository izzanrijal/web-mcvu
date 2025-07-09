import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const bookletId = params.id;

  if (!bookletId) {
    return NextResponse.json({ error: 'Booklet ID is required' }, { status: 400 });
  }

  try {
    const { error } = await supabase.rpc('increment_download_count', {
      booklet_id: bookletId,
    });

    if (error) {
      console.error('Supabase RPC error:', error);
      return NextResponse.json({ error: 'Failed to increment download count' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: `Download count for ${bookletId} incremented.` });

  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
