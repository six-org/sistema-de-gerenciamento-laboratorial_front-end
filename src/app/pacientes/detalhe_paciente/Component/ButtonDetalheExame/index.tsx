"use client"; 
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

interface DownloadButtonProps {
  onDownload: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload }) => {
  return (
    <button
      onClick={onDownload}
      className="flex items-center justify-center py-[5px] px-[6px] w-[91.47px] h-[24px] border border-primary-pure text-primary-pure rounded-md"
    >
      <span className="text-[14px] font-bold">Detalhes</span>
      <MdOutlineFileDownload className="ml-2 text-primary-pure" style={{ fontSize: '14px' }} />
    </button>
  );
};

export default DownloadButton;
