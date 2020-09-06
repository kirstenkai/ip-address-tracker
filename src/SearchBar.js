import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = () => (
  <Input
    action={{ icon: "angle right" }}
    placeholder="Search for any IP address or domain"
  />
);

export default SearchBar;
