import * as z from "zod"
const blog = z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
})

export const collection = { blog }
