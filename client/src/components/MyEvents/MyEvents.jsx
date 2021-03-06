import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventCardCabinet from "../EventCardCabinet/EventCardCabinet";
import './MyEvents.css'

function MyEvents(props) {
  const { user } = useSelector((state) => state.user);
  const { events } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  //Достаем events из БД
  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);

  const userEvents = events.filter((el) => el.user_id === user.id);

  const EventBox = styled(Box)(({ theme }) => ({
    // maxWidth: 500,
    // display: "flex",
    // justifyContent: "space-around",
    // flexWrap: "wrap", 
  }));


  return (
    <div>
      <h4 className="myEvents-title">Мои события:</h4>
      <div className='myEvents-cards'>
        <EventBox>
          {userEvents.map((el) => {
            return <EventCardCabinet key={el.id} event={el} />;
          })}
        </EventBox>
      </div>
    </div>
  );
}

export default MyEvents;
