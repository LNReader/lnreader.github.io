import Layout from "@components/Layout";
import Page from "@components/Page";
import { useTheme } from "@hooks/useTheme";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const lnreaderPluginsRepo =
  "https://raw.githubusercontent.com/LNReader/lnreader-plugins/plugins/v3.0.0/.dist/plugins.min.json";

export default function Plugins() {
  const theme = useTheme();

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(lnreaderPluginsRepo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Layout>
      <Page
        title="Plugins"
        content={
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ mt: 2 }}>
              By default, <b>LNReader</b> comes without any plugins. You can
              choose to read local content or include an external repository.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <b>LNReader</b> maintains only one official repository; any other
              repositories are unofficial and have no affiliation with us.
            </Typography>
            <Box sx={{ my: 2, textAlign: "center", position: "relative" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 12,
                  background: theme.primaryContainer,
                  color: theme.onPrimaryContainer,
                  textTransform: "none",
                  mr: 1,
                }}
                href={
                  "lnreader://repo/add?url=" +
                  encodeURIComponent(lnreaderPluginsRepo)
                }
              >
                Add repository
              </Button>

              <IconButton disabled={copied} onClick={onCopy} color="primary">
                {copied ? <DoneIcon /> : <ContentCopyIcon />}
              </IconButton>

              <Typography sx={{ mt: 2 }}>
                Requires <b>LNReader 2.0.0</b> or newer.
              </Typography>
            </Box>
            <Divider />
          </Box>
        }
      />
    </Layout>
  );
}
