import React, { useState } from "react";
import { Section, Title, FaqList, FaqItem, Question, Answer, Toggle } from "./styles";
import title from '../../images/faq-title.png';
import { Container } from '../Container';
import { questions } from "./questions";
import toggle from '../../images/faq-toggle.svg';

const Faq = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenItem = id => {
        if (selectedItem === id) {
            setSelectedItem(null)
        } else {
            setSelectedItem(id)
        }
    }

    return (
        <Section id="faq">
            <Container>
                <Title src={title} />
                <FaqList>
                    {
                        questions.map((item, index) => (
                            <FaqItem>
                                <Question>
                                    <p onClick={() => handleOpenItem(index)}>{item.question}</p>
                                    <Toggle
                                        src={toggle}
                                        open={selectedItem === index}
                                        onClick={() => handleOpenItem(index)}
                                    />
                                </Question>
                                <Answer open={selectedItem === index}>
                                    {item.answer()}
                                </Answer>
                            </FaqItem>
                        )
                        )
                    }
                </FaqList>
            </Container>
        </Section >
    )
}

export default Faq;
