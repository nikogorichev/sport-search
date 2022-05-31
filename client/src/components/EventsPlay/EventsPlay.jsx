import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Box, styled } from "@mui/material";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventsPlayCard from "../EventsPlayCard/EventsPlayCard";


//СТРАНИЦА МЕРОПРИЯТИЙ В КОТОРЫХ УЧАСТВУЕТ USER
function EventsPlay(props) {

  const { userEvents } = useSelector(state => state.events)
  const dispatch = useDispatch()
// console.log('kriiiinge', userEvents)

  //Достаем events из БД
  useEffect(() => {
    dispatch(fetchInitEvents())
  }, [dispatch]);


  const EventBox = styled(Box)(({ theme }) => ({
    maxWidth: 500,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }));

  return (
    <div>
      <h4>События, в которых я участвую:</h4>
      <EventBox>
        {userEvents?.map((el) =>
          <EventsPlayCard key={el.id} event={el} />
        )}
      </EventBox>
    </div>
  );
}

export default EventsPlay;
