import CreateForm from "../../components/admin/CreateForm";


function CreateUser() {
  const formHeaders = ["name", "email", "password", "role"];
  const createPath = "/admin/users";
  const submitUrl = "/users";
  const specialFields = [
    {
      type: "select",
      name: "role",
      label: "Rôle",
      options: [{ label: "Admin", value: "admin" }, { label: "User", value: "user" }]
    }
  ];

  return (
    <CreateForm
      title="Utilisateurs"
      formHeaders={formHeaders}
      specialFields={specialFields}
      createPath={createPath}
      submitUrl={submitUrl}
    />
  )
}

export default CreateUser