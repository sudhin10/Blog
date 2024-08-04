import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";

const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then((response) => {
        console.log(response.data);
        setRows(response.data); // Correctly update state
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []); // Add empty dependency array to run this effect only once
  function deletevalue(a){
    axios.delete('http://localhost:3001/delete/'+a).then((res)=>{
      alert('data deleted')
      window.location.reload()
    }).catch((error)=>{console.log(error)})
  }
  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
      {rows.map((item) => (
        <Card key={item._id} sx={{ minWidth: 275 }} style={{width:'400px'}}>
          <CardContent>
            <img src={item.img_url} alt={item.title} style={{ width: '100%', height: '200px' }} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {item.content}
            </Typography>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="secondary" variant="contained" onClick={()=>{deletevalue(item._id)}}>Delete</Button>
           
            <Button size="small" color="secondary" variant="contained" onClick={()=>{update(item._id)}}>Update</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
