import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('booklet_downloads')
      .select('id, download_count');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch download counts' }, { status: 500 });
    }

    // Transform the data into a more convenient key-value format
    const counts = data.reduce((acc: Record<string, number>, item: { id: string; download_count: number }) => {
      acc[item.id] = item.download_count;
      return acc;
    }, {});

    return NextResponse.json(counts);

  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
