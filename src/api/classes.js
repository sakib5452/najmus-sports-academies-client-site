export const addClasses = async classesData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classesData),
    })

    const data = await response.json()
    return data
}