import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h3>Aofei Li</h3>
      <TOC />
      <a href="https://github.com/AofeiLi-code/kanbas-react-web-app.git" id="wd-github">
        My GitHub Repository
      </a>
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
