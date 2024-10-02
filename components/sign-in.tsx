'use client'

import { getCsrfToken } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

export function SignIn__google() {
    return (

        <button onClick={() => signIn('github', { redirectTo: "/laboratorio" })} className="overflow rounded-[.2rem] p-[.5rem] transition duration-[.3s] linear bg-neutral-light/5 hover:bg-neutral-light/10 focus-visible:bg-neutral-light/10 w-[8rem] inline-flex justify-center">
            <FcGoogle className="text-[2.5rem]" />
        </button>
    )
}

export function SignIn__github() {
    return (

        <button onClick={() => signIn('github', { redirectTo: "/laboratorio" })} className="overflow rounded-[.2rem] p-[.5rem] transition duration-[.3s] linear bg-neutral-light/5 hover:bg-neutral-light/10 focus-visible:bg-neutral-light/10 w-[8rem] inline-flex justify-center">
            <FaGithub className="text-[2.5rem]" />
        </button>
    )
} 