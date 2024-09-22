import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white text-black max-w-[400px] rounded-md font-verdana sm:w-[90%] sm-h-[90%]">
      <form onSubmit={formik.handleSubmit} className="p-5 space-y-5 ">
        <div className="d-flex flex-col ">
          <label htmlFor="name" className="w-100 text-gray-800">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-solid border-gray-500 p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {formik.errors.name && (
            <p className="w-fit border border-solid font-500 border-red-500 text-red-500 text-[12px] rounded-sm px-2 py-1 mt-2 ">
              {formik.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="w-100 text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-solid border-gray-500 p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.errors.email && (
            <p className="w-fit border border-solid font-500 border-red-500 text-red-500 text-[12px] rounded-sm px-2 py-1 mt-2 ">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-gray-800">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-solid border-gray-500 p-2 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.errors.password && (
            <p className="w-fit border border-solid font-500 border-red-500 text-red-500 text-[12px] rounded-sm px-2 py-1 mt-2 ">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button type="submit" className="bg-gray-800 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
