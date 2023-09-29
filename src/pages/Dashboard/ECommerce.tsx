// import CardFour from '../../components/CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
// import CardTwo from '../../components/CardTwo.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import { Link } from 'react-router-dom';
import { BsBuildingAdd } from 'react-icons/bs';


const ECommerce = () => {

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div> */}
      <div className='flex justify-end'>
        <Link
          to="/forms/form-elements2"
          className=" inline-flex rounded-md items-center w-45 justify-center gap-2.5 bg-primary py-3 px-2 text-center font-medium text-white hover:bg-opacity-90 xl:px-4"
        >
          <span>
            <BsBuildingAdd />
          </span>
          Add User
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}

        <div className="col-span-12 ">
          <TableOne />
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
