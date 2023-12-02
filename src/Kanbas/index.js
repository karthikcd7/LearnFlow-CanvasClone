import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./Users/signin";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Assignments from "./Courses/Assignments";
import store from "./store";
import { Provider } from "react-redux";
import "./css/menu.css";
import "./css/sections.css";
import "./css/index.css";
function Kanbas() {
  return (
    <Provider store={store}>
      <div className="wd-flex-row-container">
        <KanbasNavigation />
        <div class="col" style={{ paddingRight: 20 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Courses/Assignments/*" element={<Assignments />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
