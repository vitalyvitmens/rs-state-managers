import { Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ComponentWithSuspense } from '../../components/ComponentWithSuspense/ComponentWithSuspense'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import { Button, Center, Container, Group } from '@mantine/core'
import { AvatarMT } from '../../components/Mantine/AvatarMT.tsx/AvatarMT'

export const Navigation = () => {
  const { logOut, isLoading, isError } = useAuth()
  const handleLogout = () => logOut(() => {})

  if (isLoading || isError) {
    return <Stylizloader />
  }

  return (
    <Container>
      <Group justify="space-between">
        <Button
          m={8}
          size="sm"
          radius={15}
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <AvatarMT size={50} p={5}/>
      </Group>
      <Center>
        <Container
          p={8}
          w="100%"
          bg="bisque"
          style={{
            display: 'flex',
            border: '2px solid #FFC94C',
            borderRadius: '10px',
            boxShadow: '-5px -4px 10px black',
          }}
        >
          <ComponentWithSuspense component={Outlet} />
        </Container>
      </Center>
    </Container>
  )
}
