// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzEzODQwNjc2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={8} />
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Your Brand Consultation
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover the perfect typography to enhance your brand's visual communication.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
