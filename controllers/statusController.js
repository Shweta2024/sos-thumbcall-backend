const Status = require('../models/statusModel')


const addStatus = async(req, res) => {
    try {
        const status = new Status({
            email: req.body.email,
            status: 'Processing'
        })
        await status.save()
        res.json({sucess: true, status: status})
    }
    catch (error) {
        res.json({sucess: false})
    }
}


const updateStatus = async(req, res) => {
    try {
        const email = req.body.email

        const updatedStatus = await Status.findOneAndUpdate(
            { email: email },
            { $set: { status: 'completed' } },
            { new: true } 
        )

        if (!updatedStatus) {
            return res.json({ sucess: false})
        }

        res.json({ sucess: true, status: updatedStatus })
    }
    catch (error) {
        res.json({sucess: false})
    }
}


module.exports = {
    addStatus,
    updateStatus
}