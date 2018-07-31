const API_ENV = process.env.VUE_APP_API;
const localApi = "/api/";
const devApi = "http://mcwp.test.zhudb.com/backend";
const preApi =
  window.location.protocol + "//" + window.location.host + "/backend";
const proApi =
  window.location.protocol + "//" + window.location.host + "/backend";
const api = {
  local: localApi,
  dev: devApi,
  pre: preApi,
  prod: proApi
};

// 基本配置
export const Config = {
  api: {
    url: api[API_ENV],
    success: 0 || "0"
  },
  baseRouter: "/",
  test: process.env.NODE_ENV === "development" ? 1 : 0,
  store: {
    token: `USER_TOKEN_${API_ENV}`
  },
  constants: {
    cookies: `DSWP_COOKIES_${process.env.NODE_ENV}`
  }
};

// 设置页面Title
export const setPageTitle = title => {
  document.title = title;
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  // 替换成站标favicon路径或者任意存在的较小的图片即可
  // iframe.setAttribute('src', favicon)
  const iframeCallback = function() {
    setTimeout(function() {
      iframe.removeEventListener("load", iframeCallback);
      document.body.removeChild(iframe);
    }, 0);
  };
  iframe.addEventListener("load", iframeCallback);
  document.body.appendChild(iframe);
};

/**
 * 深拷贝
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export const deepCopy = (obj, cache = []) => {
  // 不存在或非对象
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const hit = find(cache, c => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // 放入缓存中
  cache.push({
    original: obj,
    copy
  });

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy;
};

/**
 * 获取地址栏url后面的参数
 * @param {name} 参数名
 * @return {参数值}
 */
export const getQueryParams = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

/**
 * 获取随机字符串
 * @param 随机字符串
 */
export const randomStr = size => {
  const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let state = "";
  for (let i = 0; i < size; i++) {
    let id = Math.ceil(Math.random() * 35);
    state += chars[id];
  }
  return state;
};

/**
 * 判断手机号码
 * @param {name} 参数名
 * @return {参数值}
 */
export const isTelephone = phone => {
  let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  phone = phone.replace(/[\u202D+\u202C+\s+]/g, "");
  if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
};

/**
 * 千位分隔符
 */
export const thousandBitSeparator = num => {
  num = num.toString();
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  let integer = "";
  let decimal = "";
  if (num.indexOf(".") > -1) {
    integer = num.split(".")[0];
    decimal = num.split(".")[1];
    return (integer + "").replace(reg, "$&,") + "." + decimal;
  } else {
    integer = num;
    return (integer + "").replace(reg, "$&,") + "." + "00";
  }
};
