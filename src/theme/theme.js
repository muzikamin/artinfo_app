import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const fonts = () => {
  <Global styles={``} />;
};

const { Button, Modal } = chakraTheme.components;

const components = {
  Button,
  Modal,
};

const _theme = extendBaseTheme({
  components,
  config,
});

export default _theme;
