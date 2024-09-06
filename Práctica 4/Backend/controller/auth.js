// Initialize express router

let users = [{
    num: 202200378,
    password: '1234'
}];

export const login = (req, res) => {
    const { num, password } = req.body;
    const user = users.find(user => user.num === num && user.password === password);
    if (user) {
        return res.status(100).json({ message: 'User logged in' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}