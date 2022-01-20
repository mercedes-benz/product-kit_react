import { createTheme } from "@mui/material/styles"

const primaryColor = '#061A38'
const secondaryColor = '#FA3C78'
const primaryButtonColor = '#1B4E8E'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    },
    typography: {
        color: primaryColor,
        fontFamily: 'Source Sans Pro',
        fontSize: 18,
        body1: {
            fontSize: 18,
            letterSpacing: '0.5px'
        },
        body2: {
            fontSize: 16,
            letterSpacing: '0.25px',
            lineHeight: '24px',
            opacity: 0.74
        },
        h1: {
            fontSize: '64px',
            fontWeight: '300',
            marginBottom: '0',
            textTransform: 'uppercase',
            letterSpacing: '-0.1px'
        },
        h2: {
            fontWeight: 'normal',
            fontSize: '34px',
            marginBottom: '21px'
        },
        h3: {
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '0.25px',
            color: secondaryColor,
            marginBottom: '24px'
        },
        h4: {
            fontWeight: 'normal',
            fontSize: '34px',
            opacity: 0.87,
            letterSpacing: '0.1px'
        },
        h5: {
            fontWeight: 'normal',
            fontSize: '24px',
            opacity: 0.87,
            letterSpacing: '0.15px'
        },
        h6: {
            fontSize: '18px',
            letterSpacing: '0.22px',
            color: '#FFFFFF',
            lineHeight: '20px'
        },
        overline: {
            fontSize: '14px',
            letterSpacing: '1.5px',
            fontWeight: 'bold',
            marginBottom: '5px',
            textTransform: 'uppercase',
            color: '#FA3C78'
        },
        caption: {
            opacity: 0.74,
            fontSize: '12px',
            letterSpacing: '0.4px',
            lineHeight: '16px'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '.Mui-selected': {
                    fontWeight: 'bold',
                    color: secondaryColor
                }
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: primaryButtonColor
            },
            outlined: {
                fontSize: '16px',
                letterSpacing: '1.25px',
                padding: '10px 16px',
                lineHeight: '16px'
            },
            outlinedPrimary: {
                color: primaryButtonColor,
                border: '1px solid ' + primaryButtonColor,
            },
            textPrimary: {
                fontSize: '16px',
                color: primaryButtonColor
            },
            root: {
                borderRadius: 0,
                minWidth: '141px'
            },
           text: {
                textTransform: 'none'
            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: '818px'
            }
        },
        MuiDialogTitle: {
            root: {
                backgroundColor: primaryColor,
                color: "#FFFFFF"
            }
        },
        MuiDialogContentText: {
            root: {
                color: primaryColor
            }
        },
        MuiDialogActions: {
            root: {
                padding: '24px 36px 24px 36px'
            }
        },
        MuiFormControlLabel: {
            root: {
                alignItems: 'flex-start',
                marginTop: '9px'
            }
        },
        MuiToolbar: {
            root: {
                height: '100%'
            }
        },
        MuiTabs: {
            root: {
                height: '100%'
            },
            flexContainer: {
                height: '100%'
            },
            indicator: {
                height: '3px'
            }
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                height: '100%',
                minWidth: '0px',
                letterSpacing: '0.5px'
            },
            textColorInherit: {
                opacity: 1
            }
        },
        MuiCard: {
            root: {
                backgroundColor: primaryColor,
                color: '#FFFFFF',
                height: '447px',
                borderRadius: '5px 100px 5px 100px'
            }
        },
        MuiAccordionDetails: {
            root: {
                backgroundColor: '#DDDDDD',
                color: primaryColor,
                opacity: 0.74
            }
        }
    }
})

export default theme;