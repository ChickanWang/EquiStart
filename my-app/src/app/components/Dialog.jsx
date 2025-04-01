import { useState } from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';

const DialoguePage = () => {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const dialogue = [
    { speaker: "Employee", text: "Hey, boss. We have some concerns about our DEI initiatives." },
    { speaker: "You", text: "Tell me more. What’s on your mind?" },
    { speaker: "Employee", text: "Some employees feel underrepresented in leadership roles." },
    { speaker: "You", text: "I see. Let’s discuss how we can address this." }
  ];

  const nextDialogue = () => {
    if (dialogueIndex < dialogue.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    }
  };

  return (
    <Box p={8} maxW="600px" mx="auto" bg="gray.100" rounded="lg" shadow="md">
      <VStack spacing={4}>
        <Text fontSize="lg" fontWeight="bold">{dialogue[dialogueIndex].speaker}</Text>
        <Text fontSize="md" p={4} bg="white" rounded="md" shadow="sm">{dialogue[dialogueIndex].text}</Text>
        <HStack>
          <Button colorScheme="blue" onClick={nextDialogue} isDisabled={dialogueIndex === dialogue.length - 1}>
            Next
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default DialoguePage;
