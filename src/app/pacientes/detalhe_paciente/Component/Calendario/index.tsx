"use client";
import React from "react";

const MiniCalendario: React.FC = () => {
  
  const diasMarcados = [true, false, true, false, true, false, true];

  return (
    <div className="w-[284px] flex flex-col items-center mt-4">
      <div className="flex flex-row justify-between w-full px-2">
        {["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"].map((day, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-[5.2px] h-[5.2px] rounded-full ${
                diasMarcados[index] ? "bg-primary-pure" : "bg-[#48505E]"
              } mb-1`} 
            ></div>
            <p className="text-[#71717A] text-[9.54px] font-bold mt-4">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendario;
