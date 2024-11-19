import React from "react";

const UserList = () => {
  const users = [
    { name: "Amit Sharma", email: "amit.sharma@example.com", phone: "9876543210" },
    { name: "Priya Singh", email: "priya.singh@example.com", phone: "9876543221" },
    { name: "Rahul Verma", email: "rahul.verma@example.com", phone: "9876543232" },
    { name: "Sneha Gupta", email: "sneha.gupta@example.com", phone: "9876543243" },
    { name: "Vikram Kumar", email: "vikram.kumar@example.com", phone: "9876543254" },
  ];

  return (
    <div className=" mx-auto p-6 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.phone}</td>
              <td className="p-3 text-blue-800 cursor-pointer">Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
