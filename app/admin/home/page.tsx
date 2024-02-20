import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React from "react";

const AdminHome = () => {
  return (
    <LayoutAdmin>
      <h2 className="text-xl">
        Hello
        {/* <span className="text-primary font-medium"> {auth?.user?.email}</span> */}
        <span className="text-primary font-medium"> email</span>
      </h2>
    </LayoutAdmin>
  );
};

export default AdminHome;
