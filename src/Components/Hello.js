import React from "react";
import { useParams } from "react-router-dom";
export const Hello = ()=>{
    const { pageNumber } = useParams();
    return <>
    <h1 className="flex h-screen bg-slate-400 font-bold text-4xl">
        {pageNumber}
    </h1>
    </>
}