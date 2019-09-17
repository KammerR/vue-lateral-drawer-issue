export default {
  getMenu(app) {
    return [
      {
        text: 'index',
        to: '/',
        icon: 'mdi-home'
      },
      {
        text: 'inspire',
        icon: 'mdi-monitor-dashboard',
        to: '/inspire'
      }
    ]
  }
}
