import { z } from "zod";

export const QuizCreationSchema = z.object({
  topic: z
    .string()
    .min(4, { message: "Topic must be at least 4 characters logn" })
    .max(50),
    type: z.enum(['mcq', 'open_ended']),
    amount: z.number().min(1).max(10)
});
