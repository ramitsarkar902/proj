import React, { useState } from 'react';

import logo from './../Assets/img/logo.svg';
import dashSvg from './../Assets/img/sidebar/dashboard.svg';
import depSvg from './../Assets/img/sidebar/departments.svg';
import empSvg from './../Assets/img/sidebar/employees.svg';
import hieSvg from './../Assets/img/sidebar/hierarchy.svg';
import Sidebar from './Sidebar';

function Department() {
  const departmentList = [
    'Engineering',
    'Design',
    'Project Management',
    'Digital Marketing',
    'Allocation Management',
    'Sales',
    'HR Management',
  ];

  const [addDepartmentModal, setAddDepartmentModal] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [departments, setDepartments] = useState(departmentList);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleModal = () => {
    setAddDepartmentModal(!addDepartmentModal);
  };

  const handleInputChange = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted department name: ${departmentName}`);
    setDepartments([...departments, departmentName]);
    setDepartmentName('');
    setAddDepartmentModal(false);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/6 bg-[#334252] h-full">
        <Sidebar />
      </div>

      <div className="w-5/6 bg-gray-100 h-full">
        <div className="w-[56] bg-white p-5 h-[56]">
          <h1 className="text-slate-900 font-bold px-4">Departments</h1>
        </div>

        <div className="">
          <div className="ml-8 flex p-4 pb-0 flex-row">
            <div className="w-5/6">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Departments"
                className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md"
              />
            </div>
            <div className="w-1/6 mx-4">
              <button
                className="w-full h-{40} bg-blue-400 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-5 py-2 mt-2 rounded uppercase"
                type="submit"
                onClick={toggleModal}>
                Add Department
              </button>
            </div>

            <div>
              {addDepartmentModal && (
                <>
                  <div
                    className="overlay fixed inset-0 bg-black opacity-50 z-50"
                    onClick={toggleModal}></div>
                  <div className="modal-content fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-xl w-1/3">
                      <h2 className="pb-5 font-medium">Create Department</h2>
                      <form onSubmit={handleSubmit}>
                        <h4 className="pb-1 text-sm">Department Name: </h4>
                        <input
                          type="text"
                          className="h-10 block w-full px-5 py-3 mb-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-blue-300 dark:text-gray-300 dark:border-blue-300"
                          value={departmentName}
                          onChange={handleInputChange}
                          placeholder="Enter department name"
                          required
                        />
                        <div className="flex flex-row justify-center w-full">
                          <button
                            className=" bg-blue-400 text-sm active:bg-gray-700 cursor-pointer font-regular text-white mx-5 px-5 py-2 mt-2 rounded uppercase"
                            type="submit">
                            Submit
                          </button>
                          <button
                            className=" bg-blue-400 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-5 py-2 mt-2 rounded uppercase"
                            type="button"
                            onClick={toggleModal}>
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 p-12 pt-8 justify-center">
            {departments
              .filter((department) =>
                department.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((department, index) => (
                <div key={index} className="bg-white h-12 p-3 rounded-xl">
                  {department}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
