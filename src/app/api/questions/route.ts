import { strict_output } from "@/lib/gpt";
import { QuizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

// POST -> api/question
export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const { amount, type, topic } = QuizCreationSchema.parse(body);
    let questions: any;
    if (type === "open_ended") {
      questions = await strict_output(
        "You are a helpful AI that is able to generate a pair question and answer, the lenght of the answer should not exeed 15 words, store all the pairs of answers and questions in a JSON array",
        `you are to generate a random hard open ended questions about ${topic}`,
        {
          question: "question",
          answer: "answer with max length of 15 words",
        },
      );
    }
    return NextResponse.json(
      {
        questions,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        error: error.issues,
      });
    }
    {
      status: 400;
    }
  }
};
