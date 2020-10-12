import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount, createShallow } from "@material-ui/core/test-utils";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = createShallow();
global.render = render;
global.mount = createMount();

// console.error = message => {
//     throw new Error (message)
// };