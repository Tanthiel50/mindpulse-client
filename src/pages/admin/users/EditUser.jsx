import EditForm from "../../components/admin/EditForm"


function EditUser() {
  return (
    <EditForm
    formHeaders={["name", "email", "role", "password"]}
    fetchDetailsUrl="/users"
    submitUrl="/users/edit"
    title="Utilisateur"
  />
  )
}

export default EditUser