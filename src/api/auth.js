
// become a host
export const becomeHost = email => {
    const currentUser = {
        role: 'host',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
}




// Get role
export const getStatus = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const user = await response.json()
    return user?.status
}