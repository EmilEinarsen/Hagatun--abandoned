import { Box, BoxProps } from "@chakra-ui/react";
import { useIsTablet } from "hooks/useIsTablet";

export const Section = (props: BoxProps) => <Box as="section" mb={!useIsTablet()?'10rem':'5rem'} {...props}/>