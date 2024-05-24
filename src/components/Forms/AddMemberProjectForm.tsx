import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { MemberProjectSchema } from "@/lib/schemas/memberProject";
import { createMemberProject } from "@/lib/api";
import { Project, Member } from "@/types";

const AddMemberProjectForm = ({ members, projects }: { members: Member[]; projects: Project[] }) => {
  const router = useRouter();

  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful

  const handleSubmit = async (values: any) => {
    try {
      await createMemberProject({ ...values });
      router.replace("/");
    } catch (error) {
      setMessage("Error creating memberProject!");
      console.error("Error creating memberProject:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      project_id: "",
      member_id: "",
    },
    onSubmit: handleSubmit,
    validationSchema: MemberProjectSchema,
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Add New MemberProject</h2>
      <div hidden={!message} className="alert alert-danger" role="alert">
        {message}
      </div>

      <form className="w-50" onSubmit={formik.handleSubmit}>
      <div className="mb-3">
          <label htmlFor="member_id" className="form-label">
            Member
          </label>
          <select
            name="member_id"
            className="form-control form-select"
            value={formik.values.member_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            <option value="" label="Select a Member">
              Select a Member{" "}
            </option>
            {members.map((member) => (
              <option key={member.id} value={member.id} label={`${member.first_name} ${member.last_name}`}>
                {" "}
                {`${member.first_name} ${member.last_name}`}
              </option>
            ))}
          </select>
          {formik.errors.member_id && (
            <div className="text-danger">{formik.errors.member_id}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="project_id" className="form-label">
            Project
          </label>
          <select
            name="project_id"
            className="form-control form-select"
            value={formik.values.project_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            <option value="" label="Select a Project">
              Select a Project{" "}
            </option>
            {projects.map((project) => (
              <option key={project.id} value={project.id} label={`${project.name}`}>
                {" "}
                {`${project.name}`}
              </option>
            ))}
          </select>
          {formik.errors.project_id && (
            <div className="text-danger">{formik.errors.project_id}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Add MemberProject
        </button>
      </form>
    </div>
  );
};

export default AddMemberProjectForm;
