function getUsername(userService) {
    const user = userService.getUser();
    return user.name;
}

function registerUser(userService, emailService) {
    const user = userService.createUser();
    emailService.sendWelcomeEmail(user.email);
    return user;
}

module.exports = {
    getUsername,
    registerUser
};
