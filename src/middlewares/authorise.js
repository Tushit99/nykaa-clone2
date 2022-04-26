// permittedRoles = ["seller", "admin"]

const authorise = (req, res, next) => {
    // getting the user;
    const user = req.user;
    let isPermitted = false;

    // checking if he has permitted role
    if (user.isSeller || user.isAdmin) {
      isPermitted = true;
    }

    // if permitted, he can go ahead
    if (isPermitted) {
      return next();
    } else {
      return res
        .status(401)
        .send({ message: 'You are not authorised to perform this operation' });
    }
};

module.exports = authorise;