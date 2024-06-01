import prisma from "@/lib/prisma";
import React from "react";

async function UsersList() {
  const users = await prisma.user.findMany();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          username : {user.username}
          password : {user.username}
          email : {user.username}
          fullname : {user.fullname}
          role : {user.role}
        </div>
      ))}
    </div>
  );
}

export default UsersList;
