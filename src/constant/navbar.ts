export interface NavbarMenuItems {
  text: string;
  href: string;
}

export const NAVBAR_MENU: NavbarMenuItems[] = [
  {
    text: 'Upload',
    href: '/',
  },
  {
    text: 'API',
    href: '/api',
  },
  {
    text: 'List',
    href: '/list',
  },
];
