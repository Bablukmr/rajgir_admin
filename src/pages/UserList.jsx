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
              <td className="p-3 text-blue-800 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
