/* 3. Description:
You have a nested object of user settings:

const settings = {
  profile: {
    username: "alice",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false
      }
    }
  }
};
Task:
Write a function getSetting(obj, path) where path is a string like 'profile.preferences.notifications.email', and it returns the value at that path.
*/

const settings = {
  profile: {
    username: "alice",
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false
      }
    }
  }
};

function getSetting(obj, path) {
  const keys = path.split('.')
  let current = obj; 
  for (let key of keys) {
    if (current && current.hasOwnProperty(key)) {
      current = current[key]; 
    } else {
      return undefined;
    }
  }
  return current; 
}
console.log(getSetting(settings, 'profile.preferences.notifications'))
