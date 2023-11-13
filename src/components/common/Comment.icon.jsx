import React from 'react'

export default function CommentIcon() {
  return (
    <>
      <button className="flex justify-center items-center gap-1.3">
              <svg className="w-3.8 h-3.8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none">
                <path d="M12.1092 9.61953L8.03202 13.1427V11.3389V10.5889H7.28202H5.56048C2.90372 10.5889 0.75 8.43518 0.75 5.77842C0.75 3.12167 2.90373 0.967941 5.56048 0.967941H8.88896C11.609 0.967941 13.814 3.17298 13.814 5.89303C13.814 7.32388 13.1918 8.68399 12.1092 9.61953Z" stroke="#737373" strokeWidth="1.5" />
              </svg>
              <span className="font-Inter font-sm not-italic font-normal leading-1.2 text-neutral/500">11</span>
      </button>
    </>
  )
}
