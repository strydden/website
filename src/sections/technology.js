import React, { useState } from "react";
import { Box, Container, Button, Flex, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import BlockTitle from "components/block-title";
import { AiFillDollarCircle, AiFillPieChart } from "react-icons/ai";
import { FaBriefcase, FaCog } from "react-icons/fa";
import dotPattern from "assets/dot-pattern.svg";
import react from "assets/react.png";
import js from "assets/js.png";
import reactNative from "assets/react-native.png";
import html from "assets/html.png";
import css from "assets/css.png";
import angular from "assets/angular.png";
import next from "assets/next.png";
import node from "assets/node.png";
import ruby from "assets/ruby.png";
import rails from "assets/rails.png";
import java from "assets/java.png";
import kotlin from "assets/kotlin.png";
import python from "assets/python.png";
import apple from "assets/apple.png";
import android from "assets/android.png";
import flutter from "assets/flutter.png";
import aws from "assets/aws.png";
import docker from "assets/docker.png";
import github from "assets/github.png";
import frontendTab from "assets/frontendTab.png";
import backendTab from "assets/backendTab.png";
import mobileTab from "assets/mobileTab.png";
import devopsTab from "assets/devopsTab.png";
import terraform from "assets/terraform.png";
import kubernetes from "assets/kubernetes.png";
import ansible from "assets/ansible.png";
import vmware from "assets/vmware.png";
import cicd from "assets/cicd.png";
import lambda from "assets/lambda.png";
import mysql from "assets/mysql.png";
import postgres from "assets/postgres.png";
import monitoring from "assets/monitoring.png";

const frontend = [
  {
    icon: html,
    name: "Html",
  },
  {
    icon: css,
    name: "Css",
  },
  {
    icon: js,
    name: "Javascript",
  },
  {
    icon: react,
    name: "React Js",
  },
  {
    icon: angular,
    name: "Angular Js",
  },
  {
    icon: next,
    name: "Next Js",
  },
  {
    icon: node,
    name: "Node Js",
  },
];

const backend = [
  {
    icon: ruby,
    name: "Ruby",
  },
  {
    icon: rails,
    name: "Rails",
  },
  {
    icon: java,
    name: "Java",
  },
  {
    icon: kotlin,
    name: "Kotlin",
  },
  {
    icon: node,
    name: "Node Js",
  },
  {
    icon: python,
    name: "Python",
  },
  {
    icon: mysql,
    name: "MySQL",
  },
  {
    icon: postgres,
    name: "PostgreSQL",
  },
];
const mobile = [
  {
    icon: apple,
    name: "IOS",
  },
  {
    icon: android,
    name: "Android",
  },
  {
    icon: flutter,
    name: "Flutter",
  },
  {
    icon: reactNative,
    name: "React Native",
  },
];

const cloud = [
  {
    icon: aws,
    name: "AWS",
  },
  {
    icon: docker,
    name: "Docker",
  },
  {
    icon: ansible,
    name: "Ansible",
  },
  {
    icon: terraform,
    name: "Terraform",
  },
  {
    icon: kubernetes,
    name: "Kubernetes",
  },
  {
    icon: lambda,
    name: "Lambda",
  },
  {
    icon: vmware,
    name: "VMware",
  },
  {
    icon: cicd,
    name: "CI/CD",
  },
  {
    icon: github,
    name: "Github",
  },
];
const Technology = () => {
  const [tab, setTab] = useState({
    active: "Frontend",
  });

  const handleTab = (tab) => {
    if (tab === "Frontend") {
      setTab({
        ...tab,
        active: "Frontend",
      });
    }
    if (tab === "Backend") {
      setTab({
        ...tab,
        active: "Backend",
      });
    }
    if (tab === "Mobile") {
      setTab({
        ...tab,
        active: "Mobile",
      });
    }
    if (tab === "Devops") {
      setTab({
        ...tab,
        active: "Devops",
      });
    }
  };
  return (
    <Box as="section" sx={styles.technology} id="technology">
      <Container sx={styles.container}>
        <BlockTitle title="Our Technology Stack" text="" />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            <Button
              onClick={() => handleTab("Frontend")}
              className={`${tab.active === "Frontend" ? "active" : ""}`}
            >
              <img src={frontendTab} alt="frontendTab" />
              Frontend
            </Button>
            <Button
              onClick={() => handleTab("Backend")}
              className={`${tab.active === "Backend" ? "active" : ""}`}
            >
              <img src={backendTab} alt="backendTab" />
              Backend
            </Button>
            <Button
              onClick={() => handleTab("Mobile")}
              className={`${tab.active === "Mobile" ? "active" : ""}`}
            >
              <img src={mobileTab} alt="mobileTab" />
              Mobile
            </Button>
            <Button
              onClick={() => handleTab("Devops")}
              className={`${tab.active === "Devops" ? "active" : ""}`}
            >
              <img src={devopsTab} alt="devopsTab" />
              Devops
            </Button>
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          {tab.active === "Frontend" && (
            <Flex as="ul" sx={styles.technologyList}>
              {frontend.map((item, index) => (
                <li key={index}>
                  <Flex sx={styles.technologyListItem}>
                    <img
                      src={item.icon}
                      key={index}
                      sx={styles.technologyListIcon}
                      alt={item.name}
                    />
                    {item.name && (
                      <Text as="span" sx={styles.technologyListText}>
                        {item.name}
                      </Text>
                    )}
                  </Flex>
                </li>
              ))}
            </Flex>
          )}
          {tab.active === "Backend" && (
            <Flex as="ul" sx={styles.technologyList}>
              {backend.map((item, index) => (
                <li key={index}>
                  <Flex sx={styles.technologyListItem}>
                    <img
                      src={item.icon}
                      key={index}
                      sx={styles.technologyListIcon}
                      alt={item.name}
                    />
                    {item.name && (
                      <Text as="span" sx={styles.technologyListText}>
                        {item.name}
                      </Text>
                    )}
                  </Flex>
                </li>
              ))}
            </Flex>
          )}
          {tab.active === "Mobile" && (
            <Flex as="ul" sx={styles.technologyList}>
              {mobile.map((item, index) => (
                <li key={index}>
                  <Flex sx={styles.technologyListItem}>
                    <img
                      src={item.icon}
                      key={index}
                      sx={styles.technologyListIcon}
                      alt={item.name}
                    />
                    {item.name && (
                      <Text as="span" sx={styles.technologyListText}>
                        {item.name}
                      </Text>
                    )}
                  </Flex>
                </li>
              ))}
            </Flex>
          )}
          {tab.active === "Devops" && (
            <Flex as="ul" sx={styles.technologyList}>
              {cloud.map((item, index) => (
                <li key={index}>
                  <Flex sx={styles.technologyListItem}>
                    {item.icon && (
                      <img
                        src={item.icon}
                        key={index}
                        sx={styles.technologyListIcon}
                        alt={item.name}
                      />
                    )}
                    {item.name && (
                      <Text as="span" sx={styles.technologyListText}>
                        {item.name}
                      </Text>
                    )}
                  </Flex>
                </li>
              ))}
            </Flex>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Technology;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  technology: {
    pt: ["80px", null, null, null, "80px", null, "150px"],
    py: [8, null, 9, null, null, 2],
  },
  container: {
    position: "relative",
    top: "150px",
    mt: "-150px",
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"],
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative",
      transition: "all 500ms ease",
      img: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        mr: "15px",
        transition: "all 500ms ease",
        height: "auto",
        width: ["30px", null, null, null, "30px"],
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1,
        },
        "&::before": {
          transform: "scale(1,1)",
        },
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease",
      },
    },
  },
  tabContent: {
    minHeight: ["150px", null, "200px", "250px", null, "300px"],
    position: "relative",
    display: "flex",
    justifyContent: "center",
    pb: [8, null, null, null, null, 4],
    // "&::before": {
    //   content: "''",
    //   width: "302px",
    //   height: "347px",
    //   backgroundImage: `url(${dotPattern})`,
    //   position: "absolute",
    //   bottom: "-30px",
    //   right: "-40px",
    //   display: ["none", null, null, null, null, "block"],
    // },
    ".tabImage": {
      position: "relative",
      animation: `${fadeIn} 0.8s linear`,
    },
  },
  technologyList: {
    listStyle: "none",
    display: "flex",
    flexWrap: ["wrap", null, null, null, null, "noWrap"],
    li: {
      pl: ["0px", null, null, null, "30px"],
    },
    "li > div": {
      alignItems: "center",
      flexDirection: "column",
      p: ["20px", null, null, null, "20px"],
      pt: ["15px", null, null, null, "30px"],
    },
    img: {
      height: "auto",
      width: "48px",
    },
    span: {
      color: "text_secondary",
      fontSize: 1,
      fontWeight: "500",
      lineHeight: "18px",
      mt: [1, null, null, null, 1],
    },
  },
};
