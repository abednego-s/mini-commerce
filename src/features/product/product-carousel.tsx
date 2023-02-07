import { useState } from "react";
import {
  ActionIcon,
  Box,
  createStyles,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import {
  IconCaretLeft,
  IconCaretRight,
  IconPhotoOff,
} from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  containerSlider: {
    height: "500px",
    position: "relative",
    overflow: "hidden",
  },
  slide: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0,
    transition: "opacity ease-in-out 0.4s",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  activeAnim: {
    opacity: 1,
  },
  carouselIndicator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    left: "35%",
    padding: "8px 18px",
    background: "rgba(0,0,0, 0.8)",
    color: " #fff",
    width: "150px",
    borderRadius: "10px",
  },
}));

export function ProductCarousel({ slides }: { slides: string[] }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const { classes, cx } = useStyles();

  function goToNextSlide() {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  function goToPrevSlide() {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  function goToSlide(index: number) {
    setSlideIndex(index);
  }

  return (
    <Stack spacing="lg">
      <div className={classes.containerSlider}>
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={cx(classes.slide, {
              [classes.activeAnim]: slideIndex === index,
            })}
          >
            <Image
              alt="Product preview photo"
              src={slide}
              className={classes.slideImage}
              height={500}
              withPlaceholder
              placeholder={<IconPhotoOff size={60} />}
            />
          </div>
        ))}

        <div className={classes.carouselIndicator}>
          <div>
            <ActionIcon onClick={goToPrevSlide} color="orange.6">
              <IconCaretLeft size={35} />{" "}
            </ActionIcon>
          </div>
          <div>
            {slideIndex + 1} / {slides.length}
          </div>
          <div>
            <ActionIcon onClick={goToNextSlide} color="orange.6">
              <IconCaretRight size={35} />{" "}
            </ActionIcon>
          </div>
        </div>
      </div>
      <Group position="center">
        {slides.map((image, index) => (
          <Box
            key={image}
            onClick={() => goToSlide(index)}
            role="button"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
              border: `5px solid ${
                index === slideIndex
                  ? theme.colors.green[6]
                  : theme.colors.gray[3]
              } `,
              "&:hover": {
                cursor: "pointer",
              },
              width: 70,
              height: 70,
            })}
          >
            <Image
              src={image}
              width={60}
              withPlaceholder
              placeholder={<IconPhotoOff size={40} />}
            />
          </Box>
        ))}
      </Group>
    </Stack>
  );
}
