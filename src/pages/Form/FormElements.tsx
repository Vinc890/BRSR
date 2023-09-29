import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  // comp_name: string;
  // comp_id: string;
  // comp_add: string;
  // per_name: string;
  // per_phn: string;
  // per_email: string;
  // pass: string;
  // con_pass: string;
  comp_file: any;
};

const schema = yup.object({
  // comp_name: yup.string().required('Company Name required'),
  // comp_id: yup.string().required('Company ID required'),
  // comp_add: yup.string().required('Company Address required'),
  // per_name: yup.string().required('Contact person Name required'),
  // per_phn: yup.string().required('Contact person phone number required'),
  // per_email: yup
  //   .string()
  //   .email('Invalid Email format')
  //   .required('Contact person email required'),
  // pass: yup
  //   .string()
  //   .required('Password is required')
  //   .min(6, 'Password must be at least 6 characters')
  //   .max(40, 'Password must not exceed 40 characters'),
  // con_pass: yup
  //   .string()
  //   .required('Confirm Password is required')
  //   .oneOf([yup.ref('pass')], 'Confirm Password does not match'),
  comp_file: yup
    .mixed()
    .required('File is required')
    .test('fileFormat', 'Only Excel files are allowed', (value: any) => {
      // Specify 'any' type for 'value'
      if (!value) return true; // Allow empty values, as it's handled by 'required'.
      const allowedFormats = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ];
      const file = value as File;
      // console.log(value)
      return allowedFormats.includes(value[0].type);
    }),
});

const FormElements = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      // comp_name: '',
      // comp_id: '',
      // comp_add: '',
      // per_name: '',
      // per_phn: '',
      // per_email: '',
      // pass: '',
      // con_pass: '',
      comp_file: '',
    },
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Step 1

  const { register, handleSubmit, getValues, formState } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) =>{
    console.log(data);
    async function login() {

      const file = getValues("comp_file")
  
  const FormData = require('form-data');
  let data = new FormData();
  data.append('file', file[0]);
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://15.207.116.57:8090/uploadHierarchies',
    headers: { 
      'Authorization': 'A+/f3q4sEEXbZ2Kl174H9mluKIVKf6KyEfcXEOyl5oTqgpxuP7B+050vm+kdkmsTsLaxLiXqX84=', 
      'Cookie': 'JSESSIONID=766F44D1398C8CE9C06E4D75D80C3A59', 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
        
    }
  }




  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleFormSubmit = () => {
    // Step 2: Set the formSubmitted state to true when the form is submitted
    setFormSubmitted(true);
    handleShowModal(); // Show the modal
  };
  return (
    <>
      <Breadcrumb pageName="FormElements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-row-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Input Fields
                </h3>
              </div>

              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company ABC"
                    {...register('comp_name', {
                      required: 'Company Name is required',
                      minLength: {
                        value: 2,
                        message:
                          "Company name shouldn't be less than 2 characters",
                      },
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.comp_name?.message}</p>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Company_ID
                  </label>
                  <input
                    type="text"
                    placeholder="ABC_123"
                    {...register('comp_id', {
                      required: 'Company ID is required',
                      minLength: {
                        value: 3,
                        message:
                          "Company ID shouldn't be less than 2 characters",
                      },
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.comp_id?.message}</p>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Company Address
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Park, Sector - 123"
                    {...register('comp_add', {
                      required: 'Company Address is required',
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.comp_add?.message}</p>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    placeholder="Ashok"
                    {...register('per_name', {
                      required: 'Contact person is required',
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.per_name?.message}</p>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    {...register('per_phn', {
                      required: "Contact Person's phone number is required",
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.per_phn?.message}</p>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="ashok@abccompany.com"
                    {...register('per_email', {
                      required: "Contact Person's email is required",
                    })}
                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                  />
                  <p className="text-danger">{errors.per_email?.message}</p>
                </div>
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    {...register('pass', {
                      required: 'Password is required',
                    })}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  <p className="text-danger">{errors.pass?.message}</p>
                </div>
                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    {...register('con_pass', {
                      required: 'Confirm password is required',
                    })}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  <p className="text-danger">{errors.con_pass?.message}</p>
                </div>
              </div>
            </div> */}

            {/* <!-- Toggle switch input --> */}

            {/* <!-- Time and date --> */}

            {/* <!-- File upload --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Upload Organizational Structure
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Attach file
                  </label>
                  <input
                    type="file"
                    {...register('comp_file', {
                      required: 'File is required',
                    })}
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                  <p className="text-danger">{errors.comp_file?.message}</p>
                </div>
              </div>
            </div>
            {formSubmitted && showModal && (
              <div className="modal mt-6 rounded-md bg-white w-1/2 mx-auto">
                <div className="modal-content">
                  <span
                    className="close text-black text-xl pl-2 pt-2"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </span>
                  <p className=" text-black text-center font-mono font-medium px-2 pb-2">
                    Thank you. Data Will be updated Soon
                  </p>
                  <div className="flex justify-center my-3">
                    <Link to="/dashboard">
                      <button
                        className={
                          ' inline-flex rounded-md items-center w-45 justify-center gap-2.5 bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4' +
                          (formSubmitted ? 'hidden' : 'block')
                        }
                      >
                        OK
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className=" inline-flex rounded-md items-center w-45 justify-center gap-2.5 bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4"
                onClick={login}
                >
                Upload File
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormElements;
