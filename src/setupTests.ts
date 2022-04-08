/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // there is no official adapter for v17

configure({ adapter: new Adapter() });

export default {}
