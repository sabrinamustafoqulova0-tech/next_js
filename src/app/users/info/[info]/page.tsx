'use client'

import { useGetInfoQuery } from '@/src/app/services/users.api'
import { useParams, useRouter } from 'next/navigation'

const Page = () => {
  const { info } = useParams()
  const router = useRouter()

  const { data, isLoading, error } = useGetInfoQuery(info as string)

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-[#f4f7fb]">
        <h1 className="text-3xl font-bold text-slate-700">
          Loading...
        </h1>
      </div>
    )

  if (error)
    return (
      <div className="flex h-screen items-center justify-center bg-[#f4f7fb]">
        <h1 className="text-3xl font-bold text-red-500">
          Error...
        </h1>
      </div>
    )

  return (
    <div className="min-h-screen bg-[#f4f7fb] p-6 md:p-10 ">
      
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-105 hover:bg-slate-100"
      >
        ← Back
      </button>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-xl">
        
        {/* Top */}
        <div className="relative h-36 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
          <div className="absolute -bottom-16 left-10">
            <img
              src={data?.image}
              alt=""
              className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 pt-24 md:px-12">
          
          {/* Name */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                {data?.firstName} {data?.lastName}
              </h1>

              <p className="mt-2  text-slate-500">
                @{data?.username}
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-100 px-5 py-3 text-sm font-semibold text-cyan-700">
              {data?.company?.title}
            </div>
          </div>

          {/* Cards */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            
            {/* Contact */}
            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-4">
              <h2 className="mb-6 text-2xl font-bold text-slate-800">
                Contact Info
              </h2>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className=" font-medium text-slate-700">
                    {data?.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className=" font-medium text-slate-700">
                    {data?.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Address</p>

                  <p className=" font-medium text-slate-700">
                    {data?.address?.address}
                  </p>

                  <p className="text-slate-500">
                    {data?.address?.city},{' '}
                    {data?.address?.state}
                  </p>

                  <p className="text-slate-500">
                    {data?.address?.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7">
              <h2 className=" text-2xl font-bold text-slate-800">
                Company
              </h2>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-slate-400">
                    Company Name
                  </p>

                  <p className=" font-medium text-slate-700">
                    {data?.company?.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Department
                  </p>

                  <p className=" font-medium text-slate-700">
                    {data?.company?.department}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Position</p>

                  <p className=" font-medium text-slate-700">
                    {data?.company?.title}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Company Address
                  </p>

                  <p className="font-medium text-slate-700">
                    {data?.company?.address?.address}
                  </p>

                  <p className="text-slate-500">
                    {data?.company?.address?.city},{' '}
                    {data?.company?.address?.state}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
              <p className="text-sm text-slate-400">Age</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-800">
                {data?.age}
              </h1>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
              <p className="text-sm text-slate-400">Blood</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-800">
                {data?.bloodGroup}
              </h1>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
              <p className="text-sm text-slate-400">Height</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-800">
                {data?.height}
              </h1>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
              <p className="text-sm text-slate-400">Weight</p>

              <h1 className="mt-2 text-3xl font-bold text-slate-800">
                {data?.weight}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page