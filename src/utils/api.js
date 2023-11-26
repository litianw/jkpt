import {_get} from './http'

// let baseurl = '/oms-gzp/api';

//获得登录人员的信息
export function getLoginUserAllInfo() {
    return _get('/auth/user/getLoginUserAllInfo');
}

//获得用户拥有的菜单
export function getMenuOfUser(userId) {
    return _get(`/auth/user/getMenuOfUser/${userId}`);
}

//获得统计页数据
export function getTjsj() {
    return _get('/getTjsj');
}
//获得重复投诉
export function getCfts() {
    return _get('/getCfts');
}
//获得多人多次
export function getDrdc() {
    return _get('/getDrdc');
}
//获得敏感词筛查
export function getMgcsc() {
    return _get('/getMgcsc');
}
//获得违纪统计
export function getWjtj() {
    return _get('/getWjtj');
}
