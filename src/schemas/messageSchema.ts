import { z } from "zod";

export const messageSchema = z.object({
  centent: z
    .string()
    .min(10, { message: "Content must be of atlest of 10 characters" })
    .max(300, { message: "Content must be no longer than 300 characters" }),
});
