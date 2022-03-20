<!-- SPDX-License-Identifier: MIT --->

![Product Kit React Logo](./docs/images/productkit_react_github_logo.png)

[![license](https://img.shields.io/badge/license-MIT-38de03e?style=flat)](LICENSE)
![React](https://img.shields.io/badge/React-17.0.2-61DBFB.svg)
![MUI](https://img.shields.io/badge/MUI-5.3.0-3F51B5.svg)

Product Kit React provides a theme for Daimler TSS web frontends based on the material design framework MUI.

Feel free to open an [issue](https://github.com/mercedes-benz/product-kit_react/issues) or provide a pull request with the desired modifications.

## Examples
⚠️ //TODO//

## Installation
_Note that you must have node (with npm) installed._

Create a new React project and [install MUI](https://mui.com/getting-started/installation/)

```console
npx create-react-app my-app
cd my-app
npm install @mui/material @emotion/react @emotion/styled
```

Install the npm package from the root directory through:

```console
npm install @daimler/productkit-react
```

Product Kit React provides two themes:
- `themeCompact` is the default theme for creating compact web applications with body-max-widths and responsive margins.
- `themeWide` only uses large body-max-widths, so your application always uses most of the screen, regardless of the screen size. This is often used for web applications like dashboards.

Both themes include custom Daimler TSS colors, breakpoints, spacings, shapes and typography.

You can choose between those two themes and import the one that suits your use-case best alongside MUI's `ThemeProvider` and `CssBaseline`:

```javascript
//in App.js

import { ThemeProvider } from '@mui/material/styles';
import { themeCompact } from "@daimler/productkit-react/src/style/index"; //you may also use themeWide
import CssBaseline from '@mui/material/CssBaseline';
```

Now, add `ThemeProvider` with the imported theme as a wrapper for all your components and add `CssBaseline` as the first component inside of it. You may add the `enableColorScheme` prop to the latter if you wish to use dark mode. For example:

```javascript
// in App.js

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={themeCompact}>
                <CssBaseline enableColorScheme />
                <!-- Your components -->
            </ThemeProvider>
        );
    }
}
```

Your MUI components are now styled accordingly to the styleguide of Daimler TSS!

## Usage
⚠️ //TODO//

### Colors

### Spacing

### Container

### Typography

### Darkmode

### Elevation


## Contributing

We welcome any contributions.
If you want to contribute to this project, please read the [contributing guide](CONTRIBUTING.md).

## Code of Conduct

Please read our [Code of Conduct](https://github.com/Daimler/daimler-foss/blob/master/CODE_OF_CONDUCT.md) as it is our base for interaction.

## License

This project is licensed under the [MIT LICENSE](LICENSE).

## Provider Information

Please visit <https://www.daimler-tss.com/en/imprint/> for information on the provider.

Notice: Before you use the program in productive use, please take all necessary precautions,
e.g. testing and verifying the program with regard to your specific use.
The program was tested solely for our own use cases, which might differ from yours.
