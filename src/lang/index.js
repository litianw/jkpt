import Vue from "vue"
import VueI18n from "vue-i18n"
import locale from "element-ui/lib/locale";
import elZH from "element-ui/lib/locale/lang/zh-CN";
import elEN from "element-ui/lib/locale/lang/en";
import cZH from "./zh"
import cEN from "./en"

Vue.use(VueI18n)   //全局注册国际化包
const i18n = new VueI18n({
    //指定语言类型  zh中文 en 英文
    locale: "zh",
    messages: {
        //英文环境数据
        en: {
            ...elEN,
            ...cEN
        },
        //中文环境数据
        zh: {
            ...elZH,
            ...cZH
        }
    }
})
//配置语言转换关系
locale.i18n((key, value) => i18n.t(key, value))
export default i18n;

