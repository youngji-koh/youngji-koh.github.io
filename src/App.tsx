import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import DocViewer from "./pages/DocViewer";  // 새로 만든 뷰어 페이지

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 문서 뷰어 라우트 */}
        <Route path="/viewer" element={<DocViewer />} />

        {/* 기본 홈페이지 */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}
