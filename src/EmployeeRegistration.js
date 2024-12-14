import React, { useState } from 'react';
import {
  UserIcon,
  ClipboardListIcon,
  BriefcaseIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  OfficeBuildingIcon,
  AnnotationIcon,
  StatusOnlineIcon,
} from '@heroicons/react/outline';

const EmployeeRegistration = () => {
  const [formData, setFormData] = useState({
    srNo: '',
    name: '',
    projectDetails: '',
    internshipDetails: '',
    projectType: '',
    workMode: '',
    startDate: '',
    endDate: '',
    role: '',
    sector: '',
    status: '',
    internshipStatus: '',
    remarks: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setIsSubmitted(true); // Set submission status to true
    setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Registration</h2>

        {/* Display success message */}
        {isSubmitted && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            Form Submitted Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Sr No</label>
              <div className="relative">
                <input
                  type="text"
                  name="srNo"
                  value={formData.srNo}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ClipboardListIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Name of the Candidate</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <div className="relative">
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
              <BriefcaseIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Internship Details</label>
            <div className="relative">
              <textarea
                name="internshipDetails"
                value={formData.internshipDetails}
                onChange={handleChange}
                className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
              <ClipboardCheckIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Type of Project</label>
              <div className="relative">
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <OfficeBuildingIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Work Mode</label>
              <div className="relative">
                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select Mode</option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                <StatusOnlineIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Remarks</label>
            <div className="relative">
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}Qrt
                className="mt-1 block w-full pl-10 rounded-md border-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
              <AnnotationIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
