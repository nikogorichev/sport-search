import { Add } from "@mui/icons-material";
import { Box, Fab, Stack, styled, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventCard from "../EventCard/EventCard";
import OpenModal from "../OpenModal/OpenModal";
import './Events.css'

function Events({ sport }) {
  const { events } = useSelector((state) => state.events);
  const { participants } = useSelector((state) => state.events);
  const { sports } = useSelector((state) => state.events);
  const { allUsers } = useSelector((state) => state.events);

  const filterSport = sports.filter((el) => el.title === sport);

  let sportEvent = "";

  if (!sport) {
    sportEvent = events;
  } else {
    sportEvent = events.filter((el) => el.sport_id === filterSport[0].id);
  }

  const CardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  }));

  const EventBox = styled(Box)(({ theme }) => ({
    // maxWidth: 500,
    // display: "flex",
    // justifyContent: "space-around",
    // flexWrap: "nowrap",
    // width: 500,
  }));

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <CardBox >
        <Tooltip className='button-add'
          title="Добавить"
          sx={{
            backgroundColor: "rgb(160, 251, 255)",
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% )", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <Add onClick={() => setModalActive(true)}></Add>
            <OpenModal active={modalActive} setActive={setModalActive} />
          </Fab>
        </Tooltip>

        <EventBox>
          {sportEvent?.map((el) => {
            const filteredUser = allUsers.filter(
              (user) => user.id === el.user_id
            );
            return (
              <EventCard
                key={el.id}
                event={el}
                creator={filteredUser}
                participants={participants.filter((e) => e.EventId === el.id)}
              />
            );
          })}

        </EventBox>
      </CardBox>
    </>
  );
}

export default Events;
