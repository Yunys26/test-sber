
const { makeStyles, createMuiTheme } = require("@material-ui/core");

export const themeTabs = createMuiTheme({
    overrides: {
        MuiTab: {
            root: {
                fontSize: '20px',
            }
        },
        MuiCssBaseline: {
            '@global': {
                a: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#f50057',
                    textDecoration: 'none',
                    '&:hover': {
                        color: 'black',
                    }
                },
            },
        },
    },
})

export const useTabsBlockStyle = makeStyles({
    nameCompany: {
        marginBottom: "30px",
        fontSize: "41px",
        padding: "10px",
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        '&:hover': {
            transition: "0.5s",
            backgroundColor: "white",
            color: "Black",
        }
    },
    workBlock: {
        borderRadius: "20px",
        backgroundColor: "#e8e8e8",
        alignItems: "center",
        padding: "40px",
    },
    workBlockLogo: {
        width: "400px",
        height: "160px",
    },
    likeBlack: {
        width: "64px",
        height: "64px",
        '&:active': {
            color: "#f50057",
        },
    },
    likePrimary: {
        width: "64px",
        height: "64px",
        '&:active': {
            color: "#f50057",
        },
    },
    blockContent: {
        marginBottom: "40px",
    },
    headerSearchBlock: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        textAlign: "center",
        marginBottom: "20px",
    },
    titleSearchBlock: {
        marginBottom: "50px"
    },
    footerSearchBlock: {
        borderRadius: "20px",
        marginTop: "20px",
        backgroundColor: "black",
        color: "#f50057",
        textAlign: "center",
    },
    paperTabs: {
        padding: '5px',
        backgroundColor: '#202020',
        borderRadius: '20px',
        marginBottom: '20px',
        border: 'solid 1px black',
        color: 'white',
        transition: '0.5s',
        '&:hover': {
            transition: "0.8s",
            backgroundColor: "#f50057",
            color: "black",
        },
    },
    tabNavLink: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            color: '#202020',
        },
    },
    textTitleTabs: {
        textAlign: 'center',
    },
    statusLoadingText: {
        fontWeight: 'bold',
        marginTop: '20px',
        color: '#f50057',
    }
});