import { Avatar, Box, Group } from '@mantine/core'

interface AvatarMTProps {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  m?: string | number
  p?: string | number
  variant?: string
  radius?: string | number
  size?: string | number
  color?: string
  src?: string
  alt?: string
}
export const AvatarMT: React.FC<AvatarMTProps> = ({
  justify = 'center',
  m = 'none',
  p = 'none',
  variant = 'transparent',
  radius = '50%',
  size = '100px',
  color = 'blue',
  src = 'src/assets/sadSmiley.jpg',
  alt = "it's me",
}) => {
  return (
    <Group justify={justify}>
      <Box m={m} p={p}>
        <Avatar
          variant={variant}
          radius={radius}
          size={size}
          color={color}
          src={src}
          alt={alt}
        />
      </Box>
    </Group>
  )
}
