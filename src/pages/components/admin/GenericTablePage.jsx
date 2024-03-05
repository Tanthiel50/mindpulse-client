import { useState, useEffect } from 'react';
import { axiosInstance as axios } from '../../../http-common/axios-configuration';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';

const GenericTablePage = ({
  title,
  createPath,
  fetchDataUrl,
  deleteDataUrl,
  editPathPrefix,
  columns,
  mapDataToRow,
}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchDataUrl);
        setData(response.data);
      } catch (error) {
        console.error(`Erreur lors de la récupération des données:`, error);
      }
    };

    fetchData();
  }, [fetchDataUrl]);

  const handleCreateNewClick = () => {
    navigate(createPath);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${deleteDataUrl}/${id}`);
      toast.success('Suppression réussie');
      // Refetch data
      const response = await axios.get(fetchDataUrl);
      setData(response.data);
    } catch (error) {
      toast.error('Erreur lors de la suppression');
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleEditClick = (id) => {
    navigate(`${editPathPrefix}/${id}`);
  };

  return (
    <div className="admin-container" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5rem',
      backgroundColor: 'white',
    }}>
        <h1>{title}</h1>
        <Button onClick={handleCreateNewClick} className="mb-3">Créer nouveau</Button>
        <Table>
          <TableHead>
            <TableRow>{columns.map((column) => <TableCell key={column}>{column}</TableCell>)}</TableRow>
          </TableHead>
          <TableBody>
            {data.map(mapDataToRow(handleEditClick, handleDelete))}
          </TableBody>
        </Table>
      </div>
  );
};

GenericTablePage.propTypes = {
  title: PropTypes.string.isRequired,
  createPath: PropTypes.string.isRequired,
  fetchDataUrl: PropTypes.string.isRequired,
  deleteDataUrl: PropTypes.string.isRequired,
  editPathPrefix: PropTypes.string.isRequired,
};

export default GenericTablePage;
