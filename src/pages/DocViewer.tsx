import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function DocViewer() {
  // ✅ HashRouter에서도 정상적으로 ?url=... 읽어옴
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const rawUrl = params.get("url") || "";
  const title = params.get("title") || "";

  const iframeSrc = useMemo(() => {
    if (!rawUrl) return "";
    // 내부 파일이면 그대로, 외부면 구글 뷰어로 감싸기
    const isInternal = rawUrl.startsWith("/") || rawUrl.startsWith(process.env.PUBLIC_URL || "");
    if (isInternal) return rawUrl; // 예: /cv.pdf
    return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(rawUrl)}`;
  }, [rawUrl]);

  if (!rawUrl) {
    return <div className="p-10 text-gray-600">No document URL provided.</div>;
  }

  return (
    <div className="w-screen h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 h-12 border-b bg-white/90 flex items-center justify-between px-4">
        <div className="font-medium truncate">{title || rawUrl}</div>
        <a href={rawUrl} target="_blank" rel="noreferrer" className="text-sm underline">
          Open original
        </a>
      </div>
      <iframe
        src={iframeSrc}
        title={title || "Document"}
        className="w-full"
        style={{ height: "calc(100vh - 48px)", marginTop: 48 }}
      />
    </div>
  );
}
