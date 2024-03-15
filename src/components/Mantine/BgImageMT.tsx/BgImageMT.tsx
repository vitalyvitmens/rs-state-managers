import { BackgroundImage, Center, Text, Box, Group } from '@mantine/core'

interface BgImageMTProps {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  m?: string | number
  p?: string | number
  h?: string | number
  w?: string | number
  src?: string
  radius?: string | number
  c?: string
  title?: string
}

export const BgImageMT: React.FC<BgImageMTProps> = ({
  justify = 'center',
  m = 'none',
  p = 'md',
  h = 150,
  w = 300,
  src = 'https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1710374400&semt=ais',
  radius = '15px',
  c = 'white',
  title = 'Компонент BgImageMT можно использовать для добавления любого контента на изображение.',
}) => {
  return (
    <Group justify={justify}>
      <Box maw={300} mx="auto" m={m}>
        <BackgroundImage src={src} radius={radius} h={h} w={w}>
          <Center p={p}>
            <Text c={c}>{title}</Text>
          </Center>
        </BackgroundImage>
      </Box>
    </Group>
  )
}
