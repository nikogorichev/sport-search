import { Add } from "@mui/icons-material";
import { Box, Fab, Stack, styled, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitEvents } from "../../redux/thunk/asyncEvents";
import EventCard from "../EventCard/EventCard";
import OpenModal from "../OpenModal/OpenModal";

function Events(props) {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  const CardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }));
  const EventBox = styled(Box)(({ theme }) => ({
    maxWidth: 500,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }));

  const [modalActive, setModalActive] = useState(false);
  //Достаем массив с events/мероприятиями
  useEffect(() => {
    dispatch(fetchInitEvents());
  }, [dispatch]);

  console.log("ONO", events);
  return (
    // <div>
    //   <h6>EVENTS</h6>
    //   <div>
    //     <button onClick={() => setModalActive(true)}>Добавить мероприятие</button>
    //     <OpenModal
    //       active={modalActive}
    //       setActive={setModalActive}
    //     />
    //   </div>
    //   {events?.map((el) => <EventCard key={ el.id } event={ el }/> )}
    // </div>
    <>
    <CardBox>
      
        <div>
          <button onClick={() => setModalActive(true)}>
            Добавить мероприятие
          </button>
          <OpenModal active={modalActive} setActive={setModalActive} />
        </div>
        <Tooltip
          title="Delete"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% )", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Tooltip>
      
      <EventBox p={2}>
        {events?.map((el) => (
          <EventCard key={el.id} event={el} />
        ))}
      </EventBox>
      </CardBox>
    </>
  );
}

export default Events;
