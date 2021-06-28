import React from 'react';
import { Story, Meta } from '@storybook/react';

import NavBar, { INavbar, NavItem } from '../components/shared/navbar';

export default {
    title: 'Example/Nav',
    component: NavBar,
    argTypes: {
        items: {
            control: "array",
        },
    },
  } as Meta;

const Template: Story<INavbar> = (args) => <NavBar {...args} />;

const thenavItem: NavItem = {
    route: "/Home",
    navItem: "",
    display: true,
}

export const LoggedIn = Template.bind({});
LoggedIn.args = {items: [thenavItem]};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};