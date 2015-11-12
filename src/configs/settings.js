/**
 * Target: 
 * 1. Easy set to make the accounts work.
 * 2. Customize to separate sites.
 * 3. Icon customization?
 */

// Account name
const settings = {
  // Default account name.
  default: {
    username: 'fuyushimoya'
  },

  // Sites with account to link 
  'github': {},
  'stackoverflow': {},
  'linkedin': {}  
};

Object.keys(settings).forEach((site) => {
  if (typeof settings[site].username === 'undefined') {
    settings[site].username = settings.default.username;
  }
})

export default settings;