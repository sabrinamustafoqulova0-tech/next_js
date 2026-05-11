"use client";
import React, { useState } from "react";
import {
  useAddUserMutation,
  useCheckUserMutation,
  useDeleteUsersMutation,
  useEditUserMutation,
  useGetUsersQuery,
} from "../services/users.api";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery(null);

  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUsersMutation();
  const [editUserApi] = useEditUserMutation();
  const [chekbox] = useCheckUserMutation();

  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState<any>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      country: "",
      image: "",
      role: "",
      email: "",
      phone: "",
      age: "",
      bloodGroup: "",
      height: "",
      weight: "",
    },

    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      if (editUser) {
        await editUserApi({
          ...values,
          id: editUser.id,
        });
      } else {
        await addUser(values);
      }

      resetForm();
      setOpen(false);
      setEditUser(null);
    },
  });

  function openAddModal() {
    setEditUser(null);
    formik.resetForm();
    setOpen(true);
  }

  function openEditModal(user: any) {
    setEditUser(user);

    formik.setValues({
      firstName: user.firstName + " " + user.lastName,
      country: user.country,
      image: user.image,
      role: user.role,
      email: user.email,
      phone: user.phone,
      age: user.age,
      bloodGroup: user.bloodGroup,
      height: user.height,
      weight: user.weight,
    });

    setOpen(true);
  }

  
  return (
    <div className="p-8 bg-gradient-to-br min-h-screen">
      <div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <p className="text-gray-500 mt-1">Manage all registered users</p>
        </div>

        <Button
          onClick={openAddModal}
          sx={{
            backgroundColor: "#111827",
            paddingX: 3,
            paddingY: 1.2,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#000" },
          }}
          variant="contained"
        >
          + Add User
        </Button>
      </div>
      {open && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg border border-gray-200 transition-all">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {editUser ? "✏️ Edit User" : "➕ Add New User"}
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {editUser
                  ? "Update user information"
                  : "Fill in the details to create a new user"}
              </p>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                setEditUser(null);
                formik.resetForm();
              }}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John Doe"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Rolle..."
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email..."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight*
                </label>
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight..."
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age*
                </label>
                <input
                  type="text"
                  name="age"
                  placeholder="Age..."
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height*
                </label>
                <input
                  type="text"
                  name="height"
                  placeholder="Height..."
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone..."
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image URL
                </label>
                <div className="flex gap-3 items-start">
                  <input
                    type="text"
                    name="image"
                    placeholder="https://example.com/avatar.jpg"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  country
                </label>
                <input
                  name="country"
                  placeholder="Tell us country this user..."
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 outline-none focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200 transition resize-none"
                />
              </div>
            </div>

            <div className="flex mt-[20px] gap-3  pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setEditUser(null);
                  formik.resetForm();
                }}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition font-medium"
                type="submit"
              >
                {editUser ? " Edit " : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {isLoading && (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          Loading users...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-2xl">
          Something went wrong
        </div>
      )}

      {!isLoading && data && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-gray-500 text-sm uppercase">
              <tr>
                <th className="p-5">User</th>
                <th className="p-5">Email</th>
                <th className="p-5">Phone</th>
                <th className="p-5">Role</th>
                <th className="p-5">Status</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e: any) => (
                <tr key={e.id} className="border-t hover:bg-gray-50">
                  <td className="p-5 flex items-center gap-3">
                    <img src={e.image} className="w-10 h-10 rounded-full" />
                    <span className="font-semibold">
                      {e.firstName} {e.lastName}
                    </span>
                  </td>

                  <td className="p-5">{e.email}</td>
                  <td className="p-5">{e.phone}</td>

                  <td className="p-5">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {e.role}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className={`px-3 py-1 text-xs rounded-full ${e.status?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`}>
                      {e.status?"Active":"Inactive"}
                    </span>
                  </td>

                  <td className="p-5">
                    <div className="flex justify-center gap-3">
                      <Link href={`users/info/${e.id}`}>
                        <button className="p-2 bg-gray-100 rounded-lg">
                          <InfoIcon fontSize="small" />
                        </button>
                      </Link>

                      <button
                        onClick={() => openEditModal(e)}
                        className="p-2 bg-blue-100 rounded-lg"
                      >
                        <EditIcon fontSize="small" />
                      </button>

                      <button
                        onClick={() => deleteUser(e.id)}
                        className="p-2 bg-red-100 rounded-lg"
                      >
                        <DeleteIcon fontSize="small" />
                      </button>

                        <input
                        onChange={() => chekbox(e)}
                          type="checkbox"
                          checked={e.status}
                        />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
