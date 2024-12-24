import React from "react";
import { categories, channels } from "../utils/constants";
import { Stack } from "@mui/material";

const ChannelDrop = ({ selectedCategory, setselectedCategory, drop }) => {
  return (
    <div>
      {drop ? (
        <Stack
          direction="row"
          sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
            minWidth:"130px",
          }}
        >
          {channels.map((category) => (
            <button
              className="category-btn"
              onClick={() => setselectedCategory(category.name)}
              style={{
                background: category.name === selectedCategory && "#6EACDA",
                color: "white",
                height: 40,
              }}
              key={category.name}
            >
              <span
                style={{
                  color: category.name === selectedCategory ? "white" : "red",
                  marginRight: "15px",
                }}
              >
                {category.icon}
              </span>
              <span
                style={{
                  opacity: category.name === selectedCategory ? "1" : "0.8",
                }}
                // className="truncate"
              >
                {category.name}
              </span>
            </button>
          ))}
        </Stack>
      ) : null}
    </div>
  );
};

export default ChannelDrop;
