import {
  Container,
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Spinner,
  Heading,
} from "theme-ui";
import ContactText from "components/contact-text";
import PatternBG from "assets/patternBG.png";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

const data = {
  title: "Drop your inquiry here and our experts will get back to you.",
  address: `B01-403 To 406, 4th Floor, 3rd Eye Vision
              Opp. Shivalik Plaza, IIM Road, Panjarapole
              Ahmedabad, Gujarat 380009, India`,
  mobile: "+91-9888888888",
  email: ["info@strydden.com","careers@strydden.com"],
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xgedwvqy"),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState(""),
    [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded || state.errors) {
      setEmail("");
      setName("");
      setMessage("");
      state.succeeded && setShowSuccessMessage(true);
    }
  }, [state.succeeded, state.errors]);

  useEffect(() => {
    if (showSuccessMessage) {
      var interval = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [showSuccessMessage]);

  return (
    <Box id="contact" as="section" sx={styles.workflow}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <ContactText
            title={data.title}
            address={data.address}
            email={data.email}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          {state.submitting ? (
            <Spinner sx={styles.spinner} />
          ) : state.succeeded && showSuccessMessage ? (
            <Heading as="h2" sx={styles.successMessage}>
              Thank you! Your inquiry has been sent.
            </Heading>
          ) : (
            <Box as="form" onSubmit={handleSubmit} style={styles.formBox}>
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
    backgroundColor: "#05182C",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 8],
  },
  containerBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: [
      "center",
      "center",
      "center",
      "center",
      "center",
      "center",
      "space-between",
      "space-between",
    ],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["left", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    marginTop: "2vw",
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  formBox: {
    margin: "0 2vw",
   
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
  successMessage: {
    color: "#fff",
  },
};
