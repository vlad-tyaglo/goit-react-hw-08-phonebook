import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import AppMainBar from 'components/AppMainBar/AppMainBar';
import { Bars } from  'react-loader-spinner'


const Layout = () => {
  return (
    <>
      <AppMainBar />
        <Suspense fallback={<Bars
              height="50"
              width="50"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
/>}>
        <Outlet />
      </Suspense>
    </>)
}

export default Layout;