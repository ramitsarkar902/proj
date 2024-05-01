import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import dashSvg from '../assets/img/sidebar/dashboard.svg';
import depSvg from '../assets/img/sidebar/departments.svg';
import empSvg from '../assets/img/sidebar/employees.svg';
import hieSvg from '../assets/img/sidebar/hierarchy.svg';

function Sidebar() {
  return (
    <>
      <div className="w-[56] bg-slate-500 p-4 h-[56]">
        <img src={logo} alt="" />
      </div>

      <div className="">
        <div className="flex flex-col justify-center text-zinc-400">
          <Link to="/dashboard" className="flex flex-row p-4 pt-6">
            <div className="px-3 pr-2">
              <img src={dashSvg} alt="" />
            </div>
            <div className="">
              <h3>Dashboard</h3>
            </div>
          </Link>

          <Link to="/employees" className="flex flex-row p-4">
            <div className="px-3 pr-2">
              <img src={empSvg} alt="" />
            </div>
            <div className="">
              <h3>Employees</h3>
            </div>
          </Link>

          <Link to="/departments" className="flex flex-row p-4">
            <div className="px-3 pr-2">
              <img src={depSvg} alt="" />
            </div>
            <div className="">
              <h3>Departments</h3>
            </div>
          </Link>

          <Link to="/org-hierarchy" className="flex flex-row p-4">
            <div className="px-3 pr-2">
              <img src={hieSvg} alt="" />
            </div>
            <div className="">
              <h3>Org Hierarchy</h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
