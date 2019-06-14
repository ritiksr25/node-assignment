module.exports.addUser = async (req, res) => {
    let { name, email, phone, address, designation, interests } = req.body;
    if (!name || !email || !interests) {
        res.status(400).json({ msg: 'Please enter name, email and interests' });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /[0-9]/;

    if (emailRegex.test(email)) {
        if (!phone || (phoneRegex.test(phone) && phone >= 6000000000 && phone <= 9999999999)) {

            let interest = interests.toLowerCase().split(', ');
            try {
                let user = await User.create({ name, email, phone, address, designation, interests: interest });
                res.status(200).json({ msg: 'User created Successfully!!', user });
            }
            catch (err) {
                res.status(500).json({ msg: 'Oops! Something went wrong.' });
            }
        }
        else {
            res.status(400).json({ msg: 'Please enter a valid contact no.' });
        }
    }
    else {
        res.status(400).json({ msg: 'Please enter a valid email address' });
    }
}

module.exports.updateUser = async (req, res) => {
    let { name, email, phone, address, designation, interests } = req.body;
    if (!name || !email || !interests) {
        res.status(400).json({ msg: 'Please enter name, email and interests' });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /[0-9]/;

    if (emailRegex.test(email)) {
        if (!phone || (phoneRegex.test(phone) && phone >= 6000000000 && phone <= 9999999999)) {
            let interest = interests.split(',' || ', ');
            try {
                let user = await User.updateOne({ _id: req.params.id }, { name, email, phone, address, designation, interest });
                if (user) {
                    res.status(200).json({ msg: 'User updated Successfully!!' });
                }
                else {
                    res.status(404).json({ msg: 'User not found!!' });
                }
            }
            catch (err) {
                res.status(500).json({ msg: 'Oops! Something went wrong.' });
            }
        }
        else {
            res.status(400).json({ msg: 'Please enter a valid contact no.' });
        }
    }
    else {
        res.status(400).json({ msg: 'Please enter a valid email address' });
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.id });
        console.log(user);
        if (user) {
            await User.deleteOne({ _id: req.params.id });
            res.status(200).json({ msg: 'User deleted Successfully!!' });
        }
        else {
            res.status(404).json({ msg: 'User not found!!' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' });
    }
}

module.exports.view = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.params.id });
        if (user) {
            res.status(200).json({ user });
        }
        else {
            res.status(404).json({ msg: 'No user found!!' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' });
    }
}

module.exports.allUsers = async (req, res) => {
    try {
        let users = await User.find({});
        if (users.length != 0) {
            res.status(200).json({ msg: 'Users: ', users });
        }
        else {
            res.status(404).json({ msg: 'No users found!!' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' });
    }
}

module.exports.comment = async (req, res) => {
    let by = req.params.by;
    let to = req.params.to;
    let comment = req.body.comment;

    if (!comment) {
        res.status(400).json({ msg: 'Please enter a comment!!' });
    }
    try {
        let Comments = await Comment.create({ by, to, comment });
        res.status(200).json({ msg: 'Commented!!', Comments });
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' });
    }
}

module.exports.viewComments = async (req, res) => {
    try {
        let comments = await Comment.find({ by: req.params.id });
        if (comments.length != 0) {
            res.status(200).json({ comments });
        }
        else {
            res.status(404).json({ msg: 'No comments found!!' });
        }
    }
    catch (err) {
        res.status(500).json({ msg: 'Oops! Something went wrong.' });
    }
}

