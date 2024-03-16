import { useState } from 'react'
import todoLogo from '../../assets/todo.png'
import { BgImageMT } from '../../components/Mantine/BgImageMT.tsx/BgImageMT'
import {
  Button,
  Center,
  Container,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'

export const HomePage = () => {
  const [count, setCount] = useState(0)
  const theme = useMantineTheme()
  const colorGreen = theme.colors[theme.primaryColor][1]
  const colorYellow = theme.colors[theme.primaryColor][2]
  const colorLightOrange = theme.colors[theme.primaryColor][3]
  const colorBrown = theme.colors[theme.primaryColor][4]
  const colorBlue = theme.colors[theme.primaryColor][5]
  const colorRed = theme.colors[theme.primaryColor][7]
  const textShadowMD = theme.shadows.md

  return (
    <Container>
      <BgImageMT
        m={10}
        h={180}
        p="35px 0px 0px 30px"
        title="Redux scheme"
        c="#FF0000"
        src="../../../public/redux_1.1.jpg"
      />
      <BgImageMT
        m={10}
        h={180}
        p="0 0px 0px 50px"
        title="Redux scheme"
        c="#FF0000"
        src="../../../public/redux_1.2.jpg"
      />
      <Center>
        <a
          href="https://github.com/vitalyvitmens/rs-react-todo"
          target="_blank"
        >
          <img src={todoLogo} alt="ToDo" style={{ width: '230px' }} />
        </a>
      </Center>
      <Container c={colorYellow} ta="center">
        <Title c={colorLightOrange} style={{ textShadow: textShadowMD }}>
          Hello, Mantine!
        </Title>
        <Text c={colorLightOrange}>
          Your primary color is {colorLightOrange}
        </Text>
        <Button color="primary">This button has the todo color</Button>
      </Container>

      <Center>
        <Title size="4rem" c={colorBlue}>
          ToDo
        </Title>
      </Center>
      <Center color={colorRed}>
        <Button
          variant="default"
          bg={colorGreen}
          onClick={() => setCount((count) => count + 1)}
        >
          <Text c={colorBrown} size="1.5rem" fw={700}>
            count is:
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.75rem',
                paddingLeft: '1rem',
                color: colorRed,
              }}
            >
              {count}
            </span>
          </Text>
        </Button>
      </Center>
      <Container
        fw={800}
        ta="center"
        size="responsive"
        bg="var(--mantine-color-blue-light)"
        c={colorYellow}
      >
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100} p={20} mt={-15}>
        <Text
          c={colorRed}
          size="xl"
          fw={800}
          fs="italic"
          td="underline"
          ta="center"
        >
          Click on the Vite and React logos to learn more
        </Text>
      </Center>
    </Container>
  )
}
