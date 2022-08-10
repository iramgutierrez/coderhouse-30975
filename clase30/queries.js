const findOrCreateUser = (data) => {
  return User
    .findById(data.id)
    .then(user => {
      if (!user) {
        return User.save(data)
      }

      return user
    })
}