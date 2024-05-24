import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { ProjectSchema } from "@/lib/schemas/project";
import { createProject } from "@/lib/api";

const AddProjectForm = () => {
  const router = useRouter();

  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful

  const handleSubmit = async (values: any) => {
    try {
      await createProject({ ...values });
      router.replace("/");
    } catch (error) {
      setMessage("Error creating project!");
      console.error("Error creating project:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: handleSubmit,
    validationSchema: ProjectSchema,
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Add New Project</h2>
      <div hidden={!message} className="alert alert-danger" role="alert">
        {message}
      </div>

      <form className="w-50" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter project name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
