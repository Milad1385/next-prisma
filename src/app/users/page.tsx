import UsersList from "@/components/modules/userlist/Users";
import React, { Suspense } from "react";

async function Users() {
  return (
    <div>
      <Suspense fallback={<p>Loading ....</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}

export default Users;
