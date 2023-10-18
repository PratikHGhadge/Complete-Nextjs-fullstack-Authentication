"use client";
import Link from "next/link";
import React from "react";
import { Axios } from "axios";
import { useRouter } from "next/navigation";
export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <>
      <div className=" ">
        <div className=" border-black  w-96 mx-auto my  h-screen ">
          <form className=" shadow-xl  px-4 py-8 rounded-lg bg-white mt-20">
            <div className="text-center mb-6">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
            </div>
            <div>
              <div className="block mb-2">
                <label
                  htmlFor={"forUsername"}
                  className="block text-sm font-medium text-gray-700"
                >
                  username
                </label>
              </div>
              <div className="mb-2">
                <input
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="block mb-2">
                <label
                  htmlFor={"forEmail"}
                  className="block text-sm font-medium text-gray-700"
                >
                  email
                </label>
              </div>
              <div className="mb-2">
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="password"
                  className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <div className="block mb-2">
                <label
                  htmlFor={"forPassword"}
                  className="block text-sm font-medium text-gray-700"
                >
                  password
                </label>
              </div>
              <div className="mb-2">
                <input
                  id="password"
                  type="text"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  placeholder="username"
                  className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-black flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black-600 hover:bg-black "
            >
              Submit
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Not registerd yet ?{" "}
              <Link
                href="/login"
                className="font-medium text-black hover:text-black"
              >
                Login!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}