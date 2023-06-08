import { NextResponse } from "next/server";

export async function GET() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Client-ID': process.env.DB_CLIENT || '',
            'Authorization': `Bearer ${process.env.DB_RESULT_TOKEN}`,
          },
    };
    try{
        const res = await fetch(`https://api.twitch.tv/helix/streams?game_id=772421245&game_id=1705795372&game_id=1740873338&game_id=1745202732&game_id=30921&language=fr`, options)
        const twitch = await res.json()
        return NextResponse.json(twitch.data);
  
    }catch(error: any){
        console.log(error.message)
    }
  }
  