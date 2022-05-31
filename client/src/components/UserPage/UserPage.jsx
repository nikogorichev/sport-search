import { Avatar, Box, Card, CardContent, Modal, styled, Typography } from "@mui/material";

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
          p={3}
          borderRadius={5}
        >
          <Card sx={{ maxWidth: 345 }}>
          {user.photo ? (
                <>
                  <Avatar
                    src={user.photo}
                    sx={{ width: 200, height: 200 }}
                  ></Avatar>
                </>
              ) : (
                <>
                  <Avatar
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200, fontSize: 100, }}
                  >{user.name.slice(0, 1).toUpperCase()}</Avatar>
                </>
              )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ m: 1, p: 1 }}
            >
              {user.name}
            </Typography>
          
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
            >
              Email: {user.email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ m: 1, p: 1 }}
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
