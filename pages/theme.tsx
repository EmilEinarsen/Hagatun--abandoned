import type { NextPage } from 'next'
import { VStack, Wrap, WrapItem } from '@chakra-ui/layout'

import { Icon } from 'components/icons'
import React from 'react'
import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'

const Theme: NextPage = () => 
	<VStack gridGap="5rem">
		<VStack>
			<Heading.H1>H1: Function called</Heading.H1>
			<Heading.H2>H2: Function called</Heading.H2>
			<Heading.H3>H3: Function called</Heading.H3>
			<Heading.H4>H4: Function called</Heading.H4>
			<Heading.H5>H5: Function called</Heading.H5>
			<Heading.H6>H6: Function called</Heading.H6>
			<Heading.Brand>Brand: Function called</Heading.Brand>
		</VStack>
		<VStack>
			<Text.Body>Body: Function called</Text.Body>
			<Text.Body2>Body2: Function called</Text.Body2>
			<Text.Naked>Naked: Function called</Text.Naked>
			<Text.Subtitle>Subtitle: Function called</Text.Subtitle>
			<Text.Caption>Caption: Function called</Text.Caption>
			<Text.Blockquote>Blockquote: Function called</Text.Blockquote>
		</VStack>
		<VStack gridGap="1rem">
			<Wrap justify="center">
				<WrapItem><Icon.Adress fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ArrowForward fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Close fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.ExternalLink fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Facebook fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Hamburger fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Logo fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Mail fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Phone fontSize="4xl" /></WrapItem>
				<WrapItem><Icon.Search fontSize="4xl" /></WrapItem>
			</Wrap>
		</VStack>
	</VStack>

export default Theme
