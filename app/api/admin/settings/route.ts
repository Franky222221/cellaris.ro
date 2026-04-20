import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const SETTINGS_FILE = path.join(process.cwd(), 'data', 'site-settings.json');

interface SiteSettings {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  workingHours: string;
}

async function readSettings(): Promise<SiteSettings> {
  try {
    const raw = await fs.readFile(SETTINGS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {
      phone: '',
      email: '',
      address: '',
      whatsapp: '',
      facebook: '',
      instagram: '',
      workingHours: '',
    };
  }
}

// GET /api/admin/settings — returnează setările
export async function GET() {
  const settings = await readSettings();
  return NextResponse.json(settings);
}

// PUT /api/admin/settings — actualizează setările
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const current = await readSettings();

    const updated: SiteSettings = {
      ...current,
      ...body,
    };

    await fs.writeFile(SETTINGS_FILE, JSON.stringify(updated, null, 2), 'utf-8');

    return NextResponse.json({ success: true, settings: updated });
  } catch {
    return NextResponse.json(
      { error: 'Eroare internă server' },
      { status: 500 }
    );
  }
}
