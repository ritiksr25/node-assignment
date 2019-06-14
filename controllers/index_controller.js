module.exports.index = (req, res) => {
    res.status(200).json({ msg: 'Welcome to the API!!' });
}

module.exports.coding = async (req, res) => {
    try {
        let users = await User.find({ interests: { $all: ['coding'] } });
        if (users.length != 0) {
            res.status(200).json({ msg: 'Users who love Coding', users });
        }
        else {
            res.status(404).json({ msg: 'No users found!!' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' })
    }
}