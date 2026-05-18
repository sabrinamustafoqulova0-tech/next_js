"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AddUser,
  DeleteUser,
  EditStatus,
  EditUser,
  GetTodo,
  GetUserById,
} from "../services/todo.zapros";
import "../globals.css";
import { queryClient } from "@/components/Provider";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const getTodoQuery = useQuery({
    queryKey: ["todos"],
    queryFn: GetTodo,
  });
  const deleteTodoMutation = useMutation({
    mutationFn: DeleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [openInfo, setOpenInfo] = useState(false);
  const [infoId, setInfoId] = useState<any>(null);

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
  } = useForm();

  const { register, handleSubmit, reset } = useForm();

  const addMutation = useMutation({
    mutationFn: AddUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      setOpenAdd(false);

      reset();
    },
  });

  const editMutation = useMutation({
    mutationFn: EditUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      setOpenEdit(false);
    },
  });
  const editStatus = useMutation({
    mutationFn: EditStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const infoQuery = useQuery({
    queryKey: ["user", infoId],
    queryFn: () => GetUserById(infoId),
    enabled: !!infoId && openInfo,
  });

  const { data, error, isLoading } = getTodoQuery;
  const { mutate: DeleteTodo, data: data2, error: error2 } = deleteTodoMutation;

  const { mutate: addUser } = addMutation;
  const { mutate: editUser } = editMutation;
  const { mutate: editedStatus } = editStatus;

  function onSubmit(data: any) {
    addUser({
      ...data,
      status: true,
    });
  }

  function onEdit(data: any) {
    editUser({
      id: selectedUser.id,

      user: {
        ...data,
        status: selectedUser.status,
      },
    });
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-red-500">
        Error
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-center  items-center gap-20  mb-10">
        <h1 className="text-4xl font-bold text-center">Users List</h1>

        <button
          onClick={() => setOpenAdd(true)}
          className="bg-green-600 text-white px-5 py-2 rounded-xl"
        >
          Add User
        </button>

        {openAdd && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-2xl w-[400px] flex flex-col gap-4"
            >
              <h1 className="text-3xl font-bold text-center">Add User</h1>

              <input
                {...register("name")}
                placeholder="Name"
                className="border p-3 rounded-xl"
              />

              <input
                {...register("age")}
                placeholder="Age"
                className="border p-3 rounded-xl"
              />

              <input
                {...register("img")}
                placeholder="Image URL"
                className="border p-3 rounded-xl"
              />

              <button className="bg-green-600 text-white py-3 rounded-xl">
                Save
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((user: any) => {
          return (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 duration-300"
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-gray-200"
              />

              <div className="text-center mt-5">
                <h2 className="text-2xl font-bold">{user.name}</h2>

                <p className="text-gray-500 mt-2">Age: {user.age}</p>

                <p
                  className={`mt-2 font-semibold ${
                    user.status ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {user.status ? "Active" : "Inactive"}
                </p>
                <input
                  type="checkbox"
                  checked={user.status}
                  onChange={() =>
                    editedStatus({
                      id: user.id,
                      status: !user.status,
                    })
                  }
                />
                <div className="flex justify-center gap-5">
                  <button
                    onClick={() => DeleteTodo(user.id)}
                    className="bg-red-500 text-white px-5 py-2 rounded-xl"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setOpenEdit(true);
                      setSelectedUser(user);
                      resetEdit({
                        name: user.name,
                        age: user.age,
                        img: user.img,
                      });
                    }}
                    className="bg-blue-500 text-white px-5 py-2 rounded-xl"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setInfoId(user.id);
                      setOpenInfo(true);
                    }}
                    className="bg-black text-white px-5 py-2 rounded-xl"
                  >
                    Info
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {openInfo && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
    <div className="bg-white p-8 rounded-2xl w-[400px]">
      <h1 className="text-2xl font-bold text-center mb-5">
        User Info
      </h1>

      {!infoQuery.data ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="text-center flex flex-col gap-3">
          <img
            src={infoQuery.data.img}
            className="w-24 h-24 mx-auto rounded-full"
          />

          <h2 className="text-xl font-bold">
            {infoQuery.data.name}
          </h2>

          <p>Age: {infoQuery.data.age}</p>

          <p
            className={
              infoQuery.data.status
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {infoQuery.data.status
              ? "Active"
              : "Inactive"}
          </p>

          <button
            onClick={() => {
              setOpenInfo(false);
              setInfoId(null);
            }}
            className="bg-red-500 text-white py-2 rounded-xl mt-3"
          >
            Close
          </button>
        </div>
      )}
    </div>
  </div>
)}

      {openEdit && (
        <div className="fixed inset-0 bg-[#00000010] flex justify-center items-center">
          <form
            onSubmit={handleSubmitEdit(onEdit)}
            className="bg-white p-8 rounded-2xl w-[400px] flex flex-col gap-4"
          >
            <h1 className="text-3xl font-bold text-center">Edit User</h1>

            <input
              {...registerEdit("name")}
              placeholder="Name"
              className="border p-3 rounded-xl"
            />

            <input
              {...registerEdit("age")}
              placeholder="Age"
              className="border p-3 rounded-xl"
            />

            <input
              {...registerEdit("img")}
              placeholder="Image URL"
              className="border p-3 rounded-xl"
            />

            <button className="bg-blue-600 text-white py-3 rounded-xl">
              Save Edit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
