interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Sales Manager', 'Sales Representative', 'Marketing Manager'],
  tenantName: 'Company',
  applicationName: 'RevQuan',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View company information', 'View user profiles', 'View products', 'View services'],
  ownerAbilities: [
    'Manage stages',
    'Manage pipelines',
    'Manage notes',
    'Manage appointments',
    'Manage tasks',
    'Manage services',
    'Manage products',
    'Manage activities',
    'Manage deals',
    'Manage contacts',
    'Manage users',
    'Manage companies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/7f80f4ff-f78b-4cfc-bac4-7828400d72d8',
};
