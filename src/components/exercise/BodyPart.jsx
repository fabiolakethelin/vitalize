import { Container, BodyPartCard } from './BodyPart.style';
import { IoIosFitness } from 'react-icons/io'

export const BodyPart = ({item}) => {

  return (
    <Container>
      <BodyPartCard>
        <IoIosFitness />
        {item}
      </BodyPartCard>
    </Container>
  )
}

export default BodyPart;
