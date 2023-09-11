"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { signIn } from "next-auth/react"

type FormInput = {
  email: string
  password: string
}

export default function Form() {
  const [signInCredentialsError, setSignInCredentialsError] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>()
  const gitHubProvider = async () => await signIn('github', {
    redirect: true,
    callbackUrl: "/",
  })

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    })

    console.debug(result)

    setSignInCredentialsError(!!result?.error)
  }

  return (
    <section className="mt-10 flex flex-col items-center gap-4">
      <button onClick={gitHubProvider}>Github</button>
      <p className="text-gray-500">or</p>
      {signInCredentialsError && <p className="text-red-500">Invalid credentials</p>}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="email" {...register("email", { required: true })} />
        <input type="password" placeholder="password" {...register("password", { required: true })} />
        <input type="submit" value="Login" />
      </form>
    </section>
  )
}
