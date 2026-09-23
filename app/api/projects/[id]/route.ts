import { NextResponse } from 'next/server';
import { fetchProjectById } from '@/lib/api/projects';
import { Language } from '@/types/project';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') as Language) || 'en';

  const project = await fetchProjectById(id, lang);

  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}