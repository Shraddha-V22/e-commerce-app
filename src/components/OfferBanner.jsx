import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://static.vecteezy.com/system/resources/previews/000/178/364/large_2x/super-sale-offer-and-discount-banner-template-for-marketing-and-vector.jpg",
  },
  {
    imgPath:
      "https://images.vexels.com/media/users/3/152066/raw/cfa8213abe1afe20ccc88e935918db23-banner-de-compras-en-linea-de-super-venta.jpg",
  },
  {
    imgPath:
      "https://static.vecteezy.com/system/resources/previews/000/179/348/original/stylish-vector-banner-design-with-offer-details-for-advertising.jpg",
  },
];

function OfferBanner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        flexGrow: 1,
        margin: "auto",
        mb: 5,
        position: "relative",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 1,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "40vh",
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                  opacity: ".9",
                }}
                src={step.imgPath}
                alt="offer image"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          position: "absolute",
          bottom: 0,
          bgcolor: "transparent",
          width: "100%",
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default OfferBanner;
