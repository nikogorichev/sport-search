import { Avatar, Box, Card, CardContent, Modal, styled, Typography } from "@mui/material";
import "./Profile.css";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function UserPage({ open, setOpen, user }) {
  return(
    <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          
          bgcolor={"background.default"}
          color={"text.primary"}
          
          borderRadius={40}
        >
          <Card className="profilePage"
            sx={{
              p: 4,
              height: '100%',
              width: 300,
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
          {user.photo ? (
                <>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src={user.photo}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </Box>
                </>
              ) : (
                <>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200, fontSize: 100, }}
                  >{user.name.slice(0, 1).toUpperCase()}</Avatar>
                  </Box>
                </>
              )}
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ m: 1, p: 1, fontSize: '30px' }}
            >
              {user.name}
            </Typography>
          
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1, fontSize: '18px' }}
            >
              Email: {user.email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1, fontSize: '18px' }}
            >
              О себе: {user.description}
            </Typography>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
            >
              Виды спорта:
              {usersSports.map((usersSports) => (
                <SportButton key={usersSports.id} usersSports={usersSports} />
              ))}
            </Typography> */}
          </CardContent>
        </Card>
        </Box>
      </StyledModal>
  )
}


export default UserPage;
