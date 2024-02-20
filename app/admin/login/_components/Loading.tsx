import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress } from "@mui/material";
const Loading = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to another page after 2 seconds
      router.push("/admin/login");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [router.pathname]);
  return (
    <section className="loader-section">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
};

export default Loading;
