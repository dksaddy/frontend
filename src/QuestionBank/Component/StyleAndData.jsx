const department = [
    "CSE", "EEE", "CE", "BSDS"
]

const trimester = [
    "Fall", "Spring", "Summer"
]

const currentYear = new Date().getFullYear();
const year = [
    String(currentYear), String(currentYear - 1), String(currentYear - 2), String(currentYear - 3)
]

const uploadBarStyle = {
    border: '2px dashed',
    width: '70%',
    marginLeft: '15%',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2%',
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
    borderRadius: '4px',
};


export {
    department,
    trimester,
    year,
    uploadBarStyle,
    modalStyle,
};