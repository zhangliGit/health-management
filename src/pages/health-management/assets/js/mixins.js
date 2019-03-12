const mixins = {
  filters: {
    showDay (d) {
      const day = ['一', '二', '三', '四', '五', '六', '日']
      let dayStr = '周'
      d.forEach(item => {
        dayStr += `${day[parseInt(item) - 1]},`
      })
      return dayStr.substring(0, dayStr.length - 1)
    }
  }
}

export default mixins
