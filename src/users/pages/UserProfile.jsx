import React, { useEffect } from "react";
import { getUserData } from "../services/usersApiServices";


export default function Profile() {
  const getUser = async () => {
    try {
      const userData = await getUserData();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return <div></div>;
}
