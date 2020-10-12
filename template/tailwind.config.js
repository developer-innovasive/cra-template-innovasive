const configs = require('innovasive-ui-react/src/innovasive-ui-tailwind.config')

module.exports = {
  future: {
    ...configs.future,
    ///
    /// Override future...
    ///
  },
  purge: {
    ...configs.purge,
    ///
    /// Override purge...
    ///
  },
  theme: {
    ...configs.theme,
    ///
    /// Override theme...
    ///
    extend: {
      ///
      /// Extend...
      ///
    },
  },
  variants: {
    ...configs.variants,
    ///
    /// Override variants...
    ///
  },
}
