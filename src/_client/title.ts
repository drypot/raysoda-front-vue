import { useConfig } from './global'

export function pageTitle(s?: string) {
    const config = useConfig()
    if (s) {
        return config.appName + ' - ' + s
    }
    return config.appName
}
