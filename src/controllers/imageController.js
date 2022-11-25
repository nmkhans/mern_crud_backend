const uploadImage = async (req, res) => {
    const imageUrl = req.fileUrl;
    
    res.status(200).json({
        success: true,
        message: "Image successfully uploaded",
        imageUrl: imageUrl
    })
}

module.exports = uploadImage;