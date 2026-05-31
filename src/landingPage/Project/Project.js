import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          <h1 className="serviceHeading mb-5 mt-5">
            My <span>Projects</span>
          </h1>
          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <CardMedia
                component="img"
                alt="contactForm"
                height="240"
                sx={{
                    objectFit: "contain",
                  }}
                image="../images/contactForm.png"
              />
              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project Inquiry Form
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern and responsive contact form designed to provide
                    seamless communication between users and website owners. It
                    features real-time input validation, user-friendly design,
                    and secure message submission for an enhanced user
                    experience.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://contact-form-tau-sandy.vercel.app/", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <CardMedia
                component="img"
                alt="Frontend Signup Form"
                height="240"
                image="../images/Signup.png"
              />
              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Frontend Signup Form
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern and responsive signup form designed to provide a
                    seamless user registration experience. It features real-time
                    input validation, intuitive form fields, and a clean user
                    interface to ensure smooth and efficient account creation
                    across all devices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://sign-up-login-page-rosy.vercel.app/", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <CardMedia
                component="img"
                alt="toDoApp"
                height="240"
                image="../images/todo.png"
              />
              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ToDo App
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern and responsive Todo App that helps users organize
                    and manage daily tasks efficiently. It features task
                    creation, editing, deletion, and status tracking through a
                    clean and intuitive interface. The application is designed
                    to enhance productivity.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://todo-app-theta-ivory-31.vercel.app/", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>
        </div>
        <div className="row mt-5 mb-5 g-4">
          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <CardMedia
                component="img"
                alt="weatherapp"
                height="240"
                sx={{
                  objectFit: "contain",
                }}
                image="../images/weatherapp.png"
              />
              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Weather Application
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern and responsive Weather App that provides real-time
                    weather updates and forecasts for locations worldwide. It
                    features current temperature, weather conditions, humidity,
                    wind speed, and an intuitive user interface for a seamless
                    experience. The application helps users stay informed about
                    changing weather conditions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://weather-application-ochre-delta.vercel.app/", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <div>
                <CardMedia
                  className="boxheight"
                  component="img"
                  alt="lottery"
                  height="240"
                  image="../images/lottery.png"
                  sx={{
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lottery Game
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern and interactive Lottery Game application that
                    provides users with an engaging and fun experience. It
                    features random number generation, dynamic results display,
                    and a simple user-friendly interface. The game is designed
                    to deliver an entertaining experience while demonstrating
                    core frontend logic and state management.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://lottery-game-navy-xi.vercel.app/", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4 projBox">
            <Card sx={{ width: "100%", maxWidth: 425 }}>
              <CardMedia
                component="img"
                alt="wanderLust"
                height="240"
                image="../images/wanderLust.png"
                sx={{
                  objectFit: "fill",
                }}
              />
              <div className="cardback">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    WanderLust-AirBnb Your Home
                  </Typography>
                  <Typography variant="body2" className="textProj">
                    A modern property rental platform inspired by Airbnb that
                    allows users to explore, list, and book accommodations with
                    ease. It features a clean and responsive interface with
                    property listings, detailed views, and seamless navigation.
                    The application focuses on delivering a smooth user
                    experience for discovering and managing short-term stays.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://wanderlust-75b5.onrender.com/listings", "_blank")
                    }
                  >
                    View Project
                  </Button>
                  <Button
                    size="small"
                    class="projBtn"
                    onClick={() =>
                      window.open("https://your-link.com", "_blank")
                    }
                  >
                    Source Code
                  </Button>
                </CardActions>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
