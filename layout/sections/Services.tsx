import { VStack, Wrap, WrapItem, StackProps } from "@chakra-ui/react";

import { BusinessCard } from "app/BusinessCard";
import { Heading } from "components/core/Heading";

export const Services = (props: StackProps) => 
	<VStack {...props}>
		<Heading.H2 mt={0} mb="4rem">Tjänster</Heading.H2>
		<Wrap justify="space-evenly" spacing="2rem">
			<BusinessCard
				src="/annual-report.svg"
				title="Bokföring"
				alt="Bokföring"
				description="Vi hjälper ditt företag med bokföringen. Enkelt och smidigt."
				as={WrapItem}
			/>
			<BusinessCard
				src="/exchange-rate.svg"
				title="Lön"
				alt="Lön"
				description="Det är mycket att hålla reda på när det gäller löner. Vi hjälper er med hela processen."
				as={WrapItem}
			/>
			<BusinessCard
				src="/allocation.svg"
				title="Bokslut, Deklaration & Årsredovisning"
				alt="Bokslut, Deklaration & Årsredovisning"
				description="Låt oss hjälpa er att göra det enklare."
				as={WrapItem}
			/>
			<BusinessCard
				src="/employees.svg"
				title="Uthyrning av personal"
				alt="Uthyrning av personal"
				description="Behöver ni förstärka er ekonomiavdelning med personal? Låt oss hjälpa er"
				as={WrapItem}
			/>
			<BusinessCard
				src="/benchmark.svg"
				title="Rådgivning"
				alt="Rådgivning"
				description="Oavsett om ert företag har funnits länge eller om ni funderar på att starta ett nytt företag, så kan vi hjälpa er att ta nästa steg."
				as={WrapItem}
			/>
			<BusinessCard
				src="/contact-us.svg"
				title="Kontakta oss"
				alt="Kontakta oss"
				description="Låt oss hjälpa er att göra det enklare."
				as={WrapItem}
			/>
		</Wrap>
	</VStack>
