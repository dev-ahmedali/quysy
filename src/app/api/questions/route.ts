import { strict_output } from "@/lib/gpt";
import { getAuthSession } from "@/lib/nextauth";
import { QuizCreationSchema } from "@/schemas/form/quiz";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

// POST -> api/question
export const POST = async (req: Request, res: Response) => {
  try {
    // const session = await getAuthSession();
    // if (!session?.user) {
    //   return NextResponse.json(
    //     {
    //       error: "You must be logged in to create a questions",
    //     },
    //     {
    //       status: 401,
    //     },
    //   );
    // }

    const body = await req.json();
    const { amount, type, topic } = QuizCreationSchema.parse(body);
    let questions: any;
    if (type === "open_ended") {
      questions = await strict_output(
        "You are a helpful AI that is able to generate a pair question and answer, the lenght of the answer should not exeed 15 words, store all the pairs of answers and questions in a JSON array",
        new Array(amount).fill(
          `you are to generate a random hard open ended questions about ${topic}`,
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
        },
      );
    } else if (type === "mcq") {
      questions = await strict_output(
        "you are a helpful AI that is able to generate mcq questions and answer, the length of each answer should not exeed i5 words",
        new Array(amount).fill(
          `you are to generate a random mcq questions about ${topic}`,
        ),

        {
          question: "question",
          answer: "answer with max length of 15 words",
          option1: "1st options with max length of 15 words",
          option2: "2nd options with max length of 15 words",
          option3: "3rd options with max length of 15 words",
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
