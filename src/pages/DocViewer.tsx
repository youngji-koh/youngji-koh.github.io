import React from "react";
import { useLocation } from "react-router-dom";

export default function DocViewer() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const rawUrl = params.get("url") || "";

  if (!rawUrl) {
    return <div className="p-10 text-gray-600">No document URL provided.</div>;
  }

  return (
    <div className="w-screen h-screen bg-white">
      {/* 내부 PDF를 꽉 차게 보여줌 */}
      <object
        data={rawUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        {/* 일부 브라우저 fallback */}
        <iframe src={rawUrl} width="100%" height="100%" title="PDF document" />
      </object>
    </div>
  );
}
