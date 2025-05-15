import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 6,
        pt: 20,
        pb: 20,
        bgcolor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Box sx={{ maxWidth: 600, width: "100%", textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
          Privacy Policy
        </Typography>
      </Box>

      {/* Description */}
      <Box sx={{ maxWidth: 700, width: "100%", textAlign: "center", mb: 12 }}>
        <Typography variant="body1" sx={{ fontSize: 18, color: "white" }}>
          At BriskBold AI & Automation, your privacy is a priority. This policy outlines how we collect,
          use, and protect your personal data while delivering cutting-edge AI and automation solutions.
        </Typography>
      </Box>

      {/* Two Sections container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 8,
          maxWidth: 1200,
          width: "100%",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            Who We Are:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            BriskBold AI & Automation is a forward-thinking company specializing in intelligent automation,
            software development, and hyperautomation solutions. Our services are designed to help
            businesses scale and optimize operations using the latest in artificial intelligence and technology.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            Information Collection:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            We may collect personal and organizational details such as your name, email address, company name,
            and project requirements when you interact with us via our website, forms, or consultation requests.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            How We Use Your Information:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            Your information helps us understand your business goals, provide tailored automation and
            development solutions, follow up on service inquiries, and send important updates about our
            offerings and innovations.
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            Cookies:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            We use cookies to enhance your browsing experience and analyze traffic patterns. You can choose
            to disable cookies via your browser settings, but this may limit some functionality of our website.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            Sharing of Information:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            We do not sell your personal data. We may share information with trusted partners to support project
            execution, marketing, or infrastructure — all under strict confidentiality agreements.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
            Contact Us:
          </Typography>
          <Typography paragraph sx={{ color: "white" }}>
            For questions about this Privacy Policy or how we manage your data, please contact us at{" "}
            <strong>info@briskbold.com</strong>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
