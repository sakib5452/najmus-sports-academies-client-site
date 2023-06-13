// upload image in IMGBB
export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token
        }`
    const response = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    return data
}