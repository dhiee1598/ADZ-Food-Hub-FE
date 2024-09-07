"use client";

import { UserProps } from "@/interfaces/user.props";
import api from "@/utilities/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const GetUser = async () => {
  try {
    const response = await api.get("/api/users");

    return {
      data: response.data as UserProps,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;
    return {
      data: null,
      error,
    };
  }
};

const AuthWrapper = ({ userRole, children }: { userRole: string; children: React.ReactNode }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data, error } = await GetUser();
      if (error) {
        router.push("/sign-in");
        return;
      }

      if (userRole === "user") {
        if (userRole !== data.user.role) {
          router.push("/dashboard");
          return;
        }
      }

      if (userRole === "admin") {
        if (userRole !== data.user.role) {
          router.push("/home");
          return;
        }
      }

      setIsSuccess(true);
    })();
  }, [router, userRole]);

  if (!isSuccess) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-stone-400">
        <ImSpinner9 size={35} className="animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
