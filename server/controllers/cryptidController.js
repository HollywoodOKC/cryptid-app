const cryptidCon = require("../models/Cryptid");

const toggleCryptidStatus = async (req, res) => {
    const cryptid = await cryptidCon.findById(req.params.id)
    cryptid.complete = !cryptid.complete
    cryptid.save()
    res.json()
};

exports.toggleCryptidStatus = toggleCryptidStatus;