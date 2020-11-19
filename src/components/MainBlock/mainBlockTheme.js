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
});