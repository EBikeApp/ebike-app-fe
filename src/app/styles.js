const homePageStyles = {
    container: {
        margin: sm => sm ? '-60px 120px 0px'  : '-60px 30px 0px' ,
        position: 'relative',
        zIndex: '12',
        minHeight: '400px',
    },
    sessionContainer: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '5px 20px',
        marginBottom: '10px',
        '& p': {
            fontSize: '12px',
        }
    },
    sessionTitle: {
        textAlign: 'center',
    }
};
export default homePageStyles;