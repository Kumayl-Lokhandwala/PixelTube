import { Stack } from "@mui/material"
import { categories, channels, new1 } from "../utils/constants"
import { red } from "@mui/material/colors";
import {Select} from "@mui/material";
import ChannelDrop from "./ChannelDrop";
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GenreDrop from "./GenreDrop";
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = ({selectedCategory, setselectedCategory}) => {
    const [drop, setDrop] = useState(false)
    const [drop2, setDrop2] = useState(false)
    
    


    return(
        <Stack
        direction="row"
        sx={{
            overflowY:"auto",
            height:{sx:"auto", md:"95%"},
            flexDirection:{md:"column"},
            // minWidth:"150px",
            // maxWidth:"150px",
             width:"160px",
            // 
        }}
        >
             {new1.map((category)=>(
            <button
            className="category-btn"
            onClick={()=> setselectedCategory(category.name)}
            style={{
                background:category.name===selectedCategory && "#6EACDA",
                color:"white",
                height: 40,
            }}
            key={category.name}
            >
                <span style={{color:category.name === selectedCategory?"white":red, marginRight:"15px"}}>{category.icon}</span>
                <span style={{opacity:category.name===selectedCategory?"1":"0.8"}}>{category.name}</span>
            </button>
        ))}
            <div className="category-btn text-white flex gap-2 h-10"  onClick={() => setDrop((prev) => !prev)} >
                <SubscriptionsIcon/>
                Channels
                <ArrowDropDownIcon className={`${!drop && '-rotate-90'} transition-all duration-300`}/>
            </div>
            <ChannelDrop drop = {drop} selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />

            <div className="category-btn text-white flex gap-5 h-10"  onClick={() => setDrop2((prev) => !prev)} >
                <CategoryIcon/>
                Genre
                <ArrowDropDownIcon className={`${!drop2 && '-rotate-90'} transition-all duration-300`}/>
            </div>
            <GenreDrop drop = {drop2} selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
    </Stack>
    )
}




export default Sidebar