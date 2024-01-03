const toDo = require("../models/Cryptid");

const toggleToDoStatus = async (req, res) => {
    const cryptid = await cryptid.findById(req.params.id)
    cryptid.complete = !cryptid.complete
    cryptid.save()
    res.json()
};

exports.toggleToDoStatus = toggleToDoStatus;