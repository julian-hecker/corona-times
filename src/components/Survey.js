import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import './Survey.scss';


class Survey extends React.Component {
    render() {
        return (
            <Form className="survey">
                <FormGroup>
                    <Label for="exampleSelect">Have you or anyone in which you have been in close proximity with travelled internationally in the last two months? </Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>No</option>
                        <option>Yes</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Are you experincing any symptoms? </Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>No</option>
                        <option>Yes</option>
                    </Input>
                </FormGroup>

                <FormGroup>Please select all regions you've been to recently.
                    <Label check>
                        <Input type="checkbox" />{' '}Africa</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}Asia</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}The Caribbean</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}Europe</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}North America</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}South America</Label>
                    <Label check>
                        <Input type="checkbox" />{' '}Oceania</Label>
                </FormGroup>
                <Button 
                    className="btn btn-warning"
                    type="submit"
                >Submit</Button>

            </Form>

        );
    }
}

export default Survey;
