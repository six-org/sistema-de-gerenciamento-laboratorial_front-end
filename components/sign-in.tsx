'use client'

import { getCsrfToken } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

export function SignIn__google() {

    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        const fetchCsrfToken = async () => {
            const token = await getCsrfToken();
            setCsrfToken(token);
        };
        fetchCsrfToken();
    }, []);

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (

        <form
            action='/api/auth/signin/google'
            method="post"
        >
            <input type="hidden" name="callbackUrl" value="/laboratorio" />
            <input name="csrfToken" type="hidden" defaultValue={csrfToken!} />
            <button type="submit" className="overflow rounded-[.2rem] p-[.5rem] transition duration-[.3s] linear bg-neutral-light/5 hover:bg-neutral-light/10 focus-visible:bg-neutral-light/10 w-[8rem] inline-flex justify-center">
                <FcGoogle className="text-[2.5rem]" />
            </button>
        </form>
    )
} 

export function SignIn__github() {

    const [csrfToken, setCsrfToken] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        const fetchCsrfToken = async () => {
            const token = await getCsrfToken();
            setCsrfToken(token);
        };
        fetchCsrfToken();
    }, []);

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (

        <form
            action='/api/auth/signin/github'
            method="post"
        >   
            <input type="hidden" name="callbackUrl" value="/laboratorio" />
            <input name="csrfToken" type="hidden" defaultValue={csrfToken!} />
            <button type="submit" className="overflow rounded-[.2rem] p-[.5rem] transition duration-[.3s] linear bg-neutral-light/5 hover:bg-neutral-light/10 focus-visible:bg-neutral-light/10 w-[8rem] inline-flex justify-center">
                <FaGithub className="text-[2.5rem]" />
            </button>
        </form>
    )
} 