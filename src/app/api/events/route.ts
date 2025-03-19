// src/app/api/events/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mock data (replace with actual database query)
    const events = [
        {
            name: "Every Monday",
            description: "Lunch Hour Family Fellowship",
            time: "1PM:00 - 2:00",
            date: "Next Monday",
          },
          {
            name: "Overnight Prayer",
            description: "except for every 1st friday pf the month",
            time: "10:00 - 40:00 AM",
            date: "Next Friday",
          },
          {
            name: "Sunday Service",
            description: "Sermons and Worship",
            time: "10:00 - 1:00",
            date: "Every Sunday",
          }
    ];

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}