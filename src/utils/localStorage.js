/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-09 09:13:55
 * @LastEditTime: 2020-06-09 09:19:49
 */ 
export function getStorage(key) {
  if (key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}
export function setStorage(key, value) {
  if (key) {
    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

export function removeStorage(key) {
  if (key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

// 慎用，你会把别人的也清除
export function clearStorage() {
  try {
    localStorage.clear();
  } catch (e) {
    return false;
  }
}
