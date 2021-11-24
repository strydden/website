/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Container,
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Spinner,
} from "theme-ui";
import TextFeature from "components/text-feature";
import PatternBG from "assets/patternBG.png";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const data = {
  subTitle: "Core features",
  title: "Smart Jackpots that you may love this anytime & anywhere",
  description:
    "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xgedwvqy"),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded || state.errors) {
      setEmail("");
      setName("");
      setMessage("");
    }
  }, [state.succeeded, state.errors]);

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
          {state.submitting ? (
            <Spinner sx={styles.spinner} />
          ) : (
            <Box as="form" onSubmit={handleSubmit}>
              <Label htmlFor="name">Name</Label>
              <Input
                required
                name="name"
                id="name"
                type="text"
                mb={3}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                required
                type="email"
                name="email"
                id="email"
                mb={3}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />
              <Label htmlFor="message">Message</Label>
              <Textarea
                required
                name="message"
                id="message"
                rows={3}
                mb={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
              <Button variant="whiteButton">Submit</Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  spinner: {
    color: "white",
  },
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
    justifyContent: "center",
    alignItems: "center",
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    form: {
      width: "100%",
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
