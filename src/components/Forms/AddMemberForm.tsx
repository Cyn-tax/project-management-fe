import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { MemberSchema } from "@/lib/schemas/member";
import { createMember } from "@/lib/api";
import { Team } from "@/types";

const AddMemberForm = ({ teams }: { teams: Team[] }) => {
  const router = useRouter();

  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful

  const handleSubmit = async (values: any) => {
    try {
        await createMember({ ...values });
      router.replace("/");
    } catch (error) {
      setMessage("Error creating Member!");
      console.error("Error creating Member:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      city: "",
      state: "",
      country: "",
      team_id: "",
    },
    onSubmit: handleSubmit,
    validationSchema: MemberSchema,
  });

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Add New Member</h2>
      <div hidden={!message} className="alert alert-danger" role="alert">
        {message}
      </div>

      <form className="w-50" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            placeholder="Enter First name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.first_name && (
            <div className="text-danger">{formik.errors.first_name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            placeholder="Enter Last name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.last_name && (
            <div className="text-danger">{formik.errors.last_name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            city
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Enter City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.city && (
            <div className="text-danger">{formik.errors.city}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            name="state"
            className="form-control"
            placeholder="Enter State"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.state && (
            <div className="text-danger">{formik.errors.state}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="form-control"
            placeholder="Enter Country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.country && (
            <div className="text-danger">{formik.errors.country}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="team_id" className="form-label">
            Team
          </label>
          <select
            name="team_id"
            className="form-control form-select"
            value={formik.values.team_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            <option value="" label="Select a Team">
              Select a Team{" "}
            </option>
            {teams.map((team) => (
              <option key={team.id} value={team.id} label={team.name}>
                {" "}
                {team.name}
              </option>
            ))}
          </select>
          {formik.errors.team_id && (
            <div className="text-danger">{formik.errors.team_id}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Create New Member
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
