function withAuth(req, res, next) {
    if (!req.session.user_id || typeof req.session.user_id !== 'number') {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;