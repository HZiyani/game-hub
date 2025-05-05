import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} width="300px" overflow="hidden">
      <Skeleton height="200px"/>
      <Card.Body padding={4}>
        <SkeletonText />
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  )
}

export default GameCardSkeleton