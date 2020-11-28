/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Gallery from '../client/src/components/App.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import Mosaic from '../client/src/components/Mosaic.jsx';
import data from './testData.js';

describe('App Component Test Suite', function() {

  it(`loads components on page load`, () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Gallery).length).toBe(1);
  })

  it(`does not load modals on page load`, () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Carousel).length).toBe(0);
    expect(wrapper.find(Mosaic).length).toBe(0);
  })

  it(`loads carousel modal on click`, () => {
    const wrapper = mount(<App />).setState(data.state12).setState({showCarousel: true});
    expect(wrapper.find(Carousel).length).toBe(1);
  })

  it(`loads mosaic modal on click`, () => {
    const wrapper = mount(<App />).setState(data.state12).setState({showMosaic: true});
    expect(wrapper.find(Mosaic).length).toBe(1);
  })

  it(`mosaic modal loads correct number of pictures on load`, () => {
    const wrapper12 = mount(<App />).setState(data.state12).setState({showMosaic: true});
    expect(wrapper12.find(Mosaic).find('img').length).toEqual(12);

    const wrapper8 = mount(<App />).setState(data.state8).setState({showMosaic: true});
    expect(wrapper8.find(Mosaic).find('img').length).toEqual(8);

    const wrapper7 = mount(<App />).setState(data.state7).setState({showMosaic: true});
    expect(wrapper7.find(Mosaic).find('img').length).toEqual(7);
  })

  it(`carousel modal only loads one image on load`, () => {
    //Four img tag on page, so each number should be +4
    const wrapper12 = mount(<App />).setState(data.state12).setState({showCarousel: true});
    expect(wrapper12.find(Carousel).find('img').length).toEqual(5);
  })
});