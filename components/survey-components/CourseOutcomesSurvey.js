import { useContext } from 'react';
import {
    List,
    ListItem,
    Text,
    VStack,
    HStack,
    RadioGroup,
    Radio,
    Center,
    Divider,
} from "@chakra-ui/react";

import { PageContext } from './SurveyPageData';
const CourseOutcomesSurvey = ({ outcomeSurvey, handleChange }) => {
    const renderRadios = Array.from(Array(5), (x, index) => {
        return <Radio key={index} value={index + 1}>{index + 1}</Radio>
    });
    return (
        <>
            <Text fontWeight="bold">
                For each of the course outcomes, rate each from 1 to 5 in terms of
        agreement with your level of agreement.{" "}
            </Text>
            <Center
                m="2em"
                padding="2em"
                bg="#edf2f7"
                w="80%"
            >
                <List padding="1em" w="90%" bg="white" borderRadius="8px">
                    {outcomeSurvey.map((outcome, idx) => {
                        return (
                            <ListItem mb="1em" key={idx}>
                                { (idx > 0) ? <Divider /> : null}
                                <VStack>
                                    <Text mt="1em">{outcome.outcome}</Text>
                                    <RadioGroup
                                        value={outcome.rating}
                                        onChange={(e) =>
                                            handleChange(e, idx, "Outcomes")
                                        }
                                    >
                                        <HStack spacing={10}>
                                            {renderRadios}
                                        </HStack>
                                    </RadioGroup>
                                </VStack>
                            </ListItem>
                        );
                    })}
                </List>
            </Center>

        </>
    )

}

export default CourseOutcomesSurvey;