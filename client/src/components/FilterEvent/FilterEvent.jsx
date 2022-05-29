import { Autocomplete, Box, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import Events from "../Events/Events";

function FilterEvent() {
  const dispatch = useDispatch();
  const [sport, setSport] = useState('')
  const { events } = useSelector((state) => state.events);
  const { sports } = useSelector((state) => state.events);
  

  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);
  return(
    <>
    <Autocomplete onChange={(event) => setSport(event.target.innerText)}
      id="country-select-demo"
      sx={{ width: 300 }}
      options={sports}
      autoHighlight
      getOptionLabel={(option) => option.title}
      
      
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.title} 
        </Box>
      )}
     
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a sport"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
    <Events sport={sport}/>
    </>
  )
}

export default FilterEvent
