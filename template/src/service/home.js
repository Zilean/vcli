import fetch from "./xhr/fetch";

/**
 * 微信绑定
 * @param
 */
export const wxBinding = param => fetch("POST", "/wx/v1/binding", param);

/**
 * 发送短信验证码
 * @param
 */
export const sendWxVerifyCode = param =>
  fetch("POST", "/wx/v1/verification", param);

/**
 * active-controller : 活动相关共用的接口 / 砍价活动页面 / 首页banner图：3
 * @param
 */
export const getActives = param => fetch("GET", "/wx/v1/active/actives", param);

/**
 * 产品分享接口
 * @param
 */
export const postProdShare = param =>
  fetch("POST", "/wx/v1/binding/share", param);
