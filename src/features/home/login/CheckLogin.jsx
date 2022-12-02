import users from "../../../common/data/Users";

export const chekUser = (form) => {
    let userAuth = false;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].user === form.username &&
        users[i].password === form.password
      ) {
        userAuth = true;
      }
    }

    return userAuth;
  };

  