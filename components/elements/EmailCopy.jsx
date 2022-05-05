import { Link, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

const EmailCopy = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");
  const email = "hellomariandev@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(<IoCopy size='24px' />);
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(<IoCopyOutline size='24px' />);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <HStack>
      <Link fontSize={{ base: "md", md: "lg" }} rounded='5px' fontWeight={500}>
        <Text
          onClick={copyEmail}
          onMouseOver={showInstruction}
          onMouseOut={hideInstruction}>
          {email}
        </Text>
      </Link>
      <Text fontWeight={600} >
        {instructions} {copySuccessMessage}{" "}
      </Text>
    </HStack>
  );
};

export default EmailCopy;
