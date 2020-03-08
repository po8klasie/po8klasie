import React, {FC} from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import {RouteComponentProps} from "@reach/router";
import styled from "../styling/styled";
import Input, {InputWithAddon} from "../components/Input";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em;
`;
const GradeBox = styled.span`
    margin: 0 10px;
    padding: 5px 10px;
    border: 2px solid #BA97FF;
    border-radius: 3px;
`
const renderGrades = () => [2,3,4,5,6].map(grade => <GradeBox>{grade}</GradeBox>);
const InputSection = styled.div`
    padding: .8em 0;
    display: grid;
    grid-template-columns: 1.2em 0.7fr auto;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(242, 242, 242);
    grid-column-gap: 20px;
    margin: 10px 0px;
    i ~ span{
        display: flex;
        align-items:center;
        text-align:center;
    }
`;
const ExamInputSection = styled.div`
    padding: .8em 0;
    display: grid;
    grid-template-columns: 1.2em 0.7fr auto;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(242, 242, 242);
    grid-column-gap: 20px;
    margin: 10px 0px;
    span{
        display: flex;
        align-items:center;
    }
    input{
        width: 3em;
    }
`;
const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ExamInputWrapper = styled.div`
    
`;
const examCategories = [
    {
        name: 'Matematyka',
        icon: 'square_foot'
    }
]
const schoolSubjects = [
    {
        name: 'Język polski',
        icon: 'spellcheck'
    }
]
const Calculator: FC<RouteComponentProps> = () => {
    return (
        <Layout>
            <Container>
                <h1>Kalkulator punktów</h1>
                <Grid>
                    <div>
                        <h3>Świadectwo</h3>
                        {
                            schoolSubjects.map(subject => (
                                <InputSection>
                                    <FlexWrapper>
                                        <i className="material-icons">{subject.icon}</i>
                                    </FlexWrapper>

                                    <span>{subject.name}</span>
                                    <div>
                                        {renderGrades()}
                                    </div>
                                </InputSection>
                            ))
                        }
                    </div>
                    <div>
                        <h3>Egzamin</h3>
                        {
                            examCategories.map(category => (
                                <ExamInputSection>
                                    <FlexWrapper>
                                        <i className="material-icons">{category.icon}</i>
                                    </FlexWrapper>
                                    <span>{category.name}</span>
                                    <div>
                                        <ExamInputWrapper>
                                            <InputWithAddon addon={"%"} type={"number"} max={100} min={0} />
                                        </ExamInputWrapper>
                                    </div>
                                </ExamInputSection>
                            ))
                        }
                    </div>
                    <div>
                        <h3>Osiągnięcia</h3>
                        <p>Jeszcze nad tym pracujemy...</p>
                    </div>

                </Grid>
                <h3>Razem: 160 pkt</h3>
            </Container>
        </Layout>
    )
}

export default Calculator;