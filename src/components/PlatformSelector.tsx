import usePlatforms from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from "@/store.ts";
import usePlatform from "@/hooks/usePlatform.ts";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatform = useGameQueryStore(s => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown/>{ selectedPlatform?.name || "Platforms" }
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            { data?.results.map(platform => <Menu.Item onClick={() => setSelectedPlatform(platform.id) } key={ platform.id } value={ platform.slug }>{ platform.name }</Menu.Item>) }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector