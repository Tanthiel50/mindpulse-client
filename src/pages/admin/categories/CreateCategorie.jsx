import React from "react";
import CreateForm from "../../components/admin/CreateForm";


const CreateCategorie = () => {
  const formHeaders = ["name", "slug", "description"];
  const createPath = "/admin/categories";
  const submitUrl = "/categories";

  return (
    <CreateForm
      title="Categorie"
      formHeaders={formHeaders}
      createPath={createPath}
      submitUrl={submitUrl}
    />
  );
};

export default CreateCategorie;
