import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import {Link} from "react-router-dom";

import Grid from '@mui/material/Grid';

import '../style/Acciones.css'

const manejarClic = () => {
  try {
    console.log("LE DIO CLIC");
  } catch(error) {
    console.error(error.message);
  }
  //setNumClics(numClics + 1);

  /*
  
  onClick={_volver} 
  */
}
/* Propiedad de sintaxis desectructuracion */
function Acciones({
  _volver,
  _urlNuevo,
  _actualizarRegistro,
  _nuevoRegistro,
  _exportarRegistro,
  _urlDetalle
}) {
  return (
    <Box 
      component="span" m={1} 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" xs={1}>

      <Button variant="outlined" color="inherit" style={{height:'30px',fontSize:'12px'}}>
        <ChevronLeftIcon />
        <Link to="/dashboard">Volver</Link>        
      </Button>

      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button 
          variant="outlined" 
          size="small" 
          color="inherit" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_actualizarRegistro} >
          <AutorenewIcon sx={{fontSize:18,marginRight:1}}/>
          Actualizar
        </Button>

        <Button 
          variant="contained" 
          size="small" 
          color="primary" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_nuevoRegistro} >
          <AddIcon sx={{fontSize:18,marginRight:1}}/>
          <Link to={_urlNuevo}>Nuevo Registro</Link>
        </Button>
        
        <Button 
          variant="contained" 
          size="small" 
          color="success" 
          sx={{marginLeft:'5px',fontSize:'12px'}} 
          onClick={_exportarRegistro} >
          <CloudDownloadIcon sx={{fontSize:18,marginRight:1}}/>
          Exportar XLS
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          sx={{marginLeft:'5px',fontSize:'12px'}}>
          <Link to={_urlDetalle}>DETALLE</Link>
        </Button>
      </Grid>

    </Box>
  );
}

export default Acciones;