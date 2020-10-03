const { createMuiTheme, makeStyles } = require("@material-ui/core");


// Изменение элементов глобально, обращение к корневым стилям
export const themeSearchBlock = createMuiTheme({
    overrides: {
        MuiInputBase: {
            input: {
                width: '320px',
                textAlign: 'center',
            }
        },
    },
});

// Созданный стиль для компоненты
export const useSearchBlockStyles = makeStyles({
    mainBlock: {
        padding: '100px',
        margin: '10%',
        borderRadius: '20px',
        border: '1px solid black',
    },
    textN: {
        color: "#f50057",
    },
    searchBlock: {
        marginTop: '4rem',
        marginBottom: '4rem'
    },
    serachButton: {
        marginLeft: '4rem',
    },
    nameCompany: {
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
        }
    },
    likePrimary: {
        width: "64px",
        height: "64px",
        '&:active': {
            color: "#f50057",
        }
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
    titleSearchBlock : {
        marginBottom: "50px"
    },
    footerSearchBlock: {
        borderRadius: "20px",
        marginTop: "20px",
        backgroundColor: "black",
        color: "#f50057",
        textAlign: "center",
    },
});