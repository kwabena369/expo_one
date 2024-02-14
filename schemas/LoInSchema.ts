import * as z from 'zod'

//  for the logIN
export const LogInschema  = z.object({
     useremail : z.string().email(),
     password:z.string()
}) 

