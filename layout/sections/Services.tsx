import { Wrap, WrapItem, WrapProps } from "@chakra-ui/react";

import { BusinessCard } from "app/BusinessCard";

export const Services = (props: WrapProps) => 
	<Wrap {...props}>
		<BusinessCard
			src="/annual-report.svg"
			title="Bokföring"
			alt="Bokföring"
			description="Vi hjälper ditt företag med bokföringen. Enkelt och smidigt."
			as={WrapItem}
		/>
	</Wrap>
