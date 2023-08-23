// game /api/game

import { getAuthSession } from "@/lib/nextauth";
import { QuizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request, res: Response) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        {
          error: "You must be logged in",
        },
        {
          status: 401,
        },
      );
    }
    const body = await req.json();
    const {amount, topic, type} = QuizCreationSchema.parse(body);
  } catch (error) {
    if(error instanceof ZodError) {
        return NextResponse.json({
            error: error.issues
        },
         {
            status: 400
         }
        )
    }
  }
}
