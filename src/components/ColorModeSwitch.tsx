import { HStack, Switch } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'
import { LuMoon, LuSun } from 'react-icons/lu';

const ColorModeSwitch = () =>
{
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label whiteSpace="nowrap">{colorMode === "light" ? <LuSun /> : <LuMoon />}</Switch.Label>
    </Switch.Root>
    </HStack>
  )
}

export default ColorModeSwitch