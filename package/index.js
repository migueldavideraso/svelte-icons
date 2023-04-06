

const initialValues = {
	size: 15,
	strokeSize: 3,
	stroke: '#2c3e50',
}


export const setInitialValues = ({ size, strokeSize, stroke }) => {

	initialValues.size = size || initialValues.size
	initialValues.stroke = stroke || initialValues.stroke
	initialValues.strokeSize = strokeSize || initialValues.strokeSize
}

export const getInitialValues = () => {
	return { ...initialValues }
}

