import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventsPlayCard from "../EventsPlayCard/EventsPlayCard";

//СТРАНИЦА МЕРОПРИЯТИЙ В КОТОРЫХ УЧАСТВУЕТ USER
function EventsPlay(props) {
  const { allUsers } = useSelector((state) => state.events);
  const { userEvents } = useSelector((state) => state.events);
  const dispatch = useDispatch();


  //Достаем events из БД
  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);

  const EventBox = styled(Box)(({ theme }) => ({
    maxWidth: 500,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  }));

  return (
    <div>
      <h4>События, в которых я участвую:</h4>
      <EventBox>
        {userEvents?.map((el) => {
          const filteredUser = allUsers.filter(
            (user) => user.id === el.user_id
          );
          return <EventsPlayCard key={el.id} event={el} creator = {filteredUser}/>;
        })}
      </EventBox>
    </div>
  );
}

export default EventsPlay;
