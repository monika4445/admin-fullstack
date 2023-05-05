import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    categoryId: "",
    price: "",
    description: "",
    quantity: "",
  });
  const [categories, setCategories] = useState([]);
  const [created, setCreated] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function createProduct(e) {
    e.preventDefault();
    const {user} = useLocalStorage()
    if(product.name.trim() === '' || product.image.trim() === '' || product.categoryId === '' || product.price.trim() === '' || 
    product.description.trim() === '' || product.quantity.trim() === ''){
      setErr('Fill all fields');
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/createProduct", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: user.jwt,
        },
      });
      if(!response.ok){
        setCreated('');
        setErr('404 Not Found');
      }else{
        setErr('');
        setCreated('Product Created');
        navigate('/products');
      }
    } catch (err) {
      console.log(err);
    }
    setProduct({ name:'',image:'',categoryId:'',price:'',description:'',quantity:''})
  }

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

  return (
    <div>
      <Typography component="h2" variant="h5" color="#333" sx={{textAlign:'center', marginTop:'15px'}}>Create Product</Typography>
      <Typography  component='p' color="blue" sx={{ height:'10px',textAlign:'center',fontSize:'15px'}}>{created ? created : ''}</Typography>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "41ch" },
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        component="form"
        autoComplete="off"
        onSubmit={createProduct}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={product.name}
          onChange={(e) => setProduct(prevState => ({ ...prevState, name: e.target.value }))}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={product.image}
          onChange={(e) => setProduct(prevState => ({ ...prevState, image: e.target.value }))}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product.categoryId}
            label="Category"
            onChange={(e) => setProduct(prevState => ({ ...prevState, categoryId: e.target.value }))}
          >
            {categories.map((category) => (
              <MenuItem value={category.id} key={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={product.price}
          onChange={(e) => setProduct(prevState => ({ ...prevState, price: e.target.value }))}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={product.description}
          onChange={(e) => setProduct(prevState => ({ ...prevState, description: e.target.value }))}
        />
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          value={product.quantity}
          onChange={(e) => setProduct(prevState => ({ ...prevState, quantity: e.target.value }))}
        />
        <Typography  component='p' color="red" sx={{ height:'10px',textAlign:'center',fontSize:'15px'}}>{err ? err : ''}</Typography>
        <Button variant="outlined" onClick={createProduct}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default CreateProduct;
