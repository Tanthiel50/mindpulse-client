import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../http-common/axios-configuration";
import CreateForm from "./CreateForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditForm = ({ formHeaders, editPath, submitUrl, title }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${submitUrl}/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, submitUrl]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`${submitUrl}/${id}`, formData);
      toast.success(`${title} mis à jour avec succès`);
      navigate(editPath);
    } catch (error) {
      // Vérification de la présence d'un message d'erreur dans la réponse du back-end
      if (error.response && error.response.data && error.response.data.message) {
        // Si l'erreur contient une structure détaillée (par exemple, des champs spécifiques en erreur)
        if (typeof error.response.data.message === "object") {
          const messages = Object.values(error.response.data.message).join(". ");
          toast.error(`Erreur : ${messages}`);
        } else {
          // Si l'erreur est une chaîne simple
          toast.error(`Erreur : ${error.response.data.message}`);
        }
      } else {
        // Message d'erreur générique si la réponse du back-end ne contient pas de détail
        toast.error("Une erreur est survenue lors de la mise à jour du mot.");
      }
      console.error("Erreur de soumission :", error);
    }
  };

  return (
    <EditForm
      formHeaders={formHeaders}
      createPath={editPath}
      submitUrl={submitUrl}
      title={title}
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditForm;
