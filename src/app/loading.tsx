import { ImSpinner } from "react-icons/im";

<ImSpinner />

export default function Loading() {
    // Or a custom loading skeleton component
    return (
    <div className="bg-white min-h-screen h-screen min-w-screen w-screen flex flex-col items-center justify-center">
        <p className="flex items-center gap-[.5rem]"><ImSpinner className="animation-spinner" /> Carregando...</p>
    </div>
    )
  }