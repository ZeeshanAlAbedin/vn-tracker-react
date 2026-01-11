// Need POST for creating user on first login and setup user_settings
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { username: string } }) {
  
} 