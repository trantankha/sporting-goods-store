const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{
                ...style,
                display: "block",
                padding: "5px",
                zIndex: 1,
                right: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
            }}
            onClick={onClick}
        >
            <i className="fa fa-angle-double-right fa-xl"></i>
        </button>
    );
}
export default NextArrow;