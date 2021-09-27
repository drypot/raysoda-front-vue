
export type Config = {
  appName: string
  appNamel: string
  appDesc: string

  mainUrl: string
  uploadUrl: string
}

// @ts-ignore
export const config: Config = _config

export function pageTitle(s: string = '') {
  if (s) {
    return s + ' - ' + config.appName
  }
  return config.appName
}
