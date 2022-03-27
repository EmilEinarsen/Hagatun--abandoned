import { useBreakpoint } from '@chakra-ui/react'

export const useIsTablet = () => ['base', 'sm', 'md'].includes(useBreakpoint()??'')
