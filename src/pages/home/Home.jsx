import { gsap } from "gsap";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { Spacer } from "../../components/Spacer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Grid,
  Button,
  Divider,
  Container,
  Typography,
} from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const animation = useRef();
  const timeLine = gsap.timeline();

  useLayoutEffect(() => {
    const ctx = gsap.context((e) => {
      const leftBoxes = e.selector("#slide_left");
      const rightBoxes = e.selector("#slide_right");

      timeLine.to("#hero_txt", {
        y: -50,
        opacity: 1,
        delay: 0.25,
      });

      timeLine.to("#sub_txt", {
        y: -50,
        opacity: 1,
      });

      timeLine.to("#cta_btn", {
        y: -50,
        opacity: 1,
      });

      leftBoxes.forEach((box) => {
        gsap.to(box, {
          x: 0,
          duration: 1.5,
          scrollTrigger: {
            start: "top center",
            trigger: box,
          },
        });
      });

      rightBoxes.forEach((box) => {
        gsap.to(box, {
          x: 0,
          duration: 1.5,
          scrollTrigger: {
            start: "top center",
            trigger: box,
          },
        });
      });

      gsap.to("#zoom_sec", {
        width: "80vw",
        height: "80vh",
        scrollTrigger: {
          trigger: "#zoom_sec",
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    }, animation);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={animation}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6} display="flex" alignItems="center">
            <Box>
              <Typography sx={{ opacity: 0 }} id="hero_txt" variant="h2">
                <b>Main Heading</b>
              </Typography>
              <br />
              <Typography sx={{ opacity: 0 }} id="sub_txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, accusantium dolore facilis distinctio rem similique
                impedit nobis quasi natus inventore blanditiis autem veniam
                nesciunt unde maiores nam dolorum illum eius?
              </Typography>
              <br />
              <Button
                sx={{ pl: 4, pr: 4, borderRadius: 5, opacity: 0 }}
                variant="contained"
                color="success"
                id="cta_btn"
              >
                <b>Click Here</b>
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className={style.hero_img} height="80vh">
              <img src="/mascot.png" alt="Mascot" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Spacer />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4}>
            <Link to="#">
              <div className={style.hover_div}>
                <img
                  src="https://img.freepik.com/free-vector/travel-booking-app_23-2148600616.jpg"
                  alt="Image"
                />
                <br />
                <br />
                <Typography>
                  <b>Heading Goes Here</b>
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident sit aliquid pariatur tempore repudiandae dolorem
                  quod unde dicta nam quos?
                </Typography>
              </div>
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to="#">
              <div className={style.hover_div}>
                <img
                  src="https://img.freepik.com/free-vector/travel-booking-app_23-2148600616.jpg"
                  alt="Image"
                />
                <br />
                <br />
                <Typography>
                  <b>Heading Goes Here</b>
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident sit aliquid pariatur tempore repudiandae dolorem
                  quod unde dicta nam quos?
                </Typography>
              </div>
            </Link>
          </Grid>
          <Grid item md={4}>
            <Link to="#">
              <div className={style.hover_div}>
                <img
                  src="https://img.freepik.com/free-vector/travel-booking-app_23-2148600616.jpg"
                  alt="Image"
                />
                <br />
                <br />
                <Typography>
                  <b>Heading Goes Here</b>
                </Typography>
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident sit aliquid pariatur tempore repudiandae dolorem
                  quod unde dicta nam quos?
                </Typography>
              </div>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Spacer />
      <Divider />
      <Spacer />
      <Container>
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Box id="slide_left" className={style.slide_left}>
              <img
                src="https://img.freepik.com/free-vector/travel-booking-app_23-2148600616.jpg"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item md={6} display="flex" alignItems="center">
            <Box id="slide_right" className={style.slide_right}>
              <Typography variant="h4">
                <b>Heading Goes Here</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, accusantium dolore facilis distinctio rem similique
                impedit nobis quasi natus inventore blanditiis autem veniam
                nesciunt unde maiores nam dolorum illum eius?
              </Typography>
              <br />
              <Button
                sx={{ pl: 4, pr: 4, borderRadius: 5 }}
                variant="contained"
                color="success"
              >
                <b>Click Here</b>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Spacer />
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Box id="slide_left" className={style.slide_left}>
              <img
                src="https://img.freepik.com/free-vector/travel-booking-app_23-2148600616.jpg"
                alt="Image"
              />
            </Box>
          </Grid>
          <Grid item md={6} display="flex" alignItems="center">
            <Box id="slide_right" className={style.slide_right}>
              <Typography variant="h4">
                <b>Heading Goes Here</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, accusantium dolore facilis distinctio rem similique
                impedit nobis quasi natus inventore blanditiis autem veniam
                nesciunt unde maiores nam dolorum illum eius?
              </Typography>
              <br />
              <Button
                sx={{ pl: 4, pr: 4, borderRadius: 5 }}
                variant="contained"
                color="success"
              >
                <b>Click Here</b>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Spacer />
      <Divider />
      <Spacer />
      <Container>
        <Typography variant="h3" textAlign="center">
          <b>Heading Goes Here</b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia
          voluptatibus nihil maxime, fugit nemo laborum cum iste incidunt ullam
          ipsam eum asperiores provident unde, perferendis dolorem non
          accusantium alias animi necessitatibus. Totam beatae rerum quo dolores
          nam et! Nisi ratione laboriosam accusamus iure ipsa cupiditate
          laudantium blanditiis a delectus.
        </Typography>
        <Spacer />
      </Container>
      <motion.div
        id="zoom_sec"
        className={style.zoom_sec}
        whileHover={{ scale: 1.1 }}
      ></motion.div>
    </Box>
  );
};
