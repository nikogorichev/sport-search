import { Autocomplete, Box, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import Events from "../Events/Events";
import './FilterEvent.css'

function FilterEvent() {
  const dispatch = useDispatch();
  const [sport, setSport] = useState('')
  const { events } = useSelector((state) => state.events);
  const { sports } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);
  return (
    <>
      <div className='filter'>
        <Autocomplete onChange={(event) => setSport(event.target.innerText)}
          id="country-select-demo"
          sx={{ width: 420 }}
          options={sports}
          autoHighlight
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2 } }} {...props}>
              {option.title}
            </Box>
          )}

          renderInput={(params) => (
            <TextField
              {...params}
              label="Выбери вид спорта"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </div>
      <Events sport={sport} />
    </>
  )
}

export default FilterEvent
