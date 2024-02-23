import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionWithCheckboxes() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const handleCheckboxChange = (checkboxNumber) => {
    if (checkboxNumber === 1) {
      setChecked1(!checked1);
    } else if (checkboxNumber === 2) {
      setChecked2(!checked2);
    }
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <div style={{ paddingLeft: '16px' }}>
          <FormControlLabel
            control={<Checkbox checked={checked1} onChange={() => handleCheckboxChange(1)} />}
            label="Checkbox 1"
          />
        </div>
        <div style={{ paddingLeft: '16px' }}>
          <FormControlLabel
            control={<Checkbox checked={checked1} onChange={() => handleCheckboxChange(1)} />}
            label="Checkbox 2"
          />
        </div>
        <div style={{ paddingLeft: '16px' }}>
          <FormControlLabel
            control={<Checkbox checked={checked1} onChange={() => handleCheckboxChange(1)} />}
            label="Checkbox 3"
          />
        </div>
      </Accordion>
     
    </div>
  );
}
