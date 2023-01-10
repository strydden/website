/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from "theme-ui";
import { IoIosCheckmarkCircle, IoIosArrowForward } from "react-icons/io";
import Image from "components/image";
import { Link } from "./link";
import { keyframes } from "@emotion/react";
import { projects } from "constants/projects";
import VisitWebsiteIcon from "assets/visit-website.svg";
import GooglePlayStoreIcon from "assets/google-play-badge.png";
import AppStoreIcon from "assets/download-on-the-app-store.svg";

const Project = ({ data, backgroundColor, flexDirection, technologies }) => {
    return (
        <Box
            as="section"
            sx={{
                py: [30, 40, 50, 60, 80, 100],
                backgroundColor: backgroundColor,
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: [
                            "column-reverse",
                            "column-reverse",
                            "column-reverse",
                            "column-reverse",
                            flexDirection,
                        ],
                        gap: "1rem",
                        alignItems: [
                            "flex-start",
                            "flex-start",
                            "center",
                            "center",
                        ],
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={styles.illustration}>
                        <Image
                            src={data.projectsImage}
                            loading="lazy"
                            alt="support"
                        />
                    </Box>
                    <Box sx={styles.content}>
                        <Heading sx={styles.title}>{data.title}</Heading>
                        <Text as="p" sx={styles.desc1}>
                            {data.desc1}
                        </Text>
                        {data.desc2 && (
                            <Text as="p" sx={styles.desc2}>
                                {data.desc2}
                            </Text>
                        )}
                        <Box sx={styles.externalLinks}>
                            {data.websiteLink && (
                                <Link
                                    as="a"
                                    rel="noreferrer"
                                    path={data.websiteLink}
                                    target="_blank"
                                    sx={styles.linkLabel}
                                >
                                    <Image
                                        src={VisitWebsiteIcon}
                                        sx={{
                                            width: [
                                                "100px",
                                                "100px",
                                                "100px",
                                                "140px",
                                                "140px",
                                            ],
                                        }}
                                    />
                                </Link>
                            )}
                            {data.playStoreLink && (
                                <Link
                                    as="a"
                                    rel="noreferrer"
                                    path={data.playStoreLink}
                                    target="_blank"
                                    sx={styles.linkLabel}
                                >
                                    <Image
                                        src={GooglePlayStoreIcon}
                                        sx={{
                                            width: [
                                                "108px",
                                                "108px",
                                                "108px",
                                                "151px",
                                                "151px",
                                            ],
                                        }}
                                    />
                                </Link>
                            )}
                            {data.appStoreLink && (
                                <Link
                                    as="a"
                                    rel="noreferrer"
                                    path={data.appStoreLink}
                                    target="_blank"
                                    sx={styles.linkLabel}
                                >
                                    <Image
                                        src={AppStoreIcon}
                                        sx={{
                                            width: [
                                                "103px",
                                                "103px",
                                                "103px",
                                                "137px",
                                                "137px",
                                            ],
                                        }}
                                    />
                                </Link>
                            )}
                        </Box>
                        <Box sx={styles.technologyBox}>
                            {technologies && (
                                <Text as="p" sx={styles.technologyText}>
                                    Technologies
                                </Text>
                            )}
                            {data.technologyList && (
                                <Grid sx={styles.list} as="ul">
                                    {data.technologyList.map((item, i) => (
                                        <Box as="li" key={i}>
                                            <IoIosCheckmarkCircle
                                                sx={{ color: "primary", mr: 2 }}
                                                size="20px"
                                            />
                                            <Text as="p">{item}</Text>
                                        </Box>
                                    ))}
                                </Grid>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Project;

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to {
    opacity: 1;
  }
`;

const styles = {
    illustration: {
        textAlign: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        mt: [2, null, null, 0, 4, 0],
        img: {
            mt: ["2rem", "2rem", "2rem", null, null, null],
            maxWidth: ["100%", null, null, "450px", "450px", "450px"],
        },
    },
    content: {
        marginTop: [null, null, null, null, null, -16],
        maxWidth: [null, null, null, 420, 560, "none"],
        margin: [null, null, null, "0 auto", "unset"],
        textAlign: ["left", null, null, null, "left"],
    },
    title: {
        color: "heading",
        fontFamily: "heading",
        fontSize: [4, null, null, 8, null, null, 9],
        fontWeight: 600,
        lineHeight: [1.33, null, 1.4, 1.53],
        letterSpacing: ["-0.5px", null, null, "-1px"],
        mb: 3,
        span: {
            backgroundSize: "cover",
            px: 2,
        },
    },
    desc1: {
        color: "textSecondary",
        fontSize: ["13px", null, null, 2, "15px", 2],
        lineHeight: [1.86, null, null, null, 1.86, 2.25],
        maxWidth: 470,
        m: [null, null, null, "20px auto 0", "15px 0 0", null, "unset"],
    },
    desc2: {
        color: "textSecondary",
        fontSize: ["13px", null, null, 2, "15px", 2],
        lineHeight: [1.86, null, null, null, 1.86, 2.25],
        maxWidth: 470,
        m: [null, null, null, "20px auto 0", "15px 0 0", null, "unset"],
        mt: "1rem",
    },
    linkLabel: {
        color: "#184CA1",
        cursor: "pointer",
        fontSize: [1, null, null, "15px"],
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        svg: {
            transform: "translateX(3px)",
            width: ["13px", null, null, "16px"],
        },
        ":hover": {
            svg: {
                animation: `${fadeRight} 0.5s linear`,
            },
        },
    },
    list: {
        gap: "0 18px",
        gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 220px)",
        ],
        justifyContent: [null, null, null, "center", "unset"],
        listStyle: "none",
        mt: [4, null, null, 3, 3, 3],
        p: 0,
        li: {
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            alignItems: "center",
            textAlign: "left",
            py: 1,
        },
        "li > p": {
            fontSize: [0, 1, null, 2, "15px", 2],
            fontWeight: 500,
            color: "textSecondary",
        },
    },
    technologyBox: {
        mt: [4, null, null, 5, 4, 5],
    },
    technologyText: {
        fontSize: [0, 1, null, 2, "15px", 2],
        fontWeight: 500,
        alignItems: "center",
        color: "textSecondary",
        display: "flex",
    },
    externalLinks: {
        display: "flex",
        mt: "1.5rem",
        "a:not(:last-child)": {
            mr: "1rem",
        },
    },
};
