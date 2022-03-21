import { Box, BoxProps } from "@chakra-ui/react";
import clsx from "clsx";

export const FrostBox = ({ className, ...props }: BoxProps) => 
	<Box {...props} className={clsx('frosty-background',className)} />