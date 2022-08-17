import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';
import {configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {render} from "@testing-library/React";
import TodoInput from "../components/TodoInput";
import { Children } from 'react';
import {shallow}from'enzyme';



test('renders without crashing', () => {
    const div = document.createElement('div');
     //const {getByTestId} =render(<App />, div);
    const  {getByTestId} =render(<TodoInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should have input box in todoinput and their props is valid', () => {
    const wrap = shallow(<TodoInput />);
    expect(wrap.find('input').length).toEqual(1);
    expect(wrap.find('button').length).toEqual(1);
    expect(wrap.find("input").prop("onKeyPress")).toEqual(wrap.instance().handleSubmit);

});
//= (props = {})
