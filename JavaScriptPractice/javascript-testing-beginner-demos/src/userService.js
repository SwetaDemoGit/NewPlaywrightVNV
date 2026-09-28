function getUserName(userService) {
    const user = userService.getUser();

    return user.name;
}

module.exports = {
    getUserName
};
