import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ResSkill({ setActiveSkill }) {
  const [alignment, setAlignment] = React.useState("0");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="0" onClick={() => setActiveSkill("technical")}>
        Technical Skills
      </ToggleButton>
      <ToggleButton value="1" onClick={() => setActiveSkill("programming")}>
        Programming
      </ToggleButton>
      <ToggleButton value="2" onClick={() => setActiveSkill("Technologies")}>
        Technologies
      </ToggleButton>
      <ToggleButton value="3" onClick={() => setActiveSkill("tools")}>
        Tools
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
