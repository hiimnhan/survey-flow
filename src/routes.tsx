import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="flow-editor" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
