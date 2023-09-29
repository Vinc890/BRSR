// import BrandOne from '../images/brand/brand-01.svg';
// import BrandTwo from '../images/brand/brand-02.svg';
// import BrandThree from '../images/brand/brand-03.svg';
// import BrandFour from '../images/brand/brand-04.svg';
// import BrandFive from '../images/brand/brand-05.svg';
import { Link } from "react-router-dom";

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        LIST OF USERS
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Address
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User ID
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Phone
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandOne} alt="Brand" />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">User_1</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white text-center">A Park, Sector123</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">A_768</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">7845123069</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">abc@acomp.com</p>
          </div>

          <div className="flex items-center justify-center">
          <Link
              to="/forms/form-elements"
              className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
            >
              Edit
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandTwo} alt="Brand" />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">
              User_2
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white text-center">B Park, Sector456</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">B_458</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">8795462130</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">bcd@bcomp.com</p>
          </div>

          <div className="flex items-center justify-center">
          <Link
              to="/forms/form-elements"
              className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
            >
              Edit
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandThree} alt="Brand" />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">User_3</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white text-center">C Park, Sector789</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">C_753</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">8521479630</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">cde@ccomp.com</p>
          </div>

          <div className="flex items-center justify-center">
          <Link
              to="/forms/form-elements"
              className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
            >
              Edit
            </Link>
          </div>

        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandFour} alt="Brand" />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">User_4</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white text-center">D Park, Sector123</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">D_986</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">9865741230</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">def@dcomp.com</p>
          </div>

          <div className="flex items-center justify-center">
          <Link
              to="/forms/form-elements"
              className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
            >
              Edit
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <img src={BrandFive} alt="Brand" />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">
              User_5
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white text-center">E Park, Sector456</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">E_147</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">9512347860</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">efg@ecomp.com</p>
          </div>

          <div className="flex items-center justify-center">
          <Link
              to="/forms/form-elements"
              className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-6"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
