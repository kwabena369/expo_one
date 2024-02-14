import React from 'react'
import * as z from "zod"
 

//  making of the short form 
 import { FormField,FormItem,FormLabel,FormMessage,FormControl } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogInschema } from '@/schemas/LoInSchema'
import { Form, useForm } from 'react-hook-form'

const logIn = () => {

//   import the useForm
const form = useForm<z.infer<typeof LogInschema>>({
   resolver:zodResolver(LogInschema),
   defaultValues:{
    useremail :"",
    password : ""
   }
})
  return (
    <div>
 
  {/*  the form form */}
  
   <Form {...form}>
<form onSubmit={form.handleSubmit(()=>{
  //   here we deal with the sending 
})}>

{/*  this is the actual field for the taking of the user info */}

 <FormField 
 control={form.control}
  name="useremail"
  render={({field})=>(
    // then rendering of each section
    <FormLabel>
       Email
    </FormLabel> 
     
  )} />
   
</form>
     
   </Form>
    </div>
  )
}

export default logIn