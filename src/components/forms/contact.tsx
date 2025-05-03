"use client";

import { useForm } from "@/hooks/form"
import Button from "../ui/button"
import Input from "../ui/input"
import TextArea from "../ui/textarea"
import styles from "./contact.module.css"
import { z } from "zod"
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
})

type ContactSchema = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [state, setState] = useState<"awaiting" | "sending" | "sent">("awaiting");

  const { register, handleSubmit, values } = useForm({
    schema: contactSchema
  })

  const onSubmit = () => {
    setState("sending")
    setTimeout(() => setState("sent"), 500);
  }

  return <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
    {
      state == "awaiting" && <>
        <div className={styles.name}>
          <Input
            {...register("firstName")}
            label="First Name"
            placeholder="E.g John"
          />
          <Input
            {...register("lastName")}
            label="Last Name"
            placeholder="E.g Smith"
          />
        </div>

        <Input
          {...register("email")}
          label="Email"
          placeholder="example@email.com"
        />

        <TextArea
          {...register("message")}
          label="Message"
          rows={4}
          placeholder="Create your message"
        />
        <Button>Send Message</Button>
      </>
    }

    {
      state == "sending" && <h3>Sending . . .</h3>
    }

    {
      state == "sent" && <h3>{`Thanks ${values.firstName}, your message has been sent!`}</h3>
    }
  </form>
}
