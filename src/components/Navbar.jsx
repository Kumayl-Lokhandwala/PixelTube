import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from "../utils/constants"
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack 
    direction="row"
    alignItems="center"
    p={2}
    sx={{position: "sticky", background:"#021526", top:0, justifyContent:"space-between"}}
  >
    <Link to="/" style={{display:"flex", alignItems:"center"}}>
      <img src={logo} alt="logo" className={"h-9 ml-4 mr-4 p-1"}/>
    </Link>
    <SearchBar/>

  </Stack>
);

export default Navbar