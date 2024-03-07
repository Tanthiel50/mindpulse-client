import EditForm from "../../components/admin/EditForm";

function EditCategorie() {
  

  return (
    <EditForm
    formHeaders={["name", "description"]}
    fetchDetailsUrl="/categories"
    submitUrl="/categories/edit"
    title="Catégorie"
  />
  );
}

export default EditCategorie