/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Container,
  Box,
  Label,
  Input,
  Textarea,
  Button,
} from "theme-ui";
import TextFeature from "components/text-feature";
import PatternBG from "assets/patternBG.png";

const data = {
  subTitle: "Core features",
  title: "Smart Jackpots that you may love this anytime & anywhere",
  description:
    "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
};

export default function Contact() {
  return (
    <Box id="contact" as="section" sx={styles.workflow}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Box as="form" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" type="text" mb={3} />
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" mb={3} />
            <Label htmlFor="comment">Comment</Label>
            <Textarea name="comment" id="comment" rows={3} mb={3} />
            <Button variant="whiteButton">Submit</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 8],
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "flex",
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    form: {
        width: "100%"

    }
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
