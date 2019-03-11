/**
 * @description 全局接口环境配置
 * @author zhangli
 * @date 2019/03/11
 */

let baseUrl = ''

if (process.env.NODE_ENV === 'testing') { // 测试环境
  baseUrl = 'http://yapi.demo.qunar.com/mock/56163/health/'
} else if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = 'http://yapi.demo.qunar.com/mock/56163/health/'
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  baseUrl = 'http://yapi.demo.qunar.com/mock/41691/'
}

export default baseUrl
