import * as React from 'react';
import {styled} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {Navegacion_03} from '../../Componente/Navegacion';
import {AccionVolver} from '../../Componente/Accion';
import {TituloDetalle} from '../../Componente/Titulo';
import '../../style/LimpiezaDesinfeccionComponenteSAP.css';

const NAV_01 = "Lista de Encuestas";
const URL_01 = "/home";
const NAV_02 = "Limpieza y Desinfeccion del Componente SAP";
const URL_02 = "/ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP";
const NAV_03 = "Detalle Limpieza y Desinfeccion del Componente SAP";
const DATE_IN_SITU = "01/10/2023";

const itemData = [{
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Foto de Reservorio',
    author: '(obligatorio)',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Foto de Captación',
    author: '(facultativo)',
  },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

function DetalleLimpiezaDesinfeccionComponenteSAP() {
    return (<div>
        <Navegacion_03 
            nav_01={NAV_01} 
            url_01={URL_01} 
            nav_02={NAV_02} 
            url_02={URL_02} 
            nav_03={NAV_03} />
        <Box xs={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Box component="span" m={0} 
                            display="flex" 
                            justifyContent="space-between" 
                            alignItems="left" 
                            xs={1}>
                            <Grid item xs={11} display="flex" justifyContent="flex-start">
                                <TituloDetalle name="Fecha de Recolección (In Situ)" date={DATE_IN_SITU}/>
                            </Grid>
                            <Grid item xs={1} display="flex" justifyContent="flex-center" sx={{ padding:'5px 0 0 20px', textAlign: 'center'}}>
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Validado" color="success" />
                                </Stack>
                            </Grid>
                        </Box>
                        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">

                            <Box gridColumn="span 6">

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Centro Poblado</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Sistema de Agua Potable (SAP)</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Prestador</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Hipoclorito de Calcio Utilizado (kg.)</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </Box>
                                </Box>
                                
                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}} justifyContent="flex-start">
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Recolector</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Fecha de Registro</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>10/02/2023</span>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Sustento</label>
                                    </Box>
                                    <Box gridColumn="span 8"  sx={{padding:'0', margin: '0'}}>
                                        <List sx={{padding:0}}>
                                            <ListItem sx={{padding:'0 0 0 5px'}}>
                                                <ListItemIcon>
                                                    <AddAPhotoIcon sx={{fontSize: 17}}/>
                                                </ListItemIcon>
                                                <ListItemText secondary="Foto de Reservorio (obligatorio)"/>
                                            </ListItem>
                                            <ListItem sx={{padding:'0 0 0 5px'}}>
                                                <ListItemIcon>
                                                    <AddAPhotoIcon sx={{fontSize:17}}/>
                                                </ListItemIcon>
                                                <ListItemText secondary="Foto de Captación (facultativo)"/>
                                            </ListItem>
                                        </List>

                                        <ImageList sx={{ width: 1, height: 210, padding:'0', margin:'10px 0 0 0' }}>
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                <img src={`${item.img}?w=248&fit=crop&auto=format`}
                                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"/>
                                                <ImageListItemBar
                                                    title={item.title}
                                                    subtitle={item.author}
                                                    actionIcon={
                                                        <IconButton
                                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                            aria-label={`info about ${item.title}`} title="DESCARGAR">
                                                            <CloudDownloadIcon />
                                                        </IconButton>
                                                    }/>
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>
                                </Box>

                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}  sx={{p:0.5}}>
                                    <Box gridColumn="span 4" sx={{ textAlign:'right', fontWeight: 'bold' }}>
                                        <label>Observaciones</label>
                                    </Box>
                                    <Box gridColumn="span 8" sx={{ textAlign:'left'}}>
                                        <span>Lorem Ipsum is simply dummy text of the printingy</span>
                                    </Box>
                                </Box>

                            </Box>

                            <Box gridColumn="span 6" sx={{ p:2, border:'1px dashed grey' }}>
                                MAPA
                            </Box>

                        </Box>
                        <Divider variant="middle" sx={{ width:'99%',marginTop:'10px'}}/>
                        <AccionVolver _volver={URL_02} />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </div>)
};

export default DetalleLimpiezaDesinfeccionComponenteSAP;