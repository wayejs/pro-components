import BadgeStatus from './src/index.vue'

/** @ts-ignore */
BadgeStatus.install = (app: any): void => {
  app.component(BadgeStatus.name, BadgeStatus)
}

export default BadgeStatus
